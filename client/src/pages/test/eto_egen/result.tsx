import { useLocation, useRoute } from "wouter";
import { ResultCard } from "@/components/result-card";
import { personalityResults, calculateResult } from "@/lib/result-calculator";
import { PersonalityResult } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function Result() {
  const [, params] = useRoute("/result");
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  // Get result type from URL params and recalculate with stored answers
  const urlParams = new URLSearchParams(window.location.search);
  const resultType = urlParams.get("type") as keyof typeof personalityResults;
  
  // Get stored answers and recalculate result for accurate stats
  const storedAnswers = sessionStorage.getItem("quizAnswers");
  const answers = storedAnswers ? JSON.parse(storedAnswers) : [];
  
  const result: PersonalityResult = answers.length > 0 
    ? calculateResult(answers) 
    : personalityResults[resultType] || personalityResults.teto_girl;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 p-4">
      {/* 결과 카드 렌더링 */}
      <ResultCard result={result} onShare={() => toast({ title: "공유 기능은 준비 중입니다." })} onRestart={() => setLocation("/quiz")} />
      <Button onClick={() => setLocation("/quiz")} className="mt-8 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-3 px-8 rounded-2xl shadow-lg hover:from-pink-600 hover:to-purple-700">
        다시 테스트하기
      </Button>
    </div>
  );
}
