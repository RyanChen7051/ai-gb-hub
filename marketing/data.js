/* AI市场战术专家 — 数据文件
 * 架构与 AI业务员(ai-sales-report-hub)一致:零依赖纯静态,window.MARKET_DATA 驱动整页。
 *
 * 数据诚信约定（务必遵守）：
 * - verification:"verified" = 来自公开可核实来源，附 source 字段（MLA）；
 * - verification:"model"   = 基于已核实事实的策略推演示例，非已建立的合作关系；
 * - 页面对两类数据分别打标签，绝不把策略示例冒充真实线索。
 * - 严禁写入明文密码 / Token / 个人信息。实时网络信号可后续由自动化重写本文件接入。
 */
window.MARKET_DATA = {
  meta: {
    botName: "AI 市场战术专家",
    shortName: "AI市场战术",
    org: "GunBase 火械基地 · 全球品牌宣传战术中心",
    version: "1.3.1",
    reportDate: "2026-11-20",
    generatedAt: "2026-11-20 14:11 (GMT+8)",
    scope: "全球 · 六大区",
    tagline: "关键字 + 全球组织 双引擎 · 主打品牌宣传 · 面向全球",
    note: "本页为策略演示版，展示 AI Marketing 的情报结构与决策框架。组织与案例数据来自公开可核实来源；合作机会为策略推演示例，不代表已建立合作。任何对外接触均需所有者逐次授权。本页不采集、不存储个人信息。"
  },

  // ===== 核心指标（数字均可追溯到来源；无来源者标注为策略库规模）=====
  kpis: [
    { label: "全球射击协会", value: "163", unit: "个", tone: "blue", sub: "ISSF 成员协会 · 覆盖149国家/地区", vs: "verified" },
    { label: "SCI 猎人分会", value: "151", unit: "个", tone: "green", sub: "覆盖107国家 · 数百万猎人网络", vs: "verified" },
    { label: "创作者档案池", value: "3亿+", unit: "档", tone: "purple", sub: "Nectar Creator Agent 扫描规模", vs: "verified" },
    { label: "合作机制库", value: "6", unit: "类", tone: "amber", sub: "联名/跨产业/体验/创作者/赛事/社群", vs: "model" },
    { label: "合规绿灯方向", value: "5", unit: "类", tone: "green", sub: "可直接启动的低风险合作", vs: "model" },
    { label: "已核实案例", value: "6", unit: "个", tone: "teal", sub: "全球品牌宣传合作实证", vs: "verified" }
  ],

  // ===== 双引擎：AI Marketing 的资料来源 =====
  engines: {
    keyword: {
      title: "关键字情报雷达",
      icon: "search",
      desc: "按目标市场语种监控合作意向信号。发现『正在找合作伙伴 / 新开门店 / 新聘合作负责人 / 新增品类 / 办活动』的措辞，而非单纯买卖词。关键字组为可配置方法论，非事实声明。",
      groups: [
        { lang: "EN", region: "全球/英美", intent: "联名与赞助意向", kws: ["co-branded collection", "brand partnership open", "sponsorship opportunity", "collab announcement 2026", "experiential activation"] },
        { lang: "DE", region: "中欧", intent: "户外/射击协会合作", kws: ["Kooperation Schießverein", "Zielfernrohr Partner", "Co-Branding Outdoor", "Sponsoring Schießsport", "Markenpartnerschaft"] },
        { lang: "ES", region: "拉美/西班牙", intent: "狩猎与户外社群", kws: ["alianza de marcas", "patrocinio caza", "colaboración outdoor", "nueva tienda aliada", "evento de tiro"] },
        { lang: "AR", region: "中东", intent: "持牌靶场/俱乐部体验", kws: ["شراكة علامة تجارية", "نادي رماية", "رعاية فعالية", "تعاون تجاري", "تجربة رماية"] },
        { lang: "PT", region: "巴西", intent: "射击运动联合会", kws: ["parceria de marcas", "patrocínio tiro esportivo", "colaboração outdoor", "nova coleção"] },
        { lang: "JA", region: "日本", intent: "户外/精品生活方式", kws: ["ブランド コラボ", " опыта体験 イベント", "スポンサー募集", "アウトドア 提携"] }
      ]
    },
    org: {
      title: "全球组织雷达",
      icon: "globe",
      desc: "从国际组织与行业机构切入，一次触达成百上千成员。下列组织规模为公开可核实数据；具体合作方式见『合作机会』。",
      categories: [
        { type: "国际射击运动组织", tag: "体育", count: "149国/163协会", examples: ["International Shooting Sport Federation (ISSF)", "European Shooting Confederation (ESC)", "Asian Shooting Confederation (ASC)", "Shooting Australia"], note: "ISSF 官方已布局 VR 与电竞吸引年轻受众，与体验式合作天然契合", source: " ISSF, 2026", vs: "verified" },
        { type: "狩猎与户外保护组织", tag: "社群", count: "107国/151分会", examples: ["Safari Club International (SCI)", "SCI Foundation", "SCI Europe / Canada / Africa"], note: "年度大会汇聚数万猎人，设赞助商与合作伙伴体系，是品牌曝光高势能场景", source: " SCI Media Kit, 2026", vs: "verified" },
        { type: "创作者营销平台", tag: "创作者", count: "3亿+档案", examples: ["Nectar Creator Agent", "Aspire", "GRIN"], note: "AI 可做契合度评分、外联草稿、合同寄样与效果追踪；需人工审核", source: " Forristal, 2026", vs: "verified" },
        { type: "精品咖啡 / 餐饮连锁", tag: "跨产业", count: "策略观测类", examples: ["Third Wave Coffee（印度）", "库迪咖啡（中国）", "The Elk / La La Land Kind Cafe（美国）"], note: "高频生活场景，适合主题化联名与『精度』叙事并置；非武器场景更安全", source: " Indian Retailer, 2026", vs: "verified" },
        { type: "户外 / 船艇 / 服装品牌", tag: "跨产业", count: "策略观测类", examples: ["Tombolo × Boston Whaler", "Brooks × ClemQuiCourt", "Vango × CampWild"], note: "跨产业联名已验证可带来数百万曝光与实质销售转化", source: " Soundings Trade Only, 2026", vs: "verified" },
        { type: "持牌靶场 / 俱乐部", tag: "体验", count: "需逐国核实", examples: ["JA Shooting Club（迪拜）", "ISSF 成员俱乐部网络"], note: "游客凭有效证件可在教练监督下体验；必须持牌场地 + 全程监督 + 靶场形态", source: " Legal Clarity, 2026", vs: "verified" }
      ]
    }
  },

  // ===== 全球布局（ISSF 洲际结构 + SCI 区域网络）=====
  regions: [
    { code: "EU", name: "欧洲", en: "Europe", anchor: "ESC 欧洲射击联合会", focus: "协会合作 / 合规优先", status: "yellow", note: "合规最严：AWaffV 禁战斗式射击，刑法§86a 限历史符号" },
    { code: "NA", name: "北美", en: "North America", anchor: "SCI / NRA / 创作者生态", focus: "赛事赞助 / 创作者内容", status: "green", note: "SCI 年度大会 + 3亿创作者档案池，品牌曝光高势能" },
    { code: "ME", name: "中东", en: "Middle East", anchor: "ASC 亚洲射击 / 持牌俱乐部", focus: "持牌靶场体验日", status: "green", note: "游客可凭护照监督体验；禁私人持枪与公共射击" },
    { code: "AP", name: "亚太", en: "Asia-Pacific", anchor: "ASC / Shooting Australia", focus: "赛事 / 精品生活方式联名", status: "green", note: "亚洲射击联合会总部科威特；日澳户外消费成熟" },
    { code: "LA", name: "拉美", en: "Latin America", anchor: "CBTE 巴西 / SCI 拉美分会", focus: "狩猎社群 / 户外联名", status: "green", note: "巴西、阿根廷、智利均有 ISSF 成员协会" },
    { code: "AF", name: "非洲", en: "Africa", anchor: "SCI Africa / 南非射击联合会", focus: "保育合作 / 狩猎旅游", status: "green", note: "SCI 在非洲有保育与社区项目合作基础" }
  ],

  // ===== 合作机制库 =====
  mechanisms: [
    { key: "cobrand", name: "联名产品", en: "Co-branding", desc: "共创限定商品/视觉，共享双方渠道", example: "Tombolo × Boston Whaler" },
    { key: "cross", name: "跨产业场景", en: "Cross-industry", desc: "共享客户但不共享产品的品牌互导", example: "珠宝 × 精品咖啡" },
    { key: "exp", name: "体验式激活", en: "Experiential", desc: "线下快闪/体验日，内容可二次传播", example: "UTMB 限量 T 恤快闪" },
    { key: "creator", name: "创作者内容", en: "Creator", desc: "契合度评分 + 外联 + 效果追踪", example: "Nectar Creator Agent" },
    { key: "event", name: "赛事 / 协会赞助", en: "Sponsorship", desc: "借国际组织一次触达成千上万受众", example: "SCI 年度大会赞助" },
    { key: "community", name: "社群共建", en: "Community", desc: "长期内容/活动共建，沉淀品牌资产", example: "Vango × CampWild" }
  ],

  // ===== 合作机会（策略推演示例，均标注 verification:model）=====
  opportunities: [
    { id: "O1", title: "精度主题咖啡联名", mech: "cross", region: "全球", compliance: "green", verification: "model", partner: "精品咖啡连锁", value: "高频场景 + 精度叙事并置，安全无武器展示", why: "CaratLane×Third Wave 45天验证跨产业联名可导流380+门店" },
    { id: "O2", title: "国际射击协会青年项目", mech: "event", region: "全球", compliance: "green", verification: "model", partner: "ISSF 成员协会", value: "一次触达149国网络，契合其 VR/电竞年轻化战略", why: "ISSF 官方明确用技术创新吸引年轻受众" },
    { id: "O3", title: "SCI 年度大会品牌曝光", mech: "event", region: "北美", compliance: "green", verification: "model", partner: "Safari Club International", value: "数万猎人 + 装备制造商聚集的全球展会", why: "SCI 设赞助商/伙伴体系，覆盖107国" },
    { id: "O4", title: "持牌靶场光学体验日", mech: "exp", region: "中东", compliance: "green", verification: "model", partner: "持牌射击俱乐部", value: "合法体验 + 产品实测内容，教练全程监督", why: "游客凭有效证件可预约监督体验" },
    { id: "O5", title: "户外创作者契合度合作", mech: "creator", region: "全球", compliance: "green", verification: "model", partner: "户外/射击创作者", value: "AI 评分筛选 + 人工审核，沉淀长期关系", why: "Nectar 已实现视频内容理解与品牌安全审查" },
    { id: "O6", title: "狩猎保护保育联合项目", mech: "community", region: "非洲/北美", compliance: "green", verification: "model", partner: "SCI Foundation", value: "品牌与可持续保育绑定，提升国际形象", why: "SCIF 累计投入超8000万美元保育项目" },
    { id: "O7", title: "一战前狩猎传统主题体验", mech: "exp", region: "欧洲", compliance: "yellow", verification: "model", partner: "历史重演团体", value: "避开纳粹符号的历史叙事，兼顾体验感", why: "德国刑法§86a 禁纳粹标志，历史/教育用途有例外但商业不天然适用" },
    { id: "O8", title: "德国境内射击场合作", mech: "exp", region: "欧洲", compliance: "yellow", verification: "model", partner: "持牌射击场", value: "需许可 + 至少100万欧元责任保险", why: "WaffG §27 运营许可要求；§35 限公共活动交付" },
    { id: "O9", title: "二战服装 + 战场游戏", mech: "exp", region: "欧洲", compliance: "red", verification: "model", partner: "历史主题体验", value: "禁止：合规红线，不得启动", why: "AWaffV §7 禁战斗式射击；刑法§86a 禁纳粹制服标志" },
    { id: "O10", title: "公共场合射击体验", mech: "exp", region: "中东", compliance: "red", verification: "model", partner: "非持牌场地", value: "禁止：重罪风险", why: "沙特无证持枪最高18个月；UAE 无证最高10年+25万迪拉姆" },
    { id: "O11", title: "瞄准镜作为付费广告主力", mech: "creator", region: "欧洲/中东", compliance: "red", verification: "model", partner: "Google Ads / Meta", value: "禁止：渠道不可行", why: "Google 将瞄具列为增强枪支功能部件禁投，美国试点不覆盖欧中" },
    { id: "O12", title: "户外装备品牌联名", mech: "cobrand", region: "全球", compliance: "green", verification: "model", partner: "户外服装/装备品牌", value: "共享客户不共享产品，已被验证的转化路径", why: "Brooks×ClemQuiCourt 联名售罄 + 创纪录展位人流" }
  ],

  // ===== 合规闸门（可验证法律事实，附来源）=====
  compliance: {
    green: [
      { t: "主题化咖啡/生活方式联名", s: "无武器展示，高频安全场景，跨产业导流已验证", src: "Indian Retailer, 2026" },
      { t: "国际体育/狩猎组织赞助", s: "ISSF/SCI 有正式伙伴体系，一次触达大网络", src: "ISSF, 2026; SCI, 2026" },
      { t: "持牌靶场监督体验", s: "持牌场地 + 全程监督 + 靶场形态", src: "Legal Clarity, 2026" },
      { t: "创作者内容合作", s: "AI 评分 + 人工审核，注意披露与品牌安全", src: "Forristal, 2026" },
      { t: "跨产业品牌联名", s: "共享客户不共享产品，无武器功能宣传", src: "Soundings Trade Only, 2026" }
    ],
    yellow: [
      { t: "历史主题服装/体验", s: "必须剥离纳粹标志、制服、敬礼；历史/教育例外不天然覆盖商业营销，法务前置", src: "德国之声, 2017" },
      { t: "德国境内射击场合作", s: "需 §27 运营许可 + 至少100万欧元责任保险；§35 限公共活动交付", src: "Germany, AWaffV/WaffG" },
      { t: "平台内容投放实测", s: "创意/文案/受众/落地页整体审核，结果不稳定，每次实测", src: "Agency 39A, 2026" }
    ],
    red: [
      { t: "战斗式射击 / 战场游戏", s: "AWaffV §7 禁掩体射击、移动射击、突然目标快速反应等", src: "Germany, AWaffV" },
      { t: "纳粹标志、制服、敬礼", s: "德国刑法§86a，最高3年监禁或罚金", src: "德国之声, 2017" },
      { t: "公共场合射击 / 无许可体验", s: "沙特最高18个月；UAE 最高10年+25万迪拉姆", src: "Gulf News; 2S Lawyers" },
      { t: "瞄准镜作主力付费投放", s: "Google 列为增强枪支功能部件禁投，美国试点不覆盖欧中", src: "Google Ads 政策" }
    ],
    note: "本表基于公开来源整理，不构成法律意见。任何涉及枪支、历史符号或线下体验的活动，落地前应由目标国持牌律师与监管机构确认。"
  },

  // ===== 已核实品牌宣传案例 =====
  cases: [
    { a: "Boston Whaler", b: "Tombolo", region: "北美", mech: "联名产品", result: "16个月售出12,200件 / 净销售130万美元 / 13,900条线索 / 330万曝光", src: "Soundings Trade Only, 2026" },
    { a: "Brooks", b: "ClemQuiCourt", region: "欧洲", mech: "体验式激活", result: "UTMB 限量T恤快闪售罄，内容数百万浏览，展位创纪录人流", src: "Trail Running Awards, 2025" },
    { a: "CaratLane", b: "Third Wave Coffee", region: "亚太", mech: "跨产业场景", result: "45天 / 3款限定饮品 / 380+门店交叉导流 / 外卖平台同步", src: "Indian Retailer, 2026" },
    { a: "Vango", b: "CampWild", region: "欧洲", mech: "社群共建", result: "20位创作者故事化户外体验，127篇数字报道 / 约800万浏览", src: "Brandwave, 2025" },
    { a: "库迪咖啡", b: "英雄联盟S15 / 淘宝闪购", region: "亚太", mech: "跨产业场景", result: "电竞赛场植入 + 联名『闪购茉莉拿铁』15天卖出500万杯", src: "中国新闻周刊, 2026" },
    { a: "LVL UP", b: "Unofficial Run Club", region: "亚太", mech: "体验式激活", result: "悉尼海滩晨跑补给区，250+礼品袋，现场试用与社群传播", src: "Movement Agency, 2026" }
  ],

  // ===== 90天品牌宣传路线图 =====
  roadmap: [
    { phase: "第 1–30 天", title: "建地基", color: "blue", tasks: ["建合规知识库：抓取 Google/Meta 政策与 AWaffV/WaffG/UAE 法原文，记录日期，每月复核", "上线双引擎雷达：先盯三类对象——精品咖啡/户外门店、持牌射击俱乐部、户外创作者", "跑一个低成本咖啡联名试点，验证流程与素材，不追规模", "定义指标：每周机会数、外联回复率、联合触达、邮件订阅增量"] },
    { phase: "第 31–60 天", title: "验证场景", color: "green", tasks: ["中东落地一个持牌靶场『光学体验日』：全程监督、靶场形态、无对抗元素", "启用创作者发现与外联草稿，100%人工审核后发送", "建立统一 UTM 归因看板，与合作伙伴共享数据作为谈判筹码"] },
    { phase: "第 61–90 天", title: "复盘与模板化", color: "purple", tasks: ["复盘首批合作的线索/触达/内容资产三项数据，淘汰无效形态", "法务确认后才考虑历史主题体验扩展，未过法务不动", "把跑通的方案变模板：AI 负责找对象与起草，人负责决策"] }
  ],


  // ===== 品牌资产授权矩阵（用户授权事实；部署状态未核验，明确区分）=====
  brandUsage: {
    markName: "GUNBASE × AI 市场战术专家 联合徽章",
    markVersion: "v1.1 · 2026-11-20 定稿",
    owner: "GunBase 火械基地（资产所有者）",
    note: "以下三项为资产所有者于 2026-11-20 明确给出的使用授权。授权=许可已给出；部署=是否真正在该系统落地，本 PWA 未接入任何目标系统，故一律标注为待核验，不把授权冒充已上线。",
    licenses: [
      {
        id: "L1", scene: "Gunbase 官网", en: "Official Website", icon: "globe", tone: "blue",
        target: "GunBase 品牌官方网站（静态 PWA）",
        scope: "页头品牌区 / PWA 图标 / 页脚 / 分享图",
        authorized: true, authDate: "2026-11-20",
        deploy: "待核验",
        statusNote: "授权已给出；本 PWA 未连接官网代码库，是否在官网实际替换图标未经核实。",
        fact: "官网为纯静态 PWA，前台无登录；询盘经 mailto: 由客户邮件客户端发出。",
        src: "GunBase AI机器人落地清单, 15 Nov. 2026"
      },
      {
        id: "L2", scene: "Gunbase 邮箱", en: "Business Email", icon: "mail", tone: "teal",
        target: "GunBase 商家邮箱（对外业务邮箱）",
        scope: "邮件签名档 / 头像 / 邮件头图",
        authorized: true, authDate: "2026-11-20",
        deploy: "待核验",
        statusNote: "授权已给出；邮箱是否开通、签名是否替换均未核实，不声称已生效。",
        fact: "落地清单记录 sellerEmail 配置为 sales@gunbase-optics.com，并注明需改为真实邮箱；开通状态当时未确认。",
        src: "GunBase AI机器人落地清单, 15 Nov. 2026"
      },
      {
        id: "L3", scene: "全 Falcora 权限", en: "Full Falcora Scope", icon: "key", tone: "purple",
        target: "FALCORA / 获客通AI 全部权限范围",
        scope: "平台界面 / 情报包封面 / 导出文件 / 全部可见页面",
        authorized: true, authDate: "2026-11-20",
        deploy: "待核验",
        statusNote: "授权覆盖「全 Falcora 权限」=该徽章在 Falcora 全站、全部权限层级均可使用；这不是指本 PWA 获得了 Falcora 系统账号权限。",
        fact: "Falcora 为 GitHub Pages 静态情报 SaaS，公开页写明按次交付情报包、无自助订阅/支付/账号系统；内部原型页面数据存于浏览器 localStorage。",
        src: "FALCORA 体验页; 获客通AI App 原型, 10 Nov. 2026"
      }
    ],
    guardrails: [
      "授权范围仅限上述三个场景；超出场景（如转授权第三方、再分发给非授权渠道）需另行确认。",
      "徽章内 GUNBASE 字标源自官方图档，仅做白化与裁切，未改动字体、速度线与 ® 标记。",
      "实际使用时应保持徽章完整，不拉伸、不重绘、不替换字标；深底用矢量白字版，浅底用同版。",
      "授权状态与部署状态是两件事：本页只证明授权存在，不证明目标系统已完成替换。"
    ]
  },

  // ===== 搜索来源矩阵（方法论 + 可核实渠道；非实时抓取结果）=====
  searchSources: {
    desc: "双引擎的『上游取数渠道』清单。这里列的是方法论与可核实渠道类型，不是本页已抓取的实时结果；任何实时信号接入后需另标抓取时间与来源 URL。",
    note: "渠道可行性受地区法律与平台政策约束；合规闸门对黄灯/红灯场景有一票否决权。",
    channels: [
      { type: "国际组织官网", en: "Federation Sites", tone: "blue", src: "ISSF / SCI / ESC / ASC 官方网站与媒体包", use: "成员名录、赛事日历、赞助体系", vs: "verified", srcNote: "issf-sports.org; safariclub.org" },
      { type: "行业媒体与展会名录", en: "Trade Media", tone: "teal", src: "Soundings Trade Only / Trail Running Awards / Innogun 等", use: "联名案例、新品动向、合作意向信号", vs: "verified", srcNote: "tradeonlytoday.com; trailrunningawards.com" },
      { type: "多语种关键词检索", en: "Multilingual Search", tone: "green", src: "Google 按英/德/西/葡/阿/日等语种分组检索", use: "发现『找伙伴 / 开新店 / 聘合作负责人 / 办活动』措辞", vs: "verified", srcNote: "方法为策略层；AI Sales 已实测德/西/法/葡多组关键词" },
      { type: "创作者与内容平台", en: "Creator Platforms", tone: "purple", src: "Nectar / Aspire / GRIN 等创作者档案池", use: "契合度评分、内容理解、外联草稿", vs: "verified", srcNote: "Forristal, 2026" },
      { type: "平台政策与法规原文", en: "Policy & Law", tone: "amber", src: "Google Ads 政策 / AWaffV / WaffG / UAE 武器法原文", use: "合规闸门判据，每月复核，记录抓取日期", vs: "verified", srcNote: "Google Ads; Germany BMI; 2S Lawyers" },
      { type: "公开登记与政采名录", en: "Public Registries", tone: "gray", src: "公开协会登记、政府采购与展会参展名录", use: "批量建库；仅作线索候选，不自动外联", vs: "model", srcNote: "渠道类型属策略层；具体条目需逐条核验" }
    ]
  },

  // ===== 引用来源（MLA）=====
  sources: [
    { t: "Agency 39A", ttl: "Marketing & Technology in the 2A Space", u: "agency39a.com/insights/marketing-in-the-2a-space" },
    { t: "AdNabu", ttl: "7 Ways AI Agents Are Changing E-commerce Marketing in 2026", u: "blog.adnabu.com/ecommerce/ai-agents-for-ecommerce/" },
    { t: "Brandwave", ttl: "Brandwave x Vango 2025", u: "brandwavemarketing.com/brandwave-x-vango-2025/" },
    { t: "Trail Running Awards", ttl: "Brooks x ClemQuiCourt", u: "trailrunningawards.com/en/candidats/brooks-clemquicourt" },
    { t: "Forristal, Lauren", ttl: "Nectar Launches an AI Agent to Automate Creator Discovery and Outreach", u: "techcrunch.com, 12 Nov. 2026" },
    { t: "German Federal Ministry of the Interior", ttl: "General Ordinance on the Weapons Act (AWaffV)", u: "bmi.bund.de/.../AWaffV.pdf" },
    { t: "Google", ttl: "危险的产品或服务（Google Ads 政策）", u: "support.google.com/adspolicy/answer/6014299" },
    { t: "ISSF", ttl: "Member Federations / Development Fund", u: "issf-sports.org" },
    { t: "Legal Clarity", ttl: "Can You Own Guns in Dubai?", u: "legalclarity.org/can-you-own-guns-in-dubai-what-the-law-says/" },
    { t: "RhinoAgents", ttl: "AI Agents in Marketing: The Complete 2026 Guide", u: "rhinoagents.com/blog/ai-agents-in-marketing/" },
    { t: "Safari Club International", ttl: "SCI Media Kit 2026", u: "safariclub.org" },
    { t: "Soundings Trade Only", ttl: "How to Market Like a Winner", u: "tradeonlytoday.com, May 2026" },
    { t: "2S Lawyers", ttl: "UAE Weapon Laws", u: "2s-lawyers.com/understanding-uae-weapon-laws/" },
    { t: "Indian Retailer", ttl: "Third Wave Coffee x CaratLane", u: "indianretailer.com, 5 Oct. 2026" },
    { t: "德国之声", ttl: "行纳粹礼犯法！你知道原因吗？", u: "dw.com" },
    { t: "中国新闻周刊", ttl: "打工人疯抢库迪，这次为了小香风？", u: "news.inewsweek.cn, 16 Nov. 2026" }
  ]
};
