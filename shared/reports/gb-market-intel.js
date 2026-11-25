/* AI GB-Marketing 每日合作情报（Daily Partner Intelligence）
 *
 * 所有者指令（2026-11-23）：每天早上交付「所有潜在品牌合作方」的最新消息 / 活动 / 合作，
 * 包含已发邮件、已入队、未触达三类，并在 Marketing PWA 呈现针对这些合作的战略与我方机会。
 *
 * 数据诚信约定（务必遵守）：
 *   - news[] 每条均为公开可核实来源，带 date / src / url，标 v:"verified"；
 *   - strategy / opp 为 GUNBASE 视角的策略推演，标 v:"model"，绝不冒充已建立合作；
 *   - 未检得某机构独立公开动态时，如实写「本轮未检得该机构独立公开动态」，只给同类信号，不编造；
 *   - 联系状态 contact: sent=已发 / queued=已入队待发 / uncontacted=未触达 / reference=仅标杆参考；
 *   - 一个机构只有一个归属方（owner），30 天内不重复触达；真实邮箱只存本机 outbound_owners.json，不入公开仓库；
 *   - days[] 按日期倒序累积，新的一天插入数组首位，历史永久保留。
 */
window.GB_MARKET_INTEL = {
  meta: {
    version: "1.0.0",
    cadence: "每日 08:30 (GMT+8) 由 AI GB-Marketing 发布；21:00 由 AI-GB-Team 在团队中心汇总",
    generatedAt: "2026-11-25 11:17 (GMT+8) · M1 补跑，原调度 08:10，延迟 187 分钟",
    owner: "AI GB-Marketing · 市场战术专家",
    scope: "全球 · 品牌合作方（已发 / 已入队 / 未触达）",
    brandStance: "GUNBASE 按中国台湾地区品牌（Taiwan-based）定位，不是内地品牌。定位分析以国际对中国台湾地区制造与台湾地区品牌的既有信任、合作经验为基础；诚实结论是产地标签信任度中等，真正可用的是同品类、可核实的国际背书。",
    dedupRule: "一个机构只有一个归属方。GB-Sales 已发或已入队的机构，Marketing 跳过；Marketing 已发或已入队的机构，Sales 跳过。命中即视为他人领地，30 天内不重复触达。真实邮箱只存本机。",
    poolNote: "全量池来自每日 07_枪械生产商名录（93 家 / 33 家有公开邮箱）与 08_全球枪店与俱乐部名录（2327 条 / 365 条有公开邮箱）。每日简报不可能逐条展开，故先给全量口径，再挑出当日有可核实新动态或高势能的高价值对象作重点跟踪，其余按类别信号覆盖。",
    integrity: "本文件所有『最新动态』均附来源与日期；策略与机会为推演，需所有者逐次授权后才可对外接触。不构成法律意见。"
  },

  days: [
    {
      date: "2026-11-25",
      weekday: "周三",
      generatedAt: "2026-11-25 11:17 (GMT+8) · 补跑：原调度 08:10，延迟 187 分钟，本机未在调度时刻触发，按实际时间如实记录",
      headline: "第 2 份合作情报（迟到补跑）：新检出欧洲射击联合会三年媒体协议、ISSF 赛场服务 MOU、SHOT Show 2027 截止节点，以及两条正在发生的时间窗（Purdey Game Cup 11/23-28、Walther Youth Cup 11/27-29）。品牌定位证据新增 1 条：玉晶光与 3M 的精密光学合作，但明确不是枪用光学背书。",

      kpi: [
        { k: "新增动态", v: "10", d: "近 30 天公开来源，逐条附 URL 与日期", tone: "green" },
        { k: "重点对象", v: "10", d: "新进雷达 4：ESC / Purdey / 玉晶光 / Columbia x BEAMS", tone: "blue" },
        { k: "新增定位证据", v: "1", d: "继承 11-23 全部 6 条，只增不删", tone: "teal" },
        { k: "归属锁定", v: "26", d: "Sales 24 + Marketing 2，Marketing 不触达", tone: "amber" },
        { k: "进行中窗口", v: "2", d: "Purdey Game Cup 11/23-28、Walther Youth Cup 11/27-29", tone: "amber" },
        { k: "待所有者拍板", v: "4", d: "ESC 接触授权 / SHOT Show 决策 / Purdey 2027 奖品 / D-03 对象池", tone: "amber" }
      ],

      positioning: {
        stance: "GUNBASE 按中国台湾地区品牌（Taiwan-based）定位，不是内地品牌。分析以国际对中国台湾地区制造与台湾地区品牌的既有信任、合作经验为出发点，但诚实结论是：产地标签不构成强信任状，对外叙事必须用『可验证的品类内证据』支撑。",
        verdict: "NIM 2025 调查中 Made in Taiwan 信任度 33%，仅比 Made in China 31% 高 2 个百分点，远低于德国 66%、日本 63%。因此不能写『来自台湾所以品质更好』；可用的是同品类、可核实的国际奖项、材料来源、冠军共创与渠道合作。",
        evidence: [
          { date: "2025-03", title: "国际 Made in 信任排名：台湾地区 33%、德国 66%、日本 63%", fact: "纽伦堡市场决策研究所（NIM）2025 年 3 月对 10 国 20,000 人调查，把产地列入最信任前两位的比例：德国 66%、瑞士 64%、日本 63%、法国/意大利/英国 57%、美国/欧盟 55%、台湾地区 33%、中国内地 31%、墨西哥 28%、印度 27%。", implication: "诚实结论：产地标签不够硬。对外话术必须以具体技术、第三方奖项、合作方姓名支撑，否则台湾制造反而容易被联想到低价代工。", src: "Visual Capitalist（引 NIM 2025-03 调查）", url: "visualcapitalist.com/ranked-the-worlds-most-trusted-made-in-labels", v: "verified" },
          { date: "2025-10", title: "英国实地体验后对中国台湾地区产品观感显著转正", fact: "TAITRA 与 TITA 在伦敦 Westfield White City 办 Taiwan Select 快闪展，25 个台湾精品品牌参展：95% 参观者对中国台湾地区产品观感变好、93% 未来可能购买、91% 愿意推荐、70% 看重创新与品质。", implication: "支持既有『体验日』主线：让对方上手摸产品比在邮件里讲产地更能改变认知。注意这是展会访客自选样本，存在选择偏差，不能当成全英民意。", src: "Business Mondays / Z News Service", url: "businessmondays.co.uk/?p=113875", v: "verified" },
          { date: "2025", title: "中国台湾地区国际品牌价值连续 6 年破百亿美元", fact: "台经院推动、Interbrand（ISO 10668 认证）鉴价的 2025 台湾最佳国际品牌价值：前 25 名总值 151.49 亿美元，年增 2.7%；华硕 12 度居首，联发科成长 45%。", implication: "说明中国台湾地区已有成熟的国际品牌经营体系，GUNBASE 可把『台湾地区精密制造与品牌体系』作为背景，但具体信任仍要落到自家产品参数与第三方证据。", src: "经济部产业发展署 MIT 网站 / China Times", url: "keid.nat.gov.tw/branding-taiwan/news/pressRelease_more?id=44c0b41d34f64d4ebeeda7e0b07b2f66", v: "verified" },
          { date: "2026", title: "同品类样板：Integrix 以台湾地区研发制造拿下美国年度光学奖", fact: "Leapers 旗下 INTEGRIX 高端光学线 2023 年推出，自有光学与机械设计、加工、组装、测试，采用日本 Ohara 与德国 Schott 镜片、标称 92% 透光率；iXF 4.5x28 被 American Rifleman 选为 2026 Golden Bullseye Optic of the Year，并与 Service Rifle 冠军 Nick Till 共同开发。Leapers 2018 年在台湾设 ISO 9001 工厂、2012 年在德国设 UTG Europe 配送中心。", implication: "与 GUNBASE 最贴近的可验证路径：台湾地区工程制造 + 德日光学材料 + 冠军共创 + 美国专业媒体奖项 + 欧洲本地配送。我方『精度 + 体验』叙事可直接对齐这个结构。", src: "Gun Trade World / Shooting Sports USA", url: "guntradeworld.com/leapers-35-years-of-manufacturing-investment", v: "verified" },
          { date: "2024 ~ 2025", title: "欧洲战术内容创作者参观台湾产线后转为经销商", fact: "斯洛文尼亚 Polenar Tactical 两位创办人参观 UTG 台湾产线后融资进货，成为 UTG 与 INTEGRIX 欧洲经销商；报道称其对 Ohara / Schott 镜片、铝合金一体加工与无尘室组装印象深刻。", implication: "给出具体的伙伴获取路径：先让专业内容创作者或教练看产线与品控，再谈经销或联合活动，比直接发产品目录有效。", src: "方格子（Polenar Tactical 参访纪实）", url: "vocus.cc/article/69aed5f4fd89780001914c14", v: "verified" },
          { date: "1980s 起", title: "中国台湾地区光学产业的国际技术合作历史", fact: "亚洲光学 1980 年成立于台中，1982 年与日本 SEKON 技术合作生产光学镜片、代工 Ricoh 镜头，并在美国 TASCO 技术移转下生产猎枪用瞄准镜。", implication: "可作为『台湾地区光学不是从零开始』的产业史背景；来源为百科类条目，正式对外提案前应找一手企业史料再引用。", src: "百度百科 / aVenture 公司资料", url: "baike.baidu.com/view/3282353.htm", v: "verified" },
          { date: "2026-11-19", title: "台湾地区精密光学厂玉晶光与 3M 达成战略合作，切入 AI 基础设施光学", fact: "中央社报道，中国台湾地区光学镜头厂玉晶光（3406）与 3M 集团战略合作，共同推进 3M 扩束光学技术（EBO）方案的研发、制造与产能扩充；董事长陈天庆称这是从消费性电子光学延伸至高速运算与 AI 基础设施光学的里程碑，产能预计 2026 年第 4 季至 2027 年依客户需求放量。报道未涉及枪用光学、射击赛事或 GUNBASE。", implication: "新增一条可核实的『台湾地区精密光学制造进入国际大厂长期合作』事实，支持我方以制造与协同能力参与合作的叙事；但它不是同品类光学奖项或射击渠道背书，严禁写成枪用光学获国际认可。", src: "中央社 CNA（2026-11-19 18:31）", url: "https://www.cna.com.tw/news/afe/202611190325.aspx", v: "verified" },
        ],
        playbook: [
          { id: "B1", title: "产地只做事实描述，不做信任主张", detail: "邮件与提案里 GUNBASE 写作 Taiwan-based / based in Taiwan，随后立刻接可验证细节（镜片来源、测试项目、第三方奖项、合作俱乐部名称）。不写『来自台湾，所以品质更好』这类无证据断言。", guard: "对外英文用 Taiwan-based / Taiwan region，不与国家并列；不做政治表述。" },
          { id: "B2", title: "复刻 Integrix 结构：材料 + 冠军 + 媒体 + 本地库存", detail: "四项背书按优先级补齐：镜片或镀膜来源、至少一位射手或教练的共创与署名、一篇第三方评测、欧洲或中东本地样品与库存点。每补一项就更新本区证据。", guard: "未有第三方文件或书面同意前，不得宣称已有合作或获奖。" },
          { id: "B3", title: "把工厂与品控变成内容，而不是保密", detail: "参考 Polenar 案例：邀请欧洲射击类内容创作者、俱乐部教练到产线或线上看品控流程，换取真实评测与经销或活动转化，与我方体验日打法合并。", guard: "涉及客户身份、报价、内部工艺参数的内容需所有者审批。" },
          { id: "B4", title: "体验优先于产地说明", detail: "英国快闪展数据显示上手体验能把观感提升 95%，所以俱乐部与靶场合作先给样品实测，再谈品牌故事；不在首封邮件里堆产地论述。", guard: "该数据来自展会访客自选样本，仅作方向参考，不当作普遍民意。" },
          { id: "B5", title: "讲合作结构，不讲产地自夸", detail: "新证据显示国际合作是按角色搭建的：玉晶光承担精密光学研发与量产、3M 提供 EBO 技术；ISSF 以 MOU 引入 FICS 做赛场服务；ESC 用三年媒体协议放大赛事。GUNBASE 对外提案应直接写明自己承担的具体角色（样品、测试、奖品、体验位、内容），不要先讲产地。", guard: "跨领域案例只作结构参考，不冒充同品类背书；所有合作身份需对方书面确认。" }
        ]
      },

      /* ===== 重点跟踪对象：已发 / 已入队 / 未触达 ===== */
      partners: [
        {
          name: "European Shooting Confederation (ESC)", country: "欧洲", region: "欧洲", type: "国际协会",
          contact: "uncontacted", owner: "未分配", sourceFile: "公开网络 / 组织雷达（新进）",
          tag: "未触达 · 新进 · 媒体放大中",
          news: [
            { date: "2026-11-12", title: "ESC 与 Warner Bros. Discovery Sports 签三年转播合作，并公布青训与赛制改革", detail: "SVG Europe 专访 ESC 秘书长 Yahor Aleinik：协议覆盖 Eurosport 1/2、TNT Sports 与 HBO Max，含直播、回放与集锦；首场为 10 月初希腊 Malakasa 欧飞碟锦标赛，下一场为 12 月马耳他 European Champions League。ESC 设 U16/U18/U23 与新 Solo/Duet/Trio 挑战赛制，并在 2025 年大会宣布拨款 20 万欧元支持成员协会发展项目（可用于购买运动器材与训练设施）；Aleinik 称首场内容的社交媒体与付费推广触达约 400 万。", src: "SVG Europe", url: "https://www.svgeurope.org/blog/headlines/focused-growth-the-european-shooting-confederation-on-growing-its-audience-through-a-new-deal-with-warner-bros-discovery-sports/", v: "verified" }
          ],
          strategy: "这是本轮势能最高的新对象：它同时具备欧洲覆盖、电视与流媒体放大、明确的青训与器材议题。对 GUNBASE 的现实入口不是买大赞助，而是围绕 U16/U18/U23 与挑战赛制提供光学器材支持或体验位，让装备出现在 ESC 的内容里。注意报道只讲到成员协会发展拨款，并未公布企业赞助方案，不能把『可接触』说成『已开放赞助』。",
          opp: { level: "yellow", title: "青训 / 挑战赛光学器材支持与内容曝光", why: "媒体协议把赛事价值放大，且 ESC 自述正在投资器材、设施与年轻运动员；但企业合作通道未见公开规则", action: "整理一页英文提案（身份写 Taiwan-based，只写可承担角色，不报价），等所有者授权后经官网公开渠道询问", gate: "不虚构赞助身份；未获授权不接触；需确认欧洲合规与样品落地", v: "model" }
        },
        {
          name: "ISSF 国际射击运动联合会", country: "全球", region: "全球", type: "国际协会",
          contact: "uncontacted", owner: "未分配", sourceFile: "公开网络 / 组织雷达",
          tag: "未触达 · 多哈世锦赛刚结束",
          news: [
            { date: "2026-11-09", title: "ISSF 多哈世锦赛引入 FICS 免费赛场脊医服务，依据去年签署的 MOU", detail: "ISSF 官网称，国际运动脊医联合会（FICS）在 Lusail Shooting Complex 为持赛事证件者提供免费服务，持续至 11 月 13 日；该安排来自 ISSF 与 FICS 去年签署的谅解备忘录，属 Athletes First 倡议。", src: "ISSF 官网 news/5330", url: "https://issf-sports.org/news/5330", v: "verified" },
            { date: "2026-11-02", title: "2026 多哈步枪/手枪/飞碟世锦赛开幕，11 月 1 日至 14 日举行", detail: "ISSF 官网报道开幕式在卡塔尔举行，卡塔尔射击射箭协会代表与 ISSF 主席 Luciano Rossi 出席；该赛事是通往洛杉矶 2028 的资格周期开端。", src: "ISSF 官网 news/5307", url: "https://issf-sports.org/news/5307", v: "verified" }
          ],
          strategy: "本轮新信号是 ISSF 的合作不只卖展位：它用 MOU 把专业服务组织嵌进赛场支持体系，并把运动员福利放在叙事中心。GUNBASE 若走 ISSF 路线，应把提案写成『可持续的赛事支持角色』而不是一次性赞助；11-23 已确认的 Relegend 内地品牌先例仍然不得作为我方定位依据。",
          opp: { level: "yellow", title: "官方供应商 / 青年项目器材支持", why: "合作结构对外部组织开放，但多哈赛事已结束，需等下一轮周期节点", action: "把 FICS-MOU 模式写入英文提案的『合作形态』页，不报金额，等授权", gate: "赞助预算与代表权需所有者决定；不沿用内地品牌叙事", v: "model" }
        },
        {
          name: "SHOT Show 2027（NSSF）", country: "美国", region: "北美", type: "行业展会",
          contact: "uncontacted", owner: "未分配", sourceFile: "公开网络 / 行业日历",
          tag: "未触达 · 展前 55 天",
          news: [
            { date: "2026-11-04", title: "NSSF 发布参展提醒：酒店紧张、多项截止节点已过、体验区仍余少量席位", detail: "官方 Insider 称 Palazzo、Caesars Palace、Wynn 折扣房已售罄，Venetian 等接近满房；11/6 供应商展示名录、11/11 线索采集早鸟、11/13 签证函、11/17 新品指南与车辆许可等节点集中到期；Caesars Forum 内的 SHOT Show Archery Range 仍余少量名额，供参展商做现场试用演示。", src: "SHOT Show 官网 Insider", url: "https://shotshow.org/?p=46920", v: "verified" },
            { date: "2026-11-25", title: "官方参展页显示展位仍可预订，倒计时约 56 天", detail: "SHOT Show 2027 参展页仍列 Still Available Exhibit Floor Space，并列出 50K 观众、2K 媒体、100 国家的上届口径；展会 2027 年 1 月 19 日至 22 日在拉斯维加斯 Venetian Expo 与 Caesars Forum 举行。本条为本次检索时页面状态，非新闻发布日期。", src: "SHOT Show 官网参展页", url: "https://www.shotshow.org/en/Exhibitors/", v: "verified" }
          ],
          strategy: "官方的『现场试用演示』思路与 GUNBASE 的体验日打法完全一致，是可以借用的展会形式；但 11 月多数省钱与资料节点已过，酒店紧张，临时参展的成本与执行风险升高。即使不参展，1 月 19 日至 22 日仍是全年决策者最集中的外联窗口。",
          opp: { level: "yellow", title: "体验式展位 / 展期集中外联", why: "窗口势能最高，但截止节点、预算与 B2B 资质是硬门槛", action: "请所有者尽快做 go/no-go；不参展也锁定 1 月外联周", gate: "展位与酒店预算、行业资质、美国合规；未授权不接触", v: "model" }
        },
        {
          name: "Walther (Carl Walther GmbH)", country: "德国", region: "欧洲/北美", type: "枪械生产商",
          contact: "uncontacted", owner: "未分配", sourceFile: "07_枪械生产商名录 / 手枪类",
          tag: "未触达 · 赛事距 2 天",
          news: [
            { date: "2026-11-21", title: "第 12 届 Walther Youth Cup 发布最终赛程与各国报名名单，11/27-29 开赛", detail: "赛事官网 sdshooting.rs 列出 11 月 19 日最终赛程与 11 月 21 日报名名单：塞尔维亚 Smederevo，U16/U18/U21，40 个射击位、决赛馆 10 位、观众容量 300+，来自 16 国以上；总赞助商 Carl Walther GmbH Sportwaffen 提供 LP 500 气手枪与 LG 400 气步枪等奖品。", src: "SD Shooting 官方赛事页", url: "https://www.sdshooting.rs/", v: "verified" }
          ],
          strategy: "赛程与名单已发布，说明赛事进入执行状态；距开赛仅 2 天，实物样品跨境寄送基本来不及，硬塞赞助既不现实也伤品牌。合理动作是把 2026 作为观察场，直接锁定 2027 赛季的奖品或体验位谈判，并用本届结果与主办方公开联系方式作为依据。",
          opp: { level: "yellow", title: "2027 青年杯光学奖品 / 体验位", why: "赛事结构已验证且明确接受器材类奖品，但 2026 窗口实质关闭", action: "赛后整理一页提案，等授权后询问 2027 合作；本轮不发邮件", gate: "奖品样品与跨境寄送成本需确认；不承诺现金赞助", v: "model" }
        },
        {
          name: "Purdey at the Royal Berkshire（James Purdey & Sons）", country: "英国", region: "欧洲", type: "持牌靶场 / 品牌赛事",
          contact: "uncontacted", owner: "未分配", sourceFile: "公开网络 / 英国持牌靶场（新进）",
          tag: "未触达 · 赛事进行中",
          news: [
            { date: "2026-10-16", title: "Purdey 首届 Game Cup 于 11 月 23 至 28 日举行，100 靶模拟猎鸟场景", detail: "Fieldsports Journal 报道，英国枪厂 James Purdey & Sons 在其 Royal Berkshire 射击学校办首届 Game Cup：单人 100 靶、每人 55 英镑（含靶不含弹），设 Top Gun 与 Top Side-by-Side 两个组别，奖品各含 1000 发弹药与 Purdey Sporting Agency 猎场日席位。赛事报道发布于 10 月 16 日，但赛事本身在本次检索时正在进行。官方活动链接经访问返回 404，故以行业媒体为来源并标注该限制。", src: "Fieldsports Journal", url: "https://fieldsports-journal.com/news/purdey-game-cup-clay-competition", v: "verified" }
          ],
          strategy: "这是英国持牌场地里少见的品牌自办赛事，奖品结构已经有明确赞助位（弹药与猎场日），说明它愿意用实物与服务组合做合作。2026 赛事已在场内，本轮只做赛况观察；真正可谈的是 2027 年奖品或精度体验区，并把『不出现武器功能宣传』作为内容边界。",
          opp: { level: "yellow", title: "2027 Game Cup 光学奖品 / 体验区", why: "奖品赞助结构已验证、场地持牌、时间固定；但 2026 已开赛且官方活动页失效", action: "赛后核实结果与官方联系入口，形成 2027 提案；等所有者授权", gate: "英国持牌场地与合规、样品成本、官方联系方式需先核实", v: "model" }
        },
        {
          name: "Sabatti S.p.A.", country: "意大利", region: "欧洲", type: "枪械生产商",
          contact: "sent", owner: "GB-Marketing", sourceFile: "07_枪械生产商名录 / 归属表",
          tag: "11-23 16:30 已投递 · 禁止重发",
          news: [
            { date: "2026-11-25", title: "本轮未检得该机构近 30 天独立公开动态", detail: "官网 sabatti.it 最新可见新闻仍为 2025-08-13 的美国碳纤维单体枪托专利，未见 10 月 26 日至 11 月 25 日的独立新品、赛事或合作公告；11-23 情报中列出的 Trofeo Fiocchi-Sabatti 与 IWA 2026 内容不重复计入本轮新增。", src: "Sabatti 官网新闻页（检索日 2026-11-25）", url: "https://www.sabatti.it/it/news", v: "verified" }
          ],
          strategy: "合作信已于 11-23 真实投递，Marketing 现在唯一合规动作是等待回信，不追加邮件、不借新动态二次触达。若对方回复，沿用 F-Class 赛事已有光学品牌在场的切入逻辑谈第二赞助位或体验枪方案。",
          opp: { level: "yellow", title: "回信后谈 F-Class 光学赞助 / 体验日", why: "对象已占用且已触达，新增动作取决于对方回信", action: "不做任何新外发；把本轮『官网无新动态』写入后续跟进备注", gate: "30 天锁定期；重发会构成骚扰；报价需所有者授权", v: "model" }
        },
        {
          name: "ASV Prins Hendrik", country: "荷兰", region: "欧洲", type: "射击俱乐部",
          contact: "sent", owner: "GB-Marketing", sourceFile: "08_全球枪店与俱乐部名录 / 归属表",
          tag: "11-23 18:00 已投递 · 禁止重发",
          news: [
            { date: "2026-11-25", title: "本轮未检得该俱乐部近 30 天独立新闻，官网确认持牌与青训结构", detail: "官网确认其为 Amersfoortse Schietsportvereniging Prins Hendrik，青少年用气步枪/气手枪并由资深会员与教练带训，场馆有 3 个靶区、每区 5 个射击位，可设 10/12/25/50 米，所有会员登记于荷兰 KNSA。官网没有 10 月 26 日至 11 月 25 日的独立新闻条目；这补充了联系依据，但不构成新动态。", src: "ASV Prins Hendrik 官网（检索日 2026-11-25）", url: "https://www.asvprinshendrik.nl", v: "verified" }
          ],
          strategy: "官网信息把体验日提案的前提坐实了：10 米气步枪/气手枪、青训有人带、靶位与 KNSA 体系明确。合作信已投递，后续只能在对方回信后给样品清单与流程模板，不得再发新邮件。",
          opp: { level: "yellow", title: "回信后安排会员光学体验日", why: "场地与青训结构已核实，但对象已触达且本轮无新公开动态", action: "等待回信；把 10 米气枪与青少年带训信息存入跟进备注", gate: "30 天锁定期；样品寄送与荷兰持牌场地合规需确认", v: "model" }
        },
        {
          name: "GUNBASE 已发客户群（Sales 侧 24 家）", country: "德国/法国/西班牙/意大利/瑞士/荷兰/中东等", region: "欧洲/中东", type: "已发客户动态",
          contact: "sent", owner: "GB-Sales", sourceFile: "outbound_owners.json（本机，仅域名）",
          tag: "已发/已入队 · Marketing 一律跳过",
          news: [
            { date: "2026-11-25", title: "本轮未逐家检得独立公开动态，仅记录类别级信号", detail: "本轮按归属表逐家核对后，未检得这 24 家在近 30 天的独立公开新闻；可核实的类别信号是 ESC 的媒体协议与 Purdey 的品牌自办赛事，说明欧洲射击市场正在同时放大内容曝光与体验型赛事。它们是类别信号，不代表上述具体客户自身动态。", src: "本机归属表 + ESC / Fieldsports Journal 公开来源", url: "", v: "verified" }
          ],
          strategy: "Marketing 对该群只做情报反哺：把 ESC 内容放大与 Purdey 赛事奖品结构整理成话术包给 Sales，自己不触达。遵守一个机构一个归属方与 30 天锁定期。",
          opp: { level: "yellow", title: "归属锁定 + 类别情报反哺 Sales", why: "24 家已被 Sales 占用，直接触达会破坏契约", action: "把两条类别信号写入给 Sales 的周话术包，不发任何邮件", gate: "不得外联；不把类别信号冒充具体客户动态", v: "model" }
        },
        {
          name: "跨产业联名标杆群（Columbia x BEAMS / Community Coffee x Mossy Oak）", country: "美国/日本", region: "北美/亚太", type: "跨产业标杆",
          contact: "reference", owner: "参考", sourceFile: "公开网络 / 跨产业线索",
          tag: "仅策略参考 · 非触达对象",
          news: [
            { date: "2026-11-21", title: "Columbia x BEAMS 复古户外胶囊在日本发售，含狩猎图案卫衣与迷彩抓绒帽", detail: "BEAMS 与 Columbia 以 1986 年 Bugaboo Jacket 为蓝本做双面穿复刻，11 月 4 日开启预售、11 月 21 日在日本 BEAMS 门店与网店发售；三件单品含 reversible 夹克 37,400 日元、狩猎图案卫衣 15,400 日元、迷彩/棕色抓绒帽 5,940 日元。该报道依据 BEAMS 官方商品页与社媒信息整理。", src: "JustFresh（引 BEAMS 官方商品页与社媒）", url: "https://www.justfresh.co/fashion/columbia-beams-bugaboo-reversible-jacket-november-21", v: "verified" },
            { date: "2026-11-17", title: "Community Coffee x Mossy Oak Camp Blend 进入在售期，持续至 2027 年 2 月", detail: "官方新闻稿确认该限量咖啡 11 月 17 日上线官网、便利店与独立杂货，12 月进 Amazon，12 盎司建议价 12.99 美元，售至 2027 年 2 月；包装用 Mossy Oak Bottomland 迷彩，叙事围绕出猎前的清晨仪式。此条为 11-23 已记录案例的持续状态，不计入本轮新增。", src: "PR Newswire / Community Coffee 公告", url: "https://www.prnewswire.com/news-releases/fuel-your-hunt-community-coffee-and-mossy-oak-launch-limited-edition-camp-blend-302941184.html", v: "verified" }
          ],
          strategy: "新案例把『地域文化资产 + 复古户外符号 + 限时胶囊』又验证了一次：不造新品类、不谈性能，用既有日常物件承载身份。GUNBASE 可复刻为精度主题的晨间仪式周边，但全程不出现枪支图像、不做武器功能宣传。",
          opp: { level: "green", title: "复刻限时联名模板", why: "两个 2026 年 11 月案例都验证了低风险联名结构", action: "把胶囊时长、价格带与渠道选择写进联名 proposal 素材", gate: "落地城市、预算与联名方需所有者决定；本轮不接触任何品牌", v: "model" }
        },
        {
          name: "玉晶光（Genius Electronic Optical）x 3M", country: "中国台湾地区", region: "亚太", type: "精密光学标杆 / 定位证据",
          contact: "reference", owner: "参考", sourceFile: "公开网络 / 定位证据雷达（新进）",
          tag: "仅定位证据 · 非合作对象",
          news: [
            { date: "2026-11-19", title: "玉晶光与 3M 战略合作推进 EBO 光学方案研发制造与产能扩充", detail: "中央社报道，双方共同推进 3M 扩束光学技术（EBO）方案的研发、制造与产能扩充，应用指向 AI 服务器与数据中心；公司目标 2027 年整体营收成长 20%，EBO 产能 2026 年第 4 季起放量。报道未涉及枪用光学或射击运动。", src: "中央社 CNA", url: "https://www.cna.com.tw/news/afe/202611190325.aspx", v: "verified" }
          ],
          strategy: "此条只进入品牌定位证据库，用于说明台湾地区精密光学制造能进入国际长期技术合作；它是跨领域案例，不是同品类背书。GUNBASE 不因此宣称自己有 3M 或同等材料合作，也不把它写进对客户的资质描述。",
          opp: { level: "red", title: "仅作定位证据，不作合作对象", why: "跨领域龙头不是可触达伙伴，且借其背书会造成事实误述", action: "只在内部提案的产业背景页引用，并附来源与边界说明", gate: "不得宣称合作、供应关系或同品类获奖", v: "model" }
        }
      ],

      /* ===== 跨对象战略打法 ===== */
      plays: [
        {
          id: "P1", title: "两条正在发生的时间窗，一条马上关上", level: "核心",
          detail: "Purdey Game Cup 11/23-28 正在进行，Walther Youth Cup 11/27-29 仅剩 2 天，12 月 ESC European Champions League 在马耳他。实物样品已赶不上前两场，正确动作是观察赛果、锁定 2027 赞助位；12 月 ESC 线也不做临时硬塞，先做提案。",
          basis: "Fieldsports Journal 2026-10-16 / SD Shooting 官方赛事页 2026-11-21 / SVG Europe 2026-11-12"
        },
        {
          id: "P2", title: "合作价值正在被媒体放大，但入口仍要从小到大", level: "核心",
          detail: "ESC 用三年协议把赛事送上 Eurosport 与 HBO Max，首场推广已报约 400 万触达；ISSF 用 MOU 把 FICS 赛场服务纳入 Athletes First。两者都说明外部伙伴有位置，但公开的都不是『买赞助』入口。GUNBASE 应从器材支持、体验位、内容素材这类可承担角色切入。",
          basis: "SVG Europe 2026-11-12 / ISSF news/5330 2026-11-09"
        },
        {
          id: "P3", title: "产地只做事实描述，同品类证据才做信任主张", level: "核心",
          detail: "新证据是台湾地区精密光学厂玉晶光与 3M 的 EBO 合作，证明的是制造与协同能力，不是枪用光学获奖。沿用 11-23 的判断：NIM 调查中 Made in Taiwan 信任度 33%，仅高于内地 31%，远低于德国 66% 与日本 63%；对外只写 Taiwan-based，随后接可验证的具体角色与第三方法实。",
          basis: "中央社 2026-11-19 / Visual Capitalist 引 NIM 2025-03 / 11-23 定位证据库"
        },
        {
          id: "P4", title: "联名卖的是仪式与符号，不是参数", level: "重点",
          detail: "Community Coffee x Mossy Oak 售至 2027 年 2 月，Columbia x BEAMS 用 1986 年经典款做限时胶囊。两者的共同点是既有的日常仪式、可识别的地域或复古符号、明确限时窗口，且都不需要新品类研发。",
          basis: "PR Newswire 2026-11-17 / JustFresh 引 BEAMS 官方信息 2026-11-21"
        },
        {
          id: "P5", title: "归属与诚信优先于凑数", level: "铁律",
          detail: "26 家已发或已入队对象仍在 30 天锁定期内，Marketing 只做类别反哺；本轮新增的 4 个对象全部标未分配，未经所有者授权不接触。Sabatti 与 Prins Hendrik 官网本轮没有新动态，不为了制造『新进展』而改写旧新闻。",
          basis: "outbound_owners.json（本机）/ 指令板 D-03 / 各对象官网检索结果"
        }
      ],

      /* ===== 时间窗日历 ===== */
      windows: [
        { date: "2026-11-23 ~ 28", item: "Purdey Game Cup（英国 Royal Berkshire，进行中）", gap: "剩 3 天", action: "本轮不追投；看赛果，谈 2027 奖品或体验位", tone: "amber" },
        { date: "2026-11-27 ~ 29", item: "第 12 届 Walther Youth Cup（塞尔维亚 Smederevo）", gap: "2 天", action: "实物样品已来不及；锁定 2027 赛季", tone: "amber" },
        { date: "2026-12", item: "ESC European Champions League（马耳他，WBD 平台直播）", gap: "本月", action: "以器材支持提案切入，不做临时硬塞", tone: "blue" },
        { date: "2027-01-19 ~ 22", item: "SHOT Show 2027（拉斯维加斯）", gap: "55 天", action: "所有者做 go/no-go；不参展也锁定 1 月外联周", tone: "amber" },
        { date: "2027-02-12 ~ 14", item: "British Shooting Show（NEC Birmingham）", gap: "79 天", action: "作为英国线下曝光的备选窗口，先观察成本", tone: "green" }
      ],

      /* ===== 归属提醒（给 Sales）===== */
      dedupNotice: [
        "Sabatti S.p.A.（GB-Marketing，11-23 16:30 已投递）与 ASV Prins Hendrik（GB-Marketing，11-23 18:00 已投递）严禁重发；两者官网本轮未检得近 30 天新动态，不制造新由头。",
        "Sales 已发/已入队 24 家 + Marketing 已发 2 家，共 26 家在 30 天锁定期内；Marketing 只做类别情报反哺，不触达。",
        "本轮新增的 ESC、ISSF、NSSF/SHOT Show、Walther、Purdey 均标 owner=未分配；按 D-03 需所有者批准后才可入队，本任务不发对外邮件、不改发送队列。",
        "指令板 D-03 要求 18:00 前交付 ≥3 个真实协会/俱乐部/媒体对象（含官网 URL、联系依据、当地净空窗）；本条目的 ESC / ISSF / SHOT Show / Walther / Purdey 可供 M2 另线筛选，是否入队由所有者决定。"
      ],

      escalations: [
        { item: "是否授权接触 ESC 的青训 / 挑战赛器材支持窗口", why: "媒体放大与 20 万欧元成员协会发展拨款同时存在，但企业合作通道未见公开规则", blocks: "欧洲协会线从情报转提案" },
        { item: "SHOT Show 2027 参展 go / no-go", why: "酒店紧张、11 月多项截止已过，展位与预算需立即决定", blocks: "1 月外联与体验式展位打法" },
        { item: "Purdey 2027 Game Cup 是否预留奖品 / 体验位预算", why: "2026 赛事已开赛，只有转 2027 才谈得动", blocks: "英国持牌靶场线" },
        { item: "D-03 的真实对象池是否批准入队（≥3 个）", why: "本任务只研究不触达；M2 另线须经所有者批准后才可发信，且不得重发 11-23 两封", blocks: "Marketing 今日 0/2 封邀约的后续推进" }
      ],

      dataNote: "已读指令板 · 2026-11-25 11:05（M1 按 D-03 执行）。本条目为 08:10 调度后的补跑，generatedAt 记录实际完成时刻 11:17（延迟 187 分钟），不伪称按时。新增 10 条动态均来自本次可核实的公开来源，逐条在对象卡内附 URL 与日期；Sabatti、Prins Hendrik 与 Sales 已发群本轮未检得独立新动态，已如实写明。品牌定位继承 11-23 全部 6 条证据，只增补 1 条 2026-11-19 中央社证据与 1 条打法；玉晶光与 3M 合作属跨领域事实，不是枪用光学或射击渠道背书。策略与机会均标 v:model，不代表已建立合作；真实邮箱、Token 一律不写入公开文件。中国台湾地区品牌对外只写 Taiwan-based / based in Taiwan，不与国家并列、不做政治表述。"
    },
    {
      date: "2026-11-23",
      weekday: "周一",
      generatedAt: "2026-11-23 09:40 (GMT+8)",
      headline: "第 1 份每日合作情报：从 2420 家全量池中锁定 16 个高价值对象；今日最值钱的不是新线索，而是三条可核实的时间窗（Walther 青年杯 11/27、SHOT Show 2027 展位、JAGD & HUND 2027 联合体验区）——合作要踩窗口，不是拼词。",

      kpi: [
        { k: "全量池", v: "2420", d: "生产商 93 + 门店/俱乐部 2327", tone: "blue" },
        { k: "有公开邮箱", v: "398", d: "33 + 365（不含个人姓名邮箱）", tone: "blue" },
        { k: "重点跟踪", v: "16", d: "今日有可核实动态或高势能", tone: "green" },
        { k: "已发/已入队", v: "26", d: "Sales 24 + Marketing 2", tone: "amber" },
        { k: "新增动态", v: "14", d: "2026 年公开来源，逐条附 URL", tone: "green" },
        { k: "可启动机会", v: "9", d: "绿灯 9 / 黄灯 4 / 红灯 3", tone: "teal" }
      ],


      /* ===== GUNBASE 品牌定位与国际信任基础（中国台湾地区品牌）===== */
      positioning: {
        stance: "GUNBASE 按中国台湾地区品牌（Taiwan-based）定位，不是内地品牌。分析以国际对中国台湾地区制造与台湾地区品牌的既有信任、合作经验为出发点，但诚实结论是：产地标签不构成强信任状，对外叙事必须用『可验证的品类内证据』支撑。",
        verdict: "NIM 2025 调查中 Made in Taiwan 信任度 33%，仅比 Made in China 31% 高 2 个百分点，远低于德国 66%、日本 63%。因此不能写『来自台湾所以品质更好』；可用的是同品类、可核实的国际奖项、材料来源、冠军共创与渠道合作。",
        evidence: [
          { date: "2025-03", title: "国际 Made in 信任排名：台湾地区 33%、德国 66%、日本 63%", fact: "纽伦堡市场决策研究所（NIM）2025 年 3 月对 10 国 20,000 人调查，把产地列入最信任前两位的比例：德国 66%、瑞士 64%、日本 63%、法国/意大利/英国 57%、美国/欧盟 55%、台湾地区 33%、中国内地 31%、墨西哥 28%、印度 27%。", implication: "诚实结论：产地标签不够硬。对外话术必须以具体技术、第三方奖项、合作方姓名支撑，否则台湾制造反而容易被联想到低价代工。", src: "Visual Capitalist（引 NIM 2025-03 调查）", url: "visualcapitalist.com/ranked-the-worlds-most-trusted-made-in-labels", v: "verified" },
          { date: "2025-10", title: "英国实地体验后对中国台湾地区产品观感显著转正", fact: "TAITRA 与 TITA 在伦敦 Westfield White City 办 Taiwan Select 快闪展，25 个台湾精品品牌参展：95% 参观者对中国台湾地区产品观感变好、93% 未来可能购买、91% 愿意推荐、70% 看重创新与品质。", implication: "支持既有『体验日』主线：让对方上手摸产品比在邮件里讲产地更能改变认知。注意这是展会访客自选样本，存在选择偏差，不能当成全英民意。", src: "Business Mondays / Z News Service", url: "businessmondays.co.uk/?p=113875", v: "verified" },
          { date: "2025", title: "中国台湾地区国际品牌价值连续 6 年破百亿美元", fact: "台经院推动、Interbrand（ISO 10668 认证）鉴价的 2025 台湾最佳国际品牌价值：前 25 名总值 151.49 亿美元，年增 2.7%；华硕 12 度居首，联发科成长 45%。", implication: "说明中国台湾地区已有成熟的国际品牌经营体系，GUNBASE 可把『台湾地区精密制造与品牌体系』作为背景，但具体信任仍要落到自家产品参数与第三方证据。", src: "经济部产业发展署 MIT 网站 / China Times", url: "keid.nat.gov.tw/branding-taiwan/news/pressRelease_more?id=44c0b41d34f64d4ebeeda7e0b07b2f66", v: "verified" },
          { date: "2026", title: "同品类样板：Integrix 以台湾地区研发制造拿下美国年度光学奖", fact: "Leapers 旗下 INTEGRIX 高端光学线 2023 年推出，自有光学与机械设计、加工、组装、测试，采用日本 Ohara 与德国 Schott 镜片、标称 92% 透光率；iXF 4.5x28 被 American Rifleman 选为 2026 Golden Bullseye Optic of the Year，并与 Service Rifle 冠军 Nick Till 共同开发。Leapers 2018 年在台湾设 ISO 9001 工厂、2012 年在德国设 UTG Europe 配送中心。", implication: "与 GUNBASE 最贴近的可验证路径：台湾地区工程制造 + 德日光学材料 + 冠军共创 + 美国专业媒体奖项 + 欧洲本地配送。我方『精度 + 体验』叙事可直接对齐这个结构。", src: "Gun Trade World / Shooting Sports USA", url: "guntradeworld.com/leapers-35-years-of-manufacturing-investment", v: "verified" },
          { date: "2024 ~ 2025", title: "欧洲战术内容创作者参观台湾产线后转为经销商", fact: "斯洛文尼亚 Polenar Tactical 两位创办人参观 UTG 台湾产线后融资进货，成为 UTG 与 INTEGRIX 欧洲经销商；报道称其对 Ohara / Schott 镜片、铝合金一体加工与无尘室组装印象深刻。", implication: "给出具体的伙伴获取路径：先让专业内容创作者或教练看产线与品控，再谈经销或联合活动，比直接发产品目录有效。", src: "方格子（Polenar Tactical 参访纪实）", url: "vocus.cc/article/69aed5f4fd89780001914c14", v: "verified" },
          { date: "1980s 起", title: "中国台湾地区光学产业的国际技术合作历史", fact: "亚洲光学 1980 年成立于台中，1982 年与日本 SEKON 技术合作生产光学镜片、代工 Ricoh 镜头，并在美国 TASCO 技术移转下生产猎枪用瞄准镜。", implication: "可作为『台湾地区光学不是从零开始』的产业史背景；来源为百科类条目，正式对外提案前应找一手企业史料再引用。", src: "百度百科 / aVenture 公司资料", url: "baike.baidu.com/view/3282353.htm", v: "verified" }
        ],
        playbook: [
          { id: "B1", title: "产地只做事实描述，不做信任主张", detail: "邮件与提案里 GUNBASE 写作 Taiwan-based / based in Taiwan，随后立刻接可验证细节（镜片来源、测试项目、第三方奖项、合作俱乐部名称）。不写『来自台湾，所以品质更好』这类无证据断言。", guard: "对外英文用 Taiwan-based / Taiwan region，不与国家并列；不做政治表述。" },
          { id: "B2", title: "复刻 Integrix 结构：材料 + 冠军 + 媒体 + 本地库存", detail: "四项背书按优先级补齐：镜片或镀膜来源、至少一位射手或教练的共创与署名、一篇第三方评测、欧洲或中东本地样品与库存点。每补一项就更新本区证据。", guard: "未有第三方文件或书面同意前，不得宣称已有合作或获奖。" },
          { id: "B3", title: "把工厂与品控变成内容，而不是保密", detail: "参考 Polenar 案例：邀请欧洲射击类内容创作者、俱乐部教练到产线或线上看品控流程，换取真实评测与经销或活动转化，与我方体验日打法合并。", guard: "涉及客户身份、报价、内部工艺参数的内容需所有者审批。" },
          { id: "B4", title: "体验优先于产地说明", detail: "英国快闪展数据显示上手体验能把观感提升 95%，所以俱乐部与靶场合作先给样品实测，再谈品牌故事；不在首封邮件里堆产地论述。", guard: "该数据来自展会访客自选样本，仅作方向参考，不当作普遍民意。" }
        ]
      },

      /* ===== 重点跟踪对象：已发 / 已入队 / 未触达 ===== */
      partners: [
        {
          name: "Sabatti S.p.A.", country: "意大利", region: "欧洲", type: "枪械生产商",
          contact: "queued", owner: "GB-Marketing", sourceFile: "07_枪械生产商名录 / 生产商 #1",
          tag: "今日 17:15（北京）发合作信",
          news: [
            { date: "2026", title: "Trofeo Fiocchi-Sabatti 500 米赛第 11 届落幕", detail: "意大利 Faicchio 举行，冠军 Alessandro Marano；赛事强制统一使用 Sabatti .308 Win 步枪 + Fiocchi Exacta 175gr 弹药，以消除复装差异、考验纯射手技术。官方还向无枪选手提供 Sabatti SSP 步枪与 Sightmark Latitude 8-32x60 F-Class 光学，降低入门门槛。", src: "ColdBore", url: "coldbore.life/article/alessandro-marano-claims-trofeo-fiocchi-sabatti-2026", v: "verified" },
            { date: "2026-02-26 ~ 03-01", title: "IWA 2026 推出 Lyra 与 SSP-223", detail: "纽伦堡 IWA 2026 共 49 国 1050 家参展。Sabatti 推出 Lyra 入门级栓动猎枪（Blizzard 三闭锁枪机、面向年轻新猎人）与 SSP-223（Superior Precision 精英线、.223 Rem、60 度三闭锁）。", src: "知猫 IWA 2026 新品巡礼", url: "knowcat.cn/n/20260730/1417734.html", v: "verified" },
            { date: "2026", title: "Oblivion F-Class 新枪温控专利", detail: "Elite 线 Oblivion 采用已获国际专利的 Barrel Block 系统，把枪管/机匣热量导向底盘，解决长序列射击中的温漂问题，面向 F-Class Open / TR。", src: "Caccia In Fiera", url: "cacciainfiera.it/en?p=8926", v: "verified" }
          ],
          strategy: "它是枪厂不是买家，正确打法是品牌联合曝光而非推销。切入点是它的赛事生态：Trofeo Fiocchi-Sabatti 已用 Sightmark 光学做体验枪配置，说明它接受『光学品牌 + 赛事』的赞助结构。GUNBASE 可争取第二光学赞助位或体验日联合，用 F-Class 精度叙事对齐我方产品定位；IWA 新枪 Lyra 面向年轻猎人，配套入门光学是天然话题。",
          opp: { level: "green", title: "F-Class 赛事光学赞助 / 体验日", why: "赛事已验证同类合作结构（Sightmark 在场），非首例、无需教育对方", action: "今日合作信按既定计划发出；回信后报价第二赞助位与体验枪方案", gate: "赞助权益与样品成本需所有者确认；不发报价、不做承诺", v: "model" }
        },
        {
          name: "ASV Prins Hendrik", country: "荷兰", region: "欧洲", type: "射击俱乐部",
          contact: "queued", owner: "GB-Marketing", sourceFile: "08_全球枪店与俱乐部名录 / 队列 #2",
          tag: "今日 20:45（北京）发合作信",
          news: [
            { date: "2026-11-23", title: "本轮未检得该俱乐部独立公开动态", detail: "公开检索未找到该俱乐部的独立新闻；检索结果中的『Prins Hendrikkade』是阿姆斯特丹街道、『ASV Wartburgia』是另一家俱乐部，均非本对象，已排除不混用。荷兰射击运动的一般性背景可参照 KNSA 体系，但不作为该俱乐部事实。", src: "公开检索（排除同名干扰项）", url: "", v: "verified" }
          ],
          strategy: "俱乐部类合作走『设备试用 + 会员体验日』而非赞助大额预算：先给 2-3 支样品做会员实测，换取活动报道与合影授权，再谈长期。对方是青少年导向的俱乐部则更适合配青年组。今日邮件已按『Equipment day for Prins Hendrik juniors』定稿，方向与此一致。",
          opp: { level: "green", title: "会员光学体验日", why: "低门槛、无需赛事资质，俱乐部最易接受的合作形态", action: "按计划发出；回信后给样品清单与体验日流程模板", gate: "样品寄送成本与合规（荷兰持牌场地）需确认", v: "model" }
        },
        {
          name: "ISSF 国际射击运动联合会", country: "全球", region: "全球", type: "国际协会",
          contact: "uncontacted", owner: "未分配", sourceFile: "公开网络 / 组织雷达",
          tag: "未触达 · 高势能",
          news: [
            { date: "2026-07-22", title: "锐凌甲 Relegend 成为 ISSF 铂金赞助商", detail: "在杭州 ISSF 全项世界杯期间签约。Relegend 为中国射击服品牌，产品含精英 K 系列与青少年 J 系列，自研 Relegend-TEX 面料。ISSF 主席 Luciano Rossi 出席并强调『与创新企业合作对射击运动未来至关重要』。", src: "ISSF 官网 / 新浪体育", url: "issf-sports.org/news/5149", v: "verified" },
            { date: "2026-07-20 ~ 29", title: "杭州世界杯规模：686 名运动员 / 66 个成员协会 / 61 国", detail: "共 1089 项出发名单，含步枪、手枪、飞碟三个分项；ISSF 设 Platinum / Gold / Silver / Bronze Sponsors 与 Official Suppliers 分层体系。", src: "ISSF 官网", url: "issf-sports.org/news/5151", v: "verified" },
            { date: "2026-07", title: "青年世锦赛在德国 Suhl 举行", detail: "2026 ISSF Junior World Championship（步枪/手枪/飞碟），美国队夺多枚奖牌并两项世界青年纪录。", src: "Shooting Wire", url: "shootingwire.com/releases/2026/07/team-usa-rifle-and-pistol-athletes-shine", v: "verified" }
          ],
          strategy: "ISSF 的赞助分层向产业伙伴开放，但 Relegend 是内地射击服品牌，不是 GUNBASE 的同类先例——GUNBASE 按中国台湾地区品牌定位，不借用这条叙事。本轮未检得台湾地区光学品牌进入 ISSF 赞助体系的独立公开先例，因此改用双支柱：一是 ISSF 分层本身对产业开放（Platinum 到 Official Supplier），二是台湾地区精密光学在国际市场已验证的品类内背书（见本日『品牌定位与国际信任基础』，如 Integrix 获 American Rifleman 2026 年度光学奖）。GUNBASE 不必一上来争铂金，Official Supplier 或青年项目供应商是更现实的第一阶；青少年 J 系列被专门提及，说明『青年装备』是 ISSF 当前叙事里的热词，与我方光学体验日方向一致。",
          opp: { level: "green", title: "Official Supplier / 青年项目装备支持", why: "ISSF 分层对产业伙伴开放；青年议题是官方叙事重点；以台湾地区光学的国际品类背书支撑，不沿用内地品牌先例", action: "整理一页英文权益 proposal（不报价格），以 Taiwan-based 身份表述，等所有者授权后接触", gate: "赞助预算与代表权需所有者决定；不承诺赞助金额；不虚构材料来源或合作身份", v: "model" }
        },
        {
          name: "Safari Club International (SCI)", country: "美国 / 全球", region: "北美", type: "国际协会",
          contact: "uncontacted", owner: "未分配", sourceFile: "公开网络 / 组织雷达",
          tag: "未触达 · 高势能",
          news: [
            { date: "2026", title: "SCI 加拿大会议：28+ 场议员会面、射击场国别活动日", detail: "渥太华三日会议，赞助 CHAC 野生动物研讨会；连续第 14 年参与 Parliamentary Outdoor Caucus 在 Stittsville Shooting Range 的 Range Day，约 155 名跨党派人士参加，并赞助早午餐与志愿者。", src: "Safari Club International", url: "safariclub.org/?p=190288", v: "verified" },
            { date: "2026", title: "SCI 持续吸纳企业赞助商", detail: "Gorilla Ammunition、Christensen Arms 先后成为企业赞助商；SCI 现有约 152 个分会、覆盖 106 国、代表约 720 万猎人，年度猎人大会被称为全球最大狩猎主题市场。", src: "Hunting Life", url: "huntinglife.com/?p=320498", v: "verified" },
            { date: "2026-08", title: "SCI 任命 Chevalier Advertising 为公关 agency", detail: "专职服务狩猎、射击运动、户外与执法行业的传播机构，说明 SCI 正加强对外叙事。", src: "Outdoor Wire", url: "theoutdoorwire.com/releases/2026/08/chevalier-advertising-named", v: "verified" }
          ],
          strategy: "SCI 的入口是企业赞助 + 大会展位，但规则硬：禁止展位转租/合租，会议边会需提前 90 天书面申请，展位须正式合同。这是一条『要提前排期』的合作线，不适合临时起意。对 GUNBASE 的价值是一次触达数百万猎人网络，适合做品牌背书。",
          opp: { level: "yellow", title: "企业赞助 / 大会展位", why: "网络势能最大，但合同、90 天申请期与合规审查是前置门槛", action: "先记录 90 天倒排节点，是否投入由所有者定", gate: "需正式合同与赞助预算；未获授权前不接触", v: "model" }
        },
        {
          name: "Walther (Carl Walther GmbH)", country: "德国 / 美国", region: "欧洲/北美", type: "枪械生产商",
          contact: "uncontacted", owner: "未分配", sourceFile: "07_枪械生产商名录 / 手枪类",
          tag: "未触达 · 窗口临近",
          news: [
            { date: "2026-07", title: "Walther 装备支持美国队青年世锦赛", detail: "2026 ISSF 青年世锦赛（Suhl）多名美国队选手使用 Walther 器材并夺金，其中两项世界青年纪录。Walther Competitions USA 明确将『设备支持、运动员合作、长期投入青年发展』列为策略。", src: "Shooting Wire / The Gun Bulletin", url: "thegunbulletin.com/2026/07/10/team-usa-rifle-and-pistol-athletes-shine", v: "verified" },
            { date: "2026-11-27 ~ 29", title: "第 12 届 Walther Youth Cup 即将在塞尔维亚开赛", detail: "Smederevo 举行，覆盖 16+ 国家、U16/U18/U21 组别；由 Carl Walther GmbH 总赞助，设 40 个射击位、300 人观众席，奖品为 Walther 气手枪 LP500 / 气步枪 LG400。", src: "SD Shooting", url: "sdshooting.rs", v: "verified" },
            { date: "2026", title: "成立 Walther Performance Division", detail: "首批 4 名实用射击选手，强调『品格与社区贡献』与成绩同等重要；将参与赛事、经销商协作与教学内容制作。", src: "Walther Arms", url: "waltherarms.com/journal/divisions/the-walther-performance-division", v: "verified" }
          ],
          strategy: "Walther 已经把『青年 + 运动员 + 内容』做成体系，缺的是光学侧的联合叙事。最近的窗口是 11/27-29 的 Youth Cup：以光学奖品或体验位切入比赞助整个赛事现实得多；错过这一场，下一个自然节点是 2027 赛季。",
          opp: { level: "green", title: "青年杯光学奖品 / 体验位", why: "赛事 4 天后开赛，正缺奖品与配套展示，窗口极明确", action: "本周内评估是否已赶得上 11/27；赶不上则锁定 2027 赛季", gate: "奖品样品与跨境寄送需确认；不承诺现金赞助", v: "model" }
        },
        {
          name: "Beretta / Benelli / Sako / Steiner (BDT 联盟)", country: "意大利/芬兰/德国", region: "欧洲", type: "品牌联盟",
          contact: "uncontacted", owner: "未分配", sourceFile: "07_枪械生产商名录 / 光学名录",
          tag: "未触达 · 防务门槛",
          news: [
            { date: "2026-09-23 ~ 24", title: "BDT Live Fire Days 2026 在英国 Bisley 举行", detail: "首届活动吸引 26 国 150+ 名军警终端用户、政府代表与国际分销商，设近距离至 1000 米多条体验线，并以反无人机实弹拦截收尾。联盟成员含 Beretta、Benelli、Sako、Steiner、RWS、SwissP、MFS、Norma、Centanex。", src: "Beretta Defense Technologies", url: "berettadefensetechnologies.com/bdt-live-fire-days-2026", v: "verified" },
            { date: "2026", title: "Benelli × DUALEE LIVET 反无人机炮塔", detail: "8 支 Benelli M4 Drone Guardian 集成于遥控炮塔，可编程空爆弹，已在丹麦军方实弹演示；Eurosatory 2026（6/15-19 巴黎）展出。", src: "Shooting News Weekly / DownRange", url: "shootingnewsweekly.com/quote-of-the-day/new-anti-drone-weapon-bundles", v: "verified" },
            { date: "2026", title: "Beretta Australia × Benelli 赞助全国嘉年华", detail: "2026 National Carnival 现场展示 Benelli 全线产品并与观众直接交流，是民用赛事侧的品牌曝光范例。", src: "Field & Game Australia", url: "fieldandgame.com.au/news/national-carnival-sponsor-beretta-australia-with-benelli", v: "verified" }
          ],
          strategy: "必须分层看：BDT 是防务联盟，军警资质门槛高，GUNBASE 民用光学不应硬挤；真正可借鉴的是 Beretta Australia 在民用嘉年华的赞助打法。Steiner 本身是光学品牌且在联盟内，属竞品情报源而非合作对象。",
          opp: { level: "yellow", title: "民用赛事侧跟随曝光", why: "防务侧门槛过高，民用嘉年华路径已被同集团验证", action: "把 National Carnival 类活动列入观察名单，暂不外联", gate: "不触碰军警/防务场景；避免与 Steiner 竞品正面", v: "model" }
        },
        {
          name: "Frankonia（德国最大狩猎用品商）", country: "德国", region: "欧洲", type: "零售 / 展会",
          contact: "uncontacted", owner: "未分配", sourceFile: "08_全球枪店与俱乐部名录 / 狩猎用品店",
          tag: "未触达 · 展会窗口",
          news: [
            { date: "2026-10-06", title: "JAGD & HUND 2027 设 WAIDWERK-AREA，Frankonia × Hunt on Demand 首次联合", detail: "多特蒙德展 5 号馆，Frankonia（德国最大狩猎用品商）与德国最大狩猎视频平台 Hunt on Demand 首次联合，把购物、咨询、创作者互动、舞台节目合成体验区；含 VR 射击训练每日演示、新猎人 WaidStart-Basecamp、Driven Hunt of the Year（RWS × Frankonia）。", src: "JAGD & HUND 官网", url: "jagdundhund.de/en?p=41274", v: "verified" }
          ],
          strategy: "Frankonia 在 08_ 名录里已有多家门店与公开邮箱，但真正机会不在门店零售，而在它正在构建的『体验区 + 创作者 + 新猎人』内容场。GUNBASE 光学可以切新猎人基础套装或 VR 射击体验的实物对照展示，比谈进场卖货更符合品牌宣传定位。",
          opp: { level: "green", title: "新猎人套装 / 体验区光学展示", why: "对方已把新猎人与体验列为 2027 年主线，需求明确", action: "整理英文一页 proposal，等所有者授权后接触其展会合作窗口", gate: "展位/赞助费用与德国合规（AWaffV/WaffG）需前置", v: "model" }
        },
        {
          name: "JA Sports & Shooting Club（迪拜）", country: "阿联酋", region: "中东", type: "持牌靶场",
          contact: "uncontacted", owner: "未分配", sourceFile: "公开网络 / 08_ 中东条目",
          tag: "未触达 · 持牌体验",
          news: [
            { date: "2026", title: "迪拜最长室内靶场 + 青少年模拟器房", detail: "JA Sports & Shooting Club 设 200 米室内步枪/手枪靶场（迪拜最长）、50 米与 25 米精度靶、阿联酋唯一室内飞碟体验；配数字计分与模拟器室供低龄访客入门，并承接企业团建。同期开设 Smokin' Gun 牛排馆，形成『射击 + 餐饮』组合。", src: "Time Out Dubai", url: "timeoutdubai.com/things-to-do/shooting-and-steak-this-dubai-destination-brings-both-together", v: "verified" },
            { date: "2026-10", title: "JA Resorts 成为 Emirates Dubai 7s 2026 官方酒店合作伙伴", detail: "集团把新开的射击俱乐部与体育赛事捆绑推广，借大赛人流曝光射击体验。", src: "Trade Arabia / Dubai Sports Guide", url: "tradearabia.com/News/488013", v: "verified" }
          ],
          strategy: "这是原机会池 O4『持牌靶场光学体验日』的现实落点，而且对方自己已经在做『射击 + 餐饮 + 企业团建』的跨场景组合，说明它欢迎非武器类的体验合作。GUNBASE 可以提『精度体验 + 数字计分对照』，全程教练监督、靶场形态、无对抗元素。",
          opp: { level: "green", title: "持牌靶场精度体验日", why: "目标场所持牌、有现成企业/游客流量、合作形态已被对方验证", action: "等所有者授权后发合作提案；与中东日程合并安排", gate: "必须持牌场地 + 全程监督；不得有公共场合射击或对抗元素", v: "model" }
        },
        {
          name: "SHOT Show 2027（NSSF）", country: "美国", region: "北美", type: "行业展会",
          contact: "uncontacted", owner: "未分配", sourceFile: "公开网络 / 行业日历",
          tag: "未触达 · 距开展 57 天",
          news: [
            { date: "2027-01-19 ~ 22", title: "SHOT Show 2027 展位仍可预订、注册已开放", detail: "拉斯维加斯 Venetian Expo + Caesars Forum，官方称 2700+ 展位；上届吸引 126 国与美国 50 州专业人士、2800+ 参展商。仅对Verified 行业人士开放，非公众展。", src: "SHOT Show 官网 / Travel and Tour World", url: "shotshow.org", v: "verified" }
          ],
          strategy: "全球最大 B2B 射击/狩猎/户外展，是品牌曝光与渠道对接的最高势能单点，但展位成本高、需要 B2B 资质。若所有者决定参展，必须现在开始倒排（酒店、展位、样品、英文物料）。若不参展，也可把 1 月作为集中外联窗口——全行业决策者都在拉斯维加斯。",
          opp: { level: "yellow", title: "参展 / 展期集中外联", why: "势能最高但费用与资质是硬门槛", action: "提示所有者做 go / no-go 决策；无论是否参展都锁定 1 月外联窗口", gate: "展位预算、B2B 资质、美国合规", v: "model" }
        },
        {
          name: "SSSF 美国学校射击运动基金会", country: "美国", region: "北美", type: "青年协会",
          contact: "uncontacted", owner: "未分配", sourceFile: "公开网络 / 组织雷达",
          tag: "未触达 · 低门槛奖品赞助",
          news: [
            { date: "2026", title: "全国锦标赛 Passport 活动：745 人走访 15+ 赞助商展位", detail: "9 天赛事中运动员、教练、家属与观众凭 Passport 走访赞助商展位；GLOCK、BERETTA、SIG SAUER 提供大奖，另有 Winchester、Browning、Fiocchi、MidwayUSA Foundation 等 20 家赞助。2027 年全国锦标赛定于 7/9-17。", src: "SSSF 官网", url: "sssfonline.org/sssf-nationals-passport-winners", v: "verified" }
          ],
          strategy: "SSSF 提供了比 ISSF 更低门槛的进入方式：奖品赞助 + 展位互动，无需大额现金。对 GUNBASE 来说这是用少量样品换 745 人精准触达的高性价比入口，且青年/教育定位与合规叙事相容。",
          opp: { level: "green", title: "青年赛事奖品赞助", why: "低现金门槛、精准人群、已有同类品牌先例", action: "列入 2027 赛季候选；需美国实体或合作方代收样品", gate: "美国落地主体与合规确认", v: "model" }
        },
        {
          name: "光学竞品群（Swarovski / Zeiss / Leupold / Vortex / Burris / Hawke / Trijicon）", country: "奥地利/德国/美国/英国", region: "全球", type: "光学竞品",
          contact: "reference", owner: "参考", sourceFile: "07_枪械生产商名录 / 光学 26 家 + 公开网络",
          tag: "仅竞品情报 · 不可合作",
          news: [
            { date: "2026-07-10 / 10-06", title: "Swarovski Optik AT Endura 21-65x75 观靶镜", detail: "北美 7/10 上市、全球 10/6 上市，1510g、75mm 物镜、21-65 变倍，首次采用高度自动化生产以在更低价格点提供 HD 品质；另推 dS 4-24x50 P 数字弹道瞄准镜与 Z6i/Z5i+ MRAD 配置。", src: "Swarovski Optik 官网", url: "swarovskioptik.com/se/en/hunting/press-releases/new-at-endura-21-65x75-spotting-scope-2026-07-10", v: "verified" },
            { date: "2026-01 ~ 10", title: "Zeiss / Vortex / Leupold / Burris / Hawke 密集上新", detail: "Zeiss V3 瞄准镜线（1/20）、SFL 50 双筒（1/27）、Conquest Apia 85（10/21）；Vortex Strike Eagle 1-10x24 FFP（3/12）、Talon HD 10K 测距双筒（1/27，$3499.99）；Leupold VX-4HD 与 BX-6 Range HD Gen 2；Burris Veracity 全新重设计；Hawke Vantage HD 34 FFP。", src: "GunReleases / PW Consulting / Outdoor Canada", url: "gunreleases.com/releases", v: "verified" },
            { date: "2026-01", title: "Trijicon 新增 Credo HX 型号", detail: "持续扩展覆盖林地到开阔地的多场景狩猎产品线。", src: "PW Consulting / American Hunter SHOT Show 报道", url: "pmarketresearch.com/?p=2367444", v: "verified" }
          ],
          strategy: "这些是直接竞品，不是合作对象；价值在于产品对标：2026 年行业主线是『轻量化 + 电子/弹道辅助 + 自动化降本』。Swarovski 用自动化把 HD 打到新价格点，意味着中端市场价格压力会上升。GUNBASE 的对外叙事应强调精度稳定性与场景适配，不在参数上硬碰。另注意瞄准镜属 Google Ads 禁投类目，不走付费投放。",
          opp: { level: "red", title: "禁止作为合作对象", why: "直接竞品；且付费投放渠道不可用", action: "仅作产品对标与定价参考", gate: "不接触、不联合、不付费投放", v: "model" }
        },
        {
          name: "跨产业联名标杆群（Community Coffee × Mossy Oak / Dunkin' × L.L.Bean / Starbucks × and wander）", country: "美国/日本", region: "北美/亚太", type: "跨产业标杆",
          contact: "reference", owner: "参考", sourceFile: "公开网络 / 跨产业线索",
          tag: "仅策略参考 · 非触达对象",
          news: [
            { date: "2026-11-17", title: "Community Coffee × Mossy Oak 推出 Camp Blend", detail: "迷彩包装的中深烘咖啡，12 盎司建议价 $12.99，售至 2027 年 2 月，走官网、便利店与独立杂货，12 月上架 Amazon。两家均为家族企业，叙事围绕『出猎前的那杯咖啡』。", src: "ContentGrip / Community Coffee 公告", url: "contentgrip.com/community-mossy-oak-camp-blend", v: "verified" },
            { date: "2026-09-21 ~ 29", title: "Dunkin' × L.L.Bean 首次联名", detail: "新英格兰两大品牌首次合作，Birdseye 毛衣 $79.95、Boat and Tote $59.95，配 National Coffee Day 免费咖啡与 Bootmobile 巡展，限时 8 天制造紧迫感。", src: "Gentleman's Pursuits / BozokMedia", url: "gentlemanspursuits.com/news/food-and-drink/coffee/dunkin-and-llbeans-first-collab", v: "verified" },
            { date: "2026-09-09", title: "Starbucks Japan × and wander 22 件联名系列", detail: "主题『a wander in the stars』，含山地保温瓶（¥7,200）、反光缝线外套、可收纳背包，仅在日本线上商店发售；此前 8/25 与 HIKING CLUB 办步行活动预热。", src: "Fashion Headline", url: "fashion-headline.com/article/487997", v: "verified" }
          ],
          strategy: "三个案例共同验证了机会池 O1『精度主题咖啡联名』的可行性，并给出可复制的实现方式：不造新饮品，而是用包装/杯套/周边把既有日常仪式与户外身份绑在一起；限时窗口（8 天/一季）比长期活动更易制造紧迫；合作方选『有地域文化资产的老品牌』而非流量品牌。GUNBASE 可复刻为『精度 × 晨间仪式』，且全程不出现枪支图像。",
          opp: { level: "green", title: "复刻 Precision & Pour 联名模板", why: "三个 2026 年新案例证明路径成立，且都避开了武器功能宣传", action: "把这三条案例补进联名 proposal 作为背书素材", gate: "落地城市、预算、联名方需所有者决定", v: "model" }
        },
        {
          name: "Norrøna（挪威高端户外品牌）", country: "挪威/英国/中国", region: "欧洲/亚太", type: "跨产业户外品牌",
          contact: "uncontacted", owner: "未分配", sourceFile: "公开网络 / 跨产业线索",
          tag: "未触达 · 渠道扩张中",
          news: [
            { date: "2026", title: "伦敦 Regent Street 首店开业", detail: "挪威户外品牌 Norrøna 在伦敦 15 Regent Street 开设英国首店，为全球 40+ 门店网络的新里程碑；产品线覆盖滑雪、登山、越野跑、徒步、山地车、狩猎与冲浪。", src: "Norrøna 官网 / Modaes", url: "norrona.com/de/en/history/2026-the-london-store-opens", v: "verified" },
            { date: "2026", title: "与 Topsports 合作加速中国布局", detail: "成都 SKP 限时体验空间为继上海、北京后的第三家中国门店；2025 年签约覆盖中国大陆、澳门与香港。", src: "企查查 / Modaes", url: "modaes.com/global/companies/norrna-brings-the-norwegian-outdoor-experience", v: "verified" }
          ],
          strategy: "Norrøna SKU 覆盖狩猎且正在做体验式门店（限时空间、旗舰店），是跨产业联名的高匹配对象：双方都不以武器功能为卖点，可围绕『野外精度 + 装备美学』做联合陈列或限定周边。属于中长期线索，不在本轮外发队列。",
          opp: { level: "green", title: "户外零售体验空间联合陈列", why: "对方正在扩张体验式门店，且有狩猎品类，契合度高", action: "列入中长期观察名单，等有具体门店活动再切入", gate: "不主动外联；需所有者授权", v: "model" }
        },
        {
          name: "GUNBASE 已发客户群（Sales 侧 24 家）", country: "德国/法国/西班牙/意大利/瑞士/马耳他/克罗地亚/捷克/丹麦/匈牙利/立陶宛/波兰/黎巴嫩/阿联酋/科威特/荷兰", region: "欧洲/中东", type: "已发客户动态",
          contact: "sent", owner: "GB-Sales", sourceFile: "outbound_owners.json（本机）",
          tag: "已发/已入队 · Marketing 一律跳过",
          news: [
            { date: "2026-11-23", title: "本轮未逐家检得独立公开动态", detail: "已发群以欧洲狩猎零售/枪店与中东分销商为主，公开新闻稀疏。可核实的类别级信号：JAGD & HUND 2027 的 WAIDWERK-AREA（Frankonia × Hunt on Demand）代表德国狩猎零售正把重心转向体验与内容；中东侧 JA Shooting Club 的『射击 + 餐饮 + 企业团建』代表靶场侧正在做跨场景组合。这些是类别信号，不代表上述具体客户自身动态。", src: "JAGD & HUND / Time Out Dubai + 本机归属表", url: "", v: "verified" }
          ],
          strategy: "这一群对 Marketing 的意义只有两个：一是归属去重——它们已被 Sales 占用，Marketing 不得触达；二是情报复用——它们所在的类别正在发生什么，可以反推我方合作叙事。Marketing 应该做的是把类别信号转成话术包交给 Sales，而不是自己去发。",
          opp: { level: "yellow", title: "归属锁定 + 类别情报反哺 Sales", why: "客户已被占用，直接触达会破坏两条线契约", action: "把德国体验式零售与中东跨场景靶场两个信号整理进周话术包", gate: "不得外联；30 天锁定期内视为他人领地", v: "model" }
        }
      ],

      /* ===== 跨对象战略打法 ===== */
      plays: [
        {
          id: "P1", title: "踩窗口，不拼关键词", level: "核心",
          detail: "今日最明确的三条时间窗：Walther Youth Cup（11/27-29，4 天后）、SHOT Show 2027（1/19-22，展位仍可订 + 全行业决策者集中）、JAGD & HUND 2027（Frankonia 联合体验区）。合作提案应围绕窗口倒排，而不是围绕『找合作』这类泛词。",
          basis: "SD Shooting / SHOT Show 官网 / JAGD & HUND 官网（均 2026 公开来源）"
        },
        {
          id: "P2", title: "产地标签不做信任主张，改用品类内可验证背书", level: "核心",
          detail: "ISSF 分层向产业开放、SCI 持续吸纳企业赞助商、Trofeo Fiocchi-Sabatti 已有光学品牌在场——这三条让『光学公司为什么要来』不用从零解释。但 Relegend 是内地品牌，不作为 GUNBASE 的定位先例。GUNBASE 按中国台湾地区品牌叙事，靠的是可验证证据：Integrix（台湾地区研发制造 + 德国 Schott / 日本 Ohara 镜片）获 American Rifleman 2026 年度光学奖、与 Service Rifle 冠军共创、欧洲专业频道参观产线后转为经销商。国际调查里 Made in Taiwan 信任度 33%，仅高于内地 31%，远低于德国 66% 与日本 63%，所以不能靠产地口号。",
          basis: "ISSF news/5149 / Hunting Life / ColdBore / Gun Trade World / Shooting Sports USA / Visual Capitalist（引 NIM 2025-03 调查）"
        },
        {
          id: "P3", title: "青年与入门是 2026 年的共同语法", level: "重点",
          detail: "ISSF 强调青少年 J 系列与 VR/电竞年轻化；Walther 把青年发展列为长期投入；Sabatti Lyra 面向年轻新猎人；JAGD & HUND 设 WaidStart-Basecamp；SSSF 是纯青年赛事。GUNBASE 的品牌宣传应统一用『青年入门 + 精度体验』叙事。",
          basis: "上述各对象 2026 公开来源交叉印证"
        },
        {
          id: "P4", title: "跨产业联名：复刻日常仪式，而不是造新品", level: "重点",
          detail: "Community Coffee × Mossy Oak、Dunkin' × L.L.Bean、Starbucks × and wander 三个 2026 案例都不造新饮品，而是用包装/周边把既有仪式与户外身份绑定，并用 8 天至一季的限时窗口制造紧迫感。全部避开武器功能宣传。",
          basis: "ContentGrip 2026-11-17 / BozokMedia 2026-09-24 / Fashion Headline 2026-09-09"
        },
        {
          id: "P5", title: "竞品情报要转成定位，不要转成参数战", level: "观察",
          detail: "Swarovski 以自动化生产把 HD 品质打到新价格点，行业主线是轻量化 + 电子/弹道辅助 + 降本。GUNBASE 对外叙事应强调精度稳定性与场景适配；瞄准镜属 Google Ads 禁投类目，不走付费投放。",
          basis: "Swarovski Optik 官网 2026-07-10 / Google Ads 政策"
        }
      ],

      /* ===== 时间窗日历 ===== */
      windows: [
        { date: "2026-11-27 ~ 29", item: "Walther Youth Cup 第 12 届（塞尔维亚 Smederevo）", gap: "4 天", action: "评估光学奖品/体验位是否赶得上；赶不上转 2027 赛季", tone: "amber" },
        { date: "2027-01-19 ~ 22", item: "SHOT Show 2027（拉斯维加斯）", gap: "57 天", action: "所有者做 go/no-go；无论是否参展都锁定 1 月集中外联", tone: "amber" },
        { date: "2027-01 ~ 02", item: "JAGD & HUND 2027 展前招商（多特蒙德）", gap: "约 2 个月", action: "Frankonia WAIDWERK-AREA 联合展示提案窗口", tone: "blue" },
        { date: "2026-11-17 ~ 2027-02", item: "Community Coffee × Mossy Oak Camp Blend 在售期", gap: "进行中", action: "作跨产业联名时长与渠道设计的现实参照", tone: "green" },
        { date: "2027-07-09 ~ 17", item: "SSSF 全国锦标赛（美国 Cardinal Shooting Center）", gap: "约 7.5 个月", action: "青年奖品赞助候选，提前排期", tone: "green" }
      ],

      /* ===== 归属提醒（给 Sales）===== */
      dedupNotice: [
        "Sabatti S.p.A.（sabatti.it）与 ASV Prins Hendrik（asvprinshendrik.nl）已由 GB-Marketing 入队，Sales 请跳过，30 天内不重复触达。",
        "Marketing 侧已发/已入队的 2 家已写入本机 outbound_owners.json；其余 14 家重点对象均标注 owner=未分配，未经所有者授权不外联。",
        "已发客户群 24 家 owner=GB-Sales，Marketing 只做类别情报与话术反哺，不接触。"
      ],

      escalations: [
        { item: "Walther Youth Cup（11/27-29）是否投入光学奖品", why: "窗口仅剩 4 天，跨境样品与合规需立即决策，AI 无权代批", blocks: "P1 时间窗打法第一条" },
        { item: "SHOT Show 2027 参展 go / no-go", why: "展位与酒店需提前锁定，费用与 B2B 资质超出 AI 决策范围", blocks: "1 月集中外联窗口" },
        { item: "跨产业联名首选城市与预算上限", why: "Dunkin'/Mossy Oak/and wander 三个案例都依赖地域文化资产，落地城市决定联名对象", blocks: "O1 联名模板从推演转方案" }
      ],

      dataNote: "今日动态来自 2026 年公开来源（ISSF、JAGD & HUND、SHOT Show、Walther、Swarovski、ColdBore、ContentGrip 等），每条在对象卡内附标题与来源域名。策略与机会为 AI GB-Marketing 推演，不代表已建立合作。全量池口径来自本机 07_/08_ 每日名录。品牌定位证据见本日『品牌定位与国际信任基础』，均为公开可核实来源；事实与策略推演已分别标注。"
    }
  ]
};
