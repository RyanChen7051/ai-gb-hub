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
      "date": "2026-11-27",
      "weekday": "周五",
      "publishedAt": "2026-11-27 09:58 (GMT+8) · 总管席提前汇整（早于 21:00 调度约 11 小时，按真实时间标注、不伪称按时）：本版含七项逐任务打卡 + 今日指令 D-15~D-20；21:00 正式窗口须重跑复核迟到项与届时新增发信 ｜ 10:38 AI-GB-Sales 自行写入 sales 段（取代总管席 09:58 代补版）",
      "cycle": "总管席汇整版 · sales / marketing 两段为「总管席代补·非业务线提交」（两线当日未自提交）；rd 段为 RD 自行提交，未改动",
      "rd": {
        "agent": "AI-GB-RD",
        "score": 60,
        "scoreLabel": "60/100 = 内容 90（8 条技术信号含 2 条进展更新 + 3 件新专利 + 4 项 model 图纸 + 8 来源）× 0.75 补交折扣 + 日报自提交 7.5；补交按真实时间标注",
        "headline": "锁定只做单轴、快拆先谈基准：三件新专利补齐壳体与锥面快拆路径，R1 补交 +14 分钟",
        "kpi": [
          {
            "k": "技术信号",
            "v": "8",
            "d": "6 新增 + 2 进展 · 附 URL 与日期",
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
            "v": "3",
            "d": "2 公开申请 + 1 授权 · 需 FTO",
            "tone": "teal"
          },
          {
            "k": "R1 落盘",
            "v": "08:14",
            "d": "补交，非 08:00 按时",
            "tone": "amber"
          }
        ],
        "facts": [
          "已读指令板 · 2026-11-25 21:06（签发 2026-11-25 21:06 GMT+8；D-07 与 D-14 为长期有效指令；板顶 2026-11-27 08:04 督促令只针对 Sales / Marketing 发信，不涉及 RD）",
          "R1 补交：原调度 08:00，实际 08:14，延迟 14 分钟；generatedAt 与桌面 md mtime 均按真实时间写，不伪称按时",
          "自动化与产物分开记：本轮为定时触发（automation 68d95d11），automation_runs.result_success 待运行结束判定；产物落地不等于自动化成功，不写成已成功",
          "双重落盘证据：rd/data.js days[0].date=2026-11-27 且含 8 条 signals / 4 项 designs；桌面 每日技术报告/2026-11-27.md 已写入，ls -la 核验大小 > 1KB 与真实 mtime",
          "当日检得 8 条技术信号（6 条新发现 + T-08/T-25 各 1 条进展更新）与 3 件新专利；重点图纸储备 D-27 仰角锁定+zero stop 共轴旋钮、D-28 三键两螺钉夹持接口、D-29 侧向维护紧固件腔、D-30 30mm 热成像机械接口边界，全部 v=model",
          "桌面 md、资料源与专利/2026-11-27_专利情报.md、竞品技术拆解/2026-11-27_接口机构拆解.md 均已落盘；FTO 与出口合规未完成，四项图纸方向不得进入样机"
        ],
        "blockers": [
          "三件新专利 US20260309463A1、US 12,674,639、EP4733707A1 均未做 FTO，D-27 至 D-30 不得进入样机",
          "Spuhr 给出的 0.1 / 0.25 / 0.6 mm 为厂商工程师经媒体转载的近似值，未与 MIL-STD-1913 / STANAG 4694 标准原文逐项核对",
          "Thermion 3 的 6000J / IP67 / NETD 为厂商口径，无独立复现；受管制品类只做机械接口趋势"
        ],
        "asks": [
          "是否批准把 FTO 检索范围从 2 件扩到 5 件（新增 Trijicon US20260309463A1、Sellmark US 12,674,639、Light Optical Works EP4733707A1）",
          "是否把 D-27 仰角锁定旋钮与 D-28 三键两螺钉接口列为下月工程评审候选（仅图纸推演，不含样机）",
          "请总管席核查自动化 08:00 调度到实际启动之间的延迟原因；本轮按真实时间记为补交"
        ],
        "detail": "当日完整技术明细见 rd/data.js days[0] 与桌面 每日技术报告/2026-11-27.md；专利明细另存 桌面/AI-GB-RD/资料源与专利/2026-11-27_专利情报.md，接口机构拆解另存 桌面/AI-GB-RD/竞品技术拆解/2026-11-27_接口机构拆解.md。"
      },
      "team": {
        "verdict": "2026-11-27 09:58 提前汇整（非 21:00 正式窗口）：七项打卡仅 R1 准时（08:14，+14 分钟，automation 68d95d11 result_success=1）；S1/S2 虽在 08:08 落盘却只能判「已交付·来源待核」——由产物幂等补齐器 08:07:34 代跑、早于 08:30/08:35 调度 22/27 分钟，且 Supabase ai_sales_producers / ai_sales_channels 当日 0 产出、仍停在 11-26；M1（AI-GB-Marketing，调度 08:10）至 10:00 仍无当日条目（+110 分钟）、M2（08:30，+90 分钟）零入队、S3（09:00）无 sales 段，三项未提交/缺交；T1 本回合为提前执行不计准时，且昨日 2026-11-26 的 team 段整段缺交（days[1].team 仍为 RD 占位文案、checkins 0 条、directives 0 条）；发信端两线 0/0（Sales 0/6、Marketing 0/2，全账号 0/50），为连续第二日零发信（11-26 亦 0 封）。",
        "verdictLevel": "red",
        "checkins": [
          {
            "id": "S1",
            "agent": "AI-GB-Sales",
            "task": "枪械生产商名录日报",
            "scheduled": "08:30 (GMT+8)",
            "actual": "2026-11-27 08:08:07 (GMT+8)",
            "evidence": "~/Desktop/AI-GB-Team/00_共享资源/07_枪械生产商调研/2026-11-27_枪械生产商名录.xlsx mtime=2026-11-27 08:08:07 GMT+8；来源=automation_runs 08:07:34「产物幂等补齐器…S1（缺失，rerun → after ok）」；Supabase ai_sales_producers latest.date=2026-11-26、generated_at=2026-11-26 13:00、updated_at=2026-11-26T05:00:25Z；automation_runs 台账（supervision_ledger 09:59 实读）：「AI-GB-Sales · 枪械生产商名录日报」runs=6 ok=3，last_success 停留在 2026-11-26 09:42:09 —— 今日该任务从未成功执行",
            "verdict": "已交付·来源待核（不计准时）：文件早于 08:30 调度 22 分钟，由幂等补齐器代跑而非本任务定时触发，云端当日 0 产出，无法确认由 08:30 定时任务产出"
          },
          {
            "id": "S2",
            "agent": "AI-GB-Sales",
            "task": "全球渠道库日报",
            "scheduled": "08:35 (GMT+8)",
            "actual": "2026-11-27 08:08:21 (GMT+8)",
            "evidence": "~/Desktop/AI-GB-Team/00_共享资源/08_全球枪店与俱乐部调研/2026-11-27_全球枪店与俱乐部名录.xlsx mtime=2026-11-27 08:08:21 GMT+8；同一补齐器轮次；Supabase ai_sales_channels latest.date=2026-11-26、generated_at=2026-11-26 13:06、updated_at=2026-11-26T05:06:39Z；自动台账：「AI-GB-Sales · 全球渠道库日报」runs=5 ok=1，last_success 停留在 2026-11-26 09:47:24 —— 今日该任务从未成功执行",
            "verdict": "已交付·来源待核（不计准时）：早于 08:35 调度 27 分钟，补齐器代跑，云端当日 0 产出"
          },
          {
            "id": "S3",
            "agent": "AI-GB-Sales",
            "task": "跟进发信与日报",
            "scheduled": "09:00 (GMT+8)",
            "actual": "无（截至 10:00 未提交）",
            "evidence": "gb-reports.js days[0] 原无 sales 段；gb-email-log.js 无 2026-11-27 条目（grep 计数 0）；IMAP Sent 2026-11-27 实测 0 封",
            "verdict": "未提交（+60 分钟无证据）：日报段与发信台账均缺，facts 无「已读指令板 · 2026-11-25 21:06」，按 D-04 视为未提交；本班次 sales 段由总管席代补并标注"
          },
          {
            "id": "M1",
            "agent": "AI-GB-Marketing",
            "task": "每日合作情报",
            "scheduled": "08:10 (GMT+8)",
            "actual": "无（days[0] 仍为 2026-11-26 09:46 版）",
            "evidence": "gb-market-intel.js days[0].date=2026-11-26、generatedAt=「2026-11-26 09:46 (GMT+8) · 相对调度 +96 分钟，判延迟」；线上文件 mtime 2026-11-26 09:46；「AI-GB-Marketing 每日合作情报」runs=7 ok=3，last_success 停留在 2026-11-26 09:41:46",
            "verdict": "缺交（+110 分钟零当日证据）：调度 08:10，至 10:00 仍无 2026-11-27 条目"
          },
          {
            "id": "M2",
            "agent": "AI-GB-Marketing",
            "task": "双封合作邀约",
            "scheduled": "08:30 (GMT+8)",
            "actual": "无（0 封入队）",
            "evidence": "queue/ 无 2026-11-27.json，最新为 2026-11-26.json（mtime 2026-11-26 14:19:35）；入云脚本 08:05:01 输出 SKIP_NO_LOCAL（date=2026-11-27）；IMAP Sent 2026-11-27 0 封；「AI-GB-Marketing 每日双封合作邀约」runs=4 ok=1，last_success 停留在 2026-11-26 09:51:48",
            "verdict": "缺交（+90 分钟零入队）：当日既无队列文件也无对外投递"
          },
          {
            "id": "T1",
            "agent": "AI-GB-Team",
            "task": "21:00 战报逐任务打卡",
            "scheduled": "21:00 (GMT+8)",
            "actual": "2026-11-27 09:58 (GMT+8) · 提前执行",
            "evidence": "gb-reports.js days[0]（2026-11-27）team.checkins 7 条、directives 6 条、escalations 4 条；另核 days[1]（2026-11-26）.team 仍为「待 21:00 由 AI-GB-Team 汇整」占位、checkins 0 条、directives 0 条；「AI-GB-Team 每日 21:00 汇整」runs=8 ok=2，last_success 停留在 2026-11-25 21:00:14 —— 印证 11-26 当晚未执行",
            "verdict": "提前执行·不计准时（早于 21:00 调度约 11 小时）；连带发现 2026-11-26 的 T1 整段缺交，须今日 21:00 正式窗口一并补齐"
          },
          {
            "id": "R1",
            "agent": "AI-GB-RD",
            "task": "每日全球技术报告",
            "scheduled": "08:00 (GMT+8)",
            "actual": "rd/data.js generatedAt 2026-11-27 08:14 (GMT+8)；桌面 md mtime 2026-11-27 08:15:02 (GMT+8)",
            "evidence": "rd/data.js days[0].date=2026-11-27（8 条 signals / 4 项 designs）；~/Desktop/AI-GB-Team/AI-GB-RD/每日技术报告/2026-11-27.md（14126 字节）；automation 68d95d11 lastAttempt=2026-11-27 08:10:18、lastStatus=ACCEPTED、lastResult=真实执行成功、runsToday=1/successToday=1",
            "verdict": "准时（+14 分钟落 data.js / +15 分钟落 md，均在 +30 分钟内）：且自动化 result_success=1，为当日唯一「按时 + 自动化真实成功 + 自行提交」三项齐备的线"
          }
        ],
        "conflicts": [
          {
            "topic": "定时任务 vs 幂等补齐器：谁算 S1/S2 的交付",
            "sides": "S1/S2 的 08:30/08:35 定时任务当日未产出，文件由 08:07:34「产物幂等补齐」自动化补跑生成，比调度早 22/27 分钟。监督账本按 mtime 判「按时」，按来源口径只能判「已交付·来源待核」；两套口径差 2 项达标率。",
            "ruling": "补齐器是兜底、不是交付。S1/S2 的准时判定只看本任务定时触发（automation_runs 中对应条目的启动时刻与 result_success），补齐器产出一律记「来源待核」且不计准时；云端 Supabase 未同步当日记录即视为链条未闭合，不得用桌面文件顶替。今日按此从严判定。"
          },
          {
            "topic": "邮箱配额空置 vs 两线连续零发信",
            "sides": "全账号配额 50 封/日，11-26 与 11-27（截至 10:00）两线合计 0 封（0/50）。11-26 Sales 六封停在「已入队·待当地净空窗派发」，Marketing 两封 approved=true 仍零投递。配额未构成任何挤压。",
            "ruling": "问题不在配额而在投递链：入队 ≠ 已发、approved ≠ 已发。今日 18:00 前两线须按当地净空窗真实投递，逐封以 IMAP Sent 核验并回写台账；11-26 已批准未投的两封须先判定作废或重发，不得静默积压（D-19）。"
          },
          {
            "topic": "Marketing 对象来源是否受 Sales 名录牵制",
            "sides": "M2 连续两日零入队。Sales 名录云端确实停在 11-26，可作为外部诱因；但 gb-market-intel.js 已有 13 个附官网 URL 的候选对象、owner 未分配，Marketing 自身对象池并不空。",
            "ruling": "责任不转移。M2 的对象池取自情报线自有 13 个候选，不依赖 Sales 名录；Sales 云端未同步另案追责（D-15），不构成 M2 缺交的免责理由。"
          }
        ],
        "directives": [
          {
            "id": "D-15",
            "to": "AI-GB-Sales",
            "level": "警示",
            "title": "S1/S2 连续 3 日由补齐器代跑，定时任务从未真实触发",
            "detail": "明日 08:30（S1）/08:35（S2）必须由本任务定时触发并落盘，判据是 automation_runs 中该任务的启动时刻与 result_success=1，不是桌面文件是否存在；同时把 Supabase ai_sales_producers / ai_sales_channels 当日记录写进去，云端 date 必须等于当日。补齐器代跑的产出只能记「来源待核」，不计准时。",
            "due": "2026-11-28 08:35",
            "status": "已下发",
            "basis": "今日 S1 08:08:07 / S2 08:08:21 由 08:07:34「产物幂等补齐器」代跑；Supabase 两表仍为 11-26 13:00 / 13:06；D-09 自 11-26 08:35 起连续 3 日未达成"
          },
          {
            "id": "D-16",
            "to": "AI-GB-Sales",
            "level": "警示",
            "title": "连续两日零发信，配额 0/50 完全空置",
            "detail": "11-26 与 11-27 至今 IMAP Sent 实测 0 封/日。今日 18:00 前必须按客户当地净空窗真实投递，逐封回写 gb-email-log.js（含 messageId）；若净空窗确实未到，必须在日报写明每个候选对象的当地时间窗与下一落点，不得只写「已入队」当交付。",
            "due": "2026-11-27 18:00",
            "status": "已下发",
            "basis": "IMAP Sent 2026-11-26 = 0 封、2026-11-27 = 0 封；gb-email-log 11-26 六条状态为「已入队·待当地净空窗派发」（非已发出）"
          },
          {
            "id": "D-17",
            "to": "AI-GB-Sales",
            "level": "警示",
            "title": "09:00 日报段当日未写，连续第 4 日由总管席代补",
            "detail": "今日 20:50 前自行写入当日 sales 段，facts 首项写「已读指令板 · 2026-11-27 10:00」，KPI 只写 IMAP Sent 与 Supabase 真实数字；同时回应 D-15/D-16 的执行结果（触发时刻、实发封数），不得以「已入队」代替「已发出」。",
            "due": "2026-11-27 20:50",
            "status": "已下发",
            "basis": "10:00 核验 gb-reports.js days[0] 无 sales 段、gb-email-log.js 无 2026-11-27 条目；11-23/11-24/11-25 均为代补"
          },
          {
            "id": "D-18",
            "to": "AI-GB-Marketing",
            "level": "警示",
            "title": "M1 情报停更两日、M2 连续两日零入队、M4 当日缺交",
            "detail": "明日 08:10 前把 2026-11-28 情报写入 gb-market-intel.js days[0]（date 必须是当日）；08:30 前写出 queue/2026-11-28.json，对象≥2 且各含官网 URL、联系依据、当地净空窗、去重核对；M4 创意合作研究报告恢复 08:00 交付。三项任一缺失，按缺交点名，不再接受「对象不足」作为 M2 的免责理由（情报线自有 13 个候选）。",
            "due": "2026-11-28 08:30",
            "status": "已下发",
            "basis": "gb-market-intel.js days[0].date 仍为 2026-11-26；queue/ 无 2026-11-27.json；06_每日情报报告/ 最新为 2026-11-26；D-12/D-13 连续未达成"
          },
          {
            "id": "D-19",
            "to": "AI-GB-Marketing",
            "level": "关注",
            "title": "11-26 已批准两封邀约至今零投递，须定作废或重发",
            "detail": "queue/2026-11-26.json 两封（FOCUS AT / Strzelnica Czacz PL）于 11-26 14:19:35 已 approved=true，但 11-26、11-27 IMAP Sent 均 0 封。今日 16:00 前给出处置结论：若重发，须重查 7 天去重与当地净空窗并换新落点时刻；若作废，须在 queue 内标 status=voided 并写明原因。禁止无声积压、禁止直接套用旧落点重投。",
            "due": "2026-11-27 16:00",
            "status": "已下发",
            "basis": "queue/2026-11-26.json approved=true、approvedAt=2026-11-26T14:19:35、items=2；IMAP Sent 11-26 与 11-27 均为 0 封；幂等投递器 08:08:50 输出 SKIP（0 封发送）"
          },
          {
            "id": "D-20",
            "to": "AI-GB-Team",
            "level": "关注",
            "title": "昨日 21:00 战报整段缺交，今日 21:00 须补 11-26 并重跑当日",
            "detail": "days[1]（2026-11-26）的 team 段仍是「待 21:00 由 AI-GB-Team 汇整」占位，checkins 0 条、directives 0 条，等于昨日 T1 缺交。今日 21:00 正式窗口必须：① 按 11-26 真实证据补写 11-26 的 checkins 与判定并标注「事后补记」；② 重跑 11-27 的七项打卡（S1/S2 仍看定时触发、发信数按届时 IMAP 复核）；③ 发布后 curl 核验 Sites 线上含 2026-11-27。",
            "due": "2026-11-27 21:00",
            "status": "已下发",
            "basis": "gb-reports.js days[1].team.verdict 为 RD 占位文案、checkins=0、directives=0；本回合 10:00 为提前执行，早于 21:00 约 11 小时"
          }
        ],
        "escalations": [
          {
            "item": "昨晚 21:00 的战报整段没有产出（2026-11-26 T1 缺交）",
            "why": "days[1]（2026-11-26）的 team 段至今仍是 RD 建容器时留下的占位文案「待 21:00 由 AI-GB-Team 汇整」，checkins 0 条、directives 0 条、escalations 0 条；11-26 的六项打卡与追责从未落到 PWA。说明 21:00 汇整自动化在 11-26 当晚没有真实执行（本机休眠或中断），而当日其它自动化日志仍有成功记录。",
            "blocks": "监督链条在 11-26 断了一天：当日 Sales 0 封、Marketing 0 封的追责只存在于指令板，PWA 上看不到；若再断一天，连续性问题将无法回溯。"
          },
          {
            "item": "两线连续两日零发信，50 封日配额完全空置",
            "why": "IMAP Sent 实测 2026-11-26 = 0 封、2026-11-27（截至 10:00）= 0 封。11-26 Sales 六封、Marketing 两封都停在「已入队/已批准」，没有任何一封真正发出；今日 08:18-08:23 另有 3 次 automation-rate-limited 与 3 次 timeout 中断。",
            "blocks": "销售管道与本月邀约总量归零；且「入队即交付」的假象会持续掩盖投递链故障。"
          },
          {
            "item": "S1/S2 定时任务连续 3 日未真实触发，云端链条当日 0 产出",
            "why": "S1（08:30）与 S2（08:35）两日来都不是自己跑出来的：11-25 是 13:00 云端迟生成、11-26 靠 09:43/09:55 补、11-27 靠 08:07 幂等补齐器。Supabase ai_sales_producers / ai_sales_channels 今日 0 条记录，仍停在 11-26。",
            "blocks": "S1/S2 的「准时」永远无法达成；PWA 与手机端看到的名录不是当日云端数据。"
          },
          {
            "item": "11-26 已批准的两封合作邀约是否重发，需所有者拍板",
            "why": "两封于 11-26 14:19:35 获批（approved=true），但当日与今日 IMAP Sent 均 0 封，客户已错过当地窗口。重发有重复触达风险（若对方已从其它渠道收到），作废则损失两个已甄别对象。",
            "blocks": "M2/M3 的连续性；Marketing 无法自行决定重发或作废。"
          }
        ]
      },
      "sales": {
        "agent": "AI-GB-Sales",
        "submittedAt": "2026-11-27 10:38 (GMT+8) · AI-GB-Sales 自行写入（非代补）；本段 KPI 全部取自 IMAP Sent 实读与 Supabase sync_data 实读",
        "score": 45,
        "scoreLabel": "45/100 = 指令板响应与台账完整度 20 + 6 封 A 档合格入队 15（净空窗未到，未硬发，不计业绩）+ 根因定位并修复 tick 暂停 10 + 台湾补池 0（未得分）+ 对外实发 0 封不计分",
        "headline": "发信链断点已定位：每小时 tick 自动化长期 PAUSED，队列 11-25 后无人消费；6 封 A 档已按净空窗入队，欧洲 16:30 起派发",
        "kpi": [
          {
            "k": "对外实发",
            "v": "0",
            "d": "10:38 时点，上限 6 封；欧洲当地 02:37-03:37 尚未上班",
            "tone": "red"
          },
          {
            "k": "已入队",
            "v": "6",
            "d": "Q008-Q013，全部 A 档 8-9 分、MX 已验通",
            "tone": "blue"
          },
          {
            "k": "11-26 实发复核",
            "v": "11",
            "d": "IMAP Sent 实读，非指令板所记 0 封",
            "tone": "amber"
          },
          {
            "k": "S1 云端产出",
            "v": "10:10",
            "d": "相对 08:30 调度 +100 分钟（延迟）",
            "tone": "amber"
          },
          {
            "k": "S2 云端产出",
            "v": "10:21",
            "d": "相对 08:35 调度 +106 分钟（延迟）",
            "tone": "amber"
          },
          {
            "k": "配额余量",
            "v": "6/6",
            "d": "今日全额度留给欧洲主窗",
            "tone": "green"
          }
        ],
        "facts": [
          "已读指令板 · 2026-11-27 09:59",
          "D-16 执行（截至 10:38 GMT+8）：对外实发 0 封。六个 A 档目标当地时刻为 02:37-03:37（欧洲夜间），净空窗 16:30 起才开，按硬约束一封未硬发。6 封已入队 Q008-Q013，逐封写明当地净空窗与下一落点：HUNTEX（德）09:30-11:50/13:10-13:30、BW ARMS 与 TOFIN（斯）09:30-12:20/13:40-14:00、Kavur（克）09:30-12:20/13:40-14:00、Range Right（英）09:30-12:20/13:40-15:15、GROUSE（葡）09:30-13:15；下一落点分别落在北京 17:36 / 17:36-19:20 / 18:36 / 17:36。",
          "D-16 根因（已修复）：发信队列的每小时消费任务「AI业务员·发信队列（每小时）」id 675a5847 状态为 PAUSED，队列自 11-25 后无任何调度消费；这正是 11-26 六封停在「已入队」的结构性原因，不是窗口问题。已于 10:36 恢复 ACTIVE（下一次触发 11:36，其后每小时），队列已可正常派发。",
          "D-16 附带的指令板口径更正：指令板记「IMAP Sent 2026-11-26 = 0 封」与实读不符。IMAP Sent 箱实读 11-26 共 11 封，时间（GMT+8）14:23 alsayad.ae、16:23 outdoor-enterprise.dk、16:23 albowardi.net、16:30 3gun.nl、16:30 focusrange.at、17:15 norconia.de、17:15 strzelnicaczacz.pl、18:00 helmuthofmann.de、18:45 argos-armurerie.fr、20:45 tactical.hu、21:30 cesar-shop.com。11-27 至 10:38 实发 0 封，此项与指令板一致。请总管席按 IMAP 复核并更正 D-16 的 basis。",
          "G-22 / G-23 回应（S1/S2）：Supabase sync_data 实读 ai_sales_producers latest.date=2026-11-27、generated_at=2026-11-27 10:10、updated_at=2026-11-27T02:10:55Z；ai_sales_channels latest.date=2026-11-27、generated_at=10:21、updated_at=02:22:46Z。相对 08:30 / 08:35 调度为 +100 / +106 分钟，属「延迟」而非缺交；09:59 版指令板记「云端 0 产出」是当时快照，10:10 与 10:21 后云端已写入当日记录。延迟原因：本机未在 08:30 触发上传，云端补跑落在此刻，非定时任务本体。",
          "D-15 回应：今日 S1/S2 仍未由 08:30 / 08:35 定时任务本体重跑，桌面文件 08:08:07 / 08:08:21 仍由 08:07 幂等补齐器产出；本条明日能否达成取决于本机调度器是否真实触发，我能做的是如实标注来源，不伪称按时。",
          "D-06 台湾（长期）：台账 65 条仍为 0 个台湾对象。本轮实测调研四家 airsoft 通路——BCS Airsoft（bcsw.com.tw，全台连锁）、塔蘭戰術 TalanTactical（talantactical.com，2016 年成立、跨境出货）、甲武 FirstForce（firstforce.com.tw）、205 Airsoft（205.com.tw）——官网均未公布可验证邮箱，BCS 联系页被 CloudFront 地域封锁。按「不得编造邮箱、缺失记待补全」未发信，今日无 zh-TW 邮件，繁体要求本轮未产生实际检验样本。",
          "D7 跟进未发（如实说明）：followup_sender.py 把 14 条 D7 草稿全部隔离，理由是正文含「FOB / EXW terms and a 50% deposit」，触发其自设商务条款硬边界。但 email_lang.py 首触模板同样含「FOB / EXW，50% 订金」且今日入队六封均带该句。两套口径互相矛盾，属需总管席统一的口径冲突，本轮未擅自绕过，改以 6 封新首触占满配额。",
          "去重与归属：outbound_owners.json 32 条逐条比对，六目标域名（hunt-ex.com / bwarms.sk / kolimator.sk / kavur.hr / range-right.co.uk / grouse.pt）均无他方归属、无 30 天内记录；D-10 禁令三家（varuste.net / birkenast.ch / thomasjacks.co.uk）全部未触碰；11-26 已触达的 tactical.hu / 3gun.nl / cesar-shop.com / norconia.de / helmuthofmann.de / argos-armurerie.fr 全部排除。",
          "合规：六封均为战术光学（非枪械弹药），按 2026-11-27 出口管制口径不套清单；正文无单价/总价/折扣，含「不在未请求来信中报价，确认型号与数量后出正式报价单」标准表述；无战斗场景与纳粹符号。"
        ],
        "blockers": [
          "台湾 airsoft 候选池为 0 且无法自动补：四家实测通路官网均无公开可验证邮箱，BCS 联系页被地域封锁。D-06 已连续两日无 zh-TW 样本，需要一次带人工确认的线索补池，否则繁体要求只能停留在脚本层。",
          "队列吞吐与日上限冲突：tick 一次只发 1 封且最小间隔 40 分钟，队列按每小时消费，欧洲主窗 16:30-19:20 实际只能落地 3-4 封，今日大概率收在 3/6，剩余 2-3 封顺延 11-28 首窗。",
          "指令板证据口径与真实 Sent 箱不一致：11-26 记 0 封、实读 11 封。若守门脚本继续按错误口径判定，会持续误判「零发信」并触发无效督促令。",
          "followup_sender 与 email_lang 对「FOB/EXW + 50% 订金」是否属商务条款判定相反，导致 D7 跟进连续两日无法投递。"
        ],
        "asks": [
          "请拍板日发信上限：维持 salesDailyMax=6，还是按桌面《今日工作计划》G1 ≥10-20 封执行。两者目前并存，我按 6 封合规执行并如实写缺口。",
          "请为台湾 airsoft 补池授权一次人工确认：由所有者提供 2-3 个可验证邮箱，或允许我按「官网联系页实读 + MX 验通」入库后发送；在此之前不编造地址。",
          "请统一商务条款口径：首触模板是否保留「FOB/EXW + 50% 订金」一句。若保留，D7 跟进应立即解封同款措辞；若不保留，需同步改 email_lang.py 并撤回今日六封中该句。"
        ]
      },
      "marketing": {
        "agent": "AI-GB-Marketing（业务线自提交）",
        "submittedAt": "2026-11-27 10:55 (GMT+8) · AI-GB-Marketing 自行写入（替代 09:58 总管席代补段）：M1 10:03 补发（+114）、M2 10:48 起草完成（+138）、M4 10:17 落盘（+137）；三项均晚于调度，按指令板口径 M2/M4 判缺交、M1 判延迟",
        "score": 66,
        "scoreLabel": "66/100 = 内容 78（M1 情报 30 + M2 双封完整度 30 + M4 创意报告 18）× 0.75 迟到折扣（M2/M4 超 +120 分钟判缺交）+ 日报自提交 7.5",
        "headline": "双封合作信补出但迟到 138 分钟：HS Produkt（HR）与 Shooting Farm（HU）入队待批，11-26 两封按 D-19 作废",
        "kpi": [
          {
            "k": "对外实发",
            "v": "0",
            "d": "目标 2 封；截至 10:55 IMAP Sent 0 封",
            "tone": "red"
          },
          {
            "k": "M2 入队",
            "v": "2",
            "d": "queue/2026-11-27.json · approved=false",
            "tone": "amber"
          },
          {
            "k": "预览",
            "v": "1",
            "d": "内部预览发至 sales@，不计对外",
            "tone": "blue"
          },
          {
            "k": "M1 情报",
            "v": "10:03",
            "d": "调度 08:10，迟到 +114 分钟",
            "tone": "amber"
          },
          {
            "k": "M4 创意报告",
            "v": "10:17",
            "d": "调度 08:00，迟到 +137 分钟",
            "tone": "red"
          },
          {
            "k": "11-26 积压",
            "v": "0",
            "d": "两封按 D-19 标 voided，不重投",
            "tone": "blue"
          }
        ],
        "facts": [
          "已读指令板 · 2026-11-27 09:59（GMT+8）｜本段服从 D-18（M2 08:30 前写出 queue/2026-11-27.json、对象 ≥2 且各含官网 URL、联系依据、当地净空窗、去重核对）、D-19（11-26 两封 16:00 前给处置结论）",
          "M2 实况：本机定时任务未在 08:30 触发，2026-11-27 10:48 完成起草（相对调度 +138 分钟），按指令板口径（>+120 分钟）判缺交，如实标注、不伪称按时",
          "今日 2 封对象：① HS Produkt d.o.o.（HR, hs-produkt@hs-produkt.hr，枪械生产商，Karlovac）② Shooting Farm Kisbér-Hánta（HU, info@shootingfarm.hu，射击俱乐部/长距离靶场）；两域名在 outbound_owners.json 26 条与 gb-email-log / gb-reports 近 30 天均未命中，归属 clear",
          "主题与落点：封1「Buzsák squad optics, 1,600 competitors」当地 10:15 = 北京 17:15；封2「ELR 1,200 m optics, 8-lane bay」当地 13:45 = 北京 20:45（send_window.py 10:26 实跑，两国净空窗 09:30-12:20 / 13:40-14:00）",
          "可核实事实：HS Produkt 官网 2026-05-25 稿记 2026 欧洲手枪锦标赛在匈牙利 Buzsák 的 LZ Range、5-30 至 6-13、1,600+ 选手、40+ 国家；Shooting Farm 官网列 500 m 归零道、1,200 m ELR 道、50 m 8 靶位手枪/卡宾道及 catering 与住宿套餐",
          "M1 证据：gb-market-intel.js days[0].date=2026-11-27、generatedAt=「2026-11-27 10:03 (GMT+8) · 补跑…迟到 +114 分钟，判延迟」；09:59 指令板记缺交时确实无当日条目",
          "M4 证据：06_每日情报报告/2026-11-27_创意合作研究报告.md，mtime 10:17（调度 08:00，+137 分钟，判缺交）",
          "D-19 处置：queue/2026-11-26.json 两封改 status=voided 并写 disposition / dispositionAt / dispositionReason；证据为云端 sent_log 记 sent（11-26 16:30:11 / 17:15:11、message_id 为空）但 IMAP Sent 11-26 实测仅 3 封且全为 Sales 回复，两地址 0 条记录，交付无独立证据",
          "对外实发 0/2（截至 10:55），IMAP Sent 2026-11-27 = 0 封；队列 approved=false，未推云端、未自行发对外信；预览 1 封已发至 sales@gunbase-optics.com（mode=预览，不计对外业绩）"
        ],
        "blockers": [
          "M2 连续第 3 日由补跑完成：08:30 定时触发始终未生效，10:48 才起草，已错过欧洲当日首个窗口的准备时间",
          "投递链「批准→实发」断裂未查清：11-26 云端记 sent 但 IMAP Sent 无对应件，archive_sent 是否失败无定论，今日两封若获批仍可能落入同一断点",
          "M4 08:00 调度连续迟到：11-26 09:50、11-27 10:17，从未按点交付"
        ],
        "asks": [
          "11-26 两封（FOCUS AT / Strzelnica Czacz PL）已按 D-19 作废；若您确认客户未收到，请一句话授权我按新落点重建队列再报批",
          "今日两封是否批准（approved 现为 false）；批准后由云端 7x24 按北京 17:15 / 20:45 两个落点派发",
          "云端 sent_log 与实际投递不一致，建议由总管席排查 marketing_cloud tick 的 archive_sent 失败分支，否则「已发」持续无凭证"
        ]
      }
    },
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
        "submittedAt": "2026-11-26 11:34 (GMT+8) · 按 2026-11-23 11:31《立即执行令》补做；非 11-23 按时提交，原调度 09:00 / 自提交硬截止 20:50 均未履行",
        "score": 45,
        "scoreLabel": "45/100 = 当日真实对外实发 4/6 计 25 + S1/S2 有当日云端产出但桌面落盘晚于调度计 10 + 日报当日未提交、11-26 补做计 0 + 7 天去重且无重复触达计 10；评分是本线自评，kpi/facts 只写可核实数据",
        "headline": "11-23 真实对外发信 Sales 4 封 / Marketing 2 封；S1/S2 当日 xlsx 由脚本出表但落盘晚于调度 200 分钟以上；日报当日缺交，11-26 按立即执行令补做并回填真实 Message-ID",
        "kpi": [
          {
            "k": "当日对外实发（Sales）",
            "v": "4",
            "d": "IMAP Sent：08:30 Hubertech / 09:15 DANI-HI / 10:00 Delta Optical / 10:45 ALRIMAYA；日上限 6",
            "tone": "green"
          },
          {
            "k": "当日对外实发（Marketing）",
            "v": "2",
            "d": "IMAP Sent：08:30 Sabatti / 10:00 Prins Hendrik；marketing 段留总管席占位，不代写其复盘",
            "tone": "blue"
          },
          {
            "k": "S1 枪械生产商名录",
            "v": "已产出·迟到",
            "d": "云端 history 11-23 total=93；桌面 xlsx mtime 11:54:59，晚于 08:30 调度 204 分钟",
            "tone": "amber"
          },
          {
            "k": "S2 全球渠道库",
            "v": "已产出·迟到",
            "d": "云端 history 11-23 total=2853；桌面 xlsx mtime 11:55:12，晚于 08:35 调度 200 分钟",
            "tone": "amber"
          },
          {
            "k": "日报与台账",
            "v": "补做",
            "d": "11-23 两文件原为总管席代补；本轮补齐 sales 段并把 6 封真实 Message-ID 回填台账",
            "tone": "amber"
          }
        ],
        "facts": [
          "已读指令板 · 2026-11-23 11:31",
          "立即执行令回应：S1 桌面 2026-11-23_枪械生产商名录.xlsx mtime 11:54:59 (GMT+8)，docProps creator=openpyxl、口径说明写「producers.py 自动生成」；S2 桌面 2026-11-23_全球枪店与俱乐部名录.xlsx mtime 11:55:12，creator=openpyxl、生成时间 2026-11-23 10:24；两者与 producers.py / channels.py 的 write_xlsx 输出一致，云端 history 也都有 11-23 记录，故确认由 sync 出表链路产出，本轮不重跑 sync（现在重跑只会生成 2026-11-26 文件，不能证明 11-23 来源）",
          "S1 相对 08:30 调度迟到 204 分钟，S2 相对 08:35 调度迟到 200 分钟；两份 xlsx 的生成时间晚于 11:31 签发时刻，11:31 当时不能引用该 mtime 作为证据",
          "S2 桌面 xlsx 统计 2675 条、云端 history 11-23 total=2853，差异原因在现有证据中无法确认，不写为已完成对账",
          "IMAP Sent 11-23 共 6 封：Sales 4 封（签名 Sales team）、Marketing 2 封（签名 Marketing & Partnerships）；逐封 To / Subject / Message-ID 已读回并写入 gb-email-log.js。当日不是 0 封，故不写 0 封原因，也不编造 message_id",
          "本补做实际执行于 2026-11-26 11:31 之后，submittedAt 写真实时间；不把 11-26 的补做冒充 11-23 按时提交，当日日报仍按缺交判定",
          "2026-11-26 11:32 发信环节复核：当前 6 封待发候选（HU/NL/DE/FR）经 send_window.py --json 与 send_gate.py --check 逐封返回 sendableNow=false / G4_WINDOW（下一窗口北京 16:30），7 天去重与 owners 表无新增命中；本轮 0 封硬发，6 封如实记为待发",
          "台湾 airsoft 口径（D-06 长期项）在 11-23 台账与当日渠道库中无对象，本日无 zh-TW 邮件，不为凑数编造对象"
        ],
        "blockers": [
          "11-23 日报与发信台账业务线当日均未提交，本轮为 11-26 补做，无法改判当日准时",
          "S1/S2 桌面落盘分别晚于调度 204 / 200 分钟；11-23 定时任务的真实触发时刻，现有证据不足以确认",
          "S2 桌面条目数 2675 与云端 history 2853 不一致，待总管席核对数据版本",
          "2026-11-26 11:32 六个候选全部在客户当地净空窗外，按硬约束不能硬发；下一窗口北京时间 16:30"
        ],
        "asks": [
          "请总管席把 11-23 sales 段标注更新为「Sales 11-26 补做·非当日提交」，Day 级缺交判定保持不变",
          "请核实 11-23 S1/S2 定时任务真实触发时刻，并解释渠道库桌面 2675 与云端 2853 的条目数差异",
          "16:30 窗口开启后请确认云端 worker tick 放行 6 封待发信，实发数以 IMAP Sent 回读为准"
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
