/* AI GB 团队契约 — 四角色命名、汇报关系与情报交换协议
 *
 * 事实来源：2026-11-20 资产所有者（陈邦杰）口述授权：
 *   - AI Sales 改名 AI GB-Sales
 *   - AI Marketing 改名 AI GB-Marketing
 *   - 未来将建 AI PM（AI GB-PM），作为上述两者的直接汇报对象
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
    note: "命名与汇报关系由资产所有者指定；协作动作中只有标注为『已落地』的才在本仓库实现。AI GB-PM 目前为规划角色，尚未建立系统实体。"
  },

  // 组织架构（所有者指定的汇报关系）
  org: [
    {
      id: "GB-PM", name: "AI GB-PM", en: "AI GB Project Manager",
      role: "统筹者 · 未来角色", reportsTo: null,
      status: "planned", statusLabel: "规划中 · 系统未建立",
      scope: "作为 AI GB-Sales 与 AI GB-Marketing 的直接汇报对象，统一分派目标、汇总进展、裁决资源冲突",
      factBasis: "owner-specified"
    },
    {
      id: "GB-Sales", name: "AI GB-Sales", en: "AI GB Sales",
      role: "客户线 · 找买家、发开发信、跟进台账", reportsTo: "GB-PM",
      status: "live", statusLabel: "已上线 · 本地 v3.0.17",
      scope: "海外业务汇报中心：授权状态、渠道结构、决策卡点、客户回信",
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
      status: "live", statusLabel: "已上线 · 本地 v1.0.0",
      scope: "瞄准镜/枪械配件/战术装备每日技术情报、三大检索矩阵、图纸端设计储备与合规闸门",
      entry: "./rd/", factBasis: "owner-specified-2026-11-23"
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
        gate: "GB-PM 系统建立后才可启用；当前仅在本页展示结构。",
        impl: "planned"
      },
      {
        id: "F4", from: "GB-Marketing", to: "GB-Sales",
        name: "合规闸门 → 话术边界",
        desc: "Marketing 维护的合规红线（禁战斗式射击、禁纳粹符号、平台禁投类目）作为 Sales 对外话术与素材的硬约束。",
        gate: "已在 Marketing PWA 的合规闸门板块落成；跨系统自动同步尚未实现。",
        impl: "partial"
      }
    ],
    sharedEntities: [
      { key: "region", name: "区域", owner: "双方共用", note: "EU/NA/ME/AP/LA/AF 六大区，Marketing 已定义，Sales 可沿用" },
      { key: "account", name: "机构/账号", owner: "Sales", note: "买家与联系人由 Sales 台账管理，Marketing 只读引用" },
      { key: "partner", name: "合作对象", owner: "Marketing", note: "品牌/协会/俱乐部由 Marketing 机会池管理，Sales 只读引用" },
      { key: "compliance", name: "合规状态", owner: "Marketing", note: "绿/黄/红灯为全局硬约束，Sales 不得越红灯触达" }
    ]
  },

  // 已落地的互通动作（本仓库内真实实现）
  implemented: [
    "统一仓库 ai-gb-hub：两个 PWA 同域部署，手机各有一个固定网址",
    "统一命名：两套 PWA 的 manifest、标题、品牌文案均改为 AI GB-Sales / AI GB-Marketing",
    "互链入口：两个 PWA 顶部均加入『同事协作』跳转，可一键到对方与团队页",
    "本共享契约文件 gb-team.js 由三个页面共同读取，避免各写一份导致口径分裂"
  ],

  guardrails: [
    "本仓库不含明文密码、Token 或客户个人信息；Sales 的 Supabase publishable key 为浏览器前端公钥，非私密凭据。",
    "Sales 的决策操作仍限本机 file:// 打开，云端/手机访问自动只读，不因部署而改变。",
    "任何『互通』目前是展示层与契约层互通，不是数据库实时双向同步；不得对外声称已完成系统级打通。",
    "AI GB-PM 尚未建立，本页展示的汇报关系是组织设计，不是已运行的软件系统。"
  ]
};
