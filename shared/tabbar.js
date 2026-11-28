/* AI GB · 底部同事切换栏守护脚本 (shared/tabbar.js)
 * ------------------------------------------------------------
 * 为什么需要这个脚本：
 * 底部栏是 position:fixed 元素，WebKit（iOS Safari / 主屏 Web App）在
 * 页面跳转、系统工具栏折叠、键盘收起之后，会偶发整条不重绘或位置算错，
 * 表现就是「按钮突然消失，点一下别的按钮/刷新又回来」。
 *
 * 这里的做法不赌任何环境：
 *   1) 运行时把关键样式（含不透明底色）直接钉成行内样式，绕过媒体查询与
 *      backdrop-filter 合成层问题；
 *   2) 按 visualViewport 校正 bottom，避免被系统底部工具栏盖住；
 *   3) 一旦发现几何位置不对/高度为 0，就重建 + 强制重绘；
 *   4) 在页面加载、pageshow、resize、可见性变化时都会复核。
 */
/* 页面恢复时清理残留浮层（2026-11-24）
 * 浏览器 bfcache 会把整页 DOM 连同「抽屉打开」状态一起冻结；点走再点回来时
 * 直接复活旧 DOM，于是健康巡检/回信抽屉又弹在脸上。页面每次显示（含 bfcache
 * 恢复与切回前台）都主动关掉这些浮层，用户要用时再点健康 pill 打开即可。 */
(function () {
  'use strict';
  function closeResidual() {
    var ids = ['healthDrawer', 'replyDrawer', 'healthBanner', 'replyBanner'];
    for (var i = 0; i < ids.length; i++) {
      var el = document.getElementById(ids[i]);
      if (el && el.classList) el.classList.remove('show');
    }
  }
  window.addEventListener('pageshow', function (e) { closeResidual(); });
  document.addEventListener('visibilitychange', function () { if (!document.hidden) closeResidual(); });
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', closeResidual);
  else closeResidual();
})();

(function () {
  'use strict';

  var MQ = '(max-width:720px)';
  var ICON = {
    team: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 12 3l9 7.5"/><path d="M5.5 9.5V21h13V9.5"/><path d="M10 21v-6h4v6"/></svg>',
    sales: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="7" width="19" height="13" rx="2.5"/><path d="M8.5 7V5.2A1.2 1.2 0 0 1 9.7 4h4.6a1.2 1.2 0 0 1 1.2 1.2V7"/><path d="M2.5 12.5h19"/></svg>',
    mkt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10v4a1.5 1.5 0 0 0 1.5 1.5H7l6.5 4V4.5L7 8.5H4.5A1.5 1.5 0 0 0 3 10Z"/><path d="M17 8.5a4 4 0 0 1 0 7"/><path d="M7 15.5V20"/></svg>',
    rd: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4.5"/><path d="M12 1.5v4M12 18.5v4M1.5 12h4M18.5 12h4"/><circle cx="12" cy="12" r="1" fill="currentColor"/></svg>',
    fin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 8h10M7 12h4M7 16h4"/></svg>',
    pm: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="2.5" width="6" height="4" rx="1"/><rect x="2" y="17.5" width="6" height="4" rx="1"/><rect x="16" y="17.5" width="6" height="4" rx="1"/><path d="M12 6.5v5M5 17.5v-3h14v3"/></svg>',
    as: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14v-3a8 8 0 0 1 16 0v3"/><rect x="2.5" y="13" width="4" height="7" rx="2"/><rect x="17.5" y="13" width="4" height="7" rx="2"/><path d="M19.5 20a8 8 0 0 1-15 0"/></svg>'
  };

  var path = location.pathname;
  var inSub = /\/(sales|marketing|rd|fin|pm|as)\//.test(path);
  var P = inSub ? '../' : './';
  var here = /\/sales\//.test(path) ? 'sales' : (/\/marketing\//.test(path) ? 'mkt' : (/\/rd\//.test(path) ? 'rd' : (/\/fin\//.test(path) ? 'fin' : (/\/pm\//.test(path) ? 'pm' : (/\/as\//.test(path) ? 'as' : 'team')))));

  /* 站点根（2026-11-28）：一律用**绝对路径**拼链接，不再用 ../ 相对路径。
   * 为什么：只要页面被打开在非预期深度（例如 .../ai-gb-hub/pm/、带尾斜杠、
   * 或在子目录里再点一次），相对路径就会拼成 /ai-gb-hub/pm/as/index.html 这种
   * 不存在的地址 → 除了当前这页，其余标签全 404。绝对路径与当前深度无关。
   * 根从脚本自身地址推：.../ai-gb-hub/shared/tabbar.js → /ai-gb-hub/ */
  var ROOT = './';
  try {
    var self = document.currentScript;
    if (!self || !self.src) {
      var all = document.querySelectorAll('script[src*="tabbar.js"]');
      self = all[all.length - 1];
    }
    if (self && self.src) {
      ROOT = new URL(self.src, location.href).pathname.replace(/shared\/[^\/]*$/, '');
    }
  } catch (e) { ROOT = './'; }
  if (ROOT.charAt(ROOT.length - 1) !== '/') ROOT += '/';
  /* 版本指纹：给每个入口加 ?v=<build>。
   * 为什么必须加：某条路径一旦在旧版里 404 过（例如 pm/ 曾经整目录没提交），
   * 旧 Service Worker 会把那条 404 响应按 URL 缓存下来，之后即使服务器修好了，
   * 点进去依然永远是 404 页。URL 带上 build 后缓存键每次发版都变，旧 404 再也命中不到。 */
  var BUILD = '';
  try {
    var bm = document.querySelector('meta[name="gb-build"]');
    BUILD = bm ? (bm.getAttribute('content') || '') : '';
  } catch (e) { BUILD = ''; }
  function u(p) { return ROOT + p + (BUILD ? '?v=' + BUILD : ''); }
  var TABS = [
    ['team', '团队中心', u('index.html')],
    ['sales', 'AI GB-Sales', u('sales/index.html')],
    ['mkt', 'AI GB-MKT', u('marketing/index.html')],
    ['rd', 'AI GB-RD', u('rd/index.html')],
    ['pm', 'AI GB-PM', u('pm/index.html')],
    ['as', 'AI GB-AS', u('as/index.html')],
    ['fin', 'Fin 🔒', u('fin/index.html')]
  ];
  /* 窄屏短标签：七个全名并排会在 360px 被截成半个字；这里给一套短名，
     fit() 之前先按可视宽度决定用全名还是短名（团队中心保持全名） */
  var SHORT = {
    sales: 'Sales', mkt: 'MKT', rd: 'RD', pm: 'PM', as: 'AS', fin: 'Fin🔒', team: '团队中心'
  };

  function mobile() {
    return !!(window.matchMedia && window.matchMedia(MQ).matches);
  }

  /* 七个标签时窄屏改用短名：360px 下全名（AI GB-Sales 等）会被截半字。
   * 桌面宽度仍显示全名。判定按 window.innerWidth，与 MQ 同一断点附近。 */
  function label(t) {
    if (TABS.length <= 5) return t[1];
    return (window.innerWidth && window.innerWidth <= 430) ? (SHORT[t[0]] || t[1]) : t[1];
  }

  function make() {
    var nav = document.createElement('nav');
    nav.className = 'gb-tabbar';
    nav.setAttribute('aria-label', '同事切换');
    for (var i = 0; i < TABS.length; i++) {
      var t = TABS[i], a = document.createElement('a');
      if (t[0] === here) a.className = 'here';
      a.setAttribute('href', t[2]);
      a.innerHTML = ICON[t[0]] + '<span>' + label(t) + '</span>';
      nav.appendChild(a);
    }
    nav.__gbShort = !!(window.innerWidth && window.innerWidth <= 430);
    nav.setAttribute('data-gb-built', '1');
    return nav;
  }

  function node() {
    var nav = document.querySelector('.gb-tabbar');
    var wantShort = !!(window.innerWidth && window.innerWidth <= 430);
    /* 单一真相源（2026-11-28）：各页 HTML 里的静态 .gb-tabbar 只是无 JS 时的
       纯文字占位——没有图标、列数写成 5/6/4 列。加进 PM/AS 后共 7 格，静态那套
       会让第 7 个掉到第二排。所以脚本一加载就整块替换成 make() 生成版本，
       并用 data-gb-built 标记，避免每次复核都重建。 */
    var stale = !nav || nav.getAttribute('data-gb-built') !== '1' ||
                nav.querySelectorAll('a').length !== TABS.length ||
                nav.__gbShort !== wantShort;
    if (nav && stale) {
      var fresh = make();
      fresh.__gbShort = wantShort;
      nav.parentNode ? nav.parentNode.replaceChild(fresh, nav) : document.body.appendChild(fresh);
      nav = fresh;
    }
    if (!nav) {
      nav = make();
      document.body.appendChild(nav);
    } else if (nav.parentNode !== document.body) {
      document.body.appendChild(nav); // 挂到 body 末尾，避免被祖先容器影响定位
    }
    return nav;
  }

  // iOS 系统底部工具栏/键盘占掉的高度（正常情况为 0）
  function gap() {
    var vv = window.visualViewport;
    if (!vv) return 0;
    var g = Math.round(window.innerHeight - (vv.height + vv.offsetTop));
    return (g > 0 && g <= 180) ? g : 0;
  }

  function pin(nav, force) {
    var g = gap();
    if (!force && nav.__gbPinned && nav.__gbGap === g && nav.__gbW === nav.clientWidth) return;
    nav.__gbPinned = true;
    nav.__gbGap = g;
    var s = nav.style;
    s.cssText = '';
    s.display = 'grid';
    /* 列数跟着标签数量走：加进 AS 后共 7 个标签，写死列数会掉到第二排 */
    s.gridTemplateColumns = 'repeat(' + TABS.length + ',minmax(0,1fr))';
    s.gap = '4px';
    s.position = 'fixed';
    s.left = '0px';
    s.right = '0px';
    s.bottom = g + 'px';
    s.zIndex = '1400'; /* 高于健康/回信抽屉(1310/1300)，抽屉打开时底部切换栏仍可点 */
    s.padding = '6px 8px calc(6px + env(safe-area-inset-bottom,0px))';
    s.background = '#0d2c49';
    s.borderTop = '1px solid rgba(255,255,255,.18)';
    s.boxShadow = '0 -4px 18px rgba(13,44,73,.30)';
    s.backdropFilter = 'none';
    s.webkitBackdropFilter = 'none';

    var links = nav.querySelectorAll('a');
    for (var i = 0; i < links.length; i++) {
      var a = links[i], t = a.style;
      t.display = 'flex';
      t.flexDirection = 'column';
      t.alignItems = 'center';
      t.justifyContent = 'center';
      t.gap = '3px';
      t.minHeight = '48px';
      t.minWidth = '0px';
      t.borderRadius = '10px';
      t.textDecoration = 'none';
      t.fontSize = '10.5px';
      t.fontWeight = '700';
      t.lineHeight = '1.1';
      t.whiteSpace = 'nowrap';
      t.overflow = 'hidden';
      t.letterSpacing = '0';
      /* 内联 SVG 不写 width/height 时按 300x150 默认尺寸参与布局，
         在 flex-column 里会把导航格撑高（pm 页 CSS 缺 svg 尺寸规则，实测
         430px 下栏高被撑到 83px）。这里统一钉尺寸，一次修所有页。 */
      var ic = a.querySelector('svg');
      if (ic) {
        ic.style.width = '19px';
        ic.style.height = '19px';
        ic.style.display = 'block';
        ic.style.flex = '0 0 auto';
      }
      if (a.className === 'here') {
        t.color = '#0f3252';
        t.background = '#fff';
        t.boxShadow = '0 1px 4px rgba(0,0,0,.25)';
      } else {
        t.color = '#c9dcec';
        t.background = 'transparent';
      }
    }
    fit(nav);
  }

  /* 七个标签必须挤在一排（2026-11-28）
   * 加进 AS 后共 7 格，列数跟 TABS.length 走；≤430px 改用 SHORT 短名（Sales/MKT/RD/PM/AS/Fin🔒），
   * 这里再按实际宽度逐级缩字号，保证 360px 窄屏不被 overflow:hidden 截成半个字。 */
  function fit(nav) {
    var links = nav.querySelectorAll('a');
    if (!links.length) return;
    var fs = 10.5;
    for (; fs >= 7.5; fs -= 0.5) {
      var over = false;
      for (var i = 0; i < links.length; i++) {
        var a = links[i];
        a.style.fontSize = fs + 'px';
        /* 量 span 自身的文字宽度：<a> 是 overflow:hidden 的 flex 容器，
           直接读 a.scrollWidth 会被裁住，量不出真实溢出量 */
        var sp = a.querySelector('span');
        var need = sp ? Math.ceil(sp.scrollWidth) : a.scrollWidth;
        if (need > a.clientWidth - 2) over = true;
      }
      if (!over) break;
    }
    nav.__gbW = nav.clientWidth;
  }

  // 强制重绘：某些 WebKit 状态下行内样式已生效但合成层没刷出来
  function kick(nav) {
    nav.style.visibility = 'hidden';
    void nav.offsetHeight;
    nav.style.visibility = 'visible';
  }

  function check(forceKick) {
    if (!mobile()) {
      var off = document.querySelector('.gb-tabbar');
      if (off) off.removeAttribute('style');
      return;
    }
    var nav = node();
    pin(nav, forceKick);
    var r = nav.getBoundingClientRect();
    var vv = window.visualViewport;
    var visBottom = vv ? (vv.height + vv.offsetTop) : window.innerHeight;
    var broken = r.height < 20 || r.top >= visBottom - 2 || r.bottom <= 0;
    if (broken || forceKick) kick(nav);
  }

  var raf = window.requestAnimationFrame || function (fn) { return setTimeout(fn, 16); };
  var pending = false;
  function soon(force) {
    if (pending) return;
    pending = true;
    raf(function () { pending = false; check(force); });
  }

  /* 桌面顶部协作导航 (.gb-bar) 也必须高于健康/回信抽屉(1310/1300)与版本横幅(1200)，
     否则浮层一开就把导航遮住、点「团队中心」没反应。所有页面共用本脚本，
     这里统一钉层级 = 单一真相源；同时保护手机端 .gb-tabbar 不被旧 CSS/缓存降回去。 */
  function pinTopbar() {
    var bar = document.querySelector('.gb-bar');
    if (bar && bar.style) bar.style.zIndex = '1400';
    var tab = document.querySelector('.gb-tabbar');
    if (tab && tab.style && tab.style.zIndex !== '1400') tab.style.zIndex = '1400';
  }

  function bind() {
    pinTopbar();
    soon(true);
    // 前 12 秒高频复核，覆盖跳转后 WebKit 的延迟重排
    var n = 0;
    var timer = setInterval(function () {
      check(false);
      if (++n >= 20) clearInterval(timer);
    }, 600);

    window.addEventListener('load', function () { soon(true); });
    window.addEventListener('pageshow', function () { soon(true); });
    window.addEventListener('resize', function () { soon(false); });
    window.addEventListener('orientationchange', function () { setTimeout(function () { soon(true); }, 250); });
    document.addEventListener('visibilitychange', function () { if (!document.hidden) soon(true); });
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', function () { soon(false); });
      window.visualViewport.addEventListener('scroll', function () { soon(false); });
    }
    window.addEventListener('scroll', function () { soon(false); }, { passive: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bind);
  } else {
    bind();
  }
})();

/* AI GB · 同窗口导航（2026-11-24 重构）
 * ------------------------------------------------------------
 * 旧的 iframe 覆盖层方案废弃：它让「顶部 pill（顶层文档，z-index 1100）」
 * 与「iframe 里的主体」分层，切页后 pill 停在原地、内容区滚动受限、
 * 每次还要整页重载两遍，既慢又错位。
 *
 * 新方案：拦截站内 <a> 点击，用 location.assign 在当前窗口做整页导航。
 *   - 整页导航 → 顶部 pill、底部 tabbar、页面脚本全部随新页重建，天然同步；
 *   - 拿到原始 href 后用 APP_BASE（脚本所在目录）解析，与地址栏脱钩，
 *     不会再出现 /sales/marketing/ 路径叠加 404；
 *   - 不用 iframe、不用 pushState 伪造地址栏，滚动/深链/刷新全部正常。
 */
(function () {
  'use strict';

  var APP_BASE = (function () {
    var s = document.currentScript;
    var src = (s && s.src) || '';
    if (src) { var i = src.lastIndexOf('/shared/'); if (i >= 0) return src.slice(0, i + 1); }
    return new URL('./', location.href).href;
  })();

  function absolute(href) { return new URL(href, APP_BASE).href; }

  function internal(href) {
    if (!href || href.charAt(0) === '#') return false;
    try {
      var u = new URL(href, APP_BASE);
      if (u.origin !== location.origin) return false;
      if (u.protocol !== 'http:' && u.protocol !== 'https:') return false;
      if (/\.(css|js|json|png|jpe?g|gif|svg|webp|ico|pdf|webmanifest)$/i.test(u.pathname)) return false;
      return true;
    } catch (e) { return false; }
  }

  document.addEventListener('click', function (e) {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    var a = e.target && e.target.closest ? e.target.closest('a[href]') : null;
    if (!a || a.target || a.hasAttribute('download')) return;
    var raw = a.getAttribute('href');
    if (!internal(raw)) return;
    e.preventDefault();
    location.assign(absolute(raw));
  }, true);
})();
