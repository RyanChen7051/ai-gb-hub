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
  "meta": {
    "version": "1.0.1",
    "cadence": "每日 21:00 (GMT+8) 由 AI-GB-Team 汇整并发布",
    "submitDeadline": "每日 20:50 前三条线提交日报",
    "owner": "GunBase 火械基地 · 陈邦杰",
    "mailbox": "eyku5737@agent.qq.com",
    "quotaDaily": 50,
    "rule": "AI-GB-Team 本身不发邮件；Sales/Marketing 各自发信，RD 不做对外触达，Team 只汇整与下指令。",
    "accumulateNote": "本文件按日累积，新的一天插入数组首位，历史记录永久保留。"
  },
  "days": [
    {
      "date": "2026-11-26",
      "weekday": "周四",
      "publishedAt": "2026-11-26 09:44 (GMT+8) · R1 补交：原调度 08:00，实际 09:44，延迟 104 分钟；本轮为定时触发（runKind=scheduled，08:17:59 入队、09:40:09 实际启动），result_success 待运行结束判定 · RD 自行提交当日 rd 段（21:00 战报由总管席汇整，本段不代填其他线）",
      "cycle": "RD 先行提交 · 当日 rd 段自提交；sales / marketing / team 由各自责任线在调度窗口提交",
      "sales": {
        "agent": "AI GB-Sales",
        "submittedAt": "2026-11-26 10:20 (GMT+8) · 本段由 AI GB-Sales 自行写入（非总管席代补）；自动化实际启动 09:57，晚于 09:00 调度 57 分钟",
        "score": 45,
        "scoreLabel": "45/100 = 队列按上限入队 40 × 0.75（本轮启动 09:57，晚 57 分钟折扣＝30）+ 净空窗合规守住 15（0 封窗口外硬发）+ 对外实发 0 封不计分 + 日报当日自行提交（不再代补）",
        "headline": "6 封全部按上限入队（3 封 D7 跟进 + 3 封新开发），执行时点欧洲当地 03:05 在净空窗外，一封未硬发，等 16:30 (GMT+8) 起派发",
        "kpi": [
          {
            "k": "对外实发",
            "v": "0",
            "d": "本轮时点欧洲当地 03:05，净空窗外",
            "tone": "amber"
          },
          {
            "k": "入队封数",
            "v": "6",
            "d": "当日上限 6，新开发 3 + 跟进 3",
            "tone": "green"
          },
          {
            "k": "跟进首次消费",
            "v": "3",
            "d": "D7（11-18 原信，间隔 8 天）",
            "tone": "green"
          },
          {
            "k": "台湾对象",
            "v": "0",
            "d": "台账 65 条中台湾 0 条，无对象可发",
            "tone": "red"
          },
          {
            "k": "去重跳过",
            "v": "3",
            "d": "varuste / birkenast / thomasjacks（D-10 禁令）",
            "tone": "blue"
          }
        ],
        "facts": [
          "已读指令板 · 2026-11-25 21:06（签发 2026-11-25 21:06 GMT+8；本轮直接指令 D-09 / D-10 / D-11，长期项 D-04 / D-06）",
          "D-10 回应：今日队列合计 6 封 = 当日上限 6，未超发；varuste.net、birkenast.ch、thomasjacks.co.uk 三家全部跳过，未再发任何同类主题；每封入队前逐条比对 7 天冷却与 owners 表 30 天占位",
          "D-11 回应：本销售段由 AI GB-Sales 自行写入，facts 首项即「已读指令板」；KPI 取 IMAP Sent 实读（今日 Sales 0 封）与 Supabase 云端队列实读（Q001–Q012），不含估算",
          "D-09 回应：S1 枪械生产商名录今日生成 09:43（调度 08:30，+73 分钟）、S2 全球渠道库今日生成 09:54（调度 08:35，+79 分钟），两项均由独立自动化产出，本线无代跑权限，延迟如实记录不伪称按时",
          "本轮真实动作：09:57 启动（调度 09:00，+57 分钟），10:02 完成 3 封 D7 跟进入队（Q010–Q012）；队列另有 3 封新开发信（Q007–Q009，11-25 晚间入队）等待同一窗口，合计 6 封",
          "净空窗：执行时点 10:02 (GMT+8)＝柏林/巴黎 03:05、布达佩斯/卢布尔雅那 04:05，六个目标全部不在当地净空窗，按硬约束一封未发；派发落点为当地 09:30（＝北京 16:30）起的净空窗",
          "跟进缺口：历史已发 39 家、回复 0、跟进 0（本日之前 follow_up.py 生成的 36 条到期草稿从未被消费）；今日首次消费 3 条 D7，剩余 33 条待后续窗口分批消化",
          "D-06 台湾：台账 65 条与今日 08 渠道库均无台湾对象，airsoft 通路候选池为 0，今日无法发出任何 zh-TW 邮件；已补代码缺口 send_queue.py / send_window.py / cloud_worker.py 的 TW 时区档（Asia/Taipei，画像 tw，净空窗 09:30-11:50 / 13:40-17:15），下次有对象即可按繁体口径执行",
          "去重实读：owners 表 26 条逐条比对，6 个目标域名全部 clear 或同属 GB-Sales；Marketing 已发 sabatti.it、asvprinshendrik.nl 与本批无交集；6 个收件邮箱全部来自 leads_ledger.csv 既有字段，无一条推测填充",
          "配额：Sales 今日 0/6 实发，6 封在队列；全账号日配额 50 封，Marketing 今日预览 1 封未对外，合计对外 0 封"
        ],
        "blockers": [
          "派发依赖：本机 LaunchAgents 无 send_queue/cloud tick 守护（仅 producers / reply-check / report-backfill / pmapp watchdog 四项），云端队列须由云端 worker 的 tick 在 16:30 后逐封放行；本轮无法亲自守到窗口，今日最终实发数以 IMAP Sent 回读为准",
          "口径冲突：桌面《2026-11-26 今日工作计划》G1 要求今日触达 ≥10 封（上限 20），与 outbound-policy.json 的 salesDailyMax=6 及 D-10「单日不超 6 封」直接冲突，本线按 6 封执行，请总管席统一口径后修订计划文档",
          "台湾无池：D-06 定位 airsoft 市场，但台账与渠道库均无台湾 airsoft 对象（枪店 / 生存游戏场 / 改装配件商 / 协会均 0 条），指令无法落地为发信动作，需补池",
          "S1 / S2（D-09）为独立自动化，本线无法代跑，只能如实记录延迟分钟数"
        ],
        "asks": [
          "请确认 16:30 (GMT+8) 后云端 worker 的 tick 仍在运行；若停摆，请授权本机在窗口内手动执行 cloud_worker.py tick（每次放行 1 封，6 封需 6 次）",
          "台湾 airsoft 补池是否授权：从 airsoft 名录 / 展会名单新增候选，邮箱须逐家官网核验后才入台账（不推测填充）",
          "《今日工作计划》G1 的 ≥10 封目标与 6 封上限冲突，请拍板以哪一个为准"
        ]
      },
      "marketing": {
        "agent": "AI GB-Marketing",
        "score": 42,
        "scoreLabel": "42/100 = 队列已交（2 对象入队）40 × 0.75 迟到折扣 + 预览已发 10 + 情报准时 0（M1 +96 分钟）；对外实发 0 封不计分",
        "headline": "两封合作信入队待批：FOCUS（AT）与 Strzelnica Czacz（PL），M2 起草晚于调度 86 分钟",
        "kpi": [
          {
            "k": "对外实发",
            "v": "0",
            "d": "未获批，一封未对外",
            "tone": "amber"
          },
          {
            "k": "预览",
            "v": "1",
            "d": "发往 sales@gunbase-optics.com，收件人为所有者本人",
            "tone": "blue"
          },
          {
            "k": "入队对象",
            "v": "2",
            "d": "FOCUS（奥）/ Strzelnica Czacz（波）",
            "tone": "green"
          },
          {
            "k": "合规定时",
            "v": "0",
            "d": "M2 08:30 未触发，实际起草 09:56",
            "tone": "red"
          }
        ],
        "facts": [
          "已读指令板 · 2026-11-25 21:06（签发 2026-11-25 21:06 GMT+8；本轮直接指令 D-12 入队 / D-13 情报与日报首项）",
          "D-12 回应：queue/2026-11-26.json 已写出，2 个对象各含官网 URL、联系依据、当地净空窗与去重核对；approved=false，未推云端；实际起草 09:56，相对 08:30 调度 +86 分钟，按口径判延迟，不伪称按时",
          "D-13 回应：gb-market-intel.js days[0].date=2026-11-26、generatedAt=2026-11-26 09:46（+96 分钟），13 条 verified 动态逐条附 URL；本段 facts 首项即为「已读指令板」",
          "M4 创意合作研究报告：gb-creative-partnerships.js days[0].date=2026-11-26、generatedAt=2026-11-26 09:49（原调度 08:00，+109 分钟，补跑如实标注），6 个 verified 案例 + 4 个 model 创意；桌面 06_每日情报报告/2026-11-26_创意合作研究报告.md 已落盘",
          "KPI 真实数字：今日对外实发 0 封、预览 1 封（收件人为所有者本人，不计对外业绩）、目标机构 2 家（FOCUS Jagd- und Schiesssportzentrum / AT、Strzelnica Czacz / PL）",
          "选源：读 08 名录 2026-11-26 的 .md 与 .xlsx，筛出「俱乐部/靶场 + 有公开邮箱 + 有官网」240 条后逐条过归属表，只取类别为靶场射击中心 / 射击俱乐部的机构；07 名录今日 93 家、37 家有邮箱，无合规新对象",
          "去重：Sabatti（sabatti.it）与 Prins Hendrik（asvprinshendrik.nl）11-23 已发、30 天锁定，本次跳过；Sales 11-25 已发 11 家全部跳过；两家新对象在 outbound_owners.json 26 条中 email 与 domain 均 clear",
          "云端核对：marketing_cloud.py status 显示 Sabatti / Prins Hendrik 两封均 sent，未重复执行 add，未重置 sent_log",
          "双落点：FOCUS 当地 10:15 = 北京 17:15；Czacz 当地 13:45 = 北京 20:45；起草时刻两国当地 02:53、sendableNow=false，未在窗口外硬发",
          "事实核验：FOCUS 九靶道至 25 m 无口径限制、100 m×6 靶道在建、FOCUS CUP 26 赛期 01-02 至 12-26（focusrange.at）；Czacz 八靶道 17–150 m、150 m 步枪道 4 射击位、每日 8:00–18:00（strzelnicaczacz.pl /osie）"
        ],
        "blockers": [
          "M2 定时任务未在 08:30 触发，本轮由 09:51 的调度补跑，起草完成 09:56（+86 分钟）；与 D-13 所述「08:10 未触发」同源",
          "两封未获所有者批准（approved=false），今日对外实发 0 封，缺口未补；未批准不得推云端、不得自行 send_mail",
          "07 名录今日新增 5 家生产商均无公开邮箱或已归 Sales，Marketing 侧可用于联名的生产商对象仍不足"
        ],
        "asks": [
          "是否批准 2026-11-26 两封（FOCUS / Strzelnica Czacz）；批准后我改 approved=true 并推云端私有队列",
          "FOCUS 的 100 m×6 靶道新厅在建，是否把「新厅开幕联名体验日」列为下月主推，等其开业时间公布后跟进"
        ]
      },
      "rd": {
        "agent": "AI-GB-RD",
        "score": 55,
        "scoreLabel": "55/100 = 内容 85（8 条 verified + 2 件专利 + 4 项 model 图纸 + 8 来源）× 0.75 迟到折扣 + 日报自提交 10；补交按真实时间标注",
        "headline": "旋钮模块化与双楔块入槽：两条接口级新方向入储备，R1 补交 +104 分钟",
        "kpi": [
          {
            "k": "技术信号",
            "v": "8",
            "d": "verified · 附 URL 与日期",
            "tone": "blue"
          },
          {
            "k": "图纸储备",
            "v": "4",
            "d": "model · 非量产设计",
            "tone": "green"
          },
          {
            "k": "新专利",
            "v": "2",
            "d": "1 公开申请 + 1 授权",
            "tone": "teal"
          },
          {
            "k": "R1 落盘",
            "v": "09:44",
            "d": "补交，非 08:00 按时",
            "tone": "amber"
          }
        ],
        "facts": [
          "已读指令板 · 2026-11-25 21:06（签发 2026-11-25 21:06 GMT+8；D-14 为本轮直接指令）",
          "R1 补交：原调度 08:00，实际 09:44，延迟 104 分钟；generatedAt 与桌面 md mtime 均按真实时间写，不伪称按时",
          "自动化与产物分开记：本轮 automation_runs 为 runKind=scheduled，08:17:59 入队、09:40:09 实际启动，状态 IN_PROGRESS，result_success 尚未落定；产物落盘不等于自动化成功",
          "双重落盘：rd/data.js days[0].date=2026-11-26（含 8 条 signals、4 项 designs）；桌面 每日技术报告/2026-11-26.md 已写入并以 ls -la 核验大小与 mtime",
          "当日新增 8 条 verified 技术信号与 2 件新专利（WO2026006282A1 公开申请、US 12,693,097 授权）；重点图纸储备 D-15 可互换旋钮盒接口、D-16 双楔块多槽导轨快拆座、D-17 夹片两级转接、D-18 短机身 FFP 轻量化，全部 v=model",
          "桌面 md 写入确认见 facts 第 4 项；FTO 与出口合规未完成，四项图纸方向不得进入样机"
        ],
        "blockers": [
          "08:00 至 09:40 自动化启动间隔 82 分钟，平台日志只给时间戳，未给内部原因；不做臆测，待总管席/平台侧核实",
          "WO2026006282A1 与 US 12,693,097 均未做 FTO，D-15/D-16 不得进入样机",
          "HIKMICRO 1 MOA 落点偏差与 NETD 为厂商新闻稿口径，无独立复现"
        ],
        "asks": [
          "是否批准 FTO 检索预算，范围先锁 WO2026006282A1 旋钮盒接口与 US 12,693,097 双楔块组合",
          "是否把 D-15 / D-16 列为下月工程评审候选（仅图纸推演，不含样机）",
          "请总管席核查 08:17:59 入队至 09:40:09 启动的调度阻塞根因"
        ],
        "detail": "当日完整技术明细见 rd/data.js days[0] 与桌面 每日技术报告/2026-11-26.md；专利明细另存 桌面/AI-GB-RD/资料源与专利/2026-11-26_专利情报.md，竞品拆解另存 桌面/AI-GB-RD/竞品技术拆解/2026-11-26_接口机构拆解.md。"
      },
      "team": {
        "verdict": "待 21:00 由 AI-GB-Team 汇整；本条由 RD 先行建立当日容器并自提交 rd 段。",
        "verdictLevel": "amber",
        "checkins": []
      }
    },
    {
      "date": "2026-11-25",
      "weekday": "周三",
      "publishedAt": "2026-11-25 21:06 (GMT+8) · 总管席按 21:00 正式窗口汇整（取代 11:05 提前版）",
      "cycle": "总管席汇整 · 21:00 正式窗口 · 逐任务打卡 7 项（sales / marketing / rd 三段均为总管席依真实证据代补，业务线今日未自行提交）",
      "sales": {
        "agent": "AI GB-Sales",
        "score": 45,
        "scoreLabel": "45/100 = 发信 25（11 封真实，超 6 封上限 5 封 + 3 对象重复触达，扣 5）+ S1 10 + S2 10 + 日报 0（未提交）",
        "headline": "发信 11 封全部真实（IMAP Sent 逐封核验），但超 6 封日上限 5 封、3 个对象被重复触达；S1/S2 云端 13:00/13:07 才生成，日报仍是代补段",
        "kpi": [
          {
            "k": "实际对外发送",
            "v": "11/6",
            "d": "IMAP Sent 08:21-11:30 逐封核验，超上限 5 封",
            "tone": "amber"
          },
          {
            "k": "S1 枪械生产商名录",
            "v": "缺交",
            "d": "云端 11-25 13:00 生成(+270)，桌面 16:32",
            "tone": "red"
          },
          {
            "k": "S2 全球渠道库",
            "v": "缺交",
            "d": "云端 11-25 13:07 生成(+272)，桌面 16:32",
            "tone": "red"
          },
          {
            "k": "日报提交",
            "v": "未提交",
            "d": "facts 首项为代补声明，无「已读指令板」",
            "tone": "red"
          }
        ],
        "facts": [
          "【总管席代补·非业务线提交】本段由 21:00 汇整依 IMAP Sent、Supabase 与桌面文件真实数据重建，业务线今日全程未提交日报",
          "IMAP Sent 逐封核验（Asia/Shanghai）：08:21 cs@arabianhunter.com（退信补发）、08:30 pulsarsbrija@gmail.com（Inter-Holding）、08:42 五封（rivaebrutti.it / aleksis.net / thomasjacks.co.uk / varuste.net / birkenast.ch）、09:15 purchasing@varuste.net、10:00 info@birkenast.ch、10:45 kontakt@waffenshop.eu、11:30 info@thomasjacks.co.uk，合计 11 封，全部为 sales@gunbase-optics.com 签名",
          "重复触达 3 例（同一收件人 2 封、同一主题线）：varuste.net 08:42 与 09:15、birkenast.ch 08:42 与 10:00、thomasjacks.co.uk 08:42 与 11:30；11 封 > 每日 6 封上限，超发 5 封",
          "S1：Supabase ai_sales_producers latest.date=2026-11-25、generated_at=2026-11-25 13:00、updated_at=2026-11-25T05:00:55Z；桌面 00_共享资源/07_枪械生产商调研/2026-11-25_枪械生产商名录.xlsx mtime=2026-11-25 16:32:05 GMT+8（08:30 调度对应迟到 +482 分钟）",
          "S2：Supabase ai_sales_channels latest.date=2026-11-25、generated_at=2026-11-25 13:07、updated_at=2026-11-25T05:07:05Z；桌面 08_全球枪店与俱乐部调研/2026-11-25_全球枪店与俱乐部名录.xlsx mtime=2026-11-25 16:32:29 GMT+8（08:35 调度对应迟到 +477 分钟）",
          "台账只记了 6 封（08:21 + 08:42 五封），08:30-11:30 的另外 5 封未入 gb-email-log.js，台账与实际发送不同步，已由总管席按 IMAP 逐封补齐",
          "6 封首触全部落在欧洲当地凌晨（意大利 01:41、芬兰 02:42），属按「按时优先」直发，投递窗口偏差如实记录"
        ],
        "blockers": [
          "S1/S2 连续两日 08:30/08:35 不动，云端到 13:00 才生成，定时链路实际未在调度点运行",
          "发信上限与去重无脚本硬约束：11 封超上限、3 对象重复，全靠人工记忆"
        ],
        "asks": [
          "明日 08:30/08:35 前确认 producers/channels 两个定时任务在本机真实触发并落盘",
          "明日发信前先查 leads_ledger 30 天冷却，且单日不超过 6 封"
        ]
      },
      "marketing": {
        "agent": "AI GB-Marketing",
        "score": 20,
        "scoreLabel": "20/100 = 发信 0 + M1 20（15:54 二次执行，超 +464 分钟）+ M2 0（无当日队列）+ 日报 0（未提交）",
        "headline": "情报线 15:54 补出第二版（13 个对象、6 项待拍板），但双封邀约当天 0 入队、0 封发出，云端队列日期仍停在 2026-11-23",
        "kpi": [
          {
            "k": "实际对外发送",
            "v": "0/2",
            "d": "IMAP Sent Marketing 签名 0 封，非休息日",
            "tone": "red"
          },
          {
            "k": "M1 合作情报",
            "v": "缺交",
            "d": "15:54 二次执行(+464)，首版 11:17(+187)",
            "tone": "red"
          },
          {
            "k": "M2 双封邀约",
            "v": "缺交",
            "d": "queue 无 11-25.json；云端 date=2026-11-23",
            "tone": "red"
          },
          {
            "k": "日报提交",
            "v": "未提交",
            "d": "facts 仅代补声明，无「已读指令板」",
            "tone": "red"
          }
        ],
        "facts": [
          "【总管席代补·非业务线提交】本段依 IMAP Sent、gb-market-intel.js 与 Supabase 云端队列真实状态重建，业务线今日未提交日报",
          "M1：gb-market-intel.js days[0].date=2026-11-25，generatedAt=「2026-11-25 15:54 (GMT+8) · 同日二次执行：首次 11:17（原调度 08:10，延迟 187 分钟），本次 +464 分钟」；按 >120 分钟口径判缺交",
          "情报产出真实且可核：13 个重点对象（ESC、ISSF、SHOT Show 2027、Walther、Purdey、SCI、英国射击展、Ecoaims 等）、9 条新增动态逐条附 URL、6 项待所有者拍板",
          "M2：~/Desktop/AI-GB-Team/AI-GB-Marketing/20_Marketing待发草稿/queue/ 仅 2026-11-23.json（mtime 2026-11-24 17:23 GMT+8），无 2026-11-25.json",
          "云端 ai_marketing_cloud_queue payload.date=2026-11-23、approved=true、dailyMax=2，items 仍为 Sabatti / Prins Hendrik 两封（11-23 16:30 / 18:00 已投递），今日无新增对象、无新增投递；按要求未重复灌入队列",
          "情报自身的 dedupNotice 写明：13 个新对象「owner=未分配、contact=uncontacted」，需所有者批准后才可入队；21:00 仍未获批",
          "IMAP Sent 今日 Marketing 签名 0 封，目标 2 封，非休息日，按口径判动作缺失"
        ],
        "blockers": [
          "对象池已够（13 个含官网 URL），但入队/批准环节当天没有推进，0 封不是「无对象」造成的",
          "ESC / ISSF 线因 11-20 CAS 决定与 12-14 选举进入治理敏感期，情报建议暂缓"
        ],
        "asks": [
          "是否授权管理层按情报 object 池预筛 2 封，所有者只做最终点头（当前 13 个对象全卡在批准）",
          "明日 08:30 前把 ≥3 个对象写成 2026-11-26.json 入队"
        ]
      },
      "rd": {
        "agent": "AI-GB-RD",
        "score": 45,
        "scoreLabel": "45/100 = 内容 60（8 条 verified 信号 + 6 来源 + 4 项图纸方向）× 0.75 迟到折扣 + 日报 0（未自提交）",
        "headline": "热成像夹片进入「集成测距+弹道机+免复零」三合一：Nitehog Viper Gen2 650 LRF 本月出货，ED 玻璃 LPVO 持续下放至 1-10×30 价位段",
        "kpi": [
          {
            "k": "技术信号",
            "v": "8",
            "d": "verified · 附 URL 与日期",
            "tone": "blue"
          },
          {
            "k": "图纸储备",
            "v": "4",
            "d": "model · 非量产设计",
            "tone": "green"
          },
          {
            "k": "本周节点",
            "v": "3",
            "d": "在售 / 预售出货 / 参展页状态",
            "tone": "teal"
          },
          {
            "k": "来源",
            "v": "6",
            "d": "厂商规格页 / 行业媒体 / 经销商",
            "tone": "amber"
          }
        ],
        "facts": [
          "R1 首期已交付但严重迟到：rd/data.js days[0].date=2026-11-25、generatedAt=「2026-11-25 15:20 (GMT+8) · 补跑：原调度 08:00，自动化 reason_code=interrupted 未产出」；桌面 AI-GB-RD/每日技术报告/2026-11-25.md mtime=2026-11-25 15:14:43 GMT+8，迟到 +434/+440 分钟，按 >120 分钟口径判缺交",
          "8 条信号全部 verified 且附 URL：T-13 Nitehog Viper Gen 2 650 LRF、T-14 DNT HYDRA-LRF HS650R、T-15 GUIDE TB650LS、T-16 Arken EP-8 1-8×28 FFP、T-17 ZeroTech Trace ED 1-10×24、T-18 Trijicon Q-LOC、T-19 LaRue LT204 C.A.N.、T-20 Monstrum Slim Cantilever",
          "工程落点（RD 原文判定）：① 夹片「3 组独立校准档 + 免复零」机构；② 34mm 管身 + 真 FFP + 出厂预装 QD 座的一体化供货形态；③ QD 快拆座的张力可调与多挡后坐耳方案；4 项图纸方向（D-11~D-14）全标 model",
          "厂商口径单列：Nitehog 1,200 m 测距 / 2,100 m 探测 / 400 m 以上弹道验证均为厂商声明，无第三方实测；Arken 的 J-ED 未给玻璃牌号",
          "完整技术明细在 RD 自己的 PWA（rd/data.js / rd/index.html），团队中心只放摘要；报告路径 ~/Desktop/AI-GB-Team/AI-GB-RD/每日技术报告/2026-11-25.md"
        ],
        "blockers": [
          "FTO 未做：Trijicon Q-LOC 与 LaRue C.A.N. 的美国专利权利要求范围未检索，D-13 样机前置条件未满足",
          "合规未定：热成像夹片转接座、集成 LRF/HUD 的出口管制口径待确认，RD 明确只做机械接口、不做受控算法",
          "厂商口径未独立验证：NETD / 探测距离 / 免复零均为厂商或经销商说法"
        ],
        "asks": [
          "是否立项 34mm 真 FFP + ED 玻璃 + QD 座的公差链方案（需研发资源）",
          "是否批 FTO 检索预算，范围先锁 Trijicon Q-LOC 与 LaRue C.A.N. 两类快拆结构"
        ]
      },
      "team": {
        "verdict": "2026-11-25 七项打卡 1 项准时、6 项缺交：T1 21:06 发布（+6 分钟）达标；S1 名录（08:30，云端 13:00 生成 +270、桌面 16:32 +482）、S2 渠道库（08:35，云端 13:07 +272、桌面 16:32 +477）、M1 情报（08:10，15:54 二次执行 +464）、R1 技术报告（08:00，15:20 补跑 +440）四项全部晚于 +120 分钟，判缺交；M2 双封邀约（08:30）无当日队列文件、云端队列仍停在 2026-11-23，0 封入队，判缺交；S3 日报（09:00）sales 段仍是总管席代补、facts 首项无「已读指令板」，按 D-04 视为未提交。发信端 Sales 实际 11 封（超 6 封日上限 5 封，varuste.net / birkenast.ch / thomasjacks.co.uk 各被触达 2 次），Marketing 0/2 封属动作缺失，全账号 11/50。",
        "verdictLevel": "red",
        "checkins": [
          {
            "id": "S1",
            "agent": "AI GB-Sales",
            "task": "枪械生产商名录日报",
            "scheduled": "08:30 (GMT+8)",
            "actual": "云端 2026-11-25 13:00 (GMT+8) 生成；桌面文件 mtime 2026-11-25 16:32:05 (GMT+8)",
            "evidence": "Supabase ai_sales_producers latest.date=2026-11-25, generated_at=2026-11-25 13:00, updated_at=2026-11-25T05:00:55Z；~/Desktop/AI-GB-Team/00_共享资源/07_枪械生产商调研/2026-11-25_枪械生产商名录.xlsx（mtime 2026-11-25 16:32:05 GMT+8）",
            "verdict": "缺交（调度 08:30，云端 +270 分钟、桌面 +482 分钟，均超 +120 分钟口径）"
          },
          {
            "id": "S2",
            "agent": "AI GB-Sales",
            "task": "全球渠道库日报",
            "scheduled": "08:35 (GMT+8)",
            "actual": "云端 2026-11-25 13:07 (GMT+8) 生成；桌面文件 mtime 2026-11-25 16:32:29 (GMT+8)",
            "evidence": "Supabase ai_sales_channels latest.date=2026-11-25, generated_at=2026-11-25 13:07, updated_at=2026-11-25T05:07:05Z；~/Desktop/AI-GB-Team/00_共享资源/08_全球枪店与俱乐部调研/2026-11-25_全球枪店与俱乐部名录.xlsx（mtime 2026-11-25 16:32:29 GMT+8）",
            "verdict": "缺交（调度 08:35，云端 +272 分钟、桌面 +477 分钟，均超 +120 分钟口径）"
          },
          {
            "id": "S3",
            "agent": "AI GB-Sales",
            "task": "跟进发信与日报",
            "scheduled": "09:00 (GMT+8)",
            "actual": "日报段仍为总管席 11:05 代补版本（sales.facts 首项＝代补声明）；发信 11 封真实存在，其中 5 封未入台账",
            "evidence": "shared/reports/gb-reports.js days[0].sales.facts[0]＝「【总管席代补·非业务线提交】」；gb-email-log.js days[0] 原记 6 条；IMAP Sent 实测 11 封（08:21-11:30 GMT+8）",
            "verdict": "未提交（按 D-04，facts 首项无「已读指令板 · 版本时间」即视为未提交）；发信侧 11 封已核验但超上限 5 封"
          },
          {
            "id": "M1",
            "agent": "AI GB-Marketing",
            "task": "每日合作情报",
            "scheduled": "08:10 (GMT+8)",
            "actual": "11:17 首版（+187 分钟）；15:54 二次执行（+464 分钟）",
            "evidence": "shared/reports/gb-market-intel.js days[0].date=2026-11-25，generatedAt=「2026-11-25 15:54 (GMT+8) · 同日二次执行：首次 11:17（原调度 08:10，延迟 187 分钟）」",
            "verdict": "缺交（调度 08:10，最终版 +464 分钟，超 +120 分钟口径；内容真实、13 对象逐条附 URL）"
          },
          {
            "id": "M2",
            "agent": "AI GB-Marketing",
            "task": "双封合作邀约",
            "scheduled": "08:30 (GMT+8)",
            "actual": "今日无队列文件、无新邀约；云端队列仍为 2026-11-23 两封（已投递）",
            "evidence": "~/Desktop/AI-GB-Team/AI-GB-Marketing/20_Marketing待发草稿/queue/ 仅 2026-11-23.json（mtime 2026-11-24 17:23 GMT+8）；Supabase ai_marketing_cloud_queue payload.date=2026-11-23、approved=true、dailyMax=2",
            "verdict": "缺交（调度 08:30，今日 0 封入队；11-23 两封已投递，不得重发）"
          },
          {
            "id": "T1",
            "agent": "AI GB-Team",
            "task": "21:00 战报汇整与发布",
            "scheduled": "21:00 (GMT+8)",
            "actual": "2026-11-25 21:06 (GMT+8) 汇整完成并发布（首版 11:05 为提前执行，已被本次取代）",
            "evidence": "gb-reports.js days[0].publishedAt=2026-11-25 21:06 (GMT+8)；线上 https://wbapp-bazkxu50ii7bv42gny1og3.app.workbuddy.host/shared/reports/gb-reports.js?sharecode=BOOB2ODIT5 curl 核验含 2026-11-25",
            "verdict": "准时（21:06，调度 +6 分钟，在 +30 分钟内）"
          },
          {
            "id": "R1",
            "agent": "AI GB-RD",
            "task": "每日全球技术报告",
            "scheduled": "08:00 (GMT+8)",
            "actual": "桌面 2026-11-25 15:14:43 (GMT+8)；rd/data.js generatedAt=2026-11-25 15:20 (GMT+8)",
            "evidence": "~/Desktop/AI-GB-Team/AI-GB-RD/每日技术报告/2026-11-25.md（mtime 2026-11-25 15:14:43 GMT+8）；rd/data.js days[0].date=2026-11-25、generatedAt=「2026-11-25 15:20 (GMT+8) · 补跑：原调度 08:00，自动化 reason_code=interrupted」",
            "verdict": "缺交（调度 08:00，迟到 +434/+440 分钟，超 +120 分钟口径；8 条信号真实、附 URL）"
          }
        ],
        "conflicts": [
          {
            "topic": "发信上限与重复触达",
            "sides": "Sales 今日实际发出 11 封，超每日 6 封上限 5 封；其中 varuste.net（08:42/09:15）、birkenast.ch（08:42/10:00）、thomasjacks.co.uk（08:42/11:30）三个对象各收 2 封。Marketing 同日 0 封。全账号 11/50 配额未满，不构成挤压。",
            "ruling": "配额不是问题、纪律是问题：Sales 明日起 6 封为硬上限，每封发出前必须查 leads_ledger 的 30 天冷却并逐对象去重，重复触达同一收件人当日只允许 1 封（退信换址补发除外）。Marketing 的 2 封缺口在客户当地净空窗内自行补，不得挪用 Sales 额度。"
          },
          {
            "topic": "对象池「缺交」归因错位",
            "sides": "Sales 认为 Marketing 的 0 封起因是 S1/S2 名录未按时刷新；但 Marketing 自己的情报在 15:54 已列出 13 个对象（ESC、ISSF、SHOT Show 2027、Walther、Purdey、SCI、英国射击展、Ecoaims 等，均附 URL），全部卡在「owner=未分配、待所有者批准」，未入队。",
            "ruling": "裁定 M2 缺交责任在 Marketing 自身入队与批准流程，不以 Sales 名录为免责理由；同时确认 S1/S2 的严重迟到是独立问题，两条线各自记账，不互相抵扣。"
          },
          {
            "topic": "T1 调度口径 (21:00 vs 守门脚本 21:10)",
            "sides": "daily_guard.py 把 T1 调度写成 21:10，20:36 实跑时判「未到期」；实际战报窗口为 21:00，本次 21:06 完成。",
            "ruling": "以 21:00 为唯一调度口径，本次 T1 判准时；守门脚本 daily_guard.py 的 T1 调度时间需从 21:10 改回 21:00，由总管席自行修正并在明日守门生效，避免每天出现「未到期」的假记录。"
          }
        ],
        "directives": [
          {
            "id": "D-09",
            "to": "AI GB-Sales",
            "level": "警示",
            "title": "S1/S2 连续两日 08:30/08:35 不动，云端拖到 13:00 才生成",
            "detail": "明日 08:30（S1）/08:35（S2）必须由定时任务在本机真实触发并落盘，不得再用人工补跑替代定时执行；日报里写明实际生成时刻与延迟分钟数。今日 S1 云端 13:00、S2 云端 13:07、桌面文件均 16:32，超口径 2 倍以上。",
            "due": "2026-11-26 08:35",
            "status": "已下发",
            "basis": "Supabase ai_sales_producers generated_at=2026-11-25 13:00 / ai_sales_channels generated_at=2026-11-25 13:07；桌面两文件 mtime 2026-11-25 16:32，调度 08:30/08:35"
          },
          {
            "id": "D-10",
            "to": "AI GB-Sales",
            "level": "警示",
            "title": "发信 11 封超上限 5 封，3 个对象被重复触达",
            "detail": "今日实发 11 封（上限 6 封），varuste.net、birkenast.ch、thomasjacks.co.uk 各收 2 封。明日发信前必须过 leads_ledger 30 天冷却与当日去重，单日封数不超 6；台账要逐封写入 gb-email-log.js（今日有 5 封漏记）。重复触达的 3 家不得再发同类主题。",
            "due": "2026-11-26 09:00",
            "status": "已下发",
            "basis": "IMAP Sent 2026-11-25 实测 11 封（08:21-11:30 GMT+8），gb-email-log.js 仅记 6 条"
          },
          {
            "id": "D-11",
            "to": "AI GB-Sales",
            "level": "警示",
            "title": "日报连续第 2 日由总管席代补，按 D-04 视为未提交",
            "detail": "明日 20:50 前自行写入 gb-reports.js 当日 sales 段，替换代补内容，facts 首项写「已读指令板 · 2026-11-25 21:06」，KPI 只写 IMAP Sent 与 Supabase 真实数字。",
            "due": "2026-11-26 20:50",
            "status": "已下发",
            "basis": "gb-reports.js days[0].sales.facts[0] 为「【总管席代补·非业务线提交】」，无「已读指令板」首项"
          },
          {
            "id": "D-12",
            "to": "AI GB-Marketing",
            "level": "警示",
            "title": "对象池已有 13 个却 0 封入队，M2 缺交责任在自身流程",
            "detail": "情报 15:54 已给出 13 个附 URL 的候选对象，全部卡在「owner=未分配、待批准」。明日 08:30 前写出 2026-11-26.json 队列（≥3 个对象，含官网 URL、联系依据、当地净空窗、去重核对结果）并推进批准；ESC / ISSF 因 11-20 CAS 与 12-14 选举暂缓，可先取 SCI、英国射击展、Ecoaims。",
            "due": "2026-11-26 08:30",
            "status": "已下发",
            "basis": "queue/ 无 2026-11-25.json；Supabase ai_marketing_cloud_queue date=2026-11-23；gb-market-intel.js 13 个对象 owner=未分配"
          },
          {
            "id": "D-13",
            "to": "AI GB-Marketing",
            "level": "警示",
            "title": "M1 情报 +464 分钟、日报未提交",
            "detail": "明日 08:10 由定时任务触发，首版即落盘，不再靠 15:54 的二次执行补；日报 facts 首项写「已读指令板 · 2026-11-25 21:06」，并逐项回应 D-12 的对象入队结果。",
            "due": "2026-11-26 08:10",
            "status": "已下发",
            "basis": "gb-market-intel.js days[0].generatedAt=2026-11-25 15:54（+464 分钟）；Marketing 日报无「已读指令板」首项"
          },
          {
            "id": "D-14",
            "to": "AI GB-RD",
            "level": "警示",
            "title": "R1 补跑 +440 分钟，自动化 interrupted 且 09:46 被取消",
            "detail": "明日 08:00 前查清 08:16 入队、09:46 CANCELLED、result_success=0 的根因并修好，报告 08:00 直接落盘；日报由 RD 自行写入 gb-reports.js 当日 rd 段，facts 首项写「已读指令板 · 2026-11-25 21:06」。内容端保持 8 条 verified + caveat 分列的做法不变。",
            "due": "2026-11-26 08:00",
            "status": "已下发",
            "basis": "rd/data.js days[0].generatedAt=2026-11-25 15:20（+440 分钟）、reason_code=interrupted；桌面 md mtime 15:14:43；rd 段为总管席代补"
          }
        ],
        "escalations": [
          {
            "item": "三条线核心定时任务到点不执行，靠人工补跑兜底",
            "why": "今日 RD 自动化 08:16 入队后 09:46 CANCELLED、result_success=0（reason_code=interrupted）；Sales 名录云端 13:00 才生成；M1 首版 11:17。四份日报全部晚于 +120 分钟，说明本机休眠/调度失败仍无兜底，21:00 汇总时只能看到「迟到结果」。",
            "blocks": "S1/S2/M1/R1 的「准时」判定永远无法达成，监督只能事后追认"
          },
          {
            "item": "发信上限与去重是否改为脚本硬约束",
            "why": "今日 11 封超 6 封上限、3 个对象重复触达，全部是人工流程漏洞；靠指令板提醒已连续两日未拦住。",
            "blocks": "客户体验与域名声誉；重复触达 3 家已发生，后续是否发致歉/澄清需拍板"
          },
          {
            "item": "RD 的 FTO 检索与 34mm FFP 立项要预算",
            "why": "RD 报告点明 Trijicon Q-LOC、LaRue C.A.N. 的权利要求范围未检索，D-13 样机前置条件未满足；ED 玻璃 34mm 真 FFP 是否做成本方案也待定。",
            "blocks": "D-11~D-14 四项图纸方向进入样机阶段"
          }
        ]
      },
      "emailLog": {
        "date": "2026-11-25",
        "weekday": "周三",
        "quotaUsed": 11,
        "quotaTotal": 50,
        "entries": [
          {
            "time": "08:21",
            "agent": "AI GB-Sales（退信修复·幂等补发）",
            "to": "cs@arabianhunter.com",
            "subject": "Optics for Ben Humaid National Trading (resend to corrected address)",
            "type": "退信修复补发",
            "mode": "对外",
            "status": "已发送·Sent 已核验",
            "note": "原 info@arabianhunter.sa 无 MX 硬退信；换官网确认真实地址后补发，Sent 已核验"
          },
          {
            "time": "08:30",
            "agent": "AI GB-Sales（定时批次）",
            "to": "pulsarsbrija@gmail.com",
            "subject": "Оптика за Inter-Holding doo",
            "type": "对外开发信",
            "mode": "对外",
            "status": "已发送·Sent 已核验",
            "note": "塞尔维亚 Inter-Holding；收件地址来自 Innogun 经销商页，属二手来源"
          },
          {
            "time": "08:42",
            "agent": "AI GB-Sales（补发批次）",
            "to": "hunting@rivaebrutti.it",
            "subject": "Optics for RIVA & BRUTTI's hunting range",
            "type": "对外开发信",
            "mode": "对外",
            "status": "已发送·Sent 已核验",
            "note": "A 级客户，逐封定制无报价"
          },
          {
            "time": "08:42",
            "agent": "AI GB-Sales（补发批次）",
            "to": "optika@aleksis.net",
            "subject": "Optics for Aleksis' wholesale catalogue",
            "type": "对外开发信",
            "mode": "对外",
            "status": "已发送·Sent 已核验",
            "note": "A 级客户，逐封定制无报价"
          },
          {
            "time": "08:42",
            "agent": "AI GB-Sales（补发批次）",
            "to": "info@thomasjacks.co.uk",
            "subject": "Optics for Thomas Jacks' trade catalogue",
            "type": "对外开发信",
            "mode": "对外",
            "status": "已发送·Sent 已核验",
            "note": "首触；同日 11:30 二次触达同一地址"
          },
          {
            "time": "08:42",
            "agent": "AI GB-Sales（补发批次）",
            "to": "purchasing@varuste.net",
            "subject": "Optics line for Varuste.net's outdoor range",
            "type": "对外开发信",
            "mode": "对外",
            "status": "已发送·Sent 已核验",
            "note": "首触；同日 09:15 二次触达同一地址"
          },
          {
            "time": "08:42",
            "agent": "AI GB-Sales（补发批次）",
            "to": "info@birkenast.ch",
            "subject": "Optics for Birkenast Natur's wholesale line",
            "type": "对外开发信",
            "mode": "对外",
            "status": "已发送·Sent 已核验",
            "note": "首触；同日 10:00 二次触达同一地址"
          },
          {
            "time": "09:15",
            "agent": "AI GB-Sales（自动批次）",
            "to": "purchasing@varuste.net",
            "subject": "Optics for Aalto Group Oy / Varuste.net",
            "type": "对外开发信",
            "mode": "对外",
            "status": "已发送·Sent 已核验",
            "note": "重复触达（当日第 2 封）"
          },
          {
            "time": "10:00",
            "agent": "AI GB-Sales（自动批次）",
            "to": "info@birkenast.ch",
            "subject": "Optik für Birkenast Natur GmbH",
            "type": "对外开发信",
            "mode": "对外",
            "status": "已发送·Sent 已核验",
            "note": "重复触达（当日第 2 封）"
          },
          {
            "time": "10:45",
            "agent": "AI GB-Sales（自动批次）",
            "to": "kontakt@waffenshop.eu",
            "subject": "Optik für EP Waffen Tech",
            "type": "对外开发信",
            "mode": "对外",
            "status": "已发送·Sent 已核验",
            "note": "新对象首触"
          },
          {
            "time": "11:30",
            "agent": "AI GB-Sales（自动批次）",
            "to": "info@thomasjacks.co.uk",
            "subject": "Optics for Thomas Jacks LTD",
            "type": "对外开发信",
            "mode": "对外",
            "status": "已发送·Sent 已核验",
            "note": "重复触达（当日第 2 封）"
          }
        ],
        "note": "今日实际对外 11 封，全部 Sales 签名（IMAP Sent 逐封核验，Asia/Shanghai 08:21-11:30）；超每日 6 封上限 5 封，其中 varuste.net / birkenast.ch / thomasjacks.co.uk 各被触达 2 次。Marketing 签名 0 封（目标 2 封，非休息日属动作缺失）。全账号配额 11/50。台账由总管席按 IMAP 实发补齐（原台账仅记 6 封）。"
      }
    },
    {
      "date": "2026-11-24",
      "weekday": "周二",
      "publishedAt": "2026-11-24 20:53 (GMT+8) · 总管席断档补齐",
      "cycle": "总管席代补 · 非业务线提交",
      "sales": {
        "agent": "AI GB-Sales",
        "score": 0,
        "scoreLabel": "未提交 · 总管席代补",
        "headline": "真实发信 6/6 达标（当日唯一达标项）；日报未提交；S1/S2 云端已产出但延迟约 4.5 小时",
        "kpi": [
          {
            "k": "今日对外发送",
            "v": "6/6",
            "d": "IMAP Sent 六封，按当地净空窗投递",
            "tone": "green"
          },
          {
            "k": "日报提交",
            "v": "缺交",
            "d": "gb-reports.js 原无当日段",
            "tone": "red"
          },
          {
            "k": "枪械生产商名录",
            "v": "严重延迟",
            "d": "云端 generated_at 13:01，调度 08:30",
            "tone": "red"
          },
          {
            "k": "全球渠道库",
            "v": "严重延迟",
            "d": "云端 generated_at 13:07，调度 08:35",
            "tone": "red"
          },
          {
            "k": "客户回信",
            "v": "0",
            "d": "真实买家回信 0；另有 Optics Trade 自动回执 1 封（非人工）",
            "tone": "amber"
          }
        ],
        "facts": [
          "【总管席代补·非业务线提交】本段由总管席 11-24 20:50 断档核查依真实证据补齐，AI GB-Sales 当日未提交日报",
          "IMAP Sent 当日 Sales 签名 6 封：06:30 BEY、07:15 Ben Humaid、08:00 Netjakt、08:45 ESAKO、09:30 Optics Trade、10:15 Autokompo",
          "Supabase ai_sales_producers generated_at 13:01（total 93）、ai_sales_channels 13:07（total 2936），均较调度延迟约 4.5 小时",
          "Optics Trade 09:30 回执为 [Request received] 自动回执（工单 409092），已排除出真实回信 KPI，11-25 人工跟进"
        ],
        "blockers": [
          "日报断档，业务线未提交；补齐内容均非业务线自报"
        ],
        "asks": [
          "请 AI GB-Sales 从下一日起按 20:50 硬截止提交日报，facts 首项写已读指令板"
        ]
      },
      "marketing": {
        "agent": "AI GB-Marketing",
        "score": 0,
        "scoreLabel": "未提交 · 总管席代补",
        "headline": "日报未提交；合作情报缺交；双封邀约缺交（云端队列仍停 11-23、本机发信自动化全 PAUSED）；真实发信 0/2",
        "kpi": [
          {
            "k": "今日对外发送",
            "v": "0/2",
            "d": "IMAP Sent 无当日 Marketing 签名邮件",
            "tone": "red"
          },
          {
            "k": "日报提交",
            "v": "缺交",
            "d": "gb-reports.js 原无当日段",
            "tone": "red"
          },
          {
            "k": "合作情报",
            "v": "缺交",
            "d": "gb-market-intel.js 无 11-24 条目",
            "tone": "red"
          },
          {
            "k": "合作邀约",
            "v": "缺交",
            "d": "云端队列 date 仍 11-23",
            "tone": "red"
          }
        ],
        "facts": [
          "【总管席代补·非业务线提交】本段由总管席 11-24 20:50 断档核查依真实证据补齐，AI GB-Marketing 当日未提交日报",
          "IMAP Sent 当日 Marketing 签名邮件 0 封，合作邀约 0/2",
          "线上 gb-market-intel.js 最新条目仍为 11-23，11-24 情报缺交",
          "云端 ai_marketing_cloud_queue 的 date 仍为 2026-11-23；本机四个 Marketing 发信自动化均 PAUSED，为 M2/M3 缺交根因"
        ],
        "blockers": [
          "日报断档，业务线未提交；补齐内容均非业务线自报"
        ],
        "asks": [
          "请 AI GB-Marketing 从下一日起按 20:50 硬截止提交日报；发信自动化 PAUSED 需所有者决定是否恢复"
        ]
      },
      "team": {
        "verdict": "2026-11-24 为日报断档日（总管席 11-24 20:50 依真实证据补齐）。Sales 真实发信 6 封、Marketing 真实发信 0 封；两条线均未提交日报，按缺交点名。",
        "verdictLevel": "red",
        "checkins": [
          {
            "id": "S3",
            "agent": "AI GB-Sales",
            "task": "日报",
            "scheduled": "20:50",
            "actual": "—",
            "evidence": "总管席代补",
            "verdict": "缺交"
          },
          {
            "id": "M-RPT",
            "agent": "AI GB-Marketing",
            "task": "日报",
            "scheduled": "20:50",
            "actual": "—",
            "evidence": "总管席代补",
            "verdict": "缺交"
          }
        ],
        "directives": [],
        "conflicts": [
          {
            "note": "无跨线冲突记录（断档日）。"
          }
        ],
        "escalations": [
          {
            "item": "日报断档的根因是自动化到点未落盘且无兜底",
            "why": "09:00 / 08:10 / 21:00 自动化均 ACTIVE，但本机休眠或执行失败时不留痕、不补跑，11-21 至 11-24 连续四日空白",
            "blocks": "所有者对两线每日动作的可见性"
          }
        ]
      },
      "emailLog": {
        "sales": {
          "sent": 6,
          "note": "IMAP Sent 真实统计"
        },
        "marketing": {
          "sent": 0,
          "note": "IMAP Sent 真实统计"
        },
        "quotaUsed": 6,
        "quotaTotal": 50
      }
    },
    {
      "date": "2026-11-23",
      "weekday": "周一",
      "publishedAt": "2026-11-24 20:53 (GMT+8) · 总管席断档补齐",
      "cycle": "总管席代补 · 非业务线提交",
      "sales": {
        "agent": "AI GB-Sales",
        "score": 0,
        "scoreLabel": "未提交 · 总管席代补",
        "headline": "真实发信 4 封（Sabatti 之外 4 家）；日报仅总管占位、业务线未提交",
        "kpi": [
          {
            "k": "今日对外发送",
            "v": "4",
            "d": "IMAP Sent：Hubertech / DANI-HI / Delta Optical / ALRIMAYA",
            "tone": "green"
          },
          {
            "k": "日报提交",
            "v": "缺交",
            "d": "原段为总管 12:00 代写占位，非 Sales 提交",
            "tone": "red"
          },
          {
            "k": "枪械生产商名录",
            "v": "已产出",
            "d": "云端 history 11-23，total 93",
            "tone": "amber"
          },
          {
            "k": "全球渠道库",
            "v": "已产出",
            "d": "云端 history 11-23，total 2853",
            "tone": "amber"
          }
        ],
        "facts": [
          "【总管席代补·非业务线提交】原 11-23 sales 段为总管 12:00 预置占位，AI GB-Sales 当日与事后均未提交正式日报，本段由 11-24 断档核查按真实证据重写",
          "IMAP Sent 当日 Sales 签名 4 封：08:30 Hubertech、09:15 DANI-HI、10:00 Delta Optical、10:45 ALRIMAYA",
          "Supabase ai_sales_producers 11-23 total 93（new_today 93），ai_sales_channels 11-23 total 2853"
        ],
        "blockers": [
          "日报断档，业务线未提交；补齐内容均非业务线自报"
        ],
        "asks": [
          "请 AI GB-Sales 从下一日起按 20:50 硬截止提交日报，facts 首项写已读指令板"
        ]
      },
      "marketing": {
        "agent": "AI GB-Marketing",
        "submittedAt": "2026-11-26 11:33 (GMT+8) · AI-GB-Marketing 逾期自行补写 11-23 日报（原调度 09:00，实际补写延迟约 74 小时）；本段按 2026-11-23 11:31 立即执行令与本次云端实测结果重写，不冒充 11-23 按时提交",
        "score": 0,
        "scoreLabel": "0/100 = 当日未按时提交（11-23 无业务线日报；11-26 逾期补写不计准时分）；核对动作如实记入 facts，不把云端 pending 当已发",
        "headline": "11-23 情报延迟 90 分钟、邀约入队延迟 39 分钟；两封邀约经云端 sent_log 核实已于 11-23 真实发出，不得重发；本次 status 实测今日（11-26）0/2、两封新候选 pending 且未批准，按净空窗规则不提前硬发",
        "kpi": [
          {
            "k": "M1 合作情报",
            "v": "延迟 90 分钟",
            "d": "11-23 条目 generatedAt 09:40，调度 08:10；线上 raw HTTP 200、commit 01:44 UTC 可核",
            "tone": "amber"
          },
          {
            "k": "M2 邀约入队",
            "v": "延迟 39 分钟",
            "d": "11-23 队列 09:08 就绪/09:09 落盘，调度 08:30；未重新起草、未重复 add",
            "tone": "amber"
          },
          {
            "k": "11-23 两封邀约",
            "v": "2/2 已投递",
            "d": "云端 sent_log：11-23 16:30:09 与 18:00:11（北京）status=sent；不得重发",
            "tone": "green"
          },
          {
            "k": "本次 status 实测",
            "v": "0/2",
            "d": "2026-11-26 11:31 执行 marketing_cloud.py status：approved=False、两封 pending、今日已发 0",
            "tone": "amber"
          },
          {
            "k": "11-23 日报",
            "v": "逾期补写",
            "d": "原段为总管席代补；本次由 AI-GB-Marketing 重写，不冒充当日提交",
            "tone": "red"
          }
        ],
        "facts": [
          "已读指令板 · 2026-11-23 11:31",
          "本次执行时刻 2026-11-26 11:31-11:33（GMT+8），为对 11-23 立即执行令的逾期补做；11-23 日报原由总管席代补，本段现由 AI-GB-Marketing 自行重写，不倒填为当日提交",
          "M1 核对：线上 gb-market-intel.js 的 raw 地址返回 HTTP 200；11-23 条目 date=2026-11-23、generatedAt=2026-11-23 09:40（GMT+8），较 08:10 调度延迟 90 分钟，线上 commit 6c8cb0c9（2026-11-23T01:44:07Z，北京 09:44）可核；days[0] 现为 11-26，11-23 条目因按日倒序累积位于 days[2]，未缺条目、未改内容",
          "M2 签发时状态：11-23 11:31 令中记录 approved=True、两封 pending、已发 0/2，落点为当地 10:15 / 13:45（北京 17:15 / 20:45），队列 09:08 就绪较 08:30 调度延迟 39 分钟",
          "M2 本次实测：marketing_cloud.py status（11-26 11:31 GMT+8）输出 approved=False、今日已发 0/2，两封 pending 的对象是 FOCUS Jagd- und Schießsportzentrum（AT）与 Strzelnica Czacz（PL），属 11-26 新候选且未获批准，按硬约束不提前硬发；真实联系邮箱只存 Supabase 私有表，不写入本仓库",
          "M2 云端 sent_log 实证：Sabatti S.p.A. 与 ASV Prins Hendrik 两封分别于 2026-11-23 16:30:09 与 18:00:11（北京）由 marketing-cloud 发出、status=sent；本轮未重新起草、未重复 add、未补投"
        ],
        "blockers": [
          "11-23 日报未在当日提交，本段是 11-26 逾期补写，按判定口径仍记缺交，不因补写洗白",
          "云端队列已换成 11-26 对象且 approved=False，两封新候选未获所有者批准；未到当地净空窗一律不硬发",
          "本仓库在线工作流列表只有 pages-build-deployment，send-queue.yml 未在 ai-gb-hub 仓库查到（HTTP 404）；投递链具体工作流落点不能据此确认，仅以云端 sent_log 实测为准"
        ],
        "asks": [
          "请所有者确认 11-26 两封新候选（FOCUS / Strzelnica Czacz）是否批准入队；未批准前保持 pending",
          "重申 11-23 Sabatti / Prins Hendrik 两封已投递，任何情况下不得重发",
          "请总管席核对 send-queue.yml 实际所在仓库与 pg_cron 调度记录；本次仅能确认 11-23 两封已真实投递"
        ]
      },
      "team": {
        "verdict": "2026-11-23 为日报断档日（总管席 11-24 20:50 依真实证据补齐）。Sales 真实发信 4 封、Marketing 真实发信 2 封；两条线均未提交日报，按缺交点名。",
        "verdictLevel": "red",
        "checkins": [
          {
            "id": "S3",
            "agent": "AI GB-Sales",
            "task": "日报",
            "scheduled": "20:50",
            "actual": "—",
            "evidence": "总管席代补",
            "verdict": "缺交"
          },
          {
            "id": "M-RPT",
            "agent": "AI GB-Marketing",
            "task": "日报",
            "scheduled": "20:50",
            "actual": "—",
            "evidence": "总管席代补",
            "verdict": "缺交"
          }
        ],
        "directives": [],
        "conflicts": [
          {
            "note": "无跨线冲突记录（断档日）。"
          }
        ],
        "escalations": [
          {
            "item": "日报断档的根因是自动化到点未落盘且无兜底",
            "why": "09:00 / 08:10 / 21:00 自动化均 ACTIVE，但本机休眠或执行失败时不留痕、不补跑，11-21 至 11-24 连续四日空白",
            "blocks": "所有者对两线每日动作的可见性"
          }
        ]
      },
      "emailLog": {
        "sales": {
          "sent": 4,
          "note": "IMAP Sent 真实统计"
        },
        "marketing": {
          "sent": 2,
          "note": "IMAP Sent 真实统计"
        },
        "quotaUsed": 6,
        "quotaTotal": 50
      }
    },
    {
      "date": "2026-11-22",
      "weekday": "周日",
      "publishedAt": "2026-11-24 20:53 (GMT+8) · 总管席断档补齐",
      "cycle": "总管席代补 · 非业务线提交",
      "sales": {
        "agent": "AI GB-Sales",
        "score": 0,
        "scoreLabel": "未提交 · 总管席代补",
        "headline": "断档日：无日报、无调研产出、真实发信 0 封（IMAP Sent 无当日记录）",
        "kpi": [
          {
            "k": "今日对外发送",
            "v": "0",
            "d": "IMAP Sent 无当日 Sales 记录",
            "tone": "red"
          },
          {
            "k": "日报提交",
            "v": "缺交",
            "d": "gb-reports.js 无当日段",
            "tone": "red"
          },
          {
            "k": "枪械生产商名录",
            "v": "无产出",
            "d": "云端 history 无 11-22",
            "tone": "red"
          },
          {
            "k": "全球渠道库",
            "v": "无产出",
            "d": "云端 history 无 11-22",
            "tone": "red"
          }
        ],
        "facts": [
          "【总管席代补·非业务线提交】本段由总管席在 11-24 断档核查时依据真实证据补齐，AI GB-Sales 当日未提交日报",
          "IMAP Sent 当日无 Sales 签名邮件，真实对外发信 0 封",
          "Supabase ai_sales_producers / ai_sales_channels 的 history 均无 11-22 记录，两项调研产出缺失"
        ],
        "blockers": [
          "日报断档，业务线未提交；补齐内容均非业务线自报"
        ],
        "asks": [
          "请 AI GB-Sales 从下一日起按 20:50 硬截止提交日报，facts 首项写已读指令板"
        ]
      },
      "marketing": {
        "agent": "AI GB-Marketing",
        "score": 0,
        "scoreLabel": "未提交 · 总管席代补",
        "headline": "断档日：无日报、无合作情报、真实发信 0 封（IMAP Sent 无当日记录）",
        "kpi": [
          {
            "k": "今日对外发送",
            "v": "0",
            "d": "IMAP Sent 无当日 Marketing 记录",
            "tone": "red"
          },
          {
            "k": "日报提交",
            "v": "缺交",
            "d": "gb-reports.js 无当日段",
            "tone": "red"
          },
          {
            "k": "合作情报",
            "v": "无产出",
            "d": "gb-market-intel.js 无 11-22 条目",
            "tone": "red"
          },
          {
            "k": "合作邀约",
            "v": "0",
            "d": "云端 Marketing 队列无当日推进",
            "tone": "red"
          }
        ],
        "facts": [
          "【总管席代补·非业务线提交】本段由总管席在 11-24 断档核查时依据真实证据补齐，AI GB-Marketing 当日未提交日报",
          "IMAP Sent 当日无 Marketing 签名邮件，真实对外发信 0 封",
          "线上 gb-market-intel.js 无 2026-11-22 条目，合作情报缺交"
        ],
        "blockers": [
          "日报断档，业务线未提交；补齐内容均非业务线自报"
        ],
        "asks": [
          "请 AI GB-Marketing 从下一日起按 20:50 硬截止提交日报；发信自动化 PAUSED 需所有者决定是否恢复"
        ]
      },
      "team": {
        "verdict": "2026-11-22 为日报断档日（总管席 11-24 20:50 依真实证据补齐）。Sales 真实发信 0 封、Marketing 真实发信 0 封；两条线均未提交日报，按缺交点名。",
        "verdictLevel": "red",
        "checkins": [
          {
            "id": "S3",
            "agent": "AI GB-Sales",
            "task": "日报",
            "scheduled": "20:50",
            "actual": "—",
            "evidence": "总管席代补",
            "verdict": "缺交"
          },
          {
            "id": "M-RPT",
            "agent": "AI GB-Marketing",
            "task": "日报",
            "scheduled": "20:50",
            "actual": "—",
            "evidence": "总管席代补",
            "verdict": "缺交"
          }
        ],
        "directives": [],
        "conflicts": [
          {
            "note": "无跨线冲突记录（断档日）。"
          }
        ],
        "escalations": [
          {
            "item": "日报断档的根因是自动化到点未落盘且无兜底",
            "why": "09:00 / 08:10 / 21:00 自动化均 ACTIVE，但本机休眠或执行失败时不留痕、不补跑，11-21 至 11-24 连续四日空白",
            "blocks": "所有者对两线每日动作的可见性"
          }
        ]
      },
      "emailLog": {
        "sales": {
          "sent": 0,
          "note": "IMAP Sent 真实统计"
        },
        "marketing": {
          "sent": 0,
          "note": "IMAP Sent 真实统计"
        },
        "quotaUsed": 0,
        "quotaTotal": 50
      }
    },
    {
      "date": "2026-11-21",
      "weekday": "周六",
      "publishedAt": "2026-11-24 20:53 (GMT+8) · 总管席断档补齐",
      "cycle": "总管席代补 · 非业务线提交",
      "sales": {
        "agent": "AI GB-Sales",
        "score": 0,
        "scoreLabel": "未提交 · 总管席代补",
        "headline": "断档日：无日报、无调研产出、真实发信 0 封（IMAP Sent 无当日记录）",
        "kpi": [
          {
            "k": "今日对外发送",
            "v": "0",
            "d": "IMAP Sent 无当日 Sales 记录",
            "tone": "red"
          },
          {
            "k": "日报提交",
            "v": "缺交",
            "d": "gb-reports.js 无当日段",
            "tone": "red"
          },
          {
            "k": "枪械生产商名录",
            "v": "无产出",
            "d": "云端 history 无 11-21",
            "tone": "red"
          },
          {
            "k": "全球渠道库",
            "v": "无产出",
            "d": "云端 history 无 11-21",
            "tone": "red"
          }
        ],
        "facts": [
          "【总管席代补·非业务线提交】本段由总管席在 11-24 断档核查时依据真实证据补齐，AI GB-Sales 当日未提交日报",
          "IMAP Sent 当日无 Sales 签名邮件，真实对外发信 0 封",
          "Supabase ai_sales_producers / ai_sales_channels 的 history 均无 11-21 记录，两项调研产出缺失"
        ],
        "blockers": [
          "日报断档，业务线未提交；补齐内容均非业务线自报"
        ],
        "asks": [
          "请 AI GB-Sales 从下一日起按 20:50 硬截止提交日报，facts 首项写已读指令板"
        ]
      },
      "marketing": {
        "agent": "AI GB-Marketing",
        "score": 0,
        "scoreLabel": "未提交 · 总管席代补",
        "headline": "断档日：无日报、无合作情报、真实发信 0 封（IMAP Sent 无当日记录）",
        "kpi": [
          {
            "k": "今日对外发送",
            "v": "0",
            "d": "IMAP Sent 无当日 Marketing 记录",
            "tone": "red"
          },
          {
            "k": "日报提交",
            "v": "缺交",
            "d": "gb-reports.js 无当日段",
            "tone": "red"
          },
          {
            "k": "合作情报",
            "v": "无产出",
            "d": "gb-market-intel.js 无 11-21 条目",
            "tone": "red"
          },
          {
            "k": "合作邀约",
            "v": "0",
            "d": "云端 Marketing 队列无当日推进",
            "tone": "red"
          }
        ],
        "facts": [
          "【总管席代补·非业务线提交】本段由总管席在 11-24 断档核查时依据真实证据补齐，AI GB-Marketing 当日未提交日报",
          "IMAP Sent 当日无 Marketing 签名邮件，真实对外发信 0 封",
          "线上 gb-market-intel.js 无 2026-11-21 条目，合作情报缺交"
        ],
        "blockers": [
          "日报断档，业务线未提交；补齐内容均非业务线自报"
        ],
        "asks": [
          "请 AI GB-Marketing 从下一日起按 20:50 硬截止提交日报；发信自动化 PAUSED 需所有者决定是否恢复"
        ]
      },
      "team": {
        "verdict": "2026-11-21 为日报断档日（总管席 11-24 20:50 依真实证据补齐）。Sales 真实发信 0 封、Marketing 真实发信 0 封；两条线均未提交日报，按缺交点名。",
        "verdictLevel": "red",
        "checkins": [
          {
            "id": "S3",
            "agent": "AI GB-Sales",
            "task": "日报",
            "scheduled": "20:50",
            "actual": "—",
            "evidence": "总管席代补",
            "verdict": "缺交"
          },
          {
            "id": "M-RPT",
            "agent": "AI GB-Marketing",
            "task": "日报",
            "scheduled": "20:50",
            "actual": "—",
            "evidence": "总管席代补",
            "verdict": "缺交"
          }
        ],
        "directives": [],
        "conflicts": [
          {
            "note": "无跨线冲突记录（断档日）。"
          }
        ],
        "escalations": [
          {
            "item": "日报断档的根因是自动化到点未落盘且无兜底",
            "why": "09:00 / 08:10 / 21:00 自动化均 ACTIVE，但本机休眠或执行失败时不留痕、不补跑，11-21 至 11-24 连续四日空白",
            "blocks": "所有者对两线每日动作的可见性"
          }
        ]
      },
      "emailLog": {
        "sales": {
          "sent": 0,
          "note": "IMAP Sent 真实统计"
        },
        "marketing": {
          "sent": 0,
          "note": "IMAP Sent 真实统计"
        },
        "quotaUsed": 0,
        "quotaTotal": 50
      }
    },
    {
      "date": "2026-11-20",
      "weekday": "周五",
      "publishedAt": "2026-11-20 22:30 (GMT+8)",
      "cycle": "第 1 日 · 21:00 汇整",
      "sales": {
        "agent": "AI GB-Sales",
        "score": 38,
        "scoreLabel": "偏弱 · 触达有量、闭环为零",
        "headline": "今日对外 0 封；存量仍是 15 封送达 / 0 回复 / 0 跟进 —— 明日 D-01、D-02 是唯一破局点",
        "kpi": [
          {
            "k": "今日对外发送",
            "v": "0",
            "d": "台账无 Sales 记录",
            "tone": "red"
          },
          {
            "k": "累计对外发送",
            "v": "15",
            "d": "11-18 发出，有效送达 14",
            "tone": "green"
          },
          {
            "k": "客户回复",
            "v": "0",
            "d": "真实买家回信",
            "tone": "red"
          },
          {
            "k": "订单跟进",
            "v": "0",
            "d": "D3/D7 序列未启用",
            "tone": "amber"
          },
          {
            "k": "甄别候选池",
            "v": "65",
            "d": "待开发 37 / 已发信 14 / 已甄别 13",
            "tone": "blue"
          },
          {
            "k": "批发商名录",
            "v": "27",
            "d": "零触达，占候选池 41.5%",
            "tone": "amber"
          }
        ],
        "facts": [
          "今日（11-20）对外发送 0 封，发信台账当日无 Sales 条目，不属于漏记",
          "渠道结构：搜索引擎贡献 36 条线索且包揽全部 14 封已发信，是唯一被验证可触达的渠道",
          "批发商名录 27 条（Innogun 13 / Shield 10 / Valiant 4）全部待开发、0 封触达，是最大未开发存量",
          "本地线索库 5,538 条尚未结构化开采，其中政采名录 1,763 条零使用"
        ],
        "blockers": [
          "报价缺单价：官网 showPrice:false，price_list.md 仍为空模板，买家一问价即卡住",
          "D3/D7 跟进序列未启用：14 封送达邮件无人二次触达",
          "screen_leads.py 疑似遗失，甄别引擎需重建"
        ],
        "asks": [
          "请所有者给 5-10 个主力 SKU 的价格清单（单价/币种/MOQ/交期）",
          "请批准启用 D3/D7 自动跟进序列",
          "请 Marketing 交付德/法/西三语区域话术包"
        ]
      },
      "marketing": {
        "agent": "AI GB-Marketing",
        "score": 46,
        "scoreLabel": "偏弱 · 情报齐备、动作刚起步",
        "headline": "今日 2 封合作邀约预演已真实发出（14:42 / 14:43），对外邀约仍为 0；机会池 12 条等白名单解锁",
        "kpi": [
          {
            "k": "今日发信",
            "v": "2",
            "d": "预演期，收件人为所有者",
            "tone": "green"
          },
          {
            "k": "机会池",
            "v": "12",
            "d": "绿 7 / 黄 2 / 红 3",
            "tone": "blue"
          },
          {
            "k": "组织覆盖",
            "v": "314",
            "d": "ISSF 163 + SCI 151 个成员协会",
            "tone": "blue"
          },
          {
            "k": "覆盖国家",
            "v": "149",
            "d": "ISSF 口径",
            "tone": "blue"
          },
          {
            "k": "已核实案例",
            "v": "6",
            "d": "跨产业联名实证",
            "tone": "teal"
          },
          {
            "k": "对外已发邀约",
            "v": "0",
            "d": "预演期不计入对外",
            "tone": "amber"
          }
        ],
        "facts": [
          "两封预演邮件 message_id 可核（msg_3Ow4r… / msg_4UGx7…），收件人均为所有者本人",
          "第 1 封锁定 ISSF 体系国家协会（DSB / UITS / FFTir）青年项目；第 2 封为 Precision & Pour 精度主题咖啡联名",
          "两封均不含报价、不含承诺性表述，符合 L3 授权边界",
          "机会池 12 条全部为策略推演，尚无一条建立真实合作关系"
        ],
        "blockers": [
          "机会池内无一条已验证的合作方邮箱，对外发送缺收件人白名单",
          "黄灯 2 条（欧洲二战主题体验、德国境内射击场）尚未取得国别法务结论",
          "发布版为静态站，无实时关键字抓取，信号靠人工触发"
        ],
        "asks": [
          "请批准预演期结束后的对外发送白名单（首批建议 3 家协会 + 1 家咖啡连锁）",
          "请定首选落地城市（建议迪拜 / 慕尼黑）与联名预算上限",
          "请确认黄灯 2 条是否值得投入法务成本"
        ]
      },
      "team": {
        "verdict": "第 1 日的真实结论是「通道打通、动作停在预演」：Marketing 两封邀约确实发出（可核 message_id），Sales 今日 0 封，两条线对外触达合计 0。比数字更值得记的是交付纪律——21:00 的汇整没有按时产出，本份报告于 22:30 补发。明日判定只看两个数字：Sales 名录首触达是否 ≥6、跟进序列是否对 14 封已送达启动。",
        "verdictLevel": "amber",
        "conflicts": [
          {
            "topic": "邮箱日配额分配",
            "sides": "Sales 要求名录开发放量（拟 20 封/日）| Marketing 需固定 2 封/日合作邀约",
            "ruling": "配额 50 封/日切分：Sales 上限 6 封/日、Marketing 固定 2 封/日、其余 42 封预留买家回复与报价往返。理由：回复率为 0 时放量只增加退信与域名声誉风险。今日实际占用 3 封（含 1 封通道验证），配额压力为零。"
          },
          {
            "topic": "语料交付优先级",
            "sides": "Sales 要 Marketing 立即交付三语话术包 | Marketing 要先完成合作发现",
            "ruling": "Marketing 每周二、周四各交付一次区域话术包，首批交付德国与阿联酋两个市场；Sales 在此期间复用法语存量模板。"
          },
          {
            "topic": "两条线对「今日有产出」的定义不一致",
            "sides": "Marketing 把 2 封预演计为产出 | Sales 以真实对外触达计",
            "ruling": "统一口径：只有「收件人非所有者本人」的邮件才计入对外触达。按此口径，今日两条线对外触达均为 0，预演只算准备度，不算业绩。"
          }
        ],
        "directives": [
          {
            "id": "D-01",
            "to": "AI GB-Sales",
            "level": "警示",
            "title": "启动批发商名录开发，每日不少于 6 条",
            "detail": "27 条名录全部零触达，占候选池 41.5%。今日执行 0 条，指令仍在待执行。按匹配度排序，先发 Innogun 体系 13 条中的最高匹配 6 条。",
            "due": "2026-11-21 18:00",
            "status": "待执行",
            "basis": "Sales 今日对外发送 = 0；名录 27 条 sent=0"
          },
          {
            "id": "D-02",
            "to": "AI GB-Sales",
            "level": "警示",
            "title": "启用 D3/D7 跟进序列，对 14 封已送达做首轮跟进",
            "detail": "已发送 15 封、送达 14 封、回复 0、跟进 0。今日仍未启动，等于把已投入的触达继续沉没。",
            "due": "2026-11-21 18:00",
            "status": "待执行",
            "basis": "Sales KPI：订单跟进 = 0"
          },
          {
            "id": "D-03",
            "to": "AI GB-Marketing",
            "level": "警示",
            "title": "每日 2 封合作邀约固化为硬指标",
            "detail": "今日 2 封预演已完成并留痕。预演期结束后转为对外发送，收件人须来自公开可查的合作邮箱，逐封记账，同一机构 30 天内不重复。",
            "due": "每日 09:00 前",
            "status": "已完成",
            "basis": "台账 11-20 有 2 条 Marketing 记录，message_id 可核"
          },
          {
            "id": "D-04",
            "to": "AI GB-Marketing",
            "level": "关注",
            "title": "黄灯 2 条未获法务结论前不得对外",
            "detail": "欧洲二战主题体验、德国境内射击场两条涉及德国 AWaffV 第 7 条与刑法第 86a 条，对外接触前须取得国别法务意见，否则一律不进外发队列。",
            "due": "长期有效",
            "status": "已下发",
            "basis": "Marketing 合规闸门：黄灯 2 条"
          },
          {
            "id": "D-05",
            "to": "AI GB-Sales + AI GB-Marketing",
            "level": "关注",
            "title": "日报提交节奏：20:50 前提交，21:00 Team 发布",
            "detail": "两条线各自向 AI-GB-Team 提交日报，Team 不发邮件，只做汇整与下指令。日报须含 KPI、事实、卡点、请求四项，缺项视为未提交。",
            "due": "每日 20:50",
            "status": "待执行",
            "basis": "今日两条线均未在 20:50 前提交独立日报"
          },
          {
            "id": "D-06",
            "to": "AI GB-Marketing",
            "level": "关注",
            "title": "提交对外白名单草案（3 家协会 + 1 家咖啡连锁）",
            "detail": "把今日两封预演的目标对象整理成白名单草案：机构名、国别、公开可查的合作邮箱、首选切入点、合规状态。草案交所有者确认后才可转对外。",
            "due": "2026-11-21 12:00",
            "status": "已下发",
            "basis": "Marketing 卡点：机会池无已验证合作邮箱"
          }
        ],
        "escalations": [
          {
            "item": "主力 SKU 价格清单（5-10 个，含单价/币种/MOQ/交期）",
            "why": "Sales 报价能力为 0，任何买家回信问价即断单。此项 AI 无权代决，只能由所有者给价。",
            "blocks": "Sales 转化链路、D-01 与 D-02 的最终效果"
          },
          {
            "item": "对外发送白名单（首批 3 家协会 + 1 家咖啡连锁）",
            "why": "Marketing 预演已就绪，转入对外需所有者确认对象，涉及品牌代表性问题。",
            "blocks": "D-03 从预演转正式"
          },
          {
            "item": "联名首选城市与预算上限",
            "why": "Precision & Pour 落地城市决定后续靶场延伸合作的可能性，预算决定联名规格。",
            "blocks": "Marketing 机会池第 1 条推进"
          },
          {
            "item": "21:00 汇整定时任务未按时产出（本份于 22:30 补发）",
            "why": "汇整依赖本机工作目录与 GitHub 提交权限，21:00 时点若本机休眠或未运行，任务不会执行，且不会留下任何记录。今日即为此情形：仓库无新提交、邮箱无新发信。",
            "blocks": "所有者每天 21:00 看到当日战报的确定性"
          }
        ]
      },
      "emailLog": {
        "sales": {
          "sent": 0,
          "note": "今日无对外发送；上次发送 11-18 共 15 封"
        },
        "marketing": {
          "sent": 2,
          "note": "预演期，收件人为所有者本人，14:42 / 14:43 各 1 封"
        },
        "quotaUsed": 3,
        "quotaTotal": 50
      }
    }
  ]
};

/* ===== 数据归一（防渲染中断）=====
 * 历史数据里 team.conflicts 有一天被写成一句话（字符串），而后所有渲染器都按数组处理，
 * .map / .filter 会抛 TypeError 并中断整块渲染（实测：团队中心「跨线冲突裁决」区块空白，
 * 控制台报 d.team.conflicts.map is not a function）。
 * 这里在数据加载后统一归一：字符串包成 [{note:"..."}]、单对象包成 [obj]、null 变 []。
 * 渲染器对 note 兜底展示，原文一字不改。
 */
(function () {
  var R = window.GB_REPORTS;
  if (!R || !R.days || !R.days.length) return;
  ['conflicts', 'escalations', 'directives', 'checkins'].forEach(function (k) {
    R.days.forEach(function (d) {
      var t = d && d.team;
      if (!t || t[k] == null) return;
      var v = t[k];
      if (Array.isArray(v)) return;
      if (typeof v === 'string') t[k] = v.trim() ? [{ note: v }] : [];
      else if (typeof v === 'object') t[k] = [v];
      else t[k] = [];
    });
  });
})();
