/* AI GB-RD — Service Worker
 * 网络优先（强制绕过 HTTP 缓存）+ Cache API 离线兜底。
 * 改任何前端文件后，同步递增 CACHE 版本号，否则旧 SW 会继续提供旧副本。
 */
const CACHE = 'ai-gb-rd-v5';
const BASE = './';
const CORE = [
  BASE,
  BASE + 'index.html',
  BASE + 'data.js',
  BASE + 'pain-data.js',
  BASE + 'pain.js',
  BASE + 'qw-data.js',
  BASE + 'qw.js',
  BASE + 'flow-data.js',
  BASE + 'flow.js',
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
    // 只清自己的旧版本；根 SW（ai-gb-team-hub-*）与兄弟目录缓存不许连坐删除
    keys.filter(k => k.indexOf('ai-gb-rd') === 0 && k !== CACHE).map(k => caches.delete(k))
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
  // 关键：cache:'no-store' 绕过 HTTP 缓存（GitHub Pages 给所有资源 max-age=600，
  // 否则 fetch(req) 会命中浏览器 HTTP 缓存，表现就是「文件已更新但页面还是旧的」）。
  // 离线能力由下面的 Cache API 兜底，不依赖 HTTP 缓存。
  e.respondWith(
    fetch(req, { cache: 'no-store' }).then(res => {
      if (res && res.status === 200 && res.type === 'basic') {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {});
      }
      return res;
    }).catch(() => caches.match(req).then(hit => hit || caches.match(BASE + 'index.html')))
  );
});
