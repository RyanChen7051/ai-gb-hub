/* AI GB-TEAM 版本自愈守卫 v3 —— 解决「发布了新版，页面还是几小时前那版」
 *
 * 覆盖四种「看不见新版本」的真实成因：
 *   1. 标签页被浏览器冻结（bfcache）后还原 —— 不发任何请求，内存里的旧 DOM 直接复活；
 *      SW、cache:'no-store'、页面版本检测全都不会执行。→ 监听 pageshow.persisted。
 *   2. 页面一直开着没重新加载 —— 首屏之后再也没有校验过版本。→ 加载/回到前台时校验。
 *   3. HTML 从缓存里拿到旧副本，但 version.json 已是新的（本页 build 与线上不一致）。
 *      → 加载时立刻比对 <meta name="gb-build">，不一致就带查询串强刷。
 *   4. 网络恢复后仍是旧版。→ 监听 online。
 *
 * 强刷方式：给 URL 加 ?_gb=<build>，HTTP 缓存与 SW 缓存的键都变了，
 * 不可能再命中旧副本（普通 location.reload() 会被 HTTP 缓存接住，这就是坑）。
 *
 * 防循环：同一页面 + 同一 build，每个会话只自动刷一次（sessionStorage 记时间戳）。
 * 版本源：从脚本自身 URL 推出上一级 version.json —— 全站只认总部一个版本号。
 *
 * 用法（无需参数，路径自动推导）：
 *   <script src="../shared/gb-bfcache-heal.js"></script>
 * 配合页面 head 里的：
 *   <meta name="gb-build" content="20261128i">
 */
(function () {
  var s = document.currentScript;
  if (!s || !s.src) {
    var all = document.querySelectorAll('script[src*="gb-bfcache-heal"]');
    s = all[all.length - 1];
  }
  if (!s || !s.src) return;

  var verURL;
  try {
    var su = new URL(s.src, location.href);
    verURL = su.pathname.replace(/\/shared\/[^\/]+$/, '/version.json');
  } catch (e) { return; }
  if (!verURL) return;

  // RD 的 e-<build>.html 是不可变快照：它的 meta 天生比线上版本旧，
  // 不该被自愈逻辑当成「旧副本」反复强刷（否则每次进 RD 都要白刷一次）。
  if (/\/e-\d{8}[a-z]?\.html$/.test(location.pathname)) return;

  var meta = document.querySelector('meta[name="gb-build"]');
  var mine = meta ? (meta.getAttribute('content') || '') : '';
  var base = null;          // 本次加载时线上实际版本（bfcache 还原后仍留在 JS 堆里）
  var busy = false;
  var KEY = 'gbheal:' + location.pathname;

  function probe() {
    return fetch(verURL + '?t=' + Date.now(), { cache: 'no-store', credentials: 'same-origin' })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (j) { return j && j.build ? String(j.build) : null; })
      .catch(function () { return null; });
  }

  function hardReload(tag) {
    try {
      var k = KEY + ':' + tag;
      if (sessionStorage.getItem(k)) return false;   // 这一版已经刷过，绝不循环
      sessionStorage.setItem(k, String(Date.now()));
    } catch (e) {
      return false;                                   // 拿不到 sessionStorage 就不冒险刷
    }
    var u = new URL(location.href);
    u.searchParams.set('_gb', tag);
    location.replace(u.href);
    return true;
  }

  function check() {
    if (busy) return;
    busy = true;
    probe().then(function (v) {
      busy = false;
      if (!v) return;                                 // 离线/取不到就什么都不做
      if (!base) base = v;
      // 本页自带 build 与线上不一致 = 本页 HTML 是旧副本；或开页期间线上版本变过
      if ((mine && v !== mine) || v !== base) hardReload(v);
    });
  }

  check();                                                                          // ① 首屏立刻校验
  window.addEventListener('load', check);
  window.addEventListener('pageshow', function (e) { if (e.persisted) check(); });   // ② bfcache 还原
  window.addEventListener('focus', check);                                            // ③ 回到前台
  window.addEventListener('online', check);                                           // ④ 网络恢复
  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'visible') check();
  });
})();
