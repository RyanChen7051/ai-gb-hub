/* AI GB-Sales汇报中心 — 数据文件
 * 每日自动化只需重写本文件的 REPORT_DATA 对象，页面即自动刷新。
 * 严禁写入任何明文密码 / Token / 邮箱口令。
 */
window.REPORT_DATA = {
  meta: {
    botName: "AI GB-Sales",
    org: "GunBase 火械基地 · 海外业务执行机器人",
    reportDate: "2026-11-17",
    generatedAt: "2026-11-18 13:56 (GMT+8)",
    cycle: "第 3 日",
    version: "3.0.13",
    tagline: "云端实时 · 关机也更新 · 每日业务进度",
    note: "数据从 Supabase 云端实时读取，电脑关机也更新；本机开机后自动回补报告到桌面。不代表任何对外发送已完成，所有对外发送均需所有者逐次授权。"
  },

  kpis: [
    { label: "授权资源", value: "3", unit: "项", tone: "green", sub: "官网 / 邮箱 / Falcora" },
    { label: "可发送资产", value: "7", unit: "份", tone: "blue", sub: "资料包 / 模板 / 名录" },
    { label: "本地线索库", value: "5,538", unit: "条", tone: "blue", sub: "协会 3,775 + 政采 1,763" },
    { label: "多语种线索", value: "17", unit: "条", tone: "green", sub: "8 组外文实测·待甄别" },
    { label: "甄别候选池", value: "65", unit: "家", tone: "amber", sub: "待开发37 · 已发信14 · 已甄别13" },
    { label: "已对外发送", value: "15", unit: "封", tone: "green", sub: "11-18发15封·有效送达14·退信1(Lobo域名过期)" },
    { label: "订单跟进", value: "0", unit: "封", tone: "amber", sub: "D3/D7/D14跟进序列·云端实时追踪" },
    { label: "客户回复", value: "0", unit: "封", tone: "red", sub: "真实买家回信·有则顶部闪烁提醒" },
    { label: "决策已一次处理", value: "7", unit: "项", tone: "green", sub: "7 已落地 · 首批4+补发11共15封" }
  ],

  // 每日循环：早 08:00 出计划、晚 21:00 出复盘。字段由两条自动化分别写入 plan / review。
  dailyLoop: {
    date: "2026-11-17",
    plan: {
      generatedAt: "2026-11-17 00:04 (GMT+8)",
      goals: [
        "起草 7 条 A 档线索的本地化首封开发信草稿（德 2 / 西 2 / 法 1 / 波 1 / 英 1），全部不含价格、不发送",
        "逐条核查 B 档 10 条线索官网 Contact/Impressum，补全职能邮箱；抓不到就标待补全",
        "把验信、给价、市场范围三项待配合写成可执行清单，并刷新手机汇报中心页面"
      ],
      tasks: [
        { p: "P0", title: "T1 催办并确认本机发信通路（双击 W1 验信脚本）" },
        { p: "P0", title: "T2 催办主力 SKU 价格表（price_list.md 填 5–10 个 SKU）" },
        { p: "P1", title: "T3 起草 A 档 7 条首封开发信，不含价格、不发送" },
        { p: "P1", title: "T4 补全 B 档 10 条邮箱，抓不到标待补全" },
        { p: "P1", title: "T5 整理 LATAM/NA 4 条线索的市场范围待拍板项" },
        { p: "P2", title: "T6 刷新手机汇报中心 data.js 并重新发布" },
        { p: "P2", title: "T7 梳理决策发出链路的一键复制改进方案" }
      ],
      needUser: [
        "双击 04_作业指引/W1_本机验信一键.command，并把验号与测试信结果告诉 AI",
        "在 02_业务资产/price_list.md 填 5–10 个主力 SKU 的单价、币种、MOQ、条款与交期",
        "拍板 Mindeo S.A.、Goris Group、GN Imports、Primary Arms 这 4 条是否纳入正式开发信范围",
        "确认 A 档 EU 6 条是否进入预审客户清单，并确认现有英文模板可否作为本地化底稿",
        "如你在手机点了决策发出，请告诉我邮件主题，便于核查是否到达 AI 收件箱"
      ],
      gaps: [
        { missing: "本机发信通路未验证", how: "你本机双击 W1 验信脚本并回报测试信结果，AI 不在沙箱尝试发信" },
        { missing: "主力 SKU 价格缺失", how: "你在 price_list.md 填 5–10 个 SKU；AI 不编造价格，报价仍逐封授权" },
        { missing: "本地化开发信未起草", how: "今日按 A 档 7 条真实语种出 7 条草稿，标注供预审、不含价格、未发送" },
        { missing: "Falcora 无后端", how: "继续降级只读源，状态写回走本地 leads_ledger.csv，不声称已在 Falcora 建档" },
        { missing: "决策发出邮件链路未验证", how: "今日只整理一键复制为主、mailto 为辅的方案；收到首封决策邮件或你批准后再改" },
        { missing: "推广邮件预审清单未显式成形", how: "把 EU 6 条 A 档列成待预审清单，预审通过前不自主发送，NA 1 条另列待授权" }
      ]
    },
    review: {
      generatedAt: "2026-11-17 00:08 (GMT+8) · 第 3 日首次复盘",
      results: [
        { task: "T6 刷新手机汇报中心页面", done: true, evidence: "data.js 已按本复盘重写、node 校验通过、重新发布，固定链接内容刷新至 00:08" },
        { task: "对照今日计划逐项核对（T1–T7）", done: true, evidence: "已完成 1 / 部分完成 4 / 未完成 2；对照见桌面 2026-11-17_执行成效复盘.md 第 2 节" },
        { task: "T1/T2 催办验信与主力 SKU 价格（写入需配合清单）", done: true, evidence: "桌面计划与手机页面均列出双击 W1、填 price_list.md 的具体动作；实际确认待所有者本机完成" },
        { task: "T1 本机验信实际通过", done: false, evidence: "收件箱 23:50 后无新邮件，未收到验信成功回报；授权发送阶段保持 0%" },
        { task: "T2 主力 SKU 价格表已填写", done: false, evidence: "price_list.md 实测仍为示例行+空行（1,810 字节），单价栏为 ____" },
        { task: "T3 A 档 7 条本地化开发信起草", done: false, evidence: "本轮职责为复盘非起草，00:08 触发距计划生成仅 4 分钟、无执行窗口；草稿顺延，台账 A 档 7 条状态仍为已甄别" },
        { task: "T4 B 档 10 条邮箱补全", done: false, evidence: "台账 B 档 10 条 contact_email 仍为空，AI 不推测填充" }
      ],
      progress: [
        "获客六阶段今日无实质推进：渠道分析 100%、线索搜索 100%、评估分析 75%、邮件开发 35%、授权发送 0%、跟进记账 40%，均与昨日持平",
        "整体完成度约 58%，与昨日持平——不因又过一天虚增；授权发送维持 0%（未验信）",
        "累计对外动作计数：发信 0 封 / 建档 0 条 / 报价 0 封，均为文件与收件箱核查值",
        "机制进展：每日循环首次自动闭环——早计划 00:04、晚复盘 00:08 均自动生成并落盘，但触发时点偏离设计的 08:00/21:00"
      ],
      shortfalls: [
        "【事实】复盘 00:08 与计划 00:04 仅隔 4 分钟，无执行窗口，对照表多数任务处于未完成/部分完成，复盘失去检验一天执行的意义",
        "【事实】T3 开发信起草、T4 邮箱补全未落盘，邮件开发停在 35%，A 档 7 条进不了发送队列",
        "【事实】本机验信连续多日无回报，发信总闸门未开，所有产出停留在草稿层",
        "【事实】screen_leads.py 本轮全盘（Desktop+WorkBuddy）未定位到，甄别成果与脚本本体分离"
      ],
      difficulties: [
        "【环境硬约束】本运行环境出站 SMTP 被拦截，AI 无法在沙箱内登录或发信",
        "【环境硬约束】Falcora 是 GitHub Pages 静态站，无后端，做不了客户建档写回（已降级只读源）",
        "【环境硬约束】PWA 静态站无后端，决策发出只能走邮件桥接，该链路至今未验证成功一次",
        "【可解决未解决】W1 验信脚本已备但未运行；price_list.md 空模板未填；本地化开发信未起草；screen_leads.py 疑似遗失"
      ],
      needUser: [
        "【P0】双击 04_作业指引/W1_本机验信一键.command，回报验号与测试信是否送达——解锁发信的唯一动作",
        "【P0】在 02_业务资产/price_list.md 填 5–10 个主力 SKU 的单价/币种/MOQ/条款/交期",
        "【P0 新增】核对两条自动化的触发时点：当前早计划 00:04、晚复盘 00:08，建议改真实 08:00/21:00 或增设执行窗口",
        "【P1】拍板 Mindeo S.A.、Goris Group、GN Imports、Primary Arms 四条超范围线索是否纳入",
        "【P2】确认 screen_leads.py 是否随目录调整遗失；如你在手机点了决策发出，请把邮件主题告诉我"
      ],
      suggestions: [
        "【拓客策略】通路未通前不谈放量：先备 EU 6 条预审清单与本地化草稿，验信通过后小批量试投德语分销商，德/西语 A 级优先于法/波 B 级（需你拍板放量）",
        "【流程效率】把 B 档邮箱补全与开发信起草绑成一条流水线：抓到职能邮箱才起草，抓不到留空且不出草稿，台账同步补记",
        "【风险与合规】发送前二次抽检 A 档 7 条，重点确认 Argos Armurerie 是零售/分销买家而非同行；Primary Arms 属美国超范围单列；价格表仅本地存放不进看板",
        "【系统与工具】最高优先级修触发时点（复盘 00:08→21:00）或增设业务执行自动化；其次把决策发出改为一键复制为主、mailto 为辅，并核查 screen_leads.py（需你拍板）"
      ],
      gaps: [
        { missing: "本机发信通路未验证", how: "你本机双击 W1 验信脚本并回报测试结果，AI 不在沙箱尝试登录邮箱", doneWhen: "测试信实际送达，授权发送阶段允许推进" },
        { missing: "主力 SKU 价格缺失", how: "你在 price_list.md 填 5–10 个 SKU，AI 起草报价时带出数值但不编造", doneWhen: "表中出现 5–10 行真实单价" },
        { missing: "本地化开发信未起草", how: "明日按 A 档 7 条真实语种出草稿，德 2/西 2/法 1/波 1/英 1，不含价格、不发送", doneWhen: "7 条草稿落盘且可逐条核对 lead_id" },
        { missing: "每日循环触发时点错乱", how: "你核对两条自动化 RRULE，把早计划改 08:00、晚复盘改 21:00，或在中间增设执行自动化", doneWhen: "计划与复盘在设定时点自动生成且有执行窗口" },
        { missing: "screen_leads.py 甄别引擎未定位", how: "核查该文件是否随目录调整遗失；成果已在台账与分层报告中，可据报告重建", doneWhen: "脚本回归原位或确认以台账为准" },
        { missing: "决策发出邮件链路未验证", how: "出一键复制为主方案；收到首封决策邮件或你批准后再改 PWA 架构", doneWhen: "收到首封由所有者发出的决策邮件" }
      ]
    }
  },

  // 获客开发流程进度（状态基于当前 data.js 事实推导，非系统自动计量）
  pipeline: {
    note: "00:08 复盘复核：六阶段较昨日持平，整体约 58%，未因跨日虚增——T3 开发信起草、T4 邮箱补全因复盘与计划仅隔 4 分钟、无执行窗口而未落盘；验信未回报，授权发送保持 0%。属管理判断，非系统自动计量。",
    stages: [
      { name: "渠道分析", status: "done", progress: 100, metric: "4/4 渠道已核验", note: "官网 / 邮箱 / Falcora / 联网搜客均已核验状态" },
      { name: "线索搜索", status: "done", progress: 100, metric: "17 条多语种线索", note: "8 组外文实测 + Falcora 直读双通道打通" },
      { name: "评估分析", status: "doing", progress: 75, metric: "17 条已分层 A7/B10", note: "甄别引擎已建（W3），同行品牌商剔除规则已固化，误判已修正" },
      { name: "邮件开发", status: "doing", progress: 35, metric: "1 套英文模板 + 价格模板", note: "德 / 西 / 葡本地化版本待起草；价格表已备（W4）" },
      { name: "授权发送", status: "todo", progress: 0, metric: "0 封已发送", note: "沙箱不可发信；本机一键验信脚本已备，待你双击运行（W1）" },
      { name: "跟进记账", status: "doing", progress: 40, metric: "台账已建 17 条", note: "leads_ledger.csv 已建 + 7 天去重哈希（W2）；发送状态待本机回报" }
    ]
  },

  // 线索转化漏斗 + 来源分布（数字来自 timeline 已核验记录）
  funnel: {
    title: "FAL_REAL 线上线索筛选漏斗",
    steps: [
      { label: "采购方池", value: 398, note: "FAL_REAL 全量" },
      { label: "光学/战术族", value: 67, note: "品类筛选" },
      { label: "欧洲/中东", value: 24, note: "地区筛选" },
      { label: "带职能邮箱", value: 13, note: "可联系候选" },
      { label: "真渠道买家", value: 2, note: "排除同行后" }
    ],
    sources: [
      { label: "本地离线家底", value: 5538, note: "协会 3,775 + 政采 1,763" },
      { label: "联网多语种", value: 17, note: "8 组外文实测" }
    ]
  },

  // 客户渠道结构（来源：03_线索与甄别/leads_ledger.csv 65 条真实线索）
  // 2026-11-20 升级：新增 merged 合并口径（按获取手段归因）+ items 每项 attr 归因角标
  channels: {
    asOf: "2026-11-20",
    total: 65,
    sentTotal: 14,
    note: "细分保留 11-18 原始标签快照（台账 11-20 已将 Google·DE 统一为 WebSearch·DE/Google）；合并口径按「获取手段」归因。已发信为台账状态口径（另 1 封 Lobo 域名过期退信淘汰，未计入）。",
    // 合并口径：把字面分散的三个搜索标签归为一类，还原搜索引擎的真实贡献
    merged: [
      { id:"search", label:"联网搜索（经 Google 检索）", value:36, sent:14, color:"#1d5486",
        parts:"品牌经销商目录 19 + 多语种搜索 15 + Google 直搜 2", attr:"搜索引擎" },
      { id:"directory", label:"批发商/展会名录", value:27, sent:0, color:"#2f7cb8",
        parts:"Innogun 13 + Shield 10 + Valiant 4", attr:"公开名录" },
      { id:"platform", label:"Falcora 静态平台", value:2, sent:0, color:"#9aa7b5",
        parts:"FAL_REAL 只读数据文件", attr:"平台直读" }
    ],
    mergedInsight: "合并口径洞察：搜索引擎（经 Google 检索）实际贡献 36 条线索、且包揽全部 14 封已发信——是唯一被验证可触达的渠道。字面「Google 直接 2 条」只是标签碎片，另外 34 条被记在品牌经销商目录与多语种搜索名下。",
    // 细分口径：保留原有 5 类，attr 标注每条的真实获取手段（归因层）
    items: [
      { label:"展会/批发商名录", value:27, sent:0, color:"#1d5486", attr:"公开名录", attrType:"name", note:"Innogun 13 + Shield 10 + Valiant 4 · 最大存量、零触达" },
      { label:"品牌经销商目录", value:19, sent:9, color:"#2f7cb8", attr:"经 Google 检索", attrType:"google", note:"Burris 9 + Element 10 官网经销商页 · 当前转化主力" },
      { label:"联网多语种搜索", value:15, sent:3, color:"#126b6b", attr:"经 Google 检索", attrType:"google", note:"德/西/法/葡 8 组关键词实测 · 已发 3" },
      { label:"Google 直接", value:2, sent:2, color:"#c08a2e", attr:"经 Google 检索", attrType:"google", note:"德语关键词直搜（路径2）· 已发 2" },
      { label:"Falcora 平台", value:2, sent:0, color:"#9aa7b5", attr:"平台直读", attrType:"platform", note:"只读静态数据文件 · 已甄别、未发信" }
    ],
    insight: "渠道洞察：按获取手段合并后，经 Google 检索的线索共 36 条（55.4%）且贡献全部 14 封已发信；批发商名录 27 条（41.5%）零触达，是最大未开发存量。下一步优先激活名录池，并把检索类的高转化话术复用过去。"
  },

  resources: [
    {
      name: "火械基地官网",
      addr: "www.gunbase-optics.com",
      status: "已授权",
      level: "green",
      detail: "HTTP 200 在线（00:08 复盘复核，www 域名 301 跳转后落地 gunbase-optics.com），静态 PWA。公司与产品资料权威来源（93 SKU / 三类产品）；价格标注 Private Negotiation，无站内信通道。",
      can: "可读取资料",
      cant: "无客户站内信"
    },
    {
      name: "GunBase 企业邮箱",
      addr: "sales@gunbase-optics.com",
      status: "已授权",
      level: "green",
      detail: "Namecheap PrivateEmail 已激活（有效期 2 年），MX 指向正确。但本运行环境出站 SMTP 被拦截，无法在本机沙箱发信；本机一键验信入口 W1_本机验信一键.command 已备。",
      can: "所有者本机可发信",
      cant: "沙箱内不可发信"
    },
    {
      name: "Falcora 获客通AI",
      addr: "ryanchen7051.github.io/falcora/app.html",
      status: "已授权",
      level: "green",
      detail: "GitHub Pages 静态站，HTTP 200 在线（00:08 复盘复核），无后端、无真实登录。已降级为只读辅助源；线上 7 个 data-*.js 线索数据文件可直读（路线 1），但不等于在 App 界面建档。",
      can: "直读线索数据",
      cant: "无真实 CRM 写回"
    },
    {
      name: "多语种联网搜客",
      addr: "WebSearch · 关键词库 6 语种",
      status: "已授权",
      level: "green",
      detail: "2026-11-16 实测 8 组外文关键词：德语/西语最高产（多家带邮箱分销商），阿语无效。一次拿到 17 条甄别线索，是当前主拓客渠道。00:08 复盘复核：关键词库文件 keywords.json 本机未定位到，改以台账 17 条与分层报告为既有成果依据。",
      can: "联网挖线索",
      cant: "沙箱内不可发信"
    }
  ],

  timeline: [
{
      date: "2026-11-17",
      title: "执行成效复盘（21:00）",
      level: "green",
      items: [
        "【事实】对照今日计划 T1–T7 逐项核对：已完成 1（T6 页面刷新）/ 部分完成 4（T1/T2 催办、T5 清单、T7 方案方向）/ 未完成 2（T3 开发信起草、T4 邮箱补全）。",
        "【事实】获客六阶段与昨日持平、整体约 58%，不因跨日虚增；累计对外动作仍为发信 0 / 建档 0 / 报价 0；授权发送维持 0%（未验信）。",
        "【判断】复盘 00:08 与计划 00:04 仅隔 4 分钟，两个自动化都在凌晨运行、偏离设计时点，起草类任务无执行窗口——已列 P0 请所有者修正为 08:00/21:00 或增设执行自动化。",
        "【事实】screen_leads.py 本轮全盘未定位到；官网 301 跳转后 HTTP 200、Falcora HTTP 200；收件箱 23:50 后无新邮件，决策发出链路仍未验证。",
        "【AI 主动补想】四角度建议：验信前先备预审清单与小批量德语试投、邮箱补全与起草绑定流水线、发信前二次抽检品牌商误发、最高优先级修触发时点与决策链路。"
      ]
    },
{
      date: "2026-11-17",
      title: "今日工作计划（08:00）",
      level: "blue",
      items: [
        "【事实】本次为今日计划首次自动生成，实际生成时间 2026-11-17 00:04 (GMT+8)，标题沿用固定口径。",
        "【事实】今日目标：起草 A 档 7 条本地化首封开发信草稿（德 2 / 西 2 / 法 1 / 波 1 / 英 1），不含价格、不发送。",
        "【事实】昨日复盘 5 项遗留全部顺延；P0 是催办本机验信与主力 SKU 价格表填写。",
        "【事实】台账 17 条中 A 档状态全为已甄别，没有待起草状态；B 档 10 条邮箱待补全，LATAM/NA 4 条待拍板。",
        "【事实】护栏不变：报价逐封授权、推广仅预审清单内自主、对外动作计数保持 0（未发信、未建档、未报价）。"
      ]
    },
{
      date: "2026-11-16",
      title: "每日循环机制上线：早计划 / 晚复盘（23:50）",
      level: "green",
      items: [
        "新建早 08:00「AI GB-Sales每日工作计划」自动化；晚 21:00 升级为「执行成效复盘」——晚间对照早间计划逐项核对。",
        "两份报告落盘 01_每日报告/：今日工作计划.md（目标/任务优先级/需你配合/系统缺口）+ 执行成效复盘.md（成效/进度/不足/困难/需解决/AI 主动补想建议/明日承接）。",
        "PWA 新增「每日循环 · 今日计划 / 执行复盘」展示区，手机随时看当天目标、进度与系统缺口；版本升至 2.4.0 / cache v9。",
        "复盘新增「AI 主动补想」章节：覆盖拓客策略、流程效率、风险合规、系统工具四角度。",
        "首版示范按当天实况补录；自 11-17 起早 8 点自动出计划、晚 9 点自动出复盘。"
      ]
    },
{
      date: "2026-11-16",
      title: "晚间复核 · 收件箱指令核查 + 汇报中心刷新（23:28）",
      level: "blue",
      items: [
        "当日又一次自动化触发（首版 20:55 + 21:00/21:34/21:39/21:53/22:14 多次补记 + 22:46 Phase 0 落地 + 23:18 补记）；桌面报告以「本日补记（23:28）」追加，不覆盖；周期按天计仍为第 2 日。",
        "23:28 实测在线状态：官网 https www 域名 301 跳转后 HTTP 200（落地 gunbase-optics.com），Falcora app.html HTTP 200；关键词库 keywords.json 在位（6,763 字节），三类资源权威口径未变。",
        "核对本地资产全部在位：leads_ledger.csv（18 行 = 表头 + 17 条 + 去重哈希）、screen_leads.py（10,103 字节）、12_线索甄别分层报告.md、price_list.md（1,810 字节）、W1_本机验信一键.command（可执行）。",
        "收件箱复核：仅一封 9-27 Agent Mail 接入通知，无「决策发出」新邮件、无所有者推翻决策的指令；decisionSummary 7 项（5 done + 2 wait）保持不变，KPI「决策已一次处理」= 7 = results.length。",
        "pipeline 授权发送保持 0%（未收到本机验信通过回报，不虚增）；对外动作计数仍为 0（未发信、未建档、未报价）。",
        "重新发布本汇报中心，固定 URL 内容刷新至 23:28 时刻。"
      ]
    },
{
      date: "2026-11-16",
      title: "晚间复核 · KPI 一致性修正 + 汇报中心刷新（23:18）",
      level: "blue",
      items: [
        "当日又一次自动化触发（首版 20:55 + 21:00/21:34/21:39/21:53/22:14 多次补记 + 22:46 Phase 0 落地）；桌面报告以「本日补记（23:18）」追加，不覆盖；周期按天计仍为第 2 日。",
        "23:18 实测在线状态：官网 https www 域名 301 跳转后 HTTP 200（落地 gunbase-optics.com），Falcora app.html HTTP 200；关键词库 keywords.json 在位（6,763 字节），三类资源权威口径未变。",
        "核对 Phase 0 本地资产全部在位：leads_ledger.csv（17 条线索 + 表头 + 7 天去重哈希）、screen_leads.py 甄别引擎、12_线索甄别分层报告.md、price_list.md、W1_本机验信一键.command。",
        "一致性修正：decisionSummary.results 实为 7 条（5 done + 2 wait），「决策已一次处理」KPI value 由 6 对齐为 7，标题与说明同步为 7 项、5 已落地；决策内容本身未变。",
        "收件箱复核：仅一封 9-27 Agent Mail 接入通知，无「决策发出」新邮件、无所有者推翻决策的新指令。",
        "pipeline 授权发送保持 0%（未收到本机验信通过回报，不虚增）；对外动作计数仍为 0（未发信、未建档、未报价）。",
        "重新发布本汇报中心，固定 URL 内容刷新至 23:18 时刻。"
      ]
    }

  ],

  // 四维分析（优势/劣势/机会/行动）—— 每项 {t:标题, d:说明, lv:high/mid/low}
  swot: {
    strengths: [
      { t: "产品与资料齐备", d: "官网 93 SKU / 三类产品，中英公司资料包已完成，可随时发出", lv: "high" },
      { t: "多渠道拓客已打通", d: "Falcora 直读 + 多语种联网搜索双通道，一次实测拿到 17 条线索", lv: "high" },
      { t: "授权护栏清晰", d: "三级授权 + 报价 11 要素逐次授权，风险可控、可追溯", lv: "mid" },
      { t: "汇报透明可核查", d: "固定 URL + 每晚自动刷新，每条线索附来源与命中依据", lv: "mid" }
    ],
    weaknesses: [
      { t: "沙箱无法发信", d: "出站 SMTP 被拦，须所有者本机运行脚本或邮件客户端发送", lv: "high" },
      { t: "Falcora 无后端", d: "静态站不能建档/写回，'已联系'只能记本地", lv: "high" },
      { t: "线索需人工甄别", d: "FAL_REAL 混入同行品牌商，邮箱部分缺失需补全", lv: "mid" },
      { t: "单价依赖所有者", d: "官网隐藏价格，报价必须由你给单价/交期", lv: "mid" }
    ],
    opportunities: [
      { t: "德语/西语市场高产", d: "实测德西两语种命中多家带邮箱分销商，德国为欧洲最大猎具市场", lv: "high" },
      { t: "巴西进口商主动招品牌", d: "GN Imports 官网明写招募品牌，契合度高", lv: "mid" },
      { t: "阿联酋光学分销枢纽", d: "LightSpeed-Optics 等中东分销商，与 Falcora 数据交叉验证吻合", lv: "mid" },
      { t: "历史询盘尚未启用", d: "若有过往询盘名单，转化率远高于冷线索", lv: "low" }
    ],
    actions: [
      { t: "补全省份邮箱", d: "打开候选官网 Contact 页取职能邮箱，拿不到留空不推测", lv: "high" },
      { t: "起草本地化开发信", d: "德/西/葡语版本，不含价格，套已审模板", lv: "high" },
      { t: "拍板市场范围", d: "确认拉美/巴西/美国是否纳入正式群发", lv: "high" },
      { t: "接入每晚自动搜客", d: "把多语种搜客并入 21:00 自动化，每天自动跑一轮", lv: "mid" }
    ]
  },

  // 每日搜索清单汇总
  searchChecklist: {
    date: "2026-11-16",
    summary: "8 组外文关键词真实搜索，拿到 17 条甄别线索。德语/西语最高产；阿语无效弃用；法语须带 armurerie 限定。",
    langs: [
      { code: "DE", name: "德语", grade: "A", hits: "4+", note: "多家带邮箱 B2B 分销/零售", kw: "Zielfernrohr Großhändler Importeur Deutschland" },
      { code: "ES", name: "西语", grade: "A", hits: "5+", note: "命中最多带邮箱真实分销商", kw: "distribuidor mayorista miras telescópicas" },
      { code: "PT", name: "葡语", grade: "B+", hits: "2", note: "巴西进口商官网招品牌", kw: "distribuidor atacado lunetas importador Brasil" },
      { code: "EN", name: "英语", grade: "B", hits: "4", note: "泛词多返回制造商，须加买家意图词", kw: "tactical optics distributor UAE wholesale" },
      { code: "FR", name: "法语", grade: "B-", hits: "3", note: "必带 armurerie，否则误匹配眼镜商", kw: "grossiste armurerie optique de visée" },
      { code: "AR", name: "阿语", grade: "D", hits: "0", note: "无效弃用，中东改用英语+地区词", kw: "موزع بالجملة نظارات بندقية" }
    ],
    next: ["补全邮箱并起草本地化开发信", "确认拉美/巴西/美国是否纳入正式群发", "把多语种搜客接入每晚 21:00 自动化"]
  },

  // 对话面板配置（来源：WorkBuddy 绑定的智能体邮箱）
  chat: {
    boundTo: "WorkBuddy 智能体邮箱",
    address: "eyku5737@agent.qq.com",
    subject: "[AI GB-Sales·汇报中心提问]",
    mode: "async",
    intro: "你的问题将发给绑定的 WorkBuddy 智能体邮箱，由 AI GB-Sales 读取并回复到你的邮箱。这是异步对话，非即时秒回——回复会到你的收件箱，请留意查收。",
    quick: [
      "今天有哪些新线索？",
      "把 17 条线索的邮箱补全并整理成表",
      "起草首批德语/西语开发信",
      "现在有哪些事需要我拍板？"
    ]
  },

  assets: [
    { name: "01_公司资料包_中英.md", desc: "93 SKU / 三类产品 / FOB·EXW / 价格私下洽谈，全部标注来源", status: "草稿" },
    { name: "02_开发信模板_英文.md", desc: "首封开发信 + 资料跟进两版，含 WhatsApp/邮箱落款", status: "草稿" },
    { name: "03_报价草稿模板.md", desc: "绑定 11 要素（客户/收件/SKU/数量/单价/总价/条款/交期/付款/有效期/渠道）", status: "草稿" },
    { name: "04_能力缺口分析.md", desc: "跑通 Falcora 找客→邮箱推广的四大缺口与最快路径", status: "已授权" },
    { name: "05_线索样例_与本地Falcora家底核查.md", desc: "联网样例线索 + 本地 5,538 条家底核查", status: "草稿" },
    { name: "06_Falcora链接_直接使用方案.md", desc: "主 App 实测 + 采购方/供货方分层修正 + 路线 1", status: "已授权" },
    { name: "07_第一批候选名录_路线1实测.md", desc: "13 家候选 + 同行风险提示与诚实建议", status: "草稿" },
    { name: "08_汇报中心_版本升级操作说明.md", desc: "PWA 版本机制与只改 data.js 的刷新边界", status: "已授权" },
    { name: "09_AI GB-Sales操作Falcora_作业安排与程序.md", desc: "五步 SOP（找线索→甄别→起草→授权发送→记账汇报）", status: "草稿" },
    { name: "10_多语种联网搜索_能力测试.md", desc: "8 组外文关键词实测 · 6 语种评级 · 17 条线索", status: "草稿" },
    { name: "11_劣势破解计划.md", desc: "SWOT-W 四象限 W1–W4 破解矩阵：本机投递 / 只读源+自建台账 / 甄别引擎 / 结构化价格表，仅提效不放权", status: "草稿" },
    { name: "12_线索甄别分层报告.md", desc: "17 条线索经甄别引擎分层：A7/B10/C0，含判定依据；代理品牌误伤已修正", status: "已执行" },
    { name: "03_线索与甄别/leads_ledger.csv", desc: "线索台账：17 条 + 7 天去重哈希，承接 Falcora 做不到的写回状态", status: "已执行" },
    { name: "02_业务资产/price_list.md", desc: "结构化价格清单模板（本地敏感·不进看板），待填 5–10 个主力 SKU", status: "待你填写" },
    { name: "04_作业指引/W1_本机验信一键.command", desc: "双击即跑：验号 + 测试信一步完成，解锁本机发信通路", status: "待你运行" }
  ],

  // 22:46 按所有者「一次全部处理」指令，6 项决策已按推荐方案一次性拍板落地，不再逐项往返。
  decisionSummary: {
    title: "7 项历史决策 · AI 已一次处理",
    note: "以下为早期 7 项决策的处置结果（5 已落地、2 待配合），保留作历史留痕。当前真正卡点已变化，请以下方 6 项「当前卡点决策」为准——它们逐条对应今天的数据缺口。",
    results: [
      { q: "线索源调整", decision: "改用买家导向来源", state: "done", detail: "联网多语种搜客为主源，Falcora 降级为只读辅助源", by: "AI 已执行" },
      { q: "品牌商是否目标", decision: "否，只要分销商/买家", state: "done", detail: "甄别引擎已把 ZEISS/Swarovski 等 12 家品牌商列入剔除词表", by: "AI 已执行" },
      { q: "历史询盘名单", decision: "无，按新线索推进", state: "done", detail: "17 条已核验线索入台账，分层 A7/B10", by: "AI 已执行" },
      { q: "W2 台账方案", decision: "先本地 CSV 台账", state: "done", detail: "leads_ledger.csv 已建，含 7 天去重哈希；Supabase 留作 Phase 2", by: "AI 已执行" },
      { q: "W3 甄别引擎", decision: "规则引擎 + 分层", state: "done", detail: "screen_leads.py 已建并跑通，17 条零误伤；分层报告已出", by: "AI 已执行" },
      { q: "W1 本机验信", decision: "一键脚本已备，待你双击", state: "wait", detail: "W1_本机验信一键.command 已生成并赋执行权限，验号+测试信一步跑完", by: "需你本机" },
      { q: "W4 价格清单", decision: "模板已备，待你填 5–10 个 SKU", state: "wait", detail: "price_list.md 已生成（本地、不进看板）；价格仍逐封授权", by: "需你给价" }
    ]
  },

  // 决策中心：6 大决策逐条对准当前真实卡点（数据截至 2026-11-20）
  decisions: [
    {
      cp: "客户回复 0",
      q: "15 封已发、0 封回复，转化从哪里破？",
      ctx: "截至 11-20：已对外发送 15 封、有效送达 14、退信 1，客户回复仍为 0。瓶颈已从「发得出」转为「有回音」。",
      opts: ["启动 D3/D7 跟进序列，对已送达 14 封做二次触达", "暂停群发，收窄到高匹配 A 档逐封定制重发", "先补官网案例/资质页，提升可信度后再跟进"]
    },
    {
      cp: "名录 27 条零触达",
      q: "占全部线索 41.5% 的批发商名录，是否立即开发？",
      ctx: "渠道结构显示：展会/批发商名录 27 条（Innogun 13 + Shield 10 + Valiant 4）全部「待开发」，0 封触达——当前最大的未开发存量。",
      opts: ["立即起草并发送这 27 条的本地化首封", "先甄别高匹配 10 条试投，验证话术后放量", "维持现状，继续做品牌经销商目录"]
    },
    {
      cp: "报价缺单价",
      q: "主力 SKU 价格清单本周能否给出？",
      ctx: "官网 showPrice:false，价格私下洽谈；price_list.md 仍是空模板。买家一旦回信问价，无即时报价能力，这是转化硬卡点。报价仍按 11 要素逐封授权。",
      opts: ["本周给 5–10 个主力 SKU（单价/币种/MOQ/交期）", "先给 3 个爆款 SKU 试水", "暂不给，统一用「价格另议」先探需求"]
    },
    {
      cp: "渠道投入配比",
      q: "下一步获客资源优先投向哪个渠道？",
      ctx: "经销商目录已发 9/19、搜索类已发 5/17、批发商名录 0/27。需决定集中投放方向，避免资源分散。",
      opts: ["批发商名录（存量最大、零触达）", "品牌经销商目录（转化最高，已发 9 封）", "多语种搜索（可持续增量）"]
    },
    {
      cp: "跟进 KPI = 0",
      q: "D3/D7 自动跟进序列是否即刻启用？",
      ctx: "看板「订单跟进」仍为 0 封，已发 14 封无人二次触达；行业惯例 3 天内跟进可显著提升回复率。序列草稿不含价格。",
      opts: ["立即启用 D3/D7 自动跟进（云端执行、逐封记账）", "先只对 A 档 14 封启用", "暂不自动，逐封人工决定"]
    },
    {
      cp: "决策链路未验证",
      q: "决策发出邮件链路本周是否实测闭环？",
      ctx: "决策发出依赖本机邮件客户端，至今未收到首封「决策发出」邮件。需一次真实闭环确认所有者决策能到达 AI 并被记账。",
      opts: ["本周发一封测试决策验证链路", "改为云端 API 直写决策（不依赖邮件客户端）", "维持现状，暂不验证"]
    }
  ],

  blockers: [
    { item: "发信环境", reason: "本环境出站 SMTP 被拦截，无法在沙箱内登录/发信", path: "在你本机终端运行 send_mail.py，或用邮件客户端发送" },
    { item: "Falcora 无后端", reason: "静态站无真实账号体系与写接口，无法建档/写回", path: "走路线 1 直读线上数据文件；'已联系'状态先记本地" },
    { item: "报价缺单价", reason: "官网 showPrice:false，价格私下洽谈", path: "由你提供单价、币种、交期，AI 不自行推断" },
    { item: "线索质量", reason: "FAL_REAL 混入同行品牌商，'采购需求'为品类推断", path: "先甄别再发；优先渠道买家与历史询盘" }
  ],

  rules: {
    title: "授权与护栏铁律",
    general: [
      "L1 系统访问：三项资源凭据已授权，可用范围以系统实际开放为准。",
      "L2 内部作业：整理资料、起草函件、生成报价草稿、筛选线索——可自主执行，不对外发送。",
      "L3 对外发送：推广邮件在预审清单内可自主（限欧洲/中东、仅已审模板且不含价格、每日上限 20 封、同客户 7 天不重复、逐封记账）；报价邮件必须每封单独授权。"
    ],
    quote: "报价逐次授权：每条报价绑定 11 项要素（客户 / 收件地址 / SKU / 数量 / 单价 / 总价 / 贸易条款 / 交期 / 付款条件 / 有效期 / 渠道）。改任一项即重新授权；上次授权不沿用、不批量、不自动。"
  },

  sources: [
    "GunBase. \"GunBase 火械基地 — Tactical Optics · First Aid · Gear.\" www.gunbase-optics.com, accessed 16 Nov. 2026.",
    "AI GB-Sales. \"01–12 业务资产与 2026-11-15、2026-11-16 业务进度报告.\" 本地文件, Desktop/AI-综合AI业务员/, 15–16 Nov. 2026.",
    "FALCORA. \"app.html / data-real-companies.js / data-l2-contacts.js.\" ryanchen7051.github.io/falcora/, accessed 16 Nov. 2026.",
    "Namecheap PrivateEmail. 邮箱激活状态（所有者确认，有效期 2 年）, 15 Nov. 2026."
  ]
};
