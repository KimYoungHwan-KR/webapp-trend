import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  Eye,
  MessageCircle,
  Share2,
  Bolt,
  TrendingUp,
  Globe,
} from "lucide-react";

interface CarouselSlide {
  id: number;
  title: string;
  description: string;
  category: string;
  views: string;
  comments: string;
  shares: string;
  gradientClass: string;
  icon: typeof Bolt;
  isHot?: boolean;
}

const slides: CarouselSlide[] = [
  {
    id: 1,
    title: "AI와 미래 기술",
    description:
      "ChatGPT부터 메타버스까지, 우리 일상을 바꾸고 있는 혁신적인 기술들의 현재와 미래를 탐험해보세요.",
    category: "테스트",
    views: "2.5만",
    comments: "1.2천",
    shares: "890",
    gradientClass: "bg-gradient-pink-purple",
    icon: Bolt,
    isHot: true,
  },
  {
    id: 2,
    title: "지속가능한 라이프스타일",
    description:
      "제로웨이스트부터 친환경 소비까지, 지구를 지키는 새로운 트렌드와 실천 방법들을 소개합니다.",
    category: "유튜브",
    views: "1.8만",
    comments: "950",
    shares: "670",
    gradientClass: "bg-gradient-to-r from-red-500 to-pink-600",
    icon: TrendingUp,
  },
  {
    id: 3,
    title: "K-푸드 열풍",
    description:
      "전 세계를 사로잡은 한국 음식! 김치부터 K-BBQ까지, 글로벌 푸드 트렌드를 이끄는 한국의 맛을 탐험해보세요.",
    category: "뉴스",
    views: "3.1만",
    comments: "1.5천",
    shares: "1.2천",
    gradientClass: "bg-gradient-indigo-cyan",
    icon: Globe,
  },
];

export default function InteractiveCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(nextSlide, 4000);
      return () => clearInterval(interval);
    }
  }, [nextSlide, isPaused]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Touch/swipe support
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  const currentSlideData = slides[currentSlide];
  const IconComponent = currentSlideData.icon;

  return (
    <div
      className="relative max-w-6xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Carousel Container */}
      <div className="overflow-hidden rounded-2xl shadow-2xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="w-full flex-shrink-0">
              <div
                className={`${slide.gradientClass} p-4 sm:p-6 md:p-8 lg:p-12 text-white relative overflow-hidden min-h-[400px] sm:min-h-[450px] md:min-h-[500px]`}
              >
                {/* Abstract background pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-4 left-4 sm:top-10 sm:left-10 w-16 h-16 sm:w-32 sm:h-32 bg-white rounded-full blur-xl sm:blur-2xl" />
                  <div className="absolute bottom-4 right-4 sm:bottom-10 sm:right-10 w-12 h-12 sm:w-24 sm:h-24 bg-yellow-300 rounded-full blur-lg sm:blur-xl" />
                  <div className="absolute top-1/2 left-1/2 w-20 h-20 sm:w-40 sm:h-40 bg-pink-300 rounded-full blur-2xl sm:blur-3xl" />
                </div>

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-center h-full">
                  <div className="text-center lg:text-left">
                    <div className="inline-block bg-white/20 rounded-full px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                      <IconComponent className="inline mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                      {slide.category}
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 lg:mb-6 leading-tight">
                      {slide.title}
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl opacity-90 mb-4 sm:mb-6 lg:mb-8 leading-relaxed">
                      {slide.description}
                    </p>
                    <div className="flex items-center justify-center lg:justify-start space-x-3 sm:space-x-4 lg:space-x-6 flex-wrap gap-2 sm:gap-4">
                      <div className="flex items-center">
                        <Eye className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                        <span className="font-medium text-xs sm:text-sm lg:text-base">
                          {slide.views} 조회
                        </span>
                      </div>
                      <div className="flex items-center">
                        <MessageCircle className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                        <span className="font-medium text-xs sm:text-sm lg:text-base">
                          {slide.comments} 댓글
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Share2 className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                        <span className="font-medium text-xs sm:text-sm lg:text-base">
                          {slide.shares} 공유
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center mt-0">
                    <div className="w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-white/10 rounded-2xl sm:rounded-3xl flex items-center justify-center backdrop-blur-sm">
                      <IconComponent className="h-16 w-16 sm:h-24 sm:w-24 lg:h-32 lg:w-32 opacity-80" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 좌우 네비게이션 버튼: 연한 회색 배경으로 변경 */}
      <Button
        variant="outline"
        size="icon"
        className="absolute -left-5 sm:-left-7 top-1/2 -translate-y-1/2 w-14 h-14 sm:w-16 sm:h-16 bg-gray-100 hover:bg-gray-200 rounded-full shadow-lg border-0 hover:scale-110 transition-all duration-300 z-20"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700 hover:text-pink-500" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute -right-5 sm:-right-7 top-1/2 -translate-y-1/2 w-14 h-14 sm:w-16 sm:h-16 bg-gray-100 hover:bg-gray-200 rounded-full shadow-lg border-0 hover:scale-110 transition-all duration-300 z-20"
        onClick={nextSlide}
      >
        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700 hover:text-pink-500" />
      </Button>

      {/* Dot Indicators */}
      <div className="flex justify-center mt-6 sm:mt-8 space-x-2 sm:space-x-3">
        {slides.map((_, index) => (
          <Button
            key={index}
            variant="ghost"
            size="sm"
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full p-0 transition-all duration-300 ${
              index === currentSlide
                ? "bg-pink-500 hover:bg-pink-600"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
