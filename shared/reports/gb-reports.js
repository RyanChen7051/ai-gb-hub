/* AI GB Team 每日战报数据
 *
 * 结构说明：
 *   days[] 按日期倒序积累，每天一条。AI GB-Sales 与 AI GB-Marketing 各提交一份日报，
 *   AI-GB-Team 汇整后产出 verdict（判定）、conflicts（冲突裁决）、directives（监督指令）、
 *   escalations（升级给所有者的事项）。
 *
 * 诚信约定：
 *   - 所有 KPI 数字均取自两套 PWA 的 data.js 真实字段与发信台账，不虚构；
 *   - "预演期" = 对外发送前的所有者审阅阶段，邮件收件人为所有者本人；
 *   - 未发生的动作不写成已发生，directives 的 status 只有「已下发/待执行/已完成」三种。
 */
window.GB_REPORTS = {
  meta: {
    version: "1.0.1",
    cadence: "每日 21:00 (GMT+8) 由 AI-GB-Team 汇整并发布",
    submitDeadline: "每日 20:50 前三条线提交日报",
    owner: "GunBase 火械基地 · 陈邦杰",
    mailbox: "eyku5737@agent.qq.com",
    quotaDaily: 50,
    rule: "AI-GB-Team 本身不发邮件；Sales/Marketing 各自发信，RD 不做对外触达，Team 只汇整与下指令。",
    accumulateNote: "本文件按日累积，新的一天插入数组首位，历史记录永久保留。"
  },

  days: [
    {
      date: "2026-11-23",
      weekday: "周一",
      publishedAt: "2026-11-23 12:00 (GMT+8)",
      cycle: "第 2 日 · 总管席临时汇整（结构重组日）",

      sales: {
        agent: "AI GB-Sales",
        score: 0,
        scoreLabel: "未提交 · 日报待补",
        headline: "11-23 日报尚未提交（截至 12:00）；立即执行令已下发，要求 12:30 前补齐",
        kpi: [
          { k: "今日对外发送", v: "0", d: "发信台账当日无 Sales 条目", tone: "red" },
          { k: "日报提交", v: "未提交", d: "gb-reports.js 无当日 sales 段", tone: "red" },
          { k: "生产商名录", v: "已产出", d: "12 条信号源已同步新路径", tone: "green" },
          { k: "渠道库", v: "已产出", d: "xlsx 288KB，新路径", tone: "green" }
        ],
        facts: [
          "【总管代写占位】本段由总管席在 12:00 汇整时预置，待 AI GB-Sales 正式补交后覆盖；已读指令板 · 2026-11-23 11:52",
          "S1/S2 两份名录已在新路径产出，经实跑验证；S3 日报与发信台账尚未提交",
          "桌面资料夹已重组为 AI-GB-Team/AI-GB-Sales 等角色目录，路径全部同步"
        ],
        blockers: ["S3 日报缺交，立即执行令要求 12:30 前补齐"],
        asks: ["请 Sales 如实填写当日 0 发信原因，不得编造"]
      },

      marketing: {
        agent: "AI GB-Marketing",
        score: 0,
        scoreLabel: "未提交 · 日报待补",
        headline: "情报延迟 90 分钟已交付；双封邀约已批准并推云端，待当地落点投递（北京 17:15 / 20:45）",
        kpi: [
          { k: "今日对外发送", v: "0/2", d: "两封 pending，落点未到", tone: "amber" },
          { k: "云端批准", v: "True", d: "已推 Supabase 私有表", tone: "green" },
          { k: "情报条目", v: "已交付", d: "generatedAt 09:40，延迟 90 分钟", tone: "amber" },
          { k: "草稿就绪", v: "2", d: "Sabatti / Prins Hendrik", tone: "green" }
        ],
        facts: [
          "【总管代写占位】本段由总管席在 12:00 汇整时预置，待 AI GB-Marketing 正式补交后覆盖；已读指令板 · 2026-11-23 11:52",
          "M1 合作情报已发布，延迟 90 分钟；M2 两封邀约已获所有者批准",
          "Marketing 目录重建为 AI-GB-Marketing/，草稿队列 bodyFile 已指向新路径"
        ],
        blockers: ["两封邀约待当地净空窗落点投递，非漏发"],
        asks: []
      },

      rd: {
        agent: "AI GB-RD",
        score: 0,
        scoreLabel: "首期 · 技术情报已交付",
        headline: "首期技术扫描：12 条可核实信号 / 3 件公开专利 / 6 项图纸储备方向；ED 玻璃下放 + 快拆座公差链是最具落地价值的抓手",
        kpi: [
          { k: "技术信号", v: "12", d: "新品/专利/标准/工程，均附公开来源", tone: "blue" },
          { k: "图纸储备方向", v: "6", d: "基于已核实事实的工程推演", tone: "green" },
          { k: "公开专利", v: "3", d: "2026 公开，需 FTO 复核", tone: "purple" },
          { k: "接口标准", v: "2", d: "MIL-STD-1913 / STANAG 4694", tone: "amber" },
          { k: "可核实来源", v: "11", d: "展会官方/厂商/专利库", tone: "teal" },
          { k: "累计报告", v: "1", d: "首期，11-23 建立", tone: "blue" }
        ],
        facts: [
          "已读指令板 · 2026-11-23 11:52（结构重组与命名规范通报）",
          "首期报告 11:25 生成于 AI-GB-RD/每日技术报告/2026-11-23.md",
          "T-05/T-06/T-07 为 2026 公开专利；图纸储备均为概念方向，未量产、未做 FTO",
          "IX 类军用项目只做趋势情报，不做仿制图纸"
        ],
        blockers: [
          "图纸落地前须做专利自由实施（FTO）检索与出口合规复核",
          "厂商测试口径（如 Burris 600 码 90%）需独立验证"
        ],
        asks: ["请所有者确认是否对 DR-01 快拆镜座 / DR-02 热成像夹片转接座启动 FTO 检索"]
      },

      team: {
        verdict: "首期三线汇整：RD 首期技术情报已交付（12 信号/3 专利/6 方向）；Sales S3 与 Marketing 日报尚未提交；两封邀约已批准待落点投递。今日核心是结构重组——三线目录与命名统一为 AI-GB-*。",
        checkins: [
          { id: "S1", agent: "AI GB-Sales", task: "生产商名录", scheduled: "08:30", actual: "00:21", evidence: "~/Desktop/AI-GB-Team/00_共享资源/07_枪械生产商调研/", verdict: "已交付·来源待核" },
          { id: "S2", agent: "AI GB-Sales", task: "渠道库", scheduled: "08:35", actual: "02:43", evidence: "~/Desktop/AI-GB-Team/00_共享资源/08_全球枪店与俱乐部调研/", verdict: "已交付·来源待核" },
          { id: "S3", agent: "AI GB-Sales", task: "日报+发信", scheduled: "09:00", actual: "—", evidence: "无", verdict: "缺交" },
          { id: "M1", agent: "AI GB-Marketing", task: "合作情报", scheduled: "08:10", actual: "09:40", evidence: "gb-market-intel.js", verdict: "延迟90分钟" },
          { id: "M2", agent: "AI GB-Marketing", task: "双封邀约", scheduled: "08:30", actual: "09:09", evidence: "queue/2026-11-23.json", verdict: "延迟39分钟" },
          { id: "R1", agent: "AI GB-RD", task: "全球技术报告", scheduled: "08:00", actual: "11:25", evidence: "AI-GB-RD/每日技术报告/2026-11-23.md", verdict: "延迟·首期" }
        ],
        directives: [
          { id: "D-01", to: "AI GB-Sales", level: "警示", title: "补齐 11-23 日报与台账", detail: "12:30 前写入 sales 段与 email-log，0 发信如实写原因", due: "2026-11-23 12:30", status: "已下发", basis: "gb-reports.js 无当日 sales 段" },
          { id: "D-02", to: "AI GB-Marketing", level: "关注", title: "核对两封邀约投递", detail: "禁止重复起草/重复 add，按当地净空窗落点投递", due: "2026-11-23 21:00", status: "已下发", basis: "云端 approved=True、pending、0/2" },
          { id: "D-03", to: "AI GB-RD", level: "关注", title: "首期技术报告已纳入团队中心", detail: "后续每日 08:00 报告需写入 gb-reports.js 的 rd 段", due: "持续", status: "已下发", basis: "团队中心新增 RD 卡，R1 打卡延迟" }
        ],
        conflicts: "今日无跨线冲突；结构重组为三线共用路径，已按共享层隔离。",
        escalations: [
          { item: "DR-01 / DR-02 图纸方向是否启动 FTO 检索", why: "图纸落地须先做专利自由实施与出口合规复核", blocks: "RD 图纸从概念进入设计评审" }
        ]
      },

      emailLog: {
        sales: { sent: 0, note: "截至 12:00 当日无 Sales 发信记录，日报待补" },
        marketing: { sent: 0, note: "两封已批准并推云端，待当地落点（北京 17:15 / 20:45）投递" },
        rd: { sent: 0, note: "RD 不发对外邮件，只做技术情报" },
        quotaUsed: 0,
        quotaTotal: 50
      }
    },
    {
      date: "2026-11-20",
      weekday: "周五",
      publishedAt: "2026-11-20 22:30 (GMT+8)",
      cycle: "第 1 日 · 21:00 汇整",

      sales: {
        agent: "AI GB-Sales",
        score: 38,
        scoreLabel: "偏弱 · 触达有量、闭环为零",
        headline: "今日对外 0 封；存量仍是 15 封送达 / 0 回复 / 0 跟进 —— 明日 D-01、D-02 是唯一破局点",
        kpi: [
          { k: "今日对外发送", v: "0", d: "台账无 Sales 记录", tone: "red" },
          { k: "累计对外发送", v: "15", d: "11-18 发出，有效送达 14", tone: "green" },
          { k: "客户回复", v: "0", d: "真实买家回信", tone: "red" },
          { k: "订单跟进", v: "0", d: "D3/D7 序列未启用", tone: "amber" },
          { k: "甄别候选池", v: "65", d: "待开发 37 / 已发信 14 / 已甄别 13", tone: "blue" },
          { k: "批发商名录", v: "27", d: "零触达，占候选池 41.5%", tone: "amber" }
        ],
        facts: [
          "今日（11-20）对外发送 0 封，发信台账当日无 Sales 条目，不属于漏记",
          "渠道结构：搜索引擎贡献 36 条线索且包揽全部 14 封已发信，是唯一被验证可触达的渠道",
          "批发商名录 27 条（Innogun 13 / Shield 10 / Valiant 4）全部待开发、0 封触达，是最大未开发存量",
          "本地线索库 5,538 条尚未结构化开采，其中政采名录 1,763 条零使用"
        ],
        blockers: [
          "报价缺单价：官网 showPrice:false，price_list.md 仍为空模板，买家一问价即卡住",
          "D3/D7 跟进序列未启用：14 封送达邮件无人二次触达",
          "screen_leads.py 疑似遗失，甄别引擎需重建"
        ],
        asks: [
          "请所有者给 5-10 个主力 SKU 的价格清单（单价/币种/MOQ/交期）",
          "请批准启用 D3/D7 自动跟进序列",
          "请 Marketing 交付德/法/西三语区域话术包"
        ]
      },

      marketing: {
        agent: "AI GB-Marketing",
        score: 46,
        scoreLabel: "偏弱 · 情报齐备、动作刚起步",
        headline: "今日 2 封合作邀约预演已真实发出（14:42 / 14:43），对外邀约仍为 0；机会池 12 条等白名单解锁",
        kpi: [
          { k: "今日发信", v: "2", d: "预演期，收件人为所有者", tone: "green" },
          { k: "机会池", v: "12", d: "绿 7 / 黄 2 / 红 3", tone: "blue" },
          { k: "组织覆盖", v: "314", d: "ISSF 163 + SCI 151 个成员协会", tone: "blue" },
          { k: "覆盖国家", v: "149", d: "ISSF 口径", tone: "blue" },
          { k: "已核实案例", v: "6", d: "跨产业联名实证", tone: "teal" },
          { k: "对外已发邀约", v: "0", d: "预演期不计入对外", tone: "amber" }
        ],
        facts: [
          "两封预演邮件 message_id 可核（msg_3Ow4r… / msg_4UGx7…），收件人均为所有者本人",
          "第 1 封锁定 ISSF 体系国家协会（DSB / UITS / FFTir）青年项目；第 2 封为 Precision & Pour 精度主题咖啡联名",
          "两封均不含报价、不含承诺性表述，符合 L3 授权边界",
          "机会池 12 条全部为策略推演，尚无一条建立真实合作关系"
        ],
        blockers: [
          "机会池内无一条已验证的合作方邮箱，对外发送缺收件人白名单",
          "黄灯 2 条（欧洲二战主题体验、德国境内射击场）尚未取得国别法务结论",
          "发布版为静态站，无实时关键字抓取，信号靠人工触发"
        ],
        asks: [
          "请批准预演期结束后的对外发送白名单（首批建议 3 家协会 + 1 家咖啡连锁）",
          "请定首选落地城市（建议迪拜 / 慕尼黑）与联名预算上限",
          "请确认黄灯 2 条是否值得投入法务成本"
        ]
      },

      team: {
        verdict: "第 1 日的真实结论是「通道打通、动作停在预演」：Marketing 两封邀约确实发出（可核 message_id），Sales 今日 0 封，两条线对外触达合计 0。比数字更值得记的是交付纪律——21:00 的汇整没有按时产出，本份报告于 22:30 补发。明日判定只看两个数字：Sales 名录首触达是否 ≥6、跟进序列是否对 14 封已送达启动。",
        verdictLevel: "amber",
        conflicts: [
          {
            topic: "邮箱日配额分配",
            sides: "Sales 要求名录开发放量（拟 20 封/日）| Marketing 需固定 2 封/日合作邀约",
            ruling: "配额 50 封/日切分：Sales 上限 6 封/日、Marketing 固定 2 封/日、其余 42 封预留买家回复与报价往返。理由：回复率为 0 时放量只增加退信与域名声誉风险。今日实际占用 3 封（含 1 封通道验证），配额压力为零。"
          },
          {
            topic: "语料交付优先级",
            sides: "Sales 要 Marketing 立即交付三语话术包 | Marketing 要先完成合作发现",
            ruling: "Marketing 每周二、周四各交付一次区域话术包，首批交付德国与阿联酋两个市场；Sales 在此期间复用法语存量模板。"
          },
          {
            topic: "两条线对「今日有产出」的定义不一致",
            sides: "Marketing 把 2 封预演计为产出 | Sales 以真实对外触达计",
            ruling: "统一口径：只有「收件人非所有者本人」的邮件才计入对外触达。按此口径，今日两条线对外触达均为 0，预演只算准备度，不算业绩。"
          }
        ],
        directives: [
          {
            id: "D-01", to: "AI GB-Sales", level: "警示",
            title: "启动批发商名录开发，每日不少于 6 条",
            detail: "27 条名录全部零触达，占候选池 41.5%。今日执行 0 条，指令仍在待执行。按匹配度排序，先发 Innogun 体系 13 条中的最高匹配 6 条。",
            due: "2026-11-21 18:00", status: "待执行", basis: "Sales 今日对外发送 = 0；名录 27 条 sent=0"
          },
          {
            id: "D-02", to: "AI GB-Sales", level: "警示",
            title: "启用 D3/D7 跟进序列，对 14 封已送达做首轮跟进",
            detail: "已发送 15 封、送达 14 封、回复 0、跟进 0。今日仍未启动，等于把已投入的触达继续沉没。",
            due: "2026-11-21 18:00", status: "待执行", basis: "Sales KPI：订单跟进 = 0"
          },
          {
            id: "D-03", to: "AI GB-Marketing", level: "警示",
            title: "每日 2 封合作邀约固化为硬指标",
            detail: "今日 2 封预演已完成并留痕。预演期结束后转为对外发送，收件人须来自公开可查的合作邮箱，逐封记账，同一机构 30 天内不重复。",
            due: "每日 09:00 前", status: "已完成", basis: "台账 11-20 有 2 条 Marketing 记录，message_id 可核"
          },
          {
            id: "D-04", to: "AI GB-Marketing", level: "关注",
            title: "黄灯 2 条未获法务结论前不得对外",
            detail: "欧洲二战主题体验、德国境内射击场两条涉及德国 AWaffV 第 7 条与刑法第 86a 条，对外接触前须取得国别法务意见，否则一律不进外发队列。",
            due: "长期有效", status: "已下发", basis: "Marketing 合规闸门：黄灯 2 条"
          },
          {
            id: "D-05", to: "AI GB-Sales + AI GB-Marketing", level: "关注",
            title: "日报提交节奏：20:50 前提交，21:00 Team 发布",
            detail: "两条线各自向 AI-GB-Team 提交日报，Team 不发邮件，只做汇整与下指令。日报须含 KPI、事实、卡点、请求四项，缺项视为未提交。",
            due: "每日 20:50", status: "待执行", basis: "今日两条线均未在 20:50 前提交独立日报"
          },
          {
            id: "D-06", to: "AI GB-Marketing", level: "关注",
            title: "提交对外白名单草案（3 家协会 + 1 家咖啡连锁）",
            detail: "把今日两封预演的目标对象整理成白名单草案：机构名、国别、公开可查的合作邮箱、首选切入点、合规状态。草案交所有者确认后才可转对外。",
            due: "2026-11-21 12:00", status: "已下发", basis: "Marketing 卡点：机会池无已验证合作邮箱"
          }
        ],
        escalations: [
          {
            item: "主力 SKU 价格清单（5-10 个，含单价/币种/MOQ/交期）",
            why: "Sales 报价能力为 0，任何买家回信问价即断单。此项 AI 无权代决，只能由所有者给价。",
            blocks: "Sales 转化链路、D-01 与 D-02 的最终效果"
          },
          {
            item: "对外发送白名单（首批 3 家协会 + 1 家咖啡连锁）",
            why: "Marketing 预演已就绪，转入对外需所有者确认对象，涉及品牌代表性问题。",
            blocks: "D-03 从预演转正式"
          },
          {
            item: "联名首选城市与预算上限",
            why: "Precision & Pour 落地城市决定后续靶场延伸合作的可能性，预算决定联名规格。",
            blocks: "Marketing 机会池第 1 条推进"
          },
          {
            item: "21:00 汇整定时任务未按时产出（本份于 22:30 补发）",
            why: "汇整依赖本机工作目录与 GitHub 提交权限，21:00 时点若本机休眠或未运行，任务不会执行，且不会留下任何记录。今日即为此情形：仓库无新提交、邮箱无新发信。",
            blocks: "所有者每天 21:00 看到当日战报的确定性"
          }
        ]
      },

      emailLog: {
        sales: { sent: 0, note: "今日无对外发送；上次发送 11-18 共 15 封" },
        marketing: { sent: 2, note: "预演期，收件人为所有者本人，14:42 / 14:43 各 1 封" },
        quotaUsed: 3,
        quotaTotal: 50
      }
    }
  ]
};
