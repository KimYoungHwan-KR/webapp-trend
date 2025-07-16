import { Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import CommonHeader from "@/components/CommonHeader";
import CommonFooter from "@/components/CommonFooter";
import { useState, useEffect } from "react";

export default function TestList() {
  // 페이지 로드 시 스크롤을 맨 위로 이동
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-korean bg-gray-50 min-h-screen">
      <CommonHeader gradient="bg-gradient-to-r from-pink-500 to-purple-600" />
      {/* Main Content: Grid 형식의 임의의 테스트 콘텐츠 */}
      <main className="pt-32 pb-16 container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">인기 테스트</h2>
        <div className="flex justify-center">
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center hover:shadow-xl transition-all w-full max-w-xs">
            <div className="w-14 h-14 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-white">E</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Eto-Egen 테스트</h3>
            <p className="text-gray-600 mb-4">나의 성별 정체성을 알아보는 심리 테스트입니다.</p>
            <Button asChild className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
              <Link href="/test/eto-egen/description">테스트 시작</Link>
            </Button>
          </div>
        </div>
      </main>
      <CommonFooter />
    </div>
  );
} 