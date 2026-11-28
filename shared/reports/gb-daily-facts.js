window.GB_DAILY_FACTS = {
 "date": "2026-11-28",
 "generatedAt": "2026-11-28T13:20:45.228025+08:00",
 "source": "IMAP Sent / Supabase / 线上文件 / workbuddy.db / 账本 JSON（脚本直读）",
 "facts": [
  {
   "group": "业务结果",
   "item": "今日实发（Sales / Marketing）",
   "value": "0 / 0",
   "status": "bad",
   "source": "IMAP Sent 直读",
   "note": "目标 6 + 2 = 8 封"
  },
  {
   "group": "业务结果",
   "item": "真实客户回信",
   "value": "0",
   "status": "bad",
   "source": "reply_intake_latest.json",
   "note": "自动回执 1 封不计入"
  },
  {
   "group": "业务结果",
   "item": "已读回执（客户端确认）",
   "value": "0",
   "status": "warn",
   "source": "read_receipt_scan.py / IMAP INBOX",
   "note": "今日 MDN 0；未回执不等于未读"
  },
  {
   "group": "业务结果",
   "item": "当日硬退信",
   "value": "0",
   "status": "good",
   "source": "bounce_loop_report_latest.json",
   "note": "累计记录 5 条"
  },
  {
   "group": "执行链",
   "item": "Marketing 审批状态",
   "value": "待你拍板",
   "status": "info",
   "source": "Supabase 私有表",
   "note": "approved 只能你改，脚本绝不代批"
  },
  {
   "group": "执行链",
   "item": "云端待投 / 队列日期",
   "value": "2 封 / 2026-11-28",
   "status": "warn",
   "source": "Supabase 私有表",
   "note": "投递器每 30 分钟检查净空窗"
  },
  {
   "group": "执行链",
   "item": "草稿自动入云端",
   "value": "PUSHED 1 次",
   "status": "good",
   "source": "draft_publisher_log.jsonl",
   "note": "审批状态原样搬运"
  },
  {
   "group": "交付物",
   "item": "六项报告落盘",
   "value": "6 / 6",
   "status": "good",
   "source": "桌面文件 + PWA 线上文件",
   "note": "全部齐全"
  },
  {
   "group": "交付物",
   "item": "三线复盘非空",
   "value": "3 / 3",
   "status": "good",
   "source": "gb-reports.js review 字段",
   "note": "仍由业务线自写，系统不代写"
  },
  {
   "group": "系统健康",
   "item": "GUNBASE 自动化累计成功",
   "value": "184 / 239 (77.0%)",
   "status": "warn",
   "source": "workbuddy.db automation_runs",
   "note": "只算 GUNBASE 自身，不含无关自动化"
  },
  {
   "group": "系统健康",
   "item": "发信闸门拦截",
   "value": "12 次",
   "status": "info",
   "source": "send_gate_log.jsonl",
   "note": "含自测；真实拦截会保留 code"
  },
  {
   "group": "系统健康",
   "item": "DMARC 伪造 / DNS 策略",
   "value": "0 / quarantine",
   "status": "good",
   "source": "dmarc_summary_latest.json",
   "note": "12 份报告 / 26 条记录；SPF 未对齐但 DKIM 通过 3 条不计伪造"
  },
  {
   "group": "系统健康",
   "item": "今日发信预测",
   "value": "6 封 / 缺口 2",
   "status": "info",
   "source": "send_forecast_history.json",
   "note": "预测 Sales 6 + Marketing 0"
  }
 ]
};
