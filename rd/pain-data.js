/* AI GB-RD — 使用者痛点库（瞄准镜 / 枪械配件 / 战术装备）
 * 调研日期：2026-11-23 · 证据基础：北美/欧洲论坛一手实测帖、独立测试项目、厂商公开规格页、垂直媒体测评
 *
 * 证据分级（读数据前先对齐）：
 * - ev:"A" = 可核实事实：有具体来源、可点开核对（论坛一手实测 / 官方规格 / 有明确测试方法的独立项目）
 * - ev:"B" = 行业共识：多个独立来源重复同一现象，无单一权威数据
 * - ev:"C" = 本报告推断：由事实推导的商业判断，标注「推断」，不作为事实陈述
 *
 * 铁律：论坛帖是自选择样本（不满者更愿发帖），"抱怨频率"不等于"故障率"。
 * 本库只声称"这类抱怨广泛存在且有具体描述"，不声称"X% 产品会坏"。
 * 频率/严重度/可切入度为 1-5 主观评分，是排序工具，不是实测数据，不可直接当决策依据。
 */
window.GB_RD_PAIN = {
  meta: {
    title: "使用者痛点库",
    subtitle: "在卖镜子之前，先搞清楚用户到底在哪一步放弃了",
    surveyedAt: "2026-11-23",
    scope: "步枪瞄准镜（LPVO / 高倍精射 / 热成像）、镜座与环、导轨、附件类",
    owner: "AI GB-RD · 产品定义输入",
    reportMd: "~/Desktop/AI-GB-RD/用户痛点调研/2026-11-23_瞄准镜与枪械配件_使用者痛点调研.md",
    headline: "痛点不在「光学不够好」，而在「用不对」和「测不出来」",
    note: "本页为公开信息调研，按 A/B/C 三级标注证据强度。评分矩阵是主观排序工具，不是实测数据；真实优先级需用经销商访谈与小批用户测试校准。"
  },

  kpis: [
    { label: "痛点条目", value: "14", unit: "条", tone: "blue", sub: "去重后归为 6 个簇" },
    { label: "P0 优先", value: "5", unit: "项", tone: "green", sub: "综合评分 12 分以上" },
    { label: "A 级证据", value: "9", unit: "条", tone: "teal", sub: "可点开核对" },
    { label: "用户分群", value: "7", unit: "类", tone: "purple", sub: "痛点与溢价点各不相同" },
    { label: "伪痛点", value: "6", unit: "类", tone: "amber", sub: "装错被当成坏镜" },
    { label: "证据缺口", value: "5", unit: "项", tone: "blue", sub: "待经销商访谈补" }
  ],

  // ===== 一页结论 =====
  verdict: {
    headline: "三处系统性落差，而不是光学差距",
    points: [
      { n: "1", t: "可靠性落差", d: "用户要的是「摔了以后第一发还准」，行业给的是「靶场上准」。Rokslide 跌落测试之所以在北美狩猎圈成为事实标准，正因为厂商规格表里根本没有这一项。" },
      { n: "2", t: "人机工学落差", d: "高倍 eyebox 过紧、1x 畸变、eye relief 随倍率变化——这三件事决定用户「能不能在动起来时看见画面」，却几乎不出现在任何规格表上。" },
      { n: "3", t: "设置落差（最被低估）", d: "大量「镜子坏了」的投诉，实际是屈光度、视差、扭矩设置错误。这不是用户笨，是产品没做防错。谁能把「装对」工程化，谁就拿到口碑。" }
    ],
    opportunity: {
      title: "对 GUNBASE 最直接的结构性机会（推断）",
      body: "欧洲传统猎装接口（Blaser 鞍座 / Sauer ISI / Suhler 爪式）是通用皮卡汀尼产品进不去的墙，墙内换镜成本 1000-2000 美元、工时 6-8 小时。这是用「接口适配」换「渠道准入」的机会，不是靠光学堆料能打的仗。"
    }
  },

  // ===== 用户分群 =====
  segments: [
    { name: "欧洲传统猎手", scene: "高塔/驱猎、狍鹿野猪、部分国家合法夜猎", pain: "换镜要改枪、要等枪匠、要花上千欧", pay: "接口匹配、低安装高度、可换镜不丢零", tone: "blue" },
    { name: "北美长程猎手", scene: "山地/高原、单次远距、背包负重", pain: "摔一跤后不敢确认还准不准", pay: "跌落不失零、轻量、售后无条件", tone: "teal" },
    { name: "PRS / NRL 竞赛射手", scene: "计时多目标、频繁 dial", pain: "转塔读数错一圈、zero stop 不可靠", pay: "转塔手感与读数、追踪线性、分划信息密度", tone: "purple" },
    { name: "战术 / 防卫 AR 用户", scene: "近距离到中距离、动态姿势", pain: "高倍 eyebox 太紧、1x 畸变", pay: "宽容 eyebox、1x 可用性、快拆回零", tone: "blue" },
    { name: "夜猎 / 害兽控制", scene: "猪、狼、狐，夜间移动目标", pain: "图像延迟导致打偏、续航撑不过一夜", pay: "低延迟、真实续航、识别距离而非探测距离", tone: "amber" },
    { name: "入门新用户", scene: "第一支镜、第一次装", pain: "分不清屈光度和视差，以为买到坏的", pay: "装对即用、说明书说人话、保修", tone: "green" },
    { name: "枪匠 / 分销商（B2B）", scene: "装配、返修、客户投诉", pain: "客户拿着「坏镜」来，其实是装错", pay: "防错设计、可预测的公差、备件供应", tone: "teal" }
  ],

  // ===== 六大痛点簇 =====
  clusters: [
    {
      id: "C1", name: "可靠性", en: "Reliability", tone: "red",
      one: "用户要的是「第一发」，不是「平均表现」",
      detail: "Rokslide 跌落测试：草地垫 1.5cm 缓冲，从 18 英寸（约 46cm）与 36 英寸（约 91cm）分别向左、右、顶部跌落共 15 次，每次补打一发确认是否仍在标定靶圈内；另含转塔来回 200 mil 再回零的测试。",
      facts: [
        "Northern Rifle 对 50+ 次测试做 Welch t 检验：Trijicon 99.9%、SWFA 99.8%、Nightforce 91% 显著优于均值。",
        "Leupold、Zeiss、Vortex 无统计显著优势（Zeiss p=0.1078，接近显著更差）。",
        "用户原话的核心意思：后坐能把 erector「震回零」，但第一发已经偏了——对厂商叫 partial pass，对猎人是打偏一头鹿。"
      ],
      meaning: "高价不等于高可靠。可靠性是能靠结构设计追平的维度，比堆光学便宜。",
      ev: "A", src: "Shoot2Hunt / Northern Rifle / Rokslide Forum 2026-08-30"
    },
    {
      id: "C2", name: "人机工学", en: "Ergonomics", tone: "blue",
      one: "眼睛找不到画面",
      detail: "高倍 eyebox 过紧是 LPVO 第一大抱怨，而 eyebox 根本不出现在任何规格表上。$300-700 档明显更紧，$1900+ 才把宽容度当设计目标做。",
      facts: [
        "戴眼镜会吃掉 0.5-1 英寸有效 eye relief。",
        "5-25x56 在 25x 时出瞳仅 2.24mm——花大钱买大物镜，最高倍反而最暗。",
        "eye relief 随倍率变化，用户被迫在变倍后重新找眼位。"
      ],
      meaning: "规格表缺 eyebox 与出瞳曲线，等于把最影响体验的两个参数留给用户猜。",
      ev: "B", src: "SWAT Optics 2026 / MyGunDeal 2026-10-16 / Revell 2026 / CAT Outdoors"
    },
    {
      id: "C3", name: "设置与认知", en: "Setup", tone: "amber",
      one: "90% 的「坏镜」不是坏镜",
      detail: "行业有两套独立对焦系统：屈光度管分划、视差管目标。用户混着用，然后判定「镜子渣」。更狠的是视差刻度本身就是工厂近似值。",
      facts: [
        "精射射手已经在自己贴胶带重标真实视差刻度——用户在给产品打补丁。",
        "变倍时 POI 漂移，常见原因是环不同轴，不是镜内机构坏。",
        "扭矩/同轴/水平/除油全凭经验，无任何防错。"
      ],
      meaning: "这是最值钱的一块：低成本高回报，直接消解假故障投诉与退货。",
      ev: "B", src: "D&R Sports / CVLIFE / Old Beaver Gunsmith / BadAssOptic"
    },
    {
      id: "C4", name: "电子与照明", en: "Electronics", tone: "purple",
      one: "关键时刻没电",
      detail: "忘关耗电、低温掉电、后坐时接触瞬断导致闪烁。auto-off / shake awake 目前是高端专属。",
      facts: [
        "用户把「以为关了」当成产品缺陷，实际是档位中间夹着 off 造成误判。",
        "照明闪烁多为接触不良，不是电路坏。",
        "热成像端到端延迟可达 0.5s，识别距离常被探测距离冒充。"
      ],
      meaning: "照明防呆是低成本高感知的改进项，不涉及受控技术。",
      ev: "B", src: "Optics Trade / CAT Outdoors / Pulsar Vision / Noctspan"
    },
    {
      id: "C5", name: "特殊人群与场景", en: "Underserved", tone: "teal",
      one: "被主流忽视的细分，反而好切入",
      detail: "散光用户看红点是星芒，有用户以为镜子坏了，拍照才发现是完美圆点。欧洲专用接口锁死换镜路径。热成像续航与延迟不符合夜猎节奏。",
      facts: [
        "散光人群规模不小，但无任何厂商做正向设计，用户只能自行降亮度或改装。",
        "Suhler 爪式换镜要装第二前底座、必须改枪、工时 6-8 小时；美国枪匠报价 $1000 起、整套 $2000+。",
        "EAW 已在卖把 SEM 转成杠杆摆动的套件并宣称「无需改枪」——需求真实且被第三方验证过。"
      ],
      meaning: "散光友好线是低成本细分；欧洲接口是长期押注，但专利密集需 FTO。",
      ev: "A", src: "UK Varminting / The High Road / New England Custom Gun / Optics Trade"
    },
    {
      id: "C6", name: "信息与信任", en: "Trust", tone: "red",
      one: "规格表不回答用户真正的问题",
      detail: "用户真正想知道的是：摔了还准吗？eye relief 能晃多少？坏了多久回来？而规格表只给倍率、物镜、镀膜名词。",
      facts: [
        "厂商规格表普遍不披露 eyebox 尺寸、视差刻度误差、跌落测试结果。",
        "售后周期与保修实际执行情况不透明，用户只能去论坛问。",
        "结果是购买决策权从厂商转移到论坛与独立测试者手里。"
      ],
      meaning: "把「可验证性」做成卖点，成本极低，且大厂难以跟进（跟进等于承认以前没给）。",
      ev: "C", src: "多来源综合（本报告推断为主）"
    }
  ],

  // ===== 优先级矩阵（14 条）=====
  matrix: [
    { id: "P1", cluster: "可靠性", desc: "跌落后失零，第一发不可信", who: "猎手/战术", freq: 5, sev: 5, entry: 3, prio: "P0", now: "厂商不测；用户靠 Rokslide 类独立测试筛选", ours: "一体式环 + 后坐止挡；公开自建跌落标准", ev: "A", src: "Shoot2Hunt; Rokslide Forum 2026-08-30" },
    { id: "P2", cluster: "人机工学", desc: "高倍 eyebox 过紧 + eye relief 随倍率变化", who: "LPVO/战术", freq: 5, sev: 4, entry: 3, prio: "P0", now: "只能买高价段（$1900+）换取宽容度", ours: "规格表补 eyebox 数据；结构上做宽容出瞳", ev: "B", src: "SWAT Optics 2026; MyGunDeal 2026-10-16" },
    { id: "P3", cluster: "安装防错", desc: "扭矩/同轴/水平/除油全凭经验，无防错", who: "全部/枪匠", freq: 5, sev: 4, entry: 5, prio: "P0", now: "靠枪匠手艺与论坛教程", ours: "环上刻序号 + 丝印扭矩 + 随附工装与除油片", ev: "A", src: "BadAssOptic; Old Beaver Gunsmith; Weaver Mounts" },
    { id: "P4", cluster: "接口壁垒", desc: "欧洲专用接口锁死，换镜需改枪、上千欧", who: "欧洲猎手", freq: 4, sev: 5, entry: 3, prio: "P0", now: "EAW 提供 SEM 转杠杆套件；原厂专用环", ours: "Blaser R8 鞍座环 / Sauer ISI / SEM 转换件", ev: "A", src: "New England Custom Gun; Optics Trade; AfricaHunting" },
    { id: "P5", cluster: "设置认知", desc: "视差刻度不可信；屈光度与视差混淆", who: "全部", freq: 5, sev: 3, entry: 5, prio: "P0", now: "用户自己贴胶带标真实值", ours: "出厂实测视差刻度；说明书三步装对法", ev: "B", src: "D&R Sports; CVLIFE" },
    { id: "P13", cluster: "信息信任", desc: "规格表不披露 eyebox/视差误差/跌落结果；售后不透明", who: "全部", freq: 5, sev: 3, entry: 5, prio: "P0", now: "用户转向论坛与独立测试", ours: "公开 box test / 跌落 / 视差实测表", ev: "C", src: "多来源综合（推断）" },
    { id: "P6", cluster: "快拆回零", desc: "回零依赖用户手法一致", who: "战术/猎手", freq: 4, sev: 4, entry: 4, prio: "P1", now: "油漆笔记位置；靠训练", ours: "单向推靠面 + 预压；导轨记号槽；≤0.5 MOA 出厂验证", ev: "B", src: "The High Road 2023; NZ Hunting 2026" },
    { id: "P7", cluster: "电子照明", desc: "忘关耗电；后坐接触瞬断导致闪烁", who: "全部", freq: 5, sev: 3, entry: 4, prio: "P1", now: "高端才有 auto-off / shake awake", ours: "定时+位置感应 auto-off；双弹簧镀金触点；off 只在两端", ev: "B", src: "CAT Outdoors; Optics Trade; CVLIFE" },
    { id: "P8", cluster: "光学畸变", desc: "1x 鱼缸畸变", who: "LPVO", freq: 4, sev: 3, entry: 2, prio: "P1", now: "高价段平场设计", ours: "短期不硬碰；靠设置引导降低感知", ev: "C", src: "eathealthy365; MyGunDeal" },
    { id: "P9", cluster: "热成像", desc: "延迟可达 0.5s；续航短；识别距离虚标", who: "夜猎", freq: 4, sev: 5, entry: 2, prio: "P1", now: "几乎无人标端到端延迟", ours: "标延迟(ms)/识别距离/低温实测续航", ev: "B", src: "Pulsar Vision; Noctspan; Visionking" },
    { id: "P10", cluster: "细分人群", desc: "散光用户红点星芒，无正向设计", who: "红点/棱镜", freq: 3, sev: 3, entry: 5, prio: "P1", now: "用户自行降亮度或改棱镜", ours: "棱镜线标 astigmatism-friendly；最低档做真正低", ev: "A", src: "UK Varminting; The High Road; ActiveCaliber" },
    { id: "P11", cluster: "重量平衡", desc: "镜+座总重与整枪平衡", who: "猎手/战术", freq: 4, sev: 3, entry: 2, prio: "P2", now: "轻量材料（镁/钛/碳纤）", ours: "短期不硬碰", ev: "B", src: "TACTEC; Rokslide; MyGunDeal" },
    { id: "P12", cluster: "低光", desc: "出瞳不足导致高倍发暗，用户误判为镀膜差", who: "猎手", freq: 4, sev: 3, entry: 4, prio: "P2", now: "无（物理必然）", ours: "规格表补出瞳曲线；说明书解释", ev: "B", src: "AiScopes US; HuntingBlade" },
    { id: "P14", cluster: "分划水平", desc: "cant 导致远距离横向误差", who: "精射", freq: 3, sev: 4, entry: 4, prio: "P2", now: "水平仪/铅垂线手工校", ours: "环座一体基准面；内置水平参考", ev: "B", src: "Old Beaver Gunsmith; HuntingBlade" }
  ],

  // ===== 对 GUNBASE 的设计方向 =====
  actions: {
    p0: [
      {
        code: "P0-A", title: "一体化镜座（Integral Mount）", tone: "blue",
        why: "直接吃掉「环滑移」与「同轴度」两个高频痛点，是机械件里最稳的切入点。",
        points: [
          "一体式（非两片环）+ 整体式后坐止挡（recoil lug）",
          "环内孔出厂精镗 / 硬质阳极，明确宣称免研磨，并给出同轴度实测值",
          "环盖螺丝孔刻序号，说明书用图示标星形分步扭矩",
          "环体丝印扭矩值（铝 15-18 in-lb），随附或选配小扭矩扳手"
        ],
        gate: "结构件属相对安全切入点，但军用规格订单须按目的国法规判断是否受控；落地前做 FTO。"
      },
      {
        code: "P0-B", title: "把「能装对」产品化", tone: "green",
        why: "最便宜的口碑改善：大量退货与差评可以靠说明书、预装、防错结构提前消掉。",
        points: [
          "包装内附：除油片、正确长度备用螺丝、水平参考卡、eye relief 区间标尺",
          "说明书第一页不是参数表，是「三步装对」：屈光度 / 眼距 / 视差，并明确这是两套系统",
          "放一张「这些症状不是故障」对照表（模糊 / 发暗 / 黑月牙 / 星芒），直接降低误退"
        ],
        gate: "无专利高风险，但包装与说明书内容需与法务确认免责表述。"
      },
      {
        code: "P0-C", title: "可验证性作为卖点", tone: "amber",
        why: "把行业藏起来的信息变成说明书的一部分，成本低、可信度高、大厂极难跟进。",
        points: [
          "公开 box test 视频（20 次来回，回零误差实测）",
          "公开跌落测试（哪怕自建标准，写明高度/次数/判定）",
          "公开视差刻度实测表（10/25/50/100/300/600 码真实对焦位置 vs 刻度读数）"
        ],
        gate: "对外发布的测试数据必须可复现，否则一旦被复测推翻，信任损失大于收益。"
      }
    ],
    p1: [
      {
        code: "P1-A", title: "欧洲接口适配线（最值得长期押注）", tone: "blue",
        why: "墙内换镜成本 1000-2000 美元、工时 6-8 小时，且已有第三方验证需求真实存在。",
        points: [
          "推进顺序：Blaser R8 鞍座环 / Sauer 404 ISI 环 / SEM 爪式转杠杆套件",
          "前两者是原厂封闭生态 + 第三方已被验证可行（INNOMOUNT / Recknagel 先例）",
          "第三者需求最痛但工艺门槛最高",
          "关键工程点：安装高度尽量低（欧洲猎手最在意贴腮与举枪即见）"
        ],
        gate: "配件类专利与外观密集区。必须做 FTO + 逐型号机匣实测，不能靠图纸反推。"
      },
      {
        code: "P1-B", title: "快拆回零的结构化保证", tone: "teal",
        why: "让「用户手法一致」变成「产品强制一致」，把训练成本转成产品力。",
        points: [
          "设计目标写死 ≤0.5 MOA RTZ，出厂验证项为装卸 20 次",
          "结构做单向推靠面 + 预压",
          "附带导轨位置记号槽（用户已在用油漆笔，把它做成产品特征）"
        ],
        gate: "RTZ 宣称需有自有测试记录支撑，不能只写规格。"
      },
      {
        code: "P1-C", title: "照明防呆", tone: "purple",
        why: "不涉及受控技术，感知强、成本低。",
        points: [
          "必做 auto-off（定时 + 可选位置感应）",
          "电池仓双弹簧、镀金触点、后坐振动测试项",
          "低温：电池仓保温结构 / 明确推荐锂电 / 标注低温续航曲线",
          "档位之间不设 off，off 只在两端且有清晰机械感"
        ],
        gate: "若涉及夜视/热成像整机则转为受管制品类，仅做机械接口。"
      }
    ],
    p2: [
      { code: "P2-A", title: "散光友好线（低成本细分）", desc: "棱镜产品明确标 astigmatism-friendly，附「如何判断是眼睛还是镜子」判别卡（旋转法 + 拍照法）；照明最低档做到真正低，不是最亮档的 30%。" },
      { code: "P2-B", title: "热成像的规格诚实", desc: "若进入该品类：标端到端延迟（ms）、标识别距离而非探测距离、标实测续航（含低温）。这三项目前市场上近乎空白。" }
    ],
    avoid: [
      "硬拼高倍光学（P2 / P8 / P11）：eyebox 宽容度与平场畸变是镀膜、研磨、公差累积的结果，$300-700 档做不出 $2000 档的效果，这是被多方实测确认的价格分层现实。",
      "整机热成像 / 夜视：受出口管制，延迟与算法是核心竞争力。按既定合规边界，只做机械接口与结构件。"
    ]
  },

  // ===== 伪痛点：用户把设置问题归因为质量问题 =====
  pseudo: [
    { s: "低倍模糊", r: "屈光度 / 眼距 / 视差设置", ev: "B", note: "riflesafe 给出 90% 但该百分比待验证；CVLIFE 与 D&R Sports 独立给出同样的「两套对焦系统」解释。" },
    { s: "画面发暗", r: "出瞳不足（物理必然）", ev: "A", note: "不是镀膜差。5-25x56 在 25x 出瞳仅 2.24mm。" },
    { s: "1x 鱼缸畸变", r: "部分是设置与贴腮问题", ev: "C", note: "eathealthy365 现象可信、数字不可信。" },
    { s: "红点星芒", r: "散光，不是镜子坏", ev: "A", note: "多帖一致，且有「拍照验证法」：拍出来是圆点即眼睛问题。" },
    { s: "照明闪烁", r: "接触不良，不是电路坏", ev: "B", note: "CVLIFE，数字待验证。" },
    { s: "变倍时 POI 漂移", r: "环不同轴", ev: "A", note: "Old Beaver Gunsmith。" }
  ],

  pseudoMeaning: [
    { t: "对产品", d: "真正的差异化不在「更好的光学」，而在「更不容易被用错」。" },
    { t: "对售后", d: "大量退货与差评可以被说明书、预装、防错结构提前消掉——这是最便宜的利润改善。" }
  ],

  // ===== 证据分级与局限 =====
  evidence: {
    levels: [
      { lv: "A", name: "可核实事实", use: "有具体来源、可点开核对；含论坛一手实测、厂商官方规格、有明确测试方法的独立项目", tone: "green" },
      { lv: "B", name: "行业共识", use: "多个独立来源重复出现同一现象，但无单一权威数据；标注来源数量", tone: "blue" },
      { lv: "C", name: "本报告推断", use: "由事实推导的商业判断，无直接来源；明确标注推断，不作为事实陈述", tone: "amber" }
    ],
    limits: [
      "没有量化样本。论坛帖是自选择样本——不满的人更愿发帖，抱怨频率不等于故障率。本库只声称「这类抱怨广泛存在且有具体描述」，不声称「X% 的产品会坏」。",
      "部分来源是 SEO 内容站或品牌自营博客（eathealthy365、CVLIFE、riflesafe），它们描述的现象与其他独立来源一致，但给出的百分比数字不可引用。",
      "欧洲/中东终端用户的一手声音偏少。英语论坛以北美为主，欧洲部分主要来自 Optics Trade 与非洲狩猎论坛的欧洲用户。区域差异是最大证据缺口。"
    ]
  },

  gaps: [
    { g: "欧洲/中东终端用户一手声音", why: "现有证据以北美论坛为主，而这是主市场", how: "经销商收集 20-30 条真实客诉原话，重点问换镜/装镜经历" },
    { g: "中东市场的沙尘/高温场景", why: "检索中几乎无覆盖，极端环境下痛点可能完全不同", how: "定向检索 + 终端访谈；沙尘对转塔密封、镀膜、橡胶件老化" },
    { g: "退货/返修的真实原因分布", why: "判断伪痛点占比的关键", how: "向渠道要 RMA 原因分类数据，哪怕粗分类" },
    { g: "各家 eyebox 的客观测量", why: "决定能否在 $300-700 档做出差异化", how: "自建简易测试：相机固定，偏移量 vs 画面完整度" },
    { g: "关税与原产地对定价的影响", why: "直接影响接口适配线的商业模型", how: "需财务与贸易合规输入，非本调研能力范围" }
  ],

  sources: [
    { t: "Shoot2Hunt", ttl: "What is the Rokslide Drop Test?", y: "2026", u: "https://www.shoot2hunt.com/what-is-the-drop-test/" },
    { t: "Northern Rifle", ttl: "Rokslide Scope Drop Test Data", y: "2026", u: "https://northernrifle.com/rokslide-scope-drop-test-data/" },
    { t: "Rokslide Forum", ttl: "Statistical Analysis of the Rokslide Drop Tests", y: "2026-08-30", u: "https://rokslide.com/forums/threads/statistical-analysis-of-the-rokslide-drop-tests.422089/page-2" },
    { t: "SWAT Optics", ttl: "LPVO Eyebox, Distortion & Parallax Explained (2026)", y: "2026", u: "https://swatoptics.com/pages/lpvo-eyebox-distortion-parallax-explained-2026-why-some-scopes-feel-fast-and-others-don-t" },
    { t: "MyGunDeal", ttl: "LPVO Eye Relief and Eye Box: Common Problems and Fixes", y: "2026-04-11", u: "https://www.mygundeal.com/blog/2026-04-11-optics-every-common-question-about-lpvo-eye-relief-eye-box-and-head-p" },
    { t: "MyGunDeal", ttl: "LPVO vs Red Dot Plus Magnifier: Deciding in 2026", y: "2026-10-16", u: "https://www.mygundeal.com/blog/2026-10-16-optics-lpvo-vs-red-dot-plus-magnifier-deciding-in-2026" },
    { t: "Revell Photography", ttl: "Swampfox Arrowhead LPVO 1-10x24 Review: Complete 2026 Testing", y: "2026", u: "https://revellphotography.com/swampfox-arrowhead-lpvo-1-10x24-review/" },
    { t: "CAT Outdoors", ttl: "Vortex Strike Eagle 1-8x24 LPVO Review", y: "2026", u: "https://catoutdoors.com/vortex-strike-eagle-review/" },
    { t: "D&R Sports Center", ttl: "What Is Parallax on a Rifle Scope, and How to Adjust It", y: "2026", u: "https://dnrsports.com/blog/what-is-parallax/" },
    { t: "CVLIFE", ttl: "Riflescope Troubleshooting: Blurry Image, Dim View & Reticle Issues", y: "2026", u: "https://www.cvlife.com/blogs/news/riflescope-troubleshooting-blurry-image-dim-view-reticle-issues-hyw" },
    { t: "Old Beaver Gunsmith", ttl: "Scope Mounting Done Right - The Mistakes That Kill Accuracy", y: "2026", u: "https://oldbeavergunsmith.com/scope-mounting-bolt-action-rifle-guide" },
    { t: "BadAssOptic", ttl: "Over Torqued Scope Rings", y: "2026", u: "https://www.badassoptic.com/blog-content/over-torqued-scope-rings" },
    { t: "Weaver Mounts", ttl: "Top 5 Myths About Scope Mounts (Busted)", y: "2026", u: "https://weavermounts.com/?p=1249" },
    { t: "Optics Trade", ttl: "Automatic Illumination Turn-Off (Riflescopes and Red Dots)", y: "2026", u: "https://www.optics-trade.eu/blog?p=310" },
    { t: "Optics Trade", ttl: "General informations EAW Claw Mounts", y: "2026", u: "https://de.slideshare.net/slideshow/general-informations-eaw-claw-mounts-optics-trade/43236789" },
    { t: "New England Custom Gun Service", ttl: "German Claw Mount", y: "2026", u: "https://newenglandcustomgun.com/products.php?cat=279" },
    { t: "The High Road", ttl: "Can a quick release mount hold a zero after being taken off?", y: "2023-09-08", u: "https://www.thehighroad.org/index.php?threads/can-a-quick-release-mount-hold-a-zero-after-being-taken-off.922885/" },
    { t: "NZ Hunting and Shooting", ttl: "Any easy detachable scope mounts that hold zero?", y: "2026-03-30", u: "https://nzhunt.nzhuntingandshooting.co.nz/threads/any-easy-detachable-scope-mounts-that-hold-zero.122976" },
    { t: "UK Varminting", ttl: "Astigmatism warning: red dots in scopes/sights", y: "2021-07-28", u: "https://ukvarminting.com/topic/54109-astigmatism-warning-red-dots-in-scopessights/" },
    { t: "The High Road", ttl: "Pistol Red Dots and Astigmatism", y: "2021-08-25", u: "https://www.thehighroad.org/index.php?threads/pistol-red-dots-and-astigmatism.893908/" },
    { t: "Pulsar Vision", ttl: "From vision to decision: Predictive technologies in hunting optics", y: "2026", u: "https://pulsarvision.com/journal/predictive-technologies-in-hunting-optics" },
    { t: "AiScopes US", ttl: "Best PRS & NRL22 Scopes for 2026: A US Buyer's Guide", y: "2026", u: "https://aiscopes.us/guides/best-scopes-for-prs-and-nrl22-competition-in-2026-a-us-buyers-guide" },
    { t: "Long Range Hunting Forum", ttl: "Scope warranty opinions wanted", y: "2026-03-20", u: "https://www.longrangehunting.com/threads/scope-warranty-opinions-wanted.400441/page-2" },
    { t: "Rifle Safe", ttl: "Why Is My Rifle Scope Blurry at Low Magnification?", y: "2026", u: "https://riflesafe.org/why-is-my-rifle-scope-blurry-at-low-magnification" }
  ],

  guardrails: [
    "本页为公开信息调研，不含任何受控技术数据；所有「设计方向」为工程推演，非已量产方案。",
    "接口适配件（镜座/环/导轨）属机械件，是相对安全的切入点；但仍需按目的国法规判断是否属受控配件，尤其军用规格订单。",
    "专利风险：EAW 爪座转换、Blaser 鞍座、Sauer ISI 均为成熟专利/外观密集区。任何落地前必须做 FTO 检索，不能以「市场存在第三方产品」作为可自由实施的依据。",
    "不要用本页评分当决策依据。频率/严重度/可切入度是主观排序工具，真实优先级需经销商访谈 + 小批用户测试校准。"
  ]
};
