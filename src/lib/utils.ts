import { Question } from "@/data/questions";

export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function getRandomQuestions(
  questions: Question[],
  count: number,
  category?: string
): Question[] {
  let pool = questions;
  if (category && category !== "all") {
    pool = questions.filter((q) => q.category === category);
  }
  return shuffleArray(pool).slice(0, count);
}

export function calculateScore(
  questions: Question[],
  answers: Record<number, number>
): {
  correct: number;
  total: number;
  percentage: number;
  grade: string;
  gradeColor: string;
} {
  let correct = 0;
  questions.forEach((q) => {
    if (answers[q.id] === q.correctAnswer) {
      correct++;
    }
  });
  const percentage = Math.round((correct / questions.length) * 100);
  let grade: string;
  let gradeColor: string;
  if (percentage >= 90) {
    grade = "A";
    gradeColor = "text-emerald-400";
  } else if (percentage >= 80) {
    grade = "B";
    gradeColor = "text-blue-400";
  } else if (percentage >= 70) {
    grade = "C";
    gradeColor = "text-yellow-400";
  } else if (percentage >= 60) {
    grade = "D";
    gradeColor = "text-orange-400";
  } else {
    grade = "F";
    gradeColor = "text-red-400";
  }
  return { correct, total: questions.length, percentage, grade, gradeColor };
}
