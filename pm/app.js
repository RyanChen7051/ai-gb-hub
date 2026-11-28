/* AI GB-PM 框架视图渲染 — 只读数据契约，不写业务线数据 */
(function () {
  'use strict';
  var D = window.GB_PM;
  if (!D) { document.body.innerHTML = '<p style="padding:40px">pm/data.js 加载失败。</p>'; return; }

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>\"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }
  function card(title, body) {
    return '<div class="card pad" style="margin-bottom:12px"><h3>' + esc(title) + '</h3>' + body + '</div>';
  }
  function list(items) {
    return '<ul class="clean">' + items.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>';
  }
  function tags(items, cls) {
    return items.map(function (x) { return '<span class="tag ' + (cls || '') + '">' + esc(x) + '</span>'; }).join('');
  }

  var VIEWS = [
    ['overview', '总览'], ['portfolio', '项目组合'], ['schedule', '排期'],
    ['milestone', '里程碑'], ['burndown', '燃尽图'], ['rd', 'RD 协同'],
    ['report', '总部汇报'], ['governance', '治理与模板']
  ];
  var current = 'overview';
  var switcher = document.getElementById('viewSwitch');
  switcher.innerHTML = VIEWS.map(function (v) {
    return '<button type="button" data-v="' + v[0] + '"' + (v[0] === current ? ' class="on"' : '') + '>' + esc(v[1]) + '</button>';
  }).join('');
  switcher.addEventListener('click', function (e) {
    var b = e.target && e.target.closest ? e.target.closest('button[data-v]') : null;
    if (b) show(b.getAttribute('data-v'));
  });
  function show(v) {
    current = v;
    var secs = document.querySelectorAll('section[data-view]');
    for (var i = 0; i < secs.length; i++) secs[i].hidden = secs[i].getAttribute('data-view') !== v;
    var bs = switcher.querySelectorAll('button');
    for (var j = 0; j < bs.length; j++) bs[j].className = bs[j].getAttribute('data-v') === v ? 'on' : '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  document.getElementById('truthNotice').innerHTML =
    '<b>事实边界：</b>' + esc(D.meta.status) + '。组织汇报关系来自团队契约；本页项目 / 排期 / 移交单全部为示例占位（demo=true），' +
    '不是真实客户项目，不得直接写进总部战报的事实字段。<br>' + esc(D.meta.truthPolicy.join('　'));

  var foot = window.GB_TEAM && window.GB_TEAM.meta ? window.GB_TEAM.meta.note : '团队契约未加载。';
  document.getElementById('footMeta').textContent = D.meta.name + ' v' + D.meta.version + ' · ' + foot;

  /* 版本哨兵：只提示，不自动刷新，符合全站「减法重构」约定 */
  try {
    fetch('./version.json?t=' + Date.now(), { cache: 'no-store' })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (v) {
        if (!v) return;
        document.getElementById('verPill').textContent = '本地框架 v' + D.meta.version;
        if (v.version && v.version !== D.meta.version) {
          document.getElementById('gbVerNum').textContent = v.version;
          document.getElementById('gbVerBar').classList.add('show');
        }
      }).catch(function () { document.getElementById('verPill').textContent = '框架 v' + D.meta.version; });
  } catch (e) { document.getElementById('verPill').textContent = '框架 v' + D.meta.version; }
  document.getElementById('gbVerX').addEventListener('click', function () { document.getElementById('gbVerBar').classList.remove('show'); });
  document.getElementById('gbVerGo').addEventListener('click', function () {
    if (navigator.serviceWorker && navigator.serviceWorker.getRegistrations) {
      navigator.serviceWorker.getRegistrations().then(function (rs) { rs.forEach(function (r) { r.unregister(); }); location.reload(); });
    } else location.reload();
  });

  /* ---------- 总览 ---------- */
  function renderOverview() {
    var p = D.projects[0];
    var tasks = p.schedule.length;
    var done = p.schedule.filter(function (t) { return t.progress >= 100; }).length;
    var ms = p.milestones.length;
    var msDone = p.milestones.filter(function (m) { return /达成/.test(m.status); }).length;
    var last = p.burndown.actual[p.burndown.actual.length - 1];
    document.getElementById('ovMeta').textContent = D.meta.createdAt + ' 建立 · ' + D.meta.status;
    document.getElementById('ovBody').innerHTML =
      '<div class="grid g3" style="margin-bottom:12px">' +
        '<div class="kpi"><b>' + D.projects.length + '</b><span>在管项目（示例）</span><small>真实台账未接入</small></div>' +
        '<div class="kpi"><b>' + done + '/' + tasks + '</b><span>示例任务完成</span><small>按 progress=100 计</small></div>' +
        '<div class="kpi"><b>' + msDone + '/' + ms + '</b><span>示例里程碑达成</span><small>准出证据驱动</small></div>' +
        '<div class="kpi"><b>' + last + '</b><span>示例剩余工作量</span><small>来自燃尽图示例线</small></div>' +
      '</div>' +
      card('PM 职责边界（所有者任务书 + 团队契约）',
        '<p>' + esc(D.charter.mission) + '</p><div style="margin-top:9px">' +
        tags(D.charter.responsibilities.slice(0, 4), 'p') + '</div>') +
      card('汇报链与搭配关系',
        '<p><b>汇报对象：</b>' + esc(D.meta.reportsTo) + '　<b>搭配角色：</b>' + esc(D.meta.pairsWith) + '</p>' +
        '<p style="margin-top:6px">总部按现有日报口径汇整；PM 自身不对外发信、不改业务线数据。</p>') +
      card('固定节奏（待所有者确认项已标明）',
        list(D.charter.cadence.map(function (c) { return c.id + ' ' + c.name + ' · ' + c.time + ' · 产物：' + c.output; })));
  }

  /* ---------- 项目组合 ---------- */
  function renderPortfolio() {
    document.getElementById('portfolioBody').innerHTML = D.projects.map(function (p) {
      return '<div class="card pad" style="margin-bottom:12px">' +
        '<h3>' + esc(p.name) + ' <span class="tag p">' + esc(p.phase) + '</span><span class="tag a">' + esc(p.health) + '</span></h3>' +
        '<p>编号：' + esc(p.id) + ' · 客户：' + esc(p.customer) + ' · 责任人：' + esc(p.owner) + '</p>' +
        '<div style="margin-top:9px"><button type="button" class="btn" data-go="schedule">查看排期</button> ' +
        '<button type="button" class="btn" data-go="milestone">查看里程碑</button> ' +
        '<button type="button" class="btn" data-go="burndown">查看燃尽图</button></div>' +
        '<p style="margin-top:8px;color:#9a6b12">示例占位项目，非真实客户资料。</p></div>';
    }).join('') +
    card('立项必备字段（建真实项目时逐项补齐）',
      '<div class="scroll"><table><thead><tr><th>字段</th><th>说明</th></tr></thead><tbody>' +
      '<tr><td>项目编号 / 名称</td><td>唯一编号，与客户订单或需求单关联</td></tr>' +
      '<tr><td>客户 / 窗口</td><td>对接方与沟通窗口，个人信息不进公开页面</td></tr>' +
      '<tr><td>范围与验收标准</td><td>可判定的准出条件，避免口头验收</td></tr>' +
      '<tr><td>WBS / 责任人 / 起止</td><td>对应排期表字段</td></tr>' +
      '<tr><td>里程碑与证据</td><td>对应里程碑表字段</td></tr>' +
      '<tr><td>风险与延误分类</td><td>使用下方延误分类代码</td></tr>' +
      '</tbody></table></div>');
    document.getElementById('portfolioBody').addEventListener('click', function (e) {
      var b = e.target && e.target.closest ? e.target.closest('button[data-go]') : null;
      if (b) show(b.getAttribute('data-go'));
    });
  }

  /* ---------- 排期 ---------- */
  function renderSchedule() {
    var p = D.projects[0];
    document.getElementById('scheduleBody').innerHTML =
      card('示例项目：' + p.name,
        '<div class="scroll"><table><thead><tr><th>编号</th><th>任务</th><th>责任人</th><th>起</th><th>止</th><th>进度</th><th>状态</th></tr></thead><tbody>' +
        p.schedule.map(function (t) {
          return '<tr><td>' + esc(t.id) + '</td><td>' + esc(t.task) + '</td><td>' + esc(t.owner) + '</td>' +
            '<td>' + esc(t.start) + '</td><td>' + esc(t.end) + '</td>' +
            '<td><div class="progress"><i style="width:' + Math.max(0, Math.min(100, t.progress)) + '%"></i></div>' + esc(t.progress) + '%</td>' +
            '<td>' + esc(t.status) + '</td></tr>';
        }).join('') + '</tbody></table></div>') +
      card('排期模板（基线时长为示例，需按项目确认）',
        '<div class="scroll"><table><thead><tr><th>阶段</th><th>示例基线</th><th>责任人</th><th>交付物</th></tr></thead><tbody>' +
        D.scheduleTemplate.map(function (s) {
          return '<tr><td>' + esc(s.phase) + '</td><td>' + esc(s.baseline) + '</td><td>' + esc(s.owner) + '</td><td>' + esc(s.deliverable) + '</td></tr>';
        }).join('') + '</tbody></table></div>') +
      card('生命周期闸门',
        '<div class="scroll"><table><thead><tr><th>阶段</th><th>进入条件</th><th>准出条件</th><th>证据</th></tr></thead><tbody>' +
        D.lifecycle.map(function (l) {
          return '<tr><td>' + esc(l.id + ' ' + l.name) + '</td><td>' + esc(l.entry) + '</td><td>' + esc(l.exit) + '</td><td>' + esc(l.evidence) + '</td></tr>';
        }).join('') + '</tbody></table></div>');
  }

  /* ---------- 里程碑 ---------- */
  function renderMilestone() {
    var p = D.projects[0];
    document.getElementById('milestoneBody').innerHTML =
      card('示例里程碑清单',
        '<div class="scroll"><table><thead><tr><th>编号</th><th>名称</th><th>计划</th><th>准出条件</th><th>证据</th><th>责任</th><th>状态</th></tr></thead><tbody>' +
        p.milestones.map(function (m) {
          var cls = /达成/.test(m.status) ? 'g' : (/延误|阻塞/.test(m.status) ? 'r' : 'a');
          return '<tr><td>' + esc(m.id) + '</td><td>' + esc(m.name) + '</td><td>' + esc(m.due) + '</td>' +
            '<td>' + esc(m.criteria) + '</td><td>' + esc(m.evidence) + '</td><td>' + esc(m.owner) + '</td>' +
            '<td><span class="tag ' + cls + '">' + esc(m.status) + '</span></td></tr>';
        }).join('') + '</tbody></table></div>') +
      card('里程碑字段契约',
        '<div class="scroll"><table><thead><tr><th>字段</th><th>含义</th></tr></thead><tbody>' +
        D.milestoneTemplate.map(function (f) { return '<tr><td>' + esc(f.field) + '</td><td>' + esc(f.desc) + '</td></tr>'; }).join('') +
        '</tbody></table></div>');
  }

  /* ---------- 燃尽图 ---------- */
  function renderBurndown() {
    var p = D.projects[0], b = p.burndown;
    var W = 680, H = 270, L = 46, R = 18, T = 18, B = 36;
    var n = b.days.length, total = b.total;
    function x(i) { return L + i * (W - L - R) / Math.max(1, n - 1); }
    function y(v) { return T + (1 - v / total) * (H - T - B); }
    var ideal = 'M' + x(0) + ',' + y(total) + ' L' + x(n - 1) + ',' + y(0);
    var pts = b.actual.map(function (v, i) { return x(i) + ',' + y(v); }).join(' ');
    var grid = [0, total / 2, total].map(function (v) {
      return '<line x1="' + L + '" y1="' + y(v) + '" x2="' + (W - R) + '" y2="' + y(v) + '" stroke="#dde5ee" stroke-width="1"/>' +
        '<text x="' + (L - 8) + '" y="' + (y(v) + 4) + '" text-anchor="end" font-size="10" fill="#5b6b7c">' + v + '</text>';
    }).join('');
    var xlabels = b.days.map(function (d, i) {
      return '<text x="' + x(i) + '" y="' + (H - 10) + '" text-anchor="middle" font-size="10" fill="#5b6b7c">' + esc(d) + '</text>';
    }).join('');
    var dots = b.actual.map(function (v, i) {
      return '<circle cx="' + x(i) + '" cy="' + y(v) + '" r="3" fill="#6b4a9c"/>';
    }).join('');
    document.getElementById('burndownBody').innerHTML =
      card(b.sprint + ' · 示例线',
        '<svg class="burn" viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="示例燃尽图">' +
        '<rect x="0" y="0" width="' + W + '" height="' + H + '" fill="#ffffff"/>' + grid +
        '<line x1="' + L + '" y1="' + T + '" x2="' + L + '" y2="' + (H - B) + '" stroke="#9aa8b6"/>' +
        '<line x1="' + L + '" y1="' + (H - B) + '" x2="' + (W - R) + '" y2="' + (H - B) + '" stroke="#9aa8b6"/>' +
        '<path d="' + ideal + '" fill="none" stroke="#b8461f" stroke-width="2" stroke-dasharray="6 4"/>' +
        '<polyline points="' + pts + '" fill="none" stroke="#6b4a9c" stroke-width="2.5"/>' + dots + xlabels +
        '</svg>' +
        '<div class="legend"><span><i style="background:#b8461f"></i>理想线（计算值）</span>' +
        '<span><i style="background:#6b4a9c"></i>实际剩余（示例值）</span></div>') +
      card('算法口径',
        '<p>理想线 = 从「总工作量」在第 1 天线性递减到第 N 天的 0；实际线 = 每日登记的剩余工作量。' +
        '两线偏离即触发原因归因，归因必须使用下方分类代码并附证据。当前实际线为示例值，不是真实工时。</p>') +
      card('延误原因分类（写入总部汇报时必须选一类）',
        '<div class="scroll"><table><thead><tr><th>代码</th><th>名称</th><th>说明</th><th>责任方</th><th>证据</th></tr></thead><tbody>' +
        D.delayTaxonomy.map(function (d) {
          return '<tr><td>' + esc(d.code) + '</td><td>' + esc(d.name) + '</td><td>' + esc(d.desc) + '</td><td>' + esc(d.owner) + '</td><td>' + esc(d.evidence) + '</td></tr>';
        }).join('') + '</tbody></table></div>');
  }

  /* ---------- RD 协同 ---------- */
  function renderRD() {
    var ri = D.rdInterface;
    document.getElementById('rdBody').innerHTML =
      card('协同原则', '<p>' + esc(ri.principle) + '</p>') +
      '<div class="grid g2">' +
        card('PM 从 RD 接收（输入）', list(ri.inputs)) +
        card('PM 向 RD 交付（输出）', list(ri.outputs)) +
      '</div>' +
      card('硬闸门', list(ri.gates)) +
      card('移交单骨架（示例占位）',
        '<div class="scroll"><table><thead><tr><th>编号</th><th>发起</th><th>接收</th><th>事项</th><th>期限</th><th>状态</th></tr></thead><tbody>' +
        ri.handoffs.map(function (h) {
          return '<tr><td>' + esc(h.id) + '</td><td>' + esc(h.from) + '</td><td>' + esc(h.to) + '</td><td>' + esc(h.item) + '</td><td>' + esc(h.due) + '</td><td><span class="tag a">' + esc(h.status) + '</span></td></tr>';
        }).join('') + '</tbody></table></div>' +
        '<p style="margin-top:8px;color:#9a6b12">移交单为模板占位；框架阶段不写入 rd/data.js。</p>');
  }

  /* ---------- 总部汇报 ---------- */
  function renderReport() {
    var h = D.hqReport;
    var sample = JSON.stringify(h.sample, null, 2);
    document.getElementById('reportBody').innerHTML =
      card('报送口径',
        '<p><b>对象：</b>' + esc(h.target) + '　<b>时限：</b>' + esc(h.deadline) + '</p>' +
        '<p style="margin-top:6px">' + esc(h.channel) + '</p>') +
      card('必填字段',
        '<div class="scroll"><table><thead><tr><th>字段</th><th>含义</th></tr></thead><tbody>' +
        h.fields.map(function (f) { return '<tr><td>' + esc(f.key) + '</td><td>' + esc(f.desc) + '</td></tr>'; }).join('') +
        '</tbody></table></div>') +
      card('日报草稿示例（占位，未提交）',
        '<div class="mono" id="reportJson">' + esc(sample) + '</div>' +
        '<p style="margin-top:9px"><button type="button" class="btn" id="copyReport">复制草稿 JSON</button></p>') +
      card('延误上报格式',
        '<p>每条延误写全五项：<b>事项 / 分类代码 / 证据 / 责任方 / 下一落点</b>。' +
        '总部看的是可核实事实与明确请求，不接收「差不多」「应该快了」这类无证据表述。</p>');
    document.getElementById('copyReport').addEventListener('click', function () {
      var txt = document.getElementById('reportJson').textContent;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(txt).then(function () { alert('草稿 JSON 已复制。'); },
          function () { alert('浏览器未授权剪贴板，请手动选中复制。'); });
      } else alert('浏览器不支持自动复制，请手动选中复制。');
    });
  }

  /* ---------- 治理与模板 ---------- */
  function renderGovernance() {
    var c = D.charter;
    document.getElementById('govBody').innerHTML =
      card('角色章程', '<p>' + esc(c.mission) + '</p>') +
      card('职责范围', list(c.responsibilities)) +
      card('边界（不得越线）', list(c.boundaries)) +
      card('RACI 责任矩阵',
        '<div class="scroll"><table><thead><tr><th>事项</th><th>PM</th><th>RD</th><th>总部</th><th>所有者</th></tr></thead><tbody>' +
        D.raci.map(function (r) {
          return '<tr><td>' + esc(r.item) + '</td><td>' + esc(r.pm) + '</td><td>' + esc(r.rd) + '</td><td>' + esc(r.hq) + '</td><td>' + esc(r.owner) + '</td></tr>';
        }).join('') + '</tbody></table></div>') +
      card('事实纪律', list(D.meta.truthPolicy));
  }

  renderOverview();
  renderPortfolio();
  renderSchedule();
  renderMilestone();
  renderBurndown();
  renderRD();
  renderReport();
  renderGovernance();

  if (navigator.serviceWorker) {
    navigator.serviceWorker.register('./sw.js').catch(function () { /* 离线能力不可用不影响框架展示 */ });
  }
})();
