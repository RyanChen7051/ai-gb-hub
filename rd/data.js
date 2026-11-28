/* AI GB-RD — 全球技术情报与图纸设计储备数据
 * 由每日 08:00 自动化更新。新一天插入 days[] 首位，保留全部历史。
 *
 * 数据诚信铁律：
 * - v:"verified" = 来自公开可核实来源，附 url 与 source（MLA）；
 * - v:"model"    = 基于已核实事实的工程推演（图纸储备方向），不是已量产设计；
 * - 事实与推演分列，不得把推演冒充已建立的产品或专利授权；
 * - 不写入任何真实邮箱、密码、Token、客户个人信息。
 */
window.GB_RD_DATA = {
  meta: {
    botName: "AI GB-RD",
    shortName: "AI GB-RD",
    en: "AI GB Research & Development",
    org: "GunBase 火械基地 · 全球技术与图纸储备中心",
    version: "1.4.8",
    reportDate: "2026-11-28",
    generatedAt: "2026-11-28 08:47 (GMT+8) · R1 补交：原调度 08:00，实际 08:47，延迟 47 分钟；本轮为定时触发（automation 68d95d11），启动已过 08:00；result_success 待运行结束判定，产物落地不等于自动化成功",
    scope: "全球 · 瞄准镜 / 枪械配件 / 战术装备",
    tagline: "每日全球技术扫描 → 可落图纸的设计储备",
    cadence: "每日 08:00（北京时间）自动更新",
    desktopDir: "~/Desktop/AI-GB-Team/AI-GB-RD/",
    note: "本页技术信号来自公开可核实来源（每条附 URL 与日期）；图纸设计储备是基于这些事实的工程推演方向，尚未量产、未做专利自由实施（FTO）检索，落地前须经工程评审与法务复核。IX 类军用项目只做趋势情报，不做仿制图纸。"
  },

  kpis: [
    { label: "当日技术信号", value: "9", unit: "条", tone: "blue", sub: "3 新增 + 6 进展 · 附 URL 与日期", v: "verified" },
    { label: "图纸储备方向", value: "4", unit: "项", tone: "green", sub: "基于已核实事实的工程推演", v: "model" },
    { label: "可核实来源", value: "9", unit: "个", tone: "teal", sub: "专利库 / 行业媒体 / 厂商官网", v: "verified" },
    { label: "权项级专利复核", value: "6", unit: "件", tone: "purple", sub: "1 新增 + 5 存量 · 均需 FTO", v: "verified" },
    { label: "新增专利", value: "1", unit: "件", tone: "amber", sub: "US20260341187A1 公开申请", v: "verified" },
    { label: "累计报告", value: "5", unit: "天", tone: "blue", sub: "11-23 / 11-25 / 11-26 / 11-27 / 11-28", v: "verified" }
  ],
  // ===== 三大技术方向（关键词矩阵为方法，不是已抓取结果）=====
  domains: [
    {
      id: "optic", name: "瞄准镜光学", en: "Riflescope Optics", icon: "scope", tone: "blue",
      focus: "ED/HD 玻璃、增透膜、变倍机构、分划照明、视差与归零机构",
      keywords: ["ED glass riflescope 2026", "FFP LPVO 1-10x", "fully multi-coated anti-reflective", "zero stop turret", "inner focus parallax patent", "MicroOLED HUD reticle"],
      why: "2026 年 ED 玻璃从高端下放到主流价位，是图纸端最值得储备的光机方向。"
    },
    {
      id: "mount", name: "枪械配件接口", en: "Accessory Interface", tone: "teal",
      focus: "MIL-STD-1913 / STANAG 4694 导轨、快拆座、夹持环、公差链与归零复现",
      keywords: ["MIL-STD-1913 slot width tolerance", "STANAG 4694", "quick detach mount return to zero", "6061 vs 7075 mount", "Type III hardcoat tolerance", "30mm 34mm cantilever ring"],
      why: "接口尺寸链是图纸可直接落地的部分，公差预算决定 RTZ 性能。"
    },
    {
      id: "tactical", name: "战术装备电子", en: "Tactical Electronics", tone: "purple",
      focus: "热成像传感器、集成测距 LRF、弹道计算机、夹片式转换、AI 图像增强",
      keywords: ["thermal scope 12 micron NETD 2026", "integrated laser rangefinder optics", "ballistic solver HUD", "thermal clip-on adapter", "AI image enhancement optics", "IP67 recoil rated optic"],
      why: "电子与光学融合是 2026 增长最快的方向，但出口管制与 FTO 风险也最高。"
    }
  ],

  // ===== 每日报告：新的一天插到 days[] 首位 =====
  days: [
    {
      date: "2026-11-28",
      weekday: "周六",
      generatedAt: "2026-11-28 08:47 (GMT+8) · R1 补交：原调度 08:00，实际 08:47，延迟 47 分钟；本轮为定时触发（automation 68d95d11），启动已过 08:00；result_success 待运行结束判定，产物落地不等于自动化成功",
      headline: "专利从「有无」进入权项级：六件专利逐件给出独立权项号与图纸重叠点，Vortex 柔性显示旋钮公开申请入账；新增模块化悬臂座与 Nocpix ACE 2 人机布局",
      verdict: "本轮检得 9 条可核实信号（3 条新发现 + 6 条对既有信号的进展更新）与 1 件新公开专利；按 D-25 对 6 件专利逐件给出公开号、独立权项号、与现有图纸的重叠点及是否需正式 FTO。工程上最关键的三点：① Vortex 公开申请 US20260341187A1 的独立权项 1/9/12 直接覆盖「柔性显示环带 + 可拆卸 + 闭环/开口环」的旋钮刻度载体，D-31 必须先做 FTO；② 五件存量专利的独立权项边界比此前描述更清楚——US 12,693,097 权项 18 明确「螺纹孔+螺钉锁紧楔腿」，US 12,674,639 权项 5 只要求「至少一个」锥面，两者对 D-16/D-28 的风险高于此前判断；EP4733707A1 与 WO2026006282A1 的核心特征主要落在从属权项，FTO 重点须相应调整；③ 座体从单一夹持件转为附件平台（Vortex Pro Cantilever 的 45°/90°/前伸测距架），热成像整机把调焦旋钮移到中央并做双电池仓分区。四项图纸储备均为基于事实的工程推演（model），不是已量产设计；专利只做公开技术情报，任何设计落地前必须做自由实施（FTO）检索。热成像/夜视/火控只做通用趋势与机械接口，不做仿制图纸、不碰受控算法。",
      kpi: [
        { k: "技术信号", v: "9", d: "3 新增 + 6 进展 · 附 URL 与日期", tone: "b" },
        { k: "图纸储备", v: "4", d: "model · 非量产设计", tone: "g" },
        { k: "权项级专利复核", v: "6", d: "1 新增 + 5 存量 · 均需 FTO", tone: "t" },
        { k: "来源", v: "9", d: "专利库 / 行业媒体 / 厂商官网", tone: "a" }
      ],
      signals: [
        {
        id: "T-37",
        domain: "optic",
        type: "专利·公开申请·新增",
        title: "US 2026/0341187 A1：Vortex 用柔性显示环带做可更新旋钮刻度，独立权项 1/9/12 分闭环、开口环与无线更新",
        fact: "Patents-Review 公开文本显示：US 2026/0341187 A1 题名 Scope Turret，公开日 2026-10-29，申请日 2026-04-24，申请人 Sheltered Wings, Inc. d/b/a Vortex Optics，发明人 Robert Morell、Joseph Heltemes、Dustin Langsdorf，状态 Pending，优先权 US 63/794,909（2025-04-25）。独立权项 1：柔性显示器配有第一端与第二端，生成旋钮刻度图像，环绕并可拆卸地耦接旋钮外周，两端相接形成完整环。独立权项 9：两端不相接，邻近显示器的部分旋钮外表面仍可见。独立权项 12：方法权项，移动应用确定角度调整范围并无线发送至可更新指示器，该指示器为柔性显示器。",
        implication: "机械层面出现两种互斥包络：闭环环带与留缝开口环。图纸端只评估环带截面、卡合唇边、轴向高度与拆装工具位；显示驱动与算法不入库。该公开申请与既有 D-27 共轴旋钮存在高度叠层冲突，需先做权项比对。",
        src: "Patents-Review. \"US 2026/0341187 A1 - Scope Turret.\" Patents-Review, 29 Oct. 2026.",
        url: "https://www.patents-review.com/a/20260341187-scope-turret.html",
        date: "2026-10-29",
        v: "verified",
        caveat: "公开申请；权项编号与文本来自 Patents-Review 转录，未用 USPTO 官方文本复核；FTO 未完成；显示与无线通信内容不在本条技术情报范围",
        },
        {
        id: "T-38",
        domain: "mount",
        type: "新品·模块化接口",
        title: "Vortex Pro Cantilever：悬臂座做成附件平台，45° / 90° / 前伸测距架分件售卖",
        fact: "The Firearm Blog 2026-11-17（作者 Daniel Y）报道：Pro Cantilever 系列有 1.54 与 1.93 英寸两种高度、30mm 与 34mm 两种管径；基座 MSRP 174 美元；45° 偏置红点座 64.99 美元、12 点（90°）红点座 74.99 美元、供机上测距仪使用的 Diving Board 前伸架 84.99 美元，均另售。厂商口径称美国制造，面向 dual-zero LPVO、备用红点、热夹片与弹道测距设备，并称 Pro Diving Board 与 12 点座兼容新 Pro Riflescope Rings 与 Pro Cantilever。Gun Trade World 另报 MAP 169.99 美元 / MSRP 259.99 美元，与 TFB 口径不一致。",
        implication: "座体从「单一夹持件」变成「统一基座 + 可选附件基准面」；图纸端可预研 45°/90°/前伸三类附件的角向定位与载荷路径，但不复制孔位和外形。",
        src: "Daniel Y. \"NEW Range of Vortex Pro Cantilever Mounts.\" The Firearm Blog, 17 Nov. 2026.",
        url: "https://www.thefirearmblog.com/blog/new-range-of-vortex-pro-cantilever-mounts-44831455",
        date: "2026-11-17",
        v: "verified",
        caveat: "行业媒体转述厂商新闻稿；价格与兼容性为厂方口径，Gun Trade World 的 MAP/MSRP 与 TFB 不同；原文未给重量、扭矩与公差；热夹片兼容为厂商说法，非独立测试",
        },
        {
        id: "T-39",
        domain: "elec",
        type: "新品·人机与壳体（厂商发布）",
        title: "Nocpix ACE 2：中央调焦旋钮 + 镁合金壳体减重 25%，保留 60mm 出瞳距与双电池仓",
        fact: "Nocpix USA 2026-11-16 官方新闻稿（作者 Jeremy Wheatley）发布 ACE 2 三型号：S60R（1280×1024、60mm 物镜、2× 原生倍率）、H50R（640×512、50mm、3×）、H35R（640×512、35mm、2×）。平台口径为 ≤12 mK NETD、F1.0 物镜、2560×2560 圆 AMOLED；LRF 2.0 标称至 1,300 码且较初代快 57%；Ocular Zoom 2.0 随倍率缩放 HUD 与分划；新增中央调焦旋钮。壳体改用高强镁合金，厂方称减重 25%、整镜低于 1,000 g、IP67；双电源为内置 3650 mAh + 可换 18650，最长 8 小时；出瞳距 60mm、出瞳 10mm。",
        implication: "对图纸有用的是三类机械点：中央调焦旋钮的人机位置、减重壳体的壁厚与刚度取舍、内置电池与可换电池的密封分区。60mm 出瞳距作为目镜罩避让输入。探测器、图像处理、弹道计算与测距参数一律不入图。",
        src: "Wheatley, Jeremy. \"Introducing the Nocpix ACE 2: Next-Generation Thermal Riflescopes Built for the Night Hunter.\" Nocpix USA, 16 Nov. 2026.",
        url: "https://nocpixusa.com/blogs/news/introducing-the-nocpix-ace-2-next-generation-thermal-riflescopes-built-for-the-night-hunter",
        date: "2026-11-16",
        v: "verified",
        caveat: "厂商新闻稿，全部规格为厂商标称；57% 测距提速、25% 减重、8 小时续航均未见独立复现；热成像属受管制品类，只做通用机械接口趋势，不碰受控规格与算法",
        },
        {
        id: "T-40",
        domain: "optic",
        type: "实测·进展更新（T-16）",
        title: "Arken EP-8 双分划实测：KLGrid 0.1 MRAD 版在 1,050 码命中，照明旋钮缺少档间关闭位",
        fact: "The Firearm Blog 2026-11-19（作者 Daniel Y）发布两支厂方提供样品的实测：EP-8 1-8×28 现有 KLBox（BDC，¼ MOA 点击）与新增 KLGrid（MRAD 树形，0.1 MRAD 点击）两种分划；在 M16A5 与 SIG SG551 上开箱即上纸，环盖间隙均匀；1× 眼盒宽松，KLGrid 在 1,050 码取得命中；两版跟踪正常，盖帽后旋钮未移位。批评点：随附可拆拨杆建议加长 20–30%；照明旋钮的关闭位在旋转一端而非各档之间，作者多次误判导致整夜耗电。报导价 375 美元含镜座，作者明确不认同「300 美元击败 3,000 美元」的说法。",
        implication: "这是对 11-25 条目 T-16 的进展更新，不是新型号入库。可直接转成图纸验收项：照明旋钮设档间关闭位、拨杆长度与挂扯风险并列评估、出厂预装环需记录扭矩一致性。分划几何不复制。",
        src: "Daniel Y. \"TFB Review: Arken EP8 1-8x28 Scopes.\" The Firearm Blog, 19 Nov. 2026.",
        url: "https://www.thefirearmblog.com/blog/tfb-review-arken-ep8-1-8x28-scopes-44831518",
        date: "2026-11-19",
        v: "verified",
        caveat: "样品由 Arken 提供、单一编辑单次实测；1,050 码命中与 375 美元含座为单次报导，非统计或实验室结论；玻璃质量评价为主观观察；本条为 T-16 进展更新",
        },
        {
        id: "T-41",
        domain: "mount",
        type: "专利·权项级复核（T-32 更新）",
        title: "US 2026/0309463 A1 权项收口：独立权项只有方法权项 1，限定腔体「第三侧不可达」",
        fact: "Patents-Review 的 CLAIMS 段列出权项 1–4，独立权项仅第 1 项：一种把光学瞄具安装到基座的方法，基座有第一螺纹孔；壳体有第一侧、第二侧与第三侧，第一开口在第一侧与第二侧之间连续延伸；第一腔体含第一表面，紧固件头部由该表面支撑、杆部穿过第二侧开口进入基座螺纹孔；腔体在 Second side 相对侧的部分使紧固件插入后无法从第三侧接近。权项 2/4 补充从头部侧面孔用工具旋转；权项 3/4 补第二紧固件、第二腔体与第二开口。页面状态字段出现 Patented，早前检索摘要出现 Allowed，两种口径不一致。",
        implication: "D-29 的输入应从笼统的「顶部不可达」改写为「第一侧到第二侧连续开口 + 第三侧不可达」三面关系；与 D-29 的隔墙、侧向工具通道高度重叠，必须先做权项对照图。",
        src: "Patents-Review. \"US 2026/0309463 A1 - Optical Sight Mounting System.\" Patents-Review, 8 Oct. 2026.",
        url: "https://www.patents-review.com/a/20260309463-optical-sight-mounting-system.html",
        date: "2026-10-08",
        v: "verified",
        caveat: "权项文本来自 Patents-Review 转录而非 USPTO 官方；法律状态在两处抓取出现 Patented / Allowed 差异，未核实；FTO 未完成",
        },
        {
        id: "T-42",
        domain: "mount",
        type: "专利·权项级复核（T-33 更新）",
        title: "US 12,674,639 B2 权项分级：独立 1 / 5，权项 5 只要求「至少一个」锥面因而更宽",
        fact: "Google Patents 显示该授权专利 2026-07-07 授权、受让人 Sellmark Corp、优先权 2023-02-28、法律状态 Active（页面标注到期 2043-04-09），共 7 项权项，独立权项 1 与 5。权项 1 要求锥形凸出部有多个表面收拢至顶点、容纳槽有多个对应表面，且表面与顶点配合；权项 5 只要求「至少一个表面」收拢至顶点，保护范围更宽。两项独立权项都要求装置侧 latch receptacle 与支撑侧 latch member 选择性接合。权项 4 从属于权项 1，把支撑限定为独脚架/两脚架/三脚架。",
        implication: "D-28 若沿用「锥面定心 + 闩锁轴向锁」会同时落入权项 1 与更宽的权项 5；FTO 必须逐要素比权项 5，不能只比权项 1。脚架支撑限定只在从属权项 4，不能据此认为枪轨应用自动排除。",
        src: "Google Patents. \"US12674639B2 - Quick Attach and Detach Mount for Firearms and Other Objects.\" Google Patents, 7 July 2026.",
        url: "https://patents.google.com/patent/US12674639B2/en",
        date: "2026-07-07",
        v: "verified",
        caveat: "Google Patents 明确声明法律状态为假设性信息、不构成法律结论；权项文本以官方全文为准；FTO 未完成",
        },
        {
        id: "T-43",
        domain: "optic",
        type: "专利·权项级复核（T-34 更新）",
        title: "EP4733707A1 权项边界：独立 1 / 8 只要求壳体内显示于视场周围，观察环框体在从属 4",
        fact: "Google Patents 显示该申请公开日 2026-04-29、申请人 Light Optical Works Ltd、状态 Pending；独立权项 1 为装置权项，要求光学系统、容纳光学系统的壳体、以及与光学系统一同装在该壳体内并在可视视场周围显示信息的显示部；独立权项 8 为对应方法权项。观察环相关内容在从属权项：权项 3 的框体围绕视场孔，权项 4 明确显示部附接于观察环框体，权项 5 要求框体中另设与视场孔分开的通孔。",
        implication: "D-29 的「观察环显示窗口」不直接落在独立权项，而在从属 4/5；FTO 重点应改为独立 1/8 的「壳体内 + 视场周围」组合是否覆盖我方机械预留窗口。显示内容与算法不入库。",
        src: "Google Patents. \"EP4733707A1 - Optical Sight and Information Display Method.\" EPO, 29 Apr. 2026.",
        url: "https://patents.google.com/patent/EP4733707A1/en",
        date: "2026-04-29",
        v: "verified",
        caveat: "公开申请，法律状态以官方为准；权项编号来自 Google Patents 页面；FTO 未完成；不涉及图像或弹道算法",
        },
        {
        id: "T-44",
        domain: "optic",
        type: "专利·权项级复核（T-26 更新）",
        title: "WO2026006282A1 权项图谱：独立权项 1/19/20/26–32/35，角向定位仅在从属权项",
        fact: "Google Patents 显示该 PCT 公开日 2026-01-02、申请人 Primary Arms LLC、状态 Pending（页面另列 Anticipated expiration 2026-12-25，字段并存需核实）。识别出的独立权项为 1、19、20、26、27、28、29、30、31、32、35，均围绕可拆装 adjustment turret cassette 与 adjustment turret interface；权项 20 明确「替换第一卡匣为第二卡匣」，权项 27 要求任一卡匣可与任一接口可拆配合。角向定位相关限定出现在从属权项 8/9（外索引面/外花键面）与 13/14/15（内索引面/内花键面），说明书定义为接口与卡匣之间提供 angular indexing。",
        implication: "D-15 的角向定位特征落在从属权项；FTO 检索范围必须从「角向定位」扩展到「通用接口 + 任意卡匣互换」。D-27 的共轴堆叠若做成可换旋钮，同样需要按权项 27 做比对。",
        src: "Google Patents. \"WO2026006282A1 - Optical Sight Turret System.\" WIPO, 2 Jan. 2026.",
        url: "https://patents.google.com/patent/WO2026006282A1/en",
        date: "2026-01-02",
        v: "verified",
        caveat: "权项编号依页面转录；Pending 与 Anticipated expiration 字段并存，须以 WIPO/USPTO 官方核实；FTO 未完成",
        },
        {
        id: "T-45",
        domain: "mount",
        type: "专利·权项级复核（T-27 更新）",
        title: "US 12,693,097 权项级结论：8 项独立权项，权项 18 明确「螺纹孔 + 螺钉锁紧楔腿」",
        fact: "Patents.us 显示该专利授权日 2026-07-28、题名 Fast Mounting Device for Multiple Slot Interfaces、共 19 项权项，页面标注独立权项为 1、5、6、7、11、12、13、18。权项 1：连接附件的双楔块件含一对沿同一方向延伸、相互间隔的楔体，用于接合枪械多槽接口。权项 5/6/7：楔壳分别通过销、螺钉、包胶连接到附件盒。权项 13：双楔块含水平梁与前后两个楔腿。权项 18：另含螺纹孔与可旋入螺钉，拧紧后把楔腿锁在多槽接口外表面、防止脱落。页面未给受让人；权项 11/12 可见文本以逗号结尾，疑似截断。",
        implication: "D-16 双楔块多槽座与权项 1/13/18 高度同域；若继续沿用「螺钉锁紧楔腿」会直接触碰权项 18。图纸阶段须改走不同锁定机制或先做 FTO；不得据截断文本下最终法律结论。",
        src: "Patents.us. \"US12693097 - Fast Mounting Device for Multiple Slot Interfaces.\" Patents.us, 28 July 2026.",
        url: "https://patents.us/US12693097",
        date: "2026-07-28",
        v: "verified",
        caveat: "转录页权项 11/12 文本疑似截断、未披露受让人；独立权项编号与范围须用 USPTO 官方全文复核；FTO 未完成",
        }
      ],
      designs: [
        {
          id: "D-31",
          name: "旋钮柔性刻度环带的机械包络（闭环 / 开口环两版）",
          domain: "optic",
          priority: "P0",
          status: "概念推演",
          basis: "T-37（US20260341187A1 独立权项 1/9/12）、T-29（仰角单轴锁定）、T-21（免工具重设）",
          input: "旋钮外周可拆环带；闭环版两端相接、开口版保留部分旋钮外表面可见；环带只作为刻度载体，不集成显示驱动与无线模块；34mm 镜筒旋钮外径与 zero stop 堆叠高度作为待测输入",
          drawing: [
            "环带截面与卡合唇边剖面",
            "闭环接缝与开口环端头两种方案",
            "环带轴向高度与镜筒/护罩间隙链",
            "环带防转与拆装工具位",
          ],
          verify: "拆装循环次数、刻度可读性、与 zero stop 的叠高冲突、湿热后卡合保持力",
          gate: "FTO：US20260341187A1 权项 1/9/12；只做机械载体，不做显示、通信或弹道算法",
          v: "model"
        },
        {
          id: "D-32",
          name: "悬臂座附件统一基准接口（45° / 90° / 前伸测距架）",
          domain: "mount",
          priority: "P0",
          status: "概念推演",
          basis: "T-38（Vortex Pro Cantilever 模块平台）、T-08（导轨尺寸链）、T-35（固定座/QD 分基准）、T-30（三键夹持）",
          input: "30/34mm 环与 1.54/1.93 英寸高度仅作对标尺寸；三类附件基准角 45°、90°、前伸；6061-T6 成本路线；扭矩与载荷路径必须可记录",
          drawing: [
            "附件基准孔位与角向定位方案",
            "45° 偏置红点座与环体避让",
            "90° 顶置座与前伸架载荷路径",
            "悬臂根部与导轨夹持区应力集中区",
          ],
          verify: "双光学同轴性、后坐等效加载、附件拆装复现、跨厂导轨适配",
          gate: "不复制 Vortex Pro 具体孔位与外形；热夹片与测距设备只做机械边界；FTO 待",
          v: "model"
        },
        {
          id: "D-33",
          name: "中央调焦旋钮 + 双电池仓的壳体分区",
          domain: "elec",
          priority: "P1",
          status: "技术跟踪",
          basis: "T-39（ACE 2 中央调焦、镁合金减重、双电池）、T-31（30mm 管身热成像机械边界）、T-28（夹片两级转接）",
          input: "镁合金减重 25% 作为厂商标称目标而非已达指标；整镜 <1000 g、IP67、60mm 出瞳距、10mm 出瞳；内置 3650 mAh + 可换 18650 的密封分区",
          drawing: [
            "中央调焦旋钮轴向剖面与密封",
            "内置/可换电池仓隔离与更换路径",
            "镜环夹持区与壳体端面",
            "出瞳距与目镜罩避让包络",
          ],
          verify: "调焦扭矩一致性、浸水后功能、换电池不破密封、镜环不打滑",
          gate: "出口合规红线：探测器、NETD、图像处理、弹道算法与测距参数一律不入图；仅通用机械与热管理趋势",
          v: "model"
        },
        {
          id: "D-34",
          name: "LPVO 照明旋钮档间关闭位与拨杆人机构件",
          domain: "optic",
          priority: "P1",
          status: "概念推演",
          basis: "T-40（EP-8 实测批评点）、T-16（原 EP-8 记录）、T-27（双楔块快装座）",
          input: "照明旋钮在各亮档之间设置关闭位；拨杆加长 20–30% 同时评估挂扯风险；0.1 MRAD 与 ¼ MOA 两版旋钮；出厂预装环需附扭矩记录",
          drawing: [
            "照明档位—关闭位角度布局",
            "拨杆长度外径包络与挂扯避让",
            "旋钮 detent 弹簧与手感剖面",
            "出厂预装环扭矩标记位",
          ],
          verify: "误开灯率、拨杆挂扯次数、档位回位精度、出货后零位保持",
          gate: "不复制 KLGrid / KLBox 分划几何；照明电路与算法不入库；FTO 待",
          v: "model"
        }
      ],
      watchlist: [
        "D-25 回应：6 件专利（含新增 US20260341187A1）已逐件给出公开号、独立权项号、图纸重叠点与是否需正式 FTO；其中 US12693097 权项 11/12 文本疑似截断、US20260309463A1 状态字段出现 Patented/Allowed 不一致，必须以 USPTO 官方全文复核。",
        "US20260341187A1 独立权项 1/9/12 直接覆盖环带刻度载体，D-31 在 FTO 前不得进入样机。",
        "Vortex Pro 的价格与兼容性是厂商口径，TFB 与 Gun Trade World 的 MSRP/MAP 不一致；重量、扭矩、公差均未公开，不能当规格书使用。",
        "Nocpix ACE 2 的 57% 测距提速、25% 减重、8 小时续航均为厂商新闻稿口径，无独立复现；热成像属受管制品类，只做通用机械接口趋势。",
        "Arken EP-8 样品由厂方提供、单次编辑实测，1,050 码命中与 375 美元含座不可当统计结论；分划几何不复制。",
        "G-38 回应：11-27 的 rd 段虽已自提交，但 review/retro 为空；今日 rd 段补上实质复盘。R1 今日仍为补交，延迟根因待总管席核查。"
      ],
      dataNote: "本轮公开检索以行业媒体原文页（The Firearm Blog）、厂商官网新闻稿（Nocpix USA）、专利转录站（Patents-Review / Patents.us）与 Google Patents 为主。搜索结果含大量转载副本，已优先取原始页面；专利独立权项来自转录页面，未用 USPTO/WIPO 官方全文复核，相关 caveat 已逐条标出。厂商测试口径、单次编辑实测、行业评论与新闻稿规格均单独标注，不与独立测试事实混用；事实 v=verified 与工程推演 v=model 严格分列。检索受限于公开可索引页面；本轮未检得 SHOT Show 官网当日新发布，也未检得可直接核实日期的 STANAG 4694 新标准原文更新。"
    },
    {
      date: "2026-11-27",
      weekday: "周五",
      generatedAt: "2026-11-27 08:14 (GMT+8) · R1 补交：原调度 08:00，实际 08:14，延迟 14 分钟；本轮为定时触发（automation 68d95d11），automation_runs.result_success 待运行结束判定，产物落地不等于自动化成功",
      headline: "锁定只做单轴、快拆先谈基准：SIGHTRON 仰角锁定旋钮与 Spuhr 导轨基准取舍同日入账，三件新公开专利补齐壳体与锥面快拆路径",
      verdict: "本轮检得 8 条可核实技术信号（6 条新发现 + 2 条对既有信号的进展更新）与 3 件新专利（2 件公开申请、1 件已授权）。对 GUNBASE 最有价值的是三点：① SIGHTRON 把锁定旋钮明确限定在仰角单轴并与 zero stop 共存，说明防误触可收敛为独立旋钮模块；② Spuhr 明确固定座走 STANAG 4694 三面基准、QD 座走 MIL-STD-1913 两面基准，QD 与固定座的验收指标必须拆开；③ Trijicon 公开申请给出「侧面可达、顶部不可达」的紧固件腔布局，Sellmark 授权专利给出锥面定心加闩锁的第三条可脱开路径。四项图纸储备均为基于事实的工程推演（model），不是已量产设计；三件专利只做公开技术情报，任何设计落地前必须做自由实施（FTO）检索。热成像 / 夜视 / 火控仅做通用趋势与机械接口，不做仿制图纸、不碰受控算法。",
      kpi: [
        { k: "技术信号", v: "8", d: "6 新增 + 2 进展 · 附 URL 与日期", tone: "b" },
        { k: "图纸储备", v: "4", d: "model · 非量产设计", tone: "g" },
        { k: "新专利", v: "3", d: "2 公开申请 + 1 授权 · 需 FTO", tone: "t" },
        { k: "来源", v: "8", d: "行业媒体 / 厂商 / 专利库", tone: "a" }
      ],
      signals: [
        {
          id: "T-29",
          domain: "optic",
          type: "新品·旋钮机构",
          title: "SIGHTRON S6 5-30×56 ED IR：锁定功能明确限于仰角单轴，与 zero stop 并存",
          fact: "Shooting News Weekly 2026-11-24 报道，SIGHTRON 三款日本产 S6 5-30×56 ED IR 新增锁定旋钮；厂商产品页明确写为「strictly an elevation locking turret」，即仅仰角锁定，并与该系列既有 zero stop 系统同时提供。型号口径：SKU 66013 为 SFP / MOA-7 IR / 1,899.99 美元；SKU 66014 与 66015 为 FFP，分别配 MH-7 IR（0.1 MRAD）与 MOA-8 IR（1/4 MOA），各 1,999.99 美元。机身口径：34mm 单体工业级铝管、ED 玻璃与 Zact-7 Revcoat Plus 镀膜、11 档 CR2032 照明、ExacTrack W&E，仰角调整量 80 MOA / 23.3 MRAD、风偏 60 MOA / 17.5 MRAD，视差 10 码至无穷远，长 16.7 英寸、重 36 oz，IPX7 且抗冲击 1,000G。FirearmAI 2026-11-24 转载厂商新闻稿，文内公告日期为 11-15。",
          implication: "把锁定收敛到仰角单轴、并与 zero stop 叠加，说明防误触可以做成独立旋钮模块而不必重做整镜；图纸端优先定义锁止与 zero stop 的共轴堆叠高度和角向定位，不复制整镜光学。",
          src: "Luke C. \"Sightron S6 5-30×56 ED IR Riflescopes With A New Lockable Turret.\" Shooting News Weekly, 24 Nov. 2026.",
          url: "https://www.shootingnewsweekly.com/optics/sightron-s6-5-30x56-ed-ir-riflescopes-with-a-new-lockable-turret",
          date: "2026-11-24",
          v: "verified",
          caveat: "行业媒体转述厂商新闻稿与产品页；锁定力、IPX7 与 1,000G 为厂商标称，未见独立测试。FirearmAI 新闻稿笼统写 lockable turrets，以厂商产品页与 Shooting News Weekly 的 elevation-only 口径为准"
        },
        {
          id: "T-30",
          domain: "mount",
          type: "实测·安装接口",
          title: "Leupold LCO Pro F2：三交叉键 + 两颗张力螺钉固定皮卡汀尼导轨，课程中约 600 发保持零位",
          fact: "Gun USA All Day 2026-11-23 转述 American Rifleman 编辑 Tamara Keel 的实操记录：她在与 Hornady 合办、由 Kyle Lamb 与 Doug Koenig 带训的一天半卡宾枪课程及随后小型比赛中测试 LCO Pro F2。该光学件以三个 cross key 与两颗 tension screw 固定到皮卡汀尼导轨；配置锁定可在现场禁用设置变更与运动感应；提供四种可选分划（1 MOA 点到 65 MOA 圈点）、20 档昼间加 10 档夜视亮度、单节 CR123 标称 30,000 小时；铝合金壳体防水标称 66 英尺；该次约 600 发高强度训练与比赛后仍保持零位。尺寸 3.5 英寸长、含电池 9.6 oz。",
          implication: "三键定心加两张力螺钉提供了一条不靠槽宽过盈的夹持路径，可作为快拆座公差链的对照方案；图纸端应把它与双楔块入槽、弹簧张力加后坐耳并列做有限元与实弹复现验证。",
          src: "\"Leupold's LCO Pro F2 Holds Zero Through 600 Rounds in Carbine Class.\" Gun USA All Day, 23 Nov. 2026.",
          url: "https://gunusaallday.com/leupolds-lco-pro-f2-holds-zero-through-600-rounds-in-carbine-class",
          date: "2026-11-23",
          v: "verified",
          caveat: "二手转述 American Rifleman 编辑实测，非独立实验室；约 600 发保持零位是单次课程观察，不是标准化耐久测试；30,000 小时与 66 英尺为厂商标称"
        },
        {
          id: "T-31",
          domain: "elec",
          type: "新品·热成像整机",
          title: "Pulsar Thermion 3 LRF XT60 / XR60：测距模块移出物镜，30mm 管身 + 6000J 后坐等级",
          fact: "American Rifleman 2026-11-10：Thermion 3 LRF 两个型号，内置测距最远 1,312 码（1,200 米）；XT60 为 1280×1024 传感器、2–24×、14.6 度视场，XR60 为 640×480 传感器、4–40×；两者均为 2.4 英寸物镜与 2560×2560 AMOLED，顶部旋钮调焦、配变倍拨杆，集成弹道计算器并兼容 Stream Vision Ballistics。Rifle Configurator 2026-11-06 补充：905 nm Class 1 激光测距组件从热像物镜移到机壳内，采用 30mm 管身与普通镜环，出瞳距 65 mm，后坐等级 6000 J，防护 IP67，工作温度 -25 至 +50 摄氏度；XT60 系统 NETD 低于 20 mK，XR60 低于 18 mK。",
          implication: "测距模块移出物镜后，物镜保留完整 F1.0 光路，机械上变成「30mm 管身 + 独立测距窗」的壳体布局；我方只取机械接口、防护与后坐指标，不碰探测器、图像处理或弹道算法。",
          src: "American Rifleman Staff. \"New for 2026: Pulsar Thermion 3 Riflescope.\" American Rifleman, 10 Nov. 2026.",
          url: "https://www.americanrifleman.org/content/new-for-2026-pulsar-thermion-3-riflescope",
          date: "2026-11-10",
          v: "verified",
          caveat: "厂商规格经行业媒体转述；探测距离为厂商标称且不等于保证识别距离，6000 J / IP67 / NETD 未见独立复现；属受管制品类，只做通用机械接口趋势，不做仿制图纸"
        },
        {
          id: "T-32",
          domain: "mount",
          type: "专利·壳体机构",
          title: "US 2026/0309463 A1：Trijicon 公开「侧面可达、顶部不可达」的紧固件腔",
          fact: "Patents-Review 公开文本显示，US 2026/0309463 A1 题名 Optical Sight Mounting System，公开日 2026-10-08，申请人 Trijicon, Inc.，发明人为 Jerry Glen Sabaldan Elpedes 与 Matthew Stephen Bindon。文本记载：壳体第一表面限定第一腔体，该腔体可从壳体第一侧与底部进入，但被配置为无法从上方进入；紧固件头部由该表面支撑，杆部穿过底部进入底座螺纹孔，头部可从侧面用工具旋转；壳体还可有第二腔体；腔体与光学开口之间有隔离部分，使照明组件可置于壳体内受保护。",
          implication: "侧向维护紧固件让「照明组件内置」与「底部装导轨座」两件事不再互相挤占；图纸端可评估把电池与照明电路、底座螺钉、光学开口做三层分区，而不是把螺钉从顶部穿入光路区。",
          src: "Patents-Review. \"US 2026/0309463 A1 - Optical Sight Mounting System.\" Patents-Review, 8 Oct. 2026.",
          url: "https://www.patents-review.com/a/20260309463-optical-sight-mounting-system.html",
          date: "2026-10-08",
          v: "verified",
          caveat: "公开申请文本；未检索法律状态与权利要求保护范围，FTO 未完成，不得据此直接落地"
        },
        {
          id: "T-33",
          domain: "mount",
          type: "专利·授权·快拆",
          title: "US 12,674,639：Sellmark 授权「锥面定心 + 闩锁轴向锁」快拆座",
          fact: "Patents.us 显示 US 12,674,639 于 2026-07-07 授权，受让人 Sellmark Corporation，发明人 Cody Bench、Andrew Pischke、Seth D. Fritz，申请日 2024-11-29。独立权利要求 1 与 5 均记载：装置侧含向顶点收拢的锥形凸台与闩锁容纳部；支撑侧含对应的锥形凹座与闩锁件；装配时至少锥面与顶点相互贴合，闩锁件接合闩锁容纳部完成固定。从属权利要求 4 把支撑限定为独脚架、两脚架或三脚架。",
          implication: "这是继双楔块入槽、弹簧张力加后坐耳之后的第三条可脱开路径，可纳入接口概念对照；但原文实施例指向脚架类支撑，迁移到枪轨不是等同替换，需单独做规避设计。",
          src: "Patents.us. \"US 12,674,639 - Quick Attach and Detach Mount for Firearms and Other Objects.\" Patents.us, 7 July 2026.",
          url: "https://patents.us/US12674639",
          date: "2026-07-07",
          v: "verified",
          caveat: "已授权专利，权利要求保护范围未做 FTO；其支撑对象为脚架/支架，不可直接等同于枪轨接口"
        },
        {
          id: "T-34",
          domain: "optic",
          type: "专利·显示布局",
          title: "EP4733707A1：Light Optical Works 把信息显示部放在观察环框体上",
          fact: "Google Patents 显示 EP4733707A1 题名 Optical sight and information display method，公开日 2026-04-29，申请日 2025-03-31，申请人 Light Optical Works Ltd，发明人 Kensuke Sakai 等五人。文本记载：信息显示部与光学系统同装在壳体内，显示在用户经光学系统可见视场的周围；显示部可设在观察环（viewing ring）的框体上，或利用框体中与视场孔分开的通孔；用户可经目镜侧看到该信息而经物镜侧看不到；显示控制部可显示来自外部设备的风速、风向与距离等信息。",
          implication: "对图纸有用的是「不改物镜光路、在目镜端视场边缘预留显示窗口」的机械布局；本条只记录结构与可视路径，不接触任何图像处理或弹道算法。",
          src: "Google Patents. \"EP4733707A1 - Optical Sight and Information Display Method.\" EPO, 29 Apr. 2026.",
          url: "https://patents.google.com/patent/EP4733707A1/en",
          date: "2026-04-29",
          v: "verified",
          caveat: "公开申请，法律状态与权利要求未做 FTO；外部数据如何生成不在本条技术情报范围"
        },
        {
          id: "T-35",
          domain: "mount",
          type: "工程进展·公差链（T-08 更新）",
          title: "Spuhr 明确固定座与 QD 座采用不同导轨基准：三面 0.6mm 累计 vs 两面 0.1mm 宽度",
          fact: "Soldier Systems Daily 2026-02-16 转载 Spuhr 的技术说明：MIL-STD-1913 原始设计只用两侧 45 度面做夹紧与基准，顶面公差刻意放宽，总宽度公差约 0.1 mm，对不同导轨兼容性好，但座体随导轨实际宽度略有倾斜；NATO 自 2009 年（STANAG 4694）建议改用两侧加顶面三面基准，座体可保持水平，但顶面新增约 0.25 mm 公差，累计可达约 0.6 mm（0.024 英寸）。Spuhr 的做法是固定座采用三面基准以取直线与重复精度，QD 座仍采用两面基准以压低累计公差、扩大兼容范围。",
          implication: "这是对 11-23 条目 T-08 尺寸链条目的进展更新：QD 与固定座不应共用同一基准策略。图纸端据此把「固定座定位精度」和「QD 跨轨归零复现」拆成两套独立验收指标。",
          src: "Spuhr. \"Picatinny - How It Really Works!\" Soldier Systems Daily, 16 Feb. 2026.",
          url: "https://soldiersystems.net/?p=260070/",
          date: "2026-02-16",
          v: "verified",
          caveat: "厂商工程师口径经媒体转载；0.1 / 0.25 / 0.6 mm 为文中给出的近似值，未见与 MIL-STD-1913 / STANAG 4694 标准原文逐项核对"
        },
        {
          id: "T-36",
          domain: "mount",
          type: "进展·厂商正式规格（T-25 更新）",
          title: "Scalarworks LEAP/08 厂商正式公告补齐材料牌号与双夹结构口径",
          fact: "FirearmAI 2026-09-17 转载 Scalarworks 正式公告：新一代 LEAP/08 30mm 快拆座有 1.57 与 1.93 英寸两种高度，适配 MIL-STD-1913；采用 No-Gap 开口环、升级的双 ClickDrive 免工具自调节夹具、集成 LevelDrive 水平机构，并兼容 KICK 顶部或偏置辅助红点生态；材料为 7075-T6 铝、4140 CrMo 钢与 406 不锈钢，表面为 Type III 硬阳极与 BlackNitride，售价 419 美元。11-25 / 11-26 两条既有记录只引用经销商页面，本条补上厂商正式公告口径。",
          implication: "把 7075-T6 / 4140 / 406 的材料组合与自调节双夹作为对照基准；我方图纸仍按 6061-T6 的成本路线做公差预算，不照抄材料牌号与结构。本条为 T-25 的进展更新，不作为新型号入库。",
          src: "FirearmAI Staff. \"Scalarworks Announces All-New LEAP/08 30mm Quick-Detach Scope Mounts.\" FirearmAI, 17 Sept. 2026.",
          url: "https://firearmai.com/tactical-gear/scalarworks-announces-all-new-leap-08-30mm-quick-detach-scope-mounts",
          date: "2026-09-17",
          v: "verified",
          caveat: "厂商新闻稿；归零复现与 world-class 属宣传口径，未见独立复现；本条是对 T-25 的进展更新"
        }
      ],
      designs: [
        {
          id: "D-27",
          name: "仰角锁定 + zero stop 共轴旋钮模块",
          domain: "optic",
          priority: "P0",
          status: "概念推演",
          basis: "T-29（SIGHTRON 仰角单轴锁定与 zero stop 并存）、T-21（Leupold 免工具重设）、T-26（WO2026006282A1 旋钮盒接口，待 FTO）",
          input: "34mm 镜筒；仅仰角轴锁止；锁止与 zero stop 共轴堆叠；角向定位；IPX7 / 1000G 作为目标条件而非已达指标",
          drawing: ["旋钮组件轴向剖面与堆叠高度链", "锁止拨杆与球 detent 配合剖面", "圈数指示与 zero stop 复位行程", "旋钮与镜筒螺纹/压圈接口公差"],
          verify: "锁定前后零位漂移、拨杆循环寿命、浸水后功能、旋钮总高与眼部间隙",
          gate: "FTO：WO2026006282A1 的通用旋钮接口与角向定位权利要求；样机前工程评审",
          v: "model"
        },
        {
          id: "D-28",
          name: "三交叉键 + 双张力螺钉夹持接口（QD / 固定座分基准）",
          domain: "mount",
          priority: "P0",
          status: "概念推演",
          basis: "T-30（LCO Pro F2 三键两螺钉）、T-08（导轨尺寸链）、T-35（Spuhr 固定座三面 / QD 两面基准）",
          input: "三键跨槽定位、两张力螺钉夹紧；QD 版按两面 0.1mm 宽度预算，固定座版按三面顶面基准；6061-T6 成本路线",
          drawing: ["底面三键位置与槽距匹配图", "张力螺钉与压块剖面", "导轨宽度公差敏感性对照表", "固定座顶面基准版本"],
          verify: "跨多厂导轨归零复现、约 600 发等效后坐、夹持力与夹持变形",
          gate: "需实测多厂导轨样件；不得复制 LCO Pro F2 具体结构；专利检索后再定型",
          v: "model"
        },
        {
          id: "D-29",
          name: "侧向维护紧固件腔的镜体壳体分层",
          domain: "mount",
          priority: "P1",
          status: "技术跟踪",
          basis: "T-32（US20260309463A1 侧可达/顶不可达紧固件腔）、T-34（EP4733707A1 观察环显示窗口）",
          input: "紧固件从侧面工具可达、顶部不可达；照明组件内置；目镜端视场边缘预留显示窗口；底部保留导轨座接口",
          drawing: ["壳体侧向剖面与紧固件腔位置", "紧固件腔与光学开口之间的隔墙", "观察环框体显示窗口布置", "底部导轨座与壳体分层装配图"],
          verify: "侧向工具可达性、密封与进水、照明组件可维护性、装配重复性",
          gate: "FTO：US20260309463A1 与 EP4733707A1；只做机械布局，不做显示或弹道算法",
          v: "model"
        },
        {
          id: "D-30",
          name: "30mm 管身热成像整机机械接口边界",
          domain: "elec",
          priority: "P1",
          status: "技术跟踪",
          basis: "T-31（Thermion 3 的 30mm 镜环、65mm 出瞳距、6000J、IP67、测距组件移位）、T-28（夹片两级转接）",
          input: "标准 30mm 镜环夹持区；测距窗在机壳上的独立位置；65mm 出瞳距；6000J 后坐与 IP67 作为设计输入",
          drawing: ["30mm 管身夹持区与镜环接触带", "测距窗禁布区与机壳开口", "后坐载荷传递路径", "密封分区与电池仓隔离"],
          verify: "镜环不打滑、后坐等效加载、IP67 密封、热循环",
          gate: "出口合规红线：只做通用机械接口趋势；探测器、图像处理、弹道算法与受控规格一律不入图",
          v: "model"
        }
      ],
      watchlist: [
        "三件新专利 US20260309463A1、US 12,674,639、EP4733707A1 的法律状态与权利要求范围均未做 FTO，D-27 至 D-30 不得进入样机。",
        "SIGHTRON 锁定旋钮在厂商产品页为 elevation-only，但 FirearmAI 新闻稿笼统写 lockable turrets；后续以厂商规格页为准，不把风偏锁定当成已确认事实。",
        "Thermion 3 的 6000J、IP67、NETD 与探测距离都是厂商口径；热成像属受管制品类，只做通用机械接口趋势，不做仿制图纸。",
        "Spuhr 的 0.1 / 0.25 / 0.6 mm 为媒体转载的近似值，需取 MIL-STD-1913 与 STANAG 4694 标准原文逐项核对后再进入公差计算。",
        "延续跟踪：WO2026006282A1 与 US 12,693,097 仍待 FTO；11-26 记录的 HIKMICRO 约 1 MOA 落点偏差仍待独立复现。"
      ],
      dataNote: "本轮使用公开网络检索（行业媒体、厂商新闻稿与产品页、Google Patents / Patents.us / Patents-Review）。每条信号附 URL 与日期；厂商测试口径、行业评论、展前预览规格与二手转述均已单独标注 caveat，不与独立测试事实混用。事实 v=verified 与工程推演 v=model 严格分列。"
    },
    {
      date: "2026-11-26",
      weekday: "周四",
      generatedAt: "2026-11-26 09:44 (GMT+8) · R1 补交：原调度 08:00，实际 09:44，延迟 104 分钟；本轮为定时触发（runKind=scheduled，08:17:59 入队、09:40:09 实际启动），result_success 待运行结束判定",
      headline: "旋钮从固定件变成可换模块：Primary Arms 公开可互换旋钮盒专利申请，Leupold 免工具重设 zero stop；快拆座出现双楔块入槽的第二条接口路径",
      verdict: "本轮检得 8 条可核实信号（含 2 件新专利：1 件公开申请、1 件已授权）。对 GUNBASE 最有价值的是两个「接口级」方向：① 把 zero stop / 锁定 / 圈数指示做成可换旋钮盒，先定通用角向定位接口；② 快拆座从夹持导轨两侧转向楔爪卡入槽内，与 11-25 的弹簧张力+多后坐耳路线并列评估。另记夹片「夹持套+卡口环」两级转接。四项均为工程推演（model），不是量产设计；两件专利只做技术情报，任何设计落地前必须做 FTO。热成像 / 夜视 / 火控仅做通用趋势与机械接口，不碰受控算法。",
      kpi: [
        { k: "技术信号", v: "8", d: "verified · 附 URL 与日期", tone: "b" },
        { k: "图纸储备", v: "4", d: "model · 非量产设计", tone: "g" },
        { k: "新专利", v: "2", d: "1 公开申请 + 1 授权", tone: "t" },
        { k: "来源", v: "8", d: "厂商 / 媒体 / 专利库 / 经销商", tone: "a" }
      ],
      signals: [
        {
          id: "T-21",
          domain: "optic",
          type: "评测·归零机构",
          title: "Leupold VX-5HD Gen 2：Speed Set CDS 用球detent拨杆重置归零，无需内六角扳手",
          fact: "American Rifleman 于 2026-11-18 发布视频评测：新一代 VX-5HD 采用 Speed Set CDS 旋钮，旋钮经带球detent的锁定拨杆固定到瞄准镜；按下detent并翻起拨杆即可在归零后重设 zero stop，不需要 Allen keys。文章还记录美国产高级玻璃与 Guard Ion 镀膜、CR2032 供电照明分划、运动感应自动点亮/熄灭；系列含 1-5X（调整范围 180 MOA）等规格，核心产品线为 SFP 设计。",
          implication: "零位重置从「工具+说明书」变成「单手拨杆+球detent」，是可拆成独立图纸的结构点；对我方而言，优先做旋钮接口与角向定位公差，而不是复制整镜。",
          src: "American Rifleman Staff. \"Rifleman Review: Leupold VX-5HD Gen 2 Riflescopes.\" American Rifleman, 18 Nov. 2026.",
          url: "https://www.americanrifleman.org/content/rifleman-review-leupold-vx-5hd-gen-2-riflescopes",
          date: "2026-11-18",
          v: "verified",
          caveat: "行业媒体视频评测，引用 American Hunter 编辑口头描述；Guard Ion 与镀膜表现为厂商/编辑说法，未见独立透光率或色差实测"
        },
        {
          id: "T-22",
          domain: "elec",
          type: "新品·热成像整机",
          title: "Pulsar Trail 3 LRF XR50：640×480 / 12µm / 50mm F1.0，1,200 m 集成测距",
          fact: "Grand View Outdoors 2026-02-16 产品页：640×480、12µm 热传感器，系统热灵敏度低于 18 mK；50mm F1.0 锗物镜，3-24 倍；集成激光测距约 1,200 m；Full HD AMOLED 与画中画；探测距离超过 2,300 m；十组射击配置、多归零距离；工作温度 -25 至 +50 摄氏度；MSRP 4,499.97 美元。",
          implication: "12µm 传感器与 50mm F1.0 的组合继续下探到约 4.5k 美元价位段；我方只做通用趋势与机械安装接口情报，探测器与弹道算法不进入图纸储备。",
          src: "Krahn, Gordy. \"Pulsar Trail 3 LRF XR50 Thermal Riflescope.\" Grand View Outdoors, 16 Feb. 2026.",
          url: "https://www.grandviewoutdoors.com/product-profile/pulsar-trail-3-lrf-xr50-thermal-riflescope",
          date: "2026-02-16",
          v: "verified",
          caveat: "厂商/经销规格，探测 2,300 m、NETD 与测距为厂商标称，非独立测试"
        },
        {
          id: "T-23",
          domain: "elec",
          type: "新品·发布",
          title: "HIKMICRO STELLAR 4.0 / THUNDER 4.0：1280×1024 / 12 mK，镜头内 LRF 与夹片约 1 MOA 落点偏差",
          fact: "PR Newswire 2026-10-27 发布稿：X-1280 型号 SX75LR 4.0 与夹片 TQ70CL 4.0 使用 1280×1024 探测器、12 mK NETD 与 70mm 以上焦距；SX75LR 4.0 采用 LRF Inside Lens 将激光测距并入光路，测距至 1,200 m，100 m 处 1.3 cm 点击值，8 mm 出瞳与 55 mm 出瞳距；THUNDER 4.0 宣称出货前 100% 精度检查，100 m 落点偏差约 3 cm（约 1 MOA）。",
          implication: "两条对图纸有用的事实：一是测距模块与光学镜头共口径带来的机壳轮廓约束；二是夹片给出可量化落点偏差目标。我方只据此设定机械接口验收指标，不做传感器、图像处理或弹道算法。",
          src: "PR Newswire. \"When Seeing Becomes Knowing: HIKMICRO Launches X-1280 STELLAR 4.0 and THUNDER 4.0.\" The News This Week, 27 Oct. 2026.",
          url: "https://www.prnewswire.co.uk/news-releases/when-seeing-becomes-knowing-hikmicro-launches-x-1280-stellar-4-0-and-thunder-4-0-for-the-moments-that-demand-certainty-302920482.html",
          date: "2026-10-27",
          v: "verified",
          caveat: "厂商新闻稿口径；「industry-first」、12 mK、1,200 m 与 1 MOA 落点偏差未见第三方复现；AI 图像增强只记录趋势，不做算法仿制"
        },
        {
          id: "T-24",
          domain: "optic",
          type: "行业追踪·上市状态",
          title: "2026 光学上市追踪：Vortex AMG 1-10×24 FFP 与 EOTech Vudu 4-12×36 FFP 已在售",
          fact: "GunReleases 光学追踪页 2026-11-25 更新：40 款 2026/2027 光学产品中 36 款标记 shipping；Vortex AMG 1-10×24 FFP 标价 3,999 美元并在售，EOTech Vudu 4-12×36 FFP 标价 1,219 美元且在售，页面称后者长度 7.1 英寸；Hawke Vantage HD 34 FFP 标价 699 美元在售。",
          implication: "1-10 与 4-12 段的 FFP 继续朝短机身与 24/36mm 物镜走；这些是聚合页的上市状态，作为价位与形态信号，不作为一手规格事实。",
          src: "The Release Desk. \"New Optics 2026 & 2027: Release Dates & Prices.\" GunReleases, updated 25 Nov. 2026.",
          url: "https://gunreleases.com/optics",
          date: "2026-11-25",
          v: "verified",
          caveat: "第三方聚合追踪页，非厂商一手规格页；价格与状态随库存变化，长度 7.1 英寸为页面编辑描述"
        },
        {
          id: "T-25",
          domain: "mount",
          type: "结构·快拆座",
          title: "Scalarworks LEAP/08 三代：7075-T6 + 伸缩夹持 + 球detent，无外露拨杆",
          fact: "Kenzie's Optics 产品页：LEAP/08 三代 30mm QD 座用 7075-T6 铝坯 CNC 加工；ClickDrive 采用低轮廓拇指螺丝与低摩擦伸缩夹具，弹簧加载球detent在后坐下保持连接且免工具拆卸；LevelDrive 非对称环便于调平，环内加工沟槽增加与镜管摩擦；MIL-STD-1913 导轨，0 MOA，1.57 英寸高度；Type III 阳极与 Flash Nitride 部件。另一聚合页（2026-10-13 更新）记录 LEAP/09 1.93 英寸版为六螺丝环、5.68 或 6.28 oz。",
          implication: "与 11-25 检得的弹簧张力+多后坐耳路线不同，这条是「伸缩夹持+拇指螺丝+球detent」的第二条 QD 路径；图纸端应把两条路径并列做公差链对比。",
          src: "Kenzie's Optics. \"Scalarworks LEAP 08 3rd Generation 30mm Scope Mount - 1.57 inch.\" Kenzie's Optics, 2026.",
          url: "https://www.kenziesoptics.com/product/scalarworks-leap-08-qd-30mm-157",
          date: "2026",
          v: "verified",
          caveat: "经销商规格页无发布日期；「repeatable zero」为厂商宣称，未见独立 MOA 复现测试；六螺丝与重量数据来自另一聚合页，已单列"
        },
        {
          id: "T-26",
          domain: "optic",
          type: "专利·公开申请",
          title: "WO2026006282A1：可互换调节旋钮盒（turret cassette）与通用角向定位接口",
          fact: "Google Patents 记录：PCT 申请 WO2026006282A1，题名 Optical sight turret system，申请人 Primary Arms LLC，发明人 Robert E. Sheets；公开日 2026-01-02，申请日 2025-06-24，优先权日 2024-06-25，状态 Pending（尚未授权）。公开内容描述同一瞄具上的通用调节旋钮接口与多种可拆装旋钮盒，旋钮盒可提供锁定、zero stop、战术、圈数指示、有帽/外露等功能；配合面包括外锥面/内锥面与外花键/内花键以形成角向定位。",
          implication: "这是本轮最重要的新专利信号：把「zero stop 功能」从固定机构变成可换模块。对我方图纸储备意味着接口标准与角向重复定位精度先于功能旋钮本身。",
          src: "Google Patents. \"WO2026006282A1 - Optical sight turret system.\" WIPO, 2 Jan. 2026.",
          url: "https://patents.google.com/patent/WO2026006282A1/en",
          date: "2026-01-02",
          v: "verified",
          caveat: "公开专利申请（A1），非授权专利；仅作技术情报，权利要求范围未做 FTO 检索"
        },
        {
          id: "T-27",
          domain: "mount",
          type: "专利·授权",
          title: "US 12,693,097：双楔块卡入导轨两槽的快装座，扭矩螺丝锁止",
          fact: "Patents.us 记录：US 12,693,097，题名 Fast Mounting Device for Multiple Slot Interfaces，授权日 2026-07-28。权利要求 1 描述连接至枪械附件的双楔形构件，其一对间隔楔爪沿同一方向延伸并卡入多槽导轨的多个槽位；另有扭矩螺丝把楔爪锁止。页面未给出发明人与受让人。",
          implication: "与常见「夹持导轨两侧」不同，该方案直接利用槽内几何定位，可适应不同导轨厚度；对我方是第二条可评估的多槽接口路径。",
          src: "Patents.us. \"US12693097 - Fast Mounting Device for Multiple Slot Interfaces.\" Patents.us, 28 July 2026.",
          url: "https://patents.us/US12693097",
          date: "2026-07-28",
          v: "verified",
          caveat: "已授权美国专利；仅做公开技术情报，落地前必须逐项做 FTO 与规避设计；页面未标发明人/受让人"
        },
        {
          id: "T-28",
          domain: "mount",
          type: "接口·夹片转接",
          title: "HIKMICRO Thunder TQ35CL 4.0：640×512 夹片配夹持套+卡口环转接，<12 mK 且内置 LRF",
          fact: "VENARI Jagd 产品页：Thunder TQ35CL 4.0 热成像夹片，640×512 传感器、最新一代 <12 mK NETD，内置激光测距；页面标注 2026 年 11 月初起可供（可预订）；配套转接方案为夹持套与卡口环（Precision Hunting adapter set，另加 249 欧元），视场宽约 22 m。",
          implication: "夹片与白光镜的连接被拆成「夹持套 + 卡口环」两层，便于一套本体配多口径镜筒；这是我方夹片转接座最值得画的通用化结构。",
          src: "VENARI Jagd. \"HIKMICRO Thunder TQ35CL 4.0 thermal imaging attachment.\" VENARI Jagd, 2026.",
          url: "https://www.venari-jagdtechnik.de/en/produkt/hikmicro-thunder-tq35cl-4-0/",
          date: "2026-11",
          v: "verified",
          caveat: "经销商页面标注「2026 年 11 月初起可供」，非厂商正式发布日；<12 mK 为厂商标称；价格与适配尺寸以页面选项为准"
        }
      ],
      designs: [
        {
          id: "D-15",
          name: "可互换旋钮盒的通用角向定位接口",
          domain: "optic",
          priority: "P0",
          status: "model",
          basis: ["T-26", "T-21"],
          input: "WO2026006282A1 公开通用旋钮接口 + 锥面/花键角向定位；Leupold Speed Set CDS 给出球detent拨杆免工具重设 zero stop 的公开事实。",
          drawing: ["通用旋钮接口外径、锥角与花键齿数公差带", "球detent拨杆复位的定位重复精度与保持力标注", "旋钮盒与镜体间密封面及O形圈沟槽", "zero stop 挡块角度标尺与防错插键位"],
          verify: "样件做 500 次插拔后测角向重复定位与零位漂移，记录扭矩窗口与密封压降。",
          gate: "WO2026006282A1 为 Pending 申请，Leupold 机构亦有专利风险；进入详细设计前必须做 FTO 与规避设计评审。",
          v: "model"
        },
        {
          id: "D-16",
          name: "双楔块多槽导轨快拆座（公差链版）",
          domain: "mount",
          priority: "P0",
          status: "model",
          basis: ["T-27", "T-25"],
          input: "US 12,693,097 双楔爪卡入相邻两槽并用扭矩螺丝锁止；Scalarworks LEAP/08 展示伸缩夹持+球detent的第二条路径。",
          drawing: ["楔爪角度、槽距与导轨厚度公差链", "双楔受力对称性与后坐方向止退面", "扭矩螺丝锁紧区间与防松结构", "7075-T6 / 6061-T6 对照壁厚与 Type III 阳极尺寸补偿"],
          verify: "用标准与非标导轨样件测装拆 200 次后的归零复现，分别记录弹簧张力档与扭矩锁止档。",
          gate: "US 12,693,097 已授权，须逐项 FTO；不得复制权利要求 1 的完整组合。",
          v: "model"
        },
        {
          id: "D-17",
          name: "夹片本体与白光镜的夹持套-卡口环两级转接",
          domain: "mount+elec",
          priority: "P1",
          status: "model",
          basis: ["T-28", "T-23"],
          input: "TQ35CL 4.0 采用夹持套+卡口环转接另售；THUNDER 4.0 给出 100 m 约 3 cm 落点偏差的厂商标称。",
          drawing: ["夹持套内径系列与镜筒外径公差配合", "卡口环旋入定位面与角向重复定位台阶", "夹紧螺钉扭矩与镜筒表面压痕防护", "夹片光轴与白光镜光轴同轴度验收指标"],
          verify: "按 30/34 mm 镜筒样件测拆装后落点偏移，目标对齐厂商 3 cm@100 m 量级但未视为已达成。",
          gate: "只做机械接口；热成像探测器、LRF 与图像算法不进入图纸；出口管制口径待合规复核。",
          v: "model"
        },
        {
          id: "D-18",
          name: "短机身 FFP 变倍机构的轻量化参数包",
          domain: "optic",
          priority: "P2",
          status: "model",
          basis: ["T-24", "T-22"],
          input: "1-10×24 FFP 与 4-12×36 FFP 已在售，后者页面称长度 7.1 英寸；热成像端出现 50mm F1.0 与镁合金一体机身趋势。",
          drawing: ["变倍凸轮行程与镜体总长约束", "24/36mm 物镜端镜组与镜筒壁厚对照", "6061-T6 减重孔布局与刚性校核", "调焦/变倍环人机工效位置标注"],
          verify: "做焦距恒定性、变倍力矩与轻量样件刚性对比。",
          gate: "常规光机结构，仍须做外观与实用新型检索；不引用聚合页价格作为设计输入。",
          v: "model"
        }
      ],
      watchlist: [
        { q: "WO2026006282A1 是否进入授权、权利要求是否覆盖锥面/花键角向定位的具体组合", why: "D-15 进入详细设计前的 FTO 前置条件" },
        { q: "US 12,693,097 的受让人、同族专利与权利要求 1 的完整组合", why: "D-16 规避设计的边界，不能只看摘要" },
        { q: "HIKMICRO 100 m 约 3 cm 落点偏差是否有独立复现", why: "决定 D-17 同轴度验收指标是否可信" },
        { q: "R1 自动化 08:17:59 入队至 09:40:09 实际启动之间的 82 分钟由何造成", why: "D-14 要求查清根因；本轮日志只给时间戳，未给平台内部原因，暂不臆测" }
      ],
      dataNote: "本轮检索日 2026-11-26，使用公开网络来源（American Rifleman、Grand View Outdoors、PR Newswire、GunReleases、Kenzie's Optics、VENARI Jagd、Google Patents、Patents.us）。每条信号附 URL 与日期；厂商测试口径、经销商二手描述、聚合页状态与新闻稿声明已单列 caveat，不与独立测试事实混用。未检得当日 SHOT Show 官网新发布；如某方向本轮无可用结果，按实记录，不补造。热成像 / 夜视 / 火控只做通用趋势与机械接口，不做仿制图纸或受控算法。"
    },
    {
      date: "2026-11-25",
      weekday: "周三",
      generatedAt: "2026-11-25 15:20 (GMT+8) · 补跑：原调度 08:00，自动化 reason_code=interrupted 未产出，按实际时间如实记录",
      headline: "热成像夹片进入「集成测距+弹道机+免复零」三合一：Nitehog Viper Gen2 650 LRF 本月出货，ED 玻璃 LPVO 持续下放至 1-10×30 价位段",
      verdict: "本轮检得 8 条可核实信号（含 3 条本周在售/出货节点）。对 GUNBASE 最有落地价值的不是整机，而是三件可拆的结构方向：① 热成像夹片的『3 组独立校准档 + 免复零』机构；② 34mm 管身 + 真 FFP + 出厂预装 QD 座的一体化供货形态；③ QD 快拆座的张力可调与多挡后坐耳方案。全部为推演方向（model），量产前须做 FTO 与出口合规复核；热成像/NVF 相关只做通用趋势与机械接口情报，不做受控算法与仿制图纸。",
      kpi: [
        { k: "技术信号", v: "8", d: "verified · 附 URL 与日期", tone: "b" },
        { k: "图纸储备", v: "4", d: "model · 非量产设计", tone: "g" },
        { k: "本周节点", v: "3", d: "在售 / 预售出货 / 参展页状态", tone: "t" },
        { k: "来源", v: "6", d: "厂商规格页 / 行业媒体 / 经销商", tone: "a" }
      ],
      signals: [
        {
          id: "T-13",
          domain: "elec",
          type: "新品·出货节点",
          title: "Nitehog Viper Gen 2 650 LRF：640×512 / 12µm / NETD<15mK + 集成 LRF + 弹道机",
          fact: "厂商规格页：640×512 非制冷 VOx、12µm 像元、NETD <15 mK、50mm F1.2 锗镜、60 Hz；1× 光学 + 2×/3×/4× 数字变倍；Class 1M 激光测距至 1,200 m；弹道计算机实时 holdover（厂商称 400 m 以上经猎手验证）；3 组独立校准档存机、免复零；镁合金壳体 ≤385 g（不含电池）、18650 ≥5 小时；探测距离 2,100 m。预售自 2026-10-17 起，预期 2026 年 11 月中下旬出货。",
          implication: "『夹片 + 集成 LRF + 弹道机 + 3 组免复零校准档』把机械接口精度要求从『装上去能看』抬到『换机不换点』。我方图纸端应把校准档的重复定位结构作为独立课题，而非只做夹持环。",
          src: "Nitehog USA — thermal scope（页面标注 Posted on 2026-10-14 / 2026-10-22）",
          url: "https://www.nitehogusa.com/tag/thermal-scope/",
          date: "2026-10-22",
          v: "verified",
          caveat: "1,200m 测距、2,100m 探测、400m 以上弹道验证均为厂商口径；预售/出货时间为厂商公告，非独立测试"
        },
        {
          id: "T-14",
          domain: "elec",
          type: "新品",
          title: "DNT HYDRA-LRF HS650R：独立镜 / 夹片 / 手持三模式，12µm ≤18mK",
          fact: "经销商规格：640×512、12µm、NETD ≤18 mK、50 fps、50mm 镜、2.5×–10×；激光测距 5–1,300 yd，配 DNT Ballistic Engine；1024×768 Micro-OLED、50 Hz；IP67、.50 BMG 后坐等级；516 g；QDM150 快拆座。夹片模式装在 LPVO/棱镜镜前，经销商称 rifle-mounted 转 handheld 免复零。",
          implication: "三模式共用一套机壳，说明『夹片座 + 手持基座 + 快拆接口』的通用化设计已经成立。这是我方夹片转接座最直接的规格对标。",
          src: "Nightshade Optics — DNT HYDRA-LRF HS650R 3-in-1 Thermal Scope",
          url: "https://nightshadeoptics.com/product/dnt-hs650r-thermal-scope/",
          date: "2026",
          v: "verified",
          caveat: "免复零为经销商/厂商说明，未见独立复现测试；QDM150 是否随附以官网为准"
        },
        {
          id: "T-15",
          domain: "elec",
          type: "新品",
          title: "GUIDE TB650LS：640×512 / 12µm / 15mK，50mm F0.9，G-Zero 无快门",
          fact: "经销商规格：640×512 VOx、12µm、NETD 15 mK、50mm F0.9、探测至 2,600 m；集成 1,200 m LRF；1920×1080 AMOLED、50 Hz；G-Zero shutterless 减少校准中断；6000 J 后坐；约 485 g；双频 Wi-Fi。",
          implication: "F0.9 大口径与无快门校准是两条明确的硬件路线；对我方而言可借鉴的是『光路口径 → 探测距离』的标注方式，不做探测器与算法。",
          src: "OpticsSpot — GUIDE TB650LS Thermal Clip-On with Rangefinder",
          url: "https://opticspot.eu/?p=16273",
          date: "2026",
          v: "verified",
          caveat: "2,600 m 探测与 6,000 J 后坐为厂商口径"
        },
        {
          id: "T-16",
          domain: "optic",
          type: "新品·价位下放",
          title: "Arken EP-8 1-8×28 FFP：日本 J-ED 玻璃 + 34mm 真 FFP + 出厂预装 QD 座",
          fact: "经销商规格：1–8×、28mm 物镜、34mm 管身、真 FFP；J-ED 氟化物玻璃；0.1 MIL / 0.25 MOA 每格；高低 30 MRAD / 风偏 110 MOA；出瞳距 3.74 in；视场 121.15–14.56 ft@100yd；约 21 oz（0.60 kg）；红光照明含 NV 兼容档；出厂预装 Rigid Precision Mount（34mm，0 MOA）并附 throw lever、翻盖等全套。",
          implication: "『ED 玻璃 + 34mm + 真 FFP + 出厂预装 QD 座 + 全套附件』正在成为 1-8 段的标准包装。若我方做同规格，出厂预装座的对位与包装成本要计入 BOM。",
          src: "Delta Tactical — Arken EP-8 1-8×28 LPVO",
          url: "https://www.deltatactical.com.au/arken-ep-8-1-8x28-lpvo/",
          date: "2026",
          v: "verified",
          caveat: "J-ED 为厂商对玻璃的称谓，未给出具体玻璃牌号"
        },
        {
          id: "T-17",
          domain: "optic",
          type: "新品·价位下放",
          title: "ZeroTech Trace ED 1-10×24 FFP：ED 镜 + 34mm 6061-T6 + Zero Stop",
          fact: "经销商规格：1–10×24 LPVO、ED 镜片、34mm 6061-T6 铝管；RMG-L 照明分划（中央 2 MRAD 分段圆 + 12/3/6/9 粗十字）；锁定高低旋钮带 Zero Stop、 capped 风偏；视差固定 100 yd；出瞳距 3.70 in；长 10.35 in；附可拆 throw lever。",
          implication: "1-10×24 把 ED 与 Zero Stop 压进 34mm 管身，是 LPVO 规格继续外扩的信号；24mm 物镜说明轻量化优先于通光。",
          src: "2 If By Sea Tactical — ZeroTech Optics Trace ED 1-10X24 FFP 34mm MRAD LPVO",
          url: "https://www.2ifbyseatactical.com/?p=126193",
          date: "2026",
          v: "verified",
          caveat: "经销商页面未标注发布日期，按本次检索时页面状态记录"
        },
        {
          id: "T-18",
          domain: "mount",
          type: "结构·归零复现",
          title: "Trijicon Q-LOC：弹簧常驻 + 多后坐耳，单手免工具、保持归零",
          fact: "厂商/经销商规格：6061-T6 铝；Q-LOC 弹簧加载单手免工具安装，旋钮未拧紧仍保持恒定Retention与归零；多组专有后坐耳确保与导轨完全啮合；高度 1.535 in / 1.590 in（另有 1.93 in 版本），匹配标准夹片装置导轨高度；适配 MIL-STD-1913 / NATO 乃至非标与受损导轨；导轨扭矩：仅弹簧张力 12–16 in-lb，可加紧至 44–66 in-lb；环盖 14–16 in-lb。",
          implication: "给出一条可拆解的 QD 结构路径：弹簧常驻张力 + 多后坐耳 + 明确定扭矩区间。我方快拆座图纸的验收指标可据此设定（TORQUE 与 RTZ 分开标注）。",
          src: "Kenzie's Optics — Trijicon Cantilever Mount w/ Trijicon Q-LOC Technology",
          url: "https://www.kenziesoptics.com/product/trijicon-cantilever-mount-w-trijicon-q-loc-technology/",
          date: "2026",
          v: "verified",
          caveat: "归零复现为厂商宣称，未见独立 MOA 数值；扭矩数值按厂商规格页"
        },
        {
          id: "T-19",
          domain: "mount",
          type: "结构·公差",
          title: "LaRue LT204 C.A.N. / QD Auto Lock：可调张力 + 硬阳极 + 双后坐耳",
          fact: "经销商规格：LT204 适配 1in / 34mm 管身、MIL-STD-1913 皮卡汀尼导轨；快拆杆，Easy-click 可调张力（C.A.N. 系统为 patent pending / 部分页面称 patented QD Auto Lock Lever）；6061-T6 铝；MIL-A-8625 Type III 硬阳极；双后坐耳；重约 7 oz。",
          implication: "『张力可调』连续两年出现在高端 QD 座上，说明导轨公差波动是真实使用场景。图纸端应给出『标称 + 可调范围』而非单一配合尺寸。",
          src: "Dirty Bird Industries — LaRue Tactical LT204 C.A.N. SPR 34mm QD Mount",
          url: "https://dirtybirdusa.com/products/larue-tactical-lt204-c-a-n-spr-34mm-qd-mount/",
          date: "2026",
          v: "verified",
          caveat: "专利状态在不同经销商页面表述不一致（patent pending vs patented），需以 USPTO 为准"
        },
        {
          id: "T-20",
          domain: "mount",
          type: "结构·轻量化",
          title: "Monstrum Slim Profile Cantilever：2 英寸前伸 + 5 oz 轻量悬臂座",
          fact: "经销商/评测页规格：30mm 管、皮卡汀尼悬臂座、2 英寸前伸改善出瞳距、快拆免工具、约 5 oz；用轻量化减重孔；30mm 管内用。",
          implication: "前伸量与重量的取舍是可量化的图纸参数；对我方 30mm 产品线是轻量化对标。",
          src: "Scout Solutions Group — Top 12 Best 30mm QD Scope Mounts",
          url: "https://capefearinvestigative.com/best-30mm-qd-scope-mount",
          date: "2026",
          v: "verified",
          caveat: "聚合评测页，非厂商一手规格；第二手来源，仅作方向参考"
        }
      ],
      designs: [
        {
          id: "D-11",
          name: "夹片式热成像三档免复零校准座",
          domain: "mount",
          priority: "P0",
          sourceSignals: ["T-13", "T-14"],
          spec: "在现有夹持环基础上增加 3 组可存储/机械定位的校准档，目标：更换夹片或拆装后无需重新归零。需给出每档重复定位精度指标与后坐保持结构；仅做机械接口，不触碰探测器与弹道算法。",
          status: "model",
          fto: "须检索 Nitehog / DNT 相关免复零校准机构的公开专利，未检索前不得进入样机"
        },
        {
          id: "D-12",
          name: "34mm 真 FFP LPVO + 出厂预装 QD 座一体化方案",
          domain: "optic+mount",
          priority: "P1",
          sourceSignals: ["T-16", "T-17"],
          spec: "34mm 管身、真 FFP、ED/低色散玻璃、Zero Stop；QD 座出厂预装并完成对位。图纸端需给出座与镜的一体化定位基准及包装防护。",
          status: "model",
          fto: "Zero Stop 与 FFP 分划机构已有大量专利，须逐项 FTO"
        },
        {
          id: "D-13",
          name: "QD 座张力可调 + 多后坐耳结构",
          domain: "mount",
          priority: "P0",
          sourceSignals: ["T-18", "T-19"],
          spec: "弹簧常驻张力 + 可调旋钮 + 多后坐耳；图纸标注标称尺寸、可调范围与导轨扭矩区间（参考 12–16 in-lb 弹簧张力档、14–16 in-lb 环盖档）。",
          status: "model",
          fto: "Trijicon Q-LOC 与 LaRue 张力调节机构须做规避设计与 FTO"
        },
        {
          id: "D-14",
          name: "1-10×30 轻量化 LPVO 的 35mm 管身与 6061-T6 方案",
          domain: "optic+mount",
          priority: "P2",
          sourceSignals: ["T-17", "T-20"],
          spec: "35mm/34mm 管身、6061-T6、出瞳距与视场按 1-10 段标注；轻量化减重孔与悬臂前伸量参数化。",
          status: "model",
          fto: "常规结构设计，仍须做外观与实用新型检索"
        }
      ],
      watchlist: [
        { q: "Nitehog Viper Gen2 650 LRF 是否如期在 11 月中下旬出货、是否有第三方实测 NETD 与 RTZ", why: "决定三档免复零结构的对标基准是否可信" },
        { q: "Trijicon Q-LOC 与 LaRue C.A.N. 的美国专利权利要求范围", why: "D-13 进入样机前的 FTO 前置条件" },
        { q: "34mm 真 FFP 1-8/1-10 段的 ED 玻璃牌号与供应稳定性", why: "决定 D-12 是否可做成本方案" }
      ],
      dataNote: "本轮使用公开网络检索（厂商规格页、经销商页面、行业媒体），检索日 2026-11-25。每条信号附 URL 与日期；厂商测试口径、预售/出货时间与经销商二手描述已单独标注 caveat，不与独立测试事实混用。热成像 / 夜视 / 火控类只做通用趋势与机械接口情报，不做受控算法与仿制图纸。"
    },
    {
      date: "2026-11-23",
      weekday: "周一",
      generatedAt: "2026-11-23 11:25 (GMT+8)",
      headline: "SHOT 2026 后续：ED 玻璃下放 + 集成测距/HUD + 热成像 1280 级，接口公差链成图纸落地第一抓手",
      verdict: "本轮检得 12 条可核实技术信号与 3 件 2026 公开专利。对 GUNBASE 最有图纸落地价值的不是整机仿制，而是三件事：ED 光机架构、MIL-STD-1913 快拆座公差链、热成像夹片转接座。三项均已有公开参数可直接进入概念设计，但须先做专利 FTO 与出口合规复核。",
      kpi: [
        { k: "技术信号", v: "12", d: "verified", tone: "b" },
        { k: "图纸储备", v: "6", d: "model", tone: "g" },
        { k: "公开专利", v: "3", d: "verified", tone: "t" },
        { k: "来源", v: "11", d: "verified", tone: "a" }
      ],
      signals: [
        {
          id: "T-01", domain: "optic", type: "新品", title: "Burris Veracity Gen 2 全系换装 ED 玻璃",
          fact: "2.5-12×42 / 3-15×44 / 5-25×50 三个规格；ED 玻璃用于压制色差，厂商称 600 码远距清晰度保持在 90% 以上；Pro Elevation 旋钮在镜内显示归零距离，并提供按弹道定制的旋钮。",
          implication: "ED 玻璃 + 镜内归零显示正在成为中高端狩猎镜标配，是我方光机架构的直接对标。",
          src: "Rocky Mountain Elk Foundation", url: "https://rmef.org/media/burris-veracity-gen-2", date: "2026", v: "verified", caveat: "600 码 90% 为厂商测试口径，需独立验证"
        },
        {
          id: "T-02", domain: "optic", type: "新品", title: "Bushnell R7：ED Prime + EXO Barrier + 弹起锁定归零旋钮",
          fact: "1-8 至 4-20 倍、物镜 24-50mm、30mm 主筒；ED Prime 玻璃配 EXO Barrier 疏水疏油镀膜；FFP 版本带玻璃蚀刻照明分划与 Pop-Up Locking Elevation Turret（含 Zero Stop）；照明 6 小时自动关闭。",
          implication: "Zero Stop 与 6 小时自动断电视为可下放的结构/电路设计点。",
          src: "Tactical Life", url: "https://www.tactical-life.com/gun-gear/sig-sauer-bdx-optics/", date: "SHOT 2026", v: "verified"
        },
        {
          id: "T-03", domain: "optic", type: "新品", title: "Primary Arms PLx Compact 1.5-12×36 FFP RDB",
          fact: "日本 ED 玻璃 + Red Dot Bright 衍射分划，30mm 主筒，长 9.75 英寸、重 19.67 盎司；内调整 100 MOA 高低 / 50 MOA 风偏，视差 10 码至无穷远；SOS 钢对钢旋钮可设开放式或带盖；倒置燕尾变倍杆兼容 UML；AutoLive 运动感应照明。",
          implication: "紧凑 1.5-12×36 是 LPVO 向 MPVO 过渡的规格窗口，衍射分划与 SOS 旋钮值得单独拆解。",
          src: "American Hunter", url: "https://www.americanhunter.org/content/new-for-2026-primary-arms-optics-plx-compact-1-5-12x36", date: "2026", v: "verified"
        },
        {
          id: "T-04", domain: "optic", type: "趋势", title: "行业评论：超玻璃民主化与 Optics-Ready 成基线",
          fact: "行业媒体将 2026 概括为三点：原属 2000 美元以上镜头的德国 Schott ED 玻璃正进入更低价位机壳；集成激光测距与蓝牙同步弹道 App 的 HUD 从军用原型进入民用；新枪出厂普遍预留红点/LPVO 安装接口。材料上出现碳纤维枪管与钛合金/7075-T6 轻量化镜座。",
          implication: "这是一手产品新闻之外的行业评论，作为方向判断使用，不作为规格事实。",
          src: "Hunting Magazine", url: "https://huntingmagazine.net/the-2026-gear-shift-industry-trends-and-the-dawn-of-the-thor-era", date: "2026", v: "verified", caveat: "行业评论，非独立测试数据"
        },
        {
          id: "T-05", domain: "optic", type: "专利", title: "JP2026092547A 内调焦等焦距瞄准镜",
          fact: "DEON OPTICAL DESIGN CORP 申请，2026-06-05 公开。固定镜组焦距设为无穷远，使入射调焦组的光束平行于光轴；调焦组沿光轴移动时物镜系统焦距保持恒定，分划刻度与重力/风偏修正量不随对焦距离变化。",
          implication: "解决了传统内调焦改变分划比例的问题。我方若采用同类机构须做规避设计与 FTO 检索。",
          src: "PatSnap Eureka", url: "https://eureka.patsnap.com/patent/JP2026092547A", date: "2026-06-05", v: "verified"
        },
        {
          id: "T-06", domain: "optic", type: "专利", title: "WO2026007265A1 昼夜快速切换镜头机构",
          fact: "在主物镜组与目镜组之间设置可移动切换组件，承载分划板与夜视组件：第一状态分划板入光轴，第二状态夜视组件入光轴；配第一/第二补偿镜使两种状态下焦面分别与物镜像方焦面、目镜物方焦面重合，实现白光/夜视切换而免重新校零。",
          implication: "给出了一条白光+夜视共机壳的机构路径，图纸端可研究切换重复定位精度。",
          src: "Google Patents", url: "https://patents.google.com/patent/WO2026007265", date: "2026", v: "verified"
        },
        {
          id: "T-07", domain: "optic", type: "专利", title: "US20260219490A1 测距与弹道显示光学瞄具",
          fact: "公开的光路含物镜组、分光棱镜组、图像旋转镜组、数字分划板与目镜组同轴；物镜前表面镀 905nm 增透膜、后表面镀 400-760nm 增透膜，分光棱镜斜面镀 905nm 全反膜，用以同时透过可见光与激光测距光路。",
          implication: "双波段镀膜标注方式是集成 LRF 光机图纸的关键细节。",
          src: "Google Patents", url: "https://patents.google.com/patent/US20260219490A1/en", date: "2026", v: "verified"
        },
        {
          id: "T-08", domain: "mount", type: "标准", title: "MIL-STD-1913 与 STANAG 4694 接口尺寸链",
          fact: "MIL-STD-1913（1995）控制尺寸：顶宽约 21.2mm、横槽宽 5.23-5.26mm、槽深约 3.00mm、槽中心距 10.01mm、侧面 45°。STANAG 4694（2009 NATO）保持标称尺寸但收紧槽宽与槽距公差，并加严边缘几何与全长一致性。标准本身不规定材料与表面处理。",
          implication: "这是快拆座图纸最容易直接落地、也最容易被忽略公差预算的部分。",
          src: "Redstone Manufacturing", url: "https://redstonemanufacturing.com/resources/articles/rifle-scope-mount-manufacturer", date: "2026", v: "verified"
        },
        {
          id: "T-09", domain: "mount", type: "工程", title: "6061-T6 vs 7075-T6 与硬阳极对公差的影响",
          fact: "6061-T6 屈服约 276MPa、7075-T6 约 503MPa（高约 80%）；Type III 硬阳极按 MIL-PRF-8625 名义 0.002 英寸，约一半向外生长、一半渗入，每面增加约 0.001 英寸——内孔若不留阳极前余量会偏小；硬阳极对部分高强合金可造成 30-50% 疲劳折减。",
          implication: "镜环内孔与螺纹必须在图纸上写明阳极前尺寸与镀后检验尺寸。",
          src: "Redstone Manufacturing", url: "https://redstonemanufacturing.com/resources/articles/rifle-scope-mount-manufacturer", date: "2026", v: "verified"
        },
        {
          id: "T-10", domain: "mount", type: "工程", title: "快拆座归零复现指标",
          fact: "优质皮卡汀尼快拆座在反复拆装后的弹着点漂移通常小于约 1 MOA；更大漂移通常指向槽几何磨损或超差。横销必须坐进横槽而不是压在顶面，才能抵抗后坐造成的纵向移动。",
          implication: "RTZ <1 MOA 可作为我方快拆座图纸的验收指标。",
          src: "Redstone Manufacturing", url: "https://redstonemanufacturing.com/resources/articles/rifle-scope-mount-manufacturer", date: "2026", v: "verified"
        },
        {
          id: "T-11", domain: "tactical", type: "新品", title: "AGM AdderV2 LRF 60-1280：1280 级热成像 + 1000m 测距",
          fact: "SHOT Show 2026 展品：1280×1024 热成像分辨率、集成 1000 米激光测距、2560×2560 显示、60mm 镜头约 2.5× 基础放大、30mm 主筒、配 American Defense Manufacturing 一体座，标价 7495 美元。",
          implication: "热成像进入 1280 级 + 集成测距，标志电子融合的旗舰方向。",
          src: "SHOT Show", url: "https://shotshow.org/new-optics-coming-in-2026/", date: "2026", v: "verified"
        },
        {
          id: "T-12", domain: "tactical", type: "新品", title: "夹片式热成像与 AI 图像增强成为独立品类",
          fact: "ATN TICO LTV 640 为 12 微米传感器夹片系统，可把白光镜快速转为热成像；Armasight Contractor 热瞄采用 ArmaCore 640 Gen 4 A-SWaP、1.8GHz 四核 GPU + AI 神经处理单元、1920×1080 HDR、H.265、USB-C、IP67 与重后坐测试。",
          implication: "夹片转接座是我方最有机会切入的机械件，电子部分外购、接口自研。",
          src: "SHOT Show", url: "https://shotshow.org/new-optics-coming-in-2026/", date: "2026", v: "verified" }
      ],

      // ===== 图纸端设计储备（工程推演，非量产）=====
      designs: [
        {
          id: "DR-01", name: "30mm 快拆镜座（QD Mount）", domain: "mount", priority: "P0", status: "概念设计",
          basis: ["T-08", "T-09", "T-10"],
          input: "MIL-STD-1913 顶宽 21.2mm / 槽宽 5.23-5.26mm / 槽距 10.01mm / 槽深 3.00mm / 侧面 45°；RTZ 目标 <1 MOA。",
          drawing: [
            "横销与横槽配合：销径按槽宽下偏差配作，确保坐入槽内而非压顶面",
            "槽距 10.01mm 累积公差预算，夹爪跨 2-3 槽定位",
            "夹持环内孔：30.00mm 名义，标注阳极前尺寸与镀后尺寸，每面预留约 0.025mm 生长量",
            "材料 7075-T6；高应力区避开 Type III 硬阳极以避免疲劳折减，或改用 Type II",
            "快拆拉杆预载与锁止面：给出拆装力区间与 1000 次循环后的 RTZ 检验"
          ],
          verify: "样件上机做 1000 次拆装 + 后坐模拟，测弹着点漂移是否 <1 MOA。",
          gate: "先做专利 FTO；标准文本以 MIL-STD-1913 / STANAG 4694 正式版本为准。",
          v: "model"
        },
        {
          id: "DR-02", name: "热成像夹片转接座（Clip-on Adapter）", domain: "mount", priority: "P0", status: "预研",
          basis: ["T-11", "T-12"],
          input: "12 微米热成像夹片（如 ATN TICO 类）需前置在白光镜物镜前；重后坐环境需维持同轴与免重归零。",
          drawing: [
            "前后夹持环同轴度：建议按 0.05mm 以内设图纸要求",
            "快拆重复定位：定位销 + 锥面，目标是复装后不重新校零",
            "适配直径范围：覆盖主流 30/34/36mm 物镜外径的快换环",
            "重量与重心：控制在白光镜前端不过载，验算挠度",
            "表面处理：黑色阳极 + 消光，降低热成像杂光反射"
          ],
          verify: "与至少两款市售夹片装配，测同轴度、复装归零与后坐后位移。",
          gate: "热成像整机受出口管制；我方只做机械转接件，不碰传感器与算法。",
          v: "model"
        },
        {
          id: "DR-03", name: "内调焦等焦距光机机构", domain: "optic", priority: "P1", status: "技术跟踪",
          basis: ["T-05"],
          input: "公开专利 JP2026092547A 提出固定组 f=∞ + 移动调焦组，使分划刻度不随对焦距离变化。",
          drawing: [
            "固定组焦距与平行入射条件的光机计算",
            "调焦组行程与最近对焦距离的关系曲线",
            "凸轮/导轨槽与调焦手轮传动比",
            "分划板焦面位置公差与温漂补偿"
          ],
          verify: "用光学设计软件复算焦距恒定性，再做样机分划比例实测。",
          gate: "该专利 2026 公开，须做 FTO 与规避设计评审后才可进入详细设计。",
          v: "model"
        },
        {
          id: "DR-04", name: "集成 LRF + HUD 显示模块结构", domain: "tactical", priority: "P2", status: "技术跟踪",
          basis: ["T-04", "T-07", "T-11"],
          input: "集成测距与 HUD 是 2026 旗舰方向；公开专利给出 905nm / 400-760nm 双波段镀膜与分光棱镜同轴光路。",
          drawing: [
            "分光棱镜 45° 斜面全反膜与可见光增透的镀膜标注",
            "MicroOLED 显示组件安装基准与目镜共轴调整机构",
            "905nm 激光发射/接收光路的隔离与杂散光抑制",
            "IP67 密封、电池仓与散热路径"
          ],
          verify: "光机联调测分划清晰度、测距串扰与密封等级。",
          gate: "电子与算法外购、合规渠道；本项只做结构储备，不做火控算法。",
          v: "model"
        },
        {
          id: "DR-05", name: "昼夜快速切换分划/夜视机构", domain: "optic", priority: "P2", status: "技术跟踪",
          basis: ["T-06"],
          input: "WO2026007265A1 公开切换组件 + 补偿镜方案，实现白光/夜视共机壳切换免重校零。",
          drawing: [
            "切换组件直线/旋转导轨与重复定位精度",
            "第一/第二补偿镜与切换状态的联动机构",
            "分划板与夜视组件焦面切换的公差链",
            "密封与防尘结构"
          ],
          verify: "测切换 1000 次后的分划位置重复性与焦面一致性。",
          gate: "须做 FTO；夜视部件进口与出口均受管制。",
          v: "model"
        },
        {
          id: "DR-06", name: "轻量化镜体材料与工艺对照表", domain: "mount", priority: "P1", status: "预研",
          basis: ["T-04", "T-09"],
          input: "行业出现钛合金/7075-T6 镜座与碳纤维枪管；6061-T6 与 7075-T6 强度差约 80%，加工与阳极表现不同。",
          drawing: [
            "6061-T6 / 7075-T6 / 钛合金的壁厚-重量-强度对照",
            "热膨胀系数差异对光机焦面的影响",
            "阳极类型（Type II / Type III）与疲劳折减的取舍",
            "成本与供应链可得性评估"
          ],
          verify: "做材料样件称重、刚性与温漂对比测试。",
          gate: "材料替代须经工程评审，不因减重牺牲归零稳定性。",
          v: "model"
        }
      ],

      watchlist: [
        "SHOT 2026 展品参数多为展前预览，量产版规格可能变化，需持续核对厂商正式规格书。",
        "XM157 NGSW-FC 等军用火控项目只做技术趋势情报，不做仿制或图纸储备（ITAR/出口合规）。",
        "三项 2026 公开专利的法律状态与权利要求范围未做 FTO 检索，任何设计落地前必须补做。"
      ],
      dataNote: "本轮使用公开网络检索（展会官方、行业媒体、厂商规格页、Google Patents / PatSnap）。每条信号附 URL 与日期；行业评论与厂商测试口径已单独标注，不与独立测试事实混用。"
    }
  ],

  // ===== 检索来源（MLA）=====
  sources: [
    { t: "Shooting News Weekly", ttl: "Sightron S6 5-30x56 ED IR Riflescopes With A New Lockable Turret", u: "https://www.shootingnewsweekly.com/optics/sightron-s6-5-30x56-ed-ir-riflescopes-with-a-new-lockable-turret", y: "2026-11-24", mla: "Luke C. \"Sightron S6 5-30×56 ED IR Riflescopes With A New Lockable Turret.\" Shooting News Weekly, 24 Nov. 2026." },
    { t: "Gun USA All Day", ttl: "Leupold's LCO Pro F2 Holds Zero Through 600 Rounds in Carbine Class", u: "https://gunusaallday.com/leupolds-lco-pro-f2-holds-zero-through-600-rounds-in-carbine-class", y: "2026-11-23", mla: "\"Leupold's LCO Pro F2 Holds Zero Through 600 Rounds in Carbine Class.\" Gun USA All Day, 23 Nov. 2026." },
    { t: "American Rifleman", ttl: "New for 2026: Pulsar Thermion 3 Riflescope", u: "https://www.americanrifleman.org/content/new-for-2026-pulsar-thermion-3-riflescope", y: "2026-11-10", mla: "American Rifleman Staff. \"New for 2026: Pulsar Thermion 3 Riflescope.\" American Rifleman, 10 Nov. 2026." },
    { t: "Patents-Review", ttl: "US 2026/0309463 A1 - Optical Sight Mounting System", u: "https://www.patents-review.com/a/20260309463-optical-sight-mounting-system.html", y: "2026-10-08", mla: "Patents-Review. \"US 2026/0309463 A1 - Optical Sight Mounting System.\" Patents-Review, 8 Oct. 2026." },
    { t: "Patents.us", ttl: "US 12,674,639 - Quick Attach and Detach Mount", u: "https://patents.us/US12674639", y: "2026-07-07", mla: "Patents.us. \"US 12,674,639 - Quick Attach and Detach Mount for Firearms and Other Objects.\" Patents.us, 7 July 2026." },
    { t: "Google Patents", ttl: "EP4733707A1 - Optical sight and information display method", u: "https://patents.google.com/patent/EP4733707A1/en", y: "2026-04-29", mla: "Google Patents. \"EP4733707A1 - Optical Sight and Information Display Method.\" EPO, 29 Apr. 2026." },
    { t: "Soldier Systems Daily", ttl: "Picatinny - How It Really Works!", u: "https://soldiersystems.net/?p=260070/", y: "2026-02-16", mla: "Spuhr. \"Picatinny - How It Really Works!\" Soldier Systems Daily, 16 Feb. 2026." },
    { t: "FirearmAI", ttl: "Scalarworks Announces All-New LEAP/08 30mm Quick-Detach Scope Mounts", u: "https://firearmai.com/tactical-gear/scalarworks-announces-all-new-leap-08-30mm-quick-detach-scope-mounts", y: "2026-09-17", mla: "FirearmAI Staff. \"Scalarworks Announces All-New LEAP/08 30mm Quick-Detach Scope Mounts.\" FirearmAI, 17 Sept. 2026." },
    { t: "American Rifleman", ttl: "Rifleman Review: Leupold VX-5HD Gen 2 Riflescopes", u: "https://www.americanrifleman.org/content/rifleman-review-leupold-vx-5hd-gen-2-riflescopes", y: "2026-11-18", mla: "American Rifleman Staff. \"Rifleman Review: Leupold VX-5HD Gen 2 Riflescopes.\" American Rifleman, 18 Nov. 2026." },
    { t: "Grand View Outdoors", ttl: "Pulsar Trail 3 LRF XR50 Thermal Riflescope", u: "https://www.grandviewoutdoors.com/product-profile/pulsar-trail-3-lrf-xr50-thermal-riflescope", y: "2026-02-16", mla: "Krahn, Gordy. \"Pulsar Trail 3 LRF XR50 Thermal Riflescope.\" Grand View Outdoors, 16 Feb. 2026." },
    { t: "PR Newswire", ttl: "HIKMICRO Launches X-1280 STELLAR 4.0 and THUNDER 4.0", u: "https://www.prnewswire.co.uk/news-releases/when-seeing-becomes-knowing-hikmicro-launches-x-1280-stellar-4-0-and-thunder-4-0-for-the-moments-that-demand-certainty-302920482.html", y: "2026-10-27", mla: "PR Newswire. \"When Seeing Becomes Knowing: HIKMICRO Launches X-1280 STELLAR 4.0 and THUNDER 4.0.\" The News This Week, 27 Oct. 2026." },
    { t: "GunReleases", ttl: "New Optics 2026 & 2027: Release Dates & Prices", u: "https://gunreleases.com/optics", y: "2026-11-25", mla: "The Release Desk. \"New Optics 2026 & 2027: Release Dates & Prices.\" GunReleases, updated 25 Nov. 2026." },
    { t: "Kenzie's Optics", ttl: "Scalarworks LEAP 08 3rd Generation 30mm Scope Mount - 1.57 inch", u: "https://www.kenziesoptics.com/product/scalarworks-leap-08-qd-30mm-157", y: "2026", mla: "Kenzie's Optics. \"Scalarworks LEAP 08 3rd Generation 30mm Scope Mount - 1.57 inch.\" Kenzie's Optics, 2026." },
    { t: "Google Patents", ttl: "WO2026006282A1 - Optical sight turret system", u: "https://patents.google.com/patent/WO2026006282A1/en", y: "2026-01-02", mla: "Google Patents. \"WO2026006282A1 - Optical sight turret system.\" WIPO, 2 Jan. 2026." },
    { t: "Patents.us", ttl: "US12693097 - Fast Mounting Device for Multiple Slot Interfaces", u: "https://patents.us/US12693097", y: "2026-07-28", mla: "Patents.us. \"US12693097 - Fast Mounting Device for Multiple Slot Interfaces.\" Patents.us, 28 July 2026." },
    { t: "VENARI Jagd", ttl: "HIKMICRO Thunder TQ35CL 4.0 thermal imaging attachment", u: "https://www.venari-jagdtechnik.de/en/produkt/hikmicro-thunder-tq35cl-4-0/", y: "2026-11", mla: "VENARI Jagd. \"HIKMICRO Thunder TQ35CL 4.0 thermal imaging attachment.\" VENARI Jagd, 2026." },
    { t: "American Hunter", ttl: "New for 2026: Primary Arms Optics PLx Compact 1.5-12x36", u: "https://www.americanhunter.org/content/new-for-2026-primary-arms-optics-plx-compact-1-5-12x36", y: "2026" },
    { t: "Google Patents", ttl: "US20260219490A1 - Ranging and ballistic display optical sight", u: "https://patents.google.com/patent/US20260219490A1/en", y: "2026" },
    { t: "Google Patents", ttl: "WO2026007265A1 - 一种镜头机构及瞄准镜", u: "https://patents.google.com/patent/WO2026007265", y: "2026" },
    { t: "Hunting Magazine", ttl: "The 2026 Gear Shift: Industry Trends and the Dawn of the Thor Era", u: "https://huntingmagazine.net/the-2026-gear-shift-industry-trends-and-the-dawn-of-the-thor-era", y: "2026" },
    { t: "PatSnap Eureka", ttl: "JP2026092547A - Sighting scopes and rifle scopes", u: "https://eureka.patsnap.com/patent/JP2026092547A", y: "2026" },
    { t: "Redstone Manufacturing", ttl: "Rifle Scope Mount Manufacturer: Who Makes Mounts and How", u: "https://redstonemanufacturing.com/resources/articles/rifle-scope-mount-manufacturer", y: "2026" },
    { t: "Rocky Mountain Elk Foundation", ttl: "Burris Veracity Gen 2", u: "https://rmef.org/media/burris-veracity-gen-2", y: "2026" },
    { t: "SHOT Show", ttl: "New Optics Coming in 2026", u: "https://shotshow.org/new-optics-coming-in-2026/", y: "2026" },
    { t: "Tactical Life", ttl: "SHOT 2026: Optics Round Up", u: "https://www.tactical-life.com/gun-gear/sig-sauer-bdx-optics/", y: "2026" },
    { t: "Patents-Review", ttl: "US 2026/0341187 A1 - Scope Turret", u: "https://www.patents-review.com/a/20260341187-scope-turret.html", y: "2026-10-29", mla: "Patents-Review. \"US 2026/0341187 A1 - Scope Turret.\" Patents-Review, 29 Oct. 2026." },
    { t: "The Firearm Blog", ttl: "NEW Range of Vortex Pro Cantilever Mounts", u: "https://www.thefirearmblog.com/blog/new-range-of-vortex-pro-cantilever-mounts-44831455", y: "2026-11-17", mla: "Daniel Y. \"NEW Range of Vortex Pro Cantilever Mounts.\" The Firearm Blog, 17 Nov. 2026." },
    { t: "Nocpix USA", ttl: "Introducing the Nocpix ACE 2", u: "https://nocpixusa.com/blogs/news/introducing-the-nocpix-ace-2-next-generation-thermal-riflescopes-built-for-the-night-hunter", y: "2026-11-16", mla: "Wheatley, Jeremy. \"Introducing the Nocpix ACE 2: Next-Generation Thermal Riflescopes Built for the Night Hunter.\" Nocpix USA, 16 Nov. 2026." },
    { t: "The Firearm Blog", ttl: "TFB Review: Arken EP8 1-8x28 Scopes", u: "https://www.thefirearmblog.com/blog/tfb-review-arken-ep8-1-8x28-scopes-44831518", y: "2026-11-19", mla: "Daniel Y. \"TFB Review: Arken EP8 1-8×28 Scopes.\" The Firearm Blog, 19 Nov. 2026." },
    { t: "Patents-Review", ttl: "US 2026/0309463 A1 claims - Optical Sight Mounting System", u: "https://www.patents-review.com/a/20260309463-optical-sight-mounting-system.html", y: "2026-10-08", mla: "Patents-Review. \"US 2026/0309463 A1 - Optical Sight Mounting System.\" Patents-Review, 8 Oct. 2026." },
    { t: "Google Patents", ttl: "US12674639B2 - Quick Attach and Detach Mount", u: "https://patents.google.com/patent/US12674639B2/en", y: "2026-07-07", mla: "Google Patents. \"US12674639B2 - Quick Attach and Detach Mount for Firearms and Other Objects.\" Google Patents, 7 July 2026." },
    { t: "Google Patents", ttl: "EP4733707A1 claims - Optical sight and information display method", u: "https://patents.google.com/patent/EP4733707A1/en", y: "2026-04-29", mla: "Google Patents. \"EP4733707A1 - Optical Sight and Information Display Method.\" EPO, 29 Apr. 2026." },
    { t: "Google Patents", ttl: "WO2026006282A1 claims - Optical sight turret system", u: "https://patents.google.com/patent/WO2026006282A1/en", y: "2026-01-02", mla: "Google Patents. \"WO2026006282A1 - Optical Sight Turret System.\" WIPO, 2 Jan. 2026." },
    { t: "Patents.us", ttl: "US12693097 claims - Fast Mounting Device for Multiple Slot Interfaces", u: "https://patents.us/US12693097", y: "2026-07-28", mla: "Patents.us. \"US12693097 - Fast Mounting Device for Multiple Slot Interfaces.\" Patents.us, 28 July 2026." },
  ],

  guardrails: [
    "事实与推演分列：技术信号必须附可核实 URL 与日期；图纸储备是基于事实的工程推演，不冒充已量产设计。",
    "专利红线：2026 公开专利仅作技术情报，任何设计落地前必须做自由实施（FTO）检索与规避设计评审。",
    "出口合规：热成像、夜视、火控等受管制品类只做通用技术趋势与机械接口情报，不做仿制图纸、不碰受控算法。",
    "本页不写入任何真实邮箱、密码、Token 或客户个人信息；桌面资料夹只存公开技术资料。",
    "厂商测试口径与行业评论单独标注，不与独立测试事实混用；展前预览规格需量产版复核。"
  ]
};
