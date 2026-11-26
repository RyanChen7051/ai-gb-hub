/* AI GB Team 发信台账
 *
 * 用途：让所有者能核对「每天 2 封是否真的自动发了」——每一封都有时间、发信角色、
 *       收件人、主题、邮件类型与真实 message_id，可回 Agent Mail 已发送箱逐封比对。
 *
 * 规则：
 *   - 只记实际发出的邮件，草稿与失败不混入（失败另记 status=failed）；
 *   - message_id 来自 Agent Mail 返回值，用于追溯，不是编造；
 *   - 每日配额 50 封，台账另有 quotaUsed 字段与此对账。
 */
window.GB_EMAIL_LOG = {
  "meta": {
    "mailbox": "sales@gunbase-optics.com",
    "channel": "GunBase 企业邮箱 SMTP（对外）/ Agent Mail（内部预览）",
    "quotaDaily": 50,
    "note": "本台账为实际发送记录。mode=对外 为真实触达，mode=预演/预览 收件人为所有者本人、不计入对外业绩。Marketing 的对外信由 ~/.workbuddy/gunbase-sales-bot/marketing_send.py 写入，含 localTime / netWindow 便于复核是否踩到当地邮件海。"
  },
  "days": [
    {
      "date": "2026-11-26",
      "weekday": "周四",
      "quotaUsed": 0,
      "quotaTotal": 50,
      "previewUsed": 1,
      "entries": [
        {
          "time": "09:58",
          "agent": "AI GB-Marketing（预览·非对外）",
          "to": "sales@gunbase-optics.com",
          "subject": "[待审] 今日 2 封合作信",
          "type": "合作信预览",
          "mode": "预览",
          "status": "已发送·内部预览（收件人为所有者本人，不计对外业绩）",
          "note": "待审两封：FOCUS Jagd- und Schiesssportzentrum（AT, range@focusrange.at）/ Strzelnica Czacz（PL, kontakt@strzelnicaczacz.pl）。队列 queue/2026-11-26.json approved=false，未推云端、未对外；正文含当地+北京双落点（当地 10:15=北京 17:15 / 当地 13:45=北京 20:45）。本日 M2 实际起草 09:56，相对调度 +86 分钟，如实标注。"
        },
        {
          "time": "10:02",
          "localTime": "11-26 03:05",
          "netWindow": "09:30-12:20/13:40-15:45",
          "agent": "AI-GB-Sales",
          "to": "info@tactical.hu",
          "subject": "Optika – Tactical Kft",
          "type": "开发信",
          "mode": "对外（队列）",
          "status": "已入队·待当地净空窗派发",
          "messageId": "",
          "note": "2026-11-25 19:00 入队；云端队列 Q007；匈牙利 Tactical Kft（Shield 经销商名录，A/8）；messageId 待 IMAP Sent 回读补录"
        },
        {
          "time": "10:02",
          "localTime": "11-26 03:05",
          "netWindow": "09:30-11:50/13:10-15:15",
          "agent": "AI-GB-Sales",
          "to": "info@3gun.nl",
          "subject": "Optics for 3Gun",
          "type": "开发信",
          "mode": "对外（队列）",
          "status": "已入队·待当地净空窗派发",
          "messageId": "",
          "note": "2026-11-25 19:45 入队；云端队列 Q008；荷兰 3Gun（Shield 经销商名录，A/8）；messageId 待 IMAP Sent 回读补录"
        },
        {
          "time": "10:02",
          "localTime": "11-26 03:05",
          "netWindow": "09:30-12:20/13:40-15:45",
          "agent": "AI-GB-Sales",
          "to": "support@cesar-shop.com",
          "subject": "Optika za CESAR SHOP",
          "type": "开发信",
          "mode": "对外（队列）",
          "status": "已入队·待当地净空窗派发",
          "messageId": "",
          "note": "2026-11-25 20:30 入队；云端队列 Q009；斯洛文尼亚 CESAR SHOP（Shield 经销商名录，A/8）；messageId 待 IMAP Sent 回读补录"
        },
        {
          "time": "10:02",
          "localTime": "11-26 03:05",
          "netWindow": "09:30-11:50/13:10-15:15",
          "agent": "AI-GB-Sales",
          "to": "info@norconia.de",
          "subject": "Re: Optics supply for Norconia's dealer network - GunBase tactical range",
          "type": "跟进信",
          "mode": "对外（队列）",
          "status": "已入队·待当地净空窗派发",
          "messageId": "",
          "note": "2026-11-26 10:02 入队；云端队列 Q010；D7 跟进，原信 2026-11-18 间隔 8 天未回复；follow_up.py 草稿消费 1/3；messageId 待 IMAP Sent 回读补录"
        },
        {
          "time": "10:02",
          "localTime": "11-26 03:05",
          "netWindow": "09:30-11:50/13:10-15:15",
          "agent": "AI-GB-Sales",
          "to": "info@helmuthofmann.de",
          "subject": "Re: Value-tier optics for Hofmann's dealer portfolio - GunBase",
          "type": "跟进信",
          "mode": "对外（队列）",
          "status": "已入队·待当地净空窗派发",
          "messageId": "",
          "note": "2026-11-26 10:02 入队；云端队列 Q011；D7 跟进，原信 2026-11-18 间隔 8 天未回复；follow_up.py 草稿消费 2/3；messageId 待 IMAP Sent 回读补录"
        },
        {
          "time": "10:02",
          "localTime": "11-26 03:05",
          "netWindow": "09:30-11:50/13:10-15:15",
          "agent": "AI-GB-Sales",
          "to": "contact@argos-armurerie.fr",
          "subject": "Re: Optiques & lampes tactiques pour Argos Armurerie - GunBase",
          "type": "跟进信",
          "mode": "对外（队列）",
          "status": "已入队·待当地净空窗派发",
          "messageId": "",
          "note": "2026-11-26 10:02 入队；云端队列 Q012；D7 跟进，原信 2026-11-18 间隔 8 天未回复；follow_up.py 草稿消费 3/3；messageId 待 IMAP Sent 回读补录"
        }
      ],
      "queuedToday": 6,
      "queuedNote": "6 封 = 当日上限 6，全部留在云端队列等净空窗；本轮执行 10:02（GMT+8）时欧洲当地 03:05，属净空窗外，按规则未硬发"
    },
    {
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
    },
    {
      "date": "2026-11-22",
      "weekday": "周日",
      "quotaUsed": 0,
      "quotaTotal": 50,
      "entries": [],
      "note": "IMAP Sent 当日无任何对外发信（真实 0 封）；总管席 11-24 断档核查补齐，非业务线提交"
    },
    {
      "date": "2026-11-21",
      "weekday": "周六",
      "quotaUsed": 0,
      "quotaTotal": 50,
      "entries": [],
      "note": "IMAP Sent 当日无任何对外发信（真实 0 封）；总管席 11-24 断档核查补齐，非业务线提交"
    },
    {
      "date": "2026-11-24",
      "weekday": "周二",
      "quotaUsed": 6,
      "quotaTotal": 50,
      "entries": [
        {
          "time": "06:30",
          "agent": "AI GB-Sales/Marketing（IMAP 对账）",
          "to": "info@beyteknoloji.com",
          "subject": "Optik – BEY TEKNOLOJI",
          "type": "对外开发/合作信",
          "mode": "对外",
          "status": "已发送",
          "note": "由真实已发送箱回填，messageId 见邮件原文"
        },
        {
          "time": "07:15",
          "agent": "AI GB-Sales/Marketing（IMAP 对账）",
          "to": "info@arabianhunter.sa",
          "subject": "Optics for Ben Humaid National Trading",
          "type": "对外开发/合作信",
          "mode": "对外",
          "status": "已发送",
          "note": "由真实已发送箱回填，messageId 见邮件原文"
        },
        {
          "time": "08:00",
          "agent": "AI GB-Sales/Marketing（IMAP 对账）",
          "to": "info@netjakt.se",
          "subject": "Optics for Netjakt AB",
          "type": "对外开发/合作信",
          "mode": "对外",
          "status": "已发送",
          "note": "由真实已发送箱回填，messageId 见邮件原文"
        },
        {
          "time": "08:45",
          "agent": "AI GB-Sales/Marketing（IMAP 对账）",
          "to": "m.sykora@esako.cz",
          "subject": "Optika pro ESAKO SYKORA ARMS",
          "type": "对外开发/合作信",
          "mode": "对外",
          "status": "已发送",
          "note": "由真实已发送箱回填，messageId 见邮件原文"
        },
        {
          "time": "09:30",
          "agent": "AI GB-Sales/Marketing（IMAP 对账）",
          "to": "info@optics-trade.eu",
          "subject": "Optika za Optics Trade d.o.o.",
          "type": "对外开发/合作信",
          "mode": "对外",
          "status": "已发送",
          "note": "由真实已发送箱回填，messageId 见邮件原文"
        },
        {
          "time": "10:15",
          "agent": "AI GB-Sales/Marketing（IMAP 对账）",
          "to": "autokompo@autokompo.sk",
          "subject": "Optika pre Autokompo s.r.o.",
          "type": "对外开发/合作信",
          "mode": "对外",
          "status": "已发送",
          "note": "由真实已发送箱回填，messageId 见邮件原文"
        },
        {
          "time": "08:30",
          "agent": "AI GB-Sales/Marketing（IMAP 对账）",
          "to": "pulsarsbrija@gmail.com",
          "subject": "Оптика за Inter-Holding doo",
          "type": "对外开发/合作信",
          "mode": "对外",
          "status": "已发送",
          "note": "由真实已发送箱回填，messageId 见邮件原文"
        },
        {
          "time": "09:15",
          "agent": "AI GB-Sales/Marketing（IMAP 对账）",
          "to": "purchasing@varuste.net",
          "subject": "Optics for Aalto Group Oy / Varuste.net",
          "type": "对外开发/合作信",
          "mode": "对外",
          "status": "已发送",
          "note": "由真实已发送箱回填，messageId 见邮件原文"
        },
        {
          "time": "10:00",
          "agent": "AI GB-Sales/Marketing（IMAP 对账）",
          "to": "info@birkenast.ch",
          "subject": "Optik für Birkenast Natur GmbH",
          "type": "对外开发/合作信",
          "mode": "对外",
          "status": "已发送",
          "note": "由真实已发送箱回填，messageId 见邮件原文"
        },
        {
          "time": "10:45",
          "agent": "AI GB-Sales/Marketing（IMAP 对账）",
          "to": "kontakt@waffenshop.eu",
          "subject": "Optik für EP Waffen Tech",
          "type": "对外开发/合作信",
          "mode": "对外",
          "status": "已发送",
          "note": "由真实已发送箱回填，messageId 见邮件原文"
        },
        {
          "time": "11:30",
          "agent": "AI GB-Sales/Marketing（IMAP 对账）",
          "to": "info@thomasjacks.co.uk",
          "subject": "Optics for Thomas Jacks LTD",
          "type": "对外开发/合作信",
          "mode": "对外",
          "status": "已发送",
          "note": "由真实已发送箱回填，messageId 见邮件原文"
        }
      ]
    },
    {
      "date": "2026-11-23",
      "weekday": "周一",
      "quotaUsed": 6,
      "quotaTotal": 50,
      "entries": [
        {
          "time": "08:30",
          "agent": "AI GB-Sales/Marketing（IMAP 对账）",
          "to": "info@sabatti.it",
          "subject": "Optics for Sabatti's 500 m trophy",
          "type": "对外开发/合作信",
          "mode": "对外",
          "status": "已发送",
          "note": "由真实已发送箱回填，messageId 见邮件原文"
        },
        {
          "time": "08:30",
          "agent": "AI GB-Sales/Marketing（IMAP 对账）",
          "to": "jaworzno@hubertech.pl",
          "subject": "Optyka dla Hubertech Sp. z o.o.",
          "type": "对外开发/合作信",
          "mode": "对外",
          "status": "已发送",
          "note": "由真实已发送箱回填，messageId 见邮件原文"
        },
        {
          "time": "09:15",
          "agent": "AI GB-Sales/Marketing（IMAP 对账）",
          "to": "info@danihi.co.il",
          "subject": "Optics for DANI-HI",
          "type": "对外开发/合作信",
          "mode": "对外",
          "status": "已发送",
          "note": "由真实已发送箱回填，messageId 见邮件原文"
        },
        {
          "time": "10:00",
          "agent": "AI GB-Sales/Marketing（IMAP 对账）",
          "to": "bestuur@asvprinshendrik.nl",
          "subject": "Equipment day for Prins Hendrik juniors",
          "type": "对外开发/合作信",
          "mode": "对外",
          "status": "已发送",
          "note": "由真实已发送箱回填，messageId 见邮件原文"
        },
        {
          "time": "10:00",
          "agent": "AI GB-Sales/Marketing（IMAP 对账）",
          "to": "info@deltaoptical.pl",
          "subject": "Optyka dla Delta Optical",
          "type": "对外开发/合作信",
          "mode": "对外",
          "status": "已发送",
          "note": "由真实已发送箱回填，messageId 见邮件原文"
        },
        {
          "time": "10:45",
          "agent": "AI GB-Sales/Marketing（IMAP 对账）",
          "to": "alrimaya@zaidg.com",
          "subject": "Optics for ALRIMAYA",
          "type": "对外开发/合作信",
          "mode": "对外",
          "status": "已发送",
          "note": "由真实已发送箱回填，messageId 见邮件原文"
        }
      ]
    },
    {
      "date": "2026-11-19",
      "weekday": "周四",
      "quotaUsed": 5,
      "quotaTotal": 50,
      "entries": [
        {
          "time": "17:28",
          "agent": "AI GB-Sales/Marketing（IMAP 对账）",
          "to": "optyss@orange.fr",
          "subject": "Optics for OPT'YSS French dealer range",
          "type": "对外开发/合作信",
          "mode": "对外",
          "status": "已发送",
          "note": "由真实已发送箱回填，messageId 见邮件原文"
        },
        {
          "time": "17:42",
          "agent": "AI GB-Sales/Marketing（IMAP 对账）",
          "to": "pccnsysu@gmail.com",
          "subject": "Signature check - inline logo, no attachment",
          "type": "对外开发/合作信",
          "mode": "对外",
          "status": "已发送",
          "note": "由真实已发送箱回填，messageId 见邮件原文"
        },
        {
          "time": "21:22",
          "agent": "AI GB-Sales/Marketing（IMAP 对账）",
          "to": "contact@varms.ch",
          "subject": "Red dots for VIDAL ARMS Switzerland",
          "type": "对外开发/合作信",
          "mode": "对外",
          "status": "已发送",
          "note": "由真实已发送箱回填，messageId 见邮件原文"
        },
        {
          "time": "23:04",
          "agent": "AI GB-Sales/Marketing（IMAP 对账）",
          "to": "info@lovactrgovina.hr",
          "subject": "Hunting optics for Lovac Trgovina",
          "type": "对外开发/合作信",
          "mode": "对外",
          "status": "已发送",
          "note": "由真实已发送箱回填，messageId 见邮件原文"
        },
        {
          "time": "23:55",
          "agent": "AI GB-Sales/Marketing（IMAP 对账）",
          "to": "eric@quantumshot.com",
          "subject": "Value optics for Quantum's Malta network",
          "type": "对外开发/合作信",
          "mode": "对外",
          "status": "已发送",
          "note": "由真实已发送箱回填，messageId 见邮件原文"
        }
      ]
    },
    {
      "date": "2026-11-18",
      "weekday": "周三",
      "quotaUsed": 17,
      "quotaTotal": 50,
      "entries": [
        {
          "time": "11:40",
          "agent": "AI GB-Sales/Marketing（IMAP 对账）",
          "to": "info@norconia.de",
          "subject": "Optics supply for Norconia's dealer network - GunBase tactical range",
          "type": "对外开发/合作信",
          "mode": "对外",
          "status": "已发送",
          "note": "由真实已发送箱回填，messageId 见邮件原文"
        },
        {
          "time": "11:58",
          "agent": "AI GB-Sales/Marketing（IMAP 对账）",
          "to": "info@knappworst.com",
          "subject": "Thermal & night-vision supply for Knappworst's optics range - GunBase",
          "type": "对外开发/合作信",
          "mode": "对外",
          "status": "已发送",
          "note": "由真实已发送箱回填，messageId 见邮件原文"
        },
        {
          "time": "13:37",
          "agent": "AI GB-Sales/Marketing（IMAP 对账）",
          "to": "info@lobo-tactical.com",
          "subject": "Optics & weapon lights for Lobo Tactical's outdoor range - GunBase",
          "type": "对外开发/合作信",
          "mode": "对外",
          "status": "已发送",
          "note": "由真实已发送箱回填，messageId 见邮件原文"
        },
        {
          "time": "13:37",
          "agent": "AI GB-Sales/Marketing（IMAP 对账）",
          "to": "contact@argos-armurerie.fr",
          "subject": "Optiques & lampes tactiques pour Argos Armurerie - GunBase",
          "type": "对外开发/合作信",
          "mode": "对外",
          "status": "已发送",
          "note": "由真实已发送箱回填，messageId 见邮件原文"
        },
        {
          "time": "13:49",
          "agent": "AI GB-Sales/Marketing（IMAP 对账）",
          "to": "info@helmuthofmann.de",
          "subject": "Value-tier optics for Hofmann's dealer portfolio - GunBase",
          "type": "对外开发/合作信",
          "mode": "对外",
          "status": "已发送",
          "note": "由真实已发送箱回填，messageId 见邮件原文"
        },
        {
          "time": "13:49",
          "agent": "AI GB-Sales/Marketing（IMAP 对账）",
          "to": "info@waffenschumacher.com",
          "subject": "Value-tier optics & lights for Schumacher's wholesale range - GunBase",
          "type": "对外开发/合作信",
          "mode": "对外",
          "status": "已发送",
          "note": "由真实已发送箱回填，messageId 见邮件原文"
        },
        {
          "time": "13:49",
          "agent": "AI GB-Sales/Marketing（IMAP 对账）",
          "to": "info@humbert.com",
          "subject": "Value-tier optics for Humbert's hunting range - GunBase",
          "type": "对外开发/合作信",
          "mode": "对外",
          "status": "已发送",
          "note": "由真实已发送箱回填，messageId 见邮件原文"
        },
        {
          "time": "13:49",
          "agent": "AI GB-Sales/Marketing（IMAP 对账）",
          "to": "info@valrima.lt",
          "subject": "Value-tier optics for Valrima's hunting range - GunBase",
          "type": "对外开发/合作信",
          "mode": "对外",
          "status": "已发送",
          "note": "由真实已发送箱回填，messageId 见邮件原文"
        },
        {
          "time": "13:49",
          "agent": "AI GB-Sales/Marketing（IMAP 对账）",
          "to": "info@bresciame.com",
          "subject": "Value-tier optics for Brescia Middle East's dealer network - GunBase",
          "type": "对外开发/合作信",
          "mode": "对外",
          "status": "已发送",
          "note": "由真实已发送箱回填，messageId 见邮件原文"
        },
        {
          "time": "13:49",
          "agent": "AI GB-Sales/Marketing（IMAP 对账）",
          "to": "sales@alsayad.ae",
          "subject": "Value-tier optics & weapon lights for Al Sayad - GunBase",
          "type": "对外开发/合作信",
          "mode": "对外",
          "status": "已发送",
          "note": "由真实已发送箱回填，messageId 见邮件原文"
        },
        {
          "time": "13:54",
          "agent": "AI GB-Sales/Marketing（IMAP 对账）",
          "to": "info@skyway.es",
          "subject": "Value-tier optics for SKWAirsoft's retail range - GunBase",
          "type": "对外开发/合作信",
          "mode": "对外",
          "status": "已发送",
          "note": "由真实已发送箱回填，messageId 见邮件原文"
        },
        {
          "time": "15:49",
          "agent": "AI GB-Sales/Marketing（IMAP 对账）",
          "to": "info@manfred-alberts.de",
          "subject": "Optics supply for Manfred Alberts' hunting range",
          "type": "对外开发/合作信",
          "mode": "对外",
          "status": "已发送",
          "note": "由真实已发送箱回填，messageId 见邮件原文"
        },
        {
          "time": "15:49",
          "agent": "AI GB-Sales/Marketing（IMAP 对账）",
          "to": "rpoptix@rpoptix.com",
          "subject": "Value-tier optics for rpoptix's Italian dealer network",
          "type": "对外开发/合作信",
          "mode": "对外",
          "status": "已发送",
          "note": "由真实已发送箱回填，messageId 见邮件原文"
        },
        {
          "time": "15:49",
          "agent": "AI GB-Sales/Marketing（IMAP 对账）",
          "to": "firma@nimrod.cz",
          "subject": "Optics supply for NIMROD's Czech catalogue",
          "type": "对外开发/合作信",
          "mode": "对外",
          "status": "已发送",
          "note": "由真实已发送箱回填，messageId 见邮件原文"
        },
        {
          "time": "15:49",
          "agent": "AI GB-Sales/Marketing（IMAP 对账）",
          "to": "info@albowardi.net",
          "subject": "Optics & weapon lights for Al Bawardi's hunting range",
          "type": "对外开发/合作信",
          "mode": "对外",
          "status": "已发送",
          "note": "由真实已发送箱回填，messageId 见邮件原文"
        },
        {
          "time": "17:21",
          "agent": "AI GB-Sales/Marketing（IMAP 对账）",
          "to": "3531885069@qq.com",
          "subject": "Optics range for value-tier distribution",
          "type": "对外开发/合作信",
          "mode": "对外",
          "status": "已发送",
          "note": "由真实已发送箱回填，messageId 见邮件原文"
        },
        {
          "time": "21:00",
          "agent": "AI GB-Sales/Marketing（IMAP 对账）",
          "to": "pccnsysu@gmail.com",
          "subject": "Red dot supply for hunting distributors",
          "type": "对外开发/合作信",
          "mode": "对外",
          "status": "已发送",
          "note": "由真实已发送箱回填，messageId 见邮件原文"
        }
      ]
    },
    {
      "date": "2026-11-20",
      "weekday": "周五",
      "quotaUsed": 7,
      "quotaTotal": 50,
      "entries": [
        {
          "time": "14:42",
          "agent": "AI-GB-Team（通道验证）",
          "to": "sales@gunbase-optics.com",
          "subject": "[通道验证] AI GB Team 自动发信链路测试 · 2026-11-20",
          "type": "系统验证",
          "mode": "内部",
          "status": "已发送",
          "messageId": "msg_Vj1m58jTZj1d8rgszz5ukss2kd8CDXTayzmm0Cc4V9ko_Q",
          "note": "确认无人工点击可直接发出，配额由 50 递减至 49"
        },
        {
          "time": "14:42",
          "agent": "AI GB-Marketing",
          "to": "sales@gunbase-optics.com",
          "subject": "[预演 1/2] 合作邀约 · Precision Optics × 射击运动协会青年项目 · 2026-11-20",
          "type": "合作邀约",
          "mode": "预演",
          "status": "已发送",
          "messageId": "msg_3Ow4r_uHGHnfkNZvb7SkAAU3OKdkCBv-hQMtmz8t3_5ERA",
          "note": "目标 ISSF 体系国家协会（DSB / UITS / FFTir）青年项目，绿灯方向"
        },
        {
          "time": "14:43",
          "agent": "AI GB-Marketing",
          "to": "sales@gunbase-optics.com",
          "subject": "[预演 2/2] 合作邀约 · 「Precision & Pour」精度主题咖啡联名 · 2026-11-20",
          "type": "合作邀约",
          "mode": "预演",
          "status": "已发送",
          "messageId": "msg_4UGx7WQM0saGEI5cwtmwSxvcuTh47-BigI3AZwcUdFuu2w",
          "note": "跨产业联名，店内不出现枪支图像，遵守 Google Ads 禁投类目"
        },
        {
          "time": "08:00",
          "agent": "AI GB-Sales/Marketing（IMAP 对账）",
          "to": "info@outdoor-enterprise.dk",
          "subject": "Optics for Outdoor Enterprise Denmark",
          "type": "对外开发/合作信",
          "mode": "对外",
          "status": "已发送",
          "note": "由真实已发送箱回填，messageId 见邮件原文"
        },
        {
          "time": "08:45",
          "agent": "AI GB-Sales/Marketing（IMAP 对账）",
          "to": "info@hofmantopsport.nl",
          "subject": "Optics for HTS Hofman Top Sport",
          "type": "对外开发/合作信",
          "mode": "对外",
          "status": "已发送",
          "note": "由真实已发送箱回填，messageId 见邮件原文"
        },
        {
          "time": "09:31",
          "agent": "AI GB-Sales/Marketing（IMAP 对账）",
          "to": "info@foxedo.de",
          "subject": "Optik für Foxedo GmbH",
          "type": "对外开发/合作信",
          "mode": "对外",
          "status": "已发送",
          "note": "由真实已发送箱回填，messageId 见邮件原文"
        },
        {
          "time": "10:16",
          "agent": "AI GB-Sales/Marketing（IMAP 对账）",
          "to": "iroda@magnum90.hu",
          "subject": "Optika – Magnum Vadász és Hajós",
          "type": "对外开发/合作信",
          "mode": "对外",
          "status": "已发送",
          "note": "由真实已发送箱回填，messageId 见邮件原文"
        }
      ]
    }
  ]
};

