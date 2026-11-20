/* AI GB Team Hub — Service Worker
 * 策略：网络优先 + 缓存兜底。子目录部署，全部相对路径。
 */
const CACHE = 'ai-gb-team-hub-v2';
const BASE = './';
const CORE = [
  BASE,
  BASE + 'index.html',
  BASE + 'shared/gb-team.js',
  BASE + 'shared/reports/gb-reports.js',
  BASE + 'shared/reports/gb-email-log.js',
  BASE + 'version.json',
  BASE + 'manifest.webmanifest',
  BASE + 'assets/icon-192.png',
  BASE + 'assets/icon-512.png',
  BASE + 'assets/apple-touch-icon.png'
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
  // Sales 的 Supabase 请求不缓存，交给页面自身逻辑
  if (url.hostname.indexOf('supabase.co') !== -1) return;
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
