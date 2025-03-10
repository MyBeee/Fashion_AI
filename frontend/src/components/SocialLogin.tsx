import Image from "next/image";

export default function SocialLogin() {
  return (
    <div className="mt-4 space-y-2">
      <button className="flex items-center justify-center w-full p-3 border rounded-lg bg-white hover:bg-gray-100">
        <Image src="/google-logo.png" alt="Google Logo" width={24} height={24} className="mr-2" />
        Google 로그인
      </button>
      <button className="flex items-center justify-center w-full p-3 border rounded-lg bg-yellow-400 hover:bg-yellow-500">
        <Image src="/kakao-logo.png" alt="Kakao Logo" width={24} height={24} className="mr-2" />
        KakaoTalk 로그인
      </button>
    </div>
  );
}
