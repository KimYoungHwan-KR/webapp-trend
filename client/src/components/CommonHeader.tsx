import { Flame } from "lucide-react";
import { Link } from "wouter";

interface CommonHeaderProps {
  colorMode?: "black" | "default";
  gradient?: string;
}

export default function CommonHeader({ colorMode = "default", gradient = "bg-gradient-to-r from-pink-500 to-purple-600" }: CommonHeaderProps) {
  const isBlack = colorMode === "black";
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md shadow-sm`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {/* 로고와 텍스트 클릭 시 홈으로 이동 */}
            <Link href="/" className="flex items-center space-x-3 cursor-pointer">
              <div className={`w-10 h-10 ${isBlack ? "bg-gradient-to-r from-black to-gray-500" : gradient} rounded-full flex items-center justify-center`}>
                <Flame className={isBlack ? "text-white text-lg h-5 w-5" : "text-white text-lg h-5 w-5"} />
              </div>
              <h1 className={`text-2xl font-bold ${isBlack ? "bg-gradient-to-r from-black to-gray-500 bg-clip-text text-transparent" : `${gradient} bg-clip-text text-transparent`}`}>
                Trendy Topic
              </h1>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
} 