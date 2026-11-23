/* AI GB 本线日报挂件（v2.0）
 *
 * 用法（在子 PWA 的 </body> 前引入，顺序不可颠倒）：
 *   <script src="../shared/reports/gb-reports.js"></script>
 *   <script src="../shared/reports/gb-email-log.js"></script>
 *   <script>window.GB_LINE_FOR='GB-Sales';</script>
 *   <script src="../shared/line-report.js"></script>
 *
 * 设计要点：
 *   - 一条线只看自己的东西：本线日报 + 本线指令 + 本线发信台账 + 涉及本线的裁决；
 *   - 全部样式用 gblr- 前缀并注入独立 <style>，不碰各 PWA 原有类名（此前 .kw 冲突的教训）；
 *   - 浅底深字，不使用深色面板；
 *   - 只读展示，不回写任何数据；
 *   - 位置：插在页头之后、正文第一个板块之前，让"本线日报"成为打开页面第一眼看到的内容。
 */
(function () {
  var FOR = window.GB_LINE_FOR || window.GB_DIRECTIVE_FOR;
  var R = window.GB_REPORTS;
  var L = window.GB_EMAIL_LOG;
  if (!FOR || !R || !R.days || !R.days.length) return;

  var IS_SALES = FOR === 'GB-Sales';
  var KEY = IS_SALES ? 'sales' : 'marketing';
  var SHORT = IS_SALES ? 'Sales' : 'Marketing';
  var NAME = IS_SALES ? 'AI GB-Sales' : (FOR === 'GB-Marketing' ? 'AI GB-Marketing' : FOR);
  var C1 = IS_SALES ? '#1d5486' : '#126b6b';
  var C2 = IS_SALES ? '#2f7cb8' : '#1f9c9c';
  var PEER = IS_SALES ? 'AI GB-Marketing' : 'AI GB-Sales';
  var PEER_HREF = IS_SALES ? '../marketing/index.html' : '../sales/index.html';

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }
  function tone(c) {
    return { green: 'g', red: 'r', amber: 'a', blue: 'b', teal: 't' }[c] || 'b';
  }

  /* ===== 样式（全量 gblr- 前缀） ===== */
  var CSS = ''
    + '.gblr{margin:18px 0 4px}'
    + '.gblr-card{background:#fff;border:1px solid #dde5ee;border-radius:14px;overflow:hidden;box-shadow:0 2px 12px rgba(18,58,94,.07)}'
    + '.gblr-hd{background:linear-gradient(135deg,' + C1 + ',' + C2 + ');color:#fff;padding:15px 18px;display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap}'
    + '.gblr-kicker{font-size:10px;letter-spacing:1.6px;opacity:.86}'
    + '.gblr-title{font-size:16.5px;font-weight:800;margin-top:4px;line-height:1.35}'
    + '.gblr-state{font-size:11.5px;opacity:.92;margin-top:3px}'
    + '.gblr-score{text-align:right;line-height:1;white-space:nowrap}'
    + '.gblr-score b{font-size:28px;font-weight:800}'
    + '.gblr-score span{font-size:11px;opacity:.82;margin-left:2px}'
    + '.gblr-days{display:flex;gap:6px;flex-wrap:wrap;align-items:center;padding:9px 18px;background:#f8fafc;border-bottom:1px solid #dde5ee}'
    + '.gblr-days .lab{font-size:10.5px;color:#5b6b7c;margin-right:2px}'
    + '.gblr-day{border:1px solid #dde5ee;background:#fff;border-radius:8px;padding:3px 9px;font-size:11px;color:#5b6b7c;cursor:pointer;font-family:inherit;transition:.15s}'
    + '.gblr-day:hover{border-color:' + C1 + ';color:' + C1 + '}'
    + '.gblr-day.on{background:#123a5e;border-color:#123a5e;color:#fff;font-weight:700}'
    + '.gblr-accum{font-size:10.5px;color:#8a97a6;margin-left:auto}'
    + '.gblr-body{padding:15px 18px}'
    + '.gblr-hl{font-size:13px;font-weight:750;color:#123a5e;line-height:1.65;padding:11px 13px;background:#f4f8fc;border-left:3px solid ' + C1 + ';border-radius:8px}'
    + '.gblr-kpis{display:grid;grid-template-columns:repeat(6,1fr);gap:7px;margin-top:12px}'
    + '.gblr-kpi{background:#f8fafc;border:1px solid #dde5ee;border-radius:9px;padding:8px 5px;text-align:center}'
    + '.gblr-kpi b{display:block;font-size:16px;font-weight:800;line-height:1.15}'
    + '.gblr-kpi .k{display:block;font-size:9.5px;color:#5b6b7c;margin-top:3px;line-height:1.3}'
    + '.gblr-kpi .d{display:block;font-size:8.5px;color:#8a97a6;margin-top:2px;line-height:1.35}'
    + '.gblr-kpi.g b{color:#1f7a4d}.gblr-kpi.r b{color:#b8461f}.gblr-kpi.a b{color:#9a6b12}'
    + '.gblr-kpi.b b{color:#1d5486}.gblr-kpi.t b{color:#126b6b}'
    + '.gblr-sec{font-size:10.5px;font-weight:800;color:' + C1 + ';letter-spacing:.5px;margin:15px 0 5px}'
    + '.gblr-li{font-size:11.5px;color:#41546a;line-height:1.7;padding-left:14px;position:relative;margin:3px 0}'
    + '.gblr-li::before{content:"";position:absolute;left:3px;top:8px;width:4px;height:4px;border-radius:50%;background:#b9c6d4}'
    + '.gblr-li.blk::before{background:#b8461f}'
    + '.gblr-li.ask::before{background:#c08a2e}'
    + '.gblr-cols{display:grid;grid-template-columns:1.15fr 1fr;gap:13px;margin-top:17px;align-items:start}'
    + '.gblr-panel{border:1px solid #dde5ee;border-radius:11px;overflow:hidden;background:#fff}'
    + '.gblr-ph{background:#f8fafc;border-bottom:1px solid #dde5ee;padding:9px 12px;display:flex;justify-content:space-between;gap:8px;align-items:center;flex-wrap:wrap}'
    + '.gblr-ph h4{font-size:12px;color:#123a5e;font-weight:800}'
    + '.gblr-ph .n{font-size:10px;color:#5b6b7c;background:#fff;border:1px solid #dde5ee;border-radius:9px;padding:1px 7px;white-space:nowrap}'
    + '.gblr-pb{padding:4px 12px 10px}'
    + '.gblr-dir{padding:9px 0;border-bottom:1px dashed #dde5ee}'
    + '.gblr-dir:last-child{border-bottom:0}'
    + '.gblr-dir .t{font-size:11.8px;font-weight:750;color:#123a5e;line-height:1.55}'
    + '.gblr-dir .id{display:inline-block;font-size:9px;font-weight:800;color:#fff;background:' + C1 + ';padding:1px 6px;border-radius:5px;margin-right:5px;vertical-align:1px}'
    + '.gblr-dir .m{font-size:10.5px;color:#5b6b7c;line-height:1.65;margin-top:3px}'
    + '.gblr-dir .b{font-size:9.5px;color:#8a97a6;margin-top:3px;line-height:1.5}'
    + '.gblr-tag{font-size:9px;font-weight:750;padding:1px 6px;border-radius:7px;margin-left:4px;white-space:nowrap}'
    + '.gblr-tag.warn{background:#fdeceb;color:#b8461f}'
    + '.gblr-tag.watch{background:#e8f0f9;color:#1d5486}'
    + '.gblr-tag.ok{background:#e7f4ec;color:#1f7a4d}'
    + '.gblr-tag.dual{background:#f0ebf8;color:#6b4a9c}'
    + '.gblr-mail{padding:8px 0;border-bottom:1px dashed #dde5ee}'
    + '.gblr-mail:last-child{border-bottom:0}'
    + '.gblr-mail .s{font-size:11.3px;font-weight:700;color:#123a5e;line-height:1.5}'
    + '.gblr-mail .m{font-size:10px;color:#5b6b7c;margin-top:3px;word-break:break-word;line-height:1.55}'
    + '.gblr-mail .i{font-size:9px;color:#8a97a6;margin-top:3px;word-break:break-all}'
    + '.gblr-empty{font-size:11px;color:#8a97a6;padding:11px 0;line-height:1.65}'
    + '.gblr-cf{border:1px solid #dde5ee;border-left:3px solid #6b4a9c;border-radius:9px;padding:10px 12px;background:#fbfaff;margin-top:9px}'
    + '.gblr-cf .t{font-size:12px;font-weight:750;color:#4f3576}'
    + '.gblr-cf .s{font-size:10.5px;color:#5b6b7c;line-height:1.6;margin-top:3px}'
    + '.gblr-cf .r{font-size:11px;color:#1a1a1a;background:#eef6f0;border:1px solid #cbe6d6;border-radius:7px;padding:7px 9px;margin-top:6px;line-height:1.65}'
    + '.gblr-ft{background:#f8fafc;border-top:1px solid #dde5ee;padding:11px 18px;font-size:11px;color:#5b6b7c;line-height:1.7;display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap}'
    + '.gblr-ft a{color:' + C1 + ';font-weight:700;text-decoration:none}'
    + '.gblr-ft a:hover{text-decoration:underline}'
    + '@media(max-width:820px){.gblr-kpis{grid-template-columns:repeat(3,1fr)}.gblr-cols{grid-template-columns:1fr}}'
    + '@media(max-width:430px){.gblr-kpis{grid-template-columns:repeat(2,1fr)}.gblr-title{font-size:15px}.gblr-score b{font-size:23px}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-gblr', '1');
  styleEl.textContent = CSS;
  document.head.appendChild(styleEl);

  /* ===== 挂载位置：页头之后第一个 .wrap 的开头 =====
   * 加固（2026-11-22）：曾因页面里多写了一个空 <header>，导致 nextElementSibling 不是 .wrap，
   * 挂件被塞进顶部导航条 .gb-bar 的 .wrap（flex 子项 → 页面变成一条窄栏）。
   * 现在逐级兜底，并明确排除导航条/底部切换栏内的 .wrap。 */
  var hd = document.querySelector('header');
  var host = null;
  if (hd && hd.nextElementSibling && hd.nextElementSibling.classList.contains('wrap')) host = hd.nextElementSibling;
  if (!host && hd && hd.parentNode) {
    var sibs = hd.parentNode.children;
    for (var si = 0; si < sibs.length; si++) {
      if (sibs[si].classList && sibs[si].classList.contains('wrap')) { host = sibs[si]; break; }
    }
  }
  if (!host) {
    var wraps = [].slice.call(document.querySelectorAll('.wrap')).filter(function (w) {
      return !w.closest('.gb-bar') && !w.closest('.gb-tabbar') && !w.closest('nav');
    });
    host = wraps[0] || null;
  }
  if (!host) host = document.querySelector('main');
  if (!host) host = document.body;

  var sec = document.createElement('section');
  sec.className = 'gblr';
  host.insertBefore(sec, host.firstChild);

  var idx = 0;

  function lvlTag(l) {
    var cls = l === '警示' ? 'warn' : 'watch';
    return '<span class="gblr-tag ' + cls + '">' + esc(l) + '</span>';
  }
  function stTag(s) {
    var cls = s === '已完成' ? 'ok' : (s === '待执行' ? 'warn' : 'watch');
    return '<span class="gblr-tag ' + cls + '">' + esc(s) + '</span>';
  }

  function render(i) {
    idx = i;
    var d = R.days[i];
    var rep = d[KEY];
    var team = d.team || {};
    if (!rep) {
      sec.innerHTML = '<div class="gblr-card"><div class="gblr-body"><div class="gblr-empty">'
        + esc(NAME) + ' 尚未提交 ' + esc(d.date) + ' 的日报。AI GB-Team 已将其标记为「未提交」。'
        + '</div></div></div>';
      return;
    }

    /* 本线指令：发给本线的 + 双线共用的 */
    var allDirs = team.directives || [];
    var mineDirs = allDirs.filter(function (x) { return String(x.to).indexOf(FOR) > -1; });
    var warnN = mineDirs.filter(function (x) { return x.level === '警示'; }).length;

    /* 本线发信台账 */
    var entries = [];
    var quota = null;
    if (L && L.days && L.days.length) {
      var lg = null;
      for (var j = 0; j < L.days.length; j++) { if (L.days[j].date === d.date) { lg = L.days[j]; break; } }
      if (!lg) lg = L.days[0];
      quota = lg;
      entries = (lg.entries || []).filter(function (e) {
        return String(e.agent).indexOf(FOR) > -1;
      });
    }

    /* 涉及本线的跨线裁决 */
    var cfs = (team.conflicts || []).filter(function (c) {
      return String(c.sides || '').indexOf(SHORT) > -1;
    });

    var dayBtns = R.days.map(function (x, n) {
      return '<button class="gblr-day' + (n === i ? ' on' : '') + '" data-i="' + n + '">' + esc(x.date) + '</button>';
    }).join('');

    var kpis = (rep.kpi || []).map(function (k) {
      return '<div class="gblr-kpi ' + tone(k.tone) + '"><b>' + esc(k.v) + '</b>'
        + '<span class="k">' + esc(k.k) + '</span><span class="d">' + esc(k.d) + '</span></div>';
    }).join('');

    function list(arr, cls) {
      return (arr || []).map(function (x) { return '<div class="gblr-li ' + cls + '">' + esc(x) + '</div>'; }).join('');
    }

    var dirHtml = mineDirs.length
      ? mineDirs.map(function (x) {
          var dual = String(x.to).indexOf('+') > -1;
          return '<div class="gblr-dir">'
            + '<div class="t"><span class="id">' + esc(x.id) + '</span>' + esc(x.title)
            + lvlTag(x.level) + stTag(x.status) + (dual ? '<span class="gblr-tag dual">双线</span>' : '')
            + '</div>'
            + '<div class="m">' + esc(x.detail) + '</div>'
            + '<div class="b">截止 ' + esc(x.due) + ' · 依据：' + esc(x.basis) + '</div>'
            + '</div>';
        }).join('')
      : '<div class="gblr-empty">当日无下发本线的指令。</div>';

    var mailHtml = entries.length
      ? entries.map(function (e) {
          return '<div class="gblr-mail">'
            + '<div class="s">' + esc(e.time) + ' · ' + esc(e.subject) + '</div>'
            + '<div class="m">→ ' + esc(e.to) + ' · ' + esc(e.type) + ' · ' + esc(e.mode)
            + ' · <b style="color:#1f7a4d">' + esc(e.status) + '</b></div>'
            + '<div class="m">' + esc(e.note) + '</div>'
            + '<div class="i">ID: ' + esc(e.messageId) + '</div>'
            + '</div>';
        }).join('')
      : '<div class="gblr-empty">本线当日无发信记录。<br>所有发送都记入团队中心的发信台账，可逐封核对。</div>';

    var quotaHtml = quota
      ? '<span class="n">全账号已用 ' + esc(quota.quotaUsed) + ' / ' + esc(quota.quotaTotal) + '</span>'
      : '';

    var cfHtml = cfs.length
      ? '<div class="gblr-sec">涉及本线的跨线裁决</div>' + cfs.map(function (c) {
          return '<div class="gblr-cf"><div class="t">' + esc(c.topic) + '</div>'
            + '<div class="s">' + esc(c.sides) + '</div>'
            + '<div class="r"><b>Team 裁决：</b>' + esc(c.ruling) + '</div></div>';
        }).join('')
      : '';

    var dayLab = R.days.length > 1
      ? '<div class="gblr-days"><span class="lab">历史日报</span>' + dayBtns
        + '<span class="gblr-accum">已积累 ' + R.days.length + ' 天 · 发布于 ' + esc(d.publishedAt) + '</span></div>'
      : '';

    sec.innerHTML =
      '<div class="gblr-card">'
      + '<div class="gblr-hd">'
      +   '<div>'
      +     '<div class="gblr-kicker">本线日报 · ' + esc(NAME) + ' 向 AI GB-Team 提交</div>'
      +     '<div class="gblr-title">' + esc(d.date) + ' · ' + esc(d.weekday) + ' · ' + esc(d.cycle) + '</div>'
      +     '<div class="gblr-state">' + esc(rep.scoreLabel || '') + '</div>'
      +   '</div>'
      +   '<div class="gblr-score"><b>' + esc(rep.score) + '</b><span>/100</span></div>'
      + '</div>'
      + dayLab
      + '<div class="gblr-body">'
      +   '<div class="gblr-hl">' + esc(rep.headline) + '</div>'
      +   '<div class="gblr-kpis">' + kpis + '</div>'
      +   '<div class="gblr-sec">本线事实</div>' + list(rep.facts, '')
      +   '<div class="gblr-sec">卡点</div>' + list(rep.blockers, 'blk')
      +   '<div class="gblr-sec">我向 AI GB-Team 提出的请求</div>' + list(rep.asks, 'ask')
      +   '<div class="gblr-cols">'
      +     '<div class="gblr-panel">'
      +       '<div class="gblr-ph"><h4>Team 下发本线的监督指令</h4><span class="n">' + mineDirs.length + ' 项'
      +         (warnN ? ' · 警示 ' + warnN : '') + '</span></div>'
      +       '<div class="gblr-pb">' + dirHtml + '</div>'
      +     '</div>'
      +     '<div class="gblr-panel">'
      +       '<div class="gblr-ph"><h4>本线发信台账</h4>' + (quotaHtml || '<span class="n">' + entries.length + ' 封</span>') + '</div>'
      +       '<div class="gblr-pb">' + mailHtml + '</div>'
      +     '</div>'
      +   '</div>'
      +   cfHtml
      + '</div>'
      + '<div class="gblr-ft">'
      +   '<span>本页只呈现 ' + esc(NAME) + ' 自己的战报。另一条线的日报、两条线对比与全部裁决在团队中心汇总。</span>'
      +   '<span><a href="../index.html">团队中心汇总 →</a> &nbsp;·&nbsp; <a href="' + PEER_HREF + '">' + esc(PEER) + ' →</a></span>'
      + '</div>'
      + '</div>';

    var btns = sec.querySelectorAll('.gblr-day');
    for (var k = 0; k < btns.length; k++) {
      btns[k].addEventListener('click', function (ev) {
        render(parseInt(ev.currentTarget.getAttribute('data-i'), 10));
      });
    }
  }

  render(0);
})();
