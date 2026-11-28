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
(function () {
  'use strict';

  var MQ = '(max-width:720px)';
  var ICON = {
    team: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 12 3l9 7.5"/><path d="M5.5 9.5V21h13V9.5"/><path d="M10 21v-6h4v6"/></svg>',
    sales: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="7" width="19" height="13" rx="2.5"/><path d="M8.5 7V5.2A1.2 1.2 0 0 1 9.7 4h4.6a1.2 1.2 0 0 1 1.2 1.2V7"/><path d="M2.5 12.5h19"/></svg>',
    mkt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10v4a1.5 1.5 0 0 0 1.5 1.5H7l6.5 4V4.5L7 8.5H4.5A1.5 1.5 0 0 0 3 10Z"/><path d="M17 8.5a4 4 0 0 1 0 7"/><path d="M7 15.5V20"/></svg>',
    rd: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4.5"/><path d="M12 1.5v4M12 18.5v4M1.5 12h4M18.5 12h4"/><circle cx="12" cy="12" r="1" fill="currentColor"/></svg>',
    fin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 8h10M7 12h4M7 16h4"/></svg>'
  };

  var path = location.pathname;
  var inSub = /\/(sales|marketing|rd|fin)\//.test(path);
  var P = inSub ? '../' : './';
  var here = /\/sales\//.test(path) ? 'sales' : (/\/marketing\//.test(path) ? 'mkt' : (/\/rd\//.test(path) ? 'rd' : (/\/fin\//.test(path) ? 'fin' : 'team')));
  var TABS = [
    ['team', '团队中心', P + 'index.html'],
    ['sales', 'AI GB-Sales', P + 'sales/index.html'],
    ['mkt', 'AI GB-Mkt', P + 'marketing/index.html'],
    ['rd', 'AI GB-RD', P + 'rd/index.html'],
    ['fin', 'AI GB-Fin 🔒', P + 'fin/index.html']
  ];

  function mobile() {
    return !!(window.matchMedia && window.matchMedia(MQ).matches);
  }

  function make() {
    var nav = document.createElement('nav');
    nav.className = 'gb-tabbar';
    nav.setAttribute('aria-label', '同事切换');
    for (var i = 0; i < TABS.length; i++) {
      var t = TABS[i], a = document.createElement('a');
      if (t[0] === here) a.className = 'here';
      a.setAttribute('href', t[2]);
      a.innerHTML = ICON[t[0]] + '<span>' + t[1] + '</span>';
      nav.appendChild(a);
    }
    return nav;
  }

  function node() {
    var nav = document.querySelector('.gb-tabbar');
    if (nav && nav.querySelectorAll('a').length !== TABS.length) {
      var fresh = make();
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
    if (!force && nav.__gbPinned && nav.__gbGap === g) return;
    nav.__gbPinned = true;
    nav.__gbGap = g;
    var s = nav.style;
    s.cssText = '';
    s.display = 'grid';
    s.gridTemplateColumns = 'repeat(4,1fr)';
    s.gap = '4px';
    s.position = 'fixed';
    s.left = '0px';
    s.right = '0px';
    s.bottom = g + 'px';
    s.zIndex = '1200';
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
      t.borderRadius = '10px';
      t.textDecoration = 'none';
      t.fontSize = '10.5px';
      t.fontWeight = '700';
      t.lineHeight = '1.1';
      t.whiteSpace = 'nowrap';
      t.overflow = 'hidden';
      t.letterSpacing = '0';
      if (a.className === 'here') {
        t.color = '#0f3252';
        t.background = '#fff';
        t.boxShadow = '0 1px 4px rgba(0,0,0,.25)';
      } else {
        t.color = '#c9dcec';
        t.background = 'transparent';
      }
    }
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

  function bind() {
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
