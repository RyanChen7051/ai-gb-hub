/* AI GB-Sales汇报中心 — Service Worker
 * 策略：
 * - 网络优先 + 缓存兜底（每天拿最新数据，离线可看上次内容）
 * - 支持"检查更新"按钮：页面发 SKIP_WAITING 消息，新 SW 立即接管
 * 升级架构时：同步递增 version.json.cache 与本文件 CACHE 常量即可。
 * 注意：所有资源需 sharecode cookie 会话；start_url 已内嵌 sharecode。
 */
const CACHE = 'ai-sales-hub-v32';
const SHARE = '?sharecode=BOOB2ODIT5';
const BASE = './';
const CORE = [
  BASE + SHARE,
  BASE + 'index.html' + SHARE,
  BASE + 'data.js?v=3.2.0' + SHARE,
  BASE + 'version.json' + SHARE,
  BASE + '../shared/tabbar.js' + SHARE,
  BASE + 'manifest.webmanifest' + SHARE,
  BASE + 'assets/icon-192.png?v=3.2.0' + SHARE,
  BASE + 'assets/icon-512.png?v=3.2.0' + SHARE,
  BASE + 'assets/apple-touch-icon.png?v=3.2.0' + SHARE
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

// 页面点击"检查更新"后发来 SKIP_WAITING，让新版 SW 立即接管
self.addEventListener('message', e => {
  if (e.data && e.data.type === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  // version.json 与导航请求：必须走网络（保证版本检测/每日数据新鲜），失败才回退缓存
  e.respondWith(
    fetch(req).then(res => {
      if (res && res.status === 200) {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {});
      }
      return res;
    }).catch(() =>
      caches.match(req).then(hit => hit || caches.match('/index.html' + SHARE))
    )
  );
});
