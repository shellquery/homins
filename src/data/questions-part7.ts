import type { Question } from "./questions";

export const questionsPart7: Question[] = [
  // ========== INSULATION (1401-1550) ==========
  {
    id: 1401,
    question: "What does the R-value of insulation measure?",
    options: [
      "Resistance to heat flow",
      "Resistance to moisture penetration",
      "Resistance to air infiltration",
      "Resistance to fire spread",
    ],
    correctAnswer: 0,
    explanation:
      "R值衡量的是材料抵抗热流的能力。R值越高，隔热性能越好。这是评估保温材料性能的最重要指标。",
    category: "insulation",
  },
  {
    id: 1402,
    question:
      "According to California Title 24, which factor primarily determines the insulation requirements for a building?",
    options: [
      "The building's climate zone",
      "The building's square footage",
      "The building's age",
      "The building's height",
    ],
    correctAnswer: 0,
    explanation:
      "加州Title 24根据建筑所在的气候区来确定保温要求。加州有16个气候区，每个区域有不同的保温R值要求，因为不同地区的温度和湿度条件差异很大。",
    category: "insulation",
  },
  {
    id: 1403,
    question: "How many climate zones does California have under Title 24?",
    options: ["8", "12", "16", "20"],
    correctAnswer: 2,
    explanation:
      "加州Title 24将全州划分为16个气候区。每个气候区有不同的能效要求，包括保温、窗户性能和暖通空调系统的规格。",
    category: "insulation",
  },
  {
    id: 1404,
    question:
      "What is the typical minimum ceiling insulation R-value required in California's mild coastal climate zones (e.g., Zone 3)?",
    options: ["R-19", "R-30", "R-38", "R-49"],
    correctAnswer: 1,
    explanation:
      "在加州温和的沿海气候区（如Zone 3），天花板保温的最低R值通常为R-30。内陆和山区气候区可能要求更高的R值。",
    category: "insulation",
  },
  {
    id: 1405,
    question:
      "In California's colder mountain climate zones (e.g., Zone 16), what ceiling insulation R-value is typically required?",
    options: ["R-30", "R-38", "R-49", "R-60"],
    correctAnswer: 2,
    explanation:
      "在加州较冷的山区气候区（如Zone 16），天花板保温通常要求R-49。较冷的地区需要更高的R值以减少热量损失。",
    category: "insulation",
  },
  {
    id: 1406,
    question:
      "What is the typical minimum wall insulation R-value for wood-frame walls in most California climate zones?",
    options: ["R-8", "R-13", "R-15", "R-21"],
    correctAnswer: 2,
    explanation:
      "在加州大多数气候区，木框架墙体保温的最低R值通常为R-15。某些气候区可能要求R-13或R-21，具体取决于气候区和合规方法。",
    category: "insulation",
  },
  {
    id: 1407,
    question:
      "What is the minimum floor insulation R-value typically required over unconditioned crawl spaces in California?",
    options: ["R-13", "R-19", "R-25", "R-30"],
    correctAnswer: 1,
    explanation:
      "在加州，未调节爬行空间上方的地板保温通常要求最低R-19。这有助于减少通过地板的热量损失，提高居住舒适度。",
    category: "insulation",
  },
  {
    id: 1408,
    question:
      "Which type of fiberglass insulation comes in pre-cut widths designed to fit between standard stud spacings?",
    options: [
      "Loose-fill fiberglass",
      "Fiberglass batts",
      "Fiberglass rigid board",
      "Fiberglass blown-in blanket",
    ],
    correctAnswer: 1,
    explanation:
      "玻璃纤维棉卷（batts）是预先切割成标准宽度的保温材料，设计用于安装在标准间距的墙体骨架之间（通常为16英寸或24英寸中心距）。",
    category: "insulation",
  },
  {
    id: 1409,
    question: "What is the approximate R-value per inch of standard fiberglass batt insulation?",
    options: ["R-2.2", "R-3.2", "R-4.5", "R-6.0"],
    correctAnswer: 1,
    explanation:
      "标准玻璃纤维棉卷的R值约为每英寸R-3.2。这意味着3.5英寸厚的棉卷大约提供R-11，5.5英寸厚的棉卷大约提供R-19。",
    category: "insulation",
  },
  {
    id: 1410,
    question:
      "What is a common problem found when inspecting fiberglass batt insulation in wall cavities?",
    options: [
      "The batts have expanded beyond the cavity",
      "The batts are compressed or have gaps around obstacles",
      "The batts have chemically degraded over time",
      "The batts have bonded permanently to the drywall",
    ],
    correctAnswer: 1,
    explanation:
      "玻璃纤维棉卷常见的问题是被压缩或在障碍物（如电线、管道）周围留有间隙。压缩会降低R值，而间隙则导致热量通过对流绕过保温层。",
    category: "insulation",
  },
  {
    id: 1411,
    question: "What is blown-in fiberglass insulation primarily used for?",
    options: [
      "Insulating exterior wall surfaces",
      "Filling enclosed cavities and attic floors",
      "Waterproofing foundation walls",
      "Providing structural reinforcement to walls",
    ],
    correctAnswer: 1,
    explanation:
      "吹入式玻璃纤维主要用于填充封闭的空腔和阁楼地板。它可以均匀覆盖不规则形状的区域，减少间隙和空隙，比棉卷更适合改造项目。",
    category: "insulation",
  },
  {
    id: 1412,
    question: "What is the R-value per inch of blown-in cellulose insulation?",
    options: ["R-2.0", "R-3.2 to R-3.8", "R-5.0", "R-6.5"],
    correctAnswer: 1,
    explanation:
      "吹入式纤维素保温的R值约为每英寸R-3.2到R-3.8。纤维素由回收纸制成，经过硼酸盐处理以提供防火和防虫性能。",
    category: "insulation",
  },
  {
    id: 1413,
    question: "What is wet-spray cellulose insulation?",
    options: [
      "Cellulose that has been pre-soaked in water for mold resistance",
      "Cellulose mixed with water or adhesive and sprayed into open wall cavities",
      "Cellulose treated with a waterproof coating for exterior use",
      "Cellulose applied underwater for foundation insulation",
    ],
    correctAnswer: 1,
    explanation:
      "湿喷纤维素是将纤维素与水或粘合剂混合后喷入开放的墙体空腔中。水分使纤维素粘附在腔体内，防止沉降，适合新建墙体。喷入后需要干燥才能封闭墙面。",
    category: "insulation",
  },
  {
    id: 1414,
    question: "What is a key advantage of dense-pack cellulose insulation?",
    options: [
      "It provides the highest R-value per inch of any insulation",
      "It can be installed in enclosed cavities and provides good air sealing",
      "It is completely fireproof without any chemical treatment",
      "It never settles over time",
    ],
    correctAnswer: 1,
    explanation:
      "密实填充纤维素可以安装在封闭的空腔中（如已完工的墙壁），并且由于高密度填充，能提供良好的气密性。密度通常为每立方英尺3.5磅或更高。",
    category: "insulation",
  },
  {
    id: 1415,
    question: "What chemical treatment is commonly applied to cellulose insulation for fire resistance?",
    options: [
      "Formaldehyde",
      "Borate compounds (boric acid/borax)",
      "Chlorine gas",
      "Asbestos fibers",
    ],
    correctAnswer: 1,
    explanation:
      "纤维素保温材料通常用硼酸盐化合物（硼酸/硼砂）处理，以提供阻燃和防虫性能。硼酸盐处理是一种低毒性的方法，既能防火又能防止昆虫和霉菌。",
    category: "insulation",
  },
  {
    id: 1416,
    question: "What are the two main types of spray foam insulation?",
    options: [
      "Latex foam and silicone foam",
      "Open-cell and closed-cell",
      "Rigid foam and flexible foam",
      "Polyester foam and nylon foam",
    ],
    correctAnswer: 1,
    explanation:
      "喷涂泡沫保温材料分为两种主要类型：开孔泡沫和闭孔泡沫。开孔泡沫密度较低、柔软，R值约为每英寸3.5-3.6；闭孔泡沫密度较高、坚硬，R值约为每英寸6.0-7.0。",
    category: "insulation",
  },
  {
    id: 1417,
    question: "What is the approximate R-value per inch of closed-cell spray foam insulation?",
    options: ["R-3.5", "R-4.5", "R-6.0 to R-7.0", "R-10.0"],
    correctAnswer: 2,
    explanation:
      "闭孔喷涂泡沫的R值约为每英寸R-6.0到R-7.0，是常见保温材料中R值最高的之一。闭孔泡沫还能增加结构强度和防水性能。",
    category: "insulation",
  },
  {
    id: 1418,
    question: "What is the approximate R-value per inch of open-cell spray foam insulation?",
    options: ["R-2.0", "R-3.5 to R-3.6", "R-5.0", "R-7.0"],
    correctAnswer: 1,
    explanation:
      "开孔喷涂泡沫的R值约为每英寸R-3.5到R-3.6。虽然R值低于闭孔泡沫，但开孔泡沫成本较低，且能提供良好的空气密封和隔音效果。",
    category: "insulation",
  },
  {
    id: 1419,
    question: "Which type of spray foam also acts as a vapor barrier?",
    options: [
      "Open-cell spray foam at any thickness",
      "Closed-cell spray foam at 1.5 inches or more",
      "Neither type acts as a vapor barrier",
      "Both types at any thickness",
    ],
    correctAnswer: 1,
    explanation:
      "闭孔喷涂泡沫在厚度达到1.5英寸或以上时可以作为蒸汽屏障（Class II vapor retarder）。开孔泡沫允许水蒸气通过，不能作为蒸汽屏障。",
    category: "insulation",
  },
  {
    id: 1420,
    question: "What is EPS rigid foam insulation?",
    options: [
      "Expanded Polystyrene - white beaded foam board",
      "Extruded Polymer Sheet - a flexible insulation wrap",
      "Engineered Panel System - a structural insulation panel",
      "Epoxy-bonded Polyester Sheet - a fire-resistant board",
    ],
    correctAnswer: 0,
    explanation:
      "EPS是发泡聚苯乙烯（Expanded Polystyrene），即常见的白色珠状泡沫板。R值约为每英寸R-3.6到R-4.2，是最经济的刚性泡沫板选择，常用于外墙连续保温和ICF（保温混凝土模板）。",
    category: "insulation",
  },
  {
    id: 1421,
    question: "What is the R-value per inch of XPS (Extruded Polystyrene) rigid foam insulation?",
    options: ["R-3.0", "R-5.0", "R-6.5", "R-8.0"],
    correctAnswer: 1,
    explanation:
      "XPS（挤塑聚苯乙烯）刚性泡沫板的R值约为每英寸R-5.0。XPS通常为蓝色或粉色，具有良好的防水性能，常用于地基和地下应用。",
    category: "insulation",
  },
  {
    id: 1422,
    question:
      "Which rigid foam board insulation has the highest R-value per inch but may lose some R-value over time?",
    options: ["EPS", "XPS", "Polyisocyanurate (polyiso)", "Mineral wool board"],
    correctAnswer: 2,
    explanation:
      "聚异氰脲酸酯（polyiso）初始R值最高，约为每英寸R-6.0到R-6.5。但polyiso在低温下R值会降低（热漂移），且随时间推移可能会有少量R值损失。",
    category: "insulation",
  },
  {
    id: 1423,
    question:
      "What characteristic makes polyisocyanurate (polyiso) board less effective in very cold temperatures?",
    options: [
      "It becomes brittle and cracks",
      "Its R-value decreases significantly in cold conditions",
      "It absorbs moisture and loses all insulating ability",
      "It releases toxic gases below freezing",
    ],
    correctAnswer: 1,
    explanation:
      "Polyiso板在非常低的温度下R值会显著下降。在约50°F以下，其有效R值可能降至每英寸R-4.5或更低。因此在寒冷气候区，XPS或EPS可能是更可靠的选择。",
    category: "insulation",
  },
  {
    id: 1424,
    question: "What is a key advantage of mineral wool (Rockwool) insulation?",
    options: [
      "It is the least expensive insulation available",
      "It is naturally fire-resistant and can withstand temperatures over 2000°F",
      "It has the highest R-value per inch of any batt insulation",
      "It is completely impervious to moisture",
    ],
    correctAnswer: 1,
    explanation:
      "矿棉（Rockwool）保温材料天然具有优异的防火性能，可以承受超过2000°F的温度而不融化或产生有毒烟雾。R值约为每英寸R-4.3，比玻璃纤维稍高。",
    category: "insulation",
  },
  {
    id: 1425,
    question: "What is the approximate R-value per inch of mineral wool batt insulation?",
    options: ["R-2.5", "R-3.2", "R-4.3", "R-6.0"],
    correctAnswer: 2,
    explanation:
      "矿棉棉卷的R值约为每英寸R-4.3，比标准玻璃纤维棉卷（R-3.2每英寸）略高。矿棉还具有更好的隔音性能和防火性能。",
    category: "insulation",
  },
  {
    id: 1426,
    question: "Where is a radiant barrier most commonly installed in a home?",
    options: [
      "Under the floor joists in the basement",
      "On the underside of the roof rafters or roof sheathing in the attic",
      "Inside the wall cavities between studs",
      "Around the foundation perimeter",
    ],
    correctAnswer: 1,
    explanation:
      "辐射屏障最常安装在阁楼中屋顶椽条或屋顶底板的下方。它通过反射来自屋顶的辐射热来降低阁楼温度，在炎热气候（如加州南部）中特别有效。",
    category: "insulation",
  },
  {
    id: 1427,
    question: "How does a radiant barrier work to reduce heat transfer?",
    options: [
      "By absorbing heat and slowly releasing it at night",
      "By reflecting radiant heat energy back toward its source",
      "By creating an airtight seal that prevents convection",
      "By conducting heat into the ground through metal straps",
    ],
    correctAnswer: 1,
    explanation:
      "辐射屏障通过反射辐射热能回到其来源方向来减少热量传递。反射箔面的发射率非常低（通常为0.03-0.05），能反射约95-97%的辐射热。",
    category: "insulation",
  },
  {
    id: 1428,
    question: "What condition can render a radiant barrier ineffective?",
    options: [
      "Exposure to sunlight through attic vents",
      "Accumulation of dust on the reflective surface",
      "Contact with wood framing members",
      "Installation in a horizontal position",
    ],
    correctAnswer: 1,
    explanation:
      "灰尘积聚在辐射屏障的反射表面上会显著降低其效能。灰尘覆盖会增加表面的发射率，减少其反射辐射热的能力。因此安装时反射面应朝下以减少积尘。",
    category: "insulation",
  },
  {
    id: 1429,
    question: "What are the three classes of vapor retarders?",
    options: [
      "Light, Medium, and Heavy",
      "Class I, Class II, and Class III",
      "Type A, Type B, and Type C",
      "Grade 1, Grade 2, and Grade 3",
    ],
    correctAnswer: 1,
    explanation:
      "蒸汽阻隔层分为三个等级：Class I（渗透率≤0.1 perm，如聚乙烯薄膜）、Class II（渗透率0.1-1.0 perm，如牛皮纸面棉卷）、Class III（渗透率1.0-10 perm，如普通乳胶漆）。",
    category: "insulation",
  },
  {
    id: 1430,
    question: "Which of the following is an example of a Class I vapor retarder?",
    options: [
      "Latex paint",
      "Kraft-faced fiberglass batts",
      "Polyethylene sheeting (6 mil)",
      "Unfaced fiberglass batts",
    ],
    correctAnswer: 2,
    explanation:
      "6密耳聚乙烯薄膜是Class I蒸汽阻隔层的典型例子，渗透率低于0.1 perm。牛皮纸面棉卷为Class II，乳胶漆为Class III。",
    category: "insulation",
  },
  {
    id: 1431,
    question: "In California's mild climate, where should a vapor retarder generally be placed?",
    options: [
      "On the exterior side of the wall insulation",
      "On the warm-in-winter side (interior) or not required at all",
      "On both sides of the wall insulation",
      "In the middle of the wall cavity",
    ],
    correctAnswer: 1,
    explanation:
      "在加州温和的气候中，蒸汽阻隔层通常安装在冬季温暖的一侧（室内侧），或者在许多气候区根本不需要。加州大部分地区（除山区外）属于混合干燥气候，蒸汽驱动力较低。",
    category: "insulation",
  },
  {
    id: 1432,
    question: "What is the difference between an air barrier and a vapor barrier?",
    options: [
      "They are the same thing with different names",
      "An air barrier stops air movement; a vapor barrier resists moisture diffusion",
      "An air barrier is exterior only; a vapor barrier is interior only",
      "An air barrier is for cold climates; a vapor barrier is for hot climates",
    ],
    correctAnswer: 1,
    explanation:
      "空气屏障阻止空气流动（对流），而蒸汽屏障抵抗水蒸气的扩散。两者的功能不同但互补。一些材料（如闭孔泡沫）可以同时作为空气屏障和蒸汽屏障。",
    category: "insulation",
  },
  {
    id: 1433,
    question: "What does a blower door test measure?",
    options: [
      "The air quality inside the home",
      "The airtightness of the building envelope",
      "The efficiency of the HVAC system",
      "The strength of the structural framing",
    ],
    correctAnswer: 1,
    explanation:
      "鼓风门测试测量建筑围护结构的气密性。通过在外门上安装风扇，对建筑物加压或减压，测量空气泄漏量。结果通常以每小时换气次数（ACH50）表示。",
    category: "insulation",
  },
  {
    id: 1434,
    question: "What does ACH50 stand for in a blower door test?",
    options: [
      "Air Changes per Hour at 50 degrees Fahrenheit",
      "Air Changes per Hour at 50 Pascals of pressure",
      "Average Cubic airflow per Hour at 50% fan speed",
      "Actual Conditioned Heating at 50% capacity",
    ],
    correctAnswer: 1,
    explanation:
      "ACH50代表在50帕斯卡压力差下的每小时换气次数。这是衡量建筑气密性的标准单位。较低的ACH50值表示建筑气密性更好。新建住宅通常要求ACH50低于5。",
    category: "insulation",
  },
  {
    id: 1435,
    question: "What is the building envelope?",
    options: [
      "The mailing address and legal description of the property",
      "The physical barrier between the conditioned interior and unconditioned exterior",
      "The exterior paint and siding of the building",
      "The HVAC ductwork distribution system",
    ],
    correctAnswer: 1,
    explanation:
      "建筑围护结构是指调节室内空间与非调节室外之间的物理屏障。它包括墙壁、屋顶、地板、门窗等，控制热量、空气、水分和水的流动。",
    category: "insulation",
  },
  {
    id: 1436,
    question: "What is thermal bridging?",
    options: [
      "A technique for connecting two different insulation types",
      "Heat transfer through building components that have higher conductivity than surrounding insulation",
      "A bridge structure designed to withstand extreme temperatures",
      "The process of heating a home using solar thermal panels",
    ],
    correctAnswer: 1,
    explanation:
      "热桥是指热量通过比周围保温材料导热性更高的建筑构件传递。例如，木结构墙体中的木骨架就是热桥，因为木材的R值（约R-1每英寸）远低于保温材料。",
    category: "insulation",
  },
  {
    id: 1437,
    question: "What is continuous insulation (CI) and how does it address thermal bridging?",
    options: [
      "Insulation installed continuously throughout the year without breaks",
      "Insulation installed on the exterior of the framing that covers studs and reduces thermal bridging",
      "A type of insulation that never needs replacement",
      "Insulation that runs continuously from the attic to the crawl space",
    ],
    correctAnswer: 1,
    explanation:
      "连续保温（CI）是安装在框架外侧的保温层，覆盖骨架并减少热桥效应。由于保温层不被骨架中断，它能显著提高墙体的整体热性能。",
    category: "insulation",
  },
  {
    id: 1438,
    question: "What is a thermal break in construction?",
    options: [
      "A crack in the wall caused by thermal expansion",
      "A material with low thermal conductivity placed between conductive elements to reduce heat transfer",
      "A pause in construction due to extreme temperatures",
      "A device that automatically shuts off heating when a set temperature is reached",
    ],
    correctAnswer: 1,
    explanation:
      "热断桥是在导热元件之间放置低导热率材料以减少热量传递。常见例子包括断桥铝窗框（在铝型材中间加入塑料隔热条）和钢结构中的隔热垫片。",
    category: "insulation",
  },
  {
    id: 1439,
    question:
      "What are the California requirements for crawl space ventilation in a naturally ventilated crawl space?",
    options: [
      "1 square foot of vent area per 100 square feet of crawl space floor",
      "1 square foot of vent area per 150 square feet of crawl space floor",
      "1 square foot of vent area per 300 square feet of crawl space floor",
      "No ventilation is required for California crawl spaces",
    ],
    correctAnswer: 1,
    explanation:
      "加州对自然通风的爬行空间通常要求每150平方英尺地面面积1平方英尺的通风口面积。通风口应分布在爬行空间的各侧，以确保交叉通风。",
    category: "insulation",
  },
  {
    id: 1440,
    question: "What is a conditioned crawl space?",
    options: [
      "A crawl space that has been cleaned and organized",
      "A sealed crawl space that is insulated, air-sealed, and treated as part of the conditioned building envelope",
      "A crawl space with a dehumidifier running continuously",
      "A crawl space accessible only through a conditioned room",
    ],
    correctAnswer: 1,
    explanation:
      "调节爬行空间是密封、保温、气密的爬行空间，被视为建筑围护结构的一部分。墙壁保温而非地板保温，地面铺设防潮层，通风口关闭。这种方法在许多气候区比通风爬行空间效果更好。",
    category: "insulation",
  },
  {
    id: 1441,
    question:
      "In a conditioned crawl space, where is the insulation typically installed?",
    options: [
      "Between the floor joists above the crawl space",
      "On the crawl space walls and rim joist",
      "On the ground surface of the crawl space",
      "On the exterior of the foundation walls only",
    ],
    correctAnswer: 1,
    explanation:
      "在调节爬行空间中，保温材料通常安装在爬行空间的墙壁和边缘梁上，而不是地板搁栅之间。这样可以将爬行空间纳入建筑的调节空间内。",
    category: "insulation",
  },
  {
    id: 1442,
    question:
      "What is the standard formula for calculating the net free area of attic ventilation?",
    options: [
      "1 square foot per 100 square feet of attic floor",
      "1 square foot per 150 square feet of attic floor",
      "1 square foot per 300 square feet of attic floor",
      "1 square foot per 500 square feet of attic floor",
    ],
    correctAnswer: 1,
    explanation:
      "标准阁楼通风计算公式为每150平方英尺阁楼地面面积1平方英尺的净自由通风面积（1:150比例）。如果50%以上的通风口位于屋顶上半部分，可以减少到1:300比例。",
    category: "insulation",
  },
  {
    id: 1443,
    question:
      "What is the ideal ratio of ridge ventilation to soffit ventilation in a balanced attic ventilation system?",
    options: ["All ridge, no soffit", "75% ridge, 25% soffit", "50% ridge, 50% soffit", "25% ridge, 75% soffit"],
    correctAnswer: 2,
    explanation:
      "理想的平衡阁楼通风系统中，脊部通风和屋檐通风的比例应大致为50/50（等量进出）。实际上，一些专家建议屋檐进气口稍多于脊部排气口，以确保正压通风。",
    category: "insulation",
  },
  {
    id: 1444,
    question: "What is the purpose of baffles (rafter vents) in an attic?",
    options: [
      "To support the weight of the roof sheathing",
      "To maintain a clear air channel between the insulation and roof sheathing at the eaves",
      "To block wind from entering the attic through soffit vents",
      "To redirect rainwater away from the attic floor",
    ],
    correctAnswer: 1,
    explanation:
      "挡板（椽条通风道）的目的是在屋檐处保持保温材料和屋顶底板之间的清晰空气通道。这确保了空气可以从屋檐通风口流向脊部通风口，同时防止保温材料堵塞通风路径。",
    category: "insulation",
  },
  {
    id: 1445,
    question: "What causes ice dams on roofs?",
    options: [
      "Excessive rain during freezing temperatures",
      "Heat loss from the attic melting snow on the roof, which refreezes at the colder eaves",
      "Improper flashing installation at the roof edge",
      "Use of dark-colored roofing materials",
    ],
    correctAnswer: 1,
    explanation:
      "冰坝是由于阁楼热量损失导致屋顶上的雪融化，融水流到较冷的屋檐处重新结冰而形成的。防止冰坝的关键是充足的阁楼保温、良好的空气密封和适当的阁楼通风。",
    category: "insulation",
  },
  {
    id: 1446,
    question: "What is the best approach to prevent ice dams?",
    options: [
      "Install heating cables along the roof edge",
      "Ensure adequate attic insulation, air sealing, and ventilation",
      "Apply waterproof membrane to the entire roof",
      "Remove all snow from the roof after each storm",
    ],
    correctAnswer: 1,
    explanation:
      "防止冰坝最好的方法是确保阁楼有足够的保温、良好的空气密封和适当的通风。这三者共同作用，使屋顶表面保持寒冷，防止雪在屋顶上不均匀融化。",
    category: "insulation",
  },
  {
    id: 1447,
    question: "What is the challenge of insulating a cathedral ceiling?",
    options: [
      "Cathedral ceilings cannot be insulated",
      "There is limited space between the roof deck and finished ceiling, making it difficult to achieve adequate R-values and ventilation",
      "Cathedral ceilings require only half the insulation of flat ceilings",
      "The slope of the ceiling prevents insulation from staying in place",
    ],
    correctAnswer: 1,
    explanation:
      "教堂式天花板的保温挑战在于屋顶板和成品天花板之间的空间有限，难以达到足够的R值并保持通风通道。常见解决方案包括使用高R值材料（如闭孔泡沫）或增加椽条深度。",
    category: "insulation",
  },
  {
    id: 1448,
    question:
      "Which insulation method is most commonly used for cathedral ceilings to achieve high R-values in limited space?",
    options: [
      "Loose-fill cellulose",
      "Closed-cell spray foam",
      "Standard fiberglass batts",
      "Radiant barrier foil",
    ],
    correctAnswer: 1,
    explanation:
      "闭孔喷涂泡沫是教堂式天花板中最常用的保温方法，因为它在有限空间内提供最高的R值（每英寸R-6到R-7），同时还能提供空气密封和蒸汽阻隔功能。",
    category: "insulation",
  },
  {
    id: 1449,
    question:
      "For flat roof insulation, what is the difference between above-deck and below-deck insulation?",
    options: [
      "Above-deck is for residential; below-deck is for commercial",
      "Above-deck insulation sits on top of the roof structure; below-deck insulation is installed underneath between or below joists",
      "Above-deck uses fiberglass; below-deck uses foam only",
      "There is no difference; the terms are interchangeable",
    ],
    correctAnswer: 1,
    explanation:
      "屋面保温上置式是将保温材料放在屋顶结构上方（在防水膜下方），而下置式是将保温材料安装在结构下方的搁栅之间或下方。上置式保温可以消除热桥，通常效果更好。",
    category: "insulation",
  },
  {
    id: 1450,
    question: "Why is above-deck insulation generally preferred for flat roofs?",
    options: [
      "It is cheaper to install",
      "It eliminates thermal bridging through the roof structure and keeps the structure warm",
      "It provides better fire protection",
      "It is the only method allowed by code",
    ],
    correctAnswer: 1,
    explanation:
      "上置式保温通常更受青睐，因为它消除了通过屋顶结构的热桥效应，并使结构保持在温暖的一侧，减少冷凝风险。整个屋顶板都被保温材料包裹，热性能更均匀。",
    category: "insulation",
  },
  {
    id: 1451,
    question: "What is the minimum insulation requirement for hot water pipes in California?",
    options: [
      "No insulation is required",
      "R-2 minimum for accessible pipes",
      "R-4 minimum for all hot water pipes",
      "R-6 minimum for pipes over 2 inches",
    ],
    correctAnswer: 2,
    explanation:
      "加州Title 24要求所有热水管道至少有R-4的保温。管道保温可以减少热量损失，缩短热水等待时间，节约能源和水资源。",
    category: "insulation",
  },
  {
    id: 1452,
    question:
      "What minimum R-value is typically required for HVAC supply ducts in unconditioned spaces in California?",
    options: ["R-4.2", "R-6", "R-8", "R-12"],
    correctAnswer: 2,
    explanation:
      "在加州，位于非调节空间（如阁楼和爬行空间）中的暖通空调送风管道通常要求最低R-8的保温。这有助于减少管道中的能量损失，提高系统效率。",
    category: "insulation",
  },
  {
    id: 1453,
    question: "What R-value is typically required for HVAC return ducts in unconditioned spaces?",
    options: ["R-4.2", "R-6", "R-8", "R-12"],
    correctAnswer: 1,
    explanation:
      "回风管道在非调节空间中通常要求R-6的保温，比送风管道（R-8）的要求稍低。然而，一些当地法规可能要求回风管道也达到R-8。",
    category: "insulation",
  },
  {
    id: 1454,
    question: "What is the primary purpose of a whole-house fan?",
    options: [
      "To heat the home during winter",
      "To cool the home by pulling in cooler outside air and exhausting hot air through the attic",
      "To filter and purify indoor air",
      "To circulate air within the home without outside air exchange",
    ],
    correctAnswer: 1,
    explanation:
      "全屋换气扇的主要目的是在凉爽的夜晚和早晨将室外凉爽空气引入室内，同时将室内热空气排出阁楼。这可以大大减少对空调的依赖，在加州的干燥气候中特别有效。",
    category: "insulation",
  },
  {
    id: 1455,
    question: "When should a whole-house fan NOT be operated?",
    options: [
      "During morning hours",
      "When outside air temperature is higher than inside temperature",
      "When all interior doors are open",
      "When the house has adequate attic ventilation",
    ],
    correctAnswer: 1,
    explanation:
      "当室外温度高于室内温度时，不应运行全屋换气扇，否则会将热空气引入室内。全屋换气扇最适合在清晨和夜间室外凉爽时使用。",
    category: "insulation",
  },
  {
    id: 1456,
    question: "What is the concern with attic power ventilators (powered attic fans)?",
    options: [
      "They are too expensive to operate",
      "They can depressurize the attic and pull conditioned air from the living space",
      "They generate excessive noise",
      "They are prohibited by California building codes",
    ],
    correctAnswer: 1,
    explanation:
      "动力阁楼通风机的一个主要问题是它们可能使阁楼产生负压，从生活空间抽取已调节的空气。这会增加能源消耗，并可能将有害气体（如燃烧产物）从室内拉入阁楼。",
    category: "insulation",
  },
  {
    id: 1457,
    question: "What is the primary function of window films applied to residential glass?",
    options: [
      "To make the glass bulletproof",
      "To reduce solar heat gain and UV radiation entering through windows",
      "To increase the structural strength of the glass",
      "To prevent glass from fogging",
    ],
    correctAnswer: 1,
    explanation:
      "窗户贴膜的主要功能是减少通过窗户进入的太阳热量和紫外线辐射。这可以降低制冷成本，保护家具免受紫外线褪色，并减少眩光。",
    category: "insulation",
  },
  {
    id: 1458,
    question: "Which type of weatherstripping is best suited for sliding windows and doors?",
    options: [
      "V-strip (tension seal)",
      "Door sweep",
      "Pile (fin seal) weatherstripping",
      "Tubular rubber gasket",
    ],
    correctAnswer: 2,
    explanation:
      "毛条（翅片密封）密封条最适合滑动窗户和门。毛条由细纤维（通常是聚丙烯）组成，可以在滑动部件之间提供柔性密封，同时允许顺畅的滑动操作。",
    category: "insulation",
  },
  {
    id: 1459,
    question: "What type of weatherstripping is commonly used on the bottom of entry doors?",
    options: [
      "Magnetic strip",
      "Door sweep",
      "Foam tape",
      "Interlocking metal strip",
    ],
    correctAnswer: 1,
    explanation:
      "门底密封条（door sweep）通常安装在入户门的底部，用于密封门与门槛之间的间隙。它由一条弹性材料（橡胶或毛刷）固定在金属或塑料条上组成。",
    category: "insulation",
  },
  {
    id: 1460,
    question:
      "Which type of caulk is best for sealing gaps around bathtubs and showers?",
    options: [
      "Acrylic latex caulk",
      "100% silicone caulk",
      "Polyurethane caulk",
      "Butyl rubber caulk",
    ],
    correctAnswer: 1,
    explanation:
      "100%硅酮密封胶最适合浴缸和淋浴周围的密封，因为它具有优异的防水性、柔韧性和耐霉菌性能。它不会因持续接触水而分解。",
    category: "insulation",
  },
  {
    id: 1461,
    question: "What type of caulk is paintable and best for interior trim work?",
    options: [
      "100% silicone caulk",
      "Acrylic latex caulk",
      "Polyurethane caulk",
      "Butyl rubber caulk",
    ],
    correctAnswer: 1,
    explanation:
      "丙烯酸乳胶密封胶可以上漆，最适合室内装饰工作。它易于涂抹和清理（用水即可），干燥后可以上漆，适用于踢脚板、窗框和冠形装饰线等。",
    category: "insulation",
  },
  {
    id: 1462,
    question: "When is polyurethane caulk the best choice for sealing?",
    options: [
      "For interior paint-grade trim only",
      "For high-movement exterior joints and gaps that require strong adhesion",
      "For sealing around gas appliances",
      "For temporary repairs only",
    ],
    correctAnswer: 1,
    explanation:
      "聚氨酯密封胶最适合需要强粘附力的高运动外部接缝和间隙。它具有优异的粘附力、耐久性和柔韧性，适合混凝土、木材和金属等多种材料。",
    category: "insulation",
  },
  {
    id: 1463,
    question: "What is expanding foam sealant primarily used for in air sealing?",
    options: [
      "Sealing hairline cracks in plaster walls",
      "Filling larger gaps and penetrations around pipes, wires, and ductwork",
      "Replacing worn weatherstripping on doors",
      "Coating entire wall cavities for insulation",
    ],
    correctAnswer: 1,
    explanation:
      "膨胀泡沫密封剂主要用于填充管道、电线和风管周围较大的间隙和穿透处。它在涂抹后膨胀以填充不规则形状的空隙，提供空气密封和一定程度的保温。",
    category: "insulation",
  },
  {
    id: 1464,
    question:
      "What should a home inspector identify as the highest priority area for air sealing?",
    options: [
      "Window frames",
      "Attic bypasses (openings between the conditioned space and attic)",
      "Exterior door weatherstripping",
      "Electrical outlet covers on exterior walls",
    ],
    correctAnswer: 1,
    explanation:
      "阁楼旁路（调节空间和阁楼之间的开口）是空气密封的最高优先级区域。这些包括管道追踪、电线穿透、灯具开口、烟囱追踪等，是热空气通过对流（烟囱效应）逃逸的主要路径。",
    category: "insulation",
  },
  {
    id: 1465,
    question: "What is the rim joist (band joist) and why is it important for air sealing?",
    options: [
      "A decorative joist visible from the exterior",
      "The structural member at the perimeter of the floor system that is often a major source of air leakage",
      "A joist used only in commercial construction",
      "The central support beam in a basement",
    ],
    correctAnswer: 1,
    explanation:
      "边缘搁栅（边带搁栅）是地板系统周边的结构构件，位于基础顶部。它通常是空气泄漏的主要来源，因为木材的收缩和接缝处容易产生间隙。密封边缘搁栅是节能改造的关键步骤。",
    category: "insulation",
  },
  {
    id: 1466,
    question:
      "What instrument is used during an energy audit to locate areas of missing insulation and air leaks?",
    options: [
      "Gas leak detector",
      "Infrared (thermal) camera",
      "Moisture meter",
      "Sound level meter",
    ],
    correctAnswer: 1,
    explanation:
      "红外（热成像）相机用于在能源审计中定位缺失保温和空气泄漏的区域。它可以显示表面温度差异，帮助识别热桥、保温间隙和空气渗透点。",
    category: "insulation",
  },
  {
    id: 1467,
    question:
      "What are the ideal conditions for conducting an infrared thermography scan of a building?",
    options: [
      "Bright sunny day with minimal wind",
      "A temperature difference of at least 18°F between inside and outside, and minimal wind and direct sunlight",
      "Overcast sky with high humidity",
      "Any condition as long as the building is occupied",
    ],
    correctAnswer: 1,
    explanation:
      "红外热成像扫描的理想条件是室内外温差至少18°F（10°C），且风力小、无直射阳光。温差越大，缺陷越容易识别。扫描通常在清晨或夜间进行以避免阳光干扰。",
    category: "insulation",
  },
  {
    id: 1468,
    question:
      "What does a cold spot on an interior wall detected by infrared thermography during winter typically indicate?",
    options: [
      "A plumbing leak behind the wall",
      "Missing or inadequate insulation or air infiltration",
      "An electrical short circuit",
      "A structural defect in the framing",
    ],
    correctAnswer: 1,
    explanation:
      "冬季红外热成像在室内墙壁上检测到的冷点通常表明保温缺失、不足或空气渗透。冷点表面温度低于周围区域，说明该处的热阻较低。",
    category: "insulation",
  },
  {
    id: 1469,
    question:
      "What is the stack effect and how does it relate to air leakage in homes?",
    options: [
      "The tendency for chimneys to stack smoke during calm weather",
      "Warm air rising inside a building creates pressure differences that drive air leakage at the top and bottom of the building",
      "The stacking of insulation layers for maximum R-value",
      "The effect of stacking multiple HVAC units in a building",
    ],
    correctAnswer: 1,
    explanation:
      "烟囱效应是指建筑内温暖空气上升产生压力差，驱动建筑顶部和底部的空气泄漏。温暖空气从上部泄漏，冷空气从下部渗入。这在冬季最为明显，是空气泄漏的主要驱动力。",
    category: "insulation",
  },
  {
    id: 1470,
    question:
      "When inspecting insulation in an attic, what minimum depth of blown-in fiberglass would indicate approximately R-30?",
    options: [
      "About 5 inches",
      "About 8 inches",
      "About 10 inches",
      "About 14 inches",
    ],
    correctAnswer: 2,
    explanation:
      "大约10英寸深的吹入式玻璃纤维可以提供约R-30的保温值。玻璃纤维每英寸约R-2.5到R-3.2（取决于密度），所以R-30需要大约10英寸的厚度。",
    category: "insulation",
  },
  {
    id: 1471,
    question:
      "What is the main concern when insulation is in contact with a Type IC-rated recessed light fixture?",
    options: [
      "No concern - IC-rated fixtures are designed for insulation contact",
      "The insulation will catch fire immediately",
      "The light fixture will not work properly",
      "The insulation will void the home warranty",
    ],
    correctAnswer: 0,
    explanation:
      "IC额定的嵌入式灯具设计为可以与保温材料直接接触，没有安全隐患。IC代表Insulation Contact。非IC额定的灯具必须与保温材料保持至少3英寸的间距以防止过热。",
    category: "insulation",
  },
  {
    id: 1472,
    question:
      "What clearance must be maintained between insulation and a non-IC-rated recessed light fixture?",
    options: ["1 inch", "2 inches", "3 inches", "6 inches"],
    correctAnswer: 2,
    explanation:
      "非IC额定的嵌入式灯具必须与保温材料保持至少3英寸的间距。这些灯具在运行时会产生大量热量，与保温材料接触可能导致过热甚至火灾。",
    category: "insulation",
  },
  {
    id: 1473,
    question:
      "What is the recommended insulation approach for a home with knob-and-tube wiring in the attic?",
    options: [
      "Blow in cellulose directly over the knob-and-tube wiring",
      "Do not insulate over active knob-and-tube wiring; it must be replaced or de-energized first",
      "Wrap each wire with fiberglass before insulating",
      "Use only spray foam to encapsulate the wiring",
    ],
    correctAnswer: 1,
    explanation:
      "不应在活跃的旋钮管线布线上方安装保温材料，因为这些旧式线路通过空气散热。覆盖保温材料会导致线路过热，增加火灾风险。必须先更换或停用布线才能添加保温。",
    category: "insulation",
  },
  {
    id: 1474,
    question:
      "What is the purpose of a vapor diffusion port in an unvented attic assembly?",
    options: [
      "To allow combustion gases to escape",
      "To allow small amounts of moisture vapor to escape the attic to prevent condensation buildup",
      "To provide fresh air for the HVAC system",
      "To equalize air pressure between the attic and living space",
    ],
    correctAnswer: 1,
    explanation:
      "无通风阁楼组件中的蒸汽扩散口允许少量水蒸气从阁楼逸出，防止冷凝积聚。这是一种较新的建筑方法，在密封阁楼中提供受控的水分管理。",
    category: "insulation",
  },
  {
    id: 1475,
    question:
      "When insulating a 2x4 exterior wall cavity with fiberglass batts, what R-value batt should be used?",
    options: ["R-11", "R-13 or R-15", "R-19", "R-21"],
    correctAnswer: 1,
    explanation:
      "2x4外墙空腔的深度约为3.5英寸，应使用R-13或R-15的玻璃纤维棉卷。R-15高密度棉卷在相同空间内提供更高的R值，是更好的选择。",
    category: "insulation",
  },
  {
    id: 1476,
    question:
      "When insulating a 2x6 exterior wall cavity with fiberglass batts, what R-value batt is typically used?",
    options: ["R-13", "R-19 or R-21", "R-30", "R-38"],
    correctAnswer: 1,
    explanation:
      "2x6外墙空腔的深度约为5.5英寸，通常使用R-19或R-21的玻璃纤维棉卷。R-21高密度棉卷可以在相同的空腔深度内提供更高的保温性能。",
    category: "insulation",
  },
  {
    id: 1477,
    question: "What is the primary problem with compressed fiberglass batt insulation?",
    options: [
      "It becomes a fire hazard",
      "It releases harmful fibers",
      "Its R-value is significantly reduced",
      "It attracts pests and rodents",
    ],
    correctAnswer: 2,
    explanation:
      "压缩的玻璃纤维棉卷会显著降低R值。玻璃纤维的隔热效果依赖于纤维之间捕获的静止空气。压缩减少了空气空间，从而降低了保温性能。",
    category: "insulation",
  },
  {
    id: 1478,
    question:
      "What is a kraft paper facing on fiberglass batt insulation designed to serve as?",
    options: [
      "A fire retardant layer",
      "A Class II vapor retarder",
      "An air barrier",
      "A structural reinforcement",
    ],
    correctAnswer: 1,
    explanation:
      "玻璃纤维棉卷上的牛皮纸面层用作Class II蒸汽阻隔层（渗透率约为0.3-1.0 perm）。在需要蒸汽阻隔的气候区，面层应朝向温暖的一侧安装。",
    category: "insulation",
  },
  {
    id: 1479,
    question:
      "In what situation would unfaced fiberglass batts be preferred over kraft-faced batts?",
    options: [
      "When insulating exterior walls in cold climates",
      "When adding a second layer of insulation over existing insulation in an attic",
      "When insulating basement walls for the first time",
      "When the building code requires a vapor retarder",
    ],
    correctAnswer: 1,
    explanation:
      "在阁楼已有保温层上添加第二层保温时，应使用无面层棉卷。添加第二层有面层的棉卷会在保温层中间创建蒸汽阻隔，可能导致冷凝和霉菌问题。",
    category: "insulation",
  },
  {
    id: 1480,
    question:
      "What is Structural Insulated Panel (SIP) construction?",
    options: [
      "Standard stud walls with extra insulation",
      "A sandwich panel consisting of rigid foam insulation bonded between two structural facings (typically OSB)",
      "A metal panel with fiberglass fill",
      "A concrete panel with embedded heating elements",
    ],
    correctAnswer: 1,
    explanation:
      "结构保温板（SIP）是一种三明治结构面板，由两层结构面板（通常为OSB定向刨花板）之间夹着刚性泡沫保温材料组成。SIP提供出色的保温和气密性，并减少热桥。",
    category: "insulation",
  },
  {
    id: 1481,
    question:
      "What percentage of a home's energy loss typically occurs through the attic if it is poorly insulated?",
    options: ["About 5-10%", "About 15-20%", "About 25-40%", "About 50-60%"],
    correctAnswer: 2,
    explanation:
      "如果阁楼保温不良，大约25-40%的家庭能量损失可能通过阁楼发生。热空气上升（对流），通过保温不足的天花板和阁楼旁路逃逸，使阁楼成为最重要的保温区域。",
    category: "insulation",
  },
  {
    id: 1482,
    question:
      "What is the difference between nominal R-value and installed R-value?",
    options: [
      "There is no difference",
      "Nominal R-value is the laboratory-tested value; installed R-value accounts for real-world installation quality and conditions",
      "Nominal R-value is always higher than installed R-value by exactly 50%",
      "Installed R-value is always higher due to compression",
    ],
    correctAnswer: 1,
    explanation:
      "标称R值是实验室测试值，而安装R值考虑了实际安装质量和条件。安装不当（如间隙、压缩、热桥）会使实际R值低于标称值。因此安装质量对保温性能至关重要。",
    category: "insulation",
  },
  {
    id: 1483,
    question:
      "What is the role of house wrap (e.g., Tyvek) in the building envelope?",
    options: [
      "It serves as the primary insulation layer",
      "It acts as a weather-resistive barrier (WRB) that blocks bulk water and air while allowing vapor to pass through",
      "It is purely decorative and provides no functional benefit",
      "It serves as the primary structural sheathing",
    ],
    correctAnswer: 1,
    explanation:
      "房屋包裹材料（如Tyvek）作为耐候屏障（WRB），阻挡大量水和空气渗透，同时允许水蒸气通过。这保护了墙体组件免受水分损害，同时让墙壁可以\"呼吸\"排出内部湿气。",
    category: "insulation",
  },
  {
    id: 1484,
    question:
      "What is the minimum thickness of closed-cell spray foam required to achieve a Class II vapor retarder rating?",
    options: ["0.5 inches", "1.0 inch", "1.5 inches", "3.0 inches"],
    correctAnswer: 2,
    explanation:
      "1.5英寸厚的闭孔喷涂泡沫可以达到Class II蒸汽阻隔层等级（渗透率约为0.8 perm）。更厚的应用会进一步降低渗透率，接近Class I蒸汽屏障。",
    category: "insulation",
  },
  {
    id: 1485,
    question:
      "What common insulation defect can be identified by looking for dark staining on insulation or drywall in the attic?",
    options: [
      "Insulation that has gotten wet from a roof leak",
      "Air leakage - the staining is from filtered dust deposited by moving air",
      "Chemical breakdown of the insulation material",
      "Insect infestation in the insulation",
    ],
    correctAnswer: 1,
    explanation:
      "阁楼中保温材料或石膏板上的深色污渍通常表明空气泄漏。空气从生活空间通过间隙进入阁楼时，灰尘被保温纤维过滤沉积，留下深色痕迹。这被称为\"过滤脏\"（filter ghosting）。",
    category: "insulation",
  },
  {
    id: 1486,
    question:
      "What is the concern with spray foam insulation applied directly to the underside of roof sheathing in an unvented attic?",
    options: [
      "It will damage the shingles",
      "If not properly installed, it can trap moisture against the sheathing, potentially causing rot",
      "It violates all building codes",
      "It prevents the roof from being replaced",
    ],
    correctAnswer: 1,
    explanation:
      "在无通风阁楼中将喷涂泡沫直接涂在屋顶底板下方，如果安装不当，可能会将水分困在底板上，导致腐烂。必须确保足够的泡沫厚度以防止冷凝，并且屋顶必须没有现有的水分问题。",
    category: "insulation",
  },
  {
    id: 1487,
    question:
      "What is the 'dew point' and why is it important in insulation design?",
    options: [
      "The temperature at which morning dew forms on the roof",
      "The temperature at which water vapor in the air condenses into liquid water",
      "The optimal temperature for installing spray foam insulation",
      "The minimum temperature for insulation to be effective",
    ],
    correctAnswer: 1,
    explanation:
      "露点是空气中水蒸气凝结成液态水的温度。在保温设计中，了解露点位置很重要，因为如果墙体或屋顶组件内部温度降至露点以下，就会发生冷凝，导致霉菌和结构损害。",
    category: "insulation",
  },
  {
    id: 1488,
    question:
      "What is 'flash and batt' insulation and when is it used?",
    options: [
      "Using a camera flash to inspect batt insulation",
      "A hybrid method where a thin layer of closed-cell spray foam is applied first, followed by fiberglass batts to fill the remainder of the cavity",
      "Quickly installing batts without proper fitting",
      "Using reflective-faced batts in wall cavities",
    ],
    correctAnswer: 1,
    explanation:
      "Flash and batt是一种混合保温方法，先在空腔表面喷涂一层薄的闭孔泡沫（通常1-2英寸），然后用玻璃纤维棉卷填充剩余空间。泡沫提供空气密封和蒸汽控制，棉卷以较低成本增加R值。",
    category: "insulation",
  },
  {
    id: 1489,
    question:
      "What is the main benefit of using rigid foam board insulation on the exterior of foundation walls?",
    options: [
      "It makes the foundation waterproof",
      "It provides continuous insulation without thermal bridging and protects the waterproofing membrane",
      "It replaces the need for structural reinforcement",
      "It is required by all California building codes",
    ],
    correctAnswer: 1,
    explanation:
      "在基础墙外侧使用刚性泡沫板可以提供连续保温（无热桥），并保护防水膜。它还使基础墙保持在温暖侧，减少冷凝风险，并作为回填时的保护层。",
    category: "insulation",
  },
  {
    id: 1490,
    question:
      "When insulating between floor joists over an unheated garage, what is important to include besides insulation?",
    options: [
      "Only the insulation is needed",
      "An air barrier on the underside of the joists to prevent air washing through the insulation",
      "A layer of sand on top of the insulation",
      "Additional floor joists for structural support",
    ],
    correctAnswer: 1,
    explanation:
      "在未供暖车库上方的地板搁栅之间安装保温时，在搁栅下方安装空气屏障很重要。这防止车库中的冷空气\"洗涤\"通过保温材料（对流循环），否则会大大降低保温效果。",
    category: "insulation",
  },
  {
    id: 1491,
    question:
      "What R-value does a standard 2x4 wood stud provide?",
    options: ["R-1.25", "R-4.38", "R-6.88", "R-10.00"],
    correctAnswer: 1,
    explanation:
      "标准2x4木骨架（实际深度3.5英寸）提供约R-4.38的保温值（木材每英寸约R-1.25）。相比之下，3.5英寸的R-15玻璃纤维棉卷提供R-15，这就是为什么骨架位置会产生热桥。",
    category: "insulation",
  },
  {
    id: 1492,
    question:
      "What is the typical percentage of a wall's area that consists of framing (including headers, plates, cripples)?",
    options: ["About 5%", "About 15%", "About 25%", "About 40%"],
    correctAnswer: 2,
    explanation:
      "典型木框架墙体约25%的面积由框架构件组成（包括骨架、顶板、底板、过梁、短柱等）。这些框架区域的保温值远低于空腔保温，导致整体墙体R值降低。",
    category: "insulation",
  },
  {
    id: 1493,
    question:
      "What does the term 'R-value of the whole wall assembly' mean?",
    options: [
      "The R-value of just the insulation in the cavity",
      "The effective R-value considering all components including framing, sheathing, air films, and insulation",
      "The R-value of the exterior cladding only",
      "The R-value measured at the warmest point of the wall",
    ],
    correctAnswer: 1,
    explanation:
      "整体墙体组件的R值是考虑所有组件（包括框架、外护板、空气膜、保温材料、内饰面等）后的有效R值。由于热桥效应，整体墙体R值通常比空腔保温的标称R值低20-30%。",
    category: "insulation",
  },
  {
    id: 1494,
    question:
      "What is the purpose of a blower door 'guided' air sealing procedure?",
    options: [
      "Using the blower door to blow insulation into wall cavities",
      "Running the blower door while a technician uses smoke pencils or hands to locate and seal air leaks in real time",
      "Using the blower door to test the HVAC system efficiency",
      "Measuring the home's indoor air quality while depressurized",
    ],
    correctAnswer: 1,
    explanation:
      "鼓风门引导式空气密封程序是在鼓风门运行时，技术人员使用烟雾笔或手来实时定位和密封空气泄漏。减压使泄漏点更容易被发现，可以立即修补并验证效果。",
    category: "insulation",
  },
  {
    id: 1495,
    question:
      "What is the concern with using a Class I vapor retarder (such as polyethylene sheeting) on the interior of walls in California's warm climate zones?",
    options: [
      "It is too expensive for residential use",
      "It can trap moisture inside the wall assembly during cooling season when vapor drive is inward",
      "It does not provide any vapor protection",
      "It will react chemically with the insulation",
    ],
    correctAnswer: 1,
    explanation:
      "在加州温暖气候区的墙壁内侧使用Class I蒸汽阻隔层（如聚乙烯薄膜）可能会在制冷季节（蒸汽驱动向内时）将水分困在墙体组件内，导致冷凝和霉菌问题。",
    category: "insulation",
  },
  {
    id: 1496,
    question:
      "What type of insulation is most resistant to water absorption and suitable for below-grade applications?",
    options: [
      "Fiberglass batts",
      "Cellulose loose-fill",
      "Closed-cell spray foam or XPS rigid foam",
      "Open-cell spray foam",
    ],
    correctAnswer: 2,
    explanation:
      "闭孔喷涂泡沫和XPS刚性泡沫板最耐水吸收，适合地下应用（如基础墙和地下室）。它们的闭合孔结构几乎不吸水，在潮湿环境中能保持保温性能。",
    category: "insulation",
  },
  {
    id: 1497,
    question:
      "What is the 'thermal envelope' of a building?",
    options: [
      "A mailing pouch made of insulating material",
      "The continuous boundary of insulation, air barrier, and vapor control that separates conditioned from unconditioned space",
      "The HVAC system's operating temperature range",
      "The exterior paint and finish of the building",
    ],
    correctAnswer: 1,
    explanation:
      "建筑的热围护结构是将调节空间与非调节空间分隔开的保温、空气屏障和蒸汽控制的连续边界。热围护结构的连续性和完整性对能源效率至关重要。",
    category: "insulation",
  },
  {
    id: 1498,
    question:
      "What is the significance of the 'pressure boundary' in building science?",
    options: [
      "The maximum water pressure a building's plumbing can handle",
      "The air barrier location that separates areas of different air pressure, which should align with the thermal boundary",
      "The structural load-bearing capacity of the walls",
      "The pressure rating of the building's fire suppression system",
    ],
    correctAnswer: 1,
    explanation:
      "压力边界是分隔不同气压区域的空气屏障位置。理想情况下，压力边界应与热边界（保温层）对齐。如果两者不对齐，空气会通过保温层流动，大大降低其有效性。",
    category: "insulation",
  },
  {
    id: 1499,
    question:
      "What is the problem known as 'wind washing' of insulation?",
    options: [
      "Rain water physically washing insulation out of wall cavities",
      "Outdoor air moving through or around insulation in the building envelope, reducing its effectiveness",
      "Using a pressure washer to clean insulation",
      "Wind damage to exterior insulation finish systems",
    ],
    correctAnswer: 1,
    explanation:
      "风洗涤是指室外空气通过或绕过建筑围护结构中的保温材料流动，降低其有效性。这常见于屋檐处保温材料暴露在阁楼通风气流中的区域。挡板可以防止这种情况。",
    category: "insulation",
  },
  {
    id: 1500,
    question:
      "What is the RESNET Grade I insulation installation standard?",
    options: [
      "Using only premium grade insulation materials",
      "Insulation fills the cavity completely with no gaps, voids, compressions, or missing areas",
      "Installing insulation with a 1-inch air gap for ventilation",
      "Using only spray foam insulation throughout the home",
    ],
    correctAnswer: 1,
    explanation:
      "RESNET Grade I保温安装标准要求保温材料完全填充空腔，没有间隙、空洞、压缩或缺失区域。这是最高质量的安装等级，可以确保保温材料达到其额定R值性能。",
    category: "insulation",
  },
  {
    id: 1501,
    question:
      "What is the difference between loose-fill cellulose settling and dense-pack cellulose settling?",
    options: [
      "Neither type settles over time",
      "Loose-fill cellulose can settle 10-20% over time reducing R-value; dense-pack cellulose is installed at sufficient density to resist settling",
      "Both types settle equally",
      "Dense-pack settles more than loose-fill",
    ],
    correctAnswer: 1,
    explanation:
      "松散填充纤维素随时间可能沉降10-20%，降低R值。密实填充纤维素以足够的密度安装（每立方英尺3.5磅以上）以抵抗沉降。松散填充应安装过量以补偿预期的沉降。",
    category: "insulation",
  },
  {
    id: 1502,
    question:
      "When using a moisture meter during an insulation inspection, what moisture content in wood framing would indicate a problem?",
    options: [
      "Above 5%",
      "Above 10%",
      "Above 19-20%",
      "Above 50%",
    ],
    correctAnswer: 2,
    explanation:
      "木材含水量超过19-20%表明存在问题。正常室内条件下木材含水量应为8-14%。超过20%的含水量可能导致霉菌生长和木材腐烂，需要进一步调查水分来源。",
    category: "insulation",
  },
  {
    id: 1503,
    question:
      "What is an Insulation Contact Air Tight (ICAT) recessed light fixture?",
    options: [
      "A fixture that requires no insulation around it",
      "A fixture rated for insulation contact AND is airtight to prevent air leakage into the attic",
      "A fixture that can only be used in non-insulated spaces",
      "A fixture designed for commercial use only",
    ],
    correctAnswer: 1,
    explanation:
      "ICAT嵌入式灯具既有IC（保温接触）额定又是气密的。IC额定允许保温材料直接接触灯具，气密设计防止空气通过灯具泄漏到阁楼。这是当前标准做法。",
    category: "insulation",
  },
  {
    id: 1504,
    question:
      "What is the minimum recommended attic insulation R-value for existing homes in most California climate zones per current energy code?",
    options: ["R-19", "R-30", "R-38", "R-49"],
    correctAnswer: 2,
    explanation:
      "对于加州大多数气候区的现有住宅，当前能源法规推荐的最低阁楼保温R值为R-38。较冷的山区气候区可能要求R-49。新建住宅通常要求更高的R值。",
    category: "insulation",
  },
  {
    id: 1505,
    question:
      "What is the purpose of cross-ventilation in attic design?",
    options: [
      "To provide fresh air for the living spaces below",
      "To remove heat and moisture from the attic by allowing air to flow from intake vents to exhaust vents",
      "To strengthen the roof structure",
      "To prevent ice dam formation by heating the attic",
    ],
    correctAnswer: 1,
    explanation:
      "阁楼交叉通风的目的是通过允许空气从进气口流向排气口来去除阁楼中的热量和湿气。这延长了屋顶材料的寿命，防止冷凝，并在夏季降低阁楼温度。",
    category: "insulation",
  },
  {
    id: 1506,
    question:
      "What is the minimum net free area of soffit vents recommended for proper attic ventilation when combined with ridge venting?",
    options: [
      "1/300 of the attic floor area total, split between ridge and soffit",
      "1/150 of the attic floor area for soffit vents alone",
      "1 square inch per linear foot of soffit",
      "No soffit vents are needed if a ridge vent is present",
    ],
    correctAnswer: 0,
    explanation:
      "当有平衡的脊部和屋檐通风时（上部排气口至少占总面积的50%），可以使用1:300的比例（总通风面积为阁楼地面面积的1/300），在脊部和屋檐之间分配。",
    category: "insulation",
  },
  {
    id: 1507,
    question:
      "What is the danger of mixing different attic ventilation types, such as ridge vents with gable vents?",
    options: [
      "There is no danger; mixing ventilation types is always beneficial",
      "The different vent types can short-circuit the ventilation, with gable vents acting as both intake and exhaust",
      "The attic will become too cold in winter",
      "The combined ventilation will create structural damage",
    ],
    correctAnswer: 1,
    explanation:
      "混合不同类型的阁楼通风（如脊部通风口和山墙通风口）可能导致通风短路。山墙通风口可能同时作为进气口和排气口，使脊部和屋檐之间的理想气流模式失效，部分阁楼区域可能通风不足。",
    category: "insulation",
  },
  {
    id: 1508,
    question:
      "What is the proper way to insulate around a masonry chimney in an attic?",
    options: [
      "Pack fiberglass batts tightly against the chimney",
      "Use spray foam to seal around the chimney",
      "Maintain a 2-inch clearance and use non-combustible materials (metal flashing and fire-rated caulk) for air sealing",
      "No insulation or sealing is needed around chimneys",
    ],
    correctAnswer: 2,
    explanation:
      "在阁楼中的砖石烟囱周围应保持2英寸的间距，并使用不可燃材料（金属挡板和防火密封胶）进行空气密封。可燃保温材料不能与烟囱接触，但间隙必须密封以防止空气泄漏。",
    category: "insulation",
  },
  {
    id: 1509,
    question:
      "What is the difference between conduction, convection, and radiation as modes of heat transfer?",
    options: [
      "They are three names for the same process",
      "Conduction is heat transfer through direct contact; convection is through moving air/fluid; radiation is through electromagnetic waves",
      "Conduction is in solids only; convection is in liquids only; radiation is in gases only",
      "They only apply to commercial buildings, not residential",
    ],
    correctAnswer: 1,
    explanation:
      "传导是通过直接接触传递热量（如通过墙壁）；对流是通过移动的空气或流体传递（如空气泄漏）；辐射是通过电磁波传递（如太阳热量）。不同类型的保温材料针对不同的热传递方式。",
    category: "insulation",
  },
  {
    id: 1510,
    question:
      "What does a home inspector look for when evaluating the condition of existing blown-in attic insulation?",
    options: [
      "Only the brand name of the insulation",
      "Depth/coverage uniformity, settling, moisture damage, pest contamination, and displaced areas",
      "Only whether the insulation is white or yellow",
      "The date of installation stamped on the insulation",
    ],
    correctAnswer: 1,
    explanation:
      "评估现有吹入式阁楼保温时，检查员应查看深度/覆盖均匀性、沉降、水分损害、害虫污染和位移区域。还应注意保温材料是否覆盖了所有搁栅，以及是否有明显的间隙或薄弱区域。",
    category: "insulation",
  },
  {
    id: 1511,
    question:
      "What is a common sign of inadequate wall insulation that can be observed from the exterior during cold weather?",
    options: [
      "Paint peeling from the siding",
      "Patterns of frost or snow melt on exterior walls, or warm spots visible on infrared camera",
      "Cracks in the stucco",
      "Discoloration of the brickwork",
    ],
    correctAnswer: 1,
    explanation:
      "在寒冷天气中，从外部可以观察到霜或雪在外墙上不均匀融化的模式，或用红外相机可以看到暖点。这些都表明墙壁保温不足或缺失，热量正在通过墙壁快速散失。",
    category: "insulation",
  },
  {
    id: 1512,
    question:
      "What is the recommended approach for insulating rim joists in a basement or crawl space?",
    options: [
      "Leave them uninsulated for ventilation",
      "Cut rigid foam boards to fit and seal all edges with caulk or foam, or use spray foam",
      "Stuff fiberglass batts loosely into the space",
      "Apply a layer of paint for thermal protection",
    ],
    correctAnswer: 1,
    explanation:
      "边缘搁栅的推荐保温方法是切割刚性泡沫板使其贴合，并用密封胶或泡沫密封所有边缘，或使用喷涂泡沫。重要的是同时实现保温和空气密封。松散填塞的玻璃纤维棉卷效果较差。",
    category: "insulation",
  },
  {
    id: 1513,
    question:
      "What insulation material was commonly used in homes built before the 1980s that is now considered a health hazard?",
    options: [
      "Fiberglass",
      "Asbestos-containing insulation (vermiculite, pipe wrap)",
      "Cellulose",
      "Rock wool",
    ],
    correctAnswer: 1,
    explanation:
      "1980年代之前建造的房屋中常用含石棉的保温材料（如蛭石/Zonolite、管道包裹、暖气管保温等）。石棉纤维在扰动时会释放到空气中，吸入可导致严重的肺部疾病和癌症。",
    category: "insulation",
  },
  {
    id: 1514,
    question:
      "What is vermiculite insulation and why is it a concern during home inspections?",
    options: [
      "A modern spray foam product with no concerns",
      "A granular mineral insulation that may contain asbestos, especially if it is Zonolite brand from the Libby, Montana mine",
      "A type of fiberglass that causes skin irritation",
      "A cellulose product that is highly flammable",
    ],
    correctAnswer: 1,
    explanation:
      "蛭石是一种颗粒状矿物保温材料，特别是Libby, Montana矿山生产的Zonolite品牌，可能含有石棉（tremolite）。在检查中发现蛭石保温时，应假定含有石棉，除非经过测试证明不含。",
    category: "insulation",
  },
  {
    id: 1515,
    question:
      "What is UFFI (Urea Formaldehyde Foam Insulation) and why was it banned?",
    options: [
      "A modern eco-friendly insulation that is still widely used",
      "A foam insulation injected into wall cavities in the 1970s-80s that was banned due to formaldehyde off-gassing concerns",
      "An exterior insulation system for commercial buildings",
      "A fire-resistant coating applied to steel structures",
    ],
    correctAnswer: 1,
    explanation:
      "UFFI（脲醛泡沫保温材料）是1970-80年代注入墙壁空腔的泡沫保温材料，因释放甲醛气体而被禁用。甲醛可能导致呼吸系统问题。在旧房检查中可能仍会发现这种材料。",
    category: "insulation",
  },
  {
    id: 1516,
    question:
      "What is the proper installation of faced batt insulation in an exterior wall in California?",
    options: [
      "With the facing toward the exterior sheathing",
      "With the facing toward the interior (warm-in-winter side) of the wall",
      "With the facing removed before installation",
      "With the facing facing upward regardless of orientation",
    ],
    correctAnswer: 1,
    explanation:
      "在加州的外墙中，有面层的棉卷保温材料应将面层朝向室内（冬季温暖的一侧）安装。面层作为蒸汽阻隔层，应始终安装在暖侧以防止冷凝。",
    category: "insulation",
  },
  {
    id: 1517,
    question:
      "What is the fire safety concern with rigid foam board insulation used on interior surfaces?",
    options: [
      "There is no fire safety concern",
      "It must be covered with a 15-minute thermal barrier (typically 1/2-inch drywall) because the foam produces toxic smoke when burning",
      "It must be painted with fire-retardant paint only",
      "It needs to be wrapped in aluminum foil",
    ],
    correctAnswer: 1,
    explanation:
      "室内表面使用的刚性泡沫板必须覆盖15分钟热屏障（通常为1/2英寸石膏板），因为泡沫燃烧时会产生有毒烟雾。这是建筑规范对居住空间中暴露泡沫保温材料的安全要求。",
    category: "insulation",
  },
  {
    id: 1518,
    question:
      "What does 'R-value per dollar' mean and why is it relevant to homeowners?",
    options: [
      "The resale value increase per dollar spent on insulation",
      "A cost-effectiveness measure comparing the insulating value gained per dollar spent on different insulation types",
      "The tax credit amount for each R-value point of insulation",
      "The amount of money saved per year for each R-value point",
    ],
    correctAnswer: 1,
    explanation:
      "每美元R值是比较不同保温类型性价比的指标。例如，玻璃纤维棉卷通常每美元提供最高的R值，而喷涂泡沫R值高但成本也高。房主可以据此做出明智的保温投资决策。",
    category: "insulation",
  },
  {
    id: 1519,
    question:
      "What are the signs of rodent damage to attic insulation?",
    options: [
      "The insulation turns blue",
      "Tunnels, nesting areas, droppings, compressed paths, and urine stains in the insulation",
      "The insulation becomes harder and more rigid",
      "Chemical odor from the insulation",
    ],
    correctAnswer: 1,
    explanation:
      "啮齿动物损害阁楼保温的迹象包括隧道、筑巢区域、粪便、压缩路径和尿液污渍。受损的保温材料可能需要清除和更换，因为啮齿动物粪便和尿液可能携带疾病。",
    category: "insulation",
  },
  {
    id: 1520,
    question:
      "What is the minimum clearance required between insulation and a combustion appliance flue or vent pipe in an attic?",
    options: [
      "0 inches - insulation can touch the flue",
      "1 inch for all types",
      "Depends on the type: typically 1 inch for metal B-vent, 2 inches for masonry chimneys",
      "6 inches for all types",
    ],
    correctAnswer: 2,
    explanation:
      "保温材料与燃烧器具烟道之间的最低间距取决于类型：金属B型通风管通常需要1英寸间距，砖石烟囱需要2英寸间距。间隙应使用不可燃材料（金属挡板）密封以防止空气泄漏。",
    category: "insulation",
  },
  {
    id: 1521,
    question:
      "What is 'ice and water shield' membrane and where is it typically installed?",
    options: [
      "A type of insulation for freezers",
      "A self-adhering waterproof membrane installed at the roof eaves, valleys, and penetrations to prevent water damage from ice dams and wind-driven rain",
      "A concrete sealer for basement walls",
      "A type of window film for cold climates",
    ],
    correctAnswer: 1,
    explanation:
      "冰水防护膜是一种自粘防水膜，安装在屋顶屋檐、谷部和穿透处，防止冰坝和风驱雨造成的水损害。在可能形成冰坝的地区，它应从屋檐延伸到内墙线以上至少24英寸。",
    category: "insulation",
  },
  {
    id: 1522,
    question:
      "What is the maximum lift thickness for open-cell spray foam insulation applied in a single pass?",
    options: [
      "1 inch",
      "3-4 inches",
      "6 inches",
      "There is no limit",
    ],
    correctAnswer: 1,
    explanation:
      "开孔喷涂泡沫单次喷涂的最大厚度通常为3-4英寸。超过此厚度需要分多次喷涂，因为泡沫膨胀产生的热量（放热反应）如果过多可能导致问题，包括收缩或着火风险。",
    category: "insulation",
  },
  {
    id: 1523,
    question:
      "What is the maximum lift thickness for closed-cell spray foam insulation applied in a single pass?",
    options: [
      "1 inch",
      "2 inches",
      "4 inches",
      "6 inches",
    ],
    correctAnswer: 1,
    explanation:
      "闭孔喷涂泡沫单次喷涂的最大厚度通常为2英寸。闭孔泡沫反应更剧烈，产生更多热量，需要在每次喷涂之间等待冷却。超过限制可能导致开裂、收缩或火灾隐患。",
    category: "insulation",
  },
  {
    id: 1524,
    question:
      "What does 'air sealing' of a home refer to?",
    options: [
      "Making the home completely airtight with no ventilation",
      "Identifying and sealing unintentional air leaks in the building envelope to reduce infiltration and exfiltration",
      "Installing a fresh air system",
      "Sealing all windows permanently shut",
    ],
    correctAnswer: 1,
    explanation:
      "空气密封是指识别和密封建筑围护结构中无意的空气泄漏，以减少渗透和漏出。这不是要使建筑完全密封，而是控制不受控制的空气流动。受控通风仍然是必要的。",
    category: "insulation",
  },
  {
    id: 1525,
    question:
      "According to building science principles, what should be done when a home is significantly air sealed?",
    options: [
      "Nothing additional is needed",
      "Mechanical ventilation should be provided to ensure adequate indoor air quality",
      "All windows should be left open at all times",
      "The HVAC system should be turned off",
    ],
    correctAnswer: 1,
    explanation:
      "当房屋被显著密封后，应提供机械通风以确保足够的室内空气质量。原则是\"先密封，后通风\"——首先控制不受控制的泄漏，然后通过机械系统提供受控的新鲜空气。",
    category: "insulation",
  },
  {
    id: 1526,
    question:
      "What type of insulation is commonly used to insulate water heater tanks?",
    options: [
      "Spray foam applied directly to the tank",
      "An insulation blanket (jacket) wrapped around the tank",
      "Loose-fill cellulose poured over the tank",
      "Rigid foam board glued to the tank",
    ],
    correctAnswer: 1,
    explanation:
      "保温毯（夹克）通常包裹在热水器储水箱周围以减少待机热损失。这对于较旧的、保温不足的热水器特别有效。但注意不要覆盖控制面板、通风口或燃气热水器的燃烧空气入口。",
    category: "insulation",
  },
  {
    id: 1527,
    question:
      "What is the potential health concern when disturbing old insulation during a home inspection?",
    options: [
      "There are no health concerns with any insulation",
      "Possible exposure to asbestos fibers, rodent droppings, mold spores, or fiberglass particles",
      "Electric shock from static buildup in insulation",
      "Chemical burns from insulation adhesives",
    ],
    correctAnswer: 1,
    explanation:
      "扰动旧保温材料时可能暴露于石棉纤维、啮齿动物粪便（汉坦病毒风险）、霉菌孢子或玻璃纤维颗粒。检查员应在阁楼和爬行空间中佩戴适当的呼吸保护设备。",
    category: "insulation",
  },
  {
    id: 1528,
    question:
      "What is the U-factor and how does it relate to R-value?",
    options: [
      "U-factor and R-value measure the same thing in the same units",
      "U-factor is the inverse of R-value (U = 1/R); it measures the rate of heat transfer through a material",
      "U-factor measures air leakage; R-value measures heat transfer",
      "U-factor is used only for commercial buildings",
    ],
    correctAnswer: 1,
    explanation:
      "U因子是R值的倒数（U=1/R），衡量热量通过材料的传递速率。U因子越低，保温性能越好。窗户性能通常用U因子表示，而保温材料通常用R值表示。",
    category: "insulation",
  },
  {
    id: 1529,
    question:
      "What is the Solar Heat Gain Coefficient (SHGC) for windows?",
    options: [
      "The amount of heat a window generates from solar panels",
      "The fraction of solar radiation admitted through a window, ranging from 0 to 1",
      "The R-value of the window glass",
      "The UV protection rating of window tinting",
    ],
    correctAnswer: 1,
    explanation:
      "太阳热增益系数（SHGC）是通过窗户透入的太阳辐射比例，范围从0到1。在加州炎热气候区，通常要求较低的SHGC（如0.25）以减少制冷负荷。朝北窗户可以有较高的SHGC。",
    category: "insulation",
  },
  {
    id: 1530,
    question:
      "What is the typical R-value of a single-pane window?",
    options: [
      "About R-1",
      "About R-3",
      "About R-5",
      "About R-10",
    ],
    correctAnswer: 0,
    explanation:
      "单层玻璃窗户的R值约为R-1，保温性能很差。双层玻璃窗约为R-2到R-3，Low-E双层玻璃约为R-3到R-4，三层Low-E窗户可达R-5到R-8。窗户通常是建筑围护结构中热阻最低的部分。",
    category: "insulation",
  },
  {
    id: 1531,
    question:
      "What is 'Low-E' glass and what does it do?",
    options: [
      "Glass with a low energy content that is cheaper to manufacture",
      "Glass with a microscopically thin metallic coating that reflects infrared heat while allowing visible light to pass through",
      "Glass that is manufactured at low elevation",
      "Glass with reduced lead content for safety",
    ],
    correctAnswer: 1,
    explanation:
      "Low-E（低辐射率）玻璃表面有微薄的金属涂层，能反射红外热量同时允许可见光通过。这减少了通过窗户的热量传递，在冬季保留室内热量，在夏季反射太阳热量。",
    category: "insulation",
  },
  {
    id: 1532,
    question:
      "What is the purpose of argon gas fill between double-pane window glass?",
    options: [
      "To prevent the glass from breaking",
      "To reduce heat transfer between the panes because argon conducts heat less than air",
      "To prevent condensation between the panes",
      "To tint the glass for UV protection",
    ],
    correctAnswer: 1,
    explanation:
      "双层玻璃之间充入氩气是为了减少玻璃片之间的热传递。氩气的导热性比空气低约34%，因此可以提高窗户的保温性能。密封失效导致氩气泄漏是窗户老化的常见问题。",
    category: "insulation",
  },
  {
    id: 1533,
    question:
      "What is the sign that the seal has failed on a double-pane (insulated glass unit) window?",
    options: [
      "The window turns completely opaque",
      "Fog, condensation, or haze appears between the two panes of glass",
      "The window frame warps significantly",
      "The window becomes impossible to open",
    ],
    correctAnswer: 1,
    explanation:
      "双层玻璃窗密封失效的迹象是两层玻璃之间出现雾气、冷凝或模糊。这意味着密封破裂，湿气已经进入玻璃间的空间，同时氩气也已泄漏，降低了保温性能。",
    category: "insulation",
  },
  {
    id: 1534,
    question:
      "What is 'foam-in-place' insulation for existing walls?",
    options: [
      "Foam boards placed against the wall surface",
      "Injection foam pumped into enclosed wall cavities through small holes",
      "Spray foam applied to exposed wall studs during renovation",
      "Foam weatherstripping applied around door and window frames",
    ],
    correctAnswer: 1,
    explanation:
      "现场注入泡沫是通过在墙壁上钻的小孔将泡沫泵入封闭的墙体空腔中。这是一种改造保温的方法，适用于不拆除墙面的情况。常用的材料包括三聚氰胺泡沫、聚氨酯泡沫等。",
    category: "insulation",
  },
  {
    id: 1535,
    question:
      "What is the importance of maintaining a continuous air barrier in the building envelope?",
    options: [
      "It has no practical importance",
      "It prevents uncontrolled air leakage which can account for 25-40% of heating and cooling energy loss",
      "It is only important for sound insulation",
      "It is only required in commercial buildings",
    ],
    correctAnswer: 1,
    explanation:
      "保持建筑围护结构连续的空气屏障非常重要，因为不受控制的空气泄漏可能占供暖和制冷能量损失的25-40%。空气泄漏还可能携带水分，导致墙壁和阁楼内部冷凝。",
    category: "insulation",
  },
  {
    id: 1536,
    question:
      "What is the difference between 'faced' and 'unfaced' batt insulation?",
    options: [
      "Faced insulation is more expensive but performs identically",
      "Faced insulation has a paper or foil backing that serves as a vapor retarder; unfaced has no backing",
      "Unfaced insulation is thicker than faced insulation",
      "Faced insulation is for floors only; unfaced is for walls only",
    ],
    correctAnswer: 1,
    explanation:
      "有面层的棉卷有纸或箔背衬，作为蒸汽阻隔层；无面层的棉卷没有背衬。有面层的用于需要蒸汽阻隔的初始保温安装，无面层的用于添加额外保温层时。",
    category: "insulation",
  },
  {
    id: 1537,
    question:
      "Why should two layers of faced insulation never be installed in the same wall or ceiling assembly?",
    options: [
      "It makes the wall too heavy",
      "The double vapor retarder can trap moisture between the layers, causing condensation and mold",
      "Building codes prohibit using more than one layer of insulation",
      "The adhesives in the facing will react chemically",
    ],
    correctAnswer: 1,
    explanation:
      "在同一墙壁或天花板组件中安装两层有面层的保温材料会在两个蒸汽阻隔层之间形成潮气陷阱。水蒸气可能在两层之间冷凝，导致霉菌生长和材料损坏。第二层应始终使用无面层的保温材料。",
    category: "insulation",
  },
  {
    id: 1538,
    question:
      "What is the typical R-value requirement for slab-edge insulation in California?",
    options: [
      "No slab-edge insulation is required in California",
      "R-5 to R-10 depending on the climate zone",
      "R-19 minimum for all climate zones",
      "R-30 minimum for all climate zones",
    ],
    correctAnswer: 1,
    explanation:
      "加州的板缘保温要求根据气候区不同为R-5到R-10。板缘保温减少了通过混凝土板边缘的热量损失，在有供暖地板系统的建筑中尤为重要。",
    category: "insulation",
  },
  {
    id: 1539,
    question:
      "What is the main advantage of mineral wool insulation over fiberglass for fire safety?",
    options: [
      "Mineral wool and fiberglass have identical fire performance",
      "Mineral wool has a significantly higher melting point (over 2000°F) compared to fiberglass (about 1000°F)",
      "Mineral wool is completely fireproof and never burns",
      "Fiberglass is more fire-resistant than mineral wool",
    ],
    correctAnswer: 1,
    explanation:
      "矿棉的熔点显著高于玻璃纤维（矿棉超过2000°F，玻璃纤维约1000°F）。这使矿棉在火灾中提供更好的保护，特别适合用于防火墙和防火分隔处。",
    category: "insulation",
  },
  {
    id: 1540,
    question:
      "What is the purpose of a drainage plane in an exterior wall assembly?",
    options: [
      "To drain the plumbing system",
      "To provide a path for any water that penetrates the cladding to drain down and out of the wall assembly",
      "To level the wall surface for siding installation",
      "To drain condensation from the HVAC system",
    ],
    correctAnswer: 1,
    explanation:
      "排水面的目的是为穿过外墙覆层的水提供排出墙体组件的路径。排水面通常由房屋包裹材料或其他防水层提供，确保水沿着表面向下排出，而不是渗入墙壁内部。",
    category: "insulation",
  },
  {
    id: 1541,
    question:
      "What is a 'ventilation baffle' and why is it installed at the eaves of an attic?",
    options: [
      "A sound-dampening device for roof vents",
      "A channel that maintains an air gap between the roof sheathing and insulation to allow soffit vent airflow into the attic",
      "A decorative piece at the soffit",
      "A device that controls the amount of exhaust ventilation",
    ],
    correctAnswer: 1,
    explanation:
      "通风挡板是在屋顶底板和保温材料之间维持空气间隙的通道，允许屋檐通风口的气流进入阁楼。没有挡板，保温材料可能堵塞屋檐处的通风路径，导致通风不足和潮气问题。",
    category: "insulation",
  },
  {
    id: 1542,
    question:
      "What is the 'Energy Star' program's recommendation for attic insulation levels?",
    options: [
      "R-19 for all climate zones",
      "R-30 to R-60 depending on climate zone",
      "The same as the minimum building code requirements",
      "No specific recommendation is made",
    ],
    correctAnswer: 1,
    explanation:
      "能源之星计划建议阁楼保温水平根据气候区从R-30到R-60不等。这些建议通常高于最低建筑规范要求，旨在提供更好的能源效率和舒适度。",
    category: "insulation",
  },
  {
    id: 1543,
    question:
      "What is the impact of missing insulation around a recessed can light that is not air-sealed?",
    options: [
      "No significant impact",
      "A single unsealed can light can leak as much air as having a window left partially open",
      "It only affects light output",
      "It improves attic ventilation, which is beneficial",
    ],
    correctAnswer: 1,
    explanation:
      "一个未密封的嵌入式灯具可能会泄漏与部分打开窗户一样多的空气。热空气通过灯具开口上升到阁楼（烟囱效应），同时带走热量和水分。这就是为什么ICAT灯具越来越成为标准做法。",
    category: "insulation",
  },
  {
    id: 1544,
    question:
      "What insulation material has the best sound-deadening properties for interior partition walls?",
    options: [
      "Radiant barrier foil",
      "Mineral wool (Rockwool)",
      "Rigid foam board",
      "Reflective bubble wrap insulation",
    ],
    correctAnswer: 1,
    explanation:
      "矿棉（Rockwool）具有最好的隔音性能，适合室内隔墙使用。矿棉的密度（约每立方英尺1.7-2.5磅）和纤维结构使其成为卓越的吸声材料，能有效减少墙壁之间的声音传递。",
    category: "insulation",
  },
  {
    id: 1545,
    question:
      "What is the primary concern when insulation is installed in a garage ceiling (below living space)?",
    options: [
      "The insulation will absorb vehicle exhaust",
      "The insulation must be properly supported and have an air barrier to prevent carbon monoxide infiltration from the garage into the living space",
      "Garage ceiling insulation is prohibited by code",
      "The insulation will interfere with the garage door opener",
    ],
    correctAnswer: 1,
    explanation:
      "车库天花板保温（居住空间下方）的主要关注点是保温材料必须有适当的支撑和空气屏障，以防止一氧化碳和汽车尾气从车库渗入上方的居住空间。这也是防火分隔的一部分。",
    category: "insulation",
  },
  {
    id: 1546,
    question:
      "What is the term for insulation that has absorbed moisture and has a reduced R-value?",
    options: [
      "Aged insulation",
      "Wet or moisture-damaged insulation",
      "Compressed insulation",
      "Off-gassing insulation",
    ],
    correctAnswer: 1,
    explanation:
      "吸收了水分的保温材料称为湿损或水损保温材料。水的R值约为每英寸R-0.24，远低于任何保温材料。湿保温材料的R值显著降低，且可能导致霉菌生长和结构损害。",
    category: "insulation",
  },
  {
    id: 1547,
    question:
      "What is the 'diminishing returns' principle in insulation installation?",
    options: [
      "Insulation becomes less effective as it ages",
      "Each additional inch of insulation provides less incremental energy savings than the previous inch",
      "Insulation companies reduce their warranty over time",
      "R-values decrease at higher altitudes",
    ],
    correctAnswer: 1,
    explanation:
      "保温安装的\"边际递减\"原则是指每增加一英寸保温材料比前一英寸提供更少的增量节能效果。例如，从R-0到R-20的节能效果远大于从R-20到R-40。这决定了经济上合理的最大保温水平。",
    category: "insulation",
  },
  {
    id: 1548,
    question:
      "What special consideration applies to insulating a wall between the garage and living space?",
    options: [
      "No insulation is needed between garage and living space",
      "The wall must have fire-rated insulation and drywall, and all penetrations must be sealed for both fire and air/gas protection",
      "Only the garage side needs insulation",
      "A vapor barrier is the only requirement",
    ],
    correctAnswer: 1,
    explanation:
      "车库和居住空间之间的墙壁必须使用防火保温和石膏板（通常为5/8英寸Type X），所有穿透处必须密封以防火和防止空气/气体渗透。这是为了保护居住者免受火灾和车库有害气体的侵害。",
    category: "insulation",
  },
  {
    id: 1549,
    question:
      "What is the recommended minimum depth for blown-in cellulose in an attic to achieve R-38?",
    options: [
      "About 6 inches",
      "About 8 inches",
      "About 10.5 inches",
      "About 15 inches",
    ],
    correctAnswer: 2,
    explanation:
      "要在阁楼中达到R-38，吹入式纤维素的推荐最低深度约为10.5英寸。纤维素每英寸约R-3.5到R-3.8，所以需要约10-11英寸的厚度。安装卡片应标明所需的深度。",
    category: "insulation",
  },
  {
    id: 1550,
    question:
      "What is a 'building energy audit' and what does it typically include?",
    options: [
      "A financial review of utility company billing practices",
      "A comprehensive assessment of a home's energy use, including blower door test, insulation evaluation, HVAC efficiency, and identification of energy-saving improvements",
      "A simple visual inspection of the exterior",
      "An audit of the construction company's energy use during building",
    ],
    correctAnswer: 1,
    explanation:
      "建筑能源审计是对住宅能源使用的全面评估，通常包括鼓风门测试、保温评估、暖通空调效率检查、红外热成像、窗户评估，以及识别节能改进措施和优先级建议。",
    category: "insulation",
  },

  // ========== INTERIOR (1551-1700) ==========
  {
    id: 1551,
    question: "What is the standard thickness of drywall used on most interior walls?",
    options: ["1/4 inch", "3/8 inch", "1/2 inch", "5/8 inch"],
    correctAnswer: 2,
    explanation:
      "大多数室内墙壁使用1/2英寸厚的石膏板。1/4英寸用于覆盖旧表面（曲面），3/8英寸用于改造覆盖层，5/8英寸用于天花板和需要防火等级的应用。",
    category: "interior",
  },
  {
    id: 1552,
    question: "What type of drywall is required on ceilings to reduce sagging when joists are 24 inches on center?",
    options: [
      "1/4-inch regular drywall",
      "3/8-inch regular drywall",
      "1/2-inch regular drywall",
      "5/8-inch drywall",
    ],
    correctAnswer: 3,
    explanation:
      "当天花板搁栅间距为24英寸时，需要使用5/8英寸石膏板以减少下垂。1/2英寸石膏板在24英寸间距时容易随时间下垂，而5/8英寸更厚更硬，能够跨越更大的间距。",
    category: "interior",
  },
  {
    id: 1553,
    question: "What is 'greenboard' drywall designed for?",
    options: [
      "Exterior use on green-certified buildings",
      "Moisture-resistant applications in bathrooms and kitchens (not for direct water exposure like showers)",
      "Soundproofing between rooms",
      "Fire protection in garages",
    ],
    correctAnswer: 1,
    explanation:
      "绿色板（greenboard）是一种防潮石膏板，设计用于浴室和厨房等潮湿区域。它的面纸经过处理以抵抗潮气，但不适合直接接触水（如淋浴间内部），也不防水。",
    category: "interior",
  },
  {
    id: 1554,
    question: "What is 'purpleboard' drywall?",
    options: [
      "A decorative purple-colored drywall for accent walls",
      "A mold-resistant and moisture-resistant drywall with fiberglass mat facing",
      "A soundproof drywall for home theaters",
      "A drywall used exclusively in hospitals",
    ],
    correctAnswer: 1,
    explanation:
      "紫色板（purpleboard）是一种同时具有防霉和防潮性能的石膏板，采用玻璃纤维毡面层代替纸面。纸面是霉菌的食物来源，而玻璃纤维面层不提供霉菌生长的养分。适用于高湿度区域。",
    category: "interior",
  },
  {
    id: 1555,
    question: "What is Type X fire-rated drywall?",
    options: [
      "Standard drywall with a fire-retardant paint coating",
      "A 5/8-inch thick drywall with glass fibers in the gypsum core that provides a minimum 1-hour fire rating for wall assemblies",
      "A thin drywall used for curved surfaces",
      "A drywall type that is completely fireproof",
    ],
    correctAnswer: 1,
    explanation:
      "Type X防火石膏板是5/8英寸厚的石膏板，芯材中添加了玻璃纤维以增强防火性能。单层Type X安装在两侧的墙体组件可提供最低1小时的防火等级。常用于车库到住宅的隔墙。",
    category: "interior",
  },
  {
    id: 1556,
    question: "What is Type C fire-rated drywall?",
    options: [
      "Standard construction-grade drywall",
      "A drywall with enhanced fire resistance beyond Type X, using additional glass fibers and a shrinkage-compensating additive in the core",
      "Cement board used for tile backing",
      "A lightweight drywall for ceilings only",
    ],
    correctAnswer: 1,
    explanation:
      "Type C防火石膏板比Type X具有更高的防火性能，芯材中添加了更多的玻璃纤维和防收缩添加剂。它在高温下保持更长时间的完整性，可以用更少的层数达到更高的防火等级。",
    category: "interior",
  },
  {
    id: 1557,
    question: "What thickness of drywall is typically required on the garage side of the wall separating a garage from living space?",
    options: [
      "1/4 inch regular",
      "3/8 inch regular",
      "1/2 inch regular",
      "5/8 inch Type X",
    ],
    correctAnswer: 3,
    explanation:
      "车库侧与居住空间相隔的墙壁通常要求5/8英寸Type X防火石膏板。这是为了提供最低的防火分隔，保护居住者免受车库火灾的威胁。天花板（如果车库上方有居住空间）也需要同样的要求。",
    category: "interior",
  },
  {
    id: 1558,
    question: "What is a 3-coat plaster wall system?",
    options: [
      "Three coats of paint on drywall",
      "A scratch coat, brown coat, and finish coat of plaster applied over wood or metal lath",
      "Three layers of drywall stacked together",
      "Three applications of joint compound over drywall tape",
    ],
    correctAnswer: 1,
    explanation:
      "三涂层灰泥系统由刮痕涂层（scratch coat）、棕色涂层（brown coat）和面涂层（finish coat）组成，涂抹在木条或金属网格上。这是旧式建筑中常见的墙面系统，比石膏板更耐用但修复更困难。",
    category: "interior",
  },
  {
    id: 1559,
    question: "What is 'blueboard' in plaster wall systems?",
    options: [
      "Blue-colored drywall for bathrooms",
      "A special gypsum board designed to receive a skim coat or full coat of veneer plaster",
      "A waterproof membrane for showers",
      "A sound-insulating panel",
    ],
    correctAnswer: 1,
    explanation:
      "蓝板（blueboard）是一种特殊的石膏板，设计用于接受薄涂层或全涂层贴面灰泥。它的面纸经过特殊处理以提供灰泥良好的粘附力。蓝板加贴面灰泥系统比传统三涂层系统更快更经济。",
    category: "interior",
  },
  {
    id: 1560,
    question: "How can an inspector distinguish between a structural crack and a cosmetic crack in a wall?",
    options: [
      "All wall cracks are structural",
      "Structural cracks are typically wider than 1/4 inch, diagonal (stair-step), growing over time, and may show offset; cosmetic cracks are hairline, follow tape joints, and are stable",
      "Cosmetic cracks are always painted over; structural cracks are not",
      "There is no way to distinguish between the two",
    ],
    correctAnswer: 1,
    explanation:
      "结构裂缝通常宽于1/4英寸、呈对角线（阶梯状）、随时间增长，可能显示偏移；装饰裂缝是发丝状的、沿着胶带接缝或墙角、且稳定不变。结构裂缝需要工程评估。",
    category: "interior",
  },
  {
    id: 1561,
    question: "What causes 'nail pops' in drywall?",
    options: [
      "Using the wrong type of nails",
      "Wood framing shrinking or settling, causing the nail heads to push through the drywall surface",
      "Excessive humidity in the room",
      "Defective drywall manufacturing",
    ],
    correctAnswer: 1,
    explanation:
      "钉子突出（nail pops）是由木框架收缩或沉降引起的，导致钉头推过石膏板表面。随着木材干燥收缩，它会从钉子上缩回，使钉子突出。这在新建房屋中很常见，通常是装饰性问题而非结构问题。",
    category: "interior",
  },
  {
    id: 1562,
    question: "What is the concern with popcorn (acoustic) textured ceilings in homes built before 1980?",
    options: [
      "They are structurally weak",
      "They may contain asbestos fibers which become hazardous when disturbed",
      "They always indicate water damage",
      "They violate current building codes",
    ],
    correctAnswer: 1,
    explanation:
      "1980年之前建造的房屋中的爆米花（声学）纹理天花板可能含有石棉纤维。石棉在被扰动时（如刮除、钻孔）会释放到空气中，吸入可导致严重疾病。应在任何扰动前进行石棉检测。",
    category: "interior",
  },
  {
    id: 1563,
    question: "What is the recommended course of action when an inspector suspects asbestos in a popcorn ceiling?",
    options: [
      "Scrape a sample and send it to a lab personally",
      "Recommend the client have the material tested by a qualified asbestos testing professional before any disturbance",
      "Declare the ceiling safe if it is in good condition",
      "Remove the ceiling immediately",
    ],
    correctAnswer: 1,
    explanation:
      "当检查员怀疑爆米花天花板含石棉时，应建议客户在任何扰动之前请合格的石棉检测专业人员进行检测。检查员不应自行取样，因为这可能释放纤维并需要适当的安全程序。",
    category: "interior",
  },
  {
    id: 1564,
    question: "What causes ceiling sag or droop in drywall?",
    options: [
      "Using wrong color paint",
      "Moisture damage, insufficient fastening, drywall too thin for joist spacing, or heavy texture coating",
      "Normal aging with no concern",
      "Excessive air conditioning use",
    ],
    correctAnswer: 1,
    explanation:
      "石膏板天花板下垂的原因包括水分损害、固定不足、石膏板对于搁栅间距过薄（如24英寸间距用1/2英寸板），或沉重的纹理涂层。水分是最常见的原因，应检查上方是否有漏水。",
    category: "interior",
  },
  {
    id: 1565,
    question: "What are the main types of hardwood flooring?",
    options: [
      "Solid hardwood and engineered hardwood",
      "Natural and artificial hardwood",
      "Structural and decorative hardwood",
      "Indoor and outdoor hardwood",
    ],
    correctAnswer: 0,
    explanation:
      "硬木地板的主要类型是实木地板和工程木地板。实木地板由单一木材制成，可以多次打磨翻新。工程木地板由薄木贴面粘在胶合板或纤维板基层上，更稳定但翻新次数有限。",
    category: "interior",
  },
  {
    id: 1566,
    question: "What is the main concern when inspecting hardwood floors?",
    options: [
      "Only the color and finish matter",
      "Warping, cupping, buckling, gaps, squeaking, and moisture damage",
      "Whether the wood species is domestic or imported",
      "The age of the hardwood only",
    ],
    correctAnswer: 1,
    explanation:
      "检查硬木地板时的主要关注点包括翘曲、杯状变形、拱起、间隙、吱吱声和水分损害。这些问题通常与湿度水平、安装方法和底层地板条件有关。",
    category: "interior",
  },
  {
    id: 1567,
    question: "What does 'cupping' of hardwood floors indicate?",
    options: [
      "Normal wear from foot traffic",
      "The edges of individual boards are higher than the center, typically caused by moisture imbalance (more moisture on the bottom than the top)",
      "The floor was improperly stained",
      "The floor needs to be waxed",
    ],
    correctAnswer: 1,
    explanation:
      "硬木地板的杯状变形表示单块板的边缘高于中心，通常由湿度不平衡引起（底面比顶面湿度高）。常见原因包括爬行空间湿度高、管道泄漏或底层地板湿气问题。",
    category: "interior",
  },
  {
    id: 1568,
    question: "What is laminate flooring?",
    options: [
      "Thin sheets of real wood glued together",
      "A multi-layer synthetic floor product with a photographic image of wood or stone under a clear protective layer, installed as a floating floor",
      "Carpet with a wood-grain pattern",
      "Vinyl sheets that look like tile",
    ],
    correctAnswer: 1,
    explanation:
      "强化地板是一种多层合成地板产品，由装饰层（木材或石材的照片图像）、清透保护层、高密度纤维板芯材和背衬层组成。通常作为浮动地板安装，不粘在底层地板上。",
    category: "interior",
  },
  {
    id: 1569,
    question: "What is a major concern with laminate flooring in relation to moisture?",
    options: [
      "Laminate is completely waterproof",
      "Exposure to standing water or excessive moisture can cause the core to swell, warp, and delaminate",
      "Laminate flooring is only affected by extreme heat, not moisture",
      "Moisture makes laminate flooring stronger",
    ],
    correctAnswer: 1,
    explanation:
      "强化地板的主要问题是其HDF/MDF芯材不防水。暴露于积水或过度湿气会导致芯材膨胀、翘曲和分层。接缝处特别容易受水分渗透的影响。",
    category: "interior",
  },
  {
    id: 1570,
    question: "What is LVP (Luxury Vinyl Plank) flooring?",
    options: [
      "A type of real wood flooring",
      "A waterproof vinyl flooring product that mimics the look of wood planks with a rigid or flexible core",
      "A commercial-only flooring material",
      "Linoleum with a wood pattern",
    ],
    correctAnswer: 1,
    explanation:
      "LVP（豪华乙烯基板地板）是一种防水乙烯基地板产品，模仿木板的外观，具有刚性或柔性芯材。与强化地板不同，LVP可以承受水和湿气，适合厨房、浴室和地下室。",
    category: "interior",
  },
  {
    id: 1571,
    question: "What is the main concern when inspecting tile flooring?",
    options: [
      "The pattern and color of the tiles",
      "Cracked or loose tiles, deteriorated grout, and hollow-sounding tiles that indicate bonding failure",
      "Whether the tiles were imported or domestic",
      "The brand of tile used",
    ],
    correctAnswer: 1,
    explanation:
      "检查瓷砖地板时的主要关注点是开裂或松动的瓷砖、劣化的灌浆以及敲击时发出空心声音（表明粘合失败）的瓷砖。空心瓷砖可能表明底层粘合剂已失效或底层地板存在问题。",
    category: "interior",
  },
  {
    id: 1572,
    question: "What is the minimum subfloor thickness typically required for ceramic tile installation?",
    options: [
      "1/4 inch plywood",
      "3/8 inch plywood",
      "A combined thickness of subfloor and underlayment of at least 1-1/8 inches",
      "Any thickness is acceptable",
    ],
    correctAnswer: 2,
    explanation:
      "陶瓷瓷砖安装通常要求底层地板和垫层的组合厚度至少为1-1/8英寸。不足的厚度会导致地板弯曲，从而使瓷砖和灌浆开裂。水泥板是瓷砖下的首选垫层材料。",
    category: "interior",
  },
  {
    id: 1573,
    question: "What is cement backer board used for?",
    options: [
      "As the primary structural sheathing",
      "As an underlayment for tile in wet areas like showers and tub surrounds",
      "As exterior siding material",
      "As insulation behind drywall",
    ],
    correctAnswer: 1,
    explanation:
      "水泥背板用作湿润区域（如淋浴间和浴缸围挡）中瓷砖的垫层。与石膏板不同，水泥板不会因水分而分解，为瓷砖提供稳定、防潮的基底。常见品牌包括Durock和Hardiebacker。",
    category: "interior",
  },
  {
    id: 1574,
    question: "What is the maximum riser height allowed for residential stairs according to most building codes?",
    options: ["6 inches", "7 inches", "7-3/4 inches", "8-1/4 inches"],
    correctAnswer: 2,
    explanation:
      "大多数建筑规范规定住宅楼梯的最大踏步高度为7-3/4英寸（约19.7厘米）。过高的踏步会增加跌倒风险，不符合人体工程学的舒适步行要求。",
    category: "interior",
  },
  {
    id: 1575,
    question: "What is the minimum tread depth (run) required for residential stairs?",
    options: ["8 inches", "9 inches", "10 inches", "12 inches"],
    correctAnswer: 2,
    explanation:
      "住宅楼梯的最小踏板深度（踏步进深）为10英寸（约25.4厘米）。这确保脚可以安全地放在踏板上。踏板深度是从前缘到后缘的水平距离，不包括突出部分。",
    category: "interior",
  },
  {
    id: 1576,
    question: "What is the minimum width required for a residential stairway?",
    options: ["24 inches", "30 inches", "36 inches", "44 inches"],
    correctAnswer: 2,
    explanation:
      "住宅楼梯的最小宽度为36英寸（约91.4厘米）。这是净宽度，不包括扶手突出部分。足够的宽度确保安全通行和紧急疏散。",
    category: "interior",
  },
  {
    id: 1577,
    question: "What is the maximum allowed variation in riser height and tread depth in a stairway?",
    options: [
      "1 inch",
      "3/4 inch",
      "3/8 inch",
      "No variation is allowed",
    ],
    correctAnswer: 2,
    explanation:
      "楼梯中踏步高度和踏板深度的最大允许变化为3/8英寸（约9.5毫米）。不均匀的踏步是常见的跌倒原因，因为人体会期望每一步的高度和深度一致。",
    category: "interior",
  },
  {
    id: 1578,
    question: "What is the required height range for handrails on residential stairs?",
    options: [
      "30 to 34 inches",
      "34 to 38 inches",
      "36 to 42 inches",
      "42 to 48 inches",
    ],
    correctAnswer: 1,
    explanation:
      "住宅楼梯扶手的要求高度范围为34到38英寸（约86到96.5厘米），从踏板前缘垂直测量到扶手顶部。扶手必须沿楼梯全长连续设置。",
    category: "interior",
  },
  {
    id: 1579,
    question: "What is the required height for guardrails at open-sided walking surfaces in residential buildings?",
    options: [
      "30 inches", "34 inches", "36 inches", "42 inches"
    ],
    correctAnswer: 2,
    explanation:
      "住宅建筑中开放侧面的行走表面的护栏高度要求为36英寸（约91.4厘米）。这适用于阳台、夹层、楼梯开放侧和任何高于地面30英寸以上的开放行走表面。",
    category: "interior",
  },
  {
    id: 1580,
    question: "What is the required guardrail height for commercial buildings?",
    options: ["34 inches", "36 inches", "42 inches", "48 inches"],
    correctAnswer: 2,
    explanation:
      "商业建筑的护栏高度要求为42英寸（约106.7厘米），比住宅要求的36英寸更高。这更高的标准提供了在公共场所中更大的安全余量。",
    category: "interior",
  },
  {
    id: 1581,
    question: "What is the '4-inch sphere rule' for balusters?",
    options: [
      "Balusters must be at least 4 inches in diameter",
      "The spacing between balusters must not allow a 4-inch sphere to pass through",
      "Balusters must be installed every 4 inches",
      "The sphere test only applies to outdoor railings",
    ],
    correctAnswer: 1,
    explanation:
      "4英寸球体规则要求栏杆立柱之间的间距不得允许4英寸（约10厘米）的球体通过。这是为了防止小孩的头部卡在立柱之间。同样的规则适用于护栏、楼梯栏杆和阳台围栏。",
    category: "interior",
  },
  {
    id: 1582,
    question: "What is the 4-inch sphere rule for stair riser openings?",
    options: [
      "Open risers are always prohibited",
      "Open risers must not allow passage of a 4-inch sphere for residential stairs",
      "Open risers are allowed in all residential stairs without restriction",
      "The 4-inch rule only applies to commercial stairs",
    ],
    correctAnswer: 1,
    explanation:
      "住宅楼梯的开放踏步板（无立面板）不得允许4英寸球体通过。这防止儿童通过楼梯间的开口滑落。某些规范可能完全禁止开放踏步板或只在特定条件下允许。",
    category: "interior",
  },
  {
    id: 1583,
    question: "What are winder stairs?",
    options: [
      "Stairs with a mechanical winding mechanism",
      "Stairs that make a turn using pie-shaped (wedge-shaped) treads instead of a landing",
      "Exterior spiral stairs only",
      "Stairs with adjustable height steps",
    ],
    correctAnswer: 1,
    explanation:
      "转弯楼梯使用扇形（楔形）踏板代替平台来实现转弯。建筑规范要求这些踏板在距窄端12英寸处的踏步进深至少为10英寸，在最窄处至少为6英寸。",
    category: "interior",
  },
  {
    id: 1584,
    question: "What are the special code requirements for spiral stairs?",
    options: [
      "There are no special requirements for spiral stairs",
      "Minimum 26-inch clear width, minimum 7-1/2 inch tread depth at 12 inches from the narrow edge, and maximum 9-1/2 inch riser height",
      "They must have the same dimensions as standard stairs",
      "Spiral stairs are prohibited in residential buildings",
    ],
    correctAnswer: 1,
    explanation:
      "螺旋楼梯有特殊规范要求：最小26英寸净宽度、距窄边12英寸处最小7-1/2英寸踏步进深、最大9-1/2英寸踏步高度。螺旋楼梯通常只允许作为通往阁楼或附属空间的辅助通道。",
    category: "interior",
  },
  {
    id: 1585,
    question: "What is the minimum headroom required above a stairway?",
    options: [
      "6 feet",
      "6 feet 4 inches",
      "6 feet 8 inches",
      "7 feet",
    ],
    correctAnswer: 2,
    explanation:
      "楼梯上方的最小净空高度要求为6英尺8英寸（约203厘米）。这是从踏板前缘垂直测量到上方任何障碍物（天花板、横梁等）的距离。",
    category: "interior",
  },
  {
    id: 1586,
    question: "What is the requirement for a landing at the top and bottom of a stairway?",
    options: [
      "No landings are required",
      "A landing at least as wide as the stair and at least 36 inches deep in the direction of travel",
      "Only the top requires a landing",
      "Landings can be any size",
    ],
    correctAnswer: 1,
    explanation:
      "楼梯的顶部和底部需要一个至少与楼梯同宽且在行进方向上至少36英寸深的平台。例外情况是一些规范允许外门在楼梯底部没有平台。平台提供安全的过渡区域。",
    category: "interior",
  },
  {
    id: 1587,
    question: "What is the minimum handrail gripping diameter required by code?",
    options: [
      "1 inch to 1-1/4 inches",
      "1-1/4 inches to 2 inches",
      "2-1/2 inches to 3 inches",
      "3 inches to 4 inches",
    ],
    correctAnswer: 1,
    explanation:
      "建筑规范要求扶手的可握直径为1-1/4英寸到2英寸之间（圆形截面）。这个尺寸范围允许大多数人舒适且牢固地握住扶手。非圆形扶手有自己的周长和尺寸要求。",
    category: "interior",
  },
  {
    id: 1588,
    question: "What type of door is required between a garage and the living space of a home?",
    options: [
      "Any standard interior door",
      "A solid-core door with a minimum 20-minute fire rating, and it must be self-closing",
      "A hollow-core door with a deadbolt",
      "A screen door for ventilation",
    ],
    correctAnswer: 1,
    explanation:
      "车库和居住空间之间需要安装至少20分钟防火等级的实心门，并且必须是自关闭的。这是为了延缓火灾从车库蔓延到居住空间，并防止车库气体（包括一氧化碳）进入家中。",
    category: "interior",
  },
  {
    id: 1589,
    question: "What is the fire separation requirement for the common wall between an attached garage and the house?",
    options: [
      "No separation is required",
      "At minimum, 1/2-inch drywall on the garage side",
      "At minimum, 5/8-inch Type X drywall on the garage side",
      "A double layer of 1/2-inch drywall on both sides",
    ],
    correctAnswer: 2,
    explanation:
      "连接车库和住宅之间的公共墙需要在车库侧安装至少5/8英寸Type X防火石膏板。如果车库上方有居住空间，车库天花板也需要5/8英寸Type X石膏板。",
    category: "interior",
  },
  {
    id: 1590,
    question: "Why must the door between the garage and house be self-closing?",
    options: [
      "To save energy on heating and cooling",
      "To prevent carbon monoxide and fire/smoke from the garage entering the living space if left open",
      "To meet ADA accessibility requirements",
      "To prevent pets from entering the garage",
    ],
    correctAnswer: 1,
    explanation:
      "车库到住宅的门必须是自关闭的，以防止一氧化碳和火灾/烟雾从车库进入居住空间。即使被遗忘打开，自关闭装置也能确保门自动关闭，保护居住者安全。",
    category: "interior",
  },
  {
    id: 1591,
    question: "What is the minimum exhaust capacity required for a bathroom exhaust fan used intermittently?",
    options: ["20 CFM", "30 CFM", "50 CFM", "80 CFM"],
    correctAnswer: 2,
    explanation:
      "间歇使用的浴室排气扇最低排气量要求为50 CFM（立方英尺/分钟）。如果排气扇设计为连续运行，则最低要求为20 CFM。充足的浴室通风对于去除湿气和防止霉菌至关重要。",
    category: "interior",
  },
  {
    id: 1592,
    question: "Where must a bathroom exhaust fan vent to?",
    options: [
      "Into the attic space",
      "Into the wall cavity",
      "Directly to the building exterior",
      "Into an adjacent room",
    ],
    correctAnswer: 2,
    explanation:
      "浴室排气扇必须直接排到建筑外部。排入阁楼、墙壁空腔或其他室内空间是错误的，会导致湿气积聚、木材腐烂、霉菌生长和保温材料损坏。",
    category: "interior",
  },
  {
    id: 1593,
    question: "What is the requirement for kitchen ventilation over a cooktop or range?",
    options: [
      "No ventilation is required in kitchens",
      "A range hood or approved ventilation system that exhausts to the exterior or an approved recirculating system",
      "An open window within 10 feet is sufficient",
      "Only commercial kitchens need ventilation",
    ],
    correctAnswer: 1,
    explanation:
      "厨房灶台或炉灶上方需要安装抽油烟机或经批准的通风系统，排到室外或使用经批准的再循环系统。排到室外的系统更有效，因为它实际去除了烟雾、蒸汽和污染物。",
    category: "interior",
  },
  {
    id: 1594,
    question: "What causes window condensation on the interior surface of windows?",
    options: [
      "Defective window manufacturing only",
      "High indoor humidity combined with cold window surface temperatures",
      "Direct sunlight hitting the window",
      "Wind pressure from outside",
    ],
    correctAnswer: 1,
    explanation:
      "窗户内表面的冷凝是由高室内湿度与冷窗户表面温度共同引起的。当窗户表面温度降至室内空气露点以下时，水蒸气就会在玻璃上凝结。改善措施包括降低湿度和升级窗户。",
    category: "interior",
  },
  {
    id: 1595,
    question: "What does persistent window condensation indicate about the home?",
    options: [
      "The windows are too new",
      "Excessive indoor humidity levels that may be causing hidden moisture damage elsewhere in the home",
      "The HVAC system is too powerful",
      "The home has excellent insulation",
    ],
    correctAnswer: 1,
    explanation:
      "持续的窗户冷凝表明室内湿度水平过高，可能在家中其他地方造成隐藏的水分损害（如墙壁内部冷凝、阁楼湿气问题、霉菌生长）。这应该引起检查员进一步调查湿度来源。",
    category: "interior",
  },
  {
    id: 1596,
    question: "What type of moisture meter uses pins inserted into the material to measure moisture content?",
    options: [
      "Capacitance meter",
      "Pin-type (resistance) moisture meter",
      "Infrared moisture meter",
      "Ultrasonic moisture meter",
    ],
    correctAnswer: 1,
    explanation:
      "针式（电阻式）湿度计使用两个插入材料的针来测量含水量。它通过测量两针之间的电阻来确定湿度，电阻越低表示湿度越高。针式计可以测量特定深度的湿度。",
    category: "interior",
  },
  {
    id: 1597,
    question: "What type of moisture meter scans the surface without penetrating the material?",
    options: [
      "Pin-type moisture meter",
      "Pinless (capacitance/scanning) moisture meter",
      "Thermographic moisture meter",
      "Chemical moisture meter",
    ],
    correctAnswer: 1,
    explanation:
      "无针式（电容/扫描式）湿度计无需穿透材料表面即可扫描湿度。它发射电磁信号穿透表面以检测下方的水分。适合快速扫描大面积区域，但不如针式计精确。",
    category: "interior",
  },
  {
    id: 1598,
    question: "What are common indicators of mold in a home that an inspector should look for?",
    options: [
      "Only green-colored growth on surfaces",
      "Visible mold growth (various colors), musty odors, water stains, condensation, and past water damage",
      "A clean, fresh smell",
      "New paint or recent renovations only",
    ],
    correctAnswer: 1,
    explanation:
      "霉菌的常见指标包括可见的霉菌生长（各种颜色：黑、绿、白、灰等）、霉味、水渍、冷凝和过去的水损坏。检查员应特别注意浴室、厨房、地下室和窗户周围等容易潮湿的区域。",
    category: "interior",
  },
  {
    id: 1599,
    question: "Can a home inspector identify the type of mold present in a home?",
    options: [
      "Yes, all inspectors are trained to identify mold species",
      "No, mold species identification requires laboratory analysis; inspectors should report suspected mold and recommend professional testing",
      "Yes, if the inspector has a magnifying glass",
      "Only black mold can be visually identified",
    ],
    correctAnswer: 1,
    explanation:
      "家庭检查员不能仅凭视觉识别霉菌种类。霉菌种类识别需要实验室分析（如孢子采样和培养）。检查员应报告疑似霉菌并建议进行专业检测和评估。",
    category: "interior",
  },
  {
    id: 1600,
    question: "What conditions must exist for mold to grow?",
    options: [
      "Only extreme temperatures above 100°F",
      "A moisture source, an organic food source, appropriate temperature (40-100°F), and oxygen",
      "Only standing water and complete darkness",
      "Freezing temperatures and dry conditions",
    ],
    correctAnswer: 1,
    explanation:
      "霉菌生长需要四个条件：水分来源、有机食物来源（如木材、纸面石膏板、灰尘）、适宜温度（40-100°F）和氧气。去除任何一个条件就可以阻止霉菌生长，最常控制的是水分。",
    category: "interior",
  },
  {
    id: 1601,
    question: "What is the most important step in mold remediation?",
    options: [
      "Painting over the mold with special paint",
      "Identifying and correcting the moisture source that caused the mold growth",
      "Using bleach to clean all surfaces",
      "Increasing the home's temperature",
    ],
    correctAnswer: 1,
    explanation:
      "霉菌治理中最重要的步骤是识别和纠正导致霉菌生长的水分来源。如果不解决根本的水分问题，霉菌在清除后会再次生长。修复漏水、改善通风和降低湿度是关键。",
    category: "interior",
  },
  {
    id: 1602,
    question: "What is the difference between grout and caulk in a bathroom tile installation?",
    options: [
      "They are interchangeable and serve the same purpose",
      "Grout fills joints between tiles on the same plane; caulk is used at transitions (wall-to-floor, wall-to-tub) where movement may occur",
      "Grout is only for floors; caulk is only for walls",
      "Caulk is stronger than grout in all applications",
    ],
    correctAnswer: 1,
    explanation:
      "灌浆填充同一平面上瓷砖之间的接缝；密封胶用于过渡处（墙壁到地板、墙壁到浴缸），这些地方可能发生移动。在过渡处使用灌浆会开裂，因为灌浆不灵活。",
    category: "interior",
  },
  {
    id: 1603,
    question: "What problem does deteriorated grout in a shower cause?",
    options: [
      "Only a cosmetic issue",
      "Water can penetrate behind the tiles, causing damage to the substrate, framing, and potentially leading to mold growth",
      "The tiles will change color",
      "The water pressure will decrease",
    ],
    correctAnswer: 1,
    explanation:
      "淋浴间灌浆劣化会允许水渗透到瓷砖后面，损害基底材料（石膏板或水泥板）、框架，并可能导致霉菌生长。严重时可能导致结构损害和需要昂贵的修复。",
    category: "interior",
  },
  {
    id: 1604,
    question: "What is the purpose of a shower pan liner?",
    options: [
      "To make the shower floor look attractive",
      "To create a waterproof membrane beneath the tile that directs any water that penetrates the tile to the drain",
      "To provide insulation for the shower floor",
      "To prevent the tiles from cracking",
    ],
    correctAnswer: 1,
    explanation:
      "淋浴盘防水衬里在瓷砖下面创建防水膜，将穿过瓷砖的任何水引导到排水口。这是淋浴间防水系统的关键部分。如果衬里失效，水会泄漏到下方的结构中。",
    category: "interior",
  },
  {
    id: 1605,
    question: "What type of countertop material is most susceptible to staining if not properly sealed?",
    options: [
      "Laminate",
      "Natural stone (granite, marble)",
      "Solid surface (Corian)",
      "Stainless steel",
    ],
    correctAnswer: 1,
    explanation:
      "天然石材（花岗岩、大理石）如果没有适当密封，最容易被污染。天然石材是多孔的，可以吸收液体，留下污渍。大理石特别容易被酸性物质腐蚀。定期密封处理是必要的保养。",
    category: "interior",
  },
  {
    id: 1606,
    question: "What should an inspector look for when examining kitchen cabinets?",
    options: [
      "Only the brand name and style",
      "Condition of doors, drawers, hinges, hardware; signs of water damage under sinks; proper attachment to walls; and functional operation",
      "Whether the cabinets match the countertop color",
      "The original purchase price",
    ],
    correctAnswer: 1,
    explanation:
      "检查厨房橱柜时应查看门、抽屉、铰链、五金件的状况；水槽下方的水损迹象；是否正确安装固定在墙上；以及功能操作是否正常。水槽下方是水损和霉菌的常见位置。",
    category: "interior",
  },
  {
    id: 1607,
    question: "What is the most common cause of cabinet damage under kitchen and bathroom sinks?",
    options: [
      "Excessive heat from the dishwasher",
      "Water damage from plumbing leaks, failed supply line connections, or P-trap failures",
      "Insect infestation",
      "UV damage from sunlight",
    ],
    correctAnswer: 1,
    explanation:
      "厨房和浴室水槽下方橱柜损坏最常见的原因是管道泄漏、供水管连接失败或P型存水弯故障造成的水损害。检查员应仔细检查水槽下方是否有水渍、翘曲、霉菌或腐烂。",
    category: "interior",
  },
  {
    id: 1608,
    question: "What is the standard height for a residential interior door?",
    options: ["6 feet", "6 feet 6 inches", "6 feet 8 inches", "7 feet"],
    correctAnswer: 2,
    explanation:
      "住宅室内门的标准高度为6英尺8英寸（80英寸/约203厘米）。这也是大多数建筑规范要求的最小门洞高度，确保大多数人可以舒适通过。",
    category: "interior",
  },
  {
    id: 1609,
    question: "What is the difference between a hollow-core door and a solid-core door?",
    options: [
      "They look different from the outside",
      "Hollow-core doors have a cardboard honeycomb interior and are lighter; solid-core doors have a solid wood or composite interior and provide better sound insulation and fire resistance",
      "Hollow-core doors are for exterior use; solid-core doors are for interior use",
      "There is no functional difference",
    ],
    correctAnswer: 1,
    explanation:
      "空心门内部是纸板蜂窝结构，较轻；实心门内部是实木或复合材料，提供更好的隔音和防火性能。空心门通常用于室内，实心门用于需要防火等级的位置（如车库到住宅的门）和外门。",
    category: "interior",
  },
  {
    id: 1610,
    question: "What type of lock is required on exterior doors for security?",
    options: [
      "A simple latch is sufficient",
      "A deadbolt lock with a minimum 1-inch throw",
      "An electronic keypad only",
      "A padlock on the outside",
    ],
    correctAnswer: 1,
    explanation:
      "外门需要安装最小1英寸投射距离的死锁（deadbolt）以确保安全。死锁比弹簧锁更安全，因为它们不能通过信用卡滑动打开，需要钥匙或旋转才能操作。",
    category: "interior",
  },
  {
    id: 1611,
    question: "What is the purpose of a self-closing device on the door between the garage and living space?",
    options: [
      "Energy conservation",
      "To automatically close the door to maintain the fire-rated separation and prevent garage gases from entering the home",
      "Convenience for carrying groceries",
      "Noise reduction",
    ],
    correctAnswer: 1,
    explanation:
      "车库到居住空间的门上的自关闭装置的目的是自动关闭门以维持防火分隔，并防止车库气体（如一氧化碳）进入家中。这是一项安全要求，不是便利性功能。",
    category: "interior",
  },
  {
    id: 1612,
    question:
      "What is the minimum ceiling height required for habitable rooms in most residential codes?",
    options: ["6 feet 8 inches", "7 feet", "7 feet 6 inches", "8 feet"],
    correctAnswer: 1,
    explanation:
      "大多数住宅规范要求可居住房间的最低天花板高度为7英尺（约213厘米）。某些区域（如浴室和走廊）可能允许较低的高度。阁楼可能有特殊的斜顶天花板高度规定。",
    category: "interior",
  },
  {
    id: 1613,
    question: "What is a 'closet requirement' for a room to be considered a legal bedroom?",
    options: [
      "A walk-in closet at least 10 square feet",
      "Most codes do not require a closet, but the room must have a window for egress and ventilation, minimum size, and heating",
      "Two closets minimum",
      "A closet with a built-in light fixture",
    ],
    correctAnswer: 1,
    explanation:
      "大多数建筑规范实际上不要求衣柜才能将房间视为合法卧室。关键要求是安全逃生窗口（紧急出口）、通风、最小面积（通常70平方英尺）、最小尺寸（7英尺任一方向）和供暖。",
    category: "interior",
  },
  {
    id: 1614,
    question:
      "What are the egress window requirements for a bedroom?",
    options: [
      "Any window of any size is acceptable",
      "Minimum 5.7 square feet of clear opening (5.0 sq ft at grade floor), minimum 24 inches high, minimum 20 inches wide, sill height maximum 44 inches above floor",
      "Only a sliding glass door satisfies egress requirements",
      "Egress windows are optional for second-floor bedrooms",
    ],
    correctAnswer: 1,
    explanation:
      "卧室逃生窗的要求是：最小净开口面积5.7平方英尺（底层为5.0平方英尺）、最小高度24英寸、最小宽度20英寸、窗台高度距地板最高44英寸。这些标准确保紧急情况下可以通过窗户逃生。",
    category: "interior",
  },
  {
    id: 1615,
    question: "What is the concern with a bedroom that has no window or an insufficient egress window?",
    options: [
      "Poor interior design only",
      "It is a life safety issue - occupants may not be able to escape during a fire, and the room should not be counted as a legal bedroom",
      "Higher energy bills",
      "Insufficient natural light only",
    ],
    correctAnswer: 1,
    explanation:
      "没有窗户或逃生窗不足的卧室是一个生命安全问题——居住者在火灾中可能无法逃生。这样的房间不应被视为合法卧室。这是房屋检查中最重要的安全发现之一。",
    category: "interior",
  },
  {
    id: 1616,
    question: "What is the minimum required clear opening for an egress window in a bedroom above ground floor?",
    options: [
      "3.0 square feet",
      "4.0 square feet",
      "5.0 square feet",
      "5.7 square feet",
    ],
    correctAnswer: 3,
    explanation:
      "地面以上楼层卧室逃生窗的最小净开口面积为5.7平方英尺。底层（地面层）的要求稍低，为5.0平方英尺。净开口面积是指窗户完全打开时可以通过的实际面积。",
    category: "interior",
  },
  {
    id: 1617,
    question:
      "What is the maximum sill height above the floor for an egress window?",
    options: ["24 inches", "36 inches", "44 inches", "48 inches"],
    correctAnswer: 2,
    explanation:
      "逃生窗的窗台距成品地面的最大高度为44英寸。较高的窗台会使居住者（特别是儿童和老人）难以在紧急情况下爬过窗户逃生。",
    category: "interior",
  },
  {
    id: 1618,
    question: "What causes doors to stick or not close properly?",
    options: [
      "Using the wrong color paint on the door",
      "Foundation settling, framing movement, loose hinges, humidity changes, or improper installation",
      "Having too many people in the room",
      "Using the wrong type of doorknob",
    ],
    correctAnswer: 1,
    explanation:
      "门卡住或无法正确关闭的原因包括基础沉降、框架移动、铰链松动、湿度变化或安装不当。如果多个门有此问题，可能表明结构移动，需要进一步调查。",
    category: "interior",
  },
  {
    id: 1619,
    question: "What is the main safety concern with tempered glass and where is it required?",
    options: [
      "Tempered glass is never required in residential buildings",
      "Tempered glass is required in hazardous locations (near doors, in showers, near floors, near stairs) because it breaks into small granular pieces instead of sharp shards",
      "Tempered glass is only for commercial buildings",
      "Regular glass is safer than tempered glass",
    ],
    correctAnswer: 1,
    explanation:
      "钢化玻璃在危险位置是必需的（如门附近、淋浴间、靠近地面、楼梯旁），因为它破碎时会碎成小颗粒状碎片而不是锋利的碎片。这大大降低了割伤受伤的风险。",
    category: "interior",
  },
  {
    id: 1620,
    question: "Where is tempered (safety) glass required in a residential bathroom?",
    options: [
      "Only in the window above the toilet",
      "In all glazing within 60 inches of a shower or tub and any glass enclosure around a shower or tub",
      "Safety glass is not required in bathrooms",
      "Only in the bathroom mirror",
    ],
    correctAnswer: 1,
    explanation:
      "住宅浴室中，淋浴或浴缸60英寸范围内的所有玻璃以及淋浴/浴缸周围的任何玻璃围挡都需要钢化（安全）玻璃。人们在湿滑的浴室中跌倒时碰到玻璃的风险很高。",
    category: "interior",
  },
  {
    id: 1621,
    question: "What does 'carpet delamination' refer to?",
    options: [
      "The carpet changing color over time",
      "The carpet backing separating from the carpet face fibers, causing bubbles or wrinkles",
      "The carpet being too thin for the room",
      "The carpet being installed upside down",
    ],
    correctAnswer: 1,
    explanation:
      "地毯脱层是指地毯背衬与地毯面纤维分离，导致鼓包或皱纹。这通常由水分损害、粘合剂老化或安装不当引起。脱层的地毯是绊倒风险，可能需要更换。",
    category: "interior",
  },
  {
    id: 1622,
    question: "What is the concern with carpet installed directly on concrete slab floors?",
    options: [
      "The carpet will wear out faster",
      "Moisture from the slab can wick up into the carpet and pad, causing mold growth and odors",
      "The carpet will be too firm to walk on",
      "Sound insulation will be inadequate",
    ],
    correctAnswer: 1,
    explanation:
      "直接安装在混凝土板上的地毯的问题是板中的水分可能通过毛细作用上升到地毯和衬垫中，导致霉菌生长和异味。应安装适当的防潮层，并确保板上没有水分问题。",
    category: "interior",
  },
  {
    id: 1623,
    question: "What is the function of underlayment beneath flooring?",
    options: [
      "To add structural strength to the subfloor",
      "To provide a smooth, flat surface and may add moisture protection, sound dampening, and minor thermal insulation beneath the finish flooring",
      "To replace the need for a subfloor",
      "To permanently bond the flooring to the structure",
    ],
    correctAnswer: 1,
    explanation:
      "地板垫层为成品地板提供光滑、平坦的表面，还可能增加防潮保护、隔音和轻微保温功能。不同类型的地板需要不同类型的垫层（如瓷砖下的水泥板、强化地板下的泡沫垫层）。",
    category: "interior",
  },
  {
    id: 1624,
    question: "What is the purpose of a subfloor?",
    options: [
      "Purely decorative, to match the finish flooring",
      "The structural layer attached to floor joists that provides a flat surface and supports all finish flooring and loads above",
      "An optional luxury in home construction",
      "Only needed in commercial buildings",
    ],
    correctAnswer: 1,
    explanation:
      "底层地板是连接到地板搁栅上的结构层，提供平坦表面并支撑上方的所有成品地板和荷载。常见材料包括胶合板和OSB。底层地板的厚度和类型取决于搁栅间距和上方的地板类型。",
    category: "interior",
  },
  {
    id: 1625,
    question: "What does a squeaking floor typically indicate?",
    options: [
      "A serious structural failure",
      "Movement between the subfloor and joists or between the subfloor and finish floor, often caused by loose fasteners or gaps",
      "The floor is about to collapse",
      "Termite damage",
    ],
    correctAnswer: 1,
    explanation:
      "吱吱作响的地板通常表示底层地板与搁栅之间或底层地板与成品地板之间存在移动，通常由紧固件松动或间隙引起。虽然主要是令人烦恼的问题，但在某些情况下也可能表明结构问题。",
    category: "interior",
  },
  {
    id: 1626,
    question: "What is the minimum thickness of plywood subfloor typically required over joists spaced 16 inches on center?",
    options: ["1/4 inch", "3/8 inch", "5/8 inch or 19/32 inch", "1 inch"],
    correctAnswer: 2,
    explanation:
      "间距16英寸的搁栅上通常需要至少5/8英寸或19/32英寸的胶合板底层地板。搁栅间距为24英寸时，通常需要3/4英寸或23/32英寸。适当的厚度防止地板弯曲和地板材料损坏。",
    category: "interior",
  },
  {
    id: 1627,
    question:
      "What is the purpose of expansion gaps when installing hardwood or laminate flooring?",
    options: [
      "To allow for cleanup of debris during installation",
      "To allow the flooring material to expand and contract with humidity changes without buckling",
      "To provide ventilation under the flooring",
      "To make future removal easier",
    ],
    correctAnswer: 1,
    explanation:
      "安装硬木或强化地板时的膨胀间隙（通常为墙壁周围1/4到1/2英寸）允许地板材料随湿度变化膨胀和收缩而不会翘曲。没有足够的膨胀间隙会导致地板拱起（buckling）。",
    category: "interior",
  },
  {
    id: 1628,
    question: "What is 'buckling' of hardwood floors?",
    options: [
      "Normal settling of the floor",
      "The floor planks lifting and separating from the subfloor, usually caused by excessive moisture or lack of expansion gaps",
      "The floor changing color",
      "A decorative pattern in the wood grain",
    ],
    correctAnswer: 1,
    explanation:
      "硬木地板拱起是指地板板材从底层地板上升和分离，通常由过度潮湿或缺少膨胀间隙引起。水分导致木材膨胀，如果没有空间膨胀，地板就会向上弯曲。这是一个严重的问题，需要确定水分来源。",
    category: "interior",
  },
  {
    id: 1629,
    question: "What is a 'floating floor' installation?",
    options: [
      "A floor suspended by cables from the ceiling",
      "A flooring system where the planks or tiles interlock with each other but are not fastened to the subfloor, resting on underlayment",
      "A floor installed on a boat or floating structure",
      "A temporary flooring that can be rolled up",
    ],
    correctAnswer: 1,
    explanation:
      "浮动地板安装是指板材或瓷砖相互锁定但不固定到底层地板上，而是放置在垫层上。这种方法允许整个地板作为一个整体膨胀和收缩。强化地板和许多乙烯基板地板使用此方法。",
    category: "interior",
  },
  {
    id: 1630,
    question: "What material should NOT be used as a tile backer in wet areas like showers?",
    options: [
      "Cement backer board",
      "Kerdi waterproof membrane",
      "Standard paper-faced drywall (even moisture-resistant greenboard)",
      "Solid surface panels",
    ],
    correctAnswer: 2,
    explanation:
      "标准纸面石膏板（即使是防潮绿色板）不应在淋浴间等湿润区域用作瓷砖背板。纸面在持续接触水时会分解，导致瓷砖脱落和水损害。应使用水泥背板或防水膜系统。",
    category: "interior",
  },
  {
    id: 1631,
    question: "What are the signs of a failed shower pan?",
    options: [
      "The tiles change color",
      "Water damage on the ceiling below the shower, musty odors, loose tiles, and staining around the base of the shower",
      "The shower drain gurgles",
      "Low water pressure in the shower",
    ],
    correctAnswer: 1,
    explanation:
      "淋浴盘失效的迹象包括淋浴间下方天花板的水损害、霉味、松动的瓷砖和淋浴基座周围的污渍。淋浴盘泄漏通常是缓慢的，可能在检测到之前已造成严重的隐藏损害。",
    category: "interior",
  },
  {
    id: 1632,
    question: "What is the proper slope of a shower floor toward the drain?",
    options: [
      "No slope is needed if the drain is at the center",
      "1/4 inch per foot toward the drain",
      "1 inch per foot toward the drain",
      "2 inches per foot toward the drain",
    ],
    correctAnswer: 1,
    explanation:
      "淋浴地板应以每英尺1/4英寸的坡度向排水口倾斜。这确保水能有效流向排水口，不会在地板上积聚。坡度不足会导致水滞留和潜在的水损害问题。",
    category: "interior",
  },
  {
    id: 1633,
    question: "What is a common sign of inadequate bathroom ventilation?",
    options: [
      "The bathroom smells fresh",
      "Peeling paint, mold or mildew on walls and ceiling, foggy mirrors that don't clear, and deteriorating grout and caulk",
      "The bathroom is too cold",
      "The toilet runs continuously",
    ],
    correctAnswer: 1,
    explanation:
      "浴室通风不足的常见迹象包括油漆剥落、墙壁和天花板上的霉菌、镜子持续起雾不散、以及灌浆和密封胶劣化。这些都是过度湿气积聚的结果，需要改善排气扇或通风系统。",
    category: "interior",
  },
  {
    id: 1634,
    question: "What is the maximum rise for a flight of stairs before a landing is required?",
    options: [
      "8 feet",
      "12 feet",
      "12 feet 3 inches",
      "No maximum is specified",
    ],
    correctAnswer: 2,
    explanation:
      "一段楼梯在需要平台之前的最大垂直高度为12英尺3英寸。超过此高度需要中间平台。平台为攀爬者提供休息区域，也是安全功能，可以在跌倒时减缓下降速度。",
    category: "interior",
  },
  {
    id: 1635,
    question: "What condition describes a 'taped and floated' drywall finish?",
    options: [
      "Drywall floating in water",
      "Joint tape is embedded in joint compound, and multiple coats of compound are applied and sanded smooth to hide the joints",
      "Drywall attached with tape instead of screws",
      "Drywall installed without any finishing",
    ],
    correctAnswer: 1,
    explanation:
      "贴带和批灰（taped and floated）石膏板装修是指将接缝胶带嵌入接缝化合物中，然后涂上多层化合物并打磨光滑以隐藏接缝。这是标准的石膏板装修方法，通常需要三层涂抹和打磨。",
    category: "interior",
  },
  {
    id: 1636,
    question: "What is the purpose of a deadbolt lock that cannot be opened from the inside without a key (double-cylinder deadbolt)?",
    options: [
      "Higher security against break-ins through glass doors",
      "While providing extra security, it poses a safety hazard because it can prevent rapid egress during emergencies",
      "It is required on all exterior doors",
      "It is more affordable than single-cylinder deadbolts",
    ],
    correctAnswer: 1,
    explanation:
      "双锁芯死锁（从内外两侧都需要钥匙）虽然提供额外安全性（防止通过打碎门旁玻璃伸手开锁），但存在安全隐患，因为在紧急情况下可能阻碍快速逃生。许多地区的规范限制或禁止其使用。",
    category: "interior",
  },
  {
    id: 1637,
    question: "What flooring material contains potential health hazards if installed before the 1980s?",
    options: [
      "Hardwood",
      "Vinyl asbestos tile (VAT) - 9x9 inch tiles commonly contained asbestos",
      "Ceramic tile",
      "Carpet",
    ],
    correctAnswer: 1,
    explanation:
      "1980年代之前安装的乙烯基石棉瓷砖（VAT）——通常为9x9英寸的瓷砖——常含有石棉。黑色砂浆粘合剂（cutback adhesive）也可能含有石棉。在移除此类地板之前应进行石棉检测。",
    category: "interior",
  },
  {
    id: 1638,
    question: "What is the recommended indoor relative humidity range for a home?",
    options: [
      "10-20%",
      "30-50%",
      "60-70%",
      "80-90%",
    ],
    correctAnswer: 1,
    explanation:
      "推荐的室内相对湿度范围为30-50%。低于30%会导致皮肤干裂和静电。高于50%会促进霉菌生长、尘螨繁殖和冷凝。维持适当的湿度对于健康和建筑物维护都很重要。",
    category: "interior",
  },
  {
    id: 1639,
    question: "What is the 'trip hazard' threshold for uneven flooring surfaces?",
    options: [
      "Any unevenness is a trip hazard",
      "A height difference of 1/4 inch or more between adjacent surfaces",
      "A height difference of 1 inch or more",
      "Only loose carpeting is considered a trip hazard",
    ],
    correctAnswer: 1,
    explanation:
      "相邻地面之间高度差达到1/4英寸或以上被视为绊倒危险。这适用于门槛、地板过渡条、不均匀的瓷砖、裂缝的混凝土等。检查员应标注所有超过此阈值的不平整。",
    category: "interior",
  },
  {
    id: 1640,
    question: "What is a fire-rated wall assembly?",
    options: [
      "A wall painted with fire-retardant paint",
      "A wall constructed with specific materials and methods to resist fire passage for a rated period (e.g., 1-hour, 2-hour)",
      "Any wall made of concrete or brick",
      "A wall with a fire extinguisher mounted on it",
    ],
    correctAnswer: 1,
    explanation:
      "防火等级墙体组件是用特定材料和方法建造的墙壁，能在额定时间内（如1小时、2小时）抵抗火势蔓延。组件包括骨架、石膏板类型和厚度、保温材料和密封处理的特定组合。",
    category: "interior",
  },
  {
    id: 1641,
    question: "What is the concern with missing or damaged fire caulking at wall penetrations in fire-rated assemblies?",
    options: [
      "It is only a cosmetic issue",
      "It compromises the fire rating of the assembly, allowing fire and smoke to pass through penetrations",
      "It will cause plumbing leaks",
      "It has no impact on the fire rating",
    ],
    correctAnswer: 1,
    explanation:
      "防火等级组件中墙壁穿透处缺失或损坏的防火密封会破坏组件的防火等级，允许火焰和烟雾通过穿透处。所有管道、电线和管道穿透防火墙的地方都必须用适当的防火材料密封。",
    category: "interior",
  },
  {
    id: 1642,
    question: "What is the concern with water stains on a ceiling?",
    options: [
      "They are purely cosmetic and can be painted over",
      "They indicate current or past water intrusion that may have caused structural damage, mold growth, or ongoing leaks",
      "They are caused by the wrong type of paint",
      "They indicate the ceiling was recently cleaned",
    ],
    correctAnswer: 1,
    explanation:
      "天花板上的水渍表明当前或过去的水分侵入，可能已导致结构损害、霉菌生长或持续泄漏。检查员应确定水的来源（屋顶泄漏、管道泄漏、冷凝等）并评估损害程度。",
    category: "interior",
  },
  {
    id: 1643,
    question: "What does a diagonal crack from the corner of a window or door typically indicate?",
    options: [
      "Normal thermal expansion of the wall",
      "Differential settlement of the foundation or structural movement",
      "Impact damage from furniture",
      "The window or door was improperly painted",
    ],
    correctAnswer: 1,
    explanation:
      "从窗户或门角延伸的对角线裂缝通常表明基础差异沉降或结构移动。这些裂缝形成是因为应力集中在开口的角部。多个窗户和门出现类似裂缝模式时，应进一步调查基础状况。",
    category: "interior",
  },
  {
    id: 1644,
    question: "What is the purpose of a return air vent in a room with a closed door?",
    options: [
      "To provide fresh outdoor air",
      "To allow air to return to the HVAC system so that proper air circulation is maintained and room pressure is balanced",
      "To exhaust stale air to the outside",
      "To provide emergency ventilation",
    ],
    correctAnswer: 1,
    explanation:
      "封闭门房间中的回风口允许空气返回暖通空调系统，以维持适当的空气循环和房间压力平衡。没有回风路径，关门的房间会产生正压，降低暖通空调效率并可能导致舒适度问题。",
    category: "interior",
  },
  {
    id: 1645,
    question:
      "If a room lacks a return air vent and the door is typically kept closed, what alternative is commonly used?",
    options: [
      "Installing a window fan",
      "Undercutting the door by 1/2 to 3/4 inch to allow air to pass underneath",
      "Removing the door entirely",
      "Sealing all supply vents in the room",
    ],
    correctAnswer: 1,
    explanation:
      "如果房间没有回风口且门通常关闭，常见的替代方案是将门底部切掉1/2到3/4英寸，允许空气从门下方通过。另一选择是安装跳跃管道或转向格栅，将空气从房间引回到有回风口的区域。",
    category: "interior",
  },
  {
    id: 1646,
    question: "What is the concern with improperly vented bathroom exhaust fans that terminate in the attic?",
    options: [
      "The fan will be too loud",
      "Warm moist air deposited in the attic causes condensation, insulation damage, wood rot, and mold growth",
      "The attic will become too warm",
      "There is no concern as long as the attic is ventilated",
    ],
    correctAnswer: 1,
    explanation:
      "排入阁楼的浴室排气扇会将温暖潮湿的空气沉积在阁楼中，导致冷凝、保温材料损坏、木材腐烂和霉菌生长。这是一个非常常见的检查发现，排气管道必须延伸到建筑外部。",
    category: "interior",
  },
  {
    id: 1647,
    question: "What should a home inspector check regarding interior walls and ceilings for evidence of past or current leaks?",
    options: [
      "Only the paint color",
      "Water stains, bubbling or peeling paint, soft or spongy areas, mold growth, efflorescence, and recent paint touch-ups that may conceal damage",
      "Whether the walls are painted or wallpapered",
      "The brand of paint used",
    ],
    correctAnswer: 1,
    explanation:
      "检查员应查看水渍、气泡或剥落的油漆、柔软或海绵状区域、霉菌生长、白华（矿物沉积），以及可能掩盖损害的近期油漆修补。这些都是过去或当前泄漏的证据。",
    category: "interior",
  },
  {
    id: 1648,
    question:
      "What is the difference between a load-bearing wall and a partition wall?",
    options: [
      "There is no structural difference",
      "A load-bearing wall supports structural loads from above (roof, floors); a partition wall only divides space and supports no structural load",
      "Partition walls are always thicker than load-bearing walls",
      "Load-bearing walls are always on the exterior only",
    ],
    correctAnswer: 1,
    explanation:
      "承重墙支撑上方的结构荷载（屋顶、楼层）；隔墙仅分隔空间，不支撑结构荷载。承重墙不能随意移除或修改，否则会导致结构失稳。内部墙壁也可以是承重的。",
    category: "interior",
  },
  {
    id: 1649,
    question: "What is the concern with finding horizontal cracks in a basement or foundation wall?",
    options: [
      "Horizontal cracks are always cosmetic",
      "Horizontal cracks often indicate lateral pressure from soil against the wall, which is a serious structural concern",
      "They are caused by painting the wall",
      "They indicate the wall is properly cured",
    ],
    correctAnswer: 1,
    explanation:
      "地下室或基础墙中的水平裂缝通常表明土壤对墙壁的侧向压力，这是一个严重的结构问题。水平裂缝表明墙壁正在向内弯曲，可能最终导致墙壁失稳。需要结构工程师评估。",
    category: "interior",
  },
  {
    id: 1650,
    question:
      "What interior feature should an inspector check in a home with a garage below living space?",
    options: [
      "The color of the garage door",
      "That the garage ceiling has proper fire-rated drywall, all penetrations are sealed, and the door to living space is fire-rated and self-closing",
      "Whether the garage has windows",
      "The size of the garage",
    ],
    correctAnswer: 1,
    explanation:
      "当车库位于居住空间下方时，检查员应检查车库天花板是否有适当的防火石膏板（5/8英寸Type X），所有穿透处是否密封，以及通往居住空间的门是否具有防火等级且能自关闭。",
    category: "interior",
  },
  {
    id: 1651,
    question: "What is 'efflorescence' found on interior basement walls?",
    options: [
      "A type of decorative paint finish",
      "White crystalline deposits caused by water migrating through masonry and evaporating, leaving mineral salts behind",
      "A type of mold that appears white",
      "Paint peeling due to age",
    ],
    correctAnswer: 1,
    explanation:
      "白华是水通过砖石墙壁迁移并蒸发后留下的白色结晶矿物盐沉积。虽然白华本身无害，但它表明水分正在通过墙壁渗透，需要调查和解决水分来源。",
    category: "interior",
  },
  {
    id: 1652,
    question: "What is a 'scupper' drain and where might it be found inside a building?",
    options: [
      "A kitchen sink drain",
      "A drain opening in a parapet wall or the side of a flat roof that allows water to drain; inside, evidence of related leaks may be visible on upper-floor walls",
      "A floor drain in a basement",
      "A condensate drain for an air conditioner",
    ],
    correctAnswer: 1,
    explanation:
      "排水口（scupper）是设在女儿墙或平屋顶侧面的排水开口，允许积水排出。在建筑内部，检查员可能在上层墙壁上看到与排水口相关的泄漏证据（如水渍、损坏）。",
    category: "interior",
  },
  {
    id: 1653,
    question: "What is the purpose of a vapor barrier under a concrete slab floor?",
    options: [
      "To strengthen the concrete",
      "To prevent ground moisture from migrating up through the slab and into the living space",
      "To prevent the concrete from sticking to the ground",
      "To insulate the slab from cold ground temperatures",
    ],
    correctAnswer: 1,
    explanation:
      "混凝土板下的蒸汽屏障（通常为10密耳聚乙烯薄膜）防止地面水分通过板向上迁移进入居住空间。缺少蒸汽屏障可能导致地板材料损坏、霉菌生长和室内湿度过高。",
    category: "interior",
  },
  {
    id: 1654,
    question: "What is the 'nosing' on a stair tread?",
    options: [
      "The back edge of the tread against the riser",
      "The projecting front edge of the tread that extends beyond the riser below",
      "The side edge of the tread against the wall",
      "A decorative medallion in the center of the tread",
    ],
    correctAnswer: 1,
    explanation:
      "踏板前缘（nosing）是踏板延伸超过下方立面板的突出前缘。标准突出量为3/4英寸到1-1/4英寸。前缘增加了有效踏板深度，提供更安全的落脚面积。",
    category: "interior",
  },
  {
    id: 1655,
    question: "What is the maximum nosing projection allowed on residential stairs?",
    options: [
      "1/2 inch",
      "3/4 inch",
      "1-1/4 inches",
      "2 inches",
    ],
    correctAnswer: 2,
    explanation:
      "住宅楼梯踏板前缘的最大允许突出量为1-1/4英寸。过大的突出量可能导致脚跟在上楼时被绊住。前缘应有圆弧或斜面处理以减少绊倒风险。",
    category: "interior",
  },
  {
    id: 1656,
    question: "What type of cracks in plaster walls should concern an inspector most?",
    options: [
      "Small hairline cracks that follow the lath pattern",
      "Wide cracks (over 1/4 inch) that are diagonal or stair-stepped, bulging plaster, or cracks that show recent movement",
      "Cracks around light switch plates",
      "Single horizontal crack at the midpoint of the wall",
    ],
    correctAnswer: 1,
    explanation:
      "最令人担忧的灰泥墙裂缝是宽于1/4英寸的对角线或阶梯状裂缝、灰泥凸起，或显示近期移动的裂缝。这些可能表明结构移动、基础问题或灰泥与板条分离。",
    category: "interior",
  },
  {
    id: 1657,
    question: "What is 'delamination' of plaster from its lath backing?",
    options: [
      "Normal aging of plaster walls",
      "The plaster separating from the wood lath or metal lath substrate, creating hollow areas or sagging sections",
      "A decorative texture technique",
      "Plaster that has been painted too many times",
    ],
    correctAnswer: 1,
    explanation:
      "灰泥从板条背衬脱层是指灰泥与木板条或金属板条基底分离，形成空心区域或下垂部分。按压墙壁时会感觉松软或弹性。大面积脱层的灰泥可能脱落，造成安全隐患。",
    category: "interior",
  },
  {
    id: 1658,
    question: "How can an inspector test for plaster delamination?",
    options: [
      "By using a moisture meter",
      "By gently pressing or tapping the wall - delaminated areas will feel springy or hollow compared to attached areas",
      "By shining a flashlight on the surface",
      "By measuring the wall thickness",
    ],
    correctAnswer: 1,
    explanation:
      "检查员可以通过轻轻按压或敲击墙壁来测试灰泥脱层——脱层区域与粘附区域相比会感觉有弹性或空心。敲击时会发出空洞的声音而不是实心的声音。",
    category: "interior",
  },
  {
    id: 1659,
    question: "What is 'crown molding' and what does an inspector look for when examining it?",
    options: [
      "A structural beam at the top of the wall",
      "Decorative trim at the wall-ceiling junction; inspectors look for gaps, separation from wall or ceiling, and cracks that may indicate structural movement",
      "A type of flooring transition piece",
      "An electrical conduit cover",
    ],
    correctAnswer: 1,
    explanation:
      "冠形装饰线（crown molding）是墙壁和天花板交汇处的装饰线条。检查员应查看间隙、与墙壁或天花板的分离，以及可能表明结构移动（如桁架上升）的裂缝。",
    category: "interior",
  },
  {
    id: 1660,
    question: "What is 'truss uplift' and how does it manifest in the interior?",
    options: [
      "A construction technique for installing trusses",
      "A phenomenon where roof truss bottom chords bow upward in cold weather, causing cracks between the ceiling and interior partition walls",
      "An earthquake damage pattern",
      "A method of lifting furniture",
    ],
    correctAnswer: 1,
    explanation:
      "桁架上升是指屋顶桁架的下弦在寒冷天气中向上弯曲，导致天花板和内部隔墙之间出现裂缝。这是由桁架上下弦的湿度和温度差异引起的，是正常的季节性现象而非结构问题。",
    category: "interior",
  },
  {
    id: 1661,
    question: "What is the main purpose of bathroom caulking at the tub-to-wall junction?",
    options: [
      "Decorative purposes only",
      "To create a flexible, waterproof seal that prevents water from getting behind the wall surface",
      "To hold the tub in place",
      "To match the grout color",
    ],
    correctAnswer: 1,
    explanation:
      "浴缸与墙壁交汇处的密封胶的主要目的是创建柔性防水密封，防止水渗入墙壁表面后方。浴缸在承受重量和排水时会轻微移动，因此需要柔性密封胶而非刚性灌浆。",
    category: "interior",
  },
  {
    id: 1662,
    question: "What type of material is typically behind tile in a modern shower installation?",
    options: [
      "Standard drywall with waterproof paint",
      "Cement backer board with a waterproof membrane or a complete waterproof membrane system (like Kerdi)",
      "Plywood with tile adhesive",
      "Metal sheeting",
    ],
    correctAnswer: 1,
    explanation:
      "现代淋浴安装中，瓷砖后面通常是水泥背板加防水膜，或完整的防水膜系统（如Schluter Kerdi）。这提供了坚固的基底和防水保护，防止水渗入墙壁结构。",
    category: "interior",
  },
  {
    id: 1663,
    question: "What is the building code requirement for a handrail on residential stairs?",
    options: [
      "Handrails are optional on all stairs",
      "A handrail is required on at least one side of stairs with four or more risers",
      "Handrails are required only on exterior stairs",
      "Handrails are required only on stairs wider than 44 inches",
    ],
    correctAnswer: 1,
    explanation:
      "建筑规范要求在有四个或更多踏步的楼梯上至少一侧安装扶手。如果楼梯两侧都是开放的，两侧都需要扶手。扶手必须沿楼梯全长连续设置，并且是可握的。",
    category: "interior",
  },
  {
    id: 1664,
    question: "What is the handrail return requirement?",
    options: [
      "Handrails must return to the wall or a newel post at the top and bottom to prevent clothing from catching on the end",
      "Handrails must be returned to the manufacturer if defective",
      "The handrail must be returned to a vertical position at the ends",
      "There is no return requirement for handrails",
    ],
    correctAnswer: 0,
    explanation:
      "扶手末端必须回转到墙壁或立柱，以防止衣物挂在扶手末端。未回转的扶手末端是安全隐患，人们的袖子或包带可能钩住突出的末端导致跌倒。",
    category: "interior",
  },
  {
    id: 1665,
    question: "What is the concern when guards or balusters have horizontal rails that can serve as a 'ladder effect'?",
    options: [
      "It reduces the aesthetic value",
      "Children can climb the horizontal rails like a ladder, potentially falling from height",
      "It violates energy codes",
      "It weakens the structural integrity of the railing",
    ],
    correctAnswer: 1,
    explanation:
      "水平栏杆的护栏或立柱产生\"梯子效应\"——儿童可以像爬梯子一样攀爬水平栏杆，可能从高处跌落。这就是为什么建筑规范更倾向于垂直立柱设计，以减少攀爬风险。",
    category: "interior",
  },
  {
    id: 1666,
    question: "What is a 'pocket door' and what should an inspector check?",
    options: [
      "A small closet door",
      "A door that slides into a wall cavity; check for smooth operation, proper latch engagement, track condition, and that it doesn't interfere with wiring or plumbing in the wall",
      "A door with built-in storage pockets",
      "A folding door for a pantry",
    ],
    correctAnswer: 1,
    explanation:
      "推拉门是滑入墙壁空腔中的门。检查员应检查运行是否顺畅、锁扣是否正确啮合、轨道状况，以及门是否干扰墙内的电线或管道。推拉门框架内的墙壁空间限制了电气和管道安装。",
    category: "interior",
  },
  {
    id: 1667,
    question: "What is a bi-fold door and where is it commonly found?",
    options: [
      "A door that folds in half and is typically found on closets and laundry areas",
      "A door that opens both inward and outward",
      "A fireproof door for industrial use",
      "A double-wide entry door",
    ],
    correctAnswer: 0,
    explanation:
      "折叠门（bi-fold）是一种折叠成两半的门，通常用于衣柜和洗衣区域。检查员应检查轨道对齐、枢轴点、操作平顺性，以及门板是否正确折叠不会脱离轨道。",
    category: "interior",
  },
  {
    id: 1668,
    question: "What is the minimum required width for a hallway in a residential building?",
    options: ["24 inches", "30 inches", "36 inches", "44 inches"],
    correctAnswer: 2,
    explanation:
      "住宅建筑走廊的最小要求宽度为36英寸（3英尺）。这提供了足够的通行空间和紧急疏散通道。某些区域（如靠近卫生间的走廊）可能有不同的要求。",
    category: "interior",
  },
  {
    id: 1669,
    question: "What material should never be used as a shower surround?",
    options: [
      "Solid surface material",
      "Fiberglass",
      "Regular (non-moisture-resistant) drywall",
      "Ceramic tile on cement backer board",
    ],
    correctAnswer: 2,
    explanation:
      "普通（非防潮）石膏板绝不应用作淋浴围挡。石膏板在持续接触水时会分解、膨胀和支持霉菌生长。淋浴区域必须使用防水材料如水泥板、固体表面或防水膜系统。",
    category: "interior",
  },
  {
    id: 1670,
    question: "What is the purpose of a threshold (saddle) at an exterior door?",
    options: [
      "Purely decorative",
      "To seal the gap under the door, preventing air, water, and pest infiltration",
      "To trip people entering the home for security",
      "To make the door easier to close",
    ],
    correctAnswer: 1,
    explanation:
      "外门门槛的目的是密封门下方的间隙，防止空气、水和害虫渗入。门槛与门底密封条配合使用，共同创建有效的天气密封。损坏或缺失的门槛是能源损失和水分侵入的常见来源。",
    category: "interior",
  },
  {
    id: 1671,
    question: "What is the maximum gap allowed between the bottom of a guardrail and the walking surface?",
    options: [
      "2 inches",
      "4 inches",
      "6 inches",
      "No maximum is specified",
    ],
    correctAnswer: 1,
    explanation:
      "护栏底部与行走表面之间的最大允许间隙为4英寸，与立柱间距的4英寸球体规则一致。这防止儿童从护栏下方滑出，同样适用于楼梯开放侧的护栏。",
    category: "interior",
  },
  {
    id: 1672,
    question: "What should an inspector check regarding the operation of all accessible windows?",
    options: [
      "Only the window brand",
      "That windows open, close, and lock properly; check for cracked/broken glass, failed seals, proper screens, and functioning hardware",
      "Only the exterior condition",
      "Whether the windows are tinted",
    ],
    correctAnswer: 1,
    explanation:
      "检查员应检查窗户是否能正常打开、关闭和锁定；查看是否有裂缝/破损的玻璃、密封失效、适当的纱窗和正常功能的五金件。卧室窗户还必须满足逃生要求。",
    category: "interior",
  },
  {
    id: 1673,
    question: "What is the 'glazing requirement' near doors?",
    options: [
      "All glass near doors must be frosted",
      "Glass within 24 inches of a door and below 60 inches must be tempered safety glass",
      "Glass near doors must be double-paned",
      "No glass is allowed within 5 feet of a door",
    ],
    correctAnswer: 1,
    explanation:
      "门旁24英寸范围内且低于60英寸的玻璃必须是钢化安全玻璃。这是因为人们可能在通过门时跌倒碰到旁边的玻璃。安全玻璃碎成小颗粒而不是锋利碎片，减少受伤风险。",
    category: "interior",
  },
  {
    id: 1674,
    question: "What is the purpose of a floor drain in a laundry room?",
    options: [
      "To drain the washing machine during normal operation",
      "To prevent flooding by providing a drain for water heater overflow, washing machine leaks, and other water emergencies",
      "To increase the home's resale value",
      "It is required only in commercial laundries",
    ],
    correctAnswer: 1,
    explanation:
      "洗衣房地漏的目的是防止水灾，为热水器溢流、洗衣机泄漏和其他紧急水情况提供排水。地漏需要定期加水以保持存水弯中的水封，防止下水道气体进入室内。",
    category: "interior",
  },
  {
    id: 1675,
    question: "What does 'paint alligatoring' on interior surfaces indicate?",
    options: [
      "A popular decorative faux finish",
      "The paint has cracked in a pattern resembling alligator skin, usually due to multiple incompatible paint layers, excessive thickness, or painting over wet/dirty surfaces",
      "The paint was made from alligator-based products",
      "Normal paint aging after 50+ years",
    ],
    correctAnswer: 1,
    explanation:
      "油漆龟裂（alligatoring）是油漆开裂形成类似鳄鱼皮的图案，通常由多层不兼容的油漆、涂层过厚，或在潮湿/脏污表面上涂漆引起。修复通常需要完全去除旧漆后重新涂装。",
    category: "interior",
  },
  {
    id: 1676,
    question: "What should an inspector look for at the joint where different flooring materials meet?",
    options: [
      "Only the color match",
      "Proper transition strips, no trip hazards (height differences less than 1/4 inch), and secure fastening",
      "Whether the flooring was installed on the same day",
      "The brand names of each flooring type",
    ],
    correctAnswer: 1,
    explanation:
      "在不同地板材料交汇处，检查员应查看是否有适当的过渡条、无绊倒危险（高度差小于1/4英寸）和牢固的固定。缺少过渡条或高度差过大是常见的绊倒安全隐患。",
    category: "interior",
  },
  {
    id: 1677,
    question: "What is the minimum size requirement for a habitable room?",
    options: [
      "50 square feet",
      "70 square feet with no dimension less than 7 feet",
      "100 square feet",
      "120 square feet with no dimension less than 10 feet",
    ],
    correctAnswer: 1,
    explanation:
      "可居住房间的最小面积要求为70平方英尺，且任何方向不小于7英尺。至少一个可居住房间必须至少120平方英尺。厨房不需要满足此最低面积要求。",
    category: "interior",
  },
  {
    id: 1678,
    question: "What is the concern with a step down into a sunken living room without a railing?",
    options: [
      "It is a design preference with no safety concern",
      "A step down of more than 30 inches requires a guardrail; even smaller drops can be a trip hazard if poorly lit or unexpected",
      "It violates energy codes",
      "It will cause flooding",
    ],
    correctAnswer: 1,
    explanation:
      "下沉式客厅的台阶如果超过30英寸需要护栏；即使较小的落差也可能在照明不良或意外的情况下成为绊倒危险。检查员应注意不均匀的地板高度和缺少适当的视觉提示或栏杆。",
    category: "interior",
  },
  {
    id: 1679,
    question: "What should an inspector check regarding bathroom flooring?",
    options: [
      "Only the color and style",
      "Water resistance, condition of tile and grout, signs of water damage, proper slope toward drains, and that the flooring material is appropriate for wet areas",
      "Whether the flooring matches the hallway",
      "The original installation date",
    ],
    correctAnswer: 1,
    explanation:
      "浴室地板检查应包括防水性、瓷砖和灌浆状况、水损迹象、排水口方向的适当坡度，以及地板材料是否适合湿润区域。非防水材料（如层压板）安装在浴室是常见的问题。",
    category: "interior",
  },
  {
    id: 1680,
    question: "What is 'wainscoting' and what should an inspector note about it?",
    options: [
      "A type of wall insulation",
      "Decorative wood paneling on the lower portion of a wall; inspector should check for moisture damage behind it, especially in bathrooms and below-grade spaces",
      "A waterproofing system for basements",
      "Crown molding at the floor level",
    ],
    correctAnswer: 1,
    explanation:
      "护墙板（wainscoting）是墙壁下部的装饰木面板。检查员应检查其后面是否有水分损害，特别是在浴室和地下空间。护墙板可能隐藏水渍、霉菌或其他损坏。",
    category: "interior",
  },
  {
    id: 1681,
    question: "What type of interior door is required between a bedroom and a hallway for fire safety?",
    options: [
      "A fire-rated door is required in all bedrooms",
      "A standard solid-core or hollow-core door - no fire rating is typically required between bedrooms and hallways in single-family homes",
      "A steel door with panic hardware",
      "No door is required",
    ],
    correctAnswer: 1,
    explanation:
      "在单户住宅中，卧室和走廊之间通常不需要防火等级的门。标准实心或空心门即可。但关闭的卧室门确实能在火灾中提供重要的保护，可以延缓火焰和烟雾蔓延数分钟。",
    category: "interior",
  },
  {
    id: 1682,
    question: "What is the minimum doorway width for a bedroom door?",
    options: [
      "24 inches",
      "28 inches",
      "32 inches (clear opening)",
      "36 inches",
    ],
    correctAnswer: 2,
    explanation:
      "卧室门的最小净开口宽度通常为32英寸。大多数住宅使用30英寸或更宽的门板（提供约28-29英寸的净开口），但ADA可达性要求32英寸净开口。主入口门通常为36英寸。",
    category: "interior",
  },
  {
    id: 1683,
    question: "What is the purpose of an overflow drain on a bathtub?",
    options: [
      "To drain the tub faster",
      "To prevent the tub from overflowing by draining excess water when the water level reaches the overflow opening",
      "To provide a second drain in case the main drain clogs",
      "To vent sewer gases",
    ],
    correctAnswer: 1,
    explanation:
      "浴缸溢流排水口防止浴缸因水龙头忘关而溢出，当水位达到溢流口时排出多余的水。检查员应确保溢流口连接正确且不漏水，因为故障的溢流口可能导致隐藏的水损害。",
    category: "interior",
  },
  {
    id: 1684,
    question: "What is the significance of finding soft or spongy areas near a toilet base?",
    options: [
      "The carpet needs replacing",
      "The subfloor is likely damaged from a leaking wax ring seal, indicating water damage and potential structural concern",
      "The toilet was recently installed",
      "The floor was recently waxed",
    ],
    correctAnswer: 1,
    explanation:
      "马桶底座附近的柔软或海绵状区域通常表明蜡环密封泄漏导致底层地板损坏。长期泄漏可能腐蚀底层地板和搁栅，造成结构损害。这是一个需要及时修复的重要发现。",
    category: "interior",
  },
  {
    id: 1685,
    question: "What is a common problem found with cultured marble countertops and shower surrounds?",
    options: [
      "They are too heavy for standard cabinets",
      "Surface crazing, cracks, and chips that can allow moisture penetration if not repaired",
      "They change color when wet",
      "They attract insects",
    ],
    correctAnswer: 1,
    explanation:
      "人造大理石台面和淋浴围挡的常见问题包括表面龟裂、裂缝和缺口，如果不修复可能允许水分渗透。一旦保护凝胶涂层被破坏，基底材料可能吸水导致进一步损坏。",
    category: "interior",
  },
  {
    id: 1686,
    question: "What is the concern with a lack of grab bars in a shower or near a toilet?",
    options: [
      "It violates energy codes",
      "While not required by code in most residential new construction, it is a safety concern - falls in bathrooms are a leading cause of home injuries",
      "It reduces the home's resale value",
      "It indicates poor construction quality",
    ],
    correctAnswer: 1,
    explanation:
      "虽然大多数住宅新建规范不要求安装扶手，但浴室中缺少扶手是一个安全问题——浴室跌倒是家庭伤害的主要原因之一。建议特别是对老年居住者安装扶手以提高安全性。",
    category: "interior",
  },
  {
    id: 1687,
    question: "What is the building code requirement for wall backing to support future grab bar installation in new construction?",
    options: [
      "No requirement exists",
      "Blocking or reinforcement in bathroom walls to support future grab bar installation is required in many jurisdictions for new construction",
      "Grab bars must be installed during construction",
      "Only commercial buildings need grab bar backing",
    ],
    correctAnswer: 1,
    explanation:
      "许多地区的新建住宅规范要求在浴室墙壁中安装衬板或加固材料，以支持未来扶手的安装。这使得以后安装扶手更容易，无需打开墙壁寻找结构支撑。",
    category: "interior",
  },
  {
    id: 1688,
    question: "What is the issue with improperly secured wall-mounted cabinets?",
    options: [
      "They look uneven",
      "They can fall from the wall, causing injury and damage - cabinets must be fastened to wall studs or adequate blocking",
      "They waste wall space",
      "They violate plumbing codes",
    ],
    correctAnswer: 1,
    explanation:
      "固定不当的壁挂式橱柜可能从墙上脱落，造成人身伤害和财产损坏。橱柜必须固定到墙壁骨架或足够的衬板上。仅用石膏板锚固件安装的重型橱柜是安全隐患。",
    category: "interior",
  },
  {
    id: 1689,
    question: "What is the concern with finding evidence of previous fire damage that has been repaired in an interior?",
    options: [
      "No concern if the repairs look good",
      "The structural integrity of charred framing, adequacy of repairs, presence of lingering smoke damage, and whether repairs were properly permitted should all be evaluated",
      "Only the cosmetic appearance matters",
      "Fire damage always requires total reconstruction",
    ],
    correctAnswer: 1,
    explanation:
      "发现以前火灾损害修复的证据时，应评估烧焦框架的结构完整性、修复是否充分、是否有残留烟雾损害，以及修复是否获得了适当的许可。即使修复后看起来不错，隐藏的损坏可能仍然存在。",
    category: "interior",
  },
  {
    id: 1690,
    question: "What is the 'drop test' sometimes used to check for hollow or loose tiles?",
    options: [
      "Dropping a tile to see if it breaks",
      "Tapping tiles with a hard object and listening for a hollow sound compared to a solid, well-bonded tile",
      "Dropping water on tiles to test drainage",
      "Dropping heavy objects on the floor to test durability",
    ],
    correctAnswer: 1,
    explanation:
      "用硬物敲击瓷砖并听空心声与粘合良好的实心瓷砖的区别。空心声音表示瓷砖下方有空隙，可能是粘合剂失效或安装不当。空心瓷砖在受到荷载时更容易开裂。",
    category: "interior",
  },
  {
    id: 1691,
    question: "What is the minimum shower compartment size required by code?",
    options: [
      "24 x 24 inches",
      "30 x 30 inches (or 900 square inches with minimum 30-inch dimension)",
      "36 x 36 inches",
      "48 x 48 inches",
    ],
    correctAnswer: 1,
    explanation:
      "建筑规范要求淋浴间最小尺寸为30 x 30英寸（或900平方英寸且最小尺寸不小于30英寸）。这确保了使用者有足够的空间安全地站立和移动。",
    category: "interior",
  },
  {
    id: 1692,
    question: "What is the issue with carpet on bathroom floors?",
    options: [
      "Carpet is the preferred bathroom flooring",
      "Carpet absorbs and retains moisture, creating ideal conditions for mold growth, bacteria, and odors",
      "Carpet makes the bathroom too warm",
      "Carpet is too expensive for bathrooms",
    ],
    correctAnswer: 1,
    explanation:
      "浴室地板上的地毯吸收并保留水分，为霉菌生长、细菌和异味创造理想条件。浴室应使用防水或耐水地板材料（如瓷砖、乙烯基、天然石材）。检查员应报告浴室中的地毯作为不当材料。",
    category: "interior",
  },
  {
    id: 1693,
    question: "What interior defect is commonly associated with expansive (clay) soils?",
    options: [
      "Paint fading",
      "Sticking doors and windows, cracks in walls and ceilings, and uneven floors that change seasonally",
      "Excessive dust buildup",
      "Electrical system malfunctions",
    ],
    correctAnswer: 1,
    explanation:
      "膨胀性（粘土）土壤常导致的室内缺陷包括门窗卡住、墙壁和天花板裂缝，以及随季节变化的不平地板。这些土壤在潮湿时膨胀、干燥时收缩，导致基础和上部结构移动。",
    category: "interior",
  },
  {
    id: 1694,
    question: "What is the 'tape joint' in drywall finishing and why does it crack?",
    options: [
      "A type of construction adhesive",
      "The junction where two drywall sheets meet, finished with paper tape and joint compound; it cracks due to building movement, improper taping, or insufficient compound",
      "The joint between the wall and the floor",
      "A seismic-resistant flexible joint",
    ],
    correctAnswer: 1,
    explanation:
      "胶带接缝是两块石膏板相遇的接合处，用纸胶带和接缝化合物完成。它因建筑物移动、胶带粘贴不当或化合物不足而开裂。轻微的胶带接缝裂缝通常是装饰性问题，可以轻松修复。",
    category: "interior",
  },
  {
    id: 1695,
    question: "What is the concern with painting over wallpaper?",
    options: [
      "It is the recommended best practice",
      "Paint may cause the wallpaper to bubble, peel, or show seams; it also makes future removal of both much more difficult",
      "It improves the wallpaper adhesion",
      "It is a code violation",
    ],
    correctAnswer: 1,
    explanation:
      "在壁纸上涂漆可能导致壁纸鼓泡、剥落或显示接缝；它还使未来两者的去除更加困难。检查员应注意涂漆壁纸的存在，因为它可能隐藏下方的问题。",
    category: "interior",
  },
  {
    id: 1696,
    question: "What is 'outgassing' or 'off-gassing' in relation to interior materials?",
    options: [
      "Gas leaks from the stove",
      "The release of volatile organic compounds (VOCs) from new building materials, paints, adhesives, and furnishings",
      "Natural gas seeping through the foundation",
      "Carbon monoxide from the fireplace",
    ],
    correctAnswer: 1,
    explanation:
      "排气（off-gassing）是指新建筑材料、油漆、粘合剂和家具释放的挥发性有机化合物（VOC）。VOC可能导致头痛、呼吸问题和其他健康影响。使用低VOC产品和适当通风可以减轻这个问题。",
    category: "interior",
  },
  {
    id: 1697,
    question: "What are the signs of termite damage visible from interior inspection?",
    options: [
      "Only exterior damage is visible",
      "Mud tubes on walls, hollow-sounding wood, sagging floors or doors, small holes in drywall, and wings or frass (droppings) near baseboards",
      "Termite damage is never visible",
      "Only water stains indicate termite damage",
    ],
    correctAnswer: 1,
    explanation:
      "从室内可见的白蚁损害迹象包括墙壁上的泥管、敲击时空心的木材、下沉的地板或门、石膏板上的小孔，以及踢脚板附近的翅膀或粪便（frass）。这些发现应建议进一步的专业害虫检查。",
    category: "interior",
  },
  {
    id: 1698,
    question: "What is 'Chinese drywall' and why is it a concern?",
    options: [
      "A premium drywall product from China",
      "Defective drywall imported from China (circa 2001-2009) that releases sulfur gases, corroding metal components and causing health issues",
      "A decorative wall treatment",
      "A fire-resistant drywall type",
    ],
    correctAnswer: 1,
    explanation:
      "中国石膏板是2001-2009年间进口的有缺陷石膏板，释放硫化物气体，腐蚀铜管、电线和家电组件，并导致健康问题（如头痛、呼吸问题）。迹象包括腐蚀的铜线、恶臭味和变黑的金属。",
    category: "interior",
  },
  {
    id: 1699,
    question: "What is the proper fire separation requirement for the ceiling of an attached garage directly below a habitable room?",
    options: [
      "No separation is required for ceilings",
      "5/8-inch Type X drywall on the garage ceiling",
      "Standard 1/2-inch drywall is sufficient",
      "Only insulation is needed, no drywall required",
    ],
    correctAnswer: 1,
    explanation:
      "连接车库正下方有可居住房间时，车库天花板需要5/8英寸Type X防火石膏板。这提供了必要的防火分隔，延缓火势从车库蔓延到上方的居住空间。所有穿透处也必须密封。",
    category: "interior",
  },
  {
    id: 1700,
    question: "What should an inspector report about an interior room with no windows?",
    options: [
      "Nothing, it is the homeowner's preference",
      "A room without windows may not qualify as a habitable room (especially a bedroom) due to lack of natural light, ventilation, and emergency egress",
      "It is more energy efficient",
      "Only bathrooms need windows",
    ],
    correctAnswer: 1,
    explanation:
      "没有窗户的室内房间可能不符合可居住房间（特别是卧室）的要求，因为缺少自然光线、通风和紧急逃生出口。建筑规范通常要求可居住房间有一定面积的窗户用于采光和通风。",
    category: "interior",
  },
];
