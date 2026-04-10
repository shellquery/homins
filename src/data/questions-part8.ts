import type { Question } from "./questions";

export const questionsPart8: Question[] = [
  // ========== Fireplace (1701-1850) ==========
  {
    id: 1701,
    question:
      "What is the primary purpose of the smoke shelf in a masonry fireplace?",
    options: [
      "To prevent downdrafts from pushing smoke into the room",
      "To collect creosote for easy cleaning",
      "To support the chimney cap",
      "To regulate the air supply to the firebox",
    ],
    correctAnswer: 0,
    explanation:
      "烟架（smoke shelf）位于烟道与烟室交汇处，其主要作用是防止下降气流将烟雾推入室内。它将冷空气向上重新引导，帮助维持正常的烟气上升通道。",
    category: "fireplace",
  },
  {
    id: 1702,
    question:
      "What is the minimum chimney height above the roofline according to the 3-2-10 rule?",
    options: [
      "2 feet above the point of roof penetration and 3 feet above any structure within 10 feet",
      "3 feet above the point of roof penetration and 2 feet above any structure within 10 feet",
      "10 feet above the roofline",
      "3 feet above any structure within 2 feet",
    ],
    correctAnswer: 1,
    explanation:
      "3-2-10规则要求烟囱顶部至少高出屋顶穿透点3英尺，且至少高出10英尺范围内任何结构2英尺。这是确保正常排烟和防止火灾的关键要求。",
    category: "fireplace",
  },
  {
    id: 1703,
    question:
      "What is the minimum clearance required between a masonry chimney and combustible materials?",
    options: [
      "1 inch",
      "4 inches",
      "2 inches",
      "6 inches",
    ],
    correctAnswer: 2,
    explanation:
      "砖石烟囱与可燃材料之间的最小间距要求为2英寸。这个空气间隙可以防止热量传导到可燃物引发火灾。",
    category: "fireplace",
  },
  {
    id: 1704,
    question:
      "Which stage of creosote is described as hard, shiny, and glazed, and is the most dangerous?",
    options: [
      "1st degree (flaky)",
      "2nd degree (tar-like)",
      "4th degree (liquid, runny)",
      "3rd degree (glazed)",
    ],
    correctAnswer: 3,
    explanation:
      "第三阶段杂酚油（3rd degree creosote）呈现坚硬、光亮的釉面状，极难清除且最危险，因为它可以达到极高的温度并在烟囱内自燃，导致烟囱火灾。",
    category: "fireplace",
  },
  {
    id: 1705,
    question:
      "What is the required hearth extension in front of a fireplace opening less than 6 square feet?",
    options: [
      "16 inches in front and 8 inches on each side",
      "20 inches in front and 12 inches on each side",
      "12 inches in front and 6 inches on each side",
      "24 inches in front and 10 inches on each side",
    ],
    correctAnswer: 0,
    explanation:
      "对于开口面积小于6平方英尺的壁炉，前方炉膛延伸要求至少16英寸，两侧各至少8英寸。这些不可燃延伸区域可以保护地板免受火花和辐射热的损害。",
    category: "fireplace",
  },
  {
    id: 1706,
    question:
      "What is the purpose of a damper in a fireplace?",
    options: [
      "To filter smoke before it exits the chimney",
      "To control the draft and prevent heat loss when the fireplace is not in use",
      "To increase the size of the firebox",
      "To support the chimney liner",
    ],
    correctAnswer: 1,
    explanation:
      "挡板（damper）用于控制气流并在壁炉未使用时防止热量散失。使用壁炉时打开挡板让烟气排出，不用时关闭以防止室内暖气或冷气通过烟囱流失。",
    category: "fireplace",
  },
  {
    id: 1707,
    question:
      "A zero-clearance fireplace is also known as:",
    options: [
      "A masonry fireplace with no mantel",
      "A gas fireplace without a flue",
      "A factory-built or prefabricated fireplace",
      "An outdoor fireplace with no chimney",
    ],
    correctAnswer: 2,
    explanation:
      "零间隙壁炉（zero-clearance fireplace）也称为工厂预制壁炉（factory-built/prefabricated fireplace），因其设计可以安全地安装在紧贴可燃材料的位置，无需额外间距。",
    category: "fireplace",
  },
  {
    id: 1708,
    question:
      "What type of gas fireplace draws combustion air from outside and vents exhaust directly through an exterior wall?",
    options: [
      "B-vent",
      "Vent-free",
      "Natural draft",
      "Direct vent",
    ],
    correctAnswer: 3,
    explanation:
      "直排式壁炉（direct vent）通过密封的双层管道从室外引入燃烧空气，同时将废气直接排到室外。这种设计效率高，不消耗室内空气，安装灵活。",
    category: "fireplace",
  },
  {
    id: 1709,
    question:
      "What is the main concern with vent-free (ventless) gas fireplaces?",
    options: [
      "They release combustion byproducts including moisture and carbon monoxide into the living space",
      "They are too expensive to operate",
      "They cannot produce enough heat",
      "They require a chimney to function",
    ],
    correctAnswer: 0,
    explanation:
      "无排气式燃气壁炉（vent-free）将所有燃烧副产物包括水蒸气和一氧化碳释放到室内空间。这可能导致室内空气质量问题和潜在的一氧化碳中毒风险。某些司法管辖区已禁止使用此类壁炉。",
    category: "fireplace",
  },
  {
    id: 1710,
    question:
      "What is the difference between vented and unvented gas log sets?",
    options: [
      "Vented logs use propane; unvented logs use natural gas",
      "Vented logs require an open damper and functioning chimney; unvented logs are designed to burn cleanly without a chimney",
      "Vented logs produce no heat; unvented logs produce heat",
      "There is no difference; both require a chimney",
    ],
    correctAnswer: 1,
    explanation:
      "通风式燃气原木（vented gas logs）需要打开的挡板和正常运作的烟囱来排出废气；无排气式燃气原木（unvented gas logs）设计为清洁燃烧，理论上不需要烟囱，但会将副产物释放到室内。",
    category: "fireplace",
  },
  {
    id: 1711,
    question:
      "What is the purpose of a spark arrestor on a chimney?",
    options: [
      "To increase chimney draft",
      "To prevent animals from entering the chimney",
      "To prevent sparks and embers from escaping the chimney and landing on the roof or nearby combustibles",
      "To reduce creosote buildup",
    ],
    correctAnswer: 2,
    explanation:
      "火花防护罩（spark arrestor）安装在烟囱顶部，防止火花和余烬飞出烟囱落在屋顶或附近可燃物上。在加州，野火风险高的地区尤其重要，是法规要求的设备。",
    category: "fireplace",
  },
  {
    id: 1712,
    question:
      "What material is most commonly used for a traditional chimney flue liner?",
    options: [
      "Concrete block",
      "Copper",
      "Fiberglass",
      "Clay tile",
    ],
    correctAnswer: 3,
    explanation:
      "粘土瓦（clay tile）是传统烟道内衬最常用的材料。它耐高温、耐腐蚀、经济实惠，但可能随时间开裂需要更换。",
    category: "fireplace",
  },
  {
    id: 1713,
    question:
      "When is a Level II chimney inspection required?",
    options: [
      "Upon the sale or transfer of a property, or after a change in fuel type or appliance",
      "Only after a chimney fire",
      "Every year as part of routine maintenance",
      "Only when building a new chimney",
    ],
    correctAnswer: 0,
    explanation:
      "二级烟囱检查（Level II）在房屋买卖转让、更换燃料类型或更换设备时需要进行。它比常规一级检查更详细，通常包括视频扫描烟道内部。",
    category: "fireplace",
  },
  {
    id: 1714,
    question:
      "What is the purpose of a chimney crown?",
    options: [
      "To increase draft in the chimney",
      "To shed water away from the flue and prevent moisture from entering the chimney structure",
      "To support the chimney cap",
      "To prevent animals from entering",
    ],
    correctAnswer: 1,
    explanation:
      "烟囱冠（chimney crown）是烟囱顶部的水泥斜面，作用是将雨水从烟道引导排开，防止水分进入烟囱结构导致损坏。裂缝的烟囱冠是常见的检查缺陷。",
    category: "fireplace",
  },
  {
    id: 1715,
    question:
      "What is 1st degree creosote characterized by?",
    options: [
      "Hard, glazed, shiny deposits",
      "Thick, tar-like deposits",
      "Light, flaky, soot-like deposits that are easy to remove",
      "White powdery deposits",
    ],
    correctAnswer: 2,
    explanation:
      "第一阶段杂酚油（1st degree creosote）呈现轻薄、片状、类似烟灰的沉积物，容易用烟囱刷清除。这是最不危险的形式，是正常烟囱使用的结果。",
    category: "fireplace",
  },
  {
    id: 1716,
    question:
      "What is the minimum mantel clearance from the top of a fireplace opening for a mantel with a 1.5-inch projection?",
    options: [
      "6 inches",
      "18 inches",
      "24 inches",
      "12 inches",
    ],
    correctAnswer: 3,
    explanation:
      "对于突出1.5英寸的壁炉架，从壁炉开口顶部到壁炉架的最小间距要求为12英寸。突出越大，所需间距越大，以防止热量对可燃材料造成危险。",
    category: "fireplace",
  },
  {
    id: 1717,
    question:
      "What is an ash dump in a fireplace?",
    options: [
      "A small metal door in the firebox floor that allows ashes to be dropped into a collection pit below",
      "A container placed inside the firebox to collect ashes",
      "A vent in the chimney for releasing ash",
      "A tool used to scrape ashes from the firebox walls",
    ],
    correctAnswer: 0,
    explanation:
      "灰坑口（ash dump）是壁炉底部的一个小金属门，可以将灰烬倒入下方的收集坑（ash pit）中。清洁口（cleanout door）通常位于壁炉外部或地下室，用于清除收集的灰烬。",
    category: "fireplace",
  },
  {
    id: 1718,
    question:
      "Why is outside combustion air important for a fireplace?",
    options: [
      "It increases the temperature of the fire",
      "It provides air for combustion without depressurizing the living space",
      "It eliminates the need for a chimney",
      "It reduces the amount of smoke produced",
    ],
    correctAnswer: 1,
    explanation:
      "外部燃烧空气管道为壁炉提供燃烧所需的空气，而不会使室内空间产生负压。现代紧密密封的房屋中，没有外部空气供应可能导致回烟和一氧化碳进入室内。",
    category: "fireplace",
  },
  {
    id: 1719,
    question:
      "What is the purpose of a chimney cricket (saddle)?",
    options: [
      "To support the chimney cap",
      "To prevent animals from entering the chimney",
      "To divert water away from the uphill side of the chimney where it penetrates the roof",
      "To increase chimney draft",
    ],
    correctAnswer: 2,
    explanation:
      "烟囱分水脊（cricket/saddle）是安装在烟囱高处与屋顶交接处的三角形结构，作用是将雨水和碎屑从烟囱后方引导排开，防止积水和渗漏。宽度超过30英寸的烟囱通常需要安装。",
    category: "fireplace",
  },
  {
    id: 1720,
    question:
      "What does efflorescence on a chimney indicate?",
    options: [
      "The chimney is structurally unsound",
      "Creosote is leaking through the bricks",
      "The chimney needs a new cap",
      "Moisture is migrating through the masonry and leaving mineral salt deposits on the surface",
    ],
    correctAnswer: 3,
    explanation:
      "白华（efflorescence）是水分通过砖石结构迁移时将矿物盐带到表面形成的白色结晶沉积物。它表明存在水分渗透问题，虽然本身无害，但指示需要调查和解决水分来源。",
    category: "fireplace",
  },
  {
    id: 1721,
    question:
      "What is spalling in relation to chimney bricks?",
    options: [
      "The face of the brick flaking, peeling, or breaking off due to moisture and freeze-thaw cycles",
      "Bricks turning black from smoke damage",
      "Mortar joints cracking between bricks",
      "Bricks expanding from excessive heat",
    ],
    correctAnswer: 0,
    explanation:
      "剥落（spalling）是砖面由于水分渗入后经冻融循环导致的剥落、脱皮或碎裂现象。这是严重的烟囱问题，表明砖石在恶化，需要及时修复以防止结构性损坏。",
    category: "fireplace",
  },
  {
    id: 1722,
    question:
      "What type of chimney liner is most commonly used to reline an existing masonry chimney?",
    options: [
      "Clay tile liner",
      "Stainless steel liner",
      "Cast iron liner",
      "PVC liner",
    ],
    correctAnswer: 1,
    explanation:
      "不锈钢内衬（stainless steel liner）是重新衬砌现有砖石烟囱最常用的材料。它灵活、耐用、易于安装，可以适应烟囱的弯曲和偏移，提供安全可靠的排气通道。",
    category: "fireplace",
  },
  {
    id: 1723,
    question:
      "A B-vent gas fireplace differs from a direct vent in that it:",
    options: [
      "Does not require any venting",
      "Uses outdoor air for combustion",
      "Uses indoor air for combustion and vents through a single-wall pipe through the roof",
      "Can only burn wood",
    ],
    correctAnswer: 2,
    explanation:
      "B排气式燃气壁炉（B-vent）使用室内空气进行燃烧，并通过单壁管道从屋顶排气。与直排式不同，它需要从室内环境中获取燃烧空气，因此效率较低。",
    category: "fireplace",
  },
  {
    id: 1724,
    question:
      "What is the recommended frequency for chimney cleaning for a wood-burning fireplace used regularly?",
    options: [
      "Every 5 years",
      "Only when visible problems occur",
      "Every month during winter",
      "At least once a year or after every cord of wood burned",
    ],
    correctAnswer: 3,
    explanation:
      "经常使用的燃木壁炉建议每年至少清扫一次烟囱，或每燃烧一绳木材后清扫。定期清扫可以清除杂酚油积聚，降低烟囱火灾风险，并确保烟道通畅。",
    category: "fireplace",
  },
  {
    id: 1725,
    question:
      "What is the purpose of fire stopping at chimney penetrations through floors and ceilings?",
    options: [
      "To prevent fire from spreading through the gap between the chimney and the framing",
      "To insulate the chimney for better draft",
      "To provide structural support for the chimney",
      "To prevent moisture intrusion",
    ],
    correctAnswer: 0,
    explanation:
      "烟囱穿越楼板和天花板处的防火封堵（fire stopping）可以防止火灾通过烟囱与框架之间的间隙蔓延。这是消防安全规范的重要要求，使用不可燃材料填充间隙。",
    category: "fireplace",
  },
  {
    id: 1726,
    question:
      "What is the main structural difference between a prefabricated (factory-built) fireplace and a traditional masonry fireplace?",
    options: [
      "Prefabricated fireplaces can only burn gas, not wood",
      "Masonry fireplaces are lighter and easier to retrofit",
      "Prefabricated fireplaces use a metal firebox with a specialized metal flue; masonry fireplaces use brick/mortar construction",
      "There is no structural difference — only cosmetic differences exist",
    ],
    correctAnswer: 2,
    explanation:
      "预制壁炉（工厂制造）使用金属炉膛和专用金属烟道系统，重量轻、安装快捷，必须使用配套专用烟道部件。传统砖石壁炉由砖块和砂浆建造，结构重，需要专用基础支撑，但经久耐用。两者不可互换使用对方的配件。",
    category: "fireplace",
  },
  {
    id: 1727,
    question:
      "What is the minimum required mesh size for a spark arrestor screen?",
    options: [
      "No larger than 1 inch",
      "No larger than 1/4 inch",
      "No larger than 1/2 inch and no smaller than 3/8 inch",
      "Any mesh size is acceptable",
    ],
    correctAnswer: 2,
    explanation:
      "火花防护罩的网格尺寸要求不大于1/2英寸且不小于3/8英寸。太大的网格无法有效阻挡火花，太小的网格则容易被杂酚油堵塞影响排烟。",
    category: "fireplace",
  },
  {
    id: 1728,
    question:
      "What is the proper floor protection requirement for a wood stove installation?",
    options: [
      "Standard carpeting is sufficient",
      "A wood platform at least 2 inches thick",
      "No floor protection is needed if the stove has legs",
      "A non-combustible pad extending at least 18 inches beyond the stove on all sides",
    ],
    correctAnswer: 3,
    explanation:
      "木柴炉安装需要在炉子四周至少延伸18英寸的不可燃衬垫（在装载门一侧通常需要更大），以保护地板免受掉落的余烬和辐射热的损害。具体要求参照制造商说明和当地法规。",
    category: "fireplace",
  },
  {
    id: 1729,
    question:
      "What is a cast-in-place chimney liner?",
    options: [
      "A cement-like material poured inside the chimney to create a smooth, seamless liner",
      "A pre-formed concrete tube inserted into the chimney",
      "A clay tile liner set in mortar",
      "A metal liner bolted to the chimney walls",
    ],
    correctAnswer: 0,
    explanation:
      "浇注式烟道内衬（cast-in-place liner）是将类似水泥的材料浇注到烟囱内部，形成光滑无缝的内衬。它可以加固老旧烟囱结构，填补裂缝，并提供连续的保护层。",
    category: "fireplace",
  },
  {
    id: 1730,
    question:
      "A leaning chimney most commonly indicates:",
    options: [
      "Normal thermal expansion",
      "Foundation settlement or deterioration of the chimney footing",
      "Wind damage to the chimney cap",
      "Excessive creosote buildup",
    ],
    correctAnswer: 1,
    explanation:
      "烟囱倾斜最常见的原因是基础沉降或烟囱基脚恶化。这是一个严重的结构问题，可能导致烟囱与房屋分离，需要专业评估和修复。",
    category: "fireplace",
  },
  {
    id: 1731,
    question:
      "What is the purpose of chimney step flashing?",
    options: [
      "To support the chimney structure",
      "To improve chimney draft",
      "To create a waterproof seal where the chimney meets the sloped roof surface",
      "To prevent creosote buildup",
    ],
    correctAnswer: 2,
    explanation:
      "阶梯泛水板（step flashing）是安装在烟囱与斜屋顶面交接处的L形金属片，与每层瓦片交叠安装，创建防水密封。它与反泛水板（counter flashing）配合使用以防止漏水。",
    category: "fireplace",
  },
  {
    id: 1732,
    question:
      "What is a pellet stove?",
    options: [
      "A wood stove designed for small spaces",
      "A gas stove shaped like a pellet",
      "A stove that burns coal pellets exclusively",
      "A heating appliance that burns compressed wood or biomass pellets using an automated feed system",
    ],
    correctAnswer: 3,
    explanation:
      "颗粒炉（pellet stove）是一种使用自动进料系统燃烧压缩木材或生物质颗粒的取暖设备。它比传统木柴炉更高效、更清洁，排放更少，操作更方便。",
    category: "fireplace",
  },
  {
    id: 1733,
    question:
      "What does a Level I chimney inspection include?",
    options: [
      "Visual examination of readily accessible portions of the chimney exterior, interior, and connected appliances",
      "Video scanning of the entire flue interior",
      "Partial demolition of the chimney structure",
      "Pressure testing of the flue system",
    ],
    correctAnswer: 0,
    explanation:
      "一级烟囱检查（Level I）包括对烟囱外部、内部和连接设备的可视可达部分进行目视检查。这是最基本的检查级别，适用于正常使用且未更改的烟囱系统。",
    category: "fireplace",
  },
  {
    id: 1734,
    question:
      "What is the purpose of counter flashing on a chimney?",
    options: [
      "It supports the chimney cap",
      "It is embedded in the chimney mortar joints and overlaps the step flashing to prevent water entry",
      "It protects the chimney liner",
      "It prevents downdrafts",
    ],
    correctAnswer: 1,
    explanation:
      "反泛水板（counter flashing）嵌入烟囱砂浆缝中，覆盖在阶梯泛水板上方，形成双层防水保护。两层泛水板配合工作，防止雨水沿烟囱与屋顶交接处渗入。",
    category: "fireplace",
  },
  {
    id: 1735,
    question:
      "Why should a gas shut-off valve be located near a gas fireplace?",
    options: [
      "To regulate the flame height",
      "To reduce gas consumption",
      "To allow quick shutoff of gas supply in an emergency without having to access the main gas valve",
      "To prevent back-drafting",
    ],
    correctAnswer: 2,
    explanation:
      "燃气壁炉附近应设有燃气关闭阀，以便在紧急情况下快速关闭燃气供应，无需前往主燃气阀。这是安全要求，检查员应确认阀门存在且可正常操作。",
    category: "fireplace",
  },
  {
    id: 1736,
    question:
      "What is the main advantage of fireplace glass doors?",
    options: [
      "They make the fire burn hotter",
      "They eliminate the need for a chimney cap",
      "They prevent all carbon monoxide from entering the room",
      "They reduce heat loss up the chimney when the fireplace is not in use and control combustion air",
    ],
    correctAnswer: 3,
    explanation:
      "壁炉玻璃门可以在壁炉未使用时减少暖气通过烟囱散失，并在使用时控制燃烧空气量。它们提高了整体能源效率，但不能完全阻止一氧化碳进入房间。",
    category: "fireplace",
  },
  {
    id: 1737,
    question:
      "What is the concern with an abandoned chimney that is no longer in use?",
    options: [
      "It can allow moisture intrusion, pest entry, and may have concealed structural deterioration",
      "It will increase property value",
      "It improves ventilation in the attic",
      "There are no concerns with abandoned chimneys",
    ],
    correctAnswer: 0,
    explanation:
      "废弃烟囱如果没有妥善封堵，可能导致水分渗入、害虫进入，并可能存在隐蔽的结构恶化。检查员应检查是否有适当的顶部封盖和底部密封，以及是否有损坏迹象。",
    category: "fireplace",
  },
  {
    id: 1738,
    question:
      "What is the standard wall clearance requirement for a wood stove from an unprotected combustible wall?",
    options: [
      "12 inches",
      "36 inches",
      "24 inches",
      "48 inches",
    ],
    correctAnswer: 1,
    explanation:
      "木柴炉与未保护的可燃墙壁之间的标准间距要求为36英寸。如果墙壁安装了经过认证的隔热板，间距可以减少，但具体减少量取决于隔热板的类型和安装方式。",
    category: "fireplace",
  },
  {
    id: 1739,
    question:
      "What is 2nd degree creosote characterized by?",
    options: [
      "Light, powdery, easily brushed away deposits",
      "Hard, shiny, glazed deposits",
      "Black, tar-like, flaky deposits that are more difficult to remove than 1st degree",
      "White chalky deposits",
    ],
    correctAnswer: 2,
    explanation:
      "第二阶段杂酚油（2nd degree creosote）呈黑色焦油状片状沉积物，比第一阶段更难清除。它通常是由于燃烧不充分或烟道温度过低造成的，需要专业清扫工具处理。",
    category: "fireplace",
  },
  {
    id: 1740,
    question:
      "What is a chimney chase cover?",
    options: [
      "A decorative stone cap on a masonry chimney",
      "A screen to prevent animal entry",
      "A damper installed at the top of the chimney",
      "A metal covering that sits on top of a wood-framed chimney chase to prevent water entry",
    ],
    correctAnswer: 3,
    explanation:
      "烟囱罩盖（chase cover）是安装在木框架烟囱围护结构顶部的金属盖板，防止雨水进入。不锈钢或铜质罩盖优于镀锌钢，因为镀锌钢容易生锈，导致表面出现锈迹。",
    category: "fireplace",
  },
  {
    id: 1741,
    question:
      "Why is stainless steel preferred over galvanized steel for chimney chase covers?",
    options: [
      "Stainless steel resists corrosion far longer and does not create rust stains on the chimney siding",
      "Stainless steel is less expensive",
      "Galvanized steel is too heavy for most chimney chases",
      "There is no practical difference between the two",
    ],
    correctAnswer: 0,
    explanation:
      "不锈钢比镀锌钢更耐腐蚀，不会在烟囱壁板上产生锈斑。镀锌钢罩盖的锌涂层会随时间降解，导致生锈和水损坏，而不锈钢可以使用数十年不需更换。",
    category: "fireplace",
  },
  {
    id: 1742,
    question:
      "What is a Level III chimney inspection?",
    options: [
      "A basic visual inspection of accessible chimney components",
      "An inspection that requires removal of certain building components to gain access to concealed areas of the chimney",
      "A video scan of the chimney flue",
      "An inspection performed only on new construction",
    ],
    correctAnswer: 1,
    explanation:
      "三级烟囱检查（Level III）需要拆除部分建筑构件以检查烟囱的隐蔽区域。这是最彻底的检查级别，通常在怀疑存在严重隐患（如烟囱火灾后）时进行。",
    category: "fireplace",
  },
  {
    id: 1743,
    question:
      "What is the smoke chamber in a masonry fireplace?",
    options: [
      "The area where wood is burned",
      "The base of the chimney at ground level",
      "The area above the damper that funnels smoke from the wide firebox into the narrow flue",
      "The opening where the fireplace meets the room",
    ],
    correctAnswer: 2,
    explanation:
      "烟室（smoke chamber）位于挡板上方，是将烟气从宽大的燃烧室汇集到狭窄烟道的过渡区域。其墙壁应光滑（涂抹平整），以促进烟气顺利上升并减少杂酚油积聚。",
    category: "fireplace",
  },
  {
    id: 1744,
    question:
      "What is the primary function of a chimney cap?",
    options: [
      "To increase the visual appeal of the chimney",
      "To strengthen the chimney structure",
      "To increase the chimney draft",
      "To keep rain, debris, and animals out of the chimney flue",
    ],
    correctAnswer: 3,
    explanation:
      "烟囱帽（chimney cap）的主要功能是防止雨水、碎屑和动物进入烟道。它通常包含金属网筛，同时也起到火花防护的作用。没有烟囱帽的烟囱容易受到水损坏和动物筑巢。",
    category: "fireplace",
  },
  {
    id: 1745,
    question:
      "What concerns should a home inspector note about a chimney connector (stovepipe)?",
    options: [
      "Rust, holes, improper clearance to combustibles, improper slope, and use of improper materials",
      "Only the color of the pipe",
      "Only whether the pipe is shiny",
      "Whether the pipe matches the stove's brand",
    ],
    correctAnswer: 0,
    explanation:
      "烟囱连接管（chimney connector/stovepipe）应检查是否有锈蚀、孔洞、与可燃物间距不足、坡度不当（应向上倾斜至烟囱）以及是否使用了不合适的材料。单壁管道需要18英寸的可燃物间距。",
    category: "fireplace",
  },
  {
    id: 1746,
    question:
      "How should firewood be properly stored?",
    options: [
      "Stacked directly against the house for convenience",
      "Off the ground, covered on top, and at least 20 feet from the home in fire-prone areas",
      "Inside the garage at all times",
      "In the attic to keep it dry",
    ],
    correctAnswer: 1,
    explanation:
      "木柴应离地存放（使用支架），顶部遮盖防雨但侧面通风以利于干燥。在易发火灾地区，木柴应至少距离房屋20英尺，以减少野火风险。木柴应干燥至少6个月再使用。",
    category: "fireplace",
  },
  {
    id: 1747,
    question:
      "What does 'seasoned' firewood mean?",
    options: [
      "Wood that has been treated with chemicals",
      "Freshly cut green wood",
      "Wood that has been dried for at least 6-12 months to reduce moisture content below 20%",
      "Wood from a specific species of tree",
    ],
    correctAnswer: 2,
    explanation:
      "干燥木柴（seasoned firewood）是指经过至少6-12个月自然干燥、含水量降至20%以下的木材。干燥木柴燃烧更充分、更高效，产生的杂酚油和烟雾更少。",
    category: "fireplace",
  },
  {
    id: 1748,
    question:
      "What is a decorative shroud on a chimney?",
    options: [
      "A required safety device to prevent fires",
      "A structural support for the chimney cap",
      "A type of chimney liner",
      "A non-functional covering installed around the chimney termination for aesthetic purposes",
    ],
    correctAnswer: 3,
    explanation:
      "装饰性罩壳（decorative shroud）是安装在烟囱终端周围的非功能性外罩，纯粹为了美观。检查员应注意它不应干扰正常排气或通风，且应安装牢固。",
    category: "fireplace",
  },
  {
    id: 1749,
    question:
      "What is an earthquake damper in a fireplace system?",
    options: [
      "A device that automatically closes the gas supply or flue during seismic activity",
      "A type of foundation for earthquake-prone areas",
      "A damper that only works during earthquakes",
      "A special mortar joint for chimneys",
    ],
    correctAnswer: 0,
    explanation:
      "地震挡板（earthquake damper）是在地震活动期间自动关闭燃气供应或烟道的装置。在加州等地震高发地区，这是一种重要的安全特征，可以防止地震期间的火灾和燃气泄漏。",
    category: "fireplace",
  },
  {
    id: 1750,
    question:
      "What is the firebox of a masonry fireplace?",
    options: [
      "The chimney flue above the damper",
      "The interior chamber where the fire is built, lined with firebrick",
      "The exterior brick veneer of the chimney",
      "The hearth extension in front of the fireplace",
    ],
    correctAnswer: 1,
    explanation:
      "燃烧室（firebox）是壁炉中实际燃烧火焰的内部腔室，通常用耐火砖（firebrick）衬砌，可以承受极高的温度。检查员应检查耐火砖是否有裂缝、松动或缺失。",
    category: "fireplace",
  },
  {
    id: 1751,
    question:
      "What is the purpose of the flue in a chimney?",
    options: [
      "To support the chimney structure",
      "To collect rainwater for disposal",
      "To provide a contained passageway for combustion gases to exit the building safely",
      "To provide fresh air to the firebox",
    ],
    correctAnswer: 2,
    explanation:
      "烟道（flue）是烟囱内部为燃烧气体提供安全排出建筑物的密闭通道。内衬保护烟囱结构免受高温和腐蚀性气体的侵害。",
    category: "fireplace",
  },
  {
    id: 1752,
    question:
      "When inspecting a factory-built fireplace, what key marking should a home inspector look for?",
    options: [
      "The mason's signature",
      "The year the bricks were manufactured",
      "The homeowner's insurance policy number",
      "A listing label from a recognized testing laboratory such as UL",
    ],
    correctAnswer: 3,
    explanation:
      "检查预制壁炉时，应查找认证测试实验室（如UL）的标签。这表明壁炉经过了安全测试和认证，按照特定标准制造。缺少标签可能意味着产品未经认证。",
    category: "fireplace",
  },
  {
    id: 1753,
    question:
      "What problem does a rain cap that is too small for the flue cause?",
    options: [
      "Restricted draft and potential smoke backup into the home",
      "Excessive chimney height",
      "Increased creosote buildup",
      "Structural damage to the chimney",
    ],
    correctAnswer: 0,
    explanation:
      "过小的雨帽会限制烟道的气流，导致排烟不畅甚至烟雾倒灌入室内。雨帽应正确匹配烟道尺寸，以确保足够的气流同时防止雨水和动物进入。",
    category: "fireplace",
  },
  {
    id: 1754,
    question:
      "Electric fireplaces differ from gas and wood-burning fireplaces in that they:",
    options: [
      "Produce real flames",
      "Do not require a chimney, flue, or any venting",
      "Require a gas line connection",
      "Must be installed in masonry enclosures",
    ],
    correctAnswer: 1,
    explanation:
      "电壁炉不需要烟囱、烟道或任何排气系统，因为它们不产生燃烧副产物。它们使用电力产生热量和模拟火焰效果，安装灵活，几乎可以放置在任何位置。",
    category: "fireplace",
  },
  {
    id: 1755,
    question:
      "What is the hearth extension requirement for a fireplace opening of 6 square feet or larger?",
    options: [
      "16 inches in front and 8 inches on each side",
      "12 inches in front and 6 inches on each side",
      "20 inches in front and 12 inches on each side",
      "24 inches in front and 16 inches on each side",
    ],
    correctAnswer: 2,
    explanation:
      "对于开口面积6平方英尺或更大的壁炉，前方炉膛延伸要求至少20英寸，两侧各至少12英寸。更大的开口产生更多热量和火花风险，因此需要更大的保护区域。",
    category: "fireplace",
  },
  {
    id: 1756,
    question:
      "What is the primary concern with a cracked flue liner?",
    options: [
      "The chimney will not look aesthetically pleasing",
      "The fireplace will produce less heat",
      "Rain will enter the firebox",
      "Combustion gases and heat can escape through the cracks into the chimney structure and surrounding combustibles",
    ],
    correctAnswer: 3,
    explanation:
      "烟道内衬开裂会导致燃烧气体和高温通过裂缝逸出到烟囱结构和周围可燃物中，可能引起火灾或一氧化碳泄漏到居住空间。这是严重的安全隐患，需要及时修复。",
    category: "fireplace",
  },
  {
    id: 1757,
    question:
      "What causes a chimney to have poor draft?",
    options: [
      "Any combination of insufficient chimney height, excessive flue size, cold flue, or blockages",
      "Using dry seasoned wood",
      "Having a properly sized chimney cap",
      "Having clean flue liners",
    ],
    correctAnswer: 0,
    explanation:
      "烟囱排烟不良可能由多种原因造成：烟囱高度不足、烟道尺寸过大、烟道过冷、堵塞、负压室内环境或气密性过好的房屋。良好的排烟取决于热空气上升产生的自然对流效应。",
    category: "fireplace",
  },
  {
    id: 1758,
    question:
      "What type of mortar should be used to repair firebrick joints inside a firebox?",
    options: [
      "Standard Portland cement mortar",
      "Refractory cement or high-temperature mortar rated for firebox use",
      "Silicone caulk",
      "Wood glue",
    ],
    correctAnswer: 1,
    explanation:
      "燃烧室内耐火砖接缝的修补应使用耐火水泥或额定用于燃烧室的高温砂浆。普通砂浆无法承受燃烧室内的极端温度，会迅速劣化开裂。",
    category: "fireplace",
  },
  {
    id: 1759,
    question:
      "What should a home inspector check regarding the damper operation?",
    options: [
      "Only that it exists",
      "Only the color of the damper",
      "That it opens and closes fully, seals properly, and is not rusted or warped",
      "Only whether it is open or closed",
    ],
    correctAnswer: 2,
    explanation:
      "检查员应检查挡板是否能完全打开和关闭，密封是否良好，以及是否有锈蚀或变形。无法正常关闭的挡板会导致持续的热量损失；无法打开的挡板会导致烟雾倒灌。",
    category: "fireplace",
  },
  {
    id: 1760,
    question:
      "How should smoke chamber walls be finished in a masonry fireplace?",
    options: [
      "Left with rough corbeled bricks for better grip",
      "Lined with wood paneling",
      "Covered with metal sheeting",
      "Parged smooth with a refractory mortar to reduce turbulence and creosote accumulation",
    ],
    correctAnswer: 3,
    explanation:
      "烟室墙壁应使用耐火砂浆涂抹平滑（parging），以减少气流紊乱和杂酚油积聚。粗糙的阶梯式砌砖（corbeling）表面会增加杂酚油附着和烟囱火灾的风险。",
    category: "fireplace",
  },
  {
    id: 1761,
    question:
      "What is the clearance requirement for a single-wall stovepipe to combustible materials?",
    options: [
      "18 inches",
      "6 inches",
      "12 inches",
      "36 inches",
    ],
    correctAnswer: 0,
    explanation:
      "单壁烟管（single-wall stovepipe）与可燃材料的间距要求为18英寸。这个间距确保管道散发的热量不会点燃附近的可燃物。双壁管道可能允许更小的间距。",
    category: "fireplace",
  },
  {
    id: 1762,
    question:
      "What is the primary advantage of a top-sealing damper compared to a throat damper?",
    options: [
      "It is less expensive",
      "It provides a better seal at the top of the flue, preventing heat loss, rain entry, and animal intrusion",
      "It improves creosote cleaning",
      "It is required by building codes in all states",
    ],
    correctAnswer: 1,
    explanation:
      "顶部密封式挡板（top-sealing damper）安装在烟囱顶部，比喉部挡板提供更好的密封，防止热量损失、雨水进入和动物入侵。它通过烟道内的链条或拉索操作。",
    category: "fireplace",
  },
  {
    id: 1763,
    question:
      "What causes white staining on the exterior of a chimney?",
    options: [
      "Paint peeling from the chimney",
      "Smoke staining from the flue",
      "Efflorescence from mineral salts being deposited by moisture migration through the masonry",
      "Normal aging of the brick",
    ],
    correctAnswer: 2,
    explanation:
      "烟囱外部的白色污渍是白华现象（efflorescence），由水分通过砌体迁移时将矿物盐沉积在表面造成。这表明存在过多的水分渗透，需要查找和解决水分来源。",
    category: "fireplace",
  },
  {
    id: 1764,
    question:
      "Why is it important that a chimney extend at least 2 feet above any structure within 10 feet?",
    options: [
      "To make the chimney more visible for aesthetic purposes",
      "To allow for easier chimney cleaning",
      "To meet minimum property height requirements",
      "To prevent downdrafts caused by nearby obstructions and to ensure proper exhaust dispersal",
    ],
    correctAnswer: 3,
    explanation:
      "烟囱需要高于10英尺范围内任何结构至少2英尺，以防止附近障碍物引起的下降气流导致烟雾倒灌，并确保废气在安全高度充分分散。这是3-2-10规则的一部分。",
    category: "fireplace",
  },
  {
    id: 1765,
    question:
      "What material are firebricks typically made from?",
    options: [
      "High-fired refractory clay that can withstand temperatures over 2000°F",
      "Standard red clay bricks",
      "Concrete blocks",
      "Limestone",
    ],
    correctAnswer: 0,
    explanation:
      "耐火砖（firebrick）由高温烧制的耐火粘土制成，可以承受2000°F以上的温度。它们通常呈淡黄色或白色，比普通红砖更能耐受壁炉中的极端温度。",
    category: "fireplace",
  },
  {
    id: 1766,
    question:
      "What is the main hazard of using unseasoned (green) firewood?",
    options: [
      "It burns too hot and damages the firebox",
      "It produces excessive creosote due to incomplete combustion and high moisture content",
      "It produces no smoke",
      "It is lighter and easier to handle",
    ],
    correctAnswer: 1,
    explanation:
      "使用未干燥（绿色）木柴的主要危险是由于含水量高导致燃烧不完全，产生过多的杂酚油。杂酚油在烟道内积聚是烟囱火灾的主要原因。",
    category: "fireplace",
  },
  {
    id: 1767,
    question:
      "What is the chimney flue size generally based on?",
    options: [
      "The height of the chimney only",
      "The number of rooms in the house",
      "The size of the fireplace opening — typically 1/10 to 1/12 of the fireplace opening area",
      "The type of roofing material",
    ],
    correctAnswer: 2,
    explanation:
      "烟道尺寸通常基于壁炉开口面积，一般为开口面积的1/10到1/12。烟道过大或过小都会导致排烟不良——过大会降低烟气速度，过小会限制排烟量。",
    category: "fireplace",
  },
  {
    id: 1768,
    question:
      "What is a common sign of a past chimney fire?",
    options: [
      "A clean, shiny flue interior",
      "New mortar joints throughout the chimney",
      "Excessive efflorescence on the exterior only",
      "Distorted or buckled metal components, cracked flue tiles, and discolored rain cap",
    ],
    correctAnswer: 3,
    explanation:
      "过去发生烟囱火灾的常见迹象包括：变形或翘曲的金属部件、裂缝的烟道瓷砖、变色的雨帽、外部砂浆损坏、以及烟道内壁上的蜂窝状杂酚油残余物。",
    category: "fireplace",
  },
  {
    id: 1769,
    question:
      "What should a home inspector report about a chimney that is separating from the house structure?",
    options: [
      "It is a significant structural concern that requires evaluation by a qualified professional",
      "It is normal settling and needs no attention",
      "It only needs repainting",
      "It should be demolished immediately by the inspector",
    ],
    correctAnswer: 0,
    explanation:
      "烟囱与房屋结构分离是严重的结构问题，可能由基础沉降、地震损坏或砌体劣化引起。检查员应将此报告为重大关注事项，并建议由合格专业人员进行评估。",
    category: "fireplace",
  },
  {
    id: 1770,
    question:
      "What is the correct slope direction for a stovepipe connecting a wood stove to a chimney?",
    options: [
      "Sloping downward toward the chimney",
      "Rising upward at least 1/4 inch per foot toward the chimney",
      "Perfectly level",
      "Sloping downward toward the stove",
    ],
    correctAnswer: 1,
    explanation:
      "烟管应以每英尺至少1/4英寸的坡度向上倾斜至烟囱，以促进自然排烟。向下倾斜会阻碍烟气流动，可能导致烟雾倒灌和杂酚油积聚。",
    category: "fireplace",
  },
  {
    id: 1771,
    question:
      "What is the maximum number of 90-degree elbows generally recommended in a stovepipe run?",
    options: [
      "Four",
      "Six",
      "Two",
      "There is no limit",
    ],
    correctAnswer: 2,
    explanation:
      "烟管中一般建议最多使用两个90度弯头。每个弯头都会增加对气流的阻力，减少排烟效率。尽可能使用45度弯头代替90度弯头，并保持烟管路线尽可能直。",
    category: "fireplace",
  },
  {
    id: 1772,
    question:
      "What should an inspector verify about a gas fireplace's thermocouple or thermopile?",
    options: [
      "That it generates electricity for the home",
      "That it is connected to the chimney liner",
      "That it controls the room thermostat",
      "That it properly senses the pilot flame and will shut off gas if the pilot goes out",
    ],
    correctAnswer: 3,
    explanation:
      "检查员应验证热电偶或热电堆是否正常感应导火焰，并在导火焰熄灭时自动关闭燃气。这是燃气壁炉的关键安全装置，防止未燃烧的天然气泄漏到室内。",
    category: "fireplace",
  },
  {
    id: 1773,
    question:
      "What is the function of the smoke shelf located above the fireplace throat (damper)?",
    options: [
      "It provides structural support for the chimney above the firebox",
      "It catches falling debris and deflects downdrafts, preventing smoke from entering the room",
      "It regulates the air supply to the fire below",
      "It provides a ledge for decorative items inside the firebox",
    ],
    correctAnswer: 1,
    explanation:
      "烟架（smoke shelf）位于壁炉咽喉（throat/风门）上方，有两个主要功能：（1）捕获从烟道落下的碎屑和水；（2）将向下的气流（反向气流）偏转向上，防止烟雾被吹入室内。烟架应保持清洁以维持其防止倒流的功能。",
    category: "fireplace",
  },
  {
    id: 1774,
    question:
      "What is a direct vent fireplace's sealed combustion system designed to prevent?",
    options: [
      "All heat from entering the room",
      "Combustion gases from entering the living space and indoor air from being used for combustion",
      "The fireplace from producing flames",
      "Electricity from reaching the fireplace",
    ],
    correctAnswer: 1,
    explanation:
      "直排式壁炉的密封燃烧系统设计用于防止燃烧气体进入居住空间，同时不使用室内空气进行燃烧。这种设计通过同轴管道系统实现——外管进气，内管排气。",
    category: "fireplace",
  },
  {
    id: 1775,
    question:
      "How often should a pellet stove be cleaned?",
    options: [
      "Only once every 5 years",
      "Never — pellet stoves are self-cleaning",
      "The burn pot should be cleaned daily or after each use, and a thorough cleaning done at least annually",
      "Only when smoke is visible in the room",
    ],
    correctAnswer: 2,
    explanation:
      "颗粒炉的燃烧盘应在每次使用后清理，彻底清洁至少每年一次。灰烬和残渣的积累会降低效率和安全性。排气管道也需要定期检查和清洁。",
    category: "fireplace",
  },
  {
    id: 1776,
    question:
      "What is the proper material for a chimney crown?",
    options: [
      "Standard brick mortar only",
      "Plywood covered with roofing tar",
      "Metal sheeting",
      "Portland cement-based mortar or concrete mix with a slight slope away from the flue",
    ],
    correctAnswer: 3,
    explanation:
      "烟囱冠应由波特兰水泥基砂浆或混凝土混合料制成，从烟道向外略微倾斜以排水。普通砌砖砂浆不够耐久，容易开裂。优质烟囱冠应悬伸超过烟囱壁至少2英寸。",
    category: "fireplace",
  },
  {
    id: 1777,
    question:
      "What should a home inspector look for when examining chimney mortar joints?",
    options: [
      "Cracking, crumbling, missing mortar, and signs of deterioration that could allow water penetration",
      "Only the color of the mortar",
      "Whether the mortar matches the brick color",
      "The age of the mortar only",
    ],
    correctAnswer: 0,
    explanation:
      "检查烟囱砂浆缝时应注意开裂、碎化、缺失砂浆以及可能允许水渗透的劣化迹象。劣化的砂浆缝（需要重新勾缝tuckpointing）是烟囱最常见的维护问题之一。",
    category: "fireplace",
  },
  {
    id: 1778,
    question:
      "What is the minimum required thickness of a masonry fireplace firebox wall?",
    options: [
      "4 inches",
      "10 inches for a firebrick-lined firebox",
      "2 inches",
      "18 inches",
    ],
    correctAnswer: 1,
    explanation:
      "砖石壁炉的燃烧室壁厚最小要求为10英寸（包括耐火砖衬里）。足够的壁厚确保热量不会传导到周围的可燃结构中，是消防安全的基本要求。",
    category: "fireplace",
  },
  {
    id: 1779,
    question:
      "What does it mean if a home inspector notices a strong creosote odor from a fireplace during summer?",
    options: [
      "The fireplace is functioning perfectly",
      "The chimney cap needs painting",
      "There is likely significant creosote buildup in the chimney that needs cleaning",
      "The house has good ventilation",
    ],
    correctAnswer: 2,
    explanation:
      "夏季壁炉散发强烈杂酚油气味表明烟囱中可能有大量杂酚油积聚。高温和潮湿会加重气味。这是烟囱需要清扫的信号，也提示存在烟囱火灾风险。",
    category: "fireplace",
  },
  {
    id: 1780,
    question:
      "Which type of chimney liner is NOT appropriate for wood-burning applications?",
    options: [
      "Stainless steel liner",
      "Clay tile liner",
      "Cast-in-place liner",
      "Aluminum liner",
    ],
    correctAnswer: 3,
    explanation:
      "铝制内衬（aluminum liner）不适用于燃木应用，因为它无法承受燃木产生的高温。铝制内衬仅适用于某些燃气设备。燃木应用应使用不锈钢、粘土瓦或浇注式内衬。",
    category: "fireplace",
  },
  {
    id: 1781,
    question:
      "What is the concern with using a fireplace that has a missing or broken damper?",
    options: [
      "Continuous energy loss when not in use, and inability to control draft during use",
      "The fireplace will produce too much heat",
      "The chimney will collapse",
      "There is no concern — dampers are optional",
    ],
    correctAnswer: 0,
    explanation:
      "缺失或损坏的挡板会导致未使用壁炉时持续的能量损失（暖气或冷气通过烟囱逸出），使用时无法控制气流。这会显著增加能源成本并影响壁炉性能。",
    category: "fireplace",
  },
  {
    id: 1782,
    question:
      "What is the purpose of an air-cooled chimney chase system?",
    options: [
      "To provide air conditioning to the room",
      "To allow air to circulate between the chimney pipe and chase walls, keeping the chase cool",
      "To cool the smoke before it exits the chimney",
      "To prevent rain from entering",
    ],
    correctAnswer: 1,
    explanation:
      "空气冷却式烟囱围护系统允许空气在烟囱管道和围护墙壁之间循环，保持围护结构凉爽。这对于预制壁炉的木框架围护至关重要，防止热量传导到可燃材料。",
    category: "fireplace",
  },
  {
    id: 1783,
    question:
      "When should a home inspector recommend a Level II chimney inspection?",
    options: [
      "Only when the homeowner reports problems",
      "Every 10 years regardless of circumstances",
      "During any real estate transaction involving the property",
      "Only for chimneys over 50 years old",
    ],
    correctAnswer: 2,
    explanation:
      "在任何涉及房产的交易中，都应建议进行二级烟囱检查。这比标准家庭检查中的一级检查更详细，包括可能的视频扫描，可以发现隐藏的缺陷。",
    category: "fireplace",
  },
  {
    id: 1784,
    question:
      "What size flue tile is appropriate for most standard residential fireplaces?",
    options: [
      "4 x 4 inches",
      "24 x 24 inches",
      "2 x 2 inches",
      "8 x 12 inches or 12 x 12 inches",
    ],
    correctAnswer: 3,
    explanation:
      "大多数标准住宅壁炉使用8x12英寸或12x12英寸的烟道瓷砖。正确的尺寸取决于壁炉开口面积和烟囱高度，应按照建筑规范中的比例要求选择。",
    category: "fireplace",
  },
  {
    id: 1785,
    question:
      "What is the significance of a chimney that has been parging on its exterior?",
    options: [
      "A thin coat of cement has been applied to the exterior, potentially hiding underlying brick deterioration",
      "The chimney has been recently rebuilt",
      "The chimney is brand new",
      "The chimney is made of stone",
    ],
    correctAnswer: 0,
    explanation:
      "烟囱外部涂抹灰浆（parging）可能是为了隐藏砖石劣化。检查员应注意这可能掩盖了潜在的结构问题，如剥落的砖块或恶化的砂浆缝。应仔细检查灰浆是否有裂缝。",
    category: "fireplace",
  },
  {
    id: 1786,
    question:
      "What is the minimum chimney height above the roof penetration point?",
    options: [
      "1 foot",
      "3 feet",
      "5 feet",
      "10 feet",
    ],
    correctAnswer: 1,
    explanation:
      "根据3-2-10规则，烟囱至少需要高出屋顶穿透点3英尺。这个最低高度要求确保基本的排烟效果和安全性，无论附近是否有其他结构。",
    category: "fireplace",
  },
  {
    id: 1787,
    question:
      "What is the function of a fireplace lintel?",
    options: [
      "A decorative shelf below the fireplace",
      "A device to control chimney draft",
      "A structural support (usually steel angle iron) that spans the top of the fireplace opening to support the masonry above",
      "A type of flue liner",
    ],
    correctAnswer: 2,
    explanation:
      "壁炉过梁（lintel）是跨越壁炉开口顶部的结构支撑件（通常是钢角铁），支撑其上方的砌体。如果过梁弯曲或腐蚀，可能导致上方砖石开裂或坍塌。",
    category: "fireplace",
  },
  {
    id: 1788,
    question:
      "What is the concern with using treated lumber in a fireplace or wood stove?",
    options: [
      "It burns too slowly",
      "It does not produce enough heat",
      "It is too expensive to use as firewood",
      "It releases toxic chemicals when burned, including arsenic and copper compounds",
    ],
    correctAnswer: 3,
    explanation:
      "燃烧经过处理的木材会释放有毒化学物质，包括砷和铜化合物。这些有毒烟气对人体健康有害，也会损坏壁炉和烟囱内衬。只应燃烧未经处理的天然干燥木材。",
    category: "fireplace",
  },
  {
    id: 1789,
    question:
      "What is the purpose of a combustion air inlet on a wood stove?",
    options: [
      "To allow controlled air into the stove for proper combustion",
      "To cool down the stove when it gets too hot",
      "To vent exhaust gases from the stove",
      "To allow moisture to escape from the firewood",
    ],
    correctAnswer: 0,
    explanation:
      "木柴炉的燃烧空气进口允许受控的空气进入炉内进行适当燃烧。通过调节进气量可以控制燃烧速率和温度——更多空气意味着更猛烈的燃烧，减少空气则减缓燃烧。",
    category: "fireplace",
  },
  {
    id: 1790,
    question:
      "What does a gap between the chimney and the house siding typically indicate?",
    options: [
      "Proper installation with required expansion gaps",
      "Differential settlement between the chimney foundation and the house foundation",
      "Recent chimney repair work",
      "Normal thermal movement that is not a concern",
    ],
    correctAnswer: 1,
    explanation:
      "烟囱与房屋壁板之间的间隙通常表明烟囱基础与房屋基础之间存在不均匀沉降。这是一个结构问题，可能导致水渗入和进一步的损坏，应建议专业评估。",
    category: "fireplace",
  },
  {
    id: 1791,
    question:
      "What type of fuel does a pellet stove typically use?",
    options: [
      "Natural gas",
      "Propane",
      "Compressed wood pellets made from sawdust and wood shavings",
      "Kerosene",
    ],
    correctAnswer: 2,
    explanation:
      "颗粒炉通常使用由锯末和木刨花压缩而成的木质颗粒。这些颗粒具有标准化的尺寸和低含水量（通常低于10%），使其燃烧效率高、排放少。",
    category: "fireplace",
  },
  {
    id: 1792,
    question:
      "What is the concern when a factory-built chimney is used with a masonry fireplace or vice versa?",
    options: [
      "There is no concern as they are interchangeable",
      "It only affects the chimney's appearance",
      "It increases the property value",
      "The components are not designed to be interchanged and mixing them creates a fire hazard",
    ],
    correctAnswer: 3,
    explanation:
      "工厂制造的烟囱和砖石烟囱的组件不可互换使用。混合使用会产生火灾隐患，因为每种系统都是作为完整单元设计和测试的，组件不兼容可能导致密封不良或间距不足。",
    category: "fireplace",
  },
  {
    id: 1793,
    question:
      "What is the proper way to size a chimney cap?",
    options: [
      "It should match the outside dimensions of the flue tile or flue pipe it covers",
      "It should be as small as possible to restrict airflow",
      "It should be twice the size of the chimney crown",
      "Size does not matter as long as it covers the top",
    ],
    correctAnswer: 0,
    explanation:
      "烟囱帽应匹配其所覆盖的烟道瓷砖或烟道管道的外部尺寸。正确尺寸确保足够的排烟空间同时提供防雨和防动物保护。过大或过小都会影响性能。",
    category: "fireplace",
  },
  {
    id: 1794,
    question:
      "What is creosote and why is it a concern?",
    options: [
      "A harmless natural coating that protects the flue liner",
      "A flammable byproduct of incomplete wood combustion that accumulates in flues and can cause chimney fires",
      "A type of chimney cleaning solution",
      "A material used to build chimney crowns",
    ],
    correctAnswer: 1,
    explanation:
      "杂酚油（creosote）是木材不完全燃烧的易燃副产物，会在烟道内积聚。它是烟囱火灾的主要原因。积聚量取决于燃烧温度、木材含水量和空气供应等因素。定期清扫是预防措施。",
    category: "fireplace",
  },
  {
    id: 1795,
    question:
      "Why should combustible materials be kept at least 2 inches from a masonry chimney?",
    options: [
      "To allow for chimney expansion during earthquakes",
      "To make chimney inspection easier",
      "To provide an air gap that prevents heat transfer from the chimney to combustibles",
      "To prevent moisture damage to the framing",
    ],
    correctAnswer: 2,
    explanation:
      "可燃材料与砖石烟囱之间保持至少2英寸的空气间隙，可以防止烟囱的热量传导到可燃物。即使砖石外表面温度不高，长时间暴露在高温下可能导致木材碳化并最终起火。",
    category: "fireplace",
  },
  {
    id: 1796,
    question:
      "What is the primary safety concern with a vent-free gas fireplace in a bedroom?",
    options: [
      "The flame is too bright for sleeping",
      "It produces too much noise",
      "It makes the room too cold",
      "Oxygen depletion and carbon monoxide accumulation in a small enclosed space during sleep",
    ],
    correctAnswer: 3,
    explanation:
      "在卧室使用无排气式燃气壁炉的主要安全隐患是在密闭小空间中睡眠时可能发生氧气耗尽和一氧化碳积聚。许多司法管辖区禁止在卧室安装无排气式燃气壁炉。",
    category: "fireplace",
  },
  {
    id: 1797,
    question:
      "What is a thimble in chimney construction?",
    options: [
      "A metal or clay sleeve that provides a safe passage for a stovepipe through a combustible wall into a chimney",
      "A cap placed on top of the chimney",
      "A tool used to clean the flue",
      "A type of damper mechanism",
    ],
    correctAnswer: 0,
    explanation:
      "套筒（thimble）是金属或粘土制成的套管，为烟管穿过可燃墙壁进入烟囱提供安全通道。它确保烟管与可燃材料之间保持适当的间距，防止热量传导引发火灾。",
    category: "fireplace",
  },
  {
    id: 1798,
    question:
      "How can a home inspector identify a factory-built fireplace versus a masonry fireplace?",
    options: [
      "Factory-built fireplaces are always located on exterior walls",
      "Factory-built fireplaces have metal fireboxes, listing labels, and typically lighter construction",
      "Masonry fireplaces are always smaller than factory-built ones",
      "There is no way to tell them apart visually",
    ],
    correctAnswer: 1,
    explanation:
      "工厂预制壁炉通常有金属燃烧室、认证标签和较轻的结构。砖石壁炉有砖或石头燃烧室、更厚实的结构，且通常有独立的砖石基础。",
    category: "fireplace",
  },
  {
    id: 1799,
    question:
      "What clearance is required between a wood stove and an unprotected ceiling?",
    options: [
      "12 inches minimum",
      "18 inches minimum",
      "36 inches minimum",
      "48 inches minimum",
    ],
    correctAnswer: 2,
    explanation:
      "木柴炉与未保护天花板之间需要至少36英寸的间距。这与墙壁间距要求相同，确保辐射热不会使天花板材料温度升高到危险水平。",
    category: "fireplace",
  },
  {
    id: 1800,
    question:
      "What is the purpose of an ash pit in a masonry fireplace?",
    options: [
      "To provide combustion air to the firebox",
      "To support the fireplace foundation",
      "To drain water from the firebox",
      "To collect and store ashes that fall through the ash dump for later removal",
    ],
    correctAnswer: 3,
    explanation:
      "灰坑（ash pit）位于壁炉底部下方，收集和储存通过灰坑口掉落的灰烬，便于以后通过清洁口门清除。它使壁炉清洁更方便，不必从燃烧室内铲灰。",
    category: "fireplace",
  },
  {
    id: 1801,
    question:
      "What is the correct installation height for a CO detector near a gas fireplace?",
    options: [
      "At any height on the wall or ceiling, as CO mixes evenly with air, but ideally near sleeping areas",
      "Only on the floor since CO is heavier than air",
      "Only on the ceiling since CO rises",
      "Inside the fireplace itself",
    ],
    correctAnswer: 0,
    explanation:
      "一氧化碳（CO）与空气密度相近，会均匀混合，因此CO探测器可以安装在墙壁或天花板的任何高度。关键是安装在靠近睡眠区域的位置，以便在睡眠时及时发出警报。",
    category: "fireplace",
  },
  {
    id: 1802,
    question:
      "What is the primary concern with connecting multiple appliances to a single chimney flue?",
    options: [
      "It reduces property value",
      "Potential for backdrafting and carbon monoxide spillage from one appliance when the other is operating",
      "It is always prohibited by code",
      "It makes the chimney too heavy",
    ],
    correctAnswer: 1,
    explanation:
      "多个设备共用一个烟道的主要问题是可能导致烟气倒灌和一氧化碳泄漏。当一个设备运行时，可能造成另一个设备的废气倒流到室内，构成严重的安全隐患。",
    category: "fireplace",
  },
  {
    id: 1803,
    question:
      "What should be checked on a gas fireplace's pilot light assembly?",
    options: [
      "That the pilot flame is bright yellow",
      "That the pilot flame is as large as possible",
      "That the pilot produces a steady blue flame and the thermocouple/thermopile is properly positioned",
      "That the pilot is turned off when the fireplace is in use",
    ],
    correctAnswer: 2,
    explanation:
      "燃气壁炉的导火灯应产生稳定的蓝色火焰，热电偶/热电堆应正确定位以感应火焰。黄色火焰可能表明燃烧不完全或空气混合不当，需要调整或维修。",
    category: "fireplace",
  },
  {
    id: 1804,
    question:
      "What is the purpose of a chimney cap's drip edge?",
    options: [
      "To increase the chimney draft",
      "To support the spark arrestor screen",
      "To prevent the cap from blowing off",
      "To direct rainwater away from the chimney flue opening and crown",
    ],
    correctAnswer: 3,
    explanation:
      "烟囱帽的滴水边缘将雨水从烟道开口和烟囱冠引导排开，防止水直接流入烟道或沿烟囱冠表面渗入。这有助于保护烟囱冠免受水损坏。",
    category: "fireplace",
  },
  {
    id: 1805,
    question:
      "When inspecting an older home, an inspector notices the chimney has no liner visible. What should be reported?",
    options: [
      "An unlined chimney is a safety hazard as heat and combustion gases can transfer through mortar joints to combustible materials",
      "No liner is needed for older chimneys",
      "The chimney is more efficient without a liner",
      "Only gas appliances require lined chimneys",
    ],
    correctAnswer: 0,
    explanation:
      "没有内衬的烟囱是安全隐患，因为热量和燃烧气体可以通过砂浆缝传递到可燃材料。所有烟囱都应有内衬以保护结构并防止火灾和一氧化碳泄漏。应建议安装内衬。",
    category: "fireplace",
  },
  {
    id: 1806,
    question:
      "What is the minimum projection of a chimney crown beyond the chimney walls?",
    options: [
      "No projection is needed — it should be flush with the walls",
      "At least 2 inches to create a drip edge",
      "At least 6 inches",
      "At least 12 inches",
    ],
    correctAnswer: 1,
    explanation:
      "烟囱冠应至少超出烟囱壁2英寸，形成滴水边缘。这可以防止雨水直接沿烟囱壁流下并渗入砂浆缝，保护烟囱结构免受水损坏。",
    category: "fireplace",
  },
  {
    id: 1807,
    question:
      "What is a common deficiency found with chimney flashing?",
    options: [
      "Flashing that is too thick",
      "Flashing installed with too many nails",
      "Gaps, rust, or sealant failure allowing water to penetrate between the chimney and roof",
      "Flashing that is too shiny",
    ],
    correctAnswer: 2,
    explanation:
      "烟囱泛水板最常见的问题是间隙、锈蚀或密封剂失效，导致雨水在烟囱和屋顶之间渗入。这会造成屋顶结构腐烂、天花板水渍和霉菌生长等问题。",
    category: "fireplace",
  },
  {
    id: 1808,
    question:
      "What type of wood produces the most creosote when burned?",
    options: [
      "Hardwoods such as oak and maple",
      "Seasoned hardwoods",
      "Kiln-dried lumber",
      "Softwoods such as pine and fir, especially when unseasoned",
    ],
    correctAnswer: 3,
    explanation:
      "软木如松木和冷杉，特别是未干燥时，会产生最多的杂酚油。这是因为软木树脂含量高，含水量高的木材燃烧温度较低，导致不完全燃烧和更多杂酚油产生。",
    category: "fireplace",
  },
  {
    id: 1809,
    question:
      "What should an inspector check about a chimney that penetrates through an interior ceiling?",
    options: [
      "That proper fire stopping and clearances to combustible materials are maintained at the penetration",
      "Only that the chimney looks straight",
      "That the ceiling paint matches the chimney color",
      "That the penetration is as small as possible",
    ],
    correctAnswer: 0,
    explanation:
      "检查烟囱穿越室内天花板处时，应确认有适当的防火封堵和与可燃材料的间距。间隙应使用不可燃材料填充，不能使用木质材料或可燃绝缘材料。",
    category: "fireplace",
  },
  {
    id: 1810,
    question:
      "What does a wobbling or loose chimney cap indicate?",
    options: [
      "The chimney has excellent ventilation",
      "The cap needs to be resecured or replaced to prevent it from blowing off and exposing the flue",
      "Normal movement due to wind",
      "The chimney was recently serviced",
    ],
    correctAnswer: 1,
    explanation:
      "晃动或松动的烟囱帽需要重新固定或更换，以防止被风吹落而使烟道暴露。暴露的烟道会让雨水、碎屑和动物进入，导致损坏和安全隐患。",
    category: "fireplace",
  },
  {
    id: 1811,
    question:
      "What is the proper installation angle for a direct vent gas fireplace's vent pipe through an exterior wall?",
    options: [
      "Perfectly level",
      "Sloped downward toward the exterior",
      "Slightly sloped upward toward the exterior to allow condensation to drain outside",
      "Vertical only — never horizontal",
    ],
    correctAnswer: 2,
    explanation:
      "直排式燃气壁炉的排气管穿过外墙时应略微向外倾斜，以便冷凝水排向室外。这防止冷凝水流回壁炉内部，可能损坏部件或影响燃烧。",
    category: "fireplace",
  },
  {
    id: 1812,
    question:
      "What should an inspector note about the condition of firebricks in a fireplace?",
    options: [
      "Only whether the firebricks are clean",
      "The color of the firebricks",
      "Whether the firebricks have a glossy finish",
      "Cracked, loose, missing, or deteriorated firebricks that could expose the chimney structure to heat",
    ],
    correctAnswer: 3,
    explanation:
      "检查员应注意耐火砖是否有裂缝、松动、缺失或劣化，这些情况可能使烟囱结构暴露在高温下。损坏的耐火砖应及时修复或更换，以维持壁炉的安全性。",
    category: "fireplace",
  },
  {
    id: 1813,
    question:
      "What is the purpose of a fresh air intake duct connected to a fireplace?",
    options: [
      "To supply outside air directly to the firebox for combustion without drawing air from inside the home",
      "To cool the fireplace after use",
      "To provide air conditioning to the room",
      "To vent smoke to the outdoors",
    ],
    correctAnswer: 0,
    explanation:
      "新鲜空气进气管道直接从室外为壁炉提供燃烧空气，不从室内抽取空气。这对于密封性好的现代住宅特别重要，可以防止负压导致的回烟和能源浪费。",
    category: "fireplace",
  },
  {
    id: 1814,
    question:
      "What is a catalytic combustor in a wood stove?",
    options: [
      "A fan that blows air into the firebox",
      "A ceramic honeycomb element that lowers the ignition temperature of smoke, reducing emissions and increasing efficiency",
      "A thermostat that controls stove temperature",
      "A type of chimney liner material",
    ],
    correctAnswer: 1,
    explanation:
      "催化燃烧器是木柴炉中的陶瓷蜂窝元件，可以降低烟气的点燃温度，使未完全燃烧的颗粒在较低温度下燃烧。这减少了排放并提高了燃烧效率，但需要定期更换。",
    category: "fireplace",
  },
  {
    id: 1815,
    question:
      "What is the minimum required distance between a chimney and a window that can be opened?",
    options: [
      "No distance requirement exists",
      "1 foot",
      "The chimney top should be high enough that exhaust gases disperse before reaching any openable window",
      "The window must be permanently sealed",
    ],
    correctAnswer: 2,
    explanation:
      "烟囱顶部应足够高，使废气在到达任何可打开窗户之前充分分散。虽然具体距离要求因法规而异，但3-2-10规则和适当的烟囱高度通常可以满足这一安全要求。",
    category: "fireplace",
  },
  {
    id: 1816,
    question:
      "What is the main cause of chimney crown cracking?",
    options: [
      "Excessive chimney height",
      "Too many chimney cleanings",
      "Using the fireplace too infrequently",
      "Thermal expansion and contraction cycles combined with water infiltration",
    ],
    correctAnswer: 3,
    explanation:
      "烟囱冠开裂的主要原因是热膨胀和收缩循环加上水分渗入。烟囱冠暴露在极端温度变化中，水分进入微小裂缝后冻融会使裂缝扩大。应定期检查并及时修补。",
    category: "fireplace",
  },
  {
    id: 1817,
    question:
      "What is the proper clearance for a mantel shelf that projects 3 inches from the wall above a fireplace?",
    options: [
      "At least 13.5 inches above the fireplace opening",
      "6 inches above the fireplace opening",
      "12 inches above the fireplace opening",
      "No minimum clearance is required",
    ],
    correctAnswer: 0,
    explanation:
      "突出墙面3英寸的壁炉架需要距壁炉开口顶部至少13.5英寸。一般规则是每增加1/8英寸的突出量就需要增加1英寸的间距（基础为12英寸加上额外间距）。",
    category: "fireplace",
  },
  {
    id: 1818,
    question:
      "Why is it important that a chimney cap screen be maintained free of creosote buildup?",
    options: [
      "Clogged screens improve chimney performance",
      "Creosote-clogged screens restrict draft and can become a fire ignition point",
      "Creosote on screens is decorative",
      "Screen maintenance is unnecessary",
    ],
    correctAnswer: 1,
    explanation:
      "烟囱帽筛网上的杂酚油积聚会限制排烟气流，降低壁炉性能。更危险的是，积聚的杂酚油可能成为火灾引燃点，火花可能点燃筛网上的杂酚油引发烟囱火灾。",
    category: "fireplace",
  },
  {
    id: 1819,
    question:
      "What is the typical lifespan of a factory-built fireplace before it may need replacement?",
    options: [
      "100 years or more",
      "5 years",
      "20 to 30 years depending on use and maintenance",
      "They never need replacement",
    ],
    correctAnswer: 2,
    explanation:
      "工厂预制壁炉的典型使用寿命为20到30年，取决于使用频率和维护状况。与砖石壁炉相比，预制壁炉的寿命较短，因为金属部件会随时间劣化。",
    category: "fireplace",
  },
  {
    id: 1820,
    question:
      "What is a Class A chimney pipe?",
    options: [
      "A single-wall pipe for gas appliances only",
      "A flexible aluminum pipe for dryer vents",
      "A PVC pipe for bathroom exhaust fans",
      "A double or triple-wall insulated pipe rated for all fuels including wood, gas, and oil",
    ],
    correctAnswer: 3,
    explanation:
      "A级烟囱管道是双壁或三壁隔热管道，额定适用于所有燃料类型，包括木材、燃气和燃油。它们提供了最高级别的防火保护，是穿越天花板和屋顶时必需的类型。",
    category: "fireplace",
  },
  {
    id: 1821,
    question:
      "What should an inspector check about the hearth extension material?",
    options: [
      "That it is made of non-combustible material and is of adequate thickness (at least 2 inches for supported hearths)",
      "That it matches the living room carpet",
      "That it is made of hardwood",
      "Only the color of the material",
    ],
    correctAnswer: 0,
    explanation:
      "炉膛延伸必须由不可燃材料制成（如砖、石、瓷砖或混凝土），且厚度足够（支撑式炉膛至少2英寸）。这可以保护地板结构免受辐射热和掉落余烬的损害。",
    category: "fireplace",
  },
  {
    id: 1822,
    question:
      "What is a Rumford fireplace known for?",
    options: [
      "A very deep firebox for maximum wood storage",
      "A tall, shallow firebox design with angled side walls that radiates more heat into the room",
      "A gas-only fireplace design",
      "A fireplace without a chimney",
    ],
    correctAnswer: 1,
    explanation:
      "Rumford壁炉以高而浅的燃烧室和倾斜的侧壁设计而闻名，可以将更多热量辐射到房间中。这种18世纪的设计比传统深壁炉更高效，近年来重新受到欢迎。",
    category: "fireplace",
  },
  {
    id: 1823,
    question:
      "What is the concern with visible rust on a factory-built fireplace's firebox?",
    options: [
      "Rust improves the firebox appearance",
      "Rust makes the firebox more heat resistant",
      "Rust indicates moisture exposure and weakening of the metal firebox, which could lead to failure",
      "Rust is normal and expected in all fireboxes",
    ],
    correctAnswer: 2,
    explanation:
      "工厂预制壁炉金属燃烧室上的锈迹表明水分暴露和金属弱化，可能导致燃烧室失效。严重锈蚀可能产生孔洞，让热量和燃烧气体逃逸到围护结构中，构成火灾隐患。",
    category: "fireplace",
  },
  {
    id: 1824,
    question:
      "What is the function of the smoke shelf in preventing downdrafts?",
    options: [
      "It blocks all air movement in the chimney",
      "It acts as a water collection point",
      "It supports the damper mechanism",
      "It deflects downdrafts upward, mixing them with rising hot gases to maintain upward flow",
    ],
    correctAnswer: 3,
    explanation:
      "烟架通过将下降气流向上偏转，使其与上升的热烟气混合，从而维持向上的气流。这种设计有效防止了冷空气直接将烟雾推入房间内。",
    category: "fireplace",
  },
  {
    id: 1825,
    question:
      "What is the recommended minimum height above grade for a chimney cleanout door?",
    options: [
      "At least 12 inches above grade to prevent water entry",
      "At ground level for easy access",
      "At least 4 feet above grade",
      "Below grade in a pit",
    ],
    correctAnswer: 0,
    explanation:
      "烟囱清洁口门建议至少高于地面12英寸，以防止雨水和地表水进入灰坑。门应密封良好，使用铸铁材质，并且能够正常打开用于清洁。",
    category: "fireplace",
  },
  {
    id: 1826,
    question:
      "What should a home inspector note about a gas fireplace that shows sooting on the glass?",
    options: [
      "It is completely normal for all gas fireplaces",
      "It may indicate improper combustion, incorrect gas pressure, or a venting problem",
      "It means the fireplace is burning too cleanly",
      "It indicates the glass needs to be upgraded",
    ],
    correctAnswer: 1,
    explanation:
      "燃气壁炉玻璃上的烟灰可能表明燃烧不完全、燃气压力不正确或通风问题。少量轻微烟灰可能正常，但过多烟灰是需要调查的警示信号，可能涉及安全问题。",
    category: "fireplace",
  },
  {
    id: 1827,
    question:
      "What is the recommended practice for burning manufactured fire logs (e.g., Duraflame)?",
    options: [
      "Stack as many as will fit in the firebox",
      "Break them into pieces before lighting",
      "Burn only one at a time and do not poke or break them apart during burning",
      "Mix them with natural firewood for best results",
    ],
    correctAnswer: 2,
    explanation:
      "人造火焰原木应一次只燃烧一个，且燃烧过程中不应拨动或折断。它们含有石蜡等易燃物质，折断可能导致突然猛烈燃烧，堆叠多个可能产生过大火焰。",
    category: "fireplace",
  },
  {
    id: 1828,
    question:
      "What is a chimney offset?",
    options: [
      "The gap between the chimney and the house",
      "A type of chimney cap",
      "The distance from the chimney to the nearest window",
      "A section where the chimney changes direction from vertical, typically limited to 30 degrees from vertical",
    ],
    correctAnswer: 3,
    explanation:
      "烟囱偏移是烟囱从垂直方向改变方向的部分，通常限制在距垂直方向30度以内。偏移过大会影响排烟效率并增加杂酚油积聚，应保持在允许范围内。",
    category: "fireplace",
  },
  {
    id: 1829,
    question:
      "What should an inspector check about the condition of a chimney chase on a factory-built fireplace system?",
    options: [
      "Signs of water damage, wood rot, pest entry, siding condition, and proper clearances maintained",
      "Only the paint color",
      "Whether it matches the house style",
      "The brand name of the chimney system",
    ],
    correctAnswer: 0,
    explanation:
      "检查预制壁炉的烟囱围护时应注意水损坏迹象、木材腐烂、害虫进入、壁板状况以及是否保持了适当的间距。围护结构损坏可能影响烟囱系统的安全性能。",
    category: "fireplace",
  },
  {
    id: 1830,
    question:
      "What is the purpose of an oxygen depletion sensor (ODS) in a vent-free gas fireplace?",
    options: [
      "To measure the temperature of the fire",
      "To automatically shut off the gas supply if the oxygen level in the room drops below a safe threshold",
      "To detect carbon monoxide",
      "To regulate the gas pressure",
    ],
    correctAnswer: 1,
    explanation:
      "氧气耗尽传感器（ODS）在室内氧气水平降至安全阈值以下时自动关闭燃气供应。这是无排气式燃气壁炉的关键安全装置，防止因氧气不足导致不完全燃烧和一氧化碳产生。",
    category: "fireplace",
  },
  {
    id: 1831,
    question:
      "What is the proper way to inspect a chimney from the roof level?",
    options: [
      "Only check if the chimney cap is present",
      "Clean the chimney during inspection",
      "Examine the crown, cap, flashing, mortar joints, and visible flue liner from the top, noting any deficiencies",
      "Remove bricks for internal examination",
    ],
    correctAnswer: 2,
    explanation:
      "从屋顶层检查烟囱时，应检查烟囱冠、帽、泛水板、砂浆缝和从顶部可见的烟道内衬，记录所有缺陷。检查员不应拆除部件，这超出了标准家庭检查的范围。",
    category: "fireplace",
  },
  {
    id: 1832,
    question:
      "What type of damper is installed at the top of the chimney and operated by a chain?",
    options: [
      "Throat damper",
      "Earthquake damper",
      "Barometric damper",
      "Top-mount (top-sealing) damper",
    ],
    correctAnswer: 3,
    explanation:
      "顶置式（顶部密封）挡板安装在烟囱顶部，通过烟道内的链条或拉索从壁炉内操作。它在关闭时提供了比喉部挡板更好的密封效果，减少能源损失。",
    category: "fireplace",
  },
  {
    id: 1833,
    question:
      "What is the concern with birds nesting in an unused chimney?",
    options: [
      "Nests can block the flue, preventing proper venting and creating fire and carbon monoxide hazards",
      "Birds improve chimney ventilation",
      "Bird nests help insulate the chimney",
      "There is no concern with bird nests",
    ],
    correctAnswer: 0,
    explanation:
      "鸟巢可能堵塞烟道，阻止正常排气，如果壁炉被使用可能导致一氧化碳倒灌和火灾危险。干燥的巢材也是高度易燃的。安装合适的烟囱帽可以防止鸟类筑巢。",
    category: "fireplace",
  },
  {
    id: 1834,
    question:
      "What is the recommended action when an inspector discovers evidence of a previous chimney fire?",
    options: [
      "Ignore it if the homeowner says it was repaired",
      "Recommend a Level II chimney inspection by a certified chimney sweep",
      "Recommend demolition of the entire chimney",
      "Clean the chimney and declare it safe",
    ],
    correctAnswer: 1,
    explanation:
      "发现烟囱火灾迹象时，应建议由认证烟囱清扫工进行二级烟囱检查。烟囱火灾可能造成不易从外部观察到的结构损坏，需要专业评估烟道内衬和结构完整性。",
    category: "fireplace",
  },
  {
    id: 1835,
    question:
      "What is the proper termination height for a factory-built chimney above a flat roof?",
    options: [
      "1 foot above the roof",
      "Flush with the roofline",
      "At least 3 feet above the roof penetration point, following the same 3-2-10 rule as masonry chimneys",
      "At least 10 feet above the roof",
    ],
    correctAnswer: 2,
    explanation:
      "工厂预制烟囱在平屋顶上的终端高度至少应高出屋顶穿透点3英尺，遵循与砖石烟囱相同的3-2-10规则。这确保了适当的排烟效果和安全性。",
    category: "fireplace",
  },
  {
    id: 1836,
    question:
      "What should be present at the base of every masonry chimney?",
    options: [
      "A wood platform for stability",
      "A metal bracket attached to the house framing",
      "No foundation is needed for masonry chimneys",
      "A concrete footing that is separate from the house foundation and adequate to support the chimney weight",
    ],
    correctAnswer: 3,
    explanation:
      "每个砖石烟囱底部应有一个独立于房屋基础的混凝土基脚，能够支撑烟囱的重量。烟囱非常重（可达数吨），需要适当的基础支撑以防止沉降和倾斜。",
    category: "fireplace",
  },
  {
    id: 1837,
    question:
      "What is the consequence of a chimney that is too short?",
    options: [
      "Insufficient draft causing smoke to back up into the living space",
      "Too much draft pulling heat out of the room",
      "Excessive creosote removal",
      "Improved energy efficiency",
    ],
    correctAnswer: 0,
    explanation:
      "过短的烟囱会导致排烟不足，烟雾倒灌到居住空间。烟囱高度产生的自然对流（热空气上升效应）是驱动排烟的主要力量，高度不足会大大降低这种效应。",
    category: "fireplace",
  },
  {
    id: 1838,
    question:
      "What is the maximum horizontal run generally allowed for a stovepipe?",
    options: [
      "Any horizontal length is acceptable",
      "The horizontal run should not exceed 75% of the vertical chimney height",
      "No horizontal runs are allowed",
      "The horizontal run must equal the vertical height",
    ],
    correctAnswer: 1,
    explanation:
      "烟管的水平延伸长度一般不应超过垂直烟囱高度的75%。过长的水平段会降低排烟效果，增加杂酚油积聚。尽可能减少水平段的长度并保持向上坡度。",
    category: "fireplace",
  },
  {
    id: 1839,
    question:
      "What is an EPA-certified wood stove?",
    options: [
      "A stove that only burns EPA-approved wood species",
      "A stove manufactured by the EPA",
      "A wood stove that meets EPA emission standards for particulate matter, burning more efficiently and cleanly",
      "Any wood stove sold in the United States",
    ],
    correctAnswer: 2,
    explanation:
      "EPA认证的木柴炉符合美国环保署的颗粒物排放标准，燃烧更高效、更清洁。它们使用先进的燃烧技术（如催化或非催化二次燃烧）减少排放并提高热效率。",
    category: "fireplace",
  },
  {
    id: 1840,
    question:
      "What is the significance of a missing or damaged chimney cap from a home inspection perspective?",
    options: [
      "It is purely cosmetic and not a concern",
      "It improves chimney draft",
      "It prevents creosote buildup",
      "It exposes the flue to water intrusion, animal entry, and debris accumulation that can cause damage and safety hazards",
    ],
    correctAnswer: 3,
    explanation:
      "缺失或损坏的烟囱帽使烟道暴露于雨水渗入、动物进入和碎屑积累中，可能导致烟道内衬损坏、堵塞和安全隐患。这是检查中应当记录并建议修复的常见缺陷。",
    category: "fireplace",
  },
  {
    id: 1841,
    question:
      "What is the danger of using a chimney with cracked or deteriorated mortar joints?",
    options: [
      "Heat and combustion gases can escape through the joints, potentially igniting nearby combustibles or causing CO poisoning",
      "The chimney will be too cold to function",
      "The chimney will produce excessive creosote",
      "There is no danger — mortar cracks are cosmetic only",
    ],
    correctAnswer: 0,
    explanation:
      "砂浆缝开裂或劣化会让热量和燃烧气体从接缝处逸出，可能点燃附近的可燃物或导致一氧化碳中毒。这降低了烟囱的结构完整性和防火安全性。",
    category: "fireplace",
  },
  {
    id: 1842,
    question:
      "How should a home inspector test a fireplace damper?",
    options: [
      "Start a fire and observe smoke direction",
      "Operate the damper handle to verify it opens and closes, and visually confirm movement with a flashlight",
      "Remove the damper for bench testing",
      "Dampers cannot be tested during a home inspection",
    ],
    correctAnswer: 1,
    explanation:
      "检查员应操作挡板手柄验证其能打开和关闭，并用手电筒目视确认运动。检查员不应拆除部件或点火测试。记录挡板是否能完全打开、完全关闭以及操作是否顺畅。",
    category: "fireplace",
  },
  {
    id: 1843,
    question:
      "What is the purpose of the refractory panels in a factory-built fireplace?",
    options: [
      "To reduce the weight of the fireplace",
      "To improve the appearance only",
      "To protect the metal firebox from direct flame exposure and radiate heat into the room",
      "To prevent the gas valve from overheating",
    ],
    correctAnswer: 2,
    explanation:
      "预制壁炉中的耐火面板保护金属燃烧室免受火焰直接照射，并将热量辐射到房间中。损坏或缺失的面板会使金属暴露在过高温度下，缩短壁炉寿命并可能造成危险。",
    category: "fireplace",
  },
  {
    id: 1844,
    question:
      "What is the proper clearance for combustible trim around a factory-built fireplace opening?",
    options: [
      "No clearance is needed",
      "At least 36 inches",
      "2 inches is always sufficient",
      "As specified by the manufacturer's installation instructions, typically noted on the listing label",
    ],
    correctAnswer: 3,
    explanation:
      "预制壁炉开口周围可燃装饰材料的间距应按照制造商的安装说明执行，通常在认证标签上标注。不同品牌和型号的要求不同，必须严格遵守制造商的具体规格。",
    category: "fireplace",
  },
  {
    id: 1845,
    question:
      "What is a barometric damper used for?",
    options: [
      "To regulate draft in oil-fired or coal-fired heating systems by allowing room air to enter the flue",
      "To measure atmospheric pressure",
      "To control the gas supply to a fireplace",
      "To prevent rain from entering the chimney",
    ],
    correctAnswer: 0,
    explanation:
      "气压调节挡板（barometric damper）用于调节燃油或燃煤供暖系统的排烟，通过允许室内空气进入烟道来稳定排烟。它是一个平衡重力门，当排烟过强时自动打开。",
    category: "fireplace",
  },
  {
    id: 1846,
    question:
      "What is tuckpointing in the context of chimney repair?",
    options: [
      "Adding a second layer of bricks to the chimney",
      "Removing deteriorated mortar from joints and replacing it with fresh mortar to restore the chimney's integrity",
      "Installing a new chimney cap",
      "Applying waterproof paint to the chimney exterior",
    ],
    correctAnswer: 1,
    explanation:
      "重新勾缝（tuckpointing）是移除烟囱劣化的砂浆缝并用新砂浆填充的修复过程。这是烟囱维护中最常见的修复项目，可以恢复烟囱的结构完整性和防水性能。",
    category: "fireplace",
  },
  {
    id: 1847,
    question:
      "What is the minimum clearance between a wood stove chimney connector and a ceiling?",
    options: [
      "6 inches for single-wall pipe",
      "3 inches for single-wall pipe",
      "18 inches for single-wall pipe",
      "No minimum clearance is required",
    ],
    correctAnswer: 2,
    explanation:
      "木柴炉单壁烟管连接器与天花板之间的最小间距为18英寸。这个间距防止天花板材料因辐射热而过热。双壁管道可能允许更小的间距，需参照制造商规格。",
    category: "fireplace",
  },
  {
    id: 1848,
    question:
      "What is the concern with combustible items stored near a fireplace or wood stove?",
    options: [
      "They will reduce the efficiency of the fireplace",
      "They will produce unpleasant odors",
      "They block the view of the fire",
      "They can ignite from radiant heat or sparks, creating a fire hazard",
    ],
    correctAnswer: 3,
    explanation:
      "存放在壁炉或木柴炉附近的可燃物品可能因辐射热或火花而起火，造成火灾隐患。检查员应注意壁炉附近是否有报纸、木柴、家具或窗帘等可燃物存放过近。",
    category: "fireplace",
  },
  {
    id: 1849,
    question:
      "What type of sealant is appropriate for sealing a chimney crown?",
    options: [
      "A flexible, weather-resistant crown sealant designed specifically for masonry chimney crowns",
      "Standard latex caulk",
      "Roofing tar",
      "Silicone bathroom caulk",
    ],
    correctAnswer: 0,
    explanation:
      "应使用专为砖石烟囱冠设计的柔性耐候密封剂。普通密封胶无法承受烟囱冠经受的极端温度变化，专用密封剂可以桥接裂缝并随温度变化膨胀收缩。",
    category: "fireplace",
  },
  {
    id: 1850,
    question:
      "What should a home inspector report if they observe a chimney with no visible flue liner from the top?",
    options: [
      "All old chimneys are unlined and this is acceptable",
      "The chimney may be unlined, which is a safety concern requiring further evaluation by a chimney specialist",
      "A flue liner is only required for gas appliances",
      "The inspector should install a liner before completing the report",
    ],
    correctAnswer: 1,
    explanation:
      "如果从烟囱顶部看不到烟道内衬，烟囱可能是无衬里的，这是安全隐患。无内衬的烟囱允许热量和燃烧气体直接接触砌体和周围材料，应建议烟囱专家进一步评估。",
    category: "fireplace",
  },
  // ========== Safety (1851-2000) ==========
  {
    id: 1851,
    question:
      "According to California law, where must smoke alarms be installed in a residential dwelling?",
    options: [
      "Only in the kitchen",
      "Only on the main living floor",
      "In every bedroom, outside each sleeping area, and on every level of the home including the basement",
      "Only in hallways",
    ],
    correctAnswer: 2,
    explanation:
      "加州法律要求在每间卧室内、每个睡眠区域外的走廊以及房屋的每一层（包括地下室）安装烟雾报警器。这确保了在火灾发生时，居住者能够及时收到警报。",
    category: "safety",
  },
  {
    id: 1852,
    question:
      "What are the California requirements for smoke alarm power source in existing homes sold after July 1, 2015?",
    options: [
      "Battery-operated only",
      "Plug-in models only",
      "Solar-powered alarms",
      "Hardwired with battery backup, or 10-year sealed battery alarms",
    ],
    correctAnswer: 3,
    explanation:
      "2015年7月1日后出售的加州现有住宅，烟雾报警器必须是硬连线带电池备份，或10年密封电池报警器。这确保了即使在停电期间，报警器也能正常工作。",
    category: "safety",
  },
  {
    id: 1853,
    question:
      "What is the minimum egress window opening area required for bedrooms above the ground floor?",
    options: [
      "5.7 square feet",
      "3.0 square feet",
      "4.0 square feet",
      "8.0 square feet",
    ],
    correctAnswer: 0,
    explanation:
      "地面层以上卧室的最小逃生窗开口面积要求为5.7平方英尺。这个尺寸确保消防人员能够携带设备通过窗户进入，居住者也能安全逃出。",
    category: "safety",
  },
  {
    id: 1854,
    question:
      "What is the maximum sill height for an egress window?",
    options: [
      "60 inches above the finished floor",
      "44 inches above the finished floor",
      "36 inches above the finished floor",
      "24 inches above the finished floor",
    ],
    correctAnswer: 1,
    explanation:
      "逃生窗窗台距完成地面的最大高度为44英寸。较低的窗台使居住者（包括儿童和老年人）在紧急情况下更容易通过窗户逃生。",
    category: "safety",
  },
  {
    id: 1855,
    question:
      "What is the minimum egress window opening height?",
    options: [
      "12 inches",
      "36 inches",
      "24 inches",
      "48 inches",
    ],
    correctAnswer: 2,
    explanation:
      "逃生窗的最小开口高度为24英寸。这确保了足够的高度让人穿过窗户。同时宽度和总面积也必须满足最低要求。",
    category: "safety",
  },
  {
    id: 1856,
    question:
      "What is the minimum egress window opening width?",
    options: [
      "12 inches",
      "36 inches",
      "48 inches",
      "20 inches",
    ],
    correctAnswer: 3,
    explanation:
      "逃生窗的最小开口宽度为20英寸。这与最小高度24英寸和最小面积5.7平方英尺的要求配合，确保紧急逃生和救援通道的可用性。",
    category: "safety",
  },
  {
    id: 1857,
    question:
      "What is the egress window opening area requirement for ground floor bedrooms?",
    options: [
      "5.0 square feet",
      "5.7 square feet",
      "3.0 square feet",
      "8.0 square feet",
    ],
    correctAnswer: 0,
    explanation:
      "地面层卧室的逃生窗开口面积要求为5.0平方英尺（与上层的5.7平方英尺不同）。地面层窗户更容易逃生，因此面积要求略低。",
    category: "safety",
  },
  {
    id: 1858,
    question:
      "What is the minimum pool fence height required by California law (AB 3305)?",
    options: [
      "36 inches (3 feet)",
      "60 inches (5 feet)",
      "48 inches (4 feet)",
      "72 inches (6 feet)",
    ],
    correctAnswer: 1,
    explanation:
      "加州法律（AB 3305）要求泳池围栏最低高度为60英寸（5英尺）。这个高度旨在防止幼儿攀爬越过围栏进入泳池区域，降低溺水风险。",
    category: "safety",
  },
  {
    id: 1859,
    question:
      "What are the California requirements for pool gate operation?",
    options: [
      "Gates may swing in any direction",
      "Manual latching is sufficient",
      "Gates must be self-closing and self-latching, opening outward away from the pool",
      "Gates are not required if a pool alarm is installed",
    ],
    correctAnswer: 2,
    explanation:
      "加州要求泳池围栏门必须自动关闭和自动锁闭，向外（远离泳池方向）打开。自动关闭和锁闭确保门在每次使用后自动恢复关闭状态，防止儿童进入。",
    category: "safety",
  },
  {
    id: 1860,
    question:
      "According to California law (SB 1394), where must carbon monoxide (CO) detectors be installed?",
    options: [
      "Only in the kitchen",
      "Only in the garage",
      "In every room of the house",
      "Outside each sleeping area in a dwelling unit with a fossil fuel burning appliance or attached garage",
    ],
    correctAnswer: 3,
    explanation:
      "根据加州SB 1394法案，在有化石燃料燃烧设备或附属车库的住宅中，必须在每个睡眠区域外安装一氧化碳探测器。这是因为一氧化碳中毒最常在睡眠中发生。",
    category: "safety",
  },
  {
    id: 1861,
    question:
      "What is the difference between ionization and photoelectric smoke alarms?",
    options: [
      "Ionization alarms respond faster to flaming fires; photoelectric alarms respond faster to smoldering fires",
      "Ionization alarms detect carbon monoxide; photoelectric alarms detect smoke",
      "There is no difference — they are identical",
      "Photoelectric alarms respond faster to flaming fires; ionization alarms respond faster to smoldering fires",
    ],
    correctAnswer: 0,
    explanation:
      "电离式报警器对明火（快速燃烧）火灾响应更快；光电式报警器对阴燃（缓慢燃烧）火灾响应更快。双传感器报警器结合了两种技术，提供最全面的保护。",
    category: "safety",
  },
  {
    id: 1862,
    question:
      "What is the purpose of interconnected smoke alarms?",
    options: [
      "They share a single battery",
      "When one alarm sounds, all alarms in the home sound simultaneously to alert all occupants",
      "They are controlled by a central computer",
      "They can only be installed by professionals",
    ],
    correctAnswer: 1,
    explanation:
      "互联式烟雾报警器的作用是当一个报警器触发时，家中所有报警器同时响起，确保所有居住者都能收到警报。这在多层住宅中特别重要，因为一楼的烟雾可能不会立即触发二楼的独立报警器。",
    category: "safety",
  },
  {
    id: 1863,
    question:
      "What type of smoke alarm is recommended by the NFPA for the best protection?",
    options: [
      "Ionization alarms only",
      "Photoelectric alarms only",
      "Dual-sensor alarms that combine both ionization and photoelectric technology",
      "Heat detectors only",
    ],
    correctAnswer: 2,
    explanation:
      "美国国家消防协会（NFPA）建议使用结合电离和光电两种技术的双传感器报警器，以获得最佳保护。这样可以同时快速响应明火和阴燃两种类型的火灾。",
    category: "safety",
  },
  {
    id: 1864,
    question:
      "What are the California seismic requirements for water heater installation?",
    options: [
      "Water heaters do not need to be secured",
      "Only one strap at the middle is required",
      "Water heaters must be bolted to the floor only",
      "Water heaters must be strapped to the wall with two straps — one in the upper third and one in the lower third",
    ],
    correctAnswer: 3,
    explanation:
      "加州地震要求热水器必须用两条金属带固定到墙上——一条在上三分之一位置，一条在下三分之一位置。这防止地震中热水器倾倒导致燃气泄漏和水损坏。",
    category: "safety",
  },
  {
    id: 1865,
    question:
      "In homes built before 1978, what hazardous material should a home inspector be aware of?",
    options: [
      "Lead-based paint",
      "Latex paint",
      "Acrylic paint",
      "Water-based stain",
    ],
    correctAnswer: 0,
    explanation:
      "1978年之前建造的房屋可能含有含铅油漆（lead-based paint）。铅是一种有毒物质，特别对儿童危害严重，可能导致发育迟缓和神经损害。EPA的RRP规则要求翻新工作遵循特定的铅安全程序。",
    category: "safety",
  },
  {
    id: 1866,
    question:
      "According to California code, where are GFCI (Ground Fault Circuit Interrupter) receptacles required in a residential building?",
    options: [
      "Only in bathrooms and garages",
      "In all locations within 6 feet of any water source",
      "In bathrooms, garages, outdoors, kitchens (within 6 feet of sink), crawl spaces, unfinished basements, and boat houses",
      "GFCI is not required in California — AFCI replaces it everywhere",
    ],
    correctAnswer: 2,
    explanation:
      "加州建筑规范要求在以下位置安装GFCI（接地故障断路器）插座：浴室、车库、室外、厨房（距水槽6英尺以内）、爬行空间、未完工的地下室及船库。GFCI能在检测到漏电时（如通过人体）迅速断电，有效防止电击事故。",
    category: "safety",
  },
  {
    id: 1867,
    question:
      "What is the minimum guardrail height for a residential balcony or deck?",
    options: [
      "30 inches",
      "36 inches",
      "42 inches",
      "48 inches",
    ],
    correctAnswer: 2,
    explanation:
      "住宅阳台或露台的最小护栏高度为42英寸（2015年IRC起）。护栏必须能够承受200磅的集中荷载，栏杆间距不得超过4英寸以防止儿童穿过。",
    category: "safety",
  },
  {
    id: 1868,
    question:
      "What is the maximum dryer vent length according to most building codes?",
    options: [
      "50 feet with any number of elbows",
      "10 feet maximum regardless of material",
      "There is no maximum length",
      "25 feet for a 4-inch diameter smooth metal duct, reduced by 5 feet for each 90-degree elbow",
    ],
    correctAnswer: 3,
    explanation:
      "大多数建筑规范规定4英寸直径光滑金属烘干机排气管的最大长度为25英尺，每增加一个90度弯头减少5英尺。过长的排气管会导致绒毛积聚，增加火灾风险。",
    category: "safety",
  },
  {
    id: 1869,
    question:
      "What type of duct material is NOT acceptable for dryer venting?",
    options: [
      "Vinyl or plastic flexible duct",
      "Rigid smooth metal duct",
      "Semi-rigid aluminum duct",
      "Smooth-wall galvanized steel duct",
    ],
    correctAnswer: 0,
    explanation:
      "乙烯基或塑料软管不适用于烘干机排气，因为它们易燃，内部褶皱容易积聚绒毛，是严重的火灾隐患。应使用光滑金属硬管或半刚性铝管。",
    category: "safety",
  },
  {
    id: 1870,
    question:
      "What is the purpose of an anti-tip bracket on a freestanding kitchen range?",
    options: [
      "To level the range on an uneven floor",
      "To prevent the range from tipping forward when weight is placed on an open oven door",
      "To connect the range to the gas supply",
      "To secure the range during an earthquake",
    ],
    correctAnswer: 1,
    explanation:
      "防倾斜支架（anti-tip bracket）防止独立式厨房灶具在打开的烤箱门上放置重物时向前倾倒。这是一个重要的安全装置，特别保护儿童免受热液烫伤和灶具砸伤的风险。",
    category: "safety",
  },
  {
    id: 1871,
    question:
      "What are the California fire defensible space requirements under PRC 4291 for Zone 1?",
    options: [
      "No requirements for the first 30 feet",
      "Concrete paving within 30 feet",
      "Lean, clean, and green landscaping within 30 feet of the structure with removal of dead vegetation",
      "Only cutting grass once a year",
    ],
    correctAnswer: 2,
    explanation:
      "加州PRC 4291要求Zone 1（结构30英尺范围内）保持精简、清洁和绿色的景观，清除枯死植被。这是防火间距的关键区域，旨在创造阻止或减缓野火蔓延到建筑物的空间。",
    category: "safety",
  },
  {
    id: 1872,
    question:
      "What is the minimum fire separation required between an attached garage and the living space?",
    options: [
      "No fire separation is required",
      "A concrete block wall",
      "A metal fire door only",
      "1/2-inch drywall on the garage side, or 5/8-inch Type X drywall if there is living space above",
    ],
    correctAnswer: 3,
    explanation:
      "附属车库与居住空间之间需要至少1/2英寸石膏板防火分隔（车库侧），如果车库上方有居住空间则需要5/8英寸X型石膏板。这延缓了火灾从车库蔓延到居住区的速度。",
    category: "safety",
  },
  {
    id: 1873,
    question:
      "What is the requirement for security bars on egress windows?",
    options: [
      "They must have a quick-release mechanism that is operable from the inside without keys, tools, or special knowledge",
      "They are prohibited on all windows",
      "They need a key-operated lock",
      "They only need to open from the outside",
    ],
    correctAnswer: 0,
    explanation:
      "逃生窗上的防盗栏必须配备快速释放装置，可以从内侧操作，不需要钥匙、工具或特殊知识。这确保在紧急情况下居住者能够快速打开防盗栏逃生。",
    category: "safety",
  },
  {
    id: 1874,
    question:
      "What common building materials may contain asbestos in older homes?",
    options: [
      "Modern fiberglass insulation",
      "Popcorn ceilings, pipe wrap insulation, floor tiles, and vermiculite insulation",
      "PVC pipes",
      "Engineered wood products",
    ],
    correctAnswer: 1,
    explanation:
      "老旧房屋中可能含石棉的常见建材包括：爆米花天花板（1978年前）、管道包裹隔热材料、9x9英寸地板砖及其粘合剂，以及蛭石隔热材料（如Zonolite品牌）。石棉纤维可致癌。",
    category: "safety",
  },
  {
    id: 1875,
    question:
      "What is the California requirement for automatic gas shut-off valves in seismic zones?",
    options: [
      "They are prohibited in California",
      "They are only required in commercial buildings",
      "An automatic seismic gas shut-off valve or excess flow valve is recommended at the gas meter in earthquake-prone areas",
      "They are only needed on the interior gas line",
    ],
    correctAnswer: 2,
    explanation:
      "在加州地震易发区域，建议在燃气表处安装自动地震燃气关闭阀或超流量阀。地震可能损坏燃气管道导致泄漏，自动阀在检测到地震时关闭燃气供应，防止火灾和爆炸。",
    category: "safety",
  },
  {
    id: 1876,
    question:
      "What is the EPA's RRP (Renovation, Repair, and Painting) Rule?",
    options: [
      "A rule about exterior paint colors",
      "A regulation about bathroom renovations",
      "A guideline for carpet installation",
      "A federal rule requiring EPA-certified renovators to follow lead-safe work practices in pre-1978 housing",
    ],
    correctAnswer: 3,
    explanation:
      "EPA的RRP规则要求在1978年之前建造的住宅中进行翻新、修缮和油漆工作时，必须由EPA认证的翻新人员遵循含铅安全工作规范。违规可能导致高额罚款。",
    category: "safety",
  },
  {
    id: 1877,
    question:
      "What is the maximum baluster spacing for guardrails?",
    options: [
      "4 inches — a 4-inch sphere should not be able to pass through",
      "6 inches",
      "8 inches",
      "12 inches",
    ],
    correctAnswer: 0,
    explanation:
      "护栏栏杆的最大间距为4英寸——4英寸的球体不应能穿过。这个标准是为了防止幼儿的头部卡在栏杆之间或穿过栏杆跌落。",
    category: "safety",
  },
  {
    id: 1878,
    question:
      "What is the minimum stair width for a residential stairway?",
    options: [
      "24 inches",
      "36 inches",
      "30 inches",
      "42 inches",
    ],
    correctAnswer: 1,
    explanation:
      "住宅楼梯的最小宽度为36英寸（净宽度，不包括扶手突出部分）。这个宽度确保了安全通行和紧急疏散时的人员流动。",
    category: "safety",
  },
  {
    id: 1879,
    question:
      "What is the requirement for handrail graspability?",
    options: [
      "Any shape or size is acceptable",
      "Flat handrails are preferred",
      "The handrail must have a circular cross-section with a diameter between 1.25 and 2 inches, or a non-circular graspable profile",
      "Handrails must be at least 4 inches in diameter",
    ],
    correctAnswer: 2,
    explanation:
      "扶手必须具有可抓握的截面——圆形截面直径在1.25到2英寸之间，或非圆形但可抓握的轮廓。这确保手指能够完全环绕扶手，提供牢固的握持以防跌倒。",
    category: "safety",
  },
  {
    id: 1880,
    question:
      "What is a 10-year sealed battery smoke alarm?",
    options: [
      "An alarm that needs new batteries every 10 years",
      "An alarm that lasts 10 years without any battery",
      "An alarm with a rechargeable battery",
      "A smoke alarm with a non-replaceable lithium battery designed to last the entire 10-year lifespan of the alarm",
    ],
    correctAnswer: 3,
    explanation:
      "10年密封电池烟雾报警器内置不可更换的锂电池，设计使用寿命为整个报警器的10年寿命。到期后整个报警器必须更换。这消除了电池更换的需要，提高了可靠性。",
    category: "safety",
  },
  {
    id: 1881,
    question:
      "What are the requirements for a pool alarm under California law?",
    options: [
      "A pool alarm must detect unauthorized entry and sound an alarm of at least 50 decibels at the house",
      "Pool alarms are optional in California",
      "Only a floating alarm is acceptable",
      "Alarms are only required for pools over 1000 gallons",
    ],
    correctAnswer: 0,
    explanation:
      "加州法律要求泳池报警器能够检测未经授权的进入，并在房屋处发出至少50分贝的警报声。这是泳池安全措施之一，但不能替代围栏等物理屏障。",
    category: "safety",
  },
  {
    id: 1882,
    question:
      "What is cripple wall bracing in California seismic construction?",
    options: [
      "A decorative wall finish technique",
      "Structural plywood sheathing applied to short wood-frame walls between the foundation and the first floor to resist lateral forces during earthquakes",
      "Insulation placed inside foundation walls",
      "A type of drywall installation",
    ],
    correctAnswer: 1,
    explanation:
      "矮墙加固（cripple wall bracing）是在基础与一楼之间的短木框架墙上安装结构胶合板覆面板，以抵抗地震期间的侧向力。未加固的矮墙是地震中房屋倒塌的主要原因之一。",
    category: "safety",
  },
  {
    id: 1883,
    question:
      "What is foundation bolting in earthquake retrofitting?",
    options: [
      "Adding decorative bolts to the foundation walls",
      "Bolting the roof to the walls",
      "Securing the wood sill plate to the concrete foundation with anchor bolts to prevent the house from sliding off the foundation",
      "Connecting the chimney to the foundation",
    ],
    correctAnswer: 2,
    explanation:
      "基础锚固（foundation bolting）是用锚栓将木质底梁板固定到混凝土基础上，防止地震时房屋从基础上滑落。这是加州抗震加固的基本措施，特别对1950年代前建造的老旧房屋至关重要。",
    category: "safety",
  },
  {
    id: 1884,
    question:
      "What is the maximum riser height for residential stairs?",
    options: [
      "8-1/2 inches",
      "6 inches",
      "10 inches",
      "7-3/4 inches",
    ],
    correctAnswer: 3,
    explanation:
      "住宅楼梯的最大踏步高度为7-3/4英寸。踏步高度的一致性也很重要——最高和最低踏步之间的差异不得超过3/8英寸，以减少绊倒风险。",
    category: "safety",
  },
  {
    id: 1885,
    question:
      "What is the minimum tread depth for residential stairs?",
    options: [
      "10 inches",
      "8 inches",
      "6 inches",
      "12 inches",
    ],
    correctAnswer: 0,
    explanation:
      "住宅楼梯的最小踏板深度为10英寸。足够的踏板深度确保脚部有充分的支撑面，减少在上下楼梯时滑倒或跌落的风险。",
    category: "safety",
  },
  {
    id: 1886,
    question:
      "What is the California WUI (Wildland-Urban Interface) building requirement?",
    options: [
      "A requirement for all homes to have sprinkler systems",
      "Special fire-resistant construction standards for homes in areas where wildland vegetation and developed areas meet",
      "Standards that only apply to commercial buildings",
      "Building codes for homes near the ocean",
    ],
    correctAnswer: 1,
    explanation:
      "WUI（荒野-城市交界面）建筑要求是针对荒野植被与开发区域交界处房屋的特殊防火建筑标准。包括使用防火外墙材料、Class A屋顶、密封通风口和防火植被管理等。",
    category: "safety",
  },
  {
    id: 1887,
    question:
      "How can a home inspector detect a gas leak?",
    options: [
      "By listening for gas flowing through pipes",
      "By visually inspecting the gas meter dial",
      "By smelling the rotten egg odor of mercaptan, using a combustible gas detector, or applying soap solution to connections",
      "Gas leaks cannot be detected during a home inspection",
    ],
    correctAnswer: 2,
    explanation:
      "检查员可以通过闻到硫醇添加剂的臭鸡蛋味、使用可燃气体检测器或在连接处涂抹肥皂溶液检测燃气泄漏。如果检测到泄漏，应立即通知居住者并建议联系燃气公司。",
    category: "safety",
  },
  {
    id: 1888,
    question:
      "What is Zone 0 in California's fire defensible space requirements?",
    options: [
      "The area 100 feet from the structure",
      "Inside the structure only",
      "The entire property line",
      "An ember-resistant zone extending 0-5 feet from the structure, requiring hardscape and non-combustible materials",
    ],
    correctAnswer: 3,
    explanation:
      "Zone 0是加州防火间距要求中从结构延伸0-5英尺的余烬抵抗区域，要求使用硬景观和不可燃材料。这是2023年新增的要求，旨在减少余烬点燃建筑物的风险。",
    category: "safety",
  },
  {
    id: 1889,
    question:
      "What is the purpose of attic fire blocking?",
    options: [
      "To prevent the rapid spread of fire through concealed spaces in walls and ceilings into the attic",
      "To insulate the attic for energy efficiency",
      "To prevent pests from entering the attic",
      "To support the roof structure",
    ],
    correctAnswer: 0,
    explanation:
      "阁楼防火封堵（fire blocking）防止火灾通过墙壁和天花板中的隐蔽空间快速蔓延到阁楼。这些隐蔽空间可以充当烟囱效应的通道，加速火势蔓延。",
    category: "safety",
  },
  {
    id: 1890,
    question:
      "What is the requirement for screws in dryer vent duct connections?",
    options: [
      "At least 4 screws per connection",
      "Sheet metal screws should NOT be used as they can catch lint and create blockages",
      "Only Phillips head screws are acceptable",
      "Any type of screw is acceptable",
    ],
    correctAnswer: 1,
    explanation:
      "烘干机排气管连接处不应使用金属螺丝，因为螺丝尖端伸入管道内部会钩住绒毛，导致积聚和堵塞，增加火灾风险。应使用金属胶带（foil tape）密封连接处。",
    category: "safety",
  },
  {
    id: 1891,
    question:
      "What is the proper dryer vent termination on the exterior?",
    options: [
      "An open pipe with no covering",
      "A screen mesh cover",
      "A dampered metal vent cover that opens when the dryer is running and closes when it stops",
      "A rubber flap",
    ],
    correctAnswer: 2,
    explanation:
      "烘干机排气应终止于一个带活动挡板的金属排气罩，烘干机运行时打开，停止时关闭。不应使用筛网覆盖（会收集绒毛堵塞），排气口不应排入室内、阁楼或爬行空间。",
    category: "safety",
  },
  {
    id: 1892,
    question:
      "What should an inspector verify about combination smoke/CO alarm units?",
    options: [
      "Only that they are plugged in",
      "That they match the wall color",
      "Only that the battery compartment is closed",
      "That they are properly located, less than 10 years old, and have both audible and visual alarms that function",
    ],
    correctAnswer: 3,
    explanation:
      "检查员应验证组合烟雾/CO报警器位置正确、使用不超过10年、并且听觉和视觉报警功能正常。还应检查是否有过期标记，因为传感器会随时间劣化。",
    category: "safety",
  },
  {
    id: 1893,
    question:
      "What does California's AB 3305 require regarding direct house access to a pool area?",
    options: [
      "Doors providing direct access from the house to the pool must be self-closing with a self-latching device above the child's reach",
      "Direct access doors are always prohibited",
      "No special requirements for house doors opening to pool areas",
      "Only sliding doors may open to pool areas",
    ],
    correctAnswer: 0,
    explanation:
      "加州AB 3305要求从房屋直接通往泳池区域的门必须是自动关闭的，并配有位于儿童够不到高度的自动锁闭装置。这是防止幼儿无人看管时进入泳池区域的重要安全措施。",
    category: "safety",
  },
  {
    id: 1894,
    question:
      "What is the significance of vermiculite insulation found in an attic?",
    options: [
      "It is always safe and non-toxic",
      "It may contain asbestos, particularly if it is the Zonolite brand from the Libby, Montana mine",
      "It is the most efficient type of insulation",
      "It was never used in residential construction",
    ],
    correctAnswer: 1,
    explanation:
      "阁楼中发现的蛭石隔热材料可能含有石棉，特别是来自蒙大拿州利比矿的Zonolite品牌。EPA估计约70%的蛭石隔热材料来自该矿，该矿的蛭石受到石棉污染。应建议专业检测。",
    category: "safety",
  },
  {
    id: 1895,
    question:
      "What is the minimum headroom required on a residential stairway?",
    options: [
      "6 feet even",
      "7 feet",
      "6 feet 8 inches measured vertically from the stair nosing",
      "8 feet",
    ],
    correctAnswer: 2,
    explanation:
      "住宅楼梯的最小净空高度为6英尺8英寸，从楼梯踏步前缘（nosing）垂直测量。不足的净空高度是安全隐患，会导致高个子居住者碰头。",
    category: "safety",
  },
  {
    id: 1896,
    question:
      "What is the California requirement for pool safety covers?",
    options: [
      "Any tarp covering the pool is sufficient",
      "Covers are not an accepted safety measure",
      "Only solar covers are acceptable",
      "ASTM F1346 compliant covers that can support the weight of two adults and a child to prevent drowning",
    ],
    correctAnswer: 3,
    explanation:
      "加州要求泳池安全罩符合ASTM F1346标准，能够支撑两个成人和一个儿童的重量以防止溺水。普通的泳池防水布或太阳能罩不满足安全罩的要求。",
    category: "safety",
  },
  {
    id: 1897,
    question:
      "Where should a smoke alarm NOT be installed?",
    options: [
      "Within 3 feet of a bathroom door or within 10 feet of a cooking appliance to avoid nuisance alarms",
      "In bedrooms",
      "In hallways near bedrooms",
      "On every level of the home",
    ],
    correctAnswer: 0,
    explanation:
      "烟雾报警器不应安装在距浴室门3英尺以内或距烹饪设备10英尺以内，以避免蒸汽和烹饪烟雾导致的误报。频繁误报可能导致居住者拆除电池或禁用报警器。",
    category: "safety",
  },
  {
    id: 1898,
    question:
      "What is the purpose of a GFCI outlet near a spa or hot tub?",
    options: [
      "To provide more power for the spa heater",
      "To protect against electric shock by quickly interrupting power when a ground fault is detected",
      "To regulate water temperature",
      "To protect the spa pump from overheating",
    ],
    correctAnswer: 1,
    explanation:
      "GFCI插座通过在检测到接地故障时快速切断电源来防止触电。在水疗池或热水浴缸附近特别重要，因为水和电的组合极其危险。所有室外和水源附近的插座必须有GFCI保护。",
    category: "safety",
  },
  {
    id: 1899,
    question:
      "What radon zone classification does most of California fall under?",
    options: [
      "Zone 1 (highest risk)",
      "Zone 2 (moderate risk)",
      "Zone 3 (low risk), though some mountainous areas may have higher levels",
      "California has no radon risk at all",
    ],
    correctAnswer: 2,
    explanation:
      "加州大部分地区属于Zone 3（低风险），但一些山区可能有较高的氡气水平。尽管整体风险较低，EPA仍建议所有房屋进行氡气测试，因为局部地质条件可能导致高浓度。",
    category: "safety",
  },
  {
    id: 1900,
    question:
      "What is the fire separation requirement between a garage and a bedroom above?",
    options: [
      "No fire separation is required",
      "1/4-inch standard drywall",
      "Plywood sheeting",
      "5/8-inch Type X fire-rated drywall on the garage ceiling",
    ],
    correctAnswer: 3,
    explanation:
      "车库上方有卧室时，车库天花板需要安装5/8英寸X型防火石膏板。X型石膏板含有玻璃纤维增强材料，可以提供更长时间的防火保护，延缓火灾蔓延。",
    category: "safety",
  },
  {
    id: 1901,
    question:
      "What is the handrail height requirement for residential stairs?",
    options: [
      "Between 34 and 38 inches measured vertically from the stair nosing",
      "Between 28 and 32 inches",
      "Between 40 and 44 inches",
      "Any height is acceptable",
    ],
    correctAnswer: 0,
    explanation:
      "住宅楼梯扶手高度要求为从踏步前缘垂直测量34到38英寸之间。这个高度范围适合大多数成人抓握，提供最佳的跌倒保护。",
    category: "safety",
  },
  {
    id: 1902,
    question:
      "What is the California requirement for earthquake bracing of chimneys?",
    options: [
      "No bracing is required for any chimneys",
      "Chimneys must be braced or strapped to the structure to prevent collapse during seismic events",
      "Only new chimneys need bracing",
      "Bracing is only needed in Southern California",
    ],
    correctAnswer: 1,
    explanation:
      "加州要求烟囱必须通过支撑或绑带固定到结构上，以防止地震时倒塌。未加固的砖石烟囱是地震中常见的损坏和伤亡原因，特别是在较高或较旧的烟囱上。",
    category: "safety",
  },
  {
    id: 1903,
    question:
      "What should an inspector check about the garage-to-house door?",
    options: [
      "That it has a window for visibility",
      "That it matches the interior doors",
      "That it is solid wood (at least 1-3/8 inches thick), solid or honeycomb steel, or 20-minute fire rated, and self-closing",
      "Only that it has a lock",
    ],
    correctAnswer: 2,
    explanation:
      "车库通向室内的门必须是实心木门（至少1-3/8英寸厚）、实心或蜂窝钢门，或20分钟防火等级门，并且必须是自动关闭的。这延缓火灾和有毒气体（包括汽车尾气）从车库进入居住空间。",
    category: "safety",
  },
  {
    id: 1904,
    question:
      "What is the danger of 9x9-inch floor tiles in homes built before 1980?",
    options: [
      "They contain lead paint",
      "They are a tripping hazard due to size",
      "They do not meet current insulation standards",
      "They likely contain asbestos fibers that can become airborne if disturbed or damaged",
    ],
    correctAnswer: 3,
    explanation:
      "1980年之前安装的9x9英寸地板砖很可能含有石棉纤维。如果这些砖块受到损坏或干扰，石棉纤维可能释放到空气中被吸入，导致严重的健康问题。应建议不要打磨或拆除，而是封装或覆盖。",
    category: "safety",
  },
  {
    id: 1905,
    question:
      "Where are carbon monoxide (CO) detectors required to be installed in California residences?",
    options: [
      "Only in homes with gas appliances",
      "On every level of the home and within 10 feet of each sleeping room door",
      "Only adjacent to the water heater and furnace",
      "CO detectors are optional — only smoke alarms are required",
    ],
    correctAnswer: 1,
    explanation:
      "根据加州一氧化碳中毒预防法案，CO探测器必须安装在房屋每一层以及每间卧室门口10英尺范围内。所有有化石燃料燃烧设备（炉子、热水器、附属车库）的住宅均须安装。2011年起加州法律要求所有住宅必须安装CO探测器。",
    category: "safety",
  },
  {
    id: 1906,
    question:
      "What is a mold concern that a home inspector should be aware of?",
    options: [
      "Only black mold is a concern",
      "Visible mold growth or conditions conducive to mold such as water intrusion, high humidity, and poor ventilation",
      "Mold is never a health concern",
      "Mold only grows on wood surfaces",
    ],
    correctAnswer: 1,
    explanation:
      "检查员应注意可见的霉菌生长或有利于霉菌生长的条件，如水分渗入、高湿度和通风不良。所有类型的霉菌都可能对健康造成影响，检查员应记录发现并建议进一步测试。",
    category: "safety",
  },
  {
    id: 1907,
    question:
      "What is the maximum variation in riser height permitted on a stairway?",
    options: [
      "1 inch between the tallest and shortest riser",
      "No variation is allowed",
      "3/8 inch between the tallest and shortest riser",
      "2 inches between the tallest and shortest riser",
    ],
    correctAnswer: 2,
    explanation:
      "楼梯踏步高度的最大允许变化为最高和最低踏步之间不超过3/8英寸。不均匀的踏步高度是导致楼梯跌倒事故的主要原因之一，因为人体会根据前几步的节奏调整步伐。",
    category: "safety",
  },
  {
    id: 1908,
    question:
      "What is the California Zone 2 defensible space requirement?",
    options: [
      "No vegetation management required",
      "Concrete paving from 30 to 100 feet",
      "Only ornamental plants within this zone",
      "Reduced fuel area extending 30 to 100 feet from the structure with grass cut to 4 inches and tree canopy spacing",
    ],
    correctAnswer: 3,
    explanation:
      "Zone 2（距结构30到100英尺）是减少燃料的区域，要求将草剪至4英寸高度，树冠间保持适当间距。这创造了一个减缓野火蔓延速度的缓冲区。",
    category: "safety",
  },
  {
    id: 1909,
    question:
      "What is the purpose of tempered glass near a stairway?",
    options: [
      "To prevent serious injury if a person falls against and breaks the glass while using the stairs",
      "To provide better insulation",
      "To reduce noise transmission",
      "To increase natural light",
    ],
    correctAnswer: 0,
    explanation:
      "楼梯附近使用钢化玻璃的目的是防止在使用楼梯时跌倒撞击玻璃造成严重伤害。钢化玻璃碎裂时形成小块钝角碎片，而非普通玻璃的锋利碎片。",
    category: "safety",
  },
  {
    id: 1910,
    question:
      "At what height above the floor is a guardrail required for an open-sided walking surface?",
    options: [
      "12 inches or more",
      "30 inches or more above the floor or grade below",
      "48 inches or more",
      "60 inches or more",
    ],
    correctAnswer: 1,
    explanation:
      "当开放侧行走面高出下方地板或地面30英寸或更多时，需要安装护栏。这包括阳台、露台、楼梯平台和其他高架平台，以防止人员坠落。",
    category: "safety",
  },
  {
    id: 1911,
    question:
      "What safety feature should a home inspector check on a spa or hot tub?",
    options: [
      "Only the water temperature",
      "The brand of the spa",
      "A GFCI-protected electrical disconnect within sight of the spa and proper bonding of all metal components",
      "Only the color of the spa cover",
    ],
    correctAnswer: 2,
    explanation:
      "检查水疗池或热水浴缸时应检查视线范围内的GFCI保护电气断路器和所有金属部件的适当接地连接。电气安全对水疗设施至关重要，因为水和电的组合具有致命危险。",
    category: "safety",
  },
  {
    id: 1912,
    question:
      "What is the California requirement for CO detectors in multi-family dwellings?",
    options: [
      "Only one detector per building is required",
      "CO detectors are not required in apartments",
      "Only the landlord's unit needs a detector",
      "CO detectors are required in each dwelling unit that has a fossil fuel burning appliance, fireplace, or attached garage",
    ],
    correctAnswer: 3,
    explanation:
      "加州要求每个拥有化石燃料燃烧设备、壁炉或附属车库的多户住宅单元内安装CO探测器。这包括公寓、联排别墅和公寓楼中的每个独立单元。",
    category: "safety",
  },
  {
    id: 1913,
    question:
      "What is the significance of the popcorn ceiling in homes built before 1978?",
    options: [
      "It may contain asbestos and should not be disturbed without professional testing",
      "It is purely a decorative concern",
      "It always contains lead",
      "It indicates structural problems",
    ],
    correctAnswer: 0,
    explanation:
      "1978年之前建造的房屋中的爆米花天花板可能含有石棉。在不进行专业测试的情况下不应打磨、刮除或以其他方式干扰，因为石棉纤维释放到空气中会造成严重健康风险。",
    category: "safety",
  },
  {
    id: 1914,
    question:
      "What is the proper diameter for a residential dryer vent duct?",
    options: [
      "2 inches",
      "4 inches",
      "6 inches",
      "3 inches",
    ],
    correctAnswer: 1,
    explanation:
      "住宅烘干机排气管的标准直径为4英寸。使用小于4英寸的管道会限制气流，导致绒毛积聚、烘干效率降低和火灾风险增加。",
    category: "safety",
  },
  {
    id: 1915,
    question:
      "What is the emergency escape and rescue opening requirement for basements?",
    options: [
      "Basements never need egress windows",
      "Only a door is sufficient for basement egress",
      "Basements with habitable space must have at least one emergency escape and rescue opening meeting egress requirements",
      "Basements are exempt from escape requirements",
    ],
    correctAnswer: 2,
    explanation:
      "有可居住空间的地下室必须至少有一个符合逃生要求的紧急逃生和救援开口。这包括满足最小开口面积、高度、宽度和最大窗台高度要求的窗户或门。",
    category: "safety",
  },
  {
    id: 1916,
    question:
      "What is the concern with lead paint dust?",
    options: [
      "Lead dust only affects adults",
      "Lead dust is only harmful if ingested in large quantities",
      "Lead dust is not a health concern",
      "Even microscopic amounts of lead dust can cause lead poisoning, especially in young children",
    ],
    correctAnswer: 3,
    explanation:
      "即使是微量的铅尘也能导致铅中毒，特别是对幼儿。铅尘可以通过手口途径或吸入进入人体。儿童的发育中的大脑对铅特别敏感，可导致智力发育迟缓和行为问题。",
    category: "safety",
  },
  {
    id: 1917,
    question:
      "What is the open area requirement for pool fence pickets?",
    options: [
      "Openings shall not allow passage of a 4-inch sphere",
      "Openings shall not exceed 6 inches",
      "Any spacing is acceptable if the fence is 5 feet tall",
      "Openings shall not exceed 8 inches",
    ],
    correctAnswer: 0,
    explanation:
      "泳池围栏的开口不应允许4英寸球体通过。这与护栏栏杆的要求相同，旨在防止幼儿挤过围栏进入泳池区域。围栏也不应有容易攀爬的横向构件。",
    category: "safety",
  },
  {
    id: 1918,
    question:
      "What should an inspector look for regarding stair nosing?",
    options: [
      "Sharp edges for better grip",
      "A uniform nosing projection between 3/4 inch and 1-1/4 inches with a rounded edge to reduce tripping",
      "No nosing projection is needed",
      "Nosing should extend at least 3 inches",
    ],
    correctAnswer: 1,
    explanation:
      "楼梯踏步前缘（nosing）应统一突出3/4到1-1/4英寸，边缘圆滑以减少绊倒风险。不均匀或过大的突出会增加绊倒危险，缺少圆角可能导致更严重的跌倒伤害。",
    category: "safety",
  },
  {
    id: 1919,
    question:
      "What is the significance of checking for proper grounding and bonding around a swimming pool?",
    options: [
      "To improve water filtration",
      "To prevent corrosion of pool equipment",
      "To prevent electrocution by ensuring all metal components are at the same electrical potential",
      "To reduce chlorine usage",
    ],
    correctAnswer: 2,
    explanation:
      "泳池周围的接地和等电位连接确保所有金属部件处于相同的电位，防止触电。如果不同金属部件之间存在电位差，人体可能成为电流通路，造成致命的电击。",
    category: "safety",
  },
  {
    id: 1920,
    question:
      "What is the minimum landing size required at the top and bottom of a stairway?",
    options: [
      "At least 12 inches",
      "At least 24 inches",
      "No landing is required",
      "At least 36 inches measured in the direction of travel",
    ],
    correctAnswer: 3,
    explanation:
      "楼梯顶部和底部的平台（landing）在行走方向上至少需要36英寸。平台为上下楼梯的人提供安全的过渡区域，减少失去平衡和跌落的风险。",
    category: "safety",
  },
  {
    id: 1921,
    question:
      "What is the minimum height for a window well around an egress window in a basement?",
    options: [
      "The window well must allow the egress window to fully open and have a minimum area of 9 square feet",
      "The window well only needs to be 1 foot deep",
      "Window wells are not required",
      "The window well must be 3 feet tall",
    ],
    correctAnswer: 0,
    explanation:
      "地下室逃生窗的窗井必须允许逃生窗完全打开，且最小面积为9平方英尺。如果窗井深度超过44英寸，还必须配有永久性梯子或台阶以便逃生。",
    category: "safety",
  },
  {
    id: 1922,
    question:
      "What are the California requirements for earthquake preparedness related to home inspection?",
    options: [
      "Earthquake preparedness is not part of a home inspection",
      "Inspectors should note unbraced cripple walls, unbolted foundations, unstrapped water heaters, and unsecured heavy items",
      "Only the foundation type matters",
      "Only chimney condition matters",
    ],
    correctAnswer: 1,
    explanation:
      "加州家庭检查中，检查员应注意未加固的矮墙、未锚固的基础、未绑扎的热水器和未固定的重物。这些是地震中常见的损坏和伤害来源，也是加州特有的检查关注点。",
    category: "safety",
  },
  {
    id: 1923,
    question:
      "What is the proper installation location for a CO detector on a wall?",
    options: [
      "Only on the ceiling",
      "Only within 6 inches of the floor",
      "At any height, but manufacturer instructions typically recommend between knee height and 5 feet from the floor",
      "Only behind furniture",
    ],
    correctAnswer: 2,
    explanation:
      "CO探测器可以安装在墙上的任何高度，但制造商通常建议安装在膝盖高度到距地板5英尺之间。一氧化碳与空气密度相近，会在室内均匀分布，因此位置选择比高度更重要。",
    category: "safety",
  },
  {
    id: 1924,
    question:
      "What does California law require regarding fire-resistant roofing in high fire hazard severity zones?",
    options: [
      "Any roofing material is acceptable",
      "Wood shakes are preferred for their natural appearance",
      "Only metal roofing is permitted",
      "Class A fire-rated roofing material is required for new construction and re-roofing in very high fire hazard severity zones",
    ],
    correctAnswer: 3,
    explanation:
      "在极高火灾风险区域，加州要求新建和重新铺设屋顶时使用A级防火等级的屋顶材料。这包括混凝土瓦、粘土瓦、沥青瓦（A级）和金属屋顶。木摇瓦一般不符合此要求。",
    category: "safety",
  },
  {
    id: 1925,
    question:
      "What type of glass is required in a bathroom shower enclosure?",
    options: [
      "Tempered safety glass or approved plastic",
      "Standard annealed glass",
      "Wire glass",
      "Any type of glass is acceptable",
    ],
    correctAnswer: 0,
    explanation:
      "浴室淋浴间需要使用钢化安全玻璃或经批准的塑料材质。在潮湿、光滑的浴室环境中，跌倒撞击玻璃的风险很高，钢化玻璃碎裂时形成小块钝角碎片而非危险的尖锐碎片。",
    category: "safety",
  },
  {
    id: 1926,
    question:
      "What is the maximum door width for a pool gate?",
    options: [
      "3 feet",
      "There is no maximum width, but the gate must be self-closing and self-latching with latch release at least 54 inches from grade",
      "4 feet",
      "6 feet",
    ],
    correctAnswer: 1,
    explanation:
      "泳池围栏门没有最大宽度限制，但门必须自动关闭和自动锁闭，且锁闭释放装置至少距地面54英寸高。这个高度确保幼儿无法够到并打开门锁。",
    category: "safety",
  },
  {
    id: 1927,
    question:
      "What are the main types of residential fire sprinkler systems?",
    options: [
      "Only commercial-grade systems",
      "Garden sprinkler systems adapted for fire protection",
      "Wet pipe, dry pipe, and standalone residential systems designed to NFPA 13D",
      "Portable fire extinguisher systems",
    ],
    correctAnswer: 2,
    explanation:
      "住宅消防喷淋系统主要类型包括湿管系统、干管系统和按NFPA 13D标准设计的独立住宅系统。加州2011年起要求新建住宅安装消防喷淋系统。",
    category: "safety",
  },
  {
    id: 1928,
    question:
      "What is the concern with asbestos pipe wrap insulation?",
    options: [
      "It reduces pipe insulation effectiveness",
      "It only affects water quality",
      "It is only a concern in commercial buildings",
      "If damaged or deteriorated, it can release asbestos fibers into the air causing serious respiratory diseases and cancer",
    ],
    correctAnswer: 3,
    explanation:
      "石棉管道包裹隔热材料如果损坏或劣化，会将石棉纤维释放到空气中，导致严重的呼吸系统疾病和癌症（间皮瘤、石棉肺）。完好的石棉材料通常不构成即时危险，但应监控其状态。",
    category: "safety",
  },
  {
    id: 1929,
    question:
      "What is the stair riser uniformity requirement in the California Building Code?",
    options: [
      "The greatest riser height within a flight of stairs shall not exceed the smallest by more than 3/8 inch",
      "All risers must be exactly the same height with zero tolerance",
      "Risers may vary up to 1 inch",
      "No uniformity requirement exists",
    ],
    correctAnswer: 0,
    explanation:
      "加州建筑规范要求同一段楼梯中最高踏步与最低踏步的差异不超过3/8英寸。楼梯踏步高度不均匀是导致跌倒的主要原因，因为人体会建立节奏预期。",
    category: "safety",
  },
  {
    id: 1930,
    question:
      "What safety concern does an open stairway between a garage and living space present?",
    options: [
      "It reduces property value",
      "Carbon monoxide and fire can easily travel from the garage to the living space without adequate separation",
      "It makes the garage too cold",
      "There is no safety concern",
    ],
    correctAnswer: 1,
    explanation:
      "车库与居住空间之间的开放楼梯允许一氧化碳和火灾轻松从车库传播到居住空间。必须有适当的防火分隔，包括防火门和密封的墙壁/天花板组件。",
    category: "safety",
  },
  {
    id: 1931,
    question:
      "What is the California requirement for seismic gas shut-off valves on new construction?",
    options: [
      "They are prohibited in new construction",
      "Only required for commercial buildings",
      "Many California jurisdictions require automatic seismic gas shut-off valves on all new gas service connections",
      "They are voluntary recommendations only",
    ],
    correctAnswer: 2,
    explanation:
      "加州许多司法管辖区要求所有新的燃气服务连接安装自动地震燃气关闭阀。这些阀门在检测到显著地震运动时自动关闭燃气供应，防止地震后燃气泄漏引发火灾和爆炸。",
    category: "safety",
  },
  {
    id: 1932,
    question:
      "Why is proper ventilation important in preventing mold growth?",
    options: [
      "Ventilation kills mold spores",
      "Ventilation only affects air temperature",
      "Mold growth is not affected by ventilation",
      "Ventilation reduces indoor humidity levels, making the environment less conducive to mold growth",
    ],
    correctAnswer: 3,
    explanation:
      "适当的通风降低室内湿度水平，使环境不利于霉菌生长。霉菌在相对湿度超过60%的环境中茁壮生长。浴室排气扇、厨房排气扇和良好的空气循环都有助于控制湿度。",
    category: "safety",
  },
  {
    id: 1933,
    question:
      "What should an inspector check about a winding stairway?",
    options: [
      "That treads are at least 10 inches deep measured 12 inches from the narrow end, and minimum 6 inches at the narrow end",
      "Only that it has a handrail",
      "That all treads are the same width as straight stairs",
      "Winding stairs are never permitted in residential buildings",
    ],
    correctAnswer: 0,
    explanation:
      "弯曲楼梯的踏板在距窄端12英寸处测量应至少10英寸深，窄端最小6英寸。这确保了即使在弯曲部分也有足够的踏脚面积。弯曲楼梯需要特别注意安全。",
    category: "safety",
  },
  {
    id: 1934,
    question:
      "What is the fire resistance rating of the door between a garage and the house?",
    options: [
      "No fire rating is required",
      "20-minute fire-rated, or solid wood not less than 1-3/8 inches thick, or solid or honeycomb-core steel",
      "1-hour fire-rated",
      "2-hour fire-rated",
    ],
    correctAnswer: 1,
    explanation:
      "车库通往室内的门需要20分钟防火等级，或不少于1-3/8英寸厚的实木门，或实心或蜂窝芯钢门。这些标准确保门能在火灾中提供足够的延缓时间让居住者逃生。",
    category: "safety",
  },
  {
    id: 1935,
    question:
      "Where is tempered glass required near a door?",
    options: [
      "Only in the door itself",
      "Within 48 inches of the door",
      "Within 24 inches of either edge of the door, from floor level to 60 inches above the floor",
      "Only above the door",
    ],
    correctAnswer: 2,
    explanation:
      "门两侧24英寸范围内、从地板到距地板60英寸高度之间的玻璃必须是钢化安全玻璃。人们在开关门时容易失去平衡撞击附近的玻璃，钢化玻璃提供了必要的安全保护。",
    category: "safety",
  },
  {
    id: 1936,
    question:
      "What is the requirement for smoke alarm placement on a ceiling with a peaked or cathedral design?",
    options: [
      "At the very peak of the ceiling",
      "At the lowest point of the ceiling",
      "On the wall only",
      "Within 3 feet of the peak but not within 4 inches of where the wall meets the ceiling",
    ],
    correctAnswer: 3,
    explanation:
      "在尖顶或教堂式天花板上，烟雾报警器应安装在距顶峰3英尺以内，但不在墙壁与天花板交汇处4英寸以内（死角区域）。这确保了烟雾能有效到达报警器传感器。",
    category: "safety",
  },
  {
    id: 1937,
    question:
      "What should be installed on bedroom windows in homes with children where the sill height is low?",
    options: [
      "Window guards or window opening limiting devices that still allow emergency egress",
      "Permanent bars that cannot be removed",
      "Nothing — windows should be kept closed",
      "Only curtains for sun protection",
    ],
    correctAnswer: 0,
    explanation:
      "在有儿童的家庭中，低窗台的卧室窗户应安装窗户防护装置或窗户开口限制器，同时仍允许紧急逃生。这些装置防止儿童坠落，同时不妨碍紧急情况下的逃生。",
    category: "safety",
  },
  {
    id: 1938,
    question:
      "What is the California requirement for a pool barrier when the house wall serves as one side of the pool enclosure?",
    options: [
      "No additional measures are needed",
      "All doors and windows that open to the pool area must have self-closing devices, alarms, or other approved safety features",
      "Only the back door needs a lock",
      "A separate fence must be built between the house and pool",
    ],
    correctAnswer: 1,
    explanation:
      "当房屋墙壁作为泳池围栏的一面时，所有通向泳池区域的门窗必须配备自动关闭装置、报警器或其他经批准的安全功能。这防止通过房屋无人看管地进入泳池。",
    category: "safety",
  },
  {
    id: 1939,
    question:
      "What are the signs of lead paint on a surface?",
    options: [
      "Smooth, glossy paint in good condition",
      "Blue or green discoloration",
      "Alligatoring, chalking, or peeling paint on surfaces in homes built before 1978",
      "Paint bubbles from moisture only",
    ],
    correctAnswer: 2,
    explanation:
      "1978年之前建造的房屋表面出现鳄鱼纹开裂（alligatoring）、粉化（chalking）或剥落的油漆可能含铅。这些劣化状态会产生铅尘和铅漆碎片，是铅暴露的高风险指标。",
    category: "safety",
  },
  {
    id: 1940,
    question:
      "What is the California requirement for dryer vents to NOT terminate?",
    options: [
      "Dryer vents must always terminate inside the attic",
      "Dryer vents should terminate in the garage for warmth",
      "Dryer vents can terminate anywhere convenient",
      "Dryer vents shall not terminate in an attic, crawl space, garage, or inside the building envelope",
    ],
    correctAnswer: 3,
    explanation:
      "烘干机排气管不得终止于阁楼、爬行空间、车库或建筑围护结构内部。排气管必须将湿气和绒毛排到室外。将排气排入室内空间会导致湿度过高、霉菌生长和火灾风险。",
    category: "safety",
  },
  {
    id: 1941,
    question:
      "What is the difference between a guardrail and a handrail?",
    options: [
      "A guardrail is a barrier to prevent falls from elevated surfaces; a handrail is graspable support for persons using stairs",
      "They are the same thing with different names",
      "A guardrail is only for commercial buildings; a handrail is for residential",
      "A handrail is taller than a guardrail",
    ],
    correctAnswer: 0,
    explanation:
      "护栏（guardrail）是防止从高处坠落的屏障（最低42英寸）；扶手（handrail）是供使用楼梯者抓握的支撑物（34-38英寸）。两者功能不同，有不同的尺寸和设计要求。",
    category: "safety",
  },
  {
    id: 1942,
    question:
      "What is the requirement for a handrail return (termination) at the top and bottom of a stairway?",
    options: [
      "Handrails can end anywhere",
      "Handrails must return to the wall or post, or have a rounded termination to prevent clothing from catching",
      "Handrails must extend 12 feet beyond the stairs",
      "Handrail terminations are purely aesthetic",
    ],
    correctAnswer: 1,
    explanation:
      "扶手必须返回到墙壁或柱子，或有圆形终端，以防止衣物钩挂。开放式扶手末端可能钩住袖口或其他衣物，导致跌倒事故。",
    category: "safety",
  },
  {
    id: 1943,
    question:
      "What is the purpose of a gas leak detector during a home inspection?",
    options: [
      "To measure gas pressure",
      "To determine the type of gas being used",
      "To detect the presence of combustible gases at connections and fittings that cannot be smelled at low concentrations",
      "To check if the gas meter is working",
    ],
    correctAnswer: 2,
    explanation:
      "燃气泄漏检测器可以检测连接处和配件处低浓度的可燃气体，这些浓度人类嗅觉可能无法察觉。这是检查燃气系统安全性的重要工具，比仅靠嗅觉更可靠和灵敏。",
    category: "safety",
  },
  {
    id: 1944,
    question:
      "What should an inspector report about missing fire blocking in balloon-frame construction?",
    options: [
      "It is not a concern in older homes",
      "Only newer homes need fire blocking",
      "Fire blocking is only needed in commercial buildings",
      "It is a significant fire safety concern as fire can rapidly spread through continuous wall cavities from basement to attic",
    ],
    correctAnswer: 3,
    explanation:
      "气球框架结构中缺失防火封堵是严重的消防安全隐患，因为火灾可以通过连续的墙腔从地下室快速蔓延到阁楼。这种旧式建造方法需要在每层楼板处安装防火封堵。",
    category: "safety",
  },
  {
    id: 1945,
    question:
      "What should an inspector check about the garage floor when evaluating fire separation?",
    options: [
      "The floor should slope toward the garage door or a drain, and there should be a step up to the house entry to prevent fuel spills from flowing toward the house",
      "Only the color of the floor coating",
      "Whether the floor is heated",
      "Only if cars can fit in the garage",
    ],
    correctAnswer: 0,
    explanation:
      "车库地板应向车库门或排水沟倾斜，且通向室内的入口应有台阶抬高，防止燃料泄漏流向房屋。这些设计减少了车库中易燃液体渗入居住空间的风险。",
    category: "safety",
  },
  {
    id: 1946,
    question:
      "What is the danger of improperly vented gas appliances?",
    options: [
      "The appliances will use more gas",
      "Carbon monoxide can accumulate to lethal levels in the living space",
      "The appliances will be too noisy",
      "There is no danger if a window is nearby",
    ],
    correctAnswer: 1,
    explanation:
      "排气不当的燃气设备会导致一氧化碳在居住空间积聚到致命水平。一氧化碳是无色无味的气体，被称为\"沉默的杀手\"。适当的排气系统将所有燃烧副产物安全排到室外。",
    category: "safety",
  },
  {
    id: 1947,
    question:
      "What is the minimum number of treads that requires a handrail on a residential stairway?",
    options: [
      "Any single step requires a handrail",
      "10 or more risers",
      "4 or more risers (3 or more treads) require a handrail",
      "No minimum — handrails are optional",
    ],
    correctAnswer: 2,
    explanation:
      "4个或更多踏步高度（3个或更多踏面）的住宅楼梯需要安装扶手。扶手为上下楼梯的人提供支撑和平衡辅助，减少跌倒风险。",
    category: "safety",
  },
  {
    id: 1948,
    question:
      "What is the earthquake preparedness concern with tall, heavy furniture in a bedroom?",
    options: [
      "Tall furniture improves room acoustics",
      "Furniture placement has no seismic significance",
      "Only metal furniture is a concern",
      "Unsecured tall furniture can topple during an earthquake, causing injury or blocking egress routes",
    ],
    correctAnswer: 3,
    explanation:
      "地震时未固定的高大家具可能倾倒，造成伤害或堵塞逃生路线。虽然家具固定不是标准家庭检查的一部分，但检查员可以提醒注意这一安全问题，特别是在卧室中。",
    category: "safety",
  },
  {
    id: 1949,
    question:
      "What is the California PRC 4291 Zone 1 clearance distance from a structure?",
    options: [
      "30 feet (or to the property line) of lean, clean, and green landscaping",
      "5 feet",
      "100 feet",
      "200 feet",
    ],
    correctAnswer: 0,
    explanation:
      "加州PRC 4291的Zone 1要求在结构30英尺范围内（或到物业线）保持精简、清洁和绿色的景观。这包括修剪树枝使其距地面6英尺以上，清除枯死植被和保持植物间距。",
    category: "safety",
  },
  {
    id: 1950,
    question:
      "What size window is considered hazardous and requires tempered glass when within 18 inches of the floor?",
    options: [
      "Only windows larger than 20 square feet",
      "Any glass panel larger than 9 square feet that has a bottom edge within 18 inches of the floor",
      "Only skylights",
      "Only glass doors",
    ],
    correctAnswer: 1,
    explanation:
      "当底边距地板18英寸以内的玻璃面板面积大于9平方英尺时，需要使用钢化安全玻璃。在这个高度，人们容易踢到或撞到玻璃，大面积玻璃破碎时更加危险。",
    category: "safety",
  },
  {
    id: 1951,
    question:
      "What is the California requirement for interconnecting smoke alarms in new construction?",
    options: [
      "Only alarms on the same floor need to be interconnected",
      "Interconnection is optional in new construction",
      "All smoke alarms must be interconnected so that when one sounds, all alarms throughout the dwelling sound simultaneously",
      "Only bedroom alarms need to be interconnected",
    ],
    correctAnswer: 2,
    explanation:
      "加州新建住宅要求所有烟雾报警器互联，当一个触发时，整个住宅中的所有报警器同时响起。这确保了无论火灾发生在哪里，所有居住者都能收到警报。",
    category: "safety",
  },
  {
    id: 1952,
    question:
      "What should an inspector check regarding a property in a high fire hazard severity zone?",
    options: [
      "Only the roof color",
      "Only whether there is a fire hydrant nearby",
      "Only the driveway material",
      "Defensible space compliance, fire-rated roofing, enclosed eaves, ember-resistant vents, and fire-resistant siding",
    ],
    correctAnswer: 3,
    explanation:
      "在高火灾危险区域，检查员应检查防火间距合规性、防火等级屋顶、封闭式屋檐、防余烬通风口和防火壁板。这些措施共同减少房屋在野火中受损的风险。",
    category: "safety",
  },
  {
    id: 1953,
    question:
      "What is the concern with a missing anti-tip bracket on a freestanding range?",
    options: [
      "The range could tip forward if a child climbs on an open oven door, potentially causing severe burns or crushing injuries",
      "The range will not cook evenly",
      "The range will use more energy",
      "It will void the warranty only",
    ],
    correctAnswer: 0,
    explanation:
      "缺少防倾斜支架的独立式灶具如果儿童攀爬打开的烤箱门可能向前倾倒，导致严重烫伤或挤压伤害。热汤锅、平底锅也可能滑落造成烫伤。CPSC记录了多起此类致命事故。",
    category: "safety",
  },
  {
    id: 1954,
    question:
      "What is the purpose of a safety cover on a swimming pool?",
    options: [
      "To keep the pool water warm",
      "To support the weight of a person walking across it and prevent access to the water below",
      "To prevent leaves from entering the pool",
      "To reduce water evaporation only",
    ],
    correctAnswer: 1,
    explanation:
      "泳池安全罩的目的是支撑人走过时的重量并防止接触下方的水。与普通盖板不同，安全罩必须符合ASTM F1346标准，能够支撑至少485磅的重量。",
    category: "safety",
  },
  {
    id: 1955,
    question:
      "What should an inspector note about a stairway without a guardrail on the open side?",
    options: [
      "It is an acceptable modern design feature",
      "It is only a concern for commercial buildings",
      "It is a fall hazard that does not meet building code requirements for stairs more than 30 inches above grade",
      "Guardrails are optional on residential stairs",
    ],
    correctAnswer: 2,
    explanation:
      "开放侧没有护栏的楼梯是跌落隐患，不符合高出地面30英寸以上楼梯的建筑规范要求。检查员应将此记录为安全缺陷，建议安装符合规范的护栏。",
    category: "safety",
  },
  {
    id: 1956,
    question:
      "What is the minimum clearance between pool fence horizontal members to prevent climbing?",
    options: [
      "Any spacing is fine",
      "12 inches apart",
      "6 inches apart",
      "Horizontal members should be on the pool side (not the approach side), or spaced at least 45 inches apart to prevent climbing footholds",
    ],
    correctAnswer: 3,
    explanation:
      "泳池围栏水平构件应在泳池侧（而非接近侧），或间距至少45英寸，以防止形成攀爬支撑点。面向外的水平构件为儿童提供了攀爬围栏的梯子，增加了溺水风险。",
    category: "safety",
  },
  {
    id: 1957,
    question:
      "What is the California requirement for ember-resistant vents in wildfire-prone areas?",
    options: [
      "Attic and crawl space vents must resist ember intrusion using 1/8-inch mesh or ember-resistant vent products",
      "Standard 1/4-inch screen mesh is sufficient",
      "Vents must be completely sealed shut",
      "No requirements exist for vents in fire areas",
    ],
    correctAnswer: 0,
    explanation:
      "在野火易发地区，阁楼和爬行空间通风口必须使用1/8英寸网格或防余烬通风产品抵抗余烬入侵。余烬可以飞行数英里，通过通风口进入阁楼是房屋起火的常见原因。",
    category: "safety",
  },
  {
    id: 1958,
    question:
      "What should an inspector look for when checking a dryer vent system?",
    options: [
      "Only whether it exits the building",
      "Proper material, length, diameter, connections, termination, lint buildup, and that it is not crushed or kinked",
      "Only the color of the vent",
      "Only whether it has a screen",
    ],
    correctAnswer: 1,
    explanation:
      "检查烘干机排气系统时应查看材料类型（应为光滑金属）、长度（不超过25英尺）、直径（4英寸）、连接方式（无螺丝）、终端装置、绒毛积聚情况，以及管道是否被压扁或扭曲。",
    category: "safety",
  },
  {
    id: 1959,
    question:
      "What is the purpose of a raised threshold at a garage entry door to the house?",
    options: [
      "To match the house floor height",
      "To prevent cold air from entering",
      "To prevent gasoline and other flammable liquids from flowing into the house in case of a spill",
      "It is purely decorative",
    ],
    correctAnswer: 2,
    explanation:
      "车库入口门处的抬高门槛防止汽油和其他易燃液体在泄漏时流入房屋。通常要求至少一个4英寸的台阶从车库到居住空间，这也是防火分隔的一部分。",
    category: "safety",
  },
  {
    id: 1960,
    question:
      "What is a dual-sensor smoke alarm?",
    options: [
      "An alarm with two batteries",
      "An alarm that detects both smoke and heat",
      "An alarm designed for two-story homes only",
      "An alarm that contains both ionization and photoelectric sensors for detection of both flaming and smoldering fires",
    ],
    correctAnswer: 3,
    explanation:
      "双传感器烟雾报警器同时包含电离和光电两种传感器，可以检测明火和阴燃两种类型的火灾。这提供了最全面的早期火灾检测保护。",
    category: "safety",
  },
  {
    id: 1961,
    question:
      "What is the California requirement for water heater strapping locations?",
    options: [
      "Upper strap within the top third and lower strap within the lower third of the water heater",
      "Only one strap at the center",
      "Straps at the very top and very bottom",
      "Strapping is optional if the water heater is in the garage",
    ],
    correctAnswer: 0,
    explanation:
      "加州要求热水器上部绑带在热水器上三分之一位置，下部绑带在下三分之一位置。两条绑带配合使用，防止地震时热水器倾倒或移位，避免燃气泄漏和水损坏。",
    category: "safety",
  },
  {
    id: 1962,
    question:
      "What is a safety concern with a stairway that has inconsistent tread depth?",
    options: [
      "It makes the stairs look unattractive",
      "It disrupts the user's walking rhythm and significantly increases the risk of tripping and falling",
      "It reduces the structural integrity of the stairs",
      "It is only a concern for commercial buildings",
    ],
    correctAnswer: 1,
    explanation:
      "踏板深度不一致会扰乱使用者的行走节奏，显著增加绊倒和跌落的风险。人的大脑会根据前几步建立步幅预期，突然的变化可能导致失去平衡。",
    category: "safety",
  },
  {
    id: 1963,
    question:
      "What should an inspector report about a missing garage-to-house fire door?",
    options: [
      "Any door is acceptable between the garage and house",
      "A curtain is an acceptable substitute",
      "It is a significant fire safety deficiency that should be corrected with an appropriately rated door",
      "No separation is needed in modern homes",
    ],
    correctAnswer: 2,
    explanation:
      "车库通往室内缺少防火门是重大消防安全缺陷，应安装适当等级的防火门。车库中存储的车辆、燃料和化学品使其成为高火灾风险区域，防火门延缓火灾蔓延至居住空间。",
    category: "safety",
  },
  {
    id: 1964,
    question:
      "What is the significance of a smoke alarm that is more than 10 years old?",
    options: [
      "Older alarms are more reliable",
      "The alarm will be louder after 10 years",
      "Age does not affect smoke alarm performance",
      "The sensors degrade over time and the alarm may not function properly, requiring replacement",
    ],
    correctAnswer: 3,
    explanation:
      "超过10年的烟雾报警器传感器会随时间劣化，可能无法正常工作。制造商和NFPA建议每10年更换烟雾报警器，无论它是否仍能通过测试按钮测试。",
    category: "safety",
  },
  {
    id: 1965,
    question:
      "What is the California requirement for homes in State Responsibility Areas (SRA) regarding defensible space?",
    options: [
      "100 feet of defensible space around all structures, or to the property line, whichever is less",
      "50 feet of defensible space",
      "No defensible space is required",
      "200 feet of defensible space",
    ],
    correctAnswer: 0,
    explanation:
      "加州州责任区（SRA）要求所有结构周围100英尺的防火间距（或到物业线，取较短者）。这包括Zone 0（0-5英尺）、Zone 1（5-30英尺）和Zone 2（30-100英尺）的不同植被管理要求。",
    category: "safety",
  },
  {
    id: 1966,
    question:
      "What is the proper placement of a carbon monoxide detector in relation to a fuel-burning appliance?",
    options: [
      "Attached directly to the furnace",
      "Outside each separate sleeping area within 15 feet of sleeping rooms, not directly next to the appliance",
      "Inside the furnace closet",
      "Only in the attic above the furnace",
    ],
    correctAnswer: 1,
    explanation:
      "CO探测器应安装在每个独立睡眠区域外15英尺以内的位置，而不是直接安装在设备旁边。这是因为探测器的主要目的是保护睡眠中的居住者，且直接放在设备旁可能导致频繁误报。",
    category: "safety",
  },
  {
    id: 1967,
    question:
      "What is the concern with popcorn ceilings that have been painted over in a pre-1978 home?",
    options: [
      "Paint permanently eliminates asbestos risk",
      "Painted popcorn ceilings never contained asbestos",
      "Paint may encapsulate asbestos fibers temporarily, but scraping or sanding will still release them",
      "Only unpainted popcorn ceilings are a concern",
    ],
    correctAnswer: 2,
    explanation:
      "涂漆可能暂时封装石棉纤维，但刮削或打磨仍会释放石棉。在1978年之前的房屋中，即使爆米花天花板已被涂漆，也应在翻修前进行石棉测试。",
    category: "safety",
  },
  {
    id: 1968,
    question:
      "What is the maximum height of the bottom of a pool fence gate latch from the ground?",
    options: [
      "36 inches",
      "48 inches",
      "60 inches",
      "54 inches when the latch release is on the pool side of the gate",
    ],
    correctAnswer: 3,
    explanation:
      "当门锁释放装置位于门的泳池侧时，从地面到门锁底部的最大高度不超过54英寸。这个高度确保成人可以够到但幼儿无法够到的平衡点。",
    category: "safety",
  },
  {
    id: 1969,
    question:
      "What is the importance of checking for proper seismic anchoring of a home's foundation?",
    options: [
      "Unanchored homes can slide off their foundations during an earthquake, causing major structural damage and gas line ruptures",
      "It only affects the home's resale value",
      "Foundation anchoring is purely cosmetic",
      "It is only important for homes over 100 years old",
    ],
    correctAnswer: 0,
    explanation:
      "未锚固的房屋在地震中可能从基础上滑落，造成严重的结构损坏和燃气管道断裂。加州的抗震加固计划优先处理基础锚固，因为这是地震中房屋损坏的最常见原因之一。",
    category: "safety",
  },
  {
    id: 1970,
    question:
      "What does California law require regarding fire extinguishers in residential properties?",
    options: [
      "Every room must have a fire extinguisher",
      "Fire extinguishers are not required by California residential building codes but are strongly recommended",
      "One extinguisher per 500 square feet is required",
      "Only commercial properties need fire extinguishers",
    ],
    correctAnswer: 1,
    explanation:
      "加州住宅建筑规范不要求安装灭火器，但强烈建议每户至少配备一个。建议在厨房和车库各备一个ABC型灭火器。检查员可以在报告中建议但不能作为缺陷列出。",
    category: "safety",
  },
  {
    id: 1971,
    question:
      "What is the concern with a spa or hot tub that has a damaged safety suction cover?",
    options: [
      "It only affects water circulation efficiency",
      "It will increase energy costs",
      "It can cause entrapment where a person's body, hair, or limbs get trapped by suction, potentially leading to drowning",
      "It is purely cosmetic",
    ],
    correctAnswer: 2,
    explanation:
      "损坏的安全吸水口盖可能导致吸附事故，人的身体、头发或四肢被吸力困住，可能导致溺水。Virginia Graeme Baker法案要求使用防夹吸水口盖以防止此类致命事故。",
    category: "safety",
  },
  {
    id: 1972,
    question:
      "When is a handrail required on both sides of a residential stairway?",
    options: [
      "Always, regardless of width",
      "Only on stairs with 10 or more risers",
      "Handrails on both sides are never required in residential buildings",
      "When the stairway is 44 inches or wider",
    ],
    correctAnswer: 3,
    explanation:
      "当住宅楼梯宽度达到44英寸或更宽时，需要在两侧都安装扶手。较宽的楼梯中间没有扶手可够到时，双侧扶手确保使用者始终有可抓握的支撑。",
    category: "safety",
  },
  {
    id: 1973,
    question:
      "What is the proper response if an inspector detects a strong gas odor during an inspection?",
    options: [
      "Evacuate the building immediately, do not operate electrical switches, and call the gas company from outside",
      "Open windows and continue the inspection",
      "Light a match to locate the leak",
      "Turn on exhaust fans to ventilate",
    ],
    correctAnswer: 0,
    explanation:
      "如果检查员在检查中检测到强烈的燃气气味，应立即疏散建筑物，不要操作电气开关（火花可能引爆），从室外拨打燃气公司电话。燃气泄漏是极其危险的，可能导致爆炸。",
    category: "safety",
  },
  {
    id: 1974,
    question:
      "What is the California code requirement for tempered glass near a bathtub?",
    options: [
      "No special glass is required near bathtubs",
      "Glass within 60 inches measured horizontally from the water's edge of a bathtub must be tempered safety glass",
      "Only glass directly above the bathtub",
      "Glass within 12 inches of the bathtub",
    ],
    correctAnswer: 1,
    explanation:
      "从浴缸水边缘水平测量60英寸以内的玻璃必须是钢化安全玻璃。浴缸区域湿滑，人可能滑倒撞到玻璃，钢化玻璃可以防止严重的割伤伤害。",
    category: "safety",
  },
  {
    id: 1975,
    question:
      "What is the purpose of a self-closing hinge on a garage-to-house door?",
    options: [
      "To reduce noise from the garage",
      "To save energy",
      "To ensure the door automatically closes to maintain the fire separation and prevent CO entry from vehicles",
      "It is purely for convenience",
    ],
    correctAnswer: 2,
    explanation:
      "车库通往室内门上的自动关闭铰链确保门自动关闭，维持防火分隔并防止车辆排出的一氧化碳进入居住空间。不能依赖居住者记住关门，自动关闭提供了持续的保护。",
    category: "safety",
  },
  {
    id: 1976,
    question:
      "What is the concern with lead plumbing pipes and solder in older homes?",
    options: [
      "Lead pipes are stronger and better than copper",
      "Lead solder only affects cold water",
      "Lead pipes do not affect water quality",
      "Lead can leach into drinking water, especially with hot water or when water sits in pipes for extended periods",
    ],
    correctAnswer: 3,
    explanation:
      "老旧房屋中的铅管和铅焊料可能将铅溶入饮用水中，特别是在热水或水在管道中长时间停留的情况下。1986年之前的房屋可能使用铅焊料连接铜管。铅在饮用水中对健康有害。",
    category: "safety",
  },
  {
    id: 1977,
    question:
      "What is the requirement for lighting on residential stairways?",
    options: [
      "A light switch must be provided at each floor level with an illumination level adequate to safely use the stairs",
      "No lighting is required for stairs",
      "Only natural light is needed",
      "A single light at the top is sufficient",
    ],
    correctAnswer: 0,
    explanation:
      "每个楼层都必须设有楼梯照明开关，照明水平足以安全使用楼梯。室内楼梯有6个或更多踏步时，需要在顶部和底部都设有开关（三路开关）。",
    category: "safety",
  },
  {
    id: 1978,
    question:
      "What is the California seismic retrofit requirement for homes with unbraced cripple walls?",
    options: [
      "No retrofit is ever required",
      "Bracing with structural plywood is strongly recommended to prevent collapse during earthquakes, and may be required for sale in some jurisdictions",
      "Only homes over 50 years old need retrofitting",
      "Cripple walls are always structurally adequate",
    ],
    correctAnswer: 1,
    explanation:
      "加州强烈建议对未加固的矮墙使用结构胶合板进行加固，以防止地震中倒塌。洛杉矶等一些司法管辖区已经立法要求某些类型的建筑物进行此类抗震加固。",
    category: "safety",
  },
  {
    id: 1979,
    question:
      "What is the danger of flexible gas connectors made before 1973?",
    options: [
      "They are more durable than modern connectors",
      "They are easier to install",
      "Older uncoated brass connectors are prone to cracking and leaking, creating fire and explosion hazards",
      "There is no concern with older connectors",
    ],
    correctAnswer: 2,
    explanation:
      "1973年之前制造的未涂层黄铜燃气连接器容易开裂和泄漏，造成火灾和爆炸危险。这些连接器已被召回，应立即更换为现代涂层不锈钢连接器。",
    category: "safety",
  },
  {
    id: 1980,
    question:
      "What is the purpose of a dedicated circuit for a smoke alarm system?",
    options: [
      "To make the alarms louder",
      "To reduce electricity costs",
      "To allow the alarms to be easily turned off",
      "To ensure the alarms remain powered even if other circuits are turned off, with no switch control over the alarm circuit",
    ],
    correctAnswer: 3,
    explanation:
      "烟雾报警器专用电路确保即使其他电路被关闭，报警器仍然保持供电。报警器电路不应有开关控制，防止有人故意或无意地断开报警器电源。",
    category: "safety",
  },
  {
    id: 1981,
    question:
      "What should an inspector check about stair treads for slip resistance?",
    options: [
      "That treads have a slip-resistant surface and are free from loose carpeting, smooth finishes, or worn nosings",
      "Only the color of the treads",
      "That treads are polished smooth",
      "Slip resistance is not part of a home inspection",
    ],
    correctAnswer: 0,
    explanation:
      "检查员应检查楼梯踏面是否有防滑表面，不应有松动的地毯、光滑的饰面或磨损的前缘。光滑或磨损的踏面是导致楼梯跌倒的主要因素之一。",
    category: "safety",
  },
  {
    id: 1982,
    question:
      "What is the California requirement for residential buildings in very high fire hazard severity zones regarding exterior walls?",
    options: [
      "Any exterior wall material is acceptable",
      "Exterior walls must be constructed of noncombustible or ignition-resistant materials or assemblies",
      "Only brick walls are permitted",
      "Stucco is prohibited",
    ],
    correctAnswer: 1,
    explanation:
      "在极高火灾危险区域，加州要求外墙使用不可燃或抗点燃材料或组件。这包括灰泥、纤维水泥壁板、砖石或其他经过测试的抗点燃材料。木壁板通常不符合要求。",
    category: "safety",
  },
  {
    id: 1983,
    question:
      "What type of dryer vent transition duct is most commonly used and least recommended?",
    options: [
      "Rigid aluminum duct",
      "Smooth galvanized steel duct",
      "White vinyl (plastic) flexible duct, which is a fire hazard and not code compliant",
      "Semi-rigid aluminum duct",
    ],
    correctAnswer: 2,
    explanation:
      "白色乙烯基（塑料）软管是最常见但最不推荐的烘干机排气过渡管道，它是火灾隐患且不符合规范。它容易被烘干机产生的热量点燃，且褶皱中积聚绒毛。应使用金属管道替代。",
    category: "safety",
  },
  {
    id: 1984,
    question:
      "What is the recommended inspection interval for residential smoke alarms?",
    options: [
      "Test once a year",
      "Test every 5 years",
      "No testing is needed if the alarm is hardwired",
      "Test monthly by pressing the test button, and replace the entire unit every 10 years",
    ],
    correctAnswer: 3,
    explanation:
      "建议每月按测试按钮测试烟雾报警器，并每10年更换整个装置。传感器随时间劣化，即使通过了测试按钮测试也可能无法正常检测真实的烟雾。",
    category: "safety",
  },
  {
    id: 1985,
    question:
      "What is the concern with guardrail infill patterns that have horizontal elements?",
    options: [
      "Horizontal elements create a ladder effect that children can climb, increasing the risk of falls",
      "Horizontal elements are structurally weaker",
      "They do not meet aesthetic standards",
      "They restrict airflow",
    ],
    correctAnswer: 0,
    explanation:
      "水平元素的护栏填充图案会产生梯子效应，儿童可以攀爬，增加坠落风险。垂直栏杆或不可攀爬的设计更安全。检查员应注意可能允许攀爬的护栏设计。",
    category: "safety",
  },
  {
    id: 1986,
    question:
      "What is the requirement for a pool fence gate's self-latching mechanism?",
    options: [
      "A manual latch that requires lifting is acceptable",
      "The latch must automatically engage when the gate closes without any action from the user",
      "A chain and padlock is sufficient",
      "No latching mechanism is required if the gate is self-closing",
    ],
    correctAnswer: 1,
    explanation:
      "泳池围栏门的自动锁闭机构必须在门关闭时自动啮合，无需用户操作。这确保了门在每次使用后始终处于锁闭状态，防止儿童推开门进入泳池区域。",
    category: "safety",
  },
  {
    id: 1987,
    question:
      "What is the safety concern with knob-and-tube wiring found in older homes?",
    options: [
      "It is safer than modern wiring",
      "It provides better grounding than modern systems",
      "It lacks a ground conductor, may have deteriorated insulation, and can be a fire hazard if covered with insulation",
      "It is only a concern in commercial buildings",
    ],
    correctAnswer: 2,
    explanation:
      "旧式拉线布管（knob-and-tube）布线缺少接地导体，绝缘层可能已劣化，如果被隔热材料覆盖可能导致过热和火灾。这种布线方式不适合现代用电负荷，建议升级。",
    category: "safety",
  },
  {
    id: 1988,
    question:
      "What is the purpose of a residential fire sprinkler system?",
    options: [
      "To completely prevent all fires from starting",
      "To replace smoke alarms",
      "To reduce homeowner's insurance only",
      "To control or extinguish a fire in its early stages, giving occupants more time to escape",
    ],
    correctAnswer: 3,
    explanation:
      "住宅消防喷淋系统的目的是在火灾初期控制或扑灭火灾，给予居住者更多逃生时间。它不能取代烟雾报警器，两者配合使用提供最佳的火灾保护。",
    category: "safety",
  },
  {
    id: 1989,
    question:
      "What is the California requirement for enclosed eaves in high fire hazard areas?",
    options: [
      "Eaves must be enclosed with fire-resistant materials to prevent ember entry and flame impingement on the underside of the roof",
      "Open eaves are preferred for ventilation",
      "Any material can be used for eave enclosure",
      "Eaves do not need to be enclosed",
    ],
    correctAnswer: 0,
    explanation:
      "在高火灾危险区域，加州要求使用防火材料封闭屋檐，防止余烬进入和火焰侵袭屋顶底面。开放式屋檐允许余烬直接接触木质屋顶结构，是房屋着火的主要途径之一。",
    category: "safety",
  },
  {
    id: 1990,
    question:
      "What is the significance of checking stairway lighting during a home inspection?",
    options: [
      "Lighting is purely aesthetic",
      "Inadequate lighting is a leading contributor to stair falls, which are among the most common household injuries",
      "Only exterior stair lighting matters",
      "Stair lighting is not part of a standard inspection",
    ],
    correctAnswer: 1,
    explanation:
      "照明不足是导致楼梯跌倒的主要因素之一，而楼梯跌倒是最常见的家庭伤害之一。检查员应确认楼梯有足够的照明，每个楼层都有开关，且灯泡正常工作。",
    category: "safety",
  },
  {
    id: 1991,
    question:
      "What is the requirement for tempered glass near a hot tub or spa?",
    options: [
      "No tempered glass is required near hot tubs",
      "Only glass within 12 inches of the water",
      "Glass within 60 inches of the water's edge and less than 60 inches from the floor must be tempered",
      "Tempered glass is only needed for indoor spas",
    ],
    correctAnswer: 2,
    explanation:
      "距热水浴缸或水疗池水边缘60英寸以内且距地板60英寸以下的玻璃必须是钢化安全玻璃。水疗区域潮湿光滑，人可能滑倒撞击玻璃，钢化玻璃提供必要的安全保护。",
    category: "safety",
  },
  {
    id: 1992,
    question:
      "What is the California requirement for smoke alarms in remodeled homes?",
    options: [
      "Only new rooms need alarms",
      "No upgrades are required during remodeling",
      "Only the remodeled area needs new alarms",
      "When a building permit is issued for remodeling, smoke alarms must be brought up to current code requirements for the entire dwelling",
    ],
    correctAnswer: 3,
    explanation:
      "当发出改建许可证时，加州要求整个住宅的烟雾报警器必须符合当前规范要求。这意味着即使只改建一个房间，整个房屋都可能需要升级到硬连线互联报警器。",
    category: "safety",
  },
  {
    id: 1993,
    question:
      "What is the proper installation method for a water heater seismic strap?",
    options: [
      "Straps should be anchored to wall studs or masonry with lag bolts, wrapped around the tank without gaps",
      "Straps can be attached to drywall only",
      "Duct tape is an acceptable fastening method",
      "Straps only need to be loosely wrapped around the tank",
    ],
    correctAnswer: 0,
    explanation:
      "热水器抗震绑带应使用膨胀螺栓锚固到墙壁骨架或砌体上，紧密缠绕水箱无间隙。仅固定在石膏板上的绑带在地震中会被拉出。绑带必须紧贴水箱以防止移动。",
    category: "safety",
  },
  {
    id: 1994,
    question:
      "What should an inspector note about a missing or painted-over smoke alarm?",
    options: [
      "Painted alarms are acceptable",
      "Both are safety deficiencies — missing alarms need replacement and painted alarms may not function due to paint blocking the sensor",
      "Missing alarms are only a concern in new construction",
      "Neither is a reportable concern",
    ],
    correctAnswer: 1,
    explanation:
      "缺失和被涂漆覆盖的烟雾报警器都是安全缺陷——缺失的需要更换，涂漆的可能因油漆堵塞传感器而无法正常工作。检查员应将两者都记录在报告中并建议纠正。",
    category: "safety",
  },
  {
    id: 1995,
    question:
      "What is the requirement for a residential stairway that has a door at the top?",
    options: [
      "The door may swing directly over the stairs",
      "No landing is needed if the door opens inward",
      "The door must not swing over the stairs — there must be a landing at least as deep as the door is wide",
      "Doors at the top of stairs are always prohibited",
    ],
    correctAnswer: 2,
    explanation:
      "楼梯顶部的门不得向楼梯方向开启——必须有至少与门宽相同深度的平台。这防止了门打开时将人推下楼梯的危险情况。这是一个重要的安全要求。",
    category: "safety",
  },
  {
    id: 1996,
    question:
      "What should an inspector look for at the base of a masonry chimney related to seismic safety?",
    options: [
      "Only the mortar condition",
      "Only the foundation type",
      "The chimney brand name",
      "Proper anchoring straps or bracing connecting the chimney to the house framing to resist lateral earthquake forces",
    ],
    correctAnswer: 3,
    explanation:
      "检查员应查看砖石烟囱底部是否有适当的锚固带或支撑将烟囱连接到房屋框架，以抵抗地震的侧向力。未加固的砖石烟囱是地震中最容易坍塌的结构之一。",
    category: "safety",
  },
  {
    id: 1997,
    question:
      "What is the minimum opening force for a pool fence gate's self-closing mechanism?",
    options: [
      "The gate should close and latch from any open position, including from a 6-inch gap, by gravity or spring mechanism",
      "The gate only needs to close from a fully open position",
      "No minimum closing force is specified",
      "The gate may remain open at 90 degrees",
    ],
    correctAnswer: 0,
    explanation:
      "泳池围栏门应能从任何打开位置（包括仅6英寸的间隙）通过重力或弹簧机构自动关闭并锁闭。这确保了门在任何程度的打开后都能自动恢复到安全关闭状态。",
    category: "safety",
  },
  {
    id: 1998,
    question:
      "What is the California regulation regarding CO alarms in rental properties?",
    options: [
      "Tenants are solely responsible for CO alarms",
      "Landlords must install and maintain CO alarms in compliance with state law; tenants must notify landlords of non-functioning alarms",
      "CO alarms are not required in rental properties",
      "Only commercial rental properties need CO alarms",
    ],
    correctAnswer: 1,
    explanation:
      "加州法律要求房东在出租物业中安装和维护CO报警器。租户有责任通知房东报警器不工作的情况。这种共同责任机制确保了出租住宅中CO探测的持续保护。",
    category: "safety",
  },
  {
    id: 1999,
    question:
      "What is the recommended practice if an inspector suspects the presence of asbestos in a home?",
    options: [
      "Collect samples for testing during the inspection",
      "Remove the suspected material immediately",
      "Note the suspected material in the report and recommend laboratory testing by a certified asbestos testing firm before any disturbance",
      "Ignore it if the material appears to be in good condition",
    ],
    correctAnswer: 2,
    explanation:
      "如果检查员怀疑存在石棉材料，应在报告中注明可疑材料，并建议在进行任何干扰之前由认证石棉测试公司进行实验室测试。检查员不应收集样本或干扰可疑材料。",
    category: "safety",
  },
  {
    id: 2000,
    question:
      "What is the overall purpose of California's comprehensive safety requirements for residential properties?",
    options: [
      "To increase the cost of home construction",
      "To create work for home inspectors only",
      "To reduce property values in high-risk areas",
      "To protect occupants from fire, natural disasters, toxic hazards, and injury through prevention, detection, and safe egress",
    ],
    correctAnswer: 3,
    explanation:
      "加州全面的住宅安全要求的总体目的是通过预防、检测和安全逃生来保护居住者免受火灾、自然灾害、有毒危害和伤害。这些要求反映了加州独特的风险环境，包括地震、野火和老旧住宅库存。",
    category: "safety",
  },
];
