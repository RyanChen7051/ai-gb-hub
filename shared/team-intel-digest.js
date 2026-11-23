/* AI GB Team 中心 · Marketing 每日合作情报摘要（v1.0）
 * 只读汇总 gb-market-intel.js 的最新一天，不放完整 14 张对象卡（完整内容在 Marketing PWA）。
 * 样式用 mid- 前缀，浅底深字。
 */
(function () {
  var I = window.GB_MARKET_INTEL;
  var host = document.getElementById('miWrap');
  var metaEl = document.getElementById('miMeta');
  if (!I || !I.days || !I.days.length || !host) return;
  if (metaEl) metaEl.textContent = '由 AI GB-Marketing 每早交付 · 完整版在 Marketing PWA';

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  var d = I.days[0];

  var CSS = ''
    + '.mi-card{background:#fff;border:1px solid #dde5ee;border-radius:14px;overflow:hidden;box-shadow:0 2px 12px rgba(18,58,94,.07)}'
    + '.mi-hd{padding:12px 15px;color:#fff;background:linear-gradient(135deg,#126b6b,#1f9c9c);display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap;align-items:center}'
    + '.mi-hd .t{font-size:13px;font-weight:800}'
    + '.mi-hd .s{font-size:10.5px;opacity:.9}'
    + '.mi-body{padding:14px 16px}'
    + '.mi-hl{font-size:12.5px;color:#123a5e;font-weight:700;line-height:1.7;padding:10px 12px;background:#edf7f6;border-left:3px solid #126b6b;border-radius:8px}'
    + '.mi-kpis{display:grid;grid-template-columns:repeat(6,1fr);gap:7px;margin-top:11px}'
    + '.mi-k{background:#f8fafc;border:1px solid #dde5ee;border-radius:9px;padding:7px 5px;text-align:center}'
    + '.mi-k b{display:block;font-size:15px;font-weight:800;color:#123a5e;line-height:1.2}'
    + '.mi-k .k{display:block;font-size:9px;color:#5b6b7c;margin-top:2px;line-height:1.3}'
    + '.mi-cols{display:grid;grid-template-columns:1.2fr 1fr;gap:12px;margin-top:14px;align-items:start}'
    + '.mi-panel{border:1px solid #dde5ee;border-radius:11px;overflow:hidden}'
    + '.mi-ph{padding:9px 12px;background:#f8fafc;border-bottom:1px solid #dde5ee;font-size:11.5px;font-weight:800;color:#123a5e;display:flex;justify-content:space-between;gap:8px;flex-wrap:wrap}'
    + '.mi-ph .n{font-size:10px;color:#5b6b7c;background:#fff;border:1px solid #dde5ee;border-radius:9px;padding:1px 7px}'
    + '.mi-pb{padding:4px 12px 10px}'
    + '.mi-row{padding:8px 0;border-bottom:1px dashed #dde5ee}'
    + '.mi-row:last-child{border-bottom:0}'
    + '.mi-row .t{font-size:11.5px;font-weight:750;color:#123a5e;line-height:1.5}'
    + '.mi-row .x{font-size:10.5px;color:#41546a;line-height:1.65;margin-top:3px}'
    + '.mi-row .b{font-size:9.5px;color:#8a97a6;margin-top:3px;line-height:1.5}'
    + '.mi-badge{font-size:9px;font-weight:750;padding:1px 6px;border-radius:7px;margin-right:5px}'
    + '.mi-badge.g{background:#e7f4ec;color:#1f7a4d}.mi-badge.a{background:#fbf1d9;color:#9a6b12}.mi-badge.r{background:#fdeceb;color:#a83628}'
    + '.mi-ft{padding:10px 16px;background:#f8fafc;border-top:1px solid #dde5ee;font-size:11px;color:#5b6b7c;display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap;line-height:1.6}'
    + '.mi-ft a{color:#126b6b;font-weight:700;text-decoration:none}'
    + '.mi-ft a:hover{text-decoration:underline}'

    + '.mi-pos{margin-top:13px;border:1px solid #cfe0e0;border-radius:11px;background:#f4fbfa;overflow:hidden}'
    + '.mi-pos .ph{padding:9px 12px;background:#e6f4f2;border-bottom:1px solid #cfe0e0;font-size:11.5px;font-weight:800;color:#126b6b;display:flex;justify-content:space-between;gap:8px;flex-wrap:wrap}'
    + '.mi-pos .ph .tg{font-size:9.5px;font-weight:750;background:#fff;border:1px solid #cfe0e0;border-radius:9px;padding:1px 7px}'
    + '.mi-pos .pb{padding:10px 12px}'
    + '.mi-pos .vd{font-size:11px;color:#7a4a12;line-height:1.7;background:#fff8ed;border:1px solid #f0dcb8;border-radius:8px;padding:8px 10px}'
    + '.mi-pos .row{font-size:10.5px;color:#41546a;line-height:1.65;margin-top:6px;padding-left:12px;position:relative}'
    + '.mi-pos .row::before{content:"";position:absolute;left:2px;top:7px;width:4px;height:4px;border-radius:50%;background:#126b6b}'
    + '.mi-pos .row b{color:#123a5e}'
    + '@media(max-width:820px){.mi-kpis{grid-template-columns:repeat(3,1fr)}.mi-cols{grid-template-columns:1fr}}'
    + '@media(max-width:430px){.mi-kpis{grid-template-columns:repeat(2,1fr)}}';

  var st = document.createElement('style');
  st.setAttribute('data-mi', '1');
  st.textContent = CSS;
  document.head.appendChild(st);

  var lvName = { green: '可启动', yellow: '前置门槛', red: '禁止/情报' };
  var lvCls = { green: 'g', yellow: 'a', red: 'r' };


  var pos = d.positioning;
  var posHtml = '';
  if (pos) {
    var ev = (pos.evidence || []).slice(0, 4).map(function (e) {
      return '<div class="row"><b>' + esc(e.title) + '</b> - ' + esc(e.implication) + '</div>';
    }).join('');
    var pb = (pos.playbook || []).slice(0, 2).map(function (b) {
      return '<div class="row"><b>' + esc(b.id + ' ' + b.title) + '</b> - ' + esc(b.detail) + '</div>';
    }).join('');
    posHtml = '<div class="mi-pos">'
      + '<div class="ph"><span>品牌定位与国际信任基础 - 中国台湾地区品牌</span><span class="tg">产地标签非信任状</span></div>'
      + '<div class="pb"><div class="vd">' + esc(pos.verdict) + '</div>' + ev + pb + '</div></div>';
  }

  var kpis = (d.kpi || []).map(function (k) {
    return '<div class="mi-k"><b>' + esc(k.v) + '</b><span class="k">' + esc(k.k) + '</span></div>';
  }).join('');

  var hot = (d.partners || []).filter(function (p) { return p.contact !== 'reference'; }).slice(0, 6).map(function (p) {
    var o = p.opp || {};
    var l = o.level || 'green';
    var latest = (p.news || [])[0] || {};
    return '<div class="mi-row">'
      + '<div class="t"><span class="mi-badge ' + (lvCls[l] || 'g') + '">' + esc(lvName[l] || l) + '</span>' + esc(p.name) + '</div>'
      + '<div class="x">' + esc(latest.title || '') + (latest.date ? '（' + esc(latest.date) + '）' : '') + '</div>'
      + '<div class="b">我方机会：' + esc(o.title || '—') + ' · 闸门：' + esc(o.gate || '—') + '</div>'
      + '</div>';
  }).join('');

  var wins = (d.windows || []).slice(0, 4).map(function (w) {
    return '<div class="mi-row"><div class="t">' + esc(w.date) + ' · ' + esc(w.gap) + '</div>'
      + '<div class="x">' + esc(w.item) + '</div>'
      + '<div class="b">建议：' + esc(w.action) + '</div></div>';
  }).join('');

  var escHtml = (d.escalations || []).map(function (e) {
    return '<div class="mi-row"><div class="t">' + esc(e.item) + '</div><div class="x">' + esc(e.why) + '</div></div>';
  }).join('');

  host.innerHTML = '<div class="mi-card">'
    + '<div class="mi-hd"><div class="t">' + esc(d.date) + ' · ' + esc(d.weekday) + ' · 全球品牌合作方情报</div>'
    + '<div class="s">生成 ' + esc(d.generatedAt) + ' · 已发 / 已入队 / 未触达全覆盖</div></div>'
    + '<div class="mi-body">'
    + '<div class="mi-hl">' + esc(d.headline) + '</div>'
    + '<div class="mi-kpis">' + kpis + '</div>'
    + posHtml
    + '<div class="mi-cols">'
    +   '<div class="mi-panel"><div class="mi-ph"><span>重点对象 · 最新动态与机会</span><span class="n">' + (d.partners || []).length + ' 个</span></div><div class="mi-pb">' + hot + '</div></div>'
    +   '<div>'
    +     '<div class="mi-panel"><div class="mi-ph"><span>时间窗日历</span><span class="n">' + (d.windows || []).length + ' 个</span></div><div class="mi-pb">' + wins + '</div></div>'
    +     '<div class="mi-panel" style="margin-top:12px"><div class="mi-ph"><span>需要所有者决策</span><span class="n">' + (d.escalations || []).length + ' 项</span></div><div class="mi-pb">' + escHtml + '</div></div>'
    +   '</div>'
    + '</div>'
    + '</div>'
    + '<div class="mi-ft"><span>本区只做摘要；14 个对象的逐条动态、战略推演与来源 URL 在 Marketing PWA。</span>'
    + '<span><a href="./marketing/index.html">打开 AI GB-Marketing 完整版 →</a></span></div>'
    + '</div>';
})();
