import { Question } from "./questions";

export const questionsPart1: Question[] = [
  // ============================================================
  // STRUCTURAL COMPONENTS (Questions 1-50)
  // ============================================================
  {
    id: 1,
    question:
      "What is the primary purpose of a foundation in a residential structure?",
    options: [
      "To transfer the load of the structure to the ground",
      "To provide insulation from the cold",
      "To prevent insects from entering the home",
      "To act as a moisture barrier",
    ],
    correctAnswer: 0,
    explanation:
      "基础的主要功能是将建筑物的荷载传递到地基土壤上。虽然基础也能提供一定的防虫和防潮功能，但其核心作用是承重和传力。",
    category: "structural",
  },
  {
    id: 2,
    question:
      "Which type of foundation is most commonly used in areas with a high water table?",
    options: [
      "Full basement",
      "Slab-on-grade",
      "Pier and beam",
      "Crawl space",
    ],
    correctAnswer: 1,
    explanation:
      "在地下水位较高的地区，平板基础（Slab-on-grade）是最常用的，因为它不需要在地下挖掘深度较大的空间，可以减少地下水渗入的问题。",
    category: "structural",
  },
  {
    id: 3,
    question:
      "A horizontal crack in a concrete block foundation wall most likely indicates:",
    options: [
      "Normal concrete shrinkage",
      "Settling of the footing",
      "Lateral pressure from soil",
      "Freeze-thaw damage only",
    ],
    correctAnswer: 2,
    explanation:
      "混凝土砌块基础墙上的水平裂缝通常是由土壤侧向压力造成的。这种裂缝是严重的结构问题，表示墙体正在向内弯曲，需要专业工程师评估。",
    category: "structural",
  },
  {
    id: 4,
    question:
      "What is the minimum width of a residential footing for a one-story wood-frame house on normal soil?",
    options: ["8 inches", "12 inches", "16 inches", "24 inches"],
    correctAnswer: 1,
    explanation:
      "根据国际建筑规范（IRC），单层木框架住宅在正常土壤条件下的最小基脚宽度通常为12英寸。具体要求可能因当地规范而异。",
    category: "structural",
  },
  {
    id: 5,
    question:
      "Stair-step cracks in a brick or block foundation wall typically indicate:",
    options: [
      "Differential settlement",
      "Cosmetic damage only",
      "Excessive moisture",
      "Poor paint adhesion",
    ],
    correctAnswer: 0,
    explanation:
      "阶梯状裂缝沿砂浆接缝呈阶梯形发展，通常表明基础存在不均匀沉降（差异沉降）。这种裂缝需要进一步评估，因为它可能是结构问题的征兆。",
    category: "structural",
  },
  {
    id: 6,
    question: "What type of framing is most common in modern residential construction?",
    options: [
      "Balloon framing",
      "Platform framing",
      "Post and beam framing",
      "Timber framing",
    ],
    correctAnswer: 1,
    explanation:
      "平台框架（Platform framing）是现代住宅建筑中最常见的框架类型。每层楼板作为下一层墙体的平台，施工简单且安全，也有较好的防火性能。",
    category: "structural",
  },
  {
    id: 7,
    question:
      "In balloon framing, what is the primary fire safety concern?",
    options: [
      "The roof is not properly supported",
      "Floor joists are not properly attached",
      "Wall studs run continuously from foundation to roof, creating a chimney effect",
      "The foundation is too shallow",
    ],
    correctAnswer: 2,
    explanation:
      "气球框架中，墙骨从基础一直延伸到屋顶，形成连续的空腔。这些空腔会产生烟囱效应，使火焰在墙体内部迅速蔓延。因此需要安装防火挡板（fire stops）。",
    category: "structural",
  },
  {
    id: 8,
    question:
      "What is the standard spacing for wall studs in residential construction?",
    options: [
      "12 inches on center",
      "24 inches on center",
      "32 inches on center",
      "16 inches on center",
    ],
    correctAnswer: 3,
    explanation:
      "住宅建筑中墙骨的标准间距为16英寸中心距（16 inches on center）。在某些非承重墙中可以使用24英寸间距，但16英寸是最常见的标准间距。",
    category: "structural",
  },
  {
    id: 9,
    question:
      "A load-bearing wall can be identified by all of the following EXCEPT:",
    options: [
      "It has a decorative wallpaper finish",
      "It runs perpendicular to floor joists",
      "It is located directly above a beam or another wall below",
      "It supports the ends of ceiling or floor joists",
    ],
    correctAnswer: 0,
    explanation:
      "装饰性墙纸与墙体是否承重完全无关。承重墙通常垂直于楼板搁栅、位于下方梁或墙体的正上方，并承托天花板或楼板搁栅的端部。",
    category: "structural",
  },
  {
    id: 10,
    question:
      "What is the purpose of a header (lintel) above a window or door opening in a load-bearing wall?",
    options: [
      "To provide a nailing surface for trim",
      "To transfer loads around the opening to the supporting studs",
      "To hold the window frame in place",
      "To prevent air infiltration",
    ],
    correctAnswer: 1,
    explanation:
      "过梁（Header）的作用是将开口上方的荷载传递到开口两侧的支撑立柱上。没有过梁，墙体上方的重量会直接作用在窗户或门框上，导致结构损坏。",
    category: "structural",
  },
  {
    id: 11,
    question:
      "What is the typical minimum size for a header spanning a 3-foot opening in a load-bearing wall?",
    options: [
      "Single 2x4",
      "Double 2x4",
      "Double 2x6",
      "Double 2x10",
    ],
    correctAnswer: 2,
    explanation:
      "对于承重墙中3英尺的开口，通常需要双层2x6的过梁。过梁尺寸取决于开口宽度和上方的荷载。更宽的开口需要更大的过梁。",
    category: "structural",
  },
  {
    id: 12,
    question: "The sill plate in a wood-frame house sits on top of the:",
    options: [
      "Floor joists",
      "Wall studs",
      "Subfloor",
      "Foundation wall",
    ],
    correctAnswer: 3,
    explanation:
      "底梁板（Sill plate）安装在基础墙顶部，是木框架结构与基础之间的连接构件。它通常使用锚栓固定在基础上，并且通常使用经过防腐处理的木材。",
    category: "structural",
  },
  {
    id: 13,
    question:
      "What is the purpose of anchor bolts in a foundation?",
    options: [
      "To secure the sill plate to the foundation",
      "To reinforce the concrete against cracking",
      "To connect the rebar to the footing",
      "To provide drainage through the foundation",
    ],
    correctAnswer: 0,
    explanation:
      "锚栓的主要作用是将底梁板固定在基础上，防止房屋在风力或地震作用下发生移位。锚栓通常间距为6英尺，且在角部和接头处需要额外安装。",
    category: "structural",
  },
  {
    id: 14,
    question:
      "Floor joists that are sagging in the middle of a span most likely need:",
    options: [
      "Additional insulation",
      "A support beam or column added underneath",
      "New subfloor material",
      "Replacement of the sill plate",
    ],
    correctAnswer: 1,
    explanation:
      "楼板搁栅跨中下垂通常表明跨度过大或搁栅尺寸不足。最常见的解决方案是在下方增加支撑梁或柱子，以减小有效跨度，从而减少挠度。",
    category: "structural",
  },
  {
    id: 15,
    question:
      "What is the purpose of bridging or blocking between floor joists?",
    options: [
      "To provide a nailing surface for the ceiling below",
      "To increase the span capacity of the joists",
      "To prevent joists from twisting and to distribute loads",
      "To serve as fire blocking",
    ],
    correctAnswer: 2,
    explanation:
      "搁栅之间的桥接或实心挡块的主要目的是防止搁栅扭转并将集中荷载分散到相邻搁栅上，提高楼板系统的整体刚度和稳定性。",
    category: "structural",
  },
  {
    id: 16,
    question:
      "Which of the following is NOT a common sign of structural settling?",
    options: [
      "Doors and windows sticking or not closing properly",
      "Cracks in drywall above door frames",
      "Sloping floors",
      "Uniform fading of exterior paint",
    ],
    correctAnswer: 3,
    explanation:
      "外墙油漆均匀褪色是正常的老化现象，与结构沉降无关。门窗卡滞、石膏板裂缝和楼板倾斜都是常见的结构沉降迹象。",
    category: "structural",
  },
  {
    id: 17,
    question:
      "What is the standard nominal size of a common floor joist in residential construction?",
    options: ["2x6", "2x8", "2x10", "All of these are common sizes"],
    correctAnswer: 3,
    explanation:
      "2x6、2x8和2x10都是住宅建筑中常用的楼板搁栅尺寸。具体使用哪种尺寸取决于跨度、间距和荷载要求。2x10和2x12常用于较大跨度。",
    category: "structural",
  },
  {
    id: 18,
    question:
      "A king stud in wall framing is:",
    options: [
      "The first stud placed at a corner",
      "A stud that runs from the sole plate to the top plate alongside an opening",
      "A shortened stud below a window sill",
      "A diagonal brace in the wall",
    ],
    correctAnswer: 1,
    explanation:
      "王柱（King stud）是从底板延伸到顶板的全长立柱，位于门窗开口的两侧，用于支撑过梁。它与短柱（Jack stud/trimmer）配合使用来传递荷载。",
    category: "structural",
  },
  {
    id: 19,
    question: "A cripple stud is:",
    options: [
      "A stud that has been damaged during construction",
      "A stud at an exterior corner",
      "A shortened stud above or below an opening",
      "A stud that is doubled for extra strength",
    ],
    correctAnswer: 2,
    explanation:
      "矮柱（Cripple stud）是指门窗开口上方或窗户开口下方的短立柱。它们将荷载从顶板传递到过梁，或从窗台板传递到底板。",
    category: "structural",
  },
  {
    id: 20,
    question:
      "What is the minimum crawl space height required by most building codes?",
    options: ["12 inches", "18 inches", "24 inches", "36 inches"],
    correctAnswer: 1,
    explanation:
      "大多数建筑规范要求爬行空间的最小净高为18英寸。这个高度允许检查人员进入进行检查和维护，但在设备区域可能需要更大的净空。",
    category: "structural",
  },
  {
    id: 21,
    question:
      "Engineered wood I-joists are preferred over solid lumber joists because they:",
    options: [
      "Have more consistent dimensions and can span longer distances",
      "Are always less expensive",
      "Do not require bridging",
      "Are naturally resistant to termites",
    ],
    correctAnswer: 0,
    explanation:
      "工程木I型搁栅尺寸更加均匀一致，可以跨越更长的距离，并且不易翘曲、扭曲或收缩。虽然不一定更便宜，但性能优于传统实木搁栅。",
    category: "structural",
  },
  {
    id: 22,
    question:
      "What is efflorescence on a concrete or masonry wall?",
    options: [
      "Mold growth caused by moisture",
      "A white powdery deposit caused by water migrating through the material",
      "Paint peeling due to poor adhesion",
      "Rust stains from embedded metal",
    ],
    correctAnswer: 1,
    explanation:
      "泛碱（Efflorescence）是水分通过混凝土或砖石材料时，将内部的可溶性盐分带到表面并蒸发后留下的白色粉末状沉积物。它本身不是结构问题，但表明存在水分迁移。",
    category: "structural",
  },
  {
    id: 23,
    question:
      "Spalling of concrete is best described as:",
    options: [
      "Cracks running through the full depth of the concrete",
      "Discoloration from chemical exposure",
      "Flaking, chipping, or peeling of the concrete surface",
      "Settlement of the concrete slab",
    ],
    correctAnswer: 2,
    explanation:
      "混凝土剥落（Spalling）是指混凝土表面出现剥落、碎裂或起皮的现象，通常由冻融循环、钢筋锈蚀膨胀或混凝土质量差引起。严重的剥落可能暴露内部钢筋。",
    category: "structural",
  },
  {
    id: 24,
    question:
      "In a roof truss system, which member is under tension?",
    options: [
      "The top chord",
      "The king post",
      "The ridge board",
      "The bottom chord",
    ],
    correctAnswer: 3,
    explanation:
      "在屋架系统中，下弦杆（bottom chord）承受拉力，因为它连接屋架两端并防止屋架在荷载作用下向外扩张。上弦杆承受压力。",
    category: "structural",
  },
  {
    id: 25,
    question:
      "Why should roof trusses NOT be cut or modified in the field?",
    options: [
      "Trusses are engineered as a system; modifying one member can cause failure",
      "It voids the paint warranty",
      "It is illegal in all states",
      "It makes the attic too warm",
    ],
    correctAnswer: 0,
    explanation:
      "屋架是作为整体系统工程设计的，每个构件都承担特定的力学功能。随意切割或修改任何构件会改变力的传递路径，可能导致整个屋架系统失效。",
    category: "structural",
  },
  {
    id: 26,
    question:
      "What is the purpose of a beam pocket in a foundation wall?",
    options: [
      "To provide ventilation to the crawl space",
      "To create a recess where a beam end can rest on the foundation",
      "To allow plumbing pipes to pass through",
      "To anchor the mudsill",
    ],
    correctAnswer: 1,
    explanation:
      "梁槽（Beam pocket）是基础墙中的一个凹槽，用于放置大梁的端部，使梁能够搁置在基础上。梁槽必须有足够的尺寸，并保证梁端有足够的支撑面积。",
    category: "structural",
  },
  {
    id: 27,
    question:
      "What material is typically used for the sill plate in contact with concrete?",
    options: [
      "Untreated pine",
      "Cedar only",
      "Pressure-treated lumber",
      "Engineered laminated beam",
    ],
    correctAnswer: 2,
    explanation:
      "与混凝土接触的底梁板必须使用经过防腐加压处理的木材，因为混凝土会吸收和传导水分，可能导致未处理木材腐烂。这是建筑规范的要求。",
    category: "structural",
  },
  {
    id: 28,
    question:
      "Which of the following best describes a pier and beam foundation?",
    options: [
      "A continuous concrete wall supporting the entire perimeter",
      "A concrete slab poured directly on the ground",
      "A deep basement with reinforced walls",
      "Individual columns supporting beams that carry the floor structure",
    ],
    correctAnswer: 3,
    explanation:
      "墩梁基础（Pier and beam）由独立的墩柱支撑横梁，横梁再承托楼板结构。这种基础形式提供了爬行空间，便于检修管线，常用于坡地或土壤条件不稳定的地区。",
    category: "structural",
  },
  {
    id: 29,
    question:
      "A post in a basement that supports a main beam should rest on a:",
    options: [
      "Concrete pier or footing pad",
      "Concrete floor slab directly",
      "Wooden block",
      "Metal plate on bare soil",
    ],
    correctAnswer: 0,
    explanation:
      "地下室中支撑主梁的柱子应放置在独立的混凝土墩或基脚垫上，而不是直接放在楼板上。楼板通常只有3-4英寸厚，不足以承受集中荷载。",
    category: "structural",
  },
  {
    id: 30,
    question:
      "What is the purpose of a vapor barrier in a crawl space?",
    options: [
      "To insulate the floor above",
      "To prevent ground moisture from entering the crawl space",
      "To prevent radon gas from entering",
      "To support the floor joists",
    ],
    correctAnswer: 1,
    explanation:
      "爬行空间中防潮层的主要作用是防止地面的水分蒸发进入爬行空间。通常使用6密尔（mil）厚的聚乙烯薄膜覆盖裸露地面，减少木结构受潮和霉菌生长的风险。",
    category: "structural",
  },
  {
    id: 31,
    question:
      "What is a common consequence of inadequate ventilation in an attic?",
    options: [
      "Reduced electrical efficiency",
      "Foundation settlement",
      "Moisture buildup leading to wood rot and mold",
      "Increased water pressure",
    ],
    correctAnswer: 2,
    explanation:
      "阁楼通风不良会导致水分积聚，进而引起木材腐烂、霉菌生长和屋顶衬板损坏。冬季还可能形成冰坝。充足的通风对保护屋顶结构至关重要。",
    category: "structural",
  },
  {
    id: 32,
    question:
      "A cantilever in floor framing refers to:",
    options: [
      "A joist that is spliced over a beam",
      "A joist that is supported at both ends by bearing walls",
      "A joist hanger connection",
      "A section of floor that extends beyond its support",
    ],
    correctAnswer: 3,
    explanation:
      "悬挑（Cantilever）是指楼板搁栅超出其支撑点向外延伸的部分。悬挑长度通常不应超过搁栅回跨距离的四分之一。常见于飘窗和二楼突出部分。",
    category: "structural",
  },
  {
    id: 33,
    question:
      "What is the primary purpose of rebar in a concrete foundation?",
    options: [
      "To add tensile strength since concrete is weak in tension",
      "To increase the compressive strength of concrete",
      "To speed up the curing process",
      "To reduce the weight of the foundation",
    ],
    correctAnswer: 0,
    explanation:
      "钢筋的主要作用是为混凝土提供抗拉强度。混凝土的抗压强度很高，但抗拉强度很低。钢筋弥补了混凝土的这一弱点，使结构能够承受弯曲和拉伸应力。",
    category: "structural",
  },
  {
    id: 34,
    question:
      "OSB (Oriented Strand Board) used as subflooring is typically how thick?",
    options: [
      "1/4 inch",
      "23/32 inch (approximately 3/4 inch)",
      "3/8 inch",
      "1-1/2 inches",
    ],
    correctAnswer: 1,
    explanation:
      "用于底层地板的OSB板通常厚度为23/32英寸（约3/4英寸）。这个厚度能够为16英寸间距的搁栅提供足够的支撑和刚度。更大的搁栅间距可能需要更厚的板材。",
    category: "structural",
  },
  {
    id: 35,
    question:
      "A home inspector notices that a support column in the basement has been replaced with a telescoping steel jack post. This likely indicates:",
    options: [
      "Normal construction practice",
      "The home was built before 1950",
      "A previous structural repair or attempt to level the floor",
      "The basement was recently waterproofed",
    ],
    correctAnswer: 2,
    explanation:
      "可调节钢柱（Jack post）通常表明之前进行过结构修补或试图调平楼板。虽然它们可以作为临时支撑，但不应作为永久结构构件使用，除非经过工程师批准。",
    category: "structural",
  },
  {
    id: 36,
    question:
      "The double top plate in wall framing serves to:",
    options: [
      "Provide additional insulation",
      "Provide a nailing surface for baseboards",
      "Act as a fire stop",
      "Tie intersecting walls together and distribute loads across studs",
    ],
    correctAnswer: 3,
    explanation:
      "双层顶板的作用是将相交的墙体连接在一起，并将上方的荷载分散到多根立柱上。搁栅不必精确对准下方的每根立柱，因为双层顶板能够跨越和分配荷载。",
    category: "structural",
  },
  {
    id: 37,
    question:
      "What does 'checking' refer to in a wooden beam?",
    options: [
      "Surface cracks caused by drying and shrinkage",
      "Inspecting the beam for damage",
      "The beam bouncing under load",
      "Measuring the beam's dimensions",
    ],
    correctAnswer: 0,
    explanation:
      "木材开裂（Checking）是指木梁表面因干燥收缩而产生的裂纹。这是木材的自然现象，通常不影响结构强度，除非裂缝很深或贯穿整个截面。",
    category: "structural",
  },
  {
    id: 38,
    question:
      "A rim joist (band joist) is located:",
    options: [
      "In the center of the floor span",
      "At the perimeter of the floor system, covering the ends of the floor joists",
      "On top of the roof trusses",
      "Below the basement slab",
    ],
    correctAnswer: 1,
    explanation:
      "边梁（Rim joist）位于楼板系统的周边，覆盖楼板搁栅的端部。它将搁栅端部连接在一起，提供横向稳定性，并封闭楼板腔体。",
    category: "structural",
  },
  {
    id: 39,
    question:
      "Which type of concrete crack is generally the LEAST concerning structurally?",
    options: [
      "Horizontal crack in a basement wall",
      "Diagonal crack from a corner of a window",
      "Hairline shrinkage crack in a concrete slab",
      "Wide crack with vertical displacement",
    ],
    correctAnswer: 2,
    explanation:
      "混凝土板上的发丝状收缩裂缝通常是最不需要担心的，这是混凝土固化过程中正常收缩造成的。水平裂缝、对角裂缝和有位移的宽裂缝都可能是严重的结构问题。",
    category: "structural",
  },
  {
    id: 40,
    question:
      "What is a bearing wall?",
    options: [
      "Any wall made of concrete",
      "An exterior wall only",
      "A wall with extra insulation",
      "A wall that supports weight from above in addition to its own weight",
    ],
    correctAnswer: 3,
    explanation:
      "承重墙是除了承担自身重量外，还承受上方屋顶、楼板或其他构件传下来的荷载的墙体。承重墙不能随意拆除，必须先安装替代的承重结构。",
    category: "structural",
  },
  {
    id: 41,
    question:
      "Sistering of floor joists refers to:",
    options: [
      "Attaching a new joist alongside an existing damaged or undersized joist",
      "Replacing damaged joists with new ones",
      "Adding bridging between joists",
      "Cutting joists to install ductwork",
    ],
    correctAnswer: 0,
    explanation:
      "搁栅加固（Sistering）是将新的搁栅紧贴安装在现有受损或尺寸不足的搁栅旁边，以增加其承载能力。这是一种常见的楼板结构加固方法。",
    category: "structural",
  },
  {
    id: 42,
    question:
      "What is the primary structural difference between a girder and a joist?",
    options: [
      "Girders are made of steel; joists are made of wood",
      "A girder is a primary beam that supports joists; joists are secondary members",
      "Joists run vertically; girders run horizontally",
      "There is no difference; the terms are interchangeable",
    ],
    correctAnswer: 1,
    explanation:
      "大梁（Girder）是主要的承重梁，承托搁栅。搁栅（Joist）是次要的结构构件，直接承托楼板。大梁和搁栅可以都是木材或钢材制成的。",
    category: "structural",
  },
  {
    id: 43,
    question:
      "A home inspector observes notches cut in the bottom of floor joists. This is a concern because:",
    options: [
      "It allows moisture to enter the joist",
      "It creates a fire hazard",
      "It reduces the structural capacity of the joist, especially at the bottom where tension is greatest",
      "It violates the paint manufacturer's warranty",
    ],
    correctAnswer: 2,
    explanation:
      "搁栅底部的切口会严重削弱其承载能力，因为搁栅底部承受的是最大拉力。建筑规范严格限制搁栅切口的位置和深度，底部切口是最有害的。",
    category: "structural",
  },
  {
    id: 44,
    question:
      "What is the function of a collar tie in roof framing?",
    options: [
      "To connect the ridge board to the wall plate",
      "To provide a nailing surface for the ceiling",
      "To support the weight of the chimney",
      "To resist the tendency of rafters to separate at the ridge under load",
    ],
    correctAnswer: 3,
    explanation:
      "系杆（Collar tie）连接对面的椽子对，防止它们在荷载作用下在脊部分离。系杆通常安装在椽子上部三分之一的位置。",
    category: "structural",
  },
  {
    id: 45,
    question:
      "A rafter tie (ceiling joist) at the bottom of the rafters primarily resists:",
    options: [
      "Outward thrust at the wall plates",
      "Vertical loads",
      "Wind uplift",
      "Snow drift",
    ],
    correctAnswer: 0,
    explanation:
      "椽脚系杆（天花板搁栅）主要抵抗椽子在墙顶板处产生的向外推力。没有这些系杆，屋顶荷载会将墙体向外推开，导致严重的结构问题。",
    category: "structural",
  },
  {
    id: 46,
    question:
      "What is a monolithic slab foundation?",
    options: [
      "A slab poured in multiple sections",
      "A slab and footing poured together as one piece",
      "A slab placed on top of a basement",
      "A slab made from recycled materials",
    ],
    correctAnswer: 1,
    explanation:
      "整体浇筑基础（Monolithic slab）是指混凝土板和加厚边缘基脚一次性同时浇筑成型的基础。这种方法节省时间和成本，适用于温暖地区和平坦地形。",
    category: "structural",
  },
  {
    id: 47,
    question:
      "Which foundation type is MOST susceptible to frost heave damage?",
    options: [
      "A foundation with footings below the frost line",
      "A full basement foundation",
      "A shallow monolithic slab in a cold climate",
      "A deep pier foundation",
    ],
    correctAnswer: 2,
    explanation:
      "在寒冷气候区，浅层整体浇筑基础最容易受到冻胀破坏，因为基脚在冻线以上。当土壤中的水分冻结膨胀时，会抬起并损坏基础。深基础将基脚设置在冻线以下可避免此问题。",
    category: "structural",
  },
  {
    id: 48,
    question:
      "Diagonal bracing in wall framing is used to:",
    options: [
      "Support additional floors",
      "Provide extra insulation",
      "Create openings for windows",
      "Resist lateral forces (racking) from wind or seismic loads",
    ],
    correctAnswer: 3,
    explanation:
      "对角支撑（或结构面板如胶合板/OSB）用于抵抗风力或地震产生的水平力（抗剪），防止墙体框架变形为平行四边形。现代建筑通常使用结构面板代替对角支撑。",
    category: "structural",
  },
  {
    id: 49,
    question:
      "What type of wood damage creates small piles of fine, powdery sawdust (frass)?",
    options: [
      "Powder post beetles",
      "Carpenter ants",
      "Subterranean termites",
      "Dry rot fungus",
    ],
    correctAnswer: 0,
    explanation:
      "粉蠹虫（Powder post beetles）会在木材中蛀出细小的隧道，并在出口处留下细腻的粉末状木屑（虫粪）。白蚁产生的粪便颗粒较大，木蚁产生的木屑较粗糙。",
    category: "structural",
  },
  {
    id: 50,
    question:
      "A home inspector finds that a structural beam has been drilled with a large hole for a plumbing pipe. The correct recommendation is:",
    options: [
      "No action needed; this is standard practice",
      "Recommend evaluation by a structural engineer",
      "Suggest filling the hole with caulk",
      "Recommend replacing the plumbing pipe",
    ],
    correctAnswer: 1,
    explanation:
      "在结构梁上钻大孔会严重削弱其承载能力。检查员应建议由结构工程师进行评估，以确定是否需要加固或修复。这不是标准施工做法，可能违反建筑规范。",
    category: "structural",
  },

  // ============================================================
  // ELECTRICAL SYSTEMS (Questions 51-100)
  // ============================================================
  {
    id: 51,
    question:
      "What is the minimum electrical service size recommended for a modern single-family home?",
    options: [
      "60 amps",
      "200 amps",
      "100 amps",
      "400 amps",
    ],
    correctAnswer: 2,
    explanation:
      "现代单户住宅的最低推荐电力服务容量为100安培。然而，200安培现在更为常见，因为现代家庭的用电需求增加了。60安培的服务已经过时且不足。",
    category: "electrical",
  },
  {
    id: 52,
    question:
      "GFCI protection is required in all of the following locations EXCEPT:",
    options: [
      "Bathrooms",
      "Kitchen countertop receptacles",
      "Garage receptacles",
      "Bedroom outlets",
    ],
    correctAnswer: 3,
    explanation:
      "卧室插座不需要GFCI保护（但需要AFCI保护）。GFCI保护主要用于有水的区域，包括浴室、厨房操作台面、车库、室外、爬行空间和未完工的地下室。",
    category: "electrical",
  },
  {
    id: 53,
    question:
      "What does GFCI stand for?",
    options: [
      "Ground Fault Circuit Interrupter",
      "Ground Fault Current Interrupter",
      "General Fuse Circuit Indicator",
      "Grounded Fuse Current Interrupter",
    ],
    correctAnswer: 0,
    explanation:
      "GFCI代表Ground Fault Circuit Interrupter（接地故障断路器）。它通过检测电流泄漏到地面来保护人免受电击，能够在检测到4-6毫安的漏电时在几毫秒内断开电路。",
    category: "electrical",
  },
  {
    id: 54,
    question:
      "Knob-and-tube wiring is a concern primarily because:",
    options: [
      "It uses copper wire which is inferior to aluminum",
      "It lacks a grounding conductor and may have deteriorated insulation",
      "It was never approved by any electrical code",
      "It uses too many circuits",
    ],
    correctAnswer: 1,
    explanation:
      "球管布线（Knob-and-tube）的主要问题是没有接地导线，且绝缘材料经过多年可能已经老化变脆。此外，如果被建筑隔热材料覆盖，会产生过热风险。",
    category: "electrical",
  },
  {
    id: 55,
    question:
      "What gauge wire is typically used for a 20-amp circuit?",
    options: [
      "14 AWG",
      "10 AWG",
      "12 AWG",
      "8 AWG",
    ],
    correctAnswer: 2,
    explanation:
      "20安培电路通常使用12 AWG（美国线规）导线。14 AWG用于15安培电路，10 AWG用于30安培电路。使用过细的导线会导致过热和火灾危险。",
    category: "electrical",
  },
  {
    id: 56,
    question:
      "What gauge wire is required for a 15-amp circuit?",
    options: [
      "12 AWG",
      "10 AWG",
      "16 AWG",
      "14 AWG",
    ],
    correctAnswer: 3,
    explanation:
      "15安培电路需要至少14 AWG的导线。AWG数字越小，导线越粗。使用12 AWG也是可以的（更安全），但14 AWG是规范允许的最小尺寸。",
    category: "electrical",
  },
  {
    id: 57,
    question:
      "The main purpose of a grounding system in residential wiring is to:",
    options: [
      "Provide a safe path for fault current to return to the source and trip the breaker",
      "Reduce the electricity bill",
      "Improve the speed of electrical devices",
      "Prevent lightning from striking the house",
    ],
    correctAnswer: 0,
    explanation:
      "接地系统的主要目的是在发生故障时为电流提供安全的回路路径，使断路器能够及时跳闸断电，从而保护人员免受电击和防止火灾。",
    category: "electrical",
  },
  {
    id: 58,
    question:
      "NM cable (Romex) should NOT be used in which of the following locations?",
    options: [
      "Inside interior walls",
      "Exposed on the exterior of a building",
      "In an attic",
      "Through holes drilled in floor joists",
    ],
    correctAnswer: 1,
    explanation:
      "NM电缆（Romex）不能暴露在建筑物外部使用，因为其外护套不能防紫外线和防水。室外需要使用UF（地下馈线）电缆或金属导管保护的导线。",
    category: "electrical",
  },
  {
    id: 59,
    question:
      "What is the purpose of an AFCI (Arc Fault Circuit Interrupter) breaker?",
    options: [
      "To protect against electrical shock",
      "To regulate voltage fluctuations",
      "To detect and prevent electrical arcing that could cause fires",
      "To provide backup power during outages",
    ],
    correctAnswer: 2,
    explanation:
      "AFCI（电弧故障断路器）的作用是检测和防止可能引起火灾的电弧故障。电弧可能由受损导线、松动的连接或老化的绝缘引起。AFCI现在要求安装在卧室和其他生活区域。",
    category: "electrical",
  },
  {
    id: 60,
    question:
      "According to the NEC, AFCI protection is currently required for circuits in:",
    options: [
      "Bathrooms only",
      "Garages only",
      "Only exterior circuits",
      "Kitchens, bedrooms, living rooms, and most habitable rooms",
    ],
    correctAnswer: 3,
    explanation:
      "根据最新的NEC规范，AFCI保护要求已扩展到几乎所有居住空间，包括卧室、客厅、餐厅、厨房、走廊和壁橱等。浴室和车库通常使用GFCI保护。",
    category: "electrical",
  },
  {
    id: 61,
    question:
      "A double-tapped breaker means:",
    options: [
      "Two wires are connected to a breaker terminal designed for only one",
      "The breaker has been tested twice",
      "The breaker trips too frequently",
      "The breaker is installed upside down",
    ],
    correctAnswer: 0,
    explanation:
      "双接线（Double-tapped）是指两根导线连接到仅设计容纳一根导线的断路器端子上。这是常见的缺陷，可能导致接触不良、过热和火灾。除非断路器明确标注可接两根线。",
    category: "electrical",
  },
  {
    id: 62,
    question:
      "What is the concern with aluminum wiring in residential homes built in the 1960s-70s?",
    options: [
      "It is too expensive to maintain",
      "It can oxidize, expand/contract more than copper, and create loose connections that may overheat",
      "It does not conduct electricity",
      "It is not compatible with modern breakers",
    ],
    correctAnswer: 1,
    explanation:
      "铝线的膨胀系数比铜大，经过反复加热冷却后容易松动。铝还会氧化形成高电阻的氧化层。松动的连接会产生过热，是火灾隐患。需要使用专门的CO/ALR开关和插座。",
    category: "electrical",
  },
  {
    id: 63,
    question:
      "A 240-volt circuit in a residential home is typically used for:",
    options: [
      "Bedroom outlets",
      "Bathroom lights",
      "Electric range, dryer, or central AC",
      "Doorbell transformer",
    ],
    correctAnswer: 2,
    explanation:
      "240伏电路用于大功率电器，如电炉灶、电烘干机、中央空调和电热水器。这些设备需要更高的电压以减少电流和导线尺寸的需求。",
    category: "electrical",
  },
  {
    id: 64,
    question:
      "What is the maximum number of conductors allowed in a standard single-gang electrical box?",
    options: [
      "Always 4 conductors",
      "Always 6 conductors",
      "There is no limit",
      "It depends on the box size and conductor gauge",
    ],
    correctAnswer: 3,
    explanation:
      "电气盒中允许的最大导线数量取决于盒子的体积和导线的规格。NEC有详细的盒子填充计算规则，每种规格的导线占用一定的体积。过度填充会导致过热和损坏绝缘。",
    category: "electrical",
  },
  {
    id: 65,
    question:
      "A subpanel in a detached garage requires:",
    options: [
      "Separate neutral and ground buses with the ground bus bonded to the panel enclosure",
      "Its neutral and ground buses bonded together",
      "No grounding at all",
      "Only a single hot conductor",
    ],
    correctAnswer: 0,
    explanation:
      "独立车库中的分电箱要求中性线和地线母排必须分开。只有主配电板才能将中性线和地线绑定在一起。分电箱中需要四根线：两根火线、一根中性线和一根地线。",
    category: "electrical",
  },
  {
    id: 66,
    question:
      "BX cable (armored cable) can be identified by its:",
    options: [
      "Orange plastic outer sheath",
      "Flexible spiral metal armor covering the conductors",
      "White fabric insulation",
      "Rigid PVC conduit",
    ],
    correctAnswer: 1,
    explanation:
      "BX电缆（铠装电缆）的特征是其螺旋状的金属铠装外护套。这种金属铠装为导线提供物理保护，并可在某些情况下作为接地路径。",
    category: "electrical",
  },
  {
    id: 67,
    question:
      "When testing a receptacle, a hot-neutral reverse indication means:",
    options: [
      "The outlet is functioning normally",
      "The ground wire is missing",
      "The hot and neutral wires are connected to the wrong terminals",
      "The GFCI has tripped",
    ],
    correctAnswer: 2,
    explanation:
      "火线-零线接反表示导线连接到了错误的端子上。这是一个安全隐患，因为即使开关关闭，设备内部仍可能带电。这是一个常见但容易修复的布线错误。",
    category: "electrical",
  },
  {
    id: 68,
    question:
      "What is the minimum height above grade for the electrical service entrance cables?",
    options: [
      "5 feet",
      "8 feet",
      "12 feet",
      "10 feet",
    ],
    correctAnswer: 3,
    explanation:
      "电力进线电缆在地面以上的最低高度通常为10英尺（在可行走区域）。在车道上方需要更高（12英尺），在公共道路上方需要18英尺。这是为了防止人员和车辆接触。",
    category: "electrical",
  },
  {
    id: 69,
    question:
      "Federal Pacific Electric (FPE) Stab-Lok panels are a concern because:",
    options: [
      "Breakers may fail to trip during an overload or short circuit",
      "They are too large for modern homes",
      "They only work with aluminum wiring",
      "They make too much noise when operating",
    ],
    correctAnswer: 0,
    explanation:
      "FPE Stab-Lok配电板存在严重安全隐患，因为其断路器在过载或短路时可能无法正常跳闸。多项测试显示故障率很高。大多数检查员会建议由合格电工进行评估并考虑更换。",
    category: "electrical",
  },
  {
    id: 70,
    question:
      "Zinsco electrical panels are a known safety concern because:",
    options: [
      "They use fuses instead of breakers",
      "Breakers may melt to the bus bar and fail to trip",
      "They are not UL listed",
      "They only provide 30-amp service",
    ],
    correctAnswer: 1,
    explanation:
      "Zinsco配电板的问题是断路器可能熔接到母线上，导致无法正常跳闸。铝制母线可能氧化导致接触不良和过热。发现此类面板应建议由合格电工评估。",
    category: "electrical",
  },
  {
    id: 71,
    question:
      "What is the purpose of a bonding jumper on the water meter?",
    options: [
      "To measure water flow",
      "To prevent water hammer",
      "To ensure electrical grounding continuity when the water meter is removed",
      "To reduce water pressure",
    ],
    correctAnswer: 2,
    explanation:
      "水表上的跨接线确保在水表被拆除维修时，接地通路不会中断。如果没有跨接线，拆除水表会切断接地连续性，造成触电危险。",
    category: "electrical",
  },
  {
    id: 72,
    question:
      "The NEC requires that working space in front of an electrical panel be at least:",
    options: [
      "18 inches deep",
      "24 inches deep",
      "48 inches in all directions",
      "30 inches wide and 36 inches deep",
    ],
    correctAnswer: 3,
    explanation:
      "NEC要求电气面板前方至少有30英寸宽和36英寸深的工作空间。面板前方不能存放任何物品。这是为了确保电工能够安全地操作和维护电气设备。",
    category: "electrical",
  },
  {
    id: 73,
    question:
      "A tandem breaker (also called a cheater or slim breaker) is:",
    options: [
      "Two breakers in the space of one, each controlling a separate circuit",
      "Two separate breakers side by side",
      "A breaker that is always illegal",
      "A breaker rated for 240 volts only",
    ],
    correctAnswer: 0,
    explanation:
      "串联断路器是在一个标准断路器的空间中安装两个独立断路器，各自控制一个单独的电路。它们只能在设计允许的面板和位置中使用，不是在所有面板中都合法。",
    category: "electrical",
  },
  {
    id: 74,
    question:
      "What type of outlet is required within 6 feet of a kitchen sink?",
    options: [
      "Standard 15-amp outlet",
      "GFCI-protected outlet",
      "240-volt outlet",
      "No outlet is required near a sink",
    ],
    correctAnswer: 1,
    explanation:
      "厨房水槽6英尺范围内的所有插座都需要GFCI保护。实际上，NEC要求所有厨房操作台面插座都必须有GFCI保护，以防止在潮湿环境中发生触电事故。",
    category: "electrical",
  },
  {
    id: 75,
    question:
      "The maximum distance between receptacles along a wall in a habitable room is:",
    options: [
      "6 feet",
      "8 feet",
      "12 feet",
      "No requirement exists",
    ],
    correctAnswer: 2,
    explanation:
      "NEC要求居住房间沿墙壁的插座间距不超过12英尺（即任何沿墙点距离最近插座不超过6英尺）。这确保使用电器时不需要过长的延长线。",
    category: "electrical",
  },
  {
    id: 76,
    question:
      "What color wire is typically used for the grounding conductor in NM cable?",
    options: [
      "White",
      "Black",
      "Red",
      "Bare copper or green",
    ],
    correctAnswer: 3,
    explanation:
      "在NM电缆中，接地导线通常是裸铜线或绿色绝缘线。黑色是火线，白色是中性线。正确的颜色编码对于安全接线至关重要。",
    category: "electrical",
  },
  {
    id: 77,
    question:
      "A circuit breaker that repeatedly trips is most likely indicating:",
    options: [
      "An overloaded circuit, short circuit, or ground fault",
      "The breaker is too new",
      "The panel is too small",
      "Normal operation during winter",
    ],
    correctAnswer: 0,
    explanation:
      "断路器反复跳闸通常表示电路过载、短路或接地故障。不应简单地用更大的断路器替换，而应找出并解决根本原因。使用过大的断路器可能导致导线过热和火灾。",
    category: "electrical",
  },
  {
    id: 78,
    question:
      "In a standard 120V residential circuit, the white wire is the:",
    options: [
      "Hot conductor",
      "Neutral conductor",
      "Grounding conductor",
      "Switched conductor",
    ],
    correctAnswer: 1,
    explanation:
      "在标准120V住宅电路中，白色导线是中性线（回路导线）。它将电流从负载带回电源。中性线在主配电板处接地，但不能与设备接地线混淆。",
    category: "electrical",
  },
  {
    id: 79,
    question:
      "What is the purpose of a dedicated circuit for a refrigerator?",
    options: [
      "To make the refrigerator run faster",
      "To increase the refrigerator's energy efficiency",
      "To ensure the refrigerator has reliable power and is not affected by other loads on the circuit",
      "This is not required by any code",
    ],
    correctAnswer: 2,
    explanation:
      "冰箱使用专用电路可以确保其不受同一电路上其他负载的影响。当冰箱压缩机启动时，瞬间电流较大，如果与其他设备共享电路，可能导致跳闸。",
    category: "electrical",
  },
  {
    id: 80,
    question:
      "A GFCI receptacle should be tested how often?",
    options: [
      "Once every 5 years",
      "Once a year",
      "Only when installed",
      "Monthly",
    ],
    correctAnswer: 3,
    explanation:
      "GFCI插座应每月测试一次，以确保其正常工作。按下测试按钮应使插座断电，按下复位按钮应恢复供电。如果测试失败，应立即更换。",
    category: "electrical",
  },
  {
    id: 81,
    question:
      "What is the standard voltage for a residential electric dryer circuit?",
    options: [
      "240 volts",
      "120 volts",
      "208 volts",
      "277 volts",
    ],
    correctAnswer: 0,
    explanation:
      "住宅电烘干机使用240伏电路，通常需要30安培的断路器和10 AWG导线。240伏通过两根120伏火线的组合实现，提供烘干机加热元件所需的高功率。",
    category: "electrical",
  },
  {
    id: 82,
    question:
      "A home built in 1955 has a 60-amp fuse box. The home inspector should note:",
    options: [
      "This is adequate for modern needs",
      "The service may be inadequate for modern electrical demands and should be evaluated for upgrade",
      "This is a code violation requiring immediate repair",
      "Only the fuses need to be replaced",
    ],
    correctAnswer: 1,
    explanation:
      "60安培的保险丝箱对于现代家庭的用电需求通常是不够的。检查员应指出这一情况，并建议由合格电工评估是否需要升级到至少100或200安培的服务。",
    category: "electrical",
  },
  {
    id: 83,
    question:
      "Exposed wiring connections (wire nuts not in a junction box) are a defect because:",
    options: [
      "They look untidy",
      "They can cause electrical interference with appliances",
      "They are a fire and shock hazard; all connections must be in enclosed boxes",
      "They waste electricity",
    ],
    correctAnswer: 2,
    explanation:
      "所有电线连接必须在封闭的接线盒内进行。暴露的连接是火灾和触电隐患，因为连接处可能松动产生电弧或火花，而且没有盒子的保护容易被物理损坏。",
    category: "electrical",
  },
  {
    id: 84,
    question:
      "What is the correct way to handle a circuit with both GFCI and AFCI protection needs?",
    options: [
      "Install two separate breakers",
      "GFCI and AFCI cannot be on the same circuit",
      "Only GFCI is needed; AFCI is optional",
      "Use a dual-function AFCI/GFCI breaker or device",
    ],
    correctAnswer: 3,
    explanation:
      "当一个电路同时需要GFCI和AFCI保护时，可以使用双功能AFCI/GFCI断路器或设备。这在厨房等区域尤为常见，既需要防电弧保护也需要防漏电保护。",
    category: "electrical",
  },
  {
    id: 85,
    question:
      "The service entrance conductor connects the:",
    options: [
      "Utility meter to the main electrical panel",
      "Main panel to the subpanel",
      "Main panel to the first outlet",
      "Transformer to the electric meter",
    ],
    correctAnswer: 0,
    explanation:
      "进户线（Service entrance conductor）连接电表到主配电板。它是房屋电气系统中载流量最大的导线，其尺寸决定了整个电力服务的容量。",
    category: "electrical",
  },
  {
    id: 86,
    question:
      "An open ground on a 3-prong outlet means:",
    options: [
      "The outlet has too much power",
      "The grounding conductor is not connected",
      "The outlet is brand new",
      "The GFCI is tripped",
    ],
    correctAnswer: 1,
    explanation:
      "开路接地表示三孔插座的接地导线未连接。这是一个安全隐患，因为在设备故障时没有安全的电流泄放路径。常见于旧房改造时仅更换了插座但未添加接地线。",
    category: "electrical",
  },
  {
    id: 87,
    question:
      "The main disconnect for a residential electrical panel must be able to shut off power:",
    options: [
      "To individual circuits only",
      "Only to 240V circuits",
      "To all circuits with no more than six hand movements",
      "Only during an emergency",
    ],
    correctAnswer: 2,
    explanation:
      "NEC要求住宅主断路器能够在不超过六次手动操作内切断所有电路的电源（六断路器规则）。现在大多数安装使用单个主断路器一次切断所有电源。",
    category: "electrical",
  },
  {
    id: 88,
    question:
      "What is the typical amperage for a kitchen small appliance circuit?",
    options: [
      "15 amps",
      "30 amps",
      "40 amps",
      "20 amps",
    ],
    correctAnswer: 3,
    explanation:
      "厨房小型电器电路通常为20安培。NEC要求厨房至少有两个20安培的小型电器电路，专门为台面插座供电，以满足多个小型电器同时使用的需求。",
    category: "electrical",
  },
  {
    id: 89,
    question:
      "What is the primary risk of using a penny behind a fuse?",
    options: [
      "It eliminates overcurrent protection, creating a fire hazard",
      "It costs too much",
      "It causes the lights to flicker",
      "It reduces the voltage to the circuit",
    ],
    correctAnswer: 0,
    explanation:
      "在保险丝后面放硬币会使过载保护完全失效，因为硬币不会像保险丝那样在过流时熔断。这意味着电路在严重过载时也不会断开，极大增加了火灾风险。",
    category: "electrical",
  },
  {
    id: 90,
    question:
      "In a residential panel, the neutral bus bar and grounding bus bar should be bonded together:",
    options: [
      "In every panel",
      "Only in the main service panel",
      "Only in subpanels",
      "They should never be bonded",
    ],
    correctAnswer: 1,
    explanation:
      "中性母线和接地母线只应在主配电板中绑定在一起。在分电箱中，中性线和地线必须分开，以防止正常回路电流通过接地系统流动。",
    category: "electrical",
  },
  {
    id: 91,
    question:
      "What is the danger of using an extension cord as permanent wiring?",
    options: [
      "Extension cords are too short",
      "Extension cords use too much electricity",
      "Extension cords can overheat, become damaged, and create fire or tripping hazards",
      "Extension cords void the home warranty",
    ],
    correctAnswer: 2,
    explanation:
      "延长线作为永久接线使用会带来过热、物理损伤和绊倒风险。延长线不是设计用于永久安装的，其导线规格可能不足以长期承载负载，且不受建筑规范保护。",
    category: "electrical",
  },
  {
    id: 92,
    question:
      "A bathroom requires a minimum of how many electrical circuits?",
    options: [
      "No specific requirement",
      "Two 15-amp circuits",
      "One 30-amp circuit",
      "One dedicated 20-amp circuit",
    ],
    correctAnswer: 3,
    explanation:
      "浴室需要至少一个专用的20安培电路。该电路只能为浴室的插座供电。浴室照明可以在其他电路上。所有浴室插座必须有GFCI保护。",
    category: "electrical",
  },
  {
    id: 93,
    question:
      "An electrical panel with signs of rust, burn marks, or a burning smell indicates:",
    options: [
      "Potential overheating and a serious fire hazard requiring immediate evaluation",
      "Normal aging",
      "The panel was recently painted",
      "The panel needs a new cover",
    ],
    correctAnswer: 0,
    explanation:
      "配电板上的锈迹、烧痕或烧焦气味表明存在过热和严重的火灾隐患，需要立即由合格电工评估。这些迹象可能意味着连接松动、断路器故障或导线过载。",
    category: "electrical",
  },
  {
    id: 94,
    question:
      "What is the maximum overcurrent protection for a 14 AWG copper conductor?",
    options: [
      "10 amps",
      "15 amps",
      "20 amps",
      "25 amps",
    ],
    correctAnswer: 1,
    explanation:
      "14 AWG铜导线的最大过流保护为15安培。在14 AWG导线上使用20安培断路器是违规的，因为导线可能在断路器跳闸之前过热。导线规格必须与断路器额定值匹配。",
    category: "electrical",
  },
  {
    id: 95,
    question:
      "A receptacle tester shows 'open neutral'. What does this mean?",
    options: [
      "The ground wire is disconnected",
      "The hot wire is reversed",
      "The neutral (white) wire is not connected or has a break",
      "The outlet is working correctly",
    ],
    correctAnswer: 2,
    explanation:
      "开路中性线表示白色中性线未连接或断开。这会导致插座无法正常工作，并可能产生危险的电压条件。需要检查接线盒内的连接。",
    category: "electrical",
  },
  {
    id: 96,
    question:
      "Electric cable running through a bored hole in a stud should be at least how far from the edge of the stud?",
    options: [
      "No minimum distance required",
      "1/2 inch",
      "2 inches",
      "1-1/4 inches",
    ],
    correctAnswer: 3,
    explanation:
      "电缆穿过立柱上的钻孔时，孔的边缘距立柱边缘至少需要1-1/4英寸。如果达不到这个距离，必须安装钢制护板保护电缆免受钉子或螺丝的穿透。",
    category: "electrical",
  },
  {
    id: 97,
    question:
      "What type of conductor is used for a typical residential service entrance?",
    options: [
      "Two hot conductors, one neutral conductor, and one ground",
      "Single-conductor 120V only",
      "Three hot conductors only",
      "One hot conductor and one neutral",
    ],
    correctAnswer: 0,
    explanation:
      "典型的住宅进户线包含两根火线（各120V）、一根中性线和一根地线。两根火线组合可提供240V，单根火线与中性线组合提供120V。",
    category: "electrical",
  },
  {
    id: 98,
    question:
      "Outdoor receptacles must be:",
    options: [
      "120V only",
      "GFCI protected and have weatherproof covers",
      "Installed above 6 feet only",
      "Connected to a separate panel",
    ],
    correctAnswer: 1,
    explanation:
      "室外插座必须有GFCI保护和防水盖。NEC还要求在湿润位置使用'使用中'型（in-use type）防水盖，即使插头插入时也能保持防水性能。",
    category: "electrical",
  },
  {
    id: 99,
    question:
      "What is the minimum number of receptacles required in a standard residential garage?",
    options: [
      "None required",
      "Two standard receptacles",
      "One GFCI-protected receptacle",
      "Four receptacles on a dedicated circuit",
    ],
    correctAnswer: 2,
    explanation:
      "NEC要求车库至少安装一个GFCI保护的插座。车库中的所有插座都必须有GFCI保护。实际安装中通常会安装多个插座以满足使用需求。",
    category: "electrical",
  },
  {
    id: 100,
    question:
      "What size breaker is typically used for a residential electric water heater?",
    options: [
      "15 amps",
      "20 amps",
      "50 amps",
      "30 amps",
    ],
    correctAnswer: 3,
    explanation:
      "住宅电热水器通常使用30安培的断路器，配合10 AWG导线和240伏电路。具体要求取决于热水器的功率，但30安培/240伏是最常见的配置。",
    category: "electrical",
  },

  // ============================================================
  // PLUMBING SYSTEMS (Questions 101-150)
  // ============================================================
  {
    id: 101,
    question:
      "What is the most common pipe material used for residential water supply lines today?",
    options: [
      "Copper or PEX",
      "Galvanized steel",
      "Cast iron",
      "Lead",
    ],
    correctAnswer: 0,
    explanation:
      "目前住宅供水管最常用的材料是铜管和PEX管。PEX因其成本低、安装方便和耐冻性好而越来越普及。镀锌管和铅管已不再用于新安装。",
    category: "plumbing",
  },
  {
    id: 102,
    question:
      "Galvanized steel water pipes are a concern in older homes because:",
    options: [
      "They are too large in diameter",
      "They corrode internally, reducing water flow and pressure over time",
      "They are not compatible with modern fixtures",
      "They are more expensive than copper",
    ],
    correctAnswer: 1,
    explanation:
      "镀锌钢管的内壁会随时间腐蚀生锈，导致管内径缩小，水流量减少和水压降低。此外，锈蚀会使水变色。典型使用寿命为40-60年。",
    category: "plumbing",
  },
  {
    id: 103,
    question:
      "What is the purpose of a TPR (Temperature and Pressure Relief) valve on a water heater?",
    options: [
      "To regulate the water temperature for comfort",
      "To drain the tank for maintenance",
      "To release water if temperature or pressure exceeds safe limits, preventing explosion",
      "To filter sediment from the water",
    ],
    correctAnswer: 2,
    explanation:
      "TPR阀（温度压力安全阀）在热水器温度超过210°F或压力超过150 PSI时自动释放水，防止水箱爆炸。这是热水器最重要的安全装置，绝不能堵塞或移除。",
    category: "plumbing",
  },
  {
    id: 104,
    question:
      "The TPR valve discharge pipe on a water heater should terminate:",
    options: [
      "Connected directly to the drain system",
      "Back into the top of the water heater",
      "Into a sealed container",
      "Within 6 inches of the floor or outside the building",
    ],
    correctAnswer: 3,
    explanation:
      "TPR阀的排放管应终止于距地面6英寸以内或建筑物外部。排放管不能连接到排水系统，不能有阀门或弯头向上，管径不能小于阀门出口。",
    category: "plumbing",
  },
  {
    id: 105,
    question:
      "What is the typical lifespan of a standard residential tank water heater?",
    options: [
      "8-12 years",
      "3-5 years",
      "20-25 years",
      "30+ years",
    ],
    correctAnswer: 0,
    explanation:
      "标准储水式住宅热水器的典型使用寿命为8-12年。寿命取决于水质、维护情况和使用频率。定期排放沉淀物和更换阳极棒可以延长使用寿命。",
    category: "plumbing",
  },
  {
    id: 106,
    question:
      "PEX piping has become popular for residential plumbing because:",
    options: [
      "It is the only code-approved material",
      "It is flexible, resistant to freezing damage, and easy to install",
      "It lasts over 100 years guaranteed",
      "It does not require any fittings",
    ],
    correctAnswer: 1,
    explanation:
      "PEX管因其柔韧性好、耐冻（膨胀后可恢复）、安装简便、成本低于铜管等优点而广受欢迎。它可以弯曲穿过墙体，减少接头数量，降低漏水风险。",
    category: "plumbing",
  },
  {
    id: 107,
    question:
      "Cast iron drain pipes in older homes are a concern because:",
    options: [
      "They are too small for modern fixtures",
      "They are not approved for residential use",
      "They can rust through, develop cracks, and create blockages from internal corrosion",
      "They make too much noise",
    ],
    correctAnswer: 2,
    explanation:
      "铸铁排水管会随时间锈蚀穿孔、产生裂缝，内壁的锈蚀还会形成粗糙表面，容易积聚废物导致堵塞。铸铁管的典型寿命为50-75年。",
    category: "plumbing",
  },
  {
    id: 108,
    question:
      "What is the purpose of a plumbing trap (P-trap)?",
    options: [
      "To filter debris from wastewater",
      "To increase water pressure",
      "To connect the supply line to the drain",
      "To maintain a water seal that prevents sewer gases from entering the living space",
    ],
    correctAnswer: 3,
    explanation:
      "P型存水弯的作用是保持水封，防止下水道有害气体通过排水管进入室内。弯管中始终存留一定量的水，形成气密密封。每个排水口都需要一个存水弯。",
    category: "plumbing",
  },
  {
    id: 109,
    question:
      "What is the purpose of a plumbing vent system?",
    options: [
      "To allow air into the drain system for proper flow and to release sewer gases above the roof",
      "To provide hot water to upper floors",
      "To supply fresh air to the water heater",
      "To drain condensation from the HVAC system",
    ],
    correctAnswer: 0,
    explanation:
      "排水通气系统有两个主要作用：允许空气进入排水管保证排水顺畅（防止虹吸破坏水封），以及将下水道气体排放到屋顶上方安全区域。",
    category: "plumbing",
  },
  {
    id: 110,
    question:
      "Normal residential water pressure should be between:",
    options: [
      "10-20 PSI",
      "40-80 PSI",
      "100-120 PSI",
      "150-200 PSI",
    ],
    correctAnswer: 1,
    explanation:
      "正常住宅水压应在40-80 PSI之间。低于40 PSI可能导致水流不足，高于80 PSI会对管道和设备造成损害，并可能需要安装减压阀。",
    category: "plumbing",
  },
  {
    id: 111,
    question:
      "Water hammer is caused by:",
    options: [
      "Low water pressure",
      "Air in the hot water heater",
      "Sudden stoppage of water flow creating a pressure shock wave in the pipes",
      "A clogged drain",
    ],
    correctAnswer: 2,
    explanation:
      "水锤（Water hammer）是由水流突然停止时产生的压力冲击波造成的管道撞击声。常见于快速关闭的阀门（如洗衣机进水阀）。可通过安装水锤吸收器来解决。",
    category: "plumbing",
  },
  {
    id: 112,
    question:
      "A pressure reducing valve (PRV) is typically needed when incoming water pressure exceeds:",
    options: [
      "40 PSI",
      "60 PSI",
      "100 PSI",
      "80 PSI",
    ],
    correctAnswer: 3,
    explanation:
      "当进水压力超过80 PSI时，通常需要安装减压阀。过高的水压会损坏管道接头、阀门和电器，还会导致水锤和水龙头漏水。",
    category: "plumbing",
  },
  {
    id: 113,
    question:
      "Polybutylene (PB) pipes, commonly gray in color, are a concern because:",
    options: [
      "They are known to deteriorate from chlorine in water and can fail unexpectedly",
      "They are too rigid and crack easily",
      "They are not approved for indoor use",
      "They are too small in diameter",
    ],
    correctAnswer: 0,
    explanation:
      "聚丁烯管（PB管，通常灰色）因与水中氯接触后会老化降解，可能突然破裂导致严重水损而臭名昭著。这种管材在1978-1995年间广泛使用，现已被PEX取代。",
    category: "plumbing",
  },
  {
    id: 114,
    question:
      "What is the minimum slope required for a horizontal drain pipe?",
    options: [
      "1/16 inch per foot",
      "1/8 inch per foot for pipes 3 inches or less; 1/4 inch per foot is common",
      "1/2 inch per foot",
      "1 inch per foot",
    ],
    correctAnswer: 1,
    explanation:
      "水平排水管的最小坡度为：3英寸及以下管径的管道每英尺1/4英寸，大于3英寸管径的管道每英尺1/8英寸。正确的坡度确保废水能够依靠重力顺畅流动。",
    category: "plumbing",
  },
  {
    id: 115,
    question:
      "What should a home inspector do if they notice the water heater has no seismic strapping in California?",
    options: [
      "Ignore it; seismic strapping is optional",
      "Recommend replacing the water heater",
      "Note it as a deficiency; California requires seismic strapping on water heaters",
      "Test the water heater for gas leaks",
    ],
    correctAnswer: 2,
    explanation:
      "在加利福尼亚州，法律要求热水器必须安装地震固定带（至少上下各一条）。这是为了防止地震时热水器倾倒，造成水损害、燃气泄漏或火灾。",
    category: "plumbing",
  },
  {
    id: 116,
    question:
      "The main water shut-off valve for a house is typically located:",
    options: [
      "On the roof",
      "In the attic",
      "Next to the water heater only",
      "Near where the water main enters the house, often in the basement, crawl space, or near the front exterior",
    ],
    correctAnswer: 3,
    explanation:
      "主供水关闭阀通常位于水管进入房屋的位置附近，常见于地下室、爬行空间入口处或房屋前部外墙附近。每位住户都应知道其位置，以便紧急情况下快速关闭。",
    category: "plumbing",
  },
  {
    id: 117,
    question:
      "Cross-connection in plumbing refers to:",
    options: [
      "A connection between the potable water supply and a non-potable source",
      "Two pipes crossing each other in a wall",
      "Connecting copper to PVC pipe",
      "Running hot and cold water lines parallel",
    ],
    correctAnswer: 0,
    explanation:
      "交叉连接是指饮用水供水系统与非饮用水源之间的连接，可能导致污染水倒流进入饮用水系统。防回流装置（backflow preventers）用于防止此类污染。",
    category: "plumbing",
  },
  {
    id: 118,
    question:
      "An S-trap under a sink is a concern because:",
    options: [
      "It is too expensive to maintain",
      "It can lose its water seal through siphoning, allowing sewer gases to enter",
      "It clogs more easily than a P-trap",
      "It is made of inferior materials",
    ],
    correctAnswer: 1,
    explanation:
      "S型存水弯（排水管直接向下进入地板）容易因虹吸作用失去水封，从而让下水道气体进入室内。现代规范要求使用P型存水弯，通过通气管防止虹吸。",
    category: "plumbing",
  },
  {
    id: 119,
    question:
      "What type of pipe fitting should be used to connect copper to galvanized steel pipe?",
    options: [
      "A standard coupling",
      "Solder only",
      "A dielectric union or brass fitting to prevent galvanic corrosion",
      "No special fitting is needed",
    ],
    correctAnswer: 2,
    explanation:
      "铜管与镀锌钢管连接时必须使用电介质接头（dielectric union）或黄铜接头。不同金属直接接触会产生电化学腐蚀（电偶腐蚀），加速管道损坏。",
    category: "plumbing",
  },
  {
    id: 120,
    question:
      "The recommended temperature setting for a residential water heater is:",
    options: [
      "100°F",
      "140°F",
      "160°F",
      "120°F",
    ],
    correctAnswer: 3,
    explanation:
      "住宅热水器的推荐温度设置为120°F（约49°C）。这个温度足以满足日常使用需求，同时降低烫伤风险并减少能源消耗。高于120°F会增加烫伤危险。",
    category: "plumbing",
  },
  {
    id: 121,
    question:
      "A plumbing cleanout provides:",
    options: [
      "Access to the drain system for clearing blockages",
      "A connection point for a garden hose",
      "A place to add water treatment chemicals",
      "An overflow protection device",
    ],
    correctAnswer: 0,
    explanation:
      "排水清扫口提供进入排水系统的通道，用于清除堵塞物。清扫口应安装在排水管方向改变处和靠近建筑出口处，便于使用清管工具。",
    category: "plumbing",
  },
  {
    id: 122,
    question:
      "What is the purpose of an anode rod in a tank water heater?",
    options: [
      "To heat the water",
      "To attract corrosive elements and protect the tank from rusting",
      "To filter sediment",
      "To regulate water temperature",
    ],
    correctAnswer: 1,
    explanation:
      "阳极棒（通常为镁或铝制）通过牺牲自身来吸引水中的腐蚀性元素，保护水箱内壁不生锈。阳极棒消耗完后，水箱会开始腐蚀。建议每3-5年检查和更换。",
    category: "plumbing",
  },
  {
    id: 123,
    question:
      "ABS (Acrylonitrile Butadiene Styrene) drain pipe can be identified by its:",
    options: [
      "White color",
      "Green color",
      "Black color",
      "Copper color",
    ],
    correctAnswer: 2,
    explanation:
      "ABS排水管为黑色，是一种常见的住宅排水管材料。PVC排水管为白色。两者都是塑料管，但使用不同的粘合剂。某些地区可能不允许混合使用ABS和PVC。",
    category: "plumbing",
  },
  {
    id: 124,
    question:
      "A running toilet is most commonly caused by:",
    options: [
      "High water pressure",
      "A cracked toilet bowl",
      "A blocked vent pipe",
      "A faulty flapper valve or fill valve",
    ],
    correctAnswer: 3,
    explanation:
      "马桶不停冲水最常见的原因是挡板阀（flapper）老化变形导致密封不严，或进水阀（fill valve）故障。挡板阀是橡胶件，通常几年后就需要更换。",
    category: "plumbing",
  },
  {
    id: 125,
    question:
      "What is the purpose of a backflow preventer?",
    options: [
      "To prevent contaminated water from flowing back into the potable water supply",
      "To increase water pressure",
      "To filter sediment",
      "To reduce water hammer",
    ],
    correctAnswer: 0,
    explanation:
      "防回流装置的作用是防止被污染的水倒流回饮用水供水系统。这在灌溉系统、游泳池填充管线和其他可能存在交叉连接的地方尤其重要。",
    category: "plumbing",
  },
  {
    id: 126,
    question:
      "What is the typical capacity range for a residential tank water heater?",
    options: [
      "10-20 gallons",
      "30-80 gallons",
      "100-150 gallons",
      "200+ gallons",
    ],
    correctAnswer: 1,
    explanation:
      "住宅储水式热水器的典型容量范围为30-80加仑。40-50加仑适合2-4人家庭，较大家庭可能需要50-80加仑。容量选择取决于家庭成员数量和用水习惯。",
    category: "plumbing",
  },
  {
    id: 127,
    question:
      "Gurgling sounds from a drain typically indicate:",
    options: [
      "Normal drainage",
      "High water pressure",
      "A venting problem or partial blockage in the drain system",
      "A new garbage disposal",
    ],
    correctAnswer: 2,
    explanation:
      "排水管发出咕噜声通常表明通气系统有问题或排水管部分堵塞。不充分的通气会导致排水时空气被吸入存水弯，产生咕噜声，并可能破坏水封。",
    category: "plumbing",
  },
  {
    id: 128,
    question:
      "What type of water supply pipe has a bluish-green patina and is typically found in homes built from the 1950s onward?",
    options: [
      "Galvanized steel",
      "PVC",
      "Lead",
      "Copper",
    ],
    correctAnswer: 3,
    explanation:
      "铜管会随时间在表面形成蓝绿色的铜锈（patina）。铜管从1950年代开始广泛用于住宅供水系统，因其耐用、抗菌且不易腐蚀。",
    category: "plumbing",
  },
  {
    id: 129,
    question:
      "A toilet that rocks on its base may indicate:",
    options: [
      "A deteriorated wax ring seal or an uneven floor, which can lead to leaks",
      "Normal wear and tear",
      "The water pressure is too high",
      "The tank is too full",
    ],
    correctAnswer: 0,
    explanation:
      "马桶在底座上晃动通常表明蜡环密封已损坏或地板不平。晃动会破坏蜡环密封，导致污水渗漏到地板下方，可能造成地板腐烂和卫生问题。",
    category: "plumbing",
  },
  {
    id: 130,
    question:
      "The minimum pipe size for a residential main sewer line is typically:",
    options: [
      "1-1/2 inches",
      "4 inches",
      "2 inches",
      "3 inches",
    ],
    correctAnswer: 1,
    explanation:
      "住宅主下水管的最小管径通常为4英寸。这个尺寸能够处理整栋房屋的废水流量，并减少堵塞的风险。从房屋到市政下水道的管段也通常使用4英寸管。",
    category: "plumbing",
  },
  {
    id: 131,
    question:
      "Supply line shut-off valves (fixture stops) should be located:",
    options: [
      "In the attic",
      "Only at the water meter",
      "At each plumbing fixture for easy isolation",
      "In the garage",
    ],
    correctAnswer: 2,
    explanation:
      "每个用水设备（水龙头、马桶、热水器等）处都应安装单独的关闭阀。这样在维修某个设备时可以只关闭该设备的供水，而不影响整栋房屋的用水。",
    category: "plumbing",
  },
  {
    id: 132,
    question:
      "Blue-green staining on fixtures served by copper pipes indicates:",
    options: [
      "Hard water deposits",
      "Iron in the water",
      "Chlorine treatment",
      "Copper pipe corrosion, often from acidic water",
    ],
    correctAnswer: 3,
    explanation:
      "用水设备上的蓝绿色污渍表明铜管正在被腐蚀，通常是由酸性水（低pH值）造成的。长期腐蚀会导致管壁变薄，最终产生针孔泄漏。",
    category: "plumbing",
  },
  {
    id: 133,
    question:
      "A tankless (on-demand) water heater advantages include all of the following EXCEPT:",
    options: [
      "Lower initial purchase and installation cost than tank heaters",
      "Unlimited hot water supply",
      "Lower energy consumption for typical use",
      "Longer lifespan than tank heaters",
    ],
    correctAnswer: 0,
    explanation:
      "无水箱热水器的初始购买和安装成本通常高于传统储水式热水器。但它们的优点包括无限热水供应、较低的能耗和更长的使用寿命（通常20年以上）。",
    category: "plumbing",
  },
  {
    id: 134,
    question:
      "Lead pipes in a home's plumbing system are identified by:",
    options: [
      "A bright silver appearance and hardness",
      "A dull gray color that is soft and can be easily scratched with a key",
      "Green coloring and rigid structure",
      "Black color with threaded fittings",
    ],
    correctAnswer: 1,
    explanation:
      "铅管外观为暗灰色，质地柔软，可以用钥匙轻松刮出亮色划痕。铅管在1950年代之前常用于供水管和排水管。铅管是严重的健康隐患，应建议更换。",
    category: "plumbing",
  },
  {
    id: 135,
    question:
      "What is the most common cause of low water pressure throughout a house?",
    options: [
      "A broken toilet flapper",
      "A running faucet",
      "Corroded or clogged galvanized supply pipes, a partially closed main valve, or a faulty PRV",
      "Cold weather only",
    ],
    correctAnswer: 2,
    explanation:
      "全屋水压低的最常见原因包括：镀锌供水管内部腐蚀堵塞、主供水阀未完全打开、减压阀（PRV）故障或设定过低。需要系统地检查以确定具体原因。",
    category: "plumbing",
  },
  {
    id: 136,
    question:
      "A vent pipe that terminates too close to a window can cause:",
    options: [
      "Water damage to the window",
      "Increased water pressure",
      "Roof leaks",
      "Sewer gases to enter the home through the window",
    ],
    correctAnswer: 3,
    explanation:
      "通气管终端如果太靠近窗户，下水道气体可能通过打开的窗户进入室内。规范通常要求通气管终端距可打开窗户至少10英尺，或高于窗户顶部至少3英尺。",
    category: "plumbing",
  },
  {
    id: 137,
    question:
      "CPVC (Chlorinated Polyvinyl Chloride) pipe is used for:",
    options: [
      "Both hot and cold water supply lines",
      "Drain lines only",
      "Gas lines",
      "Vent pipes only",
    ],
    correctAnswer: 0,
    explanation:
      "CPVC管可用于冷水和热水供水管。与普通PVC不同，CPVC经过氯化处理，能承受更高的温度（最高200°F），因此可以用于热水管线。",
    category: "plumbing",
  },
  {
    id: 138,
    question:
      "What is a common indication that a home's sewer line has root intrusion?",
    options: [
      "High water pressure",
      "Slow drains throughout the house and recurring backups",
      "Hot water only from faucets",
      "Blue-green staining on fixtures",
    ],
    correctAnswer: 1,
    explanation:
      "树根侵入下水管的常见迹象包括全屋排水缓慢、反复堵塞和下水道回流。树根会从管道接头处侵入，在管内生长并逐渐堵塞管道。",
    category: "plumbing",
  },
  {
    id: 139,
    question:
      "What material should NOT be used for hot water supply lines?",
    options: [
      "Copper",
      "CPVC",
      "PVC (Schedule 40 white pipe)",
      "PEX",
    ],
    correctAnswer: 2,
    explanation:
      "普通PVC管（白色Schedule 40）不能用于热水供水管，因为它在高温下会变形和降解。PVC仅适用于冷水供水和排水管。热水管应使用铜管、CPVC或PEX。",
    category: "plumbing",
  },
  {
    id: 140,
    question:
      "A water heater's expansion tank is designed to:",
    options: [
      "Store extra hot water for peak demand",
      "Filter the water before heating",
      "Boost water pressure",
      "Absorb the increased water volume caused by thermal expansion in a closed system",
    ],
    correctAnswer: 3,
    explanation:
      "膨胀水箱用于在封闭系统中吸收水加热时体积增加产生的压力。当安装了防回流装置后，系统变为封闭系统，热膨胀的水无法回流到市政管道，需要膨胀水箱来缓解压力。",
    category: "plumbing",
  },
  {
    id: 141,
    question:
      "Orangeburg pipe was made from:",
    options: [
      "Compressed wood fiber and tar (bituminized fiber)",
      "Concrete",
      "Terracotta clay",
      "Stainless steel",
    ],
    correctAnswer: 0,
    explanation:
      "Orangeburg管由压缩木纤维和沥青制成，1940-1970年代用于下水管。这种管材极易变形、塌陷和被根系侵入，使用寿命通常只有30-50年，发现后通常建议更换。",
    category: "plumbing",
  },
  {
    id: 142,
    question:
      "A mixing valve (anti-scald valve) at a shower is designed to:",
    options: [
      "Increase water pressure",
      "Limit the maximum hot water temperature to prevent scalding",
      "Mix hot and cold water for energy savings",
      "Filter the water",
    ],
    correctAnswer: 1,
    explanation:
      "防烫混合阀通过限制热水最高温度来防止烫伤。当冷水突然中断时（如其他地方同时用水），混合阀会自动调整或切断热水，防止淋浴者被烫伤。",
    category: "plumbing",
  },
  {
    id: 143,
    question:
      "What is the function of a garbage disposal's reset button?",
    options: [
      "To change the speed of the motor",
      "To reverse the grinding direction",
      "To reset the internal overload protector after the motor has overheated or jammed",
      "To drain the disposal",
    ],
    correctAnswer: 2,
    explanation:
      "垃圾处理器的复位按钮是过载保护器。当电机过热或卡住时，过载保护器会自动跳开以防止电机烧毁。清除堵塞后按下复位按钮可恢复正常运行。",
    category: "plumbing",
  },
  {
    id: 144,
    question:
      "When is a sewage ejector pump needed?",
    options: [
      "In every home with a basement",
      "Only for homes on well water",
      "When water pressure is too high",
      "When plumbing fixtures are below the level of the main sewer line",
    ],
    correctAnswer: 3,
    explanation:
      "当管道设备（如地下室卫生间）低于主下水管水平时，需要安装污水泵将废水提升到主下水管的高度。污水泵安装在密封的水坑中，自动检测水位并启动。",
    category: "plumbing",
  },
  {
    id: 145,
    question:
      "A dripping faucet wastes approximately how much water per year?",
    options: [
      "About 3,000 gallons or more",
      "About 50 gallons",
      "About 500 gallons",
      "Less than 10 gallons",
    ],
    correctAnswer: 0,
    explanation:
      "一个滴水的水龙头每年可浪费约3,000加仑或更多的水。即使每秒一滴看似很少，但积累起来是惊人的。及时修理滴水龙头既节约用水又节省水费。",
    category: "plumbing",
  },
  {
    id: 146,
    question:
      "Discolored or rusty hot water that clears after running for a few minutes likely comes from:",
    options: [
      "The city water supply",
      "Sediment or corrosion in the water heater tank",
      "A broken water main",
      "Copper pipe corrosion",
    ],
    correctAnswer: 1,
    explanation:
      "热水一开始有锈色但运行几分钟后变清，通常表明热水器水箱内部有沉淀物或腐蚀。定期排放热水器底部的沉淀物可以减少这种情况。如果严重，可能需要更换热水器。",
    category: "plumbing",
  },
  {
    id: 147,
    question:
      "What is the minimum distance a plumbing vent must extend above the roof surface?",
    options: [
      "2 inches",
      "12 inches",
      "6 inches (or more in snow regions)",
      "24 inches",
    ],
    correctAnswer: 2,
    explanation:
      "排水通气管至少需要高出屋面6英寸。在积雪地区，需要延伸到预期积雪线以上，通常至少12英寸，以防止积雪堵塞通气口。",
    category: "plumbing",
  },
  {
    id: 148,
    question:
      "A whole-house water filtration system is typically installed:",
    options: [
      "At each individual faucet",
      "On the hot water line only",
      "In the attic",
      "On the main water supply line after the shut-off valve",
    ],
    correctAnswer: 3,
    explanation:
      "全屋净水系统通常安装在主供水管上，位于主关闭阀之后。这样可以过滤进入整栋房屋的所有水。单独的龙头过滤器只能过滤该龙头的水。",
    category: "plumbing",
  },
  {
    id: 149,
    question:
      "Flexible braided stainless steel supply lines are preferred over rigid chromed supply tubes because:",
    options: [
      "They are easier to install, resist kinking, and accommodate slight misalignment",
      "They are cheaper",
      "They last longer than any other material",
      "They increase water pressure",
    ],
    correctAnswer: 0,
    explanation:
      "不锈钢编织软管比刚性镀铬供水管更容易安装，不会弯折，并且可以适应轻微的错位。它们也更耐用，减少了漏水的风险。但仍建议定期检查是否有老化迹象。",
    category: "plumbing",
  },
  {
    id: 150,
    question:
      "A home inspector notices the water heater flue pipe has a downward slope toward the unit. This is a problem because:",
    options: [
      "It causes excessive noise",
      "Combustion gases may not draft properly and could spill into the living space",
      "It reduces water heating efficiency",
      "It voids the plumbing warranty only",
    ],
    correctAnswer: 1,
    explanation:
      "热水器烟道管应向上倾斜通向烟囱或排气口。向下倾斜会导致燃烧废气（包括一氧化碳）无法正确排出，可能倒灌进入室内，造成严重的安全隐患。",
    category: "plumbing",
  },

  // ============================================================
  // HVAC SYSTEMS (Questions 151-170)
  // ============================================================
  {
    id: 151,
    question:
      "What does HVAC stand for?",
    options: [
      "High Voltage Alternating Current",
      "Home Ventilation and Cooling",
      "Heating, Ventilation, and Air Conditioning",
      "Heat Valve and Condenser",
    ],
    correctAnswer: 2,
    explanation:
      "HVAC代表Heating, Ventilation, and Air Conditioning（暖通空调），包括住宅和商业建筑中的供暖、通风和空气调节系统。",
    category: "hvac",
  },
  {
    id: 152,
    question:
      "A cracked heat exchanger in a gas furnace is a serious concern because:",
    options: [
      "It reduces heating efficiency",
      "It causes the furnace to be noisy",
      "It increases the gas bill slightly",
      "It can allow carbon monoxide and combustion gases to enter the living space",
    ],
    correctAnswer: 3,
    explanation:
      "燃气炉热交换器开裂是严重的安全隐患，因为裂缝会让一氧化碳等有毒燃烧废气进入供暖气流并散布到整个居住空间。发现裂缝应立即停止使用并更换。",
    category: "hvac",
  },
  {
    id: 153,
    question:
      "What does the SEER rating measure for an air conditioning system?",
    options: [
      "The seasonal energy efficiency ratio - cooling output divided by energy input",
      "The noise level of the unit",
      "The maximum cooling capacity in square feet",
      "The lifespan of the compressor",
    ],
    correctAnswer: 0,
    explanation:
      "SEER（季节能效比）是衡量空调系统效率的指标，等于一个制冷季节的总制冷输出（BTU）除以总能耗（瓦时）。SEER值越高，系统越节能。现行最低标准为14-15 SEER。",
    category: "hvac",
  },
  {
    id: 154,
    question:
      "What is the typical lifespan of a residential central air conditioning unit?",
    options: [
      "5-8 years",
      "15-20 years",
      "10-15 years",
      "25-30 years",
    ],
    correctAnswer: 1,
    explanation:
      "住宅中央空调的典型使用寿命为15-20年。寿命取决于维护质量、使用频率和安装条件。定期维护（清洗、更换滤网等）可以延长使用寿命。",
    category: "hvac",
  },
  {
    id: 155,
    question:
      "The condensate drain line from an air conditioning unit removes:",
    options: [
      "Refrigerant",
      "Dust and debris",
      "Moisture (water) that condenses on the evaporator coil",
      "Combustion gases",
    ],
    correctAnswer: 2,
    explanation:
      "冷凝水排放管排出在蒸发器盘管上凝结的水分。当温暖潮湿的空气经过冷的蒸发器盘管时，水蒸气凝结成水。如果排放管堵塞，水可能溢出造成水损。",
    category: "hvac",
  },
  {
    id: 156,
    question:
      "How often should a standard HVAC air filter be replaced?",
    options: [
      "Once a year",
      "Every 5 years",
      "Only when the system stops working",
      "Every 1-3 months depending on the filter type and conditions",
    ],
    correctAnswer: 3,
    explanation:
      "标准HVAC空气滤网应每1-3个月更换一次，具体取决于滤网类型、家中是否有宠物、过敏者以及使用频率。脏滤网会降低气流、增加能耗并损害系统。",
    category: "hvac",
  },
  {
    id: 157,
    question:
      "BTU stands for and is used to measure:",
    options: [
      "British Thermal Unit; heating and cooling capacity",
      "Basic Thermal Unit; electrical capacity",
      "Building Temperature Unit; insulation rating",
      "Balanced Thermostat Unit; thermostat accuracy",
    ],
    correctAnswer: 0,
    explanation:
      "BTU（英国热量单位）用于衡量供暖和制冷能力。一个BTU是将一磅水的温度升高一华氏度所需的热量。住宅炉子通常为40,000-120,000 BTU。",
    category: "hvac",
  },
  {
    id: 158,
    question:
      "A furnace with a blue flame at the burners indicates:",
    options: [
      "The furnace is overheating",
      "Proper and efficient combustion",
      "The gas pressure is too low",
      "A cracked heat exchanger",
    ],
    correctAnswer: 1,
    explanation:
      "燃气炉燃烧器上的蓝色火焰表明燃烧正常且高效。黄色或橙色火焰表示燃烧不完全，可能产生过多的一氧化碳。火焰颜色是检查燃气设备的重要指标。",
    category: "hvac",
  },
  {
    id: 159,
    question:
      "The outdoor unit of a split-system air conditioner contains:",
    options: [
      "The evaporator coil and blower",
      "The thermostat and filter",
      "The compressor and condenser coil",
      "The ductwork connections",
    ],
    correctAnswer: 2,
    explanation:
      "分体式空调的室外机包含压缩机和冷凝器盘管（以及冷凝器风扇）。室内机包含蒸发器盘管和鼓风机。制冷剂管线连接室内外两个部分。",
    category: "hvac",
  },
  {
    id: 160,
    question:
      "What is the recommended clearance around an outdoor AC condenser unit?",
    options: [
      "No clearance is needed",
      "At least 6 feet on all sides",
      "Only the top needs clearance",
      "At least 12-24 inches on all sides for proper airflow",
    ],
    correctAnswer: 3,
    explanation:
      "室外空调冷凝器周围应至少保持12-24英寸的净空间（顶部更多）以确保良好的空气流通。植被、围栏或其他障碍物太近会限制气流，降低效率并导致过热。",
    category: "hvac",
  },
  {
    id: 161,
    question:
      "What is the purpose of a secondary (auxiliary) condensate drain pan under an attic-mounted air handler?",
    options: [
      "To catch condensate if the primary drain line clogs, preventing water damage to the ceiling below",
      "To collect dust",
      "To reduce noise",
      "To improve cooling efficiency",
    ],
    correctAnswer: 0,
    explanation:
      "安装在阁楼中的空调机组下方的辅助接水盘是安全装置，当主排水管堵塞时收集溢出的冷凝水，防止水损坏下方的天花板。辅助盘应有独立的排水管线。",
    category: "hvac",
  },
  {
    id: 162,
    question:
      "Ductwork that is poorly sealed or disconnected can result in:",
    options: [
      "Improved air quality",
      "Energy loss, uneven temperatures, and dust/moisture issues",
      "Lower utility bills",
      "Better humidity control",
    ],
    correctAnswer: 1,
    explanation:
      "风管密封不良或脱落会导致大量能量损失（可达30%），房间温度不均匀，灰尘进入管道系统，以及在非调节空间（如阁楼）产生湿气问题。",
    category: "hvac",
  },
  {
    id: 163,
    question:
      "A high-efficiency furnace (90%+ AFUE) typically uses what type of venting?",
    options: [
      "Standard metal chimney flue",
      "No venting is needed",
      "PVC pipe for intake and exhaust (direct vent)",
      "Copper pipe",
    ],
    correctAnswer: 2,
    explanation:
      "高效率（90%+AFUE）冷凝式燃气炉使用PVC管排气。由于排气温度较低（废气中水蒸气已冷凝），不需要金属烟囱。通常使用两根PVC管，一根进气一根排气。",
    category: "hvac",
  },
  {
    id: 164,
    question:
      "What does AFUE stand for and what does it measure?",
    options: [
      "Air Flow Unit Evaluation; measures ductwork performance",
      "Average Furnace Usage Estimate; measures furnace lifespan",
      "Automatic Fuel Use Estimator; measures gas usage",
      "Annual Fuel Utilization Efficiency; measures furnace efficiency",
    ],
    correctAnswer: 3,
    explanation:
      "AFUE（年燃料利用效率）衡量燃气炉将燃料转化为热量的效率。例如，95% AFUE意味着95%的燃料能量转化为有用的热量，只有5%损失在排气中。",
    category: "hvac",
  },
  {
    id: 165,
    question:
      "The thermostat should be located:",
    options: [
      "On an interior wall away from direct sunlight, drafts, and heat sources",
      "Near a window for accurate outdoor temperature reading",
      "In the garage",
      "Near the furnace",
    ],
    correctAnswer: 0,
    explanation:
      "温控器应安装在内墙上，远离阳光直射、穿堂风、热源（如灯具、电器）和外墙。不当的位置会导致温控器读数不准确，系统频繁启停或温度不均匀。",
    category: "hvac",
  },
  {
    id: 166,
    question:
      "What is the typical temperature differential (delta T) between the supply and return air in a properly functioning AC system?",
    options: [
      "5-8°F",
      "14-22°F",
      "30-35°F",
      "40-50°F",
    ],
    correctAnswer: 1,
    explanation:
      "正常运行的空调系统，送风和回风之间的温差应在14-22°F之间。温差过小可能表示制冷剂不足、蒸发器盘管脏或气流问题。温差过大可能表示气流不足。",
    category: "hvac",
  },
  {
    id: 167,
    question:
      "A heat pump differs from a standard air conditioner because it can:",
    options: [
      "Only cool the home more efficiently",
      "Run without electricity",
      "Both heat and cool by reversing the refrigerant cycle",
      "Only heat using gas",
    ],
    correctAnswer: 2,
    explanation:
      "热泵与标准空调的区别在于它可以通过反转制冷剂循环来提供制冷和供暖两种功能。在制热模式下，它从室外空气中提取热量并传递到室内。",
    category: "hvac",
  },
  {
    id: 168,
    question:
      "What is the primary danger of a blocked or disconnected furnace flue pipe?",
    options: [
      "Reduced heating efficiency",
      "Increased noise",
      "Higher gas bills",
      "Carbon monoxide poisoning from combustion gases entering the living space",
    ],
    correctAnswer: 3,
    explanation:
      "燃气炉烟道管堵塞或脱落的最大危险是一氧化碳中毒。燃烧废气无法正常排出时会倒灌进入居住空间。一氧化碳是无色无味的致命气体，必须立即修复。",
    category: "hvac",
  },
  {
    id: 169,
    question:
      "Flexible ductwork should be installed:",
    options: [
      "Fully stretched and supported to minimize sagging and airflow restriction",
      "With as many bends as possible to slow airflow",
      "Compressed and bunched up to save space",
      "Without any insulation",
    ],
    correctAnswer: 0,
    explanation:
      "柔性风管应完全拉伸并支撑好，避免下垂和弯曲过度。过度下垂、弯折或压缩会严重限制空气流通，降低系统效率，导致某些房间供暖或制冷不足。",
    category: "hvac",
  },
  {
    id: 170,
    question:
      "What component in an HVAC system is responsible for removing humidity from indoor air during cooling?",
    options: [
      "The condenser coil",
      "The evaporator coil",
      "The compressor",
      "The thermostat",
    ],
    correctAnswer: 1,
    explanation:
      "蒸发器盘管负责在制冷过程中去除室内空气中的湿度。当温暖潮湿的空气通过冷的蒸发器盘管时，水蒸气凝结在盘管表面，从而降低空气湿度。这就是空调的除湿功能。",
    category: "hvac",
  },
];
