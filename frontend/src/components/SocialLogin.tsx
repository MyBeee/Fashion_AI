export default function SocialLogin() {
  return (
    <div className="social-login">
      <button className="social-button twitch">
        <img src="/twitch.svg" alt="Twitch" className="w-10 h-10" />
      </button>
      <button className="social-button naver">
        <img src="/naver.svg" alt="Naver" className="w-10 h-10" />
      </button>
      <button className="social-button kakao">
        <img src="/kakao.svg" alt="Kakao" className="w-10 h-10" />
      </button>
      <button className="social-button apple">
        <img src="/apple.svg" alt="Apple" className="w-10 h-10" />
      </button>
    </div>
  );
}
