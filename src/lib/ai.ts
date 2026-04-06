import type { AIConfig } from "./store";
import type { Question } from "@/data/questions";
import { GoogleGenerativeAI } from "@google/generative-ai";

function buildPrompt(
  question: Question,
  userAnswer: number,
  locale: "zh" | "en"
): string {
  const langInstruction =
    locale === "zh"
      ? "请用中文回答，详细易懂。"
      : "Please answer in English, detailed and easy to understand.";

  return `You are a California Home Inspector exam tutor. A student got this question ${userAnswer === question.correctAnswer ? "correct" : "wrong"}.

Question: ${question.question}
Options:
A) ${question.options[0]}
B) ${question.options[1]}
C) ${question.options[2]}
D) ${question.options[3]}

Student's answer: ${String.fromCharCode(65 + userAnswer)}) ${question.options[userAnswer]}
Correct answer: ${String.fromCharCode(65 + question.correctAnswer)}) ${question.options[question.correctAnswer]}

${langInstruction}
Please provide:
1. Why the correct answer is right (with real-world context)
2. Why the other options are wrong
3. A helpful memory tip or real inspection scenario
Keep it concise but thorough (under 300 words).`;
}

async function callGemini(prompt: string, config: AIConfig): Promise<string> {
  const genAI = new GoogleGenerativeAI(config.apiKey);
  const model = genAI.getGenerativeModel({ model: config.model || "gemini-2.0-flash" });
  const result = await model.generateContent(prompt);
  return result.response.text();
}

async function callOpenAICompatible(
  prompt: string,
  config: AIConfig,
  url: string,
  headers: Record<string, string>
): Promise<string> {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...headers },
    body: JSON.stringify({
      model: config.model,
      messages: [{ role: "user", content: prompt }],
      max_tokens: 1024,
    }),
  });
  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`API error ${response.status}: ${errText}`);
  }
  const data = await response.json();
  return data.choices?.[0]?.message?.content || "";
}

async function callAnthropic(prompt: string, config: AIConfig): Promise<string> {
  const url = config.endpoint || "https://api.anthropic.com/v1/messages";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": config.apiKey,
      "anthropic-version": "2023-06-01",
      "anthropic-dangerous-direct-browser-access": "true",
    },
    body: JSON.stringify({
      model: config.model || "claude-sonnet-4-20250514",
      max_tokens: 1024,
      messages: [{ role: "user", content: prompt }],
    }),
  });
  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`API error ${response.status}: ${errText}`);
  }
  const data = await response.json();
  return data.content?.[0]?.text || "";
}

export async function getAIExplanation(
  question: Question,
  userAnswer: number,
  locale: "zh" | "en",
  config: AIConfig
): Promise<string> {
  if (!config.apiKey && config.provider !== "custom") {
    throw new Error("API key not configured");
  }

  const prompt = buildPrompt(question, userAnswer, locale);

  switch (config.provider) {
    case "gemini":
      return callGemini(prompt, config);
    case "openai":
      return callOpenAICompatible(prompt, config,
        config.endpoint || "https://api.openai.com/v1/chat/completions",
        { Authorization: `Bearer ${config.apiKey}` });
    case "anthropic":
      return callAnthropic(prompt, config);
    case "custom":
      return callOpenAICompatible(prompt, config,
        config.endpoint,
        config.apiKey ? { Authorization: `Bearer ${config.apiKey}` } : {});
  }
}

export async function testAIConnection(config: AIConfig): Promise<boolean> {
  try {
    switch (config.provider) {
      case "gemini": {
        const genAI = new GoogleGenerativeAI(config.apiKey);
        const model = genAI.getGenerativeModel({ model: config.model || "gemini-2.0-flash" });
        await model.generateContent("Say hi in one word.");
        return true;
      }
      case "openai": {
        const res = await fetch(config.endpoint || "https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: { "Content-Type": "application/json", Authorization: `Bearer ${config.apiKey}` },
          body: JSON.stringify({ model: config.model, messages: [{ role: "user", content: "Hi" }], max_tokens: 5 }),
        });
        return res.ok;
      }
      case "anthropic": {
        const res = await fetch(config.endpoint || "https://api.anthropic.com/v1/messages", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": config.apiKey,
            "anthropic-version": "2023-06-01",
            "anthropic-dangerous-direct-browser-access": "true",
          },
          body: JSON.stringify({ model: config.model, max_tokens: 5, messages: [{ role: "user", content: "Hi" }] }),
        });
        return res.ok;
      }
      case "custom": {
        const res = await fetch(config.endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", ...(config.apiKey ? { Authorization: `Bearer ${config.apiKey}` } : {}) },
          body: JSON.stringify({ model: config.model, messages: [{ role: "user", content: "Hi" }], max_tokens: 5 }),
        });
        return res.ok;
      }
    }
  } catch {
    return false;
  }
}
