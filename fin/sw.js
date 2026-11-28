/* AI GB-Fin — Service Worker（内部财务线，独立缓存前缀）
 * 门禁提醒：本 SW 只缓存公开宏观数据 data.js 与锁屏页面本身。
 * 成本输入从不进入网络请求，也不进 Cache Storage —— 只在 file:// 的 localStorage。
 */
const CACHE = 'ai-gb-fin-v5';
const BASE = './';
const CORE = [
  BASE + 'index.html',
  BASE + 'data.js',
  BASE + 'version.json',
  BASE + 'manifest.webmanifest',
  BASE + '../shared/tabbar.js',
  BASE + 'assets/icon-192.png',
  BASE + 'assets/icon-512.png',
  BASE + 'assets/apple-touch-icon.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => Promise.all(CORE.map(u => c.add(new Request(u, { cache: 'reload' })).catch(() => {}))))
      .then(() => self.skipWaiting())
      .catch(() => {})
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(
    keys.filter(k => k.indexOf('ai-gb-fin-') === 0 && k !== CACHE).map(k => caches.delete(k))
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
    fetch(req, { cache: 'no-store' }).then(res => {
      if (res && res.status === 200 && res.type === 'basic') {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {});
      }
      return res;
    }).catch(() => caches.match(req).then(hit => hit || Response.error()))
  );
});
