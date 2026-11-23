/* AI市场战术专家 — Service Worker
 * 策略：网络优先 + 缓存兜底（静态策略演示版，离线可看上次内容）
 * 升级：改 data.js 后同步递增下面的 CACHE 版本号即可。
 */
const CACHE = 'ai-gb-marketing-v7';
const BASE = './';
const CORE = [
  BASE,
  BASE + 'index.html',
  BASE + 'data.js',
  BASE + 'version.json',
  BASE + '../shared/tabbar.js',
  BASE + '../shared/reports/gb-market-intel.js',
  BASE + '../shared/market-intel-widget.js',
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
      keys.filter(k => k !== CACHE).map(k => caches.delete(k))
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
    fetch(req).then(res => {
      if (res && res.status === 200) {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {});
      }
      return res;
    }).catch(() =>
      caches.match(req).then(hit => hit || caches.match(BASE + 'index.html'))
    )
  );
});
