/* AI GB-AS（售后服务部）· 数据契约与章程
 * ------------------------------------------------------------
 * 诚信约定（沿用 shared/gb-team.js）：
 *   - "所有者指定" = 邦杰 2026-11-28 明确下达的组织与流程决定，本文件据实记录；
 *   - "已落地" = 本子站真实实现的技术动作；
 *   - "待接入" = 契约已定义但数据源/自动化尚未实现的动作。
 *   三者严格分开，不得互相冒充。
 *
 * 客诉数据说明：本仓库目前没有真实客诉数据源。AS 的客诉单来源只有两个：
 *   1) 从 Sales 共用的真实回信池（Supabase ai_sales_inbox）里，由使用者标记后转交；
 *   2) 使用者在本页手工录入。
 * 二者都写入本机 localStorage，不编造、不预置任何真实客户客诉。
 * data.js 里的 demo 记录仅供界面演示，全部 demo=true，界面有醒目提示且可一键清空。
 */
window.GB_AS_DATA = {
  meta: {
    id: 'GB-AS',
    name: 'AI GB-AS',
    dept: '售后服务部',
    en: 'AI GB After-Sales',
    version: '0.1.0',
    definedAt: '2026-11-28',
    definedBy: '所有者 陈邦杰（口述指令）',
    reportsTo: 'GB-Team（总部）',
    peers: ['GB-Sales', 'GB-RD'],
    note: '与 AI GB-Sales 平行协作，同受总部管辖；负责客诉信息采集并通知所有者，后续延伸动作由所有者本人执行。'
  },

  /* 所有者指令原文要点（逐条落地，便于核对不漂移） */
  mandate: [
    { n: 1, text: '新增 AI GB-AS（售后服务部），与 Sales 做合作，一样受总部管辖。', impl: 'charter' },
    { n: 2, text: 'Sales 的开发邮件里已经开始服务的客户，如果有客诉的部分，Sales 要直接转给 AS 部。', impl: 'transfer' },
    { n: 3, text: '并与 RD 部做配合。', impl: 'rdLink' },
    { n: 4, text: '在 PWA 界面里有强闪烁提示客诉回复。', impl: 'alert' },
    { n: 5, text: '客诉部负责采集信息，通知我，我来做后面延伸动作。', impl: 'notify' }
  ],

  charter: {
    role: '客诉信息采集与通知',
    boundary: [
      'AS 只做客诉信息采集、结构化、分级、通知所有者；不对外回复客户、不承诺赔偿/换货/退款。',
      '任何对客户的实质答复与后续处置（延伸动作）由所有者陈邦杰本人决定并执行。',
      '转 RD 的只有脱敏后的问题描述与改进线索，不含客户邮箱、联系人、订单号等个人信息。',
      '客诉单据只写本机；云端回信池只读，不回写 Sales 台账，不自动发信。'
    ],
    reportsTo: 'GB-Team（总部）',
    collaborators: [
      { id: 'GB-Sales', relation: '平行协作', interface: '已服务客户的客诉由 Sales 回信池标记后转入 AS；AS 不回写 Sales 台账。' },
      { id: 'GB-RD', relation: '配合', interface: 'AS 将客诉归类为痛点/改进线索移交 RD；移交单为草稿，需所有者确认后才生效。' }
    ]
  },

  /* 采集字段：Sales 转交时预填，手工录入时逐项填写 */
  fields: [
    { key: 'id', label: '客诉单号', required: true, hint: '系统生成：AS-YYYYMMDD-NNN' },
    { key: 'source', label: '来源', required: true, hint: 'Sales 转交 / 手工录入' },
    { key: 'customer', label: '客户 / 机构', required: true, hint: '买家或经销商名称' },
    { key: 'contact', label: '联系人 / 邮箱', required: false, hint: '仅本机保存，不转 RD' },
    { key: 'product', label: '涉及产品 / 型号', required: true, hint: '如瞄准镜型号、配件' },
    { key: 'region', label: '区域', required: false, hint: 'EU / NA / ME / AP / LA / AF' },
    { key: 'category', label: '客诉类型', required: true, hint: '质量 / 功能 / 装调 / 物流 / 包装 / 交期 / 其他' },
    { key: 'severity', label: '严重程度', required: true, hint: 'S1 紧急 / S2 高 / S3 一般' },
    { key: 'summary', label: '客户原话 / 客诉描述', required: true, hint: '尽量保留原话，不替客户下结论' },
    { key: 'evidence', label: '证据', required: false, hint: '照片/视频文件名、回信主题、Message-ID' },
    { key: 'serviceStage', label: '客户阶段', required: true, hint: '仅在「已开始服务」阶段触发转交' },
    { key: 'status', label: '状态', required: true, hint: '待通知 / 已通知 / 转 RD / 已归档' },
    { key: 'createdAt', label: '采集时间', required: true, hint: 'ISO 时间，自动写入' },
    { key: 'replyDue', label: '待回复', required: false, hint: '有客户追问且未答复 = 触发强闪烁' }
  ],

  categories: ['质量', '功能', '装调', '物流', '包装', '交期', '服务', '其他'],
  severities: [
    { v: 'S1', label: 'S1 紧急', desc: '安全相关 / 批量性 / 大客户 / 公开差评', color: '#b8461f' },
    { v: 'S2', label: 'S2 高', desc: '功能性故障 / 影响复购', color: '#9a6b12' },
    { v: 'S3', label: 'S3 一般', desc: '个体咨询 / 装调误解 / 包装瑕疵', color: '#1d5486' }
  ],
  stages: ['已开始服务', '开发中（未服务）', '未知'],
  statuses: ['待通知', '已通知', '转 RD', '已归档'],

  /* 转交流程：所有者指定，前端从真实回信池读取 + 手动标记转交 */
  transfer: {
    status: 'partial',
    statusLabel: '部分落地：可从真实回信池标记转交；自动识别客诉关键词待接入',
    from: 'GB-Sales',
    to: 'GB-AS',
    trigger: 'Sales 开发邮件中「已经开始服务」的客户，回信含客诉内容',
    steps: [
      'AS 只读拉取 Sales 共用的真实回信池 ai_sales_inbox（与 Sales 页同一数据源）。',
      '使用者判断该回信是否属于客诉；客诉才点「转为客诉单」，普通询盘不动。',
      '系统按回信内容预填客户、主题、证据（Message-ID），使用者补全产品/类型/严重度。',
      '保存为本机客诉单，状态=待通知，并立即触发强闪烁提醒与通知摘要。'
    ],
    gate: '不自动把任何回信判为客诉；客户阶段必须确认「已开始服务」；不回写 Sales 台账、不自动发信。'
  },

  rdLink: {
    status: 'framework',
    statusLabel: '框架已搭：移交单草稿可生成；不自动写入 RD 数据文件',
    to: 'GB-RD',
    purpose: '把一手客诉转成工程侧可动的痛点/改进线索（RD 已有「使用者痛点库」，客诉是其最贵的一手证据来源）。',
    fields: ['线索编号', '客诉类型', '脱敏问题描述', '涉及产品', '出现频次', '建议验证动作'],
    gate: '移交单只含脱敏信息；生成后需所有者确认才可交给 RD；本版不自动写入 rd/data.js、rd/pain-data.js。'
  },

  notify: {
    status: 'live',
    statusLabel: '已落地：本机强闪烁 + 提示音 + 一键生成通知摘要',
    receiver: '所有者 陈邦杰',
    principle: 'AS 负责采集并通知；延伸动作由所有者本人执行，AS 不代做、不自动外发。',
    channels: [
      '页面级：顶部红色强闪烁横幅（发光 + 文字闪烁 + 角标），有未读客诉回复时触发。',
      '标签级：浏览器标题栏闪烁警示，切到别的标签页也能看到。',
      '声音：提示音，可在页面内关闭。',
      '摘要：一键复制「通知摘要」到剪贴板，由所有者贴到微信/邮件等任意渠道，AS 不自动发送。'
    ]
  },

  /* 演示数据：仅供界面演示，不是真实客户客诉，可一键清空 */
  demo: [
    {
      id: 'AS-DEMO-0001', demo: true,
      source: '演示数据', customer: '【演示】示例经销商', contact: '', product: '示例瞄准镜',
      region: 'EU', category: '装调', severity: 'S3', stage: '已开始服务', status: '待通知',
      summary: '这是一条界面演示用的示例客诉，不是真实客户反馈。用来展示强闪烁提醒与采集流程；点击顶部「清空演示数据」即可移除。',
      evidence: '', createdAt: '2026-11-28T13:58:00+08:00', replyDue: true
    }
  ]
};
