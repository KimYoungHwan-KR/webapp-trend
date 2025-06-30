import { Button } from "@/components/ui/button";
import InteractiveCarousel from "@/components/interactive-carousel";
import {
  Flame,
  Bolt,
  TrendingUp,
  Globe,
  Twitter,
  Instagram,
  Youtube,
  Menu,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "wouter";
import CommonHeader from "@/components/CommonHeader";
import CommonFooter from "@/components/CommonFooter";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 페이지 로드 시 스크롤을 맨 위로 이동
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-korean bg-gray-50 min-h-screen">
      <CommonHeader />
      {/* Hero Section: 하단 패딩을 줄여 여백 감소 */}
      <section className="pt-24 pb-8 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Trendy Topic
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                핫한 토픽을 한 눈에 확인하세요
              </p>
              <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
                실시간 정보부터 인기 콘텐츠까지, 놓치면 안 되는 모든 이야기를
                발견할 수 있습니다.
              </p>
            </div>

            {/* Floating Icons: 상단 마진을 줄여 여백 감소 */}
            <div className="relative mt-12 h-20 md:h-30">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 md:left-2/4 md:translate-x-0 animate-float">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                  <TrendingUp className="text-white h-7 w-7 md:h-8 md:w-8" />
                </div>
              </div>
              <div className="absolute top-6 right-8 md:top-4 md:right-1/4 animate-float-delayed">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-purple-600 to-indigo-500 rounded-full flex items-center justify-center shadow-lg">
                  <Globe className="text-white h-6 w-6 md:h-7 md:w-7" />
                </div>
              </div>
              <div className="absolute top-12 left-8 md:top-10 md:left-1/3 animate-float-delayed-2">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center shadow-lg">
                  <Bolt className="text-white h-6 w-6 md:h-7 md:w-7" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Carousel Section: 상하 패딩을 줄여 여백 감소 */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
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

      {/* Features Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
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
