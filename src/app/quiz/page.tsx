"use client";

import { useState, useEffect, useCallback, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Send,
  Sparkles,
  Loader2,
} from "lucide-react";
import { questions as allQuestions, categories, type Question } from "@/data/questions";
import { getRandomQuestions } from "@/lib/utils";
import { useI18n, categoryNames } from "@/lib/i18n";
import { useStore } from "@/lib/store";
import { getAIExplanation } from "@/lib/ai";
import Markdown from "@/components/Markdown";

function QuizSetup({
  category,
  onStart,
}: {
  category: string;
  onStart: (count: number, mode: "all" | "wrong") => void;
}) {
  const { t, locale } = useI18n();
  const { defaultQuizSize, wrongQuestionIds } = useStore();
  const [count, setCount] = useState(defaultQuizSize);
  const [mode, setMode] = useState<"all" | "wrong">("all");

  const catName =
    category !== "all"
      ? categoryNames[category]?.[locale] ||
        categories[category as keyof typeof categories]?.name
      : t("allCategories");

  const wrongInCategory =
    category !== "all"
      ? wrongQuestionIds.filter((id) => {
          const q = allQuestions.find((qq) => qq.id === id);
          return q?.category === category;
        }).length
      : wrongQuestionIds.length;

  const sizes = [10, 20, 30, 50, 100];

  return (
    <div className="max-w-lg mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass rounded-3xl p-8 glow"
      >
        <h2 className="text-2xl font-bold text-center mb-2">{t("quizSetup")}</h2>
        <p className="text-center text-gray-400 mb-8">{catName}</p>

        {/* Question Count */}
        <div className="mb-6">
          <label className="block text-sm text-gray-400 mb-3">{t("questionCount")}</label>
          <div className="flex flex-wrap gap-2">
            {sizes.map((s) => (
              <button
                key={s}
                onClick={() => setCount(s)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  count === s
                    ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
                    : "bg-gray-800/50 text-gray-400 hover:bg-gray-700/50"
                }`}
              >
                {s} {t("questionsUnit")}
              </button>
            ))}
          </div>
        </div>

        {/* Mode */}
        <div className="mb-8">
          <div className="flex gap-2">
            <button
              onClick={() => setMode("all")}
              className={`flex-1 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                mode === "all"
                  ? "bg-blue-500/15 text-blue-400 border border-blue-500/30"
                  : "bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 border border-transparent"
              }`}
            >
              {t("allCategories")}
            </button>
            <button
              onClick={() => setMode("wrong")}
              disabled={wrongInCategory === 0}
              className={`flex-1 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                mode === "wrong"
                  ? "bg-red-500/15 text-red-400 border border-red-500/30"
                  : wrongInCategory > 0
                  ? "bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 border border-transparent"
                  : "bg-gray-800/30 text-gray-600 cursor-not-allowed border border-transparent"
              }`}
            >
              {t("wrongOnly")} ({wrongInCategory})
            </button>
          </div>
        </div>

        <button
          onClick={() => onStart(count, mode)}
          className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold text-lg shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] transition-all"
        >
          {t("startExam")}
        </button>
      </motion.div>
    </div>
  );
}

function QuizContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const category = searchParams.get("category") || "all";
  const { t, locale } = useI18n();
  const { wrongQuestionIds, addWrongQuestion, removeWrongQuestion, aiConfig, addQuizHistory } = useStore();

  const [phase, setPhase] = useState<"setup" | "quiz">("setup");
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showExplanation, setShowExplanation] = useState(false);
  const [timer, setTimer] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [aiText, setAiText] = useState<Record<number, string>>({});
  const [aiLoading, setAiLoading] = useState<Record<number, boolean>>({});

  useEffect(() => {
    if (isFinished || phase !== "quiz" || quizQuestions.length === 0) return;
    const interval = setInterval(() => setTimer((prev) => prev + 1), 1000);
    return () => clearInterval(interval);
  }, [isFinished, phase, quizQuestions.length]);

  const handleStart = (count: number, mode: "all" | "wrong") => {
    let pool =
      mode === "wrong"
        ? allQuestions.filter((q) => wrongQuestionIds.includes(q.id))
        : allQuestions;
    if (category !== "all") {
      pool = pool.filter((q) => q.category === category);
    }
    const qs = getRandomQuestions(pool, Math.min(count, pool.length));
    setQuizQuestions(qs);
    setPhase("quiz");
  };

  if (phase === "setup") {
    return <QuizSetup category={category} onStart={handleStart} />;
  }

  const currentQuestion = quizQuestions[currentIndex];
  if (!currentQuestion) return null;

  const answeredCount = Object.keys(answers).length;
  const progress = ((currentIndex + 1) / quizQuestions.length) * 100;

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const selectAnswer = (optionIndex: number) => {
    if (answers[currentQuestion.id] !== undefined) return;
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: optionIndex }));
    setShowExplanation(true);
    // Track wrong answers
    if (optionIndex !== currentQuestion.correctAnswer) {
      addWrongQuestion(currentQuestion.id);
    } else {
      removeWrongQuestion(currentQuestion.id);
    }
  };

  const goNext = () => {
    if (currentIndex < quizQuestions.length - 1) {
      setCurrentIndex((i) => i + 1);
      setShowExplanation(false);
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((i) => i - 1);
      setShowExplanation(answers[quizQuestions[currentIndex - 1]?.id] !== undefined);
    }
  };

  const submitQuiz = () => {
    setIsFinished(true);
    let correct = 0;
    quizQuestions.forEach((q) => {
      if (answers[q.id] === q.correctAnswer) correct++;
    });
    const entry = {
      id: Date.now().toString(),
      date: new Date().toISOString(),
      category,
      score: correct,
      total: quizQuestions.length,
      percentage: Math.round((correct / quizQuestions.length) * 100),
      timeSeconds: timer,
    };
    addQuizHistory(entry);

    const data = {
      questions: quizQuestions.map((q) => q.id),
      answers,
      timer,
      category,
    };
    sessionStorage.setItem("quizResult", JSON.stringify(data));
    router.push("/quiz/results");
  };

  const handleAI = async (q: Question) => {
    if (!aiConfig.apiKey && aiConfig.provider !== "custom") {
      alert(t("aiNotConfigured"));
      return;
    }
    setAiLoading((prev) => ({ ...prev, [q.id]: true }));
    try {
      const text = await getAIExplanation(q, answers[q.id], locale, aiConfig);
      setAiText((prev) => ({ ...prev, [q.id]: text }));
    } catch {
      setAiText((prev) => ({ ...prev, [q.id]: t("aiError") }));
    } finally {
      setAiLoading((prev) => ({ ...prev, [q.id]: false }));
    }
  };

  const selectedAnswer = answers[currentQuestion.id];
  const hasAnswered = selectedAnswer !== undefined;
  const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
  const categoryInfo =
    category !== "all" ? categories[category as keyof typeof categories] : null;
  const catName = categoryInfo
    ? categoryNames[category]?.[locale] || categoryInfo.name
    : null;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Top Bar */}
      <div className="glass rounded-2xl p-4 mb-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          {categoryInfo && (
            <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${categoryInfo.color} text-white`}>
              {categoryInfo.icon} {catName}
            </span>
          )}
          <span className="text-gray-400 text-sm">
            {t("question")} <span className="text-white font-semibold">{currentIndex + 1}</span>{t("of")}{quizQuestions.length}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <CheckCircle2 size={16} className="text-emerald-400" />
            <span>{t("answered")} {answeredCount}/{quizQuestions.length}</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-800/50">
            <Clock size={16} className="text-blue-400" />
            <span className="font-mono text-sm text-white">{formatTime(timer)}</span>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="h-1.5 bg-gray-800 rounded-full mb-8 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Question Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion.id}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.25 }}
          className="glass rounded-2xl p-8 mb-6 glow"
        >
          <div className="flex items-start gap-4 mb-6">
            <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">
              {currentIndex + 1}
            </span>
            <h2 className="text-lg font-medium text-gray-100 leading-relaxed pt-1.5">
              {currentQuestion.question}
            </h2>
          </div>

          <div className="space-y-3 ml-14">
            {currentQuestion.options.map((option, idx) => {
              const letter = String.fromCharCode(65 + idx);
              let optionStyle = "border-gray-700/50 hover:border-blue-500/50 hover:bg-blue-500/5 cursor-pointer";
              if (hasAnswered) {
                if (idx === currentQuestion.correctAnswer) {
                  optionStyle = "border-emerald-500/50 bg-emerald-500/10 ring-1 ring-emerald-500/30";
                } else if (idx === selectedAnswer && !isCorrect) {
                  optionStyle = "border-red-500/50 bg-red-500/10 ring-1 ring-red-500/30";
                } else {
                  optionStyle = "border-gray-800 opacity-50";
                }
              }
              return (
                <button
                  key={idx}
                  onClick={() => selectAnswer(idx)}
                  disabled={hasAnswered}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center gap-4 ${optionStyle}`}
                >
                  <span className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-semibold ${
                    hasAnswered && idx === currentQuestion.correctAnswer ? "bg-emerald-500 text-white"
                    : hasAnswered && idx === selectedAnswer && !isCorrect ? "bg-red-500 text-white"
                    : "bg-gray-800 text-gray-400"
                  }`}>{letter}</span>
                  <span className="text-gray-200">{option}</span>
                  {hasAnswered && idx === currentQuestion.correctAnswer && <CheckCircle2 size={20} className="ml-auto text-emerald-400 flex-shrink-0" />}
                  {hasAnswered && idx === selectedAnswer && !isCorrect && <XCircle size={20} className="ml-auto text-red-400 flex-shrink-0" />}
                </button>
              );
            })}
          </div>

          {/* Explanation */}
          <AnimatePresence>
            {hasAnswered && showExplanation && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="ml-14 mt-6"
              >
                <div className={`p-5 rounded-xl border ${
                  isCorrect ? "bg-emerald-500/5 border-emerald-500/20" : "bg-amber-500/5 border-amber-500/20"
                }`}>
                  <div className="flex items-center gap-2 mb-2">
                    {isCorrect ? <CheckCircle2 size={18} className="text-emerald-400" /> : <AlertCircle size={18} className="text-amber-400" />}
                    <span className={`font-semibold text-sm ${isCorrect ? "text-emerald-400" : "text-amber-400"}`}>
                      {isCorrect ? t("correct") : t("incorrect")}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{currentQuestion.explanation}</p>

                  {/* AI Button */}
                  <div className="mt-4">
                    {aiText[currentQuestion.id] ? (
                      <div className="p-4 rounded-lg bg-purple-500/5 border border-purple-500/20">
                        <div className="flex items-center gap-2 mb-2">
                          <Sparkles size={16} className="text-purple-400" />
                          <span className="text-purple-400 font-medium text-sm">{t("aiExplain")}</span>
                        </div>
                        <Markdown>{aiText[currentQuestion.id]}</Markdown>
                      </div>
                    ) : (
                      <button
                        onClick={() => handleAI(currentQuestion)}
                        disabled={aiLoading[currentQuestion.id]}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm hover:bg-purple-500/20 transition-all disabled:opacity-50"
                      >
                        {aiLoading[currentQuestion.id] ? (
                          <><Loader2 size={16} className="animate-spin" />{t("aiLoading")}</>
                        ) : (
                          <><Sparkles size={16} />{t("aiExplain")}</>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>

      {/* Question Navigator */}
      <div className="glass rounded-2xl p-4 mb-6">
        <div className="flex flex-wrap gap-2 justify-center">
          {quizQuestions.map((q, i) => {
            const answered = answers[q.id] !== undefined;
            const correct = answers[q.id] === q.correctAnswer;
            const isCurrent = i === currentIndex;
            return (
              <button
                key={q.id}
                onClick={() => { setCurrentIndex(i); setShowExplanation(answers[q.id] !== undefined); }}
                className={`w-9 h-9 rounded-lg text-xs font-medium transition-all duration-200 ${
                  isCurrent ? "bg-blue-500 text-white scale-110 shadow-lg shadow-blue-500/30"
                  : answered ? correct ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" : "bg-red-500/20 text-red-400 border border-red-500/30"
                  : "bg-gray-800/50 text-gray-500 hover:bg-gray-700/50"
                }`}
              >{i + 1}</button>
            );
          })}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <button onClick={goPrev} disabled={currentIndex === 0}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-700 text-gray-300 hover:bg-gray-800/50 disabled:opacity-30 disabled:cursor-not-allowed transition-all">
          <ChevronLeft size={18} />{t("prev")}
        </button>
        {answeredCount === quizQuestions.length ? (
          <button onClick={submitQuiz}
            className="flex items-center gap-2 px-8 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-105 transition-all">
            <Send size={18} />{t("submit")}
          </button>
        ) : currentIndex === quizQuestions.length - 1 ? (
          <button onClick={submitQuiz}
            className="flex items-center gap-2 px-8 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all">
            <Send size={18} />{t("submitPartial")} ({answeredCount}/{quizQuestions.length})
          </button>
        ) : (
          <button onClick={goNext}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-700 text-gray-300 hover:bg-gray-800/50 transition-all">
            {t("next")}<ChevronRight size={18} />
          </button>
        )}
      </div>
    </div>
  );
}

export default function QuizPage() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-[60vh]"><div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" /></div>}>
      <QuizContent />
    </Suspense>
  );
}
