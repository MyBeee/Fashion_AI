import Image from "next/image";

export default function SocialLogin() {
  return (
    <div className="mt-4 space-y-2">
      {/* Google 로그인 버튼 */}
      <button
        className="w-full flex items-center justify-center p-3 border rounded-lg bg-white shadow hover:bg-gray-100"
        onClick={() => alert("Google 로그인 기능 추가 예정!")}
      >
        <Image src="/google-icon.svg" alt="Google" width={20} height={20} className="mr-2" />
        Google로 로그인
      </button>

      {/* KakaoTalk 로그인 버튼 */}
      <button
        className="w-full flex items-center justify-center p-3 border rounded-lg bg-yellow-400 hover:bg-yellow-500 text-white"
        onClick={() => alert("KakaoTalk 로그인 기능 추가 예정!")}
      >
        <Image src="/kakao-icon.svg" alt="KakaoTalk" width={20} height={20} className="mr-2" />
        KakaoTalk로 로그인
      </button>
    </div>
  );
}
