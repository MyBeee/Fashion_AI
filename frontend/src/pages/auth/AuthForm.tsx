import { useState } from "react";
import Image from "next/image";
import SocialLogin from "@/components/SocialLogin";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-300 to-blue-500">
      {/* 로고 컨테이너 (정확한 중앙 배치) */}
      <div className="flex justify-center items-center h-[220px] w-full relative">
        <Image 
          src="/logo_blue.jpg" 
          alt="CatwalkAI Logo"
          width={200} 
          height={200} 
          className="object-contain absolute top-1/2 transform -translate-y-1/2"
        />
      </div>

      {/* 로그인 및 회원가입 박스 */}
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg h-[650px] flex flex-col items-center">
        {/* 탭 메뉴 */}
        <div className="flex justify-between w-full border-b border-gray-300">
          <button
            className={`w-1/2 py-3 text-center text-lg font-semibold ${
              isLogin ? "border-b-2 border-blue-500" : "text-gray-500"
            }`}
            onClick={() => setIsLogin(true)}
          >
            로그인
          </button>
          <button
            className={`w-1/2 py-3 text-center text-lg font-semibold ${
              !isLogin ? "border-b-2 border-blue-500" : "text-gray-500"
            }`}
            onClick={() => setIsLogin(false)}
          >
            회원가입
          </button>
        </div>

        {/* 폼 컨테이너 */}
        <div className="flex flex-col justify-between h-full w-full mt-6">
          {isLogin ? (
            <div className="flex flex-col h-full w-full">
              <div className="space-y-4 flex-grow w-full">
                <input type="email" placeholder="이메일 입력" className="w-full p-3 border rounded-lg" />
                <input type="password" placeholder="비밀번호 입력" className="w-full p-3 border rounded-lg" />
                <button className="w-full p-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600">로그인</button>
                
                {/* 자동 로그인 체크박스 */}
                <div className="flex justify-end items-center">
                  <input type="checkbox" id="remember" className="mr-2" />
                  <label htmlFor="remember" className="text-sm">자동 로그인</label>
                </div>
              </div>

              {/* 소셜 로그인 */}
              <SocialLogin />
            </div>
          ) : (
            <div className="flex flex-col h-full w-full">
              <div className="space-y-4 flex-grow w-full">
                <input type="text" placeholder="이름 입력" className="w-full p-3 border rounded-lg" />
                <input type="email" placeholder="이메일 입력" className="w-full p-3 border rounded-lg" />
                <input type="password" placeholder="비밀번호 입력" className="w-full p-3 border rounded-lg" />
                <input type="password" placeholder="비밀번호 다시 입력" className="w-full p-3 border rounded-lg" />
                <input type="tel" placeholder="휴대폰 번호 입력" className="w-full p-3 border rounded-lg" />
              </div>

              <button className="w-full p-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600">회원가입</button>

              {/* 로그인 링크 */}
              <p className="mt-4 text-center text-sm">
                이미 계정이 있으신가요?{" "}
                <span className="text-blue-500 cursor-pointer" onClick={() => setIsLogin(true)}>
                  로그인
                </span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
