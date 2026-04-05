"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Trophy, RotateCcw, Home, Clock, CheckCircle2, XCircle,
  ChevronDown, ChevronUp, BarChart3, Sparkles, Loader2,
} from "lucide-react";
import { questions as allQuestions, categories, type Question } from "@/data/questions";
import { calculateScore } from "@/lib/utils";
import { useI18n, categoryNames } from "@/lib/i18n";
import { useStore } from "@/lib/store";
import { getAIExplanation } from "@/lib/ai";

interface QuizResult {
  questions: number[];
  answers: Record<number, number>;
  timer: number;
  category: string;
}

export default function ResultsPage() {
  const { t, locale } = useI18n();
  const { aiConfig } = useStore();
  const [result, setResult] = useState<QuizResult | null>(null);
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [aiText, setAiText] = useState<Record<number, string>>({});
  const [aiLoading, setAiLoading] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const data = sessionStorage.getItem("quizResult");
    if (data) {
      const parsed: QuizResult = JSON.parse(data);
      setResult(parsed);
      const qs = parsed.questions.map((id) => allQuestions.find((q) => q.id === id)!).filter(Boolean);
      setQuizQuestions(qs);
    }
  }, []);

  const handleAI = async (q: Question) => {
    if (!aiConfig.apiKey && aiConfig.provider !== "custom") { alert(t("aiNotConfigured")); return; }
    setAiLoading((p) => ({ ...p, [q.id]: true }));
    try {
      const text = await getAIExplanation(q, result!.answers[q.id], locale, aiConfig);
      setAiText((p) => ({ ...p, [q.id]: text }));
    } catch { setAiText((p) => ({ ...p, [q.id]: t("aiError") })); }
    finally { setAiLoading((p) => ({ ...p, [q.id]: false })); }
  };

  if (!result || quizQuestions.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <p className="text-gray-400 mb-4">{t("noResults")}</p>
          <Link href="/quiz" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-blue-500 text-white">
            <RotateCcw size={18} />{t("restart")}
          </Link>
        </div>
      </div>
    );
  }

  const score = calculateScore(quizQuestions, result.answers);
  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return locale === "zh" ? `${m}分${sec}秒` : `${m}m ${sec}s`;
  };

  const categoryBreakdown: Record<string, { correct: number; total: number }> = {};
  quizQuestions.forEach((q) => {
    if (!categoryBreakdown[q.category]) categoryBreakdown[q.category] = { correct: 0, total: 0 };
    categoryBreakdown[q.category].total++;
    if (result.answers[q.id] === q.correctAnswer) categoryBreakdown[q.category].correct++;
  });

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Score Card */}
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="glass rounded-3xl p-8 mb-8 text-center glow">
        <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 mb-6">
          <Trophy size={40} className="text-yellow-400" />
        </div>
        <h1 className="text-2xl font-bold mb-2">{t("examComplete")}</h1>

        <div className="relative w-48 h-48 mx-auto my-8">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="42" fill="none" stroke="#1f2937" strokeWidth="8" />
            <motion.circle cx="50" cy="50" r="42" fill="none" stroke="url(#scoreGradient)" strokeWidth="8" strokeLinecap="round"
              strokeDasharray={`${score.percentage * 2.64} 264`}
              initial={{ strokeDasharray: "0 264" }}
              animate={{ strokeDasharray: `${score.percentage * 2.64} 264` }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
            <defs><linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#3b82f6" /><stop offset="100%" stopColor="#06b6d4" /></linearGradient></defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <motion.span className={`text-5xl font-bold ${score.gradeColor}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
              {score.percentage}%
            </motion.span>
            <span className="text-gray-400 text-sm">{t("grade")}: <span className={`font-bold ${score.gradeColor}`}>{score.grade}</span></span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
          <div className="p-3 rounded-xl bg-gray-800/50">
            <div className="text-emerald-400 font-bold text-xl">{score.correct}</div>
            <div className="text-gray-400 text-xs">{t("correctCount")}</div>
          </div>
          <div className="p-3 rounded-xl bg-gray-800/50">
            <div className="text-red-400 font-bold text-xl">{score.total - score.correct}</div>
            <div className="text-gray-400 text-xs">{t("incorrectCount")}</div>
          </div>
          <div className="p-3 rounded-xl bg-gray-800/50">
            <div className="text-blue-400 font-bold text-xl flex items-center justify-center gap-1"><Clock size={16} />{formatTime(result.timer)}</div>
            <div className="text-gray-400 text-xs">{t("timeSpent")}</div>
          </div>
        </div>

        <p className={`mt-6 font-medium ${score.percentage >= 70 ? "text-emerald-400" : "text-amber-400"}`}>
          {score.percentage >= 70 ? t("passed") : t("failed")}
        </p>
      </motion.div>

      {/* Category Breakdown */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass rounded-2xl p-6 mb-8">
        <div className="flex items-center gap-2 mb-4"><BarChart3 size={20} className="text-blue-400" /><h2 className="text-lg font-semibold">{t("categoryScore")}</h2></div>
        <div className="space-y-3">
          {Object.entries(categoryBreakdown).map(([cat, data]) => {
            const catInfo = categories[cat as keyof typeof categories];
            const pct = Math.round((data.correct / data.total) * 100);
            const name = categoryNames[cat]?.[locale] || catInfo?.name;
            return (
              <div key={cat} className="flex items-center gap-3">
                <span className="text-xl w-8">{catInfo?.icon}</span>
                <span className="text-sm text-gray-300 w-28 truncate">{name}</span>
                <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div className={`h-full rounded-full ${pct >= 70 ? "bg-emerald-500" : pct >= 50 ? "bg-amber-500" : "bg-red-500"}`}
                    initial={{ width: 0 }} animate={{ width: `${pct}%` }} transition={{ duration: 1, delay: 0.5 }} />
                </div>
                <span className="text-sm font-mono text-gray-400 w-20 text-right">{data.correct}/{data.total} ({pct}%)</span>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Question Review */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="space-y-3 mb-8">
        <h2 className="text-lg font-semibold mb-4">{t("detailAnalysis")}</h2>
        {quizQuestions.map((q, i) => {
          const userAnswer = result.answers[q.id];
          const isCorrect = userAnswer === q.correctAnswer;
          const isExpanded = expandedId === q.id;
          return (
            <div key={q.id} className={`glass rounded-xl overflow-hidden border ${isCorrect ? "border-emerald-500/20" : "border-red-500/20"}`}>
              <button onClick={() => setExpandedId(isExpanded ? null : q.id)}
                className="w-full p-4 flex items-center gap-3 text-left hover:bg-gray-800/30 transition-colors">
                {isCorrect ? <CheckCircle2 size={20} className="text-emerald-400 flex-shrink-0" /> : <XCircle size={20} className="text-red-400 flex-shrink-0" />}
                <span className="text-sm text-gray-400 flex-shrink-0">#{i + 1}</span>
                <span className="text-sm text-gray-200 flex-1 line-clamp-1">{q.question}</span>
                {isExpanded ? <ChevronUp size={18} className="text-gray-500 flex-shrink-0" /> : <ChevronDown size={18} className="text-gray-500 flex-shrink-0" />}
              </button>
              {isExpanded && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} className="px-4 pb-4 border-t border-gray-800/50">
                  <div className="pt-4 space-y-2">
                    {q.options.map((opt, idx) => (
                      <div key={idx} className={`p-3 rounded-lg text-sm flex items-center gap-3 ${
                        idx === q.correctAnswer ? "bg-emerald-500/10 border border-emerald-500/30"
                        : idx === userAnswer && !isCorrect ? "bg-red-500/10 border border-red-500/30"
                        : "bg-gray-800/30"
                      }`}>
                        <span className="font-mono text-xs text-gray-500">{String.fromCharCode(65 + idx)}</span>
                        <span className="text-gray-300">{opt}</span>
                        {idx === q.correctAnswer && <CheckCircle2 size={16} className="ml-auto text-emerald-400" />}
                        {idx === userAnswer && !isCorrect && <XCircle size={16} className="ml-auto text-red-400" />}
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-4 rounded-xl bg-blue-500/5 border border-blue-500/20">
                    <p className="text-sm text-gray-300 leading-relaxed"><span className="text-blue-400 font-medium">{t("analysis")}</span>{q.explanation}</p>
                  </div>
                  {/* AI */}
                  <div className="mt-3">
                    {aiText[q.id] ? (
                      <div className="p-4 rounded-lg bg-purple-500/5 border border-purple-500/20">
                        <div className="flex items-center gap-2 mb-2"><Sparkles size={16} className="text-purple-400" /><span className="text-purple-400 font-medium text-sm">{t("aiExplain")}</span></div>
                        <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-wrap">{aiText[q.id]}</p>
                      </div>
                    ) : (
                      <button onClick={() => handleAI(q)} disabled={aiLoading[q.id]}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm hover:bg-purple-500/20 transition-all disabled:opacity-50">
                        {aiLoading[q.id] ? <><Loader2 size={16} className="animate-spin" />{t("aiLoading")}</> : <><Sparkles size={16} />{t("aiExplain")}</>}
                      </button>
                    )}
                  </div>
                </motion.div>
              )}
            </div>
          );
        })}
      </motion.div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link href={`/quiz${result.category !== "all" ? `?category=${result.category}` : ""}`}
          className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 transition-all">
          <RotateCcw size={18} />{t("tryAgain")}
        </Link>
        <Link href="/" className="flex items-center gap-2 px-6 py-2.5 rounded-xl border border-gray-700 text-gray-300 hover:bg-gray-800/50 transition-all">
          <Home size={18} />{t("backHome")}
        </Link>
      </div>
    </div>
  );
}
