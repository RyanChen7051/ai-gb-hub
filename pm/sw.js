/* AI GB-PM · Service Worker v1
 * 沿用全站约定：Pages 对所有资源下发 max-age=600，抓取必须 no-store。
 * 作用域仅限 pm/；根 SW 只预缓存本页资源，不接管本目录。
 */
const CACHE = 'ai-gb-pm-v3';
const CORE = [
  './',
  './index.html',
  './style.css',
  './data.js',
  './app.js',
  './version.json',
  './manifest.webmanifest',
  './assets/pm-logo.svg',
  './assets/icon-192.png',
  '../shared/gb-team.js',
  '../shared/tabbar.js'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => Promise.all(CORE.map(u =>
    c.add(new Request(u, { cache: 'no-store' })).catch(() => null)
  ))).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(
    keys.filter(k => k !== CACHE).map(k => caches.delete(k))
  )).then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  if (new URL(e.request.url).origin !== self.location.origin) return;
  e.respondWith(
    fetch(e.request, { cache: 'no-store' }).then(r => {
      if (r && r.ok) {
        const copy = r.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy));
      }
      return r;
    }).catch(() => caches.match(e.request).then(r => r || caches.match('./index.html')))
  );
});
