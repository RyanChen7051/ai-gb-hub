/* AI GB Team Hub — Service Worker
 * 策略：网络优先 + 缓存兜底。子目录部署，全部相对路径。
 * 坑：Pages 对所有资源下发 cache-control: max-age=600，
 *     fetch(req) 会命中 HTTP 缓存拿到旧文件 → 必须 fetch(req,{cache:'no-store'})。
 * 作用域：/ai-gb-hub/ 全域（含 marketing、sales）；rd/ 与 pm/ 有自己更窄的 SW，优先级更高。
 */
const CACHE = 'ai-gb-team-hub-v43';
const BASE = './';
const CORE = [
  BASE,
  BASE + 'index.html',
  BASE + 'supervision.html',
  BASE + 'shared/gb-team.js',
  BASE + 'shared/reports/gb-fin.js',
  BASE + 'fin/data.js',
  BASE + 'shared/reports/gb-reports.js',
  BASE + 'shared/reports/gb-supervision.js',
  BASE + 'shared/reports/gb-email-log.js',
  BASE + 'shared/reports/gb-market-intel.js',
  BASE + 'shared/market-intel-widget.js',
  BASE + 'shared/partner-assessment.js',
  BASE + 'rd/data.js',
  BASE + 'pm/index.html',
  BASE + 'pm/data.js',
  BASE + 'pm/app.js',
  BASE + 'pm/style.css',
  BASE + 'pm/version.json',
  BASE + 'as/index.html',
  BASE + 'as/style.css',
  BASE + 'as/data.js',
  BASE + 'as/app.js',
  BASE + 'as/version.json',
  BASE + 'as/manifest.webmanifest',
  BASE + 'as/assets/as-logo.svg',
  BASE + 'shared/team-intel-digest.js',
  BASE + 'shared/line-report.js',
  BASE + 'shared/tabbar.js',
  BASE + 'shared/back-to-top.js',
  BASE + 'shared/gb-bfcache-heal.js',
  BASE + 'version.json',
  BASE + 'manifest.webmanifest',
  BASE + 'assets/team-logo.svg',
  BASE + 'assets/pm-logo.svg',
  BASE + 'assets/icon-192.png',
  BASE + 'assets/icon-512.png',
  BASE + 'assets/apple-touch-icon.png'
];
// 说明：marketing/ 与 sales/ 各有更窄作用域的自己的 SW，根 SW 不预缓存它们的页面
// （sales 页面受 sharecode 会话保护，无会话抓取会存下无效副本）。
// fin/index.html 故意不预缓存：内部测算页有 file:// 门禁，根 SW 不碰它；fin/ 有自己的 SW。

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      // 逐项 add，一项失败不影响其余；cache:'reload' 绕开 Pages 的 max-age=600
      .then(c => Promise.all(CORE.map(u => c.add(new Request(u, { cache: 'reload' })).catch(() => {}))))
      .then(() => self.skipWaiting())
      .catch(() => {})
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(
    // 只清自己的旧版本；子目录 SW（ai-gb-rd-* / ai-gb-marketing-* / ai-sales-hub-*）不许连坐删除
    keys.filter(k => k.indexOf('ai-gb-team-hub') === 0 && k !== CACHE).map(k => caches.delete(k))
  )).then(() => self.clients.claim()));
});

self.addEventListener('message', e => {
  if (e.data && e.data.type === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  // Fin 内部页永不走缓存：旧副本会把口令锁屏留在手机上，必须每次取网络最新版
  if (url.pathname.indexOf('/fin/index.html') !== -1) {
    e.respondWith(fetch(req, { cache: 'no-store' }));
    return;
  }
  // Sales 的 Supabase 请求不缓存，交给页面自身逻辑
  if (url.hostname.indexOf('supabase.co') !== -1) return;
  e.respondWith(
    fetch(req, { cache: 'no-store' }).then(res => {
      if (res && res.status === 200 && res.type === 'basic') {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {});
      }
      return res;
    }).catch(() => caches.match(req).then(hit => {
      if (hit) return hit;
      // 只有页面导航才回退到首页，避免把 HTML 当成 JS/CSS 返回
      if (req.mode === 'navigate') {
        return caches.match(BASE + 'index.html').then(h => h || Response.error());
      }
      return Response.error();
    }))
  );
});
