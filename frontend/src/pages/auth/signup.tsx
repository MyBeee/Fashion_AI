import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">회원가입</h2>

        {/* 회원가입 입력 필드 */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="이름"
            className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
            required
          />
          <input
            type="email"
            placeholder="이메일"
            className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
            required
          />
          <input
            type="password"
            placeholder="비밀번호"
            className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
            required
          />
          <button
            type="submit"
            className="w-full p-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            회원가입
          </button>
        </form>

        {/* 로그인 버튼 */}
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