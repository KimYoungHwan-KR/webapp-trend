import { useState } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { QuizProgress } from "@/components/quiz-progress";
import { QuestionCard } from "@/components/question-card";
import { calculateResult } from "@/lib/result-calculator";
import { QuizChoice } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function Quiz() {
  const [, setLocation] = useLocation();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  // 임시 하드코딩된 질문 데이터
  const quizQuestions = [
    { question: "나는 새로운 사람을 만나는 것이 즐겁다.", choices: ["그렇다", "보통이다", "아니다"] },
    { question: "계획적으로 움직이는 것을 좋아한다.", choices: ["그렇다", "보통이다", "아니다"] },
    { question: "감정 표현에 솔직한 편이다.", choices: ["그렇다", "보통이다", "아니다"] },
  ];
  const currentQuestion = quizQuestions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === quizQuestions.length - 1;

  const goBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
      setAnswers(prev => prev.slice(0, -1));
    } else {
      setLocation("/gender-select");
    }
  };

  const handleAnswer = (choiceIndex: number) => {
    // Map choice index to answer type (0=teto, 1=neutral, 2=egen for most questions)
    const answerTypes = ["teto", "neutral", "egen"];
    const answerType = answerTypes[choiceIndex] || "neutral";
    const newAnswers = [...answers, answerType];
    setAnswers(newAnswers);

    // Add a small delay for the animation effect
    setTimeout(() => {
      if (isLastQuestion) {
        // Store answers in sessionStorage for result calculation
        sessionStorage.setItem("quizAnswers", JSON.stringify(newAnswers));
        // Calculate result and navigate to result page
        const result = calculateResult(newAnswers);
        setLocation(`/result?type=${result.type}`);
      } else {
        setCurrentQuestionIndex(prev => prev + 1);
      }
    }, 500);
  };

  if (!currentQuestion) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
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
        totalQuestions={quizQuestions.length}
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
            question={currentQuestion}
            currentQuestion={currentQuestionIndex + 1}
            onAnswer={handleAnswer}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
