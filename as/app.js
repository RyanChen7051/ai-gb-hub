/* AI GB-AS（售后服务部）· 工作台逻辑
 * ------------------------------------------------------------
 * 数据边界：
 *   - 客诉单 = 本机 localStorage（key: gb_as_cases_v1），不上传、不编造真实数据。
 *   - 回信池 = Supabase ai_sales_inbox 只读（与 Sales 页同一数据源），仅用于「标记转交」。
 *   - 已通知状态 = 本机 localStorage（key: gb_as_notified_v1）。
 *   - 强闪烁 = 存在「待通知」或「replyDue=true 且未通知」的客诉时触发。
 */
(function () {
  'use strict';
  var D = window.GB_AS_DATA;
  var T = window.GB_TEAM;
  var KEY_CASES = 'gb_as_cases_v1';
  var KEY_NOTIFIED = 'gb_as_notified_v1';
  var KEY_SOUND = 'gb_as_sound';
  var SUPA = 'https://nsnmtkukxquhinlmbejg.supabase.co';
  var PKEY = 'sb_publishable_YB5z3cQK-vCg67--oKpSrg_63STgMJW';
  var HEADERS = { 'apikey': PKEY, 'Authorization': 'Bearer ' + PKEY };
  var state = { cases: [], notified: {}, inbox: [], scannedAt: '', dismissed: false, view: 'overview' };

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function nowISO() { return new Date().toISOString(); }
  function bjTime(iso) {
    try {
      return new Date(iso).toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false });
    } catch (e) { return iso || ''; }
  }
  function uid() {
    var d = new Date(), p = function (n) { return ('0' + n).slice(-2); };
    var stamp = '' + d.getFullYear() + p(d.getMonth() + 1) + p(d.getDate());
    var seq = Math.floor(Math.random() * 900) + 100;
    return 'AS-' + stamp + '-' + seq;
  }
  function readLS(k, fallback) {
    try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : fallback; } catch (e) { return fallback; }
  }
  function writeLS(k, v) {
    try { localStorage.setItem(k, JSON.stringify(v)); return true; } catch (e) { return false; }
  }
  function toast(msg) {
    var t = document.getElementById('toast');
    if (!t) return;
    t.textContent = msg; t.classList.add('show');
    clearTimeout(t._t); t._t = setTimeout(function () { t.classList.remove('show'); }, 2800);
  }

  /* ---------- 载入 / 保存 ---------- */
  function load() {
    var saved = readLS(KEY_CASES, null);
    // 演示数据只作为首次初始化的种子；一旦用户保存/清空过，就完全以本机数据为准
    state.cases = Array.isArray(saved) ? saved : (D.demo || []).map(function (x) { return Object.assign({}, x); });
    if (!Array.isArray(saved)) writeLS(KEY_CASES, state.cases);
    state.notified = readLS(KEY_NOTIFIED, {}) || {};
    renderAll();
  }
  function saveCases() { writeLS(KEY_CASES, state.cases); renderAll(); }
  function hasDemo() { return state.cases.some(function (c) { return c.demo === true; }); }
  function pendingList() {
    return state.cases.filter(function (c) {
      if (c.status === '已归档' || c.status === '转 RD') return false;
      if (c.status === '已通知') return false;
      return true; // 待通知 = 待处理
    });
  }
  function dueList() {
    return state.cases.filter(function (c) {
      return c.replyDue === true && !state.notified[c.id] && c.status !== '已归档';
    });
  }
  function alertList() {
    var m = {}, out = [];
    pendingList().concat(dueList()).forEach(function (c) { m[c.id] = c; });
    Object.keys(m).forEach(function (k) { out.push(m[k]); });
    return out;
  }

  /* ---------- 强闪烁提醒 ---------- */
  var banner = document.getElementById('asBanner');
  var pill = document.getElementById('asPill');
  var drawer = document.getElementById('asDrawer');
  var baseTitle = document.title;
  var titleTimer = null, titleOn = false;
  function soundOn() { return localStorage.getItem(KEY_SOUND) !== '0'; }
  function beep() {
    if (!soundOn()) return;
    try {
      var Ctx = window.AudioContext || window.webkitAudioContext; if (!Ctx) return;
      var ctx = new Ctx(), t = ctx.currentTime;
      [0, 0.3].forEach(function (dt) {
        var o = ctx.createOscillator(), g = ctx.createGain();
        o.type = 'sine';
        o.frequency.setValueAtTime(760, t + dt);
        o.frequency.setValueAtTime(1040, t + dt + 0.12);
        g.gain.setValueAtTime(0.0001, t + dt);
        g.gain.exponentialRampToValueAtTime(0.2, t + dt + 0.02);
        g.gain.exponentialRampToValueAtTime(0.0001, t + dt + 0.26);
        o.connect(g); g.connect(ctx.destination); o.start(t + dt); o.stop(t + dt + 0.28);
      });
    } catch (e) {}
  }
  function startTitleBlink() {
    if (titleTimer) return;
    titleTimer = setInterval(function () {
      titleOn = !titleOn;
      document.title = titleOn ? '【客诉待处理】' + baseTitle : baseTitle;
    }, 1000);
  }
  function stopTitleBlink() {
    if (titleTimer) { clearInterval(titleTimer); titleTimer = null; }
    document.title = baseTitle;
  }
  function renderAlert() {
    var list = alertList(), n = list.length;
    if (n > 0 && !state.dismissed) {
      banner.classList.add('show');
      pill.classList.add('show'); pill.setAttribute('data-n', n > 99 ? '99+' : n);
      document.getElementById('abTitle').textContent = n === 1 ? '客诉回复待处理！' : ('有 ' + n + ' 条客诉待处理！');
      var top = list.slice(0, 2).map(function (c) { return c.customer || ''; }).filter(Boolean).join('、');
      document.getElementById('abSub').textContent = (top ? top + ' · ' : '') + '点击查看并生成通知摘要';
      startTitleBlink();
      if (!state._beeped) { beep(); state._beeped = true; }
    } else {
      banner.classList.remove('show');
      if (n === 0) pill.classList.remove('show');
      stopTitleBlink();
    }
    if (drawer.classList.contains('show')) renderDrawer();
  }

  /* ---------- 抽屉 ---------- */
  function openDrawer() {
    state.dismissed = true; banner.classList.remove('show');
    renderDrawer(); drawer.classList.add('show');
  }
  function closeDrawer() { drawer.classList.remove('show'); renderAlert(); }
  function renderDrawer() {
    var list = alertList();
    document.getElementById('apMeta').textContent = '本机采集 · ' + bjTime(nowISO()) + ' · 不自动外发';
    if (!list.length) {
      document.getElementById('apBody').innerHTML = '<div class="inbox-empty">目前没有待处理的客诉回复。<br>有新的客诉采集或客户追问时，这里会强闪烁提醒。</div>';
      document.getElementById('apCopy').style.display = 'none';
      document.getElementById('apInfo').textContent = '暂无待通知事项。';
      return;
    }
    document.getElementById('apCopy').style.display = '';
    document.getElementById('apBody').innerHTML = list.map(function (c) {
      return '<div class="cs-item ' + sevCls(c.severity) + '">' +
        '<div class="cs-meta"><span class="sev ' + sevCls(c.severity) + '">' + esc(sevLabel(c.severity)) + '</span>' +
        '<span class="tag">' + esc(c.category || '未分类') + '</span>' +
        (c.replyDue ? '<span class="due">待回复</span>' : '') +
        '<span class="dt">' + esc(bjTime(c.createdAt)) + '</span></div>' +
        '<div class="cs-title">' + esc(c.customer || '（无客户名）') + ' · ' + esc(c.product || '（无产品）') + '</div>' +
        '<div class="cs-body">' + esc(c.summary || '') + '</div></div>';
    }).join('');
    document.getElementById('apInfo').textContent = '有 ' + list.length + ' 条待处理；复制摘要后由所有者自行发送与决定延伸动作。';
  }
  function notifyText() {
    var list = alertList();
    if (!list.length) return '';
    var head = '【AI GB-AS 客诉通知】' + bjTime(nowISO()) + '（北京时间）\n共 ' + list.length + ' 条待处理：\n';
    var body = list.map(function (c, i) {
      return (i + 1) + '. [' + sevLabel(c.severity) + '] ' + (c.customer || '未知客户') +
        ' / ' + (c.product || '未知产品') + ' / ' + (c.category || '未分类') +
        '\n   描述：' + (c.summary || '') +
        (c.evidence ? '\n   证据：' + c.evidence : '') +
        '\n   来源：' + (c.source || '手工录入') + ' · 客户阶段：' + (c.stage || '未知');
    }).join('\n');
    return head + body + '\n\n（AS 仅采集与通知，后续延伸动作由所有者本人执行。）';
  }
  function copyNotify() {
    var txt = notifyText();
    if (!txt) { toast('暂无待通知内容'); return; }
    function done(msg) {
      // 标记已通知：把这些单的状态置为「已通知」，强闪烁停止
      alertList().forEach(function (c) {
        state.notified[c.id] = nowISO();
        if (c.status === '待通知') c.status = '已通知';
      });
      writeLS(KEY_NOTIFIED, state.notified);
      saveCases();
      state.dismissed = false; state._beeped = false;
      renderAlert();
      toast(msg);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(txt).then(function () { done('通知摘要已复制，可粘贴发送'); }).catch(function () { fallbackCopy(txt, done); });
    } else fallbackCopy(txt, done);
  }
  function fallbackCopy(txt, cb) {
    try {
      var ta = document.createElement('textarea');
      ta.value = txt; ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select(); document.execCommand('copy');
      document.body.removeChild(ta); cb('通知摘要已复制');
    } catch (e) { cb('复制失败，请手动选择文本'); }
  }

  function sevCls(s) { return s === 'S1' ? 's1' : (s === 'S2' ? 's2' : 's3'); }
  function sevLabel(s) {
    var x = (D.severities || []).filter(function (v) { return v.v === s; })[0];
    return x ? x.label : (s || 'S3 一般');
  }

  /* ---------- 视图切换 ---------- */
  var VIEWS = [
    ['overview', '总览'], ['cases', '客诉台账'], ['intake', '客诉采集'], ['transfer', 'Sales 转交'],
    ['notify', '通知中心'], ['rd', 'RD 协同'], ['charter', '章程']
  ];
  function buildSwitcher() {
    document.getElementById('viewSwitch').innerHTML = VIEWS.map(function (v) {
      return '<button type="button" data-v="' + v[0] + '"' + (v[0] === state.view ? ' class="on"' : '') + '>' + v[1] + '</button>';
    }).join('');
    document.getElementById('viewSwitch').addEventListener('click', function (e) {
      var b = e.target.closest('button[data-v]'); if (!b) return;
      state.view = b.getAttribute('data-v');
      var bs = document.querySelectorAll('#viewSwitch button');
      for (var i = 0; i < bs.length; i++) bs[i].classList.toggle('on', bs[i] === b);
      var secs = document.querySelectorAll('section[data-view]');
      for (var j = 0; j < secs.length; j++) secs[j].hidden = secs[j].getAttribute('data-view') !== state.view;
      renderAll();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---------- 各视图渲染 ---------- */
  function renderOverview() {
    var all = state.cases.length;
    var pend = pendingList().length;
    var s1 = state.cases.filter(function (c) { return c.severity === 'S1' && c.status !== '已归档'; }).length;
    var toRD = state.cases.filter(function (c) { return c.status === '转 RD'; }).length;
    var demoN = state.cases.filter(function (c) { return c.demo === true; }).length;
    document.getElementById('ovMeta').textContent = '本机数据 · ' + bjTime(nowISO());
    document.getElementById('ovBody').innerHTML =
      '<div class="grid g3">' +
      '<div class="kpi"><b>' + all + '</b><span>客诉单总数</span><small>含演示 ' + demoN + ' 条</small></div>' +
      '<div class="kpi"><b>' + pend + '</b><span>待通知 / 待处理</span><small>触发强闪烁</small></div>' +
      '<div class="kpi"><b>' + s1 + '</b><span>S1 紧急</span><small>安全 / 批量 / 大客户</small></div>' +
      '<div class="kpi"><b>' + toRD + '</b><span>已转 RD</span><small>脱敏线索草稿</small></div>' +
      '</div>' +
      '<div class="grid g2" style="margin-top:12px">' +
      '<div class="card pad"><h3>职责边界（所有者指定）</h3>' +
      '<ul class="clean">' + (D.charter.boundary || []).map(function (b) { return '<li>' + esc(b) + '</li>'; }).join('') + '</ul></div>' +
      '<div class="card pad"><h3>协作关系</h3>' +
      '<ul class="clean">' + (D.charter.collaborators || []).map(function (c) {
        return '<li><b>' + esc(c.id) + '（' + esc(c.relation) + '）</b><br>' + esc(c.interface) + '</li>';
      }).join('') + '</ul></div>' +
      '</div>' +
      '<div class="card pad" style="margin-top:12px"><h3>所有者指令逐条落地</h3>' +
      '<ul class="clean">' + (D.mandate || []).map(function (m) {
        return '<li><b>' + m.n + '.</b> ' + esc(m.text) + ' <span class="tag g">' + esc(m.impl) + '</span></li>';
      }).join('') + '</ul></div>';
  }

  function renderCases() {
    var list = state.cases.slice().sort(function (a, b) { return (b.createdAt || '').localeCompare(a.createdAt || ''); });
    document.getElementById('casesMeta').textContent = '共 ' + list.length + ' 条 · 只存本机';
    var body = document.getElementById('casesBody');
    if (!list.length) {
      body.innerHTML = '<div class="card pad"><div class="inbox-empty">暂无客诉单。到「客诉采集」录入，或在「Sales 转交」里从真实回信池标记转入。</div></div>';
      return;
    }
    body.innerHTML = '<div class="card pad">' + list.map(function (c) {
      var archived = c.status === '已归档';
      return '<div class="cs-item ' + sevCls(c.severity) + (archived ? ' archived' : '') + '">' +
        '<div class="cs-meta"><span class="sev ' + sevCls(c.severity) + '">' + esc(sevLabel(c.severity)) + '</span>' +
        '<span class="tag">' + esc(c.status || '待通知') + '</span>' +
        '<span class="tag t">' + esc(c.source || '手工录入') + '</span>' +
        (c.demo ? '<span class="tag demo">演示</span>' : '') +
        (c.replyDue && !state.notified[c.id] ? '<span class="due">待回复</span>' : '') +
        '<span class="dt">' + esc(c.id) + ' · ' + esc(bjTime(c.createdAt)) + '</span></div>' +
        '<div class="cs-title">' + esc(c.customer || '（无客户名）') + ' · ' + esc(c.product || '（无产品）') + '</div>' +
        '<div class="cs-body">' + esc(c.summary || '') +
        (c.evidence ? '\n证据：' + esc(c.evidence) : '') + '</div>' +
        '<div class="cs-foot"><span class="sp"></span>' +
        '<button class="btn" data-act="notify" data-id="' + esc(c.id) + '">标记已通知</button>' +
        '<button class="btn" data-act="rd" data-id="' + esc(c.id) + '">转 RD</button>' +
        '<button class="btn ghost" data-act="archive" data-id="' + esc(c.id) + '">归档</button>' +
        '<button class="btn ghost" data-act="del" data-id="' + esc(c.id) + '">删除</button>' +
        '</div></div>';
    }).join('') + '</div>';
    body.onclick = function (e) {
      var b = e.target.closest('button[data-act]'); if (!b) return;
      var id = b.getAttribute('data-id'), act = b.getAttribute('data-act');
      state.cases.forEach(function (c) {
        if (c.id !== id) return;
        if (act === 'notify') { c.status = '已通知'; state.notified[id] = nowISO(); }
        if (act === 'rd') c.status = '转 RD';
        if (act === 'archive') c.status = '已归档';
      });
      if (act === 'del') { state.cases = state.cases.filter(function (c) { return c.id !== id; }); toast('已删除客诉单'); }
      writeLS(KEY_NOTIFIED, state.notified);
      saveCases(); renderAlert();
    };
  }

  function renderIntake() {
    var form = document.getElementById('intakeForm');
    var fields = D.fields.filter(function (f) { return f.key !== 'id' && f.key !== 'createdAt'; });
    form.innerHTML = fields.map(function (f) {
      var full = (f.key === 'summary' || f.key === 'evidence') ? ' full' : '';
      var req = f.required ? ' <i>*</i>' : '';
      var ctl;
      if (f.key === 'category') ctl = '<select data-k="' + f.key + '"><option value="">请选择</option>' + D.categories.map(function (v) { return '<option>' + esc(v) + '</option>'; }).join('') + '</select>';
      else if (f.key === 'severity') ctl = '<select data-k="' + f.key + '">' + D.severities.map(function (v) { return '<option value="' + v.v + '"' + (v.v === 'S3' ? ' selected' : '') + '>' + esc(v.label) + '</option>'; }).join('') + '</select>';
      else if (f.key === 'stage') ctl = '<select data-k="' + f.key + '">' + D.stages.map(function (v) { return '<option' + (v === '已开始服务' ? ' selected' : '') + '>' + esc(v) + '</option>'; }).join('') + '</select>';
      else if (f.key === 'status') ctl = '<select data-k="' + f.key + '">' + D.statuses.map(function (v) { return '<option' + (v === '待通知' ? ' selected' : '') + '>' + esc(v) + '</option>'; }).join('') + '</select>';
      else if (f.key === 'region') ctl = '<select data-k="' + f.key + '"><option value="">请选择</option>' + ['EU', 'NA', 'ME', 'AP', 'LA', 'AF'].map(function (v) { return '<option>' + v + '</option>'; }).join('') + '</select>';
      else if (f.key === 'summary') ctl = '<textarea data-k="' + f.key + '" placeholder="' + esc(f.hint) + '"></textarea>';
      else ctl = '<input type="text" data-k="' + f.key + '" placeholder="' + esc(f.hint) + '">';
      return '<div class="fld' + full + '"><label>' + esc(f.label) + req + '</label>' + ctl + '<span class="hint">' + esc(f.hint) + '</span></div>';
    }).join('');
  }
  function fillForm(obj) {
    var nodes = document.querySelectorAll('#intakeForm [data-k]');
    for (var i = 0; i < nodes.length; i++) {
      var k = nodes[i].getAttribute('data-k');
      if (obj[k] != null) nodes[i].value = obj[k];
    }
  }
  function resetForm() {
    var nodes = document.querySelectorAll('#intakeForm [data-k]');
    for (var i = 0; i < nodes.length; i++) {
      var k = nodes[i].getAttribute('data-k');
      if (k === 'severity') nodes[i].value = 'S3';
      else if (k === 'stage') nodes[i].value = '已开始服务';
      else if (k === 'status') nodes[i].value = '待通知';
      else nodes[i].value = '';
    }
  }
  function saveFromForm() {
    var obj = { source: '手工录入', createdAt: nowISO() };
    var nodes = document.querySelectorAll('#intakeForm [data-k]');
    for (var i = 0; i < nodes.length; i++) obj[nodes[i].getAttribute('data-k')] = nodes[i].value.trim();
    var missing = D.fields.filter(function (f) { return f.required && f.key !== 'id' && f.key !== 'createdAt' && !obj[f.key]; }).map(function (f) { return f.label; });
    if (missing.length) { toast('请填写必填项：' + missing.join('、')); return; }
    obj.id = uid();
    obj.replyDue = false;
    state.cases.unshift(obj);
    state.dismissed = false; state._beeped = false;
    saveCases(); renderAlert();
    toast('已保存 ' + obj.id + '，强闪烁提醒已触发');
  }

  /* ---------- Sales 回信池（只读） ---------- */
  function fetchInbox() {
    var url = SUPA + '/rest/v1/sync_data?select=payload&table_name=eq.ai_sales_inbox&is_deleted=eq.false&limit=1';
    return fetch(url, { headers: HEADERS, cache: 'no-store' })
      .then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); })
      .then(function (rows) {
        var p = (rows && rows[0] && rows[0].payload) || {};
        state.inbox = p.latest || [];
        state.scannedAt = p.scanned_at || '';
      }).catch(function () { state.inbox = []; state.scannedAt = ''; });
  }
  function renderTransfer() {
    document.getElementById('transferMeta').textContent = D.transfer.statusLabel;
    var body = document.getElementById('transferBody');
    body.innerHTML =
      '<div class="notice">' + esc(D.transfer.trigger) + '<br><b>闸门：</b>' + esc(D.transfer.gate) + '</div>' +
      '<ol class="clean" style="margin:12px 0">' + D.transfer.steps.map(function (s) { return '<li>' + esc(s) + '</li>'; }).join('') + '</ol>' +
      '<div style="font-size:13px;font-weight:750;color:var(--navy);margin:14px 0 6px">回信池（只读 · 更新于 ' + (state.scannedAt ? bjTime(state.scannedAt) : '—') + '）</div>' +
      '<div id="inboxList"></div>';
    var list = document.getElementById('inboxList');
    if (!state.inbox.length) {
      list.innerHTML = '<div class="inbox-empty">当前没有可读取的回信，或处于离线状态。<br>可切到「客诉采集」手工录入客诉单。系统信、退信不会计入。</div>';
      return;
    }
    list.innerHTML = state.inbox.map(function (r, i) {
      return '<div class="inbox-item"><div class="ib-ic">✉</div><div class="ib-c">' +
        '<div class="ib-from">' + esc(r.matched_company || r.from || '未知发件人') + '</div>' +
        '<div class="ib-subj">' + esc(r.subject || '（无主题）') + '</div>' +
        (r.preview ? '<div class="ib-pv">' + esc(r.preview) + '</div>' : '') +
        '</div><div class="ib-act"><button class="btn primary" data-i="' + i + '">转为客诉单</button></div></div>';
    }).join('');
    list.onclick = function (e) {
      var b = e.target.closest('button[data-i]'); if (!b) return;
      var r = state.inbox[parseInt(b.getAttribute('data-i'), 10)];
      if (!r) return;
      var from = r.from || '';
      var name = (r.matched_company || from.split('<')[0].trim() || from).trim();
      fillForm({
        customer: name,
        contact: /<[^>]+>/.test(from) ? (from.match(/<([^>]+)>/) || [])[1] : from,
        summary: (r.subject ? '回信主题：' + r.subject + '\n' : '') + (r.preview || ''),
        evidence: r.message_id ? ('Message-ID: ' + r.message_id) : (r.subject || ''),
        source: 'Sales 转交', stage: '已开始服务'
      });
      state.view = 'intake';
      var bs = document.querySelectorAll('#viewSwitch button');
      for (var k = 0; k < bs.length; k++) bs[k].classList.toggle('on', bs[k].getAttribute('data-v') === 'intake');
      var secs = document.querySelectorAll('section[data-view]');
      for (var j = 0; j < secs.length; j++) secs[j].hidden = secs[j].getAttribute('data-view') !== 'intake';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      toast('已从真实回信预填，请确认类型/严重度后保存');
    };
  }

  /* ---------- 通知中心 ---------- */
  function renderNotify() {
    var n = alertList().length;
    document.getElementById('notifyMeta').textContent = D.notify.statusLabel;
    document.getElementById('notifyBody').innerHTML =
      '<div class="card pad"><h3>通知对象：' + esc(D.notify.receiver) + '</h3>' +
      '<p>' + esc(D.notify.principle) + '</p>' +
      '<ul class="clean" style="margin-top:10px">' + D.notify.channels.map(function (c) { return '<li>' + esc(c) + '</li>'; }).join('') + '</ul>' +
      '<div style="margin-top:12px;display:flex;gap:8px;flex-wrap:wrap"><button class="btn primary" id="copyNotifyBtn">复制当前通知摘要（' + n + ' 条）</button></div>' +
      '</div>' +
      '<div class="card pad" style="margin-top:12px"><h3>通知摘要预览</h3><pre class="mono" id="notifyPreview">' + esc(notifyText() || '（暂无待通知事项）') + '</pre></div>';
    document.getElementById('copyNotifyBtn').onclick = copyNotify;
  }

  /* ---------- RD 协同 ---------- */
  function renderRD() {
    var rdCases = state.cases.filter(function (c) { return c.category && c.summary && c.status !== '已归档'; });
    document.getElementById('rdBody').innerHTML =
      '<div class="card pad"><div class="notice">' + esc(D.rdLink.statusLabel) + '<br><b>闸门：</b>' + esc(D.rdLink.gate) + '</div>' +
      '<p style="margin-top:10px">' + esc(D.rdLink.purpose) + '</p>' +
      '<p style="margin-top:6px">移交字段：' + D.rdLink.fields.map(function (f) { return '<span class="tag">' + esc(f) + '</span>'; }).join('') + '</p>' +
      '<div style="margin-top:12px"><button class="btn primary" id="genRD">生成脱敏移交单草稿</button></div></div>' +
      '<div class="card pad" style="margin-top:12px"><h3>可作为线索的客诉（' + rdCases.length + '）</h3>' +
      (rdCases.length ? '<ul class="clean">' + rdCases.map(function (c) {
        return '<li>[' + esc(sevLabel(c.severity)) + '] ' + esc(c.category) + ' · ' + esc(c.product || '未知产品') + ' — ' + esc(c.summary || '').slice(0, 90) + '</li>';
      }).join('') + '</ul>' : '<p>暂无客诉可生成线索。</p>') + '</div>' +
      '<div class="card pad" style="margin-top:12px"><h3>移交单草稿</h3><pre class="mono" id="rdDraft">（点上方按钮生成；不含客户邮箱/联系人/订单号）</pre>' +
      '<button class="btn ghost" id="copyRD" style="margin-top:8px">复制草稿</button></div>';
    document.getElementById('genRD').onclick = function () {
      if (!rdCases.length) { toast('暂无客诉可生成线索'); return; }
      var lines = ['【AI GB-AS → AI GB-RD 客诉线索移交单（草稿）】', '生成时间：' + bjTime(nowISO()) + '（北京时间）',
        '说明：以下为脱敏线索，不含客户邮箱/联系人/订单号；需所有者确认后才交给 RD。', ''];
      rdCases.forEach(function (c, i) {
        lines.push((i + 1) + '. [' + sevLabel(c.severity) + '] 类型：' + (c.category || '未分类') + ' / 产品：' + (c.product || '未知'));
        lines.push('   问题（脱敏）：' + (c.summary || '').replace(/[\w.+-]+@[\w.-]+/g, '[邮箱已脱敏]'));
        lines.push('   建议验证：由 RD 按痛点库口径判断是否可工程化消除（装调防错 / 结构加强 / 说明书改进）。');
      });
      document.getElementById('rdDraft').textContent = lines.join('\n');
      toast('已生成脱敏移交单草稿');
    };
    document.getElementById('copyRD').onclick = function () {
      var t = document.getElementById('rdDraft').textContent;
      if (!t || t.indexOf('（点上方') === 0) { toast('请先生成草稿'); return; }
      copyText(t);
    };
  }
  function copyText(txt) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(txt).then(function () { toast('已复制到剪贴板'); }).catch(function () { fallbackCopy(txt, function () { toast('已复制'); }); });
    } else fallbackCopy(txt, function () { toast('已复制'); });
  }

  /* ---------- 章程 ---------- */
  function renderCharter() {
    var t = T && T.org ? T.org.filter(function (o) { return o.id === 'GB-AS'; })[0] : null;
    document.getElementById('charterBody').innerHTML =
      '<div class="card pad"><h3>' + esc(D.meta.name + '（' + D.meta.dept + '）') + '</h3>' +
      '<p>' + esc(D.meta.note) + '</p>' +
      '<p style="margin-top:6px">汇报对象：<b>' + esc(D.meta.reportsTo) + '</b> · 协作：' + esc(D.meta.peers.join(' / ')) + '</p>' +
      (t ? '<p style="margin-top:6px">团队契约状态：<span class="tag g">' + esc(t.statusLabel) + '</span></p>' : '') +
      '</div>' +
      '<div class="card pad" style="margin-top:12px"><h3>边界（不可越）</h3><ul class="clean">' +
      D.charter.boundary.map(function (b) { return '<li>' + esc(b) + '</li>'; }).join('') + '</ul></div>' +
      '<div class="card pad" style="margin-top:12px"><h3>采集字段契约</h3><div class="scroll"><table><thead><tr><th>字段</th><th>标签</th><th>必填</th><th>说明</th></tr></thead><tbody>' +
      D.fields.map(function (f) { return '<tr><td class="mono" style="padding:6px 8px">' + esc(f.key) + '</td><td>' + esc(f.label) + '</td><td>' + (f.required ? '是' : '否') + '</td><td>' + esc(f.hint) + '</td></tr>'; }).join('') +
      '</tbody></table></div></div>';
  }

  function renderNotice() {
    var demo = hasDemo();
    document.getElementById('demoNotice').style.display = demo ? '' : 'none';
    document.getElementById('truthNotice').innerHTML = '<b>事实边界：</b>' + esc(D.meta.note) +
      ' 客诉单只写本机，回信池只读；当前为框架 + 本机工作台，未接入自动化客诉识别。';
    document.getElementById('footMeta').textContent = (T && T.meta && T.meta.owner) ? T.meta.owner + ' · AS 子站 v' + D.meta.version : 'AS 子站 v' + D.meta.version;
    document.getElementById('verPill').textContent = 'AS v' + D.meta.version;
  }
  function renderAll() {
    renderNotice(); renderAlert();
    if (state.view === 'overview') renderOverview();
    if (state.view === 'cases') renderCases();
    if (state.view === 'intake') { if (!document.getElementById('intakeForm').children.length) renderIntake(); }
    if (state.view === 'transfer') renderTransfer();
    if (state.view === 'notify') renderNotify();
    if (state.view === 'rd') renderRD();
    if (state.view === 'charter') renderCharter();
  }

  /* ---------- 绑定 ---------- */
  function bind() {
    buildSwitcher();
    document.getElementById('saveCase').onclick = saveFromForm;
    document.getElementById('resetForm').onclick = resetForm;
    document.getElementById('clearDemo').onclick = function () {
      state.cases = state.cases.filter(function (c) { return c.demo !== true; });
      saveCases(); toast('演示数据已清空');
    };
    document.getElementById('abGo').onclick = openDrawer;
    banner.addEventListener('click', function (e) { if (e.target.closest('.ab-tx') || e.target.closest('.ab-ic')) openDrawer(); });
    document.getElementById('abX').onclick = function (e) { e.stopPropagation(); state.dismissed = true; banner.classList.remove('show'); stopTitleBlink(); };
    pill.onclick = openDrawer;
    document.getElementById('apClose').onclick = closeDrawer;
    drawer.addEventListener('click', function (e) { if (e.target === drawer) closeDrawer(); });
    document.getElementById('apLater').onclick = closeDrawer;
    document.getElementById('apCopy').onclick = copyNotify;
    var sb = document.getElementById('apSound');
    sb.textContent = soundOn() ? '🔔' : '🔕';
    sb.onclick = function () {
      var on = localStorage.getItem(KEY_SOUND) !== '0';
      localStorage.setItem(KEY_SOUND, on ? '0' : '1');
      sb.textContent = on ? '🔕' : '🔔';
      if (!on) beep();
    };
    document.addEventListener('visibilitychange', function () {
      if (!document.hidden) { state.dismissed = false; state._beeped = false; renderAlert(); fetchInbox().then(renderAll); }
      else stopTitleBlink();
    });
    fetchInbox().then(function () { renderAll(); });
  }

  load();
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', bind);
  else bind();
})();
