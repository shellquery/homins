import { Question } from "./questions";

export const questionsPart3: Question[] = [
  // ========== INSULATION (341-350) ==========
  {
    id: 341,
    question: "What is the primary function of a radiant barrier in a California attic?",
    options: [
      "To reflect radiant heat and reduce cooling costs",
      "To absorb moisture from the attic space",
      "To prevent air infiltration through the roof deck",
      "To add structural support to the rafters",
    ],
    correctAnswer: 0,
    explanation:
      "辐射屏障的主要功能是反射辐射热，减少夏季制冷成本。在加州炎热的气候中，辐射屏障安装在阁楼中可以有效降低阁楼温度，从而减少空调的使用。",
    category: "insulation",
  },
  {
    id: 342,
    question:
      "When inspecting duct insulation in a crawl space, what minimum R-value is typically required for supply ducts in California?",
    options: ["R-2", "R-4.2", "R-6", "R-8"],
    correctAnswer: 3,
    explanation:
      "在加州，爬行空间和阁楼中的供气管道通常要求最低R-8的保温值。这有助于减少能量损失，提高暖通空调系统的效率。",
    category: "insulation",
  },
  {
    id: 343,
    question:
      "Which type of window film is most effective at reducing solar heat gain in a hot California climate?",
    options: [
      "Clear safety film",
      "Low-emissivity (Low-E) reflective film",
      "Decorative frosted film",
      "Anti-glare matte film",
    ],
    correctAnswer: 1,
    explanation:
      "低辐射（Low-E）反射膜在减少太阳热增益方面最为有效。它能反射红外辐射，同时允许可见光通过，适合加州炎热气候下的窗户隔热。",
    category: "insulation",
  },
  {
    id: 344,
    question:
      "California has how many climate zones used to determine insulation requirements under Title 24?",
    options: ["8", "12", "16", "20"],
    correctAnswer: 2,
    explanation:
      "加州Title 24能源法规将全州划分为16个气候区，每个气候区有不同的保温和节能要求。检查员应了解所检查房屋所在的气候区及其相应要求。",
    category: "insulation",
  },
  {
    id: 345,
    question:
      "What is a potential problem with installing a powered attic fan in a home with combustion appliances?",
    options: [
      "It may cause excessive humidity in the attic",
      "It can create negative pressure and back-draft combustion gases into the home",
      "It will overload the electrical circuit",
      "It prevents proper roof ventilation",
    ],
    correctAnswer: 1,
    explanation:
      "动力阁楼排风扇可能在房屋内产生负压，导致燃烧设备（如热水器、炉子）的废气倒流进入室内，造成一氧化碳中毒的危险。这是检查时需要特别注意的安全问题。",
    category: "insulation",
  },
  {
    id: 346,
    question:
      "A whole-house fan should NOT be operated when which condition exists?",
    options: [
      "The outdoor temperature is below 85°F",
      "Windows are closed throughout the house",
      "The indoor humidity is above 50%",
      "The house has a tile roof",
    ],
    correctAnswer: 1,
    explanation:
      "全屋风扇在所有窗户关闭时不应运行，因为这会在房屋内产生过大的负压，可能损坏管道系统、导致燃气设备废气倒流，并对天花板造成结构压力。使用时必须打开窗户。",
    category: "insulation",
  },
  {
    id: 347,
    question:
      "When inspecting radiant barrier installation, which orientation is most effective?",
    options: [
      "Laid flat on the attic floor over insulation",
      "Stapled to the underside of roof rafters with the foil facing down",
      "Wrapped around HVAC ductwork",
      "Installed vertically between wall studs",
    ],
    correctAnswer: 1,
    explanation:
      "将辐射屏障钉在椽条底部、铝箔面朝下是最有效的安装方式。这种安装方式使屏障能够反射从屋顶传入的辐射热，且不易积灰影响性能。",
    category: "insulation",
  },
  {
    id: 348,
    question:
      "What is the recommended minimum clearance between recessed light fixtures and blown-in insulation if the fixture is not IC-rated?",
    options: ["1 inch", "3 inches", "6 inches", "12 inches"],
    correctAnswer: 1,
    explanation:
      "非IC额定（非绝缘接触额定）的嵌入式灯具与吹入式保温材料之间应保持至少3英寸的间距，以防止过热和火灾风险。IC额定灯具则允许与保温材料直接接触。",
    category: "insulation",
  },
  {
    id: 349,
    question:
      "During a home inspection in California Climate Zone 10 (Riverside area), what is the primary insulation concern?",
    options: [
      "Preventing heat loss in winter only",
      "Managing extreme summer heat gain while maintaining winter comfort",
      "Preventing moisture condensation from fog",
      "Protecting against freeze damage to pipes",
    ],
    correctAnswer: 1,
    explanation:
      "加州气候区10（Riverside地区）属于内陆炎热干燥气候，主要保温关注点是在夏季高温条件下减少热量增益，同时在冬季保持舒适度。该地区夏季温度经常超过100°F。",
    category: "insulation",
  },
  {
    id: 350,
    question:
      "What deficiency should an inspector note if duct insulation in an unconditioned attic has a torn or missing vapor barrier?",
    options: [
      "Increased noise from the HVAC system",
      "Condensation forming on the duct surface leading to moisture damage",
      "Reduced airflow in the duct system",
      "Electrical hazard from exposed metal ducts",
    ],
    correctAnswer: 1,
    explanation:
      "管道保温层的蒸汽屏障破损或缺失会导致冷凝水在管道表面形成，可能造成霉菌生长、木材腐烂和保温材料性能下降等湿气损害问题。",
    category: "insulation",
  },

  // ========== INTERIOR (351-400) ==========
  {
    id: 351,
    question:
      "During an interior inspection, what does a diagonal crack at the corner of a window or door typically indicate?",
    options: [
      "Normal settling that requires no further evaluation",
      "Differential foundation settlement or structural movement",
      "Poor paint application technique",
      "Damage from window installation",
    ],
    correctAnswer: 1,
    explanation:
      "门窗角落的对角裂缝通常表示差异沉降或结构移动。这种裂缝模式是由于不均匀的基础沉降导致的应力集中造成的，应建议进一步评估。",
    category: "interior",
  },
  {
    id: 352,
    question:
      "What is the minimum ceiling height required for habitable rooms in California?",
    options: [
      "6 feet 8 inches",
      "7 feet",
      "7 feet 6 inches",
      "8 feet",
    ],
    correctAnswer: 2,
    explanation:
      "加州建筑规范要求可居住房间的最低天花板高度为7英尺6英寸（约2.3米）。浴室、走廊和洗衣房等非居住空间可以有较低的天花板高度。",
    category: "interior",
  },
  {
    id: 353,
    question:
      "When inspecting a stairway, what is the maximum allowable riser height per California building code?",
    options: [
      "7 inches",
      "7-3/4 inches",
      "8 inches",
      "8-1/4 inches",
    ],
    correctAnswer: 1,
    explanation:
      "加州建筑规范规定楼梯踏步的最大允许高度为7-3/4英寸（约19.7厘米）。超过此高度的踏步会增加跌倒风险，应在检查报告中记录。",
    category: "interior",
  },
  {
    id: 354,
    question:
      "What is the minimum tread depth for residential stairs in California?",
    options: ["9 inches", "10 inches", "11 inches", "12 inches"],
    correctAnswer: 1,
    explanation:
      "加州住宅楼梯踏板最小深度为10英寸（约25.4厘米）。踏板深度不足会导致脚部无法完全踩踏，增加跌倒风险。",
    category: "interior",
  },
  {
    id: 355,
    question:
      "What is the required handrail height for residential stairs in California?",
    options: [
      "30 to 34 inches",
      "34 to 38 inches",
      "36 to 42 inches",
      "42 to 48 inches",
    ],
    correctAnswer: 1,
    explanation:
      "加州住宅楼梯扶手高度要求为34至38英寸（约86至97厘米），从楼梯踏板前缘垂直测量到扶手顶部。",
    category: "interior",
  },
  {
    id: 356,
    question:
      "At what height above a walking surface are guardrails required in California?",
    options: [
      "24 inches",
      "30 inches",
      "36 inches",
      "42 inches",
    ],
    correctAnswer: 1,
    explanation:
      "当行走面高于相邻地面30英寸（约76厘米）或以上时，加州建筑规范要求安装护栏。这适用于阳台、平台、走廊和楼梯的开放侧面。",
    category: "interior",
  },
  {
    id: 357,
    question:
      "What is the minimum required height of a residential guardrail in California?",
    options: ["34 inches", "36 inches", "42 inches", "48 inches"],
    correctAnswer: 2,
    explanation:
      "加州住宅护栏的最低要求高度为42英寸（约107厘米）。护栏栏杆之间的间距不应允许4英寸直径的球体通过，以防止儿童穿过。",
    category: "interior",
  },
  {
    id: 358,
    question:
      "When inspecting interior walls, what does a bulging wall section most likely indicate?",
    options: [
      "Normal expansion from humidity changes",
      "Water damage or structural failure behind the wall",
      "Extra insulation was added inside the wall",
      "The wall was recently repainted",
    ],
    correctAnswer: 1,
    explanation:
      "墙壁鼓起通常表明墙后存在水损害或结构问题。可能的原因包括水管漏水、框架腐烂或承重墙的结构失效。应建议进一步调查。",
    category: "interior",
  },
  {
    id: 359,
    question:
      "What type of flooring material is most susceptible to water damage if not properly sealed?",
    options: [
      "Ceramic tile",
      "Vinyl plank",
      "Hardwood",
      "Porcelain tile",
    ],
    correctAnswer: 2,
    explanation:
      "实木地板如果密封不当，最容易受到水损害。水分会导致木材膨胀、翘曲、变色和腐烂。检查员应注意实木地板附近的水渍和变形迹象。",
    category: "interior",
  },
  {
    id: 360,
    question:
      "During interior inspection, what condition is indicated by bubbling or peeling paint on a ceiling?",
    options: [
      "The paint was applied too thickly",
      "Moisture intrusion from above, such as a roof leak or plumbing leak",
      "The room has excessive sunlight exposure",
      "Low-quality paint was used",
    ],
    correctAnswer: 1,
    explanation:
      "天花板上的油漆起泡或脱落通常表明上方有水分入侵，可能来自屋顶漏水、管道漏水或上层浴室溢水。这需要进一步调查水分来源。",
    category: "interior",
  },
  {
    id: 361,
    question:
      "What is the minimum width required for a hallway in a California residence?",
    options: ["30 inches", "32 inches", "36 inches", "44 inches"],
    correctAnswer: 2,
    explanation:
      "加州住宅走廊的最小宽度要求为36英寸（约91厘米）。这个宽度确保了日常通行和紧急疏散的安全性。",
    category: "interior",
  },
  {
    id: 362,
    question:
      "What is the most common cause of cracked ceramic floor tiles in a home?",
    options: [
      "Exposure to direct sunlight",
      "Inadequate substrate or deflection in the subfloor",
      "Using the wrong grout color",
      "The tiles were not glazed properly",
    ],
    correctAnswer: 1,
    explanation:
      "瓷砖地板开裂最常见的原因是基层不充分或底层地板变形。如果底层不够坚固，地板在承重时会弯曲，导致瓷砖在最薄弱点开裂。",
    category: "interior",
  },
  {
    id: 363,
    question:
      "When inspecting a bathroom, what is a common indicator of a failing shower pan?",
    options: [
      "Grout discoloration",
      "Water stains on the ceiling below the bathroom",
      "A squeaky bathroom floor",
      "Loose shower door handle",
    ],
    correctAnswer: 1,
    explanation:
      "浴室下方天花板上的水渍是淋浴底盘失效的常见指标。这表明水正在穿过淋浴底盘的防水层泄漏到下方结构中。",
    category: "interior",
  },
  {
    id: 364,
    question:
      "What is the minimum required opening size for a bathroom door in a California home?",
    options: [
      "24 inches wide",
      "28 inches wide",
      "32 inches wide",
      "36 inches wide",
    ],
    correctAnswer: 0,
    explanation:
      "加州允许浴室门的最小开口宽度为24英寸。但对于主要入口和无障碍设计，通常需要更宽的门。新建筑中通常安装更宽的门以满足无障碍要求。",
    category: "interior",
  },
  {
    id: 365,
    question:
      "What is a sign of excessive moisture in a kitchen cabinet under the sink?",
    options: [
      "Cabinet doors that stick",
      "Warped or delaminating cabinet floor, musty odor, or visible mold",
      "Scratches on the cabinet interior",
      "Faded cabinet finish",
    ],
    correctAnswer: 1,
    explanation:
      "水槽下方橱柜底板变形、分层脱落、霉味或可见霉菌都是水分过多的明显迹象。这可能表明管道漏水或排水管连接不当。",
    category: "interior",
  },
  {
    id: 366,
    question:
      "What should an inspector look for when evaluating countertop condition?",
    options: [
      "Only the color and pattern of the countertop",
      "Cracks, burn marks, delamination, loose edges, and sealant condition around sinks",
      "Whether the countertop matches the cabinet color",
      "The brand of the countertop material",
    ],
    correctAnswer: 1,
    explanation:
      "检查台面时，检查员应查看裂缝、烧伤痕迹、分层脱落、边缘松动以及水槽周围密封胶的状况。这些问题可能导致水分渗透和进一步损坏。",
    category: "interior",
  },
  {
    id: 367,
    question:
      "What is the maximum allowable gap between guardrail balusters to prevent a child from passing through?",
    options: [
      "3 inches",
      "4 inches",
      "5 inches",
      "6 inches",
    ],
    correctAnswer: 1,
    explanation:
      "护栏栏杆之间的最大允许间距为4英寸（约10厘米）。这个标准是为了防止幼儿的头部穿过栏杆间隙，降低卡住或跌落的风险。",
    category: "interior",
  },
  {
    id: 368,
    question:
      "When inspecting a garage, what is the required fire separation between the garage and the living space?",
    options: [
      "No separation is required",
      "1/2-inch drywall on the garage side",
      "5/8-inch Type X drywall on the garage side of common walls and ceiling",
      "Full brick or concrete block wall",
    ],
    correctAnswer: 2,
    explanation:
      "车库与居住空间之间的公共墙壁和天花板需要安装5/8英寸X型防火石膏板。这提供了至少1小时的防火等级，保护居住者免受车库火灾的威胁。",
    category: "interior",
  },
  {
    id: 369,
    question:
      "What should a home inspector note about the door between a garage and living space?",
    options: [
      "It should be a hollow-core door for lightweight operation",
      "It must be a self-closing, solid-core door or fire-rated assembly rated at minimum 20 minutes",
      "It should have a pet door installed",
      "It must open into the garage",
    ],
    correctAnswer: 1,
    explanation:
      "车库与居住空间之间的门必须是自动关闭的实心门或至少20分钟防火等级的门组件。这是为了防止车库火灾和一氧化碳气体进入居住区。",
    category: "interior",
  },
  {
    id: 370,
    question:
      "What is the primary concern when a home inspector finds dark staining at the base of interior walls?",
    options: [
      "The homeowner has pets",
      "Rising damp or water intrusion from the exterior",
      "The walls need to be repainted",
      "Carpet dye transfer",
    ],
    correctAnswer: 1,
    explanation:
      "室内墙壁底部的深色污渍通常表明有上升潮气或外部水分入侵。这可能是由于基础防水失效、排水不良或级配不当导致的水分问题。",
    category: "interior",
  },
  {
    id: 371,
    question:
      "When inspecting interior doors, what is the most common cause of a door that will not latch properly?",
    options: [
      "The door knob is too old",
      "The strike plate is misaligned due to settling or hinge problems",
      "The door was painted the wrong color",
      "The room has too much furniture",
    ],
    correctAnswer: 1,
    explanation:
      "门无法正常锁紧最常见的原因是锁扣板错位，这通常是由于房屋沉降、铰链松动或门框变形造成的。这是一个常见的维护问题。",
    category: "interior",
  },
  {
    id: 372,
    question:
      "What type of flooring contains asbestos and may be found in older California homes?",
    options: [
      "Bamboo flooring",
      "9x9-inch vinyl floor tiles installed before 1980",
      "Ceramic tile",
      "Laminate flooring",
    ],
    correctAnswer: 1,
    explanation:
      "1980年之前安装的9x9英寸乙烯基地板砖可能含有石棉。检查员在发现这种地板时应在报告中注明，并建议进行专业的石棉检测。切勿建议房主自行拆除。",
    category: "interior",
  },
  {
    id: 373,
    question:
      "What is the minimum headroom clearance required over a residential stairway in California?",
    options: [
      "6 feet 4 inches",
      "6 feet 8 inches",
      "7 feet",
      "7 feet 6 inches",
    ],
    correctAnswer: 1,
    explanation:
      "加州住宅楼梯的最小净空高度要求为6英尺8英寸（约203厘米）。这是从楼梯踏板前缘到上方障碍物的垂直距离测量的。",
    category: "interior",
  },
  {
    id: 374,
    question:
      "Efflorescence on an interior basement wall surface indicates what condition?",
    options: [
      "The wall was recently painted with latex paint",
      "Moisture is migrating through the masonry, depositing mineral salts",
      "The wall is structurally unsound",
      "Radon gas is present",
    ],
    correctAnswer: 1,
    explanation:
      "泛碱（白色粉状沉积物）表明水分正在通过砌体迁移，将矿物盐沉积在表面。这是水分入侵的明确迹象，需要进一步评估防水状况。",
    category: "interior",
  },
  {
    id: 375,
    question:
      "What is the most effective method for an inspector to detect hidden moisture behind walls?",
    options: [
      "Tapping the wall and listening for hollow sounds",
      "Using a non-invasive moisture meter",
      "Looking for paint discoloration only",
      "Removing a section of drywall",
    ],
    correctAnswer: 1,
    explanation:
      "使用非侵入性湿度计是检测墙壁后面隐藏水分的最有效方法。这种仪器可以在不破坏墙壁的情况下测量材料中的含水量。",
    category: "interior",
  },
  {
    id: 376,
    question:
      "When inspecting a window, what does fogging between double-pane glass indicate?",
    options: [
      "The window needs cleaning",
      "The insulated glass seal has failed",
      "The window frame is rotting",
      "The room has high humidity",
    ],
    correctAnswer: 1,
    explanation:
      "双层玻璃之间的起雾表明中空玻璃密封已经失效。密封失效后，潮湿空气进入玻璃之间的空间，降低了窗户的隔热性能。需要更换玻璃单元。",
    category: "interior",
  },
  {
    id: 377,
    question:
      "What should an inspector report about a bedroom window that is painted shut?",
    options: [
      "It is a cosmetic issue only",
      "It is a safety hazard because it may serve as an emergency egress",
      "It improves energy efficiency",
      "It is acceptable if the room has another window",
    ],
    correctAnswer: 1,
    explanation:
      "被油漆封死的卧室窗户是安全隐患，因为卧室窗户可能作为紧急逃生出口。所有卧室必须有至少一个可操作的紧急逃生窗户或门。",
    category: "interior",
  },
  {
    id: 378,
    question:
      "What is the typical sign of termite damage visible during an interior inspection?",
    options: [
      "Large cracks in concrete floors",
      "Mud tubes on foundation walls, hollow-sounding wood, or frass (droppings)",
      "Peeling wallpaper due to sunlight",
      "Discolored grout in the bathroom",
    ],
    correctAnswer: 1,
    explanation:
      "白蚁损害的典型迹象包括基础墙上的泥管、敲击时空洞的木材声，以及木粉状排泄物（虫粪）。检查员应在报告中记录这些迹象并建议专业白蚁检查。",
    category: "interior",
  },
  {
    id: 379,
    question:
      "When inspecting laminate flooring, what is a common defect caused by moisture exposure?",
    options: [
      "Fading of the surface pattern",
      "Swelling, buckling, or warping at seams and edges",
      "Static electricity buildup",
      "Yellowing of the surface",
    ],
    correctAnswer: 1,
    explanation:
      "复合地板受潮后常见的缺陷是接缝和边缘处膨胀、隆起或翘曲。复合地板的核心通常由高密度纤维板制成，吸水后会膨胀变形。",
    category: "interior",
  },
  {
    id: 380,
    question:
      "What is the purpose of a vapor barrier under a concrete slab floor?",
    options: [
      "To provide cushioning for the floor above",
      "To prevent ground moisture from migrating up through the slab",
      "To insulate the floor from cold temperatures",
      "To prevent radon gas entry only",
    ],
    correctAnswer: 1,
    explanation:
      "混凝土板下方蒸汽屏障的目的是防止地面水分通过板向上迁移。没有蒸汽屏障，水分可能导致地板覆盖物损坏、霉菌生长和室内湿度过高。",
    category: "interior",
  },
  {
    id: 381,
    question:
      "What should an inspector note about a kitchen without a range hood or exhaust ventilation?",
    options: [
      "It is acceptable in all California homes",
      "It is a deficiency because kitchen cooking areas require mechanical exhaust ventilation",
      "It only matters if the kitchen has a gas stove",
      "It is only required in commercial kitchens",
    ],
    correctAnswer: 1,
    explanation:
      "厨房没有抽油烟机或排气通风是一个缺陷，因为加州建筑规范要求厨房烹饪区域有机械排气通风。这有助于去除烹饪产生的湿气、油烟和污染物。",
    category: "interior",
  },
  {
    id: 382,
    question:
      "What minimum exhaust fan capacity is typically required for a bathroom in California?",
    options: [
      "25 CFM",
      "50 CFM",
      "80 CFM",
      "100 CFM",
    ],
    correctAnswer: 1,
    explanation:
      "加州通常要求浴室排气扇的最低排气量为50 CFM（立方英尺/分钟）。足够的排气有助于控制湿度，防止霉菌生长和水分损害。",
    category: "interior",
  },
  {
    id: 383,
    question:
      "When inspecting a shower enclosure, what is a critical safety concern with glass shower doors?",
    options: [
      "The transparency of the glass",
      "Whether the glass is tempered or safety glass as required by code",
      "The style of the door handle",
      "The color of the glass",
    ],
    correctAnswer: 1,
    explanation:
      "淋浴间玻璃门的关键安全问题是玻璃是否为钢化或安全玻璃。规范要求淋浴间使用安全玻璃，因为普通玻璃破碎时会产生锋利碎片，可能造成严重伤害。",
    category: "interior",
  },
  {
    id: 384,
    question:
      "What is the significance of nail pops visible on interior drywall?",
    options: [
      "They indicate the drywall is old and needs complete replacement",
      "They are typically caused by wood framing shrinkage and are usually cosmetic",
      "They always indicate structural failure",
      "They mean the house has termite damage",
    ],
    correctAnswer: 1,
    explanation:
      "石膏板上的钉子突出通常是由木框架干燥收缩引起的，通常只是外观问题。然而，如果数量异常多或集中在某一区域，可能表明框架有问题需要进一步调查。",
    category: "interior",
  },
  {
    id: 385,
    question:
      "What condition does a springy or bouncy floor indicate to a home inspector?",
    options: [
      "High-quality carpet padding",
      "Undersized floor joists, excessive span, or structural weakness",
      "Recently refinished hardwood",
      "New subfloor installation",
    ],
    correctAnswer: 1,
    explanation:
      "弹性或弹跳的地板通常表明地板托梁尺寸不足、跨度过大或存在结构薄弱点。这可能影响地板上方覆盖物的完整性，并可能存在安全隐患。",
    category: "interior",
  },
  {
    id: 386,
    question:
      "What should an inspector look for when evaluating a stairway with open risers?",
    options: [
      "Whether the carpet matches the rest of the house",
      "That the openings do not allow a 4-inch sphere to pass through",
      "Whether the stairs are made of hardwood",
      "The color of the stair treads",
    ],
    correctAnswer: 1,
    explanation:
      "对于开放式踏步楼梯，检查员应确认开口不允许4英寸直径的球体通过。这是儿童安全要求，防止幼儿卡住或穿过开口。",
    category: "interior",
  },
  {
    id: 387,
    question:
      "What is the primary purpose of caulking around a bathtub-to-wall joint?",
    options: [
      "To improve the appearance of the bathroom",
      "To prevent water intrusion behind the wall surface causing rot and mold",
      "To hold the bathtub in place",
      "To insulate the bathtub",
    ],
    correctAnswer: 1,
    explanation:
      "浴缸与墙壁接缝处的密封胶的主要目的是防止水渗入墙壁表面后方，避免造成木材腐烂和霉菌生长。缺失或损坏的密封胶是常见的检查发现。",
    category: "interior",
  },
  {
    id: 388,
    question:
      "When inspecting a home, what does a musty odor in a closet most commonly suggest?",
    options: [
      "The closet needs to be organized",
      "Hidden mold growth or moisture problem",
      "The house needs air fresheners",
      "Old clothing stored in the closet",
    ],
    correctAnswer: 1,
    explanation:
      "衣柜中的霉味通常暗示存在隐藏的霉菌生长或湿气问题。这可能是由于管道漏水、外墙渗水或通风不良导致的。应进一步调查水分来源。",
    category: "interior",
  },
  {
    id: 389,
    question:
      "What is the required minimum opening width for an interior door to a habitable room?",
    options: [
      "28 inches",
      "30 inches",
      "32 inches",
      "36 inches",
    ],
    correctAnswer: 2,
    explanation:
      "通往可居住房间的室内门最小净开口宽度通常要求为32英寸。这确保了充足的通道宽度，方便搬运家具和紧急撤离。",
    category: "interior",
  },
  {
    id: 390,
    question:
      "What is a winder staircase, and what concern does it present during an inspection?",
    options: [
      "A spiral staircase that always meets code",
      "A staircase with pie-shaped treads at turns, which may have insufficient tread width at the narrow end",
      "A staircase that winds around an elevator shaft",
      "An outdoor staircase exposed to wind",
    ],
    correctAnswer: 1,
    explanation:
      "螺旋踏步楼梯是在转弯处使用扇形踏板的楼梯。检查关注点是窄端的踏板宽度可能不足，规范要求在距窄端12英寸处至少有10英寸宽。",
    category: "interior",
  },
  {
    id: 391,
    question:
      "When inspecting a ceiling, what does a yellowish-brown stain typically indicate?",
    options: [
      "Cigarette smoke damage",
      "A past or current water leak from above",
      "Original paint discoloration from age",
      "Formaldehyde off-gassing",
    ],
    correctAnswer: 1,
    explanation:
      "天花板上的黄棕色污渍通常表明上方有过去或当前的漏水。检查员应使用湿度计确认污渍是否仍然活跃，并在报告中建议进一步调查漏水来源。",
    category: "interior",
  },
  {
    id: 392,
    question:
      "What should an inspector check when a garage floor has significant cracking?",
    options: [
      "Whether the cracks affect the car parking",
      "The width, pattern, and displacement of cracks to assess potential structural or settlement issues",
      "If the concrete color matches the driveway",
      "Whether the garage is heated",
    ],
    correctAnswer: 1,
    explanation:
      "检查车库地板裂缝时，应评估裂缝的宽度、模式和位移量，以判断是否存在潜在的结构或沉降问题。细小的收缩裂缝通常是正常的，但大的位移裂缝可能表明基础问题。",
    category: "interior",
  },
  {
    id: 393,
    question:
      "What is a trip hazard threshold height between adjacent floor surfaces?",
    options: [
      "Any height difference",
      "Greater than 1/4 inch without beveling or transition strip",
      "Greater than 1 inch",
      "Greater than 2 inches",
    ],
    correctAnswer: 1,
    explanation:
      "相邻地面之间超过1/4英寸的高度差如果没有斜面过渡或过渡条，就构成绊倒危险。检查员应记录这些高度差，特别是在老年人或行动不便人士居住的住宅中。",
    category: "interior",
  },
  {
    id: 394,
    question:
      "What is the purpose of weep holes in a window frame?",
    options: [
      "To allow air circulation for energy efficiency",
      "To drain condensation and water that collects in the window track",
      "To mount window blinds",
      "To allow insects to ventilate the frame",
    ],
    correctAnswer: 1,
    explanation:
      "窗框中的排水孔用于排出在窗户轨道中收集的冷凝水和雨水。如果排水孔被堵塞，水可能积聚并导致窗框损坏或向室内渗漏。",
    category: "interior",
  },
  {
    id: 395,
    question:
      "What should an inspector note about a bedroom that has no closet?",
    options: [
      "It cannot legally be called a bedroom",
      "It is a reportable observation but does not necessarily disqualify the room as a bedroom under California code",
      "It must have a closet added before sale",
      "It needs two windows instead",
    ],
    correctAnswer: 1,
    explanation:
      "虽然许多人认为卧室必须有衣柜，但加州建筑规范实际上并不要求卧室有衣柜才能被称为卧室。但这是一个值得在报告中提及的观察发现。卧室的关键要求是面积、窗户（逃生出口）和天花板高度。",
    category: "interior",
  },
  {
    id: 396,
    question:
      "When inspecting a tile backsplash behind a kitchen counter, what defect is most concerning?",
    options: [
      "Mismatched tile colors",
      "Cracked or missing grout allowing moisture to penetrate behind the tiles",
      "Outdated tile style",
      "Tiles that are not perfectly level",
    ],
    correctAnswer: 1,
    explanation:
      "厨房台面后方瓷砖防溅板最令人担忧的缺陷是裂缝或缺失的勾缝，因为这会允许水分渗入瓷砖后方，导致墙壁基层损坏和霉菌生长。",
    category: "interior",
  },
  {
    id: 397,
    question:
      "What is the recommended slope for a shower floor toward the drain?",
    options: [
      "1/8 inch per foot",
      "1/4 inch per foot",
      "1/2 inch per foot",
      "1 inch per foot",
    ],
    correctAnswer: 1,
    explanation:
      "淋浴地板向排水口的推荐坡度为每英尺1/4英寸。这个坡度确保水能有效流向排水口，防止积水和相关的水损害问题。",
    category: "interior",
  },
  {
    id: 398,
    question:
      "During an interior inspection, what does a sagging ceiling indicate?",
    options: [
      "The ceiling was recently painted",
      "Potential water damage, structural overload, or failed fasteners in the ceiling assembly",
      "The home has excellent insulation",
      "Normal aging of drywall",
    ],
    correctAnswer: 1,
    explanation:
      "天花板下垂可能表明存在水损害、结构超载或天花板组件中的紧固件失效。这需要进一步评估以确定原因和必要的维修措施。",
    category: "interior",
  },
  {
    id: 399,
    question:
      "What is the correct way to test a garbage disposal during a home inspection?",
    options: [
      "Insert a hand to check for obstructions",
      "Run water, turn on the disposal, and listen for unusual sounds or vibrations",
      "Only visually inspect from above",
      "Pour chemicals down the disposal",
    ],
    correctAnswer: 1,
    explanation:
      "测试垃圾处理器的正确方法是先打开水流，然后启动处理器，倾听是否有异常声音或振动。切勿将手伸入处理器中。还应检查处理器下方是否有漏水。",
    category: "interior",
  },
  {
    id: 400,
    question:
      "What is the maximum variation in riser height allowed between the tallest and shortest risers in a residential stairway?",
    options: [
      "1/4 inch",
      "3/8 inch",
      "1/2 inch",
      "3/4 inch",
    ],
    correctAnswer: 1,
    explanation:
      "住宅楼梯中最高和最矮踏步之间的最大允许高度差为3/8英寸。踏步高度不一致是导致楼梯跌倒的主要原因，检查员应特别注意这一点。",
    category: "interior",
  },

  // ========== FIREPLACE & CHIMNEY (401-450) ==========
  {
    id: 401,
    question: "What is the primary purpose of a chimney cap?",
    options: [
      "To improve the appearance of the chimney",
      "To prevent rain, animals, and debris from entering the flue while allowing exhaust to exit",
      "To increase the draft of the chimney",
      "To support the chimney structure",
    ],
    correctAnswer: 1,
    explanation:
      "烟囱帽的主要目的是防止雨水、动物和碎屑进入烟道，同时允许废气排出。没有烟囱帽，水分会进入烟道导致内衬损坏，动物可能在烟道中筑巢。",
    category: "fireplace",
  },
  {
    id: 402,
    question:
      "What material is typically used for a flue liner in a masonry chimney?",
    options: [
      "Copper",
      "Clay tile, stainless steel, or cast-in-place cement",
      "PVC pipe",
      "Aluminum",
    ],
    correctAnswer: 1,
    explanation:
      "砌体烟囱的烟道内衬通常使用粘土瓦片、不锈钢或浇注水泥。烟道内衬保护砖石结构免受高温和腐蚀性烟气的侵蚀，是烟囱安全的关键组件。",
    category: "fireplace",
  },
  {
    id: 403,
    question: "What is the function of a fireplace damper?",
    options: [
      "To filter smoke before it exits the chimney",
      "To control airflow and close the flue when the fireplace is not in use",
      "To increase the temperature of the fire",
      "To support the chimney liner",
    ],
    correctAnswer: 1,
    explanation:
      "壁炉风门的功能是控制气流并在壁炉不使用时关闭烟道。当壁炉未使用时关闭风门可以防止调节过的室内空气从烟道逸出，节省能源。",
    category: "fireplace",
  },
  {
    id: 404,
    question:
      "What is the minimum required clearance between a masonry fireplace and combustible materials (such as wood framing)?",
    options: [
      "1 inch",
      "2 inches",
      "4 inches",
      "6 inches",
    ],
    correctAnswer: 1,
    explanation:
      "砌体壁炉与可燃材料（如木框架）之间的最小要求间距为2英寸。这个间距是为了防止高温传导引起火灾。在某些情况下，使用隔热材料可能有不同的要求。",
    category: "fireplace",
  },
  {
    id: 405,
    question:
      "What distinguishes a prefabricated (factory-built) fireplace from a masonry fireplace?",
    options: [
      "Prefabricated fireplaces are always larger",
      "Prefabricated fireplaces are manufactured metal units with specific listed components and installation instructions",
      "Masonry fireplaces are cheaper to install",
      "Prefabricated fireplaces do not need a chimney",
    ],
    correctAnswer: 1,
    explanation:
      "预制（工厂制造）壁炉是金属制造单元，具有特定的认证组件和安装说明。它们比砌体壁炉轻，安装更简单，但必须严格按照制造商的说明安装。",
    category: "fireplace",
  },
  {
    id: 406,
    question:
      "What is creosote, and why is it a concern in chimney inspections?",
    options: [
      "A type of chimney paint that peels over time",
      "A flammable tar-like byproduct of wood combustion that accumulates in the flue and can cause chimney fires",
      "A chemical used to clean chimneys",
      "A type of brick used in chimney construction",
    ],
    correctAnswer: 1,
    explanation:
      "杂酚油是木材燃烧的可燃焦油状副产品，会在烟道中积累。大量积累的杂酚油可能引起烟囱火灾。定期清扫烟囱对于去除杂酚油积累至关重要。",
    category: "fireplace",
  },
  {
    id: 407,
    question:
      "What is the purpose of a chimney crown (also called a chimney wash)?",
    options: [
      "To decorate the top of the chimney",
      "To shed water away from the flue and protect the chimney masonry from weather",
      "To increase chimney draft",
      "To attach the chimney cap",
    ],
    correctAnswer: 1,
    explanation:
      "烟囱顶冠（也称烟囱清洗层）的目的是将水从烟道引开并保护烟囱砌体免受天气侵蚀。裂缝或损坏的顶冠会允许水分渗入砌体，导致冻融损坏。",
    category: "fireplace",
  },
  {
    id: 408,
    question:
      "What is a spark arrestor, and where is it required?",
    options: [
      "A device that prevents sparks from igniting gas lines, required in the garage",
      "A mesh screen on the chimney top that prevents burning embers from escaping, required in wildfire-prone areas",
      "An electrical device on the fireplace insert",
      "A fire extinguisher mounted near the fireplace",
    ],
    correctAnswer: 1,
    explanation:
      "火花消除器是安装在烟囱顶部的网状筛网，防止燃烧的火花飞出烟囱。在加州的野火易发地区，这是强制性要求，以减少火灾蔓延的风险。",
    category: "fireplace",
  },
  {
    id: 409,
    question:
      "What is the minimum chimney height above the roof surface where it passes through?",
    options: [
      "2 feet",
      "3 feet",
      "4 feet",
      "5 feet",
    ],
    correctAnswer: 1,
    explanation:
      "烟囱从穿过屋顶处算起，最低高度必须为3英尺。此外，烟囱顶部必须比10英尺水平距离内的任何屋顶结构高出至少2英尺。这确保了适当的排烟和防火安全。",
    category: "fireplace",
  },
  {
    id: 410,
    question:
      "What is the 3-2-10 rule for chimney height?",
    options: [
      "The chimney must be 3 feet wide, 2 feet deep, and 10 feet tall",
      "The chimney must extend at least 3 feet above the roof penetration and 2 feet higher than anything within 10 feet horizontally",
      "The chimney needs cleaning every 3 months if used 2 times per week for 10 months",
      "The flue must be 3 inches wider than 2 inches for every 10 feet of height",
    ],
    correctAnswer: 1,
    explanation:
      "3-2-10规则规定烟囱必须从穿过屋顶处至少高出3英尺，并且比水平距离10英尺以内的任何建筑物高出至少2英尺。这确保了适当的气流和安全排烟。",
    category: "fireplace",
  },
  {
    id: 411,
    question:
      "What is the minimum hearth extension required in front of a fireplace with an opening less than 6 square feet?",
    options: [
      "8 inches",
      "12 inches",
      "16 inches",
      "20 inches",
    ],
    correctAnswer: 2,
    explanation:
      "对于开口面积小于6平方英尺的壁炉，前方壁炉台延伸部分最少需要16英寸。侧面延伸至少8英寸。壁炉台延伸保护地板免受飞溅的火花和热量损害。",
    category: "fireplace",
  },
  {
    id: 412,
    question:
      "What should a home inspector note if a gas fireplace does not have a safety screen or barrier?",
    options: [
      "Nothing, gas fireplaces don't need screens",
      "It is a safety concern as the glass front can reach temperatures exceeding 400°F and cause burns",
      "It only needs a screen if children are present",
      "Gas fireplaces never get hot enough to be dangerous",
    ],
    correctAnswer: 1,
    explanation:
      "燃气壁炉没有安全屏或防护栏是安全隐患，因为玻璃前面板温度可超过400°F（200°C），可能导致严重烧伤，尤其是对儿童。较新的规范要求安装防护屏。",
    category: "fireplace",
  },
  {
    id: 413,
    question:
      "What type of gas log set requires a functioning chimney damper to remain open during use?",
    options: [
      "Vent-free gas logs",
      "Vented gas logs",
      "Electric gas log inserts",
      "Gel fuel logs",
    ],
    correctAnswer: 1,
    explanation:
      "有烟道燃气原木需要在使用时保持烟囱风门打开，以允许燃烧产物通过烟道排出。风门关闭时使用有烟道燃气原木会导致一氧化碳在室内积聚。",
    category: "fireplace",
  },
  {
    id: 414,
    question:
      "What is a common defect found when inspecting the firebox of a masonry fireplace?",
    options: [
      "The firebox is too clean",
      "Cracked or deteriorated firebrick and mortar joints",
      "The firebox is painted black",
      "Ash residue on the firebox floor",
    ],
    correctAnswer: 1,
    explanation:
      "砌体壁炉火箱中常见的缺陷是耐火砖和灰缝开裂或变质。损坏的耐火砖可能允许热量传递到周围的可燃材料，增加火灾风险。",
    category: "fireplace",
  },
  {
    id: 415,
    question:
      "What is the purpose of an ash dump in a masonry fireplace?",
    options: [
      "To ventilate the firebox",
      "To provide a passage for removing ashes to an ash pit below the firebox",
      "To increase the draft",
      "To support the fire grate",
    ],
    correctAnswer: 1,
    explanation:
      "灰斗的目的是提供将灰烬从火箱转移到下方灰坑的通道。这使得清理灰烬更加方便，不需要从壁炉前面铲灰。",
    category: "fireplace",
  },
  {
    id: 416,
    question:
      "When inspecting a wood stove installation, what is the required minimum clearance from an unprotected combustible wall?",
    options: [
      "12 inches",
      "24 inches",
      "36 inches",
      "48 inches",
    ],
    correctAnswer: 2,
    explanation:
      "木材炉与未受保护的可燃墙壁之间的最小要求间距为36英寸。使用经过认证的墙壁保护板可以减少所需的间距，但必须遵循制造商的安装说明。",
    category: "fireplace",
  },
  {
    id: 417,
    question:
      "What should an inspector look for when examining chimney flashing?",
    options: [
      "Whether the flashing color matches the roof",
      "Proper step flashing integration, counter flashing sealed into mortar joints, and no gaps or rust",
      "Whether the flashing is painted",
      "The brand of the flashing material",
    ],
    correctAnswer: 1,
    explanation:
      "检查烟囱闪光板时，应查看阶梯闪光板的正确整合、反闪光板密封在灰缝中以及是否存在间隙或锈蚀。闪光板缺陷是烟囱周围漏水的最常见原因。",
    category: "fireplace",
  },
  {
    id: 418,
    question:
      "What indicates that a chimney may have experienced a chimney fire?",
    options: [
      "The chimney is taller than normal",
      "Distorted or buckled metal flue, cracked flue tiles, or creosote flakes on the roof",
      "The chimney cap is slightly discolored",
      "There is a small amount of soot inside the flue",
    ],
    correctAnswer: 1,
    explanation:
      "烟囱发生过火灾的迹象包括金属烟道变形或弯曲、烟道瓷砖开裂，以及屋顶上的杂酚油碎片。烟囱火灾后应进行专业检查以评估结构损坏程度。",
    category: "fireplace",
  },
  {
    id: 419,
    question:
      "What is the function of a smoke shelf in a masonry fireplace?",
    options: [
      "To display decorative items",
      "To catch falling debris and prevent downdrafts from pushing smoke into the room",
      "To support the chimney liner",
      "To collect creosote for easy cleaning",
    ],
    correctAnswer: 1,
    explanation:
      "烟架的功能是接住落下的碎屑并防止下吹气流将烟雾推入室内。烟架位于风门后面，在烟道和火箱之间形成一个缓冲区域。",
    category: "fireplace",
  },
  {
    id: 420,
    question:
      "What is the minimum hearth extension required on each side of a fireplace opening that is less than 6 square feet?",
    options: [
      "4 inches",
      "6 inches",
      "8 inches",
      "12 inches",
    ],
    correctAnswer: 2,
    explanation:
      "对于开口面积小于6平方英尺的壁炉，每侧壁炉台延伸至少需要8英寸。这提供了足够的不可燃表面来保护两侧的地板免受热量和火花的损害。",
    category: "fireplace",
  },
  {
    id: 421,
    question:
      "An inspector notices white staining on the exterior of a brick chimney. What does this indicate?",
    options: [
      "The chimney was recently cleaned",
      "Efflorescence from moisture migrating through the masonry",
      "High-quality mortar was used",
      "The chimney is well ventilated",
    ],
    correctAnswer: 1,
    explanation:
      "砖烟囱外部的白色污渍是泛碱现象，表明水分正在通过砌体迁移并将矿物盐沉积在表面。这表明烟囱可能存在防水问题需要修复。",
    category: "fireplace",
  },
  {
    id: 422,
    question:
      "What is the proper way to inspect a fireplace damper?",
    options: [
      "Light a fire and observe the smoke pattern",
      "Visually examine and manually operate the damper to verify it opens and closes freely",
      "Only check from the rooftop",
      "Use a garden hose to test for leaks",
    ],
    correctAnswer: 1,
    explanation:
      "检查壁炉风门的正确方法是目视检查并手动操作风门，验证其能自由开关。检查员应使用手电筒查看风门是否完整，有无锈蚀或损坏。",
    category: "fireplace",
  },
  {
    id: 423,
    question:
      "What safety concern exists with a vent-free (unvented) gas fireplace?",
    options: [
      "They produce no heat",
      "They can elevate indoor moisture levels and carbon monoxide if the room lacks adequate ventilation",
      "They require a chimney to operate",
      "They are always prohibited in California",
    ],
    correctAnswer: 1,
    explanation:
      "无排气燃气壁炉的安全隐患是如果房间通风不足，会升高室内湿度和一氧化碳水平。虽然它们有氧气耗尽传感器，但仍需要足够的房间通风。",
    category: "fireplace",
  },
  {
    id: 424,
    question:
      "What is the required spark arrestor mesh opening size in California?",
    options: [
      "1/4 inch to 1/2 inch",
      "3/8 inch to 1/2 inch",
      "1/2 inch to 1 inch",
      "1 inch to 2 inches",
    ],
    correctAnswer: 1,
    explanation:
      "加州要求火花消除器的网孔大小为3/8英寸到1/2英寸。网孔太大无法有效阻挡火花，而太小则可能被杂酚油积累堵塞，影响排烟。",
    category: "fireplace",
  },
  {
    id: 425,
    question:
      "What should an inspector note about a chimney that is leaning or separating from the house?",
    options: [
      "It is a cosmetic issue",
      "It indicates a serious structural concern, possibly foundation failure, and requires immediate professional evaluation",
      "It is normal for older homes",
      "It only matters if the lean exceeds 12 inches",
    ],
    correctAnswer: 1,
    explanation:
      "烟囱倾斜或与房屋分离表明严重的结构问题，可能是基础失效。这需要立即的专业评估，因为倾斜的烟囱有倒塌风险，特别是在加州的地震区域。",
    category: "fireplace",
  },
  {
    id: 426,
    question:
      "What is the purpose of a combustion air inlet in a fireplace?",
    options: [
      "To cool the fireplace surround",
      "To provide outside air for combustion so the fire does not deplete indoor air",
      "To increase the size of the fire",
      "To vent smoke to the outdoors",
    ],
    correctAnswer: 1,
    explanation:
      "壁炉的燃烧空气进气口的目的是从外部提供燃烧所需的空气，使火焰不会消耗室内空气。这在密封性好的现代住宅中尤其重要，可以防止负压和烟气倒流。",
    category: "fireplace",
  },
  {
    id: 427,
    question:
      "When inspecting a prefabricated fireplace, what component should NOT be replaced with non-listed parts?",
    options: [
      "The mantel shelf",
      "Any component, as all parts must be manufacturer-specified listed components",
      "The hearth tile",
      "The wall surround",
    ],
    correctAnswer: 1,
    explanation:
      "预制壁炉的所有组件都必须使用制造商指定的认证部件。使用非认证部件可能导致火灾风险，并使壁炉的UL认证失效。检查员应注意任何不匹配的组件。",
    category: "fireplace",
  },
  {
    id: 428,
    question:
      "What is the danger of using a cracked clay flue liner?",
    options: [
      "It reduces the aesthetic appeal of the chimney",
      "Heat and combustion gases can escape through cracks into the chimney chase, potentially igniting surrounding combustibles",
      "It increases the draft too much",
      "It makes the chimney harder to clean",
    ],
    correctAnswer: 1,
    explanation:
      "使用有裂缝的粘土烟道内衬的危险在于热量和燃烧气体可以通过裂缝逸入烟囱通道，可能点燃周围的可燃材料并导致结构火灾或一氧化碳泄漏。",
    category: "fireplace",
  },
  {
    id: 429,
    question:
      "What is the minimum chimney height above the point where the chimney penetrates the highest part of the roof?",
    options: [
      "2 feet above the ridge if within 10 feet",
      "3 feet above the highest point of roof penetration",
      "5 feet above the roof surface",
      "Equal to the ridge height",
    ],
    correctAnswer: 1,
    explanation:
      "烟囱必须从穿过屋顶最高点处至少高出3英尺。同时还需要遵守2-10规则：比10英尺水平距离内的任何屋顶结构高出至少2英尺。",
    category: "fireplace",
  },
  {
    id: 430,
    question:
      "What material should NOT be used to seal a chimney crown?",
    options: [
      "Elastomeric sealant",
      "Portland cement mixed with sand",
      "Regular mortar mix (which is prone to cracking)",
      "Concrete with reinforcing mesh",
    ],
    correctAnswer: 2,
    explanation:
      "不应使用普通砂浆混合料来密封烟囱顶冠，因为它容易开裂。烟囱顶冠应使用具有适当悬挑的混凝土或弹性密封剂来防止水分渗入。",
    category: "fireplace",
  },
  {
    id: 431,
    question:
      "What clearance is required between a chimney and a combustible roof covering?",
    options: [
      "No clearance required",
      "2 inches with non-combustible flashing",
      "6 inches",
      "12 inches",
    ],
    correctAnswer: 1,
    explanation:
      "烟囱与可燃屋顶覆盖物之间需要至少2英寸的间距，并使用不可燃闪光板。这防止了高温烟囱引起屋顶材料的过热和火灾。",
    category: "fireplace",
  },
  {
    id: 432,
    question:
      "What should an inspector note if they observe a gas fireplace with a standing pilot light?",
    options: [
      "It is a defect that needs immediate repair",
      "It is normal but less efficient than electronic ignition; also verify the thermocouple safety function works",
      "Standing pilots are illegal in California",
      "It means the fireplace is not connected to gas",
    ],
    correctAnswer: 1,
    explanation:
      "带有常明火的燃气壁炉是正常的，但比电子点火效率低。检查员应验证热电偶安全功能是否正常工作——如果常明火熄灭，气阀应自动关闭以防止气体泄漏。",
    category: "fireplace",
  },
  {
    id: 433,
    question:
      "What is a fireplace insert?",
    options: [
      "A decorative screen placed in front of the fireplace",
      "A closed combustion unit installed into an existing masonry fireplace to improve efficiency",
      "An additional chimney built beside the original",
      "A grate used to hold firewood",
    ],
    correctAnswer: 1,
    explanation:
      "壁炉插件是安装在现有砌体壁炉中的封闭燃烧单元，用于提高加热效率。它们使用密封的燃烧室和有时配备鼓风机来更有效地将热量分配到房间中。",
    category: "fireplace",
  },
  {
    id: 434,
    question:
      "During a chimney inspection, what does spalling brick indicate?",
    options: [
      "The chimney was recently repointed",
      "Moisture has penetrated the brick and caused the face to flake or pop off due to freeze-thaw cycles",
      "The brick is of high quality",
      "The chimney was painted recently",
    ],
    correctAnswer: 1,
    explanation:
      "砖块剥落表明水分已渗入砖块内部，在冻融循环中导致砖面剥落或脱落。这是砖块退化的严重迹象，如果不修复会导致结构完整性丧失。",
    category: "fireplace",
  },
  {
    id: 435,
    question:
      "What is the recommended action when an inspector finds a gap between a prefabricated chimney pipe and the ceiling fire stop?",
    options: [
      "Fill the gap with regular insulation",
      "Report it as a fire hazard requiring correction with proper fire-stop materials",
      "Ignore it as it allows ventilation",
      "Seal it with duct tape",
    ],
    correctAnswer: 1,
    explanation:
      "预制烟囱管与天花板防火挡之间的间隙是火灾隐患，需要使用适当的防火材料进行修正。间隙可能允许火焰和热气体传播到相邻的可燃区域。",
    category: "fireplace",
  },
  {
    id: 436,
    question:
      "What is the main advantage of a direct-vent gas fireplace?",
    options: [
      "It does not require any venting",
      "It draws combustion air from outside and exhausts to outside, creating a sealed system that does not affect indoor air quality",
      "It produces more heat than a wood fireplace",
      "It can burn wood and gas simultaneously",
    ],
    correctAnswer: 1,
    explanation:
      "直排式燃气壁炉的主要优点是从外部吸入燃烧空气并向外部排气，形成密封系统，不影响室内空气质量。这使其比传统壁炉更安全、更高效。",
    category: "fireplace",
  },
  {
    id: 437,
    question:
      "What type of mortar joint deterioration should an inspector report on a chimney?",
    options: [
      "Only mortar that is completely missing",
      "Any cracked, crumbling, recessed, or missing mortar joints",
      "Only mortar that has changed color",
      "Mortar deterioration is not reportable",
    ],
    correctAnswer: 1,
    explanation:
      "检查员应报告任何开裂、碎裂、凹陷或缺失的灰缝。灰缝退化允许水分渗入砌体，导致进一步损坏。重新勾缝是必要的维护措施。",
    category: "fireplace",
  },
  {
    id: 438,
    question:
      "What is a Class A chimney pipe, and where is it used?",
    options: [
      "A decorative pipe for gas fireplaces only",
      "A double or triple-wall insulated metal pipe rated for all fuels including wood, used to vent through combustible areas",
      "A single-wall pipe for gas appliances",
      "A clay pipe used in masonry chimneys",
    ],
    correctAnswer: 1,
    explanation:
      "A级烟囱管是双壁或三壁绝缘金属管，额定用于包括木材在内的所有燃料，用于通过可燃区域排气。其绝缘设计保持外壁温度低于点火温度。",
    category: "fireplace",
  },
  {
    id: 439,
    question:
      "What condition would require an inspector to recommend a Level II chimney inspection?",
    options: [
      "The chimney looks clean from the outside",
      "A change in fuel type, evidence of chimney fire, or damage from an event such as an earthquake",
      "The homeowner wants to repaint the chimney",
      "The chimney is less than 5 years old",
    ],
    correctAnswer: 1,
    explanation:
      "当燃料类型改变、有烟囱火灾迹象或地震等事件造成损坏时，应建议进行II级烟囱检查。II级检查包括对烟道内部和可进入区域的更详细检查。",
    category: "fireplace",
  },
  {
    id: 440,
    question:
      "What is the minimum required thickness for a masonry fireplace hearth slab?",
    options: [
      "2 inches",
      "4 inches",
      "6 inches",
      "8 inches",
    ],
    correctAnswer: 1,
    explanation:
      "砌体壁炉炉床板的最小要求厚度为4英寸。炉床必须由不可燃材料制成，并提供足够的隔热保护下方的可燃地板结构。",
    category: "fireplace",
  },
  {
    id: 441,
    question:
      "What is the danger of connecting a wood stove to a fireplace flue that also serves a gas appliance?",
    options: [
      "It improves efficiency",
      "It creates a risk of carbon monoxide poisoning and chimney fire, as each appliance must have its own flue",
      "It saves installation costs",
      "There is no danger",
    ],
    correctAnswer: 1,
    explanation:
      "将木材炉连接到同时为燃气设备服务的烟道会产生一氧化碳中毒和烟囱火灾风险。每个设备必须有自己的独立烟道，以确保安全排气。",
    category: "fireplace",
  },
  {
    id: 442,
    question:
      "What should an inspector note about a fireplace mantel installed too close to the firebox opening?",
    options: [
      "It is a design preference",
      "It is a fire hazard; combustible mantels must maintain specific clearances from the firebox opening",
      "It only matters for wood mantels",
      "It improves heat distribution",
    ],
    correctAnswer: 1,
    explanation:
      "壁炉架安装过于靠近火箱开口是火灾隐患。可燃壁炉架必须与火箱开口保持特定间距：通常从开口顶部上方至少12英寸，并且每向外突出1英寸增加1英寸间距。",
    category: "fireplace",
  },
  {
    id: 443,
    question:
      "What type of damper is installed at the top of the chimney rather than in the throat of the fireplace?",
    options: [
      "Butterfly damper",
      "Top-sealing (top-mount) damper",
      "Rotary damper",
      "Flue cap damper",
    ],
    correctAnswer: 1,
    explanation:
      "顶部密封（顶部安装）风门安装在烟囱顶部而不是壁炉喉部。它通过壁炉中的链条或钢缆操作，在关闭时比传统喉部风门提供更好的密封效果。",
    category: "fireplace",
  },
  {
    id: 444,
    question:
      "What is the primary risk of a missing or damaged chimney liner?",
    options: [
      "Reduced heating efficiency only",
      "Heat transfer to combustible materials in the chimney chase and carbon monoxide leaking into the home",
      "Increased noise from the fireplace",
      "Aesthetic damage to the chimney exterior",
    ],
    correctAnswer: 1,
    explanation:
      "缺失或损坏的烟囱内衬的主要风险是热量传递到烟囱通道中的可燃材料以及一氧化碳泄漏到室内。烟囱内衬是保护房屋和居住者的关键安全屏障。",
    category: "fireplace",
  },
  {
    id: 445,
    question:
      "What should an inspector do if they notice a strong creosote smell coming from a fireplace during warm weather?",
    options: [
      "Ignore it as seasonal",
      "Report it as an indication of significant creosote buildup requiring professional chimney sweeping",
      "Suggest the homeowner use air freshener",
      "Open the damper to ventilate",
    ],
    correctAnswer: 1,
    explanation:
      "温暖天气中壁炉散发强烈的杂酚油气味表明烟道中有大量杂酚油积累。这需要专业的烟囱清扫，因为杂酚油积累是烟囱火灾的主要原因。",
    category: "fireplace",
  },
  {
    id: 446,
    question:
      "What is the correct flue size ratio for a masonry fireplace?",
    options: [
      "The flue area should be at least 1/4 of the fireplace opening area",
      "The flue area should be at least 1/10 of the fireplace opening area for round liners or 1/12 for square/rectangular",
      "The flue should be the same size as the fireplace opening",
      "Flue size does not matter",
    ],
    correctAnswer: 1,
    explanation:
      "砌体壁炉烟道的正确面积比例是：圆形内衬至少为壁炉开口面积的1/10，方形/矩形内衬至少为1/12。烟道尺寸不当会导致排烟不良。",
    category: "fireplace",
  },
  {
    id: 447,
    question:
      "What is the purpose of a cleanout door at the base of a masonry chimney?",
    options: [
      "To provide ventilation for the chimney",
      "To allow removal of ash and debris that falls to the bottom of the chimney",
      "To inspect the foundation",
      "To connect additional flues",
    ],
    correctAnswer: 1,
    explanation:
      "砌体烟囱底部清灰门的目的是方便清除落到烟囱底部的灰烬和碎屑。清灰门应能密封良好，防止空气泄漏影响烟囱的抽力。",
    category: "fireplace",
  },
  {
    id: 448,
    question:
      "When is a rain cap with a spark arrestor most critical in California?",
    options: [
      "In coastal areas",
      "In designated wildland-urban interface (WUI) fire hazard zones",
      "In areas with heavy snowfall",
      "In downtown urban areas only",
    ],
    correctAnswer: 1,
    explanation:
      "带火花消除器的雨帽在加州指定的荒地-城市界面（WUI）火灾危险区域最为关键。这些区域面临较高的野火风险，火花消除器可以防止烟囱飞出的火花引燃周围植被。",
    category: "fireplace",
  },
  {
    id: 449,
    question:
      "What is the inspector's responsibility regarding the interior of a chimney flue?",
    options: [
      "To perform a full Level II inspection with video camera",
      "To visually inspect accessible portions from the firebox and rooftop, noting visible defects and recommending further evaluation if needed",
      "To certify the chimney is safe for use",
      "To clean the chimney before inspection",
    ],
    correctAnswer: 1,
    explanation:
      "检查员的责任是从火箱和屋顶对烟道的可视部分进行目视检查，记录可见缺陷并在需要时建议进一步评估。家庭检查是I级目视检查，不包括隐蔽部分。",
    category: "fireplace",
  },
  {
    id: 450,
    question:
      "What should an inspector report if a wood-burning fireplace has been converted to gas logs but the damper has been permanently fixed in the open position?",
    options: [
      "This is always incorrect and needs repair",
      "For vented gas logs this is acceptable, as the damper must remain open; for vent-free logs it wastes energy but is not unsafe",
      "The damper should always be closed when using gas logs",
      "Gas logs never require an open damper",
    ],
    correctAnswer: 1,
    explanation:
      "对于有烟道燃气原木，将风门永久固定在打开位置是可以接受的，因为使用时风门必须保持打开。对于无烟道燃气原木，这会浪费能源但不构成安全问题。检查员应记录并说明具体情况。",
    category: "fireplace",
  },

  // ========== SAFETY & REGULATIONS (451-500) ==========
  {
    id: 451,
    question:
      "Where are smoke detectors required in a California residential home?",
    options: [
      "Only in the kitchen",
      "In each bedroom, outside each sleeping area, and on every level including the basement",
      "Only on the main floor",
      "In the garage only",
    ],
    correctAnswer: 1,
    explanation:
      "加州要求在每个卧室内、每个睡眠区外以及包括地下室在内的每一层都安装烟雾探测器。这是加州消防法规的强制性要求，旨在尽早警告居住者火灾危险。",
    category: "safety",
  },
  {
    id: 452,
    question:
      "What type of smoke detector is required in new California construction since 2014?",
    options: [
      "Battery-operated ionization detectors",
      "Hardwired, interconnected smoke alarms with battery backup",
      "Plug-in smoke detectors",
      "Heat detectors only",
    ],
    correctAnswer: 1,
    explanation:
      "自2014年以来，加州新建建筑要求安装硬接线、互连的烟雾报警器，并带有电池备份。互连意味着当一个报警器检测到烟雾时，所有报警器同时响起。",
    category: "safety",
  },
  {
    id: 453,
    question:
      "Where are carbon monoxide (CO) detectors required in California homes?",
    options: [
      "Only in the kitchen near the stove",
      "Outside each sleeping area and on every level with a fossil fuel-burning appliance or attached garage",
      "Only in the basement",
      "In every room of the house",
    ],
    correctAnswer: 1,
    explanation:
      "加州要求在每个睡眠区外以及有化石燃料燃烧设备或连接车库的每一层安装一氧化碳探测器。这是加州法律的强制性要求，旨在预防一氧化碳中毒。",
    category: "safety",
  },
  {
    id: 454,
    question:
      "What are the minimum egress window requirements for a bedroom in California?",
    options: [
      "Any window that opens",
      "Minimum 5.7 sq ft net clear opening, minimum 24 inches high and 20 inches wide, sill no more than 44 inches above the floor",
      "Minimum 4 sq ft opening",
      "Windows are not required if there is a door to the outside",
    ],
    correctAnswer: 1,
    explanation:
      "加州卧室逃生窗的最低要求是：净开口面积至少5.7平方英尺，最小高度24英寸，最小宽度20英寸，窗台距地板不超过44英寸。这些尺寸确保紧急情况下能够逃生。",
    category: "safety",
  },
  {
    id: 455,
    question:
      "What is California's seismic requirement for water heater installation?",
    options: [
      "No special requirements exist",
      "Water heaters must be strapped to the wall with approved seismic straps, with one in the upper third and one in the lower third",
      "Water heaters must be placed in a seismic bunker",
      "Only tankless water heaters are allowed",
    ],
    correctAnswer: 1,
    explanation:
      "加州要求热水器使用经批准的地震带固定在墙上，上部三分之一和下部三分之一各一条。这防止地震中热水器倾倒，避免水损害、燃气泄漏和火灾。",
    category: "safety",
  },
  {
    id: 456,
    question:
      "In which locations are GFCI-protected outlets required in a California home?",
    options: [
      "Only in the bathroom",
      "Bathrooms, kitchens (within 6 feet of sink), garages, outdoors, crawl spaces, unfinished basements, laundry areas, and near pools/spas",
      "Only outdoors",
      "Every outlet in the house",
    ],
    correctAnswer: 1,
    explanation:
      "加州要求在浴室、厨房（距水槽6英尺以内）、车库、室外、爬行空间、未完工地下室、洗衣区以及泳池/水疗设施附近安装GFCI保护插座。GFCI保护防止触电事故。",
    category: "safety",
  },
  {
    id: 457,
    question:
      "What is the purpose of arc-fault circuit interrupter (AFCI) protection?",
    options: [
      "To prevent water damage to electrical circuits",
      "To detect dangerous electrical arcing conditions that could start a fire and disconnect the circuit",
      "To prevent power surges from damaging appliances",
      "To increase the amperage capacity of a circuit",
    ],
    correctAnswer: 1,
    explanation:
      "电弧故障断路器（AFCI）的目的是检测可能引起火灾的危险电弧条件并断开电路。电弧可由松动的连接、损坏的电线或老化的绝缘引起。",
    category: "safety",
  },
  {
    id: 458,
    question:
      "Where is AFCI protection required in California residential construction?",
    options: [
      "Only in bedrooms",
      "All 120-volt, 15- and 20-amp branch circuits supplying outlets and devices in most habitable rooms",
      "Only in the kitchen",
      "Only in the garage",
    ],
    correctAnswer: 1,
    explanation:
      "加州要求在大多数可居住房间中为所有120伏、15和20安培分支电路提供AFCI保护。这包括卧室、客厅、餐厅、家庭房、书房和走廊等。",
    category: "safety",
  },
  {
    id: 459,
    question:
      "When is tempered safety glass required in a California home?",
    options: [
      "Only in shower doors",
      "In locations subject to human impact: doors, sidelites, within 24 inches of doors, within 60 inches of water in bathrooms, and areas where the bottom edge is less than 18 inches above the floor",
      "Only for skylights",
      "In all windows in the house",
    ],
    correctAnswer: 1,
    explanation:
      "加州要求在可能受到人体冲击的位置安装钢化安全玻璃：门、门侧灯、距门24英寸以内、浴室距水60英寸以内以及底边距地板不到18英寸的区域。",
    category: "safety",
  },
  {
    id: 460,
    question:
      "What is the California requirement for pool safety barriers?",
    options: [
      "Pools do not require barriers in California",
      "A pool must have at least one approved safety feature such as a fence, cover, door alarms, or self-latching gates",
      "Only above-ground pools need barriers",
      "Only public pools require safety barriers",
    ],
    correctAnswer: 1,
    explanation:
      "加州要求住宅泳池至少有一种经批准的安全功能，如围栏（至少60英寸高）、泳池盖、门窗报警器或自闭锁门。这是为了防止儿童溺水事故。",
    category: "safety",
  },
  {
    id: 461,
    question:
      "What is the minimum height required for a residential pool fence in California?",
    options: [
      "36 inches",
      "42 inches",
      "48 inches",
      "60 inches",
    ],
    correctAnswer: 3,
    explanation:
      "加州住宅泳池围栏的最低高度要求为60英寸（5英尺）。围栏还必须没有可供攀爬的立足点，门必须自动关闭和自动锁定。",
    category: "safety",
  },
  {
    id: 462,
    question:
      "What is the concern with lead-based paint in homes built before 1978?",
    options: [
      "It fades quickly and looks bad",
      "Lead dust and chips from deteriorating paint pose serious health risks, especially to children under 6",
      "It makes walls harder to repaint",
      "It only affects pets",
    ],
    correctAnswer: 1,
    explanation:
      "1978年之前建造的房屋中的含铅油漆变质时会产生铅粉尘和碎片，对健康构成严重风险，特别是对6岁以下儿童。铅中毒可导致大脑和神经系统损伤。",
    category: "safety",
  },
  {
    id: 463,
    question:
      "What should a home inspector do if they suspect asbestos-containing materials in a home?",
    options: [
      "Collect samples for testing",
      "Note the suspected materials in the report and recommend evaluation by a qualified asbestos professional; do not disturb the material",
      "Remove the material immediately",
      "Ignore it if the material is in good condition",
    ],
    correctAnswer: 1,
    explanation:
      "如果检查员怀疑存在含石棉材料，应在报告中记录并建议由合格的石棉专业人员进行评估。检查员不应触碰或扰动该材料，因为这可能释放有害纤维到空气中。",
    category: "safety",
  },
  {
    id: 464,
    question:
      "What is radon, and why is it a concern during home inspections?",
    options: [
      "A type of mold that grows in basements",
      "A naturally occurring radioactive gas that can accumulate in homes and is the second leading cause of lung cancer",
      "A chemical used in home construction",
      "An odorous gas from sewage systems",
    ],
    correctAnswer: 1,
    explanation:
      "氡是一种自然产生的放射性气体，可以在房屋中积聚，是肺癌的第二大主要原因。它从地面的铀衰变中产生，可以通过基础裂缝和开口进入室内。",
    category: "safety",
  },
  {
    id: 465,
    question:
      "What is the maximum gap allowed between a pool fence gate and the ground in California?",
    options: [
      "1 inch",
      "2 inches",
      "4 inches",
      "6 inches",
    ],
    correctAnswer: 2,
    explanation:
      "加州泳池围栏门与地面之间的最大允许间隙为4英寸。这与护栏栏杆间距要求一致，目的是防止小孩爬过或钻过间隙。",
    category: "safety",
  },
  {
    id: 466,
    question:
      "What California requirement applies to homes sold that were built before 1978?",
    options: [
      "The home must be repainted before sale",
      "The seller must provide a lead-based paint disclosure and EPA pamphlet to the buyer",
      "All lead paint must be removed before sale",
      "No special requirements exist",
    ],
    correctAnswer: 1,
    explanation:
      "加州和联邦法律要求1978年之前建造的房屋出售时，卖方必须向买方提供含铅油漆披露声明和EPA铅安全手册。这让买方了解潜在的铅危害。",
    category: "safety",
  },
  {
    id: 467,
    question:
      "What fire safety feature is required between a house and an attached garage in California?",
    options: [
      "A sprinkler system",
      "A self-closing, solid-core or fire-rated door and 5/8-inch Type X drywall on the garage side",
      "A fireproof curtain",
      "Nothing special is required",
    ],
    correctAnswer: 1,
    explanation:
      "加州要求房屋与附属车库之间安装自动关闭的实心门或防火门，以及车库一侧的5/8英寸X型防火石膏板。这些措施提供防火分隔，保护居住空间。",
    category: "safety",
  },
  {
    id: 468,
    question:
      "At what height must a guardrail be installed on a residential deck in California?",
    options: [
      "Any height deck",
      "When the deck surface is 30 inches or more above grade",
      "Only when the deck is above the second floor",
      "When the deck is 48 inches or more above grade",
    ],
    correctAnswer: 1,
    explanation:
      "当甲板表面距地面30英寸或以上时，加州要求安装护栏。护栏最低高度为42英寸，栏杆间距不得允许4英寸球体通过。",
    category: "safety",
  },
  {
    id: 469,
    question:
      "What is the California requirement for a water heater's temperature-pressure relief (TPR) valve discharge pipe?",
    options: [
      "It can discharge directly onto the ground",
      "It must terminate within 6 inches of the ground or floor, not be threaded at the end, and not be trapped or reduced in size",
      "It must connect to the sewer system",
      "No discharge pipe is required",
    ],
    correctAnswer: 1,
    explanation:
      "加州要求热水器TPR阀排放管终止在距地面或地板6英寸以内，末端不得有螺纹，不得设置水封或缩小管径。这确保安全释放过压的热水。",
    category: "safety",
  },
  {
    id: 470,
    question:
      "What is the required minimum opening height for an egress window?",
    options: [
      "20 inches",
      "24 inches",
      "30 inches",
      "36 inches",
    ],
    correctAnswer: 1,
    explanation:
      "逃生窗的最小开口高度要求为24英寸。配合最小宽度20英寸和最小面积5.7平方英尺，这确保了紧急情况下人员能够通过窗户逃生。",
    category: "safety",
  },
  {
    id: 471,
    question:
      "What California code requires seismic gas shut-off valves on residential properties?",
    options: [
      "No such requirement exists",
      "Many local California jurisdictions require automatic seismic gas shut-off valves at the gas meter upon sale or permit",
      "Only commercial buildings need them",
      "Only homes in San Francisco need them",
    ],
    correctAnswer: 1,
    explanation:
      "加州许多地方辖区要求在出售房屋或进行许可工作时在燃气表处安装自动地震燃气关断阀。这些阀门在地震中自动关闭燃气供应，防止火灾和爆炸。",
    category: "safety",
  },
  {
    id: 472,
    question:
      "What is the maximum sill height for an egress window above the interior floor?",
    options: [
      "24 inches",
      "36 inches",
      "44 inches",
      "48 inches",
    ],
    correctAnswer: 2,
    explanation:
      "逃生窗窗台距室内地板的最大高度为44英寸（约112厘米）。高于此高度的窗台会使居住者在紧急情况下难以到达和爬出窗户。",
    category: "safety",
  },
  {
    id: 473,
    question:
      "What is the requirement for handrails on residential stairs with four or more risers?",
    options: [
      "Handrails are optional for residential stairs",
      "At least one handrail is required on stairs with four or more risers",
      "Two handrails are always required",
      "Handrails are only required for commercial buildings",
    ],
    correctAnswer: 1,
    explanation:
      "对于有四个或更多踏步的住宅楼梯，至少需要一个扶手。扶手高度必须在34至38英寸之间，且必须是可抓握的形状（直径1.25至2英寸的圆形或等效形状）。",
    category: "safety",
  },
  {
    id: 474,
    question:
      "What fire-resistance rating is required for the wall and ceiling between an attached garage and the dwelling?",
    options: [
      "No rating required",
      "30-minute fire resistance",
      "1-hour fire resistance using 5/8-inch Type X gypsum board",
      "2-hour fire resistance",
    ],
    correctAnswer: 2,
    explanation:
      "附属车库与住宅之间的墙壁和天花板需要1小时的防火等级，使用5/8英寸X型石膏板实现。这为居住者提供了在车库火灾中的安全疏散时间。",
    category: "safety",
  },
  {
    id: 475,
    question:
      "What safety feature is required for tempered glass identification?",
    options: [
      "No identification is needed",
      "Tempered glass must have a permanent etched label in the corner indicating it is safety glass",
      "It must have a colored tint",
      "It must be thicker than regular glass",
    ],
    correctAnswer: 1,
    explanation:
      "钢化玻璃必须在角落有永久性蚀刻标记，表明它是安全玻璃。检查员可以通过查找这些标记来确认危险位置的玻璃是否为安全玻璃。",
    category: "safety",
  },
  {
    id: 476,
    question:
      "What is the California requirement for smoke alarms in homes that are being sold?",
    options: [
      "No requirements upon sale",
      "Smoke alarms must be present and operable; homes built before 1992 may have battery-operated alarms, but newer homes need hardwired units",
      "Only one smoke alarm in the hallway is needed",
      "Smoke alarms are only required if the buyer requests them",
    ],
    correctAnswer: 1,
    explanation:
      "加州要求出售房屋时烟雾报警器必须存在且可操作。1992年之前建造的房屋可以使用电池供电的报警器，但更新的房屋需要硬接线单元。所有卧室和走廊都必须有。",
    category: "safety",
  },
  {
    id: 477,
    question:
      "What is the minimum landing platform size required at the top and bottom of stairs?",
    options: [
      "24 x 24 inches",
      "36 x 36 inches (not less than the width of the stairway)",
      "30 x 30 inches",
      "48 x 48 inches",
    ],
    correctAnswer: 1,
    explanation:
      "楼梯顶部和底部的平台尺寸最小要求为36 x 36英寸，且不得小于楼梯宽度。平台为上下楼梯的人提供安全的过渡区域。",
    category: "safety",
  },
  {
    id: 478,
    question:
      "What is a seismic retrofit commonly performed on older California homes?",
    options: [
      "Adding a swimming pool",
      "Bolting the mudsill to the foundation and bracing cripple walls",
      "Installing a new roof",
      "Adding more windows",
    ],
    correctAnswer: 1,
    explanation:
      "加州老房子常见的抗震改造包括将底梁螺栓固定到基础上和加固矮墙。矮墙是基础和一楼地板之间的短木框架墙，如果不加固，在地震中容易倒塌。",
    category: "safety",
  },
  {
    id: 479,
    question:
      "What safety concern should an inspector note about dryer vent exhaust?",
    options: [
      "It should vent into the attic for warmth",
      "It must vent to the exterior, use rigid or semi-rigid metal duct, and not exceed 35 feet in length (with deductions for elbows)",
      "It can terminate in the garage",
      "Flexible vinyl duct is preferred",
    ],
    correctAnswer: 1,
    explanation:
      "烘干机排气必须排到室外，使用刚性或半刚性金属管道，长度不超过35英尺（每个90度弯头减去5英尺）。乙烯基软管是火灾隐患，不应使用。",
    category: "safety",
  },
  {
    id: 480,
    question:
      "Where is tempered glass required near a bathtub in California?",
    options: [
      "Only on the faucet wall",
      "Any glazing with the bottom edge less than 60 inches above the standing surface and within 60 inches horizontally of the water's edge",
      "Only glass block is allowed",
      "No special glass is required near bathtubs",
    ],
    correctAnswer: 1,
    explanation:
      "加州要求浴缸附近底边距站立面不到60英寸且距水边水平距离60英寸以内的任何玻璃必须为钢化安全玻璃。这防止了滑倒时撞碎玻璃造成的伤害。",
    category: "safety",
  },
  {
    id: 481,
    question:
      "What is the California requirement regarding bedroom window security bars?",
    options: [
      "They are always prohibited",
      "They must have an approved quick-release mechanism operable from inside without keys or special tools",
      "They are only allowed on the first floor",
      "No special requirements exist for security bars",
    ],
    correctAnswer: 1,
    explanation:
      "加州要求卧室窗户上的防盗栏必须有经批准的快速释放机制，可以从内部操作，无需钥匙或特殊工具。这确保在火灾等紧急情况下居住者能够快速逃生。",
    category: "safety",
  },
  {
    id: 482,
    question:
      "What is the minimum stairway width required in California residential construction?",
    options: [
      "30 inches",
      "36 inches",
      "42 inches",
      "44 inches",
    ],
    correctAnswer: 1,
    explanation:
      "加州住宅建筑要求楼梯最小宽度为36英寸。这个宽度在扶手之上测量，确保有足够的通行空间用于日常使用和紧急疏散。",
    category: "safety",
  },
  {
    id: 483,
    question:
      "What is the California requirement for carbon monoxide detectors in homes with an attached garage but no fossil fuel appliances?",
    options: [
      "CO detectors are not required",
      "CO detectors are still required because vehicle exhaust from the attached garage can enter the living space",
      "Only a smoke detector is needed",
      "A CO detector is needed only in the garage itself",
    ],
    correctAnswer: 1,
    explanation:
      "即使没有化石燃料设备，有附属车库的房屋仍需要一氧化碳探测器，因为车辆排气可能从车库进入居住空间。加州法律（SB 183）要求所有有车库的住宅安装CO探测器。",
    category: "safety",
  },
  {
    id: 484,
    question:
      "What is the requirement for electrical outlets near a kitchen sink?",
    options: [
      "No outlets are allowed near the kitchen sink",
      "All outlets within 6 feet of a kitchen sink must be GFCI protected",
      "Only outlets within 12 inches need GFCI protection",
      "Standard outlets are acceptable near kitchen sinks",
    ],
    correctAnswer: 1,
    explanation:
      "厨房水槽6英尺以内的所有插座必须有GFCI保护。水和电的接近增加了触电风险，GFCI可以在毫秒内检测到接地故障并切断电源。",
    category: "safety",
  },
  {
    id: 485,
    question:
      "What is the purpose of a gas shut-off valve that must be accessible near each gas appliance?",
    options: [
      "To regulate gas pressure",
      "To allow quick shut-off of gas supply in an emergency or for maintenance",
      "To filter impurities from the gas",
      "To measure gas consumption",
    ],
    correctAnswer: 1,
    explanation:
      "每个燃气设备附近的可访问关断阀的目的是在紧急情况下或维护时快速关闭燃气供应。检查员应确认每个燃气设备都有可操作的关断阀。",
    category: "safety",
  },
  {
    id: 486,
    question:
      "What should an inspector report about missing address numbers on a home?",
    options: [
      "It is not part of a home inspection",
      "Missing or illegible address numbers are a safety concern as emergency responders need to locate the property quickly",
      "It only matters for apartment buildings",
      "It is purely a cosmetic issue",
    ],
    correctAnswer: 1,
    explanation:
      "缺失或不清晰的地址号码是安全隐患，因为紧急救援人员需要快速定位房屋。加州要求住宅有清晰可见的地址号码，以便消防和医疗人员在紧急情况下快速找到。",
    category: "safety",
  },
  {
    id: 487,
    question:
      "What is the California requirement for GFCI protection of outdoor outlets?",
    options: [
      "Only outlets on the front of the house need GFCI",
      "All outdoor outlets must be GFCI protected and have weatherproof covers rated for wet locations when in use",
      "Outdoor outlets do not need GFCI if they are under a covered patio",
      "Only outlets near pools need GFCI",
    ],
    correctAnswer: 1,
    explanation:
      "加州要求所有室外插座必须有GFCI保护，并在使用时配备额定用于潮湿位置的防风雨盖。这防止了户外环境中因水分导致的触电风险。",
    category: "safety",
  },
  {
    id: 488,
    question:
      "What is the requirement for a residential stair handrail graspability?",
    options: [
      "Any shape is acceptable",
      "The handrail must have a graspable profile with a circular cross-section of 1-1/4 to 2 inches in diameter",
      "Flat, wide handrails are preferred",
      "The handrail must be square-shaped",
    ],
    correctAnswer: 1,
    explanation:
      "扶手必须具有可抓握的轮廓，圆形截面直径为1-1/4至2英寸。如果是非圆形截面，其周长必须为4至6-1/4英寸，最大截面尺寸为2-1/4英寸。",
    category: "safety",
  },
  {
    id: 489,
    question:
      "What is the California requirement regarding asbestos disclosure during a home sale?",
    options: [
      "No disclosure is required",
      "Sellers must disclose known asbestos-containing materials on the Transfer Disclosure Statement",
      "Only commercial buildings require asbestos disclosure",
      "Asbestos must be removed before sale",
    ],
    correctAnswer: 1,
    explanation:
      "加州要求卖方在转让披露声明中披露已知的含石棉材料。虽然不要求卖方进行石棉检测，但必须披露已知信息。石棉常见于旧房的绝缘、地板和管道包裹中。",
    category: "safety",
  },
  {
    id: 490,
    question:
      "What is the required height for an electrical panel above the floor?",
    options: [
      "The center of the panel must be at any convenient height",
      "Working space clearance with the top breaker handle no higher than 6 feet 7 inches above the floor or working platform",
      "The panel must be at exactly 5 feet above the floor",
      "No height requirement exists",
    ],
    correctAnswer: 1,
    explanation:
      "电气面板的最高断路器手柄距地板或工作平台不得超过6英尺7英寸。面板前方还必须有至少30英寸宽、36英寸深的无障碍工作空间。",
    category: "safety",
  },
  {
    id: 491,
    question:
      "What does California law require for homes in very high fire hazard severity zones?",
    options: [
      "Only metal roofs are allowed",
      "Enhanced building standards including fire-resistant roofing, exterior walls, and defensible space vegetation management",
      "All trees within 100 feet must be removed",
      "Underground utilities are required",
    ],
    correctAnswer: 1,
    explanation:
      "加州法律要求极高火灾危险区域的房屋遵守加强的建筑标准，包括防火屋顶、外墙和可防御空间的植被管理。房主必须在房屋周围保持防火清理空间。",
    category: "safety",
  },
  {
    id: 492,
    question:
      "What is the California defensible space requirement for homes in fire hazard areas?",
    options: [
      "No vegetation management is required",
      "100 feet of defensible space with two zones: 0-30 feet (lean, clean zone) and 30-100 feet (reduced fuel zone)",
      "Only 10 feet of clearance around the home",
      "200 feet of bare earth around the home",
    ],
    correctAnswer: 1,
    explanation:
      "加州要求火灾危险区域的房屋有100英尺的可防御空间：0-30英尺为精简清洁区，30-100英尺为减少燃料区。这减缓了野火蔓延并保护房屋和消防员。",
    category: "safety",
  },
  {
    id: 493,
    question:
      "What safety concern should an inspector report about a garage with living space above it?",
    options: [
      "There are no special concerns",
      "The garage ceiling must have proper fire-rated separation and the garage door opening must have adequate clearance",
      "The garage must be converted to living space",
      "Only the garage floor needs to be sealed",
    ],
    correctAnswer: 1,
    explanation:
      "车库上方有居住空间时，车库天花板必须有适当的防火等级分隔（5/8英寸X型石膏板）。这为上方居住者提供火灾保护。车库门的开口也需要适当间距。",
    category: "safety",
  },
  {
    id: 494,
    question:
      "What is the requirement for a garage floor in relation to the adjacent living space?",
    options: [
      "The garage floor must be level with the living space",
      "The garage floor must be sloped to drain toward the garage door or a drain, and typically be lower than the adjacent living space",
      "The garage floor must be carpeted",
      "No specific requirements exist",
    ],
    correctAnswer: 1,
    explanation:
      "车库地板必须向车库门或排水口倾斜排水，通常比相邻居住空间低。这防止液体（燃料、化学品）流入居住区域，也有助于排出雨水。",
    category: "safety",
  },
  {
    id: 495,
    question:
      "What is the California Residential Building Code requirement for bathroom ventilation?",
    options: [
      "Opening a window is always sufficient",
      "Bathrooms must have either a window with at least 1.5 sq ft of openable area or a mechanical exhaust fan vented to the outside",
      "No ventilation is required in bathrooms",
      "A ceiling fan counts as ventilation",
    ],
    correctAnswer: 1,
    explanation:
      "加州要求浴室必须有至少1.5平方英尺可打开面积的窗户或排到室外的机械排气扇。机械排气扇必须排到室外，而不是阁楼或爬行空间。",
    category: "safety",
  },
  {
    id: 496,
    question:
      "What should an inspector note about a hot tub or spa without a locking safety cover?",
    options: [
      "It is acceptable if the backyard has a fence",
      "It is a drowning hazard and California requires approved safety features for all pools and spas",
      "Covers are optional for spas under 200 gallons",
      "Only public spas need covers",
    ],
    correctAnswer: 1,
    explanation:
      "没有锁定安全盖的热水浴缸或水疗池是溺水危险。加州要求所有泳池和水疗设施有经批准的安全功能。ASTM认证的安全盖可以作为泳池安全法规要求的防护措施之一。",
    category: "safety",
  },
  {
    id: 497,
    question:
      "What is the requirement for GFCI protection of electrical outlets in a garage?",
    options: [
      "Only outlets at workbench height need GFCI",
      "All 125-volt, single-phase, 15- and 20-amp outlets in the garage must be GFCI protected",
      "Garage outlets are exempt from GFCI requirements",
      "Only one GFCI outlet is needed per garage",
    ],
    correctAnswer: 1,
    explanation:
      "车库内所有125伏、单相、15和20安培的插座都必须有GFCI保护。车库环境中可能存在潮湿、油脂和导电工具，增加了触电风险。",
    category: "safety",
  },
  {
    id: 498,
    question:
      "What California code addresses cripple wall bracing for seismic safety?",
    options: [
      "Title 24 Part 12 only applies to commercial buildings",
      "California Existing Building Code and local retrofit ordinances address cripple wall bracing to prevent collapse during earthquakes",
      "No code addresses cripple wall bracing",
      "Only the federal building code covers this",
    ],
    correctAnswer: 1,
    explanation:
      "加州现有建筑法规和地方改造条例规定了矮墙加固要求，以防止地震中倒塌。许多加州城市有强制性的软层和矮墙改造计划。",
    category: "safety",
  },
  {
    id: 499,
    question:
      "What should an inspector note if the water heater is located in a garage?",
    options: [
      "Water heaters cannot be in garages",
      "The burner or ignition source must be at least 18 inches above the garage floor to prevent ignition of flammable vapors",
      "No special requirements exist for garage water heaters",
      "The water heater must be enclosed in a closet",
    ],
    correctAnswer: 1,
    explanation:
      "车库中的热水器的燃烧器或点火源必须距车库地板至少18英寸，以防止点燃地面上可能存在的易燃蒸气（如汽油蒸气）。这个高度要求也适用于其他车库中的点火源。",
    category: "safety",
  },
  {
    id: 500,
    question:
      "What is the California requirement for smoke detectors in a home that is undergoing renovation with a building permit?",
    options: [
      "No changes to smoke detectors are required",
      "The entire home must be brought up to current smoke alarm standards with hardwired, interconnected alarms with battery backup",
      "Only the renovated area needs new smoke detectors",
      "Battery-operated detectors may be added only in the renovation area",
    ],
    correctAnswer: 1,
    explanation:
      "当房屋进行需要建筑许可的翻新时，加州要求整个房屋的烟雾报警器升级到当前标准，即硬接线、互连并带有电池备份的报警器。这确保了整个房屋的完整安全保护。",
    category: "safety",
  },
];
