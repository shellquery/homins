"use client";

import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from "react";

export interface QuizHistory {
  id: string;
  date: string;
  category: string;
  score: number;
  total: number;
  percentage: number;
  timeSeconds: number;
}

export interface AIConfig {
  provider: "gemini" | "openai" | "anthropic" | "custom";
  apiKey: string;
  model: string;
  endpoint: string;
}

interface StoreState {
  wrongQuestionIds: number[];
  quizHistory: QuizHistory[];
  defaultQuizSize: number;
  aiConfig: AIConfig;
}

interface StoreContextType extends StoreState {
  addWrongQuestion: (id: number) => void;
  removeWrongQuestion: (id: number) => void;
  clearWrongQuestions: () => void;
  addQuizHistory: (entry: QuizHistory) => void;
  setDefaultQuizSize: (size: number) => void;
  setAIConfig: (config: AIConfig) => void;
  isWrongQuestion: (id: number) => boolean;
}

const defaultAIConfig: AIConfig = {
  provider: "gemini",
  apiKey: "",
  model: "gemini-2.5-flash",
  endpoint: "",
};

const defaultState: StoreState = {
  wrongQuestionIds: [],
  quizHistory: [],
  defaultQuizSize: 20,
  aiConfig: defaultAIConfig,
};

const STORAGE_KEY = "homins-store";

function loadState(): StoreState {
  if (typeof window === "undefined") return defaultState;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState;
    const parsed = JSON.parse(raw);
    return { ...defaultState, ...parsed };
  } catch {
    return defaultState;
  }
}

function saveState(state: StoreState) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // localStorage full or unavailable
  }
}

const StoreContext = createContext<StoreContextType>({
  ...defaultState,
  addWrongQuestion: () => {},
  removeWrongQuestion: () => {},
  clearWrongQuestions: () => {},
  addQuizHistory: () => {},
  setDefaultQuizSize: () => {},
  setAIConfig: () => {},
  isWrongQuestion: () => false,
});

export function StoreProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<StoreState>(defaultState);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setState(loadState());
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      saveState(state);
    }
  }, [state, mounted]);

  const addWrongQuestion = useCallback((id: number) => {
    setState((prev) => {
      if (prev.wrongQuestionIds.includes(id)) return prev;
      return { ...prev, wrongQuestionIds: [...prev.wrongQuestionIds, id] };
    });
  }, []);

  const removeWrongQuestion = useCallback((id: number) => {
    setState((prev) => ({
      ...prev,
      wrongQuestionIds: prev.wrongQuestionIds.filter((qid) => qid !== id),
    }));
  }, []);

  const clearWrongQuestions = useCallback(() => {
    setState((prev) => ({ ...prev, wrongQuestionIds: [] }));
  }, []);

  const addQuizHistory = useCallback((entry: QuizHistory) => {
    setState((prev) => ({
      ...prev,
      quizHistory: [entry, ...prev.quizHistory].slice(0, 50),
    }));
  }, []);

  const setDefaultQuizSize = useCallback((size: number) => {
    setState((prev) => ({ ...prev, defaultQuizSize: size }));
  }, []);

  const setAIConfig = useCallback((config: AIConfig) => {
    setState((prev) => ({ ...prev, aiConfig: config }));
  }, []);

  const isWrongQuestion = useCallback(
    (id: number) => state.wrongQuestionIds.includes(id),
    [state.wrongQuestionIds]
  );

  if (!mounted) {
    return <div className="min-h-screen bg-gray-950" />;
  }

  return (
    <StoreContext.Provider
      value={{
        ...state,
        addWrongQuestion,
        removeWrongQuestion,
        clearWrongQuestions,
        addQuizHistory,
        setDefaultQuizSize,
        setAIConfig,
        isWrongQuestion,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  return useContext(StoreContext);
}
