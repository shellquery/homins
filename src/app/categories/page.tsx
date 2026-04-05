"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import { questions, categories } from "@/data/questions";
import { useI18n, categoryNames, categoryDescs } from "@/lib/i18n";

export default function CategoriesPage() {
  const { locale, t } = useI18n();
  const categoryKeys = Object.keys(categories) as Array<keyof typeof categories>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">{t("categoryPractice")}</span>
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto">{t("categoryPracticeDesc")}</p>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-8">
        <Link href="/quiz" className="group block glass rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300 glow">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <BookOpen size={28} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">{t("allRandom")}</h3>
                <p className="text-gray-400 text-sm mt-1">{t("allRandomDesc")} {questions.length} {t("questions")}</p>
              </div>
            </div>
            <ArrowRight size={24} className="text-gray-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
          </div>
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {categoryKeys.map((key, i) => {
          const cat = categories[key];
          const count = questions.filter((q) => q.category === key).length;
          const name = categoryNames[key]?.[locale] || cat.name;
          const desc = categoryDescs[key]?.[locale] || cat.description;
          return (
            <motion.div key={key} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 + i * 0.05 }}>
              <Link href={`/quiz?category=${key}`} className="group block glass rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl">{cat.icon}</span>
                      <div>
                        <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">{name}</h3>
                        <span className="text-xs text-gray-500">{count} {t("questions")}</span>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{desc}</p>
                    <span className={`inline-flex items-center gap-1 text-xs px-3 py-1.5 rounded-lg bg-gradient-to-r ${cat.color} text-white font-medium`}>
                      {t("start")}<ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
