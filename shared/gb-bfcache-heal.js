/* 通用 bfcache 自愈守卫 —— 解决「发布了新版本，页面还是几小时前那版」
 *
 * 背景：标签页被 Chromium 冻结保存（bfcache）后再还原时，**不发任何网络请求**，
 *       内存里的旧 DOM 直接复活，页面脚本也不会重新执行。此时 Service Worker、
 *       cache:'no-store'、页面自带的版本检测全部无效——它们根本没机会运行。
 *
 * 做法：加载时记下 version.json 里的版本基线（bfcache 会连 JS 堆一起保留），
 *       在「从冻结状态还原 / 窗口重新聚焦 / 网络恢复 / 标签页重新可见」时再校验一次，
 *       版本变了就自动重载一次。同一版本每个会话只自动重载一次，避免死循环。
 *
 * 用法：
 *   <script src="../shared/gb-bfcache-heal.js" data-ver="version.json" data-key="build"></script>
 *   data-ver  版本文件路径（相对页面），默认 version.json
 *   data-key  取哪个字段做比较，默认 build（没有则退回 version）
 */
(function () {
  var s = document.currentScript;
  if (!s) {
    var all = document.querySelectorAll('script[data-ver]');
    s = all[all.length - 1];
  }
  if (!s) return;

  var url = s.getAttribute('data-ver') || 'version.json';
  var key = s.getAttribute('data-key') || 'build';
  var base = null;      // 加载时记下的版本基线（bfcache 还原后仍然保留）
  var busy = false;

  function probe() {
    var u = url + (url.indexOf('?') === -1 ? '?' : '&') + 't=' + Date.now();
    return fetch(u, { cache: 'no-store', credentials: 'include' })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (j) {
        if (!j) return null;
        var v = j[key] != null ? j[key] : j.version;
        return v != null && v !== '' ? String(v) : null;
      })
      .catch(function () { return null; });
  }

  function heal() {
    if (busy) return;
    busy = true;
    probe().then(function (v) {
      busy = false;
      if (!v || !base || v === base) return;
      var stamp = 'gbheal:' + location.pathname + ':' + v;
      try {
        if (sessionStorage.getItem(stamp)) return;   // 这一版已经自动重载过，不再循环
        sessionStorage.setItem(stamp, String(Date.now()));
      } catch (e) {
        return;                                       // 取不到 sessionStorage 就不冒险重载
      }
      location.reload();
    });
  }

  // 基线：优先 load 后取一次（此时网络最稳）
  probe().then(function (v) { if (v) base = v; });
  window.addEventListener('load', function () {
    if (!base) probe().then(function (v) { if (v) base = v; });
  });

  // bfcache 还原：e.persisted === true 才是真的从冻结状态复活
  window.addEventListener('pageshow', function (e) { if (e.persisted) heal(); });
  window.addEventListener('focus', function () {
    if (document.visibilityState === 'visible') heal();
  });
  window.addEventListener('online', heal);
  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'visible') heal();
  });
})();
