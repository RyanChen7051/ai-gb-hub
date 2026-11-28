/* AI市场战术专家 — Service Worker
 * 策略：网络优先（强制绕过 HTTP 缓存）+ Cache API 离线兜底。
 * 坑：Pages 对所有资源下发 cache-control: max-age=600，
 *     fetch(req) 会命中 HTTP 缓存拿到旧文件 → 必须 fetch(req,{cache:'no-store'})。
 * 升级：改 data.js 后同步递增下面的 CACHE 版本号即可。
 */
const CACHE = 'ai-gb-marketing-v33';
const BASE = './';
const CORE = [
  BASE,
  BASE + 'index.html',
  BASE + 'data.js',
  BASE + 'version.json',
  BASE + '../shared/tabbar.js',
  BASE + '../shared/back-to-top.js',
  BASE + '../shared/gb-bfcache-heal.js',
  BASE + '../shared/reports/gb-market-intel.js',
  BASE + '../shared/market-intel-widget.js',
  BASE + '../shared/partner-assessment.js',
  BASE + 'manifest.webmanifest',
  BASE + 'assets/icon-192.png',
  BASE + 'assets/icon-512.png',
  BASE + 'assets/apple-touch-icon.png',
  BASE + 'assets/icon-maskable-512.png',
  BASE + 'assets/brand-logo.svg'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()).catch(() => {})
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(
      // 只清自己的旧版本；根 SW（ai-gb-team-hub-*）与兄弟目录缓存不许连坐删除
      keys.filter(k => k.indexOf('ai-gb-marketing') === 0 && k !== CACHE).map(k => caches.delete(k))
    )).then(() => self.clients.claim())
  );
});

self.addEventListener('message', e => {
  if (e.data && e.data.type === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

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
