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
    cadence: "每日 08:30 (GMT+8) 由 AI GB-Marketing 发布；21:00 由 AI GB-Team 在团队中心汇总",
    generatedAt: "2026-11-23 09:40 (GMT+8)",
    owner: "AI GB-Marketing · 市场战术专家",
    scope: "全球 · 品牌合作方（已发 / 已入队 / 未触达）",
    dedupRule: "一个机构只有一个归属方。GB-Sales 已发或已入队的机构，Marketing 跳过；Marketing 已发或已入队的机构，Sales 跳过。命中即视为他人领地，30 天内不重复触达。真实邮箱只存本机。",
    poolNote: "全量池来自每日 07_枪械生产商名录（93 家 / 33 家有公开邮箱）与 08_全球枪店与俱乐部名录（2327 条 / 365 条有公开邮箱）。每日简报不可能逐条展开，故先给全量口径，再挑出当日有可核实新动态或高势能的高价值对象作重点跟踪，其余按类别信号覆盖。",
    integrity: "本文件所有『最新动态』均附来源与日期；策略与机会为推演，需所有者逐次授权后才可对外接触。不构成法律意见。"
  },

  days: [
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
          strategy: "ISSF 的赞助分层已经对中国品牌敞开（Relegend 是最新例证），这是最有说服力的进入理由。GUNBASE 不必一上来争铂金，Official Supplier 或青年项目供应商是更现实的第一阶；青少年 J 系列被专门提及，说明『青年装备』是 ISSF 当前叙事里的热词，与我方光学体验日方向一致。",
          opp: { level: "green", title: "Official Supplier / 青年项目装备支持", why: "已有中国品牌进入同一体系，路径被验证；青年议题是官方叙事重点", action: "整理一页英文权益 proposal（不报价格），等所有者授权后接触", gate: "赞助预算与代表权需所有者决定；不承诺赞助金额", v: "model" }
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
          id: "P2", title: "用已被验证的赞助结构降低对方教育成本", level: "核心",
          detail: "ISSF 刚接纳中国射击服品牌 Relegend 为铂金赞助商；SCI 持续吸纳企业赞助商；Trofeo Fiocchi-Sabatti 已有光学品牌在场。这些先例让 GUNBASE 的提案不必从零解释『为什么一家光学公司要来』。",
          basis: "ISSF news/5149 / Hunting Life / ColdBore"
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

      dataNote: "今日动态来自 2026 年公开来源（ISSF、JAGD & HUND、SHOT Show、Walther、Swarovski、ColdBore、ContentGrip 等），每条在对象卡内附标题与来源域名。策略与机会为 AI GB-Marketing 推演，不代表已建立合作。全量池口径来自本机 07_/08_ 每日名录。"
    }
  ]
};
