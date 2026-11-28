/* AI GB-Team · 四线每日任务清单（数据源文件）
 * 由总管席依据 workbuddy.db 的 automations 表 + daily_guard.py 守门口径整理。
 * 只含 team / sales / marketing / rd 四线本身，不含 AI业务员通用工具链
 * （客户回信检测、台账对齐、跟进序列、每日计划、执行复盘）与其它无关项目
 * （PMApp 备份、塔罗、AI 重点资讯）。
 * 修改任务时只改本文件，tasks.html 会自动读取。
 */
window.GB_TASKS = {
  source: "workbuddy.db/automations + daily_guard.py + gb-directives.md",
  generatedAt: "2026-11-25 20:36 (GMT+8) · 新增 G7 DMARC 每日核验（Team 总管席）",
  note: "时间均为北京时间 GMT+8。S4/M3 为发信 KPI（由守门脚本按 IMAP Sent 判定），非独立自动化任务。D-06：台湾地区按 airsoft 市场经营、airsoft 生态内对象皆为潜在买家、发台湾地区邮件一律繁体（zh-TW，走 email_lang.py）。",
  judgement: {
    ontime: "证据时间 ≤ 调度 +30 分钟",
    late: "+31 至 +120 分钟 = 延迟",
    severe: ">120 分钟或超时无证据 = 严重延迟 / 缺交",
    unverified: "文件存在但时间早于调度、无法确认由定时任务产出 = 已交付·来源待核，不计准时",
    evidence: "证据只认 Supabase 业务表 / IMAP Sent / PWA 线上文件，不采信业务线自报"
  },
  lines: [
    {
      id: "sales",
      name: "AI-GB-Sales",
      tone: "blue",
      subtitle: "名录日报 + 跟进发信 · 3 项日更 + 1 项 KPI",
      tasks: [
        {
          id: "S1", name: "枪械生产商名录日报", schedule: "08:30", status: "ACTIVE", kind: "daily", report: true,
          action: "producers.py sync 拉取 Supabase 云端名录，生成当日 xlsx+md，openpyxl 复核行数与乱码；失败则跑 producers.py run 兜底后重试 sync",
          evidence: "00_共享资源/07_枪械生产商调研/当日.xlsx；Supabase ai_sales_producers"
        },
        {
          id: "S2", name: "全球渠道库日报", schedule: "08:35", status: "ACTIVE", kind: "daily", report: true,
          action: "channels.py sync 生成枪店/俱乐部/分销名录 xlsx+md，复核；失败则 channels.py run --tiles 3 --limit 18 --cloud 兜底",
          evidence: "00_共享资源/08_全球枪店与俱乐部调研/当日.xlsx；Supabase ai_sales_channels"
        },
        {
          id: "S3", name: "跟进发信与日报", schedule: "09:00", status: "ACTIVE", kind: "daily",
          action: "读指令板→客户当地净空窗判定→选线索（D3/D7 跟进 + 批发商；台湾地区按 airsoft 市场，airsoft 枪店/玩家店/生存游戏场/经销商/改装配件商/协会皆为潜在买家）→归属表交叉去重→写信（台湾地区主题+正文一律繁体 zh-TW，必须调用 email_lang.py，禁手写英文/简体）→发送→写回 outbound_owners→记 email-log→提交日报 facts（首项须「已读指令板」）",
          evidence: "gb-reports.js sales 段 + gb-email-log.js 当日条目（台湾地区条目 note 注明「繁体 zh-TW / airsoft 通路」）"
        },
        {
          id: "S4", name: "发信达标（KPI）", schedule: "18:00 判定", status: "KPI", kind: "kpi",
          action: "净空窗内发送，每日上限 6 封；不得在窗口外硬发，不得含单价/总价/折扣等承诺性表述",
          evidence: "IMAP Sent 当日 Sales 签名数 6/6"
        }
      ]
    },
    {
      id: "mkt",
      name: "AI-GB-Marketing",
      tone: "teal",
      subtitle: "创意合作研究 + 合作情报 + 非交易型邀约 · 3 项日更 + 1 项 KPI",
      tasks: [
        {
          id: "M4", name: "创意合作研究报告", schedule: "08:00", status: "ACTIVE", kind: "daily", report: true,
          action: "读指令板+M1情报→联网检索同业/异业真实创意合作案例（≥5条·附URL与日期·verified）→提炼3-5个GUNBASE创意方案（玩法/评分/风险/下一步·model）→定首选→写数据文件与桌面报告→发布PWA核验；不发信、不称已合作",
          evidence: "gb-creative-partnerships.js days[0] + 桌面 06_每日情报报告/<日期>_创意合作研究报告.md"
        },
        {
          id: "M1", name: "每日合作情报", schedule: "08:10", status: "ACTIVE", kind: "daily", report: true,
          action: "读指令板→读归属表→联网调研高价值目标近 30 天动态（展会/新品/合作/台湾地区品牌定位证据）→写情报条目；事实与推演分列",
          evidence: "gb-market-intel.js days[0] 的 generatedAt"
        },
        {
          id: "M2", name: "双封合作邀约", schedule: "08:30", status: "ACTIVE", kind: "daily",
          action: "读指令板→客户当地净空窗→选制造商/俱乐部/靶场（非卖货）→三重去重→官网事实核验→英文写信（110-150 词）→四件产出（审阅稿/正文/queue/回归属表）",
          evidence: "queue/当日.json + 审阅稿/正文 + IMAP Sent"
        },
        {
          id: "M3", name: "发信达标（KPI）", schedule: "18:00 判定", status: "KPI", kind: "kpi",
          action: "每日 2 封非交易型合作邀约；与 Sales 明确区隔，零售店/分销买家一律不碰",
          evidence: "IMAP Sent 当日 Marketing 签名数 2/2"
        }
      ],
      footnote: "另有 6 条「净空窗发信①～④ + 发信兜底」自动化处于 PAUSED，不计入日常任务。"
    },
    {
      id: "rd",
      name: "AI-GB-RD",
      tone: "purple",
      subtitle: "全球技术报告 · 1 项日更",
      tasks: [
        {
          id: "R1", name: "每日全球技术报告", schedule: "08:00", status: "ACTIVE", kind: "daily", report: true,
          action: "读指令板→联网检索三大方向（瞄准镜光学 / 枪械配件接口 / 战术装备电子）→与历史去重→08:00 前写 rd/data.js days[0] + 桌面当日.md→发布 PWA→20:50 前自行写 gb-reports.js days[0].rd 日报与复盘（facts 首项「已读指令板」）；迟交按真实时间标注补交与延迟分钟",
          evidence: "rd/data.js days[0] + Desktop/AI-GB-RD/每日技术报告/当日.md",
          constraint: "【D-07 长期】每条信号须有可核实 URL 与日期；事实 verified 与推演 model 分列；受管制品类只做趋势情报、不做仿制图纸。桌面报告与 rd/data.js 双重落盘，只写一处视为缺交；日报/复盘必须 RD 自行提交、不得代补；自动化 result_success 单独判定，产物落地不等于自动化成功"
        }
      ]
    },
    {
      id: "team",
      name: "AI-GB-Team（总管席）",
      tone: "navy",
      subtitle: "监督与兜底 · 8 项",
      tasks: [
        {
          id: "G1", name: "达成率守门①", schedule: "12:10", status: "ACTIVE", kind: "daily",
          action: "跑 daily_guard.py，8 项打卡核对，缺交即下令",
          evidence: "Supabase ai_daily_guard"
        },
        {
          id: "G2", name: "每日发信督促", schedule: "18:00", status: "ACTIVE", kind: "daily",
          action: "跑 daily_send_watch.py，只读真实 IMAP Sent，未达标下令按客户当地净空窗补足",
          evidence: "IMAP Sent + Supabase ai_daily_send_watch"
        },
        {
          id: "G3", name: "达成率守门②", schedule: "18:10", status: "ACTIVE", kind: "daily",
          action: "再跑 daily_guard.py，中期核对",
          evidence: "Supabase ai_daily_guard"
        },
        {
          id: "G4", name: "日报兜底代补", schedule: "20:40", status: "ACTIVE", kind: "daily",
          action: "业务线未交即按真实证据补齐，标注「总管席代补·非业务线提交」，不留空白",
          evidence: "gb-reports.js 当日 day 对象"
        },
        {
          id: "T1", name: "21:00 汇整与监督指令", schedule: "21:00", status: "ACTIVE", kind: "daily",
          action: "读指令板→逐任务打卡→核对两线日报与发信→RD 汇整→生成 team 段→覆写指令板→发布 PWA",
          evidence: "gb-reports.js team 段 + 线上 curl 核验"
        },
        {
          id: "G5", name: "达成率守门③", schedule: "21:10", status: "ACTIVE", kind: "daily",
          action: "跑 daily_guard.py + 刷新监督账本 + 复盘可见性核查，终局逐条点名",
          evidence: "gb-supervision.js + 线上监督账本页"
        },
        {
          id: "G6", name: "退信当日闭环", schedule: "每 2 小时（:15）", status: "ACTIVE", kind: "daily",
          action: "bounce_closed_loop.py 扫描→定性（补发/免补/人工）→幂等补发→逐条告知所有者",
          evidence: "bounce_action_queue.json + IMAP Sent 补发记录"
        },
        {
          id: "G7", name: "DMARC 每日核验", schedule: "10:00", status: "ACTIVE", kind: "daily",
          action: "D-08：dmarc_reports.py 双文件夹扫描（INBOX+DMARC-Reports，按 Report-ID 去重）→写 dmarc_summary_latest.json→supervision_ledger.py 直读并用 DoH 实时查 DNS 策略→刷新监督账本第七板块；伪造=SPF与DKIM双失败且不对齐，SPF仅未对齐（DKIM通过）单列不算伪造",
          evidence: "dmarc_summary_latest.json + gb-supervision.js dmarc 段 + 线上监督页第七板块"
        }
      ]
    }
  ]
};
