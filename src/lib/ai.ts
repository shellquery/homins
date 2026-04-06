import type { AIConfig } from "./store";
import type { Question } from "@/data/questions";

function getProviderConfig(config: AIConfig) {
  switch (config.provider) {
    case "gemini":
      return {
        url: `https://generativelanguage.googleapis.com/v1beta/models/${config.model}:generateContent?key=${config.apiKey}`,
        buildBody: (prompt: string) => ({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: { maxOutputTokens: 1024 },
        }),
        extractText: (data: Record<string, unknown>) => {
          const candidates = data.candidates as Array<{
            content: { parts: Array<{ text: string }> };
          }>;
          return candidates?.[0]?.content?.parts?.[0]?.text || "";
        },
      };
    case "openai":
      return {
        url: config.endpoint || "https://api.openai.com/v1/chat/completions",
        buildBody: (prompt: string) => ({
          model: config.model || "gpt-4o-mini",
          messages: [{ role: "user", content: prompt }],
          max_tokens: 1024,
        }),
        extractText: (data: Record<string, unknown>) => {
          const choices = data.choices as Array<{
            message: { content: string };
          }>;
          return choices?.[0]?.message?.content || "";
        },
        headers: { Authorization: `Bearer ${config.apiKey}` },
      };
    case "anthropic":
      return {
        url: config.endpoint || "https://api.anthropic.com/v1/messages",
        buildBody: (prompt: string) => ({
          model: config.model || "claude-sonnet-4-20250514",
          max_tokens: 1024,
          messages: [{ role: "user", content: prompt }],
        }),
        extractText: (data: Record<string, unknown>) => {
          const content = data.content as Array<{ text: string }>;
          return content?.[0]?.text || "";
        },
        headers: {
          "x-api-key": config.apiKey,
          "anthropic-version": "2023-06-01",
          "anthropic-dangerous-direct-browser-access": "true",
        },
      };
    case "custom":
      return {
        url: config.endpoint,
        buildBody: (prompt: string) => ({
          model: config.model,
          messages: [{ role: "user", content: prompt }],
          max_tokens: 1024,
        }),
        extractText: (data: Record<string, unknown>) => {
          const choices = data.choices as Array<{
            message: { content: string };
          }>;
          return (
            choices?.[0]?.message?.content ||
            (data as { content?: Array<{ text: string }> })?.content?.[0]
              ?.text ||
            JSON.stringify(data)
          );
        },
        headers: config.apiKey
          ? { Authorization: `Bearer ${config.apiKey}` }
          : {},
      };
  }
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

  const langInstruction =
    locale === "zh"
      ? "请用中文回答，详细易懂。"
      : "Please answer in English, detailed and easy to understand.";

  const prompt = `You are a California Home Inspector exam tutor. A student got this question ${userAnswer === question.correctAnswer ? "correct" : "wrong"}.

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

  const providerConfig = getProviderConfig(config);

  const extraHeaders = "headers" in providerConfig ? providerConfig.headers : {};
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };
  if (extraHeaders) {
    for (const [k, v] of Object.entries(extraHeaders)) {
      if (v) headers[k] = v;
    }
  }

  const response = await fetch(providerConfig.url, {
    method: "POST",
    headers,
    body: JSON.stringify(providerConfig.buildBody(prompt)),
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`API error ${response.status}: ${errText}`);
  }

  const data = await response.json();
  return providerConfig.extractText(data);
}

export async function testAIConnection(config: AIConfig): Promise<boolean> {
  const providerConfig = getProviderConfig(config);
  const extraHeaders = "headers" in providerConfig ? providerConfig.headers : {};
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };
  if (extraHeaders) {
    for (const [k, v] of Object.entries(extraHeaders)) {
      if (v) headers[k] = v;
    }
  }

  const response = await fetch(providerConfig.url, {
    method: "POST",
    headers,
    body: JSON.stringify(providerConfig.buildBody("Say hello in one word.")),
  });

  return response.ok;
}
