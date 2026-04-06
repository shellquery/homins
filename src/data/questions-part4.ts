import type { Question } from "./questions";

export const questionsPart4: Question[] = [
  // ========== STRUCTURAL (501-650) ==========
  {
    id: 501,
    question: "What is the primary purpose of a seismic retrofit on an older California home?",
    options: [
      "To improve the home's energy efficiency",
      "To strengthen the structure against earthquake forces",
      "To increase the home's resale value",
      "To comply with fire safety codes",
    ],
    correctAnswer: 1,
    explanation:
      "抗震加固的主要目的是增强建筑结构抵御地震力的能力。在加州，许多老旧房屋需要进行抗震改造以提高其在地震中的安全性。",
    category: "structural",
  },
  {
    id: 502,
    question: "Which type of building is classified as a 'soft-story' structure in California?",
    options: [
      "A single-story home with a concrete slab foundation",
      "A multi-story building with a weak first floor, often with parking or large openings",
      "A building constructed entirely of unreinforced masonry",
      "A home built on a hillside with a cantilevered deck",
    ],
    correctAnswer: 1,
    explanation:
      "软层建筑是指多层建筑中第一层较弱的结构，通常底层有大面积的停车空间或开口。在地震中，这种结构容易在底层发生倒塌。加州多个城市已要求对软层建筑进行强制加固。",
    category: "structural",
  },
  {
    id: 503,
    question: "What is the main structural concern with unreinforced masonry (URM) buildings in seismic zones?",
    options: [
      "They are prone to termite damage",
      "They lack the ductility to absorb earthquake energy and may collapse",
      "They have excessive thermal mass causing overheating",
      "They are difficult to insulate properly",
    ],
    correctAnswer: 1,
    explanation:
      "未加固砌体（URM）建筑在地震区的主要结构问题是缺乏延展性，无法有效吸收地震能量，在强烈地震中容易发生倒塌。加州已经淘汰了大部分URM建筑或要求进行加固。",
    category: "structural",
  },
  {
    id: 504,
    question: "Helical piers are most commonly used for which foundation repair application?",
    options: [
      "Repairing cracks in concrete block walls",
      "Stabilizing and lifting foundations affected by settlement",
      "Waterproofing basement walls",
      "Reinforcing roof trusses",
    ],
    correctAnswer: 1,
    explanation:
      "螺旋桩最常用于稳定和抬升因沉降而受影响的地基。螺旋桩通过旋入承载土层来提供支撑力，是修复沉降地基的有效方法。",
    category: "structural",
  },
  {
    id: 505,
    question: "Carbon fiber reinforcement strips are typically applied to foundation walls to address what issue?",
    options: [
      "Rising damp and moisture intrusion",
      "Horizontal cracking and bowing caused by lateral soil pressure",
      "Vertical settlement cracks",
      "Insect and pest damage",
    ],
    correctAnswer: 1,
    explanation:
      "碳纤维加固条通常用于修复因侧向土压力导致的水平裂缝和墙体弯曲。碳纤维具有极高的抗拉强度，可以有效防止墙体进一步变形。",
    category: "structural",
  },
  {
    id: 506,
    question: "What is the function of a steel moment frame in seismic retrofit construction?",
    options: [
      "To provide fire resistance to the structure",
      "To resist lateral forces through rigid beam-column connections",
      "To support vertical gravity loads only",
      "To insulate the building envelope",
    ],
    correctAnswer: 1,
    explanation:
      "钢抗弯框架的功能是通过刚性梁柱连接来抵抗侧向力（如地震力）。这种框架允许建筑在地震中产生一定的变形而不倒塌，是重要的抗震加固方法。",
    category: "structural",
  },
  {
    id: 507,
    question: "In a plywood shear wall retrofit, what is the minimum recommended plywood thickness for residential construction?",
    options: [
      "1/4 inch",
      "3/8 inch",
      "15/32 inch",
      "3/4 inch",
    ],
    correctAnswer: 2,
    explanation:
      "在住宅抗震加固中，胶合板剪力墙通常要求最小厚度为15/32英寸（约12mm）。这个厚度能够提供足够的剪力抵抗能力，有效传递地震水平力。",
    category: "structural",
  },
  {
    id: 508,
    question: "Simpson Strong-Tie HD series hold-down anchors are primarily used to resist which force?",
    options: [
      "Horizontal sliding of the sill plate",
      "Uplift forces at shear wall ends",
      "Vertical compression at column bases",
      "Lateral wind pressure on windows",
    ],
    correctAnswer: 1,
    explanation:
      "Simpson Strong-Tie HD系列锚固件主要用于抵抗剪力墙端部的上拔力。在地震或大风中，剪力墙的端部会承受上拔力，需要锚固件将墙体牢固地连接到基础上。",
    category: "structural",
  },
  {
    id: 509,
    question: "What is an earthquake shut-off valve (seismic valve) designed to do?",
    options: [
      "Shut off the main water supply during an earthquake",
      "Automatically close the gas supply when significant ground motion is detected",
      "Disconnect the electrical service during seismic events",
      "Seal HVAC ducts to prevent dust infiltration",
    ],
    correctAnswer: 1,
    explanation:
      "地震阀门设计用于在检测到显著地面运动时自动关闭天然气供应。这可以防止地震后因管道破裂导致的燃气泄漏和火灾风险。加州法律要求某些建筑安装地震阀。",
    category: "structural",
  },
  {
    id: 510,
    question: "Which soil type generally has the highest bearing capacity for residential foundations?",
    options: [
      "Organic peat",
      "Loose sand",
      "Dense gravel or bedrock",
      "Soft clay",
    ],
    correctAnswer: 2,
    explanation:
      "密实砂砾或基岩通常具有最高的承载力，适合作为住宅地基的支撑土层。有机泥炭和软粘土承载力较低，可能导致沉降问题。",
    category: "structural",
  },
  {
    id: 511,
    question: "What is a common problem associated with expansive clay soil beneath a foundation?",
    options: [
      "Rapid drainage causing the foundation to dry out",
      "Cyclical swelling and shrinking that causes foundation movement",
      "Excessive bearing capacity that cracks the footing",
      "High permeability leading to basement flooding",
    ],
    correctAnswer: 1,
    explanation:
      "膨胀性粘土在吸水时膨胀、干燥时收缩，这种周期性的膨胀和收缩会导致地基运动，从而引起基础裂缝和结构损坏。在加州许多地区都存在膨胀性土壤问题。",
    category: "structural",
  },
  {
    id: 512,
    question: "A home located in a mapped liquefaction zone is at risk for what during an earthquake?",
    options: [
      "The soil temporarily behaving like a liquid, causing the foundation to sink or tilt",
      "Excessive ground shaking amplification only",
      "Landslide on flat terrain",
      "Spontaneous combustion of underground gas deposits",
    ],
    correctAnswer: 0,
    explanation:
      "液化是指饱和松散土壤在地震振动下暂时表现得像液体一样的现象。这会导致建筑地基下沉或倾斜。加州地质调查局已标注了许多液化风险区域。",
    category: "structural",
  },
  {
    id: 513,
    question: "When is a grading permit typically required in California?",
    options: [
      "For any landscaping work in the front yard",
      "When moving or disturbing a significant quantity of earth, usually 50 cubic yards or more",
      "Only for commercial construction projects",
      "When painting the exterior of a home",
    ],
    correctAnswer: 1,
    explanation:
      "在加州，当移动或扰动大量土方（通常为50立方码或以上）时，通常需要土方许可证。具体要求因各城市和县而异，但目的是确保正确的排水和坡度稳定性。",
    category: "structural",
  },
  {
    id: 514,
    question: "What is the most important drainage feature for a retaining wall?",
    options: [
      "A decorative cap on top of the wall",
      "Weep holes and/or a gravel backfill with perforated drain pipe behind the wall",
      "A waterproof coating on the front face of the wall",
      "Expansion joints every 10 feet",
    ],
    correctAnswer: 1,
    explanation:
      "挡土墙最重要的排水特征是排水孔和/或墙后碎石回填与穿孔排水管的组合。这些排水系统防止水压在墙后积聚，过大的静水压力是挡土墙失效的主要原因。",
    category: "structural",
  },
  {
    id: 515,
    question: "Post-and-beam construction differs from conventional stud framing primarily because:",
    options: [
      "It uses only metal components",
      "It relies on large vertical posts and horizontal beams rather than closely spaced studs",
      "It cannot support a second story",
      "It is only used in commercial buildings",
    ],
    correctAnswer: 1,
    explanation:
      "柱梁结构与传统立柱框架的主要区别在于它使用大型垂直柱和水平梁而非密集排列的立柱。柱梁结构中的柱和梁承担主要荷载，墙体填充物不承重。",
    category: "structural",
  },
  {
    id: 516,
    question: "Balloon framing is considered a fire hazard primarily because:",
    options: [
      "The wood used is more flammable than in platform framing",
      "Wall studs run continuously from foundation to roof, creating unobstructed vertical fire pathways",
      "It uses thinner plywood sheathing",
      "Balloon framing requires more insulation which is flammable",
    ],
    correctAnswer: 1,
    explanation:
      "气球框架被认为是火灾隐患，主要因为墙体立柱从基础连续延伸到屋顶，形成了不受阻挡的垂直火灾通道。火焰可以在墙腔内迅速蔓延到上层。",
    category: "structural",
  },
  {
    id: 517,
    question: "In platform framing, each floor is framed as a separate platform. What is a key safety advantage of this method over balloon framing?",
    options: [
      "It uses less lumber overall",
      "Each floor acts as a natural fire stop, limiting vertical fire spread within wall cavities",
      "It is faster to construct",
      "It eliminates the need for a foundation",
    ],
    correctAnswer: 1,
    explanation:
      "平台框架中每一层楼作为独立平台建造，楼板自然形成防火阻隔，限制了火焰在墙腔内的垂直蔓延。这是平台框架比气球框架更安全的主要优势。",
    category: "structural",
  },
  {
    id: 518,
    question: "Fire blocking in wood-framed walls is required at maximum intervals of:",
    options: [
      "4 feet vertically",
      "8 feet vertically",
      "10 feet vertically",
      "12 feet vertically",
    ],
    correctAnswer: 2,
    explanation:
      "建筑规范要求木框架墙体中的防火阻隔间距不超过10英尺。防火阻隔（通常为2x4木块或矿物棉）可以阻止火焰和烟气在墙腔内蔓延。",
    category: "structural",
  },
  {
    id: 519,
    question: "What is the purpose of draftstopping in a floor/ceiling assembly?",
    options: [
      "To increase the insulation R-value",
      "To subdivide concealed spaces to limit the spread of fire and smoke",
      "To prevent condensation on ductwork",
      "To reduce noise transmission between rooms",
    ],
    correctAnswer: 1,
    explanation:
      "通风阻隔的目的是将隐蔽空间（如楼板/天花板组件中的空腔）细分为较小的区域，以限制火灾和烟雾的蔓延。这与防火阻隔不同，通风阻隔主要用于水平空间。",
    category: "structural",
  },
  {
    id: 520,
    question: "When comparing OSB (Oriented Strand Board) to plywood for subflooring, which statement is most accurate?",
    options: [
      "OSB is completely waterproof and superior to plywood in all conditions",
      "Plywood generally recovers better from moisture exposure, while OSB may swell at edges when wet",
      "OSB and plywood perform identically in all applications",
      "Plywood cannot be used as structural subflooring material",
    ],
    correctAnswer: 1,
    explanation:
      "与胶合板相比，OSB在受潮后边缘容易膨胀，且恢复能力较差。胶合板通常在受潮后恢复得更好。然而，两者在干燥条件下的结构性能是相当的。",
    category: "structural",
  },
  {
    id: 521,
    question: "LVL (Laminated Veneer Lumber) is an engineered lumber product best suited for:",
    options: [
      "Exterior siding and trim",
      "Beams, headers, and ridge boards that require high load capacity",
      "Interior wall studs only",
      "Roofing shingles",
    ],
    correctAnswer: 1,
    explanation:
      "层积单板木材（LVL）是一种工程木材产品，最适合用作梁、过梁和脊板等需要高承载能力的构件。LVL由薄木片层压而成，比同尺寸实木具有更高的强度和一致性。",
    category: "structural",
  },
  {
    id: 522,
    question: "PSL (Parallel Strand Lumber) differs from LVL in that it:",
    options: [
      "Uses parallel wood strands bonded together, offering higher strength for column and beam applications",
      "Is made from recycled plastic materials",
      "Cannot be used in load-bearing applications",
      "Is only manufactured in 2x4 dimensions",
    ],
    correctAnswer: 0,
    explanation:
      "平行束木材（PSL）使用平行排列的木条粘合而成，具有优异的强度特性，特别适合用作柱和梁。PSL的制造过程与LVL不同，使用更长的木条而非薄片。",
    category: "structural",
  },
  {
    id: 523,
    question: "LSL (Laminated Strand Lumber) is commonly used for which building component?",
    options: [
      "Foundation footings",
      "Rim boards, headers, and wall studs in engineered framing systems",
      "Concrete formwork only",
      "Chimney flue liners",
    ],
    correctAnswer: 1,
    explanation:
      "层积碎料木材（LSL）常用于工程框架系统中的边梁板、过梁和墙体立柱。LSL直而稳定，不易翘曲或扭曲，适合需要尺寸稳定性的应用。",
    category: "structural",
  },
  {
    id: 524,
    question: "What is the primary advantage of engineered wood I-joists over solid lumber joists?",
    options: [
      "They are less expensive per linear foot",
      "They can span longer distances, are lighter, and more dimensionally stable",
      "They are fireproof",
      "They do not require hangers or support hardware",
    ],
    correctAnswer: 1,
    explanation:
      "工程木I型托梁的主要优势是能够跨越更长的距离，重量更轻且尺寸更稳定。I型托梁由LVL或OSB腹板和实木或LVL翼缘组成，结构效率高。",
    category: "structural",
  },
  {
    id: 525,
    question: "A home inspector notices that web members of I-joists have been cut to accommodate plumbing. This is a concern because:",
    options: [
      "It voids the home warranty automatically",
      "Cutting I-joist webs can significantly reduce their structural capacity and is generally not permitted without manufacturer approval",
      "The plumbing will corrode the joist",
      "It increases noise transmission only",
    ],
    correctAnswer: 1,
    explanation:
      "切割I型托梁的腹板会显著降低其结构承载能力，通常在没有制造商批准的情况下是不允许的。任何对工程木构件的现场改造都应按照制造商的指南进行。",
    category: "structural",
  },
  {
    id: 526,
    question: "Metal web trusses (open web trusses) are advantageous in residential construction because:",
    options: [
      "They are completely fireproof",
      "Their open design allows for easy routing of HVAC ducts, plumbing, and wiring",
      "They eliminate the need for bearing walls",
      "They can be installed without any hardware",
    ],
    correctAnswer: 1,
    explanation:
      "金属腹杆桁架（开腹桁架）在住宅建筑中的优势是其开放式设计便于暖通空调管道、管道和电线的布置。这减少了需要在结构构件上钻孔的情况。",
    category: "structural",
  },
  {
    id: 527,
    question: "What defines a scissor truss?",
    options: [
      "A truss with no top chord",
      "A truss where the bottom chord members slope upward toward the center, creating a vaulted ceiling below",
      "A truss designed only for flat roofs",
      "A truss made entirely of steel",
    ],
    correctAnswer: 1,
    explanation:
      "剪式桁架的特点是底弦杆向中心倾斜上升，在下方形成拱形天花板。这种设计允许在不使用高大墙体的情况下创造高挑的室内空间。",
    category: "structural",
  },
  {
    id: 528,
    question: "An attic truss is specifically designed to:",
    options: [
      "Support only lightweight attic storage",
      "Provide usable living or storage space within the truss web area",
      "Eliminate the need for roof sheathing",
      "Replace the function of a ridge beam",
    ],
    correctAnswer: 1,
    explanation:
      "阁楼桁架专门设计用于在桁架腹杆区域内提供可用的居住或储物空间。其特殊的设计在中部创造了一个开放空间，同时保持结构完整性。",
    category: "structural",
  },
  {
    id: 529,
    question: "In hip roof framing, the hip rafter runs from the:",
    options: [
      "Ridge board to the center of the wall plate",
      "Ridge board to the corner of the building where two walls meet",
      "Eave to the peak of a dormer",
      "Valley to the adjacent hip",
    ],
    correctAnswer: 1,
    explanation:
      "在四坡屋顶框架中，斜脊椽从脊板延伸到两面墙相交的建筑角落。斜脊椽形成屋顶的外角线，是四坡屋顶框架的关键结构构件。",
    category: "structural",
  },
  {
    id: 530,
    question: "In a gable roof, the triangular wall section at the end is called the:",
    options: [
      "Soffit",
      "Fascia",
      "Gable end wall",
      "Hip extension",
    ],
    correctAnswer: 2,
    explanation:
      "在人字形屋顶中，端部的三角形墙体部分称为山墙端墙。山墙端墙从墙顶板延伸到屋脊，需要适当的支撑和抗风加固。",
    category: "structural",
  },
  {
    id: 531,
    question: "A valley rafter is found where:",
    options: [
      "Two roof planes meet forming an inside angle",
      "The roof meets the gable end wall",
      "A dormer intersects the main roof at the ridge",
      "Gutters are installed along the eave",
    ],
    correctAnswer: 0,
    explanation:
      "山谷椽位于两个屋顶平面相交形成内角的位置。山谷椽承受来自两侧屋面的荷载，是屋顶框架中的重要承载构件。",
    category: "structural",
  },
  {
    id: 532,
    question: "Jack rafters are shorter rafters that run from:",
    options: [
      "The ridge to the wall plate",
      "A hip rafter or valley rafter to the wall plate or ridge",
      "One gable end to the other",
      "The foundation to the ridge",
    ],
    correctAnswer: 1,
    explanation:
      "短椽是较短的椽条，从斜脊椽或山谷椽延伸到墙板或脊板。短椽不跨越屋顶的全部宽度，而是填充斜脊或山谷与墙板/脊板之间的三角形区域。",
    category: "structural",
  },
  {
    id: 533,
    question: "What is the difference between collar ties and rafter ties?",
    options: [
      "They are the same component with different names",
      "Collar ties are placed in the upper third of the rafter span to prevent ridge separation; rafter ties are at the bottom to resist outward thrust",
      "Collar ties are made of metal and rafter ties are made of wood",
      "Rafter ties are decorative while collar ties are structural",
    ],
    correctAnswer: 1,
    explanation:
      "领带板安装在椽条跨度的上三分之一处，防止脊部分离；椽条系杆安装在底部，抵抗向外的推力。两者功能不同，不可互相替代。",
    category: "structural",
  },
  {
    id: 534,
    question: "A structural ridge beam eliminates the need for:",
    options: [
      "Roof sheathing",
      "Rafter ties or ceiling joists, because it supports the full vertical load at the ridge",
      "Fascia boards",
      "Soffit vents",
    ],
    correctAnswer: 1,
    explanation:
      "结构脊梁消除了对椽条系杆或天花板托梁的需求，因为它在脊部支撑全部垂直荷载，不产生向外推力。这允许创建开放式的无天花板设计。",
    category: "structural",
  },
  {
    id: 535,
    question: "What is the standard minimum compressive strength for residential foundation concrete?",
    options: [
      "1,500 PSI",
      "2,500 PSI",
      "3,500 PSI",
      "5,000 PSI",
    ],
    correctAnswer: 1,
    explanation:
      "住宅地基混凝土的标准最低抗压强度通常为2,500 PSI。然而，许多建筑规范和工程师推荐使用3,000-3,500 PSI的混凝土以获得更好的耐久性。",
    category: "structural",
  },
  {
    id: 536,
    question: "The water-to-cement ratio in concrete mix primarily affects:",
    options: [
      "The color of the cured concrete",
      "The strength and durability of the concrete; lower ratios produce stronger concrete",
      "The time it takes for the concrete to set only",
      "The texture of the finished surface only",
    ],
    correctAnswer: 1,
    explanation:
      "水灰比主要影响混凝土的强度和耐久性。较低的水灰比产生更强的混凝土，但工作性较差。过多的水会导致混凝土强度降低和收缩增加。",
    category: "structural",
  },
  {
    id: 537,
    question: "What does #4 rebar refer to in foundation construction?",
    options: [
      "Rebar that is 4 inches in diameter",
      "Rebar that is 4/8 inch (1/2 inch) in diameter",
      "Rebar with a tensile strength of 4,000 PSI",
      "Four pieces of rebar bundled together",
    ],
    correctAnswer: 1,
    explanation:
      "#4钢筋是指直径为4/8英寸（即1/2英寸或约12.7mm）的钢筋。美国钢筋编号系统中，编号乘以1/8英寸即为钢筋直径。",
    category: "structural",
  },
  {
    id: 538,
    question: "In a post-tensioned slab foundation, the tendons are:",
    options: [
      "Relaxed after the concrete cures to allow flexibility",
      "Tensioned after the concrete has cured to a specified strength, placing the slab in compression",
      "Used only as reinforcement without any tensioning",
      "Made of fiberglass for corrosion resistance",
    ],
    correctAnswer: 1,
    explanation:
      "在后张法板基础中，钢绞线在混凝土达到规定强度后进行张拉，使板处于压缩状态。这种预压力有助于防止裂缝，特别适用于膨胀性土壤上的地基。",
    category: "structural",
  },
  {
    id: 539,
    question: "Pre-stressed concrete differs from post-tensioned concrete in that:",
    options: [
      "Pre-stressed concrete uses wood reinforcement",
      "In pre-stressed concrete, the tendons are tensioned before the concrete is poured",
      "Pre-stressed concrete does not use any reinforcement",
      "Post-tensioned concrete is always weaker than pre-stressed",
    ],
    correctAnswer: 1,
    explanation:
      "预应力混凝土与后张法混凝土的区别在于，预应力混凝土中的钢绞线在浇筑混凝土之前就已张拉。混凝土固化后释放钢绞线，通过粘结将压力传递给混凝土。",
    category: "structural",
  },
  {
    id: 540,
    question: "When inspecting concrete block (CMU) foundation walls, what should a home inspector look for?",
    options: [
      "Only the color of the blocks",
      "Step cracks, horizontal cracks, bowing, mortar deterioration, and signs of water intrusion",
      "Whether the blocks are painted",
      "The brand name of the blocks",
    ],
    correctAnswer: 1,
    explanation:
      "检查混凝土砌块（CMU）基础墙时，检查员应注意阶梯裂缝、水平裂缝、墙体弯曲、砂浆劣化和渗水迹象。这些都可能表明结构问题或水分侵入。",
    category: "structural",
  },
  {
    id: 541,
    question: "How can a home inspector distinguish brick veneer from solid brick construction?",
    options: [
      "By the color of the bricks",
      "Brick veneer is typically one wythe (layer) thick and attached to a wood frame, visible at window reveals and wall thickness",
      "Solid brick is always painted",
      "There is no visible difference between the two",
    ],
    correctAnswer: 1,
    explanation:
      "砖贴面通常只有一层砖厚，附着在木框架上；在窗户展示面和墙壁厚度处可以看出区别。实心砖墙通常有两层或更多层砖，整体墙壁更厚。",
    category: "structural",
  },
  {
    id: 542,
    question: "Stone veneer on a residential exterior requires what for proper installation?",
    options: [
      "Direct adhesion to the framing without any backing",
      "A weather-resistant barrier, metal lath, and scratch coat before stone application",
      "Only mortar applied to bare wood studs",
      "No special preparation is needed",
    ],
    correctAnswer: 1,
    explanation:
      "石材贴面的正确安装需要防水层、金属网和刮涂层，然后才能粘贴石材。这确保了良好的附着力和防水性能，防止水分渗透到墙体结构中。",
    category: "structural",
  },
  {
    id: 543,
    question: "When inspecting stucco over wood frame construction, which finding is most concerning?",
    options: [
      "Hairline cracks less than 1/16 inch wide",
      "Large diagonal cracks, bulging areas, or stucco separating from the wall, indicating moisture damage or structural movement",
      "Minor surface discoloration",
      "A slightly textured finish",
    ],
    correctAnswer: 1,
    explanation:
      "在检查木框架上的灰泥时，最令人担忧的发现是大的对角线裂缝、隆起区域或灰泥与墙体分离，这表明可能存在湿气损害或结构运动。细小裂缝通常是正常的收缩现象。",
    category: "structural",
  },
  {
    id: 544,
    question: "Weep holes in brick veneer walls serve what function?",
    options: [
      "They allow insects to enter the wall cavity",
      "They allow moisture that collects behind the veneer to drain out",
      "They provide ventilation to the living space",
      "They are manufacturing defects that should be filled",
    ],
    correctAnswer: 1,
    explanation:
      "砖贴面墙体中的排水孔允许积聚在贴面后面的水分排出。排水孔通常设置在墙底部每隔约24-33英寸处，是砖贴面系统正常排水的重要组成部分。",
    category: "structural",
  },
  {
    id: 545,
    question: "Flashing at the base of an exterior wall is critical because it:",
    options: [
      "Adds aesthetic appeal to the wall",
      "Diverts water away from the wall-to-foundation junction, preventing moisture intrusion",
      "Provides structural support to the sill plate",
      "Insulates the foundation",
    ],
    correctAnswer: 1,
    explanation:
      "外墙底部的泛水板对于将水从墙体与基础的交界处引离至关重要，防止水分侵入。缺失或损坏的底部泛水可导致木质结构腐烂和霉菌滋生。",
    category: "structural",
  },
  {
    id: 546,
    question: "A cripple wall in California residential construction is:",
    options: [
      "A wall that has been damaged by an earthquake",
      "A short wood-framed wall between the foundation and the first floor, commonly found in raised-floor homes",
      "A decorative half-wall between rooms",
      "An interior partition wall that does not reach the ceiling",
    ],
    correctAnswer: 1,
    explanation:
      "矮墙是指基础与一楼之间的短木框架墙，常见于架高地板的房屋中。矮墙是加州抗震加固的重点，因为未加固的矮墙在地震中容易倒塌。",
    category: "structural",
  },
  {
    id: 547,
    question: "What is the primary purpose of anchor bolts in a residential foundation?",
    options: [
      "To attach decorative elements to the foundation",
      "To secure the wood sill plate to the concrete foundation, resisting lateral and uplift forces",
      "To connect the foundation to the soil",
      "To provide drainage through the foundation wall",
    ],
    correctAnswer: 1,
    explanation:
      "锚固螺栓的主要目的是将木质底板固定在混凝土基础上，抵抗侧向力和上拔力。在加州地震区，锚固螺栓的间距和尺寸有严格的规范要求。",
    category: "structural",
  },
  {
    id: 548,
    question: "The California Building Code requires foundation anchor bolts to be spaced no more than:",
    options: [
      "2 feet apart",
      "4 feet apart",
      "6 feet apart",
      "8 feet apart",
    ],
    correctAnswer: 2,
    explanation:
      "加州建筑规范要求基础锚固螺栓的间距不超过6英尺，且距墙端或接头不超过12英寸。在高地震区域，间距可能需要更密。",
    category: "structural",
  },
  {
    id: 549,
    question: "Simpson A34 and A35 framing angles are commonly used to connect:",
    options: [
      "Roof shingles to the decking",
      "Rafters or joists to the top plate of a wall",
      "Drywall to studs",
      "Plumbing pipes to framing",
    ],
    correctAnswer: 1,
    explanation:
      "Simpson A34和A35框架角铁常用于将椽条或托梁连接到墙体顶板上。这些连接件提供了抵抗上拔力和侧向力的能力，是抗震连接的重要组成部分。",
    category: "structural",
  },
  {
    id: 550,
    question: "When a home inspector identifies a horizontal crack in the middle of a foundation wall, this most likely indicates:",
    options: [
      "Normal concrete curing shrinkage",
      "Lateral soil pressure pushing the wall inward",
      "Thermal expansion of the concrete",
      "Poor paint adhesion on the wall",
    ],
    correctAnswer: 1,
    explanation:
      "基础墙中部的水平裂缝最可能表明侧向土压力将墙推向内侧。这是一个严重的结构问题，可能需要工程评估和加固措施，如碳纤维条、钢板或地锚。",
    category: "structural",
  },
  {
    id: 551,
    question: "What is the typical minimum depth for residential footings in California where frost is not a significant concern?",
    options: [
      "6 inches",
      "12 inches below undisturbed soil",
      "24 inches",
      "36 inches",
    ],
    correctAnswer: 1,
    explanation:
      "在加州无严重冻害问题的地区，住宅基脚的最低深度通常为未扰动土壤以下12英寸。在有冻胀风险的山区，深度要求会更大。",
    category: "structural",
  },
  {
    id: 552,
    question: "A mudsill (sill plate) in direct contact with concrete must be made of:",
    options: [
      "Standard untreated pine lumber",
      "Pressure-treated or naturally durable lumber resistant to decay",
      "Engineered I-joist material",
      "Laminated veneer lumber (LVL)",
    ],
    correctAnswer: 1,
    explanation:
      "与混凝土直接接触的底板（泥基板）必须使用防腐处理或天然耐腐木材。混凝土会将地面水分传导到木材上，未经处理的木材会腐烂和被白蚁侵蚀。",
    category: "structural",
  },
  {
    id: 553,
    question: "What is the purpose of a Simpson LSTA strap tie in framing connections?",
    options: [
      "To join two pieces of drywall",
      "To provide a tension connection between framing members, resisting uplift and lateral forces",
      "To seal gaps between framing and the foundation",
      "To support plumbing through wall cavities",
    ],
    correctAnswer: 1,
    explanation:
      "Simpson LSTA带状系杆用于在框架构件之间提供拉力连接，抵抗上拔力和侧向力。这些系杆常用于将屋顶框架连接到墙体框架，确保连续的荷载传递路径。",
    category: "structural",
  },
  {
    id: 554,
    question: "During a seismic retrofit, plywood shear panels are typically nailed with what pattern?",
    options: [
      "Nails every 12 inches on all edges",
      "Nails at 4 inches on center at panel edges and 12 inches in the field",
      "Staples every 2 inches throughout",
      "Screws every 6 inches in the field only",
    ],
    correctAnswer: 1,
    explanation:
      "抗震加固中，胶合板剪力墙面板通常以边缘4英寸间距、板面12英寸间距的模式钉钉。紧密的边缘钉距提供了必要的剪力抵抗能力。",
    category: "structural",
  },
  {
    id: 555,
    question: "What is a common sign of foundation upheaval (heaving)?",
    options: [
      "Cracks that widen at the bottom of the foundation wall",
      "Interior floors that are higher in the center than at the perimeter, with doors that stick at the top",
      "Efflorescence on the exterior of the foundation",
      "Staining on the basement floor",
    ],
    correctAnswer: 1,
    explanation:
      "地基隆起的常见迹象是室内地板中心高于周边，门在顶部卡住。这通常由膨胀性土壤吸收水分膨胀引起，将地基向上推。",
    category: "structural",
  },
  {
    id: 556,
    question: "A pier and beam foundation system is most commonly found in which type of California home?",
    options: [
      "Modern slab-on-grade tract homes",
      "Older homes and hillside homes with crawl spaces",
      "High-rise condominiums",
      "Underground bunker-style homes",
    ],
    correctAnswer: 1,
    explanation:
      "柱基础系统在加州最常见于带有爬行空间的老旧房屋和山坡房屋中。这种系统使用混凝土或砖砌柱子支撑木质梁和地板框架。",
    category: "structural",
  },
  {
    id: 557,
    question: "What minimum clearance is typically required between the soil and wood framing in a crawl space?",
    options: [
      "2 inches",
      "6 inches from the ground to the bottom of floor joists",
      "18 inches from the ground to the bottom of floor joists",
      "36 inches from the ground to the bottom of floor joists",
    ],
    correctAnswer: 2,
    explanation:
      "爬行空间中土壤与木质框架之间通常要求最低18英寸的净空。这个空间允许进行检查和维修，同时减少木材接触地面水分和白蚁的风险。",
    category: "structural",
  },
  {
    id: 558,
    question: "Efflorescence on a concrete foundation wall indicates:",
    options: [
      "A structural failure requiring immediate evacuation",
      "Water has been migrating through the concrete, depositing mineral salts on the surface",
      "The concrete has been contaminated with a hazardous substance",
      "The concrete was mixed incorrectly at the factory",
    ],
    correctAnswer: 1,
    explanation:
      "混凝土基础墙上的白华（泛碱）表明水分通过混凝土迁移，将矿物盐沉积在表面。虽然白华本身不是结构问题，但它表明存在水分渗透的情况。",
    category: "structural",
  },
  {
    id: 559,
    question: "What type of crack in a concrete slab is generally considered cosmetic and non-structural?",
    options: [
      "A crack wider than 1/4 inch with vertical displacement",
      "A hairline shrinkage crack that follows a control joint pattern",
      "A crack that runs diagonally across the slab with one side higher than the other",
      "A crack with active water seepage",
    ],
    correctAnswer: 1,
    explanation:
      "沿控制缝模式的细微收缩裂缝通常被认为是美观性的而非结构性的。控制缝就是为引导这些不可避免的收缩裂缝而设计的。宽裂缝或有位移的裂缝需要进一步评估。",
    category: "structural",
  },
  {
    id: 560,
    question: "What is the purpose of a vapor retarder under a concrete slab?",
    options: [
      "To increase the strength of the concrete",
      "To prevent ground moisture from migrating up through the slab",
      "To insulate the slab from the ground",
      "To prevent radon gas specifically",
    ],
    correctAnswer: 1,
    explanation:
      "混凝土板下方的防潮层（通常为10密耳聚乙烯薄膜）的目的是防止地面水分向上穿透混凝土板。这保护了地面材料和室内空气质量。",
    category: "structural",
  },
  {
    id: 561,
    question: "When inspecting a raised foundation, evidence of previous mud flow or water staining on the interior of the stem wall suggests:",
    options: [
      "Normal condensation patterns",
      "Past flooding or inadequate drainage in the crawl space",
      "A plumbing leak in the second floor",
      "Excessive HVAC condensation",
    ],
    correctAnswer: 1,
    explanation:
      "架高基础的基础矮墙内侧有泥流或水渍迹象表明爬行空间曾经发生过水灾或排水不良。这可能导致木质结构构件腐烂、白蚁侵蚀和霉菌生长。",
    category: "structural",
  },
  {
    id: 562,
    question: "What is the significance of a 'step crack' pattern in a brick or block foundation wall?",
    options: [
      "It is purely decorative",
      "It typically indicates differential settlement, following the mortar joints in a stair-step pattern",
      "It means the wall was built incorrectly",
      "It is caused by thermal cycling only",
    ],
    correctAnswer: 1,
    explanation:
      "砖或砌块基础墙中的阶梯裂缝模式通常表明不均匀沉降，裂缝沿砂浆缝隙呈阶梯状延伸。这是基础问题的重要警示信号，需要进一步的工程评估。",
    category: "structural",
  },
  {
    id: 563,
    question: "In California, a home built before 1980 with a raised foundation likely needs evaluation for:",
    options: [
      "Lead paint on the roof only",
      "Inadequate foundation-to-framing connections (bolting and bracing)",
      "Excessive insulation in the crawl space",
      "Modern plumbing code compliance",
    ],
    correctAnswer: 1,
    explanation:
      "在加州，1980年之前建造的架高基础房屋可能需要评估基础与框架的连接是否充分（包括锚固螺栓和支撑）。许多老旧房屋缺乏足够的抗震连接。",
    category: "structural",
  },
  {
    id: 564,
    question: "What is a transfer beam used for in residential construction?",
    options: [
      "To transfer electrical power between circuits",
      "To carry loads from upper-story walls or columns that do not align with the foundation below",
      "To move water from the roof to the ground",
      "To support decorative ceiling features only",
    ],
    correctAnswer: 1,
    explanation:
      "转换梁用于承载上层墙体或柱子的荷载，当这些构件与下方基础不对齐时。转换梁将上方的集中荷载分散并传递到基础支撑点。",
    category: "structural",
  },
  {
    id: 565,
    question: "A home inspector observes a sagging ridge line. What is the most likely cause?",
    options: [
      "The house was designed with an intentional curve",
      "Inadequate support at the ridge, undersized rafters, or deteriorated structural components",
      "Excessive attic insulation weighing down the ridge",
      "High wind pressure on the roof",
    ],
    correctAnswer: 1,
    explanation:
      "屋脊下沉最可能的原因是屋脊处支撑不足、椽条尺寸不够或结构构件劣化。这是一个需要进一步评估的结构问题，可能需要增加支撑或更换构件。",
    category: "structural",
  },
  {
    id: 566,
    question: "Proper positive drainage around a home means:",
    options: [
      "Water flows toward the foundation from all sides",
      "The ground slopes away from the foundation at a minimum of 6 inches in the first 10 feet",
      "The yard is completely flat to prevent erosion",
      "All downspouts discharge directly at the foundation",
    ],
    correctAnswer: 1,
    explanation:
      "正确的正向排水意味着地面从基础向外倾斜，在最初10英尺内至少有6英寸的落差。这确保雨水远离基础，减少水分渗透和基础问题的风险。",
    category: "structural",
  },
  {
    id: 567,
    question: "What is the minimum required thickness for a residential concrete slab-on-grade?",
    options: [
      "2 inches",
      "3.5 inches (nominal 4-inch slab)",
      "6 inches",
      "8 inches",
    ],
    correctAnswer: 1,
    explanation:
      "住宅混凝土板的最低要求厚度通常为3.5英寸（标称4英寸板）。实际上，由于施工容差，实际厚度不应低于3.5英寸。车库和承重区域可能需要更厚。",
    category: "structural",
  },
  {
    id: 568,
    question: "What is the primary concern with a cantilevered floor system that extends more than the designed limit?",
    options: [
      "Increased heating costs",
      "Excessive deflection, bouncing, or potential structural failure",
      "Difficulty installing flooring",
      "Noise transmission between floors",
    ],
    correctAnswer: 1,
    explanation:
      "悬挑楼板系统超出设计限制的主要问题是过度挠曲、弹跳或潜在的结构失效。悬挑长度通常不应超过回跨长度的三分之一到四分之一。",
    category: "structural",
  },
  {
    id: 569,
    question: "In California, the Earthquake Brace + Bolt (EBB) program provides:",
    options: [
      "Free replacement of all home foundations",
      "Financial incentives for qualifying homeowners to seismically retrofit their cripple wall and bolt their homes to their foundations",
      "Insurance against earthquake damage",
      "Free structural engineering consultations for commercial buildings",
    ],
    correctAnswer: 1,
    explanation:
      "加州地震支撑+螺栓（EBB）计划为符合条件的房主提供经济激励，用于对其矮墙进行抗震加固并将房屋螺栓固定到基础上。这是一项由加州地震管理局赞助的项目。",
    category: "structural",
  },
  {
    id: 570,
    question: "When a floor system spans more than the design capacity of the joists, what symptom is most noticeable to occupants?",
    options: [
      "Discoloration of the ceiling below",
      "Noticeable bouncing or springiness when walking across the floor",
      "Excessive heat from the floor",
      "Static electricity when touching metal objects",
    ],
    correctAnswer: 1,
    explanation:
      "当楼板系统跨度超过托梁的设计能力时，居住者最明显的感觉是走过地板时有弹跳或弹性感。这表明托梁挠度过大，可能需要加固。",
    category: "structural",
  },
  {
    id: 571,
    question: "What is the standard on-center spacing for residential wall studs?",
    options: [
      "12 inches",
      "16 inches",
      "24 inches",
      "32 inches",
    ],
    correctAnswer: 1,
    explanation:
      "住宅墙体立柱的标准间距为16英寸中心距。在某些非承重墙或特定节能设计中，可以使用24英寸间距。承重墙通常要求16英寸间距。",
    category: "structural",
  },
  {
    id: 572,
    question: "A double top plate in wall framing serves to:",
    options: [
      "Increase the wall's fire resistance rating",
      "Tie intersecting walls together and distribute loads from above, allowing staggered joints",
      "Provide a nailing surface for baseboard trim",
      "Reduce the overall height of the wall",
    ],
    correctAnswer: 1,
    explanation:
      "墙体框架中的双顶板用于将相交的墙体连接在一起，并分配来自上方的荷载，允许接缝交错排列。双顶板确保上方荷载均匀地传递到下方的立柱上。",
    category: "structural",
  },
  {
    id: 573,
    question: "What is the maximum allowable span for a 2x10 floor joist at 16 inches on center using Douglas Fir #2 grade lumber (approximate)?",
    options: [
      "8 feet",
      "12 feet",
      "16 feet",
      "22 feet",
    ],
    correctAnswer: 2,
    explanation:
      "2x10花旗松#2级木材在16英寸中心距时的最大允许跨度约为16英尺（具体取决于荷载条件和规范版本）。超过此跨度需要更大的构件或额外的支撑。",
    category: "structural",
  },
  {
    id: 574,
    question: "When are engineered steel moment frames most commonly required in California residential construction?",
    options: [
      "In all single-family homes",
      "When large open floor plans or wide openings require lateral force resistance that wood framing alone cannot provide",
      "Only in homes over 5,000 square feet",
      "Only in mobile homes",
    ],
    correctAnswer: 1,
    explanation:
      "当大型开放平面或宽开口需要超过木框架单独能提供的侧向力抵抗时，通常需要工程钢抗弯框架。这在现代加州住宅中越来越常见，特别是有大面积玻璃门窗的设计。",
    category: "structural",
  },
  {
    id: 575,
    question: "What is the purpose of a Simpson PAHD hold-down in a shear wall system?",
    options: [
      "To hold down the roof sheathing during high winds",
      "To anchor the end stud of a shear wall to the foundation, resisting overturning forces",
      "To secure HVAC equipment to the floor",
      "To hold plumbing pipes in place",
    ],
    correctAnswer: 1,
    explanation:
      "Simpson PAHD锚固件用于将剪力墙的端部立柱锚固到基础上，抵抗倾覆力。在地震或大风中，剪力墙的端部会承受显著的拉力。",
    category: "structural",
  },
  {
    id: 576,
    question: "A bearing wall is defined as a wall that:",
    options: [
      "Contains plumbing or electrical components",
      "Supports structural loads from above in addition to its own weight",
      "Is located on the exterior of the building only",
      "Has been reinforced with steel",
    ],
    correctAnswer: 1,
    explanation:
      "承重墙是指除了自身重量外还支撑来自上方结构荷载的墙体。移除或改动承重墙需要工程分析和适当的临时支撑及替代梁的安装。",
    category: "structural",
  },
  {
    id: 577,
    question: "What is the standard thickness of a concrete stem wall for a residential foundation?",
    options: [
      "4 inches",
      "6 inches minimum",
      "10 inches",
      "12 inches",
    ],
    correctAnswer: 1,
    explanation:
      "住宅基础混凝土矮墙的标准最小厚度为6英寸。实际厚度取决于墙高、土壤条件和当地规范要求。较高的矮墙可能需要8英寸或更厚。",
    category: "structural",
  },
  {
    id: 578,
    question: "What tool does a home inspector use to check for proper bearing of beams on piers?",
    options: [
      "A moisture meter",
      "A flashlight and visual inspection for minimum 1.5-inch bearing and proper contact",
      "An infrared thermometer",
      "A voltage tester",
    ],
    correctAnswer: 1,
    explanation:
      "检查员使用手电筒和目视检查来确认梁在柱墩上是否有最少1.5英寸的支撑面和适当的接触。不充分的支撑面可能导致梁端碎裂或滑落。",
    category: "structural",
  },
  {
    id: 579,
    question: "What is the minimum required overlap for double top plate joints?",
    options: [
      "12 inches",
      "24 inches",
      "48 inches (4 feet)",
      "No overlap is required",
    ],
    correctAnswer: 2,
    explanation:
      "双顶板接缝的最小重叠长度要求为48英寸（4英尺）。上下两层顶板的接缝必须错开至少48英寸，以确保荷载的连续传递。",
    category: "structural",
  },
  {
    id: 580,
    question: "A rim joist (band joist) performs which structural function?",
    options: [
      "It supports only the subfloor at the building perimeter",
      "It caps the ends of floor joists at the perimeter, transfers vertical loads to the wall below, and resists lateral racking",
      "It is a decorative trim piece on the exterior",
      "It only serves as a nailer for exterior siding",
    ],
    correctAnswer: 1,
    explanation:
      "边梁（带梁）在建筑周边封盖楼板托梁的端部，将垂直荷载传递到下方墙体，并抵抗侧向倾斜。边梁是楼板系统与墙体系统之间的重要连接构件。",
    category: "structural",
  },
  {
    id: 581,
    question: "What is the California Building Code minimum requirement for the size of access openings to crawl spaces?",
    options: [
      "12 x 12 inches",
      "16 x 24 inches",
      "18 x 24 inches",
      "24 x 36 inches",
    ],
    correctAnswer: 2,
    explanation:
      "加州建筑规范要求爬行空间入口的最小尺寸为18 x 24英寸。这个尺寸需要足够让检查人员和维修人员进出爬行空间。",
    category: "structural",
  },
  {
    id: 582,
    question: "When inspecting a garage, a home inspector notices the wall between the garage and the living space has no drywall. This is a concern because:",
    options: [
      "It looks unfinished",
      "The fire separation between the garage and living space is compromised, typically requiring 1/2-inch or 5/8-inch Type X drywall",
      "It will cause higher energy bills",
      "The insulation will not perform properly",
    ],
    correctAnswer: 1,
    explanation:
      "车库与居住空间之间的墙体缺少石膏板意味着防火分隔被破坏。规范通常要求在车库侧安装1/2英寸或5/8英寸X型石膏板，以提供所需的防火等级。",
    category: "structural",
  },
  {
    id: 583,
    question: "What type of nails are required for framing connections in wood construction?",
    options: [
      "Finish nails",
      "Common nails (e.g., 16d common for most framing connections)",
      "Brad nails",
      "Roofing nails",
    ],
    correctAnswer: 1,
    explanation:
      "木结构框架连接需要使用普通钉（如16d普通钉用于大多数框架连接）。普通钉比精加工钉或枪钉有更大的剪切强度，适合结构连接。",
    category: "structural",
  },
  {
    id: 584,
    question: "A king stud in a window or door opening is:",
    options: [
      "A decorative stud visible from the interior",
      "A full-length stud running from the bottom plate to the top plate on each side of the opening",
      "A short stud below a window sill",
      "The center stud of a wide wall section",
    ],
    correctAnswer: 1,
    explanation:
      "王柱是窗户或门开口两侧从底板延伸到顶板的全长立柱。王柱为过梁提供直接支撑，是开口处荷载传递路径的重要组成部分。",
    category: "structural",
  },
  {
    id: 585,
    question: "A jack stud (trimmer stud) directly supports the:",
    options: [
      "Bottom plate of the wall",
      "Header above a door or window opening",
      "Roof ridge board",
      "Foundation footing",
    ],
    correctAnswer: 1,
    explanation:
      "千斤顶柱（修整柱）直接支撑门窗开口上方的过梁。千斤顶柱从底板延伸到过梁底部，将过梁的荷载传递到底板和基础。",
    category: "structural",
  },
  {
    id: 586,
    question: "What is the maximum header span typically allowed using double 2x12 lumber for a bearing wall opening?",
    options: [
      "4 feet",
      "6 feet",
      "8 feet",
      "12 feet",
    ],
    correctAnswer: 2,
    explanation:
      "承重墙开口处使用双2x12木材作为过梁时，通常允许的最大跨度约为8英尺。更大的开口需要工程梁（如LVL或钢梁）。",
    category: "structural",
  },
  {
    id: 587,
    question: "What is the purpose of blocking between floor joists?",
    options: [
      "To provide a surface for installing ceiling fans",
      "To prevent joist rotation, distribute loads, and provide lateral stability",
      "To increase the height of the floor system",
      "To create air channels for ventilation",
    ],
    correctAnswer: 1,
    explanation:
      "楼板托梁之间的阻隔块用于防止托梁旋转、分配荷载和提供侧向稳定性。阻隔块通常安装在支撑点处和跨度中部，增强楼板系统的整体刚性。",
    category: "structural",
  },
  {
    id: 588,
    question: "Galvanic corrosion at a structural connection occurs when:",
    options: [
      "Wood and concrete are in direct contact",
      "Two dissimilar metals are in contact in the presence of moisture",
      "Paint is applied over rust",
      "Plastic and metal components are fastened together",
    ],
    correctAnswer: 1,
    explanation:
      "电化学腐蚀发生在两种不同金属在有水分存在的情况下接触时。例如，铝与铜直接接触在潮湿环境中会加速腐蚀。结构连接中应避免不同金属的直接接触。",
    category: "structural",
  },
  {
    id: 589,
    question: "What is the primary purpose of a grade beam in foundation construction?",
    options: [
      "To provide a finished grade around the perimeter",
      "To connect deep foundation elements (piles or piers) and distribute loads between them",
      "To measure the elevation of the building pad",
      "To serve as a decorative landscape border",
    ],
    correctAnswer: 1,
    explanation:
      "地梁的主要目的是连接深基础元素（桩或墩）并在它们之间分配荷载。地梁在深基础系统中是重要的水平连接构件，确保荷载均匀传递。",
    category: "structural",
  },
  {
    id: 590,
    question: "An inspector notices that floor trusses have been modified with field-cut web members. This is concerning because:",
    options: [
      "It improves the truss capacity",
      "Any modification to an engineered truss without manufacturer or engineer approval can compromise its structural integrity",
      "It makes the truss lighter and easier to handle",
      "It is standard practice for all truss installations",
    ],
    correctAnswer: 1,
    explanation:
      "未经制造商或工程师批准对工程桁架进行任何改动都可能损害其结构完整性。桁架是作为一个整体系统设计的，切割或移除任何构件都会影响整体性能。",
    category: "structural",
  },
  {
    id: 591,
    question: "What is the minimum required concrete cover over reinforcing steel in a residential foundation footing?",
    options: [
      "1 inch",
      "3 inches for concrete cast against earth",
      "6 inches",
      "No cover is required",
    ],
    correctAnswer: 1,
    explanation:
      "对于浇筑在土壤上的混凝土基脚，钢筋上方的最小混凝土保护层为3英寸。这层混凝土保护钢筋免受腐蚀和火灾的影响。",
    category: "structural",
  },
  {
    id: 592,
    question: "A home inspector finds that roof trusses are spaced at 24 inches on center. Is this acceptable?",
    options: [
      "No, trusses must always be at 16 inches on center",
      "Yes, 24-inch spacing is common for engineered roof trusses designed for that span and load",
      "Only if the home is single-story",
      "Only in non-seismic zones",
    ],
    correctAnswer: 1,
    explanation:
      "24英寸中心距的屋顶桁架间距是可以接受的，这在为该跨度和荷载设计的工程屋顶桁架中很常见。关键是桁架必须按照设计荷载和规范要求进行设计和安装。",
    category: "structural",
  },
  {
    id: 593,
    question: "What does 'creep' refer to in the context of wood structural members?",
    options: [
      "The sound wood makes when it is wet",
      "Long-term gradual deformation under sustained load",
      "The movement of termites through wood",
      "The expansion of wood in hot weather",
    ],
    correctAnswer: 1,
    explanation:
      "在木结构构件中，'蠕变'是指在持续荷载作用下的长期渐进变形。随着时间推移，即使荷载在弹性范围内，木材也会逐渐变形，这在设计时需要考虑。",
    category: "structural",
  },
  {
    id: 594,
    question: "When inspecting a hillside home in California, which foundation type is most commonly used?",
    options: [
      "Floating slab",
      "Caisson or drilled pier foundation extending to stable soil or bedrock",
      "Frost-protected shallow foundation",
      "Rubble stone foundation",
    ],
    correctAnswer: 1,
    explanation:
      "在加州山坡住宅中，最常用的基础类型是沉箱或钻孔桩基础，延伸到稳定土层或基岩。这种基础可以穿过不稳定的表层土壤，为山坡建筑提供可靠的支撑。",
    category: "structural",
  },
  {
    id: 595,
    question: "Concrete spalling on a foundation wall is most commonly caused by:",
    options: [
      "Painting the concrete too early",
      "Moisture intrusion, freeze-thaw cycles, or corroding embedded reinforcement",
      "Using too much aggregate in the concrete mix",
      "Normal aging that requires no attention",
    ],
    correctAnswer: 1,
    explanation:
      "混凝土基础墙的剥落最常由水分渗透、冻融循环或嵌入钢筋腐蚀引起。腐蚀的钢筋会膨胀，导致外层混凝土破裂和剥落。",
    category: "structural",
  },
  {
    id: 596,
    question: "What is the purpose of a sill seal (foam gasket) between the sill plate and foundation?",
    options: [
      "To bond the sill plate to the foundation permanently",
      "To reduce air infiltration and provide a moisture break between wood and concrete",
      "To increase the structural connection strength",
      "To prevent termites from entering the structure",
    ],
    correctAnswer: 1,
    explanation:
      "底板密封垫（泡沫垫圈）位于底板和基础之间，用于减少空气渗透并在木材和混凝土之间提供防潮层。它不增加结构强度，但改善了能源效率和防潮性。",
    category: "structural",
  },
  {
    id: 597,
    question: "A California home inspector notices that a garage has been converted to living space. What structural concern should be evaluated?",
    options: [
      "Whether the carpet was properly installed",
      "Whether the original garage slab is adequate for habitable space loads and if the garage door opening was properly framed as a wall",
      "The color of the interior paint",
      "Whether the ceiling fan is energy efficient",
    ],
    correctAnswer: 1,
    explanation:
      "车库转换为居住空间时的结构问题包括：原有车库板是否适合居住荷载，车库门开口是否被正确地构建为墙体，以及是否满足防火分隔要求和所有建筑规范。",
    category: "structural",
  },
  {
    id: 598,
    question: "What is the most common type of foundation failure in California homes built on expansive soils?",
    options: [
      "Complete foundation collapse",
      "Differential movement causing cracks in the foundation and interior finishes",
      "Foundation sliding downhill",
      "Chemical dissolution of the concrete",
    ],
    correctAnswer: 1,
    explanation:
      "在膨胀性土壤上建造的加州房屋中最常见的基础失效类型是不均匀运动，导致基础和室内装饰面出现裂缝。这是因为土壤膨胀和收缩不均匀造成的。",
    category: "structural",
  },
  {
    id: 599,
    question: "What is the function of a shear transfer connection between the floor diaphragm and the shear wall?",
    options: [
      "To transfer heat between floors",
      "To transfer horizontal (lateral) forces from the floor system into the shear wall below",
      "To eliminate the need for a foundation",
      "To support plumbing fixtures",
    ],
    correctAnswer: 1,
    explanation:
      "剪力传递连接的功能是将水平（侧向）力从楼板系统传递到下方的剪力墙。在地震或风荷载作用下，楼板作为水平隔板将力传递到竖向抗侧力构件。",
    category: "structural",
  },
  {
    id: 600,
    question: "What is the difference between a spread footing and a continuous (strip) footing?",
    options: [
      "They are identical in function and shape",
      "A spread footing supports an isolated column or post; a continuous footing supports a wall along its length",
      "A spread footing is only used in commercial construction",
      "A continuous footing is shallower than a spread footing",
    ],
    correctAnswer: 1,
    explanation:
      "扩展基脚支撑独立的柱子或柱，而连续（条形）基脚沿其长度支撑墙体。住宅建筑中通常在承重墙下使用连续基脚，在孤立柱子下使用扩展基脚。",
    category: "structural",
  },
  {
    id: 601,
    question: "What is the California requirement for seismic gas shut-off valves on residential properties?",
    options: [
      "They are optional for all homes",
      "Required on new construction and when ownership transfers in some jurisdictions",
      "Only required for commercial buildings",
      "Required only for homes built before 1950",
    ],
    correctAnswer: 1,
    explanation:
      "加州一些司法管辖区要求新建住宅和产权转让时安装地震燃气关闭阀。具体要求因城市和县而异，但总体趋势是越来越多地区要求安装此类安全设备。",
    category: "structural",
  },
  {
    id: 602,
    question: "When inspecting a masonry chimney, what structural concern is most critical in California seismic zones?",
    options: [
      "The chimney cap is discolored",
      "The chimney is not reinforced or properly braced, making it susceptible to collapse in an earthquake",
      "The chimney flue is too large",
      "The chimney is painted a dark color",
    ],
    correctAnswer: 1,
    explanation:
      "在加州地震区，砖砌烟囱最关键的结构问题是没有加固或适当支撑，使其在地震中容易倒塌。未加固砌体烟囱是地震中最常见的失效和危险源之一。",
    category: "structural",
  },
  {
    id: 603,
    question: "What is the standard mortar joint thickness in brick construction?",
    options: [
      "1/8 inch",
      "3/8 inch",
      "3/4 inch",
      "1 inch",
    ],
    correctAnswer: 1,
    explanation:
      "砖砌体中标准砂浆缝的厚度为3/8英寸。过薄或过厚的砂浆缝会影响墙体的结构强度和外观。砂浆缝宽度均匀性也是施工质量的重要指标。",
    category: "structural",
  },
  {
    id: 604,
    question: "An inspector finds that a load-bearing header over a wide opening is made of a single 2x6. This is deficient because:",
    options: [
      "2x6 headers are only used in non-bearing walls",
      "A single 2x6 is generally inadequate for bearing loads; wider openings require larger or engineered headers",
      "The header should be made of concrete",
      "2x6 lumber does not exist",
    ],
    correctAnswer: 1,
    explanation:
      "单根2x6通常不足以承受承重荷载，特别是在较宽的开口上方。承重墙中的过梁通常需要双层或更大的木材，或工程木材产品（如LVL），具体尺寸取决于跨度和上方荷载。",
    category: "structural",
  },
  {
    id: 605,
    question: "What is the typical residential floor live load requirement per California Building Code?",
    options: [
      "20 pounds per square foot",
      "30 pounds per square foot",
      "40 pounds per square foot",
      "60 pounds per square foot",
    ],
    correctAnswer: 2,
    explanation:
      "加州建筑规范要求住宅楼板的活荷载通常为40磅/平方英尺（用于大多数居住空间）。某些区域如阳台和楼梯可能有不同的要求。",
    category: "structural",
  },
  {
    id: 606,
    question: "What is the minimum required dead load capacity for a residential ceiling that supports only drywall?",
    options: [
      "5 pounds per square foot",
      "10 pounds per square foot",
      "20 pounds per square foot",
      "40 pounds per square foot",
    ],
    correctAnswer: 1,
    explanation:
      "仅支撑石膏板的住宅天花板的最低恒荷载要求通常为10磅/平方英尺。这包括石膏板、保温材料和轻型管线的重量。用作阁楼储物的区域需要更高的荷载能力。",
    category: "structural",
  },
  {
    id: 607,
    question: "What is the primary structural difference between a girder truss and a standard truss?",
    options: [
      "Girder trusses are shorter",
      "A girder truss is designed to carry concentrated loads from other trusses that frame into it",
      "Standard trusses cannot support a roof",
      "Girder trusses are made of metal only",
    ],
    correctAnswer: 1,
    explanation:
      "主桁架与标准桁架的主要结构差异是主桁架设计用于承受其他桁架传入的集中荷载。主桁架通常更重型，使用更大的构件和更多的连接板。",
    category: "structural",
  },
  {
    id: 608,
    question: "The L/360 deflection limit for floor joists means that:",
    options: [
      "The floor can deflect up to 360 inches",
      "The maximum deflection under live load is the span length divided by 360",
      "The floor must be 360 inches long",
      "360 nails are required per joist",
    ],
    correctAnswer: 1,
    explanation:
      "L/360挠度限值意味着在活荷载作用下的最大挠度为跨度长度除以360。例如，12英尺跨度的托梁最大允许挠度为144英寸/360 = 0.4英寸。这是地板舒适度的重要标准。",
    category: "structural",
  },
  {
    id: 609,
    question: "What is the purpose of a structural ridge board versus a non-structural ridge board?",
    options: [
      "They serve identical functions",
      "A structural ridge is a beam that supports rafter loads at the peak, eliminating the need for rafter ties; a non-structural ridge is simply a connection point for opposing rafters",
      "A non-structural ridge is stronger",
      "A structural ridge is always made of metal",
    ],
    correctAnswer: 1,
    explanation:
      "结构脊梁在屋脊处支撑椽条荷载，消除了对椽条系杆的需要；非结构脊板只是对接椽条的连接点，仍需要椽条系杆来抵抗向外推力。",
    category: "structural",
  },
  {
    id: 610,
    question: "What does the term 'diaphragm action' refer to in a building structure?",
    options: [
      "The sound insulation properties of a floor or roof",
      "The ability of a floor or roof sheathing to act as a large horizontal beam, distributing lateral forces to shear walls",
      "The breathing of a building in response to pressure changes",
      "The flexibility of a foundation under load",
    ],
    correctAnswer: 1,
    explanation:
      "隔板作用是指楼板或屋面覆层作为大型水平梁的能力，将侧向力（如地震或风力）分配到剪力墙。这是建筑抗侧力体系的关键组成部分。",
    category: "structural",
  },
  {
    id: 611,
    question: "What is the typical minimum width for a residential interior hallway per California Building Code?",
    options: [
      "30 inches",
      "36 inches",
      "42 inches",
      "48 inches",
    ],
    correctAnswer: 1,
    explanation:
      "加州建筑规范要求住宅室内走廊的最小宽度为36英寸。这确保了安全通行和紧急疏散的足够空间。某些辅助功能要求可能需要更宽的走廊。",
    category: "structural",
  },
  {
    id: 612,
    question: "When a home inspector identifies notching on the bottom of a floor joist at mid-span, this is problematic because:",
    options: [
      "It makes the joist look unattractive",
      "Notching at the bottom of a joist at mid-span removes wood from the tension zone, severely weakening the joist",
      "It allows air to pass through the joist",
      "It was done with an incorrect tool",
    ],
    correctAnswer: 1,
    explanation:
      "在跨度中部底部切口是有问题的，因为它移除了受拉区域的木材，严重削弱了托梁。底部纤维承受最大拉力，切口会形成应力集中点，可能导致断裂。",
    category: "structural",
  },
  {
    id: 613,
    question: "What is the maximum allowable bore hole diameter through the center of a 2x10 floor joist?",
    options: [
      "1 inch",
      "One-third the depth of the joist (approximately 3 inches for a 2x10)",
      "Half the depth of the joist",
      "No holes are permitted in floor joists",
    ],
    correctAnswer: 1,
    explanation:
      "楼板托梁中心允许的最大钻孔直径为托梁深度的三分之一（2x10约3英寸）。孔必须位于中性轴附近（跨度中部的中间三分之一高度区域），且距端部至少2英寸。",
    category: "structural",
  },
  {
    id: 614,
    question: "Simpson UFP (universal foundation plate) is used at which connection point?",
    options: [
      "Between two studs in a partition wall",
      "Between the sill plate and the concrete foundation as a retrofit connector",
      "Between roof sheathing and fascia",
      "Between two sections of copper pipe",
    ],
    correctAnswer: 1,
    explanation:
      "Simpson UFP（通用基础板）用于底板和混凝土基础之间作为改造连接件。它为旧房屋提供了一种无需拆除底板即可将框架固定到基础上的方法。",
    category: "structural",
  },
  {
    id: 615,
    question: "In the California soft-story retrofit ordinance (such as Los Angeles LADBS), which buildings are primarily targeted?",
    options: [
      "All single-family homes",
      "Wood-frame multi-family buildings with ground floor parking or similar openings, typically 3+ stories",
      "All commercial high-rises",
      "Only government buildings",
    ],
    correctAnswer: 1,
    explanation:
      "加州软层加固法令（如洛杉矶LADBS）主要针对底层有停车场或类似开口的木框架多户住宅建筑，通常为3层以上。这些建筑在地震中底层倒塌风险最高。",
    category: "structural",
  },
  {
    id: 616,
    question: "What type of soil investigation is most appropriate before building on a hillside lot in California?",
    options: [
      "A simple visual inspection of the topsoil",
      "A geotechnical investigation including soil borings, lab testing, and a geotechnical report",
      "Testing only the pH of the soil",
      "Checking for the presence of earthworms",
    ],
    correctAnswer: 1,
    explanation:
      "在加州山坡地块建造之前，最合适的是进行岩土工程调查，包括土壤钻探、实验室测试和岩土工程报告。这确定了土壤承载力、坡体稳定性和基础设计要求。",
    category: "structural",
  },
  {
    id: 617,
    question: "What is the typical spacing requirement for Simpson H1 hurricane clips on rafters or trusses?",
    options: [
      "Every other rafter or truss",
      "One at each rafter or truss, connecting it to the top plate of the wall below",
      "Only at the ends of the building",
      "Every 8 feet along the wall",
    ],
    correctAnswer: 1,
    explanation:
      "Simpson H1飓风夹通常每个椽条或桁架处安装一个，将其连接到下方墙体的顶板。这确保了屋顶框架在风荷载或地震中不会与墙体分离。",
    category: "structural",
  },
  {
    id: 618,
    question: "What is the purpose of a let-in brace in conventional framing?",
    options: [
      "To provide a surface for installing siding",
      "To provide diagonal bracing by notching into the studs, resisting lateral racking of the wall",
      "To support the header above a door",
      "To create a channel for electrical wiring",
    ],
    correctAnswer: 1,
    explanation:
      "嵌入式斜撑通过在立柱上切槽安装对角支撑来抵抗墙体的侧向倾斜。这是传统框架中在使用胶合板或OSB覆层之前常用的横向支撑方法。",
    category: "structural",
  },
  {
    id: 619,
    question: "A home inspector finds that a concrete foundation has significant honeycombing. What does this indicate?",
    options: [
      "The concrete was decoratively finished",
      "The concrete was not properly consolidated during placement, leaving voids and exposed aggregate",
      "The concrete was mixed with bee products",
      "This is a sign of extremely strong concrete",
    ],
    correctAnswer: 1,
    explanation:
      "混凝土蜂窝表明浇筑过程中混凝土没有被正确密实，留下了空隙和裸露的骨料。蜂窝降低了混凝土的强度和耐久性，可能允许水分渗透并加速钢筋腐蚀。",
    category: "structural",
  },
  {
    id: 620,
    question: "What is the required fire resistance rating for the wall between an attached garage and the house?",
    options: [
      "No rating required",
      "30 minutes using 1/2-inch drywall on the garage side, or 1-hour if there is habitable space above",
      "2 hours with double layer of 5/8-inch Type X drywall",
      "4 hours using concrete block",
    ],
    correctAnswer: 1,
    explanation:
      "附属车库与住宅之间的墙壁通常需要30分钟防火等级（车库侧安装1/2英寸石膏板），如果车库上方有居住空间则需要1小时防火等级（5/8英寸X型石膏板）。",
    category: "structural",
  },
  {
    id: 621,
    question: "What is the minimum bearing length required for a floor joist resting on a beam or wall?",
    options: [
      "1/2 inch",
      "1.5 inches",
      "3 inches",
      "6 inches",
    ],
    correctAnswer: 1,
    explanation:
      "楼板托梁搁置在梁或墙上时，最小支撑长度要求为1.5英寸。不足的支撑长度可能导致端部碎裂或托梁从支撑点滑落。",
    category: "structural",
  },
  {
    id: 622,
    question: "What is the primary advantage of using a raised foundation over a slab-on-grade in California?",
    options: [
      "It is always cheaper to construct",
      "It provides access to plumbing, electrical, and structural components via the crawl space for inspection and repair",
      "It is more energy efficient in all climates",
      "It eliminates the need for earthquake retrofitting",
    ],
    correctAnswer: 1,
    explanation:
      "架高基础相对于平板基础的主要优势是通过爬行空间提供了对管道、电气和结构构件的检查和维修通道。这使得维护和改造工作更加容易。",
    category: "structural",
  },
  {
    id: 623,
    question: "A California home inspector notes that exterior stucco was applied directly over foam sheathing without a drainage plane. This is deficient because:",
    options: [
      "Foam sheathing is not available in California",
      "Without a drainage plane, trapped moisture behind stucco can cause mold, rot, and structural damage",
      "Foam sheathing provides sufficient drainage on its own",
      "Stucco should never be applied to any type of sheathing",
    ],
    correctAnswer: 1,
    explanation:
      "在泡沫覆层上直接涂抹灰泥而没有排水面是有问题的，因为被困在灰泥后面的水分会导致霉菌、腐烂和结构损坏。应在灰泥和覆层之间安装排水面和防水层。",
    category: "structural",
  },
  {
    id: 624,
    question: "What is the function of a structural diaphragm chord?",
    options: [
      "To create a musical tone when wind hits the building",
      "To resist tension and compression forces at the edges of a horizontal diaphragm during lateral loading",
      "To connect floor tiles to the subfloor",
      "To provide a channel for electrical wiring",
    ],
    correctAnswer: 1,
    explanation:
      "结构隔板弦杆的功能是在侧向荷载作用下抵抗水平隔板边缘的拉力和压力。弦杆通常由顶板或底板充当，它们将隔板的内力传递到剪力墙。",
    category: "structural",
  },
  {
    id: 625,
    question: "When inspecting a deck attached to a house, what is the most critical structural connection to evaluate?",
    options: [
      "The color match between the deck and the house",
      "The ledger board connection to the house band joist, including proper flashing and bolting",
      "The type of stain applied to the deck boards",
      "The brand of screws used in the decking surface",
    ],
    correctAnswer: 1,
    explanation:
      "检查附在房屋上的甲板时，最关键的结构连接是甲板搁栅板与房屋边梁的连接，包括适当的泛水和螺栓固定。搁栅板连接失效是甲板倒塌最常见的原因。",
    category: "structural",
  },
  {
    id: 626,
    question: "What size lag bolts are typically required for deck ledger board connections?",
    options: [
      "1/4 inch diameter",
      "1/2 inch diameter with proper spacing",
      "3/4 inch diameter",
      "1 inch diameter",
    ],
    correctAnswer: 1,
    explanation:
      "甲板搁栅板连接通常需要1/2英寸直径的滞后螺栓，间距适当（通常16英寸交错排列）。螺栓必须穿透边梁，并使用垫圈以分散力。",
    category: "structural",
  },
  {
    id: 627,
    question: "What is a common structural defect found in homes with additions built without permits?",
    options: [
      "The paint colors do not match the original house",
      "Inadequate foundations, undersized framing, and improper connections between the addition and the original structure",
      "The addition has a different style of door knobs",
      "The carpet in the addition is a different brand",
    ],
    correctAnswer: 1,
    explanation:
      "未经许可建造的扩建房常见的结构缺陷包括基础不足、框架尺寸不够、以及扩建部分与原有结构之间的连接不当。这些问题可能影响结构安全和抗震性能。",
    category: "structural",
  },
  {
    id: 628,
    question: "What is the recommended maximum cantilever for a 2x10 floor joist?",
    options: [
      "12 inches",
      "24 inches (one-quarter of the back span)",
      "48 inches",
      "72 inches",
    ],
    correctAnswer: 1,
    explanation:
      "2x10楼板托梁推荐的最大悬挑长度为24英寸（回跨的四分之一）。超过此限制可能导致过度挠曲和弹跳，需要工程分析。",
    category: "structural",
  },
  {
    id: 629,
    question: "What is the purpose of a steel column base plate?",
    options: [
      "To provide a decorative finish to the column",
      "To distribute the column load over a larger area of the concrete footing and provide anchorage",
      "To insulate the column from the foundation",
      "To allow the column to rotate freely",
    ],
    correctAnswer: 1,
    explanation:
      "钢柱底板的目的是将柱荷载分布在混凝土基脚的较大面积上，并提供锚固。底板通过锚固螺栓固定到基础上，防止柱在侧向力作用下移动。",
    category: "structural",
  },
  {
    id: 630,
    question: "When a home inspector encounters a mid-span support post that has been cut or removed, the primary concern is:",
    options: [
      "Aesthetic impact",
      "Loss of vertical support causing excessive beam deflection and potential structural failure",
      "Reduced air circulation in the basement",
      "Difficulty in painting the area",
    ],
    correctAnswer: 1,
    explanation:
      "跨中支撑柱被切割或移除的主要问题是失去垂直支撑，导致梁过度挠曲和潜在的结构失效。上方的荷载需要通过其他路径传递，否则整个楼板系统可能受到影响。",
    category: "structural",
  },
  {
    id: 631,
    question: "What type of concrete reinforcement is typically used in residential slab-on-grade construction?",
    options: [
      "Bamboo rods",
      "Welded wire mesh (WWM) or rebar, placed at the mid-depth of the slab",
      "Copper mesh",
      "No reinforcement is ever used",
    ],
    correctAnswer: 1,
    explanation:
      "住宅平板基础通常使用焊接钢丝网（WWM）或钢筋作为加固，放置在板的中间深度处。加固材料帮助控制收缩裂缝并分配集中荷载。",
    category: "structural",
  },
  {
    id: 632,
    question: "A stepped footing is used on a site that has:",
    options: [
      "A perfectly flat grade",
      "A sloping grade where the footing follows the slope in steps to maintain proper depth",
      "Sandy soil only",
      "No vegetation",
    ],
    correctAnswer: 1,
    explanation:
      "阶梯基脚用于有坡度的场地，基脚以阶梯形式跟随坡度以保持适当的深度。每个台阶的高度和长度都有规范要求，以确保荷载正确传递。",
    category: "structural",
  },
  {
    id: 633,
    question: "What is the minimum lap splice length for #4 rebar in a residential footing?",
    options: [
      "6 inches",
      "12 inches",
      "24 inches (typically 40 bar diameters)",
      "48 inches",
    ],
    correctAnswer: 2,
    explanation:
      "#4钢筋在住宅基脚中的最小搭接长度通常为24英寸（约40倍钢筋直径）。适当的搭接确保了钢筋之间的力传递连续性。",
    category: "structural",
  },
  {
    id: 634,
    question: "What is the primary purpose of a moisture barrier in a crawl space?",
    options: [
      "To provide a walking surface",
      "To reduce moisture evaporation from the ground into the crawl space, protecting wood framing from decay",
      "To prevent insects from burrowing",
      "To insulate the floor above",
    ],
    correctAnswer: 1,
    explanation:
      "爬行空间防潮层的主要目的是减少地面水分蒸发到爬行空间中，保护木质框架免受腐烂。通常使用6密耳或更厚的聚乙烯薄膜覆盖爬行空间地面。",
    category: "structural",
  },
  {
    id: 635,
    question: "When a home inspector discovers sistered joists in a crawl space, what does this suggest?",
    options: [
      "The original builder used extra material for safety",
      "A previous repair was made to reinforce damaged, undersized, or deflecting floor joists",
      "The floor was designed for commercial use",
      "The home was built by a sister company",
    ],
    correctAnswer: 1,
    explanation:
      "发现并列托梁表明之前进行了修复，以加固损坏、尺寸不足或变形的楼板托梁。检查员应评估修复是否适当，包括连接方式和新构件的尺寸。",
    category: "structural",
  },
  {
    id: 636,
    question: "What is the typical maximum span for a 4x6 beam supporting floor joists from both sides?",
    options: [
      "4 feet",
      "6 feet",
      "10 feet",
      "16 feet",
    ],
    correctAnswer: 1,
    explanation:
      "4x6梁支撑两侧楼板托梁时的典型最大跨度约为6英尺，具体取决于荷载条件和木材等级。更长的跨度需要更大的梁或工程木材产品。",
    category: "structural",
  },
  {
    id: 637,
    question: "What is the code-required minimum ventilation for a crawl space without a vapor retarder?",
    options: [
      "1 square foot of net free area per 150 square feet of crawl space floor area",
      "1 square foot of net free area per 300 square feet of crawl space floor area",
      "1 square foot of net free area per 500 square feet of crawl space floor area",
      "No ventilation is required",
    ],
    correctAnswer: 0,
    explanation:
      "没有防潮层的爬行空间要求每150平方英尺地面面积提供1平方英尺的净通风面积。如果安装了防潮层，此比例可降至1:1500。通风有助于控制湿度和防止木材腐烂。",
    category: "structural",
  },
  {
    id: 638,
    question: "What is the purpose of a seismic anchor bolt retrofit using epoxy?",
    options: [
      "To glue the sill plate to the exterior siding",
      "To install anchor bolts in existing foundations by drilling holes and setting bolts with structural epoxy",
      "To repair cracked drywall after an earthquake",
      "To attach solar panels to the roof",
    ],
    correctAnswer: 1,
    explanation:
      "环氧锚固螺栓改造是在现有基础上钻孔，然后使用结构环氧树脂设定锚固螺栓。这是将老旧房屋的底板固定到基础上的常用抗震加固方法。",
    category: "structural",
  },
  {
    id: 639,
    question: "What structural element connects the top of a cripple wall to the floor framing above?",
    options: [
      "A ridge board",
      "A top plate, which should be properly nailed to both the studs below and the floor framing above",
      "A footer",
      "A downspout",
    ],
    correctAnswer: 1,
    explanation:
      "顶板将矮墙顶部连接到上方的楼板框架。顶板应正确钉固到下方的立柱和上方的楼板框架上，确保荷载传递路径的连续性和抗震连接。",
    category: "structural",
  },
  {
    id: 640,
    question: "When inspecting a home in a high wind zone in California, what additional structural feature should be evaluated?",
    options: [
      "The type of mailbox installed",
      "Continuous load path connections from roof to foundation, including straps, clips, and hold-downs",
      "The brand of windows installed",
      "The color of the exterior paint",
    ],
    correctAnswer: 1,
    explanation:
      "在加州高风区检查房屋时，应评估从屋顶到基础的连续荷载路径连接，包括带状系杆、夹具和锚固件。连续荷载路径确保风力可以安全地传递到基础。",
    category: "structural",
  },
  {
    id: 641,
    question: "What is the minimum required height from finished grade to the top of a concrete stem wall?",
    options: [
      "2 inches",
      "4 inches",
      "6 inches above finished grade",
      "12 inches",
    ],
    correctAnswer: 2,
    explanation:
      "混凝土矮墙顶部距成品地面的最小要求高度为6英寸。这个高度保护木质框架免受地表水、飞溅水和白蚁的侵害。某些地区可能要求8英寸。",
    category: "structural",
  },
  {
    id: 642,
    question: "What is the purpose of expansion joints in a large concrete slab?",
    options: [
      "To add decorative lines to the surface",
      "To allow the slab to expand and contract with temperature changes without cracking randomly",
      "To increase the slab thickness",
      "To provide grip for vehicles",
    ],
    correctAnswer: 1,
    explanation:
      "大面积混凝土板中伸缩缝的目的是允许板随温度变化而膨胀和收缩，而不会随机开裂。伸缩缝通过在预定位置引导运动来控制裂缝的位置。",
    category: "structural",
  },
  {
    id: 643,
    question: "An inspector notices that the mudsill is not pressure-treated and sits directly on the foundation. What should be reported?",
    options: [
      "This is acceptable for all California homes",
      "This is a deficiency; the sill plate in contact with concrete should be pressure-treated or naturally durable wood to prevent decay",
      "Only the appearance should be noted",
      "This is only a concern in wet climates",
    ],
    correctAnswer: 1,
    explanation:
      "与混凝土直接接触的底板未经防腐处理是一个缺陷。规范要求与混凝土接触的木材必须是防腐处理或天然耐腐木材，以防止因水分引起的腐烂和白蚁侵蚀。",
    category: "structural",
  },
  {
    id: 644,
    question: "What is the typical rebar configuration in a residential continuous footing?",
    options: [
      "A single #3 bar placed at the top of the footing",
      "Two #4 bars placed horizontally near the bottom of the footing",
      "Vertical rebar only",
      "No rebar is required in residential footings",
    ],
    correctAnswer: 1,
    explanation:
      "住宅连续基脚中典型的钢筋配置是两根#4水平钢筋放置在基脚底部附近。这些底部钢筋承受弯曲拉力，帮助基脚跨越软弱土壤区域。",
    category: "structural",
  },
  {
    id: 645,
    question: "What is the primary reason for installing a sill plate gasket (sill seal) on top of the foundation before placing the sill plate?",
    options: [
      "To increase the height of the wall",
      "To seal the irregular surface between the concrete and wood, reducing air infiltration",
      "To make the sill plate easier to remove",
      "To provide additional structural support",
    ],
    correctAnswer: 1,
    explanation:
      "安装底板垫片的主要原因是密封混凝土和木材之间的不规则表面，减少空气渗透。混凝土表面通常不完全平整，垫片填补了间隙并提供了防潮层。",
    category: "structural",
  },
  {
    id: 646,
    question: "A home inspector discovers a large crack in a retaining wall with evidence of the wall leaning. What should be recommended?",
    options: [
      "Fill the crack with caulk and monitor",
      "Evaluation by a structural engineer to determine the cause and appropriate repair",
      "Paint over the crack to prevent water entry",
      "Plant vines to cover the crack",
    ],
    correctAnswer: 1,
    explanation:
      "挡土墙出现大裂缝并有倾斜迹象应建议由结构工程师评估，以确定原因和适当的修复方案。倾斜的挡土墙可能导致土壤崩塌，存在安全隐患。",
    category: "structural",
  },
  {
    id: 647,
    question: "What is the purpose of vertical rebar (dowels) extending from the footing into the stem wall?",
    options: [
      "To hang utilities from the stem wall",
      "To create a structural connection between the footing and stem wall, resisting overturning and sliding",
      "To provide drainage channels",
      "To act as form stakes during construction only",
    ],
    correctAnswer: 1,
    explanation:
      "从基脚延伸到矮墙的垂直钢筋（销钉）用于在基脚和矮墙之间创建结构连接，抵抗倾覆和滑动。这确保了基础系统作为一个整体工作。",
    category: "structural",
  },
  {
    id: 648,
    question: "What is the main concern with a home built on filled (non-compacted) soil?",
    options: [
      "The soil is too fertile for landscaping",
      "Non-compacted fill can settle unevenly over time, causing foundation damage",
      "The soil will be too hard for future excavation",
      "Non-compacted fill improves drainage",
    ],
    correctAnswer: 1,
    explanation:
      "建在未压实填土上的房屋的主要问题是非压实填土会随时间不均匀沉降，导致基础损坏。适当的土方工程需要分层压实以达到规定的压实度。",
    category: "structural",
  },
  {
    id: 649,
    question: "What is the minimum required ventilation opening for attic spaces per California Building Code?",
    options: [
      "1 square foot per 300 square feet of attic floor area with balanced ventilation",
      "1 square foot per 500 square feet of attic floor area",
      "No ventilation is required if the attic has insulation",
      "1 square foot per 100 square feet of attic floor area",
    ],
    correctAnswer: 0,
    explanation:
      "加州建筑规范要求阁楼空间每300平方英尺地面面积提供1平方英尺的通风开口面积（平衡通风时）。适当的阁楼通风有助于控制湿度和降低冷却成本。",
    category: "structural",
  },
  {
    id: 650,
    question: "What is a common seismic deficiency in California homes built in the 1950s-1960s?",
    options: [
      "Excessive use of earthquake straps",
      "Lack of foundation bolting, cripple wall bracing, and inadequate connections between framing and foundation",
      "Too many shear walls",
      "Overuse of steel moment frames",
    ],
    correctAnswer: 1,
    explanation:
      "1950-1960年代建造的加州房屋常见的抗震缺陷包括缺少基础锚固螺栓、矮墙支撑不足以及框架与基础之间的连接不充分。EBB计划专门针对这些问题提供改造资助。",
    category: "structural",
  },

  // ========== ELECTRICAL (651-800) ==========
  {
    id: 651,
    question: "California Title 24 requires that newly installed lighting in residential spaces must be:",
    options: [
      "Incandescent only",
      "High-efficacy (LED or equivalent) meeting minimum lumens-per-watt requirements",
      "Controlled only by manual switches with no dimmers",
      "Limited to 40 watts per fixture",
    ],
    correctAnswer: 1,
    explanation:
      "加州Title 24要求新安装的住宅照明必须是高效能的（LED或等效），满足最低流明/瓦特要求。这是加州能源效率标准的一部分，旨在减少能源消耗。",
    category: "electrical",
  },
  {
    id: 652,
    question: "When inspecting a residential solar PV system, what should a home inspector verify?",
    options: [
      "Only the color of the panels",
      "Proper mounting, conduit integrity, visible wiring condition, labeling of disconnects, and presence of rapid shutdown capability",
      "The brand name of the panels only",
      "That the system produces at least 100 kW",
    ],
    correctAnswer: 1,
    explanation:
      "检查住宅太阳能光伏系统时，应验证安装是否牢固、管道完整性、可见布线状况、断路器标签以及是否具有快速关断功能。这些都是安全和合规的关键要素。",
    category: "electrical",
  },
  {
    id: 653,
    question: "A NEMA 14-50 outlet is most commonly installed for:",
    options: [
      "Standard lighting circuits",
      "Electric vehicle (EV) Level 2 charging",
      "Doorbell transformers",
      "Smoke detector circuits",
    ],
    correctAnswer: 1,
    explanation:
      "NEMA 14-50插座最常用于电动汽车（EV）二级充电。这是一个240伏、50安培的插座，也常用于电炉和RV连接。加州的EV充电需求不断增长。",
    category: "electrical",
  },
  {
    id: 654,
    question: "What circuit size is typically required for a dedicated EV charging outlet (NEMA 14-50)?",
    options: [
      "15 amp, 120V",
      "20 amp, 120V",
      "50 amp, 240V",
      "100 amp, 240V",
    ],
    correctAnswer: 2,
    explanation:
      "NEMA 14-50 EV充电专用插座通常需要50安培、240伏的电路。电线规格通常为6 AWG铜线，断路器为50安培双极。",
    category: "electrical",
  },
  {
    id: 655,
    question: "A home battery storage system (such as Tesla Powerwall) should be inspected for:",
    options: [
      "Its color coordination with the house",
      "Proper installation location, clearances, disconnect labeling, and connection to the main panel per manufacturer and code requirements",
      "Whether it matches the solar panel brand",
      "Only its warranty status",
    ],
    correctAnswer: 1,
    explanation:
      "家用电池储能系统的检查应包括安装位置是否正确、间距是否充足、断路器标签是否清晰以及是否按照制造商和规范要求连接到主配电盘。",
    category: "electrical",
  },
  {
    id: 656,
    question: "What is the primary purpose of a generator transfer switch?",
    options: [
      "To increase the generator's output power",
      "To safely disconnect the home from the utility grid before connecting the generator, preventing backfeeding",
      "To reduce the fuel consumption of the generator",
      "To convert DC power to AC power",
    ],
    correctAnswer: 1,
    explanation:
      "发电机转换开关的主要目的是在连接发电机之前安全地将房屋与公共电网断开，防止反馈电力。反馈电力对电力工人极其危险，可能导致严重伤亡。",
    category: "electrical",
  },
  {
    id: 657,
    question: "A whole-house surge protector is typically installed:",
    options: [
      "Inside each individual outlet",
      "At or near the main electrical panel to protect all circuits from voltage spikes",
      "Only on the exterior of the house",
      "Inside the electric meter base",
    ],
    correctAnswer: 1,
    explanation:
      "全屋浪涌保护器通常安装在主配电盘处或附近，保护所有电路免受电压尖峰的影响。这提供了第一道防线，保护家中所有电气设备和电子产品。",
    category: "electrical",
  },
  {
    id: 658,
    question: "What is the maximum number of outlets generally allowed on a 15-amp residential lighting circuit?",
    options: [
      "5",
      "8",
      "There is no specific NEC limit on the number, but good practice suggests 8-10 outlets",
      "20",
    ],
    correctAnswer: 2,
    explanation:
      "NEC没有明确限制15安培住宅照明电路上的插座数量，但良好的做法建议8-10个。加州的实际限制取决于预期的总负载不超过电路额定容量的80%。",
    category: "electrical",
  },
  {
    id: 659,
    question: "When wiring a ceiling fan with a light kit, best practice requires:",
    options: [
      "A single switch controlling both the fan and light together",
      "Separate switch legs for the fan motor and light, with a fan-rated electrical box",
      "A dimmer switch for the fan motor",
      "No switch; the fan should be controlled by a pull chain only",
    ],
    correctAnswer: 1,
    explanation:
      "安装带灯套件的吊扇时，最佳做法是使用独立的开关线路分别控制风扇电机和灯光，并使用额定支持吊扇重量的电气盒。普通电气盒可能无法承受吊扇的重量和振动。",
    category: "electrical",
  },
  {
    id: 660,
    question: "A 3-way switch system allows control of a light from:",
    options: [
      "Three different locations",
      "Two different locations",
      "One location with three brightness levels",
      "Any smart device only",
    ],
    correctAnswer: 1,
    explanation:
      "三路开关系统允许从两个不同的位置控制一盏灯。每个开关有三个接线端子（一个公共端和两个旅行者端子）。名称中的\"三路\"指的是每个开关内的三个端子位置。",
    category: "electrical",
  },
  {
    id: 661,
    question: "A 4-way switch is used in conjunction with two 3-way switches to control a light from:",
    options: [
      "Two locations",
      "Three or more locations",
      "Four locations only",
      "One location with four brightness levels",
    ],
    correctAnswer: 1,
    explanation:
      "四路开关与两个三路开关配合使用，可以从三个或更多位置控制一盏灯。每增加一个控制位置，就在电路中增加一个四路开关。",
    category: "electrical",
  },
  {
    id: 662,
    question: "Why is it important to check dimmer switch compatibility with LED bulbs?",
    options: [
      "LED bulbs are always compatible with any dimmer",
      "Incompatible dimmers can cause LED flickering, buzzing, or premature failure",
      "Dimmers have no effect on LED bulbs",
      "LED bulbs cannot be dimmed under any circumstances",
    ],
    correctAnswer: 1,
    explanation:
      "检查调光开关与LED灯泡的兼容性很重要，因为不兼容的调光器会导致LED闪烁、嗡鸣或过早失效。较旧的白炽灯调光器通常不适用于LED灯泡，需要LED专用调光器。",
    category: "electrical",
  },
  {
    id: 663,
    question: "Low-voltage wiring (such as Cat6 network cable or speaker wire) is:",
    options: [
      "Subject to the same installation rules as 120V wiring",
      "Not required to be in conduit but should be separated from high-voltage wiring to prevent interference",
      "Required to be installed by a licensed electrician only",
      "Not regulated by any code",
    ],
    correctAnswer: 1,
    explanation:
      "低压布线（如Cat6网络线或音箱线）不需要安装在管道中，但应与高压布线分开以防止干扰。NEC要求低压和高压布线保持一定的间距。",
    category: "electrical",
  },
  {
    id: 664,
    question: "A doorbell transformer typically converts household voltage to:",
    options: [
      "8-24 volts AC",
      "120 volts DC",
      "240 volts AC",
      "480 volts AC",
    ],
    correctAnswer: 0,
    explanation:
      "门铃变压器通常将家用电压转换为8-24伏特交流电。现代视频门铃可能需要较高端的16-24V变压器才能正常工作。",
    category: "electrical",
  },
  {
    id: 665,
    question: "California requires hardwired smoke detectors in residential dwellings to be:",
    options: [
      "Battery-operated only",
      "Hardwired with battery backup and interconnected so that when one alarm sounds, all alarms sound",
      "Solar powered",
      "Hardwired without any backup power",
    ],
    correctAnswer: 1,
    explanation:
      "加州要求住宅中的硬连线烟雾探测器带有电池备份，并且互相连接，当一个报警器响起时，所有报警器同时响起。这确保了整个房屋的居住者都能收到火灾警报。",
    category: "electrical",
  },
  {
    id: 666,
    question: "Where are combination smoke/CO (carbon monoxide) detectors required in a California home?",
    options: [
      "Only in the garage",
      "Outside each sleeping area, on every level, and inside each bedroom",
      "Only in the kitchen",
      "Only in the basement",
    ],
    correctAnswer: 1,
    explanation:
      "加州要求在每个睡眠区域外、每一层楼以及每间卧室内安装烟雾/一氧化碳组合探测器。一氧化碳探测器的要求适用于有燃气设备或附属车库的住宅。",
    category: "electrical",
  },
  {
    id: 667,
    question: "Bathroom exhaust fan wiring typically requires:",
    options: [
      "A dedicated 40-amp circuit",
      "Connection to a GFCI-protected circuit, with a separate switch or timer control",
      "Direct connection to the lighting circuit without a switch",
      "240V power supply",
    ],
    correctAnswer: 1,
    explanation:
      "浴室排风扇布线通常需要连接到GFCI保护电路，配有独立的开关或定时器控制。加州Title 24还要求浴室排风扇有自动控制功能（如湿度传感器或定时器）。",
    category: "electrical",
  },
  {
    id: 668,
    question: "California Building Code requires kitchen island countertop outlets to be:",
    options: [
      "Not required on island countertops",
      "Provided so that no point along the island countertop is more than 24 inches from an outlet, served by at least two 20-amp circuits",
      "Installed only if the island is wider than 48 inches",
      "Connected to 15-amp circuits",
    ],
    correctAnswer: 1,
    explanation:
      "加州建筑规范要求厨房岛台面提供插座，使台面上任何一点距插座不超过24英寸（对于12英寸以上宽的岛台），由至少两个20安培小家电电路供电。",
    category: "electrical",
  },
  {
    id: 669,
    question: "A garage door opener should be connected to:",
    options: [
      "The nearest available outlet regardless of circuit type",
      "A ceiling-mounted outlet on a dedicated or shared general-use circuit, not on a GFCI circuit that could trip and disable the opener",
      "A 240V circuit",
      "The lighting circuit for the garage",
    ],
    correctAnswer: 1,
    explanation:
      "车库门开启器应连接到天花板安装的插座上。虽然NEC要求车库中的插座需要GFCI保护，但车库门开启器插座的GFCI要求有特定的例外或应使用GFCI断路器以避免误跳闸。",
    category: "electrical",
  },
  {
    id: 670,
    question: "The electrical requirements for a residential swimming pool include:",
    options: [
      "No special requirements beyond normal residential wiring",
      "GFCI protection for all pool equipment, proper bonding of metal parts, and minimum clearance distances for overhead wires",
      "Only a standard 15-amp circuit for the pump",
      "Battery-powered equipment only",
    ],
    correctAnswer: 1,
    explanation:
      "住宅游泳池的电气要求包括所有泳池设备的GFCI保护、金属部件的适当接合（等电位连接）以及架空电线的最小间距要求。这些严格要求是为了防止触电事故。",
    category: "electrical",
  },
  {
    id: 671,
    question: "What is the minimum distance between an overhead electrical service line and a swimming pool?",
    options: [
      "5 feet",
      "10 feet",
      "22.5 feet for service drop conductors",
      "50 feet",
    ],
    correctAnswer: 2,
    explanation:
      "架空电力入户线与游泳池之间的最小距离为22.5英尺（对于入户电线）。这个距离确保在池边使用长杆或其他物品时不会接触到电线，防止触电事故。",
    category: "electrical",
  },
  {
    id: 672,
    question: "Spa (hot tub) electrical installations require:",
    options: [
      "A standard 120V outlet within 5 feet of the spa",
      "A dedicated circuit with GFCI protection and a disconnect switch within sight of the spa",
      "No disconnect switch if the spa is portable",
      "Only battery backup power",
    ],
    correctAnswer: 1,
    explanation:
      "温泉浴缸（热水浴缸）的电气安装需要一个带GFCI保护的专用电路和一个在温泉浴缸视线范围内的断路开关。断路开关必须距温泉浴缸至少5英尺。",
    category: "electrical",
  },
  {
    id: 673,
    question: "Outdoor kitchen electrical outlets must be:",
    options: [
      "Standard non-GFCI outlets",
      "GFCI-protected and rated for wet or damp locations with weatherproof covers",
      "Installed without covers for easy access",
      "Connected to the indoor kitchen circuit",
    ],
    correctAnswer: 1,
    explanation:
      "室外厨房电气插座必须是GFCI保护的，并且使用额定用于潮湿或湿润位置的防水盖。这防止了在室外暴露于天气的环境中发生触电事故。",
    category: "electrical",
  },
  {
    id: 674,
    question: "What type of transformer is typically used for low-voltage landscape lighting?",
    options: [
      "A 240V to 120V step-down transformer",
      "A 120V to 12V or 24V magnetic or electronic transformer",
      "A 480V industrial transformer",
      "No transformer is needed for landscape lighting",
    ],
    correctAnswer: 1,
    explanation:
      "低压景观照明通常使用120V到12V或24V的磁性或电子变压器。低压系统更安全，因为12V的电压在户外潮湿环境中不会造成严重的触电危险。",
    category: "electrical",
  },
  {
    id: 675,
    question: "A photocell control on an outdoor light fixture:",
    options: [
      "Dims the light based on indoor activity",
      "Automatically turns the light on at dusk and off at dawn based on ambient light levels",
      "Controls the light based on temperature",
      "Requires manual activation each evening",
    ],
    correctAnswer: 1,
    explanation:
      "室外灯具上的光电控制器根据环境光线水平在黄昏时自动开灯，在黎明时关灯。这是一种节能的自动照明控制方式，符合加州Title 24的要求。",
    category: "electrical",
  },
  {
    id: 676,
    question: "Motion sensor lights installed on the exterior of a home should be:",
    options: [
      "Connected to a standard indoor switch only",
      "Installed at appropriate heights and angles to detect motion, with adjustable sensitivity and timer settings",
      "Always left in the 'on' position",
      "Hardwired without any manual override",
    ],
    correctAnswer: 1,
    explanation:
      "安装在房屋外部的运动感应灯应安装在适当的高度和角度以检测运动，具有可调灵敏度和定时器设置。正确的安装确保有效的安全照明和最小的误触发。",
    category: "electrical",
  },
  {
    id: 677,
    question: "What is the primary difference between GFCI and AFCI protection?",
    options: [
      "They protect against the same type of fault",
      "GFCI protects against ground faults (shock hazards); AFCI protects against arc faults (fire hazards)",
      "AFCI is used only in bathrooms",
      "GFCI is used only in bedrooms",
    ],
    correctAnswer: 1,
    explanation:
      "GFCI和AFCI保护的主要区别是：GFCI防止接地故障（触电危险），而AFCI防止电弧故障（火灾危险）。GFCI监测电流不平衡，AFCI监测电弧特征。",
    category: "electrical",
  },
  {
    id: 678,
    question: "Where does the current NEC require AFCI protection in residential dwellings?",
    options: [
      "Only in kitchens and bathrooms",
      "In kitchens, family rooms, dining rooms, living rooms, parlors, libraries, dens, bedrooms, sunrooms, recreation rooms, closets, hallways, laundry areas, and similar rooms",
      "Only in bedrooms",
      "Only in garage circuits",
    ],
    correctAnswer: 1,
    explanation:
      "当前NEC要求在厨房、家庭室、餐厅、客厅、卧室、阳光房、娱乐室、衣橱、走廊、洗衣区等类似房间提供AFCI保护。AFCI要求的范围随着规范更新不断扩大。",
    category: "electrical",
  },
  {
    id: 679,
    question: "A combination AFCI/GFCI circuit breaker provides:",
    options: [
      "Only arc fault protection",
      "Both arc fault and ground fault protection in a single device",
      "Only ground fault protection",
      "Surge protection and arc fault protection",
    ],
    correctAnswer: 1,
    explanation:
      "组合AFCI/GFCI断路器在单个设备中同时提供电弧故障和接地故障保护。这种组合断路器简化了安装，并满足两种保护要求。",
    category: "electrical",
  },
  {
    id: 680,
    question: "Outdoor electrical boxes in wet locations must use:",
    options: [
      "Standard indoor electrical boxes",
      "Weatherproof boxes with 'in-use' covers that protect the outlet while a cord is plugged in",
      "Open-face boxes for ventilation",
      "Wooden boxes with weather sealing",
    ],
    correctAnswer: 1,
    explanation:
      "潮湿位置的室外电气盒必须使用防水盒，配有\"使用中\"盖板，在插头插入时仍然保护插座。这防止了雨水和湿气进入电气连接处，降低触电风险。",
    category: "electrical",
  },
  {
    id: 681,
    question: "Schedule 40 PVC conduit is acceptable for underground electrical installations at what minimum burial depth for residential circuits?",
    options: [
      "6 inches",
      "18 inches for PVC conduit carrying residential branch circuits",
      "36 inches",
      "No burial depth is required",
    ],
    correctAnswer: 1,
    explanation:
      "PVC管道在住宅分支电路的地下安装中通常要求最小埋深18英寸。使用刚性金属管道时可以减小至6英寸。直埋电缆（UF电缆）通常需要24英寸的埋深。",
    category: "electrical",
  },
  {
    id: 682,
    question: "Rigid metal conduit (RMC) underground requires a minimum burial depth of:",
    options: [
      "6 inches",
      "12 inches",
      "18 inches",
      "24 inches",
    ],
    correctAnswer: 0,
    explanation:
      "刚性金属管道（RMC）地下安装要求最小埋深6英寸。由于金属管道本身提供了机械保护，因此与PVC管道相比所需的埋深较浅。",
    category: "electrical",
  },
  {
    id: 683,
    question: "Wire fill calculations for conduit are important because:",
    options: [
      "Overfilling conduit is acceptable if the wires fit",
      "Exceeding maximum fill percentages can cause overheating, difficulty pulling wires, and insulation damage",
      "Wire fill has no effect on electrical performance",
      "Conduit fill limits only apply to commercial installations",
    ],
    correctAnswer: 1,
    explanation:
      "管道填充率计算很重要，因为超过最大填充百分比会导致过热、拉线困难和绝缘损坏。NEC规定单根导线管道填充率最大53%，两根为31%，三根或以上为40%。",
    category: "electrical",
  },
  {
    id: 684,
    question: "Derating factors for electrical conductors apply when:",
    options: [
      "Only in outdoor installations",
      "More than 3 current-carrying conductors are bundled together, requiring a reduction in allowable ampacity",
      "The wire is made of aluminum",
      "The circuit is less than 10 feet long",
    ],
    correctAnswer: 1,
    explanation:
      "当超过3根载流导线捆绑在一起时，需要应用电气导体的降额因子，降低允许的安培容量。这是因为密集排列的导线散热困难，温度升高会影响绝缘性能。",
    category: "electrical",
  },
  {
    id: 685,
    question: "When upgrading a residential electrical service from 100 amps to 200 amps, what components typically need to be replaced?",
    options: [
      "Only the main breaker",
      "The meter base, service entrance cable, main panel, and possibly the service drop from the utility",
      "Only the interior outlets",
      "Only the grounding electrode",
    ],
    correctAnswer: 1,
    explanation:
      "从100安培升级到200安培时，通常需要更换电表底座、入户电缆、主配电盘，以及可能需要电力公司升级入户线路。这是一项重大的电气改造工程。",
    category: "electrical",
  },
  {
    id: 686,
    question: "What are the two most common types of residential meter bases?",
    options: [
      "Square and round",
      "Ringless (no external ring) and ring-type (with locking ring) meter sockets",
      "Digital and analog",
      "Single-phase and three-phase only",
    ],
    correctAnswer: 1,
    explanation:
      "住宅最常见的两种电表底座是无环式（无外部环）和有环式（带锁定环）电表插座。无环式是较新的设计，使用内部闩锁固定电表。",
    category: "electrical",
  },
  {
    id: 687,
    question: "A CT (Current Transformer) cabinet is used in residential applications when:",
    options: [
      "The home has only a 100-amp service",
      "The electrical service exceeds 200 amps, and the utility requires CT metering for accurate measurement",
      "The home is all-electric with no gas service",
      "Solar panels are installed on the roof",
    ],
    correctAnswer: 1,
    explanation:
      "当住宅电气服务超过200安培时，电力公司要求使用CT（电流互感器）柜进行精确计量。CT柜安装在电表和主配电盘之间，测量大电流而不需要大电流通过电表本身。",
    category: "electrical",
  },
  {
    id: 688,
    question: "Ground fault detection works by:",
    options: [
      "Measuring the total current flowing in the circuit",
      "Monitoring the difference between current on the hot and neutral conductors; a difference indicates current leaking to ground",
      "Checking the resistance of the ground wire",
      "Measuring the voltage at the outlet",
    ],
    correctAnswer: 1,
    explanation:
      "接地故障检测通过监测火线和零线导体上的电流差异来工作。如果存在差异，说明电流正在通过地线或人体泄漏到地面。GFCI在检测到约5毫安的差异时会跳闸。",
    category: "electrical",
  },
  {
    id: 689,
    question: "The NEC requires GFCI protection for all 125V, 15- and 20-amp outlets in which locations?",
    options: [
      "Bedrooms and living rooms only",
      "Bathrooms, kitchens (within 6 feet of a sink), garages, outdoors, crawl spaces, unfinished basements, and near laundry sinks",
      "Only in bathrooms",
      "Only in outdoor locations",
    ],
    correctAnswer: 1,
    explanation:
      "NEC要求在浴室、厨房（水槽6英尺范围内）、车库、室外、爬行空间、未完成地下室和洗衣水槽附近的所有125V、15和20安培插座提供GFCI保护。",
    category: "electrical",
  },
  {
    id: 690,
    question: "What is the minimum number of 20-amp small appliance circuits required for a residential kitchen?",
    options: [
      "1",
      "2",
      "3",
      "4",
    ],
    correctAnswer: 1,
    explanation:
      "住宅厨房至少需要2个20安培的小家电电路。这些电路为厨房台面上的插座供电，不应用于照明或其他固定设备。",
    category: "electrical",
  },
  {
    id: 691,
    question: "California Title 24 requires that outdoor lighting on residential buildings be:",
    options: [
      "Controlled by indoor switches only with no automatic controls",
      "Controlled by a motion sensor, photosensor, or astronomical time switch for energy efficiency",
      "Left on continuously for security",
      "Limited to one fixture per entrance",
    ],
    correctAnswer: 1,
    explanation:
      "加州Title 24要求住宅建筑的室外照明由运动传感器、光电传感器或天文时间开关控制，以提高能源效率。这确保灯光仅在需要时亮起。",
    category: "electrical",
  },
  {
    id: 692,
    question: "What is the maximum distance from any point along a kitchen countertop to an electrical outlet?",
    options: [
      "12 inches",
      "24 inches",
      "36 inches",
      "48 inches",
    ],
    correctAnswer: 1,
    explanation:
      "厨房台面上任何一点到电气插座的最大距离为24英寸（2英尺）。这意味着插座间距不应超过48英寸，以确保不需要使用延长线。",
    category: "electrical",
  },
  {
    id: 693,
    question: "A GFCI outlet has a 'TEST' and 'RESET' button. How often should homeowners test GFCI outlets?",
    options: [
      "Never; they are self-testing",
      "Monthly, by pressing the TEST button to verify the outlet trips and then pressing RESET",
      "Once every 10 years",
      "Only after a power outage",
    ],
    correctAnswer: 1,
    explanation:
      "GFCI插座应每月测试一次，按下TEST按钮验证插座是否跳闸，然后按RESET恢复。定期测试确保GFCI保护功能正常工作，保护用户免受触电危险。",
    category: "electrical",
  },
  {
    id: 694,
    question: "What is the standard wire gauge for a 20-amp, 120V residential circuit?",
    options: [
      "14 AWG",
      "12 AWG",
      "10 AWG",
      "8 AWG",
    ],
    correctAnswer: 1,
    explanation:
      "20安培、120V住宅电路的标准线规是12 AWG（美国线规）。使用较小的14 AWG线在20安培电路上是不安全的，因为它无法安全地承载额定电流。",
    category: "electrical",
  },
  {
    id: 695,
    question: "What is the standard wire gauge for a 15-amp, 120V residential circuit?",
    options: [
      "14 AWG",
      "12 AWG",
      "10 AWG",
      "16 AWG",
    ],
    correctAnswer: 0,
    explanation:
      "15安培、120V住宅电路的标准线规是14 AWG。14 AWG铜线的额定载流量为15安培，与15安培断路器匹配。",
    category: "electrical",
  },
  {
    id: 696,
    question: "What is the required height for electrical outlets above the finished floor in habitable rooms?",
    options: [
      "There is no specific NEC height requirement, but 12-18 inches is standard practice",
      "Exactly 12 inches",
      "Exactly 24 inches",
      "At least 36 inches",
    ],
    correctAnswer: 0,
    explanation:
      "NEC没有规定居住房间中电气插座距成品地面的具体高度要求，但12-18英寸是标准做法。ADA（美国残疾人法案）对无障碍住宅有额外的高度要求。",
    category: "electrical",
  },
  {
    id: 697,
    question: "In a residential bathroom, at least one outlet must be installed within what distance of the sink?",
    options: [
      "12 inches",
      "36 inches (3 feet) of the outside edge of each basin",
      "6 feet",
      "Anywhere in the bathroom is acceptable",
    ],
    correctAnswer: 1,
    explanation:
      "住宅浴室中，至少一个插座必须安装在每个洗脸盆外缘36英寸（3英尺）范围内。该插座必须是GFCI保护的，以防止在潮湿环境中触电。",
    category: "electrical",
  },
  {
    id: 698,
    question: "What is the maximum spacing allowed between receptacle outlets along a wall in a habitable room?",
    options: [
      "6 feet",
      "12 feet (so no point along the wall is more than 6 feet from an outlet)",
      "18 feet",
      "24 feet",
    ],
    correctAnswer: 1,
    explanation:
      "居住房间中沿墙壁的插座最大间距为12英尺，确保墙壁上任何一点距插座不超过6英尺。这消除了使用延长线的需要，降低了火灾风险。",
    category: "electrical",
  },
  {
    id: 699,
    question: "What type of cable is required for most residential interior wiring?",
    options: [
      "BX (armored cable) only",
      "NM-B (Non-Metallic sheathed cable, commonly known as Romex)",
      "USE (Underground Service Entrance) cable",
      "THHN wire without any sheathing",
    ],
    correctAnswer: 1,
    explanation:
      "大多数住宅室内布线使用NM-B（非金属护套电缆，通常称为Romex）。NM-B电缆适用于干燥室内位置，包含火线、零线和接地线。",
    category: "electrical",
  },
  {
    id: 700,
    question: "An inspector finds aluminum branch circuit wiring in a 1970s home. What is the primary concern?",
    options: [
      "Aluminum wiring is always safe and requires no attention",
      "Aluminum wiring can develop loose connections and overheating at termination points due to oxidation and thermal expansion differences, creating a fire hazard",
      "Aluminum wiring is not conductive enough for residential use",
      "The wire is too thick to fit in standard outlets",
    ],
    correctAnswer: 1,
    explanation:
      "1970年代房屋中的铝质分支电路布线的主要问题是铝线在端子处由于氧化和热膨胀差异可能产生松动连接和过热，形成火灾隐患。建议使用COPALUM或AlumiConn连接器进行修复。",
    category: "electrical",
  },
  {
    id: 701,
    question: "What is the approved method for connecting aluminum wiring to copper-only-rated devices?",
    options: [
      "Twisting the wires together with electrical tape",
      "Using approved connectors such as COPALUM crimps or AlumiConn lugs rated for AL-CU connections",
      "Soldering the aluminum to copper",
      "No connection method is safe; all aluminum wiring must be completely replaced",
    ],
    correctAnswer: 1,
    explanation:
      "将铝线连接到仅额定铜线的设备时，应使用经批准的连接器，如COPALUM压接或AlumiConn接线端子，这些额定用于铝铜（AL-CU）连接。这些连接器确保安全可靠的电气连接。",
    category: "electrical",
  },
  {
    id: 702,
    question: "The main electrical panel in a residence must have a minimum of how many feet of clear working space in front of it?",
    options: [
      "2 feet",
      "3 feet (36 inches deep, 30 inches wide, and headroom to the ceiling or 6.5 feet)",
      "5 feet",
      "No clearance is required",
    ],
    correctAnswer: 1,
    explanation:
      "住宅主配电盘前必须有至少3英尺（36英寸深、30英寸宽、头顶净空至天花板或6.5英尺）的净工作空间。这确保了安全操作和应急通道。",
    category: "electrical",
  },
  {
    id: 703,
    question: "What is a tandem (duplex/slim) breaker, and when is its use appropriate?",
    options: [
      "A breaker that controls two circuits but occupies one slot in the panel, permitted only in panels and slots designed for them",
      "A breaker with twice the amperage of a standard breaker",
      "A breaker that can be used in any panel slot",
      "A breaker specifically designed for 240V circuits",
    ],
    correctAnswer: 0,
    explanation:
      "串联（双联/薄型）断路器控制两个电路但只占用配电盘中的一个槽位，仅在专为其设计的配电盘和槽位中允许使用。在非设计槽位中使用串联断路器违反规范。",
    category: "electrical",
  },
  {
    id: 704,
    question: "A double-tapped breaker means:",
    options: [
      "The breaker has been tested twice",
      "Two wires are connected to a single breaker terminal that is only rated for one wire",
      "The breaker controls two separate rooms",
      "The breaker is double-insulated",
    ],
    correctAnswer: 1,
    explanation:
      "双线并接断路器意味着两根线连接到只额定一根线的单个断路器端子。这是不安全的，因为可能导致松动连接和过热。除非断路器额定可接两根线，否则需要修正。",
    category: "electrical",
  },
  {
    id: 705,
    question: "Federal Pacific Electric (FPE) Stab-Lok panels are considered a safety concern because:",
    options: [
      "They are too large for modern homes",
      "Testing has shown their breakers may fail to trip under overcurrent conditions, creating a fire hazard",
      "They use aluminum bus bars that corrode",
      "They are no longer manufactured, so replacement parts are expensive",
    ],
    correctAnswer: 1,
    explanation:
      "Federal Pacific Electric（FPE）Stab-Lok配电盘被认为是安全隐患，因为测试表明其断路器在过电流条件下可能无法跳闸，形成火灾危险。许多检查员和电气专家建议更换此类配电盘。",
    category: "electrical",
  },
  {
    id: 706,
    question: "Zinsco/Sylvania panels are flagged during inspections because:",
    options: [
      "They have an aesthetically outdated appearance",
      "The breakers can develop poor connections with the bus bar, leading to overheating, arcing, and fire risk",
      "They are too small for modern electrical loads",
      "They use a unique breaker size no longer available",
    ],
    correctAnswer: 1,
    explanation:
      "Zinsco/Sylvania配电盘在检查中被标记，因为断路器可能与母线产生不良连接，导致过热、电弧和火灾风险。铝母线腐蚀是常见问题，建议由电气师评估和可能更换。",
    category: "electrical",
  },
  {
    id: 707,
    question: "What is the required minimum height for a residential electrical panel from the floor?",
    options: [
      "No minimum height requirement",
      "The top of the panel or the highest breaker position should not exceed 6 feet 7 inches from the floor",
      "The panel must be at exactly 5 feet",
      "The bottom of the panel must be at least 4 feet from the floor",
    ],
    correctAnswer: 1,
    explanation:
      "配电盘或最高断路器位置不应超过距地面6英尺7英寸。这确保了操作人员可以安全地操作所有断路器。配电盘也应安装在不低于地面的位置以避免水损。",
    category: "electrical",
  },
  {
    id: 708,
    question: "What is the purpose of the main bonding jumper in an electrical service panel?",
    options: [
      "To connect the hot wires to the neutral",
      "To connect the neutral bus to the equipment grounding bus and the panel enclosure, ensuring fault current returns to the source",
      "To increase the amperage capacity of the panel",
      "To connect the panel to a backup generator",
    ],
    correctAnswer: 1,
    explanation:
      "主配电盘中的主接合跨接线将中性母线连接到设备接地母线和面板外壳，确保故障电流返回到电源。这是安全接地系统的关键组成部分。",
    category: "electrical",
  },
  {
    id: 709,
    question: "In a sub-panel (remote distribution panel), the neutral and ground buses must be:",
    options: [
      "Bonded together just like in the main panel",
      "Separated (isolated from each other), with a separate ground wire run back to the main panel",
      "Connected to the same bus bar with a jumper",
      "Left unconnected",
    ],
    correctAnswer: 1,
    explanation:
      "在子面板（远程配电盘）中，中性线和接地母线必须分开（相互隔离），并从子面板运行单独的接地线回到主面板。这防止中性电流流过设备接地路径。",
    category: "electrical",
  },
  {
    id: 710,
    question: "What is the minimum service size required for a new single-family home in California?",
    options: [
      "60 amps",
      "100 amps",
      "200 amps",
      "400 amps",
    ],
    correctAnswer: 1,
    explanation:
      "加州新单户住宅所需的最低服务规模为100安培。然而，大多数新建住宅安装200安培服务以适应现代电气负载，特别是有电动汽车充电和空调的家庭。",
    category: "electrical",
  },
  {
    id: 711,
    question: "What is the NEC requirement for tamper-resistant receptacles in residential dwellings?",
    options: [
      "They are optional in all locations",
      "All 15- and 20-amp, 125V receptacles in dwelling units must be tamper-resistant",
      "Only outlets in children's bedrooms need to be tamper-resistant",
      "Only outlets below 24 inches must be tamper-resistant",
    ],
    correctAnswer: 1,
    explanation:
      "NEC要求住宅单元中所有15和20安培、125V的插座必须是防篡改的。防篡改插座内部有弹簧加载的快门，防止儿童将物品插入插座。",
    category: "electrical",
  },
  {
    id: 712,
    question: "California requires new homes to have pre-wiring for electric vehicle charging. What does this typically include?",
    options: [
      "A fully installed Level 2 charger",
      "A dedicated 240V, 40-amp minimum circuit with conduit or wiring from the panel to the garage, or an installed outlet",
      "Only a standard 120V outlet in the garage",
      "A solar panel system dedicated to EV charging",
    ],
    correctAnswer: 1,
    explanation:
      "加州要求新住宅预装电动汽车充电线路，通常包括从配电盘到车库的专用240V、最低40安培电路配管道或布线，或已安装的插座（CALGreen规范要求）。",
    category: "electrical",
  },
  {
    id: 713,
    question: "What is the NEC requirement for bathroom receptacle circuits?",
    options: [
      "Bathroom outlets can share a circuit with bedroom outlets",
      "At least one 20-amp circuit must serve only the bathroom receptacle(s), though it may serve multiple bathrooms",
      "A 15-amp circuit is sufficient for bathroom outlets",
      "No dedicated circuit is required for bathrooms",
    ],
    correctAnswer: 1,
    explanation:
      "NEC要求至少一个20安培电路专门为浴室插座供电，该电路可以服务多个浴室。浴室插座不应与其他房间共享电路（除非是专用浴室电路）。",
    category: "electrical",
  },
  {
    id: 714,
    question: "What type of outlet is required in a garage for general use?",
    options: [
      "A standard 15-amp outlet with no special protection",
      "At least one GFCI-protected 120V outlet",
      "Only 240V outlets are required",
      "No outlets are required in a garage",
    ],
    correctAnswer: 1,
    explanation:
      "车库至少需要一个GFCI保护的120V插座。NEC要求车库中的所有125V、15和20安培插座都必须有GFCI保护，以防止在可能潮湿的车库环境中触电。",
    category: "electrical",
  },
  {
    id: 715,
    question: "When a home inspector finds an electrical panel in a bathroom, this is:",
    options: [
      "Perfectly acceptable by current code",
      "A code violation; electrical panels are not permitted in bathrooms due to moisture and safety concerns",
      "Acceptable if the panel is GFCI protected",
      "Only a problem if the bathroom has a bathtub",
    ],
    correctAnswer: 1,
    explanation:
      "在浴室中安装配电盘违反规范。由于水分和安全问题，电气面板不允许安装在浴室中。面板需要保持干燥且可安全操作的位置。",
    category: "electrical",
  },
  {
    id: 716,
    question: "What is the purpose of a bonding wire around a swimming pool?",
    options: [
      "To provide electrical power to pool lights",
      "To create an equipotential bonding grid that minimizes voltage differences around the pool, reducing shock risk",
      "To heat the pool water",
      "To ground the pool pump motor only",
    ],
    correctAnswer: 1,
    explanation:
      "游泳池周围的接合线的目的是创建等电位接合网格，最大限度地减少泳池周围的电压差异，降低触电风险。所有金属部件和导电表面都必须被接合到这个网格中。",
    category: "electrical",
  },
  {
    id: 717,
    question: "What minimum wire size is required for a 30-amp, 240V dryer circuit?",
    options: [
      "14 AWG",
      "12 AWG",
      "10 AWG",
      "8 AWG",
    ],
    correctAnswer: 2,
    explanation:
      "30安培、240V干衣机电路需要最小10 AWG线规。现代规范要求使用4线（10/3 with ground）配置，包括两根火线、一根中性线和一根接地线。",
    category: "electrical",
  },
  {
    id: 718,
    question: "A home inspector finds that the grounding electrode conductor is connected to a water pipe. This is acceptable only if:",
    options: [
      "The water pipe is copper and extends at least 10 feet underground in direct contact with earth",
      "The water pipe is made of any material",
      "The water pipe is located in the attic",
      "This connection is never acceptable",
    ],
    correctAnswer: 0,
    explanation:
      "接地极导线连接到水管是可以接受的，但前提是水管是金属（铜）的且在土壤中直接接触延伸至少10英尺。此外，还需要补充接地极（如接地棒）。",
    category: "electrical",
  },
  {
    id: 719,
    question: "What is the NEC-required minimum number of grounding electrodes for a residential electrical service?",
    options: [
      "One ground rod only",
      "Two ground rods (or one rod that measures 25 ohms or less to ground, or a concrete-encased electrode)",
      "Three ground rods",
      "No ground rods are required if a water pipe ground exists",
    ],
    correctAnswer: 1,
    explanation:
      "NEC要求住宅电气服务至少有两根接地棒（或一根测量接地电阻为25欧姆或以下的接地棒，或混凝土包封电极）。两根接地棒间距至少6英尺。",
    category: "electrical",
  },
  {
    id: 720,
    question: "What is the maximum overcurrent protection for a #14 AWG copper wire?",
    options: [
      "10 amps",
      "15 amps",
      "20 amps",
      "30 amps",
    ],
    correctAnswer: 1,
    explanation:
      "#14 AWG铜线的最大过电流保护为15安培。将#14 AWG线连接到20安培断路器是不安全的，因为线可能在断路器跳闸之前过热。",
    category: "electrical",
  },
  {
    id: 721,
    question: "NEC requires that all 240V circuits for residential ranges and ovens be protected by breakers no larger than:",
    options: [
      "30 amps",
      "40 amps",
      "50 amps",
      "The size depends on the appliance rating and wire gauge installed",
    ],
    correctAnswer: 3,
    explanation:
      "住宅灶具和烤箱的240V电路断路器大小取决于电器的额定功率和安装的线规。典型的电灶使用40或50安培断路器配相应线规（8 AWG或6 AWG）。",
    category: "electrical",
  },
  {
    id: 722,
    question: "When a solar PV system is installed on a home, NEC requires rapid shutdown capability. What does this mean?",
    options: [
      "The system must shut down within 1 hour of a power outage",
      "Conductors on or within the array must be reduced to safe voltage levels within 30 seconds of initiating shutdown",
      "The inverter must shut down only at night",
      "The utility company remotely shuts down the system",
    ],
    correctAnswer: 1,
    explanation:
      "NEC要求太阳能光伏系统的快速关断功能，即在启动关断后30秒内将阵列上或内的导线降低到安全电压水平。这保护消防员和急救人员在屋顶工作时的安全。",
    category: "electrical",
  },
  {
    id: 723,
    question: "What type of inverter converts DC power from solar panels to AC power for home use?",
    options: [
      "A rotary converter",
      "A string inverter or microinverter",
      "A transformer only",
      "A battery charger",
    ],
    correctAnswer: 1,
    explanation:
      "串式逆变器或微型逆变器将太阳能板产生的直流电转换为家用交流电。串式逆变器处理一组面板的输出，而微型逆变器安装在每个面板下方单独转换。",
    category: "electrical",
  },
  {
    id: 724,
    question: "California's NEM (Net Energy Metering) policy allows homeowners with solar to:",
    options: [
      "Sell electricity to their neighbors directly",
      "Receive credit for excess energy exported to the grid, offset against energy consumed from the grid",
      "Avoid all utility charges completely",
      "Generate electricity tax-free",
    ],
    correctAnswer: 1,
    explanation:
      "加州的净能源计量（NEM）政策允许拥有太阳能的房主获得出口到电网的多余能源的信用额度，用于抵消从电网消费的能源费用。NEM 3.0对补偿费率进行了调整。",
    category: "electrical",
  },
  {
    id: 725,
    question: "What is the required label on the main electrical panel when a solar PV system is connected?",
    options: [
      "No additional labeling is required",
      "A warning label indicating the presence of a second power source (solar) that may energize the system even when the main breaker is off",
      "Only the solar company's logo",
      "A label showing the panel's age",
    ],
    correctAnswer: 1,
    explanation:
      "当太阳能光伏系统连接时，主配电盘上需要贴有警告标签，说明存在第二电源（太阳能），即使主断路器关闭，系统仍可能带电。这对维修人员和消防员的安全至关重要。",
    category: "electrical",
  },
  {
    id: 726,
    question: "An electric water heater typically requires what circuit specification?",
    options: [
      "A 15-amp, 120V shared circuit",
      "A dedicated 30-amp, 240V circuit with 10 AWG wire",
      "A 50-amp, 240V circuit",
      "Any available 120V outlet",
    ],
    correctAnswer: 1,
    explanation:
      "电热水器通常需要专用30安培、240V电路配10 AWG线。这是大多数标准住宅电热水器的要求，确保有足够的电力供应加热元件。",
    category: "electrical",
  },
  {
    id: 727,
    question: "What is the NEC requirement for receptacles in hallways of residential dwellings?",
    options: [
      "No receptacles are required in hallways",
      "At least one receptacle is required in hallways that are 10 feet or longer",
      "One receptacle every 6 feet",
      "Receptacles are only required if the hallway has lighting",
    ],
    correctAnswer: 1,
    explanation:
      "NEC要求在10英尺或更长的住宅走廊中至少安装一个插座。这确保了走廊中有电源可用于清洁设备和其他需要。",
    category: "electrical",
  },
  {
    id: 728,
    question: "What is the maximum height for a light switch in a residential dwelling?",
    options: [
      "42 inches from the floor",
      "48 inches from the floor per accessibility standards, though NEC does not specify a maximum",
      "60 inches from the floor",
      "72 inches from the floor",
    ],
    correctAnswer: 1,
    explanation:
      "虽然NEC没有规定住宅中灯开关的最大高度，但无障碍标准建议不超过48英寸。标准安装高度通常为距地面44-48英寸，便于大多数人操作。",
    category: "electrical",
  },
  {
    id: 729,
    question: "A home inspector finds exposed NM (Romex) cable in a garage below 8 feet. This is a concern because:",
    options: [
      "NM cable looks unattractive in a garage",
      "NM cable is subject to physical damage in a garage and should be protected in conduit or other approved methods below 8 feet",
      "NM cable cannot carry enough current for garage circuits",
      "NM cable is not legal in California",
    ],
    correctAnswer: 1,
    explanation:
      "车库中8英尺以下的暴露NM（Romex）电缆是一个问题，因为它容易受到物理损坏。在8英尺以下的区域应使用管道或其他批准的方法保护电缆。",
    category: "electrical",
  },
  {
    id: 730,
    question: "What is the required circuit for a residential dishwasher?",
    options: [
      "A shared circuit with the garbage disposal is always acceptable",
      "A dedicated 20-amp, 120V circuit (or in some jurisdictions, it may share with the garbage disposal on a split circuit)",
      "A 15-amp circuit shared with kitchen lighting",
      "A 240V circuit",
    ],
    correctAnswer: 1,
    explanation:
      "住宅洗碗机通常需要专用20安培、120V电路（在某些管辖区，可以与垃圾处理器在分路电路上共享）。这确保了洗碗机在运行时有足够的电力供应。",
    category: "electrical",
  },
  {
    id: 731,
    question: "What is the proper way to secure NM (Romex) cable to framing members?",
    options: [
      "Using any available nails or screws",
      "Using approved cable staples or clamps within 12 inches of each box and at intervals not exceeding 4.5 feet",
      "Cable does not need to be secured to framing",
      "Using zip ties only",
    ],
    correctAnswer: 1,
    explanation:
      "NM电缆应使用经批准的电缆钉或夹具固定在每个盒子12英寸范围内，间距不超过4.5英尺。正确的固定防止电缆松动和损坏。",
    category: "electrical",
  },
  {
    id: 732,
    question: "What is the minimum burial depth for UF (Underground Feeder) cable when not in conduit?",
    options: [
      "6 inches",
      "12 inches",
      "24 inches",
      "36 inches",
    ],
    correctAnswer: 2,
    explanation:
      "UF（地下馈电）电缆在不使用管道时的最小埋深为24英寸。这个深度保护电缆免受挖掘和其他地面活动的损坏。",
    category: "electrical",
  },
  {
    id: 733,
    question: "An inspector discovers that the neutral and ground wires are bonded together in a sub-panel. This is:",
    options: [
      "Correct and required by code",
      "A deficiency; neutral and ground must be separated in sub-panels to prevent current from flowing on the ground conductor",
      "Only a problem in commercial buildings",
      "Acceptable if the sub-panel is close to the main panel",
    ],
    correctAnswer: 1,
    explanation:
      "子面板中中性线和接地线接合在一起是一个缺陷。在子面板中必须将它们分开，防止电流在接地导体上流动，否则可能导致设备外壳带电和触电危险。",
    category: "electrical",
  },
  {
    id: 734,
    question: "What is the purpose of an arc fault circuit interrupter (AFCI)?",
    options: [
      "To prevent electrical shock in wet areas",
      "To detect dangerous electrical arcing conditions that could start a fire and disconnect the circuit",
      "To prevent voltage surges",
      "To balance the load between circuits",
    ],
    correctAnswer: 1,
    explanation:
      "电弧故障断路器（AFCI）的目的是检测可能引发火灾的危险电弧条件并断开电路。电弧故障可能由损坏的线路、松动的连接或老化的绝缘引起。",
    category: "electrical",
  },
  {
    id: 735,
    question: "California Title 24 requires what percentage of permanently installed lighting to be high efficacy?",
    options: [
      "50%",
      "75%",
      "100% of all permanently installed luminaires must be high efficacy",
      "No requirement exists",
    ],
    correctAnswer: 2,
    explanation:
      "加州Title 24要求所有永久安装的灯具100%必须是高效能的。这意味着所有固定照明必须使用LED或等效的高效能光源，符合JA8标准。",
    category: "electrical",
  },
  {
    id: 736,
    question: "What is the NEC requirement for outdoor receptacles on a residential dwelling?",
    options: [
      "No outdoor outlets are required",
      "At least one GFCI-protected receptacle must be installed at the front and back of the dwelling, accessible from grade",
      "Only one outlet is needed for the entire exterior",
      "Outdoor outlets are only required if a deck is present",
    ],
    correctAnswer: 1,
    explanation:
      "NEC要求在住宅的前后各安装至少一个GFCI保护的插座，可从地面进入。这确保了户外有安全的电源，无需使用延长线从室内延伸。",
    category: "electrical",
  },
  {
    id: 737,
    question: "What is the maximum voltage drop recommended by the NEC for a branch circuit?",
    options: [
      "1%",
      "3% for the branch circuit (5% total including feeder)",
      "10%",
      "No voltage drop recommendation exists",
    ],
    correctAnswer: 1,
    explanation:
      "NEC建议分支电路的最大电压降为3%（包括馈线在内总共5%）。过大的电压降会导致设备性能下降、灯光变暗和电机过热。",
    category: "electrical",
  },
  {
    id: 738,
    question: "A home inspector notices that wire nuts are used to splice wires inside a wall without a junction box. This is:",
    options: [
      "Acceptable practice for experienced electricians",
      "A code violation; all wire splices must be enclosed in an accessible junction box",
      "Acceptable if the wire nuts are the correct size",
      "Only a violation for commercial buildings",
    ],
    correctAnswer: 1,
    explanation:
      "在没有接线盒的墙壁内部使用线帽拼接电线违反规范。所有电线拼接必须安装在可接近的接线盒内。隐藏的拼接无法检查，可能导致过热和火灾。",
    category: "electrical",
  },
  {
    id: 739,
    question: "What type of electrical box is required for a ceiling fan installation?",
    options: [
      "Any standard octagonal electrical box",
      "A fan-rated box (listed for fan support) capable of supporting the weight and dynamic loads of a ceiling fan",
      "A plastic old-work box",
      "No box is needed if the fan has its own mounting bracket",
    ],
    correctAnswer: 1,
    explanation:
      "吊扇安装需要使用额定支持吊扇的电气盒（标记为fan support），能够承受吊扇的重量和动态荷载。标准的灯具盒不足以承受吊扇运转时产生的振动和重量。",
    category: "electrical",
  },
  {
    id: 740,
    question: "What does the term 'back-stabbed' wiring refer to?",
    options: [
      "Wiring that has been sabotaged",
      "Wires pushed into spring-loaded holes in the back of receptacles rather than secured under screw terminals",
      "Wiring installed behind a wall",
      "Underground wiring",
    ],
    correctAnswer: 1,
    explanation:
      "背插式接线是指将电线推入插座背面的弹簧加载孔中，而不是固定在螺丝端子下。这种连接方式可能随时间松动，导致电弧和过热。螺丝端子连接更可靠。",
    category: "electrical",
  },
  {
    id: 741,
    question: "What is the NEC requirement for a laundry room receptacle?",
    options: [
      "A 15-amp circuit shared with the bathroom",
      "At least one 20-amp circuit dedicated to the laundry room receptacle(s)",
      "No specific requirement for laundry rooms",
      "A 30-amp circuit for the washer",
    ],
    correctAnswer: 1,
    explanation:
      "NEC要求洗衣房至少有一个专用20安培电路供给插座。这个专用电路确保洗衣机和其他洗衣设备有足够的电力供应，不会与其他房间共享。",
    category: "electrical",
  },
  {
    id: 742,
    question: "An inspector finds open knockouts in an electrical panel. Why is this a deficiency?",
    options: [
      "It looks unprofessional",
      "Open knockouts allow pests, dust, and debris to enter the panel and create a potential shock hazard",
      "It reduces the panel's ampacity",
      "It allows too much light into the panel",
    ],
    correctAnswer: 1,
    explanation:
      "配电盘上开放的敲落孔允许害虫、灰尘和碎片进入面板，并造成潜在的触电危险。所有未使用的敲落孔必须用适当的盖板封闭。",
    category: "electrical",
  },
  {
    id: 743,
    question: "What is the minimum size grounding electrode conductor for a 200-amp residential service?",
    options: [
      "#8 AWG copper",
      "#6 AWG copper",
      "#4 AWG copper",
      "#2 AWG copper",
    ],
    correctAnswer: 2,
    explanation:
      "200安培住宅服务的接地极导线最小尺寸为#4 AWG铜线。接地极导线将配电盘连接到接地电极（如接地棒），确保故障电流有安全的返回路径。",
    category: "electrical",
  },
  {
    id: 744,
    question: "What is the purpose of a ground rod in a residential electrical system?",
    options: [
      "To improve the speed of electricity",
      "To provide a path for fault current and lightning to dissipate into the earth, and to stabilize system voltage",
      "To increase the amperage available to the home",
      "To reduce the electric bill",
    ],
    correctAnswer: 1,
    explanation:
      "接地棒的目的是为故障电流和雷电提供消散到地面的路径，并稳定系统电压。接地棒通常为8英尺长的铜包钢棒，打入地面。",
    category: "electrical",
  },
  {
    id: 745,
    question: "The NEC requires that ground rods be driven to a minimum depth of:",
    options: [
      "4 feet",
      "6 feet",
      "8 feet",
      "10 feet",
    ],
    correctAnswer: 2,
    explanation:
      "NEC要求接地棒打入最小8英尺深度。标准接地棒为8英尺长，必须完全打入土壤中以确保与大地的良好接触和低接地电阻。",
    category: "electrical",
  },
  {
    id: 746,
    question: "An inspector notices a 20-amp breaker connected to 14 AWG wire. What should be reported?",
    options: [
      "This is a standard installation",
      "This is an overcurrent hazard; #14 AWG wire should only be protected by a maximum 15-amp breaker",
      "This is only a problem if the wire is aluminum",
      "The wire size does not matter as long as the breaker works",
    ],
    correctAnswer: 1,
    explanation:
      "20安培断路器连接到14 AWG线是过电流危害。#14 AWG线最多只能用15安培断路器保护。过大的断路器无法在线过热之前跳闸，可能引发火灾。",
    category: "electrical",
  },
  {
    id: 747,
    question: "What is the purpose of a dedicated circuit?",
    options: [
      "To limit the number of outlets in a room",
      "To provide an individual circuit for a single appliance or outlet, ensuring adequate power without shared loads",
      "To save money on wiring",
      "To make troubleshooting more difficult",
    ],
    correctAnswer: 1,
    explanation:
      "专用电路的目的是为单个电器或插座提供独立电路，确保充足的电力供应而不与其他负载共享。大型电器如冰箱、微波炉和洗碗机通常需要专用电路。",
    category: "electrical",
  },
  {
    id: 748,
    question: "California CALGreen Code requires what for electrical infrastructure in new residential construction?",
    options: [
      "Only standard electrical panels",
      "EV charging readiness, solar-ready conduit, and provisions for future battery storage",
      "All electric appliances with no gas connections",
      "Only LED lighting throughout",
    ],
    correctAnswer: 1,
    explanation:
      "加州CALGreen规范要求新住宅建设中包含电动汽车充电准备、太阳能准备管道和未来电池储能的预备设施。这些前瞻性要求支持加州的清洁能源目标。",
    category: "electrical",
  },
  {
    id: 749,
    question: "What is the minimum circuit requirement for a central air conditioning system?",
    options: [
      "A 15-amp, 120V circuit",
      "A dedicated circuit sized to the unit's nameplate rating with a disconnect switch within sight of the unit",
      "Any available 240V circuit shared with other appliances",
      "A 50-amp circuit regardless of unit size",
    ],
    correctAnswer: 1,
    explanation:
      "中央空调系统需要根据设备铭牌额定功率确定的专用电路，并在设备视线范围内安装断路开关。电路大小通常由制造商的最大过电流保护设备（MOCP）指定。",
    category: "electrical",
  },
  {
    id: 750,
    question: "What is the NEC requirement for receptacles in unfinished basements?",
    options: [
      "No receptacles are required",
      "At least one GFCI-protected receptacle is required, and all 125V receptacles must be GFCI protected",
      "Only 240V outlets are required",
      "Receptacles are optional but recommended",
    ],
    correctAnswer: 1,
    explanation:
      "NEC要求未完成地下室至少安装一个GFCI保护的插座，所有125V插座都必须是GFCI保护的。这是因为未完成地下室可能是潮湿环境，需要额外的触电保护。",
    category: "electrical",
  },
  {
    id: 751,
    question: "What is the proper electrical bonding requirement for gas piping in a home?",
    options: [
      "Gas piping does not need to be bonded",
      "The gas piping system must be bonded to the electrical grounding system to prevent the piping from becoming energized",
      "Gas piping should be isolated from all electrical systems",
      "Only copper gas piping needs bonding",
    ],
    correctAnswer: 1,
    explanation:
      "燃气管道系统必须与电气接地系统接合，以防止管道意外带电。这种接合使用适当规格的导线将燃气管道连接到接地系统，确保安全。",
    category: "electrical",
  },
  {
    id: 752,
    question: "When an inspector finds a Federal Pacific or Zinsco panel, the standard recommendation is:",
    options: [
      "No action needed",
      "Recommend evaluation by a licensed electrician with consideration for panel replacement due to known safety concerns",
      "Test each breaker individually during the inspection",
      "Simply note the brand in the report",
    ],
    correctAnswer: 1,
    explanation:
      "发现Federal Pacific或Zinsco面板时，标准建议是由持照电气师进行评估，并考虑更换配电盘，因为这些品牌存在已知的安全问题。这些面板可能无法可靠地跳闸以保护电路。",
    category: "electrical",
  },
  {
    id: 753,
    question: "What is the function of a GFCI breaker versus a GFCI receptacle?",
    options: [
      "They function identically; there is no difference",
      "A GFCI breaker protects the entire circuit from the panel; a GFCI receptacle protects that outlet and downstream outlets",
      "GFCI breakers are only for 240V circuits",
      "GFCI receptacles are more reliable than GFCI breakers",
    ],
    correctAnswer: 1,
    explanation:
      "GFCI断路器从配电盘保护整个电路上的所有设备；GFCI插座保护该插座和下游串联的插座。两者都检测接地故障，但保护范围不同。",
    category: "electrical",
  },
  {
    id: 754,
    question: "The NEC requires that the electrical grounding electrode system include a connection to:",
    options: [
      "Only the water heater",
      "The metal underground water pipe (if present and qualifying), plus a supplemental electrode such as ground rods or a concrete-encased electrode",
      "Only the gas piping",
      "Only the copper tubing in the HVAC system",
    ],
    correctAnswer: 1,
    explanation:
      "NEC要求接地电极系统包括与金属地下水管（如果存在且符合条件）的连接，加上补充电极（如接地棒或混凝土包封电极）。多重接地提供了更可靠的接地系统。",
    category: "electrical",
  },
  {
    id: 755,
    question: "What is a Ufer ground (concrete-encased electrode)?",
    options: [
      "A type of ground rod made of copper",
      "A grounding electrode consisting of rebar or bare copper conductor encased in the concrete foundation footing",
      "A portable grounding device",
      "A grounding clamp for water pipes",
    ],
    correctAnswer: 1,
    explanation:
      "Ufer接地（混凝土包封电极）是由包裹在混凝土基脚中的钢筋或裸铜导线组成的接地电极。混凝土的导电性和与土壤的大面积接触提供了优良的接地效果。",
    category: "electrical",
  },
  {
    id: 756,
    question: "An inspector finds that the service entrance cable insulation is cracked and deteriorating. What should be reported?",
    options: [
      "This is normal aging and not a concern",
      "Deteriorated service entrance cable insulation is a safety hazard requiring immediate attention by a licensed electrician",
      "Only cosmetic; recommend painting the cable",
      "This is only a concern during rain",
    ],
    correctAnswer: 1,
    explanation:
      "入户电缆绝缘开裂和劣化是安全隐患，需要持照电气师立即处理。裸露的导线可能导致触电、短路和火灾。入户电缆承载高电流，危险性更大。",
    category: "electrical",
  },
  {
    id: 757,
    question: "What is the purpose of the weather head (service head) on the electrical service entrance?",
    options: [
      "To increase the electrical capacity",
      "To prevent rain and moisture from entering the service entrance conduit and cables",
      "To connect the telephone lines",
      "To house the electric meter",
    ],
    correctAnswer: 1,
    explanation:
      "进线头（服务头）的目的是防止雨水和水分进入入户管道和电缆。进线头应位于电缆连接点上方，使电缆形成向下的\"滴水环\"以引导雨水远离。",
    category: "electrical",
  },
  {
    id: 758,
    question: "What is the required clearance between the electrical service drop and a residential roof?",
    options: [
      "No clearance is required",
      "3 feet above the roof surface that it passes over, with additional clearances for walkable roofs",
      "1 foot above the roof",
      "10 feet above the roof",
    ],
    correctAnswer: 1,
    explanation:
      "电力入户线与住宅屋顶之间至少需要3英尺的净空（在电线经过的屋顶表面上方）。可行走的屋顶有额外的间距要求。这些间距确保安全和防止意外接触。",
    category: "electrical",
  },
  {
    id: 759,
    question: "California requires that new homes built after 2020 include:",
    options: [
      "A minimum 400-amp electrical service",
      "A solar photovoltaic (PV) system as mandated by the California Energy Code",
      "A backup generator",
      "Three sub-panels",
    ],
    correctAnswer: 1,
    explanation:
      "加州要求2020年后建造的新住宅安装太阳能光伏（PV）系统，这是加州能源法规（Title 24）的强制要求。加州是第一个要求新住宅安装太阳能的州。",
    category: "electrical",
  },
  {
    id: 760,
    question: "What is the difference between a 120V circuit and a 240V circuit in a residential panel?",
    options: [
      "A 120V circuit uses a single-pole breaker connected to one bus bar leg; a 240V circuit uses a double-pole breaker connected to both legs",
      "A 120V circuit uses thicker wire than a 240V circuit",
      "There is no difference; they provide the same voltage",
      "A 240V circuit does not require a neutral wire in all cases",
    ],
    correctAnswer: 0,
    explanation:
      "120V电路使用单极断路器连接到一条母线腿；240V电路使用双极断路器连接到两条母线腿。240V电路在两条火线之间提供240V电压，用于大型电器。",
    category: "electrical",
  },
  {
    id: 761,
    question: "An inspector finds that someone installed a 30-amp breaker on a circuit with 12 AWG wire for a window AC unit. This is:",
    options: [
      "Acceptable for air conditioning units",
      "An overcurrent hazard; 12 AWG wire requires a maximum 20-amp breaker",
      "Required for all AC installations",
      "Only a problem if the AC runs continuously",
    ],
    correctAnswer: 1,
    explanation:
      "在12 AWG线的电路上安装30安培断路器是过电流危害。12 AWG线最大只能用20安培断路器保护。过大的断路器无法在线过热之前跳闸。",
    category: "electrical",
  },
  {
    id: 762,
    question: "What is the NEC requirement for smoke alarm circuits in new residential construction?",
    options: [
      "Battery-operated smoke alarms are sufficient",
      "Hardwired smoke alarms with battery backup, interconnected, on a dedicated circuit or a circuit that is not switched",
      "Smoke alarms connected to the lighting circuit",
      "Smoke alarms on a shared circuit with the doorbell",
    ],
    correctAnswer: 1,
    explanation:
      "NEC要求新住宅建设中的烟雾报警器为硬连线带电池备份，相互连接，安装在专用电路或不由开关控制的电路上。这确保了报警系统的可靠性。",
    category: "electrical",
  },
  {
    id: 763,
    question: "What is the maximum cord length allowed for a garbage disposal connection?",
    options: [
      "12 inches",
      "18 to 36 inches",
      "6 feet",
      "10 feet",
    ],
    correctAnswer: 1,
    explanation:
      "垃圾处理器连接的最大电源线长度为18到36英寸。电源线应足够短以避免在水槽下方形成环或纠缠，同时允许连接到附近的插座。",
    category: "electrical",
  },
  {
    id: 764,
    question: "A home inspector identifies knob-and-tube wiring in an older California home. What should be noted?",
    options: [
      "This wiring is perfectly safe and meets current codes",
      "Knob-and-tube wiring lacks a ground conductor, may have deteriorated insulation, should not be covered with insulation, and warrants evaluation by an electrician",
      "It should be immediately disconnected",
      "It only needs new fuses to be safe",
    ],
    correctAnswer: 1,
    explanation:
      "瓷管布线缺少接地导体，可能绝缘已劣化，不应被保温材料覆盖，需要电气师评估。虽然瓷管布线本身不违法，但存在已知的局限性和安全风险。",
    category: "electrical",
  },
  {
    id: 765,
    question: "Why is it important that electrical panels be properly labeled?",
    options: [
      "For aesthetic purposes only",
      "So that each circuit can be quickly identified for maintenance and in emergencies to shut off specific circuits",
      "Labeling is optional and not required by code",
      "To identify the manufacturer of the panel",
    ],
    correctAnswer: 1,
    explanation:
      "正确标记配电盘的重要性在于能快速识别每个电路，便于维护和紧急情况下关闭特定电路。NEC要求所有断路器都必须清楚标识其所服务的区域或设备。",
    category: "electrical",
  },
  {
    id: 766,
    question: "What is the maximum number of conductors allowed in a single wire nut?",
    options: [
      "It depends on the wire nut size rating and the gauge of the conductors being connected",
      "Always 2 wires maximum",
      "Always 5 wires maximum",
      "There is no limit",
    ],
    correctAnswer: 0,
    explanation:
      "单个线帽中允许的最大导线数取决于线帽的尺寸额定和所连接导线的规格。每种线帽都有制造商指定的导线组合范围，必须按照说明使用。",
    category: "electrical",
  },
  {
    id: 767,
    question: "What is the NEC requirement for electrical outlets on a balcony or deck of a dwelling unit?",
    options: [
      "No outlets are required",
      "At least one GFCI-protected receptacle with access from the balcony or deck is required if the area is accessible from the dwelling",
      "Two outlets are required on every balcony",
      "Only 240V outlets are required on decks",
    ],
    correctAnswer: 1,
    explanation:
      "NEC要求如果阳台或甲板可从住宅进入，则至少需要一个GFCI保护的插座，可从阳台或甲板进入。这为户外空间提供了安全的电源。",
    category: "electrical",
  },
  {
    id: 768,
    question: "An inspector finds a multi-wire branch circuit (MWBC) where the two hot conductors are on the same bus bar phase. This is:",
    options: [
      "Correct installation for an MWBC",
      "A code violation; the two hot conductors must be on opposite phases (using a 2-pole breaker or handle-tied breakers) to prevent neutral overloading",
      "Acceptable as long as the wire is thick enough",
      "Only a problem in commercial installations",
    ],
    correctAnswer: 1,
    explanation:
      "多线分支电路的两根火线在同一相上是规范违规。两根火线必须在相对的相位上（使用双极断路器或手柄联动断路器），以防止中性线过载。",
    category: "electrical",
  },
  {
    id: 769,
    question: "What is the minimum clearance between the ground and the lowest point of a residential service drop?",
    options: [
      "8 feet",
      "10 feet over residential property, 12 feet over driveways",
      "15 feet over all areas",
      "20 feet over all areas",
    ],
    correctAnswer: 1,
    explanation:
      "住宅入户线最低点与地面之间的最小间距为：住宅物业上方10英尺，车道上方12英尺。公共道路上方需要18英尺。这些间距确保安全通行。",
    category: "electrical",
  },
  {
    id: 770,
    question: "What safety feature is required on all new residential garage door openers in California?",
    options: [
      "A manual lock only",
      "Auto-reverse mechanism with photoelectric sensors and/or auto-reverse force sensing",
      "A timer that closes the door after 5 minutes",
      "Remote monitoring via smartphone",
    ],
    correctAnswer: 1,
    explanation:
      "加州要求所有新住宅车库门开启器配备自动反转机制，包括光电传感器和/或自动反转力感应。这些安全功能防止车库门在关闭过程中压伤人员或物品。",
    category: "electrical",
  },
  {
    id: 771,
    question: "What is the required GFCI trip threshold (in milliamps)?",
    options: [
      "1 milliamp",
      "4-6 milliamps (nominal 5 mA)",
      "15 milliamps",
      "30 milliamps",
    ],
    correctAnswer: 1,
    explanation:
      "GFCI跳闸阈值为4-6毫安（标称5mA）。这个低阈值在电流泄漏达到危险水平之前（通常10-20mA会导致无法放开，100mA可致命）就会切断电路。",
    category: "electrical",
  },
  {
    id: 772,
    question: "California Energy Code (Title 24) requires what type of controls for recessed lighting?",
    options: [
      "No controls are required for recessed lighting",
      "Dimming capability and automatic controls such as vacancy sensors or timers",
      "Only on/off switches",
      "Sound-activated controls",
    ],
    correctAnswer: 1,
    explanation:
      "加州能源法规（Title 24）要求筒灯具备调光功能和自动控制（如空间传感器或定时器）。这些要求旨在减少不必要的照明能耗。",
    category: "electrical",
  },
  {
    id: 773,
    question: "What is the NEC requirement for a disconnecting means for a permanently installed spa or hot tub?",
    options: [
      "A disconnect is not required for spas under 60 amps",
      "A readily accessible disconnect must be installed within sight of the spa, at least 5 feet from the spa water",
      "The circuit breaker in the main panel serves as the disconnect",
      "A disconnect is only required for public spas",
    ],
    correctAnswer: 1,
    explanation:
      "NEC要求永久安装的温泉浴缸必须在视线范围内安装一个容易到达的断路开关，距温泉水至少5英尺。这确保在紧急情况下可以快速切断电源。",
    category: "electrical",
  },
  {
    id: 774,
    question: "What does the term 'service lateral' refer to in residential electrical?",
    options: [
      "The overhead wire from the pole to the house",
      "The underground electrical service conductors from the utility transformer to the meter base",
      "The wiring between the panel and the first outlet",
      "The grounding wire to the ground rod",
    ],
    correctAnswer: 1,
    explanation:
      "入户地下线（service lateral）是指从电力公司变压器到电表底座的地下电气服务导线。这与架空的入户线（service drop）相对应，是地下配电系统的一部分。",
    category: "electrical",
  },
  {
    id: 775,
    question: "An inspector finds that the electrical meter is mounted on a deteriorated piece of plywood. This should be reported because:",
    options: [
      "Plywood does not match the home's exterior",
      "The mounting surface must be structurally sound to safely support the meter and service equipment; deteriorated plywood could compromise the installation",
      "Plywood is never an acceptable mounting surface",
      "This is only a utility company concern",
    ],
    correctAnswer: 1,
    explanation:
      "安装电表的表面必须结构牢固，以安全地支撑电表和服务设备。劣化的胶合板可能无法提供安全的安装，可能导致设备松动和连接问题。",
    category: "electrical",
  },
  {
    id: 776,
    question: "What is the NEC requirement for GFCI protection of a sump pump receptacle?",
    options: [
      "GFCI protection is always required for sump pumps",
      "GFCI protection is required for the receptacle in the basement/crawl space, but a dedicated non-GFCI single receptacle for the sump pump may be permitted in some jurisdictions",
      "Sump pumps must be hardwired and cannot use receptacles",
      "No electrical requirements apply to sump pumps",
    ],
    correctAnswer: 1,
    explanation:
      "关于污水泵GFCI保护的要求，NEC要求地下室/爬行空间中的插座需要GFCI保护，但在某些管辖区，污水泵的专用单插座可能允许不使用GFCI，以避免误跳闸导致地下室进水。",
    category: "electrical",
  },
  {
    id: 777,
    question: "What is the proper method for grounding a residential electrical system to a metal underground water pipe?",
    options: [
      "Wrap wire around the pipe loosely",
      "Use an approved grounding clamp on the street-side of the water meter within 5 feet of the pipe entering the building",
      "Attach the ground wire with electrical tape",
      "No clamp is needed; just touch the wire to the pipe",
    ],
    correctAnswer: 1,
    explanation:
      "将住宅电气系统接地到金属地下水管的正确方法是在水表的街道侧（管道进入建筑物5英尺范围内）使用经批准的接地夹。这确保了可靠的接地连接。",
    category: "electrical",
  },
  {
    id: 778,
    question: "When inspecting the interior of an electrical panel, what is the maximum percentage of available breaker spaces that should be used?",
    options: [
      "50%",
      "75%",
      "There is no NEC limit on fill, but at least two spare spaces are recommended for future circuits",
      "100% fill is never acceptable",
    ],
    correctAnswer: 2,
    explanation:
      "NEC没有规定配电盘的最大填充率限制，但建议至少保留两个空闲位置供未来电路使用。实际上，过满的配电盘表明可能需要升级或添加子面板。",
    category: "electrical",
  },
  {
    id: 779,
    question: "What is the NEC code requirement for bathroom lighting?",
    options: [
      "A window is sufficient as the only light source",
      "At least one wall switch-controlled luminaire must be installed in every bathroom",
      "Only a heat lamp is required",
      "No lighting is required if there is a window",
    ],
    correctAnswer: 1,
    explanation:
      "NEC要求每个浴室安装至少一个由墙壁开关控制的灯具。这确保了安全的照明，不依赖于可能不可用或不足的自然光。",
    category: "electrical",
  },
  {
    id: 780,
    question: "What is the minimum wire size for a 40-amp electric range circuit?",
    options: [
      "12 AWG",
      "10 AWG",
      "8 AWG copper",
      "6 AWG",
    ],
    correctAnswer: 2,
    explanation:
      "40安培电灶电路的最小线规为8 AWG铜线。8 AWG铜线的额定载流量为40安培（60°C端子额定）。50安培电路则需要6 AWG线。",
    category: "electrical",
  },
  {
    id: 781,
    question: "An exposed electrical junction box in a finished living space must have:",
    options: [
      "No cover; open boxes are acceptable in finished spaces",
      "A solid blank cover plate if no device is installed, or a device cover plate with receptacle or switch",
      "Only tape over the opening",
      "A removable wooden cover",
    ],
    correctAnswer: 1,
    explanation:
      "成品居住空间中暴露的电气接线盒必须有实心空白盖板（如果没有安装设备）或带插座/开关的设备盖板。开放的接线盒是触电和火灾隐患。",
    category: "electrical",
  },
  {
    id: 782,
    question: "What is the typical amperage rating for a residential microwave oven circuit?",
    options: [
      "15 amps shared with other kitchen outlets",
      "A dedicated 20-amp, 120V circuit",
      "30 amps, 240V",
      "40 amps, 240V",
    ],
    correctAnswer: 1,
    explanation:
      "住宅微波炉通常需要专用20安培、120V电路。微波炉可能消耗12-15安培的电流，与其他设备共享电路可能导致断路器频繁跳闸。",
    category: "electrical",
  },
  {
    id: 783,
    question: "What is the NEC requirement for receptacle outlets in a crawl space?",
    options: [
      "No receptacles are required in crawl spaces",
      "At least one GFCI-protected receptacle is required for servicing equipment in the crawl space",
      "Only 240V outlets are acceptable",
      "Multiple outlets every 6 feet are required",
    ],
    correctAnswer: 1,
    explanation:
      "NEC要求爬行空间至少安装一个GFCI保护的插座，用于维修该空间内的设备。这为在爬行空间中工作的维修人员提供了安全的电源。",
    category: "electrical",
  },
  {
    id: 784,
    question: "What is the code requirement for lighting in an attic with mechanical equipment?",
    options: [
      "No lighting is required in any attic",
      "A switch-controlled luminaire must be installed near the equipment, with a switch at the point of entry to the attic",
      "Only a pull-chain light is acceptable",
      "Flashlights are sufficient for attic access",
    ],
    correctAnswer: 1,
    explanation:
      "有机械设备的阁楼需要在设备附近安装由开关控制的灯具，开关位于阁楼入口处。这确保维修人员可以安全地进入和在阁楼中工作。",
    category: "electrical",
  },
  {
    id: 785,
    question: "What is the maximum distance from a kitchen sink to the nearest GFCI-protected outlet?",
    options: [
      "12 inches",
      "24 inches",
      "No specific distance from the sink; all countertop outlets within 6 feet of a water source must be GFCI protected",
      "48 inches",
    ],
    correctAnswer: 2,
    explanation:
      "NEC没有规定厨房水槽到最近GFCI保护插座的具体距离，但所有距水源6英尺范围内的台面插座必须是GFCI保护的。台面插座间距应确保任何点距插座不超过24英寸。",
    category: "electrical",
  },
  {
    id: 786,
    question: "What type of cable must be used for wiring in a wet location such as underground or exposed to weather?",
    options: [
      "NM-B (Romex)",
      "UF-B (Underground Feeder) cable or conductors in weatherproof conduit",
      "Standard lamp cord",
      "Any available cable with electrical tape wrapping",
    ],
    correctAnswer: 1,
    explanation:
      "在潮湿位置（如地下或暴露于天气中）必须使用UF-B（地下馈电）电缆或在防水管道中的导线。NM-B（Romex）不额定用于潮湿或地下使用。",
    category: "electrical",
  },
  {
    id: 787,
    question: "An inspector observes that the electrical service entrance cable runs through interior spaces without protection. This is a concern because:",
    options: [
      "It looks unsightly",
      "Service entrance conductors carry high current and should be enclosed in conduit or raceway when running through interior spaces for protection against physical damage",
      "It reduces the home's value only",
      "Interior routing is preferred over exterior",
    ],
    correctAnswer: 1,
    explanation:
      "入户电缆穿过室内空间而没有保护是一个问题，因为入户导线承载高电流，在穿过室内空间时应封闭在管道或线槽中，以防物理损坏。",
    category: "electrical",
  },
  {
    id: 788,
    question: "What is the NEC requirement for a lighting outlet in a residential garage?",
    options: [
      "No lighting is required in garages",
      "At least one wall switch-controlled luminaire is required in attached garages and detached garages with electric power",
      "Only a pull-chain light is needed",
      "Natural lighting through a window is sufficient",
    ],
    correctAnswer: 1,
    explanation:
      "NEC要求在附属车库和有电力的独立车库中至少安装一个由墙壁开关控制的灯具。这确保了进入车库时可以安全地照明空间。",
    category: "electrical",
  },
  {
    id: 789,
    question: "California Title 24 requires that bathroom exhaust fans:",
    options: [
      "Be manually controlled only",
      "Have a minimum airflow rating and be controlled by a humidity sensor or timer to ensure adequate ventilation",
      "Be optional if a window is present",
      "Run continuously at all times",
    ],
    correctAnswer: 1,
    explanation:
      "加州Title 24要求浴室排气扇具有最低气流额定值，并由湿度传感器或定时器控制以确保充分通风。这有助于控制湿度和防止霉菌生长。",
    category: "electrical",
  },
  {
    id: 790,
    question: "What is the code requirement for the height of exterior light switches?",
    options: [
      "There is no height requirement",
      "Switches should be installed between 42-48 inches from the floor for accessibility, consistent with interior standards",
      "They must be at exactly 60 inches",
      "Exterior switches must be at ground level",
    ],
    correctAnswer: 1,
    explanation:
      "室外灯开关应安装在距地面42-48英寸之间，与室内标准一致，以确保可达性。ADA要求开关不超过48英寸以供残障人士使用。",
    category: "electrical",
  },
  {
    id: 791,
    question: "What is the purpose of an equipment grounding conductor (bare copper or green wire) in a circuit?",
    options: [
      "To carry normal operating current",
      "To provide a low-impedance path for fault current back to the source, enabling the breaker to trip quickly",
      "To improve the quality of electrical power",
      "To reduce energy consumption",
    ],
    correctAnswer: 1,
    explanation:
      "设备接地导体（裸铜线或绿色线）的目的是为故障电流提供低阻抗回路返回电源，使断路器快速跳闸。这保护人员免受触电和防止火灾。",
    category: "electrical",
  },
  {
    id: 792,
    question: "An inspector finds that a 240V air conditioning disconnect box has no fuses or the fuses have been replaced with solid copper slugs. This is:",
    options: [
      "An acceptable temporary repair",
      "A serious safety hazard; the disconnect provides overcurrent protection and must have properly rated fuses or be a non-fusible disconnect with circuit protection at the panel",
      "Normal for older AC systems",
      "Acceptable if the unit is not currently running",
    ],
    correctAnswer: 1,
    explanation:
      "空调断路盒没有保险丝或保险丝被铜块替代是严重的安全隐患。断路器提供过电流保护，必须安装正确额定的保险丝。铜块不提供过电流保护，可能导致火灾。",
    category: "electrical",
  },
  {
    id: 793,
    question: "What is the NEC requirement for lighting at the exterior entrance of a residential dwelling?",
    options: [
      "No exterior lighting is required",
      "At least one wall switch-controlled luminaire at each entrance to the dwelling accessible from grade",
      "Only motion-sensor lights are acceptable",
      "Solar-powered lights are sufficient",
    ],
    correctAnswer: 1,
    explanation:
      "NEC要求在每个可从地面进入的住宅入口处安装至少一个由墙壁开关控制的灯具。这确保了居住者在进入或离开住宅时有安全的照明。",
    category: "electrical",
  },
  {
    id: 794,
    question: "What is the proper method for connecting a range hood or over-the-range microwave to electrical power?",
    options: [
      "Extension cord from a nearby outlet",
      "Hardwired connection or cord-and-plug connection to a dedicated circuit behind or above the unit",
      "Shared circuit with the refrigerator",
      "Plugged into any available kitchen outlet",
    ],
    correctAnswer: 1,
    explanation:
      "抽油烟机或壁挂式微波炉应通过硬接线或插头连接到设备后方或上方的专用电路。使用延长线是不安全且违反规范的。",
    category: "electrical",
  },
  {
    id: 795,
    question: "An inspector notes that the home's electrical system still uses a fuse box. What should be reported?",
    options: [
      "Fuse boxes are superior to breaker panels",
      "While fuse boxes are not inherently unsafe if properly maintained, they may be insufficient for modern electrical demands, and upgrading to a circuit breaker panel should be considered",
      "Fuse boxes must be immediately replaced by law",
      "No reporting is necessary for fuse boxes",
    ],
    correctAnswer: 1,
    explanation:
      "虽然保险丝盒如果正确维护并非本质上不安全，但它们可能不足以满足现代电气需求，应考虑升级到断路器面板。保险丝盒常见的问题包括过大保险丝、双线接保险丝和容量不足。",
    category: "electrical",
  },
  {
    id: 796,
    question: "What is the maximum voltage on a residential lighting circuit?",
    options: [
      "120 volts",
      "240 volts",
      "277 volts",
      "480 volts",
    ],
    correctAnswer: 0,
    explanation:
      "住宅照明电路的最大电压为120伏特。240伏特用于大型电器，但标准照明和插座电路使用120伏特。277伏特和480伏特用于商业和工业照明。",
    category: "electrical",
  },
  {
    id: 797,
    question: "California requires that interconnected smoke alarms in existing homes being sold must be:",
    options: [
      "Wireless battery-operated only",
      "Hardwired with battery backup in homes where permits were obtained for remodels; otherwise battery-operated alarms meeting current placement requirements",
      "Only placed in hallways",
      "Removed before sale",
    ],
    correctAnswer: 1,
    explanation:
      "加州要求出售的现有住宅中互连烟雾报警器在有改建许可的情况下必须是硬连线带电池备份的；否则可使用符合当前安装位置要求的电池供电报警器。",
    category: "electrical",
  },
  {
    id: 798,
    question: "What is the NEC requirement for a receptacle outlet in a foyer?",
    options: [
      "No receptacle is required in any foyer",
      "A receptacle is required in foyers with an area greater than 60 square feet, following the standard wall spacing rules",
      "Every foyer must have at least two outlets",
      "Foyers only need a light switch",
    ],
    correctAnswer: 1,
    explanation:
      "NEC要求面积超过60平方英尺的门厅安装插座，遵循标准墙壁间距规则。较小的门厅不需要插座，但需要照明。",
    category: "electrical",
  },
  {
    id: 799,
    question: "An inspector finds that flexible metal conduit (FMC) is used in a damp location. Is this acceptable?",
    options: [
      "Yes, FMC is suitable for all locations",
      "No, FMC is only listed for dry locations; liquidtight flexible metal conduit (LFMC) is required for damp or wet locations",
      "Yes, as long as the FMC is coated with paint",
      "Only if the conduit is less than 6 feet long",
    ],
    correctAnswer: 1,
    explanation:
      "不可以，柔性金属管道（FMC）仅额定用于干燥位置。潮湿或湿润位置需要使用防液柔性金属管道（LFMC），其具有防水外层保护内部导线免受水分损害。",
    category: "electrical",
  },
  {
    id: 800,
    question: "California's solar mandate for new homes includes an exception for homes that:",
    options: [
      "Are over 3,000 square feet",
      "Have significant shading from trees, taller buildings, or other obstructions that would render solar ineffective",
      "Are built on flat lots",
      "Have tile roofs",
    ],
    correctAnswer: 1,
    explanation:
      "加州新住宅太阳能强制令包含对有显著遮荫（来自树木、较高建筑物或其他障碍物）使太阳能无效的房屋的例外。如果屋顶没有足够的无遮荫面积来安装有效的系统，可以申请豁免。",
    category: "electrical",
  },
];
