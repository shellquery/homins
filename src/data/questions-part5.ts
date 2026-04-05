import type { Question } from "./questions";

export const questionsPart5: Question[] = [
  // ========== PLUMBING (801-950) ==========
  {
    id: 801,
    question: "Under the California Plumbing Code, what is the minimum size for a building sewer serving a single-family dwelling?",
    options: [
      "4 inches",
      "3 inches",
      "2 inches",
      "6 inches",
    ],
    correctAnswer: 0,
    explanation:
      "根据加州管道规范，单户住宅的建筑下水道最小管径为4英寸。这确保了足够的排水能力并减少了堵塞的可能性。",
    category: "plumbing",
  },
  {
    id: 802,
    question: "What is a greywater system primarily designed to recycle?",
    options: [
      "Water from laundry, showers, and bathroom sinks",
      "Water from toilets and urinals",
      "Rainwater collected from the roof",
      "Water from kitchen sinks and dishwashers",
    ],
    correctAnswer: 0,
    explanation:
      "灰水系统主要回收来自洗衣机、淋浴和浴室洗手盆的水。根据加州法规，厨房水槽和洗碗机的水因含有油脂和食物残渣，通常不被归类为灰水。",
    category: "plumbing",
  },
  {
    id: 803,
    question: "In California, a greywater system for subsurface irrigation requires a permit when the system exceeds what daily capacity?",
    options: [
      "250 gallons per day",
      "100 gallons per day",
      "500 gallons per day",
      "50 gallons per day",
    ],
    correctAnswer: 0,
    explanation:
      "在加州，当灰水系统的日处理量超过250加仑时，需要获得许可证。250加仑以下的简单洗衣机灰水系统通常可免许可证安装。",
    category: "plumbing",
  },
  {
    id: 804,
    question: "What is the primary advantage of a tankless water heater over a traditional tank water heater?",
    options: [
      "It heats water on demand, eliminating standby energy losses",
      "It provides a larger reserve of hot water",
      "It requires no gas or electrical connection",
      "It is always less expensive to install",
    ],
    correctAnswer: 0,
    explanation:
      "即热式热水器的主要优势是按需加热水，消除了储水式热水器的待机能量损失。这可以提高能源效率，但安装成本可能更高。",
    category: "plumbing",
  },
  {
    id: 805,
    question: "When sizing a tankless water heater, what two factors are most critical?",
    options: [
      "Flow rate (GPM) and temperature rise needed",
      "Physical dimensions and weight of the unit",
      "Brand reputation and warranty length",
      "Color of the unit and noise level",
    ],
    correctAnswer: 0,
    explanation:
      "选择即热式热水器时，最关键的两个因素是流量（加仑/分钟）和所需的温度升高。这决定了热水器是否能在峰值需求时提供足够的热水。",
    category: "plumbing",
  },
  {
    id: 806,
    question: "A recirculating hot water system is designed to:",
    options: [
      "Provide hot water quickly at fixtures by continuously or intermittently circulating water through the hot water piping",
      "Filter sediment from the hot water supply",
      "Increase water pressure at distant fixtures",
      "Prevent water hammer in the hot water lines",
    ],
    correctAnswer: 0,
    explanation:
      "循环热水系统通过连续或间歇性地在热水管道中循环水来快速提供热水。这减少了等待热水的时间和浪费的水量。",
    category: "plumbing",
  },
  {
    id: 807,
    question: "What is the main purpose of a whole-house water filtration system?",
    options: [
      "To remove contaminants from all water entering the home",
      "To soften hard water only",
      "To increase water pressure throughout the home",
      "To heat water before it reaches fixtures",
    ],
    correctAnswer: 0,
    explanation:
      "全屋水过滤系统的主要目的是去除进入家庭的所有水中的污染物，包括沉淀物、氯和其他杂质，提供更清洁的饮用水和生活用水。",
    category: "plumbing",
  },
  {
    id: 808,
    question: "How does a water softener typically remove hardness minerals from water?",
    options: [
      "Through ion exchange, replacing calcium and magnesium with sodium or potassium",
      "By boiling the water and collecting the steam",
      "Through reverse osmosis membrane filtration",
      "By adding chlorine to precipitate minerals",
    ],
    correctAnswer: 0,
    explanation:
      "软水器通常通过离子交换工艺去除水中的硬度矿物质，用钠或钾离子替换钙和镁离子。这可以防止水垢积聚并延长管道和电器的寿命。",
    category: "plumbing",
  },
  {
    id: 809,
    question: "What does a reverse osmosis (RO) system remove from drinking water?",
    options: [
      "Dissolved solids, heavy metals, and many contaminants through a semipermeable membrane",
      "Only large sediment particles",
      "Only bacteria and viruses",
      "Only chlorine taste and odor",
    ],
    correctAnswer: 0,
    explanation:
      "反渗透系统通过半透膜去除溶解固体、重金属和许多污染物。它是最有效的家用水净化方法之一，可去除高达99%的溶解污染物。",
    category: "plumbing",
  },
  {
    id: 810,
    question: "A point-of-use water heater is best suited for which application?",
    options: [
      "Providing hot water to a single fixture or a small group of fixtures far from the main water heater",
      "Heating an entire home's water supply",
      "Heating water for a swimming pool",
      "Providing hot water for fire suppression systems",
    ],
    correctAnswer: 0,
    explanation:
      "使用点热水器最适合为远离主热水器的单个或少量固定装置提供热水。它减少了等待热水的时间和管道中的热量损失。",
    category: "plumbing",
  },
  {
    id: 811,
    question: "What is the primary component of a solar water heating system that collects heat from the sun?",
    options: [
      "Solar collector (flat plate or evacuated tube)",
      "Storage tank",
      "Circulation pump",
      "Heat exchanger",
    ],
    correctAnswer: 0,
    explanation:
      "太阳能热水系统的主要集热组件是太阳能集热器，通常为平板式或真空管式。集热器吸收太阳辐射并将热量传递给循环的传热流体。",
    category: "plumbing",
  },
  {
    id: 812,
    question: "What type of water heater uses a compressor and refrigerant cycle to heat water, similar to an air conditioner running in reverse?",
    options: [
      "Heat pump water heater",
      "Solar water heater",
      "Tankless gas water heater",
      "Electric resistance water heater",
    ],
    correctAnswer: 0,
    explanation:
      "热泵热水器使用压缩机和制冷剂循环来加热水，类似于反向运行的空调。它从周围空气中提取热量，能效比传统电热水器高2-3倍。",
    category: "plumbing",
  },
  {
    id: 813,
    question: "What is the purpose of a thermal expansion tank on a water heater system?",
    options: [
      "To absorb the increased water volume caused by thermal expansion when water is heated in a closed system",
      "To store extra hot water for peak demand periods",
      "To filter sediment from the water heater",
      "To reduce noise from the water heater during operation",
    ],
    correctAnswer: 0,
    explanation:
      "热膨胀罐的作用是在封闭系统中吸收水加热时因热膨胀而增加的水体积。没有膨胀罐，封闭系统中的压力可能会升高到危险水平。",
    category: "plumbing",
  },
  {
    id: 814,
    question: "Thermal expansion in a water heater system is most likely to cause problems when:",
    options: [
      "A check valve or PRV prevents expanded water from flowing back into the supply",
      "The water heater thermostat is set to a low temperature",
      "The home has an open plumbing system",
      "Only cold water fixtures are being used",
    ],
    correctAnswer: 0,
    explanation:
      "当止回阀或减压阀阻止膨胀水回流到供水系统时，热膨胀最容易造成问题。这创建了一个封闭系统，压力会随着水温升高而增加。",
    category: "plumbing",
  },
  {
    id: 815,
    question: "What is a water hammer arrestor designed to prevent?",
    options: [
      "The loud banging noise and pressure surge caused by sudden valve closure",
      "Backflow of contaminated water into the supply",
      "Freezing of water pipes in cold weather",
      "Corrosion of copper pipes",
    ],
    correctAnswer: 0,
    explanation:
      "水锤消除器旨在防止阀门突然关闭引起的响亮撞击噪音和压力波动。它包含一个气垫，可以吸收水流突然停止时产生的冲击。",
    category: "plumbing",
  },
  {
    id: 816,
    question: "How often should a pressure reducing valve (PRV) be inspected or maintained according to best practices?",
    options: [
      "Every 1-2 years or when pressure irregularities are noticed",
      "Only when it completely fails",
      "Every 10 years",
      "PRVs never need maintenance",
    ],
    correctAnswer: 0,
    explanation:
      "减压阀应每1-2年检查或维护一次，或当注意到压力异常时进行检查。定期维护可以确保阀门正常工作并防止过高水压损坏管道和设备。",
    category: "plumbing",
  },
  {
    id: 817,
    question: "What is the purpose of backflow testing?",
    options: [
      "To verify that backflow prevention devices are functioning properly and preventing contamination of the potable water supply",
      "To check the flow rate of water through pipes",
      "To measure water pressure at various fixtures",
      "To detect leaks in the drainage system",
    ],
    correctAnswer: 0,
    explanation:
      "回流测试的目的是验证回流防止装置是否正常工作，防止污染水回流到饮用水供应系统。加州要求定期对商业和某些住宅回流防止装置进行测试。",
    category: "plumbing",
  },
  {
    id: 818,
    question: "An RPZ (Reduced Pressure Zone) backflow preventer provides what level of protection?",
    options: [
      "The highest level of protection, suitable for high-hazard cross-connections",
      "The lowest level of protection, suitable only for low-hazard connections",
      "No protection, it is merely a pressure regulator",
      "Protection only against back-siphonage, not backpressure",
    ],
    correctAnswer: 0,
    explanation:
      "RPZ（减压区）回流防止器提供最高级别的保护，适用于高危交叉连接。它包含两个独立的止回阀和一个中间减压区，即使止回阀失效也能防止回流。",
    category: "plumbing",
  },
  {
    id: 819,
    question: "How does a double check valve assembly differ from an RPZ device?",
    options: [
      "It has two check valves but no relief valve, providing protection for low to moderate hazard applications",
      "It has three check valves and a relief valve",
      "It is only used for irrigation systems",
      "It provides higher protection than an RPZ device",
    ],
    correctAnswer: 0,
    explanation:
      "双止回阀组件有两个止回阀但没有泄压阀，提供低至中等危险应用的保护。与RPZ不同，它不会在故障时排放水，因此不适用于高危场景。",
    category: "plumbing",
  },
  {
    id: 820,
    question: "What is the primary function of a sewage ejector pump?",
    options: [
      "To pump sewage from below-grade fixtures up to the level of the main sewer line",
      "To increase water pressure to upper floors",
      "To grind food waste in the kitchen sink",
      "To filter solids from the wastewater",
    ],
    correctAnswer: 0,
    explanation:
      "污水提升泵的主要功能是将低于主下水道管线的固定装置（如地下室浴室）的污水泵送至主下水道水平面。它使低于下水管线的区域能正常排水。",
    category: "plumbing",
  },
  {
    id: 821,
    question: "How does a grinder pump differ from a standard sewage ejector pump?",
    options: [
      "A grinder pump has cutting blades that macerate solids before pumping, allowing use of smaller discharge pipes",
      "A grinder pump is louder but less effective",
      "A grinder pump only handles clear water",
      "There is no difference between them",
    ],
    correctAnswer: 0,
    explanation:
      "研磨泵与标准污水提升泵的区别在于它有切割刀片，可以在泵送前将固体物质切碎。这允许使用更小的排放管道，适用于长距离泵送。",
    category: "plumbing",
  },
  {
    id: 822,
    question: "In California, septic systems are most commonly found in:",
    options: [
      "Rural areas without access to municipal sewer systems",
      "Downtown urban areas of major cities",
      "All new construction regardless of location",
      "Only commercial properties",
    ],
    correctAnswer: 0,
    explanation:
      "在加州，化粪池系统最常见于无法接入市政下水道系统的农村地区。房屋检查员在检查这些地区的房屋时应了解化粪池系统的基本工作原理。",
    category: "plumbing",
  },
  {
    id: 823,
    question: "What is a sewer lateral?",
    options: [
      "The pipe that connects a building's drainage system to the public sewer main",
      "A horizontal branch pipe inside the building",
      "The main sewer pipe running under the street",
      "A vent pipe on the roof",
    ],
    correctAnswer: 0,
    explanation:
      "下水道侧管是连接建筑物排水系统与公共下水道总管的管道。在加州许多城市，业主负责维护和修复从建筑物到公共下水道总管的整段侧管。",
    category: "plumbing",
  },
  {
    id: 824,
    question: "Trenchless pipe repair is advantageous because it:",
    options: [
      "Minimizes excavation and landscape disruption while repairing or replacing underground pipes",
      "Is always cheaper than traditional methods",
      "Only works on pipes larger than 12 inches",
      "Requires no specialized equipment",
    ],
    correctAnswer: 0,
    explanation:
      "非开挖管道修复的优势在于最大限度地减少挖掘和景观破坏，同时修复或更换地下管道。这在已建成的景观和不易开挖的区域特别有价值。",
    category: "plumbing",
  },
  {
    id: 825,
    question: "What is pipe bursting as a trenchless repair method?",
    options: [
      "A method where a new pipe is pulled through the old one while simultaneously breaking the old pipe outward",
      "A method of detecting leaks by pressurizing pipes until they burst",
      "A method of cleaning pipes with high-pressure water",
      "A method of freezing pipes to stop leaks",
    ],
    correctAnswer: 0,
    explanation:
      "管道爆裂法是一种非开挖修复方法，通过拉入新管道同时将旧管道向外破碎。这种方法可以用同等或更大直径的新管替换旧管，无需大规模开挖。",
    category: "plumbing",
  },
  {
    id: 826,
    question: "CIPP (Cured-In-Place Pipe) lining involves:",
    options: [
      "Inserting a resin-saturated liner into the existing pipe and curing it to form a new pipe within the old one",
      "Wrapping the outside of the pipe with fiberglass tape",
      "Replacing the pipe with a new PVC pipe using open trenching",
      "Coating the inside of the pipe with liquid copper",
    ],
    correctAnswer: 0,
    explanation:
      "CIPP（原位固化管道）内衬技术是将树脂浸渍的衬里插入现有管道中，然后固化形成一条在旧管道内的新管道。这是一种有效的非开挖管道修复方法。",
    category: "plumbing",
  },
  {
    id: 827,
    question: "Orangeburg pipe is a type of sewer pipe made from:",
    options: [
      "Compressed wood fibers and tar (bituminized fiber)",
      "Cast iron with a ceramic coating",
      "Reinforced concrete with steel rebar",
      "High-density polyethylene (HDPE)",
    ],
    correctAnswer: 0,
    explanation:
      "Orangeburg管是由压缩木纤维和沥青（沥青化纤维）制成的下水道管。它在1940-1970年代使用广泛，但容易变形、塌陷，通常需要更换。",
    category: "plumbing",
  },
  {
    id: 828,
    question: "Why is Orangeburg pipe considered problematic during a home inspection?",
    options: [
      "It deteriorates over time, becoming oval-shaped and prone to collapse",
      "It is too rigid and cannot accommodate ground movement",
      "It releases toxic gases into the soil",
      "It is made of lead and contaminates water",
    ],
    correctAnswer: 0,
    explanation:
      "Orangeburg管被认为有问题，因为它会随时间劣化，变成椭圆形并容易塌陷。由于其材料（压缩木纤维和沥青），它的使用寿命通常只有约50年。",
    category: "plumbing",
  },
  {
    id: 829,
    question: "Clay tile pipe used in older sewer lines is susceptible to what common problem?",
    options: [
      "Root intrusion at the joints where roots seek moisture",
      "Melting during hot weather",
      "Expanding and cracking from internal pressure",
      "Corroding from acidic soil",
    ],
    correctAnswer: 0,
    explanation:
      "陶土管在接缝处容易受到树根侵入，因为树根会寻找水分。接头处的小间隙为树根提供了进入管道的途径，随着时间推移可能导致堵塞和管道损坏。",
    category: "plumbing",
  },
  {
    id: 830,
    question: "What is a Fernco coupling used for in plumbing?",
    options: [
      "Connecting pipes of different materials or sizes using a flexible rubber sleeve and band clamps",
      "Permanently welding copper pipes together",
      "Connecting gas pipes with threaded fittings",
      "Insulating hot water pipes",
    ],
    correctAnswer: 0,
    explanation:
      "Fernco接头用于使用柔性橡胶套管和带夹连接不同材料或尺寸的管道。它常用于排水管道维修，特别是连接旧管道材料与新管道材料时。",
    category: "plumbing",
  },
  {
    id: 831,
    question: "No-hub couplings are primarily used to connect:",
    options: [
      "Cast iron pipes without hub-and-spigot joints, using a neoprene gasket and stainless steel band clamp",
      "Copper water supply pipes",
      "PEX tubing to manifolds",
      "Gas pipes to appliances",
    ],
    correctAnswer: 0,
    explanation:
      "无承口接头主要用于连接没有承插接口的铸铁管，使用氯丁橡胶垫片和不锈钢带夹。这种接头在维修和改造工作中非常常见。",
    category: "plumbing",
  },
  {
    id: 832,
    question: "What type of shower valve is required by most current plumbing codes, including California's?",
    options: [
      "A pressure-balancing or thermostatic mixing valve to prevent scalding",
      "A simple two-handle valve with no temperature control",
      "A valve with no anti-scald protection",
      "A gate valve controlling flow only",
    ],
    correctAnswer: 0,
    explanation:
      "大多数当前管道规范（包括加州的）要求使用压力平衡或恒温混合阀来防止烫伤。这些阀门可以在水压变化时自动调节水温。",
    category: "plumbing",
  },
  {
    id: 833,
    question: "What is the maximum hot water temperature allowed at a shower or bathtub outlet per California code?",
    options: [
      "120°F (49°C)",
      "140°F (60°C)",
      "100°F (38°C)",
      "160°F (71°C)",
    ],
    correctAnswer: 0,
    explanation:
      "根据加州管道规范，淋浴或浴缸出水口允许的最高热水温度为120°F（49°C）。这一限制旨在防止烫伤，特别是对儿童和老年人。",
    category: "plumbing",
  },
  {
    id: 834,
    question: "An anti-scald device on a faucet works by:",
    options: [
      "Limiting the maximum water temperature that can be delivered to the fixture",
      "Increasing water pressure when temperature drops",
      "Adding cold water to the drain",
      "Shutting off all water when temperature exceeds 200°F",
    ],
    correctAnswer: 0,
    explanation:
      "防烫伤装置通过限制输送到固定装置的最高水温来工作。它可以是压力平衡阀或恒温阀，确保水温不超过安全限值。",
    category: "plumbing",
  },
  {
    id: 835,
    question: "A bidet is a plumbing fixture primarily used for:",
    options: [
      "Personal hygiene and cleansing after using the toilet",
      "Washing dishes",
      "Filling mop buckets",
      "Draining laundry water",
    ],
    correctAnswer: 0,
    explanation:
      "坐浴盆是一种主要用于如厕后个人卫生清洁的管道固定装置。在检查中，检查员应确保其正确安装，并配有适当的回流防止装置。",
    category: "plumbing",
  },
  {
    id: 836,
    question: "What is the difference between a gravity-flush toilet and a pressure-assist toilet?",
    options: [
      "A gravity-flush uses the weight of water to create flushing action, while a pressure-assist uses compressed air to force water into the bowl",
      "There is no difference; they work identically",
      "A gravity-flush toilet uses more water than a pressure-assist toilet always",
      "A pressure-assist toilet has no tank",
    ],
    correctAnswer: 0,
    explanation:
      "重力冲水马桶利用水的重量产生冲水作用，而压力辅助马桶使用压缩空气将水压入马桶盆中。压力辅助马桶冲水更强劲但通常噪音更大。",
    category: "plumbing",
  },
  {
    id: 837,
    question: "What does the WaterSense label on a plumbing fixture indicate?",
    options: [
      "The fixture meets EPA criteria for water efficiency and performance",
      "The fixture is made of recycled materials",
      "The fixture is manufactured in the United States",
      "The fixture has a lifetime warranty",
    ],
    correctAnswer: 0,
    explanation:
      "WaterSense标签表明该管道固定装置符合EPA的节水效率和性能标准。带有此标签的产品比标准产品至少节水20%，同时保持良好的性能。",
    category: "plumbing",
  },
  {
    id: 838,
    question: "What is the maximum flow rate for a WaterSense-labeled lavatory faucet?",
    options: [
      "1.5 gallons per minute (GPM)",
      "2.5 gallons per minute (GPM)",
      "0.5 gallons per minute (GPM)",
      "3.0 gallons per minute (GPM)",
    ],
    correctAnswer: 0,
    explanation:
      "WaterSense认证的洗脸盆水龙头最大流量为1.5加仑/分钟（GPM），比联邦标准的2.2 GPM低约30%。这有助于加州的节水目标。",
    category: "plumbing",
  },
  {
    id: 839,
    question: "California's drought-resistant plumbing requirements include:",
    options: [
      "Low-flow toilets, faucets, and showerheads meeting specific gallons-per-flush or GPM standards",
      "Mandatory rainwater collection for all homes",
      "Only recycled water for all household use",
      "No hot water systems to save energy",
    ],
    correctAnswer: 0,
    explanation:
      "加州的抗旱管道要求包括符合特定加仑/次冲水或GPM标准的低流量马桶、水龙头和花洒。这些要求是加州节水法规的重要组成部分。",
    category: "plumbing",
  },
  {
    id: 840,
    question: "What is rainwater harvesting in the context of residential plumbing?",
    options: [
      "Collecting and storing rainwater from roofs for non-potable uses such as irrigation",
      "Connecting gutters directly to the sewer system",
      "Using rain sensors to control indoor faucets",
      "Filtering rainwater for swimming pool use only",
    ],
    correctAnswer: 0,
    explanation:
      "雨水收集是指从屋顶收集和储存雨水用于非饮用用途（如灌溉）。在加州，这是一种越来越流行的节水方法，通常需要遵循当地法规。",
    category: "plumbing",
  },
  {
    id: 841,
    question: "A PEX manifold system distributes water by:",
    options: [
      "Running individual PEX lines from a central manifold to each fixture, similar to a home-run wiring system",
      "Using a single large pipe with multiple tee connections",
      "Connecting all fixtures in series through a single loop",
      "Using copper headers with soldered connections only",
    ],
    correctAnswer: 0,
    explanation:
      "PEX分配歧管系统从中央歧管到每个固定装置运行单独的PEX管线，类似于家庭电气布线系统。这减少了接头数量并允许单独控制每个固定装置。",
    category: "plumbing",
  },
  {
    id: 842,
    question: "Copper press fittings (ProPress) join copper pipes by:",
    options: [
      "Using a mechanical press tool to crimp a fitting with an O-ring seal onto the pipe without soldering",
      "Soldering the joint with a propane torch",
      "Using threaded connections with Teflon tape",
      "Gluing the fittings with PVC cement",
    ],
    correctAnswer: 0,
    explanation:
      "铜管压接接头（ProPress）使用机械压接工具将带有O型密封圈的接头压接到管道上，无需焊接。这种方法更快、更安全，因为消除了明火的需要。",
    category: "plumbing",
  },
  {
    id: 843,
    question: "SharkBite push-fit fittings are convenient because they:",
    options: [
      "Require no soldering, crimping, or special tools to connect pipes",
      "Are the only fittings approved for gas lines",
      "Can only be used underground",
      "Are permanent and cannot be removed once installed",
    ],
    correctAnswer: 0,
    explanation:
      "SharkBite推入式接头方便之处在于连接管道时不需要焊接、压接或特殊工具。只需将管道推入接头即可。但检查员应注意它们在隐蔽空间中的长期可靠性。",
    category: "plumbing",
  },
  {
    id: 844,
    question: "What is the minimum required air gap for a residential dishwasher drain connection in California?",
    options: [
      "The air gap device must be installed above the flood level rim of the sink",
      "No air gap is required in California",
      "The air gap can be below the countertop level",
      "The air gap must be 6 inches below the sink rim",
    ],
    correctAnswer: 0,
    explanation:
      "在加州，洗碗机排水连接要求安装空气间隙装置，且必须安装在水槽溢流边缘以上。这防止了污水回流到洗碗机中，保护饮用水安全。",
    category: "plumbing",
  },
  {
    id: 845,
    question: "What material is commonly used for the main water service line in newer California homes?",
    options: [
      "Copper or cross-linked polyethylene (PEX)",
      "Lead pipe",
      "Orangeburg pipe",
      "Galvanized steel exclusively",
    ],
    correctAnswer: 0,
    explanation:
      "在较新的加州住宅中，主水服务管线通常使用铜管或交联聚乙烯（PEX）。铅管和镀锌钢管已不再用于新建筑，Orangeburg管从未用于供水管线。",
    category: "plumbing",
  },
  {
    id: 846,
    question: "The California Plumbing Code requires a water heater to have a temperature and pressure (T&P) relief valve that discharges:",
    options: [
      "To an approved location such as outside the building or to a floor drain, terminating within 6 inches of the ground",
      "Directly into the sewer system",
      "Back into the cold water supply line",
      "Into a sealed container in the attic",
    ],
    correctAnswer: 0,
    explanation:
      "加州管道规范要求热水器的温度和压力（T&P）泄压阀排放到经批准的位置，如建筑物外部或地面排水管，排放管终端距地面6英寸以内。",
    category: "plumbing",
  },
  {
    id: 847,
    question: "What is the recommended water heater thermostat setting to balance safety and energy efficiency?",
    options: [
      "120°F (49°C)",
      "160°F (71°C)",
      "180°F (82°C)",
      "100°F (38°C)",
    ],
    correctAnswer: 0,
    explanation:
      "推荐的热水器恒温器设定温度为120°F（49°C），以平衡安全和能源效率。此温度足以满足日常需要，同时降低烫伤风险和能源消耗。",
    category: "plumbing",
  },
  {
    id: 848,
    question: "When inspecting a water heater, what does a white or greenish mineral buildup on the anode rod indicate?",
    options: [
      "The anode rod is actively protecting the tank from corrosion through sacrificial oxidation",
      "The water heater has a gas leak",
      "The tank has already failed and needs immediate replacement",
      "The water supply is contaminated with lead",
    ],
    correctAnswer: 0,
    explanation:
      "阳极棒上的白色或绿色矿物沉积表明阳极棒正在通过牺牲氧化积极保护水箱免受腐蚀。这是正常工作的迹象，但严重消耗的阳极棒应更换。",
    category: "plumbing",
  },
  {
    id: 849,
    question: "How far must a water heater's T&P relief valve discharge pipe extend above the floor or ground?",
    options: [
      "It must terminate between 6 and 24 inches above the floor or ground",
      "It can terminate at any height",
      "It must connect to the nearest drain pipe inside the wall",
      "It must terminate at least 5 feet above the ground",
    ],
    correctAnswer: 0,
    explanation:
      "T&P泄压阀排放管必须在距地面或地板6至24英寸之间终止。这确保排放的水可以被观察到（指示问题），同时降低烫伤风险。",
    category: "plumbing",
  },
  {
    id: 850,
    question: "Why should a home inspector check for proper strapping of a water heater in California?",
    options: [
      "California requires seismic strapping to prevent the water heater from falling during an earthquake",
      "Strapping is only decorative",
      "Strapping prevents the water heater from overheating",
      "Strapping is required to improve water pressure",
    ],
    correctAnswer: 0,
    explanation:
      "加州要求对热水器进行地震固定，以防止在地震中倒塌。这是加州特有的重要安全要求，检查员应验证是否安装了符合规范的上下两条固定带。",
    category: "plumbing",
  },
  {
    id: 851,
    question: "What type of pipe is most commonly associated with pinhole leaks in California homes?",
    options: [
      "Copper pipe",
      "PEX tubing",
      "PVC pipe",
      "Cast iron pipe",
    ],
    correctAnswer: 0,
    explanation:
      "铜管最常与加州住宅中的针孔泄漏相关联。这些微小泄漏通常由管道内部的点蚀腐蚀引起，可能与水质、水化学和水流速度有关。",
    category: "plumbing",
  },
  {
    id: 852,
    question: "Polybutylene (PB) pipe was widely installed in homes from the 1970s to 1990s. Why is it a concern during inspections?",
    options: [
      "It is prone to failure at fittings and along the pipe due to degradation from chlorinated water",
      "It is too rigid and cracks during installation",
      "It is made of lead and contaminates water",
      "It expands excessively in cold weather",
    ],
    correctAnswer: 0,
    explanation:
      "聚丁烯（PB）管容易在接头和管道沿线因氯化水的降解而失效。这种管道在1970年代到1990年代广泛安装，已知存在高失效率，通常建议更换。",
    category: "plumbing",
  },
  {
    id: 853,
    question: "What is the function of a cleanout in a drainage system?",
    options: [
      "To provide access for clearing blockages in the drain line",
      "To filter debris from the wastewater",
      "To vent sewer gases to the atmosphere",
      "To connect the drain to the water supply",
    ],
    correctAnswer: 0,
    explanation:
      "清扫口的功能是提供清除排水管道堵塞的通道。加州管道规范要求在排水管方向变化处和每隔一定距离安装清扫口。",
    category: "plumbing",
  },
  {
    id: 854,
    question: "How often does California require backflow prevention devices to be tested?",
    options: [
      "Annually",
      "Every 5 years",
      "Every 10 years",
      "Only at initial installation",
    ],
    correctAnswer: 0,
    explanation:
      "加州要求回流防止装置每年进行测试。这确保装置持续正常工作，保护公共饮用水供应免受污染。测试必须由认证测试人员执行。",
    category: "plumbing",
  },
  {
    id: 855,
    question: "In a properly functioning plumbing vent system, what should a home inspector NOT observe?",
    options: [
      "Sewer odors inside the home or gurgling sounds from drains",
      "A pipe extending through the roof",
      "A vent pipe connected to the drainage system",
      "Open vent terminals above the roofline",
    ],
    correctAnswer: 0,
    explanation:
      "在正常工作的管道通风系统中，检查员不应观察到室内下水道气味或排水管发出的咕噜声。这些迹象表明通风系统可能堵塞或安装不当。",
    category: "plumbing",
  },
  {
    id: 856,
    question: "What is the minimum vent pipe size for a single toilet (water closet)?",
    options: [
      "2 inches",
      "1/2 inch",
      "4 inches",
      "3/4 inch",
    ],
    correctAnswer: 0,
    explanation:
      "单个马桶（坐便器）的最小通风管尺寸为2英寸。正确尺寸的通风管确保排水系统中有足够的空气流通，防止虹吸破坏水封。",
    category: "plumbing",
  },
  {
    id: 857,
    question: "What is the purpose of a trap primer in commercial plumbing that may also be found in some California residences?",
    options: [
      "To automatically add water to floor drain traps to prevent the water seal from evaporating",
      "To prime a water pump before starting",
      "To apply primer to PVC pipe before gluing",
      "To test water quality at the tap",
    ],
    correctAnswer: 0,
    explanation:
      "存水弯引水器的目的是自动向地漏存水弯添加水，防止水封蒸发。当水封蒸发后，下水道气体可以通过排水管进入建筑物。",
    category: "plumbing",
  },
  {
    id: 858,
    question: "What is a common sign that galvanized steel water supply pipes are deteriorating?",
    options: [
      "Reduced water pressure and rust-colored water, especially when first turning on a faucet",
      "Increased water pressure throughout the house",
      "Blue-green staining around faucets",
      "A strong chlorine smell from all faucets",
    ],
    correctAnswer: 0,
    explanation:
      "镀锌钢供水管劣化的常见迹象是水压降低和铁锈色的水，特别是在首次打开水龙头时。这是因为管道内部的锌涂层腐蚀后，铁开始生锈并积聚。",
    category: "plumbing",
  },
  {
    id: 859,
    question: "When is a PRV (Pressure Reducing Valve) required on a residential water service in California?",
    options: [
      "When the incoming water pressure exceeds 80 psi",
      "When the water pressure is below 20 psi",
      "On all homes regardless of pressure",
      "Only on homes with solar water heaters",
    ],
    correctAnswer: 0,
    explanation:
      "当进入住宅的水压超过80 psi时，加州管道规范要求安装减压阀（PRV）。过高的水压可能损坏管道、接头和设备，并导致水锤。",
    category: "plumbing",
  },
  {
    id: 860,
    question: "What is the accepted range for residential water pressure?",
    options: [
      "40-80 psi",
      "10-20 psi",
      "100-150 psi",
      "0-10 psi",
    ],
    correctAnswer: 0,
    explanation:
      "住宅水压的可接受范围为40-80 psi。低于40 psi可能导致固定装置功能不佳，高于80 psi需要安装减压阀以防止管道损坏。",
    category: "plumbing",
  },
  {
    id: 861,
    question: "An S-trap is considered a plumbing code violation because it:",
    options: [
      "Can self-siphon, losing its water seal and allowing sewer gases to enter the home",
      "Is too expensive for residential use",
      "Cannot handle large volumes of water",
      "Is made of materials that corrode quickly",
    ],
    correctAnswer: 0,
    explanation:
      "S型存水弯被认为违反管道规范，因为它可能自虹吸，失去水封，允许下水道气体进入室内。P型存水弯通过通风连接解决了这个问题。",
    category: "plumbing",
  },
  {
    id: 862,
    question: "What minimum slope is required for horizontal drainage pipes 3 inches or smaller in diameter?",
    options: [
      "1/4 inch per foot",
      "1/8 inch per foot",
      "1/2 inch per foot",
      "1 inch per foot",
    ],
    correctAnswer: 0,
    explanation:
      "直径3英寸或更小的水平排水管要求最小坡度为每英尺1/4英寸。对于4英寸及更大的管道，最小坡度为每英尺1/8英寸。",
    category: "plumbing",
  },
  {
    id: 863,
    question: "What is the purpose of a vacuum breaker on a hose bib (outdoor faucet)?",
    options: [
      "To prevent backflow of potentially contaminated water from a garden hose into the potable water supply",
      "To increase water pressure at the hose bib",
      "To prevent the hose bib from freezing",
      "To filter debris from outdoor water",
    ],
    correctAnswer: 0,
    explanation:
      "室外水龙头上的真空破坏器用于防止花园软管中可能被污染的水回流到饮用水供应系统。这在软管末端浸入水池或接触化学品时特别重要。",
    category: "plumbing",
  },
  {
    id: 864,
    question: "PEX piping is available in different colors. What does the color typically indicate?",
    options: [
      "Red for hot water, blue for cold water, white for either",
      "Red for gas, blue for water, white for drain",
      "Colors are purely decorative with no meaning",
      "Red for drainage, blue for venting, white for supply",
    ],
    correctAnswer: 0,
    explanation:
      "PEX管道颜色通常表示用途：红色用于热水，蓝色用于冷水，白色可用于任一用途。颜色编码有助于管道工和检查员快速识别管线。",
    category: "plumbing",
  },
  {
    id: 865,
    question: "What is the main disadvantage of PEX piping compared to copper?",
    options: [
      "PEX cannot be used outdoors or exposed to UV light as it degrades",
      "PEX is more expensive than copper",
      "PEX cannot handle hot water temperatures",
      "PEX connections always leak",
    ],
    correctAnswer: 0,
    explanation:
      "PEX管道与铜管相比的主要缺点是不能在室外使用或暴露在紫外线下，因为它会降解。PEX暴露在阳光下会变脆并最终失效。",
    category: "plumbing",
  },
  {
    id: 866,
    question: "What gas is commonly produced in sewer systems that can be hazardous at high concentrations?",
    options: [
      "Hydrogen sulfide (H2S)",
      "Pure oxygen (O2)",
      "Nitrogen (N2)",
      "Helium (He)",
    ],
    correctAnswer: 0,
    explanation:
      "硫化氢（H2S）是下水道系统中常产生的气体，高浓度时可能有害。它有明显的臭鸡蛋味，但高浓度时会麻痹嗅觉。正常工作的存水弯和通风系统应防止其进入室内。",
    category: "plumbing",
  },
  {
    id: 867,
    question: "A whole-house water filtration system using activated carbon is most effective at removing:",
    options: [
      "Chlorine, volatile organic compounds (VOCs), and taste/odor issues",
      "Dissolved minerals like calcium and magnesium",
      "Bacteria and viruses",
      "Fluoride only",
    ],
    correctAnswer: 0,
    explanation:
      "使用活性炭的全屋水过滤系统最有效去除氯、挥发性有机化合物（VOCs）和味道/气味问题。活性炭通过吸附作用捕获这些污染物。",
    category: "plumbing",
  },
  {
    id: 868,
    question: "What causes the \"rotten egg\" smell sometimes detected at hot water faucets?",
    options: [
      "Hydrogen sulfide gas produced by bacteria reacting with the anode rod in the water heater",
      "Chlorine in the municipal water supply",
      "A gas leak near the water heater",
      "Mold growing inside the faucet aerator",
    ],
    correctAnswer: 0,
    explanation:
      "热水龙头处检测到的\"臭鸡蛋\"味通常由细菌与热水器中阳极棒反应产生的硫化氢气体引起。这在使用井水或水中硫酸盐含量较高时更常见。",
    category: "plumbing",
  },
  {
    id: 869,
    question: "What is the purpose of a dielectric union in plumbing?",
    options: [
      "To prevent galvanic corrosion when joining dissimilar metals such as copper and steel",
      "To increase water flow between two pipes",
      "To connect drain pipes to vent pipes",
      "To filter electricity from the water supply",
    ],
    correctAnswer: 0,
    explanation:
      "电介质接头的目的是在连接不同金属（如铜和钢）时防止电偶腐蚀。不同金属直接接触时会产生电化学反应，加速腐蚀。",
    category: "plumbing",
  },
  {
    id: 870,
    question: "In a solar water heating system, what is the purpose of the heat exchanger?",
    options: [
      "To transfer heat from the solar collector fluid to the potable water without mixing the two fluids",
      "To generate electricity from solar energy",
      "To cool the water before storage",
      "To filter sediment from the solar collector",
    ],
    correctAnswer: 0,
    explanation:
      "在太阳能热水系统中，热交换器的作用是将太阳能集热器流体的热量传递给饮用水，同时不混合两种流体。这在使用防冻液的间接系统中特别重要。",
    category: "plumbing",
  },
  {
    id: 871,
    question: "What is the typical lifespan of a standard tank-type residential water heater?",
    options: [
      "8-12 years",
      "25-30 years",
      "1-3 years",
      "50+ years",
    ],
    correctAnswer: 0,
    explanation:
      "标准储水式住宅热水器的典型使用寿命为8-12年。寿命取决于水质、维护频率和使用条件。检查员应注意热水器的年龄和状况。",
    category: "plumbing",
  },
  {
    id: 872,
    question: "A heat pump water heater works most efficiently in what temperature range for the surrounding air?",
    options: [
      "40°F to 90°F (4°C to 32°C)",
      "Below 0°F (-18°C)",
      "Above 120°F (49°C)",
      "It works equally well at all temperatures",
    ],
    correctAnswer: 0,
    explanation:
      "热泵热水器在周围空气温度40°F至90°F（4°C至32°C）范围内工作效率最高。在此范围内，它可以有效地从空气中提取热量。加州的温和气候非常适合这种热水器。",
    category: "plumbing",
  },
  {
    id: 873,
    question: "What is the minimum size of a vent terminal (where it exits the roof) per the California Plumbing Code?",
    options: [
      "2 inches in diameter",
      "1/2 inch in diameter",
      "6 inches in diameter",
      "1 inch in diameter",
    ],
    correctAnswer: 0,
    explanation:
      "根据加州管道规范，通风管终端（穿过屋顶处）的最小直径为2英寸。这防止了霜冻或碎片堵塞通风管，确保排水系统正常通风。",
    category: "plumbing",
  },
  {
    id: 874,
    question: "A water heater installed in a garage in California must have its ignition source elevated at least how high above the floor?",
    options: [
      "18 inches",
      "6 inches",
      "36 inches",
      "No elevation is required",
    ],
    correctAnswer: 0,
    explanation:
      "在加州，安装在车库中的热水器点火源必须至少高于地面18英寸。这是为了防止地面附近积聚的可燃蒸气（如汽油蒸气）被点燃。",
    category: "plumbing",
  },
  {
    id: 875,
    question: "What type of pipe fitting allows a change in direction of a drain pipe while maintaining proper flow?",
    options: [
      "A long-sweep or long-radius elbow",
      "A short 90-degree elbow",
      "A tee fitting installed sideways",
      "A coupling",
    ],
    correctAnswer: 0,
    explanation:
      "长弯头或大半径弯头允许排水管改变方向同时保持适当的流速。排水管中禁止使用短弯头（如卫生级弯头除外），因为它们会导致堵塞。",
    category: "plumbing",
  },
  {
    id: 876,
    question: "What is the most common cause of a running toilet?",
    options: [
      "A worn or misaligned flapper valve",
      "Excessive water pressure",
      "A cracked toilet bowl",
      "A blocked vent pipe",
    ],
    correctAnswer: 0,
    explanation:
      "马桶持续流水最常见的原因是翻板阀磨损或错位。翻板阀是水箱底部的橡胶密封件，当它无法正确密封时，水会持续流入马桶盆中。",
    category: "plumbing",
  },
  {
    id: 877,
    question: "What test can a home inspector perform to check for a toilet leak at the wax ring seal?",
    options: [
      "Look for water stains, soft flooring, or movement when rocking the toilet at the base",
      "Pour dye into the overflow tube",
      "Measure the water pressure at the supply valve",
      "Listen for hissing sounds inside the tank",
    ],
    correctAnswer: 0,
    explanation:
      "检查员可以通过查看水渍、柔软的地板或在马桶底部左右摇晃时的移动来检查蜡环密封处的泄漏。马桶不应有任何摇晃。",
    category: "plumbing",
  },
  {
    id: 878,
    question: "A gas water heater flue pipe should have an upward slope toward the chimney or vent terminal of at least:",
    options: [
      "1/4 inch per foot of horizontal run",
      "No slope is needed; it can be horizontal",
      "1 inch per foot of horizontal run",
      "It should slope downward toward the water heater",
    ],
    correctAnswer: 0,
    explanation:
      "燃气热水器烟道管应向烟囱或排气终端保持每英尺至少1/4英寸的上升坡度。这确保燃烧废气通过自然对流正确排出，防止一氧化碳回流到室内。",
    category: "plumbing",
  },
  {
    id: 879,
    question: "What plumbing deficiency is indicated by slow drainage at multiple fixtures simultaneously?",
    options: [
      "A blockage or restriction in the main drain or sewer line",
      "Low water supply pressure",
      "A faulty water heater",
      "Too many fixtures on one circuit",
    ],
    correctAnswer: 0,
    explanation:
      "多个固定装置同时排水缓慢表明主排水管或下水道管线有堵塞或限制。单个固定装置的缓慢排水通常表示局部问题，而多个固定装置的问题则指向主管线。",
    category: "plumbing",
  },
  {
    id: 880,
    question: "What is the purpose of an expansion tank on a closed-loop hot water system?",
    options: [
      "To absorb the pressure increase caused by thermal expansion of heated water",
      "To store additional hot water for peak usage",
      "To increase the water heater's BTU output",
      "To soften the water before heating",
    ],
    correctAnswer: 0,
    explanation:
      "膨胀罐在封闭回路热水系统中的目的是吸收水加热时热膨胀引起的压力增加。没有膨胀罐，T&P泄压阀可能频繁排放，管道和设备可能受损。",
    category: "plumbing",
  },
  {
    id: 881,
    question: "What does a water hammer arrestor contain to absorb shock?",
    options: [
      "A sealed air chamber or piston mechanism",
      "A chemical solution",
      "A filter cartridge",
      "A heating element",
    ],
    correctAnswer: 0,
    explanation:
      "水锤消除器包含一个密封的空气室或活塞机构来吸收冲击。当水流突然停止时，空气室压缩以吸收冲击波，防止管道中的撞击噪音和压力波动。",
    category: "plumbing",
  },
  {
    id: 882,
    question: "Cross-linked polyethylene (PEX) pipe is classified into three types. Which type uses the peroxide (Engel) method of cross-linking?",
    options: [
      "PEX-a",
      "PEX-b",
      "PEX-c",
      "PEX-d",
    ],
    correctAnswer: 0,
    explanation:
      "PEX-a使用过氧化物（Engel）方法进行交联。PEX-b使用硅烷方法，PEX-c使用电子束方法。PEX-a被认为是最柔韧的，具有最强的热记忆性。",
    category: "plumbing",
  },
  {
    id: 883,
    question: "When inspecting a water supply system with SharkBite fittings, the inspector should note:",
    options: [
      "Whether the fittings are accessible for future maintenance and repair",
      "That SharkBite fittings are illegal in California",
      "That SharkBite fittings only work with copper pipe",
      "That the fittings must be soldered after installation",
    ],
    correctAnswer: 0,
    explanation:
      "检查使用SharkBite接头的供水系统时，检查员应注意接头是否可以接近以便将来维护和修理。虽然这些接头在加州合法使用，但最好安装在可接近的位置。",
    category: "plumbing",
  },
  {
    id: 884,
    question: "What is the standard residential water closet (toilet) flush volume required in California for new installations?",
    options: [
      "1.28 gallons per flush (GPF) or less",
      "3.5 gallons per flush (GPF)",
      "5.0 gallons per flush (GPF)",
      "7.0 gallons per flush (GPF)",
    ],
    correctAnswer: 0,
    explanation:
      "加州新安装的住宅马桶标准冲水量为每次冲水1.28加仑（GPF）或更少。这符合加州的节水法规，比联邦标准的1.6 GPF更加节水。",
    category: "plumbing",
  },
  {
    id: 885,
    question: "A home inspector notices a strong sewer smell in the basement near a floor drain that is rarely used. The most likely cause is:",
    options: [
      "The trap water seal has evaporated, allowing sewer gases to enter",
      "The main sewer line is broken",
      "The water heater is malfunctioning",
      "The furnace flue is disconnected",
    ],
    correctAnswer: 0,
    explanation:
      "很少使用的地漏附近出现强烈下水道气味最可能的原因是存水弯水封已蒸发，允许下水道气体进入。解决方法是定期向地漏注水以维持水封。",
    category: "plumbing",
  },
  {
    id: 886,
    question: "What is the purpose of a mixing valve at a water heater?",
    options: [
      "To blend hot and cold water to deliver a safe temperature while allowing the tank to store water at a higher temperature for bacteria control",
      "To separate hot and cold water lines",
      "To increase the volume of hot water available",
      "To measure the water temperature digitally",
    ],
    correctAnswer: 0,
    explanation:
      "热水器上混合阀的目的是混合冷热水以提供安全温度，同时允许水箱在较高温度下储存水以控制细菌（如军团菌）。这平衡了安全和卫生需求。",
    category: "plumbing",
  },
  {
    id: 887,
    question: "What does DWV stand for in plumbing?",
    options: [
      "Drain, Waste, and Vent",
      "Domestic Water Valve",
      "Direct Water Volume",
      "Dual Wall Vent",
    ],
    correctAnswer: 0,
    explanation:
      "DWV代表排水、废水和通风（Drain, Waste, and Vent）。这是管道系统的排水部分，负责将废水排出建筑物并通过通风管维持适当的气压。",
    category: "plumbing",
  },
  {
    id: 888,
    question: "What is a common indication that a home's main water shut-off valve may be failing?",
    options: [
      "The valve does not fully stop water flow when turned to the closed position",
      "Water pressure increases when the valve is half closed",
      "The valve makes no noise when operated",
      "The valve turns freely with no resistance",
    ],
    correctAnswer: 0,
    explanation:
      "主水关断阀失效的常见迹象是当阀门转到关闭位置时无法完全停止水流。这可能是由于内部垫片磨损或矿物沉积，建议及时维修或更换。",
    category: "plumbing",
  },
  {
    id: 889,
    question: "What type of valve is recommended as the main water shut-off for a home due to its reliability?",
    options: [
      "Ball valve (quarter-turn)",
      "Gate valve",
      "Globe valve",
      "Check valve",
    ],
    correctAnswer: 0,
    explanation:
      "球阀（四分之一转阀）因其可靠性被推荐作为住宅主水关断阀。它操作简单，全通径设计流阻小，并且比闸阀更不容易随时间失效。",
    category: "plumbing",
  },
  {
    id: 890,
    question: "A home inspector observes copper pipe with green patina and crusty deposits. This most likely indicates:",
    options: [
      "Corrosion, possibly from aggressive water chemistry or electrolysis",
      "Normal aging with no concern",
      "The pipe was recently installed",
      "The pipe is actually galvanized steel painted to look like copper",
    ],
    correctAnswer: 0,
    explanation:
      "铜管上出现绿色铜绿和结痂沉积最可能表示腐蚀，可能由侵蚀性水化学或电解作用引起。虽然轻微的铜绿是正常的，但结痂沉积可能表示存在泄漏或严重腐蚀。",
    category: "plumbing",
  },
  {
    id: 891,
    question: "What is the maximum distance a fixture trap can be from its vent connection according to code?",
    options: [
      "It depends on the trap arm size; for example, a 1-1/2 inch trap arm cannot exceed 6 feet",
      "There is no maximum distance",
      "100 feet for all sizes",
      "1 inch for all sizes",
    ],
    correctAnswer: 0,
    explanation:
      "固定装置存水弯到通风连接的最大距离取决于存水弯臂的尺寸。例如，1-1/2英寸存水弯臂不能超过6英尺。超过此距离可能导致虹吸作用破坏水封。",
    category: "plumbing",
  },
  {
    id: 892,
    question: "When performing a visual inspection of the water heater, the inspector should check the flue for:",
    options: [
      "Proper draft, no gaps or disconnections, adequate clearance from combustibles, and correct slope",
      "The brand name and model number only",
      "Whether it is painted to match the wall",
      "Only the exterior appearance",
    ],
    correctAnswer: 0,
    explanation:
      "检查热水器烟道时，检查员应检查适当的排气、无间隙或断开、与可燃物的足够间距以及正确的坡度。这些对于安全排放燃烧废气至关重要。",
    category: "plumbing",
  },
  {
    id: 893,
    question: "A tankless water heater typically requires what special consideration for its gas supply?",
    options: [
      "A larger gas line than a standard tank water heater due to higher BTU demand",
      "A smaller gas line than any other appliance",
      "No gas line; all tankless heaters are electric",
      "The same gas line size as a stovetop burner",
    ],
    correctAnswer: 0,
    explanation:
      "即热式热水器通常需要比标准储水式热水器更大的燃气管线，因为其BTU需求更高。在安装时可能需要升级现有的燃气管线尺寸。",
    category: "plumbing",
  },
  {
    id: 894,
    question: "What is the minimum height a plumbing vent must extend above the roof surface?",
    options: [
      "6 inches",
      "1 inch",
      "24 inches",
      "48 inches",
    ],
    correctAnswer: 0,
    explanation:
      "管道通风管必须延伸到屋顶表面以上至少6英寸。但如果屋顶用于其他目的（如屋顶露台），则必须延伸至少7英尺以上。",
    category: "plumbing",
  },
  {
    id: 895,
    question: "Cast iron drain pipe in older homes is susceptible to what type of deterioration?",
    options: [
      "Internal corrosion and scaling that reduces the effective pipe diameter",
      "Melting from hot wastewater",
      "Rapid expansion in cold weather",
      "Dissolving from soap residue",
    ],
    correctAnswer: 0,
    explanation:
      "旧房中的铸铁排水管容易发生内部腐蚀和结垢，减少有效管径。经过几十年使用，腐蚀产物可能显著减少水流通道，导致频繁堵塞。",
    category: "plumbing",
  },
  {
    id: 896,
    question: "What is the correct procedure to test a T&P relief valve during a home inspection?",
    options: [
      "Lift the lever briefly to verify water discharges, then release to confirm it reseats properly",
      "Remove the valve entirely and inspect it on a workbench",
      "T&P valves should never be tested during a home inspection",
      "Hit the valve with a hammer to test durability",
    ],
    correctAnswer: 0,
    explanation:
      "测试T&P泄压阀的正确程序是短暂抬起手柄验证水是否排出，然后释放确认它正确复位。注意：有些检查标准不要求操作旧的T&P阀，因为可能导致泄漏。",
    category: "plumbing",
  },
  {
    id: 897,
    question: "What is a condensing tankless water heater, and why is it more efficient?",
    options: [
      "It has a secondary heat exchanger that captures heat from exhaust gases, achieving higher efficiency",
      "It uses cold water only and never heats water above room temperature",
      "It condenses water vapor from the air for drinking",
      "It uses less gas by heating water more slowly",
    ],
    correctAnswer: 0,
    explanation:
      "冷凝式即热热水器有一个二级热交换器，可以捕获废气中的热量，实现更高的效率（通常95%以上）。它可以使用PVC排气管而不是不锈钢，降低安装成本。",
    category: "plumbing",
  },
  {
    id: 898,
    question: "CPVC pipe is approved for hot water distribution. What does CPVC stand for?",
    options: [
      "Chlorinated Polyvinyl Chloride",
      "Compressed Polyvinyl Compound",
      "Cooled Plastic Vinyl Coating",
      "Cross-linked Plastic Vinyl Conduit",
    ],
    correctAnswer: 0,
    explanation:
      "CPVC代表氯化聚氯乙烯（Chlorinated Polyvinyl Chloride）。它是PVC的改进版本，可以承受更高的温度，因此被批准用于热水分配系统。",
    category: "plumbing",
  },
  {
    id: 899,
    question: "When inspecting a recirculating hot water pump, what should the inspector verify?",
    options: [
      "That the pump is operational, the timer or sensor is functioning, and there are no leaks at the connections",
      "That the pump produces at least 100 PSI of pressure",
      "That the pump is installed outdoors only",
      "That the pump is connected to the cold water supply",
    ],
    correctAnswer: 0,
    explanation:
      "检查循环热水泵时，检查员应验证泵是否运行正常、定时器或传感器是否工作以及连接处是否有泄漏。循环泵帮助减少等待热水的时间。",
    category: "plumbing",
  },
  {
    id: 900,
    question: "What California-specific plumbing requirement relates to washing machine drain standpipes?",
    options: [
      "The standpipe must be between 18 and 30 inches above the trap weir",
      "No standpipe is required in California",
      "The standpipe must be exactly 60 inches tall",
      "The standpipe must be made of copper only",
    ],
    correctAnswer: 0,
    explanation:
      "加州要求洗衣机排水立管高度在存水弯堰上方18至30英寸之间。这防止了虹吸排水，同时提供足够的高度接收洗衣机排出的水而不溢出。",
    category: "plumbing",
  },
  {
    id: 901,
    question: "What is the primary purpose of a greywater system's mulch basin?",
    options: [
      "To distribute greywater beneath mulch for subsurface irrigation while preventing human contact",
      "To store greywater for later use inside the home",
      "To filter greywater for drinking purposes",
      "To collect rainwater from gutters",
    ],
    correctAnswer: 0,
    explanation:
      "灰水系统覆盖物盆地的主要目的是在覆盖物下分配灰水进行地下灌溉，同时防止人类接触。这是加州允许的简单灰水系统的常见设计方法。",
    category: "plumbing",
  },
  {
    id: 902,
    question: "A dual-flush toilet offers two flush options. What are the typical flush volumes?",
    options: [
      "0.8 GPF for liquid waste and 1.28 GPF for solid waste",
      "3.5 GPF for liquid waste and 5.0 GPF for solid waste",
      "1.6 GPF for both options",
      "0.1 GPF for liquid waste and 0.2 GPF for solid waste",
    ],
    correctAnswer: 0,
    explanation:
      "双冲水马桶通常提供0.8 GPF用于液体废物和1.28 GPF用于固体废物的两种冲水选择。这种设计在加州特别受欢迎，因为它进一步节约用水。",
    category: "plumbing",
  },
  {
    id: 903,
    question: "What is the minimum air gap required between a faucet outlet and the flood level rim of a fixture?",
    options: [
      "Two times the diameter of the effective opening of the faucet, but not less than 1 inch",
      "Zero; no air gap is needed",
      "6 inches regardless of faucet size",
      "12 inches for all fixtures",
    ],
    correctAnswer: 0,
    explanation:
      "水龙头出水口与固定装置溢流边缘之间所需的最小空气间隙为水龙头有效开口直径的两倍，但不少于1英寸。空气间隙是最可靠的回流防止方法。",
    category: "plumbing",
  },
  {
    id: 904,
    question: "When a home has a water softener, the inspector should check whether the softened water is connected to:",
    options: [
      "The hot and cold supply lines, but typically not to outdoor hose bibs or the kitchen cold water drinking faucet",
      "All fixtures including outdoor irrigation",
      "Only the hot water heater",
      "Only the toilets",
    ],
    correctAnswer: 0,
    explanation:
      "安装软水器时，通常连接到冷热水供应管线，但不连接室外水龙头或厨房冷水饮用水龙头。这是因为软化水中钠含量较高，不适合浇灌植物或不需要的饮用场合。",
    category: "plumbing",
  },
  {
    id: 905,
    question: "What is a common defect found with flexible water supply connectors (braided stainless steel hoses)?",
    options: [
      "Corrosion, kinking, or bulging that can lead to catastrophic failure and flooding",
      "They are too rigid to install",
      "They cannot connect to standard fittings",
      "They always leak at installation",
    ],
    correctAnswer: 0,
    explanation:
      "柔性供水连接器（不锈钢编织软管）的常见缺陷是腐蚀、扭结或膨胀，可能导致灾难性故障和水灾。检查员应检查这些连接器的状况和年龄。",
    category: "plumbing",
  },
  {
    id: 906,
    question: "In California, water heaters must be secured against earthquake movement with a minimum of how many straps?",
    options: [
      "Two straps — one in the upper third and one in the lower third of the unit",
      "One strap at the middle",
      "Three straps evenly spaced",
      "No straps are required in California",
    ],
    correctAnswer: 0,
    explanation:
      "在加州，热水器必须使用至少两条固定带防止地震移动——一条在设备的上三分之一处，一条在下三分之一处。这是加州建筑规范的强制性要求。",
    category: "plumbing",
  },
  {
    id: 907,
    question: "A pressure-assist toilet is distinguished by:",
    options: [
      "A sealed pressure vessel inside the tank that uses water supply pressure to create a more forceful flush",
      "A manually operated pump handle on the side",
      "Gravity-only flushing with a large tank opening",
      "An electric motor that pressurizes the flush",
    ],
    correctAnswer: 0,
    explanation:
      "压力辅助马桶的特点是水箱内有一个密封的压力容器，利用供水压力创建更强的冲水力。它冲水效果更好，但通常噪音更大，维修更复杂。",
    category: "plumbing",
  },
  {
    id: 908,
    question: "What is the typical BTU input range for a whole-house tankless gas water heater?",
    options: [
      "150,000 to 199,000 BTU",
      "30,000 to 40,000 BTU",
      "500,000 to 750,000 BTU",
      "10,000 to 15,000 BTU",
    ],
    correctAnswer: 0,
    explanation:
      "全屋即热式燃气热水器的典型BTU输入范围为150,000到199,000 BTU。这远高于传统储水式热水器的30,000-50,000 BTU，因此需要更大的燃气管线。",
    category: "plumbing",
  },
  {
    id: 909,
    question: "What potential issue should an inspector report when PEX pipe is routed near a hot water heater flue or other heat source?",
    options: [
      "PEX can be damaged by excessive heat and must be kept at a safe distance from heat sources",
      "PEX is fireproof and needs no clearance",
      "PEX improves its strength near heat sources",
      "PEX should be intentionally placed near heat sources for warmth",
    ],
    correctAnswer: 0,
    explanation:
      "PEX管道可能被过高温度损坏，必须与热源保持安全距离。PEX的最高温度等级通常为200°F，超过此温度可能导致管道失效。",
    category: "plumbing",
  },
  {
    id: 910,
    question: "A sewage ejector pump basin must be equipped with:",
    options: [
      "A sealed, gas-tight cover that is vented to the building's plumbing vent system",
      "An open top for easy access",
      "A cover with no vent connection",
      "A decorative lid matching the floor tile",
    ],
    correctAnswer: 0,
    explanation:
      "污水提升泵的盆必须配备密封的气密盖，并通风到建筑物的管道通风系统。这防止下水道气体逸入居住空间，同时允许适当的通风。",
    category: "plumbing",
  },
  {
    id: 911,
    question: "How does a sump pump differ from a sewage ejector pump?",
    options: [
      "A sump pump handles ground water only, while a sewage ejector pump handles wastewater including sewage",
      "They are identical in function",
      "A sump pump is always larger than a sewage ejector pump",
      "A sewage ejector pump only handles clear water",
    ],
    correctAnswer: 0,
    explanation:
      "排水泵仅处理地下水（清水），而污水提升泵处理包括污水在内的废水。污水提升泵需要气密盖和通风连接，而排水泵通常不需要。",
    category: "plumbing",
  },
  {
    id: 912,
    question: "What is the maximum water heater temperature setting that California recommends to prevent Legionella bacteria growth while minimizing scald risk?",
    options: [
      "140°F at the tank with a mixing valve to deliver 120°F at fixtures",
      "100°F at the tank with no mixing valve",
      "180°F at the tank with no mixing valve",
      "Room temperature only",
    ],
    correctAnswer: 0,
    explanation:
      "加州推荐水箱温度设为140°F以防止军团菌生长，同时使用混合阀将送达固定装置的水温降至120°F以减少烫伤风险。这平衡了卫生和安全需求。",
    category: "plumbing",
  },
  {
    id: 913,
    question: "What plumbing issue is commonly found when inspecting homes built with Chinese drywall (approximately 2001-2009)?",
    options: [
      "Corrosion of copper plumbing pipes and fittings due to sulfur compounds off-gassing from the drywall",
      "Increased water pressure throughout the home",
      "Improved pipe longevity",
      "No plumbing effects whatsoever",
    ],
    correctAnswer: 0,
    explanation:
      "使用中国石膏板建造的房屋中常见的管道问题是铜管和接头因石膏板释放的硫化合物而腐蚀。这些硫化物气体会加速铜管的腐蚀，导致泄漏。",
    category: "plumbing",
  },
  {
    id: 914,
    question: "What is the purpose of a check valve in a plumbing system?",
    options: [
      "To allow water to flow in one direction only and prevent backflow",
      "To regulate water temperature",
      "To increase water pressure",
      "To filter debris from the water",
    ],
    correctAnswer: 0,
    explanation:
      "止回阀在管道系统中的目的是只允许水沿一个方向流动，防止回流。它用于保护设备和防止交叉污染。",
    category: "plumbing",
  },
  {
    id: 915,
    question: "What is the minimum fixture unit rating for a kitchen sink drain in the California Plumbing Code?",
    options: [
      "2 fixture units",
      "1 fixture unit",
      "6 fixture units",
      "10 fixture units",
    ],
    correctAnswer: 0,
    explanation:
      "根据加州管道规范，厨房水槽排水的最低固定装置单位等级为2个固定装置单位。固定装置单位是用于确定排水管和通风管尺寸的计量单位。",
    category: "plumbing",
  },
  {
    id: 916,
    question: "Copper pipe used in residential plumbing comes in different types. Which type has the thinnest walls?",
    options: [
      "Type M",
      "Type K",
      "Type L",
      "Type DWV",
    ],
    correctAnswer: 3,
    explanation:
      "DWV型铜管壁最薄，仅用于排水、废水和通风系统。在供水铜管中，M型壁最薄，L型次之，K型壁最厚。住宅供水管通常使用M型或L型。",
    category: "plumbing",
  },
  {
    id: 917,
    question: "An inspector notices that the water heater's draft hood has visible soot or scorch marks. This indicates:",
    options: [
      "Incomplete combustion or backdrafting, which is a safety concern requiring further evaluation",
      "Normal operation of the water heater",
      "The water heater is brand new",
      "The water heater is electric, not gas",
    ],
    correctAnswer: 0,
    explanation:
      "热水器排气罩上可见的烟灰或烧焦痕迹表示不完全燃烧或倒流，这是需要进一步评估的安全隐患。这可能导致一氧化碳进入居住空间。",
    category: "plumbing",
  },
  {
    id: 918,
    question: "What type of pipe is purple in color and used for reclaimed (recycled) water systems?",
    options: [
      "Purple-colored PVC pipe specifically designated for reclaimed water",
      "Standard white PVC pipe",
      "Copper pipe with purple insulation",
      "Black ABS pipe",
    ],
    correctAnswer: 0,
    explanation:
      "紫色PVC管专门用于再生（回收）水系统。紫色是全国通用的标识颜色，用于区分再生水管线与饮用水管线，防止交叉连接。",
    category: "plumbing",
  },
  {
    id: 919,
    question: "When inspecting a garbage disposal, the inspector should verify:",
    options: [
      "That it operates properly, drains well, has no leaks, and has a functioning air gap or high loop for the dishwasher connection",
      "Only that it turns on",
      "That it can grind metal objects",
      "That it is connected to the hot water supply",
    ],
    correctAnswer: 0,
    explanation:
      "检查垃圾处理器时，检查员应验证它是否正常运行、排水良好、无泄漏，以及洗碗机连接是否有正常工作的空气间隙或高环。",
    category: "plumbing",
  },
  {
    id: 920,
    question: "What is the difference between ABS and PVC drain pipe?",
    options: [
      "ABS is black and connected with solvent cement only; PVC is white and requires primer before solvent cement",
      "ABS and PVC are the same material in different colors",
      "ABS is used for water supply; PVC is used for drainage only",
      "PVC is black and ABS is white",
    ],
    correctAnswer: 0,
    explanation:
      "ABS管为黑色，仅使用溶剂胶水连接；PVC管为白色，需要在使用溶剂胶水前先涂底漆。在加州，两者都被允许用于排水系统。",
    category: "plumbing",
  },
  {
    id: 921,
    question: "In California, what color primer must be used when cementing PVC drain pipe joints?",
    options: [
      "Purple primer",
      "No primer is needed",
      "Clear primer only",
      "Red primer",
    ],
    correctAnswer: 0,
    explanation:
      "在加州，连接PVC排水管接头时必须使用紫色底漆。紫色使检查员能够容易地验证是否使用了底漆。底漆软化PVC表面以确保正确的化学焊接。",
    category: "plumbing",
  },
  {
    id: 922,
    question: "What is the standard rough-in measurement from the finished wall to the center of the toilet flange for most residential toilets?",
    options: [
      "12 inches",
      "6 inches",
      "18 inches",
      "24 inches",
    ],
    correctAnswer: 0,
    explanation:
      "大多数住宅马桶从完成墙到马桶法兰中心的标准粗装尺寸为12英寸。也有10英寸和14英寸的选项适用于不同的空间配置。",
    category: "plumbing",
  },
  {
    id: 923,
    question: "What is the recommended clearance in front of a toilet from the front of the bowl to any obstruction?",
    options: [
      "21 inches minimum (24 inches preferred)",
      "6 inches",
      "36 inches minimum",
      "No minimum clearance required",
    ],
    correctAnswer: 0,
    explanation:
      "马桶前方从马桶前缘到任何障碍物的推荐净空为最少21英寸（首选24英寸）。这确保了使用者的舒适度和安全性。",
    category: "plumbing",
  },
  {
    id: 924,
    question: "What is the function of an AAV (Air Admittance Valve) in a plumbing vent system?",
    options: [
      "To allow air into the drain system to prevent siphoning of traps, without requiring a pipe through the roof",
      "To release excess air pressure from the water supply",
      "To control water temperature at fixtures",
      "To prevent water from entering the vent system",
    ],
    correctAnswer: 0,
    explanation:
      "空气导入阀（AAV）允许空气进入排水系统以防止存水弯虹吸，而无需通过屋顶安装通风管。它在改造项目中特别有用，但不能替代所有通风管。",
    category: "plumbing",
  },
  {
    id: 925,
    question: "A home inspector notices the water heater is sitting in a drain pan with no drain connected. This should be reported because:",
    options: [
      "The drain pan should be connected to an approved drain location to prevent water damage if the heater leaks",
      "Drain pans are never required in California",
      "The pan is only decorative",
      "The pan should be removed immediately",
    ],
    correctAnswer: 0,
    explanation:
      "热水器接水盘应连接到经批准的排水位置，以防止热水器泄漏时造成水损害。加州要求在损坏敏感区域（如阁楼或壁橱）安装的热水器使用接水盘。",
    category: "plumbing",
  },
  {
    id: 926,
    question: "What type of water pipe material was commonly used in homes built from the 1940s to the 1960s and is known for internal corrosion?",
    options: [
      "Galvanized steel",
      "PEX",
      "CPVC",
      "PVC",
    ],
    correctAnswer: 0,
    explanation:
      "镀锌钢管在1940年代到1960年代建造的住宅中常用，以内部腐蚀而闻名。随着时间推移，锌涂层腐蚀后铁管开始生锈，减少水流并影响水质。",
    category: "plumbing",
  },
  {
    id: 927,
    question: "What is the purpose of a sediment trap (drip leg) on a gas appliance connection?",
    options: [
      "To capture moisture and debris in the gas line before it reaches the appliance controls",
      "To increase gas pressure",
      "To measure gas flow rate",
      "To vent excess gas to the outdoors",
    ],
    correctAnswer: 0,
    explanation:
      "沉积物收集器（滴水管）的目的是在燃气到达设备控制装置之前捕获燃气管线中的水分和碎屑。这保护了精密的燃气阀门和燃烧器免受损坏。",
    category: "plumbing",
  },
  {
    id: 928,
    question: "California's CALGreen code requires new residential construction to include plumbing provisions for:",
    options: [
      "Future installation of a greywater recycling system",
      "Swimming pool connections in all homes",
      "Industrial water treatment",
      "Fire sprinkler connections only",
    ],
    correctAnswer: 0,
    explanation:
      "加州的CALGreen法规要求新住宅建设包括未来安装灰水回收系统的管道预留。这促进了水资源的可持续利用，即使房主不立即安装灰水系统。",
    category: "plumbing",
  },
  {
    id: 929,
    question: "What is the purpose of a balancing valve in a hot water recirculation system?",
    options: [
      "To ensure equal flow distribution through all branches of the recirculation loop",
      "To stop all water flow in an emergency",
      "To filter contaminants from the hot water",
      "To increase water temperature",
    ],
    correctAnswer: 0,
    explanation:
      "循环热水系统中平衡阀的目的是确保通过循环回路所有分支的流量均匀分配。这确保所有固定装置都能快速获得热水。",
    category: "plumbing",
  },
  {
    id: 930,
    question: "When a reverse osmosis system is installed under a kitchen sink, the reject water (brine) should be directed to:",
    options: [
      "The sink drain through an air gap fitting",
      "A sealed container for drinking",
      "The hot water supply line",
      "Outside to irrigate vegetable gardens directly",
    ],
    correctAnswer: 0,
    explanation:
      "当反渗透系统安装在厨房水槽下方时，废水（盐水）应通过空气间隙配件排入水槽排水管。空气间隙防止排水管中的废水回流到RO系统。",
    category: "plumbing",
  },
  {
    id: 931,
    question: "What is the minimum water heater capacity generally recommended for a 3-bedroom, 2-bathroom California home with a tank-type heater?",
    options: [
      "40-50 gallons",
      "10-15 gallons",
      "80-100 gallons",
      "5 gallons",
    ],
    correctAnswer: 0,
    explanation:
      "对于3卧2卫的加州住宅，储水式热水器的一般推荐最小容量为40-50加仑。实际需求取决于家庭人数和用水习惯。",
    category: "plumbing",
  },
  {
    id: 932,
    question: "ProPress copper fittings can be identified during inspection by:",
    options: [
      "The visible crimp marks and green O-ring indicator on the fitting",
      "Solder residue around the joint",
      "Purple primer marks on the fitting",
      "Thread marks on the copper pipe",
    ],
    correctAnswer: 0,
    explanation:
      "ProPress铜管接头可以通过接头上可见的压接痕迹和绿色O型圈标识来识别。与焊接接头不同，ProPress接头周围不会有焊料残留。",
    category: "plumbing",
  },
  {
    id: 933,
    question: "What is the concern with using flexible accordion-style drain traps under sinks?",
    options: [
      "They collect debris in the ridges, are prone to leaking, and are not code-compliant in most jurisdictions",
      "They are too expensive",
      "They are too short to form a proper trap",
      "They are the preferred type by all plumbing codes",
    ],
    correctAnswer: 0,
    explanation:
      "柔性手风琴式排水弯管的问题是碎屑会聚集在褶皱中，容易泄漏，并且在大多数管辖区不符合规范。应使用标准的刚性P型弯管。",
    category: "plumbing",
  },
  {
    id: 934,
    question: "What is the proper method for connecting ABS pipe to PVC pipe in a drain system?",
    options: [
      "Using a transition coupling (such as a Fernco or banded coupling); direct solvent cementing ABS to PVC is not permitted",
      "Direct solvent cementing with ABS cement",
      "Using PVC primer on both pipes",
      "Wrapping the joint with duct tape",
    ],
    correctAnswer: 0,
    explanation:
      "连接ABS管与PVC管的正确方法是使用转换接头（如Fernco或带夹接头）。不允许直接用溶剂胶水将ABS粘接到PVC，因为不同材料的胶水不兼容。",
    category: "plumbing",
  },
  {
    id: 935,
    question: "What is a tankless coil water heater?",
    options: [
      "A water heating system where domestic water is heated by a coil inside the boiler without a separate storage tank",
      "A standard tank water heater with no coils",
      "A solar water heater with coiled tubes",
      "An electric heater with a removable tank",
    ],
    correctAnswer: 0,
    explanation:
      "无罐盘管热水器是一种家用水加热系统，水通过锅炉内的盘管加热，无需单独的储水罐。这在使用锅炉供暖的旧式家庭中较为常见。",
    category: "plumbing",
  },
  {
    id: 936,
    question: "What should an inspector note about a water supply line running through a concrete slab?",
    options: [
      "The pipe should be sleeved where it penetrates the slab to allow for movement and prevent abrasion",
      "Pipes through slabs are always a code violation",
      "No special considerations are needed",
      "Only copper pipes can run through slabs",
    ],
    correctAnswer: 0,
    explanation:
      "穿过混凝土板的供水管应在穿越处使用套管，以允许管道移动并防止磨损。管道与混凝土直接接触可能导致腐蚀和泄漏。",
    category: "plumbing",
  },
  {
    id: 937,
    question: "What is the primary risk of a cross-connection in a plumbing system?",
    options: [
      "Contaminated water could flow back into the potable water supply",
      "Water pressure increases dangerously",
      "Pipes freeze more easily",
      "Hot water reaches cold water fixtures",
    ],
    correctAnswer: 0,
    explanation:
      "交叉连接在管道系统中的主要风险是污染水可能回流到饮用水供应系统中。这就是为什么需要回流防止装置和空气间隙来保护公共供水。",
    category: "plumbing",
  },
  {
    id: 938,
    question: "A properly installed shower pan liner should extend up the walls by at least:",
    options: [
      "3 inches above the top of the shower curb or threshold",
      "1/2 inch above the shower floor only",
      "To the ceiling",
      "No liner is needed for shower pans",
    ],
    correctAnswer: 0,
    explanation:
      "正确安装的淋浴盘防水层应延伸到淋浴门槛或门槛顶部以上至少3英寸。这确保水被导向排水口而不是渗入底层地板结构。",
    category: "plumbing",
  },
  {
    id: 939,
    question: "In California, a water heater installed in a closet or alcove must have:",
    options: [
      "Adequate combustion air openings if it is a gas unit, per manufacturer specifications and code",
      "No ventilation whatsoever",
      "Only a smoke detector",
      "A window for natural light",
    ],
    correctAnswer: 0,
    explanation:
      "在加州，安装在壁橱或壁龛中的燃气热水器必须按照制造商规格和规范有足够的燃烧空气开口。不足的燃烧空气会导致不完全燃烧和一氧化碳产生。",
    category: "plumbing",
  },
  {
    id: 940,
    question: "What does a home inspector look for when evaluating a sewer lateral using a camera inspection?",
    options: [
      "Root intrusion, pipe offsets, bellies, cracks, blockages, and pipe material/condition",
      "Only whether water flows through the pipe",
      "The color of the pipe",
      "Whether the pipe has a brand name stamped on it",
    ],
    correctAnswer: 0,
    explanation:
      "使用摄像头检查下水道侧管时，检查员查看树根侵入、管道偏移、下沉、裂缝、堵塞以及管道材料和状况。这提供了管道内部状况的详细信息。",
    category: "plumbing",
  },
  {
    id: 941,
    question: "What is the primary concern with a belly (sag) in a sewer line?",
    options: [
      "Wastewater and debris can pool at the low point, leading to recurring blockages",
      "The pipe will immediately collapse",
      "Water flows too fast through the line",
      "It improves drainage efficiency",
    ],
    correctAnswer: 0,
    explanation:
      "下水道管线中下沉（凹陷）的主要问题是废水和碎屑会在最低点积聚，导致反复堵塞。这也可能导致管道腐蚀和最终的管道失效。",
    category: "plumbing",
  },
  {
    id: 942,
    question: "What is the standard dimension for the center-to-center distance between hot and cold water supply pipes at a lavatory?",
    options: [
      "8 inches",
      "4 inches",
      "12 inches",
      "2 inches",
    ],
    correctAnswer: 1,
    explanation:
      "洗脸盆冷热水供应管的标准中心距为4英寸（适用于4英寸中心的水龙头）。也有8英寸中心距的宽幅水龙头。检查员应注意供水管间距是否与水龙头类型匹配。",
    category: "plumbing",
  },
  {
    id: 943,
    question: "What is the danger of using an undersized expansion tank?",
    options: [
      "The T&P relief valve may discharge frequently as the tank cannot absorb sufficient thermal expansion",
      "Water will freeze in the pipes",
      "The water heater will not ignite",
      "There is no danger; any size works",
    ],
    correctAnswer: 0,
    explanation:
      "使用过小的膨胀罐的危险是T&P泄压阀可能频繁排放，因为膨胀罐无法吸收足够的热膨胀。长期来看，这会导致阀门磨损和潜在的安全问题。",
    category: "plumbing",
  },
  {
    id: 944,
    question: "An inspector testing the water flow at multiple fixtures simultaneously notices a significant pressure drop. The most likely cause is:",
    options: [
      "Undersized main water supply line or restriction from corrosion/mineral buildup",
      "The water heater thermostat is set too high",
      "The roof vents are blocked",
      "The sewer line is clogged",
    ],
    correctAnswer: 0,
    explanation:
      "同时在多个固定装置测试水流时出现明显压力下降，最可能的原因是主供水管线尺寸不足或因腐蚀/矿物沉积而受限。这在有镀锌钢管的老房子中很常见。",
    category: "plumbing",
  },
  {
    id: 945,
    question: "What is the minimum clearance required between a gas water heater and combustible materials?",
    options: [
      "As specified by the manufacturer's label, typically 1-6 inches depending on the side",
      "No clearance is needed for modern units",
      "At least 5 feet on all sides",
      "Only 1/4 inch on all sides",
    ],
    correctAnswer: 0,
    explanation:
      "燃气热水器与可燃材料之间的最小间距应按制造商标签规定，通常根据不同侧面为1-6英寸不等。检查员应始终参考设备上的标签确定正确间距。",
    category: "plumbing",
  },
  {
    id: 946,
    question: "What does the recovery rate of a water heater refer to?",
    options: [
      "The number of gallons of water the heater can raise by 90°F in one hour",
      "How fast the heater cools down after being turned off",
      "The time it takes to install the heater",
      "The resale value of the heater",
    ],
    correctAnswer: 0,
    explanation:
      "热水器的恢复率是指热水器在一小时内能将多少加仑水升温90°F。较高的恢复率意味着热水器能更快地补充热水供应。",
    category: "plumbing",
  },
  {
    id: 947,
    question: "A water heater's EF (Energy Factor) rating indicates:",
    options: [
      "The overall energy efficiency of the water heater, with higher numbers indicating greater efficiency",
      "The maximum temperature the heater can reach",
      "The noise level during operation",
      "The physical size of the unit",
    ],
    correctAnswer: 0,
    explanation:
      "热水器的EF（能量因子）等级表示热水器的整体能源效率，数值越高效率越高。它考虑了加热效率、待机损失和循环效率。",
    category: "plumbing",
  },
  {
    id: 948,
    question: "What type of valve should be installed on the cold water inlet to a water heater for service and maintenance?",
    options: [
      "A full-port shut-off valve (ball valve or gate valve)",
      "A check valve",
      "A relief valve",
      "No valve is needed",
    ],
    correctAnswer: 0,
    explanation:
      "热水器冷水入口应安装全通径关断阀（球阀或闸阀），以便于维修和维护。这允许在不关闭整个房屋供水的情况下对热水器进行服务。",
    category: "plumbing",
  },
  {
    id: 949,
    question: "In a PEX manifold system, what color handle typically indicates a hot water line shutoff?",
    options: [
      "Red",
      "Blue",
      "Green",
      "Yellow",
    ],
    correctAnswer: 0,
    explanation:
      "在PEX分配歧管系统中，红色手柄通常表示热水线路关断阀。蓝色手柄用于冷水线路。这种颜色编码有助于快速识别和控制各条水管。",
    category: "plumbing",
  },
  {
    id: 950,
    question: "What is the purpose of a dedicated return line in a hot water recirculation system?",
    options: [
      "To carry cooled water from the end of the hot water loop back to the water heater for reheating",
      "To supply cold water to the kitchen",
      "To drain the water heater for maintenance",
      "To vent sewer gases outdoors",
    ],
    correctAnswer: 0,
    explanation:
      "循环热水系统中专用回水管的目的是将热水回路末端冷却的水输送回热水器重新加热。这确保了即开即有热水，减少了水的浪费。",
    category: "plumbing",
  },

  // ========== HVAC (951-1100) ==========
  {
    id: 951,
    question: "California's Title 24 energy code requires HVAC systems in new construction to meet what primary standard?",
    options: [
      "Minimum energy efficiency requirements including equipment ratings and duct insulation standards",
      "Only aesthetic appearance requirements",
      "Maximum noise level standards only",
      "No specific HVAC standards exist in Title 24",
    ],
    correctAnswer: 0,
    explanation:
      "加州Title 24能源法规要求新建筑中的HVAC系统满足最低能效要求，包括设备评级和管道保温标准。这是加州最严格的建筑能效法规之一。",
    category: "hvac",
  },
  {
    id: 952,
    question: "What does HERS stand for in the context of California energy compliance?",
    options: [
      "Home Energy Rating System",
      "Heating Equipment Repair Standard",
      "High Efficiency Residential System",
      "Home Exhaust Regulation Specification",
    ],
    correctAnswer: 0,
    explanation:
      "HERS代表家庭能源评级系统（Home Energy Rating System）。在加州，HERS评估师对新建和改造住宅进行测试，以验证是否符合Title 24能源标准。",
    category: "hvac",
  },
  {
    id: 953,
    question: "Duct leakage testing in California is required for new construction to verify that duct systems:",
    options: [
      "Do not exceed the maximum allowable leakage rate specified by Title 24",
      "Are painted the correct color",
      "Are made of a specific material",
      "Have been installed by a licensed contractor only",
    ],
    correctAnswer: 0,
    explanation:
      "加州要求新建筑进行管道泄漏测试，以验证管道系统不超过Title 24规定的最大允许泄漏率。管道泄漏是能源浪费和舒适度降低的主要原因。",
    category: "hvac",
  },
  {
    id: 954,
    question: "Manual J is a calculation method used to determine:",
    options: [
      "The heating and cooling load of a building to properly size HVAC equipment",
      "The cost of HVAC installation",
      "The age of existing HVAC equipment",
      "The noise level of an air conditioning unit",
    ],
    correctAnswer: 0,
    explanation:
      "Manual J是一种用于确定建筑物加热和冷却负荷的计算方法，以正确选择HVAC设备尺寸。尺寸不当的设备会导致舒适度差、能源浪费和设备寿命缩短。",
    category: "hvac",
  },
  {
    id: 955,
    question: "Manual D is used to design:",
    options: [
      "The duct system layout, including sizing of ducts for proper airflow distribution",
      "The electrical wiring for HVAC systems",
      "The plumbing connections for HVAC equipment",
      "The foundation for outdoor HVAC units",
    ],
    correctAnswer: 0,
    explanation:
      "Manual D用于设计管道系统布局，包括管道尺寸以实现适当的气流分配。正确设计的管道系统确保每个房间获得计算所需的空气量。",
    category: "hvac",
  },
  {
    id: 956,
    question: "What does MERV stand for in air filter ratings?",
    options: [
      "Minimum Efficiency Reporting Value",
      "Maximum Energy Recovery Ventilation",
      "Mechanical Exhaust Rating Value",
      "Measured Environmental Resistance Value",
    ],
    correctAnswer: 0,
    explanation:
      "MERV代表最低效率报告值（Minimum Efficiency Reporting Value）。MERV评级从1到20，数值越高表示过滤器捕获的颗粒越小，过滤效率越高。",
    category: "hvac",
  },
  {
    id: 957,
    question: "For a typical residential HVAC system, what MERV rating range provides a good balance between filtration and airflow?",
    options: [
      "MERV 8 to MERV 13",
      "MERV 1 to MERV 4",
      "MERV 17 to MERV 20",
      "MERV rating does not matter",
    ],
    correctAnswer: 0,
    explanation:
      "对于典型住宅HVAC系统，MERV 8到MERV 13的评级提供了过滤效率和气流之间的良好平衡。更高的MERV评级可能限制气流，除非系统专门设计用于高效过滤。",
    category: "hvac",
  },
  {
    id: 958,
    question: "A HEPA filter is rated to remove what percentage of particles 0.3 microns or larger?",
    options: [
      "99.97%",
      "50%",
      "75%",
      "90%",
    ],
    correctAnswer: 0,
    explanation:
      "HEPA过滤器的额定值可去除99.97%的0.3微米或更大的颗粒。HEPA过滤器通常不用于标准住宅HVAC系统，因为它们的气流阻力太大。",
    category: "hvac",
  },
  {
    id: 959,
    question: "UV air purifiers installed in HVAC systems work by:",
    options: [
      "Using ultraviolet light to kill or deactivate bacteria, viruses, and mold spores",
      "Heating the air to extreme temperatures",
      "Releasing ozone to clean the air",
      "Creating a magnetic field to attract particles",
    ],
    correctAnswer: 0,
    explanation:
      "安装在HVAC系统中的紫外线空气净化器通过使用紫外线杀死或灭活细菌、病毒和霉菌孢子来工作。它们通常安装在蒸发器盘管附近以防止霉菌生长。",
    category: "hvac",
  },
  {
    id: 960,
    question: "What is the difference between an ERV (Energy Recovery Ventilator) and an HRV (Heat Recovery Ventilator)?",
    options: [
      "An ERV transfers both heat and moisture between air streams, while an HRV transfers only heat",
      "An HRV transfers both heat and moisture, while an ERV transfers only heat",
      "They are identical systems with different brand names",
      "An ERV heats air, while an HRV cools air",
    ],
    correctAnswer: 0,
    explanation:
      "ERV（能量回收通风机）在气流之间传递热量和湿度，而HRV（热量回收通风机）仅传递热量。在加州干燥的气候中，ERV可以帮助保留室内湿度。",
    category: "hvac",
  },
  {
    id: 961,
    question: "A zoning system in HVAC allows:",
    options: [
      "Different areas of the home to be heated or cooled independently using motorized dampers and multiple thermostats",
      "Only one temperature setting for the entire home",
      "Automatic switching between heating and cooling modes only",
      "The system to run continuously without cycling",
    ],
    correctAnswer: 0,
    explanation:
      "HVAC分区系统允许使用电动风阀和多个恒温器独立加热或冷却家庭的不同区域。这提高了舒适度和能效，特别是在多层住宅中。",
    category: "hvac",
  },
  {
    id: 962,
    question: "What advantage do smart thermostats offer over traditional programmable thermostats?",
    options: [
      "They learn occupancy patterns and can be controlled remotely via smartphone apps, optimizing energy use",
      "They are always less expensive",
      "They do not require any power source",
      "They only work with gas furnaces",
    ],
    correctAnswer: 0,
    explanation:
      "智能恒温器比传统可编程恒温器的优势在于它们能学习居住模式，可通过智能手机应用远程控制，优化能源使用。它们还可以提供能源使用报告。",
    category: "hvac",
  },
  {
    id: 963,
    question: "A variable speed blower motor in a furnace provides what benefits?",
    options: [
      "More even temperature distribution, quieter operation, and improved energy efficiency",
      "Higher noise levels during operation",
      "Faster heating but reduced cooling ability",
      "No benefits compared to single-speed motors",
    ],
    correctAnswer: 0,
    explanation:
      "炉中的变速鼓风机电机提供更均匀的温度分配、更安静的运行和改善的能效。它可以在较低速度下长时间运行，而不是频繁的全速开关循环。",
    category: "hvac",
  },
  {
    id: 964,
    question: "What is the difference between a single-stage and a two-stage furnace?",
    options: [
      "A two-stage furnace has two levels of heat output (low and high), while a single-stage operates at full capacity only",
      "A single-stage furnace is more efficient than a two-stage",
      "A two-stage furnace only heats water",
      "There is no practical difference",
    ],
    correctAnswer: 0,
    explanation:
      "两级炉有两个热输出级别（低和高），而单级炉仅以全容量运行。两级炉大部分时间在低档运行，更安静、更高效、温度更均匀。",
    category: "hvac",
  },
  {
    id: 965,
    question: "A modulating furnace differs from a two-stage furnace in that it:",
    options: [
      "Can adjust its heat output incrementally, anywhere from about 40% to 100% capacity, for precise temperature control",
      "Has only one fixed output level",
      "Is less efficient than a single-stage furnace",
      "Cannot be used with a thermostat",
    ],
    correctAnswer: 0,
    explanation:
      "调节式炉与两级炉的区别在于它可以增量调节热输出，从大约40%到100%的容量，实现精确的温度控制。这提供了最高水平的舒适度和效率。",
    category: "hvac",
  },
  {
    id: 966,
    question: "What is the difference between a packaged HVAC unit and a split system?",
    options: [
      "A packaged unit contains all components in one outdoor cabinet, while a split system has indoor and outdoor components",
      "A split system is always more expensive",
      "A packaged unit can only cool, not heat",
      "There is no difference",
    ],
    correctAnswer: 0,
    explanation:
      "组合式HVAC设备将所有组件包含在一个室外机柜中，而分体式系统有室内和室外组件。组合式设备在加州常见于空间有限或屋顶安装的场所。",
    category: "hvac",
  },
  {
    id: 967,
    question: "Rooftop HVAC units (RTUs) are commonly found on what type of California building?",
    options: [
      "Commercial buildings and some multi-family residential buildings",
      "Single-family homes exclusively",
      "Only government buildings",
      "Only buildings built before 1950",
    ],
    correctAnswer: 0,
    explanation:
      "屋顶HVAC设备（RTU）通常见于商业建筑和一些多户住宅建筑。它们节省了建筑物内的空间，但检查员应确保屋顶结构能够支撑设备重量。",
    category: "hvac",
  },
  {
    id: 968,
    question: "A through-the-wall HVAC unit is typically found in:",
    options: [
      "Hotels, apartments, and condominiums where individual room control is desired",
      "Large single-family homes only",
      "Industrial warehouses",
      "Only outdoor installations",
    ],
    correctAnswer: 0,
    explanation:
      "穿墙式HVAC设备通常见于酒店、公寓和共管公寓，需要单个房间控制的场所。它们安装在外墙的开口中，既能加热又能冷却。",
    category: "hvac",
  },
  {
    id: 969,
    question: "Evaporative coolers (swamp coolers) work best in what type of climate?",
    options: [
      "Hot and dry climates with low humidity, such as inland California",
      "Hot and humid climates",
      "Cold and wet climates",
      "They work equally well in all climates",
    ],
    correctAnswer: 0,
    explanation:
      "蒸发式冷却器（沼泽冷却器）在炎热干燥、低湿度的气候中工作最佳，如加州内陆地区。它们通过蒸发水来冷却空气，在潮湿气候中效果大大降低。",
    category: "hvac",
  },
  {
    id: 970,
    question: "Why are evaporative coolers not effective in coastal California?",
    options: [
      "Coastal areas have higher humidity, reducing the evaporation rate and cooling capacity",
      "Coastal areas are always cold and don't need cooling",
      "Evaporative coolers cannot handle salt air",
      "They use too much electricity in coastal regions",
    ],
    correctAnswer: 0,
    explanation:
      "蒸发式冷却器在沿海加州不太有效，因为沿海地区湿度较高，降低了蒸发率和冷却能力。蒸发冷却的效果与空气的干燥程度直接相关。",
    category: "hvac",
  },
  {
    id: 971,
    question: "Hydronic heating systems distribute heat through:",
    options: [
      "Hot water circulating through pipes and radiators, baseboard heaters, or radiant floor tubing",
      "Forced air through ductwork only",
      "Electric resistance cables in the ceiling",
      "Direct combustion of gas in each room",
    ],
    correctAnswer: 0,
    explanation:
      "水力供暖系统通过热水在管道、散热器、踢脚板加热器或辐射地板管中循环来分配热量。这种系统提供安静、均匀的供暖，在某些加州住宅中使用。",
    category: "hvac",
  },
  {
    id: 972,
    question: "Radiant floor heating operates by:",
    options: [
      "Warming the floor surface, which then radiates heat upward to warm occupants and objects in the room",
      "Blowing warm air through floor vents",
      "Using ultraviolet lamps beneath the floor",
      "Circulating refrigerant under the flooring",
    ],
    correctAnswer: 0,
    explanation:
      "辐射地板供暖通过加热地板表面来运作，然后向上辐射热量来温暖房间中的居住者和物体。它可以使用热水管或电加热电缆实现。",
    category: "hvac",
  },
  {
    id: 973,
    question: "Baseboard heaters in residential applications are typically what type?",
    options: [
      "Electric resistance or hot water (hydronic)",
      "Gas-fired with an open flame",
      "Solar-powered only",
      "Compressed air-driven",
    ],
    correctAnswer: 0,
    explanation:
      "住宅中的踢脚板加热器通常是电阻式或热水（水力）式。电阻式更容易安装但运行成本较高，水力式效率更高但需要锅炉系统。",
    category: "hvac",
  },
  {
    id: 974,
    question: "Wall furnaces are commonly found in what type of California housing?",
    options: [
      "Older homes, apartments, and smaller living spaces where central HVAC is not installed",
      "Only brand-new custom homes",
      "Only commercial buildings",
      "Only mobile homes",
    ],
    correctAnswer: 0,
    explanation:
      "壁炉式暖气通常见于较旧的住宅、公寓和未安装中央HVAC系统的较小居住空间中。它们直接安装在墙上，通过墙壁排气，为周围区域提供供暖。",
    category: "hvac",
  },
  {
    id: 975,
    question: "Floor furnaces were common in California homes built before the 1970s. What safety concern should an inspector note?",
    options: [
      "The exposed grate on the floor can become extremely hot and pose a burn risk, especially for children and pets",
      "Floor furnaces are the most efficient heating method available",
      "They produce no combustion byproducts",
      "They are always properly maintained",
    ],
    correctAnswer: 0,
    explanation:
      "在1970年代之前建造的加州住宅中常见的地板炉，其暴露的地面格栅可能变得极热，对儿童和宠物构成烫伤风险。这是检查员应注意的重要安全问题。",
    category: "hvac",
  },
  {
    id: 976,
    question: "What is a gravity furnace (octopus furnace) and why is it significant during an inspection?",
    options: [
      "A very old furnace that relies on natural convection to distribute heat; it may contain asbestos and have low efficiency",
      "A modern high-efficiency furnace",
      "A furnace that uses gravity to compress gas",
      "A wall-mounted electric heater",
    ],
    correctAnswer: 0,
    explanation:
      "重力炉（章鱼炉）是一种非常老式的炉，依靠自然对流分配热量。它在检查中重要，因为可能含有石棉，效率低下，并且可能存在安全隐患。",
    category: "hvac",
  },
  {
    id: 977,
    question: "When inspecting older ductwork, what hazardous material might be found wrapping joints or as insulation?",
    options: [
      "Asbestos-containing materials (tape, wrapping, or insulation)",
      "Fiberglass only",
      "Cotton fabric",
      "Rubber padding",
    ],
    correctAnswer: 0,
    explanation:
      "检查旧管道时，可能发现石棉含量材料（胶带、包裹或隔热材料）。石棉在1980年代之前广泛用于管道隔热。如果怀疑有石棉，应建议专业检测。",
    category: "hvac",
  },
  {
    id: 978,
    question: "R-22 refrigerant (Freon) was phased out in the United States because:",
    options: [
      "It depletes the ozone layer and is an HCFC (hydrochlorofluorocarbon) regulated under the Montreal Protocol",
      "It is too efficient and causes systems to overcool",
      "It is explosive and poses fire risk",
      "It was replaced by a cheaper alternative only",
    ],
    correctAnswer: 0,
    explanation:
      "R-22制冷剂（氟利昂）在美国被淘汰，因为它是一种消耗臭氧层的HCFC（氢氯氟烃），受《蒙特利尔议定书》管制。自2020年起，美国禁止生产和进口R-22。",
    category: "hvac",
  },
  {
    id: 979,
    question: "R-410A refrigerant replaced R-22 in most new residential systems. What is a key characteristic of R-410A?",
    options: [
      "It operates at higher pressures than R-22 and does not deplete the ozone layer",
      "It operates at lower pressures and is cheaper than R-22",
      "It is identical to R-22 in every way",
      "It can be directly dropped into R-22 systems",
    ],
    correctAnswer: 0,
    explanation:
      "R-410A制冷剂的关键特征是它在比R-22更高的压力下运行，且不消耗臭氧层。这就是为什么R-22系统不能简单地更换为R-410A——需要完全不同的设备。",
    category: "hvac",
  },
  {
    id: 980,
    question: "R-32 is a newer refrigerant gaining popularity. Its main advantage over R-410A is:",
    options: [
      "Lower global warming potential (GWP) and improved energy efficiency",
      "Lower operating pressure",
      "It is cheaper to manufacture",
      "It has no environmental impact at all",
    ],
    correctAnswer: 0,
    explanation:
      "R-32是一种更新的制冷剂，其主要优势是比R-410A具有更低的全球变暖潜力（GWP）和更高的能效。R-32的GWP约为R-410A的三分之一。",
    category: "hvac",
  },
  {
    id: 981,
    question: "What are the three main types of compressors used in residential HVAC systems?",
    options: [
      "Reciprocating, scroll, and rotary",
      "Centrifugal, screw, and absorption",
      "Diesel, gasoline, and propane",
      "Magnetic, pneumatic, and hydraulic",
    ],
    correctAnswer: 0,
    explanation:
      "住宅HVAC系统中使用的三种主要压缩机类型是往复式、涡旋式和旋转式。涡旋式压缩机因其可靠性和效率在现代系统中越来越常见。",
    category: "hvac",
  },
  {
    id: 982,
    question: "What is the function of a TXV (Thermostatic Expansion Valve) in an air conditioning system?",
    options: [
      "To precisely meter the flow of refrigerant into the evaporator coil based on the cooling load",
      "To control the fan speed of the blower",
      "To regulate the gas supply to the furnace",
      "To open and close the air filter compartment",
    ],
    correctAnswer: 0,
    explanation:
      "TXV（热力膨胀阀）的功能是根据冷却负荷精确计量进入蒸发器盘管的制冷剂流量。它比固定孔板更精确，提供更好的效率和温度控制。",
    category: "hvac",
  },
  {
    id: 983,
    question: "How does a piston (fixed orifice) metering device differ from a TXV?",
    options: [
      "A piston has a fixed opening size and cannot adjust to varying load conditions like a TXV can",
      "A piston is more expensive and complex than a TXV",
      "A piston provides better temperature control than a TXV",
      "There is no difference",
    ],
    correctAnswer: 0,
    explanation:
      "活塞式（固定孔板）计量装置与TXV的不同之处在于它有固定的开口尺寸，无法像TXV那样调节适应不同的负荷条件。TXV在变化的条件下提供更好的性能。",
    category: "hvac",
  },
  {
    id: 984,
    question: "Subcooling in an air conditioning system refers to:",
    options: [
      "Cooling the liquid refrigerant below its condensing temperature before it reaches the expansion device",
      "Cooling the air below room temperature",
      "Freezing the evaporator coil",
      "The temperature of the outdoor air",
    ],
    correctAnswer: 0,
    explanation:
      "过冷是指在液态制冷剂到达膨胀装置之前将其冷却到低于冷凝温度。正确的过冷度表明系统充注量正确且冷凝器运行良好。",
    category: "hvac",
  },
  {
    id: 985,
    question: "Superheat in an air conditioning system refers to:",
    options: [
      "Heating the refrigerant vapor above its boiling point as it exits the evaporator coil",
      "The maximum temperature the system can produce",
      "Overheating of the compressor motor",
      "The outdoor air temperature on a hot day",
    ],
    correctAnswer: 0,
    explanation:
      "过热是指制冷剂蒸气在离开蒸发器盘管时被加热到其沸点以上的温度。正确的过热度确保只有气态制冷剂返回压缩机，防止液击损坏。",
    category: "hvac",
  },
  {
    id: 986,
    question: "A ductless mini-split system is characterized by:",
    options: [
      "An outdoor compressor/condenser connected to one or more indoor air-handling units via refrigerant lines, with no ductwork required",
      "A single indoor unit with ductwork to all rooms",
      "An outdoor unit only, with no indoor components",
      "A window-mounted unit with built-in ducts",
    ],
    correctAnswer: 0,
    explanation:
      "无管道迷你分体系统的特点是室外压缩机/冷凝器通过制冷剂管线连接到一个或多个室内空气处理单元，无需管道。它在加州改造项目中非常受欢迎。",
    category: "hvac",
  },
  {
    id: 987,
    question: "What is a VRF (Variable Refrigerant Flow) system?",
    options: [
      "An advanced HVAC system that varies the amount of refrigerant flowing to multiple indoor units, allowing simultaneous heating and cooling in different zones",
      "A simple window air conditioner",
      "A type of gas furnace",
      "A water-based heating system only",
    ],
    correctAnswer: 0,
    explanation:
      "VRF（变制冷剂流量）系统是一种先进的HVAC系统，可以改变流向多个室内单元的制冷剂量，允许在不同区域同时进行加热和冷却。它在商业和高端住宅中使用。",
    category: "hvac",
  },
  {
    id: 988,
    question: "Geothermal heat pumps in California extract heat from:",
    options: [
      "The relatively constant temperature of the earth below the frost line using ground loops",
      "Hot springs on the property only",
      "The sun directly through solar panels",
      "Natural gas combustion underground",
    ],
    correctAnswer: 0,
    explanation:
      "加州的地热热泵利用地下回路从冻土线以下相对恒定的地球温度中提取热量。地球表层以下的温度常年保持在约55-60°F，可以高效地用于加热和冷却。",
    category: "hvac",
  },
  {
    id: 989,
    question: "When sizing gas lines for a furnace, the inspector should understand that the gas line must:",
    options: [
      "Be large enough to deliver the required volume of gas to the furnace at the correct pressure, per the manufacturer's specifications",
      "Always be the smallest pipe available",
      "Be the same size regardless of furnace BTU rating",
      "Only be sized based on pipe color",
    ],
    correctAnswer: 0,
    explanation:
      "为炉灶选择燃气管线尺寸时，管线必须足够大，能按制造商规格在正确压力下向炉灶输送所需体积的燃气。燃气管线过小会导致设备性能不佳。",
    category: "hvac",
  },
  {
    id: 990,
    question: "What is the minimum SEER2 (Seasonal Energy Efficiency Ratio) rating required for new air conditioning systems in California as of recent code updates?",
    options: [
      "15 SEER2 for split systems in the Southwest region including most of California",
      "8 SEER2",
      "5 SEER2",
      "No minimum exists",
    ],
    correctAnswer: 0,
    explanation:
      "根据最新规范更新，加州（作为西南地区的一部分）新空调分体系统的最低SEER2评级要求为15。更高的SEER2值意味着更高的能效和更低的运行成本。",
    category: "hvac",
  },
  {
    id: 991,
    question: "What does AFUE (Annual Fuel Utilization Efficiency) measure?",
    options: [
      "The percentage of fuel energy that is converted to useful heat by a furnace over a heating season",
      "The cooling capacity of an air conditioner",
      "The noise level of a heat pump",
      "The lifespan of a furnace",
    ],
    correctAnswer: 0,
    explanation:
      "AFUE（年度燃料利用效率）测量一个供暖季节中炉子将燃料能量转化为有用热量的百分比。例如，95% AFUE意味着每使用1美元的燃气，95美分转化为热量。",
    category: "hvac",
  },
  {
    id: 992,
    question: "A high-efficiency condensing furnace is identified by:",
    options: [
      "An AFUE of 90% or higher and a PVC vent pipe instead of a metal flue",
      "A large brick chimney",
      "A single-wall metal vent pipe",
      "No vent pipe at all",
    ],
    correctAnswer: 0,
    explanation:
      "高效冷凝式炉的特征是AFUE为90%或更高，使用PVC排气管而非金属烟道。它从排气中提取额外热量，产生冷凝水，因此需要冷凝水排放管。",
    category: "hvac",
  },
  {
    id: 993,
    question: "What safety device shuts off the gas supply to a furnace if the flame is not detected?",
    options: [
      "Flame sensor (or thermocouple in older units)",
      "The air filter",
      "The blower motor",
      "The thermostat",
    ],
    correctAnswer: 0,
    explanation:
      "火焰传感器（或旧设备中的热电偶）是在未检测到火焰时关闭炉子燃气供应的安全装置。这防止了未点燃的燃气积聚，消除了爆炸风险。",
    category: "hvac",
  },
  {
    id: 994,
    question: "What is the purpose of the limit switch in a furnace?",
    options: [
      "To shut off the gas burner if the heat exchanger reaches an unsafe temperature",
      "To control the blower speed",
      "To regulate refrigerant flow",
      "To turn on the air conditioner",
    ],
    correctAnswer: 0,
    explanation:
      "限位开关的目的是在换热器达到不安全温度时关闭燃气燃烧器。这是一个关键的安全装置，防止换热器过热和可能的裂纹，避免一氧化碳泄漏。",
    category: "hvac",
  },
  {
    id: 995,
    question: "A cracked heat exchanger in a furnace is a serious concern because:",
    options: [
      "Combustion gases including carbon monoxide can enter the conditioned air stream and the living space",
      "It improves furnace efficiency",
      "It causes the furnace to run louder but is otherwise safe",
      "It only affects the warranty, not safety",
    ],
    correctAnswer: 0,
    explanation:
      "炉中裂缝的换热器是严重问题，因为包括一氧化碳在内的燃烧气体可以进入调节空气流和居住空间。这是一种潜在致命的安全隐患，需要立即维修或更换。",
    category: "hvac",
  },
  {
    id: 996,
    question: "How can a home inspector perform a preliminary check for a cracked heat exchanger?",
    options: [
      "Observe the burner flames for flickering or color change when the blower activates, which may indicate a crack",
      "By measuring the outdoor temperature",
      "By checking the thermostat battery",
      "A home inspector cannot check for heat exchanger cracks in any way",
    ],
    correctAnswer: 0,
    explanation:
      "检查员可以在鼓风机启动时观察燃烧器火焰是否闪烁或变色，这可能表示有裂纹。火焰扰动表明空气正通过裂纹进入燃烧室。但确认需要专业HVAC技术人员。",
    category: "hvac",
  },
  {
    id: 997,
    question: "What is the typical lifespan of a residential central air conditioning system?",
    options: [
      "15-20 years",
      "3-5 years",
      "40-50 years",
      "1-2 years",
    ],
    correctAnswer: 0,
    explanation:
      "住宅中央空调系统的典型使用寿命为15-20年。实际寿命取决于维护质量、使用频率和安装质量。检查员应注意系统的年龄和当前状况。",
    category: "hvac",
  },
  {
    id: 998,
    question: "What is the typical lifespan of a residential gas furnace?",
    options: [
      "15-25 years",
      "3-5 years",
      "50-60 years",
      "1-2 years",
    ],
    correctAnswer: 0,
    explanation:
      "住宅燃气炉的典型使用寿命为15-25年。适当维护可以延长使用寿命，但随着年龄增长，效率下降且安全风险增加。",
    category: "hvac",
  },
  {
    id: 999,
    question: "During a home inspection, the inspector notes that the furnace filter is extremely dirty. What problems can this cause?",
    options: [
      "Reduced airflow, strain on the blower motor, decreased efficiency, and potential overheating of the heat exchanger",
      "Increased cooling capacity",
      "Better air quality throughout the home",
      "No problems at all",
    ],
    correctAnswer: 0,
    explanation:
      "极脏的炉过滤器可导致气流减少、鼓风机电机负担增加、效率降低以及换热器可能过热。这强调了定期更换过滤器的重要性。",
    category: "hvac",
  },
  {
    id: 1000,
    question: "What is the purpose of the condensate drain line on a high-efficiency furnace?",
    options: [
      "To safely remove the acidic condensate water produced by the secondary heat exchanger",
      "To drain cooling refrigerant from the system",
      "To supply water to the humidifier",
      "To drain gas from the supply line",
    ],
    correctAnswer: 0,
    explanation:
      "高效炉冷凝水排放管的目的是安全排除二级换热器产生的酸性冷凝水。这种冷凝水pH值较低，需要正确排放到排水系统中。",
    category: "hvac",
  },
  {
    id: 1001,
    question: "What should an inspector check at the outdoor condenser unit during an HVAC inspection?",
    options: [
      "Adequate clearance around the unit, condition of the fins, level of the pad, electrical connections, and refrigerant line insulation",
      "Only the brand name",
      "Only whether it is running",
      "The color of the unit",
    ],
    correctAnswer: 0,
    explanation:
      "检查室外冷凝器单元时，检查员应检查设备周围是否有足够的间隙、翅片状况、底座水平度、电气连接和制冷剂管线保温。这些都影响系统性能和寿命。",
    category: "hvac",
  },
  {
    id: 1002,
    question: "What is the minimum clearance typically required around an outdoor condenser unit for proper airflow?",
    options: [
      "24 inches on the sides with at least 60 inches above (per manufacturer specifications)",
      "No clearance needed",
      "1 inch on all sides",
      "10 feet on all sides",
    ],
    correctAnswer: 0,
    explanation:
      "室外冷凝器单元通常需要侧面至少24英寸、上方至少60英寸的净空以确保适当的气流（按制造商规格）。不足的间隙会降低效率并缩短设备寿命。",
    category: "hvac",
  },
  {
    id: 1003,
    question: "What is the concern if the outdoor condenser pad is not level?",
    options: [
      "An unlevel pad can strain refrigerant lines, cause vibration, and lead to compressor oil migration issues",
      "The unit will produce more heat",
      "The pad color will fade",
      "There is no concern",
    ],
    correctAnswer: 0,
    explanation:
      "室外冷凝器底座不水平可能导致制冷剂管线受力、产生振动并引起压缩机油迁移问题。严重的倾斜可能影响压缩机的润滑和使用寿命。",
    category: "hvac",
  },
  {
    id: 1004,
    question: "Refrigerant line sets connecting the outdoor condenser to the indoor evaporator coil consist of:",
    options: [
      "A larger insulated suction line and a smaller liquid line",
      "Two identical uninsulated pipes",
      "A single large pipe",
      "Three insulated pipes of the same size",
    ],
    correctAnswer: 0,
    explanation:
      "连接室外冷凝器和室内蒸发器盘管的制冷剂管线组由一根较大的隔热吸气管和一根较小的液体管组成。吸气管需要隔热以防止冷凝和提高效率。",
    category: "hvac",
  },
  {
    id: 1005,
    question: "What does it indicate if the larger suction line at the outdoor condenser is not cold to the touch or sweating during cooling operation?",
    options: [
      "The system may be low on refrigerant or have another issue affecting cooling performance",
      "The system is operating at peak efficiency",
      "The system is brand new and still breaking in",
      "This is normal for all air conditioning systems",
    ],
    correctAnswer: 0,
    explanation:
      "如果制冷运行期间室外冷凝器处的较大吸气管不冷或没有凝结水，系统可能制冷剂不足或有其他影响制冷性能的问题。正常运行时该管应该是冷的。",
    category: "hvac",
  },
  {
    id: 1006,
    question: "What is the purpose of the evaporator coil in an air conditioning system?",
    options: [
      "To absorb heat from the indoor air as refrigerant evaporates from liquid to gas inside the coil",
      "To generate heat for the home",
      "To compress the refrigerant",
      "To filter dust from the air",
    ],
    correctAnswer: 0,
    explanation:
      "蒸发器盘管在空调系统中的作用是在制冷剂从液体蒸发为气体时从室内空气中吸收热量。这个过程冷却并除湿室内空气。",
    category: "hvac",
  },
  {
    id: 1007,
    question: "A frozen evaporator coil is commonly caused by:",
    options: [
      "Restricted airflow (dirty filter, closed registers) or low refrigerant charge",
      "Setting the thermostat too high",
      "Running the system in heating mode",
      "Using a filter with too low a MERV rating",
    ],
    correctAnswer: 0,
    explanation:
      "蒸发器盘管结冰通常由气流受限（脏过滤器、关闭的出风口）或制冷剂不足引起。两者都会导致盘管温度降至冰点以下，在盘管上形成冰层。",
    category: "hvac",
  },
  {
    id: 1008,
    question: "What is the primary function of the condenser coil in a split air conditioning system?",
    options: [
      "To release heat absorbed from inside the home by condensing refrigerant from gas to liquid",
      "To absorb heat from outdoor air",
      "To filter outdoor air before it enters the home",
      "To generate cool air directly",
    ],
    correctAnswer: 0,
    explanation:
      "分体式空调系统中冷凝器盘管的主要功能是通过将制冷剂从气体冷凝为液体来释放从室内吸收的热量。这个过程发生在室外单元中。",
    category: "hvac",
  },
  {
    id: 1009,
    question: "What type of ductwork material is most commonly used in California residential construction?",
    options: [
      "Flexible (flex) duct with an insulated outer layer",
      "Solid copper ductwork",
      "Cast iron ductwork",
      "Asbestos-cement ductwork",
    ],
    correctAnswer: 0,
    explanation:
      "加州住宅建筑中最常用的管道材料是带有隔热外层的柔性（软）管道。它安装方便、成本较低，但必须正确安装以避免过多弯曲和气流限制。",
    category: "hvac",
  },
  {
    id: 1010,
    question: "What common installation defect with flexible ductwork can reduce HVAC efficiency?",
    options: [
      "Excessive bending, kinking, or being too long, which restricts airflow",
      "Duct runs that are too straight",
      "Oversizing the flex duct",
      "Using too many support straps",
    ],
    correctAnswer: 0,
    explanation:
      "柔性管道过度弯曲、扭结或过长会限制气流，这是降低HVAC效率的常见安装缺陷。管道应尽可能拉直并适当支撑以保持气流畅通。",
    category: "hvac",
  },
  {
    id: 1011,
    question: "What is the purpose of a plenum in a duct system?",
    options: [
      "A main distribution box that connects to the air handler and distributes air to individual duct runs",
      "A type of air filter",
      "A thermostat housing",
      "A drain for condensate",
    ],
    correctAnswer: 0,
    explanation:
      "在管道系统中，送风箱是连接到空气处理器的主要分配箱，将空气分配到各个管道支路。正确尺寸和密封的送风箱对系统效率至关重要。",
    category: "hvac",
  },
  {
    id: 1012,
    question: "When inspecting a heat pump system, what is the function of the reversing valve?",
    options: [
      "To switch the flow of refrigerant between heating and cooling modes",
      "To reverse the blower motor direction",
      "To reverse the thermostat wiring",
      "To change the duct configuration",
    ],
    correctAnswer: 0,
    explanation:
      "在检查热泵系统时，换向阀的功能是在加热和冷却模式之间切换制冷剂的流动方向。这使热泵既能在夏天冷却又能在冬天加热。",
    category: "hvac",
  },
  {
    id: 1013,
    question: "A heat pump's auxiliary (emergency) heat strips are used when:",
    options: [
      "The outdoor temperature is too cold for the heat pump to efficiently extract heat, and additional heating is needed",
      "The air conditioning is running in summer",
      "The system is in cooling mode only",
      "The blower motor fails",
    ],
    correctAnswer: 0,
    explanation:
      "当室外温度太低以至于热泵无法有效提取热量时，辅助（紧急）电热条用于提供额外的供暖。在加州较温暖的地区，这些电热条很少使用。",
    category: "hvac",
  },
  {
    id: 1014,
    question: "What HSPF2 (Heating Seasonal Performance Factor) rating is considered minimum for heat pumps in California?",
    options: [
      "7.5 HSPF2 or higher as specified by federal and state efficiency standards",
      "1.0 HSPF2",
      "0.5 HSPF2",
      "No minimum exists",
    ],
    correctAnswer: 0,
    explanation:
      "加州热泵的最低HSPF2评级为7.5或更高，根据联邦和州效率标准规定。更高的HSPF2值表示更高的供暖效率和更低的运行成本。",
    category: "hvac",
  },
  {
    id: 1015,
    question: "What is the primary difference between a conventional air conditioner and a heat pump?",
    options: [
      "A heat pump can both heat and cool by reversing the refrigerant cycle, while a conventional AC can only cool",
      "A heat pump only heats, while an AC only cools",
      "There is no difference",
      "A heat pump uses gas for heating, while an AC uses electricity",
    ],
    correctAnswer: 0,
    explanation:
      "热泵与传统空调的主要区别是热泵可以通过反转制冷剂循环来加热和冷却，而传统空调只能冷却。热泵在加州温和的气候中特别高效。",
    category: "hvac",
  },
  {
    id: 1016,
    question: "What is the defrost cycle on a heat pump?",
    options: [
      "A periodic reversal to cooling mode to melt frost that accumulates on the outdoor coil during heating operation",
      "A cycle to defrost the indoor evaporator in summer",
      "A manual process requiring the homeowner to apply heat to the outdoor unit",
      "A setting on the thermostat for freezing weather only",
    ],
    correctAnswer: 0,
    explanation:
      "热泵的除霜循环是定期切换到冷却模式以融化加热运行期间在室外盘管上积聚的霜。这在室外温度接近冰点时自动发生，确保系统效率。",
    category: "hvac",
  },
  {
    id: 1017,
    question: "During inspection, the inspector observes water stains on the ceiling below an attic-mounted air handler. This most likely indicates:",
    options: [
      "A clogged condensate drain line causing the drain pan to overflow",
      "A roof leak only",
      "Normal operation of the HVAC system",
      "Excessive duct insulation",
    ],
    correctAnswer: 0,
    explanation:
      "阁楼安装的空气处理器下方天花板上的水渍最可能表明冷凝水排放管堵塞导致集水盘溢出。这是一个常见问题，可能导致天花板损坏和霉菌生长。",
    category: "hvac",
  },
  {
    id: 1018,
    question: "What is the purpose of a secondary (auxiliary) condensate drain pan under an attic-mounted air handler?",
    options: [
      "To catch condensate if the primary drain fails, preventing water damage to the ceiling and home below",
      "To collect rainwater from the roof",
      "To humidify the attic space",
      "To store refrigerant during maintenance",
    ],
    correctAnswer: 0,
    explanation:
      "阁楼安装的空气处理器下方二级（辅助）冷凝水集水盘的目的是在主排水管故障时接住冷凝水，防止水损坏下方的天花板和房屋。",
    category: "hvac",
  },
  {
    id: 1019,
    question: "California's Title 24 requires duct insulation of at least what R-value for ducts in unconditioned spaces?",
    options: [
      "R-8 for ducts 8 inches and larger in diameter; R-6 for smaller ducts",
      "No insulation is required",
      "R-1 for all duct sizes",
      "R-30 for all duct sizes",
    ],
    correctAnswer: 0,
    explanation:
      "加州Title 24要求非空调空间中的管道隔热值至少为R-8（直径8英寸及以上）和R-6（较小管道）。适当的管道隔热可防止能量损失和冷凝。",
    category: "hvac",
  },
  {
    id: 1020,
    question: "What is the danger of a disconnected or poorly sealed duct in an attic in California?",
    options: [
      "Conditioned air is lost to the attic, increasing energy costs and potentially drawing in unconditioned air or attic contaminants",
      "It improves ventilation in the attic",
      "It has no effect on energy use",
      "It cools the attic, which is beneficial",
    ],
    correctAnswer: 0,
    explanation:
      "加州阁楼中断开或密封不良的管道会导致调节空气损失到阁楼，增加能源成本，并可能吸入未调节的空气或阁楼污染物。这是常见的能效和室内空气质量问题。",
    category: "hvac",
  },
  {
    id: 1021,
    question: "What is return air and why is adequate return air important in an HVAC system?",
    options: [
      "Air drawn back to the air handler for reconditioning; insufficient return air causes pressure imbalances and reduced system efficiency",
      "Fresh air brought in from outdoors",
      "Air from the kitchen exhaust fan",
      "Air used only for combustion in a furnace",
    ],
    correctAnswer: 0,
    explanation:
      "回风是被吸回空气处理器进行重新调节的空气。充足的回风非常重要，因为回风不足会导致压力不平衡和系统效率降低，还可能影响室内空气质量。",
    category: "hvac",
  },
  {
    id: 1022,
    question: "What problem can occur when bedroom doors are closed in a home with a central return air grille?",
    options: [
      "Positive pressure builds in the bedroom, forcing conditioned air out through gaps, while creating negative pressure at the return, reducing system efficiency",
      "The bedroom gets too cold",
      "The air filter needs to be changed more frequently",
      "The furnace automatically shuts off",
    ],
    correctAnswer: 0,
    explanation:
      "在有中央回风格栅的住宅中关闭卧室门时，卧室内会产生正压，迫使调节空气通过缝隙泄出，同时在回风处产生负压，降低系统效率。",
    category: "hvac",
  },
  {
    id: 1023,
    question: "What is the recommended thermostat placement for accurate temperature sensing?",
    options: [
      "On an interior wall, approximately 5 feet above the floor, away from direct sunlight, heat sources, and drafts",
      "On an exterior wall near a window",
      "In the attic for easy access",
      "Directly above a heating register",
    ],
    correctAnswer: 0,
    explanation:
      "恒温器应安装在内墙上，距地面约5英尺，远离直射阳光、热源和气流。不当的位置会导致不准确的温度读数和不舒适的室内环境。",
    category: "hvac",
  },
  {
    id: 1024,
    question: "What does a \"short cycling\" furnace indicate?",
    options: [
      "The furnace is turning on and off frequently, possibly due to an oversized unit, dirty filter, faulty thermostat, or overheating",
      "The furnace runs continuously without stopping",
      "The furnace cycles once per day normally",
      "The furnace has been recently serviced",
    ],
    correctAnswer: 0,
    explanation:
      "\"短循环\"炉表示炉子频繁开关，可能由设备尺寸过大、脏过滤器、恒温器故障或过热引起。短循环会增加磨损、降低效率和减少舒适度。",
    category: "hvac",
  },
  {
    id: 1025,
    question: "An HVAC system that runs continuously without reaching the thermostat set temperature may indicate:",
    options: [
      "An undersized system, refrigerant leak, dirty coils, duct leaks, or inadequate insulation in the building",
      "A perfectly functioning system",
      "The thermostat is set too low",
      "The filter is brand new",
    ],
    correctAnswer: 0,
    explanation:
      "HVAC系统持续运行但无法达到恒温器设定温度可能表明系统尺寸不足、制冷剂泄漏、盘管脏、管道泄漏或建筑物隔热不足。需要进一步评估以确定原因。",
    category: "hvac",
  },
  {
    id: 1026,
    question: "Carbon monoxide detectors are required in California homes with:",
    options: [
      "Any fossil fuel-burning appliance or an attached garage",
      "Electric-only heating systems and no garage",
      "Only in homes built after 2020",
      "Only in commercial buildings",
    ],
    correctAnswer: 0,
    explanation:
      "加州要求在有任何化石燃料燃烧设备或附带车库的住宅中安装一氧化碳探测器。这是加州法律（SB 183）的强制性要求，以保护居民免受一氧化碳中毒。",
    category: "hvac",
  },
  {
    id: 1027,
    question: "When inspecting a gas furnace, what is the significance of a yellow or orange burner flame instead of blue?",
    options: [
      "It may indicate incomplete combustion, which can produce carbon monoxide and signals a need for service",
      "It indicates the furnace is brand new",
      "Yellow flames are normal for all gas furnaces",
      "It means the furnace is more efficient",
    ],
    correctAnswer: 0,
    explanation:
      "燃气炉中黄色或橙色的燃烧器火焰而非蓝色可能表示不完全燃烧，这可能产生一氧化碳，需要维修服务。正常的燃气炉火焰应该主要是蓝色的。",
    category: "hvac",
  },
  {
    id: 1028,
    question: "What type of HVAC system uses water-to-air or water-to-water heat exchange with underground piping loops?",
    options: [
      "Geothermal (ground-source) heat pump",
      "Standard split-system air conditioner",
      "Window air conditioning unit",
      "Evaporative cooler",
    ],
    correctAnswer: 0,
    explanation:
      "地热（地源）热泵使用地下管道回路进行水-空气或水-水热交换。它利用地球恒定的地下温度，在加热和冷却方面都非常节能。",
    category: "hvac",
  },
  {
    id: 1029,
    question: "Duct sealing with mastic or UL 181-rated tape is important because:",
    options: [
      "It minimizes air leakage from the duct system, improving efficiency and comfort",
      "It makes the ducts look better aesthetically",
      "It is only required in commercial buildings",
      "It increases air leakage for better ventilation",
    ],
    correctAnswer: 0,
    explanation:
      "使用密封胶或UL 181级胶带密封管道很重要，因为它可以最大限度地减少管道系统的空气泄漏，提高效率和舒适度。管道泄漏可能浪费20-30%的能量。",
    category: "hvac",
  },
  {
    id: 1030,
    question: "Regular cloth-backed duct tape should NOT be used for permanent duct sealing because:",
    options: [
      "It dries out, loses adhesion, and fails over time due to temperature cycling",
      "It is too expensive",
      "It seals too tightly and restricts airflow",
      "Building codes require it for all duct connections",
    ],
    correctAnswer: 0,
    explanation:
      "普通布基胶带不应用于永久管道密封，因为它会干燥、失去粘附力，并因温度循环而随时间失效。应使用密封胶或UL 181级胶带进行耐久密封。",
    category: "hvac",
  },
  {
    id: 1031,
    question: "What is the purpose of a condensate pump in an HVAC system?",
    options: [
      "To pump condensate water from the drain pan to a remote drain location when gravity drainage is not possible",
      "To increase refrigerant pressure",
      "To pump fuel to the furnace",
      "To circulate air through the ductwork",
    ],
    correctAnswer: 0,
    explanation:
      "冷凝水泵在重力排水不可行时将冷凝水从集水盘泵送到远处的排水位置。当空气处理器安装在低于排水管的位置（如地下室）时常用。",
    category: "hvac",
  },
  {
    id: 1032,
    question: "What is the HVAC term for the amount of heat needed to raise the temperature of one pound of water by one degree Fahrenheit?",
    options: [
      "BTU (British Thermal Unit)",
      "SEER",
      "AFUE",
      "CFM",
    ],
    correctAnswer: 0,
    explanation:
      "BTU（英国热量单位）是将一磅水的温度升高华氏一度所需的热量。BTU是HVAC行业中衡量加热和冷却容量的标准单位。",
    category: "hvac",
  },
  {
    id: 1033,
    question: "CFM in HVAC stands for:",
    options: [
      "Cubic Feet per Minute, a measure of airflow volume",
      "Cold Filter Maximum",
      "Central Furnace Model",
      "Compressor Flow Meter",
    ],
    correctAnswer: 0,
    explanation:
      "CFM代表每分钟立方英尺（Cubic Feet per Minute），是气流量的度量。HVAC系统的设计基于每个房间所需的CFM，以确保适当的加热和冷却。",
    category: "hvac",
  },
  {
    id: 1034,
    question: "A typical residential HVAC system requires approximately how many CFM per ton of cooling?",
    options: [
      "400 CFM per ton",
      "100 CFM per ton",
      "1000 CFM per ton",
      "50 CFM per ton",
    ],
    correctAnswer: 0,
    explanation:
      "典型住宅HVAC系统每吨冷却需要大约400 CFM的气流量。一吨冷却相当于12,000 BTU/小时。不正确的气流量会导致效率降低和舒适度问题。",
    category: "hvac",
  },
  {
    id: 1035,
    question: "One ton of cooling capacity is equal to:",
    options: [
      "12,000 BTU per hour",
      "1,000 BTU per hour",
      "100,000 BTU per hour",
      "500 BTU per hour",
    ],
    correctAnswer: 0,
    explanation:
      "一吨冷却容量等于每小时12,000 BTU。这个术语源于融化一吨冰所需的热量。住宅空调系统通常在1.5到5吨之间。",
    category: "hvac",
  },
  {
    id: 1036,
    question: "What is the typical residential HVAC rule of thumb for sizing in moderate California climates?",
    options: [
      "Approximately 1 ton of cooling per 500-600 square feet (though proper Manual J calculations should be used)",
      "1 ton per 100 square feet",
      "1 ton per 2000 square feet",
      "10 tons for every home regardless of size",
    ],
    correctAnswer: 0,
    explanation:
      "在温和的加州气候中，住宅HVAC尺寸的经验法则约为每500-600平方英尺1吨冷却量。但应使用Manual J计算来确定精确的尺寸需求。",
    category: "hvac",
  },
  {
    id: 1037,
    question: "What problems can result from an oversized air conditioning system?",
    options: [
      "Short cycling, inadequate dehumidification, uneven temperatures, and higher energy costs",
      "The system runs too quietly",
      "The home is always too cold",
      "Lower energy costs",
    ],
    correctAnswer: 0,
    explanation:
      "过大的空调系统会导致短循环、除湿不足、温度不均匀和更高的能源成本。过大的系统会快速冷却空气但关闭太快，无法有效去除湿度。",
    category: "hvac",
  },
  {
    id: 1038,
    question: "What is the standard thermostat wire color for cooling (compressor) in most residential systems?",
    options: [
      "Yellow (Y wire)",
      "Red (R wire)",
      "White (W wire)",
      "Green (G wire)",
    ],
    correctAnswer: 0,
    explanation:
      "在大多数住宅系统中，冷却（压缩机）的标准恒温器线颜色是黄色（Y线）。红色是电源，白色是供暖，绿色是风扇。正确的接线对系统正常运行至关重要。",
    category: "hvac",
  },
  {
    id: 1039,
    question: "The 'G' terminal on a thermostat controls:",
    options: [
      "The blower fan",
      "The gas valve",
      "The ground wire",
      "The gauge pressure sensor",
    ],
    correctAnswer: 0,
    explanation:
      "恒温器上的'G'端子控制鼓风机风扇。当与冷却（Y）或供暖（W）端子一起激活时，它开启风扇；也可以单独激活以实现仅风扇运行模式。",
    category: "hvac",
  },
  {
    id: 1040,
    question: "What is the purpose of a humidistat in an HVAC system?",
    options: [
      "To monitor and control humidity levels by activating humidification or dehumidification equipment",
      "To measure outdoor temperature",
      "To control the gas valve on the furnace",
      "To monitor refrigerant levels",
    ],
    correctAnswer: 0,
    explanation:
      "湿度控制器在HVAC系统中的目的是通过激活加湿或除湿设备来监测和控制湿度水平。适当的湿度控制对舒适度和防止霉菌生长很重要。",
    category: "hvac",
  },
  {
    id: 1041,
    question: "During a duct leakage test, what equipment is typically used?",
    options: [
      "A duct blaster (calibrated fan) and manometer to measure airflow and pressure",
      "A standard household vacuum cleaner",
      "A garden hose to check for water leaks",
      "A smoke detector",
    ],
    correctAnswer: 0,
    explanation:
      "管道泄漏测试通常使用管道鼓风机（校准风扇）和压力计来测量气流和压力。这些设备可以量化管道系统中的泄漏程度。",
    category: "hvac",
  },
  {
    id: 1042,
    question: "What is the common term for the ductwork that delivers conditioned air from the air handler to the rooms?",
    options: [
      "Supply duct",
      "Return duct",
      "Exhaust duct",
      "Fresh air duct",
    ],
    correctAnswer: 0,
    explanation:
      "送风管道是将调节空气从空气处理器输送到各房间的管道的常用术语。回风管道则将空气从房间输送回空气处理器进行重新调节。",
    category: "hvac",
  },
  {
    id: 1043,
    question: "What material is commonly used for the flue pipe of a standard-efficiency (80% AFUE) gas furnace?",
    options: [
      "Single-wall or B-vent (double-wall) galvanized metal pipe",
      "PVC pipe",
      "Copper pipe",
      "CPVC pipe",
    ],
    correctAnswer: 0,
    explanation:
      "标准效率（80% AFUE）燃气炉的烟道管通常使用单壁或B型排气管（双壁）镀锌金属管。高效冷凝式炉（90%+）则使用PVC排气管，因为废气温度更低。",
    category: "hvac",
  },
  {
    id: 1044,
    question: "What material is used for the vent pipe of a high-efficiency condensing furnace (90%+ AFUE)?",
    options: [
      "PVC or CPVC pipe rated for the exhaust temperature",
      "Single-wall galvanized steel pipe",
      "Cast iron pipe",
      "Copper pipe",
    ],
    correctAnswer: 0,
    explanation:
      "高效冷凝式炉（90%+ AFUE）的排气管使用适合排气温度等级的PVC或CPVC管。因为冷凝式炉的排气温度远低于标准效率炉，所以不需要金属烟道管。",
    category: "hvac",
  },
  {
    id: 1045,
    question: "An inspector observes rust on the bottom of a gas furnace. What does this typically indicate?",
    options: [
      "A condensate drainage issue or a cracked heat exchanger allowing condensation to form inside the furnace",
      "The furnace is new and still breaking in",
      "Normal wear for all furnaces",
      "The furnace is an electric model",
    ],
    correctAnswer: 0,
    explanation:
      "燃气炉底部的锈迹通常表明冷凝水排放问题或换热器裂缝允许冷凝水在炉内形成。这需要进一步调查以确定原因和严重程度。",
    category: "hvac",
  },
  {
    id: 1046,
    question: "What should the inspector verify about the furnace air intake when inspecting a high-efficiency furnace?",
    options: [
      "That the combustion air intake pipe is clear, properly supported, and terminated per code",
      "That the intake is blocked for maximum efficiency",
      "That the intake draws air from the garage",
      "That the intake pipe is made of copper",
    ],
    correctAnswer: 0,
    explanation:
      "检查高效炉时，检查员应验证燃烧空气进气管是否畅通、适当支撑并按规范终止。堵塞的进气管可能导致燃烧不完全和安全隐患。",
    category: "hvac",
  },
  {
    id: 1047,
    question: "What is the purpose of a barometric damper on a gas furnace or water heater flue?",
    options: [
      "To regulate the draft in the flue by allowing room air to enter and balance chimney draft",
      "To block all airflow in the flue",
      "To increase the gas pressure to the burner",
      "To reduce the noise of the furnace",
    ],
    correctAnswer: 0,
    explanation:
      "燃气炉或热水器烟道上气压调节阀的目的是通过允许室内空气进入来调节烟道中的排气，平衡烟囱排气。这确保了稳定、一致的排气性能。",
    category: "hvac",
  },
  {
    id: 1048,
    question: "What is meant by a direct-vent or sealed-combustion furnace?",
    options: [
      "A furnace that draws combustion air directly from outside and exhausts directly outside, sealed from the indoor environment",
      "A furnace with no vent at all",
      "A furnace that uses indoor air for combustion only",
      "A furnace with a decorative vent cover",
    ],
    correctAnswer: 0,
    explanation:
      "直排式或密封燃烧炉直接从室外吸取燃烧空气并直接排放到室外，与室内环境隔离。这是最安全的配置，因为燃烧气体不可能回流到居住空间。",
    category: "hvac",
  },
  {
    id: 1049,
    question: "What does the term 'static pressure' refer to in HVAC ductwork?",
    options: [
      "The resistance to airflow within the duct system, measured in inches of water column (in. w.c.)",
      "The weight of the duct system",
      "The temperature of the air in the ducts",
      "The age of the ductwork",
    ],
    correctAnswer: 0,
    explanation:
      "静压是指管道系统内对气流的阻力，以水柱英寸（in. w.c.）为单位测量。过高的静压会降低系统效率和舒适度，并可能损坏设备。",
    category: "hvac",
  },
  {
    id: 1050,
    question: "An inspector finds the air conditioning system is more than 20 years old. What should be recommended?",
    options: [
      "The system is nearing or past its expected lifespan; recommend evaluation by a qualified HVAC contractor for potential replacement",
      "The system should last another 20 years with no issues",
      "No recommendation is needed for older systems",
      "The system should be immediately disconnected",
    ],
    correctAnswer: 0,
    explanation:
      "超过20年的空调系统已接近或超过预期使用寿命。应建议由合格的HVAC承包商评估可能的更换需求，因为老系统效率低、维修频繁且可能使用已淘汰的制冷剂。",
    category: "hvac",
  },
  {
    id: 1051,
    question: "What does the acronym EER stand for in HVAC?",
    options: [
      "Energy Efficiency Ratio",
      "Electric Energy Rating",
      "Environmental Exhaust Requirement",
      "Enhanced Equipment Regulation",
    ],
    correctAnswer: 0,
    explanation:
      "EER代表能效比（Energy Efficiency Ratio），是在特定温度条件下空调系统冷却输出（BTU）与输入功率（瓦特）的比值。EER越高表示在峰值条件下效率越高。",
    category: "hvac",
  },
  {
    id: 1052,
    question: "What is the difference between SEER and EER?",
    options: [
      "SEER measures seasonal average efficiency over a cooling season, while EER measures efficiency at a single specific condition (95°F outdoor)",
      "They are identical ratings",
      "EER is always higher than SEER",
      "SEER is used for heating; EER is used for cooling",
    ],
    correctAnswer: 0,
    explanation:
      "SEER测量一个冷却季节的季节平均效率，而EER测量在单一特定条件（室外95°F）下的效率。SEER提供更全面的效率画面，而EER反映峰值条件下的性能。",
    category: "hvac",
  },
  {
    id: 1053,
    question: "A mini-split system with multiple indoor units connected to one outdoor unit is called a:",
    options: [
      "Multi-zone mini-split system",
      "Single-zone system",
      "Packaged unit",
      "Window unit",
    ],
    correctAnswer: 0,
    explanation:
      "多个室内单元连接到一个室外单元的迷你分体系统称为多区域迷你分体系统。这允许对不同房间进行独立温度控制，在加州改造项目中很受欢迎。",
    category: "hvac",
  },
  {
    id: 1054,
    question: "When inspecting a mini-split system, the inspector should check for:",
    options: [
      "Proper mounting of indoor units, condition of refrigerant lines, drainage, electrical connections, and outdoor unit clearance",
      "Only whether the unit turns on",
      "The paint color of the wall behind the unit",
      "Whether the remote control has batteries",
    ],
    correctAnswer: 0,
    explanation:
      "检查迷你分体系统时，检查员应检查室内单元的安装是否正确、制冷剂管线状况、排水、电气连接和室外单元间隙。这些都影响系统的性能和安全。",
    category: "hvac",
  },
  {
    id: 1055,
    question: "What is the purpose of a condensate float switch on an air handler?",
    options: [
      "To shut off the system if the condensate drain becomes clogged and water backs up in the drain pan",
      "To measure indoor humidity",
      "To switch between heating and cooling modes",
      "To control refrigerant levels",
    ],
    correctAnswer: 0,
    explanation:
      "空气处理器上冷凝水浮球开关的目的是在冷凝水排放管堵塞且水在集水盘中积聚时关闭系统。这防止了水溢出并损坏天花板或地板。",
    category: "hvac",
  },
  {
    id: 1056,
    question: "An evaporative cooler requires which of the following to operate?",
    options: [
      "A water supply connection, evaporative pads, a fan, and fresh air ventilation (windows or vents open)",
      "Only electricity with no water needed",
      "Refrigerant and sealed windows",
      "A gas connection and chimney",
    ],
    correctAnswer: 0,
    explanation:
      "蒸发式冷却器需要供水连接、蒸发垫、风扇和新鲜空气通风（窗户或通风口打开）才能运行。与空调不同，蒸发冷却器在封闭空间中无法有效工作。",
    category: "hvac",
  },
  {
    id: 1057,
    question: "When should evaporative cooler pads be replaced?",
    options: [
      "At the beginning of each cooling season or when they show mineral buildup, mold, or deterioration",
      "Never; they last forever",
      "Every 10 years",
      "Only when the cooler stops working completely",
    ],
    correctAnswer: 0,
    explanation:
      "蒸发冷却器垫应在每个冷却季节开始时或当它们显示矿物沉积、霉菌或劣化时更换。在加州硬水地区，矿物沉积可能更快地降低垫的效率。",
    category: "hvac",
  },
  {
    id: 1058,
    question: "What type of thermostat is NOT recommended for use with heat pump systems?",
    options: [
      "A standard furnace-only thermostat without heat pump-specific programming (no O/B terminal support)",
      "A heat pump-specific programmable thermostat",
      "A smart thermostat with heat pump compatibility",
      "Any thermostat with an O/B terminal",
    ],
    correctAnswer: 0,
    explanation:
      "不支持热泵特定编程（无O/B端子支持）的标准仅限炉恒温器不适合与热泵系统一起使用。热泵需要特定功能如换向阀控制和辅助热管理。",
    category: "hvac",
  },
  {
    id: 1059,
    question: "What is the purpose of the outdoor temperature sensor (OAT) on some heat pump systems?",
    options: [
      "To determine when to activate auxiliary heat strips based on outdoor temperature",
      "To measure rainfall",
      "To control the indoor fan speed",
      "To adjust indoor lighting levels",
    ],
    correctAnswer: 0,
    explanation:
      "某些热泵系统上的室外温度传感器（OAT）用于根据室外温度确定何时激活辅助电热条。这优化了能源使用，因为辅助热是最昂贵的供暖方式。",
    category: "hvac",
  },
  {
    id: 1060,
    question: "In a zoned HVAC system, what happens when only one zone is calling for heating or cooling?",
    options: [
      "Motorized dampers close ducts to zones not calling, directing airflow only to the calling zone; a bypass damper may open to prevent excess pressure",
      "All zones receive equal airflow regardless",
      "The entire system shuts down",
      "The thermostat in the non-calling zone controls the system",
    ],
    correctAnswer: 0,
    explanation:
      "在分区HVAC系统中，当只有一个区域需要加热或冷却时，电动风阀关闭不需要的区域管道，将气流仅导向需要的区域。旁通风阀可能打开以防止过大压力。",
    category: "hvac",
  },
  {
    id: 1061,
    question: "What potential issue can occur with a zoned HVAC system if the bypass damper is not functioning?",
    options: [
      "Excessive static pressure in the duct system that can damage equipment and reduce its lifespan",
      "Better airflow throughout the home",
      "Reduced energy consumption",
      "The system becomes more efficient",
    ],
    correctAnswer: 0,
    explanation:
      "如果分区HVAC系统的旁通风阀不工作，管道系统中可能出现过高的静压，可能损坏设备并缩短其使用寿命。这也可能导致噪音增加和舒适度降低。",
    category: "hvac",
  },
  {
    id: 1062,
    question: "What type of heating system is commonly found in older California homes built in the 1950s and 1960s?",
    options: [
      "Floor furnaces or wall furnaces",
      "Geothermal heat pumps",
      "VRF systems",
      "High-efficiency condensing furnaces",
    ],
    correctAnswer: 0,
    explanation:
      "1950年代和1960年代建造的较旧加州住宅中常见地板炉或壁挂炉。这些是简单的独立加热设备，不需要管道系统，但效率较低且可能存在安全问题。",
    category: "hvac",
  },
  {
    id: 1063,
    question: "What is the concern with running the air conditioner when outdoor temperatures are below 60°F?",
    options: [
      "The refrigerant may not properly change state, leading to liquid slugging in the compressor and potential damage",
      "The system will be more efficient",
      "No concerns exist at any temperature",
      "The system will produce more heat",
    ],
    correctAnswer: 0,
    explanation:
      "当室外温度低于60°F时运行空调，制冷剂可能无法正确变态，导致液击在压缩机中和潜在损坏。因此，检查员通常不在低温时测试冷却系统。",
    category: "hvac",
  },
  {
    id: 1064,
    question: "What is the temperature differential (delta T) between the supply air and return air that indicates proper air conditioning operation?",
    options: [
      "15°F to 22°F temperature difference",
      "0°F to 3°F temperature difference",
      "40°F to 50°F temperature difference",
      "Exactly 100°F temperature difference",
    ],
    correctAnswer: 0,
    explanation:
      "表示空调正常运行的送风和回风之间的温度差（delta T）为15°F到22°F。过低的温差可能表示制冷剂不足或气流问题；过高可能表示气流不足。",
    category: "hvac",
  },
  {
    id: 1065,
    question: "What is the recommended temperature rise through a gas furnace's heat exchanger?",
    options: [
      "The range specified on the furnace nameplate, typically 35°F to 65°F",
      "Exactly 10°F for all furnaces",
      "Over 100°F for maximum heating",
      "There is no recommended temperature rise",
    ],
    correctAnswer: 0,
    explanation:
      "通过燃气炉换热器的推荐温升范围是炉子铭牌上指定的范围，通常为35°F到65°F。温升过高或过低可能表示气流问题或设备尺寸不匹配。",
    category: "hvac",
  },
  {
    id: 1066,
    question: "A furnace with a blinking LED error code on the control board indicates:",
    options: [
      "A diagnostic condition that should be documented and reported for evaluation by an HVAC technician",
      "Normal operation with no issues",
      "The furnace is brand new",
      "The LED light needs to be replaced",
    ],
    correctAnswer: 0,
    explanation:
      "炉控制板上闪烁的LED错误代码表明需要记录和报告的诊断状况，应由HVAC技术人员评估。错误代码通常在炉门内侧有对应的说明图表。",
    category: "hvac",
  },
  {
    id: 1067,
    question: "What is the function of the draft inducer motor on a furnace?",
    options: [
      "To create a negative pressure in the combustion chamber to ensure proper venting of combustion gases before the burners ignite",
      "To distribute air throughout the ductwork",
      "To power the compressor in the outdoor unit",
      "To control the thermostat",
    ],
    correctAnswer: 0,
    explanation:
      "引风机电机的功能是在燃烧器点火前在燃烧室中产生负压，确保燃烧气体正确排出。这是现代炉的重要安全组件，确保在开始燃烧前有适当的排气。",
    category: "hvac",
  },
  {
    id: 1068,
    question: "What is the typical ignition sequence for a modern gas furnace?",
    options: [
      "Thermostat calls for heat → draft inducer starts → pressure switch closes → igniter heats → gas valve opens → flame sensor verifies flame → blower starts after delay",
      "Blower starts first → gas valve opens → pilot light ignites → thermostat activates",
      "Gas valve opens immediately → ignition occurs → draft inducer starts",
      "All components start simultaneously with no sequence",
    ],
    correctAnswer: 0,
    explanation:
      "现代燃气炉的典型点火顺序是：恒温器呼叫供暖→引风机启动→压力开关关闭→点火器加热→燃气阀打开→火焰传感器验证火焰→鼓风机延迟启动。这确保了安全点火。",
    category: "hvac",
  },
  {
    id: 1069,
    question: "What is a pressure switch in a furnace used for?",
    options: [
      "To verify that the draft inducer motor has created proper draft before allowing gas to flow",
      "To regulate the gas pressure",
      "To control water pressure in a hydronic system",
      "To measure outdoor air pressure",
    ],
    correctAnswer: 0,
    explanation:
      "炉中的压力开关用于在允许燃气流动之前验证引风机电机是否已创建适当的排气。如果排气不正确，压力开关不会关闭，系统不会点火，这是重要的安全功能。",
    category: "hvac",
  },
  {
    id: 1070,
    question: "What type of ignition system has replaced standing pilot lights in modern furnaces?",
    options: [
      "Hot surface ignition (HSI) or direct spark ignition (DSI)",
      "Manual match lighting",
      "Piezoelectric ignition only",
      "No ignition system is needed",
    ],
    correctAnswer: 0,
    explanation:
      "热表面点火（HSI）或直接火花点火（DSI）已取代了现代炉中的常燃引火。HSI使用电热元件加热到高温来点燃燃气，比常燃引火更节能。",
    category: "hvac",
  },
  {
    id: 1071,
    question: "In an HVAC system with a heat pump and a gas furnace backup, the system is known as a:",
    options: [
      "Dual fuel system",
      "Hybrid solar system",
      "Single-fuel system",
      "Generator backup system",
    ],
    correctAnswer: 0,
    explanation:
      "具有热泵和燃气炉备用的HVAC系统被称为双燃料系统。当室外温度高于平衡点时使用热泵（更高效），当温度较低时切换到燃气炉。",
    category: "hvac",
  },
  {
    id: 1072,
    question: "What is the purpose of the balance point in a heat pump system?",
    options: [
      "The outdoor temperature at which the heat pump can no longer efficiently meet the heating demand and auxiliary heat is needed",
      "The indoor temperature at which the system switches to cooling",
      "The point where the system is perfectly balanced on its mounting pad",
      "The refrigerant pressure at which the system is fully charged",
    ],
    correctAnswer: 0,
    explanation:
      "热泵系统中的平衡点是室外温度，在此温度下热泵无法再有效满足供暖需求，需要辅助供暖。在加州，由于温和的气候，平衡点通常不是主要问题。",
    category: "hvac",
  },
  {
    id: 1073,
    question: "When inspecting HVAC ductwork for asbestos, which areas are most likely to contain asbestos materials?",
    options: [
      "Duct tape at joints, duct insulation wrapping, and vibration dampeners on older systems installed before the 1980s",
      "New flexible ductwork installed after 2010",
      "PVC ductwork",
      "Copper ductwork",
    ],
    correctAnswer: 0,
    explanation:
      "在1980年代之前安装的旧系统的管道接头处的胶带、管道保温包裹和减振器最可能含有石棉材料。如果怀疑有石棉，不应扰动它们，应建议进行专业检测。",
    category: "hvac",
  },
  {
    id: 1074,
    question: "What is the benefit of a programmable thermostat over a non-programmable thermostat?",
    options: [
      "It allows automatic temperature adjustments based on time of day and day of week, saving energy when occupants are away or sleeping",
      "It provides more accurate temperature readings",
      "It is always less expensive to purchase",
      "It requires no power source",
    ],
    correctAnswer: 0,
    explanation:
      "可编程恒温器比不可编程恒温器的好处是允许根据一天中的时间和星期几自动调节温度，当居住者不在或睡觉时节省能源。",
    category: "hvac",
  },
  {
    id: 1075,
    question: "What does a SEER2 rating of 20 on an air conditioner mean compared to a unit with SEER2 of 15?",
    options: [
      "The SEER2 20 unit is approximately 33% more efficient, using less electricity to produce the same cooling",
      "The SEER2 20 unit is less efficient",
      "Both units have identical efficiency",
      "The SEER2 15 unit provides better cooling capacity",
    ],
    correctAnswer: 0,
    explanation:
      "SEER2评级为20的空调比SEER2为15的机组效率大约高33%，使用更少的电力产生相同的冷却效果。更高的SEER2意味着更低的运行成本。",
    category: "hvac",
  },
  {
    id: 1076,
    question: "What is the primary benefit of a variable-speed compressor in a mini-split or central system?",
    options: [
      "It adjusts output precisely to match the heating or cooling load, maintaining consistent temperatures and reducing energy consumption",
      "It is louder than single-speed compressors",
      "It operates only at maximum capacity",
      "It requires more frequent maintenance",
    ],
    correctAnswer: 0,
    explanation:
      "变速压缩机的主要好处是精确调节输出以匹配加热或冷却负荷，保持一致的温度并减少能源消耗。这比传统的开/关循环效率高得多。",
    category: "hvac",
  },
  {
    id: 1077,
    question: "What is the primary function of the accumulator in a heat pump system?",
    options: [
      "To prevent liquid refrigerant from reaching the compressor, which could cause damage",
      "To store excess hot water",
      "To accumulate dust and debris from the air",
      "To increase the static pressure in the ductwork",
    ],
    correctAnswer: 0,
    explanation:
      "热泵系统中蓄液器的主要功能是防止液态制冷剂到达压缩机，因为液击可能造成损坏。蓄液器收集并蒸发多余的液态制冷剂后才允许其进入压缩机。",
    category: "hvac",
  },
  {
    id: 1078,
    question: "What is the standard residential duct velocity range for supply ducts to minimize noise?",
    options: [
      "600 to 900 feet per minute (FPM)",
      "100 to 200 feet per minute (FPM)",
      "2000 to 3000 feet per minute (FPM)",
      "5000 to 6000 feet per minute (FPM)",
    ],
    correctAnswer: 0,
    explanation:
      "住宅送风管道的标准风速范围为每分钟600至900英尺（FPM），以最大限度地减少噪音。过高的风速会产生不舒适的气流噪音。",
    category: "hvac",
  },
  {
    id: 1079,
    question: "An inspector notices mold growth on the supply register. What HVAC issue could this indicate?",
    options: [
      "Excessive moisture in the duct system, possibly from poor insulation, high humidity, or a condensation issue",
      "Normal HVAC operation",
      "The furnace is too efficient",
      "The air filter is too clean",
    ],
    correctAnswer: 0,
    explanation:
      "送风口上的霉菌生长可能表明管道系统中水分过多，可能由于管道保温不良、高湿度或冷凝问题。这是需要进一步调查的室内空气质量问题。",
    category: "hvac",
  },
  {
    id: 1080,
    question: "What is the purpose of a fresh air intake in a modern tightly-sealed California home?",
    options: [
      "To introduce outdoor air for ventilation and dilution of indoor pollutants, as required by ASHRAE 62.2 and California building codes",
      "To increase the heating load of the home",
      "To exhaust indoor air to the outdoors",
      "To bypass the air filter",
    ],
    correctAnswer: 0,
    explanation:
      "现代密封良好的加州住宅中新风进气口的目的是引入室外空气进行通风和稀释室内污染物，符合ASHRAE 62.2和加州建筑规范的要求。",
    category: "hvac",
  },
  {
    id: 1081,
    question: "ASHRAE 62.2 is a standard that addresses:",
    options: [
      "Minimum ventilation rates and indoor air quality for residential buildings",
      "Maximum allowable noise levels for HVAC systems",
      "The color coding of ductwork",
      "The spacing of outdoor condenser units",
    ],
    correctAnswer: 0,
    explanation:
      "ASHRAE 62.2是关于住宅建筑最低通风率和室内空气质量的标准。加州建筑规范引用此标准，要求新建和改造住宅有足够的机械通风。",
    category: "hvac",
  },
  {
    id: 1082,
    question: "What is the function of a blower door test?",
    options: [
      "To measure the air tightness of a building by creating a pressure difference and measuring airflow",
      "To test the blower motor in the furnace",
      "To test the front door's weatherstripping",
      "To measure the duct leakage rate",
    ],
    correctAnswer: 0,
    explanation:
      "鼓风门测试的功能是通过创建压力差和测量气流来测量建筑物的气密性。这有助于识别空气泄漏位置并评估建筑围护结构的能效。",
    category: "hvac",
  },
  {
    id: 1083,
    question: "What refrigerant was commonly used in home air conditioning systems manufactured before 2010?",
    options: [
      "R-22 (HCFC-22, commonly known as Freon)",
      "R-410A",
      "R-32",
      "R-134a",
    ],
    correctAnswer: 0,
    explanation:
      "2010年之前制造的家用空调系统通常使用R-22（HCFC-22，俗称氟利昂）。由于环保原因，2010年后新系统转向R-410A，R-22的生产于2020年停止。",
    category: "hvac",
  },
  {
    id: 1084,
    question: "What is the main safety concern with wall furnaces in California homes?",
    options: [
      "They can have cracked heat exchangers releasing carbon monoxide, and their hot surfaces can ignite nearby combustibles",
      "They are too efficient",
      "They use too much electricity",
      "They produce too much cold air",
    ],
    correctAnswer: 0,
    explanation:
      "加州住宅中壁挂炉的主要安全问题是可能有裂缝的换热器释放一氧化碳，其高温表面可能点燃附近的可燃物。检查员应检查间隙和运行状况。",
    category: "hvac",
  },
  {
    id: 1085,
    question: "When inspecting a gas furnace, the inspector should verify that the gas line has:",
    options: [
      "A shut-off valve within 6 feet of the appliance and a sediment trap (drip leg) before the gas control valve",
      "No shut-off valve anywhere in the line",
      "Only copper fittings throughout",
      "A water filter on the gas line",
    ],
    correctAnswer: 0,
    explanation:
      "检查燃气炉时，检查员应验证燃气管线在设备6英尺内有关断阀，并且在燃气控制阀之前有沉积物收集器（滴水管）。这些是安全和维护的标准要求。",
    category: "hvac",
  },
  {
    id: 1086,
    question: "What material is CSST (Corrugated Stainless Steel Tubing) commonly used for in residential construction?",
    options: [
      "Flexible gas piping for natural gas or propane distribution within the home",
      "Water supply lines only",
      "Drain pipes",
      "Electrical conduit",
    ],
    correctAnswer: 0,
    explanation:
      "CSST（波纹不锈钢管）常用于住宅中天然气或丙烷的柔性燃气管道分配。它安装快速灵活，但必须正确接地以防止雷击损坏。",
    category: "hvac",
  },
  {
    id: 1087,
    question: "What is the critical safety requirement for CSST gas piping?",
    options: [
      "It must be properly bonded to the home's grounding electrode system to prevent damage from lightning strikes",
      "It must be painted red",
      "It can only be installed outdoors",
      "No special requirements exist",
    ],
    correctAnswer: 0,
    explanation:
      "CSST燃气管道的关键安全要求是必须正确连接到住宅的接地电极系统，以防止雷击损坏。未接地的CSST在雷击时可能穿孔，导致燃气泄漏。",
    category: "hvac",
  },
  {
    id: 1088,
    question: "The typical residential gas pressure for natural gas appliances is:",
    options: [
      "7 inches of water column (in. w.c.) or approximately 1/4 PSI",
      "100 PSI",
      "50 PSI",
      "500 PSI",
    ],
    correctAnswer: 0,
    explanation:
      "天然气设备的典型住宅燃气压力为7英寸水柱（in. w.c.）或约1/4 PSI。正确的燃气压力对于设备安全高效运行至关重要。",
    category: "hvac",
  },
  {
    id: 1089,
    question: "What is the purpose of the air conditioning system's filter-drier in the refrigerant circuit?",
    options: [
      "To remove moisture and contaminants from the refrigerant to protect the compressor and expansion device",
      "To filter dust from the air passing through the ducts",
      "To dry the condensate water",
      "To remove odors from the indoor air",
    ],
    correctAnswer: 0,
    explanation:
      "空调系统制冷剂回路中干燥过滤器的目的是去除制冷剂中的水分和污染物，以保护压缩机和膨胀装置。制冷剂中的水分可能导致冰堵和酸性形成。",
    category: "hvac",
  },
  {
    id: 1090,
    question: "What visual sign on an outdoor condenser coil indicates the unit may need cleaning?",
    options: [
      "Dirt, debris, cottonwood seeds, or bent fins that restrict airflow through the coil",
      "A shiny clean appearance",
      "Ice formation during summer operation",
      "Water dripping from the bottom in cooling mode (this is normal condensation)",
    ],
    correctAnswer: 0,
    explanation:
      "室外冷凝器盘管上的污垢、碎屑、棉木种子或弯曲的翅片表明设备可能需要清洁，因为这些会限制通过盘管的气流。受限的气流会降低效率和增加能耗。",
    category: "hvac",
  },
  {
    id: 1091,
    question: "What does the term 'matched system' mean in HVAC?",
    options: [
      "The indoor and outdoor components are rated and tested together to ensure optimal performance and efficiency",
      "The HVAC system matches the color of the house",
      "All ducts are the same size",
      "The furnace and air conditioner are the same brand but not specifically designed to work together",
    ],
    correctAnswer: 0,
    explanation:
      "HVAC中\"匹配系统\"意味着室内和室外组件被一起评定和测试，以确保最佳性能和效率。不匹配的组件可能无法达到额定效率，并可能导致可靠性问题。",
    category: "hvac",
  },
  {
    id: 1092,
    question: "What does it mean when an HVAC technician says the system has a 'locked-out' compressor?",
    options: [
      "The compressor has shut down due to a safety protection and will not restart until the fault is resolved",
      "The compressor is physically locked with a padlock",
      "The compressor is running at maximum capacity",
      "The outdoor unit is covered for winter storage",
    ],
    correctAnswer: 0,
    explanation:
      "当HVAC技术人员说系统有\"锁定\"的压缩机时，意味着压缩机已因安全保护而关闭，在故障解决前不会重新启动。这可能由过热、高压或电气问题引起。",
    category: "hvac",
  },
  {
    id: 1093,
    question: "California's Title 24 requires verification of HVAC installation through:",
    options: [
      "HERS (Home Energy Rating System) inspections and testing by a certified HERS rater",
      "Only a visual inspection by the homeowner",
      "No verification is required",
      "Only a building department final inspection",
    ],
    correctAnswer: 0,
    explanation:
      "加州Title 24要求通过认证的HERS评估师进行HERS检查和测试来验证HVAC安装。这包括管道泄漏测试、制冷剂充注验证和气流测量。",
    category: "hvac",
  },
  {
    id: 1094,
    question: "What is a common issue found when inspecting older floor furnaces in California?",
    options: [
      "Rusted or cracked heat exchangers, inadequate clearance from combustibles, and missing or damaged floor grates",
      "Excessive cooling capacity",
      "Modern digital controls",
      "Too much insulation around the unit",
    ],
    correctAnswer: 0,
    explanation:
      "检查加州较旧的地板炉时常见问题包括生锈或裂纹的换热器、与可燃物间距不足以及地面格栅缺失或损坏。这些都是需要报告的安全问题。",
    category: "hvac",
  },
  {
    id: 1095,
    question: "What is the maximum recommended length for a flexible duct run in residential systems?",
    options: [
      "25 feet, with minimal bends and proper support every 4-5 feet",
      "100 feet with no restrictions",
      "5 feet maximum",
      "There is no maximum length",
    ],
    correctAnswer: 0,
    explanation:
      "住宅系统中柔性管道运行的最大推荐长度为25英尺，弯头最少，每4-5英尺有适当的支撑。过长的柔性管道运行会显著增加静压和降低气流。",
    category: "hvac",
  },
  {
    id: 1096,
    question: "An inspector notices oil stains around the refrigerant line fittings at the outdoor unit. This indicates:",
    options: [
      "A possible refrigerant leak, as refrigerant oil seeps out at the point of the leak",
      "The unit was recently serviced and oil was spilled",
      "Normal condensation",
      "The unit is brand new and still being broken in",
    ],
    correctAnswer: 0,
    explanation:
      "室外机制冷剂管线接头周围的油渍表明可能存在制冷剂泄漏，因为制冷剂油会在泄漏点渗出。这需要HVAC技术人员进一步评估和修复。",
    category: "hvac",
  },
  {
    id: 1097,
    question: "California requires whole-house mechanical ventilation in new construction. What is the most common method used?",
    options: [
      "A continuously running exhaust fan (such as a bathroom fan) or a supply fan integrated with the HVAC system",
      "Opening windows only",
      "A wood-burning fireplace for ventilation",
      "No ventilation is required in California",
    ],
    correctAnswer: 0,
    explanation:
      "加州要求新建筑有全屋机械通风，最常见的方法是持续运行的排气扇（如浴室风扇）或与HVAC系统集成的送风风扇。这确保了足够的室内空气质量。",
    category: "hvac",
  },
  {
    id: 1098,
    question: "What is the concern with a gas furnace installed in a bedroom closet without proper combustion air provisions?",
    options: [
      "The furnace may not receive adequate combustion air, leading to incomplete combustion, carbon monoxide production, and potential oxygen depletion",
      "The closet will be too warm for storing clothes",
      "The furnace will be too efficient",
      "There is no concern with this installation",
    ],
    correctAnswer: 0,
    explanation:
      "在没有适当燃烧空气供应的卧室壁橱中安装的燃气炉可能无法获得足够的燃烧空气，导致不完全燃烧、一氧化碳产生和潜在的氧气耗尽。这是严重的安全隐患。",
    category: "hvac",
  },
  {
    id: 1099,
    question: "What is the HVAC significance of the term 'sensible heat'?",
    options: [
      "Heat that causes a change in temperature of the air, as measured by a standard thermometer",
      "Heat that causes moisture to evaporate",
      "Heat produced by the compressor only",
      "Heat that cannot be measured",
    ],
    correctAnswer: 0,
    explanation:
      "\"显热\"在HVAC中指的是导致空气温度变化的热量，可用标准温度计测量。与之对应的是\"潜热\"，即导致水分状态变化（蒸发/冷凝）的热量。",
    category: "hvac",
  },
  {
    id: 1100,
    question: "What is 'latent heat' in the context of air conditioning?",
    options: [
      "Heat associated with moisture removal (dehumidification) that does not cause a temperature change",
      "Heat measured by a thermometer",
      "Heat produced by the furnace",
      "Heat from direct sunlight",
    ],
    correctAnswer: 0,
    explanation:
      "在空调背景下，\"潜热\"是与除湿（去除水分）相关的热量，不会引起温度变化。空调系统同时去除显热（降低温度）和潜热（去除湿度）。",
    category: "hvac",
  },
];
