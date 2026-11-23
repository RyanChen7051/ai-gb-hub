/* AI GB-RD — Service Worker
 * 网络优先 + 缓存兜底。改 data.js 后同步递增 CACHE 版本号。
 */
const CACHE = 'ai-gb-rd-v2';
const BASE = './';
const CORE = [
  BASE,
  BASE + 'index.html',
  BASE + 'data.js',
  BASE + 'pain-data.js',
  BASE + 'pain.js',
  BASE + 'version.json',
  BASE + '../shared/tabbar.js',
  BASE + '../shared/back-to-top.js',
  BASE + 'manifest.webmanifest',
  BASE + 'assets/icon-192.png',
  BASE + 'assets/icon-512.png',
  BASE + 'assets/apple-touch-icon.png',
  BASE + 'assets/icon-maskable-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()).catch(() => {}));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(
    keys.filter(k => k !== CACHE).map(k => caches.delete(k))
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
  e.respondWith(
    fetch(req).then(res => {
      if (res && res.status === 200) {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {});
      }
      return res;
    }).catch(() => caches.match(req).then(hit => hit || caches.match(BASE + 'index.html')))
  );
});
