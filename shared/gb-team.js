/* AI GB 团队契约 — 四角色命名、汇报关系与情报交换协议
 *
 * 事实来源：2026-11-20 资产所有者（陈邦杰）口述授权：
 *   - AI Sales 改名 AI GB-Sales
 *   - AI Marketing 改名 AI GB-Marketing
 *   - AI PM（AI GB-PM）框架于 2026-11-28 搭建，作为上述角色的直接汇报对象；业务数据未接入
 *
 * 诚信约定：
 *   - "已落地" = 本仓库内已实现的技术动作；
 *   - "所有者指定" = 用户已明确给出的组织决定，但系统实体尚未建立；
 *   - "建议" = 我方提出的协作设计，未经所有者确认不得当成既定流程。
 *   三者严格分开，不得互相冒充。
 */
window.GB_TEAM = {
  meta: {
    team: "AI GB Team",
    owner: "GunBase 火械基地 · 陈邦杰",
    definedAt: "2026-11-20",
    note: "命名与汇报关系由资产所有者指定；协作动作中只有标注为『已落地』的才在本仓库实现。AI GB-PM 框架已搭建（v0.1.0），项目数据仍为示例占位。AI GB-AS 售后服务部于 2026-11-28 新增（v0.1.0），与 Sales 平行、同受总部管辖，客诉单写本机、演示数据标 demo，未接入自动化客诉识别。"
  },

  // 组织架构（所有者指定的汇报关系）
  org: [
    {
      id: "GB-PM", name: "AI GB-PM", en: "AI GB Project Manager",
      role: "项目管理部 · 客制化项目开发统筹", reportsTo: null,
      status: "framework", statusLabel: "框架已搭建 · v0.1.0 · 数据未接入",
      scope: "管理客制化项目开发：制定开发 schedule、milestone、燃尽图，跟踪风险与延误原因并向总部汇报；与 AI GB-RD 互相搭配；示例数据不冒充真实项目进度",
      entry: "./pm/", factBasis: "owner-specified-2026-11-28"
    },
    {
      id: "GB-Sales", name: "AI GB-Sales", en: "AI GB Sales",
      role: "客户线 · 找买家、发开发信、跟进台账", reportsTo: "GB-PM",
      status: "live", statusLabel: "已上线 · 本地 v3.0.17",
      scope: "海外业务汇报中心：授权状态、渠道结构、决策卡点、客户回信；接收 AI GB-RD 打样闭环 S8 移交的 Sales Kit 六件套（含证据对照与已知局限）",
      entry: "./sales/", factBasis: "owner-specified"
    },
    {
      id: "GB-Marketing", name: "AI GB-Marketing", en: "AI GB Marketing",
      role: "市场线 · 动态调研、合作发现、品牌宣传", reportsTo: "GB-PM",
      status: "live", statusLabel: "已上线 · 本地 v2.1.1",
      scope: "关键字+组织双引擎、全球布局、合作机会池、合规闸门、品牌授权矩阵",
      entry: "./marketing/", factBasis: "owner-specified"
    },
    {
      id: "GB-RD", name: "AI GB-RD", en: "AI GB Research & Development",
      role: "技术线 · 全球技术扫描、图纸设计储备", reportsTo: "GB-PM",
      status: "live", statusLabel: "已上线 · 本地 v1.3.0",
      scope: "瞄准镜/枪械配件/战术装备每日技术情报、三大检索矩阵、图纸端设计储备与合规闸门；使用者痛点库（14 条 / 6 簇，A/B/C 分级）；打样闭环八段产线（痛点 → 图纸 → 打印 → 喷漆 → 模拟 → 实拍 → 移交 Sales）",
      entry: "./rd/", factBasis: "owner-specified-2026-11-23"
    },
    {
      id: "GB-Fin", name: "AI GB-Fin", en: "AI GB Finance",
      role: "财务部 · 成本、关税、运费、清关、报税与报价测算", reportsTo: "GB-PM",
      status: "live", statusLabel: "已上线 · 内部专用 v1.0.0",
      scope: "对内不对外。产品成本 → 完全成本 → EXW/FOB/CFR/CIF/DDP 阶梯 → 关税与进口税费 → 毛利与退税；每日 09:00 发布各国汇率（对比人民币）、关税与 GUNBASE 相关进出口政策。成本输入仅存本机，报价草稿须所有者逐次授权。",
      entry: "./fin/", supervisedBy: "GB-Team", factBasis: "owner-specified-2026-11-28"
    },
    {
      id: "GB-AS", name: "AI GB-AS", en: "AI GB After-Sales",
      role: "售后服务部 · 客诉信息采集、分级、通知所有者", reportsTo: "GB-PM",
      status: "live", statusLabel: "已上线 · 本机工作台 v0.1.0",
      scope: "与 AI GB-Sales 平行协作、同受总部 AI GB-Team 管辖。Sales 开发邮件中「已开始服务」客户的客诉转给 AS；AS 与 AI GB-RD 配合，把一手客诉转成脱敏痛点线索。PWA 对客诉回复强闪烁提醒。AS 只采集信息并通知所有者陈邦杰，后续延伸动作由所有者本人执行；不对外答复、不承诺赔付、不自动发信。",
      entry: "./as/", supervisedBy: "GB-Team", factBasis: "owner-specified-2026-11-28",
      collaboratesWith: ["GB-Sales", "GB-RD"]
    }
  ],

  // 情报交换协议（我方设计，需所有者确认后才是既定流程）
  exchange: {
    status: "proposed",
    statusLabel: "协作设计 · 待所有者确认后固化为流程",
    principle: "两条线共享同一批『实体』，但各写各的字段，不互相覆盖：Sales 写『买家/触达/回复』，Marketing 写『市场信号/合作对象/机会』，PM 只读取汇总不做业务写入。",
    flows: [
      {
        id: "F1", from: "GB-Marketing", to: "GB-Sales",
        name: "合作机会 → 触达线索",
        desc: "Marketing 通过双引擎发现的品牌/协会/俱乐部，若属于可直接销售的买家类型，转为 Sales 的候选线索，进入甄别引擎。",
        gate: "必须经所有者确认后才可转入；不自动写入 Sales 台账。",
        impl: "planned"
      },
      {
        id: "F2", from: "GB-Sales", to: "GB-Marketing",
        name: "客户反馈 → 市场情报",
        desc: "Sales 在开发中观察到的区域需求、拒绝理由、竞品动向，回流为 Marketing 的关键字与组织雷达调整依据。",
        gate: "只回流脱敏统计，不回流客户邮箱/联系人等个人信息。",
        impl: "planned"
      },
      {
        id: "F3", from: "GB-Sales + GB-Marketing", to: "GB-PM",
        name: "双线汇总 → 统一汇报",
        desc: "Sales 的触达/回复指标与 Marketing 的机会/触达指标汇入 PM 的统一看板，供目标分派与资源裁决。",
        gate: "GB-PM 框架已搭建、汇总字段已定义；跨线数据自动汇入尚未实现，当前仅展示结构。",
        impl: "planned"
      },
      {
        id: "F4", from: "GB-Marketing", to: "GB-Sales",
        name: "合规闸门 → 话术边界",
        desc: "Marketing 维护的合规红线（禁战斗式射击、禁纳粹符号、平台禁投类目）作为 Sales 对外话术与素材的硬约束。",
        gate: "已在 Marketing PWA 的合规闸门板块落成；跨系统自动同步尚未实现。",
        impl: "partial"
      },
      {
        id: "F5", from: "GB-Sales", to: "GB-AS",
        name: "已服务客户客诉 → AS 采集",
        desc: "Sales 开发邮件中已进入服务阶段的客户，若回信含客诉内容，转给 AS 采集。AS 只读拉取 Sales 共用的真实回信池 ai_sales_inbox，由使用者判断后一键预填为客诉单。",
        gate: "所有者 2026-11-28 指定为既定流程。不自动把任何回信判为客诉；客户阶段须确认「已开始服务」；AS 不回写 Sales 台账、不自动发信；自动关键词识别待接入。",
        impl: "partial"
      },
      {
        id: "F6", from: "GB-AS", to: "GB-RD",
        name: "一手客诉 → 脱敏痛点线索",
        desc: "AS 把采集到的客诉按类型、严重度、产品归类，生成脱敏的痛点线索移交单草稿，供 RD 的「使用者痛点库」判断是否可工程化消除。",
        gate: "所有者指定「与 RD 做配合」；移交单只含脱敏信息（无邮箱/联系人/订单号），需所有者确认后才交给 RD；本版不自动写入 rd/data.js。",
        impl: "partial"
      },
      {
        id: "F7", from: "GB-AS", to: "所有者 陈邦杰",
        name: "客诉采集 → 强闪烁通知 → 延伸动作",
        desc: "客诉单处于「待通知 / 待回复」时，AS 的 PWA 以红色横幅发光+文字闪烁+角标、浏览器标题栏闪烁和提示音强提醒；使用者复制通知摘要自行发送。",
        gate: "所有者指定「AS 负责采集信息，通知我，我来做后面延伸动作」。AS 只采集与通知，不代答复、不代决策、不自动外发。",
        impl: "implemented"
      }
    ],
    sharedEntities: [
      { key: "region", name: "区域", owner: "双方共用", note: "EU/NA/ME/AP/LA/AF 六大区，Marketing 已定义，Sales 可沿用" },
      { key: "account", name: "机构/账号", owner: "Sales", note: "买家与联系人由 Sales 台账管理，Marketing 只读引用" },
      { key: "partner", name: "合作对象", owner: "Marketing", note: "品牌/协会/俱乐部由 Marketing 机会池管理，Sales 只读引用" },
      { key: "compliance", name: "合规状态", owner: "Marketing", note: "绿/黄/红灯为全局硬约束，Sales 不得越红灯触达" },
      { key: "complaint", name: "客诉单", owner: "AS", note: "AS 采集并写本机；Sales 回信池只读引用，RD 只读接收脱敏线索；不含客户个人信息外发" }
    ]
  },

  // 已落地的互通动作（本仓库内真实实现）
  implemented: [
    "统一仓库 ai-gb-hub：两个 PWA 同域部署，手机各有一个固定网址",
    "统一命名：两套 PWA 的 manifest、标题、品牌文案均改为 AI GB-Sales / AI GB-Marketing",
    "互链入口：两个 PWA 顶部均加入『同事协作』跳转，可一键到对方与团队页",
    "本共享契约文件 gb-team.js 由三个页面共同读取，避免各写一份导致口径分裂",
    "AI GB-PM 子站框架 pm/ 已建：项目组合、排期、里程碑、燃尽图、RD 协同、总部汇报模板与治理规则；示例数据标 demo，不接业务线实时数据",
    "AI GB-AS 子站 as/ 已建：客诉采集/台账、Sales 回信池只读转交、脱敏 RD 移交单草稿、强闪烁提醒与通知摘要；客诉单只写本机，演示数据标 demo 可一键清空"
  ],

  guardrails: [
    "本仓库不含明文密码、Token 或客户个人信息；Sales 的 Supabase publishable key 为浏览器前端公钥，非私密凭据。",
    "Sales 的决策操作仍限本机 file:// 打开，云端/手机访问自动只读，不因部署而改变。",
    "任何『互通』目前是展示层与契约层互通，不是数据库实时双向同步；不得对外声称已完成系统级打通。",
    "AI GB-PM 目前只有框架与数据契约：项目 / 排期 / 里程碑 / 移交单均为示例占位，未接入真实业务数据，不得据此声称系统已打通。",
    "AI GB-Fin 为对内角色：云端与手机访问只显示锁屏，成本与客户报价不进入线上仓库、监督账本与公开情报。",
    "AI GB-Fin 的税率与汇率均为公开参考值；正式报价前须由报关行/律师书面确认具体税号、税率与银行结汇价。",
    "AI GB-AS 只采集客诉信息并通知所有者，不对外答复客户、不承诺赔付/换货/退款；延伸动作一律由所有者本人执行。",
    "AI GB-AS 的客诉单只存本机浏览器，Sales 回信池只读；不自动把回信判为客诉、不回写 Sales 台账、不自动发信、不向 RD 外发客户个人信息。"
  ]
};
