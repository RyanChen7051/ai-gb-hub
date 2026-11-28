/* AI GB-PM 数据契约 v0.1.0 — 框架骨架，不是实时业务数据
 * 事实边界：组织关系来自 shared/gb-team.js（所有者指定）；
 * 下列 projects / handoffs / report 全部为结构示例（demo=true），
 * 未经所有者确认不得当作真实客户项目或真实进度对外汇报。
 */
window.GB_PM = {
  meta: {
    name: "AI GB-PM（项目管理部）",
    en: "AI GB Project Manager",
    version: "0.1.0",
    createdAt: "2026-11-28",
    reportsTo: "AI GB-Team（总部）",
    pairsWith: "AI GB-RD（技术部）",
    scope: "客制化项目开发管理：排期、里程碑、燃尽图、依赖与风险、延误归因、向总部汇报",
    status: "框架已搭建 · 数据未接入",
    truthPolicy: [
      "组织关系（汇报对象、搭配角色）来自 shared/gb-team.js 的所有者指定记录。",
      "项目、排期、里程碑、燃尽图与移交单均为示例占位，标 demo=true，不代表真实客户项目。",
      "进度判定只认证据（任务完成记录、评审结论、验收文件）；口头完成不算完成。",
      "延误原因必须给出证据与责任方，不把平台调度延迟写成业务线不作为，也不反向掩盖。"
    ]
  },

  charter: {
    mission: "把客户定制需求拆成可执行的开发计划，盯住里程碑与工作量消耗，并把进度、延误原因和需要裁决的事项按总部口径报送。",
    responsibilities: [
      "立项拆解：将客户需求转成 WBS、责任人、起止日期与验收标准",
      "排期控制：维护 Schedule，识别关键路径与资源冲突",
      "里程碑门禁：定义准出条件与证据，未满足不放行",
      "燃尽跟踪：按迭代记录剩余工作量，区分计划线与实际线",
      "风险与延误：分类归因、给出下一落点与责任人",
      "RD 协同：把技术与图纸任务交给 AI GB-RD，接收可行性结论与打样节点",
      "总部汇报：每日提交进度、延误原因、请求裁决与次日动作"
    ],
    boundaries: [
      "不直接修改 Sales / Marketing / RD / Fin 的业务数据文件",
      "不代替 RD 做技术结论，不代替总部下指令",
      "不对外发信，不向客户承诺交期",
      "示例数据在未替换前不得进入总部战报的事实字段"
    ],
    cadence: [
      { id: "P1", name: "每日进度刷新", time: "每日 18:30 (GMT+8)", output: "任务状态、剩余工作量、新增风险" },
      { id: "P2", name: "每日总部报送", time: "每日 20:50 (GMT+8) 前", output: "pm 段日报：进度 / 延误原因 / 请求裁决" },
      { id: "P3", name: "每周里程碑复盘", time: "每周固定检查点（待所有者定档）", output: "里程碑偏差、关键路径调整、资源请求" },
      { id: "P4", name: "阶段闸门评审", time: "每个生命周期阶段结束时", output: "准出证据与放行/驳回结论" }
    ]
  },

  raci: [
    { item: "客户需求转 WBS", pm: "负责", rd: "协作", hq: "知会", owner: "批准" },
    { item: "技术方案与图纸", pm: "协作", rd: "负责", hq: "知会", owner: "批准" },
    { item: "排期与里程碑设定", pm: "负责", rd: "协作", hq: "知会", owner: "批准" },
    { item: "阶段准出放行", pm: "建议", rd: "提供证据", hq: "监督", owner: "批准" },
    { item: "延误归因与纠偏", pm: "负责", rd: "协作", hq: "监督", owner: "裁决" },
    { item: "跨角色资源冲突", pm: "上报", rd: "协作", hq: "裁决", owner: "批准" }
  ],

  lifecycle: [
    { id: "L1", name: "立项", entry: "客户定制需求已确认", exit: "范围、交期目标、责任人明确", evidence: "需求确认记录 / 项目章程" },
    { id: "L2", name: "需求冻结", entry: "规格与验收标准草案", exit: "规格冻结，变更走变更单", evidence: "规格书 / 变更记录" },
    { id: "L3", name: "设计验证", entry: "规格冻结", exit: "设计评审通过，风险项有处置", evidence: "评审结论 / 图纸版本" },
    { id: "L4", name: "打样验证", entry: "设计放行", exit: "样品实测达标或缺陷闭环", evidence: "测试报告 / 缺陷清单" },
    { id: "L5", name: "结案移交", entry: "验证通过", exit: "交付物与已知局限一并移交", evidence: "移交清单 / 结案确认" }
  ],

  delayTaxonomy: [
    { code: "D-RD", name: "技术未决", desc: "方案、FTO 或图纸结论未给出", owner: "AI GB-RD", evidence: "技术评审记录 / 待决清单" },
    { code: "D-SCOPE", name: "需求变更", desc: "客户或内部修改已冻结规格", owner: "需求方", evidence: "变更单 / 邮件确认" },
    { code: "D-SUPPLY", name: "物料与供应链", desc: "样品、零件或外协不到位", owner: "采购 / 供应链", evidence: "采购单 / 到货记录" },
    { code: "D-TEST", name: "测试失败", desc: "实测未达标需返工", owner: "研发 / 品质", evidence: "测试报告" },
    { code: "D-COMPLIANCE", name: "合规闸门", desc: "出口、专利或平台约束未解除", owner: "总部 / 法务", evidence: "闸门结论" },
    { code: "D-APPROVAL", name: "审批延迟", desc: "需要拍板的事项未批", owner: "所有者 / 总部", evidence: "指令板 / 审批时间" },
    { code: "D-SCHED", name: "调度延迟", desc: "自动化或平台未按时启动", owner: "系统 / 平台", evidence: "automation_runs 启动时间" }
  ],

  scheduleTemplate: [
    { phase: "需求澄清", baseline: "示例基线 3 工作日", owner: "PM + 客户窗口", deliverable: "需求确认记录" },
    { phase: "规格冻结", baseline: "示例基线 2 工作日", owner: "PM", deliverable: "规格与验收标准" },
    { phase: "设计验证", baseline: "示例基线 5 工作日", owner: "AI GB-RD", deliverable: "图纸版本 + 评审结论" },
    { phase: "打样验证", baseline: "示例基线 8 工作日", owner: "RD + 供应链", deliverable: "样品与测试报告" },
    { phase: "结案移交", baseline: "示例基线 2 工作日", owner: "PM", deliverable: "移交清单 + 已知局限" }
  ],

  milestoneTemplate: [
    { field: "id", desc: "里程碑编号，例如 M1" },
    { field: "name", desc: "里程碑名称" },
    { field: "due", desc: "计划完成日期" },
    { field: "criteria", desc: "准出条件，必须可判定" },
    { field: "evidence", desc: "证据文件 / 记录位置" },
    { field: "status", desc: "未开始 / 进行中 / 已达成 / 延误 / 阻塞" },
    { field: "owner", desc: "责任人或责任角色" }
  ],

  rdInterface: {
    principle: "PM 只读取 RD 的结论做排期，不回写 RD 技术数据；RD 只接收开发任务单与验收口径，不接受 PM 代做技术判断。",
    inputs: [
      "技术可行性结论（可做 / 不可做 / 需验证）",
      "图纸版本与设计储备方向（model 不得直接进入样机）",
      "FTO 与合规闸门状态",
      "打样与实测节点、已知局限"
    ],
    outputs: [
      "开发任务单：编号、范围、验收标准、优先级、截止日",
      "排期约束：关键路径、资源占用窗口",
      "移交需求：需要 RD 出具证据的清单",
      "变更影响评估：需求变更对里程碑的影响"
    ],
    gates: [
      "model 级图纸只做设计推演，未完成 FTO 前不得进入打样",
      "RD 的技术结论必须附来源或测试记录，PM 不采信无依据口头结论",
      "跨角色任务冲突由 PM 汇总后报总部裁决，不直接改 RD 排期"
    ],
    handoffs: [
      { id: "H-DEMO-01", from: "AI GB-PM", to: "AI GB-RD", item: "示例：出具设计评审结论与图纸版本", due: "示例日期，待填", status: "模板占位", demo: true }
    ]
  },

  hqReport: {
    target: "AI GB-Team（总部）",
    deadline: "每日 20:50 (GMT+8) 前提交，总部 21:00 汇整",
    channel: "草稿先落 pm 段，经所有者确认后再写入共享日报；框架阶段不自动写入 gb-reports.js",
    fields: [
      { key: "agent", desc: "固定 AI GB-PM" },
      { key: "submittedAt", desc: "真实提交时间，延迟按实际写，不倒填" },
      { key: "headline", desc: "当日一句话结论" },
      { key: "kpi", desc: "在管项目 / 里程碑达成 / 新增延误 / 待裁决" },
      { key: "progress", desc: "按项目列进度与下一里程碑" },
      { key: "delays", desc: "延误事项、原因分类、证据、责任方、下一落点" },
      { key: "blockers", desc: "卡点与需要总部裁决的事项" },
      { key: "asks", desc: "点名请求，含硬截止" },
      { key: "review", desc: "当日复盘：根因与次日动作" }
    ],
    sample: {
      agent: "AI GB-PM（框架示例，非真实提交）",
      submittedAt: "待填真实时间",
      headline: "示例：项目 A 设计验证按计划推进；项目 B 因物料未到存在里程碑延误风险（占位）",
      progress: [],
      delays: [],
      blockers: [],
      asks: [],
      review: "待接入真实项目数据后填写"
    }
  },

  projects: [
    {
      id: "DEMO-001",
      name: "示例：客制化光学项目 A",
      customer: "待填（示例占位）",
      phase: "设计验证",
      owner: "待指定",
      health: "未评估",
      demo: true,
      schedule: [
        { id: "W1", task: "需求澄清与范围确认", owner: "PM", start: "示例 D1", end: "示例 D3", progress: 100, status: "示例已完成" },
        { id: "W2", task: "规格冻结与验收标准", owner: "PM", start: "示例 D4", end: "示例 D5", progress: 100, status: "示例已完成" },
        { id: "W3", task: "设计评审与图纸版本", owner: "AI GB-RD", start: "示例 D6", end: "示例 D10", progress: 60, status: "示例进行中" },
        { id: "W4", task: "打样与实测验证", owner: "RD + 供应链", start: "示例 D11", end: "示例 D18", progress: 0, status: "示例未开始" },
        { id: "W5", task: "结案移交", owner: "PM", start: "示例 D19", end: "示例 D20", progress: 0, status: "示例未开始" }
      ],
      milestones: [
        { id: "M1", name: "需求确认", due: "示例 D3", criteria: "客户书面确认范围", evidence: "需求确认记录", status: "示例已达成", owner: "PM" },
        { id: "M2", name: "规格冻结", due: "示例 D5", criteria: "规格与验收标准定稿", evidence: "规格书", status: "示例已达成", owner: "PM" },
        { id: "M3", name: "设计放行", due: "示例 D10", criteria: "设计评审通过且风险有处置", evidence: "评审结论", status: "示例进行中", owner: "RD" },
        { id: "M4", name: "样品验证", due: "示例 D18", criteria: "实测达标或缺陷闭环", evidence: "测试报告", status: "示例未开始", owner: "RD" }
      ],
      burndown: {
        sprint: "示例冲刺 S1（占位）",
        total: 20,
        days: ["D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "D10"],
        actual: [20, 20, 18, 18, 16, 16, 13, 12, 10, 8],
        note: "实际线为示例值，用于演示算法；理想线由 total 与天数计算，不是真实工时。"
      }
    }
  ]
};
