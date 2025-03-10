import Link from "next/link";
import { useState } from "react";
import { FiMail, FiLock } from "react-icons/fi";
import Image from "next/image";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">로그인</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* 이메일 입력 필드 */}
          <div className="relative">
            <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="email"
              placeholder="이메일"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 pl-10 border rounded-lg focus:ring-2 focus:ring-blue-300 outline-none"
              required
            />
          </div>

          {/* 비밀번호 입력 필드 */}
          <div className="relative">
            <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 pl-10 border rounded-lg focus:ring-2 focus:ring-blue-300 outline-none"
              required
            />
          </div>

          {/* 로그인 버튼 */}
          <button
            type="submit"
            className="w-full p-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-all"
          >
            로그인
          </button>
        </form>

        {/* 소셜 로그인 */}
        <div className="mt-6 space-y-3">
          <button className="flex items-center justify-center w-full p-3 border rounded-lg bg-white hover:bg-gray-100 transition-all">
            <Image src="/google-logo.png" alt="Google Logo" width={24} height={24} className="mr-2" />
            Google 로그인
          </button>
          <button className="flex items-center justify-center w-full p-3 border rounded-lg bg-yellow-400 hover:bg-yellow-500 transition-all">
            <Image src="/kakao-logo.png" alt="Kakao Logo" width={24} height={24} className="mr-2" />
            KakaoTalk 로그인
          </button>
        </div>

        {/* 회원가입 링크 */}
        <p className="mt-4 text-center text-gray-600">
          계정이 없으신가요? <Link href="/auth/signup" className="text-blue-500 hover:underline">회원가입</Link>
        </p>
      </div>
    </div>
  );
}
