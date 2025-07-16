import { Button } from "@/components/ui/button";
import InteractiveCarousel from "@/components/interactive-carousel";
import { Bolt, TrendingUp, Globe } from "lucide-react";
import { Link } from "wouter";
import CommonHeader from "@/components/CommonHeader";
import CommonFooter from "@/components/CommonFooter";

export default function Home() {
  return (
    <div className="font-korean bg-white min-h-screen">
      <CommonHeader colorMode="black" />
      <section className="pt-12 pb-4 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            {/* 중앙 플로팅 아이콘 */}
            <div className="flex justify-center items-center gap-16 mt-12 h-24">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg animate-float-delayed-2">
                <Bolt className="text-white h-6 w-6 md:h-7 md:w-7" />
              </div>
              <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg animate-float">
                <TrendingUp className="text-white h-7 w-7 md:h-8 md:w-8" />
              </div>
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-indigo-500 to-cyan-600 rounded-full flex items-center justify-center shadow-lg animate-float-delayed">
                <Globe className="text-white h-6 w-6 md:h-7 md:w-7" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-0 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              <span
                className="bg-clip-text text-transparent"
                style={{
                  background:
                    "linear-gradient(90deg, #ec4899, #a21caf, #ef4444, #ec4899, #6366f1, #22d3ee)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  opacity: 0.99,
                  textShadow: "0 1px 1px rgba(0,0,0,0.01)"
                }}
              >
                Popular Topics
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              지금 사람들이 가장 많이 이야기하고 있는 핫한 토픽들을 확인해보세요
            </p>
          </div>
          <InteractiveCarousel />
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              <span
                className="bg-clip-text text-transparent"
                style={{
                  background:
                    "linear-gradient(90deg, #ec4899, #a21caf, #ef4444, #ec4899, #6366f1, #22d3ee)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  opacity: 0.99,
                  textShadow: "0 1px 1px rgba(0,0,0,0.01)"
                }}
              >
                Types of Topics
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              다양한 기능으로 트렌드를 더 스마트하게 경험하세요
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {/* Feature 1 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                <Bolt className="text-white h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-800">
                테스트
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                인기 심리·성격 테스트로 나를 쉽고 재미있게 알아볼 수 있습니다.
              </p>
              <Button asChild className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
                <Link href="/test-list">인기 테스트 보기</Link>
              </Button>
            </div>
            {/* Feature 2 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                <TrendingUp className="text-white h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-800">
                유튜브
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                실시간 인기 유튜브 영상과 트렌드를 한눈에 확인할 수 있습니다.
              </p>
              <Button asChild className="w-full bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700">
                <Link href="/youtube-list">유튜브 인기 영상 보기</Link>
              </Button>
            </div>
            {/* Feature 3 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-indigo-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                <Globe className="text-white h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-800">
                뉴스
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                실시간 이슈와 주요 뉴스를 빠르게 확인할 수 있습니다.
              </p>
              <Button asChild className="w-full bg-gradient-to-r from-indigo-500 to-cyan-600 hover:from-indigo-600 hover:to-cyan-700">
                <Link href="/news-list">실시간 뉴스 보기</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <CommonFooter />
    </div>
  );
}
