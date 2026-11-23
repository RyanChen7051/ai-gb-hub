/* AI GB 每日合作情报挂件（v1.0）
 *
 * 用法（在 Marketing PWA 的 </body> 前引入）：
 *   <script src="../shared/reports/gb-market-intel.js"></script>
 *   <script src="../shared/market-intel-widget.js"></script>
 *
 * 设计要点（与 line-report.js 一致）：
 *   - 全量 gbi- 前缀 + 独立 <style>，不碰各 PWA 原有类名；
 *   - 浅底深字，不用深底深字；
 *   - 只读展示，不回写数据；
 *   - 挂载在页头之后第一个 .wrap 的开头，让「每日合作情报」成为打开页面第一眼看到的内容；
 *   - 支持按联系状态（已发/已入队/未触达/参考）与机会等级（绿/黄/红）筛选；
 *   - 每条动态可展开/收起，来源可点击溯源。
 */
(function () {
  var I = window.GB_MARKET_INTEL;
  if (!I || !I.days || !I.days.length) return;

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  var tone = { green: 'g', blue: 'b', amber: 'a', teal: 't', red: 'r' };
  function tn(c) { return tone[c] || 'b'; }

  var CONTACT = {
    sent: { t: '已发', c: 'sent' },
    queued: { t: '已入队', c: 'queued' },
    uncontacted: { t: '未触达', c: 'uncontacted' },
    reference: { t: '参考', c: 'reference' }
  };
  var LEVEL = {
    green: { t: '可启动', c: 'g' },
    yellow: { t: '前置门槛', c: 'a' },
    red: { t: '禁止/仅情报', c: 'r' }
  };

  var CSS = ''
    + '.gbi{margin:18px 0 4px}'
    + '.gbi-card{background:#fff;border:1px solid #dde5ee;border-radius:14px;overflow:hidden;box-shadow:0 2px 12px rgba(18,58,94,.07)}'
    + '.gbi-hd{background:linear-gradient(135deg,#126b6b,#1f9c9c);color:#fff;padding:15px 18px;display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap}'
    + '.gbi-kicker{font-size:10px;letter-spacing:1.6px;opacity:.88}'
    + '.gbi-title{font-size:16.5px;font-weight:800;margin-top:4px;line-height:1.35}'
    + '.gbi-state{font-size:11.5px;opacity:.92;margin-top:3px}'
    + '.gbi-gen{font-size:11px;text-align:right;opacity:.9;line-height:1.6}'
    + '.gbi-days{display:flex;gap:6px;flex-wrap:wrap;align-items:center;padding:9px 18px;background:#f8fafc;border-bottom:1px solid #dde5ee}'
    + '.gbi-days .lab{font-size:10.5px;color:#5b6b7c;margin-right:2px}'
    + '.gbi-day{border:1px solid #dde5ee;background:#fff;border-radius:8px;padding:3px 9px;font-size:11px;color:#5b6b7c;cursor:pointer;font-family:inherit;transition:.15s}'
    + '.gbi-day:hover{border-color:#126b6b;color:#126b6b}'
    + '.gbi-day.on{background:#126b6b;border-color:#126b6b;color:#fff;font-weight:700}'
    + '.gbi-accum{font-size:10.5px;color:#8a97a6;margin-left:auto}'
    + '.gbi-body{padding:15px 18px}'
    + '.gbi-hl{font-size:13px;font-weight:750;color:#123a5e;line-height:1.7;padding:11px 13px;background:#edf7f6;border-left:3px solid #126b6b;border-radius:8px}'
    + '.gbi-kpis{display:grid;grid-template-columns:repeat(6,1fr);gap:7px;margin-top:12px}'
    + '.gbi-kpi{background:#f8fafc;border:1px solid #dde5ee;border-radius:9px;padding:8px 5px;text-align:center}'
    + '.gbi-kpi b{display:block;font-size:16px;font-weight:800;line-height:1.15}'
    + '.gbi-kpi .k{display:block;font-size:9.5px;color:#5b6b7c;margin-top:3px;line-height:1.3}'
    + '.gbi-kpi .d{display:block;font-size:8.5px;color:#8a97a6;margin-top:2px;line-height:1.35}'
    + '.gbi-kpi.b b{color:#1d5486}.gbi-kpi.g b{color:#1f7a4d}.gbi-kpi.a b{color:#9a6b12}.gbi-kpi.t b{color:#126b6b}.gbi-kpi.r b{color:#b8461f}'
    + '.gbi-sec{font-size:11px;font-weight:800;color:#126b6b;letter-spacing:.5px;margin:17px 0 8px;display:flex;align-items:center;gap:7px;flex-wrap:wrap}'
    + '.gbi-sec .cnt{font-size:9.5px;color:#5b6b7c;background:#eef4f6;border-radius:9px;padding:1px 7px;font-weight:700}'
    + '.gbi-filters{display:flex;gap:6px;flex-wrap:wrap;margin:0 0 10px}'
    + '.gbi-fb{border:1px solid #dde5ee;background:#fff;color:#5b6b7c;border-radius:16px;padding:4px 11px;font-size:11px;font-family:inherit;font-weight:650;cursor:pointer;transition:.15s}'
    + '.gbi-fb:hover{border-color:#126b6b;color:#126b6b}'
    + '.gbi-fb.on{background:#126b6b;border-color:#126b6b;color:#fff}'
    + '.gbi-fb.on.g{background:#1f7a4d;border-color:#1f7a4d}'
    + '.gbi-fb.on.a{background:#9a6b12;border-color:#9a6b12}'
    + '.gbi-fb.on.r{background:#b8461f;border-color:#b8461f}'
    + '.gbi-partners{display:grid;gap:11px}'
    + '.gbi-p{border:1px solid #dde5ee;border-radius:11px;overflow:hidden;background:#fff}'
    + '.gbi-ph{padding:11px 13px;background:#f4f8fa;border-bottom:1px solid #dde5ee;display:flex;align-items:flex-start;gap:9px;flex-wrap:wrap;cursor:pointer}'
    + '.gbi-ph:hover{background:#eaf3f3}'
    + '.gbi-pname{font-size:13.2px;font-weight:800;color:#123a5e;line-height:1.4;flex:1 1 260px}'
    + '.gbi-pname .meta{display:block;font-size:10px;color:#5b6b7c;font-weight:500;margin-top:3px}'
    + '.gbi-badges{display:flex;gap:5px;flex-wrap:wrap;align-items:center}'
    + '.gbi-bdg{font-size:9.5px;font-weight:750;padding:2px 8px;border-radius:9px;white-space:nowrap}'
    + '.gbi-bdg.sent{background:#fdeceb;color:#a83628}'
    + '.gbi-bdg.queued{background:#fbf1d9;color:#9a6b12}'
    + '.gbi-bdg.uncontacted{background:#e8f0f9;color:#1d5486}'
    + '.gbi-bdg.reference{background:#eef2f7;color:#5b6b7c}'
    + '.gbi-bdg.g{background:#e7f4ec;color:#1f7a4d}'
    + '.gbi-bdg.a{background:#fbf1d9;color:#9a6b12}'
    + '.gbi-bdg.r{background:#fdeceb;color:#a83628}'
    + '.gbi-arrow{font-size:11px;color:#8a97a6;transition:transform .18s;flex:0 0 auto}'
    + '.gbi-p.open .gbi-arrow{transform:rotate(90deg)}'
    + '.gbi-pb{display:none;padding:12px 14px}'
    + '.gbi-p.open .gbi-pb{display:block}'
    + '.gbi-tagline{font-size:10.5px;font-weight:700;color:#9a6b12;background:#fff8ed;border:1px solid #f0dcb8;border-radius:7px;padding:6px 9px;margin-bottom:10px}'
    + '.gbi-news{display:grid;gap:8px}'
    + '.gbi-n{border-left:3px solid #bcd3e6;background:#f8fafc;border-radius:0 8px 8px 0;padding:8px 11px}'
    + '.gbi-n .d{font-size:9.5px;color:#9a6b12;font-weight:800;letter-spacing:.2px}'
    + '.gbi-n .t{font-size:11.8px;font-weight:750;color:#123a5e;line-height:1.5;margin-top:2px}'
    + '.gbi-n .x{font-size:11px;color:#41546a;line-height:1.65;margin-top:4px}'
    + '.gbi-n .s{font-size:9.5px;margin-top:5px;color:#8a97a6}'
    + '.gbi-n .s a{color:#1d5486;text-decoration:none;font-weight:700}'
    + '.gbi-n .s a:hover{text-decoration:underline}'
    + '.gbi-block{margin-top:10px;padding:10px 12px;border-radius:8px;background:#f0ebf8;border:1px solid #d9ccef}'
    + '.gbi-block .lb{font-size:10px;font-weight:800;color:#6b4a9c;letter-spacing:.3px}'
    + '.gbi-block .tx{font-size:11.5px;color:#3d304f;line-height:1.7;margin-top:5px}'
    + '.gbi-opp{margin-top:9px;padding:10px 12px;border-radius:8px;background:#eef8f1;border:1px solid #cbe6d6}'
    + '.gbi-opp.yellow{background:#fff8ed;border-color:#f0dcb8}'
    + '.gbi-opp.red{background:#fdeceb;border-color:#f3cfc9}'
    + '.gbi-opp .lb{font-size:10px;font-weight:800;color:#1f7a4d;letter-spacing:.3px}'
    + '.gbi-opp.yellow .lb{color:#9a6b12}.gbi-opp.red .lb{color:#a83628}'
    + '.gbi-opp .ttl{font-size:12px;font-weight:750;color:#123a5e;margin-top:4px}'
    + '.gbi-opp .row{font-size:11px;color:#41546a;line-height:1.65;margin-top:4px}'
    + '.gbi-opp .row b{color:#1d5486}'
    + '.gbi-plays{display:grid;gap:9px}'
    + '.gbi-play{border:1px solid #dde5ee;border-left:3px solid #126b6b;border-radius:9px;padding:10px 12px;background:#fff}'
    + '.gbi-play .h{font-size:12px;font-weight:800;color:#123a5e}'
    + '.gbi-play .h .id{font-size:9px;color:#fff;background:#126b6b;padding:1px 6px;border-radius:5px;margin-right:6px}'
    + '.gbi-play .h .lv{font-size:9px;color:#9a6b12;background:#fbf1d9;padding:1px 6px;border-radius:8px;margin-left:6px}'
    + '.gbi-play .d{font-size:11px;color:#41546a;line-height:1.7;margin-top:5px}'
    + '.gbi-play .b{font-size:9.5px;color:#8a97a6;margin-top:5px;line-height:1.55}'
    + '.gbi-win{display:grid;gap:7px}'
    + '.gbi-w{display:flex;gap:10px;align-items:flex-start;border:1px solid #dde5ee;border-radius:9px;padding:9px 11px;background:#fff;border-left:3px solid #1d5486}'
    + '.gbi-w.amber{border-left-color:#9a6b12}.gbi-w.green{border-left-color:#1f7a4d}'
    + '.gbi-w .dt{font-size:10px;font-weight:800;color:#9a6b12;white-space:nowrap;flex:0 0 118px;line-height:1.5}'
    + '.gbi-w .am{font-size:11.3px;font-weight:750;color:#123a5e;flex:1 1 auto;line-height:1.5}'
    + '.gbi-w .ac{font-size:10.5px;color:#5b6b7c;line-height:1.6;flex:1 1 100%}'
    + '.gbi-gap{font-size:9px;color:#fff;background:#126b6b;border-radius:8px;padding:1px 6px;white-space:nowrap}'
    + '.gbi-li{font-size:11.3px;color:#41546a;line-height:1.7;padding-left:14px;position:relative;margin:4px 0}'
    + '.gbi-li::before{content:"";position:absolute;left:3px;top:8px;width:4px;height:4px;border-radius:50%;background:#b9c6d4}'
    + '.gbi-li.blk::before{background:#b8461f}'
    + '.gbi-esc{border:1px solid #f0dcb8;background:#fff8ed;border-radius:9px;padding:10px 12px;margin-top:8px}'
    + '.gbi-esc .it{font-size:11.8px;font-weight:750;color:#7a5a12}'
    + '.gbi-esc .wh{font-size:10.5px;color:#5c4a28;line-height:1.65;margin-top:3px}'
    + '.gbi-esc .bl{font-size:10px;color:#8a6b28;margin-top:3px}'
    + '.gbi-ft{background:#f8fafc;border-top:1px solid #dde5ee;padding:11px 18px;font-size:11px;color:#5b6b7c;line-height:1.7;display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap}'
    + '.gbi-ft a{color:#126b6b;font-weight:700;text-decoration:none}'
    + '.gbi-ft a:hover{text-decoration:underline}'

    + '.gbp{margin:14px 0 2px;border:1px solid #cfe0e0;border-radius:11px;background:#f4fbfa;overflow:hidden}'
    + '.gbp-hd{padding:10px 13px;background:#e6f4f2;border-bottom:1px solid #cfe0e0;font-size:12px;font-weight:800;color:#126b6b;display:flex;justify-content:space-between;gap:8px;flex-wrap:wrap;align-items:center}'
    + '.gbp-hd .tag{font-size:9.5px;font-weight:750;background:#fff;border:1px solid #cfe0e0;border-radius:9px;padding:2px 8px;color:#126b6b}'
    + '.gbp-b{padding:11px 13px}'
    + '.gbp-st{font-size:11.5px;color:#123a5e;line-height:1.7;background:#fff;border:1px solid #dde5ee;border-radius:8px;padding:9px 11px}'
    + '.gbp-vd{font-size:11.5px;color:#7a4a12;line-height:1.7;background:#fff8ed;border:1px solid #f0dcb8;border-radius:8px;padding:9px 11px;margin-top:8px;font-weight:650}'
    + '.gbp-ev{margin-top:12px;display:grid;gap:8px}'
    + '.gbp-e{border:1px solid #dde5ee;border-left:3px solid #126b6b;border-radius:8px;background:#fff;padding:9px 11px}'
    + '.gbp-e .d{font-size:9.5px;color:#9a6b12;font-weight:800}'
    + '.gbp-e .t{font-size:11.6px;font-weight:750;color:#123a5e;line-height:1.5;margin-top:2px}'
    + '.gbp-e .f{font-size:11px;color:#41546a;line-height:1.65;margin-top:4px}'
    + '.gbp-e .i{font-size:11px;color:#1f6a52;line-height:1.65;margin-top:5px;background:#eef8f1;border-radius:6px;padding:6px 8px}'
    + '.gbp-e .s{font-size:9.5px;color:#8a97a6;margin-top:5px}'
    + '.gbp-e .s a{color:#1d5486;text-decoration:none;font-weight:700}'
    + '.gbp-e .s a:hover{text-decoration:underline}'
    + '.gbp-pb{margin-top:12px;display:grid;gap:8px}'
    + '.gbp-p{border:1px solid #d9ccef;border-left:3px solid #6b4a9c;border-radius:8px;background:#faf7fe;padding:9px 11px}'
    + '.gbp-p .t{font-size:11.6px;font-weight:750;color:#5a3d88;line-height:1.5}'
    + '.gbp-p .d{font-size:11px;color:#4c3c62;line-height:1.65;margin-top:4px}'
    + '.gbp-p .g{font-size:10px;color:#8a6b28;line-height:1.55;margin-top:4px}'
    + '@media(max-width:560px){.gbp-e .i{font-size:10.5px}}'
    + '@media(max-width:900px){.gbi-kpis{grid-template-columns:repeat(3,1fr)}}'
    + '@media(max-width:560px){.gbi-kpis{grid-template-columns:repeat(2,1fr)}.gbi-title{font-size:15px}.gbi-w .dt{flex-basis:100%}}';

  var st = document.createElement('style');
  st.setAttribute('data-gbi', '1');
  st.textContent = CSS;
  document.head.appendChild(st);

  /* 挂载位置：页头之后第一个 .wrap 的开头（与 line-report.js 同款兜底） */
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
  sec.className = 'gbi';
  host.insertBefore(sec, host.firstChild);

  var idx = 0, fContact = 'all', fLevel = 'all';


  function positioningHtml(pos) {
    if (!pos) return '';
    var ev = (pos.evidence || []).map(function (e) {
      return '<div class="gbp-e">'
        + '<div class="d">' + esc(e.date) + (e.v === 'verified' ? ' · 已核实' : ' · 推演') + '</div>'
        + '<div class="t">' + esc(e.title) + '</div>'
        + '<div class="f">' + esc(e.fact) + '</div>'
        + '<div class="i">我方含义：' + esc(e.implication) + '</div>'
        + '<div class="s">来源：' + srcLink(e) + '</div>'
        + '</div>';
    }).join('');
    var pb = (pos.playbook || []).map(function (b) {
      return '<div class="gbp-p">'
        + '<div class="t">' + esc(b.id) + ' · ' + esc(b.title) + '</div>'
        + '<div class="d">' + esc(b.detail) + '</div>'
        + '<div class="g">边界：' + esc(b.guard) + '</div>'
        + '</div>';
    }).join('');
    return '<div class="gbp">'
      + '<div class="gbp-hd"><span>GUNBASE 品牌定位与国际信任基础 · 中国台湾地区品牌</span><span class="tag">事实 / 推演分列</span></div>'
      + '<div class="gbp-b">'
      +   '<div class="gbp-st">' + esc(pos.stance) + '</div>'
      +   '<div class="gbp-vd">' + esc(pos.verdict) + '</div>'
      +   '<div class="gbi-sec">可验证事实与国际经验 <span class="cnt">' + (pos.evidence || []).length + ' 条</span></div>'
      +   '<div class="gbp-ev">' + ev + '</div>'
      +   '<div class="gbi-sec">据此形成的打法（推演） <span class="cnt">' + (pos.playbook || []).length + ' 条</span></div>'
      +   '<div class="gbp-pb">' + pb + '</div>'
      + '</div></div>';
  }

  function srcLink(n) {
    if (!n.url) return esc(n.src || '来源');
    var u = n.url;
    if (!/^https?:\/\//i.test(u)) u = 'https://' + u;
    return '<a href="' + esc(u) + '" target="_blank" rel="noopener noreferrer">' + esc(n.src || u) + ' ↗</a>';
  }

  function partnerHtml(p) {
    var cm = CONTACT[p.contact] || CONTACT.uncontacted;
    var lv = LEVEL[(p.opp && p.opp.level) || 'green'] || LEVEL.green;
    var news = (p.news || []).map(function (n) {
      return '<div class="gbi-n">'
        + '<div class="d">' + esc(n.date) + (n.v === 'verified' ? ' · 已核实' : '') + '</div>'
        + '<div class="t">' + esc(n.title) + '</div>'
        + '<div class="x">' + esc(n.detail) + '</div>'
        + '<div class="s">来源：' + srcLink(n) + '</div>'
        + '</div>';
    }).join('');
    var opp = p.opp || {};
    return '<div class="gbi-p" data-contact="' + esc(p.contact) + '" data-level="' + esc(opp.level || 'green') + '">'
      + '<div class="gbi-ph">'
      +   '<div class="gbi-pname">' + esc(p.name)
      +     '<span class="meta">' + esc(p.country) + ' · ' + esc(p.type) + ' · ' + esc(p.sourceFile) + '</span>'
      +   '</div>'
      +   '<div class="gbi-badges">'
      +     '<span class="gbi-bdg ' + cm.c + '">' + cm.t + '</span>'
      +     '<span class="gbi-bdg ' + lv.c + '">' + lv.t + '</span>'
      +     (p.owner && p.owner !== '未分配' ? '<span class="gbi-bdg reference">归属 ' + esc(p.owner) + '</span>' : '')
      +     '<span class="gbi-arrow">▶</span>'
      +   '</div>'
      + '</div>'
      + '<div class="gbi-pb">'
      +   (p.tag ? '<div class="gbi-tagline">' + esc(p.tag) + '</div>' : '')
      +   '<div class="gbi-news">' + news + '</div>'
      +   (p.strategy ? '<div class="gbi-block"><div class="lb">我方战略（策略推演）</div><div class="tx">' + esc(p.strategy) + '</div></div>' : '')
      +   (opp.title ? '<div class="gbi-opp ' + (opp.level === 'green' ? '' : opp.level === 'yellow' ? 'yellow' : 'red') + '">'
      +     '<div class="lb">机会窗口 · ' + esc(lv.t) + '</div>'
      +     '<div class="ttl">' + esc(opp.title) + '</div>'
      +     '<div class="row"><b>为什么可行：</b>' + esc(opp.why) + '</div>'
      +     '<div class="row"><b>建议动作：</b>' + esc(opp.action) + '</div>'
      +     '<div class="row"><b>闸门：</b>' + esc(opp.gate) + '</div>'
      +     '</div>' : '')
      + '</div>'
      + '</div>';
  }

  function applyFilter() {
    var cards = sec.querySelectorAll('.gbi-p');
    for (var i = 0; i < cards.length; i++) {
      var c = cards[i].getAttribute('data-contact');
      var l = cards[i].getAttribute('data-level');
      var ok = (fContact === 'all' || fContact === c) && (fLevel === 'all' || fLevel === l);
      cards[i].style.display = ok ? '' : 'none';
    }
  }

  function render(i) {
    idx = i;
    fContact = 'all'; fLevel = 'all';
    var d = I.days[i];
    var kpis = (d.kpi || []).map(function (k) {
      return '<div class="gbi-kpi ' + tn(k.tone) + '"><b>' + esc(k.v) + '</b>'
        + '<span class="k">' + esc(k.k) + '</span><span class="d">' + esc(k.d) + '</span></div>';
    }).join('');

    var dayBtns = I.days.map(function (x, n) {
      return '<button class="gbi-day' + (n === i ? ' on' : '') + '" data-i="' + n + '">' + esc(x.date) + '</button>';
    }).join('');

    var cf = [
      { k: 'all', t: '全部对象' },
      { k: 'queued', t: '已入队' },
      { k: 'sent', t: '已发客户' },
      { k: 'uncontacted', t: '未触达' },
      { k: 'reference', t: '仅参考' }
    ].map(function (f) {
      return '<button class="gbi-fb' + (f.k === 'all' ? ' on' : '') + '" data-c="' + f.k + '">' + f.t + '</button>';
    }).join('');
    var lf = [
      { k: 'all', t: '全部机会' },
      { k: 'green', t: '可启动' },
      { k: 'yellow', t: '前置门槛' },
      { k: 'red', t: '禁止/情报' }
    ].map(function (f) {
      return '<button class="gbi-fb' + (f.k === 'all' ? ' on' : '') + '" data-l="' + f.k + '">' + f.t + '</button>';
    }).join('');

    var plays = (d.plays || []).map(function (p) {
      return '<div class="gbi-play"><div class="h"><span class="id">' + esc(p.id) + '</span>'
        + esc(p.title) + '<span class="lv">' + esc(p.level) + '</span></div>'
        + '<div class="d">' + esc(p.detail) + '</div>'
        + '<div class="b">依据：' + esc(p.basis) + '</div></div>';
    }).join('');

    var wins = (d.windows || []).map(function (w) {
      return '<div class="gbi-w ' + esc(w.tone) + '">'
        + '<div class="dt">' + esc(w.date) + '<br><span class="gbi-gap">' + esc(w.gap) + '</span></div>'
        + '<div class="am">' + esc(w.item) + '</div>'
        + '<div class="ac">' + esc(w.action) + '</div>'
        + '</div>';
    }).join('');

    var dedup = (d.dedupNotice || []).map(function (x) { return '<div class="gbi-li blk">' + esc(x) + '</div>'; }).join('');
    var escHtml = (d.escalations || []).map(function (e) {
      return '<div class="gbi-esc"><div class="it">' + esc(e.item) + '</div>'
        + '<div class="wh">为什么需要你：' + esc(e.why) + '</div>'
        + '<div class="bl">卡住：' + esc(e.blocks) + '</div></div>';
    }).join('');

    sec.innerHTML =
      '<div class="gbi-card">'
      + '<div class="gbi-hd">'
      +   '<div>'
      +     '<div class="gbi-kicker">AI GB-Marketing · 每日合作情报</div>'
      +     '<div class="gbi-title">' + esc(d.date) + ' · ' + esc(d.weekday) + ' · 全球品牌合作方动态</div>'
      +     '<div class="gbi-state">已发 / 已入队 / 未触达 · 最新动态 + 我方战略 + 机会窗口</div>'
      +   '</div>'
      +   '<div class="gbi-gen">' + esc(I.meta.cadence) + '<br>生成：' + esc(d.generatedAt) + '</div>'
      + '</div>'
      + (I.days.length > 1 ? '<div class="gbi-days"><span class="lab">历史情报</span>' + dayBtns
          + '<span class="gbi-accum">已积累 ' + I.days.length + ' 天</span></div>' : '')
      + '<div class="gbi-body">'
      +   '<div class="gbi-hl">' + esc(d.headline) + '</div>'
      +   '<div class="gbi-kpis">' + kpis + '</div>'
      +   positioningHtml(d.positioning)
      +   '<div class="gbi-sec">重点跟踪对象 <span class="cnt">' + (d.partners || []).length + ' 个</span></div>'
      +   '<div class="gbi-filters">' + cf + '</div>'
      +   '<div class="gbi-filters">' + lf + '</div>'
      +   '<div class="gbi-partners">' + (d.partners || []).map(partnerHtml).join('') + '</div>'
      +   '<div class="gbi-sec">跨对象战略打法 <span class="cnt">' + (d.plays || []).length + ' 条</span></div>'
      +   '<div class="gbi-plays">' + plays + '</div>'
      +   '<div class="gbi-sec">时间窗日历 <span class="cnt">' + (d.windows || []).length + ' 个</span></div>'
      +   '<div class="gbi-win">' + wins + '</div>'
      +   '<div class="gbi-sec">归属去重提醒（给 AI GB-Sales）</div>' + dedup
      +   '<div class="gbi-sec">需要所有者决策</div>' + escHtml
      + '</div>'
      + '<div class="gbi-ft">'
      +   '<span>' + esc(d.dataNote) + '</span>'
      +   '<span><a href="../index.html">团队中心汇总 →</a></span>'
      + '</div>'
      + '</div>';

    var days = sec.querySelectorAll('.gbi-day');
    for (var k = 0; k < days.length; k++) {
      days[k].addEventListener('click', function (ev) {
        render(parseInt(ev.currentTarget.getAttribute('data-i'), 10));
      });
    }
    var cfs = sec.querySelectorAll('.gbi-fb[data-c]');
    for (var a = 0; a < cfs.length; a++) {
      cfs[a].addEventListener('click', function (ev) {
        fContact = ev.currentTarget.getAttribute('data-c');
        [].slice.call(sec.querySelectorAll('.gbi-fb[data-c]')).forEach(function (b) { b.classList.remove('on'); });
        ev.currentTarget.classList.add('on');
        applyFilter();
      });
    }
    var lfs = sec.querySelectorAll('.gbi-fb[data-l]');
    for (var b2 = 0; b2 < lfs.length; b2++) {
      lfs[b2].addEventListener('click', function (ev) {
        fLevel = ev.currentTarget.getAttribute('data-l');
        [].slice.call(sec.querySelectorAll('.gbi-fb[data-l]')).forEach(function (x) { x.classList.remove('on', 'g', 'a', 'r'); });
        ev.currentTarget.classList.add('on');
        var cls = { green: 'g', yellow: 'a', red: 'r' }[fLevel];
        if (cls) ev.currentTarget.classList.add(cls);
        applyFilter();
      });
    }
    var heads = sec.querySelectorAll('.gbi-ph');
    for (var h = 0; h < heads.length; h++) {
      heads[h].addEventListener('click', function (ev) {
        ev.currentTarget.parentNode.classList.toggle('open');
      });
    }
  }

  render(0);
})();
