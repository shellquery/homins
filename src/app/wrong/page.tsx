"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { BookX, Trash2, Play, AlertTriangle, CheckCircle2 } from "lucide-react";
import { questions as allQuestions, categories } from "@/data/questions";
import { useI18n, categoryNames } from "@/lib/i18n";
import { useStore } from "@/lib/store";

export default function WrongBookPage() {
  const { locale, t } = useI18n();
  const { wrongQuestionIds, clearWrongQuestions, removeWrongQuestion } = useStore();
  const [showConfirm, setShowConfirm] = useState(false);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const wrongQuestions = allQuestions.filter((q) => wrongQuestionIds.includes(q.id));

  // Group by category
  const byCategory: Record<string, typeof wrongQuestions> = {};
  wrongQuestions.forEach((q) => {
    if (!byCategory[q.category]) byCategory[q.category] = [];
    byCategory[q.category].push(q);
  });

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">{t("wrongBookTitle")}</span>
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto">{t("wrongBookDesc")}</p>
      </motion.div>

      {wrongQuestions.length === 0 ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
          <CheckCircle2 size={64} className="text-emerald-500/30 mx-auto mb-4" />
          <p className="text-gray-400 text-lg">{t("noWrong")}</p>
          <Link href="/quiz" className="inline-flex items-center gap-2 mt-6 px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold">
            <Play size={18} />{t("startQuiz")}
          </Link>
        </motion.div>
      ) : (
        <>
          {/* Stats Bar */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="glass rounded-2xl p-6 mb-8 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-red-500/10">
                <BookX size={24} className="text-red-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">{wrongQuestions.length}</div>
                <div className="text-gray-400 text-sm">{t("wrongCount")}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Link href="/quiz?category=all" onClick={() => { /* quiz page will handle wrong mode selection */ }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold shadow-lg shadow-red-500/25 hover:shadow-red-500/40 hover:scale-105 transition-all">
                <Play size={18} />{t("practiceWrong")}
              </Link>
              <button onClick={() => setShowConfirm(true)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-700 text-gray-400 hover:text-red-400 hover:border-red-500/30 transition-all">
                <Trash2 size={18} />{t("clearAll")}
              </button>
            </div>
          </motion.div>

          {/* Confirm Dialog */}
          {showConfirm && (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
              className="glass rounded-xl p-4 mb-6 flex items-center justify-between border border-red-500/20">
              <div className="flex items-center gap-2 text-amber-400">
                <AlertTriangle size={18} />
                <span className="text-sm">{t("clearConfirm")}</span>
              </div>
              <div className="flex gap-2">
                <button onClick={() => setShowConfirm(false)} className="px-3 py-1.5 rounded-lg text-sm text-gray-400 hover:bg-gray-800/50">Cancel</button>
                <button onClick={() => { clearWrongQuestions(); setShowConfirm(false); }}
                  className="px-3 py-1.5 rounded-lg text-sm bg-red-500 text-white hover:bg-red-600">OK</button>
              </div>
            </motion.div>
          )}

          {/* By Category */}
          {Object.entries(byCategory).map(([cat, qs]) => {
            const catInfo = categories[cat as keyof typeof categories];
            const name = categoryNames[cat]?.[locale] || catInfo?.name;
            return (
              <motion.div key={cat} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">{catInfo?.icon}</span>
                  <h3 className="font-semibold text-gray-200">{name}</h3>
                  <span className="text-xs text-gray-500">({qs.length})</span>
                </div>
                <div className="space-y-2">
                  {qs.map((q) => {
                    const isExpanded = expandedId === q.id;
                    return (
                      <div key={q.id} className="glass rounded-xl overflow-hidden border border-red-500/10">
                        <button onClick={() => setExpandedId(isExpanded ? null : q.id)}
                          className="w-full p-4 flex items-center gap-3 text-left hover:bg-gray-800/30 transition-colors">
                          <span className="text-xs text-gray-500 flex-shrink-0">#{q.id}</span>
                          <span className="text-sm text-gray-200 flex-1 line-clamp-1">{q.question}</span>
                          <button onClick={(e) => { e.stopPropagation(); removeWrongQuestion(q.id); }}
                            className="text-gray-600 hover:text-emerald-400 transition-colors flex-shrink-0" title="Mark as learned">
                            <CheckCircle2 size={18} />
                          </button>
                        </button>
                        {isExpanded && (
                          <div className="px-4 pb-4 border-t border-gray-800/50">
                            <div className="pt-3 space-y-2">
                              {q.options.map((opt, idx) => (
                                <div key={idx} className={`p-2.5 rounded-lg text-sm flex items-center gap-3 ${
                                  idx === q.correctAnswer ? "bg-emerald-500/10 border border-emerald-500/30" : "bg-gray-800/30"
                                }`}>
                                  <span className="font-mono text-xs text-gray-500">{String.fromCharCode(65 + idx)}</span>
                                  <span className="text-gray-300">{opt}</span>
                                  {idx === q.correctAnswer && <CheckCircle2 size={14} className="ml-auto text-emerald-400" />}
                                </div>
                              ))}
                            </div>
                            <div className="mt-3 p-3 rounded-lg bg-blue-500/5 border border-blue-500/20">
                              <p className="text-xs text-gray-300 leading-relaxed">{q.explanation}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </>
      )}
    </div>
  );
}
