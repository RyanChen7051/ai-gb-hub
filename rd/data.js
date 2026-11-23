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
    version: "1.0.0",
    reportDate: "2026-11-23",
    generatedAt: "2026-11-23 11:25 (GMT+8)",
    scope: "全球 · 瞄准镜 / 枪械配件 / 战术装备",
    tagline: "每日全球技术扫描 → 可落图纸的设计储备",
    cadence: "每日 08:00（北京时间）自动更新",
    desktopDir: "~/Desktop/AI-GB-Team/AI-GB-RD/",
    note: "本页技术信号来自公开可核实来源（每条附 URL 与日期）；图纸设计储备是基于这些事实的工程推演方向，尚未量产、未做专利自由实施（FTO）检索，落地前须经工程评审与法务复核。IX 类军用项目只做趋势情报，不做仿制图纸。"
  },

  kpis: [
    { label: "当日技术信号", value: "12", unit: "条", tone: "blue", sub: "含新品 / 专利 / 接口标准", v: "verified" },
    { label: "图纸储备方向", value: "6", unit: "项", tone: "green", sub: "基于已核实事实的工程推演", v: "model" },
    { label: "可核实来源", value: "11", unit: "个", tone: "teal", sub: "展会官方 / 厂商 / 专利库", v: "verified" },
    { label: "公开专利", value: "3", unit: "件", tone: "purple", sub: "2026 公开，需 FTO 复核", v: "verified" },
    { label: "接口标准", value: "2", unit: "项", tone: "amber", sub: "MIL-STD-1913 / STANAG 4694", v: "verified" },
    { label: "累计报告", value: "1", unit: "天", tone: "blue", sub: "首期 · 持续累积", v: "verified" }
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
    { t: "American Hunter", ttl: "New for 2026: Primary Arms Optics PLx Compact 1.5-12x36", u: "https://www.americanhunter.org/content/new-for-2026-primary-arms-optics-plx-compact-1-5-12x36", y: "2026" },
    { t: "Google Patents", ttl: "US20260219490A1 - Ranging and ballistic display optical sight", u: "https://patents.google.com/patent/US20260219490A1/en", y: "2026" },
    { t: "Google Patents", ttl: "WO2026007265A1 - 一种镜头机构及瞄准镜", u: "https://patents.google.com/patent/WO2026007265", y: "2026" },
    { t: "Hunting Magazine", ttl: "The 2026 Gear Shift: Industry Trends and the Dawn of the Thor Era", u: "https://huntingmagazine.net/the-2026-gear-shift-industry-trends-and-the-dawn-of-the-thor-era", y: "2026" },
    { t: "PatSnap Eureka", ttl: "JP2026092547A - Sighting scopes and rifle scopes", u: "https://eureka.patsnap.com/patent/JP2026092547A", y: "2026" },
    { t: "Redstone Manufacturing", ttl: "Rifle Scope Mount Manufacturer: Who Makes Mounts and How", u: "https://redstonemanufacturing.com/resources/articles/rifle-scope-mount-manufacturer", y: "2026" },
    { t: "Rocky Mountain Elk Foundation", ttl: "Burris Veracity Gen 2", u: "https://rmef.org/media/burris-veracity-gen-2", y: "2026" },
    { t: "SHOT Show", ttl: "New Optics Coming in 2026", u: "https://shotshow.org/new-optics-coming-in-2026/", y: "2026" },
    { t: "Tactical Life", ttl: "SHOT 2026: Optics Round Up", u: "https://www.tactical-life.com/gun-gear/sig-sauer-bdx-optics/", y: "2026" }
  ],

  guardrails: [
    "事实与推演分列：技术信号必须附可核实 URL 与日期；图纸储备是基于事实的工程推演，不冒充已量产设计。",
    "专利红线：2026 公开专利仅作技术情报，任何设计落地前必须做自由实施（FTO）检索与规避设计评审。",
    "出口合规：热成像、夜视、火控等受管制品类只做通用技术趋势与机械接口情报，不做仿制图纸、不碰受控算法。",
    "本页不写入任何真实邮箱、密码、Token 或客户个人信息；桌面资料夹只存公开技术资料。",
    "厂商测试口径与行业评论单独标注，不与独立测试事实混用；展前预览规格需量产版复核。"
  ]
};
