/* AI GB-RD — 打样闭环视图渲染
 * 依赖 flow-data.js（window.GB_RD_FLOW），渲染进 #flowRoot
 * 所有周期/公差/膜厚均为工程推演与估算，页面必须保留该声明。
 */
(function () {
  var F = window.GB_RD_FLOW;
  var root = document.getElementById('flowRoot');
  if (!F || !root) { return; }

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }
  function sh(t, hint) {
    return '<div class="sh"><span class="bar"></span><h2>' + esc(t) + '</h2>' +
      (hint ? '<span class="hint">' + esc(hint) + '</span>' : '') + '</div>';
  }
  function lis(arr, cls) {
    return '<ul class="clean ' + (cls || '') + '">' + (arr || []).map(function (x) {
      return '<li>' + esc(x) + '</li>';
    }).join('') + '</ul>';
  }

  /* --- 头部 --- */
  function leadHtml() {
    return '<div class="pv-lead">' +
      '<div class="pv-lead-t">' + esc(F.meta.title) + '</div>' +
      '<div class="pv-lead-s">' + esc(F.meta.subtitle) + '</div>' +
      '<div class="pv-lead-m">编制 ' + esc(F.meta.compiledAt) + ' · ' + esc(F.meta.owner) + '</div>' +
      '</div>' +
      '<div class="note" style="margin-top:11px"><b>为什么每一步都要闸门：</b>' + esc(F.meta.logic) + '</div>';
  }

  /* --- KPI --- */
  function kpiHtml() {
    return sh('闭环状态', '现在走到哪一步') +
      '<div class="kpis">' + (F.kpis || []).map(function (k) {
        return '<div class="kpi ' + esc(k.tone) + '"><b>' + esc(k.value) + esc(k.unit) + '</b>' +
          '<span class="kk">' + esc(k.label) + '</span><span class="dd">' + esc(k.sub) + '</span></div>';
      }).join('') + '</div>';
  }

  /* --- 流水线全景条 --- */
  function stripHtml() {
    var nodes = (F.stages || []).map(function (s) {
      return '<div class="fs t-' + esc(s.tone) + '">' +
        '<span class="fs-n">' + s.n + '</span>' +
        '<span class="fs-t">' + esc(s.name) + '</span>' +
        '<span class="fs-e">' + esc(s.en) + '</span>' +
        '</div>';
    }).join('');
    return sh('八阶段全景', '从痛点原话到销售素材') +
      '<div class="fw-strip">' + nodes + '</div>';
  }

  /* --- 阶段卡片 --- */
  function stageCard(s, open) {
    var acts = (s.actions || []).map(function (a) { return '<li>' + esc(a) + '</li>'; }).join('');
    var pits = (s.pitfalls || []).map(function (p) { return '<li>' + esc(p) + '</li>'; }).join('');
    return '<details class="fw t-' + esc(s.tone) + '"' + (open ? ' open' : '') + '>' +
      '<summary>' +
        '<span class="fw-n">' + s.n + '</span>' +
        '<span class="fw-id">' + esc(s.id) + '</span>' +
        '<span class="fw-name">' + esc(s.name) + '</span>' +
        '<span class="fw-en">' + esc(s.en) + '</span>' +
        '<span class="fw-meta">' +
          '<span class="fw-days">' + esc(s.days) + '</span>' +
          '<span class="fw-owner">' + esc(s.owner) + '</span>' +
        '</span>' +
      '</summary>' +
      '<div class="fw-body">' +
        '<div class="fw-io">' +
          '<div><span class="fw-k">输入</span><div class="fw-v">' + esc(s.input) + '</div></div>' +
          '<div><span class="fw-k">输出</span><div class="fw-v">' + esc(s.output) + '</div></div>' +
        '</div>' +
        '<div class="fw-sec">怎么做</div><ul class="clean fw-li">' + acts + '</ul>' +
        '<div class="fw-two">' +
          '<div><div class="fw-sec">工具 / 条件</div><div class="fw-txt">' + esc(s.tools) + '</div>' +
            '<div class="fw-sec">交付物</div><div class="fw-txt">' + esc(s.deliverable) + '</div></div>' +
          '<div><div class="fw-sec">常见翻车点</div><ul class="clean fw-pit">' + pits + '</ul></div>' +
        '</div>' +
        '<div class="ac-gate"><b>闸门（不过不许进下一段）：</b>' + esc(s.gate) + '</div>' +
      '</div></details>';
  }

  function stagesHtml() {
    // 当前进行中的阶段（stage 3 / S3）默认展开
    return sh('逐段拆解', '当前进行中的阶段已展开') +
      (F.stages || []).map(function (s) { return stageCard(s, s.n === 3); }).join('');
  }

  /* --- 三条物理约束 --- */
  function constraintsHtml() {
    var body = (F.constraints || []).map(function (c) {
      return '<div class="fx ' + esc(c.tone) + '">' +
        '<div class="fx-h"><span class="fx-id">' + esc(c.id) + '</span><span class="fx-t">' + esc(c.title) + '</span></div>' +
        '<div class="fx-b">' + esc(c.body) + '</div>' +
        '<div class="fx-fix"><b>改法：</b>' + esc(c.fix) + '</div>' +
        '</div>';
    }).join('');
    return sh('三条物理约束 · 全链路最容易翻车的地方', '打印 + 喷涂 + 渲染的硬限制') +
      '<div class="note guard" style="margin-bottom:11px"><b>这三条不是流程建议，是物理事实：</b>' +
      '越过它们，图纸再漂亮、渲染再惊艳，样件到装配那一步就会废掉，或者更糟——把无效结论交给销售。</div>' +
      body;
  }

  /* --- Sales Kit --- */
  function kitHtml() {
    var items = (F.kit.items || []).map(function (k) {
      return '<div class="kiti">' +
        '<div class="kiti-h"><span class="kiti-n">' + k.n + '</span><b>' + esc(k.name) + '</b></div>' +
        '<div class="kiti-m"><span class="kiti-k">必须含</span>' + esc(k.must) + '</div>' +
        '<div class="kiti-w">' + esc(k.why) + '</div>' +
        '</div>';
    }).join('');
    var banned = (F.banned || []).map(function (b) { return '<li>' + esc(b) + '</li>'; }).join('');
    return sh('S8 交接标准 · 给销售什么', '缺一件都不算完成') +
      '<div class="note" style="margin-bottom:11px">' + esc(F.kit.note) + '</div>' +
      '<div class="kit-grid">' + items + '</div>' +
      '<div class="band"><div class="band-h">禁用词与禁用表述（对外素材自查）</div>' +
      '<ul class="clean band-list">' + banned + '</ul></div>';
  }

  /* --- 十项进度 --- */
  function progressHtml() {
    var rows = (F.progress || []).map(function (p) {
      return '<tr>' +
        '<td class="pg-id">' + esc(p.id) + '</td>' +
        '<td class="pg-nm">' + esc(p.name) + '</td>' +
        '<td class="pg-tr"><span class="qchip">Tier ' + esc(p.tier) + '</span></td>' +
        '<td class="pg-st">' + esc(p.status) + '</td>' +
        '<td>' + esc(p.next) + '</td>' +
        '<td class="pg-bk">' + esc(p.blocker) + '</td>' +
        '</tr>';
    }).join('');
    var cards = (F.progress || []).map(function (p) {
      return '<div class="pgc"><div class="pgc-h"><span class="cid">' + esc(p.id) + '</span>' +
        '<b>' + esc(p.name) + '</b><span class="qchip">Tier ' + esc(p.tier) + '</span></div>' +
        '<div class="pgc-s">' + esc(p.status) + '</div>' +
        '<div class="pgc-x"><span>下一步</span>' + esc(p.next) + '</div>' +
        '<div class="pgc-k"><span>卡点</span>' + esc(p.blocker) + '</div></div>';
    }).join('');
    return sh('十项图纸在链上的位置', '全部在 S3，尚未进入 S4') +
      '<div class="card pg-wrap"><table class="pg-t">' +
      '<thead><tr><th>编号</th><th>项目</th><th>档位</th><th>当前状态</th><th>下一步</th><th>卡点</th></tr></thead>' +
      '<tbody>' + rows + '</tbody></table></div>' +
      '<div class="pg-cards">' + cards + '</div>';
  }

  function guardHtml() {
    return sh('边界与护栏') +
      '<div class="note guard">' + (F.guardrails || []).map(function (g) { return '· ' + esc(g); }).join('<br>') + '</div>';
  }

  root.innerHTML = leadHtml() + kpiHtml() + stripHtml() + stagesHtml() +
    constraintsHtml() + kitHtml() + progressHtml() + guardHtml();
})();
