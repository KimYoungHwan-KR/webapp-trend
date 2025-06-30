// 이 프로젝트는 현재 정적 데이터를 사용하여 데이터베이스 스키마가 필요하지 않습니다.
// 추후 데이터베이스 연동 시 필요한 스키마입니다.

import { pgTable, text, serial, integer, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const quizResults = pgTable("quiz_results", {
  id: serial("id").primaryKey(),
  resultType: text("result_type").notNull(),
  answers: jsonb("answers").notNull(),
  timestamp: integer("timestamp").notNull(),
});

export const insertQuizResultSchema = createInsertSchema(quizResults).omit({
  id: true,
  timestamp: true,
});

export type InsertQuizResult = z.infer<typeof insertQuizResultSchema>;
export type QuizResult = typeof quizResults.$inferSelect;

// Quiz data types
export interface QuizQuestion {
  id: number;
  question: string;
  choices: QuizChoice[];
}

export interface QuizChoice {
  text: string;
  type: "teto" | "egen" | "neutral";
}

export interface PersonalityResult {
  type: "teto_girl" | "teto_boy" | "egen_girl" | "egen_boy" | "tegen_girl" | "tegen_boy" | "eto_girl" | "eto_boy";
  title: string;
  subtitle: string;
  icon: string;
  description: string;
  stats: {
    emotion: number;
    social: number;
  };
  compatibleTypes: string[];
  recommendation?: string;
}

export interface Topic {
  id: number;
  title: string;
  description: string;
  category: string;
  views: string;
  comments: string;
  shares: string;
  gradientClass: string;
  icon: string;
  isHot?: boolean;
}
