import { useState, useCallback, useMemo } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { QuizProgress } from "@/components/quiz-progress";
import { QuestionCard } from "@/components/question-card";
import { calculateResult } from "@/lib/result-calculator";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

// 상수 분리
const QUIZ_QUESTIONS = [
  { question: "나는 새로운 사람을 만나는 것이 즐겁다.", choices: ["그렇다", "보통이다", "아니다"] },
  { question: "계획적으로 움직이는 것을 좋아한다.", choices: ["그렇다", "보통이다", "아니다"] },
  { question: "감정 표현에 솔직한 편이다.", choices: ["그렇다", "보통이다", "아니다"] },
];

const ANSWER_TYPES = ["teto", "neutral", "egen"] as const;

// 타입 정의
type AnswerType = typeof ANSWER_TYPES[number];
type QuizQuestion = typeof QUIZ_QUESTIONS[number];

export default function Quiz() {
  const [, setLocation] = useLocation();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<AnswerType[]>([]);

  // 메모이제이션된 값들
  const currentQuestion = useMemo(() => 
    QUIZ_QUESTIONS[currentQuestionIndex], 
    [currentQuestionIndex]
  );

  const isLastQuestion = useMemo(() => 
    currentQuestionIndex === QUIZ_QUESTIONS.length - 1,
    [currentQuestionIndex]
  );

  // 콜백 함수들
  const goBack = useCallback(() => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
      setAnswers(prev => prev.slice(0, -1));
    } else {
      setLocation("/gender-select");
    }
  }, [currentQuestionIndex, setLocation]);

  const handleAnswer = useCallback((choiceIndex: number) => {
    const answerType = ANSWER_TYPES[choiceIndex] || "neutral";
    
    setAnswers(prev => {
      const newAnswers = [...prev, answerType];
      
      // 마지막 질문인 경우 결과 처리
      if (isLastQuestion) {
        sessionStorage.setItem("quizAnswers", JSON.stringify(newAnswers));
        const result = calculateResult(newAnswers);
        setTimeout(() => {
          setLocation(`/result?type=${result.type}`);
        }, 500);
      }
      
      return newAnswers;
    });

    // 마지막 질문이 아닌 경우 다음 질문으로
    if (!isLastQuestion) {
      setTimeout(() => {
        setCurrentQuestionIndex(prev => prev + 1);
      }, 500);
    }
  }, [isLastQuestion, setLocation]);

  if (!currentQuestion) {
    return <div className="flex items-center justify-center min-h-screen">로딩중...</div>;
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
        totalQuestions={QUIZ_QUESTIONS.length}
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
