import React from "react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-300 to-blue-500">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">로그인</h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">이메일</label>
            <input type="email" placeholder="이메일 입력" className="w-full p-3 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-400" required />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">비밀번호</label>
            <input type="password" placeholder="비밀번호 입력" className="w-full p-3 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-400" required />
          </div>

          <button type="submit" className="w-full p-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition">
            로그인
          </button>
        </form>

        {/* ✅ 아이콘 크기 조정 및 버튼 디자인 개선 */}
        <div className="flex flex-col space-y-3 mt-6">
          <button className="flex items-center justify-center px-4 py-2 border rounded-lg shadow-sm bg-white hover:bg-gray-100 transition">
            {/* ✅ 여기서 이미지 크기 강제 조정 */}
            <img src="/google-logo.png" alt="Google 로그인" className="mr-2" style={{ width: "24px", height: "24px" }} />  
            <span className="text-sm font-medium text-gray-700">Google 로그인</span>
          </button>

          <button className="flex items-center justify-center px-4 py-2 border rounded-lg shadow-sm bg-white hover:bg-gray-100 transition">
            {/* ✅ Kakao 이미지 크기 강제 조정 */}
            <img src="/kakao-logo.png" alt="Kakao 로그인" className="mr-2" style={{ width: "24px", height: "24px" }} />
            <span className="text-sm font-medium text-gray-700">Kakao 로그인</span>
          </button>
        </div>

        <p className="mt-4 text-center text-gray-600">
          계정이 없으신가요?{" "}
          <Link href="/auth/signup" className="text-blue-500 hover:underline">
            회원가입
          </Link>
        </p>
      </div>
    </div>
  );
}
