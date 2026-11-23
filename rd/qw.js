/* AI GB-RD — 快速落地图纸视图渲染
 * 依赖 qw-data.js（window.GB_RD_QW），渲染进 #qwRoot
 * 所有尺寸/周期/成本均为工程推演与估算，页面必须保留该声明。
 */
(function () {
  var Q = window.GB_RD_QW;
  var root = document.getElementById('qwRoot');
  if (!Q || !root) { return; }

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }
  function sh(t, hint) {
    return '<div class="sh"><span class="bar"></span><h2>' + esc(t) + '</h2>' +
      (hint ? '<span class="hint">' + esc(hint) + '</span>' : '') + '</div>';
  }

  var filter = 'all';

  function items() {
    return (Q.items || []).filter(function (x) { return filter === 'all' || x.tier === filter; });
  }

  /* --- 头部说明 --- */
  function leadHtml() {
    return '<div class="pv-lead">' +
      '<div class="pv-lead-t">' + esc(Q.meta.title) + '</div>' +
      '<div class="pv-lead-s">' + esc(Q.meta.subtitle) + '</div>' +
      '<div class="pv-lead-m">编制 ' + esc(Q.meta.compiledAt) + ' · ' + esc(Q.meta.owner) + '</div>' +
      '</div>' +
      '<div class="note" style="margin-top:11px"><b>排序逻辑（为什么不按痛点分数排）：</b>' + esc(Q.meta.rankingLogic) + '</div>';
  }

  function kpiHtml() {
    return sh('核心指标', '按可交付速度排序') +
      '<div class="kpis">' + (Q.kpis || []).map(function (k) {
        return '<div class="kpi ' + esc(k.tone) + '"><b>' + esc(k.value) + esc(k.unit) + '</b>' +
          '<span class="kk">' + esc(k.label) + '</span><span class="dd">' + esc(k.sub) + '</span></div>';
      }).join('') + '</div>';
  }

  /* --- Tier 说明 --- */
  function tierHtml() {
    return sh('三档分层 · 先做什么', 'Tier A 全过才进 B') +
      '<div class="sgg-grid">' + (Q.tiers || []).map(function (t) {
        return '<div class="tier ' + esc(t.tone) + '">' +
          '<div class="tier-hd"><span class="tier-id">' + esc(t.id) + '</span>' +
          '<b>' + esc(t.name) + '</b><span class="tier-r">' + esc(t.range) + '</span></div>' +
          '<p>' + esc(t.desc) + '</p></div>';
      }).join('') + '</div>';
  }

  /* --- 路线图 --- */
  function roadHtml() {
    return sh('排期建议', '三个阶段，前阶段见效再启动后阶段') +
      '<div class="road">' + (Q.roadmap || []).map(function (r, i) {
        return '<div class="road-i ' + esc(r.tone) + '">' +
          '<div class="road-n">' + (i + 1) + '</div>' +
          '<div class="road-b"><div class="road-p">' + esc(r.phase) + '</div>' +
          '<div class="road-it">' + esc(r.items) + '</div>' +
          '<div class="road-g">' + esc(r.goal) + '</div></div></div>';
      }).join('') + '</div>';
  }

  /* --- 单项卡片 --- */
  function itemCard(x, open) {
    var specs = (x.keySpecs || []).map(function (s) {
      return '<tr><th>' + esc(s.k) + '</th><td>' + esc(s.v) + '</td></tr>';
    }).join('');
    var dels = (x.deliverables || []).map(function (d) { return '<li>' + esc(d) + '</li>'; }).join('');
    var painChips = (x.pains || []).map(function (p) {
      return '<span class="qchip">' + esc(p) + '</span>';
    }).join('');
    var basis = (x.basis || []).join(' · ');

    return '<details class="qw t' + esc(x.tier) + '"' + (open ? ' open' : '') + '>' +
      '<summary>' +
        '<span class="qw-rank">#' + x.rank + '</span>' +
        '<span class="qw-id">' + esc(x.id) + '</span>' +
        '<span class="qw-name">' + esc(x.name) + '</span>' +
        '<span class="qw-meta">' +
          '<span class="qw-tier">Tier ' + esc(x.tier) + '</span>' +
          '<span class="qw-wk">' + esc(x.weeks) + ' 周</span>' +
          '<span class="qw-risk r' + (x.risk === '无' ? '0' : (x.risk === '低' ? '1' : (x.risk === '中' ? '2' : '3'))) + '">风险 ' + esc(x.risk) + '</span>' +
        '</span>' +
      '</summary>' +
      '<div class="qw-body">' +
        '<div class="qw-pains">覆盖痛点 ' + painChips + '<span class="qw-pn">' + esc(x.painNames) + '</span></div>' +
        '<div class="qw-head">' + esc(x.headline) + '</div>' +
        '<div class="qw-why"><b>为什么这项能快：</b>' + esc(x.why) + '</div>' +
        '<div class="qw-sec">图纸与交付物</div><ul class="clean qw-dl">' + dels + '</ul>' +
        '<div class="qw-sec">关键尺寸与公差</div>' +
        '<table class="qw-spec"><tbody>' + specs + '</tbody></table>' +
        '<div class="qw-two">' +
          '<div><div class="qw-sec">工艺路线</div><div class="qw-txt">' + esc(x.process) + '</div></div>' +
          '<div><div class="qw-sec">成本影响（估算）</div><div class="qw-txt">' + esc(x.costDetail) + '</div></div>' +
        '</div>' +
        '<div class="qw-sec">验证方法</div><div class="qw-txt">' + esc(x.verify) + '</div>' +
        '<div class="ac-gate"><b>闸门：</b>' + esc(x.gate) + '</div>' +
        '<div class="qw-basis">依据：' + esc(basis) + '</div>' +
      '</div></details>';
  }

  function listHtml() {
    var total = (Q.items || []).length;
    var a = items();
    var ctrl = '<div class="mx-grp" style="margin-bottom:11px">' +
      '<span class="mx-lab">分层</span>' +
      [['all', '全部 ' + total], ['A', 'Tier A'], ['B', 'Tier B'], ['C', 'Tier C']].map(function (p) {
        return '<button class="fl' + (filter === p[0] ? ' on' : '') + '" data-tf="' + p[0] + '">' + esc(p[1]) + '</button>';
      }).join('') +
      '<span class="mx-cnt">显示 ' + a.length + ' / ' + total + ' 项</span></div>';
    // Tier A 默认展开，其余折叠
    var body = a.map(function (x) { return itemCard(x, x.tier === 'A'); }).join('');
    return sh('十项快赢图纸 · 按可交付速度', 'Tier A 已展开，点标题看细节') + ctrl + body;
  }

  /* --- 后置清单 --- */
  function deferredHtml() {
    var rows = (Q.deferred || []).map(function (d) {
      return '<tr><td class="df-id">' + esc(d.id) + '</td>' +
        '<td class="df-n">' + esc(d.name) + '</td>' +
        '<td class="df-p"><span class="qchip">' + esc(d.pain) + '</span></td>' +
        '<td class="df-w">' + esc(d.weeks) + '</td>' +
        '<td>' + esc(d.why) + '</td>' +
        '<td class="df-r">' + esc(d.ref) + '</td></tr>';
    }).join('');
    return sh('深度研发 · 明确后置', '共 ' + (Q.deferred || []).length + ' 项，暂不启动') +
      '<div class="note guard" style="margin-bottom:11px"><b>为什么后置：</b>这七项要么要重做光学（镜组、镀膜、非球面），要么受出口管制，' +
      '投入以年计且需要外部专利规避。在 Tier A/B 带来现金流与实证数据之前，不应分散工程资源。</div>' +
      '<div class="card"><table class="df-t">' +
      '<thead><tr><th>编号</th><th>项目</th><th>对应痛点</th><th>周期</th><th>为什么排后</th><th>关联</th></tr></thead>' +
      '<tbody>' + rows + '</tbody></table></div>';
  }

  function guardHtml() {
    return sh('边界与护栏') +
      '<div class="note guard"><b>工程与合规边界</b><br>' +
      (Q.guardrails || []).map(function (g) { return '· ' + esc(g); }).join('<br>') + '</div>' +
      '<div class="note" style="margin-top:11px">' + esc(Q.meta.note) + '</div>';
  }

  function renderList() {
    var host = document.getElementById('qwListHost');
    if (host) { host.innerHTML = listHtml(); }
  }

  root.innerHTML = leadHtml() + kpiHtml() + tierHtml() + roadHtml() +
    '<div id="qwListHost">' + listHtml() + '</div>' +
    deferredHtml() + guardHtml();

  root.addEventListener('click', function (ev) {
    var b = ev.target.closest('button[data-tf]');
    if (!b) { return; }
    filter = b.getAttribute('data-tf');
    renderList();
  });
})();
