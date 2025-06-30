import { Flame } from "lucide-react";
import { Link } from "wouter";

export default function CommonHeader({ gradient = "bg-gradient-to-r from-pink-500 to-purple-600" }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {/* 로고와 텍스트 클릭 시 홈으로 이동 */}
            <Link href="/" className="flex items-center space-x-3 cursor-pointer">
              <div className={`w-10 h-10 ${gradient} rounded-full flex items-center justify-center`}>
                <Flame className="text-white text-lg h-5 w-5" />
              </div>
              <h1 className={`text-2xl font-bold ${gradient} bg-clip-text text-transparent`}>
                Trendy Topic
              </h1>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
} 