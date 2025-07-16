import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { ArrowLeft } from "lucide-react";
import CommonHeader from "@/components/CommonHeader";

export default function GenderSelect() {
  const [, setLocation] = useLocation();

  const selectGender = (gender: "male" | "female") => {
    sessionStorage.setItem("selectedGender", gender);
    setLocation("/test/eto-egen/quiz");
  };

  const goBack = () => {
    setLocation("/test/eto-egen/description");
  };

  return (
    <div className="min-h-screen gradient-bg flex flex-col">
      <CommonHeader gradient="bg-gradient-to-r from-pink-500 to-purple-600" />
      <div className="flex-1 flex items-center justify-center p-4 pt-20">
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
        <motion.div className="text-center max-w-md mx-auto" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
          <div className="mb-8">
            <motion.h1 className="text-3xl font-black text-white mb-4 drop-shadow-lg">성별을 선택하세요</motion.h1>
            <p className="text-lg text-white/90 font-medium mb-2">아래에서 성별을 선택해 주세요.</p>
          </div>
          <div className="space-y-4 mb-8">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button onClick={() => selectGender("female")} className="w-full bg-gradient-to-r from-pink-400 to-rose-400 text-white font-bold py-6 px-8 rounded-2xl text-lg shadow-xl hover:shadow-2xl choice-btn h-auto">
                <div className="flex items-center justify-center">
                  <span className="text-3xl mr-4">💖</span>
                  <div>
                    <div className="text-xl font-bold">여성</div>
                    <div className="text-sm opacity-90">감성적이고 따뜻한 유형</div>
                  </div>
                </div>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button onClick={() => selectGender("male")} className="w-full bg-gradient-to-r from-blue-400 to-teal-400 text-white font-bold py-6 px-8 rounded-2xl text-lg shadow-xl hover:shadow-2xl choice-btn h-auto">
                <div className="flex items-center justify-center">
                  <span className="text-3xl mr-4">🌟</span>
                  <div>
                    <div className="text-xl font-bold">남성</div>
                    <div className="text-sm opacity-90">논리적이고 진취적인 유형</div>
                  </div>
                </div>
              </Button>
            </motion.div>
          </div>
          <p className="text-white/70 text-sm">성별에 따라 맞춤 결과를 제공합니다.</p>
        </motion.div>
      </div>
    </div>
  );
}