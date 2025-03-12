import Image from "next/image";

export default function SocialLogin() {
  return (
    <div className="mt-6 w-full max-w-md space-y-3">
      {/* Google 로그인 */}
      <button className="flex items-center justify-center w-full h-14 border rounded-lg shadow-md bg-white hover:bg-gray-100 transition">
        <Image src="/google-logo.png" alt="Google" width={32} height={32} className="flex-shrink-0" />
        <span className="ml-3 text-lg font-medium text-gray-700">Google 로그인</span>
      </button>

      {/* Kakao 로그인 */}
      <button className="flex items-center justify-center w-full h-14 border rounded-lg shadow-md bg-yellow-300 hover:bg-yellow-400 transition">
        <Image src="/kakao-logo.png" alt="KakaoTalk" width={32} height={32} className="flex-shrink-0" />
        <span className="ml-3 text-lg font-medium text-gray-700">KakaoTalk 로그인</span>
      </button>

      {/* Naver 로그인 */}
      <button className="flex items-center justify-center w-full h-14 border rounded-lg shadow-md bg-green-500 hover:bg-green-600 transition text-white">
        <Image src="/naver-logo.png" alt="Naver" width={32} height={32} className="flex-shrink-0" />
        <span className="ml-3 text-lg font-medium">Naver 로그인</span>
      </button>
    </div>
  );
}
