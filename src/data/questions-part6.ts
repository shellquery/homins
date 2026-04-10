import type { Question } from "./questions";

export const questionsPart6: Question[] = [
  // ============================================================
  // ROOFING (Questions 1101-1250)
  // ============================================================
  {
    id: 1101,
    question:
      "In California, what is the minimum fire-rated roofing class required for new construction in most jurisdictions?",
    options: [
      "Class A",
      "Class B",
      "Class C",
      "No rating required",
    ],
    correctAnswer: 0,
    explanation:
      "加州大多数司法管辖区要求新建筑的屋顶材料至少达到Class A防火等级。这是最高的防火等级，能抵抗严重的火灾暴露。",
    category: "roofing",
  },
  {
    id: 1102,
    question:
      "What does 'WUI' stand for in the context of California building codes?",
    options: [
      "Water Utility Infrastructure",
      "Wildland-Urban Interface",
      "Wind Uplift Index",
      "Weather Underlay Installation",
    ],
    correctAnswer: 1,
    explanation:
      "WUI代表Wildland-Urban Interface（荒地-城市交界区）。在加州，位于WUI区域的建筑必须满足额外的防火要求，包括使用抗火屋顶材料。",
    category: "roofing",
  },
  {
    id: 1103,
    question:
      "Which California regulation governs cool roof requirements for residential buildings?",
    options: [
      "Title 19 Fire Code",
      "Title 22 Health Code",
      "Title 24 Energy Efficiency Standards",
      "Title 8 Safety Code",
    ],
    correctAnswer: 2,
    explanation:
      "加州Title 24能效标准规定了住宅建筑的冷屋顶要求。冷屋顶通过反射更多的太阳辐射和减少热量吸收来降低建筑能耗。",
    category: "roofing",
  },
  {
    id: 1104,
    question:
      "What is the Solar Reflectance Index (SRI) primarily used to measure?",
    options: [
      "The number of solar panels a roof can support",
      "The angle of sunlight hitting the roof",
      "The UV resistance of roofing materials",
      "A roof's ability to reject solar heat",
    ],
    correctAnswer: 3,
    explanation:
      "太阳反射指数（SRI）用于衡量屋顶材料拒绝太阳热量的能力，综合考虑了太阳反射率和热辐射率。SRI值越高，屋顶在阳光下保持凉爽的能力越强。",
    category: "roofing",
  },
  {
    id: 1105,
    question:
      "When installing roof-mounted solar panels, what is a critical consideration for the home inspector to evaluate?",
    options: [
      "Whether the roof structure can support the additional load",
      "The brand of solar panels used",
      "The color of the panels",
      "Whether the homeowner has an electric vehicle",
    ],
    correctAnswer: 0,
    explanation:
      "房屋检查员必须评估屋顶结构是否能承受太阳能板的额外荷载。这包括检查椽子、桁架和屋面板的状况，以及安装点周围的防水处理。",
    category: "roofing",
  },
  {
    id: 1106,
    question:
      "What is a key difference between concrete roof tiles and clay roof tiles?",
    options: [
      "Clay tiles are heavier and less expensive than concrete tiles",
      "Concrete tiles are heavier and less expensive than clay tiles",
      "Concrete tiles have a longer lifespan than clay tiles",
      "There is no significant difference between them",
    ],
    correctAnswer: 1,
    explanation:
      "混凝土瓦通常比粘土瓦更重且价格更低。粘土瓦虽然更轻，但通常更昂贵，使用寿命可达100年以上，而混凝土瓦通常约50年。",
    category: "roofing",
  },
  {
    id: 1107,
    question:
      "What is the primary concern when inspecting a slate roof?",
    options: [
      "Algae growth on the surface",
      "Color fading of the slate",
      "Cracked, broken, or sliding slates",
      "Excessive weight on the structure",
    ],
    correctAnswer: 2,
    explanation:
      "检查石板屋顶时，最主要的关注点是开裂、破损或滑动的石板。这些问题会导致漏水。石板本身非常耐用，但固定钉可能会腐蚀，导致石板滑落。",
    category: "roofing",
  },
  {
    id: 1108,
    question:
      "Wood shake roofing in California WUI zones requires what additional treatment?",
    options: [
      "Waterproof coating applied annually",
      "UV-resistant paint",
      "No additional treatment is required",
      "Fire-retardant treatment to achieve Class A or B rating",
    ],
    correctAnswer: 3,
    explanation:
      "在加州WUI区域，木质摇瓦屋顶需要进行防火处理以达到Class A或B等级。许多WUI区域实际上完全禁止使用木质屋顶材料。",
    category: "roofing",
  },
  {
    id: 1109,
    question:
      "What is the main difference between 3-tab and architectural (dimensional) composition shingles?",
    options: [
      "Architectural shingles are thicker with a layered appearance and longer warranty",
      "3-tab shingles are thicker and more durable",
      "Architectural shingles are always lighter in color",
      "3-tab shingles provide better wind resistance",
    ],
    correctAnswer: 0,
    explanation:
      "建筑型（立体）沥青瓦比三片式沥青瓦更厚，具有分层外观，通常保修期更长（30-50年vs 20-25年）。它们也提供更好的抗风性能。",
    category: "roofing",
  },
  {
    id: 1110,
    question:
      "What wind speed rating do most architectural shingles carry?",
    options: [
      "50-60 mph",
      "110-130 mph",
      "150-180 mph",
      "200+ mph",
    ],
    correctAnswer: 1,
    explanation:
      "大多数建筑型沥青瓦的抗风等级为110-130 mph。一些高端产品可以达到更高的等级，但标准建筑型瓦片通常在这个范围内。",
    category: "roofing",
  },
  {
    id: 1111,
    question:
      "Designer shingles differ from standard architectural shingles primarily in what way?",
    options: [
      "They are made from recycled materials",
      "They are thinner and lighter",
      "They mimic the appearance of natural materials like slate or wood shake",
      "They do not require underlayment",
    ],
    correctAnswer: 2,
    explanation:
      "设计师系列沥青瓦与标准建筑型瓦的主要区别在于其外观模仿天然材料（如石板或木摇瓦），具有更丰富的纹理和颜色变化，通常也更厚重。",
    category: "roofing",
  },
  {
    id: 1112,
    question:
      "What is the primary advantage of standing seam metal roofing?",
    options: [
      "It is the least expensive metal roofing option",
      "It requires no maintenance whatsoever",
      "It can be installed directly over existing shingles without concern",
      "Raised seams that interlock above the roof surface prevent water infiltration",
    ],
    correctAnswer: 3,
    explanation:
      "立缝金属屋顶的主要优势是其凸起的接缝在屋面以上互锁，有效防止水渗透。紧固件隐藏在接缝下方，消除了穿透屋面板的钉孔。",
    category: "roofing",
  },
  {
    id: 1113,
    question:
      "Corrugated metal roofing panels are typically made from which material?",
    options: [
      "Galvanized steel or aluminum",
      "Copper only",
      "Cast iron",
      "Stainless steel only",
    ],
    correctAnswer: 0,
    explanation:
      "波纹金属屋顶面板通常由镀锌钢或铝制成。镀锌钢经过锌涂层处理以防锈，而铝天然耐腐蚀，常用于沿海地区。",
    category: "roofing",
  },
  {
    id: 1114,
    question:
      "Stone-coated steel roofing tiles offer what combination of benefits?",
    options: [
      "The weight of clay tiles with the cost of asphalt shingles",
      "Durability of metal with the aesthetic appearance of traditional tiles",
      "No fire resistance but excellent wind resistance",
      "Lowest cost among all metal roofing options",
    ],
    correctAnswer: 1,
    explanation:
      "石面钢瓦结合了金属的耐久性和传统瓦片的美观外观。石粒涂层提供了类似陶瓦或木瓦的外观，同时保持了金属屋顶的轻质和耐用特性。",
    category: "roofing",
  },
  {
    id: 1115,
    question:
      "What does TPO stand for in flat roofing systems?",
    options: [
      "Total Protection Overlay",
      "Thermal Polymer Oxide",
      "Thermoplastic Polyolefin",
      "Treated Polyester Outer",
    ],
    correctAnswer: 2,
    explanation:
      "TPO代表热塑性聚烯烃（Thermoplastic Polyolefin），是一种单层膜平屋顶系统。它具有良好的耐紫外线性能和能量反射特性，在加州商业和住宅平屋顶中广泛使用。",
    category: "roofing",
  },
  {
    id: 1116,
    question:
      "EPDM roofing membrane is commonly known by what nickname?",
    options: [
      "Plastic roofing",
      "Tar roofing",
      "Fabric roofing",
      "Rubber roofing",
    ],
    correctAnswer: 3,
    explanation:
      "EPDM（三元乙丙橡胶）屋顶膜因其橡胶成分而俗称'橡胶屋顶'。它是一种耐用的合成橡胶膜，广泛用于低坡度和平屋顶建筑。",
    category: "roofing",
  },
  {
    id: 1117,
    question:
      "Modified bitumen roofing is typically installed using which method?",
    options: [
      "Torch-applied, cold adhesive, or self-adhering",
      "Mechanical fastening only",
      "Spray application only",
      "Hot mopping only",
    ],
    correctAnswer: 0,
    explanation:
      "改性沥青屋顶可通过火焰喷涂、冷粘合剂或自粘方式安装。火焰喷涂法最传统但有火灾风险，冷粘合和自粘方法更安全，越来越受欢迎。",
    category: "roofing",
  },
  {
    id: 1118,
    question:
      "A built-up roof (BUR) system typically consists of how many layers?",
    options: [
      "A single thick layer of asphalt",
      "Multiple alternating layers of bitumen and reinforcing fabric",
      "Two layers of metal sheeting",
      "One layer of rubber membrane",
    ],
    correctAnswer: 1,
    explanation:
      "叠层屋顶（BUR）系统由多层交替的沥青和增强织物组成，通常3-5层。这种'多层'结构提供了优异的防水性能和耐久性。",
    category: "roofing",
  },
  {
    id: 1119,
    question:
      "What is the primary purpose of an elastomeric roof coating?",
    options: [
      "To add structural strength to the roof",
      "To replace damaged shingles",
      "To provide a seamless waterproof membrane that can stretch and flex",
      "To insulate the attic space",
    ],
    correctAnswer: 2,
    explanation:
      "弹性体屋顶涂层的主要目的是提供无缝防水膜，能够拉伸和弯曲以适应温度变化引起的屋面运动。它也能反射太阳辐射，降低屋顶温度。",
    category: "roofing",
  },
  {
    id: 1120,
    question:
      "Silicone roof coatings are particularly well-suited for which condition?",
    options: [
      "Roofs with steep slopes only",
      "Roofs in cold climates only",
      "Roofs that need to be walked on frequently",
      "Roofs with ponding water issues",
    ],
    correctAnswer: 3,
    explanation:
      "硅酮屋顶涂层特别适用于有积水问题的屋顶，因为硅酮不会在持续浸水时降解。它能保持其防水性能，即使在长时间接触水的情况下。",
    category: "roofing",
  },
  {
    id: 1121,
    question:
      "What is the primary function of a parapet wall on a flat roof?",
    options: [
      "To provide a barrier at the roof edge for safety and weather protection",
      "To support solar panels",
      "To improve the building's insulation",
      "To channel rainwater to specific drain points",
    ],
    correctAnswer: 0,
    explanation:
      "女儿墙的主要功能是在平屋顶边缘提供安全屏障和气候保护。它防止人员从屋顶边缘坠落，同时阻挡风驱雨水进入建筑。",
    category: "roofing",
  },
  {
    id: 1122,
    question:
      "A scupper on a flat roof serves what purpose?",
    options: [
      "It is a device that heats the roof to prevent ice dams",
      "It is an opening in the parapet wall that allows water to drain off the roof",
      "It is a structural support for rooftop equipment",
      "It is a type of skylight",
    ],
    correctAnswer: 1,
    explanation:
      "泄水口（scupper）是女儿墙上的开口，允许积水排出屋顶。它通常连接到外部落水管，是平屋顶排水系统的重要组成部分。",
    category: "roofing",
  },
  {
    id: 1123,
    question:
      "Internal drains on flat roofs are typically located where?",
    options: [
      "At the highest points of the roof",
      "Along the roof edges only",
      "At the lowest points of the roof where water naturally collects",
      "Adjacent to rooftop HVAC equipment only",
    ],
    correctAnswer: 2,
    explanation:
      "平屋顶的内部排水管通常安装在屋顶最低点，即水自然汇集的位置。屋顶应有适当的坡度（通常至少1/4英寸/英尺）将水引向排水口。",
    category: "roofing",
  },
  {
    id: 1124,
    question:
      "What is a cricket (or saddle) behind a chimney designed to prevent?",
    options: [
      "Wind damage to the chimney cap",
      "Heat transfer from the chimney to the roof",
      "Bird nesting on the chimney",
      "Water accumulation and ice damming behind the chimney",
    ],
    correctAnswer: 3,
    explanation:
      "烟囱背后的分水脊（cricket/saddle）旨在防止水在烟囱上游侧积聚。它是一个小型的脊状结构，将水分流到烟囱两侧，防止渗漏和冰坝形成。",
    category: "roofing",
  },
  {
    id: 1125,
    question:
      "According to building codes, a cricket is generally required behind a chimney when the chimney width exceeds what measurement?",
    options: [
      "30 inches",
      "12 inches",
      "48 inches",
      "60 inches",
    ],
    correctAnswer: 0,
    explanation:
      "建筑规范通常要求当烟囱宽度超过30英寸时，必须在烟囱上游侧安装分水脊（cricket）。这有助于防止水和碎片在烟囱后积聚。",
    category: "roofing",
  },
  {
    id: 1126,
    question:
      "Step flashing is used at what type of roof-to-wall intersection?",
    options: [
      "Where two roof slopes meet to form a ridge",
      "Where a sloped roof meets a vertical wall",
      "Where a flat roof meets a parapet wall",
      "Around circular roof penetrations",
    ],
    correctAnswer: 1,
    explanation:
      "阶梯闪烁（step flashing）用于斜屋顶与垂直墙面的交汇处。每块闪烁片与一层瓦片交错安装，形成阶梯状图案，有效引导水流远离交汇处。",
    category: "roofing",
  },
  {
    id: 1127,
    question:
      "What is the purpose of counter flashing?",
    options: [
      "To replace damaged shingles",
      "To reinforce the roof ridge",
      "To cover and protect the top edge of step flashing or base flashing",
      "To provide ventilation at the eaves",
    ],
    correctAnswer: 2,
    explanation:
      "反闪烁（counter flashing）的目的是覆盖和保护阶梯闪烁或基础闪烁的顶部边缘。它通常嵌入砂浆缝或墙体中，防止水从闪烁片顶部渗入。",
    category: "roofing",
  },
  {
    id: 1128,
    question:
      "In an open valley roof design, what is typically visible between the shingles?",
    options: [
      "Exposed wood decking",
      "Rubber membrane",
      "Concrete",
      "Metal flashing",
    ],
    correctAnswer: 3,
    explanation:
      "在开放式屋脊谷设计中，两侧的瓦片不会在谷底相会，露出金属闪烁片。金属闪烁片（通常为铝或镀锌钢）引导水沿着谷线流下，提供优异的排水性能。",
    category: "roofing",
  },
  {
    id: 1129,
    question:
      "What is a closed valley on a roof?",
    options: [
      "A valley where shingles from one or both sides cover the valley center",
      "A valley with a raised metal ridge",
      "A valley sealed with caulk only",
      "A valley that does not allow any water flow",
    ],
    correctAnswer: 0,
    explanation:
      "闭合式屋脊谷是指一侧或两侧的瓦片覆盖谷底中心的设计。瓦片在谷底重叠，下方仍有防水衬垫保护。外观更整洁但维修较困难。",
    category: "roofing",
  },
  {
    id: 1130,
    question:
      "A woven valley is created by doing what with the shingles?",
    options: [
      "Weaving metal strips between the shingles",
      "Alternating shingles from each roof slope across the valley center",
      "Layering three courses of shingles in the valley",
      "Using a special interlocking shingle design",
    ],
    correctAnswer: 1,
    explanation:
      "编织式屋脊谷是将两侧屋面的瓦片交替铺设穿过谷底中心。每层瓦片都延伸到对面斜面上，形成编织图案。施工快但可能导致排水问题。",
    category: "roofing",
  },
  {
    id: 1131,
    question:
      "A pipe boot (roof jack) is used to seal around what type of roof penetration?",
    options: [
      "Electrical conduit only",
      "Chimney flues only",
      "Plumbing vent pipes",
      "Skylight frames",
    ],
    correctAnswer: 2,
    explanation:
      "管靴（pipe boot/roof jack）用于密封管道通风口等圆形屋顶穿透点。它由金属底板和橡胶套管组成，紧密包裹管道以防止水渗入。",
    category: "roofing",
  },
  {
    id: 1132,
    question:
      "What is the most common cause of pipe boot failure?",
    options: [
      "The pipe expanding in diameter",
      "Wind blowing the boot off the roof",
      "Ice forming inside the pipe",
      "Deterioration and cracking of the rubber gasket from UV exposure",
    ],
    correctAnswer: 3,
    explanation:
      "管靴失效最常见的原因是橡胶垫圈因紫外线照射而老化开裂。这通常在安装后8-15年发生，会导致水沿管道渗入屋顶下方。",
    category: "roofing",
  },
  {
    id: 1133,
    question:
      "Turbine vents on a roof operate by using what force?",
    options: [
      "Wind power to spin the turbine and draw hot air from the attic",
      "Electricity to power a motor",
      "Solar energy to heat air",
      "Gravity to pull cool air downward",
    ],
    correctAnswer: 0,
    explanation:
      "涡轮通风口利用风力旋转涡轮，从阁楼中抽出热空气。它不需要电力，完全依靠自然风力运行，是一种节能的阁楼通风方式。",
    category: "roofing",
  },
  {
    id: 1134,
    question:
      "What is a common concern with powered attic ventilators (PAVs)?",
    options: [
      "They are too quiet to detect during inspection",
      "They can depressurize the attic and pull conditioned air from the living space",
      "They only work during winter months",
      "They increase attic humidity significantly",
    ],
    correctAnswer: 1,
    explanation:
      "电动阁楼通风器（PAVs）的常见问题是可能使阁楼产生负压，将室内空调空气吸入阁楼。这会增加能耗和空调负荷，降低整体能效。",
    category: "roofing",
  },
  {
    id: 1135,
    question:
      "To calculate the required ridge vent length, what information is primarily needed?",
    options: [
      "The roof pitch only",
      "The number of rooms below the attic",
      "The total attic floor area and the net free area per linear foot of ridge vent",
      "The type of insulation in the attic",
    ],
    correctAnswer: 2,
    explanation:
      "计算所需脊通风口长度主要需要阁楼地板总面积和每线性英尺脊通风口的净自由面积（NFA）。根据通风比率要求，可以算出所需的通风口总长度。",
    category: "roofing",
  },
  {
    id: 1136,
    question:
      "What is the standard attic ventilation ratio when both soffit and ridge vents are used together?",
    options: [
      "1/50 (1 square foot of vent per 50 square feet of attic floor)",
      "1/600 (1 square foot of vent per 600 square feet of attic floor)",
      "1/100 (1 square foot of vent per 100 square feet of attic floor)",
      "1/300 (1 square foot of vent per 300 square feet of attic floor)",
    ],
    correctAnswer: 3,
    explanation:
      "当同时使用檐口通风口和脊通风口时，标准阁楼通风比率为1/300，即每300平方英尺阁楼地板面积需要1平方英尺的通风口净自由面积。",
    category: "roofing",
  },
  {
    id: 1137,
    question:
      "When only exhaust vents are present without balanced intake ventilation, what ratio is required?",
    options: [
      "1/150",
      "1/300",
      "1/450",
      "1/600",
    ],
    correctAnswer: 0,
    explanation:
      "当只有排气通风口而没有平衡的进气通风时，要求的通风比率为1/150，即每150平方英尺阁楼面积需要1平方英尺通风口。这是因为不平衡通风效率较低。",
    category: "roofing",
  },
  {
    id: 1138,
    question:
      "Ice and water shield membrane should be installed in which roof location?",
    options: [
      "Only at the roof ridge",
      "Along eaves, in valleys, and around penetrations",
      "Only under skylights",
      "Covering the entire roof surface",
    ],
    correctAnswer: 1,
    explanation:
      "冰水屏障膜应安装在屋檐沿线、屋脊谷中以及管道穿透点周围。这些是最容易发生水渗漏的关键区域，自粘式膜提供了额外的防水保护层。",
    category: "roofing",
  },
  {
    id: 1139,
    question:
      "What is the primary advantage of synthetic underlayment over traditional 15-lb felt?",
    options: [
      "Lower cost per square foot",
      "Better fire resistance rating",
      "Greater tear resistance, lighter weight, and longer UV exposure tolerance",
      "It does not require any fasteners",
    ],
    correctAnswer: 2,
    explanation:
      "合成底衬比传统15磅毡纸具有更大的抗撕裂强度、更轻的重量和更长的紫外线暴露耐受时间。这使得施工更安全，且在屋面安装延迟时提供更好的保护。",
    category: "roofing",
  },
  {
    id: 1140,
    question:
      "What is the standard weight designation for heavy-duty roofing felt?",
    options: [
      "10-lb felt",
      "50-lb felt",
      "5-lb felt",
      "30-lb felt",
    ],
    correctAnswer: 3,
    explanation:
      "重型屋顶毡纸的标准重量等级为30磅毡纸。它比15磅毡纸更厚更耐用，常用于对防水要求更高的应用场合，如低坡度屋顶。",
    category: "roofing",
  },
  {
    id: 1141,
    question:
      "What is the minimum roof slope typically recommended for composition shingles?",
    options: [
      "4:12",
      "1:12",
      "2:12",
      "6:12",
    ],
    correctAnswer: 0,
    explanation:
      "沥青瓦片通常推荐的最小屋顶坡度为4:12。虽然在2:12至4:12之间可以安装（需要额外防水措施），但4:12及以上的坡度能确保最佳排水性能。",
    category: "roofing",
  },
  {
    id: 1142,
    question:
      "Wind uplift ratings for roofing materials are tested according to which standard?",
    options: [
      "ASHRAE 62.2",
      "ASTM D3161 or UL 2390",
      "ICC 500",
      "NFPA 72",
    ],
    correctAnswer: 1,
    explanation:
      "屋顶材料的抗风掀等级按ASTM D3161或UL 2390标准测试。这些测试评估屋顶材料在高风速条件下抵抗掀起和撕裂的能力。",
    category: "roofing",
  },
  {
    id: 1143,
    question:
      "What does a Class 4 impact resistance rating for shingles indicate?",
    options: [
      "The lowest level of hail resistance",
      "Resistance to foot traffic only",
      "The highest level of hail resistance per UL 2218",
      "Fire resistance classification",
    ],
    correctAnswer: 2,
    explanation:
      "Class 4冲击等级表示按UL 2218标准测试的最高抗冰雹能力。测试使用2英寸直径的钢球模拟大冰雹，Class 4瓦片能承受而不开裂。",
    category: "roofing",
  },
  {
    id: 1144,
    question:
      "A typical manufacturer's warranty for architectural shingles covers what duration?",
    options: [
      "5 to 10 years",
      "10 to 15 years",
      "75 to 100 years",
      "30 to 50 years",
    ],
    correctAnswer: 3,
    explanation:
      "建筑型沥青瓦的典型制造商保修期为30至50年。但需注意，许多保修为比例递减制，前几年提供全额覆盖，之后保障金额逐年减少。",
    category: "roofing",
  },
  {
    id: 1145,
    question:
      "Granule loss on asphalt shingles is most reliably detected by inspecting what?",
    options: [
      "Gutters and downspout discharge areas for accumulated granules",
      "The attic for fallen granules",
      "The basement for water stains",
      "The HVAC filter for debris",
    ],
    correctAnswer: 0,
    explanation:
      "沥青瓦表面颗粒脱落最可靠的检测方法是检查排水沟和落水管排放区是否有积累的颗粒。大量颗粒脱落表明瓦片老化，需要更换。",
    category: "roofing",
  },
  {
    id: 1146,
    question:
      "What conditions promote moss growth on roofing materials?",
    options: [
      "Direct sunlight and dry conditions",
      "Shade, moisture, and organic debris accumulation",
      "High winds and cold temperatures",
      "Sandy soil near the foundation",
    ],
    correctAnswer: 1,
    explanation:
      "苔藓生长的有利条件包括阴凉、潮湿和有机碎屑积累。朝北的屋面和被树木遮挡的区域最容易长苔藓，苔藓会保留水分并损坏瓦片。",
    category: "roofing",
  },
  {
    id: 1147,
    question:
      "Ponding water on a flat roof is generally defined as water remaining on the surface after how many hours following rainfall?",
    options: [
      "4 hours",
      "12 hours",
      "48 hours",
      "1 week",
    ],
    correctAnswer: 2,
    explanation:
      "平屋顶积水通常定义为降雨后48小时仍残留在屋面上的水。持续积水会加速屋面材料退化，增加荷载，并可能导致结构损坏。",
    category: "roofing",
  },
  {
    id: 1148,
    question:
      "What is the recommended minimum slope for a 'flat' roof to ensure proper drainage?",
    options: [
      "1 inch per foot (8%)",
      "1/16 inch per foot (0.5%)",
      "1/2 inch per foot (4%)",
      "1/4 inch per foot (2%)",
    ],
    correctAnswer: 3,
    explanation:
      "平屋顶推荐的最小坡度为每英尺1/4英寸（2%）。这个微小的坡度足以将水引导至排水口，防止长时间积水。",
    category: "roofing",
  },
  {
    id: 1149,
    question:
      "During a roof inspection, cupping or curling of asphalt shingles most likely indicates what?",
    options: [
      "Aging, poor ventilation, or defective shingles",
      "Recent hail damage",
      "Improper nail type used during installation",
      "Excessive attic insulation",
    ],
    correctAnswer: 0,
    explanation:
      "沥青瓦的卷曲或杯状变形通常表明老化、通风不良或瓦片缺陷。不良的阁楼通风会导致过热，加速瓦片底部沥青的收缩，引起变形。",
    category: "roofing",
  },
  {
    id: 1150,
    question:
      "What is the correct nailing pattern for standard 3-tab shingles?",
    options: [
      "Two nails per shingle at the top edge",
      "Four nails per shingle, placed along the nail line above the tab slots",
      "Six nails per shingle evenly spaced",
      "Staples are preferred over nails",
    ],
    correctAnswer: 1,
    explanation:
      "标准三片式沥青瓦的正确钉法是每片4颗钉，沿着钉线位于切口上方。在高风区域可能需要6颗钉。钉子位置不当会导致瓦片脱落。",
    category: "roofing",
  },
  {
    id: 1151,
    question:
      "What is a drip edge and where is it installed on a roof?",
    options: [
      "A rubber seal placed around skylights",
      "A plastic gutter guard at the roof edge",
      "A metal strip installed along the eaves and rakes to direct water away from the fascia",
      "A decorative trim piece on the ridge",
    ],
    correctAnswer: 2,
    explanation:
      "滴水边（drip edge）是安装在屋檐和耙边的金属条，将水引导远离筋板和下层结构。它防止水沿着屋面边缘回流，保护筋板和椽子尾部。",
    category: "roofing",
  },
  {
    id: 1152,
    question:
      "Roof sheathing is most commonly made of what material in modern residential construction?",
    options: [
      "Solid lumber planks",
      "Metal sheets",
      "Concrete panels",
      "Oriented Strand Board (OSB) or plywood",
    ],
    correctAnswer: 3,
    explanation:
      "现代住宅建筑中，屋面板最常用定向刨花板（OSB）或胶合板。两者都提供足够的结构支撑和钉持力，OSB因成本较低而更普遍。",
    category: "roofing",
  },
  {
    id: 1153,
    question:
      "What is the minimum recommended thickness for roof sheathing plywood?",
    options: [
      "7/16 inch for 24-inch on-center rafter spacing",
      "1/4 inch for any rafter spacing",
      "3/4 inch for 16-inch on-center spacing",
      "1 inch for all applications",
    ],
    correctAnswer: 0,
    explanation:
      "当椽子间距为24英寸中心距时，推荐的最小屋面板厚度为7/16英寸。更紧密的椽子间距（如16英寸）可以使用更薄的板材，但7/16英寸是最常见的标准。",
    category: "roofing",
  },
  {
    id: 1154,
    question:
      "When inspecting a tile roof, what is a common sign of underlayment failure?",
    options: [
      "Tiles changing color",
      "Water stains in the attic despite intact tiles",
      "Increased wind noise",
      "Tiles becoming lighter in weight",
    ],
    correctAnswer: 1,
    explanation:
      "即使瓦片完好，阁楼中出现水渍是底衬失效的常见迹象。瓦片屋顶不是完全防水的——底衬是真正的防水层，它的老化退化会导致渗漏。",
    category: "roofing",
  },
  {
    id: 1155,
    question:
      "How often should the underlayment on a concrete or clay tile roof typically be replaced?",
    options: [
      "Never, it lasts as long as the tiles",
      "Every 5 years",
      "Every 20 to 30 years, even if tiles are in good condition",
      "Only when tiles are replaced",
    ],
    correctAnswer: 2,
    explanation:
      "混凝土或粘土瓦屋顶的底衬通常每20至30年需要更换，即使瓦片状况良好。底衬的使用寿命远短于瓦片本身，需要定期维护。",
    category: "roofing",
  },
  {
    id: 1156,
    question:
      "What is the purpose of a roof diverter?",
    options: [
      "To increase the speed of water runoff",
      "To collect rainwater for reuse",
      "To block debris from entering the gutter",
      "To redirect water flow away from a specific area such as a doorway",
    ],
    correctAnswer: 3,
    explanation:
      "屋顶分水器用于将水流从特定区域（如门口）引开。当屋顶谷或坡度将水集中到不需要的位置时，分水器可以改变水流方向。",
    category: "roofing",
  },
  {
    id: 1157,
    question:
      "What structural component directly supports the roof sheathing?",
    options: [
      "Rafters or trusses",
      "Foundation walls",
      "Floor joists",
      "Wall studs",
    ],
    correctAnswer: 0,
    explanation:
      "椽子或桁架直接支撑屋面板。椽子是传统屋顶框架的斜向构件，而桁架是预制的三角形框架结构，两者都将屋顶荷载传递到承重墙。",
    category: "roofing",
  },
  {
    id: 1158,
    question:
      "Algae growth on asphalt shingles appears as what?",
    options: [
      "White powdery spots",
      "Dark streaks or discoloration, often black or dark green",
      "Bright orange patches",
      "Raised bumps on the shingle surface",
    ],
    correctAnswer: 1,
    explanation:
      "沥青瓦上的藻类生长表现为深色条纹或变色，通常为黑色或深绿色。这种蓝绿藻（Gloeocapsa magma）在潮湿地区常见，虽主要是美观问题，但可能加速瓦片退化。",
    category: "roofing",
  },
  {
    id: 1159,
    question:
      "What type of metal flashing is NOT recommended for use with cedar roofing?",
    options: [
      "Copper",
      "Stainless steel",
      "Galvanized steel",
      "Lead-coated copper",
    ],
    correctAnswer: 2,
    explanation:
      "镀锌钢不建议与雪松屋顶一起使用，因为雪松中的天然酸性物质会腐蚀锌涂层。铜、不锈钢和铅涂铜是与雪松兼容的更好选择。",
    category: "roofing",
  },
  {
    id: 1160,
    question:
      "What is the typical lifespan of a properly installed TPO roof membrane?",
    options: [
      "5 to 10 years",
      "50 to 75 years",
      "10 to 15 years",
      "20 to 30 years",
    ],
    correctAnswer: 3,
    explanation:
      "正确安装的TPO屋顶膜的典型使用寿命为20至30年。实际寿命取决于膜的厚度、安装质量、气候条件和维护程度。",
    category: "roofing",
  },
  {
    id: 1161,
    question:
      "What is 'thermal shock' in relation to flat roofing membranes?",
    options: [
      "Rapid temperature changes causing expansion and contraction stress",
      "Damage from lightning strikes",
      "Overheating from reflected sunlight",
      "Freezing of standing water on the membrane",
    ],
    correctAnswer: 0,
    explanation:
      "平屋顶膜的'热冲击'是指快速温度变化导致的膨胀和收缩应力。例如，炎热白天后的突然降雨会导致膜面急剧收缩，可能导致接缝开裂。",
    category: "roofing",
  },
  {
    id: 1162,
    question:
      "What is the purpose of a roof warranty 'no dollar limit' (NDL) provision?",
    options: [
      "It limits the warranty to labor costs only",
      "It guarantees full repair or replacement cost without depreciation",
      "It excludes material costs from coverage",
      "It means the warranty has no expiration date",
    ],
    correctAnswer: 1,
    explanation:
      "'无金额限制'（NDL）条款保证全额维修或更换成本，不计折旧。这是最全面的保修类型，通常成本更高但提供最佳保护。",
    category: "roofing",
  },
  {
    id: 1163,
    question:
      "When inspecting flashing around a roof-mounted HVAC unit, what should an inspector look for?",
    options: [
      "The brand and model of the HVAC unit",
      "The electrical wiring inside the unit",
      "Proper curb height, sealed seams, and intact membrane termination",
      "The refrigerant charge level",
    ],
    correctAnswer: 2,
    explanation:
      "检查屋顶安装HVAC设备周围的闪烁时，应关注适当的路缘高度、密封的接缝和完整的膜终端处理。路缘应至少高出屋面8英寸以防止水渗入。",
    category: "roofing",
  },
  {
    id: 1164,
    question:
      "A mansard roof has what distinctive feature?",
    options: [
      "A single flat surface",
      "A single steeply pitched slope",
      "A dome-shaped top",
      "Two slopes on each side, with the lower slope being steeper",
    ],
    correctAnswer: 3,
    explanation:
      "孟萨屋顶（mansard roof）的特征是每侧有两个坡度，下部坡度较陡。这种设计允许在阁楼空间内获得更多可用空间。",
    category: "roofing",
  },
  {
    id: 1165,
    question:
      "A gambrel roof is most commonly associated with what type of building?",
    options: [
      "Barns and Dutch Colonial-style homes",
      "Modern commercial buildings",
      "Mediterranean-style homes",
      "High-rise apartments",
    ],
    correctAnswer: 0,
    explanation:
      "复折屋顶（gambrel roof）最常见于谷仓和荷兰殖民风格住宅。类似于孟萨屋顶，但只在两侧有双坡度，而不是四侧都有。",
    category: "roofing",
  },
  {
    id: 1166,
    question:
      "What is the main concern when multiple layers of shingles are present on a roof?",
    options: [
      "Improved insulation value",
      "Excessive weight and inability to properly inspect the lower layers",
      "Better wind resistance",
      "Increased property value",
    ],
    correctAnswer: 1,
    explanation:
      "屋顶上多层瓦片的主要问题是过重的重量和无法正确检查下层。大多数规范允许最多两层沥青瓦，超过此限制会对结构造成压力。",
    category: "roofing",
  },
  {
    id: 1167,
    question:
      "What is a 'square' in roofing terminology?",
    options: [
      "One single shingle",
      "A bundle of shingles",
      "100 square feet of roof area",
      "10 square feet of roof area",
    ],
    correctAnswer: 2,
    explanation:
      "在屋顶术语中，'一方'（square）等于100平方英尺的屋顶面积。这是计算屋顶材料用量和估算成本的标准单位。",
    category: "roofing",
  },
  {
    id: 1168,
    question:
      "Exposed roofing nails should be sealed with what material?",
    options: [
      "Latex paint",
      "Wood glue",
      "Nothing; exposed nails are acceptable",
      "Roofing cement or sealant",
    ],
    correctAnswer: 3,
    explanation:
      "暴露的屋顶钉应使用屋顶水泥或密封剂密封。未密封的钉头是常见的渗漏点，随着时间推移可能因温度变化和振动而松动。",
    category: "roofing",
  },
  {
    id: 1169,
    question:
      "What is the purpose of starter strip shingles?",
    options: [
      "To provide a sealed base along the eaves to prevent wind-driven rain infiltration",
      "To add an extra layer of protection at the ridge",
      "To fill gaps around roof penetrations",
      "To line the gutters",
    ],
    correctAnswer: 0,
    explanation:
      "起始条瓦片在屋檐边缘提供密封基础，防止风驱雨水从第一排瓦片底部渗入。它们有预涂的沥青密封条，与第一层瓦片粘合。",
    category: "roofing",
  },
  {
    id: 1170,
    question:
      "Hip cap shingles are specifically designed for installation on what part of the roof?",
    options: [
      "Valleys only",
      "Hip ridges and main ridge lines",
      "Flat sections only",
      "Around chimneys",
    ],
    correctAnswer: 1,
    explanation:
      "髋脊盖瓦专门设计用于安装在髋脊和主脊线上。它们是预成型的弧形瓦片，覆盖屋脊处两侧瓦片的交汇处，提供美观的密封。",
    category: "roofing",
  },
  {
    id: 1171,
    question:
      "What is the primary risk of improperly installed kick-out flashing?",
    options: [
      "Roof shingles blowing off in wind",
      "Ice dam formation",
      "Water intrusion into the wall system at the roof-to-wall transition",
      "Inadequate attic ventilation",
    ],
    correctAnswer: 2,
    explanation:
      "踢脚闪烁（kick-out flashing）安装不当的主要风险是水在屋顶-墙面过渡处渗入墙体系统。它的作用是将沿屋顶边缘流下的水引导远离墙面，进入排水沟。",
    category: "roofing",
  },
  {
    id: 1172,
    question:
      "A 'dead valley' on a roof is concerning because it:",
    options: [
      "Allows too much ventilation",
      "Creates excessive wind uplift",
      "Increases the fire risk of the roof",
      "Traps water and debris where two roof slopes meet a vertical wall",
    ],
    correctAnswer: 3,
    explanation:
      "'死谷'（dead valley）是两个屋顶坡面在垂直墙面处交汇的区域，水和碎屑容易被困。这是高渗漏风险区域，需要特别注意闪烁和密封处理。",
    category: "roofing",
  },
  {
    id: 1173,
    question:
      "What minimum height above the roof surface should a plumbing vent pipe extend?",
    options: [
      "6 inches minimum above the roof surface",
      "1 inch above the roof surface",
      "24 inches above the roof surface",
      "Flush with the roof surface",
    ],
    correctAnswer: 0,
    explanation:
      "管道通风管应至少延伸到屋面以上6英寸。在有积雪的地区，可能需要更高。足够的高度确保通风口不会被碎屑或积雪堵塞。",
    category: "roofing",
  },
  {
    id: 1174,
    question:
      "What is the function of a ridge board in a conventional rafter roof?",
    options: [
      "It acts as the primary structural beam supporting the roof load",
      "It provides a surface for opposing rafters to bear against at the peak",
      "It prevents ice from forming on the ridge",
      "It serves as the main ventilation channel",
    ],
    correctAnswer: 1,
    explanation:
      "脊板在传统椽子屋顶中为相对的椽子在顶部提供一个支撑面。它主要是定位和连接构件，不像脊梁（ridge beam）那样承受重要的结构荷载。",
    category: "roofing",
  },
  {
    id: 1175,
    question:
      "Blistering on asphalt shingles is caused by what?",
    options: [
      "Impact from hailstones",
      "Chemical reaction with gutter materials",
      "Trapped moisture or air within the shingle expanding from heat",
      "Excessive foot traffic on the roof",
    ],
    correctAnswer: 2,
    explanation:
      "沥青瓦起泡是由瓦片内部困住的水分或空气在受热时膨胀引起的。这可能是制造缺陷或安装时瓦片受潮导致的，严重的起泡会使瓦片过早失效。",
    category: "roofing",
  },
  {
    id: 1176,
    question:
      "What is a common indicator of roof truss uplift?",
    options: [
      "Sagging of the roof ridge from outside",
      "Water stains on the exterior siding",
      "Buckling of the floor in the rooms below",
      "Cracks where interior walls meet the ceiling along the top floor",
    ],
    correctAnswer: 3,
    explanation:
      "屋顶桁架上拱的常见迹象是顶层内墙与天花板交汇处出现裂缝。当阁楼中桁架下弦的温湿度条件与天花板线处不同时，桁架可能上拱。",
    category: "roofing",
  },
  {
    id: 1177,
    question:
      "What does 'fishmouthing' refer to in roofing?",
    options: [
      "Shingles that are lifted or buckled at the overlap seam",
      "A gutter clogged with fish-shaped debris",
      "A type of valley installation",
      "The shape of ridge cap shingles",
    ],
    correctAnswer: 0,
    explanation:
      "'鱼嘴'现象是指瓦片在重叠接缝处翘起或隆起。这通常由底衬褶皱、安装不当或瓦片底面沥青未正确粘合引起。",
    category: "roofing",
  },
  {
    id: 1178,
    question:
      "When should a home inspector recommend a qualified roofing contractor for further evaluation?",
    options: [
      "Only when the roof is actively leaking during inspection",
      "When the roof shows signs of significant wear, damage, or nearing end of expected life",
      "Only when the roof is more than 50 years old",
      "Only if the homeowner requests it",
    ],
    correctAnswer: 1,
    explanation:
      "当屋顶显示出严重磨损、损坏或接近预期使用寿命时，检查员应建议专业屋顶承包商进一步评估。不必等到积极漏水才建议专业评估。",
    category: "roofing",
  },
  {
    id: 1179,
    question:
      "What is the main advantage of a hip roof design over a gable roof in high-wind areas?",
    options: [
      "Hip roofs are less expensive to build",
      "Hip roofs allow more attic space",
      "Hip roofs have better aerodynamic shape and resist wind uplift more effectively",
      "Hip roofs require less maintenance",
    ],
    correctAnswer: 2,
    explanation:
      "髋屋顶比山墙屋顶在高风区域具有更好的气动外形，能更有效地抵抗风掀。四面斜坡的设计使风更容易流过屋面而不是在山墙端面产生压力。",
    category: "roofing",
  },
  {
    id: 1180,
    question:
      "What is the purpose of a gable end vent?",
    options: [
      "To provide access for electrical wiring",
      "To allow sunlight into the attic",
      "To support the gable wall structurally",
      "To allow cross-ventilation of the attic space",
    ],
    correctAnswer: 3,
    explanation:
      "山墙端通风口的作用是允许阁楼空间进行交叉通风。安装在相对山墙端的通风口可以让空气横穿阁楼，帮助散热和排湿。",
    category: "roofing",
  },
  {
    id: 1181,
    question:
      "What is the typical lifespan of a wood shake roof in California?",
    options: [
      "20 to 30 years with proper maintenance",
      "50 to 75 years",
      "5 to 10 years",
      "100+ years",
    ],
    correctAnswer: 0,
    explanation:
      "在加州，木摇瓦屋顶在适当维护下的典型寿命为20至30年。加州干燥气候下的紫外线暴露和火灾风险是影响寿命的主要因素。",
    category: "roofing",
  },
  {
    id: 1182,
    question:
      "What is a 'cool roof' in the context of California energy codes?",
    options: [
      "A roof with built-in air conditioning components",
      "A roof with high solar reflectance and high thermal emittance",
      "A roof painted in light blue color",
      "A roof with extra insulation but no ventilation",
    ],
    correctAnswer: 1,
    explanation:
      "在加州能源规范中，'冷屋顶'是指具有高太阳反射率和高热辐射率的屋顶。这些属性使屋顶反射更多太阳能并快速散热，降低冷却需求。",
    category: "roofing",
  },
  {
    id: 1183,
    question:
      "What minimum aged solar reflectance value does California Title 24 require for steep-slope cool roofs in Climate Zones 10-15?",
    options: [
      "0.50 minimum aged solar reflectance",
      "0.80 minimum aged solar reflectance",
      "0.20 minimum aged solar reflectance",
      "No solar reflectance requirement exists",
    ],
    correctAnswer: 2,
    explanation:
      "加州Title 24要求气候区10-15的陡坡冷屋顶至少达到0.20的老化太阳反射率。这些是加州较热的地区，冷屋顶要求有助于降低能耗。",
    category: "roofing",
  },
  {
    id: 1184,
    question:
      "What roofing material provides the best natural resistance to fire without any additional treatment?",
    options: [
      "Wood shake",
      "Asphalt shingles",
      "Rolled roofing",
      "Clay or concrete tile",
    ],
    correctAnswer: 3,
    explanation:
      "粘土或混凝土瓦片提供最佳的天然防火能力，无需任何额外处理。它们本身不可燃，自然达到Class A防火等级。",
    category: "roofing",
  },
  {
    id: 1185,
    question:
      "In WUI zones, what minimum clearance of combustible material is typically required around structures?",
    options: [
      "100 feet of defensible space",
      "10 feet of defensible space",
      "500 feet of defensible space",
      "No clearance is required",
    ],
    correctAnswer: 0,
    explanation:
      "在WUI区域，通常要求结构周围100英尺的防御空间。这包括前30英尺的无可燃植被区域和30-100英尺的减少燃料负荷区域。",
    category: "roofing",
  },
  {
    id: 1186,
    question:
      "What is the most common method for attaching solar panels to a composition shingle roof?",
    options: [
      "Adhesive pads directly on the shingles",
      "Lag bolts through the sheathing into rafters with flashing boots",
      "Suction cups on the shingle surface",
      "Magnetic clamps on the ridge",
    ],
    correctAnswer: 1,
    explanation:
      "在沥青瓦屋顶上安装太阳能板最常见的方法是使用滞后螺栓穿过屋面板打入椽子，并配合闪烁套管。每个穿透点必须正确密封以防水渗入。",
    category: "roofing",
  },
  {
    id: 1187,
    question:
      "What concern should an inspector note about roof-mounted solar panels regarding roof maintenance?",
    options: [
      "Solar panels eliminate the need for any roof maintenance",
      "Solar panels protect the roof from all weather damage",
      "Panels may need to be removed to perform roof repairs or replacement",
      "Panels increase the roof's fire rating automatically",
    ],
    correctAnswer: 2,
    explanation:
      "检查员应注意，屋顶维修或更换时可能需要拆除太阳能板。这会增加屋顶工程的成本和复杂性，应在检查报告中提及。",
    category: "roofing",
  },
  {
    id: 1188,
    question:
      "What is the purpose of snow guards on a metal roof?",
    options: [
      "To melt snow on contact",
      "To prevent snow from accumulating on the roof",
      "To increase the roof's insulation value in winter",
      "To prevent large sheets of snow and ice from sliding off the roof suddenly",
    ],
    correctAnswer: 3,
    explanation:
      "金属屋顶上的防雪装置用于防止大片积雪和冰块突然滑落。金属屋顶表面光滑，积雪可能突然大量滑落，对下方的人和物造成危险。",
    category: "roofing",
  },
  {
    id: 1189,
    question:
      "What is the main purpose of a roof's soffit?",
    options: [
      "To enclose the underside of the roof overhang and provide ventilation openings",
      "To support the weight of the gutters",
      "To prevent birds from nesting on the roof",
      "To add decorative elements to the roofline",
    ],
    correctAnswer: 0,
    explanation:
      "屋檐底板（soffit）的主要目的是封闭屋顶悬挑的下侧并提供通风开口。通风soffit允许新鲜空气进入阁楼，与脊通风口配合形成完整的通风系统。",
    category: "roofing",
  },
  {
    id: 1190,
    question:
      "Fascia board damage is most commonly caused by what?",
    options: [
      "Excessive sunlight exposure",
      "Water damage from failed gutters or ice damming",
      "Termite infestation only",
      "Wind erosion",
    ],
    correctAnswer: 1,
    explanation:
      "筋板损坏最常见的原因是排水沟故障或冰坝导致的水损害。当排水沟堵塞或溢出时，水会回流到筋板上，导致木材腐烂。",
    category: "roofing",
  },
  {
    id: 1191,
    question:
      "What type of roof has the most complex valley and flashing configurations?",
    options: [
      "Simple gable roof",
      "Flat roof",
      "Cross-gable or multi-hip roof with multiple intersecting planes",
      "Shed roof",
    ],
    correctAnswer: 2,
    explanation:
      "交叉山墙或多髋屋顶具有最复杂的谷和闪烁配置，因为多个屋面平面相交。每个交叉点都需要适当的谷闪烁和水密处理。",
    category: "roofing",
  },
  {
    id: 1192,
    question:
      "What is the typical exposure (visible portion) for standard 3-tab shingles?",
    options: [
      "12 inches",
      "2 inches",
      "8 inches",
      "5 inches",
    ],
    correctAnswer: 3,
    explanation:
      "标准三片式沥青瓦的典型暴露尺寸（可见部分）为5英寸。瓦片总长度为36英寸，宽度为12英寸，但重叠安装后只有5英寸是可见的。",
    category: "roofing",
  },
  {
    id: 1193,
    question:
      "What is a 'headlap' in shingle roofing?",
    options: [
      "The portion of the shingle covered by two courses above it",
      "The nailing strip at the top of each shingle",
      "The decorative tab at the bottom of the shingle",
      "The gap between adjacent shingles",
    ],
    correctAnswer: 0,
    explanation:
      "在瓦片屋顶中，'headlap'是被上方两层瓦片覆盖的部分。对于标准三片式沥青瓦，headlap通常为2英寸。足够的headlap确保水不会渗透到下层。",
    category: "roofing",
  },
  {
    id: 1194,
    question:
      "When inspecting a flat roof, what tool is most useful for identifying low spots?",
    options: [
      "A thermal imaging camera",
      "A level or observation after rainfall for ponding areas",
      "A moisture meter pressed against the surface",
      "A stud finder",
    ],
    correctAnswer: 1,
    explanation:
      "检查平屋顶时，水平仪或降雨后观察积水区域最有用。通过观察水的自然积聚位置，可以准确识别低洼区域和排水问题。",
    category: "roofing",
  },
  {
    id: 1195,
    question:
      "What is the primary purpose of a roof ventilation baffle (rafter vent)?",
    options: [
      "To block wind from entering the attic",
      "To support the weight of attic insulation",
      "To maintain an air channel between insulation and roof sheathing at the eaves",
      "To prevent condensation on windows",
    ],
    correctAnswer: 2,
    explanation:
      "通风挡板（rafter vent）的主要作用是在屋檐处保持隔热材料和屋面板之间的空气通道。它防止隔热材料堵塞檐口通风口，确保空气自由流动。",
    category: "roofing",
  },
  {
    id: 1196,
    question:
      "Improper attic ventilation can lead to which of the following problems?",
    options: [
      "Improved energy efficiency",
      "Stronger roof structure",
      "Better air quality in the home",
      "Premature shingle aging, condensation, and mold growth",
    ],
    correctAnswer: 3,
    explanation:
      "阁楼通风不当会导致瓦片过早老化、冷凝和霉菌生长。夏季过热会从下方'烘烤'瓦片，冬季湿气积聚会导致木构件腐烂和霉菌问题。",
    category: "roofing",
  },
  {
    id: 1197,
    question:
      "What is the maximum recommended attic temperature difference compared to outside temperature in summer?",
    options: [
      "10-20°F above outside temperature with proper ventilation",
      "50°F above outside temperature",
      "Same as outside temperature exactly",
      "30°F below outside temperature",
    ],
    correctAnswer: 0,
    explanation:
      "在适当通风的情况下，夏季阁楼温度应比室外温度高10-20°F。如果差距更大，表明通风不足，可能导致能耗增加和屋顶材料过早退化。",
    category: "roofing",
  },
  {
    id: 1198,
    question:
      "What does 'telegraphing' mean in roofing?",
    options: [
      "Sending a signal when the roof is damaged",
      "The underlying surface irregularities showing through the roofing material",
      "A method of remote roof inspection",
      "A pattern of nail placement",
    ],
    correctAnswer: 1,
    explanation:
      "'Telegraphing'是指底层表面的不规则形状透过屋面材料显现出来。当新瓦片直接覆盖在旧瓦片上时，底层的翘曲或凹凸会在表面上可见。",
    category: "roofing",
  },
  {
    id: 1199,
    question:
      "What is the purpose of a Z-bar flashing?",
    options: [
      "To seal around circular roof penetrations",
      "To secure ridge cap shingles",
      "To create a transition between horizontal surfaces and vertical walls",
      "To connect two sections of gutter",
    ],
    correctAnswer: 2,
    explanation:
      "Z形闪烁的目的是在水平面和垂直墙面之间创建过渡。其Z形截面允许水被引导远离墙面连接处，常用于壁板和屋面的交汇处。",
    category: "roofing",
  },
  {
    id: 1200,
    question:
      "What is the most important factor when selecting roofing nails?",
    options: [
      "The color of the nail head",
      "Using the thinnest nails available",
      "Using the shortest nails possible",
      "Proper length to penetrate through the sheathing by at least 3/4 inch",
    ],
    correctAnswer: 3,
    explanation:
      "选择屋顶钉时最重要的因素是适当的长度，使钉子穿过屋面板至少3/4英寸。不够长的钉子无法提供足够的固持力，可能导致瓦片被风吹脱。",
    category: "roofing",
  },
  {
    id: 1201,
    question:
      "An EPDM roof membrane is most commonly available in what colors?",
    options: [
      "Black and white",
      "Red and green",
      "Blue and yellow",
      "Clear/transparent only",
    ],
    correctAnswer: 0,
    explanation:
      "EPDM屋顶膜最常见的颜色是黑色和白色。黑色EPDM更传统和常见，而白色EPDM具有更好的太阳能反射性能，适合凉爽屋顶应用。",
    category: "roofing",
  },
  {
    id: 1202,
    question:
      "What is the minimum recommended overlap for modified bitumen roof seams?",
    options: [
      "1/2 inch",
      "3 to 4 inches",
      "8 to 10 inches",
      "No overlap is required",
    ],
    correctAnswer: 1,
    explanation:
      "改性沥青屋顶接缝的最小推荐重叠为3至4英寸。足够的重叠确保接缝处形成可靠的防水连接，是防止渗漏的关键。",
    category: "roofing",
  },
  {
    id: 1203,
    question:
      "What is the primary disadvantage of a flat roof compared to a sloped roof?",
    options: [
      "Higher construction cost",
      "Cannot support rooftop equipment",
      "Greater susceptibility to ponding water and leaks",
      "Worse fire resistance",
    ],
    correctAnswer: 2,
    explanation:
      "平屋顶与斜屋顶相比的主要缺点是更容易出现积水和渗漏问题。由于坡度很小，排水速度慢，任何微小的低洼区域都可能导致长期积水。",
    category: "roofing",
  },
  {
    id: 1204,
    question:
      "How should a home inspector access a steep roof safely?",
    options: [
      "Always walk every roof regardless of conditions",
      "Only inspect from inside the attic",
      "Never inspect the roof at all",
      "Use binoculars, a drone, or a ladder at the eaves if walking the roof is unsafe",
    ],
    correctAnswer: 3,
    explanation:
      "当行走在陡屋顶上不安全时，检查员应使用望远镜、无人机或在屋檐处使用梯子进行检查。安全始终是首要考虑，检查员不应冒人身危险。",
    category: "roofing",
  },
  {
    id: 1205,
    question:
      "What is a 'torch-down' roof?",
    options: [
      "A modified bitumen roof applied using a propane torch to melt the adhesive backing",
      "A roof made of fireproof ceramic tiles",
      "A roof that has been damaged by fire",
      "A temporary roof covering",
    ],
    correctAnswer: 0,
    explanation:
      "'火焰烤卷'屋顶是使用丙烷火焰加热改性沥青卷材底部的粘合层进行安装的。火焰使沥青融化并粘合到基层上，形成防水密封。",
    category: "roofing",
  },
  {
    id: 1206,
    question:
      "What type of damage pattern on a roof is characteristic of wind damage?",
    options: [
      "Uniform granule loss across all surfaces",
      "Missing or lifted shingles concentrated on the windward side and ridges",
      "Circular dents in all shingles",
      "Moss growth only on the south side",
    ],
    correctAnswer: 1,
    explanation:
      "风损害的特征是迎风面和脊线上的瓦片缺失或掀起。风在屋脊和边缘处产生最大的掀起力，使这些区域最容易受到损坏。",
    category: "roofing",
  },
  {
    id: 1207,
    question:
      "Hail damage to asphalt shingles typically appears as what?",
    options: [
      "Straight-line cracks across the shingle",
      "Uniform discoloration of the entire roof",
      "Random circular dents with exposed or bruised mat and granule displacement",
      "Lifted shingle tabs on one side of the roof",
    ],
    correctAnswer: 2,
    explanation:
      "冰雹对沥青瓦的损害通常表现为随机的圆形凹痕，伴有基质暴露或瘀伤以及颗粒位移。凹痕大小与冰雹尺寸一致，是保险理赔中的关键识别特征。",
    category: "roofing",
  },
  {
    id: 1208,
    question:
      "What is a reglet in roofing flashing terminology?",
    options: [
      "A type of decorative ridge tile",
      "A tool used to cut metal flashing",
      "A sealant brand name",
      "A groove cut into masonry to receive the edge of counter flashing",
    ],
    correctAnswer: 3,
    explanation:
      "在屋顶闪烁术语中，reglet是切入砌体中的凹槽，用于接收反闪烁的边缘。闪烁插入凹槽后用密封剂固定，提供整洁且防水的过渡。",
    category: "roofing",
  },
  {
    id: 1209,
    question:
      "What is the recommended minimum slope for a metal roof with exposed fasteners?",
    options: [
      "3:12",
      "1/4:12",
      "1:12",
      "6:12",
    ],
    correctAnswer: 0,
    explanation:
      "暴露紧固件的金属屋顶推荐最小坡度为3:12。较低的坡度会使水流速度减慢，增加在紧固件穿透点处渗漏的风险。",
    category: "roofing",
  },
  {
    id: 1210,
    question:
      "What is the minimum slope for a standing seam metal roof?",
    options: [
      "4:12",
      "1/2:12 (0.5:12)",
      "6:12",
      "12:12",
    ],
    correctAnswer: 1,
    explanation:
      "立缝金属屋顶的最小坡度为1/2:12。由于接缝在屋面以上互锁且没有暴露的穿透点，立缝金属屋顶可以在非常低的坡度下有效运行。",
    category: "roofing",
  },
  {
    id: 1211,
    question:
      "What metal roofing issue is caused by dissimilar metals in contact?",
    options: [
      "Thermal expansion",
      "UV degradation",
      "Galvanic corrosion",
      "Ice damming",
    ],
    correctAnswer: 2,
    explanation:
      "不同金属接触会导致电偶腐蚀（galvanic corrosion）。当两种不同的金属在有水分存在的情况下接触时，电化学反应会导致较活泼的金属加速腐蚀。",
    category: "roofing",
  },
  {
    id: 1212,
    question:
      "What is 'oil canning' on a metal roof?",
    options: [
      "Oil leaking from roof-mounted equipment",
      "A method of lubricating metal roof seams",
      "Rust formation on the metal surface",
      "Visible waviness or distortion in flat areas of metal panels",
    ],
    correctAnswer: 3,
    explanation:
      "'油罐效应'（oil canning）是金属屋顶平面区域出现可见的波浪状或扭曲。这是金属面板的固有特性，由热膨胀、安装应力或面板不够平整引起。",
    category: "roofing",
  },
  {
    id: 1213,
    question:
      "What special consideration applies to roofing in California coastal areas?",
    options: [
      "Salt air corrosion requires use of corrosion-resistant materials",
      "Roofs must be painted blue to match the ocean",
      "Only flat roofs are permitted",
      "Roofing permits are not required",
    ],
    correctAnswer: 0,
    explanation:
      "加州沿海地区的盐雾腐蚀要求使用耐腐蚀材料。铝、不锈钢或经过特殊涂层处理的金属优于普通镀锌钢，某些屋顶材料可能需要更频繁的维护。",
    category: "roofing",
  },
  {
    id: 1214,
    question:
      "What is a built-up roof 'flood coat'?",
    options: [
      "A waterproofing layer applied during flooding events",
      "The final heavy application of bitumen topped with gravel or aggregate",
      "The first layer of bitumen in a BUR system",
      "A protective coating applied to metal flashing",
    ],
    correctAnswer: 1,
    explanation:
      "叠层屋顶的'泛滥涂层'是最后一层厚重的沥青涂层，上面覆盖砾石或骨料。砾石保护沥青免受紫外线降解，并提供额外的耐候保护。",
    category: "roofing",
  },
  {
    id: 1215,
    question:
      "What is a common defect found at the intersection of a lower roof and a higher wall?",
    options: [
      "Excessive insulation buildup",
      "Structural cracking of the wall",
      "Missing or improperly installed kickout flashing leading to water damage",
      "Electrical grounding issues",
    ],
    correctAnswer: 2,
    explanation:
      "低层屋顶与高层墙面交汇处常见的缺陷是缺少或安装不当的踢脚闪烁。这会导致沿屋面边缘流下的水渗入墙体系统，造成严重的水损害。",
    category: "roofing",
  },
  {
    id: 1216,
    question:
      "What is the purpose of a skylight curb?",
    options: [
      "To provide a decorative frame around the skylight",
      "To block sunlight from entering the skylight",
      "To support additional roof insulation",
      "To raise the skylight above the roof surface for proper water drainage",
    ],
    correctAnswer: 3,
    explanation:
      "天窗路缘的目的是将天窗抬高到屋面以上，确保适当的排水。路缘通常高出屋面4-8英寸，闪烁安装在路缘周围以防止水渗入。",
    category: "roofing",
  },
  {
    id: 1217,
    question:
      "What is the major concern with a 'California cut' valley installation?",
    options: [
      "The cut shingle edges may not be properly sealed, creating leak potential",
      "It violates all California building codes",
      "It requires twice the amount of shingles",
      "It can only be used on metal roofs",
    ],
    correctAnswer: 0,
    explanation:
      "'加州切割'谷安装的主要问题是切割的瓦片边缘可能未正确密封，产生渗漏风险。切割边缘应用屋顶水泥密封，以防止水从切割处渗入。",
    category: "roofing",
  },
  {
    id: 1218,
    question:
      "A properly installed chimney cricket should be covered with what?",
    options: [
      "Bare wood only",
      "Metal flashing or the same roofing material as the rest of the roof",
      "Plastic sheeting",
      "Cement board",
    ],
    correctAnswer: 1,
    explanation:
      "正确安装的烟囱分水脊应覆盖金属闪烁或与其余屋面相同的材料。金属闪烁（通常为铜或镀锌钢）是最常见和最耐用的选择。",
    category: "roofing",
  },
  {
    id: 1219,
    question:
      "What is 'alligatoring' on a flat roof surface?",
    options: [
      "Green algae growth patterns",
      "Footprints left by wildlife",
      "A cracking pattern resembling alligator skin indicating severe aging",
      "A deliberate textured finish for slip resistance",
    ],
    correctAnswer: 2,
    explanation:
      "'鳄鱼皮'现象是平屋顶表面出现类似鳄鱼皮的龟裂图案，表明严重老化。这通常发生在叠层屋顶和改性沥青屋顶上，沥青氧化和紫外线暴露导致失去弹性。",
    category: "roofing",
  },
  {
    id: 1220,
    question:
      "How many plies are typically found in a standard built-up roof system?",
    options: [
      "1 ply",
      "8 to 10 plies",
      "15 to 20 plies",
      "3 to 5 plies",
    ],
    correctAnswer: 3,
    explanation:
      "标准叠层屋顶系统通常有3至5层。层数越多，防水保护越好，但成本和重量也越高。每层由沥青和增强毡纸组成。",
    category: "roofing",
  },
  {
    id: 1221,
    question:
      "What is the primary function of roof insulation in California's climate?",
    options: [
      "To reduce heat gain from the sun and lower cooling costs",
      "To prevent snow accumulation on the roof",
      "To add structural support to the roof deck",
      "To increase the roof's fire rating",
    ],
    correctAnswer: 0,
    explanation:
      "在加州气候条件下，屋顶隔热的主要功能是减少太阳热量增益并降低冷却成本。虽然在较冷地区也有保温作用，但在加州大部分地区，防热是首要目标。",
    category: "roofing",
  },
  {
    id: 1222,
    question:
      "What is 'mechanical fastening' in the context of single-ply membrane roofing?",
    options: [
      "Using only adhesive to bond the membrane",
      "Using screws and plates to attach the membrane to the roof deck",
      "Nailing shingles directly through the membrane",
      "Using magnets to hold the membrane in place",
    ],
    correctAnswer: 1,
    explanation:
      "在单层膜屋顶中，'机械固定'是指使用螺钉和压板将膜固定到屋面板上。这是三种主要安装方式之一，其他两种是全粘合和压载式。",
    category: "roofing",
  },
  {
    id: 1223,
    question:
      "What is the 'ballasted' method of flat roof installation?",
    options: [
      "Bolting the membrane to the roof structure",
      "Gluing the membrane with hot asphalt",
      "Using loose-laid membrane held down by heavy gravel or pavers",
      "Stapling the membrane to plywood sheathing",
    ],
    correctAnswer: 2,
    explanation:
      "压载式安装是将膜松铺在屋面上，然后用重砾石或铺路石压住。这种方法不需要紧固件穿透屋面，但增加了显著的重量负荷。",
    category: "roofing",
  },
  {
    id: 1224,
    question:
      "When is a roofing permit typically required in California?",
    options: [
      "Only for commercial buildings",
      "Never for residential properties",
      "Only when changing the roof color",
      "For a complete re-roof or when adding a second layer of roofing material",
    ],
    correctAnswer: 3,
    explanation:
      "在加州，完全重新铺设屋顶或添加第二层屋顶材料时通常需要许可证。许可证确保工作符合当前建筑规范，包括防火等级和能效要求。",
    category: "roofing",
  },
  {
    id: 1225,
    question:
      "What is a 'roof-over' and what concern does it raise?",
    options: [
      "Installing new roofing over existing material; concerns include added weight and hidden damage",
      "A temporary tarp placed over a damaged roof",
      "A roof that extends over an adjacent structure",
      "A type of dormer window",
    ],
    correctAnswer: 0,
    explanation:
      "'Roof-over'是在现有屋面材料上安装新材料。主要问题包括增加的重量和无法检查底层损坏。大多数规范允许最多两层沥青瓦。",
    category: "roofing",
  },
  {
    id: 1226,
    question:
      "What condition in the attic most strongly suggests an active roof leak?",
    options: [
      "Insulation that appears clean and dry",
      "Water stains, dampness, or daylight visible through the roof sheathing",
      "Uniform dust coverage on all surfaces",
      "Properly installed vapor barrier",
    ],
    correctAnswer: 1,
    explanation:
      "阁楼中的水渍、潮湿或透过屋面板可见的日光最强烈地暗示屋顶有活跃渗漏。检查员应追踪水渍的路径来定位渗漏源。",
    category: "roofing",
  },
  {
    id: 1227,
    question:
      "What is the expected service life of a copper roof?",
    options: [
      "10 to 15 years",
      "20 to 25 years",
      "60 to 100+ years",
      "30 to 40 years",
    ],
    correctAnswer: 2,
    explanation:
      "铜屋顶的预期使用寿命为60至100年以上。铜会形成天然的铜绿保护层（patina），实际上可以保护底层金属免受进一步腐蚀。",
    category: "roofing",
  },
  {
    id: 1228,
    question:
      "What does a sagging ridge line on a roof typically indicate?",
    options: [
      "Normal aging of the roof materials",
      "Too much insulation in the attic",
      "The roof was recently replaced",
      "Structural issues such as an undersized ridge board, damaged rafters, or settling",
    ],
    correctAnswer: 3,
    explanation:
      "屋脊线下沉通常表明结构问题，如脊板尺寸不足、椽子损坏或沉降。这是一个重要的红旗信号，可能需要结构工程师进一步评估。",
    category: "roofing",
  },
  {
    id: 1229,
    question:
      "Which roofing material has the highest recycled content potential?",
    options: [
      "Metal roofing (often contains 25-95% recycled content)",
      "Clay tiles",
      "Asphalt shingles",
      "Wood shakes",
    ],
    correctAnswer: 0,
    explanation:
      "金属屋顶具有最高的回收成分潜力，通常含有25-95%的回收材料。钢和铝都具有很高的可回收性，金属屋顶在使用寿命结束时也可100%回收。",
    category: "roofing",
  },
  {
    id: 1230,
    question:
      "What is the typical warranty period for a TPO or PVC single-ply membrane roof?",
    options: [
      "3 to 5 years",
      "15 to 25 years",
      "40 to 50 years",
      "60 to 80 years",
    ],
    correctAnswer: 1,
    explanation:
      "TPO或PVC单层膜屋顶的典型保修期为15至25年。保修范围和条件因制造商而异，专业安装通常可获得更长的保修期。",
    category: "roofing",
  },
  {
    id: 1231,
    question:
      "What is the purpose of a roof edge termination bar?",
    options: [
      "To hold gutters in place",
      "To prevent birds from landing on the roof edge",
      "To secure the edge of a single-ply membrane at walls and curbs",
      "To connect two sections of metal roofing",
    ],
    correctAnswer: 2,
    explanation:
      "屋面边缘终端条的目的是将单层膜的边缘固定在墙面和路缘处。它将膜紧压在基层上，然后用密封剂覆盖以防止水渗入。",
    category: "roofing",
  },
  {
    id: 1232,
    question:
      "What issue can arise from roof penetrations that are not properly sealed?",
    options: [
      "Improved attic ventilation",
      "Better energy efficiency",
      "Increased roof lifespan",
      "Water intrusion leading to mold, rot, and structural damage",
    ],
    correctAnswer: 3,
    explanation:
      "屋顶穿透点密封不当会导致水渗入，引起霉菌、腐烂和结构损坏。每个穿透点（管道、电缆、设备支架等）都是潜在的渗漏源。",
    category: "roofing",
  },
  {
    id: 1233,
    question:
      "What is the primary reason California requires specific roofing materials in fire hazard severity zones?",
    options: [
      "To reduce the risk of structure ignition from wildfire embers",
      "To improve the aesthetic appearance of neighborhoods",
      "To reduce construction costs",
      "To increase property tax revenue",
    ],
    correctAnswer: 0,
    explanation:
      "加州要求火灾危险区使用特定屋顶材料的主要原因是减少野火飞火点燃建筑的风险。飞火可以携带数英里，屋顶是建筑最脆弱的着火点。",
    category: "roofing",
  },
  {
    id: 1234,
    question:
      "What should an inspector check regarding the attic access opening in relation to roofing?",
    options: [
      "The color of the access panel",
      "Whether insulation is properly installed around the opening without blocking ventilation",
      "Whether it has a lock on it",
      "The brand of the access hatch",
    ],
    correctAnswer: 1,
    explanation:
      "检查员应检查阁楼入口周围的隔热材料是否正确安装且不阻塞通风。入口处经常缺少隔热或隔热材料被移位，导致能源损失。",
    category: "roofing",
  },
  {
    id: 1235,
    question:
      "What is the significance of a 'Class A' roof assembly fire rating?",
    options: [
      "It offers minimal fire resistance",
      "It is only applicable to commercial buildings",
      "It can withstand severe fire exposure and is the highest rating",
      "It means the roof is fireproof and cannot burn at all",
    ],
    correctAnswer: 2,
    explanation:
      "Class A屋顶组件防火等级表示能够承受严重的火灾暴露，是最高等级。注意它表示'抗火'而非'防火'——在极端条件下仍可能受损。",
    category: "roofing",
  },
  {
    id: 1236,
    question:
      "What causes efflorescence on concrete roof tiles?",
    options: [
      "Mold growth on the surface",
      "Paint peeling off the tiles",
      "Chemical reaction with air pollution",
      "Water-soluble salts migrating to the surface as moisture evaporates",
    ],
    correctAnswer: 3,
    explanation:
      "混凝土瓦片上的白华（efflorescence）是由水溶性盐分随水分蒸发迁移到表面引起的。这通常是美观问题，不影响瓦片的结构性能，会随时间自然减轻。",
    category: "roofing",
  },
  {
    id: 1237,
    question:
      "What is the recommended overlap for synthetic roof underlayment at horizontal seams?",
    options: [
      "4 to 6 inches",
      "1 inch",
      "12 inches",
      "No overlap is needed",
    ],
    correctAnswer: 0,
    explanation:
      "合成屋顶底衬水平接缝的推荐重叠量为4至6英寸。足够的重叠确保水不会从接缝处渗入底层屋面板。具体要求应参照制造商规格。",
    category: "roofing",
  },
  {
    id: 1238,
    question:
      "What is 'creep' in relation to asphalt shingles on steep-slope roofs?",
    options: [
      "Moss slowly growing under the shingles",
      "Gradual downward movement of shingles due to gravity and heat",
      "Water slowly seeping through the shingle layers",
      "The sound shingles make in wind",
    ],
    correctAnswer: 1,
    explanation:
      "'蠕变'是沥青瓦在陡坡屋顶上由于重力和热量导致的缓慢向下移动。高温使沥青软化，结合重力作用，瓦片可能逐渐滑移，暴露钉头和底衬。",
    category: "roofing",
  },
  {
    id: 1239,
    question:
      "What is the IRC requirement for attic access when the attic area exceeds 30 square feet and has a vertical height of 30 inches or more?",
    options: [
      "No access is required",
      "A full-size door is required",
      "An access opening of at least 22 x 30 inches must be provided",
      "An access of at least 10 x 10 inches",
    ],
    correctAnswer: 2,
    explanation:
      "IRC要求当阁楼面积超过30平方英尺且垂直高度达到30英寸或以上时，必须提供至少22x30英寸的入口开口。这确保了检查和维护的可达性。",
    category: "roofing",
  },
  {
    id: 1240,
    question:
      "What is the purpose of a diverter at the base of a roof valley where it meets an eave?",
    options: [
      "To improve the appearance of the valley",
      "To support the weight of snow in the valley",
      "To reduce wind noise from the valley",
      "To prevent water overshooting the gutter during heavy rain",
    ],
    correctAnswer: 3,
    explanation:
      "屋脊谷底部与屋檐交汇处的分水器用于防止暴雨时水流越过排水沟。谷底集中了大量水流，在高流量时可能飞溅过排水沟。",
    category: "roofing",
  },
  {
    id: 1241,
    question:
      "What does 'positive drainage' mean on a flat roof?",
    options: [
      "Water drains completely within 48 hours after rainfall with no ponding",
      "Water drains toward the building interior",
      "Multiple drains are installed above the roof surface",
      "Water is pumped off the roof mechanically",
    ],
    correctAnswer: 0,
    explanation:
      "平屋顶的'正排水'意味着降雨后48小时内水完全排干，没有积水。这需要适当的坡度设计和排水系统维护来实现。",
    category: "roofing",
  },
  {
    id: 1242,
    question:
      "What is the primary concern with rooftop antenna or satellite dish installations?",
    options: [
      "They attract lightning strikes",
      "Penetrations through the roofing material may create leak points",
      "They reduce the property value significantly",
      "They increase wind speed over the roof",
    ],
    correctAnswer: 1,
    explanation:
      "屋顶天线或卫星碟安装的主要问题是穿透屋面材料可能产生渗漏点。每个安装螺栓或支架脚都是潜在的水渗入位置，需要正确密封。",
    category: "roofing",
  },
  {
    id: 1243,
    question:
      "What is the expected lifespan of standard 3-tab asphalt shingles?",
    options: [
      "5 to 10 years",
      "30 to 40 years",
      "15 to 20 years",
      "50 to 60 years",
    ],
    correctAnswer: 2,
    explanation:
      "标准三片式沥青瓦的预期使用寿命为15至20年。在加州炎热的气候条件下，实际寿命可能更短。建筑型瓦片通常可使用25-30年以上。",
    category: "roofing",
  },
  {
    id: 1244,
    question:
      "What is the purpose of a roof overflow drain (secondary drain)?",
    options: [
      "To increase the roof's load capacity",
      "To provide additional ventilation",
      "To collect rainwater for irrigation",
      "To provide emergency drainage if the primary drains become clogged",
    ],
    correctAnswer: 3,
    explanation:
      "溢流排水管（二级排水管）在主排水管堵塞时提供紧急排水。它通常安装在比主排水管稍高的位置，确保水在达到危险深度之前排出。",
    category: "roofing",
  },
  {
    id: 1245,
    question:
      "What material is most commonly used for residential gutter systems?",
    options: [
      "Aluminum",
      "Cast iron",
      "Concrete",
      "Lead",
    ],
    correctAnswer: 0,
    explanation:
      "铝是住宅排水沟系统最常用的材料。它轻质、不锈蚀、价格合理，且可在现场加工成无缝排水沟。也有铜和锌排水沟但成本更高。",
    category: "roofing",
  },
  {
    id: 1246,
    question:
      "What is the minimum recommended gutter slope for proper drainage?",
    options: [
      "1 inch per foot toward the downspout",
      "1/16 inch per foot toward the downspout",
      "No slope is needed for gutters",
      "1/2 inch per foot toward the downspout",
    ],
    correctAnswer: 1,
    explanation:
      "排水沟的最小推荐坡度为每英尺向落水管方向倾斜1/16英寸。适当的坡度确保水流向落水管而不是在排水沟中积聚。",
    category: "roofing",
  },
  {
    id: 1247,
    question:
      "How far should downspouts discharge water from the foundation?",
    options: [
      "Directly at the foundation wall",
      "1 foot from the foundation",
      "At least 6 feet from the foundation",
      "It does not matter where downspouts discharge",
    ],
    correctAnswer: 2,
    explanation:
      "落水管应将水排放到距基础至少6英尺的位置。这防止了基础周围的土壤过度饱和，降低了基础渗漏和结构损害的风险。",
    category: "roofing",
  },
  {
    id: 1248,
    question:
      "What is a common sign that a roof is approaching end of life?",
    options: [
      "The roof appears to be a dark color",
      "Gutters are slightly dirty",
      "The roof has one small moss patch",
      "Multiple signs including granule loss, curling, cracking, and missing shingles",
    ],
    correctAnswer: 3,
    explanation:
      "屋顶接近使用寿命末期的常见迹象包括多种表现：颗粒大量脱落、瓦片卷曲、开裂和缺失。当这些问题广泛存在时，通常需要全面更换而非局部修复。",
    category: "roofing",
  },
  {
    id: 1249,
    question:
      "What is the function of roofing cement (mastic)?",
    options: [
      "To seal small gaps, secure flashings, and bond roofing components",
      "To replace entire sections of damaged roofing",
      "To provide structural support to the roof deck",
      "To insulate the attic from below",
    ],
    correctAnswer: 0,
    explanation:
      "屋顶水泥（胶泥）用于密封小间隙、固定闪烁和粘合屋顶组件。它是一种沥青基胶粘剂，常用于闪烁边缘密封和小修补工作。",
    category: "roofing",
  },
  {
    id: 1250,
    question:
      "When inspecting a roof from inside the attic, what does a visible daylight through the roof boards indicate?",
    options: [
      "Normal ventilation design",
      "Gaps or damage in the roof sheathing or covering that may allow water entry",
      "Properly installed ridge vents",
      "High-quality transparent roofing material",
    ],
    correctAnswer: 1,
    explanation:
      "从阁楼内部看到透过屋面板的日光表明屋面板或覆盖层存在间隙或损坏，可能导致水渗入。这是需要在检查报告中记录的重要发现。",
    category: "roofing",
  },

  // ============================================================
  // EXTERIOR (Questions 1251-1400)
  // ============================================================
  {
    id: 1251,
    question:
      "Traditional three-coat stucco in California consists of which layers?",
    options: [
      "Primer, base coat, and paint",
      "Waterproofing, insulation, and plaster",
      "Scratch coat, brown coat, and finish coat",
      "Wire mesh, foam board, and plaster",
    ],
    correctAnswer: 2,
    explanation:
      "加州传统三层灰泥系统由刮涂层（scratch coat）、棕色涂层（brown coat）和面涂层（finish coat）组成。总厚度约7/8英寸，覆盖在金属网和防水纸上。",
    category: "exterior",
  },
  {
    id: 1252,
    question:
      "How does EIFS (Exterior Insulation and Finish System) differ from traditional stucco?",
    options: [
      "EIFS is always applied in three coats like traditional stucco",
      "EIFS is heavier than traditional stucco",
      "There is no difference between the two systems",
      "EIFS uses a foam insulation board as a base instead of solid masonry or wood framing",
    ],
    correctAnswer: 3,
    explanation:
      "EIFS与传统灰泥的不同之处在于使用泡沫隔热板作为基底，而不是实心砌体或木框架。这提供了更好的隔热性能，但如果防水处理不当，容易困住水分。",
    category: "exterior",
  },
  {
    id: 1253,
    question:
      "What is the primary moisture concern with EIFS systems?",
    options: [
      "Water can become trapped behind the system leading to hidden rot and mold",
      "The system absorbs too much moisture from the air",
      "Rain bounces off the surface causing erosion below",
      "EIFS systems are too permeable to moisture",
    ],
    correctAnswer: 0,
    explanation:
      "EIFS系统的主要湿气问题是水可能被困在系统后面，导致隐蔽的腐烂和霉菌。由于外层防水，渗入的水无法轻易蒸发，可能造成严重的结构损害。",
    category: "exterior",
  },
  {
    id: 1254,
    question:
      "What is the typical thickness of a traditional three-coat stucco system?",
    options: [
      "1/4 inch (approximately 6mm)",
      "7/8 inch (approximately 22mm)",
      "2 inches (approximately 50mm)",
      "4 inches (approximately 100mm)",
    ],
    correctAnswer: 1,
    explanation:
      "传统三层灰泥系统的典型总厚度约为7/8英寸（约22毫米）。刮涂层约3/8英寸，棕色涂层约3/8英寸，面涂层约1/8英寸。",
    category: "exterior",
  },
  {
    id: 1255,
    question:
      "Fiber cement siding (such as HardiePlank) is composed of what materials?",
    options: [
      "Vinyl and polyester",
      "Solid wood and epoxy",
      "Portland cement, cellulose fiber, sand, and water",
      "Aluminum and plastic coating",
    ],
    correctAnswer: 2,
    explanation:
      "纤维水泥壁板（如HardiePlank）由波特兰水泥、纤维素纤维、砂和水组成。这种组合使其耐火、防虫、抗腐烂，且不易受潮膨胀。",
    category: "exterior",
  },
  {
    id: 1256,
    question:
      "What is a significant advantage of fiber cement siding over vinyl siding?",
    options: [
      "Lower cost per square foot",
      "Easier DIY installation",
      "Never needs painting",
      "Superior fire resistance and dimensional stability in heat",
    ],
    correctAnswer: 3,
    explanation:
      "纤维水泥壁板比乙烯基壁板具有更优越的防火性能和在高温下的尺寸稳定性。乙烯基壁板在高温下可能软化变形，而纤维水泥不可燃。",
    category: "exterior",
  },
  {
    id: 1257,
    question:
      "Engineered wood siding (like LP SmartSide) is treated with what to resist decay?",
    options: [
      "Zinc borate and a resin binder system",
      "Creosote",
      "Latex paint only",
      "Copper chromated arsenate (CCA)",
    ],
    correctAnswer: 0,
    explanation:
      "工程木壁板（如LP SmartSide）使用硼酸锌和树脂粘合剂系统处理以抵抗腐烂。这种处理使其防虫、防腐、防霉，同时保持木质外观。",
    category: "exterior",
  },
  {
    id: 1258,
    question:
      "What is the minimum clearance required between siding and the ground according to most building codes?",
    options: [
      "No clearance is required",
      "6 inches for wood-based siding and 2 inches for masonry veneer",
      "1 inch for all siding types",
      "12 inches for all siding types",
    ],
    correctAnswer: 1,
    explanation:
      "大多数建筑规范要求木质壁板距地面至少6英寸，砌体饰面至少2英寸。这个间距防止土壤中的水分和虫害接触壁板材料。",
    category: "exterior",
  },
  {
    id: 1259,
    question:
      "Vinyl siding should be installed with what type of fastening method?",
    options: [
      "Nails driven tightly flush against the nailing flange",
      "Adhesive only with no nails",
      "Nails driven loosely to allow for thermal expansion and contraction",
      "Screws tightened as firmly as possible",
    ],
    correctAnswer: 2,
    explanation:
      "乙烯基壁板应使用松动的钉子固定，以允许热膨胀和收缩。钉子应留出约1/32英寸的间隙，使壁板可以自由滑动。过紧的钉子会导致翘曲变形。",
    category: "exterior",
  },
  {
    id: 1260,
    question:
      "What type of damage is vinyl siding most susceptible to in cold weather?",
    options: [
      "Melting from winter sun exposure",
      "Expanding and buckling",
      "Fading and discoloration",
      "Cracking and shattering from impact because it becomes brittle",
    ],
    correctAnswer: 3,
    explanation:
      "乙烯基壁板在寒冷天气中最容易因撞击而开裂和碎裂，因为它在低温下变脆。这使得冬季特别容易受到冰雹、球类或其他物体的撞击损害。",
    category: "exterior",
  },
  {
    id: 1261,
    question:
      "What is the primary purpose of a weep screed at the base of a stucco wall?",
    options: [
      "To allow moisture behind the stucco to drain out at the bottom",
      "To add structural support to the wall",
      "To provide a decorative trim at the wall base",
      "To connect the stucco to the foundation",
    ],
    correctAnswer: 0,
    explanation:
      "灰泥墙底部泄水条的主要目的是让灰泥后面的水分从底部排出。它创建了一个排水出口，防止水分被困在墙体系统内部。",
    category: "exterior",
  },
  {
    id: 1262,
    question:
      "Cedar siding requires what type of maintenance to ensure longevity?",
    options: [
      "No maintenance at all",
      "Regular staining or sealing every 3-5 years",
      "Annual replacement of damaged boards",
      "Monthly pressure washing",
    ],
    correctAnswer: 1,
    explanation:
      "雪松壁板需要每3-5年定期染色或密封处理以确保长寿。未经保护的雪松会灰化并最终腐烂，但维护良好的雪松壁板可以使用30-40年。",
    category: "exterior",
  },
  {
    id: 1263,
    question:
      "Redwood siding is valued in California for what natural property?",
    options: [
      "Extremely low cost compared to other sidings",
      "It never changes color",
      "Natural resistance to decay, insects, and fire",
      "It is lighter than vinyl siding",
    ],
    correctAnswer: 2,
    explanation:
      "红木壁板在加州因其天然抗腐烂、抗虫害和抗火性而受到重视。红木含有天然的单宁和抽提物，使其对真菌和昆虫有很好的抵抗力。",
    category: "exterior",
  },
  {
    id: 1264,
    question:
      "What is the correct installation method for brick veneer on a wood-frame wall?",
    options: [
      "Directly mortared to the wood sheathing with no air gap",
      "Hung from the roof structure with cables",
      "Attached with adhesive to the vapor barrier",
      "With a 1-inch air space between the veneer and the sheathing, and metal ties to the framing",
    ],
    correctAnswer: 3,
    explanation:
      "砖饰面应在饰面和护墙板之间保留1英寸的空气间隙，并使用金属连接件固定到框架上。空气间隙允许水分排出，金属连接件提供结构支撑。",
    category: "exterior",
  },
  {
    id: 1265,
    question:
      "Weep holes in brick veneer serve what critical function?",
    options: [
      "They allow trapped moisture to drain from the wall cavity",
      "They provide ventilation for the interior rooms",
      "They are mounting points for exterior fixtures",
      "They allow electrical wiring to pass through",
    ],
    correctAnswer: 0,
    explanation:
      "砖饰面中的泄水孔允许被困的水分从墙腔排出。它们通常每24-33英寸设置一个，位于墙底部和窗户上方的闪烁处。",
    category: "exterior",
  },
  {
    id: 1266,
    question:
      "Manufactured stone veneer differs from natural stone veneer in what key way?",
    options: [
      "It is heavier and more expensive than natural stone",
      "It is lighter weight, made from concrete, and does not require a structural ledge",
      "It requires a deeper foundation",
      "It cannot be used on residential buildings",
    ],
    correctAnswer: 1,
    explanation:
      "人造石饰面与天然石饰面的关键区别在于它更轻、由混凝土制成，且不需要结构支撑台。这使得它可以安装在标准木框架墙上而不需要额外的基础支撑。",
    category: "exterior",
  },
  {
    id: 1267,
    question:
      "Board and batten siding consists of what elements?",
    options: [
      "Horizontal boards overlapping each other like clapboard",
      "Woven wood strips in a diagonal pattern",
      "Wide boards placed vertically with narrow strips (battens) covering the joints",
      "Metal panels with plastic trim pieces",
    ],
    correctAnswer: 2,
    explanation:
      "板条壁板由垂直放置的宽板和覆盖接缝的窄条（板条）组成。这种传统设计既美观又功能性强，板条覆盖板与板之间的缝隙以防水渗入。",
    category: "exterior",
  },
  {
    id: 1268,
    question:
      "What is the primary difference between lap siding and panel siding?",
    options: [
      "Lap siding is always made of vinyl, panel siding is always made of wood",
      "Panel siding is thicker than lap siding",
      "There is no functional difference",
      "Lap siding uses individual horizontal boards that overlap, while panel siding uses large sheets",
    ],
    correctAnswer: 3,
    explanation:
      "搭接壁板使用重叠的水平单板，而面板壁板使用大片板材。搭接壁板提供更传统的外观，面板壁板安装更快且接缝更少。",
    category: "exterior",
  },
  {
    id: 1269,
    question:
      "What is a rain screen wall system?",
    options: [
      "A wall assembly with an air gap behind the cladding that promotes drainage and drying",
      "A wall covered entirely with waterproof paint",
      "A wall with no windows to prevent rain entry",
      "A temporary rain protection barrier used during construction",
    ],
    correctAnswer: 0,
    explanation:
      "雨幕墙系统是在覆层后面设有空气间隙的墙体组合，促进排水和干燥。空气间隙允许渗入的水排出，并通过空气循环加速墙体干燥。",
    category: "exterior",
  },
  {
    id: 1270,
    question:
      "House wrap (such as Tyvek) serves what primary function?",
    options: [
      "It provides structural support to the wall",
      "It acts as a weather-resistant barrier that blocks liquid water but allows vapor to pass",
      "It serves as the primary insulation layer",
      "It acts as a vapor barrier that blocks all moisture",
    ],
    correctAnswer: 1,
    explanation:
      "房屋包裹材料（如Tyvek）的主要功能是作为耐候屏障，阻挡液态水但允许水蒸气通过。这让墙体系统可以'呼吸'，防止水分积聚同时阻挡风雨。",
    category: "exterior",
  },
  {
    id: 1271,
    question:
      "Improper installation of house wrap is most commonly identified by what defect?",
    options: [
      "Using too many staples",
      "The wrap appearing too tight on the wall",
      "Reverse lapping where upper courses are tucked behind lower courses",
      "Using white wrap instead of colored wrap",
    ],
    correctAnswer: 2,
    explanation:
      "房屋包裹材料安装不当最常见的缺陷是反向搭接，即上层材料塞到下层后面。正确的搭接应该是上层覆盖下层，像屋顶瓦片一样，使水向下流动。",
    category: "exterior",
  },
  {
    id: 1272,
    question:
      "What is proper flashing detail at a window head (top)?",
    options: [
      "Caulk only applied to the top edge",
      "No flashing is needed at the window head",
      "Foam insulation stuffed above the window frame",
      "Flashing tape or metal flashing that integrates with the house wrap above the window",
    ],
    correctAnswer: 3,
    explanation:
      "窗户顶部（窗头）的正确闪烁细节是使用闪烁带或金属闪烁与窗户上方的房屋包裹材料集成。这确保上方流下的水被引导到窗户外侧而非渗入墙内。",
    category: "exterior",
  },
  {
    id: 1273,
    question:
      "What is a sill pan under a window?",
    options: [
      "A waterproof tray at the bottom of the window opening that collects and redirects water",
      "A decorative shelf below the window",
      "A structural beam supporting the window weight",
      "An insulation pad beneath the window frame",
    ],
    correctAnswer: 0,
    explanation:
      "窗台盘是窗户开口底部的防水托盘，收集并引导渗入的水向外排出。它是窗户防水系统的关键组成部分，防止水进入墙腔。",
    category: "exterior",
  },
  {
    id: 1274,
    question:
      "Flashing tape around a window should be applied in what sequence?",
    options: [
      "Head first, then jambs, then sill",
      "Sill first, then jambs, then head — like shingle lapping",
      "All sides simultaneously",
      "Jambs first, then sill, then head",
    ],
    correctAnswer: 1,
    explanation:
      "窗户周围的闪烁带应按照窗台先、然后侧边框、最后窗头的顺序施工——类似瓦片搭接原则。每一层覆盖下一层的上边缘，确保水向下流出。",
    category: "exterior",
  },
  {
    id: 1275,
    question:
      "What is the purpose of a door threshold?",
    options: [
      "To provide a decorative transition between rooms",
      "To support the weight of the door",
      "To create a weather seal between the door bottom and the floor, preventing water and air infiltration",
      "To prevent the door from opening too wide",
    ],
    correctAnswer: 2,
    explanation:
      "门槛的目的是在门底部和地板之间创建一个气候密封，防止水和空气渗入。适当调整的门槛是建筑围护结构防水和节能的重要组成部分。",
    category: "exterior",
  },
  {
    id: 1276,
    question:
      "Sliding door tracks should have what feature to prevent water intrusion?",
    options: [
      "A built-in heater to evaporate water",
      "A rubber dam at each end of the track",
      "No special features are needed",
      "Weep holes to allow water that enters the track to drain outside",
    ],
    correctAnswer: 3,
    explanation:
      "滑动门轨道应有泄水孔，允许进入轨道的水排到室外。堵塞的泄水孔是常见的检查发现，会导致水溢出进入室内。",
    category: "exterior",
  },
  {
    id: 1277,
    question:
      "A single-hung window operates by doing what?",
    options: [
      "Only the bottom sash moves up and down while the top sash is fixed",
      "Both sashes move up and down",
      "The entire window swings outward on a hinge",
      "The window slides horizontally",
    ],
    correctAnswer: 0,
    explanation:
      "单悬窗只有下部窗扇可以上下移动，上部窗扇是固定的。与双悬窗不同，双悬窗的上下两个窗扇都可以移动，便于清洁和通风。",
    category: "exterior",
  },
  {
    id: 1278,
    question:
      "A casement window is operated by what mechanism?",
    options: [
      "Sliding the window up and down",
      "A crank handle that swings the window outward on side hinges",
      "Pushing the window outward from the bottom",
      "Rotating the window on a center pivot",
    ],
    correctAnswer: 1,
    explanation:
      "推窗（casement window）通过曲柄手柄操作，使窗户在侧铰链上向外摆动。它提供100%的开口面积用于通风，密封性也通常优于滑动窗。",
    category: "exterior",
  },
  {
    id: 1279,
    question:
      "An awning window is hinged at what location?",
    options: [
      "The bottom, allowing it to open outward from the top",
      "The left side, opening outward to the right",
      "The top, allowing it to open outward from the bottom",
      "The center, rotating like a propeller",
    ],
    correctAnswer: 2,
    explanation:
      "遮篷窗（awning window）铰接在顶部，从底部向外开启。这种设计允许在下雨时保持通风，因为窗扇像遮篷一样阻挡雨水进入。",
    category: "exterior",
  },
  {
    id: 1280,
    question:
      "The U-factor of a window measures what property?",
    options: [
      "The amount of solar heat the window allows through",
      "The visible light transmittance of the glass",
      "The air leakage rate through the window frame",
      "The rate at which the window conducts non-solar heat flow (lower is better)",
    ],
    correctAnswer: 3,
    explanation:
      "窗户的U值衡量窗户传导非太阳热量的速率。U值越低，窗户的隔热性能越好。加州Title 24对不同气候区有不同的U值要求。",
    category: "exterior",
  },
  {
    id: 1281,
    question:
      "SHGC stands for what, and what does it measure in windows?",
    options: [
      "Solar Heat Gain Coefficient; the fraction of solar energy transmitted through the window",
      "Standard Housing Glass Classification; the quality grade of window glass",
      "Safety Hazard Grade Certificate; the impact resistance rating",
      "Structural Housing Grade Component; the load-bearing capacity",
    ],
    correctAnswer: 0,
    explanation:
      "SHGC代表太阳热增益系数（Solar Heat Gain Coefficient），衡量通过窗户传输的太阳能比例。在加州，较低的SHGC有助于减少冷却负荷。",
    category: "exterior",
  },
  {
    id: 1282,
    question:
      "Visible Transmittance (VT) of a window refers to what?",
    options: [
      "The ability to see through the window from outside",
      "The amount of visible light that passes through the window glass",
      "The UV blocking capability of the glass",
      "The thermal resistance of the window frame",
    ],
    correctAnswer: 1,
    explanation:
      "窗户的可见光透射率（VT）是指通过窗户玻璃的可见光量。较高的VT值意味着更多的自然光进入室内，减少人工照明需求。",
    category: "exterior",
  },
  {
    id: 1283,
    question:
      "Low-E (low emissivity) glass coating is designed to do what?",
    options: [
      "Make the glass stronger against impact",
      "Block all sunlight from entering the room",
      "Reflect infrared heat while allowing visible light to pass through",
      "Prevent the glass from fogging",
    ],
    correctAnswer: 2,
    explanation:
      "低辐射（Low-E）玻璃涂层旨在反射红外热量，同时允许可见光通过。这减少了通过玻璃的热量传递，提高了窗户的能效。",
    category: "exterior",
  },
  {
    id: 1284,
    question:
      "Argon gas fill between window panes provides what benefit?",
    options: [
      "Increased visibility through the glass",
      "UV protection for interior furnishings",
      "Increased structural strength of the glass unit",
      "Improved insulation due to argon's lower thermal conductivity compared to air",
    ],
    correctAnswer: 3,
    explanation:
      "窗户玻璃之间充填氩气提供更好的隔热性能，因为氩气的导热系数低于空气。这减少了通过窗户的热量传递，提高了能效。",
    category: "exterior",
  },
  {
    id: 1285,
    question:
      "What does a failed sealed glass unit (IGU) typically look like?",
    options: [
      "Cloudy, hazy, or condensation trapped between the glass panes",
      "Cracked glass on the exterior surface",
      "Perfectly clear glass with no issues",
      "Yellowed glass on the interior surface",
    ],
    correctAnswer: 0,
    explanation:
      "失效的中空玻璃单元（IGU）通常表现为玻璃层之间出现雾气、混浊或冷凝水。这表明密封失败，惰性气体已泄漏，需要更换整个玻璃单元。",
    category: "exterior",
  },
  {
    id: 1286,
    question:
      "Vinyl windows are preferred in many applications because they:",
    options: [
      "Provide the best structural strength of all window materials",
      "Require minimal maintenance and do not need painting",
      "Are the most fire-resistant window option",
      "Offer the longest lifespan of any window material",
    ],
    correctAnswer: 1,
    explanation:
      "乙烯基窗户在许多应用中受欢迎，因为它们需要最少的维护且不需要油漆。它们不腐烂、不生锈，颜色融入材料本身，清洁简单。",
    category: "exterior",
  },
  {
    id: 1287,
    question:
      "What is a common issue with aluminum window frames?",
    options: [
      "They rust easily in all climates",
      "They are too heavy for standard wall framing",
      "They conduct heat readily, creating thermal bridging and potential condensation",
      "They cannot hold double-pane glass",
    ],
    correctAnswer: 2,
    explanation:
      "铝窗框的常见问题是它们容易传导热量，造成热桥效应和可能的冷凝。现代铝窗通常包含热断桥设计来减轻这个问题。",
    category: "exterior",
  },
  {
    id: 1288,
    question:
      "Wood window frames require what ongoing maintenance?",
    options: [
      "No maintenance as wood is naturally waterproof",
      "Annual replacement of the glass panes",
      "Monthly oiling of the frame joints",
      "Regular painting or staining to protect against moisture and decay",
    ],
    correctAnswer: 3,
    explanation:
      "木窗框需要定期油漆或染色以防止受潮和腐烂。未维护的木窗框会吸收水分、腐烂并最终导致窗户失效。通常每5-7年需要重新涂装。",
    category: "exterior",
  },
  {
    id: 1289,
    question:
      "Window condensation on the interior surface of single-pane glass is most commonly caused by what?",
    options: [
      "High indoor humidity combined with cold exterior temperatures",
      "A gas leak in the home",
      "Defective window glass",
      "Improper window installation",
    ],
    correctAnswer: 0,
    explanation:
      "单层玻璃内表面的冷凝最常见的原因是室内高湿度与室外低温的结合。单层玻璃隔热性差，内表面温度接近室外温度，导致水蒸气凝结。",
    category: "exterior",
  },
  {
    id: 1290,
    question:
      "What is the proper method for attaching a deck ledger board to a house?",
    options: [
      "Nails only, driven through the siding",
      "Through-bolts or lag screws with proper flashing between the ledger and the house",
      "Construction adhesive applied to the back of the ledger",
      "Metal straps wrapped around the ledger and siding",
    ],
    correctAnswer: 1,
    explanation:
      "甲板搁栅板应使用穿透螺栓或滞后螺钉固定到房屋上，并在搁栅板和房屋之间安装适当的闪烁。这是甲板安全的关键连接，不当安装是甲板倒塌的首要原因。",
    category: "exterior",
  },
  {
    id: 1291,
    question:
      "What is the most common cause of deck collapse?",
    options: [
      "Excessive furniture weight on the deck",
      "Using treated lumber instead of hardwood",
      "Improper ledger board attachment to the house structure",
      "Building the deck too close to the ground",
    ],
    correctAnswer: 2,
    explanation:
      "甲板倒塌最常见的原因是搁栅板与房屋结构连接不当。使用钉子而非螺栓、缺少闪烁或连接到非结构构件都可能导致灾难性的失败。",
    category: "exterior",
  },
  {
    id: 1292,
    question:
      "Joist hangers for deck construction must be made of what material?",
    options: [
      "Plastic composite material",
      "Aluminum foil wrapping",
      "Untreated mild steel",
      "Galvanized or stainless steel rated for the specific lumber type",
    ],
    correctAnswer: 3,
    explanation:
      "甲板建造中的搁栅吊架必须使用镀锌或不锈钢制造，且需与特定木材类型相匹配。ACQ处理木材的腐蚀性比旧的CCA处理木材更强，需要更高级别的防腐保护。",
    category: "exterior",
  },
  {
    id: 1293,
    question:
      "What is the correct connection between a deck post and a beam?",
    options: [
      "A positive connection using an approved post-to-beam connector",
      "The beam simply rests on top of the post with no connector",
      "Toenailing with two nails is sufficient",
      "The post sits inside a notch cut into the beam only",
    ],
    correctAnswer: 0,
    explanation:
      "甲板立柱和梁之间应使用经批准的柱梁连接件进行正向连接。简单地将梁放在柱顶上而没有连接件可能在横向力作用下导致梁滑落。",
    category: "exterior",
  },
  {
    id: 1294,
    question:
      "What is the required height for a deck railing when the deck is more than 30 inches above grade?",
    options: [
      "24 inches minimum",
      "36 inches minimum for residential (42 inches for commercial)",
      "48 inches minimum for all applications",
      "No railing is required regardless of height",
    ],
    correctAnswer: 1,
    explanation:
      "当甲板高度超过地面30英寸时，住宅甲板栏杆最低高度要求为36英寸（商业为42英寸）。一些地方管辖区可能要求住宅甲板也采用42英寸。",
    category: "exterior",
  },
  {
    id: 1295,
    question:
      "What is the maximum allowable spacing between deck railing balusters?",
    options: [
      "6 inches",
      "8 inches",
      "4 inches (a 4-inch sphere cannot pass through)",
      "12 inches",
    ],
    correctAnswer: 2,
    explanation:
      "甲板栏杆栏杆条之间的最大允许间距为4英寸（一个4英寸的球体不能通过）。这个标准是为了防止小孩的头部卡入栏杆间隙。",
    category: "exterior",
  },
  {
    id: 1296,
    question:
      "Deck stairs require a handrail on at least one side when there are how many risers?",
    options: [
      "Any number of risers",
      "Eight or more risers",
      "Handrails are never required on deck stairs",
      "Four or more risers",
    ],
    correctAnswer: 3,
    explanation:
      "当甲板楼梯有四个或更多踏步台阶时，至少一侧需要安装扶手。扶手高度应在楼梯踏面前缘上方34至38英寸之间。",
    category: "exterior",
  },
  {
    id: 1297,
    question:
      "What is the maximum riser height for exterior deck stairs per IRC?",
    options: [
      "7-3/4 inches",
      "10 inches",
      "6 inches",
      "12 inches",
    ],
    correctAnswer: 0,
    explanation:
      "IRC规定室外甲板楼梯的最大踏步高度为7-3/4英寸。所有踏步高度的变化不应超过3/8英寸，以防止绊倒危险。",
    category: "exterior",
  },
  {
    id: 1298,
    question:
      "What is the minimum tread depth for exterior deck stairs?",
    options: [
      "6 inches",
      "10 inches",
      "8 inches",
      "14 inches",
    ],
    correctAnswer: 1,
    explanation:
      "室外甲板楼梯的最小踏面深度为10英寸。足够的踏面深度确保脚能安全放置，减少滑倒和摔倒的风险。",
    category: "exterior",
  },
  {
    id: 1299,
    question:
      "What is the primary purpose of deck waterproofing membrane on a second-story deck?",
    options: [
      "To make the deck surface non-slip",
      "To prevent the deck boards from fading",
      "To protect the living space below from water intrusion through the deck surface",
      "To add insulation below the deck",
    ],
    correctAnswer: 2,
    explanation:
      "二楼甲板防水膜的主要目的是保护下方的生活空间免受通过甲板表面的水渗入。没有防水处理的上层甲板会导致下方房间和结构严重受损。",
    category: "exterior",
  },
  {
    id: 1300,
    question:
      "A pergola differs from a patio cover in what primary way?",
    options: [
      "A pergola is always attached to the house while a patio cover is freestanding",
      "A pergola is always made of metal while a patio cover is wood",
      "There is no difference between them",
      "A pergola has an open-beam roof structure while a patio cover has a solid or semi-solid roof",
    ],
    correctAnswer: 3,
    explanation:
      "凉棚（pergola）与庭院盖的主要区别在于凉棚有开放式梁屋顶结构，而庭院盖有实心或半实心屋顶。凉棚提供部分遮荫，庭院盖提供更完全的遮蔽。",
    category: "exterior",
  },
  {
    id: 1301,
    question:
      "What should a home inspector check when evaluating a garage door?",
    options: [
      "Auto-reverse safety mechanism, photo-eye sensors, and balanced operation",
      "The color of the garage door only",
      "Whether a car is parked inside",
      "The brand of the garage door opener only",
    ],
    correctAnswer: 0,
    explanation:
      "检查车库门时应检查自动反转安全机构、光眼传感器和平衡操作。自1993年起，所有车库门开启器必须有自动反转功能以防止伤害。",
    category: "exterior",
  },
  {
    id: 1302,
    question:
      "The photo-eye sensors on a garage door opener should be mounted at what height?",
    options: [
      "At the top of the garage door opening",
      "No higher than 6 inches above the garage floor",
      "At the midpoint of the door height",
      "At any convenient height",
    ],
    correctAnswer: 1,
    explanation:
      "车库门开启器上的光眼传感器应安装在距车库地面不超过6英寸的高度。这个低位安装确保能检测到小孩或宠物在门下方的存在。",
    category: "exterior",
  },
  {
    id: 1303,
    question:
      "What types of materials are commonly used for residential driveways?",
    options: [
      "Only poured concrete",
      "Carpet and tile",
      "Concrete, asphalt, pavers, and gravel",
      "Wood planking only",
    ],
    correctAnswer: 2,
    explanation:
      "住宅车道常用材料包括混凝土、沥青、铺路石和砾石。每种材料有不同的成本、维护需求和使用寿命，选择取决于预算、气候和美观偏好。",
    category: "exterior",
  },
  {
    id: 1304,
    question:
      "Concrete driveway cracks wider than what measurement typically need repair?",
    options: [
      "1 inch",
      "2 inches",
      "Any crack, no matter how small",
      "1/4 inch",
    ],
    correctAnswer: 3,
    explanation:
      "混凝土车道裂缝宽度超过1/4英寸通常需要修复。较窄的裂缝可以监测，但超过1/4英寸的裂缝应填充以防止水渗入和进一步损坏。",
    category: "exterior",
  },
  {
    id: 1305,
    question:
      "Walkway settlement adjacent to a house foundation is a concern because it may indicate what?",
    options: [
      "Improper soil compaction or foundation settlement issues",
      "Normal aging of the concrete",
      "Excellent drainage conditions",
      "The walkway was installed recently",
    ],
    correctAnswer: 0,
    explanation:
      "房屋基础旁边的人行道沉降令人担忧，因为它可能表明土壤压实不当或基础沉降问题。它还可能导致水向基础流动，加剧渗漏问题。",
    category: "exterior",
  },
  {
    id: 1306,
    question:
      "What are the main types of retaining walls used in residential construction?",
    options: [
      "Only poured concrete walls",
      "Gravity, cantilever, segmental block, and anchored walls",
      "Only wood timber walls",
      "Chain link and wire mesh walls",
    ],
    correctAnswer: 1,
    explanation:
      "住宅建设中使用的主要挡土墙类型包括重力式、悬臂式、分段块式和锚定式。选择取决于墙高、土壤条件和预算。超过4英尺的墙通常需要工程设计。",
    category: "exterior",
  },
  {
    id: 1307,
    question:
      "A retaining wall taller than what height typically requires engineering design and permits?",
    options: [
      "1 foot",
      "8 feet",
      "4 feet",
      "12 feet",
    ],
    correctAnswer: 2,
    explanation:
      "挡土墙高度超过4英尺通常需要工程设计和许可证。超过这个高度的墙承受显著的土壤侧向压力，需要专业设计以确保稳定性。",
    category: "exterior",
  },
  {
    id: 1308,
    question:
      "What is the purpose of weep holes in a retaining wall?",
    options: [
      "To provide nesting sites for birds",
      "To allow plant roots to pass through the wall",
      "To reduce the amount of concrete needed",
      "To relieve hydrostatic pressure behind the wall by allowing water to drain through",
    ],
    correctAnswer: 3,
    explanation:
      "挡土墙中泄水孔的目的是通过允许水排出来减轻墙后的静水压力。没有适当排水的挡土墙可能因过大的水压而倾斜或倒塌。",
    category: "exterior",
  },
  {
    id: 1309,
    question:
      "A French drain is designed to do what?",
    options: [
      "Collect and redirect subsurface water away from a structure using a perforated pipe in gravel",
      "Channel surface water from the roof to the street",
      "Provide irrigation water to landscaping",
      "Store rainwater for future use",
    ],
    correctAnswer: 0,
    explanation:
      "法式排水管旨在使用砾石中的穿孔管收集和引导地下水远离建筑。穿孔管收集周围土壤中的水并将其导向适当的排放点。",
    category: "exterior",
  },
  {
    id: 1310,
    question:
      "Surface drains (area drains) are used to manage what type of water?",
    options: [
      "Groundwater from deep underground",
      "Surface water runoff from rain or irrigation",
      "Sewage from the home's plumbing system",
      "Condensation from the HVAC system",
    ],
    correctAnswer: 1,
    explanation:
      "地面排水管（区域排水管）用于管理雨水或灌溉产生的地表径流。它们通常安装在低洼区域，将积水收集并通过管道引导到适当的排放点。",
    category: "exterior",
  },
  {
    id: 1311,
    question:
      "What is the recommended grade slope away from a house foundation?",
    options: [
      "Level ground right up to the foundation",
      "Slope toward the foundation for drainage",
      "6 inches of fall within the first 10 feet from the foundation",
      "1 inch of fall within the first 10 feet",
    ],
    correctAnswer: 2,
    explanation:
      "建议从基础开始的前10英尺内有6英寸的坡降。这个正向坡度确保地表水远离基础而不是向基础流动，防止渗漏和结构损害。",
    category: "exterior",
  },
  {
    id: 1312,
    question:
      "What is 'spalling' in the context of exterior concrete or masonry?",
    options: [
      "A decorative finish applied to concrete",
      "The process of curing new concrete",
      "Intentional roughening of a surface for better adhesion",
      "Surface flaking, peeling, or chipping of concrete or masonry due to moisture and freeze-thaw cycles",
    ],
    correctAnswer: 3,
    explanation:
      "在外部混凝土或砌体中，'剥落'（spalling）是由于水分和冻融循环导致的表面片状剥落或碎裂。在加州，虽然冻融问题较少，但盐害和碱性反应也可能导致剥落。",
    category: "exterior",
  },
  {
    id: 1313,
    question:
      "What is the inspection concern with stucco cracks larger than 1/16 inch?",
    options: [
      "They may allow moisture intrusion into the wall assembly",
      "They are purely cosmetic with no concern",
      "They indicate the home is about to collapse",
      "They mean the stucco was mixed incorrectly",
    ],
    correctAnswer: 0,
    explanation:
      "灰泥裂缝大于1/16英寸值得关注，因为它们可能允许水分渗入墙体组合。水分进入可能导致木构件腐烂、霉菌生长和隔热材料损坏。",
    category: "exterior",
  },
  {
    id: 1314,
    question:
      "What is the purpose of expansion joints (control joints) in stucco?",
    options: [
      "To divide the stucco into decorative sections",
      "To accommodate thermal expansion and contraction and prevent random cracking",
      "To allow electrical wiring to pass through the wall",
      "To reduce the amount of stucco material needed",
    ],
    correctAnswer: 1,
    explanation:
      "灰泥中伸缩缝（控制缝）的目的是容纳热膨胀和收缩，防止随机开裂。它们在预定位置提供应力释放，使裂缝沿控制缝线发生而非随机出现。",
    category: "exterior",
  },
  {
    id: 1315,
    question:
      "What is the primary cause of efflorescence on exterior brick walls?",
    options: [
      "Mold growth on the brick surface",
      "Acid rain erosion",
      "Water-soluble salts within the brick or mortar dissolving and migrating to the surface",
      "Improper paint application",
    ],
    correctAnswer: 2,
    explanation:
      "外墙砖上白华的主要原因是砖或砂浆中的水溶性盐分溶解并迁移到表面。水分蒸发后留下白色盐结晶。虽然主要是外观问题，但表明存在水分迁移。",
    category: "exterior",
  },
  {
    id: 1316,
    question:
      "Fiber cement siding requires what gap between the siding and roof surfaces?",
    options: [
      "Direct contact with the roof is acceptable",
      "A 12-inch clearance from all surfaces",
      "No gap is specified in the installation guidelines",
      "A minimum 2-inch clearance from roof surfaces",
    ],
    correctAnswer: 3,
    explanation:
      "纤维水泥壁板要求与屋顶表面之间至少有2英寸的间隙。这个间隙防止水从屋顶回流到壁板后面，同时允许适当的闪烁安装。",
    category: "exterior",
  },
  {
    id: 1317,
    question:
      "What is the purpose of J-channel trim in vinyl siding installation?",
    options: [
      "To receive and conceal the cut edges of siding at windows, doors, and termination points",
      "To join two pieces of siding end-to-end",
      "To attach the siding to the foundation",
      "To provide ventilation behind the siding",
    ],
    correctAnswer: 0,
    explanation:
      "J形槽在乙烯基壁板安装中用于接收和隐藏窗户、门和终端点处壁板的切割边缘。它提供了整洁的过渡，同时允许壁板的热膨胀运动。",
    category: "exterior",
  },
  {
    id: 1318,
    question:
      "When inspecting exterior caulking, what sign indicates it needs replacement?",
    options: [
      "The caulk appears smooth and fully adhered",
      "Cracking, pulling away from surfaces, or loss of flexibility",
      "The caulk has slight discoloration from age",
      "The caulk has been recently applied",
    ],
    correctAnswer: 1,
    explanation:
      "外部嵌缝剂需要更换的迹象包括开裂、从表面剥离或失去弹性。这些表明密封已经失效，水可能渗入墙体系统。嵌缝通常需要每5-10年更换。",
    category: "exterior",
  },
  {
    id: 1319,
    question:
      "What is the proper way to terminate siding at a concrete foundation?",
    options: [
      "Extend siding below grade into the soil",
      "Mortar siding directly to the foundation",
      "Maintain a gap above the foundation with a starter strip or Z-flashing",
      "Leave siding touching the concrete with no gap",
    ],
    correctAnswer: 2,
    explanation:
      "壁板在混凝土基础处的正确终端处理是在基础上方保留间隙，使用起始条或Z形闪烁。壁板不应接触地面或延伸到土壤以下，以防止水分和虫害。",
    category: "exterior",
  },
  {
    id: 1320,
    question:
      "What is the main concern when trees or shrubs are planted too close to a house?",
    options: [
      "They provide too much shade",
      "They attract too many birds",
      "They make the house look unkempt",
      "They can trap moisture against the siding, block inspection access, and damage the foundation with roots",
    ],
    correctAnswer: 3,
    explanation:
      "树木或灌木离房屋太近的主要问题是它们可能在壁板上积聚水分、阻碍检查通道，并且树根可能损坏基础。建议保持至少2-3英尺的间距。",
    category: "exterior",
  },
  {
    id: 1321,
    question:
      "What is the purpose of a chimney cap on an exterior chimney?",
    options: [
      "To prevent rain, animals, and debris from entering the flue",
      "To increase the chimney's draft",
      "To make the chimney taller for aesthetic purposes",
      "To reduce the weight of the chimney",
    ],
    correctAnswer: 0,
    explanation:
      "烟囱帽的目的是防止雨水、动物和碎屑进入烟道。它也有助于防止火花飞出，减少风引起的下吸气流。缺少烟囱帽是常见的检查发现。",
    category: "exterior",
  },
  {
    id: 1322,
    question:
      "Exterior window sills should slope in what direction?",
    options: [
      "Toward the window to collect water",
      "Away from the window and the building to shed water",
      "Level with no slope",
      "Toward the interior of the building",
    ],
    correctAnswer: 1,
    explanation:
      "外部窗台应向远离窗户和建筑物的方向倾斜以排水。适当的坡度防止水在窗台上积聚并渗入窗框或墙体下方。",
    category: "exterior",
  },
  {
    id: 1323,
    question:
      "What is the most common sign of water damage behind exterior siding?",
    options: [
      "The siding appears perfectly flat and new",
      "The siding color becomes brighter",
      "Warping, buckling, or soft spots in the siding material",
      "The siding gets harder over time",
    ],
    correctAnswer: 2,
    explanation:
      "外部壁板后面水损害最常见的迹象是壁板材料翘曲、隆起或出现软点。这些变形表明底层结构已吸收水分，可能已经开始腐烂。",
    category: "exterior",
  },
  {
    id: 1324,
    question:
      "What is the purpose of Z-flashing where a horizontal surface meets vertical siding?",
    options: [
      "To connect the siding to the roof truss",
      "To provide structural support for the siding",
      "To allow for electrical wire passage",
      "To redirect water away from the joint and prevent it from wicking behind the siding",
    ],
    correctAnswer: 3,
    explanation:
      "Z形闪烁在水平面和垂直壁板交汇处的作用是将水从接缝处引开，防止水通过毛细作用渗入壁板后面。这是防止水损害的关键闪烁细节。",
    category: "exterior",
  },
  {
    id: 1325,
    question:
      "An exterior hose bib (spigot) should be checked for what during an inspection?",
    options: [
      "Proper operation, leaks, presence of a vacuum breaker, and signs of freezing damage",
      "The brand and color of the faucet",
      "Whether it matches the house paint color",
      "The water temperature only",
    ],
    correctAnswer: 0,
    explanation:
      "检查外部水龙头时应检查正常操作、是否漏水、是否有真空断路器以及冻害迹象。真空断路器（防虹吸装置）是防止回流污染饮用水的重要安全装置。",
    category: "exterior",
  },
  {
    id: 1326,
    question:
      "What is a potential issue with exterior electrical outlets that are not GFCI-protected?",
    options: [
      "They use more electricity",
      "They pose an increased risk of electrical shock in wet conditions",
      "They are always a code violation regardless of installation date",
      "They cannot power outdoor tools",
    ],
    correctAnswer: 1,
    explanation:
      "未受GFCI保护的外部电插座在潮湿条件下增加触电风险。现行规范要求所有外部插座都有GFCI保护。检查员应测试这些插座并报告缺少保护的情况。",
    category: "exterior",
  },
  {
    id: 1327,
    question:
      "What is the purpose of a garage-to-house firewall separation?",
    options: [
      "To provide sound insulation between the garage and the house",
      "To prevent car exhaust from entering the home",
      "To delay the spread of fire and toxic fumes from the garage to the living space",
      "To add structural support to the garage",
    ],
    correctAnswer: 2,
    explanation:
      "车库到住宅的防火墙分隔旨在延迟火灾和有毒烟雾从车库蔓延到生活空间。通常要求使用5/8英寸Type X石膏板，从车库到生活空间的门必须是自关闭防火门。",
    category: "exterior",
  },
  {
    id: 1328,
    question:
      "What minimum fire rating is required for the door between a garage and the living area?",
    options: [
      "No fire rating is required",
      "60-minute fire-rated",
      "Any hollow-core door is acceptable",
      "20-minute fire-rated, self-closing, and solid-core or steel",
    ],
    correctAnswer: 3,
    explanation:
      "车库与生活区之间的门要求最低20分钟防火等级、自关闭且为实心或钢制。这扇门是防止车库火灾蔓延到家庭生活空间的关键屏障。",
    category: "exterior",
  },
  {
    id: 1329,
    question:
      "What is the primary purpose of gutters and downspouts?",
    options: [
      "To collect and channel roof runoff water away from the foundation",
      "To add visual appeal to the roofline",
      "To prevent birds from nesting under the eaves",
      "To support the roof edge",
    ],
    correctAnswer: 0,
    explanation:
      "排水沟和落水管的主要目的是收集和引导屋顶径流水远离基础。没有适当的排水系统，屋顶水直接落到基础旁边，可能导致渗漏、侵蚀和结构损害。",
    category: "exterior",
  },
  {
    id: 1330,
    question:
      "What is the inspection concern with a missing kickout flashing at the base of a roof-to-wall intersection?",
    options: [
      "The roof will leak at the ridge",
      "Water running down the roof edge will be directed behind the siding causing hidden rot",
      "The gutter will overflow",
      "Snow will accumulate at the wall",
    ],
    correctAnswer: 1,
    explanation:
      "缺少踢脚闪烁时，沿屋顶边缘流下的水会被引导到壁板后面，导致隐蔽的腐烂。这是最被忽视但最具破坏性的闪烁缺陷之一。",
    category: "exterior",
  },
  {
    id: 1331,
    question:
      "What is the standard minimum width for a residential exterior entry door?",
    options: [
      "24 inches (2 feet)",
      "48 inches (4 feet)",
      "36 inches (3 feet)",
      "30 inches (2.5 feet)",
    ],
    correctAnswer: 2,
    explanation:
      "住宅外部入口门的标准最小宽度为36英寸（3英尺）。这满足了无障碍要求和紧急出口需求。至少一个外部入口必须满足这个最小宽度。",
    category: "exterior",
  },
  {
    id: 1332,
    question:
      "What should the grade around a house look like for proper drainage?",
    options: [
      "Sloping toward the foundation to water the garden",
      "Perfectly level all around the house",
      "Sloping toward the house on the front and away on the back",
      "Sloping away from the foundation on all sides",
    ],
    correctAnswer: 3,
    explanation:
      "房屋周围的地面应从所有方向向远离基础的方向倾斜。建议在前10英尺内有至少6英寸的坡降。负向坡度是基础水损害的最常见原因之一。",
    category: "exterior",
  },
  {
    id: 1333,
    question:
      "Exterior wood trim that shows signs of paint peeling or bubbling may indicate what?",
    options: [
      "Moisture trapped behind the paint film causing adhesion failure",
      "The paint was applied too thickly",
      "The wood is too dry",
      "Normal paint aging that needs no attention",
    ],
    correctAnswer: 0,
    explanation:
      "外部木质装饰条出现油漆剥落或起泡可能表明水分被困在漆膜后面导致附着力失效。这通常意味着需要进一步调查水分来源并在重新涂漆前解决。",
    category: "exterior",
  },
  {
    id: 1334,
    question:
      "What is a common deficiency found with deck post footings?",
    options: [
      "Footings that are too deep",
      "Posts set directly on grade without a proper concrete footing below the frost line",
      "Footings made of reinforced concrete",
      "Posts mounted on manufactured connectors",
    ],
    correctAnswer: 1,
    explanation:
      "甲板立柱基脚的常见缺陷是柱子直接放在地面上而没有在冻线以下的适当混凝土基脚。在加州虽然冻结问题较少，但仍需要适当的基脚以防沉降。",
    category: "exterior",
  },
  {
    id: 1335,
    question:
      "What is the purpose of a splash block placed under a downspout?",
    options: [
      "To create a decorative water feature",
      "To filter debris from the downspout water",
      "To direct water away from the foundation and prevent soil erosion at the discharge point",
      "To collect rainwater for irrigation",
    ],
    correctAnswer: 2,
    explanation:
      "落水管下方放置溅水块的目的是将水引导远离基础并防止排放点处的土壤侵蚀。溅水块将集中的水流分散成较宽的流向，减少局部冲刷。",
    category: "exterior",
  },
  {
    id: 1336,
    question:
      "Window well covers serve what purpose on basement windows?",
    options: [
      "To block all light from entering the basement",
      "To prevent air circulation around the window",
      "To act as a security barrier only",
      "To prevent water, debris, and snow from accumulating in the window well",
    ],
    correctAnswer: 3,
    explanation:
      "窗户井盖的目的是防止水、碎屑和积雪在窗户井中积累。未覆盖的窗户井可能积水并导致地下室窗户渗漏或基础水问题。",
    category: "exterior",
  },
  {
    id: 1337,
    question:
      "What exterior feature requires a minimum 4-inch thick concrete slab?",
    options: [
      "A standard residential driveway",
      "A garden stepping stone",
      "A decorative patio border",
      "A mailbox base",
    ],
    correctAnswer: 0,
    explanation:
      "标准住宅车道要求最少4英寸厚的混凝土板。对于较重的车辆交通，可能需要6英寸或更厚。适当的厚度确保车道能承受车辆荷载而不开裂。",
    category: "exterior",
  },
  {
    id: 1338,
    question:
      "What is the purpose of exterior window screens?",
    options: [
      "To provide security against break-ins",
      "To allow ventilation while keeping insects out of the home",
      "To improve the window's energy efficiency",
      "To protect the glass from hail damage",
    ],
    correctAnswer: 1,
    explanation:
      "外部窗纱的目的是在保持通风的同时防止昆虫进入家中。检查员应注意缺失、撕裂或不合适的窗纱，但它们通常不是必须在检查报告中标注的项目。",
    category: "exterior",
  },
  {
    id: 1339,
    question:
      "An exposed aggregate concrete finish is achieved by doing what?",
    options: [
      "Painting aggregate patterns on smooth concrete",
      "Gluing stones to the surface of cured concrete",
      "Removing the surface cement paste to reveal the decorative aggregate underneath",
      "Pressing metal stamps into wet concrete",
    ],
    correctAnswer: 2,
    explanation:
      "露骨料混凝土面层通过去除表面水泥浆来露出下面的装饰性骨料实现。这创造了有纹理的防滑表面，常用于人行道、庭院和泳池围边。",
    category: "exterior",
  },
  {
    id: 1340,
    question:
      "What is 'heaving' in the context of exterior flatwork (concrete slabs, walkways)?",
    options: [
      "Settling of concrete into the ground",
      "Horizontal sliding of concrete slabs",
      "Crumbling of concrete edges",
      "Upward movement of concrete caused by frost, tree roots, or expansive soil",
    ],
    correctAnswer: 3,
    explanation:
      "'隆起'是指混凝土因冻胀、树根或膨胀性土壤导致的向上移动。在加州，膨胀性粘土和树根是导致混凝土平板隆起的最常见原因。",
    category: "exterior",
  },
  {
    id: 1341,
    question:
      "What exterior feature should have a GFCI-protected outlet within 6.5 feet?",
    options: [
      "An exterior grade-level deck or patio area",
      "The front door entrance only",
      "The garage interior only",
      "A second-story window",
    ],
    correctAnswer: 0,
    explanation:
      "室外平台或庭院区域应在6.5英尺范围内有GFCI保护的插座。NEC要求户外生活空间有可用的电源，并且所有户外插座必须有GFCI保护。",
    category: "exterior",
  },
  {
    id: 1342,
    question:
      "What is the typical lifespan of exterior caulking in California's climate?",
    options: [
      "50 to 100 years",
      "5 to 10 years depending on exposure and product quality",
      "1 to 2 years",
      "It never needs replacement",
    ],
    correctAnswer: 1,
    explanation:
      "在加州气候条件下，外部嵌缝的典型使用寿命为5至10年，取决于暴露程度和产品质量。加州的紫外线强度会加速嵌缝材料的退化。",
    category: "exterior",
  },
  {
    id: 1343,
    question:
      "What is a common sign that a retaining wall is failing?",
    options: [
      "The wall appears perfectly plumb and straight",
      "Small plants growing in mortar joints",
      "Tilting, bulging, or horizontal cracking in the wall",
      "Slight discoloration from weathering",
    ],
    correctAnswer: 2,
    explanation:
      "挡土墙失效的常见迹象包括倾斜、隆起或水平裂缝。这些表明墙体无法承受其后方的土壤侧向压力，可能需要工程评估和修复。",
    category: "exterior",
  },
  {
    id: 1344,
    question:
      "Proper exterior stair lighting is important because it:",
    options: [
      "Increases the home's resale value only",
      "Is required to be solar-powered in California",
      "Prevents insect infestations",
      "Reduces the risk of trips and falls during nighttime use",
    ],
    correctAnswer: 3,
    explanation:
      "适当的室外楼梯照明很重要，因为它可以减少夜间使用时绊倒和摔倒的风险。建筑规范要求在外部出口处提供照明，包括楼梯和通道。",
    category: "exterior",
  },
  {
    id: 1345,
    question:
      "What should be checked regarding window egress requirements in bedrooms?",
    options: [
      "That at least one window has a minimum 5.7 sq ft opening, 24 inches minimum height, and 20 inches minimum width",
      "That all windows can be locked from the outside",
      "That windows have curtains for privacy",
      "That windows are double-pane only",
    ],
    correctAnswer: 0,
    explanation:
      "卧室应检查至少一个窗户具有最小5.7平方英尺的开口、24英寸最小高度和20英寸最小宽度。逃生窗底部距地面不应超过44英寸，以确保紧急逃生。",
    category: "exterior",
  },
  {
    id: 1346,
    question:
      "What is the purpose of a vapor barrier under a concrete slab in exterior construction?",
    options: [
      "To insulate the slab from heat loss",
      "To prevent ground moisture from migrating up through the slab",
      "To strengthen the concrete",
      "To allow water to drain under the slab",
    ],
    correctAnswer: 1,
    explanation:
      "混凝土板下方防潮层的目的是防止地面水分通过板面向上迁移。这保护室内地板覆盖物免受潮气损害，并防止霉菌和霉变生长。",
    category: "exterior",
  },
  {
    id: 1347,
    question:
      "What is the significance of mortar joint deterioration in brick exterior walls?",
    options: [
      "It is purely cosmetic with no structural concern",
      "It improves ventilation of the wall cavity",
      "It can allow water infiltration and reduce the structural integrity of the wall",
      "It indicates the bricks are too new",
    ],
    correctAnswer: 2,
    explanation:
      "砖外墙砂浆接缝劣化很重要，因为它可能导致水渗入并降低墙体结构完整性。砂浆接缝老化需要进行'勾缝'（tuckpointing）修复。",
    category: "exterior",
  },
  {
    id: 1348,
    question:
      "What is 'tuckpointing' (or repointing)?",
    options: [
      "Adding decorative points to brick walls",
      "Painting mortar joints to improve appearance",
      "Filling cracks in the bricks themselves",
      "The process of removing deteriorated mortar and replacing it with new mortar",
    ],
    correctAnswer: 3,
    explanation:
      "'勾缝'（tuckpointing/repointing）是去除劣化的砂浆并用新砂浆替换的过程。这恢复了砂浆接缝的防水和结构功能，延长了砖墙的使用寿命。",
    category: "exterior",
  },
  {
    id: 1349,
    question:
      "What is the concern with exterior wood-to-ground contact?",
    options: [
      "It creates conditions for moisture absorption, decay, and termite infestation",
      "It improves the stability of the structure",
      "It is required by California building codes",
      "It enhances the appearance of the home",
    ],
    correctAnswer: 0,
    explanation:
      "外部木材与地面接触的问题在于它创造了水分吸收、腐烂和白蚁侵蚀的条件。即使是经过处理的木材，直接接触地面也会缩短其使用寿命。",
    category: "exterior",
  },
  {
    id: 1350,
    question:
      "What is the proper clearance between exterior siding and a roof surface where they intersect?",
    options: [
      "No gap; siding should rest directly on the roof",
      "A minimum 2-inch gap with proper flashing",
      "A 12-inch gap",
      "Siding should extend under the roofing material",
    ],
    correctAnswer: 1,
    explanation:
      "外部壁板与屋顶表面交汇处应保持至少2英寸的间隙并安装适当的闪烁。这防止水在屋面和壁板之间积聚，并允许适当的排水。",
    category: "exterior",
  },
  {
    id: 1351,
    question:
      "What is a 'belly band' on a home's exterior?",
    options: [
      "A flexible waterproof membrane around the foundation",
      "A type of insulation wrap",
      "A horizontal trim board that separates two different siding materials or stories",
      "A drainage channel around the house perimeter",
    ],
    correctAnswer: 2,
    explanation:
      "'腰线'（belly band）是分隔两种不同壁板材料或楼层的水平装饰条。检查时应注意适当的闪烁安装，以防止水沿着这个水平过渡处渗入。",
    category: "exterior",
  },
  {
    id: 1352,
    question:
      "What is the minimum height for an exterior deck post above finished grade?",
    options: [
      "Posts can be buried directly in the ground",
      "Posts must be at least 12 inches above grade",
      "No minimum height requirement exists",
      "The post base should be at least 1 inch above grade or on an approved post base connector",
    ],
    correctAnswer: 3,
    explanation:
      "甲板立柱底部应至少高出地面1英寸，或安装在经批准的柱脚连接件上。直接与地面接触会加速木材腐烂，即使使用经处理的木材。",
    category: "exterior",
  },
  {
    id: 1353,
    question:
      "What type of wood preservative treatment is currently used for ground-contact deck lumber?",
    options: [
      "ACQ (Alkaline Copper Quaternary) or CA (Copper Azole)",
      "CCA (Chromated Copper Arsenate)",
      "Creosote",
      "Pentachlorophenol",
    ],
    correctAnswer: 0,
    explanation:
      "目前用于接触地面的甲板木材的防腐处理为ACQ（碱性铜季铵盐）或CA（铜唑）。CCA（铬化砷酸铜）因健康问题已于2003年后停止用于住宅。",
    category: "exterior",
  },
  {
    id: 1354,
    question:
      "What is the purpose of a chimney chase cover?",
    options: [
      "To increase the chimney draft",
      "To seal the top of a prefabricated chimney chase and prevent water entry",
      "To prevent birds from nesting inside the chimney",
      "To add decorative elements to the chimney",
    ],
    correctAnswer: 1,
    explanation:
      "烟囱外壳盖的目的是密封预制烟囱外壳的顶部并防止水进入。常见的缺陷是镀锌钢盖腐蚀生锈，导致水渗入烟囱外壳内部。",
    category: "exterior",
  },
  {
    id: 1355,
    question:
      "What exterior component should be checked for proper slope to ensure water drains away from the building?",
    options: [
      "Roof ridges only",
      "Interior floors only",
      "Window sills, thresholds, porch floors, and the final grade",
      "The attic floor",
    ],
    correctAnswer: 2,
    explanation:
      "应检查窗台、门槛、门廊地板和场地坡度的适当斜度以确保水排出建筑。所有这些水平面都应向远离建筑的方向倾斜以防止水积聚。",
    category: "exterior",
  },
  {
    id: 1356,
    question:
      "What is the concern with exterior stucco applied directly over plywood without proper lath and paper?",
    options: [
      "The stucco will be too strong",
      "The stucco will be a different color",
      "There is no concern with this installation method",
      "Moisture can be trapped between the stucco and wood, leading to rot",
    ],
    correctAnswer: 3,
    explanation:
      "灰泥直接涂在胶合板上而没有适当的金属网和防水纸会导致水分被困在灰泥和木材之间，引起腐烂。金属网和防水纸提供排水层和粘合面。",
    category: "exterior",
  },
  {
    id: 1357,
    question:
      "What material is commonly used for soffit venting in modern construction?",
    options: [
      "Perforated vinyl or aluminum soffit panels",
      "Solid wood boards with no holes",
      "Glass panels",
      "Brick veneer",
    ],
    correctAnswer: 0,
    explanation:
      "现代建筑中常用穿孔的乙烯基或铝制檐底板进行通风。这些预制面板包含小孔或缝隙，允许空气进入阁楼同时阻挡害虫和碎屑。",
    category: "exterior",
  },
  {
    id: 1358,
    question:
      "What is the purpose of a deck ledger flashing?",
    options: [
      "To attach the deck boards to the joists",
      "To prevent water from entering the house where the deck ledger meets the exterior wall",
      "To provide electrical grounding for the deck",
      "To add visual interest to the deck structure",
    ],
    correctAnswer: 1,
    explanation:
      "甲板搁栅板闪烁的目的是防止水在甲板搁栅板与外墙交汇处渗入房屋。这是最关键的甲板细节之一，缺少闪烁是结构水损害的主要原因。",
    category: "exterior",
  },
  {
    id: 1359,
    question:
      "What is the proper gap between composite (Trex-type) deck boards?",
    options: [
      "No gap; boards should be tight together",
      "1 inch between all boards",
      "Approximately 1/8 inch to 3/16 inch for drainage and thermal expansion",
      "3/4 inch between all boards",
    ],
    correctAnswer: 2,
    explanation:
      "复合甲板板（如Trex类型）之间应有约1/8至3/16英寸的间隙。这个间隙允许水排出、空气流通和热膨胀。间隙不足会导致板材翘曲。",
    category: "exterior",
  },
  {
    id: 1360,
    question:
      "What is the minimum footing depth for deck posts in most California jurisdictions?",
    options: [
      "Surface level is acceptable",
      "36 inches below grade in all cases",
      "60 inches below grade",
      "12 inches below grade (or to local frost line requirements)",
    ],
    correctAnswer: 3,
    explanation:
      "在加州大多数管辖区，甲板立柱基脚的最小深度为地面以下12英寸（或当地冻线要求）。加州大部分地区冻线较浅，但仍需达到稳定土壤层。",
    category: "exterior",
  },
  {
    id: 1361,
    question:
      "An exterior electrical panel must have what minimum clearance in front of it?",
    options: [
      "36 inches clear working space",
      "12 inches clear working space",
      "No clearance requirement exists for exterior panels",
      "6 inches clear working space",
    ],
    correctAnswer: 0,
    explanation:
      "外部电气面板前方必须有至少36英寸的净工作空间。这个空间要求确保电气人员能安全地操作和维修电气面板。",
    category: "exterior",
  },
  {
    id: 1362,
    question:
      "What is the proper installation direction for lap siding overlap?",
    options: [
      "Lower courses overlap upper courses",
      "Upper courses overlap lower courses so water sheds downward",
      "Overlapping direction does not matter",
      "All pieces should be butted together with no overlap",
    ],
    correctAnswer: 1,
    explanation:
      "搭接壁板的正确安装方向是上层覆盖下层，使水向下流淌。这与屋顶瓦片的原理相同——水在重力作用下沿表面流下而不会渗入接缝。",
    category: "exterior",
  },
  {
    id: 1363,
    question:
      "What exterior component should maintain a minimum 1-inch air gap between itself and the building wrap?",
    options: [
      "Vinyl siding applied flat to the wall",
      "Stucco finish coat",
      "Brick veneer in a rain screen wall system",
      "Metal roofing panels",
    ],
    correctAnswer: 2,
    explanation:
      "雨幕墙系统中的砖饰面应在自身和建筑包裹材料之间保持至少1英寸的空气间隙。这个间隙是雨幕系统的核心，允许排水和干燥。",
    category: "exterior",
  },
  {
    id: 1364,
    question:
      "What is the most common type of foundation damage visible from an exterior inspection?",
    options: [
      "Foundation paint peeling",
      "Green staining on the concrete",
      "Smooth, unblemished concrete surfaces",
      "Cracks in the foundation wall, particularly stair-step cracks in block foundations",
    ],
    correctAnswer: 3,
    explanation:
      "从外部检查中最常见的基础损害是基础墙裂缝，特别是砌块基础中的阶梯状裂缝。阶梯状裂缝沿砂浆接缝延伸，通常表明不均匀沉降。",
    category: "exterior",
  },
  {
    id: 1365,
    question:
      "What is 'efflorescence' and is it a structural concern?",
    options: [
      "White salt deposits on masonry; it indicates moisture movement but is not structurally damaging",
      "Green mold growth; it is structurally damaging",
      "Rust staining; it indicates structural steel failure",
      "Black discoloration; it requires immediate repair",
    ],
    correctAnswer: 0,
    explanation:
      "白华是砌体上的白色盐沉积物，表示有水分迁移但本身不造成结构损害。然而，它提示检查员应调查水分来源，因为持续的水分可能导致其他问题。",
    category: "exterior",
  },
  {
    id: 1366,
    question:
      "What is the recommended maximum span for a 2x6 deck joist at 16 inches on center using standard pressure-treated lumber?",
    options: [
      "Approximately 4 feet",
      "Approximately 9 feet 9 inches",
      "Approximately 16 feet",
      "Approximately 20 feet",
    ],
    correctAnswer: 1,
    explanation:
      "使用标准防腐处理木材，16英寸中心距的2x6甲板搁栅的推荐最大跨度约为9英尺9英寸。超过此跨度可能导致过度挠曲和弹性感。",
    category: "exterior",
  },
  {
    id: 1367,
    question:
      "What should an inspector look for when examining exterior stairs?",
    options: [
      "The color of the stair paint only",
      "Whether the stairs have carpet",
      "Uniform riser height, proper tread depth, secure handrails, and safe surface conditions",
      "The type of wood grain pattern",
    ],
    correctAnswer: 2,
    explanation:
      "检查外部楼梯时应关注均匀的踏步高度、适当的踏面深度、牢固的扶手和安全的表面状况。不均匀的踏步是最常见的绊倒危险。",
    category: "exterior",
  },
  {
    id: 1368,
    question:
      "What type of exterior light fixture is required adjacent to all exterior doors?",
    options: [
      "Only solar-powered lights are acceptable",
      "Motion-sensor lights only",
      "No lighting is required at exterior doors",
      "A wall-mounted or overhead light controlled by an interior switch",
    ],
    correctAnswer: 3,
    explanation:
      "所有外部入口门旁需要由室内开关控制的壁挂式或头顶式灯具。这确保在夜间能安全地进出房屋，是建筑规范的基本要求。",
    category: "exterior",
  },
  {
    id: 1369,
    question:
      "What is the primary function of a house's soffit vents in combination with ridge vents?",
    options: [
      "To create a continuous airflow path that ventilates the attic from intake at the soffits to exhaust at the ridge",
      "To cool the exterior walls",
      "To prevent rain from entering the windows",
      "To provide structural support",
    ],
    correctAnswer: 0,
    explanation:
      "檐口通风口与脊通风口结合的主要功能是创建连续的气流通道，从檐口处进气到脊部排气，为阁楼提供通风。这是最有效的自然通风系统。",
    category: "exterior",
  },
  {
    id: 1370,
    question:
      "What exterior feature should have a self-closing, self-latching gate per building codes?",
    options: [
      "The front yard entrance",
      "A fence or barrier around a swimming pool",
      "The mailbox area",
      "A garden shed",
    ],
    correctAnswer: 1,
    explanation:
      "建筑规范要求游泳池周围的围栏或屏障配备自关闭、自锁的门。这是防止幼儿无监督进入泳池区域的关键安全要求。",
    category: "exterior",
  },
  {
    id: 1371,
    question:
      "What is the minimum required height for a pool barrier fence in California?",
    options: [
      "36 inches (3 feet)",
      "48 inches (4 feet)",
      "60 inches (5 feet)",
      "72 inches (6 feet)",
    ],
    correctAnswer: 2,
    explanation:
      "加州要求泳池屏障围栏的最低高度为60英寸（5英尺）。围栏必须不可攀爬，门必须自关闭和自锁，锁应在距地面60英寸以上。",
    category: "exterior",
  },
  {
    id: 1372,
    question:
      "When inspecting vinyl siding, what does wavy or buckled siding typically indicate?",
    options: [
      "The house is settling evenly",
      "The siding is too old to function properly",
      "Moisture damage to the siding material itself",
      "The siding was nailed too tightly, preventing thermal expansion",
    ],
    correctAnswer: 3,
    explanation:
      "乙烯基壁板出现波浪或翘曲通常表明壁板钉得太紧，阻碍了热膨胀。乙烯基壁板需要松动的钉固方式以允许材料随温度变化而移动。",
    category: "exterior",
  },
  {
    id: 1373,
    question:
      "What is the recommended clearance between the bottom of exterior siding and a horizontal roof surface (such as where a lower roof meets a wall)?",
    options: [
      "2 inches minimum",
      "No clearance needed",
      "6 inches minimum",
      "The siding should extend onto the roof surface",
    ],
    correctAnswer: 0,
    explanation:
      "外部壁板底部与水平屋面之间建议至少保持2英寸的间隙。这防止壁板吸收来自屋面的水分，并允许适当安装闪烁以引导水远离墙面。",
    category: "exterior",
  },
  {
    id: 1374,
    question:
      "What is the purpose of an anti-siphon valve (vacuum breaker) on an exterior hose bib?",
    options: [
      "To regulate water pressure",
      "To prevent contaminated water from being sucked back into the potable water supply",
      "To filter debris from the water",
      "To prevent the hose bib from freezing",
    ],
    correctAnswer: 1,
    explanation:
      "外部水龙头上防虹吸阀（真空断路器）的目的是防止受污染的水被吸回饮用水供应系统。当供水管出现负压时，可能发生回流污染。",
    category: "exterior",
  },
  {
    id: 1375,
    question:
      "What is an inspection concern with exterior stucco that sounds hollow when tapped?",
    options: [
      "It means the stucco is properly cured",
      "Hollow sounds are normal for all stucco installations",
      "The stucco may have separated from the substrate, indicating potential moisture intrusion",
      "It indicates the stucco is too thick",
    ],
    correctAnswer: 2,
    explanation:
      "敲击灰泥时发出空洞声表明灰泥可能已与基底分离，暗示可能存在水分渗入。分离的灰泥不再与墙体系统连接，可能脱落并导致水损害。",
    category: "exterior",
  },
  {
    id: 1376,
    question:
      "What is the standard minimum height for a porch railing when the porch floor is more than 30 inches above grade?",
    options: [
      "24 inches",
      "42 inches",
      "48 inches",
      "36 inches",
    ],
    correctAnswer: 3,
    explanation:
      "当门廊地板高于地面30英寸以上时，门廊栏杆的标准最低高度为36英寸。与甲板栏杆要求相同，栏杆条间距不超过4英寸。",
    category: "exterior",
  },
  {
    id: 1377,
    question:
      "Asbestos was commonly used in which exterior building material applied before 1980?",
    options: [
      "Cement asbestos siding shingles",
      "Vinyl siding",
      "Aluminum siding",
      "Fiber cement siding (modern formulation)",
    ],
    correctAnswer: 0,
    explanation:
      "石棉在1980年之前常用于水泥石棉壁板瓦中。这些壁板瓦在完好状态下通常不构成直接危险，但在切割、钻孔或拆除时会释放有害纤维。",
    category: "exterior",
  },
  {
    id: 1378,
    question:
      "What is the primary inspection concern with a brick chimney visible from the exterior?",
    options: [
      "The color of the bricks",
      "Deteriorated mortar joints, cracked bricks, missing chimney cap, and damaged flashing",
      "Whether the chimney matches the house style",
      "The height of the chimney for aesthetic purposes",
    ],
    correctAnswer: 1,
    explanation:
      "从外部检查砖烟囱时的主要关注点是劣化的砂浆接缝、裂砖、缺失的烟囱帽和损坏的闪烁。这些问题可能导致水渗入和结构退化。",
    category: "exterior",
  },
  {
    id: 1379,
    question:
      "What type of window is most susceptible to air leakage around the frame?",
    options: [
      "Fixed (non-operable) windows",
      "Casement windows with compression seals",
      "Single-hung or double-hung windows due to their sliding mechanisms",
      "Picture windows",
    ],
    correctAnswer: 2,
    explanation:
      "单悬或双悬窗由于其滑动机构最容易在框架周围漏气。滑动接触面比推窗的压缩密封提供更少的气密性。旧式窗户的漏气问题尤为严重。",
    category: "exterior",
  },
  {
    id: 1380,
    question:
      "What is the typical R-value of a dual-pane window with Low-E coating and argon gas fill?",
    options: [
      "Approximately R-1",
      "Approximately R-13",
      "Approximately R-30",
      "Approximately R-3 to R-4",
    ],
    correctAnswer: 3,
    explanation:
      "具有Low-E涂层和氩气填充的双层玻璃窗的典型R值约为R-3至R-4。虽然远低于墙体隔热值，但比单层玻璃（约R-1）有显著提升。",
    category: "exterior",
  },
  {
    id: 1381,
    question:
      "What is the concern with improperly graded flower beds adjacent to the foundation?",
    options: [
      "They can direct water toward the foundation, increasing the risk of leaks and moisture damage",
      "They block the view from windows",
      "They attract too many butterflies",
      "They increase the property value too much",
    ],
    correctAnswer: 0,
    explanation:
      "基础旁边不当分级的花坛可能将水引向基础，增加渗漏和水损害的风险。花坛的土壤通常比周围地面高，如果坡度不当会形成负向排水。",
    category: "exterior",
  },
  {
    id: 1382,
    question:
      "What exterior feature requires tempered safety glass per building codes?",
    options: [
      "All exterior windows regardless of location",
      "Glass in doors, sidelights, and glass within 18 inches of the floor",
      "Only skylights",
      "Glass in windows above 10 feet from grade",
    ],
    correctAnswer: 1,
    explanation:
      "建筑规范要求门上的玻璃、侧灯以及距地面18英寸以内的玻璃使用钢化安全玻璃。这些位置容易受到人体撞击，钢化玻璃碎裂时不会形成锋利碎片。",
    category: "exterior",
  },
  {
    id: 1383,
    question:
      "What is the minimum size of a downspout for a standard residential gutter system?",
    options: [
      "1 x 1 inch",
      "4 x 6 inches",
      "2 x 3 inches rectangular or 3-inch round",
      "6-inch round",
    ],
    correctAnswer: 2,
    explanation:
      "标准住宅排水沟系统的落水管最小尺寸为2x3英寸矩形或3英寸圆形。尺寸不足的落水管在暴雨时无法处理足够的水量，导致排水沟溢出。",
    category: "exterior",
  },
  {
    id: 1384,
    question:
      "What is the purpose of a cricket behind a chimney as it relates to exterior inspection?",
    options: [
      "To provide structural support to the chimney",
      "To improve the draft of the chimney",
      "To prevent animals from climbing the chimney",
      "To divert water around the chimney and prevent pooling on the upslope side",
    ],
    correctAnswer: 3,
    explanation:
      "烟囱后面的分水脊用于将水从烟囱上游侧引开，防止积水。从外部检查时，缺少分水脊是常见的缺陷发现，尤其是宽度超过30英寸的烟囱。",
    category: "exterior",
  },
  {
    id: 1385,
    question:
      "Fiber cement siding should be fastened using what type of nails?",
    options: [
      "Corrosion-resistant (stainless steel or hot-dipped galvanized) nails",
      "Common steel nails",
      "Aluminum roofing nails",
      "Brass finishing nails",
    ],
    correctAnswer: 0,
    explanation:
      "纤维水泥壁板应使用耐腐蚀钉子（不锈钢或热浸镀锌）固定。普通钢钉会生锈，导致壁板表面出现锈渍，并可能在紧固点处导致劣化。",
    category: "exterior",
  },
  {
    id: 1386,
    question:
      "What is the concern with painting vinyl siding a darker color than the original?",
    options: [
      "Dark paint does not adhere to vinyl surfaces",
      "Darker colors absorb more heat which can cause the vinyl to warp and distort",
      "It voids the homeowner's insurance policy",
      "Dark colors fade faster than light colors on vinyl",
    ],
    correctAnswer: 1,
    explanation:
      "将乙烯基壁板涂成比原色更深的颜色的问题是深色吸收更多热量，可能导致乙烯基翘曲和变形。如果要涂漆，颜色不应比原色更深。",
    category: "exterior",
  },
  {
    id: 1387,
    question:
      "What is the inspection concern with horizontal cracks in a poured concrete foundation wall?",
    options: [
      "They are normal settling cracks with no concern",
      "They indicate the concrete was too strong",
      "They may indicate lateral pressure from soil pushing against the wall",
      "They only occur from poor paint application",
    ],
    correctAnswer: 2,
    explanation:
      "浇筑混凝土基础墙中的水平裂缝可能表明土壤对墙体施加的侧向压力。这是结构性问题，可能导致墙体向内弯曲，需要工程师评估。",
    category: "exterior",
  },
  {
    id: 1388,
    question:
      "What is the proper gap at the bottom of a garage door when closed?",
    options: [
      "A 2-inch gap is normal",
      "A 6-inch gap for ventilation",
      "Any gap size is acceptable",
      "The seal should contact the floor with no visible gap allowing light or water entry",
    ],
    correctAnswer: 3,
    explanation:
      "车库门关闭时，密封条应与地面接触，不应有可见的间隙允许光线或水进入。不良的底部密封导致风雨渗入、害虫进入和能量损失。",
    category: "exterior",
  },
  {
    id: 1389,
    question:
      "What exterior condition can cause 'ice damming' even in mild California climates?",
    options: [
      "Poor attic insulation and ventilation causing uneven roof temperatures in mountain areas",
      "Excessive rain without gutters",
      "High outdoor temperatures",
      "Ice damming cannot occur in California",
    ],
    correctAnswer: 0,
    explanation:
      "即使在加州温和的气候中，山区的阁楼隔热和通风不良会导致屋顶温度不均匀，可能造成冰坝。温暖的屋面融化积雪，水流到冷的屋檐处结冰。",
    category: "exterior",
  },
  {
    id: 1390,
    question:
      "What is the purpose of a drip cap above exterior window and door trim?",
    options: [
      "To provide shade to the window",
      "To direct water away from the top of the window/door frame to prevent water entry",
      "To support the weight of the window",
      "To improve the acoustic seal around the window",
    ],
    correctAnswer: 1,
    explanation:
      "外窗和门框上方滴水帽的目的是将水从窗框/门框顶部引开以防止水渗入。它是一个小的金属或塑料L形件，使水滴落远离框架。",
    category: "exterior",
  },
  {
    id: 1391,
    question:
      "What is the primary concern with tree branches overhanging the roof?",
    options: [
      "They provide too much shade",
      "They improve the home's curb appeal",
      "They can damage roofing materials, clog gutters, and provide animal access to the roof",
      "They help insulate the attic",
    ],
    correctAnswer: 2,
    explanation:
      "树枝悬挂在屋顶上方的主要问题是可能损坏屋顶材料、堵塞排水沟，并为动物提供进入屋顶的通道。建议修剪树枝使其离屋面至少6-10英尺。",
    category: "exterior",
  },
  {
    id: 1392,
    question:
      "What is a key indicator of dry rot in exterior wood components?",
    options: [
      "Wood that appears wet and swollen",
      "Wood with bright green discoloration",
      "Wood that is excessively hard and dense",
      "Wood that appears shrunken, cracked in a cubical pattern, and crumbles when probed",
    ],
    correctAnswer: 3,
    explanation:
      "干腐的关键指标是木材看起来收缩、呈立方体状开裂，用探针戳时会碎裂。干腐实际上是由真菌引起的，需要初始水分来启动但可以在较干燥条件下继续。",
    category: "exterior",
  },
  {
    id: 1393,
    question:
      "What is the purpose of a garage door spring safety cable?",
    options: [
      "To contain the spring in case it breaks, preventing it from becoming a dangerous projectile",
      "To help open the garage door manually",
      "To connect the door to the opener motor",
      "To provide additional lifting force",
    ],
    correctAnswer: 0,
    explanation:
      "车库门弹簧安全缆索的目的是在弹簧断裂时将其固定住，防止其成为危险的投射物。拉伸弹簧（而非扭力弹簧）应始终配有安全缆索。",
    category: "exterior",
  },
  {
    id: 1394,
    question:
      "What exterior component is most vulnerable to wind-driven rain infiltration?",
    options: [
      "Solid brick walls",
      "Window and door openings, especially at flashing and caulking joints",
      "Metal roofing panels",
      "Concrete foundation walls below grade",
    ],
    correctAnswer: 1,
    explanation:
      "窗户和门洞是最容易受到风驱雨水渗透的外部组件，尤其是在闪烁和嵌缝接缝处。这些是围护结构中最薄弱的环节，需要正确安装和维护。",
    category: "exterior",
  },
  {
    id: 1395,
    question:
      "What is the concern with decorative shutters that are screwed directly into stucco without proper anchoring?",
    options: [
      "The shutters will be too heavy for the stucco",
      "The shutters will change the home's style",
      "Screw penetrations through the stucco can create pathways for water intrusion",
      "There is no concern with this method",
    ],
    correctAnswer: 2,
    explanation:
      "装饰百叶窗直接拧入灰泥而没有适当锚固的问题是螺钉穿透灰泥会创建水渗入通道。每个穿透点都应该有密封处理以防止水进入墙体。",
    category: "exterior",
  },
  {
    id: 1396,
    question:
      "What is the proper termination of siding at an exterior wall penetration (such as a dryer vent)?",
    options: [
      "The penetration can be left with gaps for ventilation",
      "Siding should overlap the penetration completely",
      "No special treatment is needed at penetrations",
      "The siding should be properly cut and sealed around the penetration with caulk and flashing",
    ],
    correctAnswer: 3,
    explanation:
      "壁板在外墙穿透点（如烘干机排气口）处应正确切割并用嵌缝和闪烁密封。未密封的穿透点是水渗入和害虫进入的常见来源。",
    category: "exterior",
  },
  {
    id: 1397,
    question:
      "What is the inspection concern with exterior AC condenser unit pads that are not level?",
    options: [
      "An unlevel pad can cause compressor stress, vibration, and premature failure",
      "It affects the color of the unit",
      "An unlevel pad improves drainage",
      "There is no concern with an unlevel pad",
    ],
    correctAnswer: 0,
    explanation:
      "不水平的空调室外机底座可能导致压缩机应力、振动和过早失效。底座应保持水平，以确保压缩机油正确循环和制冷剂正常流动。",
    category: "exterior",
  },
  {
    id: 1398,
    question:
      "What exterior material requires a rain screen gap of at least 3/8 inch behind it per manufacturer requirements?",
    options: [
      "Vinyl siding in all applications",
      "Fiber cement siding when installed over certain substrates",
      "Stucco in all applications",
      "Brick veneer in all applications",
    ],
    correctAnswer: 1,
    explanation:
      "纤维水泥壁板在某些基底上安装时，制造商要求背面至少有3/8英寸的雨幕间隙。这个间隙允许壁板后面的水分排出和干燥，延长使用寿命。",
    category: "exterior",
  },
  {
    id: 1399,
    question:
      "What type of exterior door is required between the garage and an attached dwelling unit?",
    options: [
      "Any hollow-core door",
      "A sliding glass door",
      "A solid wood door at least 1-3/8 inches thick or a 20-minute fire-rated door",
      "A screen door only",
    ],
    correctAnswer: 2,
    explanation:
      "车库和附属住宅单元之间需要至少1-3/8英寸厚的实木门或20分钟防火等级的门。该门必须是自关闭的，不允许在车库一侧有任何玻璃面板。",
    category: "exterior",
  },
  {
    id: 1400,
    question:
      "During an exterior inspection, what should a home inspector note about the overall site drainage pattern?",
    options: [
      "Only the color and type of landscaping plants",
      "The brand of sprinkler system installed",
      "Whether the lawn is recently mowed",
      "Whether surface water flows away from the structure on all sides and to appropriate discharge points",
    ],
    correctAnswer: 3,
    explanation:
      "在外部检查期间，检查员应注意地表水是否从建筑物所有方向流出并到达适当的排放点。不当的场地排水是导致基础问题、地下室渗漏和土壤侵蚀的最常见原因。",
    category: "exterior",
  },
];
