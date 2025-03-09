import React, { useState } from "react";
import Link from "next/link";
import { FaUser, FaLock } from "react-icons/fa"; // ✅ 아이콘 추가

export default function AuthPage({ type }: { type: "login" | "signup" }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password, name });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      {/* ✅ 카드 스타일 */}
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
          {type === "login" ? "로그인" : "회원가입"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* 회원가입일 때 이름 입력 필드 */}
          {type === "signup" && (
            <div className="relative">
              <input
                type="text"
                placeholder="이름"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 pl-10 border rounded-lg focus:ring focus:ring-blue-300"
                required
              />
              <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          )}
          {/* 이메일 입력 필드 */}
          <div className="relative">
            <input
              type="email"
              placeholder="이메일"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 pl-10 border rounded-lg focus:ring focus:ring-blue-300"
              required
            />
            <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          {/* 비밀번호 입력 필드 */}
          <div className="relative">
            <input
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 pl-10 border rounded-lg focus:ring focus:ring-blue-300"
              required
            />
            <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          {/* 로그인 버튼 */}
          <button
            type="submit"
            className="w-full p-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-200 shadow-md"
          >
            {type === "login" ? "로그인" : "회원가입"}
          </button>
        </form>
        {/* 회원가입 / 로그인 링크 */}
        <p className="mt-6 text-center text-gray-600">
          {type === "login" ? (
            <>
              계정이 없으신가요?{" "}
              <Link href="/auth/signup" className="text-blue-500 hover:underline">
                회원가입
              </Link>
            </>
          ) : (
            <>
              이미 계정이 있으신가요?{" "}
              <Link href="/auth/login" className="text-blue-500 hover:underline">
                로그인
              </Link>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
