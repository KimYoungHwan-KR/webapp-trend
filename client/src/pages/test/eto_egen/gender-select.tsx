import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function GenderSelect() {
  const [, setLocation] = useLocation();

  const selectGender = (gender: "male" | "female") => {
    // Store gender in sessionStorage to use later
    sessionStorage.setItem("selectedGender", gender);
    setLocation("/quiz");
  };

  const goBack = () => {
    setLocation("/personality-test");
  };

  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center p-4">
      {/* Back Button */}
      <div className="absolute top-4 left-4">
        <Button
          onClick={goBack}
          variant="ghost"
          size="sm"
          className="text-white hover:bg-white/20"
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
      </div>
      {/* Language Selector 삭제됨 */}
      <motion.div className="w-full max-w-md bg-white/10 rounded-2xl p-8 shadow-2xl flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-8 text-white">성별을 선택하세요</h2>
        <div className="space-y-4 mb-8 w-full">
          <Button
            onClick={() => selectGender("female")}
            className="w-full bg-gradient-to-r from-pink-400 to-rose-400 text-white font-bold py-6 px-8 rounded-2xl text-lg shadow-xl hover:shadow-2xl choice-btn h-auto"
          >
            <div className="flex items-center justify-center">
              <span className="text-3xl mr-4">💖</span>
              <div>
                <div className="text-xl font-bold">여성</div>
                <div className="text-sm opacity-90">감성적이고 따뜻한 유형</div>
              </div>
            </div>
          </Button>
          <Button
            onClick={() => selectGender("male")}
            className="w-full bg-gradient-to-r from-blue-400 to-teal-400 text-white font-bold py-6 px-8 rounded-2xl text-lg shadow-xl hover:shadow-2xl choice-btn h-auto"
          >
            <div className="flex items-center justify-center">
              <span className="text-3xl mr-4">🌟</span>
              <div>
                <div className="text-xl font-bold">남성</div>
                <div className="text-sm opacity-90">논리적이고 진취적인 유형</div>
              </div>
            </div>
          </Button>
        </div>
        <p className="text-white/70 text-sm">성별에 따라 맞춤 결과를 제공합니다.</p>
      </motion.div>
    </div>
  );
}