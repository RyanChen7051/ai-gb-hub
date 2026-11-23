/* AI GB-RD — 用户痛点视图渲染
 * 依赖 pain-data.js（window.GB_RD_PAIN）
 * 渲染进 #painRoot。所有评分均为主观排序工具，页面需保留该声明。
 */
(function () {
  var P = window.GB_RD_PAIN;
  var root = document.getElementById('painRoot');
  if (!P || !root) { return; }

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }
  function sum(x) { return (x.freq || 0) + (x.sev || 0) + (x.entry || 0); }
  function sh(title, hint) {
    return '<div class="sh"><span class="bar"></span><h2>' + esc(title) + '</h2>' +
      (hint ? '<span class="hint">' + esc(hint) + '</span>' : '') + '</div>';
  }

  var sortKey = 'total', prioFilter = 'all';
  var SORTS = [['total', '综合分'], ['freq', '频率'], ['sev', '严重度'], ['entry', '可切入度']];
  var PRIOS = [['all', '全部'], ['P0', 'P0'], ['P1', 'P1'], ['P2', 'P2']];

  function list() {
    var a = (P.matrix || []).filter(function (x) { return prioFilter === 'all' || x.prio === prioFilter; });
    a.sort(function (x, y) {
      if (sortKey === 'total') { return sum(y) - sum(x); }
      return (y[sortKey] || 0) - (x[sortKey] || 0) || (sum(y) - sum(x));
    });
    return a;
  }

  /* ---------- 1. 一页结论 ---------- */
  function verdictHtml() {
    var v = P.verdict || {};
    var pts = (v.points || []).map(function (p) {
      return '<div class="pv-pt"><div class="pv-pt-h"><span class="pv-n">' + esc(p.n) + '</span>' +
        '<b>' + esc(p.t) + '</b></div><p>' + esc(p.d) + '</p></div>';
    }).join('');
    var op = v.opportunity ? '<div class="pv-op"><div class="pv-op-t">' + esc(v.opportunity.title) + '</div>' +
      '<p>' + esc(v.opportunity.body) + '</p></div>' : '';
    return '<div class="sh"><span class="bar"></span><h2>一页结论</h2>' +
      '<span class="hint">调研于 ' + esc(P.meta.surveyedAt) + '</span></div>' +
      '<div class="card pad" style="margin-bottom:12px">' +
      '<div class="headline">' + esc(v.headline || P.meta.headline) + '</div>' +
      '<div class="pv-pts">' + pts + '</div></div>' + op;
  }

  /* ---------- 2. KPI ---------- */
  function kpiHtml() {
    return '<div class="sh"><span class="bar"></span><h2>核心指标</h2>' +
      '<span class="hint">' + esc(P.meta.scope) + '</span></div>' +
      '<div class="kpis">' + (P.kpis || []).map(function (k) {
        return '<div class="kpi ' + esc(k.tone) + '"><b>' + esc(k.value) + esc(k.unit) + '</b>' +
          '<span class="kk">' + esc(k.label) + '</span><span class="dd">' + esc(k.sub) + '</span></div>';
      }).join('') + '</div>';
  }

  /* ---------- 3. 用户分群 ---------- */
  function segHtml() {
    return '<div class="sh"><span class="bar"></span><h2>用户分群 · 痛点不一样，别用一套话术打所有人</h2>' +
      '<span class="hint">共 ' + (P.segments || []).length + ' 类</span></div>' +
      '<div class="sg-grid">' + (P.segments || []).map(function (s) {
        return '<div class="sg ' + esc(s.tone) + '"><h4>' + esc(s.name) + '</h4>' +
          '<div class="sg-l"><span>场景</span>' + esc(s.scene) + '</div>' +
          '<div class="sg-l pain"><span>最痛</span>' + esc(s.pain) + '</div>' +
          '<div class="sg-l pay"><span>愿付费</span>' + esc(s.pay) + '</div></div>';
      }).join('') + '</div>';
  }

  /* ---------- 4. 优先级矩阵 ---------- */
  function matrixHtml() {
    var a = list();
    var ctrl = '<div class="mx-ctrl">' +
      '<div class="mx-grp"><span class="mx-lab">优先级</span>' + PRIOS.map(function (p) {
        return '<button class="fl' + (prioFilter === p[0] ? ' on' : '') + '" data-pf="' + p[0] + '">' + esc(p[1]) + '</button>';
      }).join('') + '</div>' +
      '<div class="mx-grp"><span class="mx-lab">排序</span>' + SORTS.map(function (s) {
        return '<button class="fl' + (sortKey === s[0] ? ' on' : '') + '" data-sk="' + s[0] + '">' + esc(s[1]) + '</button>';
      }).join('') + '</div>' +
      '<span class="mx-cnt">' + a.length + ' / ' + (P.matrix || []).length + ' 条</span></div>';

    var rows = a.map(function (x) {
      return '<tr class="mxr ' + esc(x.prio.toLowerCase()) + '">' +
        '<td class="c-id"><span class="cid">' + esc(x.id) + '</span></td>' +
        '<td class="c-cl">' + esc(x.cluster) + '</td>' +
        '<td class="c-desc">' + esc(x.desc) + '</td>' +
        '<td class="c-who">' + esc(x.who) + '</td>' +
        '<td class="c-n">' + x.freq + '</td>' +
        '<td class="c-n">' + x.sev + '</td>' +
        '<td class="c-n">' + x.entry + '</td>' +
        '<td class="c-n c-sum">' + sum(x) + '</td>' +
        '<td class="c-pr"><span class="tag ' + esc(x.prio.toLowerCase()) + '">' + esc(x.prio) + '</span></td>' +
        '<td class="c-ours">' + esc(x.ours) + '</td>' +
        '</tr>';
    }).join('');

    var table = '<div class="mx-wrap"><table class="mx-t">' +
      '<thead><tr><th>编号</th><th>痛点簇</th><th>痛点描述</th><th>影响人群</th>' +
      '<th>频</th><th>严</th><th>切</th><th>综合</th><th>优先级</th><th>我方对策</th></tr></thead>' +
      '<tbody>' + rows + '</tbody></table></div>';

    var cards = a.map(function (x) {
      return '<div class="mx-c ' + esc(x.prio.toLowerCase()) + '">' +
        '<div class="mx-c-hd"><span class="c-id">' + esc(x.id) + '</span>' +
        '<span class="c-cl">' + esc(x.cluster) + '</span>' +
        '<span class="tag ' + esc(x.prio.toLowerCase()) + '">' + esc(x.prio) + '</span>' +
        '<span class="mx-c-sum">综合 ' + sum(x) + '</span></div>' +
        '<div class="mx-c-d">' + esc(x.desc) + '</div>' +
        '<div class="mx-c-m"><span>频 <b>' + x.freq + '</b></span><span>严 <b>' + x.sev + '</b></span>' +
        '<span>切 <b>' + x.entry + '</b></span><span class="mx-c-who">' + esc(x.who) + '</span></div>' +
        '<div class="mx-c-o"><span>对策</span>' + esc(x.ours) + '</div>' +
        '<div class="mx-c-e"><span>现有</span>' + esc(x.now) + '</div>' +
        '</div>';
    }).join('');

    return '<div class="sh"><span class="bar"></span><h2>痛点优先级矩阵</h2>' +
      '<span class="hint">评分为 1-5 主观排序，非实测数据</span></div>' + ctrl + table +
      '<div class="mx-cards">' + cards + '</div>' +
      '<div class="note" style="margin-top:10px">评分口径：频率（多少人遇到）+ 严重度（坏了多致命）+ 可切入度（我方多容易做出差异）= 综合分。' +
      '<b>这是排序工具，不是事实数据</b>，真实优先级需经销商访谈与小批用户测试校准。</div>';
  }

  /* ---------- 5. 六大痛点簇 ---------- */
  function clusterHtml() {
    return '<div class="sh"><span class="bar"></span><h2>六大痛点簇 · 含证据</h2>' +
      '<span class="hint">点击展开证据与来源</span></div>' +
      (P.clusters || []).map(function (c) {
        var facts = (c.facts || []).map(function (f) { return '<li>' + esc(f) + '</li>'; }).join('');
        return '<details class="cl ' + esc(c.tone) + '">' +
          '<summary><span class="cl-id">' + esc(c.id) + '</span>' +
          '<span class="cl-n">' + esc(c.name) + '</span>' +
          '<span class="cl-one">' + esc(c.one) + '</span>' +
          '<span class="ver lv' + esc(c.ev) + '">' + esc(c.ev) + ' 级</span></summary>' +
          '<div class="cl-body">' +
          '<div class="cl-d">' + esc(c.detail) + '</div>' +
          '<div class="cl-fl">事实要点</div><ul class="clean">' + facts + '</ul>' +
          '<div class="sig-imp"><b>对我方含义：</b>' + esc(c.meaning) + '</div>' +
          '<div class="cl-src">来源：' + esc(c.src) + '</div>' +
          '</div></details>';
      }).join('');
  }

  /* ---------- 6. 设计方向 ---------- */
  function actionCard(a) {
    var pts = (a.points || []).map(function (p) { return '<li>' + esc(p) + '</li>'; }).join('');
    return '<div class="ac ' + esc(a.tone) + '">' +
      '<div class="ac-hd"><span class="ac-code">' + esc(a.code) + '</span><h3>' + esc(a.title) + '</h3></div>' +
      '<div class="ac-body"><p class="ac-why">' + esc(a.why) + '</p>' +
      '<ol class="ac-ol">' + pts + '</ol>' +
      '<div class="ac-gate"><b>闸门：</b>' + esc(a.gate) + '</div></div></div>';
  }
  function actionHtml() {
    var A = P.actions || {};
    var p0 = (A.p0 || []).map(actionCard).join('');
    var p1 = (A.p1 || []).map(actionCard).join('');
    var p2 = (A.p2 || []).map(function (x) {
      return '<div class="ac-p2"><div class="ac-p2-h"><span class="ac-code">' + esc(x.code) + '</span>' +
        '<b>' + esc(x.title) + '</b></div><p>' + esc(x.desc) + '</p></div>';
    }).join('');
    var avoid = (A.avoid || []).map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('');
    return '<div class="sh"><span class="bar"></span><h2>对 GUNBASE 的设计方向</h2>' +
      '<span class="hint">按优先级 · 全部为工程推演</span></div>' +
      '<div class="ac-lvl"><span class="ac-tag p0">P0 · 立刻做</span></div>' + p0 +
      '<div class="ac-lvl"><span class="ac-tag p1">P1 · 中期押注</span></div>' + p1 +
      '<div class="ac-lvl"><span class="ac-tag p2">P2 · 低成本细分</span></div><div class="ac-p2-grid">' + p2 + '</div>' +
      '<div class="ac-lvl"><span class="ac-tag no">不建议现在做</span></div>' +
      '<div class="note guard"><ul class="clean">' + avoid + '</ul></div>';
  }

  /* ---------- 7. 伪痛点 ---------- */
  function pseudoHtml() {
    var rows = (P.pseudo || []).map(function (x) {
      return '<tr><td class="ps-s">' + esc(x.s) + '</td>' +
        '<td class="ps-r">' + esc(x.r) + '</td>' +
        '<td><span class="ver lv' + esc(x.ev) + '">' + esc(x.ev) + '</span></td>' +
        '<td class="ps-n">' + esc(x.note) + '</td></tr>';
    }).join('');
    var mean = (P.pseudoMeaning || []).map(function (m) {
      return '<div class="pv-pt"><div class="pv-pt-h"><b>' + esc(m.t) + '</b></div><p>' + esc(m.d) + '</p></div>';
    }).join('');
    return '<div class="sh"><span class="bar"></span><h2>伪痛点 · 用户把设置问题归因为质量问题</h2>' +
      '<span class="hint">这一节直接影响产品定义</span></div>' +
      '<div class="card" style="margin-bottom:12px"><table class="ps-t">' +
      '<thead><tr><th>用户报的症状</th><th>真实原因</th><th>证据</th><th>说明</th></tr></thead>' +
      '<tbody>' + rows + '</tbody></table></div>' +
      '<div class="pv-pts">' + mean + '</div>';
  }

  /* ---------- 8. 证据分级与局限 ---------- */
  function evidenceHtml() {
    var E = P.evidence || {};
    var lv = (E.levels || []).map(function (x) {
      return '<div class="ev ' + esc(x.tone) + '"><div class="ev-h"><span class="ev-lv">' + esc(x.lv) + '</span>' +
        '<b>' + esc(x.name) + '</b></div><p>' + esc(x.use) + '</p></div>';
    }).join('');
    var lim = (E.limits || []).map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('');
    return '<div class="sh"><span class="bar"></span><h2>证据分级与调研局限</h2>' +
      '<span class="hint">读结论前先对齐这一节</span></div>' +
      '<div class="ev-grid" style="margin-bottom:12px">' + lv + '</div>' +
      '<div class="note guard"><b>必须说明的三个局限</b><ul class="clean">' + lim + '</ul></div>';
  }

  /* ---------- 9. 待补功课 ---------- */
  function gapHtml() {
    var rows = (P.gaps || []).map(function (g) {
      return '<tr><td class="gp-g">' + esc(g.g) + '</td><td>' + esc(g.why) + '</td><td>' + esc(g.how) + '</td></tr>';
    }).join('');
    return '<div class="sh"><span class="bar"></span><h2>尚未解决 · 需要补的功课</h2>' +
      '<span class="hint">共 ' + (P.gaps || []).length + ' 项缺口</span></div>' +
      '<div class="card"><table class="gp-t">' +
      '<thead><tr><th>缺口</th><th>为什么重要</th><th>建议补法</th></tr></thead>' +
      '<tbody>' + rows + '</tbody></table></div>';
  }

  /* ---------- 10. 来源 ---------- */
  function srcHtml() {
    return '<div class="sh"><span class="bar"></span><h2>引用来源</h2>' +
      '<span class="hint">共 ' + (P.sources || []).length + ' 条 · 标注 C 级者数字不可引用</span></div>' +
      '<div class="card pad">' + (P.sources || []).map(function (s) {
        return '<div class="src"><b>' + esc(s.t) + '</b>. “' + esc(s.ttl) + '.” ' + esc(s.y) + '. ' +
          '<a href="' + esc(s.u) + '" target="_blank" rel="noopener">' + esc(s.u) + '</a></div>';
      }).join('') + '</div>';
  }

  /* ---------- 11. 护栏 ---------- */
  function guardHtml() {
    return '<div class="sh"><span class="bar"></span><h2>边界与合规</h2></div>' +
      '<div class="note guard"><b>诚信与合规边界</b><br>' +
      (P.guardrails || []).map(function (g) { return '· ' + esc(g); }).join('<br>') + '</div>';
  }

  function renderMatrix() {
    var host = document.getElementById('mxHost');
    if (host) { host.innerHTML = matrixHtml(); }
  }

  root.innerHTML =
    '<div class="pv-lead">' +
      '<div class="pv-lead-t">' + esc(P.meta.title) + '</div>' +
      '<div class="pv-lead-s">' + esc(P.meta.subtitle) + '</div>' +
      '<div class="pv-lead-m">调研日期 ' + esc(P.meta.surveyedAt) + ' · ' + esc(P.meta.owner) + '</div>' +
    '</div>' +
    verdictHtml() + kpiHtml() + segHtml() +
    '<div id="mxHost">' + matrixHtml() + '</div>' +
    clusterHtml() + actionHtml() + pseudoHtml() + evidenceHtml() + gapHtml() +
    srcHtml() + guardHtml() +
    '<div class="note" style="margin-top:14px">' + esc(P.meta.note) + '</div>';

  root.addEventListener('click', function (ev) {
    var b = ev.target.closest('button[data-pf],button[data-sk]');
    if (!b) { return; }
    if (b.hasAttribute('data-pf')) { prioFilter = b.getAttribute('data-pf'); }
    else { sortKey = b.getAttribute('data-sk'); }
    renderMatrix();
  });
})();
