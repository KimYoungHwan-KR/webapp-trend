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
        <h2 className="text-3xl font-bold mb-8 text-center">인기 테스트 모음</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* 임의의 테스트 카드 6개 */}
          {[1,2,3,4,5,6].map(i => (
            <div key={i} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-white">T{i}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">테스트 {i}</h3>
              <p className="text-gray-600 mb-4">이곳에 테스트 {i}에 대한 간단한 설명이 들어갑니다.</p>
              {/* 1번 테스트만 landing(/personality-test)으로 이동 */}
              {i === 1 ? (
                <Button asChild className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
                  <Link href="/personality-test">테스트 시작</Link>
                </Button>
              ) : (
                <Button asChild className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
                  <Link href="#">테스트 시작</Link>
                </Button>
              )}
            </div>
          ))}
        </div>
      </main>
      <CommonFooter />
    </div>
  );
} 