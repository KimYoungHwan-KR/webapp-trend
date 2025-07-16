import { useLocation, useRoute } from "wouter";
import { ResultCard } from "@/components/result-card";
import { personalityResults, calculateResult } from "@/lib/result-calculator";
import { PersonalityResult } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import CommonHeader from "@/components/CommonHeader";

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

  // Database functionality removed per user request

  const handleShare = async () => {
    toast({
      title: "공유 기능은 준비 중입니다.",
      description: "잠시만 기다려 주세요."
    });
  };

  const handleRestart = () => {
    setLocation("/test/eto-egen/quiz");
  };

  const goBack = () => {
    setLocation("/test/eto-egen/quiz");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-500 to-purple-600 flex flex-col items-center justify-center px-4 text-white">
      <CommonHeader gradient="bg-gradient-to-r from-pink-500 to-purple-600" />
      <div className="flex-1 flex flex-col items-center justify-center w-full pt-20">
        <div className="min-h-screen bg-gray-50">
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
          <ResultCard
            result={result}
            onShare={handleShare}
            onRestart={handleRestart}
          />
        </div>
      </div>
    </div>
  );
}
