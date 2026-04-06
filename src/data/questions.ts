export type Category =
  | "structural"
  | "electrical"
  | "plumbing"
  | "hvac"
  | "roofing"
  | "exterior"
  | "insulation"
  | "interior"
  | "fireplace"
  | "safety";

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: Category;
}

export const categories: Record<
  Category,
  { name: string; icon: string; description: string; color: string }
> = {
  structural: {
    name: "Structural Components",
    icon: "🏗️",
    description: "地基、框架、承重墙、梁、楼板托梁、沉降、裂缝等结构构件检查",
    color: "from-blue-500 to-blue-600",
  },
  electrical: {
    name: "Electrical Systems",
    icon: "⚡",
    description: "配电盘、布线类型、GFCI、AFCI、接地、安培数、NEC规范",
    color: "from-yellow-500 to-amber-600",
  },
  plumbing: {
    name: "Plumbing Systems",
    icon: "🔧",
    description: "管道材料、热水器、排水系统、通气管、水压、固定装置",
    color: "from-cyan-500 to-teal-600",
  },
  hvac: {
    name: "HVAC Systems",
    icon: "❄️",
    description: "暖炉、空调、热泵、管道系统、恒温器、能效等级",
    color: "from-indigo-500 to-purple-600",
  },
  roofing: {
    name: "Roofing",
    icon: "🏠",
    description: "屋顶材料、防水板、排水沟、通风、使用寿命、损坏迹象",
    color: "from-red-500 to-rose-600",
  },
  exterior: {
    name: "Exterior",
    icon: "🏡",
    description: "外墙材料、坡度排水、车道、露台、窗户、门窗检查",
    color: "from-emerald-500 to-green-600",
  },
  insulation: {
    name: "Insulation & Ventilation",
    icon: "🧊",
    description: "R值、隔热类型、蒸汽屏障、阁楼通风、能源效率",
    color: "from-sky-500 to-blue-600",
  },
  interior: {
    name: "Interior",
    icon: "🪟",
    description: "墙壁、天花板、地板、楼梯、栏杆、门窗、厨卫检查",
    color: "from-violet-500 to-purple-600",
  },
  fireplace: {
    name: "Fireplace & Chimney",
    icon: "🔥",
    description: "烟囱盖、烟道、风门、间距、砖石壁炉、燃气壁炉",
    color: "from-orange-500 to-red-600",
  },
  safety: {
    name: "Safety & Regulations",
    icon: "🛡️",
    description: "烟雾探测器、CO探测器、逃生窗、扶手、加州建筑规范、抗震要求",
    color: "from-pink-500 to-rose-600",
  },
};

import { questionsPart1 } from "./questions-part1";
import { questionsPart2 } from "./questions-part2";
import { questionsPart3 } from "./questions-part3";
import { questionsPart4 } from "./questions-part4";
import { questionsPart5 } from "./questions-part5";
import { questionsPart6 } from "./questions-part6";
import { questionsPart7 } from "./questions-part7";
import { questionsPart8 } from "./questions-part8";

export const questions: Question[] = [
  ...questionsPart1,
  ...questionsPart2,
  ...questionsPart3,
  ...questionsPart4,
  ...questionsPart5,
  ...questionsPart6,
  ...questionsPart7,
  ...questionsPart8,
];
