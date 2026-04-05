import { Question } from "./questions";

export const questionsPart2: Question[] = [
  // ========== HVAC Systems continued (171-200) ==========
  {
    id: 171,
    question:
      "What is the primary advantage of a heat pump over a traditional furnace?",
    options: [
      "It can both heat and cool a home",
      "It uses natural gas",
      "It requires no electricity",
      "It never needs maintenance",
    ],
    correctAnswer: 0,
    explanation:
      "热泵的主要优势是它既能制热又能制冷，作为一个系统同时替代暖炉和空调。它通过在制热和制冷模式之间切换制冷剂流向来实现这一功能。",
    category: "hvac",
  },
  {
    id: 172,
    question:
      "In a zoned HVAC system, what component controls airflow to different areas of the house?",
    options: [
      "Thermocouples",
      "Motorized dampers",
      "Expansion valves",
      "Condensate pumps",
    ],
    correctAnswer: 1,
    explanation:
      "分区HVAC系统使用电动风阀（motorized dampers）安装在管道中，根据每个区域恒温器的需求来控制气流分配到房屋的不同区域。",
    category: "hvac",
  },
  {
    id: 173,
    question:
      "What is the purpose of a whole-house humidifier attached to an HVAC system?",
    options: [
      "To remove excess moisture from the air",
      "To add moisture to heated air during dry winter months",
      "To filter allergens from the air",
      "To increase the furnace temperature",
    ],
    correctAnswer: 1,
    explanation:
      "全屋加湿器连接在HVAC系统上，在干燥的冬季为加热的空气添加水分。干燥的加热空气会导致皮肤干裂、静电和木材收缩，加湿器有助于保持舒适的室内湿度水平。",
    category: "hvac",
  },
  {
    id: 174,
    question:
      "What is the typical life expectancy of a gas furnace in good condition?",
    options: [
      "5-10 years",
      "15-20 years",
      "30-40 years",
      "50+ years",
    ],
    correctAnswer: 1,
    explanation:
      "维护良好的燃气暖炉通常使用寿命为15-20年。超过这个年限，效率下降，维修频率增加，应建议客户考虑更换。",
    category: "hvac",
  },
  {
    id: 175,
    question:
      "What does AFUE stand for in relation to furnace efficiency?",
    options: [
      "Annual Fuel Usage Estimate",
      "Annual Fuel Utilization Efficiency",
      "Average Furnace Unit Energy",
      "Air Flow Utilization Efficiency",
    ],
    correctAnswer: 1,
    explanation:
      "AFUE代表年度燃料利用效率（Annual Fuel Utilization Efficiency），是衡量暖炉将燃料转化为热量效率的标准。例如，AFUE 95%表示每100单位燃料中有95单位转化为可用热量。",
    category: "hvac",
  },
  {
    id: 176,
    question:
      "What is the minimum required clearance between a gas furnace and combustible materials?",
    options: [
      "No clearance required",
      "1 inch",
      "As specified by the manufacturer",
      "12 inches on all sides",
    ],
    correctAnswer: 2,
    explanation:
      "燃气暖炉与可燃材料之间的最小间距必须按照制造商的规定。每台设备的数据铭牌上会标明所需的间距要求，检查员应参照铭牌信息进行判断。",
    category: "hvac",
  },
  {
    id: 177,
    question:
      "What type of flue pipe is required for a high-efficiency condensing furnace?",
    options: [
      "Single-wall metal flue",
      "Double-wall Type B vent",
      "PVC or CPVC pipe",
      "Masonry chimney",
    ],
    correctAnswer: 2,
    explanation:
      "高效冷凝暖炉（AFUE 90%以上）产生的排气温度较低，可以使用PVC或CPVC管道作为排气管。这是因为排气温度不够高，不会损坏塑料管道。",
    category: "hvac",
  },
  {
    id: 178,
    question:
      "What is the primary danger of a cracked heat exchanger in a gas furnace?",
    options: [
      "Reduced heating efficiency",
      "Water leaks",
      "Carbon monoxide leaking into living spaces",
      "Excessive noise",
    ],
    correctAnswer: 2,
    explanation:
      "燃气暖炉换热器裂缝的主要危险是一氧化碳（CO）可能泄漏到居住空间。换热器将燃烧气体与室内空气隔开，裂缝会破坏这个屏障，造成严重的安全隐患。",
    category: "hvac",
  },
  {
    id: 179,
    question:
      "What is a mini-split HVAC system?",
    options: [
      "A small window air conditioner",
      "A ductless system with an outdoor compressor and indoor air handler",
      "A portable space heater",
      "A furnace that is split into two units",
    ],
    correctAnswer: 1,
    explanation:
      "迷你分体系统（mini-split）是一种无管道系统，由室外压缩机和一个或多个室内空气处理器组成。它们通过制冷剂管线连接，无需传统管道系统，适合改造和扩建。",
    category: "hvac",
  },
  {
    id: 180,
    question:
      "What type of heating system uses hot water circulated through pipes in the floor?",
    options: [
      "Forced air heating",
      "Steam heating",
      "Radiant floor heating",
      "Baseboard convection heating",
    ],
    correctAnswer: 2,
    explanation:
      "辐射地暖系统通过在地板下安装的管道中循环热水来加热房间。这种系统提供均匀的热量分布，从地面向上辐射，是一种高效舒适的供暖方式。",
    category: "hvac",
  },
  {
    id: 181,
    question:
      "Where should carbon monoxide detectors be installed in relation to gas-fired HVAC equipment?",
    options: [
      "Directly on top of the furnace",
      "In the attic only",
      "On every level of the home and near sleeping areas",
      "Only in the garage",
    ],
    correctAnswer: 2,
    explanation:
      "一氧化碳探测器应安装在房屋的每一层和卧室附近。加州法律要求在每个有卧室的楼层和每个卧室外安装CO探测器，以确保居住者安全。",
    category: "hvac",
  },
  {
    id: 182,
    question:
      "What does a furnace combustion air intake provide?",
    options: [
      "Cool air for the living space",
      "Fresh air needed for the fuel combustion process",
      "Air to inflate the ductwork",
      "Ventilation for the attic",
    ],
    correctAnswer: 1,
    explanation:
      "暖炉燃烧空气进气口为燃料燃烧过程提供所需的新鲜空气。充足的燃烧空气对于安全高效的运行至关重要，不足的燃烧空气会导致不完全燃烧和一氧化碳产生。",
    category: "hvac",
  },
  {
    id: 183,
    question:
      "What is the SEER rating used to measure?",
    options: [
      "Furnace heating efficiency",
      "Air conditioner or heat pump cooling efficiency",
      "Duct leakage rate",
      "Indoor air quality",
    ],
    correctAnswer: 1,
    explanation:
      "SEER（季节能效比）用于衡量空调或热泵的制冷效率。SEER值越高，能效越高。当前联邦标准要求最低SEER为14-15，具体取决于地区。",
    category: "hvac",
  },
  {
    id: 184,
    question:
      "What is the purpose of a condensate drain line on a high-efficiency furnace?",
    options: [
      "To drain refrigerant",
      "To remove condensed water produced during the combustion process",
      "To supply water to the humidifier",
      "To drain the gas supply line",
    ],
    correctAnswer: 1,
    explanation:
      "高效冷凝暖炉在燃烧过程中会产生冷凝水，冷凝水排水管将这些水排出。如果排水管堵塞，可能导致水损坏或暖炉关闭，检查员应检查排水管是否畅通。",
    category: "hvac",
  },
  {
    id: 185,
    question:
      "What is the recommended temperature differential between the supply and return air in a properly functioning forced-air heating system?",
    options: [
      "5-10 degrees F",
      "15-25 degrees F",
      "40-70 degrees F",
      "100+ degrees F",
    ],
    correctAnswer: 2,
    explanation:
      "正常运行的强制送风暖气系统中，送风口和回风口之间的温差应为40-70华氏度。温差过低可能表示换热器问题，温差过高可能表示气流不足。",
    category: "hvac",
  },
  {
    id: 186,
    question:
      "What type of thermostat can be programmed to adjust temperatures at different times of day?",
    options: [
      "Mercury bulb thermostat",
      "Bimetallic thermostat",
      "Programmable or smart thermostat",
      "Line voltage thermostat",
    ],
    correctAnswer: 2,
    explanation:
      "可编程或智能恒温器可以设定在一天中不同时间自动调节温度，例如在无人在家时降低加热或冷却，从而节省能源和费用。",
    category: "hvac",
  },
  {
    id: 187,
    question:
      "What is the purpose of a refrigerant line set in a split HVAC system?",
    options: [
      "To carry natural gas to the furnace",
      "To carry refrigerant between the indoor and outdoor units",
      "To drain condensate water",
      "To supply electricity to the compressor",
    ],
    correctAnswer: 1,
    explanation:
      "制冷剂管线组连接分体式HVAC系统的室内和室外机组，在两者之间输送制冷剂。管线组通常由一根较大的吸气管和一根较小的液体管组成，外面包裹隔热材料。",
    category: "hvac",
  },
  {
    id: 188,
    question:
      "What should an inspector look for when examining HVAC ductwork in an attic?",
    options: [
      "The color of the duct tape",
      "Disconnected sections, damage, and inadequate insulation",
      "The brand name of the ductwork",
      "Whether the ducts are made of copper",
    ],
    correctAnswer: 1,
    explanation:
      "检查阁楼中的HVAC管道时，检查员应注意管道断开、损坏、隔热不足以及密封不良等问题。管道泄漏会显著降低系统效率，增加能源成本。",
    category: "hvac",
  },
  {
    id: 189,
    question:
      "What is a two-stage furnace?",
    options: [
      "A furnace with two separate combustion chambers",
      "A furnace that operates at two different heat output levels",
      "A furnace that requires two thermostats",
      "A furnace with two exhaust flues",
    ],
    correctAnswer: 1,
    explanation:
      "两级暖炉可以在两种不同的热量输出级别运行：低火和高火。在温和天气下使用低火运行更安静、更高效，只在需要更多热量时切换到高火。",
    category: "hvac",
  },
  {
    id: 190,
    question:
      "What is the purpose of a return air filter in a forced-air HVAC system?",
    options: [
      "To add fragrance to the air",
      "To filter dust, debris, and particles before air enters the equipment",
      "To regulate refrigerant flow",
      "To control humidity levels",
    ],
    correctAnswer: 1,
    explanation:
      "回风过滤器在空气进入HVAC设备之前过滤灰尘、碎片和颗粒物。定期更换过滤器对于维持良好的室内空气质量和保护设备至关重要。",
    category: "hvac",
  },
  {
    id: 191,
    question:
      "What does a home inspector check when evaluating the electrical disconnect for an air conditioning unit?",
    options: [
      "That it is painted the correct color",
      "That it is within sight and accessible from the unit",
      "That it uses a specific brand of breaker",
      "That it has a timer installed",
    ],
    correctAnswer: 1,
    explanation:
      "检查员应确认空调机组的电气断路开关在机组视线范围内且可轻松接近。这是安全要求，便于维修人员在维护时快速断电。",
    category: "hvac",
  },
  {
    id: 192,
    question:
      "What is the function of the evaporator coil in an air conditioning system?",
    options: [
      "To compress the refrigerant",
      "To absorb heat from the indoor air",
      "To exhaust heat to the outdoors",
      "To generate electricity for the system",
    ],
    correctAnswer: 1,
    explanation:
      "蒸发器盘管位于室内机组中，其功能是从室内空气中吸收热量。低温制冷剂在盘管中流动时蒸发，从经过的空气中吸收热量，从而冷却室内空气。",
    category: "hvac",
  },
  {
    id: 193,
    question:
      "When inspecting a gas furnace, what color should the burner flame ideally be?",
    options: [
      "Yellow or orange",
      "Red",
      "Blue with small yellow tips",
      "Green",
    ],
    correctAnswer: 2,
    explanation:
      "燃气暖炉的燃烧器火焰理想状态应为蓝色，带有少量黄色尖端。持续的黄色或橙色火焰表示不完全燃烧，可能产生过多的一氧化碳，需要进一步检查和调整。",
    category: "hvac",
  },
  {
    id: 194,
    question:
      "What is the primary concern with an oversized HVAC system?",
    options: [
      "It uses too little energy",
      "It short cycles, leading to poor humidity control and uneven temperatures",
      "It is too quiet",
      "It heats or cools too slowly",
    ],
    correctAnswer: 1,
    explanation:
      "过大的HVAC系统会频繁短周期运行，导致湿度控制不良和温度不均匀。系统快速达到设定温度后关闭，无法充分除湿，也会增加设备磨损。",
    category: "hvac",
  },
  {
    id: 195,
    question:
      "What type of gas valve safety device shuts off the gas if the pilot light goes out?",
    options: [
      "Pressure relief valve",
      "Thermocouple or flame sensor",
      "Check valve",
      "Gate valve",
    ],
    correctAnswer: 1,
    explanation:
      "热电偶或火焰传感器检测引燃火焰是否存在。如果引燃灯熄灭，热电偶感应不到热量，就会关闭燃气阀，防止未燃烧的气体积聚造成安全隐患。",
    category: "hvac",
  },
  {
    id: 196,
    question:
      "What is a packaged HVAC unit?",
    options: [
      "An HVAC system shipped in a package",
      "A system where heating and cooling components are combined in a single outdoor unit",
      "A window-mounted air conditioner",
      "An HVAC system installed underground",
    ],
    correctAnswer: 1,
    explanation:
      "组合式HVAC机组将加热和冷却组件集成在一个室外设备中。所有组件包括压缩机、蒸发器和加热装置都在同一个箱体内，通过管道向室内送风。",
    category: "hvac",
  },
  {
    id: 197,
    question:
      "What should an inspector note about the location of a furnace installed in a garage?",
    options: [
      "The color of the furnace",
      "The burner ignition source must be at least 18 inches above the garage floor",
      "The furnace must face the garage door",
      "There must be a window next to the furnace",
    ],
    correctAnswer: 1,
    explanation:
      "安装在车库中的暖炉，其点火源必须距离车库地面至少18英寸。这是为了防止汽油蒸气（比空气重，沉积在地面附近）被点燃引发火灾或爆炸。",
    category: "hvac",
  },
  {
    id: 198,
    question:
      "What does a dirty or clogged HVAC air filter typically cause?",
    options: [
      "Improved air quality",
      "Reduced airflow, increased energy consumption, and potential equipment damage",
      "Lower electricity bills",
      "Quieter operation",
    ],
    correctAnswer: 1,
    explanation:
      "脏污或堵塞的HVAC空气过滤器会导致气流减少、能耗增加，并可能损坏设备。减少的气流会使蒸发器盘管结冰、换热器过热，缩短设备寿命。",
    category: "hvac",
  },
  {
    id: 199,
    question:
      "What is the purpose of the outdoor condenser unit's fan?",
    options: [
      "To blow cool air into the house",
      "To dissipate heat from the refrigerant by blowing air over the condenser coils",
      "To provide fresh air ventilation",
      "To dry the refrigerant",
    ],
    correctAnswer: 1,
    explanation:
      "室外冷凝器风扇通过将空气吹过冷凝器盘管来散热。高温高压的制冷剂在盘管中流过时释放从室内吸收的热量，风扇加速这一散热过程。",
    category: "hvac",
  },
  {
    id: 200,
    question:
      "What is the recommended minimum clearance around an outdoor HVAC condenser unit for proper airflow?",
    options: [
      "No clearance needed",
      "At least 12-24 inches on all sides",
      "At least 6 feet on all sides",
      "Only 1 inch on each side",
    ],
    correctAnswer: 1,
    explanation:
      "室外HVAC冷凝器周围建议保持至少12-24英寸的间距以确保适当气流。植被、围栏或其他障碍物太靠近会限制气流，降低效率并导致系统过热。",
    category: "hvac",
  },

  // ========== Roofing (201-250) ==========
  {
    id: 201,
    question:
      "What is the most commonly used residential roofing material in the United States?",
    options: [
      "Clay tile",
      "Metal roofing",
      "Asphalt shingles",
      "Slate",
    ],
    correctAnswer: 2,
    explanation:
      "沥青瓦（asphalt shingles）是美国最常用的住宅屋顶材料，占市场份额约80%。它们价格实惠、安装方便、种类繁多，使用寿命通常为20-30年。",
    category: "roofing",
  },
  {
    id: 202,
    question:
      "What is the purpose of roof flashing?",
    options: [
      "To add decorative elements to the roof",
      "To prevent water intrusion at intersections, penetrations, and transitions",
      "To increase roof insulation",
      "To provide structural support",
    ],
    correctAnswer: 1,
    explanation:
      "屋顶泛水（flashing）的目的是在交叉处、穿透处和过渡处防止水渗入。泛水通常由金属制成，安装在烟囱、管道通风口、天窗和屋顶与墙壁交接处等易漏水部位。",
    category: "roofing",
  },
  {
    id: 203,
    question:
      "What is a roof valley?",
    options: [
      "The peak of the roof",
      "The internal angle where two sloping roof planes meet",
      "A flat section of the roof",
      "The overhang of the roof",
    ],
    correctAnswer: 1,
    explanation:
      "屋顶谷（valley）是两个倾斜屋顶面相交形成的内角。屋顶谷是水流集中的区域，因此是容易漏水的位置，需要特别注意泛水和防水处理。",
    category: "roofing",
  },
  {
    id: 204,
    question:
      "What is the typical life expectancy of standard 3-tab asphalt shingles?",
    options: [
      "5-10 years",
      "15-20 years",
      "40-50 years",
      "75+ years",
    ],
    correctAnswer: 1,
    explanation:
      "标准三片式沥青瓦的典型使用寿命为15-20年。建筑级（architectural）沥青瓦寿命更长，通常可达25-30年，具体取决于气候条件和维护情况。",
    category: "roofing",
  },
  {
    id: 205,
    question:
      "What are signs of roof shingle deterioration that an inspector should note?",
    options: [
      "Shingles that are perfectly flat",
      "Curling, cracking, missing granules, and moss growth",
      "Shingles that are the same color",
      "Shingles with manufacturer labels visible",
    ],
    correctAnswer: 1,
    explanation:
      "瓦片老化的迹象包括卷曲、开裂、颗粒脱落和苔藓生长。这些都表明屋顶材料正在劣化，可能很快需要更换。颗粒脱落常在排水沟中发现。",
    category: "roofing",
  },
  {
    id: 206,
    question:
      "What is the purpose of roof underlayment?",
    options: [
      "To provide insulation",
      "To act as a secondary water barrier beneath the roofing material",
      "To add structural strength to the roof deck",
      "To improve the appearance of the roof",
    ],
    correctAnswer: 1,
    explanation:
      "屋顶底层（underlayment）作为屋顶材料下方的第二道防水屏障。如果瓦片或其他屋顶覆盖层被风吹开或损坏，底层可以暂时防止水渗入屋顶内部结构。",
    category: "roofing",
  },
  {
    id: 207,
    question:
      "What is a drip edge on a roof?",
    options: [
      "A type of gutter",
      "Metal flashing installed at the edges of the roof to direct water away from the fascia",
      "A decorative molding",
      "A type of shingle",
    ],
    correctAnswer: 1,
    explanation:
      "滴水边（drip edge）是安装在屋顶边缘的金属泛水条，其作用是将水引导远离木质封檐板（fascia），防止水沿屋顶边缘回流导致木材腐烂。",
    category: "roofing",
  },
  {
    id: 208,
    question:
      "What is the minimum recommended roof pitch for standard asphalt shingles?",
    options: [
      "Flat (0:12)",
      "2:12",
      "4:12",
      "8:12",
    ],
    correctAnswer: 2,
    explanation:
      "标准沥青瓦推荐的最低屋顶坡度为4:12（每12英寸水平距离上升4英寸）。低于此坡度需要特殊安装方法和额外的底层防水处理。",
    category: "roofing",
  },
  {
    id: 209,
    question:
      "What is a ridge vent?",
    options: [
      "A vent installed on the side of the house",
      "A continuous vent installed along the peak of the roof for attic ventilation",
      "A vent installed in the bathroom",
      "A vent in the foundation",
    ],
    correctAnswer: 1,
    explanation:
      "脊通风口（ridge vent）是沿屋顶最高点（脊部）安装的连续通风口，用于阁楼通风。它允许热空气和湿气从阁楼顶部排出，配合檐口通风口形成自然对流。",
    category: "roofing",
  },
  {
    id: 210,
    question:
      "What is the function of soffit vents?",
    options: [
      "To exhaust hot air from the attic",
      "To allow fresh outside air to enter the attic at the eaves",
      "To ventilate the kitchen",
      "To drain water from the roof",
    ],
    correctAnswer: 1,
    explanation:
      "檐口通风口（soffit vents）安装在屋檐下方的封板上，允许新鲜外部空气从底部进入阁楼。它们作为进气口，与脊通风口等排气口配合，形成阁楼的通风循环。",
    category: "roofing",
  },
  {
    id: 211,
    question:
      "What causes ice dams on a roof?",
    options: [
      "Excessive rain",
      "Heat escaping from the attic melts snow, which refreezes at the cold eaves",
      "Strong winds",
      "Using the wrong color shingles",
    ],
    correctAnswer: 1,
    explanation:
      "冰坝是由于阁楼散发的热量融化屋顶上的雪，融化的水流到较冷的屋檐处重新结冰而形成的。冰坝会导致水倒流到瓦片下方，造成漏水和损坏。",
    category: "roofing",
  },
  {
    id: 212,
    question:
      "What material is most commonly used for residential gutter systems?",
    options: [
      "Cast iron",
      "Copper",
      "Aluminum",
      "Stainless steel",
    ],
    correctAnswer: 2,
    explanation:
      "铝是住宅排水槽系统最常用的材料。铝质排水槽重量轻、耐腐蚀、价格合理，有多种颜色可选，通常可以在现场定制尺寸。",
    category: "roofing",
  },
  {
    id: 213,
    question:
      "What is the recommended minimum downspout extension distance from the foundation?",
    options: [
      "Flush with the foundation",
      "At least 4-6 feet away from the foundation",
      "1 inch from the foundation",
      "Downspouts should drain into the foundation",
    ],
    correctAnswer: 1,
    explanation:
      "落水管延伸至少应距离基础4-6英尺。将屋顶水引离基础有助于防止地下室渗水、基础损坏和土壤侵蚀等问题。",
    category: "roofing",
  },
  {
    id: 214,
    question:
      "What type of roof has a slope of less than 2:12?",
    options: [
      "Steep slope roof",
      "Low slope or flat roof",
      "Mansard roof",
      "Gambrel roof",
    ],
    correctAnswer: 1,
    explanation:
      "坡度小于2:12的屋顶被称为低坡度或平屋顶。这类屋顶需要特殊的防水系统，如建筑卷材（built-up roofing）、改性沥青或单层膜，不能使用标准沥青瓦。",
    category: "roofing",
  },
  {
    id: 215,
    question:
      "What is a common roofing material used on flat or low-slope roofs?",
    options: [
      "Wood shakes",
      "3-tab asphalt shingles",
      "TPO or EPDM membrane",
      "Clay tiles",
    ],
    correctAnswer: 2,
    explanation:
      "TPO（热塑性聚烯烃）或EPDM（三元乙丙橡胶）膜是平屋顶或低坡度屋顶常用的材料。这些单层膜防水性能优异，适合不能使用传统瓦片的低坡度应用。",
    category: "roofing",
  },
  {
    id: 216,
    question:
      "What is step flashing used for?",
    options: [
      "Flashing around plumbing vents",
      "Flashing where a roof plane meets a vertical wall",
      "Flashing at the ridge of the roof",
      "Flashing around skylights only",
    ],
    correctAnswer: 1,
    explanation:
      "阶梯泛水（step flashing）用于屋顶面与垂直墙壁交接处的防水。它由一系列L形金属片组成，每片与一排瓦片交叠安装，形成阶梯状防水层。",
    category: "roofing",
  },
  {
    id: 217,
    question:
      "What is the primary concern with multiple layers of roofing shingles?",
    options: [
      "The roof looks better with more layers",
      "Additional weight, hidden damage, and reduced shingle life",
      "It makes the house cooler",
      "It improves fire resistance",
    ],
    correctAnswer: 1,
    explanation:
      "多层屋顶瓦片的主要问题是增加屋顶重量、可能隐藏下层损坏，以及缩短新瓦片寿命（因为热量积聚）。大多数建筑规范限制最多两层沥青瓦。",
    category: "roofing",
  },
  {
    id: 218,
    question:
      "What type of roofing material is known for the longest lifespan?",
    options: [
      "Asphalt shingles",
      "Wood shakes",
      "Slate",
      "Roll roofing",
    ],
    correctAnswer: 2,
    explanation:
      "板岩（slate）屋顶以最长的使用寿命著称，优质板岩屋顶可以持续75-200年。然而，它非常重且昂贵，需要专业的安装和结构支撑。",
    category: "roofing",
  },
  {
    id: 219,
    question:
      "When inspecting a roof, what does 'ponding water' on a flat roof indicate?",
    options: [
      "The roof is functioning properly",
      "Inadequate drainage or structural deflection",
      "The roof was recently cleaned",
      "Normal condensation",
    ],
    correctAnswer: 1,
    explanation:
      "平屋顶上的积水（ponding water）表明排水不足或结构下沉。积水会加速屋顶材料的劣化，增加荷载，并可能导致漏水。积水超过48小时应被记录为缺陷。",
    category: "roofing",
  },
  {
    id: 220,
    question:
      "What is the purpose of a roof boot or pipe collar?",
    options: [
      "To support the chimney",
      "To seal the opening where a plumbing vent pipe penetrates the roof",
      "To ventilate the attic",
      "To hold gutters in place",
    ],
    correctAnswer: 1,
    explanation:
      "屋顶管道套（roof boot/pipe collar）用于密封水管通风管穿透屋顶处的开口。它们通常由橡胶或金属制成，随时间老化开裂是常见的漏水原因。",
    category: "roofing",
  },
  {
    id: 221,
    question:
      "What is a hip roof?",
    options: [
      "A roof with only two sloping sides",
      "A roof where all sides slope downward to the walls",
      "A flat roof with a slight pitch",
      "A roof with a single slope",
    ],
    correctAnswer: 1,
    explanation:
      "四坡屋顶（hip roof）的所有面都向下倾斜到墙壁。这种屋顶设计比山墙屋顶更能抵抗强风，因为没有垂直的山墙端墙来承受风力。",
    category: "roofing",
  },
  {
    id: 222,
    question:
      "What is the most common cause of roof leaks?",
    options: [
      "Defective shingles from the factory",
      "Damaged or deteriorated flashing",
      "The roof color fading",
      "Having too many vents",
    ],
    correctAnswer: 1,
    explanation:
      "屋顶漏水最常见的原因是泛水损坏或劣化。泛水安装在屋顶最易受水侵害的区域，如烟囱周围、墙壁交接处和管道穿透处，这些部位的泛水失效最容易导致漏水。",
    category: "roofing",
  },
  {
    id: 223,
    question:
      "What is the purpose of an attic ventilation system?",
    options: [
      "To heat the attic in winter",
      "To remove excess heat and moisture from the attic space",
      "To provide living space ventilation",
      "To support the roof structure",
    ],
    correctAnswer: 1,
    explanation:
      "阁楼通风系统的目的是排出阁楼空间多余的热量和湿气。适当的通风可以延长屋顶材料寿命、防止冰坝形成、减少湿气造成的木材腐烂和霉菌生长。",
    category: "roofing",
  },
  {
    id: 224,
    question:
      "What is the general rule for balanced attic ventilation?",
    options: [
      "All exhaust vents, no intake vents",
      "Equal amounts of intake ventilation at the soffits and exhaust ventilation at or near the ridge",
      "Only roof turbines are needed",
      "Ventilation is not necessary in California",
    ],
    correctAnswer: 1,
    explanation:
      "平衡阁楼通风的一般规则是在檐口处的进气量与在脊部或附近的排气量相等。这样可以形成自然对流，热空气从上方排出，新鲜空气从下方进入。",
    category: "roofing",
  },
  {
    id: 225,
    question:
      "What type of damage should an inspector look for on metal roofing?",
    options: [
      "Granule loss",
      "Rust, loose fasteners, and damaged seams",
      "Curling and cupping",
      "Moss growth between tabs",
    ],
    correctAnswer: 1,
    explanation:
      "检查金属屋顶时应注意锈蚀、松动的紧固件和受损的接缝。这些问题会导致漏水和结构劣化。还应检查涂层脱落和面板之间的密封剂状况。",
    category: "roofing",
  },
  {
    id: 226,
    question:
      "What is the recommended ratio of attic ventilation to attic floor area?",
    options: [
      "1:50",
      "1:150",
      "1:500",
      "1:1000",
    ],
    correctAnswer: 1,
    explanation:
      "阁楼通风与阁楼地板面积的推荐比率为1:150，即每150平方英尺阁楼地板面积需要1平方英尺的净自由通风面积。如果有蒸汽屏障，某些规范允许1:300。",
    category: "roofing",
  },
  {
    id: 227,
    question:
      "What is a gable vent?",
    options: [
      "A vent installed on the ridge",
      "A vent installed on the triangular wall section at the end of a gable roof",
      "A vent installed in the soffit",
      "A vent installed in the floor",
    ],
    correctAnswer: 1,
    explanation:
      "山墙通风口安装在山墙屋顶端部的三角形墙面上。它允许空气在阁楼中横向流通，但效果不如脊通风口和檐口通风口的组合，因为它依赖风力驱动。",
    category: "roofing",
  },
  {
    id: 228,
    question:
      "What is the typical life expectancy of a concrete tile roof?",
    options: [
      "10-15 years",
      "20-25 years",
      "40-50 years or more",
      "100+ years",
    ],
    correctAnswer: 2,
    explanation:
      "混凝土瓦屋顶的典型使用寿命为40-50年或更长。在加州等温暖干燥的气候中，混凝土瓦是很受欢迎的选择，它们耐火、耐用，但重量较大，需要足够的结构支撑。",
    category: "roofing",
  },
  {
    id: 229,
    question:
      "What should an inspector check at the chimney-to-roof intersection?",
    options: [
      "Whether the chimney matches the house color",
      "Condition of counter-flashing and step flashing for water tightness",
      "The height of the chimney cap",
      "Whether there is a TV antenna nearby",
    ],
    correctAnswer: 1,
    explanation:
      "在烟囱与屋顶交接处，检查员应检查反泛水（counter-flashing）和阶梯泛水（step flashing）的状况以确保防水性。这是最常见的屋顶漏水区域之一。",
    category: "roofing",
  },
  {
    id: 230,
    question:
      "What is a roof cricket (or saddle)?",
    options: [
      "An insect found on roofs",
      "A peaked structure built behind a chimney to divert water around it",
      "A type of roofing nail",
      "A tool used to install shingles",
    ],
    correctAnswer: 1,
    explanation:
      "屋顶蟋蟀（cricket/saddle）是在烟囱背面建造的尖顶结构，用于将水流引导绕过烟囱。当烟囱宽度超过30英寸时，通常需要安装cricket以防止水和碎物在烟囱后方积聚。",
    category: "roofing",
  },
  {
    id: 231,
    question:
      "What is the purpose of a roof's plumbing vent stack?",
    options: [
      "To drain rainwater from the roof",
      "To allow air into the plumbing drain system for proper drainage",
      "To ventilate the attic",
      "To serve as a chimney for the furnace",
    ],
    correctAnswer: 1,
    explanation:
      "屋顶上的管道通风管（vent stack）的目的是向排水系统引入空气，使排水管道能够正常排水。没有通风，排水会产生虹吸效应，将存水弯中的水抽走，导致下水道气体进入室内。",
    category: "roofing",
  },
  {
    id: 232,
    question:
      "What condition indicates that gutters need to be replaced rather than repaired?",
    options: [
      "Minor debris buildup",
      "Extensive rust, multiple leaking seams, and sections pulling away from the fascia",
      "A single loose bracket",
      "Leaves in the gutter",
    ],
    correctAnswer: 1,
    explanation:
      "广泛的锈蚀、多处接缝漏水和部分脱离封檐板表明排水槽需要更换而非维修。局部问题通常可以修补，但系统性劣化需要更换整个排水槽。",
    category: "roofing",
  },
  {
    id: 233,
    question:
      "What is a built-up roof (BUR)?",
    options: [
      "A roof with extra-thick shingles",
      "A flat roof system made of alternating layers of bitumen and reinforcing fabrics",
      "A roof built higher than normal",
      "A temporary roof covering",
    ],
    correctAnswer: 1,
    explanation:
      "建筑卷材屋顶（BUR）是由交替的沥青层和增强织物层组成的平屋顶系统。通常有3-5层，顶部覆盖砾石或矿物面层，是传统的平屋顶防水方法。",
    category: "roofing",
  },
  {
    id: 234,
    question:
      "What is the minimum height a plumbing vent must extend above the roof surface?",
    options: [
      "Flush with the roof",
      "At least 6 inches above the roof surface",
      "At least 3 feet",
      "At least 5 feet",
    ],
    correctAnswer: 1,
    explanation:
      "管道通风管必须至少延伸到屋顶表面上方6英寸。这确保了通风管不会被积雪或碎物堵塞，并且能够正常发挥通风功能。",
    category: "roofing",
  },
  {
    id: 235,
    question:
      "What is the primary benefit of architectural (dimensional) shingles over 3-tab shingles?",
    options: [
      "They are cheaper",
      "They have a thicker profile, longer warranty, and better wind resistance",
      "They weigh less",
      "They require no underlayment",
    ],
    correctAnswer: 1,
    explanation:
      "建筑级（dimensional）沥青瓦比三片式瓦更厚、保修期更长、抗风性更好。它们的多层设计提供更立体的外观，使用寿命通常为25-30年，高端产品可达50年。",
    category: "roofing",
  },
  {
    id: 236,
    question:
      "What should gutters do with collected rainwater?",
    options: [
      "Allow it to overflow onto the foundation",
      "Direct it through downspouts away from the foundation",
      "Store it on the roof",
      "Drain it into the attic",
    ],
    correctAnswer: 1,
    explanation:
      "排水槽应通过落水管将收集的雨水引导远离基础。适当的排水可以防止基础损坏、地下室渗水、土壤侵蚀和景观损坏。",
    category: "roofing",
  },
  {
    id: 237,
    question:
      "What is a common sign of a roof leak when inspecting from the attic?",
    options: [
      "Clean, bright wood",
      "Water stains, mold, or daylight visible through the roof deck",
      "Neatly arranged insulation",
      "Dust on the rafters",
    ],
    correctAnswer: 1,
    explanation:
      "从阁楼内部检查时，屋顶漏水的常见迹象包括水渍、霉菌或透过屋顶板可见的日光。还应注意木材变色、腐烂的迹象和潮湿的隔热材料。",
    category: "roofing",
  },
  {
    id: 238,
    question:
      "What type of metal is most commonly used for roof flashing?",
    options: [
      "Gold",
      "Galvanized steel or aluminum",
      "Cast iron",
      "Titanium",
    ],
    correctAnswer: 1,
    explanation:
      "镀锌钢或铝是最常用的屋顶泛水材料。它们耐腐蚀、易于成形、价格合理。铜也用于高端应用，但成本更高。",
    category: "roofing",
  },
  {
    id: 239,
    question:
      "What is the purpose of a gutter splash guard?",
    options: [
      "To prevent leaves from entering the gutter",
      "To prevent water from overshooting the gutter at valleys or corners",
      "To add color to the gutter",
      "To connect two gutter sections",
    ],
    correctAnswer: 1,
    explanation:
      "排水槽挡水板（splash guard）防止水在谷部或转角处溢出排水槽。在这些位置，水流量大且速度快，容易超过排水槽边缘，挡水板可以防止这种情况。",
    category: "roofing",
  },
  {
    id: 240,
    question:
      "What is a roof's 'pitch' expressed as?",
    options: [
      "Degrees of angle only",
      "A ratio of vertical rise to 12 inches of horizontal run",
      "Total square footage",
      "The weight of the roofing material",
    ],
    correctAnswer: 1,
    explanation:
      "屋顶坡度（pitch）表示为垂直上升高度与12英寸水平距离的比率。例如，6:12的坡度意味着每12英寸水平距离上升6英寸。这是美国建筑行业的标准表示方式。",
    category: "roofing",
  },
  {
    id: 241,
    question:
      "What type of roof is most resistant to fire?",
    options: [
      "Wood shake roof",
      "Class A rated metal, tile, or asphalt roof",
      "Thatched roof",
      "Roll roofing",
    ],
    correctAnswer: 1,
    explanation:
      "A级防火等级的金属、瓦片或沥青屋顶最耐火。在加州野火多发地区，建筑规范通常要求使用A级防火屋顶材料来保护住宅。",
    category: "roofing",
  },
  {
    id: 242,
    question:
      "What is the recommended slope for gutters to ensure proper drainage?",
    options: [
      "Completely level",
      "1/4 inch drop per 10 feet of gutter toward the downspout",
      "2 inches per foot",
      "Slope away from the downspout",
    ],
    correctAnswer: 1,
    explanation:
      "排水槽应以每10英尺向落水管方向下降1/4英寸的坡度安装。这个轻微的坡度确保水流向落水管而不会在排水槽中积聚，同时在视觉上几乎看不出来。",
    category: "roofing",
  },
  {
    id: 243,
    question:
      "What does 'wind-driven rain' mean in the context of a roof inspection?",
    options: [
      "Rain that falls straight down",
      "Rain driven horizontally by wind that can penetrate under shingles or through gaps",
      "A type of roofing material",
      "A cleaning method for roofs",
    ],
    correctAnswer: 1,
    explanation:
      "风驱雨是指被风水平驱动的雨水，可以渗入瓦片下方或通过缝隙进入。这对屋顶防水提出了更高的要求，特别是在泛水、通风口和屋脊处。",
    category: "roofing",
  },
  {
    id: 244,
    question:
      "What is a powered attic ventilator (PAV)?",
    options: [
      "A solar panel on the roof",
      "An electric or solar-powered fan installed on the roof or gable to exhaust attic air",
      "A hand-cranked roof vent",
      "A vent that opens automatically with heat",
    ],
    correctAnswer: 1,
    explanation:
      "动力阁楼通风器（PAV）是安装在屋顶或山墙上的电动或太阳能风扇，用于主动排出阁楼热空气。虽然有效，但如果阁楼密封不良，可能会将室内调节后的空气抽入阁楼。",
    category: "roofing",
  },
  {
    id: 245,
    question:
      "What roofing problem is indicated by sagging between the rafters when viewed from the ground?",
    options: [
      "Normal roof aging",
      "Possible structural issues with the roof sheathing or rafters",
      "The roof was recently repaired",
      "Too many solar panels",
    ],
    correctAnswer: 1,
    explanation:
      "从地面观察到椽子之间的下垂表明屋顶板材或椽子可能存在结构问题。这可能由水损坏、腐烂、材料不足或超载（如多层瓦片）引起，需要进一步评估。",
    category: "roofing",
  },
  {
    id: 246,
    question:
      "What is the purpose of a kickout flashing (diverter)?",
    options: [
      "To kick debris off the roof",
      "To direct water from the roof-to-wall intersection into the gutter",
      "To improve roof appearance",
      "To support the gutter bracket",
    ],
    correctAnswer: 1,
    explanation:
      "导流泛水（kickout flashing）安装在屋顶与墙壁交接处的底端，将水从屋顶引导进入排水槽而非沿墙壁流下。缺少导流泛水是导致墙壁水渍和结构损坏的常见原因。",
    category: "roofing",
  },
  {
    id: 247,
    question:
      "When is it acceptable to walk on a tile roof during an inspection?",
    options: [
      "Always - tiles are very strong",
      "Generally it should be avoided as tiles can crack under foot traffic",
      "Only on rainy days",
      "Only if wearing steel-toed boots",
    ],
    correctAnswer: 1,
    explanation:
      "通常应避免在瓦片屋顶上行走，因为瓦片在踩踏下容易破裂。检查员应使用梯子从屋檐边缘检查，或使用望远镜和无人机等工具进行远程检查。",
    category: "roofing",
  },
  {
    id: 248,
    question:
      "What is the purpose of ice and water shield membrane?",
    options: [
      "To replace shingles",
      "A self-adhering waterproof membrane applied to vulnerable roof areas like valleys and eaves",
      "To add insulation to the roof",
      "To protect the roof from UV rays",
    ],
    correctAnswer: 1,
    explanation:
      "冰水盾膜是一种自粘防水膜，应用于屋顶脆弱区域如谷部、屋檐和穿透处。它能在钉子穿透处自密封，提供额外的防水保护，特别是在冰坝风险区域。",
    category: "roofing",
  },
  {
    id: 249,
    question:
      "What is a common issue with roof-mounted satellite dishes or antennas?",
    options: [
      "They improve roof ventilation",
      "Mounting brackets can create penetrations that leak if not properly sealed",
      "They add significant structural support",
      "They reduce wind damage",
    ],
    correctAnswer: 1,
    explanation:
      "屋顶安装的卫星天线的常见问题是安装支架会在屋顶上创建穿透点，如果密封不当会导致漏水。检查员应检查安装处周围的密封剂和泛水状况。",
    category: "roofing",
  },
  {
    id: 250,
    question:
      "What is a mansard roof?",
    options: [
      "A completely flat roof",
      "A four-sided roof with two slopes on each side, the lower slope steeper than the upper",
      "A single-slope roof",
      "A dome-shaped roof",
    ],
    correctAnswer: 1,
    explanation:
      "曼萨尔屋顶是一种四面屋顶，每面有两个坡度，下坡比上坡更陡。这种设计可以最大化阁楼空间的使用，但下坡的陡峭部分难以检查且容易积聚水分。",
    category: "roofing",
  },

  // ========== Exterior (251-300) ==========
  {
    id: 251,
    question:
      "What is the recommended grading slope away from a home's foundation?",
    options: [
      "Flat or sloping toward the foundation",
      "At least 6 inches of fall in the first 10 feet away from the foundation",
      "1 inch per 100 feet",
      "Grading does not matter",
    ],
    correctAnswer: 1,
    explanation:
      "建议地面在距基础的前10英尺内至少下降6英寸。适当的坡度将水引导远离基础，防止地下室渗水、基础损坏和土壤侵蚀。",
    category: "exterior",
  },
  {
    id: 252,
    question:
      "What is the minimum clearance between wood siding and the ground?",
    options: [
      "No clearance needed",
      "At least 6 inches",
      "At least 3 feet",
      "1/4 inch",
    ],
    correctAnswer: 1,
    explanation:
      "木质壁板与地面之间至少应保持6英寸的间距。这防止木材因接触土壤和水分而腐烂，也减少白蚁从地面进入木材的风险。",
    category: "exterior",
  },
  {
    id: 253,
    question:
      "What is a common problem with stucco exteriors?",
    options: [
      "It is too flexible",
      "Cracking, which can allow moisture intrusion",
      "It is not available in California",
      "It is too lightweight",
    ],
    correctAnswer: 1,
    explanation:
      "灰泥（stucco）外墙的常见问题是开裂，裂缝会允许水分渗入墙体内部。裂缝可能由沉降、地震、热胀冷缩或安装不当引起，需要及时密封修补。",
    category: "exterior",
  },
  {
    id: 254,
    question:
      "What is fiber cement siding?",
    options: [
      "Pure concrete panels",
      "A composite material made of cement, sand, and cellulose fibers",
      "A type of vinyl siding",
      "Natural stone cladding",
    ],
    correctAnswer: 1,
    explanation:
      "纤维水泥壁板是由水泥、沙子和纤维素纤维制成的复合材料。它耐火、抗虫、抗腐烂，外观可以模仿木材，使用寿命长达30-50年。品牌如HardiePlank广泛使用。",
    category: "exterior",
  },
  {
    id: 255,
    question:
      "What is the main concern with vinyl siding?",
    options: [
      "It is too expensive",
      "It can melt, warp, or crack, and may hide moisture problems behind it",
      "It is fireproof",
      "It requires painting every year",
    ],
    correctAnswer: 1,
    explanation:
      "乙烯基壁板（vinyl siding）的主要问题是它可能融化、变形或开裂，而且可能掩盖其后方的水分问题。因为它是安装在原有墙面上的，水分损害可能在不可见处发展。",
    category: "exterior",
  },
  {
    id: 256,
    question:
      "What is the purpose of weep holes in a brick veneer wall?",
    options: [
      "To allow insects to enter the wall",
      "To allow moisture to drain from behind the brick veneer",
      "To reduce the weight of the wall",
      "To improve the wall's appearance",
    ],
    correctAnswer: 1,
    explanation:
      "砖贴面墙上的排水孔（weep holes）允许积聚在砖后面的水分排出。它们通常位于砖墙底部每隔几英尺处，不应被堵塞或封闭。",
    category: "exterior",
  },
  {
    id: 257,
    question:
      "What should an inspector check on an exterior deck?",
    options: [
      "Only the color of the stain",
      "Structural connections, ledger board attachment, railing height, and wood condition",
      "Whether it matches the house style",
      "Only the size of the deck",
    ],
    correctAnswer: 1,
    explanation:
      "检查外部甲板时应检查结构连接、靠墙板（ledger board）固定方式、栏杆高度（通常要求36-42英寸）以及木材状况（腐烂、虫蛀）。甲板倒塌是常见的安全事故。",
    category: "exterior",
  },
  {
    id: 258,
    question:
      "What is a ledger board on a deck?",
    options: [
      "The railing on top of the deck",
      "The board that attaches the deck structure to the house",
      "A decorative trim board",
      "The top surface board of the deck",
    ],
    correctAnswer: 1,
    explanation:
      "靠墙板（ledger board）是将甲板结构连接到房屋的板材。它必须用滞后螺栓或穿透螺栓正确固定，并有适当的泛水防止水渗入房屋。靠墙板连接失败是甲板倒塌的首要原因。",
    category: "exterior",
  },
  {
    id: 259,
    question:
      "What is the minimum required height for a deck railing in most jurisdictions?",
    options: [
      "12 inches",
      "24 inches",
      "36 inches",
      "48 inches",
    ],
    correctAnswer: 2,
    explanation:
      "大多数辖区要求住宅甲板栏杆最低高度为36英寸（距甲板面30英寸以上时需要栏杆）。某些地区和商业建筑可能要求42英寸。栏杆间距不应超过4英寸。",
    category: "exterior",
  },
  {
    id: 260,
    question:
      "What is the purpose of caulking around exterior windows and doors?",
    options: [
      "To improve the appearance only",
      "To create a weather-tight seal preventing air and water infiltration",
      "To hold the window in place structurally",
      "To match the house color",
    ],
    correctAnswer: 1,
    explanation:
      "外墙窗户和门周围的密封胶（caulking）用于创建防风雨密封，防止空气和水渗入。老化、开裂或缺失的密封胶会导致能源损失、水损坏和虫害进入。",
    category: "exterior",
  },
  {
    id: 261,
    question:
      "What is the fascia board?",
    options: [
      "The horizontal board at the bottom of the wall",
      "The board attached to the ends of the rafters at the eaves, to which gutters are mounted",
      "A board inside the attic",
      "The threshold of a door",
    ],
    correctAnswer: 1,
    explanation:
      "封檐板（fascia）是连接在屋檐处椽子末端的板材，排水槽通常安装在其上。它保护椽子末端免受天气侵害。检查员应检查腐烂、油漆剥落和损坏。",
    category: "exterior",
  },
  {
    id: 262,
    question:
      "What is a soffit on the exterior of a house?",
    options: [
      "The peak of the roof",
      "The underside of the roof overhang",
      "The front porch railing",
      "The chimney cap",
    ],
    correctAnswer: 1,
    explanation:
      "檐底板（soffit）是屋顶悬挑部分的底面。它封闭屋檐下方的空间，保护椽子免受天气侵害。带孔的檐底板同时起到阁楼通风的作用。",
    category: "exterior",
  },
  {
    id: 263,
    question:
      "What is the primary purpose of a retaining wall?",
    options: [
      "To decorate the yard",
      "To hold back soil and prevent erosion on sloped terrain",
      "To provide privacy",
      "To block noise",
    ],
    correctAnswer: 1,
    explanation:
      "挡土墙的主要目的是在斜坡地形上挡住土壤并防止侵蚀。检查员应注意倾斜、开裂、凸出和排水不足等问题，这些可能表明墙壁正在失效。",
    category: "exterior",
  },
  {
    id: 264,
    question:
      "What is efflorescence on a brick or concrete surface?",
    options: [
      "A type of paint",
      "White crystalline deposits caused by water bringing salts to the surface",
      "Mold growth",
      "A decorative finish",
    ],
    correctAnswer: 1,
    explanation:
      "泛白（efflorescence）是水将砖或混凝土中的盐分带到表面形成的白色结晶沉积物。虽然本身无害，但它表明有水分通过材料渗透，可能暗示排水或防潮问题。",
    category: "exterior",
  },
  {
    id: 265,
    question:
      "What should an inspector note about a driveway during an exterior inspection?",
    options: [
      "The color of the driveway",
      "Significant cracks, heaving, settlement, and drainage issues",
      "The brand of asphalt used",
      "Whether cars are parked on it",
    ],
    correctAnswer: 1,
    explanation:
      "检查车道时应注意明显的裂缝、隆起、沉降和排水问题。车道应向远离房屋的方向倾斜以排水，严重的裂缝可能构成绊倒危险或表明土壤问题。",
    category: "exterior",
  },
  {
    id: 266,
    question:
      "What is the purpose of window flashing?",
    options: [
      "To make the window more visible at night",
      "To prevent water from entering the wall around the window frame",
      "To hold the glass in place",
      "To improve window insulation",
    ],
    correctAnswer: 1,
    explanation:
      "窗户泛水的目的是防止水沿窗框周围渗入墙体。正确的泛水安装包括顶部滴水帽和侧面泛水，将水引导到壁板外表面。",
    category: "exterior",
  },
  {
    id: 267,
    question:
      "What type of window is known for being energy efficient with two panes of glass?",
    options: [
      "Single-pane window",
      "Double-pane (insulated) window",
      "Stained glass window",
      "Jalousie window",
    ],
    correctAnswer: 1,
    explanation:
      "双层玻璃（中空）窗户因其两层玻璃之间的空气或气体层而具有良好的节能性能。这个隔热层减少了热传递，降低了能源成本。密封失败时两层玻璃间会出现雾气。",
    category: "exterior",
  },
  {
    id: 268,
    question:
      "What does a failed seal in a double-pane window look like?",
    options: [
      "The glass is perfectly clear",
      "Fogging or condensation between the two panes of glass",
      "The frame is cracked",
      "The window won't open",
    ],
    correctAnswer: 1,
    explanation:
      "双层玻璃窗密封失败时，两层玻璃之间会出现雾气或冷凝。这表示惰性气体已泄漏，隔热性能下降。虽然不影响结构，但降低了窗户的节能性能。",
    category: "exterior",
  },
  {
    id: 269,
    question:
      "What is the minimum height for a porch railing when the porch is more than 30 inches above grade?",
    options: [
      "24 inches",
      "30 inches",
      "36 inches",
      "48 inches",
    ],
    correctAnswer: 2,
    explanation:
      "当门廊距地面超过30英寸时，栏杆最低高度要求为36英寸。这是为了防止跌落事故，栏杆间距不应超过4英寸以防止儿童穿过。",
    category: "exterior",
  },
  {
    id: 270,
    question:
      "What is the purpose of a house wrap like Tyvek?",
    options: [
      "To replace siding",
      "To act as a weather-resistant barrier that blocks water but allows moisture vapor to escape",
      "To provide structural support",
      "To add insulation value",
    ],
    correctAnswer: 1,
    explanation:
      "房屋包裹材料（如Tyvek）作为防风雨屏障，阻挡液态水渗入但允许水蒸气向外排出。它安装在壁板下方、墙体外侧，有助于防止墙体内部水分积聚和霉菌生长。",
    category: "exterior",
  },
  {
    id: 271,
    question:
      "What is spalling in concrete or brick?",
    options: [
      "A type of decorative finish",
      "Surface flaking, peeling, or chipping caused by freeze-thaw cycles or moisture",
      "A method of cleaning masonry",
      "A type of mortar joint",
    ],
    correctAnswer: 1,
    explanation:
      "剥落（spalling）是混凝土或砖表面因冻融循环或水分渗透导致的剥皮、起片或碎裂现象。在寒冷气候中尤为常见，持续恶化可能导致结构损坏。",
    category: "exterior",
  },
  {
    id: 272,
    question:
      "What should an inspector check about exterior stairs?",
    options: [
      "The color of the paint",
      "Uniform riser height, tread depth, handrail presence, and structural condition",
      "Whether they are carpet covered",
      "Only the number of steps",
    ],
    correctAnswer: 1,
    explanation:
      "检查外部楼梯时应检查踏步高度一致性、踏板深度、扶手是否存在以及结构状况。不均匀的台阶高度是常见的绊倒危险，缺少扶手则是安全隐患。",
    category: "exterior",
  },
  {
    id: 273,
    question:
      "What is the purpose of a window well around a basement window?",
    options: [
      "To decorate the foundation",
      "To keep soil away from the window and allow light and emergency egress",
      "To collect rainwater",
      "To hide the foundation",
    ],
    correctAnswer: 1,
    explanation:
      "窗井（window well）的目的是将土壤远离地下室窗户，允许光线进入并提供紧急逃生通道。窗井应有排水系统，防止水积聚在窗户边。",
    category: "exterior",
  },
  {
    id: 274,
    question:
      "What does 'negative grading' mean near a foundation?",
    options: [
      "The soil slopes away from the foundation",
      "The soil slopes toward the foundation, directing water toward it",
      "The soil is perfectly level",
      "The soil has been recently landscaped",
    ],
    correctAnswer: 1,
    explanation:
      "负坡度是指土壤向基础方向倾斜，将水引向基础。这是一个严重的排水问题，会导致地下室渗水、基础损坏和结构问题，应建议纠正坡度。",
    category: "exterior",
  },
  {
    id: 275,
    question:
      "What material is commonly used for modern exterior trim?",
    options: [
      "Only natural wood",
      "PVC, composite, or fiber cement trim",
      "Cardboard",
      "Drywall",
    ],
    correctAnswer: 1,
    explanation:
      "现代外部装饰材料通常使用PVC、复合材料或纤维水泥。这些材料不腐烂、不被虫蛀，维护需求低，使用寿命长于传统木材装饰。",
    category: "exterior",
  },
  {
    id: 276,
    question:
      "What is a French drain?",
    options: [
      "A decorative water fountain",
      "A gravel-filled trench with a perforated pipe to redirect water away from a structure",
      "A kitchen sink drain",
      "A type of gutter",
    ],
    correctAnswer: 1,
    explanation:
      "法式排水沟是一种填满砾石、内置穿孔管的沟渠，用于将地下水和地表水引导远离建筑结构。它常用于解决基础周围的排水问题和院子积水。",
    category: "exterior",
  },
  {
    id: 277,
    question:
      "What is the concern with tree branches touching or overhanging the roof?",
    options: [
      "They provide beneficial shade",
      "They can damage roofing, clog gutters, and provide pest access to the house",
      "They improve curb appeal",
      "They have no effect on the house",
    ],
    correctAnswer: 1,
    explanation:
      "接触或悬挂在屋顶上方的树枝可能损坏屋顶材料、堵塞排水槽，并为害虫（如松鼠和浣熊）提供进入房屋的通道。建议修剪使树枝距屋顶至少6英尺。",
    category: "exterior",
  },
  {
    id: 278,
    question:
      "What is an expansion joint in concrete?",
    options: [
      "A crack that needs repair",
      "A pre-planned gap that allows concrete to expand and contract with temperature changes",
      "A joint where two walls meet",
      "A decorative line in the concrete",
    ],
    correctAnswer: 1,
    explanation:
      "混凝土伸缩缝是预先设计的间隙，允许混凝土随温度变化而膨胀和收缩而不会开裂。这些接缝应填充有弹性的密封材料以防止水渗入。",
    category: "exterior",
  },
  {
    id: 279,
    question:
      "What type of exterior door is most energy efficient?",
    options: [
      "Single-pane glass door",
      "Insulated fiberglass or steel door with weatherstripping",
      "Hollow-core wood door",
      "Screen door",
    ],
    correctAnswer: 1,
    explanation:
      "带密封条的隔热玻璃纤维或钢质门是最节能的外门选择。它们的填充隔热材料减少热传递，密封条防止空气泄漏，比空心木门或单层玻璃门能效高得多。",
    category: "exterior",
  },
  {
    id: 280,
    question:
      "What is the primary concern with earth-to-wood contact on the exterior of a home?",
    options: [
      "It looks unattractive",
      "It promotes moisture damage and termite infestation",
      "It reduces home value",
      "It blocks sunlight",
    ],
    correctAnswer: 1,
    explanation:
      "木材与土壤接触的主要问题是会促进水分损害和白蚁侵入。土壤中的水分会使木材腐烂，而白蚁可以直接从土壤进入木材，无需建造明显的蚁道。",
    category: "exterior",
  },
  {
    id: 281,
    question:
      "What should be checked on exterior hose bibs (outdoor faucets)?",
    options: [
      "Their color",
      "Leaks, proper operation, and presence of anti-siphon (backflow prevention) devices",
      "Their brand name",
      "Whether they are connected to a hose",
    ],
    correctAnswer: 1,
    explanation:
      "检查室外水龙头时应检查是否漏水、操作是否正常，以及是否安装了防虹吸（回流防止）装置。防虹吸装置防止室外污染水回流进入室内饮用水系统。",
    category: "exterior",
  },
  {
    id: 282,
    question:
      "What is the purpose of a vapor barrier on the ground in a crawl space?",
    options: [
      "To insulate the floor above",
      "To reduce ground moisture from evaporating into the crawl space",
      "To prevent pests from entering",
      "To provide a walking surface",
    ],
    correctAnswer: 1,
    explanation:
      "爬行空间地面的蒸汽屏障（通常为6密耳聚乙烯薄膜）减少地面水分蒸发进入爬行空间。过多的湿气会导致木结构腐烂、霉菌生长和隔热材料劣化。",
    category: "exterior",
  },
  {
    id: 283,
    question:
      "What is tuckpointing?",
    options: [
      "A method of cleaning siding",
      "Repairing deteriorated mortar joints in brick or stone walls",
      "Installing new windows",
      "Painting the trim",
    ],
    correctAnswer: 1,
    explanation:
      "勾缝修补（tuckpointing）是修复砖石墙中劣化灰浆接缝的工艺。旧的松散灰浆被清除后，填入新灰浆以恢复墙体的防水性和结构完整性。",
    category: "exterior",
  },
  {
    id: 284,
    question:
      "What is a common defect found at garage door openings?",
    options: [
      "The door is too colorful",
      "Gaps between the door and frame allowing water, air, and pest entry",
      "The door opens too quickly",
      "The door has windows",
    ],
    correctAnswer: 1,
    explanation:
      "车库门开口处的常见缺陷是门与门框之间的间隙，允许水、空气和害虫进入。底部密封条磨损和侧面密封不良是最常见的问题，应建议更换。",
    category: "exterior",
  },
  {
    id: 285,
    question:
      "What is an EIFS (Exterior Insulation and Finish System)?",
    options: [
      "A type of metal siding",
      "A multi-layered exterior wall system that provides insulation and a stucco-like finish",
      "A type of window",
      "An interior wall treatment",
    ],
    correctAnswer: 1,
    explanation:
      "EIFS是一种多层外墙系统，提供隔热和类似灰泥的饰面。它由泡沫保温板、基涂层、玻璃纤维网和面涂层组成。早期版本容易出现水分滞留问题。",
    category: "exterior",
  },
  {
    id: 286,
    question:
      "What is the purpose of a splash block at the base of a downspout?",
    options: [
      "To collect water for plants",
      "To redirect water away from the foundation and prevent soil erosion",
      "To hold the downspout in place",
      "To filter debris from the water",
    ],
    correctAnswer: 1,
    explanation:
      "落水管底部的溅水块用于将水从基础引开并防止土壤侵蚀。它们应正确放置，使水流向远离房屋的方向，而不是朝向基础或邻居的财产。",
    category: "exterior",
  },
  {
    id: 287,
    question:
      "What should an inspector check about the condition of exterior paint?",
    options: [
      "Whether the color matches current trends",
      "Peeling, blistering, chalking, and bare wood exposure",
      "The brand of paint used",
      "How recently it was painted",
    ],
    correctAnswer: 1,
    explanation:
      "检查外部油漆状况时应注意剥落、起泡、粉化和裸露木材。劣化的油漆无法保护下面的材料免受水分侵害，可能导致木材腐烂和结构损坏。",
    category: "exterior",
  },
  {
    id: 288,
    question:
      "What is the concern with improper deck post footings?",
    options: [
      "The deck will be the wrong color",
      "The deck may shift, settle, or collapse without adequate footings",
      "The deck will be too high",
      "There are no concerns",
    ],
    correctAnswer: 1,
    explanation:
      "不当的甲板柱基础可能导致甲板移位、沉降或倒塌。柱子应支撑在低于霜冻线的混凝土基础上，而不是直接放在地面或浅层土壤上。",
    category: "exterior",
  },
  {
    id: 289,
    question:
      "What is the typical maximum spacing for deck railing balusters?",
    options: [
      "6 inches",
      "4 inches",
      "8 inches",
      "12 inches",
    ],
    correctAnswer: 1,
    explanation:
      "甲板栏杆栏杆柱的最大间距通常为4英寸。这是为了防止幼儿的头部穿过栏杆间隙造成危险。检查员可以使用4英寸球来测试间距。",
    category: "exterior",
  },
  {
    id: 290,
    question:
      "What type of siding requires the least maintenance?",
    options: [
      "Natural wood",
      "Vinyl or fiber cement",
      "Cedar shakes",
      "Hardboard",
    ],
    correctAnswer: 1,
    explanation:
      "乙烯基壁板和纤维水泥壁板需要最少的维护。它们不需要定期油漆，抗腐烂和虫蛀。乙烯基壁板只需偶尔清洗，纤维水泥壁板可能每15-20年需要重新油漆。",
    category: "exterior",
  },
  {
    id: 291,
    question:
      "What is the function of a threshold at an exterior door?",
    options: [
      "To trip people entering the house",
      "To create a weather-tight seal at the bottom of the door",
      "To raise the floor level",
      "To match the interior flooring",
    ],
    correctAnswer: 1,
    explanation:
      "外门门槛的功能是在门底部创建防风雨密封，防止水、空气和害虫从门下方进入。门槛应与门底部的密封条紧密配合。",
    category: "exterior",
  },
  {
    id: 292,
    question:
      "What is a common exterior defect in older homes with wood siding?",
    options: [
      "The siding is too thick",
      "Rot, especially at the bottom courses and near ground contact",
      "The siding is too colorful",
      "The siding is installed too high",
    ],
    correctAnswer: 1,
    explanation:
      "老旧木质壁板房屋的常见外部缺陷是木材腐烂，特别是在底部几行和靠近地面接触处。水分持续接触和飞溅水会加速下部壁板的劣化。",
    category: "exterior",
  },
  {
    id: 293,
    question:
      "What is the purpose of an exterior door sweep?",
    options: [
      "To clean the floor",
      "To seal the gap between the bottom of the door and the threshold",
      "To keep the door from swinging open",
      "To match the door hardware",
    ],
    correctAnswer: 1,
    explanation:
      "门底扫条（door sweep）用于密封门底部与门槛之间的间隙。它防止空气渗透、水进入、灰尘和害虫侵入，是节能和防风雨的重要组成部分。",
    category: "exterior",
  },
  {
    id: 294,
    question:
      "What should an inspector note about the condition of walkways leading to the home?",
    options: [
      "The type of flowers along the walkway",
      "Trip hazards from raised or sunken sections, cracks, and uneven surfaces",
      "The width of the lawn",
      "Whether the walkway is straight",
    ],
    correctAnswer: 1,
    explanation:
      "检查员应注意人行道上因抬起或下沉的部分、裂缝和不平整表面造成的绊倒危险。这些是常见的安全问题，可能导致跌倒受伤，特别是对老年人。",
    category: "exterior",
  },
  {
    id: 295,
    question:
      "What is the concern with missing or damaged window screens?",
    options: [
      "It affects the home's color scheme",
      "Insects and debris can enter when windows are open",
      "It reduces the home's structural integrity",
      "Missing screens affect the foundation",
    ],
    correctAnswer: 1,
    explanation:
      "缺失或损坏的窗纱的问题是当窗户打开时，昆虫和碎物可以进入室内。虽然窗纱不是结构性的，但它们是功能性组件，影响居住舒适度。",
    category: "exterior",
  },
  {
    id: 296,
    question:
      "What is a pergola?",
    options: [
      "A fully enclosed outdoor room",
      "An open overhead structure with cross beams that provides partial shade",
      "A type of fence",
      "A retaining wall with plants",
    ],
    correctAnswer: 1,
    explanation:
      "凉棚（pergola）是一种开放式的头顶结构，有横梁提供部分遮阳。检查员应检查其结构连接、木材状况和是否正确固定到地面或房屋。",
    category: "exterior",
  },
  {
    id: 297,
    question:
      "What is the primary purpose of exterior grading and drainage?",
    options: [
      "To improve the yard's appearance",
      "To direct surface water away from the building to protect the foundation",
      "To level the yard for landscaping",
      "To create a flat surface for parking",
    ],
    correctAnswer: 1,
    explanation:
      "外部坡度和排水的主要目的是将地表水引导远离建筑物以保护基础。不当的排水是基础损坏和地下室渗水最常见的原因之一。",
    category: "exterior",
  },
  {
    id: 298,
    question:
      "What type of window has two sashes that slide vertically?",
    options: [
      "Casement window",
      "Double-hung window",
      "Sliding window",
      "Awning window",
    ],
    correctAnswer: 1,
    explanation:
      "双悬窗（double-hung window）有两个垂直滑动的窗扇。上下窗扇都可以打开，便于通风和清洁。这是美国住宅中最常见的窗户类型之一。",
    category: "exterior",
  },
  {
    id: 299,
    question:
      "What is the concern with a garage floor that slopes toward the house?",
    options: [
      "Cars will roll into the house",
      "Water, chemicals, and vehicle fluids may flow toward and into the living space",
      "It makes parking easier",
      "It improves drainage",
    ],
    correctAnswer: 1,
    explanation:
      "车库地面向房屋倾斜的问题是水、化学品和车辆液体可能流向并进入居住空间。车库地面应向外倾斜或向中央排水口倾斜，远离与居住空间相邻的墙壁。",
    category: "exterior",
  },
  {
    id: 300,
    question:
      "What material should NOT be used as fill against a foundation?",
    options: [
      "Compacted clean fill soil",
      "Organic material such as wood chips, mulch, or yard waste",
      "Gravel",
      "Sand",
    ],
    correctAnswer: 1,
    explanation:
      "不应使用有机材料（如木屑、覆盖物或院子垃圾）作为基础周围的回填物。有机材料保留水分、分解后沉降，并可能吸引白蚁。应使用干净的无机填充物。",
    category: "exterior",
  },

  // ========== Insulation & Ventilation (301-340) ==========
  {
    id: 301,
    question:
      "What does 'R-value' measure in insulation?",
    options: [
      "The weight of the insulation",
      "The thermal resistance of the insulation - its ability to resist heat flow",
      "The fire rating of the insulation",
      "The moisture content of the insulation",
    ],
    correctAnswer: 1,
    explanation:
      "R值衡量隔热材料的热阻，即抵抗热流的能力。R值越高，隔热性能越好。不同气候区域对墙壁、阁楼和地板有不同的最低R值要求。",
    category: "insulation",
  },
  {
    id: 302,
    question:
      "What is the recommended minimum attic insulation R-value for California climate zones?",
    options: [
      "R-5",
      "R-13",
      "R-30 to R-49 depending on climate zone",
      "R-100",
    ],
    correctAnswer: 2,
    explanation:
      "加州不同气候区的阁楼隔热最低R值要求为R-30到R-49。加州有16个气候区，每个区域的要求不同，这由加州Title 24能源标准规定。",
    category: "insulation",
  },
  {
    id: 303,
    question:
      "What type of insulation is most commonly found in existing home attics?",
    options: [
      "Spray foam",
      "Fiberglass batts or blown-in cellulose",
      "Rigid foam boards",
      "Cotton insulation",
    ],
    correctAnswer: 1,
    explanation:
      "现有住宅阁楼中最常见的隔热材料是玻璃纤维棉（fiberglass batts）或吹入式纤维素（blown-in cellulose）。玻璃纤维是粉红色或黄色的卷材，纤维素是灰色的散装材料。",
    category: "insulation",
  },
  {
    id: 304,
    question:
      "What is the R-value per inch of fiberglass batt insulation?",
    options: [
      "R-1.0 per inch",
      "R-3.2 to R-3.8 per inch",
      "R-8.0 per inch",
      "R-15 per inch",
    ],
    correctAnswer: 1,
    explanation:
      "玻璃纤维棉隔热材料的每英寸R值约为R-3.2到R-3.8。这意味着标准的3.5英寸厚墙体隔热（R-13）和6英寸厚的隔热（R-19）的厚度是合理的。",
    category: "insulation",
  },
  {
    id: 305,
    question:
      "What is closed-cell spray foam insulation known for?",
    options: [
      "Being the cheapest option",
      "Having the highest R-value per inch and acting as a moisture barrier",
      "Being easy to remove",
      "Being transparent",
    ],
    correctAnswer: 1,
    explanation:
      "闭孔喷涂泡沫隔热材料以每英寸最高R值（约R-6到R-7）和同时作为防潮层而著称。它还增加结构强度，但成本较高，需要专业安装。",
    category: "insulation",
  },
  {
    id: 306,
    question:
      "What is a vapor barrier and where should it typically be placed?",
    options: [
      "An exterior paint coating; on the outside of the wall",
      "A material that resists moisture diffusion; on the warm side of the insulation",
      "A type of insulation; in the attic only",
      "A waterproof membrane; under the roof shingles",
    ],
    correctAnswer: 1,
    explanation:
      "蒸汽屏障是抵抗水分扩散的材料，通常应放在隔热层的温暖侧。在加热为主的气候中放在内侧，在冷却为主的气候中放在外侧，以防止温暖潮湿空气中的水分在冷表面凝结。",
    category: "insulation",
  },
  {
    id: 307,
    question:
      "What is the primary purpose of attic ventilation in relation to insulation?",
    options: [
      "To heat the attic",
      "To remove excess moisture and heat that can degrade insulation performance",
      "To replace the insulation",
      "To add more insulation",
    ],
    correctAnswer: 1,
    explanation:
      "阁楼通风的主要目的是排出可能降低隔热性能的多余湿气和热量。湿气会使隔热材料失效、导致霉菌生长和木材腐烂，热量积聚会缩短屋顶材料寿命。",
    category: "insulation",
  },
  {
    id: 308,
    question:
      "What is cellulose insulation made from?",
    options: [
      "Fiberglass strands",
      "Recycled paper products treated with fire-retardant chemicals",
      "Polyurethane plastic",
      "Mineral wool",
    ],
    correctAnswer: 1,
    explanation:
      "纤维素隔热材料由经过阻燃化学处理的再生纸制品制成。它具有良好的R值（约R-3.5/英寸），环保，通常通过吹入方式安装在阁楼和墙壁空腔中。",
    category: "insulation",
  },
  {
    id: 309,
    question:
      "What is thermal bridging?",
    options: [
      "A type of insulation installation",
      "Heat transfer through materials that are more conductive than the surrounding insulation",
      "A method of heating a room",
      "The process of measuring R-values",
    ],
    correctAnswer: 1,
    explanation:
      "热桥效应是热量通过比周围隔热材料导热性更强的材料传递的现象。例如，墙壁中的木框架和金属紧固件会形成热桥，降低整体隔热效果。",
    category: "insulation",
  },
  {
    id: 310,
    question:
      "What is the required ventilation for a crawl space?",
    options: [
      "No ventilation needed",
      "1 square foot of vent area per 150 square feet of crawl space floor area",
      "One vent per room above",
      "Only a single 4-inch vent",
    ],
    correctAnswer: 1,
    explanation:
      "爬行空间通常需要每150平方英尺地板面积提供1平方英尺的通风面积。如果地面安装了蒸汽屏障，某些规范允许减少到1:1500的比率。",
    category: "insulation",
  },
  {
    id: 311,
    question:
      "What is weatherstripping used for?",
    options: [
      "To strip old paint from doors",
      "To seal gaps around doors and operable windows to prevent air leakage",
      "To waterproof the roof",
      "To insulate the attic",
    ],
    correctAnswer: 1,
    explanation:
      "密封条（weatherstripping）用于密封门和可操作窗户周围的间隙以防止空气泄漏。良好的密封条可以显著减少能源浪费，提高室内舒适度。",
    category: "insulation",
  },
  {
    id: 312,
    question:
      "What is the danger of insulation covering recessed light fixtures that are not IC-rated?",
    options: [
      "The lights will be dimmer",
      "It creates a fire hazard due to heat buildup",
      "It improves energy efficiency",
      "It has no effect",
    ],
    correctAnswer: 1,
    explanation:
      "非IC级别的嵌入式灯具如果被隔热材料覆盖，会因热量积聚而产生火灾危险。IC（Insulation Contact）级别的灯具设计为可以安全接触隔热材料。非IC灯具需要保持3英寸间距。",
    category: "insulation",
  },
  {
    id: 313,
    question:
      "What is air sealing in the context of home energy efficiency?",
    options: [
      "Making the house completely airtight with no ventilation",
      "Identifying and sealing uncontrolled air leaks in the building envelope",
      "Installing more windows",
      "Painting the exterior walls",
    ],
    correctAnswer: 1,
    explanation:
      "气密处理是识别和密封建筑围护结构中不受控制的空气泄漏。常见的泄漏点包括管道穿透处、电线出口、窗户框架和阁楼入口。气密处理通常是最具成本效益的节能措施。",
    category: "insulation",
  },
  {
    id: 314,
    question:
      "What is the purpose of baffles (rafter vents) in an attic?",
    options: [
      "To hold the roof sheathing in place",
      "To maintain a clear air channel between the insulation and the roof deck at the eaves",
      "To support electrical wiring",
      "To drain water from the attic",
    ],
    correctAnswer: 1,
    explanation:
      "挡板（椽子通风口）的目的是在屋檐处的隔热材料和屋顶板之间保持清晰的空气通道。这确保了从檐口通风口进入的空气可以自由流向脊通风口，不被隔热材料阻塞。",
    category: "insulation",
  },
  {
    id: 315,
    question:
      "What is California Title 24?",
    options: [
      "A property tax regulation",
      "The state's building energy efficiency standards",
      "A fire safety code",
      "A plumbing code",
    ],
    correctAnswer: 1,
    explanation:
      "加州Title 24是该州的建筑能源效率标准，是加州建筑法规的一部分。它规定了新建筑和重大改造中隔热、窗户、HVAC系统和照明等方面的最低能源效率要求。",
    category: "insulation",
  },
  {
    id: 316,
    question:
      "What is the R-value per inch of open-cell spray foam insulation?",
    options: [
      "R-1.0 per inch",
      "R-3.5 to R-3.7 per inch",
      "R-6.5 per inch",
      "R-10 per inch",
    ],
    correctAnswer: 1,
    explanation:
      "开孔喷涂泡沫隔热材料的每英寸R值约为R-3.5到R-3.7。虽然R值低于闭孔泡沫，但它成本较低，具有良好的隔音性能，且更灵活，适合填充不规则空间。",
    category: "insulation",
  },
  {
    id: 317,
    question:
      "What insulation concern should an inspector note in older homes built before 1980?",
    options: [
      "The insulation is too thick",
      "Possible presence of asbestos-containing insulation materials",
      "The insulation is the wrong color",
      "There are too many vapor barriers",
    ],
    correctAnswer: 1,
    explanation:
      "1980年前建造的老房子可能含有石棉隔热材料。石棉曾广泛用于管道包裹、vermiculite阁楼隔热（如Zonolite品牌）等。检查员不应触碰可疑材料，应建议进行专业检测。",
    category: "insulation",
  },
  {
    id: 318,
    question:
      "What is a blower door test?",
    options: [
      "A test to check if doors close properly",
      "A diagnostic test that measures the airtightness of a building using a calibrated fan",
      "A test for the HVAC blower motor",
      "A method of cleaning air ducts",
    ],
    correctAnswer: 1,
    explanation:
      "鼓风门测试是使用校准风扇测量建筑气密性的诊断测试。风扇安装在外门框上，对室内加压或减压，测量空气泄漏率，帮助确定需要密封的位置。",
    category: "insulation",
  },
  {
    id: 319,
    question:
      "What happens when insulation is compressed?",
    options: [
      "Its R-value increases",
      "Its R-value decreases because the air pockets that provide insulation are reduced",
      "Nothing changes",
      "It becomes a better vapor barrier",
    ],
    correctAnswer: 1,
    explanation:
      "隔热材料被压缩时R值会降低，因为提供隔热作用的气囊被减少了。例如，将R-19的6英寸玻璃纤维棉压入3.5英寸的空腔中，其R值只有约R-14。",
    category: "insulation",
  },
  {
    id: 320,
    question:
      "What is the recommended minimum insulation for exterior walls in California?",
    options: [
      "None required",
      "R-13 to R-21 depending on climate zone",
      "R-49",
      "R-60",
    ],
    correctAnswer: 1,
    explanation:
      "加州外墙的最低隔热要求为R-13到R-21，取决于气候区。2x4墙体通常使用R-13，2x6墙体可以安装R-19或R-21，以满足Title 24的要求。",
    category: "insulation",
  },
  {
    id: 321,
    question:
      "What is the purpose of a radiant barrier in an attic?",
    options: [
      "To absorb heat and keep the attic warm",
      "To reflect radiant heat from the roof, reducing attic temperatures and cooling costs",
      "To replace insulation",
      "To prevent rain from entering",
    ],
    correctAnswer: 1,
    explanation:
      "阁楼中的辐射屏障反射来自屋顶的辐射热，降低阁楼温度和冷却成本。它在炎热气候（如加州）中特别有效，可以将阁楼温度降低最多30华氏度。",
    category: "insulation",
  },
  {
    id: 322,
    question:
      "What is the concern with insulation that has a kraft paper facing in a crawl space?",
    options: [
      "It is too expensive",
      "The paper facing can absorb moisture and promote mold growth if facing the wrong direction",
      "It is fireproof",
      "It is too heavy",
    ],
    correctAnswer: 1,
    explanation:
      "在爬行空间中，带牛皮纸面层的隔热材料如果朝向不正确，纸面可能吸收水分并促进霉菌生长。纸面应朝向温暖侧（即朝上，面向加热的地板），而非朝向潮湿的爬行空间。",
    category: "insulation",
  },
  {
    id: 323,
    question:
      "What is mineral wool insulation?",
    options: [
      "Insulation made from sheep's wool",
      "Insulation made from rock or slag spun into fibers",
      "A type of cotton insulation",
      "Insulation made from recycled glass",
    ],
    correctAnswer: 1,
    explanation:
      "矿物棉隔热材料由岩石或矿渣纺成纤维制成。它具有良好的R值（约R-3.3/英寸）、优异的耐火性（可耐受超过2000华氏度），且不吸收水分。",
    category: "insulation",
  },
  {
    id: 324,
    question:
      "What is a common air leak location in a home's thermal envelope?",
    options: [
      "Solid brick walls",
      "Attic hatch, recessed lights, plumbing penetrations, and electrical outlets on exterior walls",
      "Concrete foundation below grade",
      "Interior partition walls",
    ],
    correctAnswer: 1,
    explanation:
      "常见的空气泄漏位置包括阁楼入口、嵌入式灯具、管道穿透处和外墙上的电气插座。这些小缝隙的累积效应可能相当于一扇敞开的窗户。",
    category: "insulation",
  },
  {
    id: 325,
    question:
      "What is the stack effect in a home?",
    options: [
      "Stacking insulation for higher R-values",
      "Warm air rising and exiting through upper leaks while drawing cold air in through lower leaks",
      "A method of installing siding",
      "Stacking firewood inside the home",
    ],
    correctAnswer: 1,
    explanation:
      "烟囱效应是指温暖空气上升并通过上部缝隙逸出，同时从下部缝隙吸入冷空气的现象。这在冬季尤为明显，会显著增加暖气负荷和能源消耗。",
    category: "insulation",
  },
  {
    id: 326,
    question:
      "What does an energy audit typically evaluate?",
    options: [
      "Only the furnace efficiency",
      "The overall energy performance including insulation, air sealing, HVAC, windows, and appliances",
      "Only the electric meter reading",
      "Only the roof condition",
    ],
    correctAnswer: 1,
    explanation:
      "能源审计评估整体能源性能，包括隔热、气密性、HVAC系统、窗户和电器。它使用鼓风门测试、红外热像仪等工具来识别能源浪费和改进机会。",
    category: "insulation",
  },
  {
    id: 327,
    question:
      "What is the concern with missing insulation around HVAC ducts in an unconditioned attic?",
    options: [
      "No concern, ducts don't need insulation",
      "Significant energy loss as conditioned air gains or loses heat to the attic",
      "The ducts will rust",
      "The attic will be too warm",
    ],
    correctAnswer: 1,
    explanation:
      "未调节阁楼中HVAC管道缺少隔热会导致显著的能源损失，因为调节过的空气会与阁楼的热空气或冷空气进行热交换。在加州炎热的夏季，未隔热的管道可能损失25-40%的冷却效率。",
    category: "insulation",
  },
  {
    id: 328,
    question:
      "What is the minimum recommended thickness for a crawl space vapor barrier?",
    options: [
      "1 mil",
      "6 mil polyethylene",
      "1/2 inch plywood",
      "No minimum requirement",
    ],
    correctAnswer: 1,
    explanation:
      "爬行空间蒸汽屏障的最低建议厚度为6密耳聚乙烯薄膜。它应覆盖整个地面，接缝处重叠至少6-12英寸，并沿墙壁上翻固定。",
    category: "insulation",
  },
  {
    id: 329,
    question:
      "What is an insulation contact (IC) rated recessed light?",
    options: [
      "A light that must not touch insulation",
      "A recessed light fixture designed to be safely covered with insulation",
      "A light with built-in insulation",
      "A fluorescent light fixture",
    ],
    correctAnswer: 1,
    explanation:
      "IC级嵌入式灯具设计为可以安全地被隔热材料覆盖。非IC级灯具会产生过多热量，如果被隔热材料覆盖可能引起火灾，必须与隔热材料保持至少3英寸间距。",
    category: "insulation",
  },
  {
    id: 330,
    question:
      "What is the benefit of continuous insulation on the exterior of a wall?",
    options: [
      "It makes the wall thinner",
      "It eliminates thermal bridging through framing members",
      "It replaces the need for siding",
      "It is only for appearance",
    ],
    correctAnswer: 1,
    explanation:
      "墙壁外部的连续隔热可以消除通过框架构件产生的热桥效应。因为隔热层不被框架打断，整面墙壁获得一致的隔热性能，显著提高能源效率。",
    category: "insulation",
  },
  {
    id: 331,
    question:
      "What is vermiculite insulation and why is it a concern?",
    options: [
      "A modern eco-friendly insulation with no concerns",
      "A granular insulation that may contain asbestos, particularly the Zonolite brand from Libby, Montana",
      "A type of spray foam",
      "A fiberglass product",
    ],
    correctAnswer: 1,
    explanation:
      "蛭石（vermiculite）隔热材料是一种颗粒状材料，可能含有石棉，特别是来自蒙大拿州利比矿山的Zonolite品牌。如果在阁楼中发现，不应触碰，应建议进行石棉检测。",
    category: "insulation",
  },
  {
    id: 332,
    question:
      "What is the purpose of insulating hot water pipes?",
    options: [
      "To make pipes look better",
      "To reduce heat loss, save energy, and deliver hotter water faster",
      "To prevent pipes from freezing only",
      "To color-code the plumbing system",
    ],
    correctAnswer: 1,
    explanation:
      "热水管隔热可以减少热量损失、节省能源，并更快地输送热水。它减少了等待热水的时间（节水），并可将水管中的热量损失减少25-45%。",
    category: "insulation",
  },
  {
    id: 333,
    question:
      "What is an energy recovery ventilator (ERV)?",
    options: [
      "A device that generates electricity",
      "A ventilation system that exchanges heat and moisture between incoming and outgoing air streams",
      "A solar-powered attic fan",
      "An insulation product",
    ],
    correctAnswer: 1,
    explanation:
      "能量回收通风器（ERV）是一种在进出气流之间交换热量和湿气的通风系统。它在提供新鲜空气的同时回收排出空气中的能量，减少暖通空调系统的负荷。",
    category: "insulation",
  },
  {
    id: 334,
    question:
      "What does a thermal imaging camera detect during an insulation inspection?",
    options: [
      "The color of the insulation",
      "Temperature differences that indicate missing insulation, air leaks, or moisture issues",
      "The brand of insulation installed",
      "The weight of the insulation",
    ],
    correctAnswer: 1,
    explanation:
      "红外热像仪检测温度差异，可以揭示隔热缺失、空气泄漏或水分问题。冷区域（冬季）或热区域（夏季）可能表明隔热不足或缺失。",
    category: "insulation",
  },
  {
    id: 335,
    question:
      "What is the main disadvantage of fiberglass batt insulation?",
    options: [
      "It has no R-value",
      "It is easily improperly installed, leaving gaps and voids that reduce effectiveness",
      "It is the most expensive option",
      "It cannot be used in walls",
    ],
    correctAnswer: 1,
    explanation:
      "玻璃纤维棉隔热材料的主要缺点是容易安装不当，留下间隙和空隙，降低隔热效果。绕过管道、电线和其他障碍物时，工人常常压缩或不完全填充空腔。",
    category: "insulation",
  },
  {
    id: 336,
    question:
      "What California Title 24 requirement applies to duct insulation in unconditioned spaces?",
    options: [
      "No insulation required",
      "Ducts must be insulated to a minimum of R-6 or R-8 depending on duct size",
      "Only return ducts need insulation",
      "Ducts must be painted white",
    ],
    correctAnswer: 1,
    explanation:
      "加州Title 24要求在非调节空间中的管道必须隔热到至少R-6或R-8（取决于管道尺寸）。这减少了通过管道壁的能量损失，提高了HVAC系统的整体效率。",
    category: "insulation",
  },
  {
    id: 337,
    question:
      "What is the issue with insulation installed upside down (paper facing toward the unconditioned space)?",
    options: [
      "It looks unattractive",
      "The vapor retarder is on the wrong side, which can trap moisture and cause mold or rot",
      "It provides more insulation",
      "There is no issue",
    ],
    correctAnswer: 1,
    explanation:
      "隔热材料倒装（纸面朝向非调节空间）时，蒸汽阻隔层在错误的一侧。这可能导致水分在保温层中凝结被困住，引起霉菌生长和木材腐烂。",
    category: "insulation",
  },
  {
    id: 338,
    question:
      "What is a conditioned crawl space?",
    options: [
      "A crawl space with exercise equipment",
      "A sealed, insulated crawl space that is part of the building's conditioned envelope",
      "A crawl space with extra ventilation",
      "A crawl space with a dirt floor",
    ],
    correctAnswer: 1,
    explanation:
      "调节爬行空间是密封并隔热的爬行空间，作为建筑调节围护的一部分。与通风爬行空间不同，它的墙壁（而非地板）有隔热层，并且密封了所有通风口。",
    category: "insulation",
  },
  {
    id: 339,
    question:
      "What is the concern with attic insulation blocking soffit vents?",
    options: [
      "The attic will be cooler",
      "It prevents proper attic ventilation, leading to moisture buildup and potential roof damage",
      "It improves insulation performance",
      "It has no effect",
    ],
    correctAnswer: 1,
    explanation:
      "阁楼隔热材料堵塞檐口通风口会阻止适当的阁楼通风，导致湿气积聚和潜在的屋顶损坏。应安装隔热挡板以保持通风口与隔热材料之间的空气通道。",
    category: "insulation",
  },
  {
    id: 340,
    question:
      "Under California Title 24, what is required when replacing more than a certain percentage of a home's insulation?",
    options: [
      "Nothing special is required",
      "The new insulation must meet current Title 24 energy standards",
      "The home must be demolished",
      "Only the same type of insulation can be used",
    ],
    correctAnswer: 1,
    explanation:
      "根据加州Title 24，当更换超过一定比例的住宅隔热材料时，新的隔热材料必须符合当前的Title 24能源标准。这确保在翻新过程中提高建筑的能源效率。",
    category: "insulation",
  },
];
