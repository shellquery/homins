"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Settings, Sparkles, Check, Loader2, ExternalLink, Globe,
  Hash, AlertCircle,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { useStore, type AIConfig } from "@/lib/store";
import { testAIConnection } from "@/lib/ai";

const providers = [
  {
    id: "gemini" as const,
    name: "Google Gemini",
    free: true,
    defaultModel: "gemini-2.0-flash",
    models: ["gemini-2.0-flash", "gemini-2.5-flash-preview-05-20", "gemini-2.5-pro-preview-05-06"],
    keyUrl: "https://aistudio.google.com/apikey",
  },
  {
    id: "openai" as const,
    name: "OpenAI",
    free: false,
    defaultModel: "gpt-4o-mini",
    models: ["gpt-4o-mini", "gpt-4o", "gpt-4.1-mini", "gpt-4.1"],
    keyUrl: "https://platform.openai.com/api-keys",
  },
  {
    id: "anthropic" as const,
    name: "Anthropic",
    free: false,
    defaultModel: "claude-sonnet-4-20250514",
    models: ["claude-sonnet-4-20250514", "claude-haiku-4-5-20251001"],
    keyUrl: "https://console.anthropic.com/settings/keys",
  },
  {
    id: "custom" as const,
    name: "Custom / OpenAI-Compatible",
    free: false,
    defaultModel: "",
    models: [],
    keyUrl: "",
  },
];

export default function SettingsPage() {
  const { locale, setLocale, t } = useI18n();
  const { aiConfig, setAIConfig, defaultQuizSize, setDefaultQuizSize } = useStore();
  const [config, setConfig] = useState<AIConfig>(aiConfig);
  const [saved, setSaved] = useState(false);
  const [testing, setTesting] = useState(false);
  const [testResult, setTestResult] = useState<"success" | "fail" | null>(null);

  const currentProvider = providers.find((p) => p.id === config.provider)!;

  const handleProviderChange = (providerId: AIConfig["provider"]) => {
    const provider = providers.find((p) => p.id === providerId)!;
    setConfig({
      ...config,
      provider: providerId,
      model: provider.defaultModel,
      endpoint: "",
    });
  };

  const handleSave = () => {
    setAIConfig(config);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleTest = async () => {
    setTesting(true);
    setTestResult(null);
    try {
      const ok = await testAIConnection(config);
      setTestResult(ok ? "success" : "fail");
    } catch {
      setTestResult("fail");
    }
    setTesting(false);
    setTimeout(() => setTestResult(null), 3000);
  };

  const quizSizes = [10, 20, 30, 50, 100];

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400">{t("settingsTitle")}</span>
        </h1>
      </motion.div>

      {/* Language */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className="glass rounded-2xl p-6 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Globe size={20} className="text-blue-400" />
          <h2 className="text-lg font-semibold">{t("language")}</h2>
        </div>
        <div className="flex gap-3">
          {(["zh", "en"] as const).map((lang) => (
            <button key={lang} onClick={() => setLocale(lang)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                locale === lang ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30" : "bg-gray-800/50 text-gray-400 hover:bg-gray-700/50"
              }`}>
              {lang === "zh" ? "中文" : "English"}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Default Quiz Size */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
        className="glass rounded-2xl p-6 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Hash size={20} className="text-amber-400" />
          <h2 className="text-lg font-semibold">{t("defaultQuizSize")}</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {quizSizes.map((size) => (
            <button key={size} onClick={() => setDefaultQuizSize(size)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                defaultQuizSize === size ? "bg-amber-500 text-white shadow-lg shadow-amber-500/30" : "bg-gray-800/50 text-gray-400 hover:bg-gray-700/50"
              }`}>
              {size} {t("questionsUnit")}
            </button>
          ))}
        </div>
      </motion.div>

      {/* AI Settings */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
        className="glass rounded-2xl p-6 mb-6">
        <div className="flex items-center gap-2 mb-6">
          <Sparkles size={20} className="text-purple-400" />
          <h2 className="text-lg font-semibold">{t("aiSettings")}</h2>
        </div>

        {/* Provider Selection */}
        <div className="mb-5">
          <label className="block text-sm text-gray-400 mb-2">{t("aiProvider")}</label>
          <div className="grid grid-cols-2 gap-2">
            {providers.map((p) => (
              <button key={p.id} onClick={() => handleProviderChange(p.id)}
                className={`p-3 rounded-xl text-left text-sm transition-all ${
                  config.provider === p.id
                    ? "bg-purple-500/15 text-purple-400 border border-purple-500/30"
                    : "bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 border border-transparent"
                }`}>
                <div className="font-medium">{p.name}</div>
                {p.free && <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded mt-1 inline-block">FREE</span>}
              </button>
            ))}
          </div>
        </div>

        {/* Free Note */}
        {config.provider === "gemini" && (
          <div className="mb-5 p-3 rounded-xl bg-emerald-500/5 border border-emerald-500/20 flex items-start gap-2">
            <AlertCircle size={16} className="text-emerald-400 mt-0.5 flex-shrink-0" />
            <div className="text-sm text-emerald-300">
              {t("freeNote")}
              <a href="https://aistudio.google.com/apikey" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1 text-emerald-400 hover:underline mt-1">
                {t("getApiKey")} <ExternalLink size={12} />
              </a>
            </div>
          </div>
        )}

        {/* API Key */}
        <div className="mb-5">
          <label className="block text-sm text-gray-400 mb-2">{t("apiKey")}</label>
          <input
            type="password"
            value={config.apiKey}
            onChange={(e) => setConfig({ ...config, apiKey: e.target.value })}
            placeholder={t("apiKeyPlaceholder")}
            className="w-full px-4 py-2.5 rounded-xl bg-gray-800/50 border border-gray-700 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30 transition-all"
          />
        </div>

        {/* Model */}
        <div className="mb-5">
          <label className="block text-sm text-gray-400 mb-2">{t("modelName")}</label>
          {currentProvider.models.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {currentProvider.models.map((m) => (
                <button key={m} onClick={() => setConfig({ ...config, model: m })}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                    config.model === m
                      ? "bg-purple-500/20 text-purple-400 border border-purple-500/30"
                      : "bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 border border-transparent"
                  }`}>{m}</button>
              ))}
            </div>
          ) : (
            <input
              type="text"
              value={config.model}
              onChange={(e) => setConfig({ ...config, model: e.target.value })}
              placeholder="model-name"
              className="w-full px-4 py-2.5 rounded-xl bg-gray-800/50 border border-gray-700 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-all"
            />
          )}
        </div>

        {/* Custom Endpoint */}
        {config.provider === "custom" && (
          <div className="mb-5">
            <label className="block text-sm text-gray-400 mb-2">{t("customEndpoint")}</label>
            <input
              type="url"
              value={config.endpoint}
              onChange={(e) => setConfig({ ...config, endpoint: e.target.value })}
              placeholder={t("endpointPlaceholder")}
              className="w-full px-4 py-2.5 rounded-xl bg-gray-800/50 border border-gray-700 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-all"
            />
          </div>
        )}

        {/* Get API Key Link */}
        {currentProvider.keyUrl && config.provider !== "gemini" && (
          <div className="mb-5">
            <a href={currentProvider.keyUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-blue-400 hover:underline">
              {t("getApiKey")} <ExternalLink size={12} />
            </a>
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button onClick={handleSave}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold transition-all ${
              saved
                ? "bg-emerald-500 text-white"
                : "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105"
            }`}>
            {saved ? <><Check size={18} />{t("saved")}</> : <><Settings size={18} />{t("save")}</>}
          </button>
          <button onClick={handleTest} disabled={testing || !config.apiKey}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-700 text-gray-300 hover:bg-gray-800/50 transition-all disabled:opacity-30 disabled:cursor-not-allowed">
            {testing ? <><Loader2 size={18} className="animate-spin" />{t("testing")}</>
              : testResult === "success" ? <><Check size={18} className="text-emerald-400" />{t("testSuccess")}</>
              : testResult === "fail" ? <><AlertCircle size={18} className="text-red-400" />{t("testFail")}</>
              : <>{t("testConnection")}</>}
          </button>
        </div>
      </motion.div>
    </div>
  );
}
