// 由 supervision_ledger.py 自动生成，数据源：automation_runs + IMAP Sent
window.GB_SUPERVISION = {
  "generatedAt": "2026-11-28T10:48:13.400592+08:00",
  "source": "workbuddy.db automation_runs + IMAP Sent（脚本直读，非人工填写）",
  "automations": [
    {
      "name": "AI GB-Team · 产物幂等补齐（每2小时·产物缺才补跑·解耦 agent 中断）",
      "status": "ACTIVE",
      "last_success": "2026-11-28 08:11:28",
      "last_attempt": "2026-11-28 08:11:28",
      "next_run": "2026-11-28 10:14:34",
      "runs": 10,
      "successes": 10,
      "verdict": "已验证",
      "manual": null
    },
    {
      "name": "AI GB-Team · 今日邀约补投（16:35·窗口刚开·只投已批准两封）",
      "status": "ACTIVE",
      "last_success": "2026-11-26 16:35:14",
      "last_attempt": "2026-11-26 16:35:14",
      "next_run": null,
      "runs": 1,
      "successes": 1,
      "verdict": "已验证",
      "manual": null
    },
    {
      "name": "AI GB-Team · 发信能力预测（每日07:30·提前6小时预警缺口）",
      "status": "ACTIVE",
      "last_success": "2026-11-28 08:18:41",
      "last_attempt": "2026-11-28 08:18:41",
      "next_run": "2026-11-29 07:30:00",
      "runs": 2,
      "successes": 2,
      "verdict": "已验证",
      "manual": null
    },
    {
      "name": "AI GB-Team · 回信入口扫描（每2小时·只生成草稿绝不发信）",
      "status": "ACTIVE",
      "last_success": "2026-11-28 09:08:31",
      "last_attempt": "2026-11-28 09:08:31",
      "next_run": "2026-11-28 11:12:47",
      "runs": 11,
      "successes": 11,
      "verdict": "已验证",
      "manual": {
        "at": "2026-11-26 11:29:53",
        "status": "ACCEPTED",
        "failure_code": null,
        "real": "真实执行成功",
        "cwd": "/Users/chenbangjie/.workbuddy/gunbase-sales-bot"
      }
    },
    {
      "name": "AI GB-Team · 地址预检缓存刷新（每日09:00·只验不发）",
      "status": "ACTIVE",
      "last_success": "2026-11-27 10:39:59",
      "last_attempt": "2026-11-28 09:17:51",
      "next_run": "2026-11-29 09:00:00",
      "runs": 4,
      "successes": 3,
      "verdict": "已验证",
      "manual": {
        "at": "2026-11-26 14:22:46",
        "status": "ACCEPTED",
        "failure_code": null,
        "real": "真实执行成功",
        "cwd": "/Users/chenbangjie/.workbuddy/gunbase-sales-bot"
      }
    },
    {
      "name": "AI GB-Team · 已发内容指纹刷新（每日11:30·只读取Sent不发信）",
      "status": "ACTIVE",
      "last_success": "2026-11-27 11:30:24",
      "last_attempt": "2026-11-27 11:30:24",
      "next_run": "2026-11-28 11:30:00",
      "runs": 1,
      "successes": 1,
      "verdict": "已验证",
      "manual": null
    },
    {
      "name": "AI GB-Team · 投递失败清单每日刷新（21:05 · 重扫收件箱 + 发布 PWA）",
      "status": "ACTIVE",
      "last_success": "2026-11-27 21:12:10",
      "last_attempt": "2026-11-27 21:12:10",
      "next_run": "2026-11-28 21:05:00",
      "runs": 1,
      "successes": 1,
      "verdict": "已验证",
      "manual": null
    },
    {
      "name": "AI GB-Team · 日报兜底代补（20:40 · 业务线未交即按真实证据补 · 不留空白）",
      "status": "ACTIVE",
      "last_success": "2026-11-27 21:09:38",
      "last_attempt": "2026-11-27 21:09:38",
      "next_run": "2026-11-28 20:40:00",
      "runs": 5,
      "successes": 3,
      "verdict": "已验证",
      "manual": {
        "at": "2026-11-25 10:02:04",
        "status": "CANCELLED",
        "failure_code": "automation-run-released",
        "real": "结果未知(CANCELLED)",
        "cwd": "/Users/chenbangjie/.workbuddy/gunbase-sales-bot"
      }
    },
    {
      "name": "AI GB-Team · 每日事实板生成（每2小时·直读原始源）",
      "status": "ACTIVE",
      "last_success": "2026-11-28 09:12:51",
      "last_attempt": "2026-11-28 09:12:51",
      "next_run": "2026-11-28 11:17:48",
      "runs": 11,
      "successes": 11,
      "verdict": "已验证",
      "manual": {
        "at": "2026-11-26 11:30:01",
        "status": "ACCEPTED",
        "failure_code": null,
        "real": "真实执行成功",
        "cwd": "/Users/chenbangjie/.workbuddy/gunbase-sales-bot"
      }
    },
    {
      "name": "AI GB-Team · 每日发信督促（18:00·真实IMAP·未达标即下令）",
      "status": "ACTIVE",
      "last_success": "2026-11-27 20:42:29",
      "last_attempt": "2026-11-27 20:42:29",
      "next_run": "2026-11-28 18:00:00",
      "runs": 6,
      "successes": 3,
      "verdict": "已验证",
      "manual": {
        "at": "2026-11-25 10:13:29",
        "status": "CANCELLED",
        "failure_code": "automation-run-released",
        "real": "结果未知(CANCELLED)",
        "cwd": "/Users/chenbangjie/.workbuddy/gunbase-sales-bot"
      }
    },
    {
      "name": "AI GB-Team · 草稿自动入云端（每30分钟·审批状态绝不改）",
      "status": "ACTIVE",
      "last_success": "2026-11-28 08:27:20",
      "last_attempt": "2026-11-28 09:38:02",
      "next_run": "2026-11-28 09:31:58",
      "runs": 20,
      "successes": 19,
      "verdict": "已验证",
      "manual": {
        "at": "2026-11-26 11:29:45",
        "status": "ACCEPTED",
        "failure_code": null,
        "real": "真实执行成功",
        "cwd": "/Users/chenbangjie/.workbuddy/gunbase-sales-bot/gunbase-cloud-worker"
      }
    },
    {
      "name": "AI GB-Team · 跟进草稿安全投递（每2小时·商务条款隔离·闸门放行才投）",
      "status": "ACTIVE",
      "last_success": "2026-11-28 08:42:50",
      "last_attempt": "2026-11-28 08:42:50",
      "next_run": "2026-11-28 10:52:55",
      "runs": 9,
      "successes": 9,
      "verdict": "已验证",
      "manual": {
        "at": "2026-11-26 14:22:52",
        "status": "ACCEPTED",
        "failure_code": null,
        "real": "真实执行成功",
        "cwd": "/Users/chenbangjie/.workbuddy/gunbase-sales-bot"
      }
    },
    {
      "name": "AI GB-Team · 达成率守门①（12:10 · 独立证据源 · 缺交即下令）",
      "status": "ACTIVE",
      "last_success": "2026-11-27 12:10:28",
      "last_attempt": "2026-11-27 12:10:28",
      "next_run": "2026-11-28 12:10:00",
      "runs": 4,
      "successes": 3,
      "verdict": "已验证",
      "manual": {
        "at": "2026-11-24 21:02:28",
        "status": "ACCEPTED",
        "failure_code": "automation-workspace-unavailable",
        "real": "真实失败·工作目录错误",
        "cwd": "[\"/Users/chenbangjie/.workbuddy/gunbase-sales-bot\"]"
      }
    },
    {
      "name": "AI GB-Team · 达成率守门②（18:10 · 独立证据源 · 缺交即下令）",
      "status": "ACTIVE",
      "last_success": "2026-11-27 20:49:16",
      "last_attempt": "2026-11-27 20:49:16",
      "next_run": "2026-11-28 18:10:00",
      "runs": 4,
      "successes": 3,
      "verdict": "已验证",
      "manual": {
        "at": "2026-11-24 21:02:28",
        "status": "ACCEPTED",
        "failure_code": "automation-workspace-unavailable",
        "real": "真实失败·工作目录错误",
        "cwd": "[\"/Users/chenbangjie/.workbuddy/gunbase-sales-bot\"]"
      }
    },
    {
      "name": "AI GB-Team · 达成率守门③（21:10 · 战报终局核对 · 缺交即下令）",
      "status": "ACTIVE",
      "last_success": "2026-11-27 21:14:14",
      "last_attempt": "2026-11-27 21:14:14",
      "next_run": "2026-11-28 21:10:00",
      "runs": 7,
      "successes": 3,
      "verdict": "已验证",
      "manual": {
        "at": "2026-11-25 20:35:57",
        "status": "ACCEPTED",
        "failure_code": null,
        "real": "真实执行成功",
        "cwd": "/Users/chenbangjie/.workbuddy/gunbase-sales-bot"
      }
    },
    {
      "name": "AI GB-Team · 退信当日闭环（每2小时·发现即定性/补发/告知）",
      "status": "ACTIVE",
      "last_success": "2026-11-28 08:31:58",
      "last_attempt": "2026-11-28 08:31:58",
      "next_run": "2026-11-28 10:39:54",
      "runs": 17,
      "successes": 14,
      "verdict": "已验证",
      "manual": {
        "at": "2026-11-24 21:02:28",
        "status": "ACCEPTED",
        "failure_code": "automation-workspace-unavailable",
        "real": "真实失败·工作目录错误",
        "cwd": "[\"/Users/chenbangjie/.workbuddy/gunbase-sales-bot\"]"
      }
    },
    {
      "name": "AI-GB-Marketing 幂等兜底（每小时·漏投补位·审批状态绝不自动改）",
      "status": "ACTIVE",
      "last_success": "2026-11-28 08:39:54",
      "last_attempt": "2026-11-28 08:39:54",
      "next_run": "2026-11-28 09:52:21",
      "runs": 21,
      "successes": 20,
      "verdict": "已验证",
      "manual": {
        "at": "2026-11-26 11:00:29",
        "status": "ACCEPTED",
        "failure_code": null,
        "real": "真实执行成功",
        "cwd": "/Users/chenbangjie/.workbuddy/gunbase-sales-bot/gunbase-cloud-worker"
      }
    },
    {
      "name": "AI-GB-Marketing 幂等投递①（北京17:20 · 当地10:15 落点）",
      "status": "ACTIVE",
      "last_success": "2026-11-27 17:20:13",
      "last_attempt": "2026-11-27 17:20:13",
      "next_run": "2026-11-28 17:20:00",
      "runs": 4,
      "successes": 3,
      "verdict": "已验证",
      "manual": {
        "at": "2026-11-26 10:58:38",
        "status": "ACCEPTED",
        "failure_code": null,
        "real": "真实执行成功",
        "cwd": "/Users/chenbangjie/.workbuddy/gunbase-sales-bot/gunbase-cloud-worker"
      }
    },
    {
      "name": "AI-GB-Marketing 幂等投递②（北京20:50 · 当地13:45 落点）",
      "status": "ACTIVE",
      "last_success": "2026-11-27 20:50:16",
      "last_attempt": "2026-11-27 20:50:16",
      "next_run": "2026-11-28 20:50:00",
      "runs": 4,
      "successes": 2,
      "verdict": "已验证",
      "manual": {
        "at": "2026-11-26 10:58:51",
        "status": "ACCEPTED",
        "failure_code": null,
        "real": "真实执行成功",
        "cwd": "/Users/chenbangjie/.workbuddy/gunbase-sales-bot/gunbase-cloud-worker"
      }
    },
    {
      "name": "AI-GB-Marketing 幂等投递③（北京09:30 · 美加/澳洲上午）",
      "status": "ACTIVE",
      "last_success": "2026-11-27 10:32:58",
      "last_attempt": "2026-11-27 10:32:58",
      "next_run": "2026-11-28 09:30:00",
      "runs": 3,
      "successes": 2,
      "verdict": "已验证",
      "manual": {
        "at": "2026-11-26 10:59:05",
        "status": "ACCEPTED",
        "failure_code": null,
        "real": "真实执行成功",
        "cwd": "/Users/chenbangjie/.workbuddy/gunbase-sales-bot/gunbase-cloud-worker"
      }
    },
    {
      "name": "AI-GB-Marketing 幂等投递④（北京11:00 · 美加/澳洲上午）",
      "status": "ACTIVE",
      "last_success": "2026-11-27 11:00:24",
      "last_attempt": "2026-11-27 11:00:24",
      "next_run": "2026-11-28 11:00:00",
      "runs": 4,
      "successes": 3,
      "verdict": "已验证",
      "manual": {
        "at": "2026-11-26 10:59:39",
        "status": "ACCEPTED",
        "failure_code": null,
        "real": "真实执行成功",
        "cwd": "/Users/chenbangjie/.workbuddy/gunbase-sales-bot/gunbase-cloud-worker"
      }
    },
    {
      "name": "AI-GB-Marketing 每日创意合作研究报告（北京08:00）",
      "status": "ACTIVE",
      "last_success": "2026-11-28 08:16:51",
      "last_attempt": "2026-11-28 08:16:51",
      "next_run": "2026-11-29 08:00:00",
      "runs": 3,
      "successes": 3,
      "verdict": "已验证",
      "manual": null
    },
    {
      "name": "AI-GB-Marketing 每日双封合作邀约",
      "status": "ACTIVE",
      "last_success": "2026-11-28 08:52:55",
      "last_attempt": "2026-11-28 08:52:55",
      "next_run": "2026-11-29 08:30:00",
      "runs": 6,
      "successes": 3,
      "verdict": "已验证",
      "manual": null
    },
    {
      "name": "AI-GB-Marketing 每日合作情报（早间调研 + PWA 发布）",
      "status": "ACTIVE",
      "last_success": "2026-11-28 08:24:36",
      "last_attempt": "2026-11-28 08:24:36",
      "next_run": "2026-11-29 08:10:00",
      "runs": 8,
      "successes": 5,
      "verdict": "已验证",
      "manual": {
        "at": "2026-11-25 15:49:49",
        "status": "ACCEPTED",
        "failure_code": null,
        "real": "真实执行成功",
        "cwd": "/Users/chenbangjie/WorkBuddy/automation-2026-11-23-09-46-43"
      }
    },
    {
      "name": "AI-GB-RD 每日全球技术报告（早08:00·技术扫描+图纸储备+PWA发布）",
      "status": "ACTIVE",
      "last_success": "2026-11-28 08:38:20",
      "last_attempt": "2026-11-28 08:38:20",
      "next_run": "2026-11-29 08:00:00",
      "runs": 6,
      "successes": 3,
      "verdict": "已验证",
      "manual": {
        "at": "2026-11-24 00:32:23",
        "status": "ACCEPTED",
        "failure_code": null,
        "real": "真实失败·interrupted",
        "cwd": "/Users/chenbangjie/WorkBuddy/2026-11-20-13-47-04/ai-gb-hub"
      }
    },
    {
      "name": "AI-GB-Sales · 全球渠道库日报（Excel）",
      "status": "ACTIVE",
      "last_success": "2026-11-28 08:57:35",
      "last_attempt": "2026-11-28 08:57:35",
      "next_run": "2026-11-29 08:35:00",
      "runs": 7,
      "successes": 3,
      "verdict": "已验证",
      "manual": null
    },
    {
      "name": "AI-GB-Sales · 枪械生产商名录日报（Excel）",
      "status": "ACTIVE",
      "last_success": "2026-11-28 08:53:37",
      "last_attempt": "2026-11-28 08:53:37",
      "next_run": "2026-11-29 08:30:00",
      "runs": 7,
      "successes": 5,
      "verdict": "已验证",
      "manual": {
        "at": "2026-11-25 16:31:31",
        "status": "ACCEPTED",
        "failure_code": null,
        "real": "真实执行成功",
        "cwd": "/Users/chenbangjie/.workbuddy/gunbase-sales-bot/gunbase-cloud-worker"
      }
    },
    {
      "name": "AI-GB-Sales 每日跟进发信与日报",
      "status": "ACTIVE",
      "last_success": "2026-11-28 09:10:26",
      "last_attempt": "2026-11-28 09:10:26",
      "next_run": "2026-11-29 09:00:00",
      "runs": 8,
      "successes": 3,
      "verdict": "已验证",
      "manual": null
    },
    {
      "name": "AI-GB-Team 每日 21:00 汇整与监督指令（逐任务打卡版）",
      "status": "ACTIVE",
      "last_success": "2026-11-27 21:00:13",
      "last_attempt": "2026-11-27 21:00:13",
      "next_run": "2026-11-28 21:00:00",
      "runs": 9,
      "successes": 4,
      "verdict": "已验证",
      "manual": {
        "at": "2026-11-23 17:04:59",
        "status": "ACCEPTED",
        "failure_code": null,
        "real": "真实失败·interrupted",
        "cwd": "/Users/chenbangjie/WorkBuddy/2026-11-20-13-47-04/ai-gb-hub"
      }
    },
    {
      "name": "AI业务员·发信队列（每小时·按客户当地工作时段·防漏发）",
      "status": "ACTIVE",
      "last_success": "2026-11-28 08:08:08",
      "last_attempt": "2026-11-28 08:08:08",
      "next_run": "2026-11-28 09:10:48",
      "runs": 15,
      "successes": 13,
      "verdict": "已验证",
      "manual": null
    },
    {
      "name": "AI业务员·台账对齐（每2小时·Sent回执→线索CSV+发信台账+PWA邮箱台账）",
      "status": "ACTIVE",
      "last_success": "2026-11-28 08:55:58",
      "last_attempt": "2026-11-28 08:55:58",
      "next_run": "2026-11-28 10:59:04",
      "runs": 28,
      "successes": 17,
      "verdict": "已验证",
      "manual": null
    },
    {
      "name": "AI业务员·客户回信检测（每小时·发现即告知·简单回复自主发送并告知）",
      "status": "ACTIVE",
      "last_success": "2026-11-28 08:59:05",
      "last_attempt": "2026-11-28 08:59:05",
      "next_run": "2026-11-28 10:08:26",
      "runs": 39,
      "successes": 28,
      "verdict": "已验证",
      "manual": {
        "at": "2026-11-24 19:32:28",
        "status": "ACCEPTED",
        "failure_code": null,
        "real": "真实失败·interrupted",
        "cwd": "/Users/chenbangjie/.workbuddy/gunbase-sales-bot"
      }
    },
    {
      "name": "AI业务员·跟进序列（每日09:00·D3/D7/D14自动生成并发送）",
      "status": "ACTIVE",
      "last_success": "2026-11-27 10:40:39",
      "last_attempt": "2026-11-28 10:47:55",
      "next_run": "2026-11-28 09:00:00",
      "runs": 9,
      "successes": 2,
      "verdict": "已验证",
      "manual": null
    },
    {
      "name": "AI业务员每日工作计划（早08:00·云端免开机）",
      "status": "ACTIVE",
      "last_success": "2026-11-28 08:17:50",
      "last_attempt": "2026-11-28 08:17:50",
      "next_run": "2026-11-29 08:00:00",
      "runs": 17,
      "successes": 10,
      "verdict": "已验证",
      "manual": {
        "at": "2026-11-18 13:48:08",
        "status": "ACCEPTED",
        "failure_code": null,
        "real": "真实执行成功",
        "cwd": "/Users/chenbangjie/WorkBuddy/automation-2026-11-16-23-47-55"
      }
    },
    {
      "name": "AI业务员每日执行成效复盘（晚21:00·云端免开机）",
      "status": "ACTIVE",
      "last_success": "2026-11-27 21:00:18",
      "last_attempt": "2026-11-27 21:00:18",
      "next_run": "2026-11-28 21:00:00",
      "runs": 27,
      "successes": 20,
      "verdict": "已验证",
      "manual": {
        "at": "2026-11-25 09:40:27",
        "status": "CANCELLED",
        "failure_code": "automation-run-released",
        "real": "结果未知(CANCELLED)",
        "cwd": "/Users/chenbangjie/WorkBuddy/automation-2026-11-15-16-18-32"
      }
    }
  ],
  "automationVerified": 35,
  "automationTotal": 35,
  "sentToday": {
    "sales": 0,
    "marketing": 0,
    "total": 0
  },
  "sentDetails": [],
  "reports": [
    {
      "id": "S1",
      "line": "AI-GB-Sales",
      "name": "枪械生产商名录日报",
      "due": "08:30",
      "date": "2026-11-28",
      "actual": "2026-11-28 08:57:07",
      "delivered": true,
      "evidence": "/Users/chenbangjie/Desktop/AI-GB-Team/00_共享资源/07_枪械生产商调研/2026-11-28_*.xlsx · mtime=2026-11-28 08:57:07",
      "onTime": false,
      "delayedMin": 27,
      "timeVerdict": "补交·延迟 27 分钟"
    },
    {
      "id": "S2",
      "line": "AI-GB-Sales",
      "name": "全球渠道库日报",
      "due": "08:35",
      "date": "2026-11-28",
      "actual": "2026-11-28 09:05:58",
      "delivered": true,
      "evidence": "/Users/chenbangjie/Desktop/AI-GB-Team/00_共享资源/08_全球枪店与俱乐部调研/2026-11-28_*.xlsx · mtime=2026-11-28 09:05:58",
      "onTime": false,
      "delayedMin": 30,
      "timeVerdict": "补交·延迟 30 分钟"
    },
    {
      "id": "M1",
      "line": "AI-GB-Marketing",
      "name": "每日合作情报",
      "due": "08:10",
      "date": "2026-11-28",
      "actual": "2026-11-28 08:32 (GMT+8) · 调度 08:10，本轮系统触发 08:25，实际检索与发布完成于 08:32，较调度 +23 分钟，按守门口径判「延迟」；如实标注，不伪称按时",
      "delivered": true,
      "evidence": "gb-market-intel.js days[0].date=2026-11-28; generatedAt=2026-11-28 08:32 (GMT+8) · 调度 08:10，本轮系统触发 08:25，实际检索与发布完成于 08:32，较调度 +23 分钟，按守门口径判「延迟」；如实标注，不伪称按时",
      "onTime": false,
      "delayedMin": 22,
      "timeVerdict": "补交·延迟 22 分钟"
    },
    {
      "id": "R1",
      "line": "AI-GB-RD",
      "name": "每日全球技术报告",
      "due": "08:00",
      "date": "2026-11-28",
      "actual": "2026-11-28 08:47 (GMT+8) · R1 补交：原调度 08:00，实际 08:47，延迟 47 分钟；本轮为定时触发（automation 68d95d11），启动已过 08:00；result_success 待运行结束判定，产物落地不等于自动化成功",
      "delivered": true,
      "evidence": "rd/data.js days[0].date=2026-11-28; generatedAt=2026-11-28 08:47 (GMT+8) · R1 补交：原调度 08:00，实际 08:47，延迟 47 分钟；本轮为定时触发（automation 68d95d11），启动已过 08:00；result_success 待运行结束判定，产物落地不等于自动化成功; 桌面 2026-11-28.md=2026-11-28 08:51:17",
      "onTime": false,
      "delayedMin": 47,
      "timeVerdict": "补交·延迟 47 分钟"
    },
    {
      "id": "M4",
      "line": "AI-GB-Marketing",
      "name": "每日创意合作研究报告",
      "due": "08:00",
      "date": "2026-11-28",
      "actual": "2026-11-28 08:24 (GMT+8) · 调度 08:00，本机定时任务按时触发；检索与落盘完成于 08:24，延迟 24 分钟，处于 +30 分钟准时区间内。按真实时间如实记录，不倒填、不伪称为 08:00 整点。已读指令板 · 2026-11-27 21:04（D-24 要求 M4 恢复 08:00 交付、迟到超 +120 分钟按缺交计；本轮未越线）。",
      "delivered": true,
      "evidence": "gb-creative-partnerships.js days[0].date=2026-11-28; generatedAt=2026-11-28 08:24 (GMT+8) · 调度 08:00，本机定时任务按时触发；检索与落盘完成于 08:24，延迟 24 分钟，处于 +30 分钟准时区间内。按真实时间如实记录，不倒填、不伪称为 08:00 整点。已读指令板 · 2026-11-27 21:04（D-24 要求 M4 恢复 08:00 交付、迟到超 +120 分钟按缺交计；本轮未越线）。; 桌面 2026-11-28_创意合作研究报告.md=2026-11-28 08:26:00",
      "onTime": false,
      "delayedMin": 24,
      "timeVerdict": "补交·延迟 24 分钟"
    }
  ],
  "reportDelivered": 5,
  "reportTotal": 5,
  "rdWatch": {
    "today": "2026-11-28",
    "automation": {
      "id": "68d95d11-c5e9-4ca5-9f66-272741f353df",
      "name": "AI-GB-RD 每日全球技术报告（早08:00·技术扫描+图纸储备+PWA发布）",
      "status": "ACTIVE",
      "schedule": "每日 08:00 (GMT+8)",
      "nextRun": "2026-11-29 08:00:00",
      "runsTotal": 6,
      "successTotal": 3,
      "runsToday": 1,
      "successToday": 1,
      "lastAttempt": "2026-11-28 08:38:20",
      "lastStatus": "ACCEPTED",
      "lastResult": "真实执行成功",
      "lastError": null,
      "running": 0
    },
    "report": {
      "id": "R1",
      "due": "08:00",
      "delivered": true,
      "onTime": false,
      "delayedMin": 47,
      "timeVerdict": "补交·延迟 47 分钟",
      "actual": "2026-11-28 08:47 (GMT+8) · R1 补交：原调度 08:00，实际 08:47，延迟 47 分钟；本轮为定时触发（automation 68d95d11），启动已过 08:00；result_success 待运行结束判定，产物落地不等于自动化成功",
      "evidence": "rd/data.js days[0].date=2026-11-28; generatedAt=2026-11-28 08:47 (GMT+8) · R1 补交：原调度 08:00，实际 08:47，延迟 47 分钟；本轮为定时触发（automation 68d95d11），启动已过 08:00；result_success 待运行结束判定，产物落地不等于自动化成功; 桌面 2026-11-28.md=2026-11-28 08:51:17"
    },
    "daily": {
      "date": "2026-11-28",
      "submittedByRD": true,
      "boardRead": true,
      "scoreLabel": "60/100 = 内容 90（9 条信号 + 1 件新专利 + 6 件专利权项级复核 + 4 项 model 图纸 + 9 来源 + 双重落盘 + 日报自提交与 R2 复盘补做）× 0.75 补交折扣；R1 延迟 47 分钟按真实时间标注",
      "headline": "检得 9 条可核实信号与 1 件新公开专利；D-25 权项级复核完成，但 6 件专利均需正式 FTO。",
      "firstFact": "已读指令板 · 2026-11-27 21:14 (GMT+8) 终局版。G-38 回应：11-27 的 rd 段虽已自提交，但 review/retro 为空，今日在本段补上实质复盘，不以「已读指令板」代替复盘。R1 补交：原调度 08:00，实际 08:47，延迟 47 分钟，generatedAt 与桌面 md mtime 均按真实时间写，不伪称按时。",
      "blockers": [
        "6 件专利均未完成 FTO；US12693097 权项 18 与 D-16 直接同域，US 12,674,639 权项 5 比权项 1 更宽，US20260341187A1 权项 1/9/12 覆盖 D-31 环带载体。",
        "Patents-Review 与 Patents.us 为转录站，权项文本未用 USPTO/WIPO 官方全文复核；US20260309463A1 状态字段出现 Patented/Allowed 不一致，US12693097 权项 11/12 疑似截断。",
        "Vortex Pro 价格与兼容性口径不一、Nocpix ACE 2 与 Arken EP-8 的规格/实测均为厂商或单次编辑口径，无独立复现。",
        "R1 今日仍为补交；08:00 调度到实际启动之间的延迟根因未查明，需总管席核查自动化运行证据。",
        "线上核验新发现：version.json 的 build=20261125a 对应快照 rd/e-20261125a.html 在仓库与线上均不存在（curl 404），现存快照为 e-20261123j.html、app.html 为 200；版本门会跳到 404 且不自动回退。本轮按内容边界未改 build 与任何 e-*.html，需所有者授权修复。"
      ]
    },
    "gaps": [
      "R1 非 08:00 按时交付（延迟 47 分钟）"
    ],
    "verdict": "缺口：R1 非 08:00 按时交付（延迟 47 分钟）"
  },
  "bounceLoop": {
    "scannedAt": "2026-11-28T08:38:39.911286+08:00",
    "scanned": 9,
    "bounces": [
      {
        "date": "Tue, 24 Nov 2026 09:30:35 +0300 (+03)",
        "rejected": "g***@beyteknoloji.com",
        "reason": "其他退信",
        "hard": true,
        "action": "no_need",
        "detail": "beyteknoloji 主收件人 info@ 已成功送达（同批 MTA-BLOCKED 报告证实）；本地址是对方内部转发列表成员失效 → 严禁补发，防重复骚扰",
        "resolvedTo": null,
        "status": null,
        "sentAt": null,
        "msgid": null,
        "note": ""
      },
      {
        "date": "Tue, 24 Nov 2026 09:30:34 +0300 (+03)",
        "rejected": "a***@beyteknoloji.com",
        "reason": "收件人不存在/地址错误(5.1.1)",
        "hard": true,
        "action": "no_need",
        "detail": "主收件人已 SUCCESSFULLY RELAYED 送达；被拒的是对方内部转发/别名失效，补发会造成重复骚扰 → 严禁补发",
        "resolvedTo": null,
        "status": null,
        "sentAt": null,
        "msgid": null,
        "note": ""
      },
      {
        "date": "Tue, 24 Nov 2026 07:15:26 +0000",
        "rejected": "i***@arabianhunter.sa",
        "reason": "DNS/MX：域名无邮件交换记录（从未送达）",
        "hard": true,
        "action": "done",
        "detail": "可修复：i***@arabianhunter.sa -> c***@arabianhunter.com（官网 arabianhunter.com/contactus 公布 c***@arabianhunter.com；.sa域名dig无MX硬退信）",
        "resolvedTo": "c***@arabianhunter.com",
        "status": "done",
        "sentAt": "2026-11-25T08:21:34+08:00",
        "msgid": "179556609665.23039.2806592698626819955@gunbase-optics.com",
        "note": "幂等拦截：同指纹已于 2026-11-25 08:21:34 补发，IMAP Sent 实核验msgid一致；本次不重复发送，防骚扰客户"
      },
      {
        "date": "Wed, 25 Nov 2026 08:30:20 +0000",
        "rejected": "p***@gmail.com",
        "reason": "收件人不存在/地址错误(5.1.1)",
        "hard": true,
        "action": "manual",
        "detail": "未在当前正确地址库，需联网核验正确邮箱后补发；查不到则淘汰，禁止猜测硬发",
        "resolvedTo": null,
        "status": "unfixable",
        "sentAt": null,
        "msgid": null,
        "note": "Gmail 550-5.1.1 账号不存在（永久失败）；查无正确地址，按「不猜测邮箱」原则淘汰，未补发；leads_ledger WEB3-008 已标失效-硬退信禁止再发"
      },
      {
        "date": "Fri, 27 Nov 2026 09:17:54 +0000",
        "rejected": "p***@sss.no",
        "reason": "对方组织禁止外部转发(550 5.7.520)：主收件地址已接收，内部转发被拦",
        "hard": true,
        "action": "no_need",
        "detail": "主收件地址已被对方服务器接收（SPF/DKIM pass）；失败发生在对方组织禁止从该地址向外转发（550 5.7.520），属对方内部路由问题，补发只会重复失败并骚扰 -> 严禁补发；如需对方经办人收到，需对方IT放行或提供直投邮箱（人工跟进）",
        "resolvedTo": null,
        "status": null,
        "sentAt": null,
        "msgid": null,
        "note": ""
      }
    ],
    "summary": {
      "resend": 0,
      "no_need": 3,
      "manual": 1,
      "done": 1
    }
  },
  "dmarc": {
    "generatedAt": "2026-11-28T10:48:07+08:00",
    "source": "IMAP INBOX + DMARC-Reports（双文件夹扫描，按 Report-ID 去重）",
    "reports": 12,
    "records": 26,
    "spfPass": 23,
    "dkimPass": 26,
    "dnsPolicy": {
      "v": "DMARC1",
      "p": "quarantine",
      "pct": "100",
      "rua": "mailto:sales@gunbase-optics.com"
    },
    "dnsOK": true,
    "forged": [],
    "spfOnly": [
      {
        "cnt": 1,
        "spf": "fail",
        "dkim": "pass",
        "disp": "none",
        "frm": "gunbase-optics.com",
        "ip": "81.88.63.137",
        "dkim_detail": "gunbase-optics.com:pass",
        "spf_detail": "sabatti.it:pass"
      },
      {
        "cnt": 1,
        "spf": "fail",
        "dkim": "pass",
        "disp": "none",
        "frm": "gunbase-optics.com",
        "ip": "185.52.236.120",
        "dkim_detail": "gunbase-optics.com:pass",
        "spf_detail": "hafkenscheid.com:pass"
      },
      {
        "cnt": 1,
        "spf": "fail",
        "dkim": "pass",
        "disp": "none",
        "frm": "gunbase-optics.com",
        "ip": "209.85.220.69",
        "dkim_detail": "gunbase-optics.com:pass",
        "spf_detail": "gunbase-optics.com:softfail"
      }
    ],
    "gaps": [],
    "verdict": "达标"
  }
};
