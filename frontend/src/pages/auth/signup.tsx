import React from "react";
import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-300 to-blue-500">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">회원가입</h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">이름</label>
            <input type="text" placeholder="이름 입력" className="w-full p-3 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-400" required />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">이메일</label>
            <input type="email" placeholder="이메일 입력" className="w-full p-3 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-400" required />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">비밀번호</label>
            <input type="password" placeholder="비밀번호 입력" className="w-full p-3 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-400" required />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">비밀번호 확인</label>
            <input type="password" placeholder="비밀번호 다시 입력" className="w-full p-3 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-400" required />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">휴대폰 번호</label>
            <input type="text" placeholder="휴대폰 번호 입력" className="w-full p-3 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-400" required />
          </div>

          <button type="submit" className="w-full p-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition">
            회원가입
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600">
          이미 계정이 있으신가요?{" "}
          <Link href="/auth/login" className="text-blue-500 hover:underline">
            로그인
          </Link>
        </p>
      </div>
    </div>
  );
}
