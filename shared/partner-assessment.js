/* AI GB · 战略合作评估简报（签约决策用 · 长期保留）
 *
 * 与每日情报 gb-market-intel.js 分离：本文件是「某个具体签约对象」的决策简报，
 * 不按日重写，每日 08:10 的 marketing 情报自动化不会碰它，故可长期留档。
 *
 * 数据诚信：
 *   - facts[] 为可核验公开事实，每条带 src / url / date；
 *   - findings[]（矛盾点）、flows[]（四流向）、verdict（品牌加分）、checklist（尽调）为推演，标 v:"model"；
 *   - 引用统一 MLA 格式，列在 refs[]；
 *   - 「未检索到」不等于「对方没有」，如实标注检索边界；
 *   - 本简报不构成法律或出口管制意见。
 *
 * 用法：在 Marketing PWA 的 market-intel-widget.js 之后、团队中心的 team-intel-digest.js
 * 之后各引一行 <script src=".../shared/partner-assessment.js"></script>。
 */
(function () {
  var A = {
    meta: {
      title: "战略合作评估 · Turalp Global Defense LLC",
      subject: "Turalp Global Defense LLC（美国德州 · 防务贸易商）",
      form: "互相供货 + 互相推广（所有者 2026-11-25 确认）",
      scope: "全球市场，不框在台湾地区语境",
      stance: "合作不涉台域；GUNBASE 按中国台湾地区品牌（Taiwan-based）对外表述，本简报不以产地做信任主张。",
      assessedAt: "2026-11-25（GMT+8）",
      integrity: "事实均附来源与检索日；推演为模型判断，需所有者逐项授权后才可对外接触。不构成法律或出口管制意见。"
    },
    headline: "结论：这家公司作为签约对象，品牌光环价值接近于零；真正有价值的是渠道与资质准入，但两者都必须先核验。建议先核验资质、再谈渠道接入、最后才做品牌互推——用 GUNBASE 的产品去验证对方的渠道，不要用 GUNBASE 的品牌去验证对方的诚信。",
    kpi: [
      { k: "实体年龄", v: "约 15 个月", d: "德州 2025-08-31 注册", tone: "a" },
      { k: "官网自述", v: "10 年+", d: "与注册记录对不上，须举证", tone: "r" },
      { k: "计数器", v: "0+", d: "三处均 0，模板站迹象", tone: "a" },
      { k: "资质编号", v: "未检得", d: "DDTC / ATF 均无公开号", tone: "a" },
      { k: "实质加分", v: "有条件", d: "仅渠道+资质成立时", tone: "b" },
      { k: "名义背书", v: "弱", d: "对方自身品牌资产近零", tone: "r" }
    ],
    facts: [
      { d: "2025-08-31", t: "德州实体注册", x: "Turalp Global Defense LLC 在德州注册，编号 0806194862，状态 Active，实体类型 Other。", src: "Corporate.AI 转载德州州务卿数据", url: "https://corporate.ai/entity/tx/0806194862/turalp-global-defense-llc" },
      { d: "2025-09-03", t: "域名注册", x: "turalp.com 注册于 2025-09-03，2026-08-25 更新，DNS 托管于 BUSINESSIDENTITY.LLC。域名年龄与实体年龄一致，均约 15 个月。", src: "ICANN RDAP 实查（本次检索）", url: "https://rdap.verisign.com/com/v1/domain/turalp.com" },
      { d: "检索日 2026-11-25", t: "官网自述", x: "官网称从事弹药、枪支进出口与合同制造，服务北约采购，主张 ITAR 合规；并称『10 年以上经验、20+ 战略伙伴』。", src: "Turalp 官网首页", url: "https://turalp.com/" },
      { d: "检索日 2026-11-25", t: "官网计数器异常", x: "官网三处计数器（服务国家、经验年限、战略伙伴）均显示『0 +』，与自述的 10 年、20+ 伙伴不符。", src: "Turalp 官网首页", url: "https://turalp.com/" },
      { d: "检索日 2026-11-25", t: "注册地址为虚拟办公室", x: "5900 Balcones Drive STE 100, Austin TX 78731 是注册代理公司共用的合法虚拟地址，不是实体厂房。", src: "Laramie Ledger 分析", url: "https://laramieledger.com/blog/is-5900-balcones-dr-austin-safe-for-my-llc-bank-account" },
      { d: "检索日 2026-11-25", t: "联系方式混用", x: "官网同时出现 joel@ptbodywork.com（物理治疗域名）邮箱与康涅狄格州 Rocky Hill 办公室，呈现模板站拼装迹象。", src: "Turalp 官网首页", url: "https://turalp.com/" },
      { d: "检索日 2026-11-25", t: "资质编号未检得", x: "多轮公开检索未找到 DDTC 注册代码、ATF 枪械许可证号、客户案例、新闻稿或 LinkedIn 公司页。注意：这是『没找到』，不等于『对方没有』——防务贸易公司的 DDTC 注册本就没有公开查询库。", src: "多轮公开检索 + LegalClarity", url: "https://legalclarity.org/how-to-check-if-a-company-is-itar-registered/" }
    ],
    ownSide: {
      title: "我方现状（GUNBASE 官网核实 · 2026-11-25）",
      rows: [
        "官网标语 OPTICS · FIREARMS · AMMUNITION · GEAR，产品数据共 132 项：光学瞄准镜 59（41 自有 + 18 合作方）、硬件与电子 49、枪械平台 16、弹药 5、战场急救 3。",
        "非光学产品 73 项、占 55%。弹药 5 项全为大口径军品（20mm 至 155mm）。",
        "other-products.js 头注明：非光学产品由合作厂商型录 PDF 归纳，原厂电话/邮箱/网址不写入官网，询盘由 GunBase 窗口统一受理——即已有一套成熟的『合作供货』模板。",
        "ALP-100 产品描述已写明仅供授权政府、执法与防务采购，并要求最终用户证明（end-user certificate），说明 GUNBASE 本就在做政府/执法/防务采购。"
      ],
      src: "GunBase 官网 gunbase-optics.com 及 js/products.js、other-products.js、partner-scopes.js",
      url: "https://gunbase-optics.com/"
    },
    findings: [
      { t: "『10 年经验』与实体/域名年龄对不上", x: "实体与域名都只有约 15 个月。两种可能：团队经验来自此前的公司（联系人姓氏 Güzelgöz、Koca 为土耳其常见姓氏，Turalp 亦似土耳其背景），或仅为营销话术。官网没有说明，必须让对方举证，不能替他脑补。" },
      { t: "计数器 0+ / 混用无关邮箱 / 无案例无资质号", x: "三点合起来呈现的是一个刚建好模板站的新公司形象，而不是『全球防务贸易领导者』。" },
      { t: "弹药品类互补而非重叠", x: "GUNBASE 现有 5 项弹药全是大口径（20mm–155mm）；Turalp 官网主打 9mm、5.56 NATO、7.62 NATO 小口径。两边合起来覆盖轻武器到火炮，这条线价值高于重叠情形。" },
      { t: "目标客户高度吻合", x: "Turalp 自述客户为政府、执法、国防承包商，与 GUNBASE 已按防务采购定位做的产品描述一致。前提是这些渠道真实可核验。" }
    ],
    flows: [
      { dir: "GUNBASE → Turalp（光学）", level: "green", t: "最值钱的一条 · 渠道价值", x: "若对方覆盖政府/执法/国防承包商的渠道为真，GUNBASE 等于借用一张美国防务贸易商的门票，绕开单独进入政府/执法采购市场的高门槛。加分来自渠道，不是对方的招牌。" },
      { dir: "Turalp → GUNBASE（弹药）", level: "yellow", t: "互补但合规复杂 · 建议暂缓", x: "小口径补我方大口径，且可复制现有合作供货模板；但弹药进出口合规复杂度远高于光学。对方未公开任何资质编号，这条线先不碰。" },
      { dir: "推广 GUNBASE → Turalp", level: "red", t: "最不对等 · 不建议", x: "用 GUNBASE 的品牌信誉给一家 15 个月大、计数器还是 0+ 的公司背书，是四条里风险最高的一条。资质核实前不做。" },
      { dir: "推广 Turalp → GUNBASE", level: "yellow", t: "价值取决于对方真实触达", x: "若对方能触达美国执法/国防采购圈真人脉，有用；若只是模板网站与社交账号，约等于零。须先核验触达能力。" }
    ],
    verdict: {
      nominal: "名义背书：弱。对方自身品牌资产接近零；挂『与美国 Turalp 合作』的标签对内行采购没分量，懂行的人一查便知。",
      substantial: "实质加分：有条件成立。若资质为真，美国政府与执法采购渠道、北约供应链叙事、ITAR 合规能力，对 GUNBASE 从光学厂往国际防务级供应商升级有实际作用——加分来源是渠道和资质，不是品牌光环。",
      risk: "风险：不可忽视。防务物项叠加最终用户与出口管制，责任划分必须在合同里写死。这块需专业出口管制顾问过目。"
    },
    checklist: [
      "索取 DDTC 注册代码（M 或 K 开头）与有效期，并向 DDTC 直接核实——没有公开查询库，只能对方提供后向官方核验。",
      "索取 ATF 联邦枪械许可证号（08 或 11 类）与 SOT 号码，以及三个可直接联系的客户或供应商推荐人。",
      "索取公司存续证明（Good Standing）与实益所有人名单。",
      "供货与推广拆成两份独立协议，分别设终止条款，避免一方违约拖垮全部。",
      "推广条款写对等：品牌使用范围、期限、终止后下架义务，且对方须先交齐资质才能使用 GUNBASE 名称。",
      "先明确合作性质：GUNBASE 是供货方还是被代理方？贴牌还是联合品牌？这决定品牌资产归谁。"
    ],
    refs: [
      '"GLOBAL DEFENSE. GLOBAL POWER. GLOBAL TRUST." Turalp, turalp.com/. Accessed 25 Nov. 2026.',
      '"TURALP GLOBAL DEFENSE LLC · TX Other · Corporate.AI." Corporate.AI, corporate.ai/entity/tx/0806194862/turalp-global-defense-llc. Accessed 25 Nov. 2026.',
      '"5900 Balcones Dr, Ste 100, Austin TX 78731: What Banks See When Your LLC Uses This Address (2026)." Laramie Ledger, laramieledger.com/blog/is-5900-balcones-dr-austin-safe-for-my-llc-bank-account. Accessed 25 Nov. 2026.',
      '"How to Check if a Company Is ITAR Registered." LegalClarity, legalclarity.org/how-to-check-if-a-company-is-itar-registered/. Accessed 25 Nov. 2026.',
      '"Global Defense Enhances International Distribution With New Turnkey Export Services and Export Consulting." Global Defense, globaldefense.us/export. Accessed 25 Nov. 2026.',
      '"GunBase 火械基地 — Tactical Optics · First Aid · Gear." GunBase, gunbase-optics.com; js/products.js, other-products.js, partner-scopes.js. Accessed 25 Nov. 2026.'
    ],
    benchmark: {
      t: "对照标准（另一家公司，仅作标杆）",
      x: "合规的美国防务贸易商会公开列出 ATF Registered FFL 08 / ATF SOT Class 1 / U.S. Department of State ITAR Registration 并附可下载证明。你可以照这张单子去索取。",
      src: "Global Defense · globaldefense.us/export"
    }
  };
  window.GB_PARTNER_ASSESSMENT = A;

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function link(url, label) {
    if (!url) return esc(label || '来源');
    var u = /^https?:\/\//i.test(url) ? url : 'https://' + url;
    return '<a href="' + esc(u) + '" target="_blank" rel="noopener noreferrer">' + esc(label || u) + ' ↗</a>';
  }

  var CSS = ''
    + '.gpa{margin:16px 0 6px}'
    + '.gpa-card{background:#fff;border:1px solid #d9e2ec;border-radius:14px;overflow:hidden;box-shadow:0 3px 14px rgba(18,58,94,.08)}'
    + '.gpa-hd{background:linear-gradient(135deg,#7a3b2e,#a85632);color:#fff;padding:14px 18px;display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;align-items:center}'
    + '.gpa-kick{font-size:10px;letter-spacing:1.6px;opacity:.9}'
    + '.gpa-t{font-size:16px;font-weight:800;margin-top:3px;line-height:1.35}'
    + '.gpa-meta{font-size:10.5px;opacity:.9;margin-top:4px;line-height:1.6}'
    + '.gpa-tag{font-size:9.5px;font-weight:750;background:rgba(255,255,255,.16);border:1px solid rgba(255,255,255,.4);border-radius:9px;padding:3px 9px;white-space:nowrap}'
    + '.gpa-b{padding:15px 18px}'
    + '.gpa-concl{font-size:13px;font-weight:750;color:#7a3b2e;line-height:1.75;background:#fdf1ea;border-left:3px solid #a85632;border-radius:8px;padding:12px 14px}'
    + '.gpa-kpis{display:grid;grid-template-columns:repeat(6,1fr);gap:7px;margin-top:12px}'
    + '.gpa-k{background:#f8fafc;border:1px solid #dde5ee;border-radius:9px;padding:8px 5px;text-align:center}'
    + '.gpa-k b{display:block;font-size:15px;font-weight:800;line-height:1.15}'
    + '.gpa-k .k{display:block;font-size:9.5px;color:#5b6b7c;margin-top:3px}'
    + '.gpa-k .d{display:block;font-size:8.2px;color:#8a97a6;margin-top:2px;line-height:1.35}'
    + '.gpa-k.a b{color:#9a6b12}.gpa-k.r b{color:#b8461f}.gpa-k.b b{color:#1d5486}'
    + '.gpa-sec{font-size:11px;font-weight:800;color:#7a3b2e;letter-spacing:.4px;margin:18px 0 9px;display:flex;align-items:center;gap:7px;flex-wrap:wrap}'
    + '.gpa-sec .n{font-size:9.5px;color:#5b6b7c;background:#f4f0ec;border-radius:9px;padding:1px 7px;font-weight:700}'
    + '.gpa-grid{display:grid;gap:8px}'
    + '.gpa-cols{display:grid;grid-template-columns:1fr 1fr;gap:12px;align-items:start}'
    + '.gpa-f{border:1px solid #dde5ee;border-left:3px solid #1d5486;border-radius:8px;background:#f8fafc;padding:9px 11px}'
    + '.gpa-f .d{font-size:9.5px;color:#9a6b12;font-weight:800}'
    + '.gpa-f .t{font-size:11.6px;font-weight:750;color:#123a5e;margin-top:2px}'
    + '.gpa-f .x{font-size:10.8px;color:#41546a;line-height:1.65;margin-top:4px}'
    + '.gpa-f .s{font-size:9.3px;color:#8a97a6;margin-top:5px}'
    + '.gpa-f .s a{color:#126b6b;font-weight:700;text-decoration:none}.gpa-f .s a:hover{text-decoration:underline}'
    + '.gpa-flow{border:1px solid #dde5ee;border-radius:9px;padding:10px 12px;background:#fff}'
    + '.gpa-flow.green{border-left:3px solid #1f7a4d;background:#f2faf5}'
    + '.gpa-flow.yellow{border-left:3px solid #9a6b12;background:#fff9ef}'
    + '.gpa-flow.red{border-left:3px solid #b8461f;background:#fdf2f0}'
    + '.gpa-flow .dir{font-size:11.5px;font-weight:800;color:#123a5e}'
    + '.gpa-flow .tt{font-size:10.5px;font-weight:750;color:#7a5a12;margin-top:3px}'
    + '.gpa-flow.green .tt{color:#1f7a4d}.gpa-flow.red .tt{color:#a83628}'
    + '.gpa-flow .xx{font-size:10.8px;color:#41546a;line-height:1.65;margin-top:4px}'
    + '.gpa-v{border:1px solid #dde5ee;border-radius:9px;padding:10px 12px;background:#f8fafc;font-size:11px;color:#41546a;line-height:1.7;margin-top:7px}'
    + '.gpa-v b{color:#123a5e}'
    + '.gpa-li{font-size:11px;color:#41546a;line-height:1.7;padding-left:20px;position:relative;margin:6px 0}'
    + '.gpa-li::before{content:"";position:absolute;left:4px;top:8px;width:6px;height:6px;border-radius:50%;background:#a85632}'
    + '.gpa-li .no{position:absolute;left:0;top:1px;font-size:9px;font-weight:800;color:#a85632}'
    + '.gpa-own{border:1px solid #cfe0e0;border-radius:10px;background:#f4fbfa;padding:11px 13px}'
    + '.gpa-own .t{font-size:11.5px;font-weight:800;color:#126b6b}'
    + '.gpa-own .r{font-size:10.6px;color:#41546a;line-height:1.7;margin-top:5px;padding-left:12px;position:relative}'
    + '.gpa-own .r::before{content:"";position:absolute;left:2px;top:8px;width:4px;height:4px;border-radius:50%;background:#126b6b}'
    + '.gpa-own .s{font-size:9.3px;color:#8a97a6;margin-top:7px}.gpa-own .s a{color:#126b6b;font-weight:700;text-decoration:none}'
    + '.gpa-bench{border:1px solid #f0dcb8;background:#fff8ed;border-radius:9px;padding:10px 12px;margin-top:8px}'
    + '.gpa-bench .t{font-size:10.6px;font-weight:800;color:#7a5a12}.gpa-bench .x{font-size:10.6px;color:#5c4a28;line-height:1.65;margin-top:4px}'
    + '.gpa-refs{font-size:9.6px;color:#8a97a6;line-height:1.7;padding-left:16px;position:relative;margin:4px 0}'
    + '.gpa-refs::before{content:"—";position:absolute;left:2px;color:#b9c6d4}'
    + '.gpa-ft{background:#f8fafc;border-top:1px solid #dde5ee;padding:11px 18px;font-size:10.5px;color:#5b6b7c;line-height:1.7;display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap}'
    + '@media(max-width:900px){.gpa-kpis{grid-template-columns:repeat(3,1fr)}.gpa-cols{grid-template-columns:1fr}}'
    + '@media(max-width:560px){.gpa-kpis{grid-template-columns:repeat(2,1fr)}.gpa-t{font-size:14.5px}}';

  var st = document.createElement('style');
  st.setAttribute('data-gpa', '1');
  st.textContent = CSS;
  document.head.appendChild(st);

  var factHtml = (A.facts || []).map(function (f) {
    return '<div class="gpa-f"><div class="d">可核验事实 · ' + esc(f.d) + '</div>'
      + '<div class="t">' + esc(f.t) + '</div><div class="x">' + esc(f.x) + '</div>'
      + '<div class="s">来源：' + link(f.url, f.src) + '</div></div>';
  }).join('');
  var findingHtml = (A.findings || []).map(function (f) {
    return '<div class="gpa-f" style="border-left-color:#a85632;background:#fdf7f3">'
      + '<div class="d">推演 · 需核实</div><div class="t">' + esc(f.t) + '</div>'
      + '<div class="x">' + esc(f.x) + '</div></div>';
  }).join('');
  var flowHtml = (A.flows || []).map(function (f) {
    return '<div class="gpa-flow ' + esc(f.level) + '"><div class="dir">' + esc(f.dir) + '</div>'
      + '<div class="tt">' + esc(f.t) + '</div><div class="xx">' + esc(f.x) + '</div></div>';
  }).join('');
  var ownHtml = (A.ownSide.rows || []).map(function (r) {
    return '<div class="r">' + esc(r) + '</div>';
  }).join('');
  var chkHtml = (A.checklist || []).map(function (c, i) {
    return '<div class="gpa-li"><span class="no">' + (i + 1) + '.</span>' + esc(c) + '</div>';
  }).join('');
  var refHtml = (A.refs || []).map(function (r) {
    return '<div class="gpa-refs">' + esc(r) + '</div>';
  }).join('');
  var kpiHtml = (A.kpi || []).map(function (k) {
    return '<div class="gpa-k ' + esc(k.tone) + '"><b>' + esc(k.v) + '</b>'
      + '<span class="k">' + esc(k.k) + '</span><span class="d">' + esc(k.d) + '</span></div>';
  }).join('');

  var sec = document.createElement('section');
  sec.className = 'gpa';
  sec.innerHTML = '<div class="gpa-card">'
    + '<div class="gpa-hd"><div>'
    +   '<div class="gpa-kick">AI GB · 战略合作评估简报 · 签约决策</div>'
    +   '<div class="gpa-t">' + esc(A.meta.title) + '</div>'
    +   '<div class="gpa-meta">合作形式：' + esc(A.meta.form) + ' · 评估日：' + esc(A.meta.assessedAt) + '</div>'
    + '</div><span class="gpa-tag">长期留档 · 非每日情报</span></div>'
    + '<div class="gpa-b">'
    +   '<div class="gpa-concl">' + esc(A.headline) + '</div>'
    +   '<div class="gpa-kpis">' + kpiHtml + '</div>'
    +   '<div class="gpa-sec">可核验事实 <span class="n">' + (A.facts || []).length + ' 条</span></div>'
    +   '<div class="gpa-grid gpa-cols">'
    +     '<div class="gpa-grid">' + factHtml + '</div>'
    +     '<div>'
    +       '<div class="gpa-own"><div class="t">' + esc(A.ownSide.title) + '</div>' + ownHtml
    +         + '<div class="s">来源：' + link(A.ownSide.url, A.ownSide.src) + '</div></div>'
    +       '<div class="gpa-bench"><div class="t">' + esc(A.benchmark.t) + '</div>'
    +         + '<div class="x">' + esc(A.benchmark.x) + '</div>'
    +         + '<div class="x">' + link('https://globaldefense.us/export', A.benchmark.src) + '</div></div>'
    +     '</div>'
    +   '</div>'
    +   '<div class="gpa-sec">矛盾点与判断 <span class="n">推演 · 需对方举证</span></div>'
    +   '<div class="gpa-grid">' + findingHtml + '</div>'
    +   '<div class="gpa-sec">四条流向逐一算账 <span class="n">推演</span></div>'
    +   '<div class="gpa-grid">' + flowHtml + '</div>'
    +   '<div class="gpa-sec">对 GUNBASE 品牌的净影响 <span class="n">推演</span></div>'
    +   '<div class="gpa-v"><b>名义背书：</b>' + esc(A.verdict.nominal) + '</div>'
    +   '<div class="gpa-v"><b>实质加分：</b>' + esc(A.verdict.substantial) + '</div>'
    +   '<div class="gpa-v"><b>风险：</b>' + esc(A.verdict.risk) + '</div>'
    +   '<div class="gpa-sec">签约前必查清单 <span class="n">' + (A.checklist || []).length + ' 项</span></div>'
    +   '<div>' + chkHtml + '</div>'
    +   '<div class="gpa-sec">引用来源 · MLA <span class="n">' + (A.refs || []).length + ' 条</span></div>'
    +   '<div>' + refHtml + '</div>'
    + '</div>'
    + '<div class="gpa-ft"><span>' + esc(A.meta.integrity) + '</span></div>'
    + '</div>';

  /* 挂载：团队中心优先塞进 #miWrap 顶部；Marketing 挂在页头后第一个 .wrap 顶部。
     本脚本在情报摘要脚本之后引入，故能插在每日情报卡之前，第一眼可见。 */
  var miWrap = document.getElementById('miWrap');
  if (miWrap) {
    miWrap.insertBefore(sec, miWrap.firstChild);
  } else {
    var hd = document.querySelector('header');
    var host = null;
    if (hd && hd.nextElementSibling && hd.nextElementSibling.classList.contains('wrap')) host = hd.nextElementSibling;
    if (!host && hd && hd.parentNode) {
      var sibs = hd.parentNode.children;
      for (var i = 0; i < sibs.length; i++) {
        if (sibs[i].classList && sibs[i].classList.contains('wrap')) { host = sibs[i]; break; }
      }
    }
    if (!host) {
      var wraps = [].slice.call(document.querySelectorAll('.wrap')).filter(function (w) {
        return !w.closest('nav') && !w.closest('.gb-tabbar');
      });
      host = wraps[0] || null;
    }
    if (!host) host = document.querySelector('main');
    if (!host) host = document.body;
    host.insertBefore(sec, host.firstChild);
  }
})();
