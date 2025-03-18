export default function SocialLogin() {
  return (
    <div className="social-login">
      <button className="social-login-button twitch">
        <img src="/twitch.svg" alt="Twitch" className="w-12 h-12" />
      </button>
      <button className="social-login-button naver">
        <img src="/naver.svg" alt="Naver" className="w-12 h-12" />
      </button>
      <button className="social-login-button kakao">
        <img src="/kakao.svg" alt="Kakao" className="w-12 h-12" />
      </button>
      <button className="social-login-button apple">
        <img src="/apple.svg" alt="Apple" className="w-12 h-12" />
      </button>
    </div>
  );
}
