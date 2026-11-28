/* AI GB-AS · Service Worker v1
 * 沿用全站约定：Pages 对所有资源 max-age=600，抓取必须 no-store。
 * 作用域仅限 as/；根 SW 只预缓存本页资源，不接管本目录。
 */
const CACHE = 'ai-gb-as-v2';
const CORE = [
  './',
  './index.html',
  './style.css',
  './data.js',
  './app.js',
  './version.json',
  './manifest.webmanifest',
  './assets/as-logo.svg',
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
    keys.filter(k => k.indexOf('ai-gb-as-') === 0 && k !== CACHE).map(k => caches.delete(k))
  )).then(() => self.clients.claim()));
});

self.addEventListener('message', e => { if (e.data && e.data.type === 'SKIP_WAITING') self.skipWaiting(); });

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  if (url.origin !== self.location.origin) return;
  // Supabase 请求不缓存，交给页面自身逻辑
  if (url.hostname.indexOf('supabase.co') !== -1) return;
  e.respondWith(
    fetch(e.request, { cache: 'no-store' }).then(r => {
      if (r && r.ok && r.type === 'basic') {
        const copy = r.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy)).catch(() => {});
      }
      return r;
    }).catch(() => caches.match(e.request).then(r => r || (e.request.mode === 'navigate' ? caches.match('./index.html') : Response.error())))
  );
});
