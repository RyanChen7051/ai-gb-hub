/* AI GB · 回到顶部按钮 (shared/back-to-top.js)
 * ------------------------------------------------------------
 * 三页共用、自包含：注入样式 + 按钮 + 滚动监听，不依赖页面 CSS。
 * 行为：向下滚超过 300px 才出现；点一下平滑回顶部，并有兜底。
 * 定位：自动检测 Sales 的聊天悬浮球（.chat-fab）并上移避让；
 *       所有页都避开底部 74px 切换栏与安全区。
 */
(function () {
  'use strict';

  var ID = 'gbBackTop';
  if (document.getElementById(ID)) return;

  var css = ''
    + '#' + ID + '{'
    + 'position:fixed;right:16px;bottom:calc(24px + env(safe-area-inset-bottom,0px));'
    + 'width:46px;height:46px;border-radius:50%;'
    + 'background:#ffffff;border:1px solid #bcd3e6;color:#123a5e;'
    + 'box-shadow:0 4px 16px rgba(13,44,73,.28);'
    + 'display:flex;align-items:center;justify-content:center;'
    + 'cursor:pointer;z-index:895;opacity:0;visibility:hidden;'
    + 'transform:translateY(10px);transition:opacity .25s,transform .25s,visibility .25s;'
    + '-webkit-tap-highlight-color:transparent;padding:0}'
    + '#' + ID + '.show{opacity:1;visibility:visible;transform:none}'
    + '#' + ID + ' svg{width:22px;height:22px;display:block}'
    + '#' + ID + ':active{transform:scale(.92)}'
    + '@media(max-width:720px){#' + ID + '{right:12px;width:44px;height:44px}}';

  function place() {
    var b = document.getElementById(ID);
    if (!b) return;
    var chat = document.querySelector('.chat-fab');
    var mobile = !!(window.matchMedia && window.matchMedia('(max-width:720px)').matches);
    if (chat) {
      // Sales：聊天球之上（手机 86+58 / 桌面 18+58）
      b.style.bottom = mobile
        ? 'calc(156px + env(safe-area-inset-bottom,0px))'
        : 'calc(92px + env(safe-area-inset-bottom,0px))';
    } else {
      // Team / Marketing：底部切换栏之上
      b.style.bottom = mobile
        ? 'calc(84px + env(safe-area-inset-bottom,0px))'
        : 'calc(24px + env(safe-area-inset-bottom,0px))';
    }
  }

  function onScroll() {
    var b = document.getElementById(ID);
    if (!b) return;
    var y = window.pageYOffset || document.documentElement.scrollTop || 0;
    if (y > 300) b.classList.add('show');
    else b.classList.remove('show');
  }

  function mount() {
    if (document.getElementById(ID)) return;
    var s = document.createElement('style');
    s.setAttribute('data-gb-backtop', '1');
    s.textContent = css;
    document.head.appendChild(s);

    var b = document.createElement('button');
    b.id = ID;
    b.type = 'button';
    b.setAttribute('aria-label', '回到顶部');
    b.title = '回到顶部';
    b.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5"/><path d="M5 12l7-7 7 7"/></svg>';
    b.onclick = function () {
      try { window.scrollTo({ top: 0, behavior: 'smooth' }); }
      catch (e) { window.scrollTo(0, 0); }
      // iOS 主屏 WebView 平滑滚动偶发不触发，兜底强制回顶
      setTimeout(function () {
        if ((window.pageYOffset || document.documentElement.scrollTop || 0) > 4) window.scrollTo(0, 0);
      }, 450);
    };
    document.body.appendChild(b);
    place();
    onScroll();
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', place);
  window.addEventListener('pageshow', function () { place(); onScroll(); });
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount);
  else mount();
})();
