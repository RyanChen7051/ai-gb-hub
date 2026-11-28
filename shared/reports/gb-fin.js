/* AI GB-Fin 监督数据 · 由每日 09:00 自动化生成
 * 只含公开宏观情报健康度与门禁状态，不含任何成本、客户或报价数据。
 * 数字由脚本直读 fin/data.js 与自动化账本生成，非人工填写。
 */
window.GB_FIN_REPORT = {
  "meta": {
    "version": "1.0.0",
    "cadence": "每日 09:00 (GMT+8) 由 AI GB-Fin 发布",
    "agent": "AI GB-Fin",
    "supervisor": "AI GB-Team",
    "scope": "internal-finance-line · public macro summary only",
    "note": "成本、客户报价与价目表不进入本文件；监督层只核验情报是否按时落盘、来源是否齐备、门禁是否生效。"
  },
  "days": [
    {
      "date": "2026-11-28",
      "publishedAt": "2026-11-28T10:32:00+08:00",
      "agent": "AI GB-Fin",
      "status": "live",
      "headline": "首期建档完成：42 币种、16 市场关税、3 条政策；5 项待核验未填 0；本机门禁已启用。",
      "kpi": [
        { "key": "F1", "name": "09:00 财务情报落盘", "value": "首期建档 10:32", "state": "partial", "evidence": "fin/data.js meta.generatedAt" },
        { "key": "F2", "name": "汇率覆盖", "value": "42 币种", "state": "ok", "evidence": "fin/data.js fx.rates" },
        { "key": "F3", "name": "关税已核验市场", "value": "11 / 16", "state": "ok", "evidence": "fin/data.js markets v=verified" },
        { "key": "F4", "name": "待核验市场（留空非填 0）", "value": "5", "state": "warn", "evidence": "fin/data.js markets v=pending/aggregate" },
        { "key": "F5", "name": "MLA 来源条目", "value": "7", "state": "ok", "evidence": "fin/data.js meta.sources" },
        { "key": "F6", "name": "对内门禁", "value": "file:// 本机限定", "state": "ok", "evidence": "fin/index.html location.protocol 判定" }
      ],
      "facts": [
        "AI GB-Fin 于 2026-11-28 建立，所有者指定：对内不对外，挂在 AI GB-Team 下做管理监控。",
        "汇率取自 open.er-api.com（CNY 基准，API 日期 2026-11-28 00:02:31 UTC），与银行结汇价通常差 0.1%~0.5%。",
        "欧盟 TARIC 9013.10.90.00 第三国税率 4.700%；美国 HTS 9013.10.10.00 General 14.9%；英国 0%。",
        "阿联酋、沙特未取得可靠税率来源，留空并标注待核验，未在市场数据中填 0。",
        "成本与报价只在本机 file:// 页面用 localStorage 保存，不写入线上仓库、不进入监督数据。"
      ],
      "gaps": [
        "09:00 定时自动化尚未到首个调度点（建立时间 10:32 晚于 11-28 09:00），首期为建档而非定时产出。",
        "出口退税率未取得官方来源，计算器默认留空，须由所有者按税务机关核定值手填。"
      ],
      "quotes": {
        "visibility": "owner-local-only",
        "count": null,
        "note": "报价次数与金额属内部敏感数据，不进入 PWA 公开监督层；本机 localStorage 亦不上传。"
      }
    }
  ]
};
