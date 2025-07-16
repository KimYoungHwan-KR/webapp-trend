import { useState } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { QuizProgress } from "@/components/quiz-progress";
import { QuestionCard } from "@/components/question-card";
import { calculateResult } from "@/lib/result-calculator";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import CommonHeader from "@/components/CommonHeader";

const QUESTIONS = [
  { question: "나는 새로운 사람을 만나는 것이 즐겁다.", choices: ["예", "아니오"] },
  { question: "계획적으로 움직이는 것을 좋아한다.", choices: ["예", "아니오"] },
  { question: "감정 표현에 솔직한 편이다.", choices: ["예", "아니오"] },
  { question: "문제를 해결할 때 논리적으로 접근한다.", choices: ["예", "아니오"] },
  { question: "친구와의 약속을 잘 지킨다.", choices: ["예", "아니오"] },
  { question: "새로운 도전을 두려워하지 않는다.", choices: ["예", "아니오"] },
  { question: "감정 기복이 심한 편이다.", choices: ["예", "아니오"] },
  { question: "혼자만의 시간이 필요하다.", choices: ["예", "아니오"] },
  { question: "타인의 감정을 잘 공감한다.", choices: ["예", "아니오"] },
  { question: "즉흥적으로 행동하는 것을 좋아한다.", choices: ["예", "아니오"] },
  { question: "목표를 세우고 실천하는 편이다.", choices: ["예", "아니오"] },
  { question: "다른 사람의 의견을 잘 수용한다.", choices: ["예", "아니오"] },
  { question: "스트레스를 잘 관리한다.", choices: ["예", "아니오"] },
  { question: "새로운 취미를 쉽게 시작한다.", choices: ["예", "아니오"] },
  { question: "실패를 두려워하지 않는다.", choices: ["예", "아니오"] }
];

export default function Quiz() {
  const [, setLocation] = useLocation();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const isLastQuestion = currentQuestionIndex === QUESTIONS.length - 1;

  const goBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
      setAnswers(prev => prev.slice(0, -1));
    } else {
      setLocation("/test/eto-egen/gender-select");
    }
  };

  const handleAnswer = (choiceIndex: number) => {
    const answerTypes = ["teto", "neutral", "egen"];
    const answerType = answerTypes[choiceIndex] || "neutral";
    const newAnswers = [...answers, answerType];
    setAnswers(newAnswers);
    setTimeout(() => {
      if (isLastQuestion) {
        sessionStorage.setItem("quizAnswers", JSON.stringify(newAnswers));
        const result = calculateResult(newAnswers);
        setLocation(`/test/eto-egen/result?type=${result.type}`);
      } else {
        setCurrentQuestionIndex(prev => prev + 1);
      }
    }, 500);
  };

  if (!QUESTIONS[currentQuestionIndex]) {
    return <div>로딩 중...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <CommonHeader gradient="bg-gradient-to-r from-pink-500 to-purple-600" />
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="absolute top-4 left-4 z-10">
          <Button
            onClick={goBack}
            variant="ghost"
            size="sm"
            className="text-gray-600 hover:bg-gray-100"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </div>
        <QuizProgress
          currentQuestion={currentQuestionIndex + 1}
          totalQuestions={QUESTIONS.length}
        />
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestionIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <QuestionCard
              question={QUESTIONS[currentQuestionIndex]}
              currentQuestion={currentQuestionIndex + 1}
              onAnswer={handleAnswer}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
