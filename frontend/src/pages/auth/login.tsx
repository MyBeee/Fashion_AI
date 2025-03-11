import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-300 to-blue-500">
      <div className="w-full max-w-lg p-8 bg-white rounded-2xl shadow-xl mx-auto">
        {/* 로그인 & 회원가입 탭 */}
        <div className="flex border-b mb-6">
          <button className="w-1/2 text-center p-3 font-bold border-b-4 border-blue-600">로그인</button>
          <button className="w-1/2 text-center p-3 text-gray-500">회원가입</button>
        </div>

        {/* 이메일 & 비밀번호 입력 */}
        <form className="space-y-4">
          <div>
            <label className="block text-lg font-medium text-gray-700"></label>
            <input
              type="email"
              placeholder="이메일 입력 someone@example.com"
              className="w-full p-4 mt-2 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700"></label>
            <input
              type="password"
              placeholder="비밀번호 입력"
              className="w-full p-4 mt-2 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* 로그인 버튼 */}
          <button type="submit" className="w-full p-4 text-lg text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition">
            로그인
          </button>
        </form>

        {/* 자동 로그인 & 정보 찾기 */}
        <div className="flex justify-between items-center mt-4">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span className="text-gray-600 text-sm">자동 로그인</span>
          </label>
          <Link href="#" className="text-blue-500 text-sm hover:underline">
            정보 찾기
          </Link>
        </div>

        {/* 소셜 로그인 버튼 */}
        <div className="mt-6 space-y-3">
          <button className="flex items-center justify-center w-full h-14 border rounded-lg shadow-md bg-green-500 hover:bg-green-600 transition text-white">
            <Image src="/naver-logo.png" alt="Naver" width={24} height={24} />
            <span className="ml-3 text-lg font-medium">네이버 로그인</span>
          </button>

          <button className="flex items-center justify-center w-full h-14 border rounded-lg shadow-md bg-yellow-300 hover:bg-yellow-400 transition">
            <Image src="/kakao-logo.png" alt="KakaoTalk" width={24} height={24} />
            <span className="ml-3 text-lg font-medium text-gray-700">카카오 로그인</span>
          </button>

          <button className="flex items-center justify-center w-full h-14 border rounded-lg shadow-md bg-blue-600 hover:bg-blue-700 transition text-white">
            <Image src="/google-logo.png" alt="Google" width={24} height={24} />
            <span className="ml-3 text-lg font-medium">구글 로그인</span>
          </button>
        </div>
      </div>
    </div>
  );
}
