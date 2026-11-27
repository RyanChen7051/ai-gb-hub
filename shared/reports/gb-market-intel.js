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
    cadence: "每日 08:10 (GMT+8) 由 AI-GB-Marketing 发布；21:00 由 AI-GB-Team 在团队中心汇总",
    generatedAt: "2026-11-27 10:03 (GMT+8) · 补跑：调度 08:10，本机定时任务未在点触发（指令板 09:59 已记 M1 缺交），实际检索与发布完成于 10:03，迟到 +114 分钟，判「延迟」；如实标注，不伪称按时",
    owner: "AI GB-Marketing · 市场战术专家",
    scope: "全球 · 品牌合作方（已发 / 已入队 / 未触达）",
    brandStance: "GUNBASE 按中国台湾地区品牌（Taiwan-based）定位，不是内地品牌。定位分析以国际对中国台湾地区制造与台湾地区品牌的既有信任、合作经验为基础；诚实结论是产地标签信任度中等，真正可用的是同品类、可核实的国际背书。",
    dedupRule: "一个机构只有一个归属方。GB-Sales 已发或已入队的机构，Marketing 跳过；Marketing 已发或已入队的机构，Sales 跳过。命中即视为他人领地，30 天内不重复触达。真实邮箱只存本机。",
    poolNote: "全量池来自每日 07_枪械生产商名录（93 家 / 33 家有公开邮箱）与 08_全球枪店与俱乐部名录（2327 条 / 365 条有公开邮箱）。每日简报不可能逐条展开，故先给全量口径，再挑出当日有可核实新动态或高势能的高价值对象作重点跟踪，其余按类别信号覆盖。",
    integrity: "本文件所有『最新动态』均附来源与日期；策略与机会为推演，需所有者逐次授权后才可对外接触。不构成法律意见。"
  },

  days: [
        {
          "date": "2026-11-27",
          "weekday": "周五",
          "generatedAt": "2026-11-27 10:03 (GMT+8) · 补跑：调度 08:10，本机定时任务未在点触发（指令板 09:59 已记 M1 缺交），实际检索与发布完成于 10:03，迟到 +114 分钟，判「延迟」；如实标注，不伪称按时",
          "headline": "第 4 份合作情报（11-27 补跑）：新增 13 条带 URL 的可核实动态——ISSF 美洲赛美国夺 4/6 金与 12/1 收官、多哈世锦赛 36 个 LA28 配额落定、Walther 青年杯今日开赛、SHOT Show 新增出口合规课与 Supplier Showcase Reloaded、SCI TV 内容化、Purdey 三项年度活动固定；定位证据新增 2 条台荷光子 MOU 与台湾地区产学奖项，仍明确为跨领域结构案例，不是同品类背书。",
          "kpi": [
            {
              "k": "新增动态",
              "v": "13",
              "d": "逐条附真实 URL 与日期；另对已发/已入队对象如实记录未检得独立动态",
              "tone": "green"
            },
            {
              "k": "重点对象",
              "v": "19",
              "d": "继承 17 个 + 新增 TOSIA/工研院/PhotonDelta、亚大×佳凌 2 个标杆参考对象",
              "tone": "blue"
            },
            {
              "k": "新增定位证据",
              "v": "2",
              "d": "台荷三年 MOU、台湾地区产学合作特优奖；累计 13 条，只增不删，均非同品类背书",
              "tone": "teal"
            },
            {
              "k": "归属锁定",
              "v": "26",
              "d": "Sales 24 + Marketing 2；新增 2 个对象 owner=未分配，Marketing 一律不触达",
              "tone": "amber"
            },
            {
              "k": "近端时间窗",
              "v": "8",
              "d": "青年杯今日、美洲赛 12/1、ISSF 12/7 与 12/14、SHOT 1/18-22、英国展 2/12-14",
              "tone": "amber"
            },
            {
              "k": "待所有者拍板",
              "v": "4",
              "d": "D-19 两封邀约处置、D-18 三项恢复、SHOT 参展/供应链日预算、治理敏感期冻结",
              "tone": "amber"
            }
          ],
          "positioning": {
            "stance": "GUNBASE 按中国台湾地区品牌（Taiwan-based）定位，不是内地品牌。分析以国际对中国台湾地区制造与台湾地区品牌的既有信任、合作经验为出发点，但诚实结论是：产地标签不构成强信任状，对外叙事必须用『可验证的品类内证据』支撑。",
            "verdict": "NIM 2025 调查中 Made in Taiwan 信任度 33%，仅比 Made in China 31% 高 2 个百分点，远低于德国 66%、日本 63%。因此不能写『来自台湾所以品质更好』；可用的是同品类、可核实的国际奖项、材料来源、冠军共创与渠道合作。 11-27 新增两条均为跨领域结构案例（台荷光子三年 MOU、台湾地区产学合作特优奖），仍不是同品类射击光学奖项或 GUNBASE 自身背书。",
            "evidence": [
              {
                "date": "2025-03",
                "title": "国际 Made in 信任排名：台湾地区 33%、德国 66%、日本 63%",
                "fact": "纽伦堡市场决策研究所（NIM）2025 年 3 月对 10 国 20,000 人调查，把产地列入最信任前两位的比例：德国 66%、瑞士 64%、日本 63%、法国/意大利/英国 57%、美国/欧盟 55%、台湾地区 33%、中国内地 31%、墨西哥 28%、印度 27%。",
                "implication": "诚实结论：产地标签不够硬。对外话术必须以具体技术、第三方奖项、合作方姓名支撑，否则台湾制造反而容易被联想到低价代工。",
                "src": "Visual Capitalist（引 NIM 2025-03 调查）",
                "url": "visualcapitalist.com/ranked-the-worlds-most-trusted-made-in-labels",
                "v": "verified"
              },
              {
                "date": "2025-10",
                "title": "英国实地体验后对中国台湾地区产品观感显著转正",
                "fact": "TAITRA 与 TITA 在伦敦 Westfield White City 办 Taiwan Select 快闪展，25 个台湾精品品牌参展：95% 参观者对中国台湾地区产品观感变好、93% 未来可能购买、91% 愿意推荐、70% 看重创新与品质。",
                "implication": "支持既有『体验日』主线：让对方上手摸产品比在邮件里讲产地更能改变认知。注意这是展会访客自选样本，存在选择偏差，不能当成全英民意。",
                "src": "Business Mondays / Z News Service",
                "url": "businessmondays.co.uk/?p=113875",
                "v": "verified"
              },
              {
                "date": "2025",
                "title": "中国台湾地区国际品牌价值连续 6 年破百亿美元",
                "fact": "台经院推动、Interbrand（ISO 10668 认证）鉴价的 2025 台湾最佳国际品牌价值：前 25 名总值 151.49 亿美元，年增 2.7%；华硕 12 度居首，联发科成长 45%。",
                "implication": "说明中国台湾地区已有成熟的国际品牌经营体系，GUNBASE 可把『台湾地区精密制造与品牌体系』作为背景，但具体信任仍要落到自家产品参数与第三方证据。",
                "src": "经济部产业发展署 MIT 网站 / China Times",
                "url": "keid.nat.gov.tw/branding-taiwan/news/pressRelease_more?id=44c0b41d34f64d4ebeeda7e0b07b2f66",
                "v": "verified"
              },
              {
                "date": "2026",
                "title": "同品类样板：Integrix 以台湾地区研发制造拿下美国年度光学奖",
                "fact": "Leapers 旗下 INTEGRIX 高端光学线 2023 年推出，自有光学与机械设计、加工、组装、测试，采用日本 Ohara 与德国 Schott 镜片、标称 92% 透光率；iXF 4.5x28 被 American Rifleman 选为 2026 Golden Bullseye Optic of the Year，并与 Service Rifle 冠军 Nick Till 共同开发。Leapers 2018 年在台湾设 ISO 9001 工厂、2012 年在德国设 UTG Europe 配送中心。",
                "implication": "与 GUNBASE 最贴近的可验证路径：台湾地区工程制造 + 德日光学材料 + 冠军共创 + 美国专业媒体奖项 + 欧洲本地配送。我方『精度 + 体验』叙事可直接对齐这个结构。",
                "src": "Gun Trade World / Shooting Sports USA",
                "url": "guntradeworld.com/leapers-35-years-of-manufacturing-investment",
                "v": "verified"
              },
              {
                "date": "2024 ~ 2025",
                "title": "欧洲战术内容创作者参观台湾产线后转为经销商",
                "fact": "斯洛文尼亚 Polenar Tactical 两位创办人参观 UTG 台湾产线后融资进货，成为 UTG 与 INTEGRIX 欧洲经销商；报道称其对 Ohara / Schott 镜片、铝合金一体加工与无尘室组装印象深刻。",
                "implication": "给出具体的伙伴获取路径：先让专业内容创作者或教练看产线与品控，再谈经销或联合活动，比直接发产品目录有效。",
                "src": "方格子（Polenar Tactical 参访纪实）",
                "url": "vocus.cc/article/69aed5f4fd89780001914c14",
                "v": "verified"
              },
              {
                "date": "1980s 起",
                "title": "中国台湾地区光学产业的国际技术合作历史",
                "fact": "亚洲光学 1980 年成立于台中，1982 年与日本 SEKON 技术合作生产光学镜片、代工 Ricoh 镜头，并在美国 TASCO 技术移转下生产猎枪用瞄准镜。",
                "implication": "可作为『台湾地区光学不是从零开始』的产业史背景；来源为百科类条目，正式对外提案前应找一手企业史料再引用。",
                "src": "百度百科 / aVenture 公司资料",
                "url": "baike.baidu.com/view/3282353.htm",
                "v": "verified"
              },
              {
                "date": "2026-11-19",
                "title": "台湾地区精密光学厂玉晶光与 3M 达成战略合作，切入 AI 基础设施光学",
                "fact": "中央社报道，中国台湾地区光学镜头厂玉晶光（3406）与 3M 集团战略合作，共同推进 3M 扩束光学技术（EBO）方案的研发、制造与产能扩充；董事长陈天庆称这是从消费性电子光学延伸至高速运算与 AI 基础设施光学的里程碑，产能预计 2026 年第 4 季至 2027 年依客户需求放量。报道未涉及枪用光学、射击赛事或 GUNBASE。",
                "implication": "新增一条可核实的『台湾地区精密光学制造进入国际大厂长期合作』事实，支持我方以制造与协同能力参与合作的叙事；但它不是同品类光学奖项或射击渠道背书，严禁写成枪用光学获国际认可。",
                "src": "中央社 CNA（2026-11-19 18:31）",
                "url": "https://www.cna.com.tw/news/afe/202611190325.aspx",
                "v": "verified"
              },
              {
                "date": "2026-11-19",
                "title": "3M 公告拟投资约 4.7% 股权，把中国台湾地区玉晶光选为 EBO 制造伙伴",
                "fact": "3M 公告与 Genius Electronic Optical（GSEO，玉晶光，台证 3406）合作推进 Expanded Beam Optical 技术开发与制造，并预计以私募新股方式取得约 4.7% 普通股，交易预计 2026 年第四季完成（须满足惯例交割条件）。公告写明双方角色：3M 提供 EBO 技术、光互连专业、材料科学与客户关系；GSEO 提供精密光学制造能力与产能规模，用于 EBO 光纤连接器、共封装光学等。",
                "implication": "可用于说明台湾地区精密光学厂进入国际大厂的长期合作结构：技术方 + 制造方 + 股权投资。仍属跨领域光通信事实，不是枪用光学奖项、射击渠道或 GUNBASE 自身资质，严禁借其名义背书。",
                "src": "3M 公告（AMPP / CoatingsPro 转载，2026-11-19）",
                "url": "https://content.ampp.org/coatingspro/magazine-article/16519/3M-Announces-Collaboration-with-GSEO-to-Advance",
                "v": "verified"
              },
              {
                "date": "2026-11-17",
                "title": "台荷 QSPAD 项目：中国台湾地区光学厂与荷兰量子硬件公司获双边计划支持",
                "fact": "QuiX Quantum 与台湾地区伙伴光程研创（Artilux）、光循科技（Brillink）获 2026 年荷兰 TechBridge 计划支持，由荷兰企业署 RVO 与台湾经济部产业发展署共同推动；项目 QSPAD 为期 36 个月（2027-01 至 2029-12），开发接近室温运作的片上集成单光子侦测器，用于降低光量子运算对低温冷却的依赖。",
                "implication": "新增一条可核实的台湾地区精密光学厂参与 36 个月国际合作项目的事实，支持『以明确技术角色参与长期合作』的叙事；属量子光子学，不是同品类射击光学背书。",
                "src": "全域财经（引美通社 / QuiX Quantum 公告，2026-11-17）",
                "url": "https://biz.111.com.tw/archives/265033",
                "v": "verified"
              },
              {
                "date": "2026-11-17",
                "title": "同品类样板补充：Leapers 台湾地区产线、测试场与 2027 光学目录",
                "fact": "Gun Trade World 11 月 17 日报道：Leapers 创立于 1992 年，现有 500 多款产品、13 个品类、4 个全球据点与超过 30 万平方英尺制造配送空间；2018 年在台湾地区设 ISO 9001 制造厂，具备 CNC、射出成型、光学制造组装与无尘室；2021 年启用额定可承受 .50 口径的 100 码室内靶场，另有 600 码室外场；2027 目录的 INTEGRIX 含 iX8 低倍变焦、iX6 中距与远距、iXF 固定倍率。报道另述 2012 年设立 UTG Europe 欧洲配送中心。",
                "implication": "同品类可核实的是制造与测试结构，不是 GUNBASE 自身资质或奖项。可用于提醒我方：对外证据链应落到具体产线、测试条件与产品目录，而不是产地口号；不能借此宣称我方与其同厂或获同样奖项。",
                "src": "Gun Trade World（2026-11-17）",
                "url": "https://www.guntradeworld.com/leapers-35-years-of-manufacturing-investment/",
                "v": "verified"
              },
              {
                "date": "2026-11-20",
                "title": "台湾地区 KINKO 光学红外镜头营收占比升至 70%，连续三年扩产",
                "fact": "BigGo Finance 整理的 2026-11-20 法说会：KINKO OPTICAL（6209.TW）前三季合并营收 41.64 亿新台币，年增 71%；红外热成像镜头营收占比由 2025 年 56% 升至 2026 年 70%；2025 与 2026 年分别投入 3 亿与 3.5 亿新台币扩产，2027 年拟再投 4 亿。资料为法说会转录整理，不是公司审计财报原文。",
                "implication": "可核实的是台湾地区精密光学厂的产能与技术投入，应用以红外、车用、AR 与 CPO 为主，未涉及枪用瞄准镜或射击渠道；只能作为产业能力背景，不能当同品类背书或 GUNBASE 供应关系。",
                "src": "BigGo Finance（整理 KINKO 2026-11-20 法说会）",
                "url": "https://finance.biggo.com/quote/6209.TW/earnings-call/TW_6209.TW_2026-11-20",
                "v": "verified"
              },
              {
                "date": "2026-11-04",
                "title": "台湾光电协会、工研院与荷兰 PhotonDelta 签三年 MOU",
                "fact": "经济日报报道，TOSIA 理事长李允立 11 月 2 至 6 日率团访荷，台湾光电暨化合物半导体产业协会（TOSIA）、工研院（ITRI）与荷兰 PhotonDelta 签署三年合作备忘录，由经济部产发署副署长陈国轩与将接任 PhotonDelta 监事会主席的 Frans Schepers 见证；同行的 TAIWAN SESSION 在 PIC Summit 展示光通讯与矽光子成果，工研院另与立碁电子、千才科技、荷兰 PHIX 推进高速矽光子光收发模组联合研发。",
                "implication": "新增一条可核实的「台湾地区产业协会 + 研究机构 + 欧洲产业平台」三年期合作结构，可支撑我方以明确技术角色参与长期合作的叙事。该案属光通讯与矽光子，不是枪用光学奖项、射击渠道或 GUNBASE 自身资质，严禁借其名义背书。",
                "src": "经济日报（2026-11-04 11:58）",
                "url": "https://money.udn.com/money/story/5621/9856066",
                "v": "verified"
              },
              {
                "date": "2026-11-02",
                "title": "亚洲大学与佳凌科技获国科会产学合作「特优奖」",
                "fact": "亚洲大学半导体学士学程页面记载，副校长黄俊杰教授与佳凌科技执行国科会产学合作计划「超音波喷涂制备亲水薄膜于车载镜头玻璃」，在 2026 年 11 月 2 日国科会工程处 115 年度产学合作计划成果发表暨绩效考评会议获民生化材领域「特优奖」；网页发布日为 2026-11-03。",
                "implication": "可核实的是台湾地区学界与光学厂的具体联合研发项目及获奖等级；奖项由国科会颁发、属产学合作与车载光学薄膜，既非国际赛事奖项也非射击光学渠道背书。只能作为研发协作结构参考，不能写成 GUNBASE 获奖或产品性能证明。",
                "src": "亚洲大学半导体学士学程（2026-11-02 获奖 / 11-03 发布）",
                "url": "https://semi.asia.edu.tw/zh_tw/more_announcement/Asia-University-and-CALIN-Technology-Win-NSTC-Industry-Academia-Collaboration-Outstanding-Award-for-Automotive-Optical-Thin-Film-Research-27950925",
                "v": "verified"
              }
            ],
            "playbook": [
              {
                "id": "B1",
                "title": "产地只做事实描述，不做信任主张",
                "detail": "邮件与提案里 GUNBASE 写作 Taiwan-based / based in Taiwan，随后立刻接可验证细节（镜片来源、测试项目、第三方奖项、合作俱乐部名称）。不写『来自台湾，所以品质更好』这类无证据断言。",
                "guard": "对外英文用 Taiwan-based / Taiwan region，不与国家并列；不做政治表述。"
              },
              {
                "id": "B2",
                "title": "复刻 Integrix 结构：材料 + 冠军 + 媒体 + 本地库存",
                "detail": "四项背书按优先级补齐：镜片或镀膜来源、至少一位射手或教练的共创与署名、一篇第三方评测、欧洲或中东本地样品与库存点。每补一项就更新本区证据。",
                "guard": "未有第三方文件或书面同意前，不得宣称已有合作或获奖。"
              },
              {
                "id": "B3",
                "title": "把工厂与品控变成内容，而不是保密",
                "detail": "参考 Polenar 案例：邀请欧洲射击类内容创作者、俱乐部教练到产线或线上看品控流程，换取真实评测与经销或活动转化，与我方体验日打法合并。",
                "guard": "涉及客户身份、报价、内部工艺参数的内容需所有者审批。"
              },
              {
                "id": "B4",
                "title": "体验优先于产地说明",
                "detail": "英国快闪展数据显示上手体验能把观感提升 95%，所以俱乐部与靶场合作先给样品实测，再谈品牌故事；不在首封邮件里堆产地论述。",
                "guard": "该数据来自展会访客自选样本，仅作方向参考，不当作普遍民意。"
              },
              {
                "id": "B5",
                "title": "讲合作结构，不讲产地自夸",
                "detail": "新证据显示国际合作是按角色搭建的：玉晶光承担精密光学研发与量产、3M 提供 EBO 技术；ISSF 以 MOU 引入 FICS 做赛场服务；ESC 用三年媒体协议放大赛事。GUNBASE 对外提案应直接写明自己承担的具体角色（样品、测试、奖品、体验位、内容），不要先讲产地。",
                "guard": "跨领域案例只作结构参考，不冒充同品类背书；所有合作身份需对方书面确认。"
              },
              {
                "id": "B6",
                "title": "把体验日做成可量化漏斗，而不是摆摊",
                "detail": "Ecoaims 在慕尼黑 LOOP ONE 用三个活动点、志愿者引导与现场成绩系统，两天记录 2000 多名访客与 10000 多发体验射击，并把同一套设备同时用于公众体验与残奥竞技。GUNBASE 的俱乐部体验日应预先设定访客数、试用量、引导人手与后续跟进字段。",
                "guard": "体验内容不出现武器功能宣传；数据是我方活动目标，不是已达成结果。"
              },
              {
                "id": "B7",
                "title": "组织联名与渠道合作是低门槛入口，不等于品牌背书",
                "detail": "本轮检出三种可复制结构：Viridian 把 Ducks Unlimited 与 NWTF 标识放进既有 RFX11 绿点镜；Leupold 成为 The Commando Initiative 独家光学伙伴，为其 2026-2027 活动提供 Mark 5HD 与 BX-6；Burris 用第五代 Fullfield 搭 Outlier 消音器做限时促销。GUNBASE 可在内部把『标识进现有产品 / 活动指定用镜 / 限时捆绑』做成三级模板，本轮不外联。",
                "guard": "这些均为他人已发生案例，不代表我方已合作；涉及武器功能与促销合规需另案审查。"
              },
              {
                "id": "B8",
                "title": "证据链写测试条件，不写产地优越",
                "detail": "Leapers 报道给了 100 码室内（.50 口径额定）与 600 码室外测试场；KINKO 法说会给了红外镜头营收占比与扩产金额。我方提案应同样写成可核对的规格、测试项目与来源，台湾地区身份只写 Taiwan-based / based in Taiwan。",
                "guard": "法说会整理稿不是审计财报；跨领域制造数据不得写成 GUNBASE 的性能、获奖或资质。台湾地区不与国家并列，不做政治表述。"
              },
              {
                "id": "B9",
                "title": "把合作写成可核对的角色与期限，不写产地优越",
                "detail": "台荷光子合作给出「协会 + 研究机构 + 欧洲平台 + 三年 MOU + 联合研发项目」的结构，国科会奖项给出「具体技术项目 + 评审等级 + 承办会议」的写法。GUNBASE 提案应同样写明我方承担角色、时间范围与可核对的交付物；台湾地区身份只写 Taiwan-based / based in Taiwan。",
                "guard": "两个案例均非同品类射击光学背书；国科会奖为地区产学奖项，不得写成国际大奖；不做政治表述，不宣称已建立合作。"
              }
            ]
          },
          "partners": [
            {
              "name": "European Shooting Confederation (ESC)",
              "country": "欧洲",
              "region": "欧洲",
              "type": "国际协会",
              "contact": "uncontacted",
              "owner": "未分配",
              "sourceFile": "公开网络 / 组织雷达（新进）",
              "tag": "未触达 · 新进 · 媒体放大中",
              "news": [
                {
                  "date": "2026-11-12",
                  "title": "ESC 与 Warner Bros. Discovery Sports 签三年转播合作，并公布青训与赛制改革",
                  "detail": "SVG Europe 专访 ESC 秘书长 Yahor Aleinik：协议覆盖 Eurosport 1/2、TNT Sports 与 HBO Max，含直播、回放与集锦；首场为 10 月初希腊 Malakasa 欧飞碟锦标赛，下一场为 12 月马耳他 European Champions League。ESC 设 U16/U18/U23 与新 Solo/Duet/Trio 挑战赛制，并在 2025 年大会宣布拨款 20 万欧元支持成员协会发展项目（可用于购买运动器材与训练设施）；Aleinik 称首场内容的社交媒体与付费推广触达约 400 万。",
                  "src": "SVG Europe",
                  "url": "https://www.svgeurope.org/blog/headlines/focused-growth-the-european-shooting-confederation-on-growing-its-audience-through-a-new-deal-with-warner-bros-discovery-sports/",
                  "v": "verified"
                },
                {
                  "date": "2026-11-20",
                  "title": "CAS 驳回 ESC 与 Ratner 要求撤下纪律决定的临时措施申请",
                  "detail": "ISSF 官网确认，Alexander Ratner 与 ESC 就 2026-11-06 独立诚信裁审小组作出的三年禁权与 3 万欧元罚款决定向体育仲裁法院（CAS）上诉，并要求紧急临时措施撤下官网决定；CAS 于 11 月 20 日驳回该请求，决定继续公开。ISSF 主席选举定于 12 月 14 日在罗马举行，Ratner 已被移出候选名单。此为治理争议事实，GUNBASE 不评价各方立场。",
                  "src": "ISSF 官网 news/5351（2026-11-20）、Inside the Games",
                  "url": "https://www.issf-sports.org/news/5351",
                  "v": "verified"
                }
              ],
              "strategy": "这是本轮势能最高的新对象：它同时具备欧洲覆盖、电视与流媒体放大、明确的青训与器材议题。对 GUNBASE 的现实入口不是买大赞助，而是围绕 U16/U18/U23 与挑战赛制提供光学器材支持或体验位，让装备出现在 ESC 的内容里。注意报道只讲到成员协会发展拨款，并未公布企业赞助方案，不能把『可接触』说成『已开放赞助』。",
              "opp": {
                "level": "yellow",
                "title": "青训 / 挑战赛光学器材支持与内容曝光",
                "why": "媒体协议把赛事价值放大，且 ESC 自述正在投资器材、设施与年轻运动员；但企业合作通道未见公开规则",
                "action": "整理一页英文提案（身份写 Taiwan-based，只写可承担角色，不报价），等所有者授权后经官网公开渠道询问",
                "gate": "不虚构赞助身份；未获授权不接触；需确认欧洲合规与样品落地",
                "v": "model"
              }
            },
            {
              "name": "ISSF 国际射击运动联合会",
              "country": "全球",
              "region": "全球",
              "type": "国际协会",
              "contact": "uncontacted",
              "owner": "未分配",
              "sourceFile": "公开网络 / 组织雷达",
              "tag": "未触达 · 多哈世锦赛刚结束",
              "news": [
                {
                  "date": "2026-11-26",
                  "title": "美洲射击锦标赛：美国夺六项决赛中四金，秘鲁拿下男子飞碟金牌",
                  "detail": "ISSF 官网报道，第 15 届美洲锦标赛 11 月 23 至 25 日在利马进行六项决赛：美国选手赢得其中四项，包括 50m 步枪三姿女子包揽前三；东道主秘鲁 Nicolas Pacheco Espinosa 在男子飞碟决赛加赛 16 比 15 夺金。赛事 359 名运动员来自 22 国，持续至 12 月 1 日，提供 208 个 2027 利马泛美运动会席位与 12 个 LA28 奥运配额。本条为赛果事实，未公布企业合作入口。",
                  "src": "ISSF 官网 news/5352（2026-11-26）",
                  "url": "https://www.issf-sports.org/news/5352",
                  "v": "verified"
                },
                {
                  "date": "2026-11-25",
                  "title": "ISSF 总结多哈世锦赛遗产：99 个会员协会、590 名运动员参与委员会选举",
                  "detail": "ISSF 官网称多哈世锦赛有 1041 名运动员、91 国、99 个会员协会与 1928 人次参赛，并产生首批 36 个 LA28 射击配额；运动员委员会线上选举在开罗与多哈世锦赛期间举行，590 名运动员从 23 名候选人中选出 6 名代表，另 3 名由执委会任命。该文提到的 6 名当选人与 11-17 公告正文列出 7 人的差异仍未在本条中解释。",
                  "src": "ISSF 官网 news/5344（2026-11-25）",
                  "url": "https://www.issf-sports.org/news/5344",
                  "v": "verified"
                },
                {
                  "date": "2026-11-24",
                  "title": "多哈世锦赛 36 个 LA28 配额按 12 个项目分配至 20 个奥委会与中立个人",
                  "detail": "ISSF 官网公布完整配额清单：50m 步枪三姿男子、双向飞碟女子等 12 个奥运射击项目共 36 席，覆盖 20 个国家奥委会与 Individual Neutral Athletes；美国以东道主身份另有 12 个项目主办国席位，与本次争夺的配额分列。官网另链接 LA28 资格体系文件。此为赛事资格信息，不是企业赞助信息。",
                  "src": "ISSF 官网 news/5341（2026-11-24）",
                  "url": "https://www.issf-sports.org/news/5341",
                  "v": "verified"
                },
                {
                  "date": "2026-11-09",
                  "title": "ISSF 多哈世锦赛引入 FICS 免费赛场脊医服务，依据去年签署的 MOU",
                  "detail": "ISSF 官网称，国际运动脊医联合会（FICS）在 Lusail Shooting Complex 为持赛事证件者提供免费服务，持续至 11 月 13 日；该安排来自 ISSF 与 FICS 去年签署的谅解备忘录，属 Athletes First 倡议。",
                  "src": "ISSF 官网 news/5330",
                  "url": "https://issf-sports.org/news/5330",
                  "v": "verified"
                },
                {
                  "date": "2026-11-02",
                  "title": "2026 多哈步枪/手枪/飞碟世锦赛开幕，11 月 1 日至 14 日举行",
                  "detail": "ISSF 官网报道开幕式在卡塔尔举行，卡塔尔射击射箭协会代表与 ISSF 主席 Luciano Rossi 出席；该赛事是通往洛杉矶 2028 的资格周期开端。",
                  "src": "ISSF 官网 news/5307",
                  "url": "https://issf-sports.org/news/5307",
                  "v": "verified"
                },
                {
                  "date": "2026-11-22",
                  "title": "第 15 届美洲射击锦标赛在利马开幕，赛期至 12 月 1 日",
                  "detail": "ISSF 官网报道，赛事 11 月 22 日在秘鲁利马开幕，共 359 名运动员来自 22 个国家；ISSF 主席 Luciano Rossi 出席并与美洲射击联合会、秘鲁国家射击协会负责人会面。赛事提供 208 个利马 2027 泛美运动会资格席位与 12 个洛杉矶 2028 奥运配额席位。",
                  "src": "ISSF 官网 news/5350（2026-11-22）",
                  "url": "https://www.issf-sports.org/news/5350",
                  "v": "verified"
                },
                {
                  "date": "2026-11-20",
                  "title": "CAS 驳回 ESC 一方要求撤下 ISSF 纪律决定的临时申请",
                  "detail": "ISSF 官网确认 CAS 于 11 月 20 日驳回临时措施请求，纪律决定继续公开；ISSF 表示不进一步评论正在进行的 CAS 程序，除非涉及更正误导性陈述。该事实影响协会线的接触时机，不构成对争议立场的判断。",
                  "src": "ISSF 官网 news/5351（2026-11-20）",
                  "url": "https://www.issf-sports.org/news/5351",
                  "v": "verified"
                },
                {
                  "date": "2026-11-23",
                  "title": "ISSF 年度运动员公众投票收官：13,339 张验证票，12 月 7 日揭晓",
                  "detail": "ISSF 官网 11 月 23 日公告：提名阶段 10 月 28 日至 11 月 5 日录得 4,758 张验证票、312 名运动员至少获一票；投票阶段 11 月 9 日至 18 日录得 13,339 张验证票，接近提名阶段三倍；男女公众选择奖得主将于 12 月 7 日公布。这只是赛事传播数据，不含企业合作通道。",
                  "src": "ISSF 官网 news/5348（2026-11-23）",
                  "url": "https://www.issf-sports.org/news/5348",
                  "v": "verified"
                },
                {
                  "date": "2026-11-17",
                  "title": "590 名运动员参与 ISSF 运动员委员会选举，另有 3 席由执委会任命",
                  "detail": "ISSF 官网称 590 名运动员投票，正文写 6 名直接当选（每项目 2 名），但名单实际列出 7 人，其中沙特选手 Saud Alhassan Al Saud 在文末声明退出；另有 3 名由执委会任命。原文未公布企业赞助或器材合作入口，本条如实标注名单与正文的不一致。",
                  "src": "ISSF 官网 news/5342（2026-11-17）",
                  "url": "https://issf-sports.org/news/5342",
                  "v": "verified"
                }
              ],
              "strategy": "本轮新信号是 ISSF 的合作不只卖展位：它用 MOU 把专业服务组织嵌进赛场支持体系，并把运动员福利放在叙事中心。GUNBASE 若走 ISSF 路线，应把提案写成『可持续的赛事支持角色』而不是一次性赞助；11-23 已确认的 Relegend 内地品牌先例仍然不得作为我方定位依据。",
              "opp": {
                "level": "yellow",
                "title": "官方供应商 / 青年项目器材支持",
                "why": "合作结构对外部组织开放，但多哈赛事已结束，需等下一轮周期节点",
                "action": "把 FICS-MOU 模式写入英文提案的『合作形态』页，不报金额，等授权",
                "gate": "赞助预算与代表权需所有者决定；不沿用内地品牌叙事",
                "v": "model"
              }
            },
            {
              "name": "SHOT Show 2027（NSSF）",
              "country": "美国",
              "region": "北美",
              "type": "行业展会",
              "contact": "uncontacted",
              "owner": "未分配",
              "sourceFile": "公开网络 / 行业日历",
              "tag": "未触达 · 展前 55 天",
              "news": [
                {
                  "date": "2026-11-27",
                  "title": "SHOT Show 官网列出四场出口培训课，1 月 19 至 20 日举行",
                  "detail": "本条为检索日页面状态而非新闻发布日期：官网 Export Training Sessions 页列出 2027 年 1 月 19 日 10:00-12:00  suppressor 新规、13:00-15:00 ITAR/EAR 许可，1 月 20 日 10:00-12:00 初次出口实务、13:00-14:30 BIS 执法更新；会员每场 75 美元、非会员 100 美元。内容以美国出口法规为主，不能当作台湾地区卖方的法律意见。",
                  "src": "SHOT Show 官网 Export Training Sessions（检索日 2026-11-27）",
                  "url": "https://shotshow.org/export-training-sessions/",
                  "v": "verified"
                },
                {
                  "date": "2026-11-27",
                  "title": "Supplier Showcase Reloaded 开放供应商招商，1 月 18 至 21 日换一批供应商",
                  "detail": "本条为检索日页面状态而非新闻发布日期：官网称 SHOT Week Supplier Showcase 有 800+ 供应商，1 月 18/19 日与 20/21 日分两段在 Venetian 五楼举行；Reloaded 会在中段换入新供应商、材料、服务与制造方案，展位套餐 5750 美元加每个角位 625 美元，NSSF Patron/Supporting/Associate 会员减 500 美元。页面列出的品类含工具、机械、塑料、金属挤压、织物、物流与软件。",
                  "src": "SHOT Show 官网 Supplier Showcase（检索日 2026-11-27）",
                  "url": "https://shotshow.org/supplier-showcase/",
                  "v": "verified"
                },
                {
                  "date": "2026-11-04",
                  "title": "NSSF 发布参展提醒：酒店紧张、多项截止节点已过、体验区仍余少量席位",
                  "detail": "官方 Insider 称 Palazzo、Caesars Palace、Wynn 折扣房已售罄，Venetian 等接近满房；11/6 供应商展示名录、11/11 线索采集早鸟、11/13 签证函、11/17 新品指南与车辆许可等节点集中到期；Caesars Forum 内的 SHOT Show Archery Range 仍余少量名额，供参展商做现场试用演示。",
                  "src": "SHOT Show 官网 Insider",
                  "url": "https://shotshow.org/?p=46920",
                  "v": "verified"
                },
                {
                  "date": "2026-11-25",
                  "title": "官方参展页显示展位仍可预订，倒计时约 56 天",
                  "detail": "SHOT Show 2027 参展页仍列 Still Available Exhibit Floor Space，并列出 50K 观众、2K 媒体、100 国家的上届口径；展会 2027 年 1 月 19 日至 22 日在拉斯维加斯 Venetian Expo 与 Caesars Forum 举行。本条为本次检索时页面状态，非新闻发布日期。",
                  "src": "SHOT Show 官网参展页",
                  "url": "https://www.shotshow.org/en/Exhibitors/",
                  "v": "verified"
                },
                {
                  "date": "2026-11-18",
                  "title": "SHOT Show 官网首页列出新一条 Insider：新增豪华酒店选项",
                  "detail": "官网在首页新闻列表标注 2026-11-18 的 Insider 文章『Protecting Your Investment, New Luxury Hotel Options Added to Room Block and More』；同页仍标注展位可订、展会 2027-01-19 至 22 举行。此为官网列表状态的检索记录，非对文章全文内容的转述。",
                  "src": "SHOT Show 官网首页新闻列表（检索日 2026-11-25）",
                  "url": "https://shotshow.org/",
                  "v": "verified"
                },
                {
                  "date": "2026-11-26",
                  "title": "SHOT Show 官网零售商与靶场页列出 16 家新增光学类参展商",
                  "detail": "本条为检索日页面状态而非新闻发布日期：官网零售商与靶场页列出新参展商分类数量，其中 Scopes, Sights, Telescopes & Accessories 16 家、Shooting Range Equipment 10 家、International Exhibitors 20 家、Airgun & Airsoft Products 10 家；页面同时写明展会为贸易-only、观众需提供资质的资格要求。数量是官网自报，不代表实际到场。",
                  "src": "SHOT Show 官网 Retailers and Ranges 页（检索日 2026-11-26）",
                  "url": "https://shotshow.org/retailers-and-ranges/",
                  "v": "verified"
                }
              ],
              "strategy": "官方的『现场试用演示』思路与 GUNBASE 的体验日打法完全一致，是可以借用的展会形式；但 11 月多数省钱与资料节点已过，酒店紧张，临时参展的成本与执行风险升高。即使不参展，1 月 19 日至 22 日仍是全年决策者最集中的外联窗口。",
              "opp": {
                "level": "yellow",
                "title": "体验式展位 / 展期集中外联",
                "why": "窗口势能最高，但截止节点、预算与 B2B 资质是硬门槛",
                "action": "请所有者尽快做 go/no-go；不参展也锁定 1 月外联周",
                "gate": "展位与酒店预算、行业资质、美国合规；未授权不接触",
                "v": "model"
              }
            },
            {
              "name": "Walther (Carl Walther GmbH)",
              "country": "德国",
              "region": "欧洲/北美",
              "type": "枪械生产商",
              "contact": "uncontacted",
              "owner": "未分配",
              "sourceFile": "07_枪械生产商名录 / 手枪类",
              "tag": "未触达 · 赛事距 2 天",
              "news": [
                {
                  "date": "2026-11-27",
                  "title": "第 12 届 Walther Youth Cup 今日开赛，三日出发名单已上线",
                  "detail": "本条为检索日页面状态而非新闻发布日期：赛事官网确认 11 月 27 至 29 日在塞尔维亚 Smederevo 举行，首日为 Grand Prix 手枪 U16/U18/U21 与 U21 气手枪混合团体；页面已列 11 月 19 日最终赛程、11 月 21 日各国报名名单及 27/28/29 三天出发名单。官网写有 40 个射击位、决赛馆 10 位、观众 300+、来自 16 国以上，总赞助商 Carl Walther 提供 LP 500 气手枪与 LG 400 气步枪等奖品。",
                  "src": "SD Shooting 官方赛事页（检索日 2026-11-27）",
                  "url": "https://www.sdshooting.rs/",
                  "v": "verified"
                },
                {
                  "date": "2026-11-21",
                  "title": "第 12 届 Walther Youth Cup 发布最终赛程与各国报名名单，11/27-29 开赛",
                  "detail": "赛事官网 sdshooting.rs 列出 11 月 19 日最终赛程与 11 月 21 日报名名单：塞尔维亚 Smederevo，U16/U18/U21，40 个射击位、决赛馆 10 位、观众容量 300+，来自 16 国以上；总赞助商 Carl Walther GmbH Sportwaffen 提供 LP 500 气手枪与 LG 400 气步枪等奖品。",
                  "src": "SD Shooting 官方赛事页",
                  "url": "https://www.sdshooting.rs/",
                  "v": "verified"
                },
                {
                  "date": "2026-11-16",
                  "title": "Walther 在 PDP 促销中搭赠 290 美元 Vortex Venom 红点镜，至 12 月 31 日",
                  "detail": "Firearm Discounts 于 11 月 16 日汇总 American Rifleman 的秋季促销：Walther 对符合条件的 PDP 购买赠送估值 290 美元的 Vortex Venom 红点镜，活动至 12 月 31 日。这是枪厂与光学品牌的终端搭赠，不是赛事赞助或我方合作，来源为二手汇总稿。",
                  "src": "Firearm Discounts（引 American Rifleman，2026-11-16）",
                  "url": "https://firearm-discounts.com/gun-makers-roll-out-rebates-and-free-gear-ahead-of-black-friday",
                  "v": "verified"
                }
              ],
              "strategy": "赛程与名单已发布，说明赛事进入执行状态；距开赛仅 2 天，实物样品跨境寄送基本来不及，硬塞赞助既不现实也伤品牌。合理动作是把 2026 作为观察场，直接锁定 2027 赛季的奖品或体验位谈判，并用本届结果与主办方公开联系方式作为依据。",
              "opp": {
                "level": "yellow",
                "title": "2027 青年杯光学奖品 / 体验位",
                "why": "赛事结构已验证且明确接受器材类奖品，但 2026 窗口实质关闭",
                "action": "赛后整理一页提案，等授权后询问 2027 合作；本轮不发邮件",
                "gate": "奖品样品与跨境寄送成本需确认；不承诺现金赞助",
                "v": "model"
              }
            },
            {
              "name": "Purdey at the Royal Berkshire（James Purdey & Sons）",
              "country": "英国",
              "region": "欧洲",
              "type": "持牌靶场 / 品牌赛事",
              "contact": "uncontacted",
              "owner": "未分配",
              "sourceFile": "公开网络 / 英国持牌靶场（新进）",
              "tag": "未触达 · 赛事进行中",
              "news": [
                {
                  "date": "2026-11-04",
                  "title": "Sporting Gun 报道：Purdey 三项新活动将每年举办，Game Cup 本周进行中",
                  "detail": "Sporting Gun 11 月 4 日文章写明 Purdey at The Royal Berkshire 今年新增 Purdey 500、11 月 Game Cup 与 6 月 Annika Purdey Ladies’ Day 三项活动，并称全部每年举办；CEO Dan Jago 表示目的是让新人与资深射手都进入射击学校。文章重复 Game Cup 11 月 23 至 28 日、100 靶、55 英镑含泥靶、两个奖项各得 1000 发弹药与下季猎场日席位。检索时未检得本届获奖结果。",
                  "src": "Sporting Gun（2026-11-04）",
                  "url": "https://sporting-gun.com/events/purdey-500-royal-berkshire-season-opener",
                  "v": "verified"
                },
                {
                  "date": "2026-10-16",
                  "title": "Purdey 首届 Game Cup 于 11 月 23 至 28 日举行，100 靶模拟猎鸟场景",
                  "detail": "Fieldsports Journal 报道，英国枪厂 James Purdey & Sons 在其 Royal Berkshire 射击学校办首届 Game Cup：单人 100 靶、每人 55 英镑（含靶不含弹），设 Top Gun 与 Top Side-by-Side 两个组别，奖品各含 1000 发弹药与 Purdey Sporting Agency 猎场日席位。赛事报道发布于 10 月 16 日，但赛事本身在本次检索时正在进行。官方活动链接经访问返回 404，故以行业媒体为来源并标注该限制。",
                  "src": "Fieldsports Journal",
                  "url": "https://fieldsports-journal.com/news/purdey-game-cup-clay-competition",
                  "v": "verified"
                },
                {
                  "date": "2026-11-26",
                  "title": "Sporting Gun 活动页再确认 Game Cup 赛制与奖品结构",
                  "detail": "本条为检索日页面状态而非新闻发布日期：Sporting Gun 页面列出 Purdey Game Cup 11 月 23 至 28 日、100 靶模拟猎鸟课程、每人 55 英镑含靶、可重复参赛；High Gun 与最佳并列双管射手各得 1000 发弹药与下季 Purdey Sporting Agency 猎场日席位。同页另载首次 Purdey 500 于 2026-09-15 举行（500 靶、330 英镑含弹药与教学）。",
                  "src": "Sporting Gun 活动页（检索日 2026-11-26）",
                  "url": "https://sporting-gun.com/events/purdey-500-royal-berkshire-season-opener",
                  "v": "verified"
                }
              ],
              "strategy": "这是英国持牌场地里少见的品牌自办赛事，奖品结构已经有明确赞助位（弹药与猎场日），说明它愿意用实物与服务组合做合作。2026 赛事已在场内，本轮只做赛况观察；真正可谈的是 2027 年奖品或精度体验区，并把『不出现武器功能宣传』作为内容边界。",
              "opp": {
                "level": "yellow",
                "title": "2027 Game Cup 光学奖品 / 体验区",
                "why": "奖品赞助结构已验证、场地持牌、时间固定；但 2026 已开赛且官方活动页失效",
                "action": "赛后核实结果与官方联系入口，形成 2027 提案；等所有者授权",
                "gate": "英国持牌场地与合规、样品成本、官方联系方式需先核实",
                "v": "model"
              }
            },
            {
              "name": "Sabatti S.p.A.",
              "country": "意大利",
              "region": "欧洲",
              "type": "枪械生产商",
              "contact": "sent",
              "owner": "GB-Marketing",
              "sourceFile": "07_枪械生产商名录 / 归属表",
              "tag": "11-23 16:30 已投递 · 禁止重发",
              "news": [
                {
                  "date": "2026-11-26",
                  "title": "本轮再次未检得该机构近 30 天独立公开动态",
                  "detail": "官网 sabatti.it 新闻页最新可见为未标日期的 NEXT GENERATION 线与 2025 年专利、赛事条目，未见 10 月 27 日至 11 月 26 日的独立新品、赛事或合作公告；11-23 情报中列出的 Trofeo Fiocchi-Sabatti 与 IWA 2026 内容不重复计入本轮新增。",
                  "src": "Sabatti 官网新闻页（检索日 2026-11-25）",
                  "url": "https://www.sabatti.it/it/news",
                  "v": "verified"
                }
              ],
              "strategy": "合作信已于 11-23 真实投递，Marketing 现在唯一合规动作是等待回信，不追加邮件、不借新动态二次触达。若对方回复，沿用 F-Class 赛事已有光学品牌在场的切入逻辑谈第二赞助位或体验枪方案。",
              "opp": {
                "level": "yellow",
                "title": "回信后谈 F-Class 光学赞助 / 体验日",
                "why": "对象已占用且已触达，新增动作取决于对方回信",
                "action": "不做任何新外发；把本轮『官网无新动态』写入后续跟进备注",
                "gate": "30 天锁定期；重发会构成骚扰；报价需所有者授权",
                "v": "model"
              }
            },
            {
              "name": "ASV Prins Hendrik",
              "country": "荷兰",
              "region": "欧洲",
              "type": "射击俱乐部",
              "contact": "sent",
              "owner": "GB-Marketing",
              "sourceFile": "08_全球枪店与俱乐部名录 / 归属表",
              "tag": "11-23 18:00 已投递 · 禁止重发",
              "news": [
                {
                  "date": "2026-11-26",
                  "title": "本轮再次未检得该俱乐部近 30 天独立新闻，官网确认持牌与青训结构",
                  "detail": "官网确认其为 Amersfoortse Schietsportvereniging Prins Hendrik，青少年用气步枪/气手枪并由资深会员与教练带训，场馆有 3 个靶区、每区 5 个射击位，可设 10/12/25/50 米，所有会员登记于荷兰 KNSA。官网没有 10 月 27 日至 11 月 26 日的独立新闻条目；这补充了联系依据，但不构成新动态。",
                  "src": "ASV Prins Hendrik 官网（检索日 2026-11-25）",
                  "url": "https://www.asvprinshendrik.nl",
                  "v": "verified"
                }
              ],
              "strategy": "官网信息把体验日提案的前提坐实了：10 米气步枪/气手枪、青训有人带、靶位与 KNSA 体系明确。合作信已投递，后续只能在对方回信后给样品清单与流程模板，不得再发新邮件。",
              "opp": {
                "level": "yellow",
                "title": "回信后安排会员光学体验日",
                "why": "场地与青训结构已核实，但对象已触达且本轮无新公开动态",
                "action": "等待回信；把 10 米气枪与青少年带训信息存入跟进备注",
                "gate": "30 天锁定期；样品寄送与荷兰持牌场地合规需确认",
                "v": "model"
              }
            },
            {
              "name": "GUNBASE 已发客户群（Sales 侧 24 家）",
              "country": "德国/法国/西班牙/意大利/瑞士/荷兰/中东等",
              "region": "欧洲/中东",
              "type": "已发客户动态",
              "contact": "sent",
              "owner": "GB-Sales",
              "sourceFile": "outbound_owners.json（本机，仅域名）",
              "tag": "已发/已入队 · Marketing 一律跳过",
              "news": [
                {
                  "date": "2026-11-25",
                  "title": "本轮未逐家检得独立公开动态，仅记录类别级信号",
                  "detail": "本轮按归属表逐家核对后，未检得这 24 家在近 30 天的独立公开新闻；可核实的类别信号是 ESC 的媒体协议与 Purdey 的品牌自办赛事，说明欧洲射击市场正在同时放大内容曝光与体验型赛事。它们是类别信号，不代表上述具体客户自身动态。",
                  "src": "本机归属表 + ESC / Fieldsports Journal 公开来源（url 指向其中的 ESC 报道）",
                  "url": "https://www.svgeurope.org/blog/headlines/focused-growth-the-european-shooting-confederation-on-growing-its-audience-through-a-new-deal-with-warner-bros-discovery-sports/",
                  "v": "verified"
                }
              ],
              "strategy": "Marketing 对该群只做情报反哺：把 ESC 内容放大与 Purdey 赛事奖品结构整理成话术包给 Sales，自己不触达。遵守一个机构一个归属方与 30 天锁定期。",
              "opp": {
                "level": "yellow",
                "title": "归属锁定 + 类别情报反哺 Sales",
                "why": "24 家已被 Sales 占用，直接触达会破坏契约",
                "action": "把两条类别信号写入给 Sales 的周话术包，不发任何邮件",
                "gate": "不得外联；不把类别信号冒充具体客户动态",
                "v": "model"
              }
            },
            {
              "name": "跨产业联名标杆群（Columbia x BEAMS / Community Coffee x Mossy Oak）",
              "country": "美国/日本",
              "region": "北美/亚太",
              "type": "跨产业标杆",
              "contact": "reference",
              "owner": "参考",
              "sourceFile": "公开网络 / 跨产业线索",
              "tag": "仅策略参考 · 非触达对象",
              "news": [
                {
                  "date": "2026-11-03",
                  "title": "Comfort Colors 成为 Bruno Mars 巡演主要服装供应商，预计支持超 100 万件商品",
                  "detail": "Gildan 11 月 3 日新闻稿：其 Comfort Colors 品牌通过与 Merch Traffic 的合作成为 The Romantic Tour 全球商品项目的主要服装供应商，1717 重磅 T 恤为指定产品，预计巡演期间支持超过 100 万件商品；巡演超过 86 场，横跨北美、欧洲、英国、澳大利亚与新西兰。该案是服饰品牌绑定文化场景的规模样本，与射击无关，也不涉及武器功能宣传。",
                  "src": "Gildan 官方新闻稿 PDF（2026-11-03）",
                  "url": "https://gildancorp.com/media/uploads/news/2026-11/bcomfort_colors_bruno_mars_partnership_en_CvB2Fqy.pdf",
                  "v": "verified"
                },
                {
                  "date": "2026-11-05",
                  "title": "Agassi Sports 与 Warner Music 旗下 Rhino 签商品授权，做 Grateful Dead 主题球拍配件",
                  "detail": "提交至 SEC 的新闻稿称，Agassi Sports Licensing 与 Rhino Entertainment 签署商品授权协议，开发 Grateful Dead 品牌匹克球与板式网球商品，可含设备、配件、服装与补水产品，预计 2027 年中起上市。该案说明音乐 IP 可以跨入运动生活方式品类；不是射击或光学案例，也不代表我方已有类似授权。",
                  "src": "SEC EDGAR EX-99.1（2026-11-05）",
                  "url": "https://www.sec.gov/Archives/edgar/data/930245/000149315226050242/ex99-1.htm",
                  "v": "verified"
                },
                {
                  "date": "2026-11-21",
                  "title": "Columbia x BEAMS 复古户外胶囊在日本发售，含狩猎图案卫衣与迷彩抓绒帽",
                  "detail": "BEAMS 与 Columbia 以 1986 年 Bugaboo Jacket 为蓝本做双面穿复刻，11 月 4 日开启预售、11 月 21 日在日本 BEAMS 门店与网店发售；三件单品含 reversible 夹克 37,400 日元、狩猎图案卫衣 15,400 日元、迷彩/棕色抓绒帽 5,940 日元。该报道依据 BEAMS 官方商品页与社媒信息整理。",
                  "src": "JustFresh（引 BEAMS 官方商品页与社媒）",
                  "url": "https://www.justfresh.co/fashion/columbia-beams-bugaboo-reversible-jacket-november-21",
                  "v": "verified"
                },
                {
                  "date": "2026-11-17",
                  "title": "Community Coffee x Mossy Oak Camp Blend 进入在售期，持续至 2027 年 2 月",
                  "detail": "官方新闻稿确认该限量咖啡 11 月 17 日上线官网、便利店与独立杂货，12 月进 Amazon，12 盎司建议价 12.99 美元，售至 2027 年 2 月；包装用 Mossy Oak Bottomland 迷彩，叙事围绕出猎前的清晨仪式。此条为 11-23 已记录案例的持续状态，不计入本轮新增。",
                  "src": "PR Newswire / Community Coffee 公告",
                  "url": "https://www.prnewswire.com/news-releases/fuel-your-hunt-community-coffee-and-mossy-oak-launch-limited-edition-camp-blend-302941184.html",
                  "v": "verified"
                },
                {
                  "date": "2026-11-04",
                  "title": "RosCo Outdoors 与 Realtree 推出联名功能猎装系列",
                  "detail": "Hunting Life 刊出新闻稿：美国狩猎服饰品牌 RosCo Outdoors 与迷彩品牌 Realtree 合作，推出 GX2 连帽衣、抓绒衬衫、Guide Pro 外套等分层服饰，使用 Realtree Legacy、Original 与 Advantage Classic 图案；双方强调家族传承与户外传统，未涉及光学或武器功能。",
                  "src": "Hunting Life（RosCo Outdoors 新闻稿，2026-11-04）",
                  "url": "https://huntinglife.com/?p=387335",
                  "v": "verified"
                },
                {
                  "date": "2026-11-11",
                  "title": "Burris 与 Outlier 做 Fullfield 瞄准镜限时搭赠",
                  "detail": "Inside Firearms 11 月 11 日报道：10 月 1 日至 12 月 31 日购买符合条件的第五代 Burris Fullfield 瞄准镜，可通过 Outlier 活动页兑换一支 4 英寸 Backdraft Hunter 消音器；需另购转接件并自付运费，兑换截止 2027 年 12 月 31 日，活动由 Outlier 独立执行。",
                  "src": "Inside Firearms（2026-11-11）",
                  "url": "https://insidefirearms.com/gear/burris-and-outlier-announce-limited-time-fullfield-riflescope-promotion",
                  "v": "verified"
                },
                {
                  "date": "2026-11-16",
                  "title": "ShellShock Protection 宣布 OpticsPlanet 为首个线上零售伙伴",
                  "detail": "Hunting Life 刊出的 11 月 16 日新闻稿：护眼与听力品牌 ShellShock Protection 全系列上线 OpticsPlanet，含 ANSI Z87.1+ 护目镜、EXO PRO 电子耳罩与 Eye & Ear 套装。该合作说明专业配件品牌可先用线上渠道放大，再谈线下活动。",
                  "src": "Hunting Life（ShellShock Protection 新闻稿，2026-11-16）",
                  "url": "https://huntinglife.com/shellshock-protection-announces-first-online-retail-partner-opticsplanet",
                  "v": "verified"
                }
              ],
              "strategy": "新案例把『地域文化资产 + 复古户外符号 + 限时胶囊』又验证了一次：不造新品类、不谈性能，用既有日常物件承载身份。GUNBASE 可复刻为精度主题的晨间仪式周边，但全程不出现枪支图像、不做武器功能宣传。",
              "opp": {
                "level": "green",
                "title": "复刻限时联名模板",
                "why": "两个 2026 年 11 月案例都验证了低风险联名结构",
                "action": "把胶囊时长、价格带与渠道选择写进联名 proposal 素材",
                "gate": "落地城市、预算与联名方需所有者决定；本轮不接触任何品牌",
                "v": "model"
              }
            },
            {
              "name": "玉晶光（Genius Electronic Optical）x 3M",
              "country": "中国台湾地区",
              "region": "亚太",
              "type": "精密光学标杆 / 定位证据",
              "contact": "reference",
              "owner": "参考",
              "sourceFile": "公开网络 / 定位证据雷达（新进）",
              "tag": "仅定位证据 · 非合作对象",
              "news": [
                {
                  "date": "2026-11-19",
                  "title": "玉晶光与 3M 战略合作推进 EBO 光学方案研发制造与产能扩充",
                  "detail": "中央社报道，双方共同推进 3M 扩束光学技术（EBO）方案的研发、制造与产能扩充，应用指向 AI 服务器与数据中心；公司目标 2027 年整体营收成长 20%，EBO 产能 2026 年第 4 季起放量。报道未涉及枪用光学或射击运动。",
                  "src": "中央社 CNA",
                  "url": "https://www.cna.com.tw/news/afe/202611190325.aspx",
                  "v": "verified"
                },
                {
                  "date": "2026-11-19",
                  "title": "3M 官方公告补充合作结构：拟以私募取得约 4.7% 股权",
                  "detail": "3M 公告由 AMPP 转载：双方合作推进 EBO 技术开发与制造，3M 预计投资取得玉晶光约 4.7% 普通股，预计 2026 年第四季交割；3M 提供技术与客户，玉晶光提供精密光学制造与产能。此条补充 11:17 版中央社报道的合作结构，不是新增同品类背书。",
                  "src": "3M 公告 / AMPP CoatingsPro（2026-11-19）",
                  "url": "https://content.ampp.org/coatingspro/magazine-article/16519/3M-Announces-Collaboration-with-GSEO-to-Advance",
                  "v": "verified"
                }
              ],
              "strategy": "此条只进入品牌定位证据库，用于说明台湾地区精密光学制造能进入国际长期技术合作；它是跨领域案例，不是同品类背书。GUNBASE 不因此宣称自己有 3M 或同等材料合作，也不把它写进对客户的资质描述。",
              "opp": {
                "level": "red",
                "title": "仅作定位证据，不作合作对象",
                "why": "跨领域龙头不是可触达伙伴，且借其背书会造成事实误述",
                "action": "只在内部提案的产业背景页引用，并附来源与边界说明",
                "gate": "不得宣称合作、供应关系或同品类获奖",
                "v": "model"
              }
            },
            {
              "name": "Safari Club International / SCI Foundation",
              "country": "美国 / 全球",
              "region": "全球/非洲",
              "type": "国际协会",
              "contact": "uncontacted",
              "owner": "未分配",
              "sourceFile": "公开网络 / 组织雷达（新进）",
              "tag": "未触达 · 新进 · 保育与可持续利用叙事",
              "news": [
                {
                  "date": "2026-11-24",
                  "title": "SCI 官网推出 SCI TV 独家狩猎节目合集",
                  "detail": "Safari Club 官网 11 月 24 日短文称 SCI TV 汇集独家狩猎节目，点名 Keith Warren、Kristy Titus 等户外人物及不同国家猎人，内容侧重人物与地点故事。该条显示 SCI 正把会员内容做成流媒体资产；文中未公布企业赞助、产品植入或合作招募规则。",
                  "src": "Safari Club 官网（2026-11-24）",
                  "url": "https://safariclub.org/outdoor-personalities-on-sci-tv/",
                  "v": "verified"
                },
                {
                  "date": "2026-11-13",
                  "title": "SADC 与 SCI / SCIF 重申伙伴关系，落实 2026-2028 两项实施计划",
                  "detail": "南部非洲发展共同体（SADC）秘书处与 SCI、SCI Foundation 在南非比勒陀利亚 SCI 非洲办公室举行高层会晤，复核 2025 年 7 月签署的 MOU，并推动 CITES 与 SADC 反盗猎战略（LEAP 2022-2032）两项 2026-2028 实施计划；SCI/SCIF 承诺依计划提供技术与资金支持。此为 SADC 官方发布的事实，GUNBASE 不参与其政策立场。",
                  "src": "SADC 官网 latest-news（2026-11-13）",
                  "url": "https://www.sadc.int/latest-news/sadc-strengthens-partnership-safari-club-international-and-foundation-sci-and-scif",
                  "v": "verified"
                },
                {
                  "date": "2026-11-16",
                  "title": "第 24 届非洲野生动物协商论坛在坦桑尼亚阿鲁沙开幕，SCIF 为共同主办方",
                  "detail": "SUCo-SA 页面写明 AWCF 于 11 月 16 至 20 日在阿鲁沙 Gran Meliá 酒店举行，由坦桑尼亚野生动物局与 SCI Foundation 共同主办，参与方包括政府、野生动物管理机构、狩猎产业、社区代表、美国鱼类及野生动物管理局与 IUCN 等。论坛议题含管制贸易、科学管理与社区受益；GUNBASE 不参与其政策立场。",
                  "src": "SUCo-SA（2026-11-16，页面写 opens today）",
                  "url": "https://suco-sa.org.za/africas-leading-wildlife-forum-comes-to-arusha-awcf-2026/",
                  "v": "verified"
                }
              ],
              "strategy": "SCI 的公开议程以保育、社区与执法合作为主，不是光学器材采购。GUNBASE 若研究这条线，只能围绕『测量与观察工具支持社区项目』这类边缘角色做提案，并回避战利品、濒危物种与武器功能叙事；在所有者授权前不接触。",
              "opp": {
                "level": "yellow",
                "title": "观察性合作：保育项目的器材支持位",
                "why": "合作结构由 MOU 与实施计划驱动，可验证且有多年周期；但与光学主业关联弱、议题敏感",
                "action": "只做背景研究，不进入 M2 发信队列；若所有者要求推进，先出合规边界清单",
                "gate": "不触碰濒危物种/战利品宣传；不做武器功能宣传；需所有者逐次授权",
                "v": "model"
              }
            },
            {
              "name": "Great British Shooting Show 2027（NEC Birmingham）",
              "country": "英国",
              "region": "欧洲",
              "type": "行业展会",
              "contact": "uncontacted",
              "owner": "未分配",
              "sourceFile": "公开网络 / 展会日历（新进）",
              "tag": "未触达 · 新进 · 同品类光学冠名已验证",
              "news": [
                {
                  "date": "2026-11-04",
                  "title": "Sporting Gun 独立确认英国射击展 2027 年 2 月 12 至 14 日于 NEC 举行",
                  "detail": "Sporting Gun 11 月 4 日文章内页广告写明 British Shooting Show 2027 展期为 2 月 12 至 14 日、地点 NEC Birmingham，并称三天覆盖主要品牌与年度新品发布。该来源独立于展会官网，与 11 月 20 日 Nocpix 冠名报道的日期一致；未公布 GUNBASE 可申请的赞助位或费用。",
                  "src": "Sporting Gun（2026-11-04，展期广告）",
                  "url": "https://sporting-gun.com/events/purdey-500-royal-berkshire-season-opener",
                  "v": "verified"
                },
                {
                  "date": "2026-11-20",
                  "title": "Nocpix 成为 2027 英国射击展冠名赞助商，主打上手体验",
                  "detail": "英国射击展官网 11 月 20 日发布 Nocpix 专访：该热成像与夜视光学品牌成为 2027 展冠名赞助商，称将在 NEC 展台让访客亲手操作 8K Omni 与 Nite Pro 系列，并配产品专家与用户大使；展会日期为 2027-02-12 至 14。官网赞助商页同时列出 IWA OutdoorClassics 为 show partner 并公开赞助咨询入口。",
                  "src": "Great British Shooting Show 官网 exhibitor spotlight（2026-11-20）/ sponsors 页",
                  "url": "https://britishshootingshow.com/exhibitors/nocpix/",
                  "v": "verified"
                }
              ],
              "strategy": "这是同品类光学品牌愿意为英国展付冠名费的可验证事实，直接支持我方『体验优先』打法；但 2027 冠名位已被占，且正展仅三个月。现实落点是 2027 的小规模体验位或奖项合作、以及 2028 的面积与赞助评估，不追冠名。",
              "opp": {
                "level": "yellow",
                "title": "2027 体验位 / 2028 赞助位评估",
                "why": "展期固定、光学品牌赞助意愿已被验证；但entry门槛与预算未知、2027 时间紧",
                "action": "把展期写入时间窗；等所有者决定后再经官网公开渠道询问赞助选项，本轮不接触",
                "gate": "英国持牌与合规、样品与人员成本、冠名位已占；未授权不接触",
                "v": "model"
              }
            },
            {
              "name": "Ecoaims / Biathlon4All（LOOP ONE 公众体验靶位）",
              "country": "德国",
              "region": "欧洲",
              "type": "体验式激活标杆 / 潜在伙伴",
              "contact": "uncontacted",
              "owner": "未分配",
              "sourceFile": "公开网络 / 体验式激活案例（新进）",
              "tag": "未触达 · 新进 · 体验打法量化样板",
              "news": [
                {
                  "date": "2026-11-17",
                  "title": "慕尼黑 LOOP ONE 公众靶位两天记录 2000 多名访客与 10000 多发体验射击",
                  "detail": "Ecoaims 官方案例：在慕尼黑奥林匹克公园举办期间，LOOP ONE 把 Biathlon4All 体验设于园区三处，提供卧姿与立姿的激光与光学射击，由 Ruhpolding 青年志愿者引导；Ecoaims 站点两天记录 2000 多名访客、10000 多发体验射击，同时为残奥冬季两项赛事提供设备与现场成绩系统。",
                  "src": "Ecoaims 官网 news（2026-11-17）",
                  "url": "https://www.ecoaims.com/news/more-than-10000-shots-at-loop-one-what-a-busy-public-biathlon-range-looks-like",
                  "v": "verified"
                }
              ],
              "strategy": "这条案例把『观众变参与者』做成可量化动线：赛场旁设点、志愿者引导、同一设备兼做公众体验与正式比赛。GUNBASE 可把它转成俱乐部体验日的 SOP 与 KPI 模板，先在我方活动验证，再谈是否与其合作；不把它说成我方已合作对象。",
              "opp": {
                "level": "yellow",
                "title": "体验日 SOP 复用 / 活动设备合作观察",
                "why": "方法可验证且量化，但对方为电子靶与冬季两项设备商，与光学产品互补性尚未验证",
                "action": "先把访客数、试用量、引导人数、跟进转化率写进体验日模板；是否接触另案授权",
                "gate": "不宣称已合作；德国与当地活动合规；样品与活动成本待核",
                "v": "model"
              }
            },
            {
              "name": "Leapers / INTEGRIX（台湾地区制造产线）",
              "country": "美国 / 中国台湾地区",
              "region": "北美/亚太",
              "type": "光学厂 / 同品类标杆",
              "contact": "reference",
              "owner": "参考",
              "sourceFile": "公开网络 / 定位证据雷达（新进）",
              "tag": "仅标杆参考 · 非触达对象 · 同品类制造样板",
              "news": [
                {
                  "date": "2026-11-17",
                  "title": "Gun Trade World 报道 Leapers 35 周年制造投资与 2027 INTEGRIX 目录",
                  "detail": "报道给出 2018 年台湾地区 ISO 9001 制造厂、无尘室光学组装、2021 年 100 码室内靶场（额定 .50 口径）与 600 码室外场，以及 2027 目录的 iX8 / iX6 / iXF 三条 INTEGRIX 线。报道未提及 GUNBASE，也未宣布新的冠军共创或奖项。",
                  "src": "Gun Trade World（2026-11-17）",
                  "url": "https://www.guntradeworld.com/leapers-35-years-of-manufacturing-investment/",
                  "v": "verified"
                }
              ],
              "strategy": "这是同品类最贴近的结构样板：台湾地区制造 + 德日材料 + 冠军共创 + 美国媒体奖项 + 欧洲配送。本轮新增的是测试基础设施与 2027 目录细节，适合转成我方证据清单模板；不把对方产线、奖项或客户写成我方资源。",
              "opp": {
                "level": "red",
                "title": "仅作定位与证据模板，不作合作对象",
                "why": "同品类头部品牌且并非我方已建立关系，借其资质会造成事实误述",
                "action": "只在内部提案的产业背景页引用，附来源与边界说明",
                "gate": "不得宣称合作、代工、同厂或同奖项；需所有者授权才可另案接触",
                "v": "model"
              }
            },
            {
              "name": "KINKO OPTICAL（6209.TW）",
              "country": "中国台湾地区",
              "region": "亚太",
              "type": "精密光学厂 / 定位证据",
              "contact": "reference",
              "owner": "参考",
              "sourceFile": "公开网络 / 定位证据雷达（新进）",
              "tag": "仅定位证据 · 非合作对象 · 跨领域",
              "news": [
                {
                  "date": "2026-11-20",
                  "title": "法说会整理稿：红外热成像镜头营收占比 70%，2027 年拟再投 4 亿新台币扩产",
                  "detail": "BigGo Finance 整理的 11 月 20 日法说会显示，前三季营收 41.64 亿新台币、年增 71%，红外镜头营收占比从 56% 升至 70%；扩产主要指向车用夜视 AEB 与红外市场，未涉及枪用瞄准镜、射击赛事或 GUNBASE。",
                  "src": "BigGo Finance（整理 KINKO 2026-11-20 法说会）",
                  "url": "https://finance.biggo.com/quote/6209.TW/earnings-call/TW_6209.TW_2026-11-20",
                  "v": "verified"
                }
              ],
              "strategy": "这家公司的价值是说明台湾地区精密光学产业在红外镀膜与单点超精密加工上有可核实投入；与 GUNBASE 的枪用光学没有已验证的品类或渠道关联，因此只进入定位证据库，不进入合作名单。",
              "opp": {
                "level": "red",
                "title": "仅作产业能力背景，不作合作对象",
                "why": "跨领域且无已建立关系；写成我方供应或技术背书会造成误述",
                "action": "内部材料引用时注明为法说会整理稿，非审计财报",
                "gate": "不得宣称合作、供应关系或同品类获奖",
                "v": "model"
              }
            },
            {
              "name": "The Commando Initiative x Leupold",
              "country": "美国",
              "region": "北美",
              "type": "非营利组织 x 光学品牌 / 指定用镜样板",
              "contact": "reference",
              "owner": "参考",
              "sourceFile": "公开网络 / 组织合作雷达（新进）",
              "tag": "仅策略参考 · 非触达对象 · 指定用镜结构",
              "news": [
                {
                  "date": "2026-11-17",
                  "title": "Leupold 成为 The Commando Initiative 独家光学伙伴，覆盖 2026-2027 活动",
                  "detail": "The Outdoor Wire 新闻稿称，非营利组织 TCI 为现役与退役特种作战人员及家庭提供狩猎、垂钓与户外活动的交通、住宿、燃料、肉类处理等支持，参与者不付费；创办人 Kurt Casey 选定 Leupold Mark 5HD 瞄准镜与 BX-6 Range HD 测距双筒用于 2026 与 2027 年活动。",
                  "src": "The Outdoor Wire（2026-11-17）",
                  "url": "https://www.theoutdoorwire.com/releases/2026/11/leupold-named-exclusive-optics-partner-of-the-commando-initiative",
                  "v": "verified"
                }
              ],
              "strategy": "可借鉴的是『活动指定用镜 + 实物支持』的进入方式：由使用者选定型号，品牌承担器材角色。GUNBASE 尚未与 TCI 建立关系，也不借用其军事或美国特种作战叙事；这条只作为合作结构参考，不产生外联动作。",
              "opp": {
                "level": "red",
                "title": "仅作结构参考，不作可触达对象",
                "why": "非营利项目与身份叙事高度敏感，且我方无既有关系",
                "action": "把指定用镜结构写入活动合作模板，本轮不接触",
                "gate": "不借用军方身份、不做武器功能宣传、需所有者逐次授权",
                "v": "model"
              }
            },
            {
              "name": "Viridian x Ducks Unlimited / NWTF",
              "country": "美国",
              "region": "北美",
              "type": "光学厂 x 保育组织 / 联名样板",
              "contact": "reference",
              "owner": "参考",
              "sourceFile": "公开网络 / 联名案例雷达（新进）",
              "tag": "仅策略参考 · 非触达对象 · 标识联名结构",
              "news": [
                {
                  "date": "2026-11-09",
                  "title": "Viridian 展示 RFX11 绿点镜的 Ducks Unlimited 与 NWTF 组织联名版",
                  "detail": "Hunting Wire 新闻稿称，Viridian 以既有 RFX11 绿点镜为基础，分别推出印有 Ducks Unlimited 标识（为 Springfield Armory Echelon 平台设计）与 National Wild Turkey Federation 标识的版本，并对外提供定制品牌与 OEM 合作；产品口径与电池续航等数据为厂商自述。",
                  "src": "Hunting Wire（2026-11-09）",
                  "url": "https://www.huntingwire.com/releases/2026/11/viridian-weapon-technologies-showcases-custom-optics-capabilities-with-ducks-unlimited-and-nwtf",
                  "v": "verified"
                }
              ],
              "strategy": "这条验证的是最低成本的联名形态：不研发新品类，只把组织身份放进现有产品，再叠加 OEM 服务。GUNBASE 可把『现有型号 + 合作方标识 + 限定渠道』作为 M4 创意合作的候选模板，但本轮不接触任何品牌或组织。",
              "opp": {
                "level": "red",
                "title": "仅作联名模板，不作可触达对象",
                "why": "他人已发布的联名案例，不能写成我方合作；枪用配件叙事需合规审查",
                "action": "转给 M4 创意合作研究作模板素材，本轮不外联",
                "gate": "不出现武器功能宣传；联名方与落地预算需所有者决定",
                "v": "model"
              }
            },
            {
              "name": "TOSIA / 工研院 / PhotonDelta（台荷光子产业合作）",
              "country": "中国台湾地区 / 荷兰",
              "region": "亚太/欧洲",
              "type": "产业协会与研究机构标杆",
              "contact": "uncontacted",
              "owner": "未分配",
              "sourceFile": "公开网络 / 台湾地区精密制造国际合作（新进）",
              "tag": "未触达 · 新进 · 标杆参考（非同品类）",
              "news": [
                {
                  "date": "2026-11-04",
                  "title": "三方签三年 MOU，并在 PIC Summit 办 TAIWAN SESSION",
                  "detail": "经济日报报道 TOSIA、工研院与荷兰 PhotonDelta 于 11 月 2 至 6 日访荷期间签署三年合作备忘录；报道同时列出工研院与立碁电子、千才科技、荷兰 PHIX 的矽光子光收发模组联合研发，以及立碁展示的 1.6T LPO 模组与 3.2T 目标。该合作为光通讯与矽光子领域事实，不涉及枪用光学、射击赛事或 GUNBASE。",
                  "src": "经济日报（2026-11-04）",
                  "url": "https://money.udn.com/money/story/5621/9856066",
                  "v": "verified"
                }
              ],
              "strategy": "对我方的价值只有结构参考：协会、研究机构、欧洲平台各自承担明确角色，并以多年 MOU 与具体研发项目落地。若要把这套结构用于射击光学，必须由我方自行找到同品类伙伴与授权，不能把他人的 MOU 写成我方关系。",
              "opp": {
                "level": "yellow",
                "title": "多年期联合研发结构参考",
                "why": "合作结构可核实，但领域、伙伴与规模都与我方当前资源不匹配",
                "action": "作为提案版式与角色分工参考，进入定位证据库；本轮不接触",
                "gate": "未获所有者授权不外联；跨领域案例不得冒充同品类背书",
                "v": "model"
              }
            },
            {
              "name": "亚洲大学 × 佳凌科技（产学合作获奖标杆）",
              "country": "中国台湾地区",
              "region": "亚太",
              "type": "产学合作标杆",
              "contact": "reference",
              "owner": "未分配",
              "sourceFile": "公开网络 / 台湾地区光学研发获奖（新进）",
              "tag": "标杆参考 · 非同品类 · 地区产学奖项",
              "news": [
                {
                  "date": "2026-11-02",
                  "title": "车载镜头玻璃亲水薄膜项目获国科会产学合作特优奖",
                  "detail": "亚洲大学页面记载，黄俊杰教授团队与佳凌科技以「超音波喷涂制备亲水薄膜于车载镜头玻璃」项目，在 2026 年 11 月 2 日国科会工程处 115 年度产学合作计划成果发表暨绩效考评会议获民生化材领域特优奖，网页 11 月 3 日发布。奖项为台湾地区产学计划考评，不是国际比赛或射击产业奖项。",
                  "src": "亚洲大学半导体学士学程（2026-11-02 / 11-03）",
                  "url": "https://semi.asia.edu.tw/zh_tw/more_announcement/Asia-University-and-CALIN-Technology-Win-NSTC-Industry-Academia-Collaboration-Outstanding-Award-for-Automotive-Optical-Thin-Film-Research-27950925",
                  "v": "verified"
                }
              ],
              "strategy": "可复用的是「具体技术项目 + 评审等级 + 会议日期」这种写法：若未来我方有第三方测评或联合研发结果，应按同样颗粒度列出，而不是笼统讲产地或经验。此对象仅作参考，不是潜在经销或赞助对象。",
              "opp": {
                "level": "yellow",
                "title": "研发证据写法参考",
                "why": "有可核实奖项与项目描述，但属车载光学与地区产学考评",
                "action": "写入定位证据与提案模板，不做外联",
                "gate": "不得写成国际奖项、GUNBASE 获奖或枪用光学性能证明",
                "v": "model"
              }
            }
          ],
          "plays": [
            {
              "id": "P1",
              "title": "两条正在发生的时间窗，一条马上关上",
              "level": "核心",
              "detail": "Purdey Game Cup 11/23-28 正在进行，Walther Youth Cup 11/27-29 仅剩 2 天，12 月 ESC European Champions League 在马耳他。实物样品已赶不上前两场，正确动作是观察赛果、锁定 2027 赞助位；12 月 ESC 线也不做临时硬塞，先做提案。",
              "basis": "Fieldsports Journal 2026-10-16 / SD Shooting 官方赛事页 2026-11-21 / SVG Europe 2026-11-12"
            },
            {
              "id": "P2",
              "title": "合作价值正在被媒体放大，但入口仍要从小到大",
              "level": "核心",
              "detail": "ESC 用三年协议把赛事送上 Eurosport 与 HBO Max，首场推广已报约 400 万触达；ISSF 用 MOU 把 FICS 赛场服务纳入 Athletes First。两者都说明外部伙伴有位置，但公开的都不是『买赞助』入口。GUNBASE 应从器材支持、体验位、内容素材这类可承担角色切入。",
              "basis": "SVG Europe 2026-11-12 / ISSF news/5330 2026-11-09"
            },
            {
              "id": "P3",
              "title": "产地只做事实描述，同品类证据才做信任主张",
              "level": "核心",
              "detail": "新证据是台湾地区精密光学厂玉晶光与 3M 的 EBO 合作，证明的是制造与协同能力，不是枪用光学获奖。沿用 11-23 的判断：NIM 调查中 Made in Taiwan 信任度 33%，仅高于内地 31%，远低于德国 66% 与日本 63%；对外只写 Taiwan-based，随后接可验证的具体角色与第三方法实。",
              "basis": "中央社 2026-11-19 / Visual Capitalist 引 NIM 2025-03 / 11-23 定位证据库"
            },
            {
              "id": "P4",
              "title": "联名卖的是仪式与符号，不是参数",
              "level": "重点",
              "detail": "Community Coffee x Mossy Oak 售至 2027 年 2 月，Columbia x BEAMS 用 1986 年经典款做限时胶囊。两者的共同点是既有的日常仪式、可识别的地域或复古符号、明确限时窗口，且都不需要新品类研发。",
              "basis": "PR Newswire 2026-11-17 / JustFresh 引 BEAMS 官方信息 2026-11-21"
            },
            {
              "id": "P5",
              "title": "归属与诚信优先于凑数",
              "level": "铁律",
              "detail": "26 家已发或已入队对象仍在 30 天锁定期内，Marketing 只做类别反哺；本轮新增的 4 个对象全部标未分配，未经所有者授权不接触。Sabatti 与 Prins Hendrik 官网本轮没有新动态，不为了制造『新进展』而改写旧新闻。",
              "basis": "outbound_owners.json（本机）/ 指令板 D-03 / 各对象官网检索结果"
            },
            {
              "id": "P6",
              "title": "同品类赞助与体验位都有真实价格标签，别只谈情怀",
              "level": "核心",
              "detail": "Nocpix 拿下 2027 英国射击展冠名，并明确以『让访客亲手操作 8K』为展台核心；Ecoaims 在慕尼黑用两天 2000 多人、10000 多发证明公众靶位可量化。GUNBASE 的提案必须同时写清承担角色、体验动线与可量化指标，而不是只讲品牌故事。",
              "basis": "Great British Shooting Show 官网 2026-11-20 / Ecoaims 官网 2026-11-17"
            },
            {
              "id": "P7",
              "title": "协会线出现治理风险，12 月 14 日前暂缓 ESC 接触",
              "level": "重点",
              "detail": "ISSF 官网 11 月 20 日确认 CAS 驳回 ESC 与 Ratner 的临时措施申请，纪律决定继续公开，主席选举定于 12 月 14 日在罗马。GUNBASE 不评价争议立场，但该窗口内接触 ESC 容易卷入内部政治，建议把协会线资源转往赛事支持型对象，选举后复核。",
              "basis": "ISSF 官网 news/5351 2026-11-20 / Inside the Games 2026-11 报道"
            },
            {
              "id": "P8",
              "title": "合作入口有三级形态：标识联名、指定用镜、限时捆绑",
              "level": "核心",
              "detail": "Viridian 把组织标识放进既有 RFX11，Leupold 做活动指定用镜，Burris 与 Outlier 做限时搭赠。三者都不需要 GUNBASE 新产品研发，但都需要对方身份、合规边界与实物成本；先做模板，不先发信。",
              "basis": "Hunting Wire 2026-11-09 / The Outdoor Wire 2026-11-17 / Inside Firearms 2026-11-11"
            },
            {
              "id": "P9",
              "title": "协会线的可参与位在运动员与公众项目，不在赞助牌",
              "level": "重点",
              "detail": "ISSF 公众投票录得 13,339 张验证票、12 月 7 日揭晓；同期运动员委员会选举有 590 人投票并有 3 席由执委会任命。信号是协会擅长用公开参与做动员，而非公开挂出器材采购入口。GUNBASE 仍应在 12 月 14 日前对 ESC / ISSF 线保持暂缓。",
              "basis": "ISSF news/5348 2026-11-23 / ISSF news/5342 2026-11-17 / ISSF news/5351 2026-11-20"
            },
            {
              "id": "P10",
              "title": "把 LA28 资格周期当多年窗口，不追单场赞助",
              "level": "重点",
              "detail": "ISSF 11 月 24 日确认多哈世锦赛产生首批 36 个 LA28 配额，11 月 26 日美洲赛仍有 12 个配额与 208 个泛美席位在 12 月 1 日前争夺；12 月 7 日公众选择奖揭晓、12 月 14 日主席选举。对 GUNBASE 而言，这是至少跨 2027 至 2028 的资格周期，不是一次性赛事赞助；当前治理敏感期应只观察、不接触。",
              "basis": "ISSF 官网 news/5341、5352、5348、5351（2026-11-20 至 11-26）"
            },
            {
              "id": "P11",
              "title": "SHOT 周把供应链与出口合规拆成两个低成本入口",
              "level": "观察",
              "detail": "SHOT Show 官网列出 1 月 18 至 21 日 Supplier Showcase Reloaded（800+ 供应商、换批次、非零售买家干扰）与 1 月 19 至 20 日四场出口培训（会员 75 美元/场）。对台湾地区卖方，美国法规课只作市场进入知识，不构成法律意见；供应链日则提供不租主展位也能观察材料、物流与软件伙伴的路径。是否派人/参展需所有者拍板。",
              "basis": "SHOT Show 官网 Supplier Showcase 与 Export Training Sessions（检索日 2026-11-27）"
            }
          ],
          "windows": [
            {
              "date": "2026-11-27 ~ 29",
              "item": "Walther Youth Cup 第 12 届（塞尔维亚 Smederevo）",
              "gap": "今日开赛",
              "action": "2026 实物赞助窗口已关闭；只观察赛果并为 2027 赛季留联系依据",
              "tone": "amber"
            },
            {
              "date": "2026-11-23 ~ 28",
              "item": "Purdey Game Cup（英国 Royal Berkshire）",
              "gap": "剩 1 天",
              "action": "赛后核实结果，准备 2027 奖品/体验区提案；本轮不接触",
              "tone": "amber"
            },
            {
              "date": "2026-12-01",
              "item": "第 15 届美洲射击锦标赛收官（利马）",
              "gap": "4 天",
              "action": "跟踪 12 个 LA28 配额与 208 个泛美席位归属，作为 2027 外联素材",
              "tone": "blue"
            },
            {
              "date": "2026-12-07",
              "item": "ISSF 年度运动员公众选择奖揭晓",
              "gap": "10 天",
              "action": "观察传播数据，不借获奖者名义做暗示性背书",
              "tone": "green"
            },
            {
              "date": "2026-12-14",
              "item": "ISSF 主席选举（罗马）",
              "gap": "17 天",
              "action": "治理敏感期，ESC/ISSF 线继续冻结至选举后复核",
              "tone": "red"
            },
            {
              "date": "2027-01-18 ~ 21",
              "item": "SHOT Week Supplier Showcase / Reloaded",
              "gap": "52 天",
              "action": "供应链伙伴观察；Reloaded 展位费用需预算决策",
              "tone": "blue"
            },
            {
              "date": "2027-01-19 ~ 20",
              "item": "SHOT Show 出口培训四场",
              "gap": "53 天",
              "action": "作为美国市场合规知识入口；不构成台湾地区卖方法律意见",
              "tone": "blue"
            },
            {
              "date": "2027-01-19 ~ 22",
              "item": "SHOT Show 2027（拉斯维加斯）",
              "gap": "53 天",
              "action": "所有者做 go/no-go；无论是否参展都锁定 1 月集中外联",
              "tone": "amber"
            },
            {
              "date": "2027-02-12 ~ 14",
              "item": "British Shooting Show 2027（NEC Birmingham）",
              "gap": "77 天",
              "action": "Nocpix 冠名已占；评估 2027 小体验位与 2028 赞助",
              "tone": "green"
            }
          ],
          "dedupNotice": [
            "Sabatti S.p.A.（GB-Marketing，11-23 16:30 已投递）与 ASV Prins Hendrik（GB-Marketing，11-23 18:00 已投递）严禁重发；两者官网本轮未检得近 30 天新动态，不制造新由头。",
            "Sales 已发/已入队 24 家 + Marketing 已发 2 家，共 26 家在 30 天锁定期内；Marketing 只做类别情报反哺，不触达。",
            "本轮新增的 ESC、ISSF、NSSF/SHOT Show、Walther、Purdey 均标 owner=未分配；按 D-03 需所有者批准后才可入队，本任务不发对外邮件、不改发送队列。",
            "指令板 D-03 要求 18:00 前交付 ≥3 个真实协会/俱乐部/媒体对象（含官网 URL、联系依据、当地净空窗）；本条目的 ESC / ISSF / SHOT Show / Walther / Purdey / SCI / 英国射击展可供 M2 另线筛选，是否入队由所有者决定。",
            "15 时新增的 SCI、英国射击展、Ecoaims 均标 owner=未分配、contact=uncontacted；本任务只研究、不改发送队列、不发对外邮件。",
            "ESC / ISSF 线因 11-20 CAS 决定与 12-14 选举进入治理敏感期，建议 M2 另线暂缓把 ESC 列入本轮入队名单。",
            "D-12（due 08:30）要求 Marketing 另线写出 2026-11-26.json 队列（≥3 个对象，含官网 URL、联系依据、当地净空窗、去重核对）；本任务 M1 只研究与发布，不写队列、不发邮件。SCI / 英国射击展 / Ecoaims 已在对象池内，ESC / ISSF 继续暂缓至 12-14 选举后。",
            "今日新增 4 个对象均标 owner=参考、contact=reference，属标杆与定位证据，不进入外联队列；没有把 Leupold、Viridian、KINKO、Leapers 写成 GUNBASE 合作伙伴或供应链关系。",
            "Sabatti 与 Prins Hendrik 官网本轮再次核对，10 月 27 日至 11 月 26 日无独立公开动态；不因 M2 连续缺交而编造新的触达由头。",
            "D-06（台湾地区 airsoft 定位、发台湾邮件一律繁体）是发给 Sales 的指令；本 M1 只按品牌定位铁律处理 Taiwan-based 表述，不代 Sales 执行邮件语言规则。",
            "本轮归属表复核仍为 26 家（GB-Sales 24 / GB-Marketing 2），状态 sent 18、queued 8；新增 2 个对象 owner=未分配，且仅为标杆参考，Marketing 不得触达。",
            "Sabatti S.p.A. 与 ASV Prins Hendrik 于 11-27 再次检索，本轮未检得该机构独立公开动态；两封 11-26 已批准邀约仍零投递，按 D-19 须由所有者决定重发或作废，本任务不发邮件、不改队列。",
            "ESC / ISSF 线因 11-20 CAS 决定与 12-14 主席选举处于治理敏感期，继续暂停接触；本轮仅记录 ISSF 官网赛果与大会数据，不评价争议立场。",
            "已读指令板 · 2026-11-27 09:59；本条 M1 为补跑（非 08:10 定时执行），generatedAt 已如实标注实际时刻与迟到分钟数。"
          ],
          "escalations": [
            {
              "item": "是否授权接触 ESC 的青训 / 挑战赛器材支持窗口",
              "why": "媒体放大与 20 万欧元成员协会发展拨款同时存在，但企业合作通道未见公开规则",
              "blocks": "欧洲协会线从情报转提案"
            },
            {
              "item": "SHOT Show 2027 参展 go / no-go",
              "why": "酒店紧张、11 月多项截止已过，展位与预算需立即决定",
              "blocks": "1 月外联与体验式展位打法"
            },
            {
              "item": "Purdey 2027 Game Cup 是否预留奖品 / 体验位预算",
              "why": "2026 赛事已开赛，只有转 2027 才谈得动",
              "blocks": "英国持牌靶场线"
            },
            {
              "item": "D-03 的真实对象池是否批准入队（≥3 个）",
              "why": "本任务只研究不触达；M2 另线须经所有者批准后才可发信，且不得重发 11-23 两封",
              "blocks": "Marketing 今日 0/2 封邀约的后续推进"
            },
            {
              "item": "ESC / ISSF 协会线是否暂缓接触至 12-14 选举后",
              "why": "11-20 CAS 驳回临时申请，纪律决定继续公开；GUNBASE 不评价争议，但时机风险明确",
              "blocks": "协会线提案与 M2 入队筛选"
            },
            {
              "item": "SCI 与英国射击展是否进入下一轮提案名单",
              "why": "SCI 有 2026-2028 实施计划、英国展有明确赞助咨询入口，但都未经授权且与我方主业关联强弱不同",
              "blocks": "15 时新增两个对象的后续推进"
            },
            {
              "item": "D-12 是否由 M2 另线在今日 08:30 前落盘 2026-11-26.json 队列（≥3 对象）",
              "why": "对象池已有 17 个含 URL 的候选，连续两日 0 封入队不能再归因于无对象",
              "blocks": "M2 / M3 邀约达成率"
            },
            {
              "item": "是否把本轮三级合作模板转给 M4 创意合作研究",
              "why": "Viridian 标识联名、Leupold 指定用镜、Burris 限时捆绑均为 11 月可核实的真实结构",
              "blocks": "联名提案从情报转创意方案"
            },
            {
              "item": "D-19：11-26 两封已批准邀约零投递，16:00 前定重发或作废",
              "why": "两封 14:19:35 获批但 11-26/11-27 IMAP Sent 均为 0；重发须重查 7 天去重与当地净空窗， Marketing 无权自行决定",
              "blocks": "M2/M3 连续性与客户体验"
            },
            {
              "item": "D-18：明日 08:10 M1、08:30 M2（≥2 对象）、08:00 M4 三项须恢复",
              "why": "指令板已把三项列为缺交，「对象不足」不再作为 M2 免责理由，情报线已有 19 个附 URL 候选",
              "blocks": "Marketing 三项打卡达成率"
            }
          ],
          "dataNote": "已读指令板 · 2026-11-27 09:59（D-18 要求 M1 次日按时、D-19 要求两封已批准邀约今日 16:00 前由所有者定处置；本任务纯研究发布，不发邮件、不改队列）。当日 13 条动态均逐条附来源 URL 与日期，主要来自 ISSF 官网、SHOT Show 官网、SD Shooting 官方赛事页、Sporting Gun、Safari Club、Gildan 新闻稿与 SEC EDGAR、经济日报、亚洲大学官网；页面状态类条目明确标注为检索日状态而非新闻发布日期。定位证据新增 2 条台荷/台湾地区光子与产学案例，均为跨领域或地区性事实，未检得新的同品类台湾地区光学国际获奖；严禁写成 GUNBASE 自身背书。Sabatti、Prins Hendrik、ESC 与 Sales 归属群本轮未检得可核实的独立新动态，已如实说明。策略、机会与窗口均为 v:model 推演，未建立合作；真实邮箱、密码与 Token 未写入公开文件。本机定时任务未在 08:10 触发，本条为补跑，generatedAt 记录实际完成时刻与迟到分钟数。"
        },
        {
      date: "2026-11-26",
      weekday: "周四",
      generatedAt: "2026-11-26 09:46 (GMT+8) · 本机未在 08:10 按时触发，实际检索完成于 2026-11-26 09:46，相对调度 +96 分钟，按指令板口径判「延迟」；如实标注，不伪称按时",
      headline: "第 3 份合作情报（11-26 定时窗口补跑）：新增 13 条可核实动态与 4 个标杆对象——ISSF 公众投票 13,339 票（12/7 揭晓）、Leapers 台湾地区产线 2027 目录与 100 码室内测试场、KINKO 光学红外镜头营收占比升至 70%、Leupold 成为 The Commando Initiative 独家光学伙伴；同品类联名与渠道合作再添 Burris x Outlier、Viridian x Ducks Unlimited / NWTF、ShellShock x OpticsPlanet。定位证据新增 2 条，仍明确为制造能力或跨领域事实，不是 GUNBASE 自身获奖或射击渠道背书。",

      kpi: [
        { k: "新增动态", v: "13", d: "逐条附真实 URL 与日期；另记录 2 条『未检得独立动态』的诚实状态", tone: "green" },
        { k: "重点对象", v: "17", d: "继承 13 个 + 新增 4 个标杆（Leapers / KINKO / TCI x Leupold / Viridian x DU·NWTF）", tone: "blue" },
        { k: "新增定位证据", v: "2", d: "Leapers 台湾产线测试设施、KINKO 红外镜头营收结构；累计 11 条，只增不删", tone: "teal" },
        { k: "归属锁定", v: "26", d: "Sales 24 + Marketing 2；Marketing 仅做类别情报反哺", tone: "amber" },
        { k: "近端时间窗", v: "5", d: "Walther 明日开赛、Purdey 剩 2 天、美洲赛剩 5 天、ISSF 12/7 与 12/14", tone: "amber" },
        { k: "待所有者拍板", v: "8", d: "含 D-12 队列、ESC/ISSF 冻结期、联名模板是否转 M4", tone: "amber" }
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
          { date: "2026-11-19", title: "3M 公告拟投资约 4.7% 股权，把中国台湾地区玉晶光选为 EBO 制造伙伴", fact: "3M 公告与 Genius Electronic Optical（GSEO，玉晶光，台证 3406）合作推进 Expanded Beam Optical 技术开发与制造，并预计以私募新股方式取得约 4.7% 普通股，交易预计 2026 年第四季完成（须满足惯例交割条件）。公告写明双方角色：3M 提供 EBO 技术、光互连专业、材料科学与客户关系；GSEO 提供精密光学制造能力与产能规模，用于 EBO 光纤连接器、共封装光学等。", implication: "可用于说明台湾地区精密光学厂进入国际大厂的长期合作结构：技术方 + 制造方 + 股权投资。仍属跨领域光通信事实，不是枪用光学奖项、射击渠道或 GUNBASE 自身资质，严禁借其名义背书。", src: "3M 公告（AMPP / CoatingsPro 转载，2026-11-19）", url: "https://content.ampp.org/coatingspro/magazine-article/16519/3M-Announces-Collaboration-with-GSEO-to-Advance", v: "verified" },
          { date: "2026-11-17", title: "台荷 QSPAD 项目：中国台湾地区光学厂与荷兰量子硬件公司获双边计划支持", fact: "QuiX Quantum 与台湾地区伙伴光程研创（Artilux）、光循科技（Brillink）获 2026 年荷兰 TechBridge 计划支持，由荷兰企业署 RVO 与台湾经济部产业发展署共同推动；项目 QSPAD 为期 36 个月（2027-01 至 2029-12），开发接近室温运作的片上集成单光子侦测器，用于降低光量子运算对低温冷却的依赖。", implication: "新增一条可核实的台湾地区精密光学厂参与 36 个月国际合作项目的事实，支持『以明确技术角色参与长期合作』的叙事；属量子光子学，不是同品类射击光学背书。", src: "全域财经（引美通社 / QuiX Quantum 公告，2026-11-17）", url: "https://biz.111.com.tw/archives/265033", v: "verified" },
          { date: "2026-11-17", title: "同品类样板补充：Leapers 台湾地区产线、测试场与 2027 光学目录", fact: "Gun Trade World 11 月 17 日报道：Leapers 创立于 1992 年，现有 500 多款产品、13 个品类、4 个全球据点与超过 30 万平方英尺制造配送空间；2018 年在台湾地区设 ISO 9001 制造厂，具备 CNC、射出成型、光学制造组装与无尘室；2021 年启用额定可承受 .50 口径的 100 码室内靶场，另有 600 码室外场；2027 目录的 INTEGRIX 含 iX8 低倍变焦、iX6 中距与远距、iXF 固定倍率。报道另述 2012 年设立 UTG Europe 欧洲配送中心。", implication: "同品类可核实的是制造与测试结构，不是 GUNBASE 自身资质或奖项。可用于提醒我方：对外证据链应落到具体产线、测试条件与产品目录，而不是产地口号；不能借此宣称我方与其同厂或获同样奖项。", src: "Gun Trade World（2026-11-17）", url: "https://www.guntradeworld.com/leapers-35-years-of-manufacturing-investment/", v: "verified" },
          { date: "2026-11-20", title: "台湾地区 KINKO 光学红外镜头营收占比升至 70%，连续三年扩产", fact: "BigGo Finance 整理的 2026-11-20 法说会：KINKO OPTICAL（6209.TW）前三季合并营收 41.64 亿新台币，年增 71%；红外热成像镜头营收占比由 2025 年 56% 升至 2026 年 70%；2025 与 2026 年分别投入 3 亿与 3.5 亿新台币扩产，2027 年拟再投 4 亿。资料为法说会转录整理，不是公司审计财报原文。", implication: "可核实的是台湾地区精密光学厂的产能与技术投入，应用以红外、车用、AR 与 CPO 为主，未涉及枪用瞄准镜或射击渠道；只能作为产业能力背景，不能当同品类背书或 GUNBASE 供应关系。", src: "BigGo Finance（整理 KINKO 2026-11-20 法说会）", url: "https://finance.biggo.com/quote/6209.TW/earnings-call/TW_6209.TW_2026-11-20", v: "verified" },
        ],
        playbook: [
          { id: "B1", title: "产地只做事实描述，不做信任主张", detail: "邮件与提案里 GUNBASE 写作 Taiwan-based / based in Taiwan，随后立刻接可验证细节（镜片来源、测试项目、第三方奖项、合作俱乐部名称）。不写『来自台湾，所以品质更好』这类无证据断言。", guard: "对外英文用 Taiwan-based / Taiwan region，不与国家并列；不做政治表述。" },
          { id: "B2", title: "复刻 Integrix 结构：材料 + 冠军 + 媒体 + 本地库存", detail: "四项背书按优先级补齐：镜片或镀膜来源、至少一位射手或教练的共创与署名、一篇第三方评测、欧洲或中东本地样品与库存点。每补一项就更新本区证据。", guard: "未有第三方文件或书面同意前，不得宣称已有合作或获奖。" },
          { id: "B3", title: "把工厂与品控变成内容，而不是保密", detail: "参考 Polenar 案例：邀请欧洲射击类内容创作者、俱乐部教练到产线或线上看品控流程，换取真实评测与经销或活动转化，与我方体验日打法合并。", guard: "涉及客户身份、报价、内部工艺参数的内容需所有者审批。" },
          { id: "B4", title: "体验优先于产地说明", detail: "英国快闪展数据显示上手体验能把观感提升 95%，所以俱乐部与靶场合作先给样品实测，再谈品牌故事；不在首封邮件里堆产地论述。", guard: "该数据来自展会访客自选样本，仅作方向参考，不当作普遍民意。" },
          { id: "B5", title: "讲合作结构，不讲产地自夸", detail: "新证据显示国际合作是按角色搭建的：玉晶光承担精密光学研发与量产、3M 提供 EBO 技术；ISSF 以 MOU 引入 FICS 做赛场服务；ESC 用三年媒体协议放大赛事。GUNBASE 对外提案应直接写明自己承担的具体角色（样品、测试、奖品、体验位、内容），不要先讲产地。", guard: "跨领域案例只作结构参考，不冒充同品类背书；所有合作身份需对方书面确认。" },
          { id: "B6", title: "把体验日做成可量化漏斗，而不是摆摊", detail: "Ecoaims 在慕尼黑 LOOP ONE 用三个活动点、志愿者引导与现场成绩系统，两天记录 2000 多名访客与 10000 多发体验射击，并把同一套设备同时用于公众体验与残奥竞技。GUNBASE 的俱乐部体验日应预先设定访客数、试用量、引导人手与后续跟进字段。", guard: "体验内容不出现武器功能宣传；数据是我方活动目标，不是已达成结果。" },
          { id: "B7", title: "组织联名与渠道合作是低门槛入口，不等于品牌背书", detail: "本轮检出三种可复制结构：Viridian 把 Ducks Unlimited 与 NWTF 标识放进既有 RFX11 绿点镜；Leupold 成为 The Commando Initiative 独家光学伙伴，为其 2026-2027 活动提供 Mark 5HD 与 BX-6；Burris 用第五代 Fullfield 搭 Outlier 消音器做限时促销。GUNBASE 可在内部把『标识进现有产品 / 活动指定用镜 / 限时捆绑』做成三级模板，本轮不外联。", guard: "这些均为他人已发生案例，不代表我方已合作；涉及武器功能与促销合规需另案审查。" },
          { id: "B8", title: "证据链写测试条件，不写产地优越", detail: "Leapers 报道给了 100 码室内（.50 口径额定）与 600 码室外测试场；KINKO 法说会给了红外镜头营收占比与扩产金额。我方提案应同样写成可核对的规格、测试项目与来源，台湾地区身份只写 Taiwan-based / based in Taiwan。", guard: "法说会整理稿不是审计财报；跨领域制造数据不得写成 GUNBASE 的性能、获奖或资质。台湾地区不与国家并列，不做政治表述。" },
        ]
      },

      /* ===== 重点跟踪对象：已发 / 已入队 / 未触达 ===== */
      partners: [
        {
          name: "European Shooting Confederation (ESC)", country: "欧洲", region: "欧洲", type: "国际协会",
          contact: "uncontacted", owner: "未分配", sourceFile: "公开网络 / 组织雷达（新进）",
          tag: "未触达 · 新进 · 媒体放大中",
          news: [
            { date: "2026-11-12", title: "ESC 与 Warner Bros. Discovery Sports 签三年转播合作，并公布青训与赛制改革", detail: "SVG Europe 专访 ESC 秘书长 Yahor Aleinik：协议覆盖 Eurosport 1/2、TNT Sports 与 HBO Max，含直播、回放与集锦；首场为 10 月初希腊 Malakasa 欧飞碟锦标赛，下一场为 12 月马耳他 European Champions League。ESC 设 U16/U18/U23 与新 Solo/Duet/Trio 挑战赛制，并在 2025 年大会宣布拨款 20 万欧元支持成员协会发展项目（可用于购买运动器材与训练设施）；Aleinik 称首场内容的社交媒体与付费推广触达约 400 万。", src: "SVG Europe", url: "https://www.svgeurope.org/blog/headlines/focused-growth-the-european-shooting-confederation-on-growing-its-audience-through-a-new-deal-with-warner-bros-discovery-sports/", v: "verified" },
            { date: "2026-11-20", title: "CAS 驳回 ESC 与 Ratner 要求撤下纪律决定的临时措施申请", detail: "ISSF 官网确认，Alexander Ratner 与 ESC 就 2026-11-06 独立诚信裁审小组作出的三年禁权与 3 万欧元罚款决定向体育仲裁法院（CAS）上诉，并要求紧急临时措施撤下官网决定；CAS 于 11 月 20 日驳回该请求，决定继续公开。ISSF 主席选举定于 12 月 14 日在罗马举行，Ratner 已被移出候选名单。此为治理争议事实，GUNBASE 不评价各方立场。", src: "ISSF 官网 news/5351（2026-11-20）、Inside the Games", url: "https://www.issf-sports.org/news/5351", v: "verified" }
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
            { date: "2026-11-02", title: "2026 多哈步枪/手枪/飞碟世锦赛开幕，11 月 1 日至 14 日举行", detail: "ISSF 官网报道开幕式在卡塔尔举行，卡塔尔射击射箭协会代表与 ISSF 主席 Luciano Rossi 出席；该赛事是通往洛杉矶 2028 的资格周期开端。", src: "ISSF 官网 news/5307", url: "https://issf-sports.org/news/5307", v: "verified" },
            { date: "2026-11-22", title: "第 15 届美洲射击锦标赛在利马开幕，赛期至 12 月 1 日", detail: "ISSF 官网报道，赛事 11 月 22 日在秘鲁利马开幕，共 359 名运动员来自 22 个国家；ISSF 主席 Luciano Rossi 出席并与美洲射击联合会、秘鲁国家射击协会负责人会面。赛事提供 208 个利马 2027 泛美运动会资格席位与 12 个洛杉矶 2028 奥运配额席位。", src: "ISSF 官网 news/5350（2026-11-22）", url: "https://www.issf-sports.org/news/5350", v: "verified" },
            { date: "2026-11-20", title: "CAS 驳回 ESC 一方要求撤下 ISSF 纪律决定的临时申请", detail: "ISSF 官网确认 CAS 于 11 月 20 日驳回临时措施请求，纪律决定继续公开；ISSF 表示不进一步评论正在进行的 CAS 程序，除非涉及更正误导性陈述。该事实影响协会线的接触时机，不构成对争议立场的判断。", src: "ISSF 官网 news/5351（2026-11-20）", url: "https://www.issf-sports.org/news/5351", v: "verified" },
            { date: "2026-11-23", title: "ISSF 年度运动员公众投票收官：13,339 张验证票，12 月 7 日揭晓", detail: "ISSF 官网 11 月 23 日公告：提名阶段 10 月 28 日至 11 月 5 日录得 4,758 张验证票、312 名运动员至少获一票；投票阶段 11 月 9 日至 18 日录得 13,339 张验证票，接近提名阶段三倍；男女公众选择奖得主将于 12 月 7 日公布。这只是赛事传播数据，不含企业合作通道。", src: "ISSF 官网 news/5348（2026-11-23）", url: "https://www.issf-sports.org/news/5348", v: "verified" },
            { date: "2026-11-17", title: "590 名运动员参与 ISSF 运动员委员会选举，另有 3 席由执委会任命", detail: "ISSF 官网称 590 名运动员投票，正文写 6 名直接当选（每项目 2 名），但名单实际列出 7 人，其中沙特选手 Saud Alhassan Al Saud 在文末声明退出；另有 3 名由执委会任命。原文未公布企业赞助或器材合作入口，本条如实标注名单与正文的不一致。", src: "ISSF 官网 news/5342（2026-11-17）", url: "https://issf-sports.org/news/5342", v: "verified" },
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
            { date: "2026-11-25", title: "官方参展页显示展位仍可预订，倒计时约 56 天", detail: "SHOT Show 2027 参展页仍列 Still Available Exhibit Floor Space，并列出 50K 观众、2K 媒体、100 国家的上届口径；展会 2027 年 1 月 19 日至 22 日在拉斯维加斯 Venetian Expo 与 Caesars Forum 举行。本条为本次检索时页面状态，非新闻发布日期。", src: "SHOT Show 官网参展页", url: "https://www.shotshow.org/en/Exhibitors/", v: "verified" },
            { date: "2026-11-18", title: "SHOT Show 官网首页列出新一条 Insider：新增豪华酒店选项", detail: "官网在首页新闻列表标注 2026-11-18 的 Insider 文章『Protecting Your Investment, New Luxury Hotel Options Added to Room Block and More』；同页仍标注展位可订、展会 2027-01-19 至 22 举行。此为官网列表状态的检索记录，非对文章全文内容的转述。", src: "SHOT Show 官网首页新闻列表（检索日 2026-11-25）", url: "https://shotshow.org/", v: "verified" },
            { date: "2026-11-26", title: "SHOT Show 官网零售商与靶场页列出 16 家新增光学类参展商", detail: "本条为检索日页面状态而非新闻发布日期：官网零售商与靶场页列出新参展商分类数量，其中 Scopes, Sights, Telescopes & Accessories 16 家、Shooting Range Equipment 10 家、International Exhibitors 20 家、Airgun & Airsoft Products 10 家；页面同时写明展会为贸易-only、观众需提供资质的资格要求。数量是官网自报，不代表实际到场。", src: "SHOT Show 官网 Retailers and Ranges 页（检索日 2026-11-26）", url: "https://shotshow.org/retailers-and-ranges/", v: "verified" },
          ],
          strategy: "官方的『现场试用演示』思路与 GUNBASE 的体验日打法完全一致，是可以借用的展会形式；但 11 月多数省钱与资料节点已过，酒店紧张，临时参展的成本与执行风险升高。即使不参展，1 月 19 日至 22 日仍是全年决策者最集中的外联窗口。",
          opp: { level: "yellow", title: "体验式展位 / 展期集中外联", why: "窗口势能最高，但截止节点、预算与 B2B 资质是硬门槛", action: "请所有者尽快做 go/no-go；不参展也锁定 1 月外联周", gate: "展位与酒店预算、行业资质、美国合规；未授权不接触", v: "model" }
        },
        {
          name: "Walther (Carl Walther GmbH)", country: "德国", region: "欧洲/北美", type: "枪械生产商",
          contact: "uncontacted", owner: "未分配", sourceFile: "07_枪械生产商名录 / 手枪类",
          tag: "未触达 · 赛事距 2 天",
          news: [
            { date: "2026-11-21", title: "第 12 届 Walther Youth Cup 发布最终赛程与各国报名名单，11/27-29 开赛", detail: "赛事官网 sdshooting.rs 列出 11 月 19 日最终赛程与 11 月 21 日报名名单：塞尔维亚 Smederevo，U16/U18/U21，40 个射击位、决赛馆 10 位、观众容量 300+，来自 16 国以上；总赞助商 Carl Walther GmbH Sportwaffen 提供 LP 500 气手枪与 LG 400 气步枪等奖品。", src: "SD Shooting 官方赛事页", url: "https://www.sdshooting.rs/", v: "verified" },
            { date: "2026-11-16", title: "Walther 在 PDP 促销中搭赠 290 美元 Vortex Venom 红点镜，至 12 月 31 日", detail: "Firearm Discounts 于 11 月 16 日汇总 American Rifleman 的秋季促销：Walther 对符合条件的 PDP 购买赠送估值 290 美元的 Vortex Venom 红点镜，活动至 12 月 31 日。这是枪厂与光学品牌的终端搭赠，不是赛事赞助或我方合作，来源为二手汇总稿。", src: "Firearm Discounts（引 American Rifleman，2026-11-16）", url: "https://firearm-discounts.com/gun-makers-roll-out-rebates-and-free-gear-ahead-of-black-friday", v: "verified" },
          ],
          strategy: "赛程与名单已发布，说明赛事进入执行状态；距开赛仅 2 天，实物样品跨境寄送基本来不及，硬塞赞助既不现实也伤品牌。合理动作是把 2026 作为观察场，直接锁定 2027 赛季的奖品或体验位谈判，并用本届结果与主办方公开联系方式作为依据。",
          opp: { level: "yellow", title: "2027 青年杯光学奖品 / 体验位", why: "赛事结构已验证且明确接受器材类奖品，但 2026 窗口实质关闭", action: "赛后整理一页提案，等授权后询问 2027 合作；本轮不发邮件", gate: "奖品样品与跨境寄送成本需确认；不承诺现金赞助", v: "model" }
        },
        {
          name: "Purdey at the Royal Berkshire（James Purdey & Sons）", country: "英国", region: "欧洲", type: "持牌靶场 / 品牌赛事",
          contact: "uncontacted", owner: "未分配", sourceFile: "公开网络 / 英国持牌靶场（新进）",
          tag: "未触达 · 赛事进行中",
          news: [
            { date: "2026-10-16", title: "Purdey 首届 Game Cup 于 11 月 23 至 28 日举行，100 靶模拟猎鸟场景", detail: "Fieldsports Journal 报道，英国枪厂 James Purdey & Sons 在其 Royal Berkshire 射击学校办首届 Game Cup：单人 100 靶、每人 55 英镑（含靶不含弹），设 Top Gun 与 Top Side-by-Side 两个组别，奖品各含 1000 发弹药与 Purdey Sporting Agency 猎场日席位。赛事报道发布于 10 月 16 日，但赛事本身在本次检索时正在进行。官方活动链接经访问返回 404，故以行业媒体为来源并标注该限制。", src: "Fieldsports Journal", url: "https://fieldsports-journal.com/news/purdey-game-cup-clay-competition", v: "verified" },
            { date: "2026-11-26", title: "Sporting Gun 活动页再确认 Game Cup 赛制与奖品结构", detail: "本条为检索日页面状态而非新闻发布日期：Sporting Gun 页面列出 Purdey Game Cup 11 月 23 至 28 日、100 靶模拟猎鸟课程、每人 55 英镑含靶、可重复参赛；High Gun 与最佳并列双管射手各得 1000 发弹药与下季 Purdey Sporting Agency 猎场日席位。同页另载首次 Purdey 500 于 2026-09-15 举行（500 靶、330 英镑含弹药与教学）。", src: "Sporting Gun 活动页（检索日 2026-11-26）", url: "https://sporting-gun.com/events/purdey-500-royal-berkshire-season-opener", v: "verified" },
          ],
          strategy: "这是英国持牌场地里少见的品牌自办赛事，奖品结构已经有明确赞助位（弹药与猎场日），说明它愿意用实物与服务组合做合作。2026 赛事已在场内，本轮只做赛况观察；真正可谈的是 2027 年奖品或精度体验区，并把『不出现武器功能宣传』作为内容边界。",
          opp: { level: "yellow", title: "2027 Game Cup 光学奖品 / 体验区", why: "奖品赞助结构已验证、场地持牌、时间固定；但 2026 已开赛且官方活动页失效", action: "赛后核实结果与官方联系入口，形成 2027 提案；等所有者授权", gate: "英国持牌场地与合规、样品成本、官方联系方式需先核实", v: "model" }
        },
        {
          name: "Sabatti S.p.A.", country: "意大利", region: "欧洲", type: "枪械生产商",
          contact: "sent", owner: "GB-Marketing", sourceFile: "07_枪械生产商名录 / 归属表",
          tag: "11-23 16:30 已投递 · 禁止重发",
          news: [
            { date: "2026-11-26", title: "本轮再次未检得该机构近 30 天独立公开动态", detail: "官网 sabatti.it 新闻页最新可见为未标日期的 NEXT GENERATION 线与 2025 年专利、赛事条目，未见 10 月 27 日至 11 月 26 日的独立新品、赛事或合作公告；11-23 情报中列出的 Trofeo Fiocchi-Sabatti 与 IWA 2026 内容不重复计入本轮新增。", src: "Sabatti 官网新闻页（检索日 2026-11-25）", url: "https://www.sabatti.it/it/news", v: "verified" }
          ],
          strategy: "合作信已于 11-23 真实投递，Marketing 现在唯一合规动作是等待回信，不追加邮件、不借新动态二次触达。若对方回复，沿用 F-Class 赛事已有光学品牌在场的切入逻辑谈第二赞助位或体验枪方案。",
          opp: { level: "yellow", title: "回信后谈 F-Class 光学赞助 / 体验日", why: "对象已占用且已触达，新增动作取决于对方回信", action: "不做任何新外发；把本轮『官网无新动态』写入后续跟进备注", gate: "30 天锁定期；重发会构成骚扰；报价需所有者授权", v: "model" }
        },
        {
          name: "ASV Prins Hendrik", country: "荷兰", region: "欧洲", type: "射击俱乐部",
          contact: "sent", owner: "GB-Marketing", sourceFile: "08_全球枪店与俱乐部名录 / 归属表",
          tag: "11-23 18:00 已投递 · 禁止重发",
          news: [
            { date: "2026-11-26", title: "本轮再次未检得该俱乐部近 30 天独立新闻，官网确认持牌与青训结构", detail: "官网确认其为 Amersfoortse Schietsportvereniging Prins Hendrik，青少年用气步枪/气手枪并由资深会员与教练带训，场馆有 3 个靶区、每区 5 个射击位，可设 10/12/25/50 米，所有会员登记于荷兰 KNSA。官网没有 10 月 27 日至 11 月 26 日的独立新闻条目；这补充了联系依据，但不构成新动态。", src: "ASV Prins Hendrik 官网（检索日 2026-11-25）", url: "https://www.asvprinshendrik.nl", v: "verified" }
          ],
          strategy: "官网信息把体验日提案的前提坐实了：10 米气步枪/气手枪、青训有人带、靶位与 KNSA 体系明确。合作信已投递，后续只能在对方回信后给样品清单与流程模板，不得再发新邮件。",
          opp: { level: "yellow", title: "回信后安排会员光学体验日", why: "场地与青训结构已核实，但对象已触达且本轮无新公开动态", action: "等待回信；把 10 米气枪与青少年带训信息存入跟进备注", gate: "30 天锁定期；样品寄送与荷兰持牌场地合规需确认", v: "model" }
        },
        {
          name: "GUNBASE 已发客户群（Sales 侧 24 家）", country: "德国/法国/西班牙/意大利/瑞士/荷兰/中东等", region: "欧洲/中东", type: "已发客户动态",
          contact: "sent", owner: "GB-Sales", sourceFile: "outbound_owners.json（本机，仅域名）",
          tag: "已发/已入队 · Marketing 一律跳过",
          news: [
            { date: "2026-11-25", title: "本轮未逐家检得独立公开动态，仅记录类别级信号", detail: "本轮按归属表逐家核对后，未检得这 24 家在近 30 天的独立公开新闻；可核实的类别信号是 ESC 的媒体协议与 Purdey 的品牌自办赛事，说明欧洲射击市场正在同时放大内容曝光与体验型赛事。它们是类别信号，不代表上述具体客户自身动态。", src: "本机归属表 + ESC / Fieldsports Journal 公开来源（url 指向其中的 ESC 报道）", url: "https://www.svgeurope.org/blog/headlines/focused-growth-the-european-shooting-confederation-on-growing-its-audience-through-a-new-deal-with-warner-bros-discovery-sports/", v: "verified" }
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
            { date: "2026-11-17", title: "Community Coffee x Mossy Oak Camp Blend 进入在售期，持续至 2027 年 2 月", detail: "官方新闻稿确认该限量咖啡 11 月 17 日上线官网、便利店与独立杂货，12 月进 Amazon，12 盎司建议价 12.99 美元，售至 2027 年 2 月；包装用 Mossy Oak Bottomland 迷彩，叙事围绕出猎前的清晨仪式。此条为 11-23 已记录案例的持续状态，不计入本轮新增。", src: "PR Newswire / Community Coffee 公告", url: "https://www.prnewswire.com/news-releases/fuel-your-hunt-community-coffee-and-mossy-oak-launch-limited-edition-camp-blend-302941184.html", v: "verified" },
            { date: "2026-11-04", title: "RosCo Outdoors 与 Realtree 推出联名功能猎装系列", detail: "Hunting Life 刊出新闻稿：美国狩猎服饰品牌 RosCo Outdoors 与迷彩品牌 Realtree 合作，推出 GX2 连帽衣、抓绒衬衫、Guide Pro 外套等分层服饰，使用 Realtree Legacy、Original 与 Advantage Classic 图案；双方强调家族传承与户外传统，未涉及光学或武器功能。", src: "Hunting Life（RosCo Outdoors 新闻稿，2026-11-04）", url: "https://huntinglife.com/?p=387335", v: "verified" },
            { date: "2026-11-11", title: "Burris 与 Outlier 做 Fullfield 瞄准镜限时搭赠", detail: "Inside Firearms 11 月 11 日报道：10 月 1 日至 12 月 31 日购买符合条件的第五代 Burris Fullfield 瞄准镜，可通过 Outlier 活动页兑换一支 4 英寸 Backdraft Hunter 消音器；需另购转接件并自付运费，兑换截止 2027 年 12 月 31 日，活动由 Outlier 独立执行。", src: "Inside Firearms（2026-11-11）", url: "https://insidefirearms.com/gear/burris-and-outlier-announce-limited-time-fullfield-riflescope-promotion", v: "verified" },
            { date: "2026-11-16", title: "ShellShock Protection 宣布 OpticsPlanet 为首个线上零售伙伴", detail: "Hunting Life 刊出的 11 月 16 日新闻稿：护眼与听力品牌 ShellShock Protection 全系列上线 OpticsPlanet，含 ANSI Z87.1+ 护目镜、EXO PRO 电子耳罩与 Eye & Ear 套装。该合作说明专业配件品牌可先用线上渠道放大，再谈线下活动。", src: "Hunting Life（ShellShock Protection 新闻稿，2026-11-16）", url: "https://huntinglife.com/shellshock-protection-announces-first-online-retail-partner-opticsplanet", v: "verified" },
          ],
          strategy: "新案例把『地域文化资产 + 复古户外符号 + 限时胶囊』又验证了一次：不造新品类、不谈性能，用既有日常物件承载身份。GUNBASE 可复刻为精度主题的晨间仪式周边，但全程不出现枪支图像、不做武器功能宣传。",
          opp: { level: "green", title: "复刻限时联名模板", why: "两个 2026 年 11 月案例都验证了低风险联名结构", action: "把胶囊时长、价格带与渠道选择写进联名 proposal 素材", gate: "落地城市、预算与联名方需所有者决定；本轮不接触任何品牌", v: "model" }
        },
        {
          name: "玉晶光（Genius Electronic Optical）x 3M", country: "中国台湾地区", region: "亚太", type: "精密光学标杆 / 定位证据",
          contact: "reference", owner: "参考", sourceFile: "公开网络 / 定位证据雷达（新进）",
          tag: "仅定位证据 · 非合作对象",
          news: [
            { date: "2026-11-19", title: "玉晶光与 3M 战略合作推进 EBO 光学方案研发制造与产能扩充", detail: "中央社报道，双方共同推进 3M 扩束光学技术（EBO）方案的研发、制造与产能扩充，应用指向 AI 服务器与数据中心；公司目标 2027 年整体营收成长 20%，EBO 产能 2026 年第 4 季起放量。报道未涉及枪用光学或射击运动。", src: "中央社 CNA", url: "https://www.cna.com.tw/news/afe/202611190325.aspx", v: "verified" },
            { date: "2026-11-19", title: "3M 官方公告补充合作结构：拟以私募取得约 4.7% 股权", detail: "3M 公告由 AMPP 转载：双方合作推进 EBO 技术开发与制造，3M 预计投资取得玉晶光约 4.7% 普通股，预计 2026 年第四季交割；3M 提供技术与客户，玉晶光提供精密光学制造与产能。此条补充 11:17 版中央社报道的合作结构，不是新增同品类背书。", src: "3M 公告 / AMPP CoatingsPro（2026-11-19）", url: "https://content.ampp.org/coatingspro/magazine-article/16519/3M-Announces-Collaboration-with-GSEO-to-Advance", v: "verified" }
          ],
          strategy: "此条只进入品牌定位证据库，用于说明台湾地区精密光学制造能进入国际长期技术合作；它是跨领域案例，不是同品类背书。GUNBASE 不因此宣称自己有 3M 或同等材料合作，也不把它写进对客户的资质描述。",
          opp: { level: "red", title: "仅作定位证据，不作合作对象", why: "跨领域龙头不是可触达伙伴，且借其背书会造成事实误述", action: "只在内部提案的产业背景页引用，并附来源与边界说明", gate: "不得宣称合作、供应关系或同品类获奖", v: "model" }
        },
        {
          name: "Safari Club International / SCI Foundation", country: "美国 / 全球", region: "全球/非洲", type: "国际协会",
          contact: "uncontacted", owner: "未分配", sourceFile: "公开网络 / 组织雷达（新进）",
          tag: "未触达 · 新进 · 保育与可持续利用叙事",
          news: [
            { date: "2026-11-13", title: "SADC 与 SCI / SCIF 重申伙伴关系，落实 2026-2028 两项实施计划", detail: "南部非洲发展共同体（SADC）秘书处与 SCI、SCI Foundation 在南非比勒陀利亚 SCI 非洲办公室举行高层会晤，复核 2025 年 7 月签署的 MOU，并推动 CITES 与 SADC 反盗猎战略（LEAP 2022-2032）两项 2026-2028 实施计划；SCI/SCIF 承诺依计划提供技术与资金支持。此为 SADC 官方发布的事实，GUNBASE 不参与其政策立场。", src: "SADC 官网 latest-news（2026-11-13）", url: "https://www.sadc.int/latest-news/sadc-strengthens-partnership-safari-club-international-and-foundation-sci-and-scif", v: "verified" },
            { date: "2026-11-16", title: "第 24 届非洲野生动物协商论坛在坦桑尼亚阿鲁沙开幕，SCIF 为共同主办方", detail: "SUCo-SA 页面写明 AWCF 于 11 月 16 至 20 日在阿鲁沙 Gran Meliá 酒店举行，由坦桑尼亚野生动物局与 SCI Foundation 共同主办，参与方包括政府、野生动物管理机构、狩猎产业、社区代表、美国鱼类及野生动物管理局与 IUCN 等。论坛议题含管制贸易、科学管理与社区受益；GUNBASE 不参与其政策立场。", src: "SUCo-SA（2026-11-16，页面写 opens today）", url: "https://suco-sa.org.za/africas-leading-wildlife-forum-comes-to-arusha-awcf-2026/", v: "verified" },
          ],
          strategy: "SCI 的公开议程以保育、社区与执法合作为主，不是光学器材采购。GUNBASE 若研究这条线，只能围绕『测量与观察工具支持社区项目』这类边缘角色做提案，并回避战利品、濒危物种与武器功能叙事；在所有者授权前不接触。",
          opp: { level: "yellow", title: "观察性合作：保育项目的器材支持位", why: "合作结构由 MOU 与实施计划驱动，可验证且有多年周期；但与光学主业关联弱、议题敏感", action: "只做背景研究，不进入 M2 发信队列；若所有者要求推进，先出合规边界清单", gate: "不触碰濒危物种/战利品宣传；不做武器功能宣传；需所有者逐次授权", v: "model" }
        },
        {
          name: "Great British Shooting Show 2027（NEC Birmingham）", country: "英国", region: "欧洲", type: "行业展会",
          contact: "uncontacted", owner: "未分配", sourceFile: "公开网络 / 展会日历（新进）",
          tag: "未触达 · 新进 · 同品类光学冠名已验证",
          news: [
            { date: "2026-11-20", title: "Nocpix 成为 2027 英国射击展冠名赞助商，主打上手体验", detail: "英国射击展官网 11 月 20 日发布 Nocpix 专访：该热成像与夜视光学品牌成为 2027 展冠名赞助商，称将在 NEC 展台让访客亲手操作 8K Omni 与 Nite Pro 系列，并配产品专家与用户大使；展会日期为 2027-02-12 至 14。官网赞助商页同时列出 IWA OutdoorClassics 为 show partner 并公开赞助咨询入口。", src: "Great British Shooting Show 官网 exhibitor spotlight（2026-11-20）/ sponsors 页", url: "https://britishshootingshow.com/exhibitors/nocpix/", v: "verified" }
          ],
          strategy: "这是同品类光学品牌愿意为英国展付冠名费的可验证事实，直接支持我方『体验优先』打法；但 2027 冠名位已被占，且正展仅三个月。现实落点是 2027 的小规模体验位或奖项合作、以及 2028 的面积与赞助评估，不追冠名。",
          opp: { level: "yellow", title: "2027 体验位 / 2028 赞助位评估", why: "展期固定、光学品牌赞助意愿已被验证；但entry门槛与预算未知、2027 时间紧", action: "把展期写入时间窗；等所有者决定后再经官网公开渠道询问赞助选项，本轮不接触", gate: "英国持牌与合规、样品与人员成本、冠名位已占；未授权不接触", v: "model" }
        },
        {
          name: "Ecoaims / Biathlon4All（LOOP ONE 公众体验靶位）", country: "德国", region: "欧洲", type: "体验式激活标杆 / 潜在伙伴",
          contact: "uncontacted", owner: "未分配", sourceFile: "公开网络 / 体验式激活案例（新进）",
          tag: "未触达 · 新进 · 体验打法量化样板",
          news: [
            { date: "2026-11-17", title: "慕尼黑 LOOP ONE 公众靶位两天记录 2000 多名访客与 10000 多发体验射击", detail: "Ecoaims 官方案例：在慕尼黑奥林匹克公园举办期间，LOOP ONE 把 Biathlon4All 体验设于园区三处，提供卧姿与立姿的激光与光学射击，由 Ruhpolding 青年志愿者引导；Ecoaims 站点两天记录 2000 多名访客、10000 多发体验射击，同时为残奥冬季两项赛事提供设备与现场成绩系统。", src: "Ecoaims 官网 news（2026-11-17）", url: "https://www.ecoaims.com/news/more-than-10000-shots-at-loop-one-what-a-busy-public-biathlon-range-looks-like", v: "verified" }
          ],
          strategy: "这条案例把『观众变参与者』做成可量化动线：赛场旁设点、志愿者引导、同一设备兼做公众体验与正式比赛。GUNBASE 可把它转成俱乐部体验日的 SOP 与 KPI 模板，先在我方活动验证，再谈是否与其合作；不把它说成我方已合作对象。",
          opp: { level: "yellow", title: "体验日 SOP 复用 / 活动设备合作观察", why: "方法可验证且量化，但对方为电子靶与冬季两项设备商，与光学产品互补性尚未验证", action: "先把访客数、试用量、引导人数、跟进转化率写进体验日模板；是否接触另案授权", gate: "不宣称已合作；德国与当地活动合规；样品与活动成本待核", v: "model" }
        },
        {
          name: "Leapers / INTEGRIX（台湾地区制造产线）", country: "美国 / 中国台湾地区", region: "北美/亚太", type: "光学厂 / 同品类标杆",
          contact: "reference", owner: "参考", sourceFile: "公开网络 / 定位证据雷达（新进）",
          tag: "仅标杆参考 · 非触达对象 · 同品类制造样板",
          news: [
            { date: "2026-11-17", title: "Gun Trade World 报道 Leapers 35 周年制造投资与 2027 INTEGRIX 目录", detail: "报道给出 2018 年台湾地区 ISO 9001 制造厂、无尘室光学组装、2021 年 100 码室内靶场（额定 .50 口径）与 600 码室外场，以及 2027 目录的 iX8 / iX6 / iXF 三条 INTEGRIX 线。报道未提及 GUNBASE，也未宣布新的冠军共创或奖项。", src: "Gun Trade World（2026-11-17）", url: "https://www.guntradeworld.com/leapers-35-years-of-manufacturing-investment/", v: "verified" }
          ],
          strategy: "这是同品类最贴近的结构样板：台湾地区制造 + 德日材料 + 冠军共创 + 美国媒体奖项 + 欧洲配送。本轮新增的是测试基础设施与 2027 目录细节，适合转成我方证据清单模板；不把对方产线、奖项或客户写成我方资源。",
          opp: { level: "red", title: "仅作定位与证据模板，不作合作对象", why: "同品类头部品牌且并非我方已建立关系，借其资质会造成事实误述", action: "只在内部提案的产业背景页引用，附来源与边界说明", gate: "不得宣称合作、代工、同厂或同奖项；需所有者授权才可另案接触", v: "model" }
        },
        {
          name: "KINKO OPTICAL（6209.TW）", country: "中国台湾地区", region: "亚太", type: "精密光学厂 / 定位证据",
          contact: "reference", owner: "参考", sourceFile: "公开网络 / 定位证据雷达（新进）",
          tag: "仅定位证据 · 非合作对象 · 跨领域",
          news: [
            { date: "2026-11-20", title: "法说会整理稿：红外热成像镜头营收占比 70%，2027 年拟再投 4 亿新台币扩产", detail: "BigGo Finance 整理的 11 月 20 日法说会显示，前三季营收 41.64 亿新台币、年增 71%，红外镜头营收占比从 56% 升至 70%；扩产主要指向车用夜视 AEB 与红外市场，未涉及枪用瞄准镜、射击赛事或 GUNBASE。", src: "BigGo Finance（整理 KINKO 2026-11-20 法说会）", url: "https://finance.biggo.com/quote/6209.TW/earnings-call/TW_6209.TW_2026-11-20", v: "verified" }
          ],
          strategy: "这家公司的价值是说明台湾地区精密光学产业在红外镀膜与单点超精密加工上有可核实投入；与 GUNBASE 的枪用光学没有已验证的品类或渠道关联，因此只进入定位证据库，不进入合作名单。",
          opp: { level: "red", title: "仅作产业能力背景，不作合作对象", why: "跨领域且无已建立关系；写成我方供应或技术背书会造成误述", action: "内部材料引用时注明为法说会整理稿，非审计财报", gate: "不得宣称合作、供应关系或同品类获奖", v: "model" }
        },
        {
          name: "The Commando Initiative x Leupold", country: "美国", region: "北美", type: "非营利组织 x 光学品牌 / 指定用镜样板",
          contact: "reference", owner: "参考", sourceFile: "公开网络 / 组织合作雷达（新进）",
          tag: "仅策略参考 · 非触达对象 · 指定用镜结构",
          news: [
            { date: "2026-11-17", title: "Leupold 成为 The Commando Initiative 独家光学伙伴，覆盖 2026-2027 活动", detail: "The Outdoor Wire 新闻稿称，非营利组织 TCI 为现役与退役特种作战人员及家庭提供狩猎、垂钓与户外活动的交通、住宿、燃料、肉类处理等支持，参与者不付费；创办人 Kurt Casey 选定 Leupold Mark 5HD 瞄准镜与 BX-6 Range HD 测距双筒用于 2026 与 2027 年活动。", src: "The Outdoor Wire（2026-11-17）", url: "https://www.theoutdoorwire.com/releases/2026/11/leupold-named-exclusive-optics-partner-of-the-commando-initiative", v: "verified" }
          ],
          strategy: "可借鉴的是『活动指定用镜 + 实物支持』的进入方式：由使用者选定型号，品牌承担器材角色。GUNBASE 尚未与 TCI 建立关系，也不借用其军事或美国特种作战叙事；这条只作为合作结构参考，不产生外联动作。",
          opp: { level: "red", title: "仅作结构参考，不作可触达对象", why: "非营利项目与身份叙事高度敏感，且我方无既有关系", action: "把指定用镜结构写入活动合作模板，本轮不接触", gate: "不借用军方身份、不做武器功能宣传、需所有者逐次授权", v: "model" }
        },
        {
          name: "Viridian x Ducks Unlimited / NWTF", country: "美国", region: "北美", type: "光学厂 x 保育组织 / 联名样板",
          contact: "reference", owner: "参考", sourceFile: "公开网络 / 联名案例雷达（新进）",
          tag: "仅策略参考 · 非触达对象 · 标识联名结构",
          news: [
            { date: "2026-11-09", title: "Viridian 展示 RFX11 绿点镜的 Ducks Unlimited 与 NWTF 组织联名版", detail: "Hunting Wire 新闻稿称，Viridian 以既有 RFX11 绿点镜为基础，分别推出印有 Ducks Unlimited 标识（为 Springfield Armory Echelon 平台设计）与 National Wild Turkey Federation 标识的版本，并对外提供定制品牌与 OEM 合作；产品口径与电池续航等数据为厂商自述。", src: "Hunting Wire（2026-11-09）", url: "https://www.huntingwire.com/releases/2026/11/viridian-weapon-technologies-showcases-custom-optics-capabilities-with-ducks-unlimited-and-nwtf", v: "verified" }
          ],
          strategy: "这条验证的是最低成本的联名形态：不研发新品类，只把组织身份放进现有产品，再叠加 OEM 服务。GUNBASE 可把『现有型号 + 合作方标识 + 限定渠道』作为 M4 创意合作的候选模板，但本轮不接触任何品牌或组织。",
          opp: { level: "red", title: "仅作联名模板，不作可触达对象", why: "他人已发布的联名案例，不能写成我方合作；枪用配件叙事需合规审查", action: "转给 M4 创意合作研究作模板素材，本轮不外联", gate: "不出现武器功能宣传；联名方与落地预算需所有者决定", v: "model" }
        },
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
        },
        {
          id: "P6", title: "同品类赞助与体验位都有真实价格标签，别只谈情怀", level: "核心",
          detail: "Nocpix 拿下 2027 英国射击展冠名，并明确以『让访客亲手操作 8K』为展台核心；Ecoaims 在慕尼黑用两天 2000 多人、10000 多发证明公众靶位可量化。GUNBASE 的提案必须同时写清承担角色、体验动线与可量化指标，而不是只讲品牌故事。",
          basis: "Great British Shooting Show 官网 2026-11-20 / Ecoaims 官网 2026-11-17"
        },
        {
          id: "P7", title: "协会线出现治理风险，12 月 14 日前暂缓 ESC 接触", level: "重点",
          detail: "ISSF 官网 11 月 20 日确认 CAS 驳回 ESC 与 Ratner 的临时措施申请，纪律决定继续公开，主席选举定于 12 月 14 日在罗马。GUNBASE 不评价争议立场，但该窗口内接触 ESC 容易卷入内部政治，建议把协会线资源转往赛事支持型对象，选举后复核。",
          basis: "ISSF 官网 news/5351 2026-11-20 / Inside the Games 2026-11 报道"
        },
        {
          id: "P8", title: "合作入口有三级形态：标识联名、指定用镜、限时捆绑", level: "核心",
          detail: "Viridian 把组织标识放进既有 RFX11，Leupold 做活动指定用镜，Burris 与 Outlier 做限时搭赠。三者都不需要 GUNBASE 新产品研发，但都需要对方身份、合规边界与实物成本；先做模板，不先发信。",
          basis: "Hunting Wire 2026-11-09 / The Outdoor Wire 2026-11-17 / Inside Firearms 2026-11-11"
        },
        {
          id: "P9", title: "协会线的可参与位在运动员与公众项目，不在赞助牌", level: "重点",
          detail: "ISSF 公众投票录得 13,339 张验证票、12 月 7 日揭晓；同期运动员委员会选举有 590 人投票并有 3 席由执委会任命。信号是协会擅长用公开参与做动员，而非公开挂出器材采购入口。GUNBASE 仍应在 12 月 14 日前对 ESC / ISSF 线保持暂缓。",
          basis: "ISSF news/5348 2026-11-23 / ISSF news/5342 2026-11-17 / ISSF news/5351 2026-11-20"
        }
      ],

      /* ===== 时间窗日历 ===== */
      windows: [
        { date: "2026-11-23 ~ 28", item: "Purdey Game Cup（英国 Royal Berkshire，本周最后 2 天）", gap: "剩 2 天", action: "本轮不追投；看赛果，谈 2027 奖品或体验位", tone: "amber" },
        { date: "2026-11-27 ~ 29", item: "第 12 届 Walther Youth Cup（塞尔维亚 Smederevo）", gap: "明天开赛", action: "实物样品已来不及；锁定 2027 赛季", tone: "amber" },
        { date: "2026-11-21 ~ 12-01", item: "第 15 届美洲射击锦标赛（秘鲁利马，359 运动员 / 22 国）", gap: "剩 5 天", action: "美洲协会线只观察赛果，不临时接触", tone: "blue" },
        { date: "2026-12-07", item: "ISSF 年度运动员公众选择奖揭晓（13,339 张验证票）", gap: "11 天", action: "观察传播玩法；不把公众投票当合作入口", tone: "blue" },
        { date: "2026-12", item: "ESC European Champions League（马耳他，WBD 平台直播）", gap: "本月", action: "治理敏感期内只做提案准备，不做临时接触", tone: "amber" },
        { date: "2026-12-14", item: "ISSF 大会与主席选举（罗马；ESC 治理争议未决）", gap: "18 天", action: "ESC / ISSF 线暂缓接触，选举后复核", tone: "amber" },
        { date: "2026-12-31", item: "Walther x Vortex 与 Burris x Outlier 两项搭赠促销到期", gap: "35 天", action: "观察终端反馈，作为联名模板的效果样本", tone: "green" },
        { date: "2027-01-19 ~ 22", item: "SHOT Show 2027（拉斯维加斯，官网列 16 家新增光学类参展商）", gap: "54 天", action: "所有者做 go/no-go；不参展也锁定 1 月外联周", tone: "amber" },
        { date: "2027-02-12 ~ 14", item: "British Shooting Show（NEC Birmingham）", gap: "78 天", action: "作为英国线下曝光的备选窗口，先观察成本", tone: "green" }
      ],

      /* ===== 归属提醒（给 Sales）===== */
      dedupNotice: [
        "Sabatti S.p.A.（GB-Marketing，11-23 16:30 已投递）与 ASV Prins Hendrik（GB-Marketing，11-23 18:00 已投递）严禁重发；两者官网本轮未检得近 30 天新动态，不制造新由头。",
        "Sales 已发/已入队 24 家 + Marketing 已发 2 家，共 26 家在 30 天锁定期内；Marketing 只做类别情报反哺，不触达。",
        "本轮新增的 ESC、ISSF、NSSF/SHOT Show、Walther、Purdey 均标 owner=未分配；按 D-03 需所有者批准后才可入队，本任务不发对外邮件、不改发送队列。",
        "指令板 D-03 要求 18:00 前交付 ≥3 个真实协会/俱乐部/媒体对象（含官网 URL、联系依据、当地净空窗）；本条目的 ESC / ISSF / SHOT Show / Walther / Purdey / SCI / 英国射击展可供 M2 另线筛选，是否入队由所有者决定。",
        "15 时新增的 SCI、英国射击展、Ecoaims 均标 owner=未分配、contact=uncontacted；本任务只研究、不改发送队列、不发对外邮件。",
        "ESC / ISSF 线因 11-20 CAS 决定与 12-14 选举进入治理敏感期，建议 M2 另线暂缓把 ESC 列入本轮入队名单。",
        "D-12（due 08:30）要求 Marketing 另线写出 2026-11-26.json 队列（≥3 个对象，含官网 URL、联系依据、当地净空窗、去重核对）；本任务 M1 只研究与发布，不写队列、不发邮件。SCI / 英国射击展 / Ecoaims 已在对象池内，ESC / ISSF 继续暂缓至 12-14 选举后。",
        "今日新增 4 个对象均标 owner=参考、contact=reference，属标杆与定位证据，不进入外联队列；没有把 Leupold、Viridian、KINKO、Leapers 写成 GUNBASE 合作伙伴或供应链关系。",
        "Sabatti 与 Prins Hendrik 官网本轮再次核对，10 月 27 日至 11 月 26 日无独立公开动态；不因 M2 连续缺交而编造新的触达由头。",
        "D-06（台湾地区 airsoft 定位、发台湾邮件一律繁体）是发给 Sales 的指令；本 M1 只按品牌定位铁律处理 Taiwan-based 表述，不代 Sales 执行邮件语言规则。",
      ],

      escalations: [
        { item: "是否授权接触 ESC 的青训 / 挑战赛器材支持窗口", why: "媒体放大与 20 万欧元成员协会发展拨款同时存在，但企业合作通道未见公开规则", blocks: "欧洲协会线从情报转提案" },
        { item: "SHOT Show 2027 参展 go / no-go", why: "酒店紧张、11 月多项截止已过，展位与预算需立即决定", blocks: "1 月外联与体验式展位打法" },
        { item: "Purdey 2027 Game Cup 是否预留奖品 / 体验位预算", why: "2026 赛事已开赛，只有转 2027 才谈得动", blocks: "英国持牌靶场线" },
        { item: "D-03 的真实对象池是否批准入队（≥3 个）", why: "本任务只研究不触达；M2 另线须经所有者批准后才可发信，且不得重发 11-23 两封", blocks: "Marketing 今日 0/2 封邀约的后续推进" },
        { item: "ESC / ISSF 协会线是否暂缓接触至 12-14 选举后", why: "11-20 CAS 驳回临时申请，纪律决定继续公开；GUNBASE 不评价争议，但时机风险明确", blocks: "协会线提案与 M2 入队筛选" },
        { item: "SCI 与英国射击展是否进入下一轮提案名单", why: "SCI 有 2026-2028 实施计划、英国展有明确赞助咨询入口，但都未经授权且与我方主业关联强弱不同", blocks: "15 时新增两个对象的后续推进" },
        { item: "D-12 是否由 M2 另线在今日 08:30 前落盘 2026-11-26.json 队列（≥3 对象）", why: "对象池已有 17 个含 URL 的候选，连续两日 0 封入队不能再归因于无对象", blocks: "M2 / M3 邀约达成率" },
        { item: "是否把本轮三级合作模板转给 M4 创意合作研究", why: "Viridian 标识联名、Leupold 指定用镜、Burris 限时捆绑均为 11 月可核实的真实结构", blocks: "联名提案从情报转创意方案" },
      ],

      dataNote: "已读指令板 · 2026-11-25 21:06。D-13 要求 08:10 定时触发即落盘：本次实际完成于 2026-11-26 09:46，相对调度 +96 分钟，判「延迟」，generatedAt 如实记录，未伪称按时；本机未在 08:10 自动触发。D-12 的 2026-11-26.json 队列属 M2 另线，本任务不写队列、不发邮件、不触达任何对象。本轮新增 13 条可核实动态：ISSF 公众投票与运动员委员会（2 条）、SHOT Show 官网分类数量、Walther 搭赠、Purdey 页面状态、SCI 的 AWCF、Burris x Outlier、ShellShock x OpticsPlanet，以及 Leapers、KINKO、Leupold x TCI、Viridian x DU/NWTF 四个新标杆对象各 1 条；每条附 URL 与日期。Sabatti 与 Prins Hendrik 官网再次核对后如实写「本轮未检得」，不制造触达由头。定位证据继承上一日 9 条并新增 2 条（Leapers 台湾产线测试设施、KINKO 红外镜头营收结构），均明确不是 GUNBASE 自身获奖或同品类渠道背书。策略与机会均标 v:model，不代表已建立合作；真实邮箱、Token 一律不写入公开文件。中国台湾地区品牌对外只写 Taiwan-based / based in Taiwan，不与国家并列、不做政治表述；NIM 2025 产地信任度 33% 的事实不变。指令板 D-06 为 Sales 指令，本线不代执行。"
    },
    {
      date: "2026-11-25",
      weekday: "周三",
      generatedAt: "2026-11-25 15:54 (GMT+8) · 同日二次执行：首次 11:17（原调度 08:10，延迟 187 分钟），本次检索完成于 2026-11-25 15:54，相对调度 +464 分钟，如实标注；本机未在 08:10 触发，补跑非按时，证据时间为本字段",
      headline: "第 2 份合作情报（同日二次执行补强）：11:17 首版已检出 ESC 媒体协议、ISSF 赛场服务 MOU 与两条时间窗；15 时二次检索再补 9 条可核实动态——ISSF 美洲锦标赛进行中、CAS 驳回 ESC 临时请求（12/14 选举前治理风险）、SCI 与 SADC 续签合作计划、Nocpix 冠名英国射击展、Ecoaims 用 2000 人/10000 发验证体验式激活。定位证据新增 2 条：3M 拟入股玉晶光约 4.7%、台荷 QSPAD 36 个月合作，均明确不是枪用光学或射击渠道背书。",

      kpi: [
        { k: "新增动态", v: "9", d: "15 时二次检索新增，逐条附 URL 与日期；11:17 首版已记 10 条", tone: "green" },
        { k: "重点对象", v: "13", d: "新进 3：SCI / 英国射击展 / Ecoaims 体验式靶位", tone: "blue" },
        { k: "新增定位证据", v: "2", d: "3M 拟入股玉晶光、台荷 QSPAD；当日累计 9 条，只增不删", tone: "teal" },
        { k: "归属锁定", v: "26", d: "Sales 24 + Marketing 2，Marketing 不触达", tone: "amber" },
        { k: "进行中窗口", v: "4", d: "Purdey Game Cup、Walther Youth Cup、利马美洲锦标赛、12/14 ISSF 大会", tone: "amber" },
        { k: "待所有者拍板", v: "6", d: "增加 ESC 治理风险暂缓、SCI / 英国展授权两项", tone: "amber" }
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
          { date: "2026-11-19", title: "3M 公告拟投资约 4.7% 股权，把中国台湾地区玉晶光选为 EBO 制造伙伴", fact: "3M 公告与 Genius Electronic Optical（GSEO，玉晶光，台证 3406）合作推进 Expanded Beam Optical 技术开发与制造，并预计以私募新股方式取得约 4.7% 普通股，交易预计 2026 年第四季完成（须满足惯例交割条件）。公告写明双方角色：3M 提供 EBO 技术、光互连专业、材料科学与客户关系；GSEO 提供精密光学制造能力与产能规模，用于 EBO 光纤连接器、共封装光学等。", implication: "可用于说明台湾地区精密光学厂进入国际大厂的长期合作结构：技术方 + 制造方 + 股权投资。仍属跨领域光通信事实，不是枪用光学奖项、射击渠道或 GUNBASE 自身资质，严禁借其名义背书。", src: "3M 公告（AMPP / CoatingsPro 转载，2026-11-19）", url: "https://content.ampp.org/coatingspro/magazine-article/16519/3M-Announces-Collaboration-with-GSEO-to-Advance", v: "verified" },
          { date: "2026-11-17", title: "台荷 QSPAD 项目：中国台湾地区光学厂与荷兰量子硬件公司获双边计划支持", fact: "QuiX Quantum 与台湾地区伙伴光程研创（Artilux）、光循科技（Brillink）获 2026 年荷兰 TechBridge 计划支持，由荷兰企业署 RVO 与台湾经济部产业发展署共同推动；项目 QSPAD 为期 36 个月（2027-01 至 2029-12），开发接近室温运作的片上集成单光子侦测器，用于降低光量子运算对低温冷却的依赖。", implication: "新增一条可核实的台湾地区精密光学厂参与 36 个月国际合作项目的事实，支持『以明确技术角色参与长期合作』的叙事；属量子光子学，不是同品类射击光学背书。", src: "全域财经（引美通社 / QuiX Quantum 公告，2026-11-17）", url: "https://biz.111.com.tw/archives/265033", v: "verified" },
        ],
        playbook: [
          { id: "B1", title: "产地只做事实描述，不做信任主张", detail: "邮件与提案里 GUNBASE 写作 Taiwan-based / based in Taiwan，随后立刻接可验证细节（镜片来源、测试项目、第三方奖项、合作俱乐部名称）。不写『来自台湾，所以品质更好』这类无证据断言。", guard: "对外英文用 Taiwan-based / Taiwan region，不与国家并列；不做政治表述。" },
          { id: "B2", title: "复刻 Integrix 结构：材料 + 冠军 + 媒体 + 本地库存", detail: "四项背书按优先级补齐：镜片或镀膜来源、至少一位射手或教练的共创与署名、一篇第三方评测、欧洲或中东本地样品与库存点。每补一项就更新本区证据。", guard: "未有第三方文件或书面同意前，不得宣称已有合作或获奖。" },
          { id: "B3", title: "把工厂与品控变成内容，而不是保密", detail: "参考 Polenar 案例：邀请欧洲射击类内容创作者、俱乐部教练到产线或线上看品控流程，换取真实评测与经销或活动转化，与我方体验日打法合并。", guard: "涉及客户身份、报价、内部工艺参数的内容需所有者审批。" },
          { id: "B4", title: "体验优先于产地说明", detail: "英国快闪展数据显示上手体验能把观感提升 95%，所以俱乐部与靶场合作先给样品实测，再谈品牌故事；不在首封邮件里堆产地论述。", guard: "该数据来自展会访客自选样本，仅作方向参考，不当作普遍民意。" },
          { id: "B5", title: "讲合作结构，不讲产地自夸", detail: "新证据显示国际合作是按角色搭建的：玉晶光承担精密光学研发与量产、3M 提供 EBO 技术；ISSF 以 MOU 引入 FICS 做赛场服务；ESC 用三年媒体协议放大赛事。GUNBASE 对外提案应直接写明自己承担的具体角色（样品、测试、奖品、体验位、内容），不要先讲产地。", guard: "跨领域案例只作结构参考，不冒充同品类背书；所有合作身份需对方书面确认。" },
          { id: "B6", title: "把体验日做成可量化漏斗，而不是摆摊", detail: "Ecoaims 在慕尼黑 LOOP ONE 用三个活动点、志愿者引导与现场成绩系统，两天记录 2000 多名访客与 10000 多发体验射击，并把同一套设备同时用于公众体验与残奥竞技。GUNBASE 的俱乐部体验日应预先设定访客数、试用量、引导人手与后续跟进字段。", guard: "体验内容不出现武器功能宣传；数据是我方活动目标，不是已达成结果。" },
        ]
      },

      /* ===== 重点跟踪对象：已发 / 已入队 / 未触达 ===== */
      partners: [
        {
          name: "European Shooting Confederation (ESC)", country: "欧洲", region: "欧洲", type: "国际协会",
          contact: "uncontacted", owner: "未分配", sourceFile: "公开网络 / 组织雷达（新进）",
          tag: "未触达 · 新进 · 媒体放大中",
          news: [
            { date: "2026-11-12", title: "ESC 与 Warner Bros. Discovery Sports 签三年转播合作，并公布青训与赛制改革", detail: "SVG Europe 专访 ESC 秘书长 Yahor Aleinik：协议覆盖 Eurosport 1/2、TNT Sports 与 HBO Max，含直播、回放与集锦；首场为 10 月初希腊 Malakasa 欧飞碟锦标赛，下一场为 12 月马耳他 European Champions League。ESC 设 U16/U18/U23 与新 Solo/Duet/Trio 挑战赛制，并在 2025 年大会宣布拨款 20 万欧元支持成员协会发展项目（可用于购买运动器材与训练设施）；Aleinik 称首场内容的社交媒体与付费推广触达约 400 万。", src: "SVG Europe", url: "https://www.svgeurope.org/blog/headlines/focused-growth-the-european-shooting-confederation-on-growing-its-audience-through-a-new-deal-with-warner-bros-discovery-sports/", v: "verified" },
            { date: "2026-11-20", title: "CAS 驳回 ESC 与 Ratner 要求撤下纪律决定的临时措施申请", detail: "ISSF 官网确认，Alexander Ratner 与 ESC 就 2026-11-06 独立诚信裁审小组作出的三年禁权与 3 万欧元罚款决定向体育仲裁法院（CAS）上诉，并要求紧急临时措施撤下官网决定；CAS 于 11 月 20 日驳回该请求，决定继续公开。ISSF 主席选举定于 12 月 14 日在罗马举行，Ratner 已被移出候选名单。此为治理争议事实，GUNBASE 不评价各方立场。", src: "ISSF 官网 news/5351（2026-11-20）、Inside the Games", url: "https://www.issf-sports.org/news/5351", v: "verified" }
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
            { date: "2026-11-02", title: "2026 多哈步枪/手枪/飞碟世锦赛开幕，11 月 1 日至 14 日举行", detail: "ISSF 官网报道开幕式在卡塔尔举行，卡塔尔射击射箭协会代表与 ISSF 主席 Luciano Rossi 出席；该赛事是通往洛杉矶 2028 的资格周期开端。", src: "ISSF 官网 news/5307", url: "https://issf-sports.org/news/5307", v: "verified" },
            { date: "2026-11-22", title: "第 15 届美洲射击锦标赛在利马开幕，赛期至 12 月 1 日", detail: "ISSF 官网报道，赛事 11 月 22 日在秘鲁利马开幕，共 359 名运动员来自 22 个国家；ISSF 主席 Luciano Rossi 出席并与美洲射击联合会、秘鲁国家射击协会负责人会面。赛事提供 208 个利马 2027 泛美运动会资格席位与 12 个洛杉矶 2028 奥运配额席位。", src: "ISSF 官网 news/5350（2026-11-22）", url: "https://www.issf-sports.org/news/5350", v: "verified" },
            { date: "2026-11-20", title: "CAS 驳回 ESC 一方要求撤下 ISSF 纪律决定的临时申请", detail: "ISSF 官网确认 CAS 于 11 月 20 日驳回临时措施请求，纪律决定继续公开；ISSF 表示不进一步评论正在进行的 CAS 程序，除非涉及更正误导性陈述。该事实影响协会线的接触时机，不构成对争议立场的判断。", src: "ISSF 官网 news/5351（2026-11-20）", url: "https://www.issf-sports.org/news/5351", v: "verified" }
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
            { date: "2026-11-25", title: "官方参展页显示展位仍可预订，倒计时约 56 天", detail: "SHOT Show 2027 参展页仍列 Still Available Exhibit Floor Space，并列出 50K 观众、2K 媒体、100 国家的上届口径；展会 2027 年 1 月 19 日至 22 日在拉斯维加斯 Venetian Expo 与 Caesars Forum 举行。本条为本次检索时页面状态，非新闻发布日期。", src: "SHOT Show 官网参展页", url: "https://www.shotshow.org/en/Exhibitors/", v: "verified" },
            { date: "2026-11-18", title: "SHOT Show 官网首页列出新一条 Insider：新增豪华酒店选项", detail: "官网在首页新闻列表标注 2026-11-18 的 Insider 文章『Protecting Your Investment, New Luxury Hotel Options Added to Room Block and More』；同页仍标注展位可订、展会 2027-01-19 至 22 举行。此为官网列表状态的检索记录，非对文章全文内容的转述。", src: "SHOT Show 官网首页新闻列表（检索日 2026-11-25）", url: "https://shotshow.org/", v: "verified" }
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
            { date: "2026-11-25", title: "本轮未逐家检得独立公开动态，仅记录类别级信号", detail: "本轮按归属表逐家核对后，未检得这 24 家在近 30 天的独立公开新闻；可核实的类别信号是 ESC 的媒体协议与 Purdey 的品牌自办赛事，说明欧洲射击市场正在同时放大内容曝光与体验型赛事。它们是类别信号，不代表上述具体客户自身动态。", src: "本机归属表 + ESC / Fieldsports Journal 公开来源（url 指向其中的 ESC 报道）", url: "https://www.svgeurope.org/blog/headlines/focused-growth-the-european-shooting-confederation-on-growing-its-audience-through-a-new-deal-with-warner-bros-discovery-sports/", v: "verified" }
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
            { date: "2026-11-17", title: "Community Coffee x Mossy Oak Camp Blend 进入在售期，持续至 2027 年 2 月", detail: "官方新闻稿确认该限量咖啡 11 月 17 日上线官网、便利店与独立杂货，12 月进 Amazon，12 盎司建议价 12.99 美元，售至 2027 年 2 月；包装用 Mossy Oak Bottomland 迷彩，叙事围绕出猎前的清晨仪式。此条为 11-23 已记录案例的持续状态，不计入本轮新增。", src: "PR Newswire / Community Coffee 公告", url: "https://www.prnewswire.com/news-releases/fuel-your-hunt-community-coffee-and-mossy-oak-launch-limited-edition-camp-blend-302941184.html", v: "verified" },
            { date: "2026-11-04", title: "RosCo Outdoors 与 Realtree 推出联名功能猎装系列", detail: "Hunting Life 刊出新闻稿：美国狩猎服饰品牌 RosCo Outdoors 与迷彩品牌 Realtree 合作，推出 GX2 连帽衣、抓绒衬衫、Guide Pro 外套等分层服饰，使用 Realtree Legacy、Original 与 Advantage Classic 图案；双方强调家族传承与户外传统，未涉及光学或武器功能。", src: "Hunting Life（RosCo Outdoors 新闻稿，2026-11-04）", url: "https://huntinglife.com/?p=387335", v: "verified" }
          ],
          strategy: "新案例把『地域文化资产 + 复古户外符号 + 限时胶囊』又验证了一次：不造新品类、不谈性能，用既有日常物件承载身份。GUNBASE 可复刻为精度主题的晨间仪式周边，但全程不出现枪支图像、不做武器功能宣传。",
          opp: { level: "green", title: "复刻限时联名模板", why: "两个 2026 年 11 月案例都验证了低风险联名结构", action: "把胶囊时长、价格带与渠道选择写进联名 proposal 素材", gate: "落地城市、预算与联名方需所有者决定；本轮不接触任何品牌", v: "model" }
        },
        {
          name: "玉晶光（Genius Electronic Optical）x 3M", country: "中国台湾地区", region: "亚太", type: "精密光学标杆 / 定位证据",
          contact: "reference", owner: "参考", sourceFile: "公开网络 / 定位证据雷达（新进）",
          tag: "仅定位证据 · 非合作对象",
          news: [
            { date: "2026-11-19", title: "玉晶光与 3M 战略合作推进 EBO 光学方案研发制造与产能扩充", detail: "中央社报道，双方共同推进 3M 扩束光学技术（EBO）方案的研发、制造与产能扩充，应用指向 AI 服务器与数据中心；公司目标 2027 年整体营收成长 20%，EBO 产能 2026 年第 4 季起放量。报道未涉及枪用光学或射击运动。", src: "中央社 CNA", url: "https://www.cna.com.tw/news/afe/202611190325.aspx", v: "verified" },
            { date: "2026-11-19", title: "3M 官方公告补充合作结构：拟以私募取得约 4.7% 股权", detail: "3M 公告由 AMPP 转载：双方合作推进 EBO 技术开发与制造，3M 预计投资取得玉晶光约 4.7% 普通股，预计 2026 年第四季交割；3M 提供技术与客户，玉晶光提供精密光学制造与产能。此条补充 11:17 版中央社报道的合作结构，不是新增同品类背书。", src: "3M 公告 / AMPP CoatingsPro（2026-11-19）", url: "https://content.ampp.org/coatingspro/magazine-article/16519/3M-Announces-Collaboration-with-GSEO-to-Advance", v: "verified" }
          ],
          strategy: "此条只进入品牌定位证据库，用于说明台湾地区精密光学制造能进入国际长期技术合作；它是跨领域案例，不是同品类背书。GUNBASE 不因此宣称自己有 3M 或同等材料合作，也不把它写进对客户的资质描述。",
          opp: { level: "red", title: "仅作定位证据，不作合作对象", why: "跨领域龙头不是可触达伙伴，且借其背书会造成事实误述", action: "只在内部提案的产业背景页引用，并附来源与边界说明", gate: "不得宣称合作、供应关系或同品类获奖", v: "model" }
        },
        {
          name: "Safari Club International / SCI Foundation", country: "美国 / 全球", region: "全球/非洲", type: "国际协会",
          contact: "uncontacted", owner: "未分配", sourceFile: "公开网络 / 组织雷达（新进）",
          tag: "未触达 · 新进 · 保育与可持续利用叙事",
          news: [
            { date: "2026-11-13", title: "SADC 与 SCI / SCIF 重申伙伴关系，落实 2026-2028 两项实施计划", detail: "南部非洲发展共同体（SADC）秘书处与 SCI、SCI Foundation 在南非比勒陀利亚 SCI 非洲办公室举行高层会晤，复核 2025 年 7 月签署的 MOU，并推动 CITES 与 SADC 反盗猎战略（LEAP 2022-2032）两项 2026-2028 实施计划；SCI/SCIF 承诺依计划提供技术与资金支持。此为 SADC 官方发布的事实，GUNBASE 不参与其政策立场。", src: "SADC 官网 latest-news（2026-11-13）", url: "https://www.sadc.int/latest-news/sadc-strengthens-partnership-safari-club-international-and-foundation-sci-and-scif", v: "verified" }
          ],
          strategy: "SCI 的公开议程以保育、社区与执法合作为主，不是光学器材采购。GUNBASE 若研究这条线，只能围绕『测量与观察工具支持社区项目』这类边缘角色做提案，并回避战利品、濒危物种与武器功能叙事；在所有者授权前不接触。",
          opp: { level: "yellow", title: "观察性合作：保育项目的器材支持位", why: "合作结构由 MOU 与实施计划驱动，可验证且有多年周期；但与光学主业关联弱、议题敏感", action: "只做背景研究，不进入 M2 发信队列；若所有者要求推进，先出合规边界清单", gate: "不触碰濒危物种/战利品宣传；不做武器功能宣传；需所有者逐次授权", v: "model" }
        },
        {
          name: "Great British Shooting Show 2027（NEC Birmingham）", country: "英国", region: "欧洲", type: "行业展会",
          contact: "uncontacted", owner: "未分配", sourceFile: "公开网络 / 展会日历（新进）",
          tag: "未触达 · 新进 · 同品类光学冠名已验证",
          news: [
            { date: "2026-11-20", title: "Nocpix 成为 2027 英国射击展冠名赞助商，主打上手体验", detail: "英国射击展官网 11 月 20 日发布 Nocpix 专访：该热成像与夜视光学品牌成为 2027 展冠名赞助商，称将在 NEC 展台让访客亲手操作 8K Omni 与 Nite Pro 系列，并配产品专家与用户大使；展会日期为 2027-02-12 至 14。官网赞助商页同时列出 IWA OutdoorClassics 为 show partner 并公开赞助咨询入口。", src: "Great British Shooting Show 官网 exhibitor spotlight（2026-11-20）/ sponsors 页", url: "https://britishshootingshow.com/exhibitors/nocpix/", v: "verified" }
          ],
          strategy: "这是同品类光学品牌愿意为英国展付冠名费的可验证事实，直接支持我方『体验优先』打法；但 2027 冠名位已被占，且正展仅三个月。现实落点是 2027 的小规模体验位或奖项合作、以及 2028 的面积与赞助评估，不追冠名。",
          opp: { level: "yellow", title: "2027 体验位 / 2028 赞助位评估", why: "展期固定、光学品牌赞助意愿已被验证；但entry门槛与预算未知、2027 时间紧", action: "把展期写入时间窗；等所有者决定后再经官网公开渠道询问赞助选项，本轮不接触", gate: "英国持牌与合规、样品与人员成本、冠名位已占；未授权不接触", v: "model" }
        },
        {
          name: "Ecoaims / Biathlon4All（LOOP ONE 公众体验靶位）", country: "德国", region: "欧洲", type: "体验式激活标杆 / 潜在伙伴",
          contact: "uncontacted", owner: "未分配", sourceFile: "公开网络 / 体验式激活案例（新进）",
          tag: "未触达 · 新进 · 体验打法量化样板",
          news: [
            { date: "2026-11-17", title: "慕尼黑 LOOP ONE 公众靶位两天记录 2000 多名访客与 10000 多发体验射击", detail: "Ecoaims 官方案例：在慕尼黑奥林匹克公园举办期间，LOOP ONE 把 Biathlon4All 体验设于园区三处，提供卧姿与立姿的激光与光学射击，由 Ruhpolding 青年志愿者引导；Ecoaims 站点两天记录 2000 多名访客、10000 多发体验射击，同时为残奥冬季两项赛事提供设备与现场成绩系统。", src: "Ecoaims 官网 news（2026-11-17）", url: "https://www.ecoaims.com/news/more-than-10000-shots-at-loop-one-what-a-busy-public-biathlon-range-looks-like", v: "verified" }
          ],
          strategy: "这条案例把『观众变参与者』做成可量化动线：赛场旁设点、志愿者引导、同一设备兼做公众体验与正式比赛。GUNBASE 可把它转成俱乐部体验日的 SOP 与 KPI 模板，先在我方活动验证，再谈是否与其合作；不把它说成我方已合作对象。",
          opp: { level: "yellow", title: "体验日 SOP 复用 / 活动设备合作观察", why: "方法可验证且量化，但对方为电子靶与冬季两项设备商，与光学产品互补性尚未验证", action: "先把访客数、试用量、引导人数、跟进转化率写进体验日模板；是否接触另案授权", gate: "不宣称已合作；德国与当地活动合规；样品与活动成本待核", v: "model" }
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
        },
        {
          id: "P6", title: "同品类赞助与体验位都有真实价格标签，别只谈情怀", level: "核心",
          detail: "Nocpix 拿下 2027 英国射击展冠名，并明确以『让访客亲手操作 8K』为展台核心；Ecoaims 在慕尼黑用两天 2000 多人、10000 多发证明公众靶位可量化。GUNBASE 的提案必须同时写清承担角色、体验动线与可量化指标，而不是只讲品牌故事。",
          basis: "Great British Shooting Show 官网 2026-11-20 / Ecoaims 官网 2026-11-17"
        },
        {
          id: "P7", title: "协会线出现治理风险，12 月 14 日前暂缓 ESC 接触", level: "重点",
          detail: "ISSF 官网 11 月 20 日确认 CAS 驳回 ESC 与 Ratner 的临时措施申请，纪律决定继续公开，主席选举定于 12 月 14 日在罗马。GUNBASE 不评价争议立场，但该窗口内接触 ESC 容易卷入内部政治，建议把协会线资源转往赛事支持型对象，选举后复核。",
          basis: "ISSF 官网 news/5351 2026-11-20 / Inside the Games 2026-11 报道"
        }
      ],

      /* ===== 时间窗日历 ===== */
      windows: [
        { date: "2026-11-23 ~ 28", item: "Purdey Game Cup（英国 Royal Berkshire，进行中）", gap: "剩 3 天", action: "本轮不追投；看赛果，谈 2027 奖品或体验位", tone: "amber" },
        { date: "2026-11-27 ~ 29", item: "第 12 届 Walther Youth Cup（塞尔维亚 Smederevo）", gap: "2 天", action: "实物样品已来不及；锁定 2027 赛季", tone: "amber" },
        { date: "2026-12", item: "ESC European Champions League（马耳他，WBD 平台直播）", gap: "本月", action: "以器材支持提案切入，不做临时硬塞", tone: "blue" },
        { date: "2027-01-19 ~ 22", item: "SHOT Show 2027（拉斯维加斯）", gap: "55 天", action: "所有者做 go/no-go；不参展也锁定 1 月外联周", tone: "amber" },
        { date: "2027-02-12 ~ 14", item: "British Shooting Show（NEC Birmingham）", gap: "79 天", action: "作为英国线下曝光的备选窗口，先观察成本", tone: "green" },
        { date: "2026-11-21 ~ 12-01", item: "第 15 届美洲射击锦标赛（秘鲁利马，359 运动员 / 22 国）", gap: "进行中", action: "美洲协会线只观察赛果，不临时接触", tone: "blue" },
        { date: "2026-12-14", item: "ISSF 大会与主席选举（罗马；ESC 治理争议未决）", gap: "19 天", action: "ESC / ISSF 线暂缓接触，选举后复核", tone: "amber" }
      ],

      /* ===== 归属提醒（给 Sales）===== */
      dedupNotice: [
        "Sabatti S.p.A.（GB-Marketing，11-23 16:30 已投递）与 ASV Prins Hendrik（GB-Marketing，11-23 18:00 已投递）严禁重发；两者官网本轮未检得近 30 天新动态，不制造新由头。",
        "Sales 已发/已入队 24 家 + Marketing 已发 2 家，共 26 家在 30 天锁定期内；Marketing 只做类别情报反哺，不触达。",
        "本轮新增的 ESC、ISSF、NSSF/SHOT Show、Walther、Purdey 均标 owner=未分配；按 D-03 需所有者批准后才可入队，本任务不发对外邮件、不改发送队列。",
        "指令板 D-03 要求 18:00 前交付 ≥3 个真实协会/俱乐部/媒体对象（含官网 URL、联系依据、当地净空窗）；本条目的 ESC / ISSF / SHOT Show / Walther / Purdey / SCI / 英国射击展可供 M2 另线筛选，是否入队由所有者决定。",
        "15 时新增的 SCI、英国射击展、Ecoaims 均标 owner=未分配、contact=uncontacted；本任务只研究、不改发送队列、不发对外邮件。",
        "ESC / ISSF 线因 11-20 CAS 决定与 12-14 选举进入治理敏感期，建议 M2 另线暂缓把 ESC 列入本轮入队名单。"
      ],

      escalations: [
        { item: "是否授权接触 ESC 的青训 / 挑战赛器材支持窗口", why: "媒体放大与 20 万欧元成员协会发展拨款同时存在，但企业合作通道未见公开规则", blocks: "欧洲协会线从情报转提案" },
        { item: "SHOT Show 2027 参展 go / no-go", why: "酒店紧张、11 月多项截止已过，展位与预算需立即决定", blocks: "1 月外联与体验式展位打法" },
        { item: "Purdey 2027 Game Cup 是否预留奖品 / 体验位预算", why: "2026 赛事已开赛，只有转 2027 才谈得动", blocks: "英国持牌靶场线" },
        { item: "D-03 的真实对象池是否批准入队（≥3 个）", why: "本任务只研究不触达；M2 另线须经所有者批准后才可发信，且不得重发 11-23 两封", blocks: "Marketing 今日 0/2 封邀约的后续推进" },
        { item: "ESC / ISSF 协会线是否暂缓接触至 12-14 选举后", why: "11-20 CAS 驳回临时申请，纪律决定继续公开；GUNBASE 不评价争议，但时机风险明确", blocks: "协会线提案与 M2 入队筛选" },
        { item: "SCI 与英国射击展是否进入下一轮提案名单", why: "SCI 有 2026-2028 实施计划、英国展有明确赞助咨询入口，但都未经授权且与我方主业关联强弱不同", blocks: "15 时新增两个对象的后续推进" }
      ],

      dataNote: "已读指令板 · 2026-11-25 15:40（新增 M4 每日创意合作研究报告；M1 本任务按 D-03 执行，不改队列、不发邮件）。本条目 11:17 首版为 08:10 调度后补跑（延迟 187 分钟），15 时同日二次执行补强，generatedAt 如实记录本次实际完成时间，不伪称按时。二次检索新增 9 条动态：ISSF 利马美洲锦标赛、CAS 决定（ESC 与 ISSF 两卡各列）、SCI 与 SADC 实施计划、Nocpix 冠名英国射击展、Ecoaims 体验数据、RosCo x Realtree 联名、SHOT Show 官网 11-18 Insider 列表、3M 公告补充股权结构；每条附 URL 与日期。定位证据继承当日首版 7 条与 11-23 全部 6 条，新增 2 条（3M 拟入股玉晶光约 4.7%、台荷 QSPAD 36 个月合作）与打法 B6，均明确为跨领域事实，不是枪用光学或射击渠道背书。策略与机会均标 v:model，不代表已建立合作；真实邮箱、Token 一律不写入公开文件。中国台湾地区品牌对外只写 Taiwan-based / based in Taiwan，不与国家并列、不做政治表述。"
    }, {
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
