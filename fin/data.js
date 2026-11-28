/* AI GB-Fin · 每日财务情报数据（公开宏观层，不含任何产品成本 / 客户价格）
 * 由每日 09:00（北京时间）自动化刷新；本文件可随 PWA 公开发布。
 *
 * 数据诚信约定：
 *   - v:"verified"   = 已按来源页核对到具体税号/数值，附来源与核验日期；
 *   - v:"aggregate"  = 第三方按子目汇总的均值，仅作量级参考，必须按具体税号复核；
 *   - v:"pending"    = 未查到可靠来源，留空，**不得**在报价中当作 0 使用。
 *   - 未记录 ≠ 免税。六位 HS 编码不能代替目的国申报税号。
 */
window.GB_FIN_DATA = {
  "meta": {
    "version": "1.0.0",
    "date": "2026-11-28",
    "generatedAt": "2026-11-28T10:32:00+08:00",
    "cadence": "每日 09:00 (GMT+8) 自动刷新",
    "scope": "public-macro-only",
    "note": "本文件只含公开宏观数据（汇率 / 关税 / 贸易政策）。产品成本、客户报价与价目表永不写入本文件，也不进入任何线上仓库。",
    "sources": [
      {
        "id": "fx-erapi",
        "citation": "Open Access Endpoint. ExchangeRate-API, www.exchangerate-api.com/docs/free. Accessed 28 Nov. 2026.",
        "url": "https://open.er-api.com/v6/latest/CNY",
        "use": "CNY 基准参考汇率（166 币种，每日更新）"
      },
      {
        "id": "eu-taric",
        "citation": "The Trade Hub. \"TARIC 901310900080 — Other.\" thetradehub.eu/en/customs/taric/901310900080. Accessed 28 Nov. 2026.",
        "url": "https://www.thetradehub.eu/en/customs/taric/901310900080",
        "use": "欧盟 TARIC 9013.10.90.00 第三国税率 4.700%"
      },
      {
        "id": "us-hts",
        "citation": "\"Harmonized Tariff Schedule, 2026 HTS Revision 23 (11/10/2026).\" HTShub, www.htshub.com/us-hs/chapter/90-8. Accessed 28 Nov. 2026.",
        "url": "https://www.htshub.com/us-hs/chapter/90-8",
        "use": "美国 HTS 9013.10 各 10 位税号 General 税率"
      },
      {
        "id": "hs-aggregate",
        "citation": "\"HS 9013: Lasers, other than laser diodes; other optical appliances and instruments.\" Indicator Gateway, indicatorgateway.com/data/hs/9013. Accessed 28 Nov. 2026.",
        "url": "https://indicatorgateway.com/data/hs/9013",
        "use": "16 个司法辖区 9013.10 子目简单平均从价税率（量级参考）"
      },
      {
        "id": "hs-rates",
        "citation": "HSRates. \"HS 901310 Telescopic Sights for Fitting to Arms.\" hsrates.com/en/codes/9013-10-telescopic-sights-for-fitting-to-arms-periscopes-telescopes-designed-to-form-par. Accessed 28 Nov. 2026.",
        "url": "https://hsrates.com/en/codes/9013-10-telescopic-sights-for-fitting-to-arms-periscopes-telescopes-designed-to-form-par",
        "use": "USITC HTS / EU TARIC / HMRC UK Trade Tariff 汇总（accessed 23 Feb. 2026）"
      },
      {
        "id": "tariffpedia",
        "citation": "\"HS 编码 901310：装于武器上的望远镜瞄准具.\" TariffPedia, tariffpedia.com/zh/hs-code/901310. Accessed 28 Nov. 2026.",
        "url": "https://tariffpedia.com/zh/hs-code/901310",
        "use": "美国 Section 301 中国原产加征 25%／英国 VAT 20% 交叉核验"
      },
      {
        "id": "tariffnumber",
        "citation": "\"HS Code 90131090 — Telescopic sights for fitting to arms.\" TariffNumber, api.tariffnumber.com/2022/90131090. Accessed 28 Nov. 2026.",
        "url": "https://api.tariffnumber.com/2022/90131090",
        "use": "欧盟共同军事清单（CML）货物与出口管制标记"
      }
    ]
  },

  "fx": {
    "base": "CNY",
    "date": "2026-11-28",
    "fetchedAt": "2026-11-28T10:32:00+08:00",
    "source": "exchangerate-api.com (open.er-api.com)",
    "sourceId": "fx-erapi",
    "apiDate": "Sat, 28 Nov 2026 00:02:31 +0000",
    "direction": "1 CNY = X 单位外币",
    "note": "公开参考牌价，非银行结售汇价；与银行成交价通常差 0.1%~0.5%，大额报价以银行成交价为准。管制货币（TWD/VND 等）按美元交叉折算，源间差异更大。",
    "rates": {
      "USD": 0.149905, "EUR": 0.137052, "JPY": 23.925318, "KRW": 201.409869,
      "TWD": 4.943154, "THB": 5.089504, "INR": 13.87771, "GBP": 0.114484,
      "HKD": 1.173916, "SGD": 0.193374, "AUD": 0.225761, "CAD": 0.213621,
      "MYR": 0.614855, "VND": 3875.968992, "IDR": 2754.820937, "PHP": 9.560229,
      "AED": 0.550523, "SAR": 0.562141, "TRY": 7.593014, "RUB": 12.315271,
      "BRL": 0.849762, "ZAR": 2.606819, "MXN": 2.943774, "PLN": 0.609793,
      "CHF": 0.125332, "SEK": 1.53401, "NOK": 1.464482, "DKK": 1.02178,
      "CZK": 3.34672, "HUF": 50.617534, "RON": 0.730887, "KWD": 0.046986,
      "QAR": 0.545651, "EGP": 8.218034, "NGN": 204.05632, "KES": 19.55,
      "ILS": 0.498509, "PKR": 41.49722, "BDT": 18.791084, "LKR": 49.9754,
      "NPR": 22.204335
    }
  },

  /* 关税：默认 HS 9013.10（装于武器上的望远镜瞄准具 / 潜望镜）。
     dutyRate 单位是百分比数值（4.7 = 4.7%），可直接填进计算器的「进口关税率」。 */
  "markets": [
    { "code": "EU", "name": "欧盟", "currency": "EUR", "hs": "9013.10.90.00", "dutyRate": 4.7, "dutyLabel": "第三国税率 4.700%", "vatRate": null, "vatLabel": "按成员国及商品核验", "v": "verified", "sourceIds": ["eu-taric", "hs-rates"], "verifiedAt": "2026-11-28", "note": "9013.10.10.00（机器零件用望远镜）为 0%；瞄准具落在 90.00 子目。符合原产地规则可享优惠税率，须举证。" },
    { "code": "UK", "name": "英国", "currency": "GBP", "hs": "9013.10.90.00", "dutyRate": 0, "dutyLabel": "进口关税 0%", "vatRate": 20, "vatLabel": "VAT 20%", "v": "verified", "sourceIds": ["tariffpedia", "hs-rates"], "verifiedAt": "2026-11-01", "note": "UK Trade Tariff 细目 9013101000 / 9013109000 均为 0%（核验于 2026-11-01）。进口 VAT 通常可由进口商申报抵扣，是否构成最终成本取决于进口方资质。" },
    { "code": "US", "name": "美国", "currency": "USD", "hs": "9013.10.10.00", "dutyRate": 14.9, "dutyLabel": "General 14.9%（非红外）", "vatRate": null, "vatLabel": "无联邦增值税；可能叠加州销售税", "v": "verified", "sourceIds": ["us-hts", "hs-rates", "tariffpedia"], "verifiedAt": "2026-11-10", "note": "同一子目下 10 位税率不同：10.00=14.9%、30.00=1.4%、45.00=Free、50.00=5.3%。中国原产另有 Section 301 List 1/3/4A 加征 25%（第三方核验于 2026-08-03），须向报关行确认现行排除清单。Column 2 为 45%，不适用正常贸易国。" },
    { "code": "AE", "name": "阿联酋", "currency": "AED", "hs": "9013.10", "dutyRate": null, "dutyLabel": "待核验", "vatRate": null, "vatLabel": "待核验", "v": "pending", "sourceIds": [], "verifiedAt": null, "note": "本次检索未取得可靠的具体税率来源；报价前不得按 0 计，须由目的港报关行书面确认。" },
    { "code": "SA", "name": "沙特", "currency": "SAR", "hs": "9013.10", "dutyRate": null, "dutyLabel": "待核验", "vatRate": null, "vatLabel": "待核验", "v": "pending", "sourceIds": [], "verifiedAt": null, "note": "同上，未取得可靠来源，留空而非填 0。" },
    { "code": "DE", "name": "德国", "currency": "EUR", "hs": "9013.10", "dutyRate": 4.7, "dutyLabel": "随欧盟 TARIC 4.7%", "vatRate": null, "vatLabel": "按德国 VAT 法核验", "v": "verified", "sourceIds": ["eu-taric"], "verifiedAt": "2026-11-28", "note": "德国为欧盟成员国，关税随 TARIC；VAT 未从本次检索获得可靠数值，留空。" },
    { "code": "FR", "name": "法国", "currency": "EUR", "hs": "9013.10", "dutyRate": 4.7, "dutyLabel": "随欧盟 TARIC 4.7%", "vatRate": null, "vatLabel": "按法国 VAT 法核验", "v": "verified", "sourceIds": ["eu-taric"], "verifiedAt": "2026-11-28", "note": "同上。" },
    { "code": "AU", "name": "澳大利亚", "currency": "AUD", "hs": "9013.10", "dutyRate": 0, "dutyLabel": "子目均值 0%", "vatRate": null, "vatLabel": "GST 未核验", "v": "aggregate", "sourceIds": ["hs-aggregate"], "verifiedAt": "2026-10-24", "note": "第三方按子目统计的平均值，不是具体申报税率；须按具体税号复核。" },
    { "code": "CA", "name": "加拿大", "currency": "CAD", "hs": "9013.10", "dutyRate": 0, "dutyLabel": "子目均值 0%", "vatRate": null, "vatLabel": "GST/HST 未核验", "v": "aggregate", "sourceIds": ["hs-aggregate"], "verifiedAt": "2026-10-24", "note": "同上，量级参考。" },
    { "code": "JP", "name": "日本", "currency": "JPY", "hs": "9013.10", "dutyRate": 0, "dutyLabel": "子目均值 0%", "vatRate": null, "vatLabel": "消费税未核验", "v": "aggregate", "sourceIds": ["hs-aggregate"], "verifiedAt": "2026-10-24", "note": "同上，量级参考。" },
    { "code": "IN", "name": "印度", "currency": "INR", "hs": "9013.10", "dutyRate": 8.3, "dutyLabel": "子目均值 8.3%", "vatRate": null, "vatLabel": "GST 未核验", "v": "aggregate", "sourceIds": ["hs-aggregate"], "verifiedAt": "2026-10-24", "note": "同上，量级参考。" },
    { "code": "BR", "name": "巴西", "currency": "BRL", "hs": "9013.10", "dutyRate": 14.4, "dutyLabel": "子目均值 14.4%", "vatRate": null, "vatLabel": "ICMS/IPI 未核验", "v": "aggregate", "sourceIds": ["hs-aggregate"], "verifiedAt": "2026-10-24", "note": "同上，量级参考。" },
    { "code": "ZA", "name": "南非", "currency": "ZAR", "hs": "9013.10", "dutyRate": 0, "dutyLabel": "子目均值 0%", "vatRate": null, "vatLabel": "VAT 未核验", "v": "aggregate", "sourceIds": ["hs-aggregate"], "verifiedAt": "2026-10-24", "note": "同上，量级参考。" },
    { "code": "TR", "name": "土耳其", "currency": "TRY", "hs": "9013.10", "dutyRate": 4.7, "dutyLabel": "子目均值 4.7%", "vatRate": null, "vatLabel": "VAT 未核验", "v": "aggregate", "sourceIds": ["hs-aggregate"], "verifiedAt": "2026-10-24", "note": "同上，量级参考。" },
    { "code": "ID", "name": "印尼", "currency": "IDR", "hs": "9013.10", "dutyRate": 5, "dutyLabel": "子目均值 5%", "vatRate": null, "vatLabel": "PPN 未核验", "v": "aggregate", "sourceIds": ["hs-aggregate"], "verifiedAt": "2026-10-24", "note": "同上，量级参考。" },
    { "code": "EAEU", "name": "欧亚经济联盟", "currency": "RUB", "hs": "9013.10", "dutyRate": 2.4, "dutyLabel": "子目均值 2.4%", "vatRate": null, "vatLabel": "未核验", "v": "aggregate", "sourceIds": ["hs-aggregate"], "verifiedAt": "2026-10-24", "note": "同上，量级参考；俄白方向另有出口管制，见政策条目。" }
  ],

  "policies": [
    { "id": "P-001", "country": "欧盟", "title": "90131090 列入共同军事清单（CML）货物", "summary": "TARIC 90131090 · 00 标记 Common Military List (CML) goods；对俄罗斯、白俄罗斯、缅甸、津巴布韦、委内瑞拉等目的国列有进口/出口限制或管制措施。", "impact": "报价前先做管制判定；涉及军品或两用物项，须先取得 EUC / 进口许可，管制判定以报关行与律师书面意见为准。", "sourceIds": ["tariffnumber"], "v": "verified", "verifiedAt": "2026-11-28", "date": "2026-11-28" },
    { "id": "P-002", "country": "美国", "title": "Section 301 中国原产 9013.10 加征 25%", "summary": "该 HS 编码下 4 个 8 位税目出现在 List 1 / List 3 / List 4A，第三方核验加征 25%；具体是否适用取决于现行排除清单与申报税号。", "impact": "中国原产对美报价必须把加征关税单列，不能只按 General 14.9% 计算；排除清单状态须当日复核。", "sourceIds": ["tariffpedia"], "v": "verified", "verifiedAt": "2026-08-03", "date": "2026-11-28" },
    { "id": "P-003", "country": "中国", "title": "出口退税率未取得可靠来源", "summary": "本次检索未获得 9013.10 现行出口退税率的官方页面。", "impact": "计算器中的退税率默认留空，由所有者按税务机关核定值手填；不得用估算值参与报价。", "sourceIds": [], "v": "pending", "verifiedAt": null, "date": "2026-11-28" }
  ],

  "days": [
    {
      "date": "2026-11-28",
      "publishedAt": "2026-11-28T10:32:00+08:00",
      "headline": "首期建档：汇率 1 CNY = 0.149905 USD；EU TARIC 4.7%、US General 14.9%（中国原产另核 Section 301）；中东两国税率待报关行确认。",
      "fxCount": 42,
      "marketCount": 16,
      "policyCount": 3,
      "pendingCount": 5,
      "sourceCount": 7
    }
  ]
};
