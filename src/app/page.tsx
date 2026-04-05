"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BookOpen,
  LayoutGrid,
  Trophy,
  Zap,
  Target,
  TrendingUp,
} from "lucide-react";
import { questions, categories } from "@/data/questions";
import { useI18n, categoryNames, categoryDescs } from "@/lib/i18n";
import { useStore } from "@/lib/store";

export default function Home() {
  const { locale, t } = useI18n();
  const { defaultQuizSize } = useStore();
  const categoryKeys = Object.keys(categories) as Array<keyof typeof categories>;

  const stats = [
    { label: t("totalQuestions"), value: String(questions.length), icon: BookOpen, color: "from-blue-500 to-cyan-500" },
    { label: t("examCategories"), value: "10", icon: LayoutGrid, color: "from-purple-500 to-pink-500" },
    { label: t("perQuiz"), value: `${defaultQuizSize}${locale === "zh" ? "题" : "Q"}`, icon: Target, color: "from-amber-500 to-orange-500" },
    { label: t("passScore"), value: "70%", icon: Trophy, color: "from-emerald-500 to-teal-500" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm mb-6">
          <Zap size={14} />
          {t("heroSubtitle")}
        </div>
        <h1 className="text-5xl sm:text-6xl font-bold mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
            {t("heroTitle1")}
          </span>
          <br />
          <span className="text-gray-200">{t("heroTitle2")}</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">{t("heroDesc")}</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/quiz"
            className="group relative inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold text-lg shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105"
          >
            <BookOpen size={20} />
            {t("randomQuiz")}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity blur-xl -z-10" />
          </Link>
          <Link
            href="/categories"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-gray-700 text-gray-300 font-semibold text-lg hover:bg-gray-800/50 hover:border-gray-600 transition-all duration-300"
          >
            <LayoutGrid size={20} />
            {t("categoryQuiz")}
          </Link>
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="glass rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} mb-3`}>
                <Icon size={24} className="text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          );
        })}
      </motion.div>

      {/* Category Grid */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
        <div className="flex items-center gap-3 mb-8">
          <TrendingUp size={24} className="text-blue-400" />
          <h2 className="text-2xl font-bold">{t("categoryOverview")}</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {categoryKeys.map((key, i) => {
            const cat = categories[key];
            const count = questions.filter((q) => q.category === key).length;
            const name = categoryNames[key]?.[locale] || cat.name;
            const desc = categoryDescs[key]?.[locale] || cat.description;
            return (
              <motion.div key={key} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + i * 0.05 }}>
                <Link href={`/quiz?category=${key}`} className="group block glass rounded-2xl p-5 hover:scale-105 transition-all duration-300 h-full">
                  <div className="text-3xl mb-3">{cat.icon}</div>
                  <h3 className="font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors">{name}</h3>
                  <p className="text-gray-500 text-xs mb-3 line-clamp-2">{desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">{count} {t("questions")}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full bg-gradient-to-r ${cat.color} text-white`}>{t("start")}</span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
