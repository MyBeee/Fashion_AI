export default function SocialSignup() {
  return (
    <div className="social-signup">
      <button className="social-signup-button twitch">
        <img src="/twitch.svg" alt="Twitch" className="social-icon" />
        <span className="social-text">트위치로 회원가입</span>
      </button>
      <button className="social-signup-button naver">
        <img src="/naver.svg" alt="Naver" className="social-icon" />
        <span className="social-text">네이버로 회원가입</span>
      </button>
      <button className="social-signup-button kakao">
        <img src="/kakao.svg" alt="Kakao" className="social-icon" />
        <span className="social-text">카카오로 회원가입</span>
      </button>
      <button className="social-signup-button apple">
        <img src="/apple.svg" alt="Apple" className="social-icon" />
        <span className="social-text">애플로 회원가입</span>
      </button>
    </div>
  );
}
