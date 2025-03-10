import Link from "next/link";
import SocialLogin from "@/components/SocialLogin";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">로그인</h2>
        
        <form className="space-y-4">
          <input type="email" placeholder="이메일" className="w-full p-3 border rounded-lg" required />
          <input type="password" placeholder="비밀번호" className="w-full p-3 border rounded-lg" required />
          <button type="submit" className="w-full p-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
            로그인
          </button>
        </form>

        <SocialLogin />

        <p className="mt-4 text-center text-gray-600">
          계정이 없으신가요? <Link href="/auth/signup" className="text-blue-500 hover:underline">회원가입</Link>
        </p>
      </div>
    </div>
  );
}
