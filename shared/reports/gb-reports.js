/* AI GB Team 每日战报数据
 *
 * 结构说明：
 *   days[] 按日期倒序积累，每天一条。AI GB-Sales 与 AI GB-Marketing 各提交一份日报，
 *   AI GB-Team 汇整后产出 verdict（判定）、conflicts（冲突裁决）、directives（监督指令）、
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
    cadence: "每日 21:00 (GMT+8) 由 AI GB-Team 汇整并发布",
    submitDeadline: "每日 20:50 前两条线提交日报",
    owner: "GunBase 火械基地 · 陈邦杰",
    mailbox: "eyku5737@agent.qq.com",
    quotaDaily: 50,
    rule: "AI GB-Team 本身不发邮件；两条线各自发信，Team 只汇整与下指令。",
    accumulateNote: "本文件按日累积，新的一天插入数组首位，历史记录永久保留。"
  },

  days: [
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
            detail: "两条线各自向 AI GB-Team 提交日报，Team 不发邮件，只做汇整与下指令。日报须含 KPI、事实、卡点、请求四项，缺项视为未提交。",
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
