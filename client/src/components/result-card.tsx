import { motion } from "framer-motion";
import { PersonalityResult } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Share, RotateCcw, Heart } from "lucide-react";

interface ResultCardProps {
  result: PersonalityResult;
  onShare: () => void;
  onRestart: () => void;
}

export function ResultCard({ result, onShare, onRestart }: ResultCardProps) {
  // 영어 타입을 한글로 매핑
  const typeMap: Record<string, string> = {
    teto_girl: "테토녀",
    teto_boy: "테토남",
    egen_girl: "에겐녀",
    egen_boy: "에겐남",
    tegen_girl: "테겐녀",
    tegen_boy: "테겐남",
    eto_girl: "에토녀",
    eto_boy: "에토남",
  };
  const compatibleIcons: Record<string, string> = {
    "테토녀": "💖",
    "테토남": "🌟", 
    "에겐녀": "✨",
    "에겐남": "🔥",
    "테겐녀": "🌸",
    "테겐남": "🎭",
    "에토녀": "🦋",
    "에토남": "🌊"
  };

  const getRecommendationTitle = (recommendation?: string) => {
    if (!recommendation) return "";
    switch (recommendation) {
      case "테토": return "테토형";
      case "에겐": return "에겐형";
      case "테겐": return "테겐형";
      case "에토": return "에토형";
      default: return recommendation;
    }
  };

  const getRecommendationDescription = (recommendation?: string) => {
    if (!recommendation) return "";
    switch (recommendation) {
      case "테토": return "감성적이고 따뜻한 사람";
      case "에겐": return "자유롭고 솔직한 사람";
      case "테겐": return "감성과 자유로움이 조화로운 사람";
      case "에토": return "자연스러운 감성을 가진 사람";
      default: return recommendation;
    }
  };

  const getRecommendationIcon = (recommendation?: string) => {
    if (!recommendation) return "💖";
    switch (recommendation) {
      case "테토": return "💖";
      case "에겐": return "✨";
      case "테겐": return "🌸";
      case "에토": return "🦋";
      default: return "💖";
    }
  };

  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg p-8 max-w-xl w-full"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center">
        <div className="text-5xl mb-4">{compatibleIcons[typeMap[result.type] || result.type]}</div>
        <h2 className="text-2xl font-bold mb-2">{result.title}</h2>
        <p className="text-gray-600 mb-4">{result.description}</p>
        <div className="flex gap-2 mb-6">
          <Button onClick={onShare} className="bg-gradient-to-r from-pink-400 to-teal-400 text-white font-bold py-2 px-6 rounded-2xl shadow-lg">
            <Share className="mr-2 h-5 w-5" /> 결과 공유
          </Button>
          <Button onClick={onRestart} variant="outline" className="bg-white text-gray-700 font-medium py-2 px-6 rounded-2xl shadow-lg border border-gray-200">
            <RotateCcw className="mr-2 h-5 w-5" /> 다시 테스트
          </Button>
        </div>
        {/* 추천 파트너 */}
        {result.recommendation && (
          <div className="bg-gradient-to-r from-pink-50 to-blue-50 rounded-2xl p-6 mt-6 border border-pink-200">
            <h3 className="font-bold text-gray-800 mb-3 text-center">
              <Heart className="inline mr-2 h-5 w-5 text-pink-500" />
              추천 파트너
            </h3>
            <div className="text-center">
              <div className="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-md">
                <span className="text-3xl mr-3">
                  {getRecommendationIcon(result.recommendation)}
                </span>
                <div>
                  <div className="text-xl font-bold text-gray-800">
                    {getRecommendationTitle(result.recommendation)}
                  </div>
                  <div className="text-sm text-gray-600">
                    {getRecommendationDescription(result.recommendation)}
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center text-sm text-gray-600 mt-3">
              결과 기반 추천입니다.
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
} 