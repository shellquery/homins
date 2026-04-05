"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Locale = "zh" | "en";

const translations = {
  zh: {
    // Navbar
    home: "首页",
    startQuiz: "开始刷题",
    categories: "分类练习",
    wrongBook: "错题本",
    settings: "设置",

    // Home
    heroSubtitle: "California Home Inspector Exam Prep",
    heroTitle1: "加州房屋检查员",
    heroTitle2: "考试刷题系统",
    heroDesc: "涵盖 10 大考试分类，2000 道精选题目，助你高效备考加州房屋检查员执照考试",
    randomQuiz: "随机刷题",
    categoryQuiz: "按分类练习",
    totalQuestions: "题库总量",
    examCategories: "考试分类",
    perQuiz: "每次测试",
    passScore: "通过分数",
    categoryOverview: "考试分类概览",
    questions: "道题",
    start: "开始",

    // Quiz
    question: "题",
    answered: "已答",
    prev: "上一题",
    next: "下一题",
    submit: "提交答卷",
    submitPartial: "交卷",
    preparing: "正在准备题目...",
    correct: "回答正确！",
    incorrect: "回答错误",
    aiExplain: "AI 深度解读",
    aiLoading: "AI 正在分析...",
    aiError: "AI 解读失败，请检查设置",
    aiNotConfigured: "请先在设置页面配置 AI",

    // Quiz Setup
    quizSetup: "考试设置",
    questionCount: "题目数量",
    questionsUnit: "道",
    allCategories: "全部分类",
    wrongOnly: "仅错题",
    startExam: "开始考试",
    noWrongQuestions: "暂无错题记录",

    // Results
    examComplete: "考试完成！",
    correctCount: "正确",
    incorrectCount: "错误",
    timeSpent: "用时",
    passed: "恭喜通过！继续保持！",
    failed: "未达到通过线 (70%)，继续加油！",
    categoryScore: "分类得分",
    detailAnalysis: "详细解析",
    analysis: "解析：",
    tryAgain: "再来一轮",
    backHome: "返回首页",
    noResults: "没有找到考试结果",
    restart: "重新开始",
    grade: "等级",

    // Categories
    categoryPractice: "分类练习",
    categoryPracticeDesc: "选择你想要重点练习的分类，针对性地提高薄弱环节",
    allRandom: "全部题目随机刷",
    allRandomDesc: "从全部题库中随机抽取",

    // Wrong Book
    wrongBookTitle: "错题本",
    wrongBookDesc: "你答错过的题目都在这里，可以针对性地复习",
    wrongCount: "错题数量",
    clearAll: "清空错题",
    clearConfirm: "确定要清空所有错题记录吗？",
    practiceWrong: "错题练习",
    noWrong: "还没有错题记录，继续刷题吧！",

    // Settings
    settingsTitle: "设置",
    aiSettings: "AI 解读设置",
    aiProvider: "AI 提供商",
    apiKey: "API Key",
    apiKeyPlaceholder: "输入你的 API Key",
    modelName: "模型名称",
    customEndpoint: "自定义端点",
    endpointPlaceholder: "https://api.example.com/v1/chat/completions",
    save: "保存设置",
    saved: "已保存！",
    testConnection: "测试连接",
    testing: "测试中...",
    testSuccess: "连接成功！",
    testFail: "连接失败，请检查设置",
    language: "语言",
    defaultQuizSize: "默认题目数量",
    freeNote: "Google Gemini 提供免费 API，无需付费即可使用 AI 解读功能",
    getApiKey: "获取免费 API Key",

    // Common
    of: "/",
    min: "分",
    sec: "秒",
  },
  en: {
    // Navbar
    home: "Home",
    startQuiz: "Quiz",
    categories: "Categories",
    wrongBook: "Mistakes",
    settings: "Settings",

    // Home
    heroSubtitle: "California Home Inspector Exam Prep",
    heroTitle1: "CA Home Inspector",
    heroTitle2: "Exam Practice System",
    heroDesc: "2000 carefully crafted questions across 10 exam categories to help you prepare for the California Home Inspector licensing exam",
    randomQuiz: "Random Quiz",
    categoryQuiz: "By Category",
    totalQuestions: "Total Questions",
    examCategories: "Categories",
    perQuiz: "Per Quiz",
    passScore: "Pass Score",
    categoryOverview: "Category Overview",
    questions: "questions",
    start: "Start",

    // Quiz
    question: "Q",
    answered: "Answered",
    prev: "Previous",
    next: "Next",
    submit: "Submit",
    submitPartial: "Submit",
    preparing: "Preparing questions...",
    correct: "Correct!",
    incorrect: "Incorrect",
    aiExplain: "AI Deep Analysis",
    aiLoading: "AI is analyzing...",
    aiError: "AI analysis failed, check settings",
    aiNotConfigured: "Please configure AI in Settings first",

    // Quiz Setup
    quizSetup: "Quiz Setup",
    questionCount: "Number of Questions",
    questionsUnit: "",
    allCategories: "All Categories",
    wrongOnly: "Wrong Only",
    startExam: "Start Exam",
    noWrongQuestions: "No wrong answers recorded yet",

    // Results
    examComplete: "Exam Complete!",
    correctCount: "Correct",
    incorrectCount: "Wrong",
    timeSpent: "Time",
    passed: "Congratulations! You passed!",
    failed: "Below passing score (70%). Keep practicing!",
    categoryScore: "Category Scores",
    detailAnalysis: "Detailed Analysis",
    analysis: "Explanation: ",
    tryAgain: "Try Again",
    backHome: "Back Home",
    noResults: "No results found",
    restart: "Start Over",
    grade: "Grade",

    // Categories
    categoryPractice: "Practice by Category",
    categoryPracticeDesc: "Focus on specific areas to improve your weak points",
    allRandom: "All Questions Random",
    allRandomDesc: "Random selection from all questions",

    // Wrong Book
    wrongBookTitle: "Mistake Book",
    wrongBookDesc: "Review all the questions you got wrong",
    wrongCount: "Wrong Answers",
    clearAll: "Clear All",
    clearConfirm: "Are you sure you want to clear all wrong answer records?",
    practiceWrong: "Practice Mistakes",
    noWrong: "No mistakes yet. Keep practicing!",

    // Settings
    settingsTitle: "Settings",
    aiSettings: "AI Analysis Settings",
    aiProvider: "AI Provider",
    apiKey: "API Key",
    apiKeyPlaceholder: "Enter your API Key",
    modelName: "Model Name",
    customEndpoint: "Custom Endpoint",
    endpointPlaceholder: "https://api.example.com/v1/chat/completions",
    save: "Save Settings",
    saved: "Saved!",
    testConnection: "Test Connection",
    testing: "Testing...",
    testSuccess: "Connection successful!",
    testFail: "Connection failed, check settings",
    language: "Language",
    defaultQuizSize: "Default Quiz Size",
    freeNote: "Google Gemini offers a free API tier. No payment required for AI analysis.",
    getApiKey: "Get Free API Key",

    // Common
    of: "/",
    min: "m",
    sec: "s",
  },
} as const;

export type TranslationKey = keyof typeof translations.zh;

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: TranslationKey) => string;
}

const I18nContext = createContext<I18nContextType>({
  locale: "zh",
  setLocale: () => {},
  t: (key) => key,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("zh");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("homins-locale") as Locale;
    if (saved && (saved === "zh" || saved === "en")) {
      setLocale(saved);
    }
    setMounted(true);
  }, []);

  const handleSetLocale = (newLocale: Locale) => {
    setLocale(newLocale);
    localStorage.setItem("homins-locale", newLocale);
  };

  const t = (key: TranslationKey): string => {
    return translations[locale][key] || key;
  };

  if (!mounted) {
    return <div className="min-h-screen bg-gray-950" />;
  }

  return (
    <I18nContext.Provider value={{ locale, setLocale: handleSetLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}

// Category names need bilingual support
export const categoryNames: Record<string, { zh: string; en: string }> = {
  structural: { zh: "结构构件", en: "Structural Components" },
  electrical: { zh: "电气系统", en: "Electrical Systems" },
  plumbing: { zh: "管道系统", en: "Plumbing Systems" },
  hvac: { zh: "暖通空调", en: "HVAC Systems" },
  roofing: { zh: "屋顶系统", en: "Roofing" },
  exterior: { zh: "外部检查", en: "Exterior" },
  insulation: { zh: "保温通风", en: "Insulation & Ventilation" },
  interior: { zh: "室内检查", en: "Interior" },
  fireplace: { zh: "壁炉烟囱", en: "Fireplace & Chimney" },
  safety: { zh: "安全法规", en: "Safety & Regulations" },
};

export const categoryDescs: Record<string, { zh: string; en: string }> = {
  structural: {
    zh: "地基、框架、承重墙、梁、楼板托梁、沉降、裂缝等结构构件检查",
    en: "Foundations, framing, load-bearing walls, beams, joists, settling, cracks",
  },
  electrical: {
    zh: "配电盘、布线类型、GFCI、AFCI、接地、安培数、NEC规范",
    en: "Panels, wiring types, GFCI, AFCI, grounding, amperage, NEC codes",
  },
  plumbing: {
    zh: "管道材料、热水器、排水系统、通气管、水压、固定装置",
    en: "Pipe materials, water heaters, drain systems, venting, water pressure",
  },
  hvac: {
    zh: "暖炉、空调、热泵、管道系统、恒温器、能效等级",
    en: "Furnaces, AC, heat pumps, ductwork, thermostats, efficiency ratings",
  },
  roofing: {
    zh: "屋顶材料、防水板、排水沟、通风、使用寿命、损坏迹象",
    en: "Materials, flashing, gutters, ventilation, lifespan, damage signs",
  },
  exterior: {
    zh: "外墙材料、坡度排水、车道、露台、窗户、门窗检查",
    en: "Siding, grading, drainage, driveways, decks, windows, doors",
  },
  insulation: {
    zh: "R值、隔热类型、蒸汽屏障、阁楼通风、能源效率",
    en: "R-values, insulation types, vapor barriers, attic ventilation, energy efficiency",
  },
  interior: {
    zh: "墙壁、天花板、地板、楼梯、栏杆、门窗、厨卫检查",
    en: "Walls, ceilings, floors, stairs, railings, doors, kitchen, bath",
  },
  fireplace: {
    zh: "烟囱盖、烟道、风门、间距、砖石壁炉、燃气壁炉",
    en: "Chimney caps, flue, damper, clearances, masonry, gas fireplaces",
  },
  safety: {
    zh: "烟雾探测器、CO探测器、逃生窗、扶手、加州建筑规范、抗震要求",
    en: "Smoke/CO detectors, egress, handrails, CA codes, seismic requirements",
  },
};
