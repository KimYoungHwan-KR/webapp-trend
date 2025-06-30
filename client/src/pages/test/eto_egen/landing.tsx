import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-16 pb-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-6">
            테토 vs 에겐
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 mb-4 font-semibold">
            성격 테스트의 새로운 기준
          </p>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            당신은 감성적인 테토형? 자유로운 에겐형?
            <br />
            아니면 균형잡힌 테겐형이나 에토형?
            <br />
            지금 바로 확인해보세요!
          </p>

          <div className="flex justify-center items-center gap-4 mt-6">
            <Badge variant="secondary" className="text-sm">
              ⚡ 3분 완성
            </Badge>
            <Badge variant="secondary" className="text-sm">
              🎯 8가지 유형
            </Badge>
            <Badge variant="secondary" className="text-sm">
              💕 파트너 추천
            </Badge>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <Card className="bg-white/80 backdrop-blur-sm border-pink-200 hover:shadow-lg transition-all">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">💖</div>
                <h3 className="font-bold text-lg mb-2">테토형</h3>
                <p className="text-sm text-gray-600">감성적이고 따뜻한 성격</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-white/80 backdrop-blur-sm border-blue-200 hover:shadow-lg transition-all">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">✨</div>
                <h3 className="font-bold text-lg mb-2">에겐형</h3>
                <p className="text-sm text-gray-600">자유롭고 솔직한 성격</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Card className="bg-white/80 backdrop-blur-sm border-purple-200 hover:shadow-lg transition-all">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">🌸</div>
                <h3 className="font-bold text-lg mb-2">테겐형</h3>
                <p className="text-sm text-gray-600">감성과 자유로움의 조화</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="bg-white/80 backdrop-blur-sm border-green-200 hover:shadow-lg transition-all">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">🦋</div>
                <h3 className="font-bold text-lg mb-2">에토형</h3>
                <p className="text-sm text-gray-600">자연스러운 감성</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Final CTA: 버튼을 위로 올림 */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-12 py-6 text-xl font-bold rounded-full shadow-2xl"
          >
            <Link href="/gender-select">🚀 나만의 성격 유형 발견하기</Link>
          </Button>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          ></motion.div>
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          ></motion.div>
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          ></motion.div>
        </div>
      </div>
    </div>
  );
}
