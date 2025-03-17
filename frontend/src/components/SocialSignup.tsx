export default function SocialSignup() {
    return (
      <div className="social-login">
        <button className="social-button twitch">
          <img src="/twitch.svg" alt="Twitch" className="social-icon" />
          트위치로 회원가입
        </button>
        <button className="social-button naver">
          <img src="/naver.svg" alt="Naver" className="social-icon" />
          네이버로 회원가입
        </button>
        <button className="social-button kakao">
          <img src="/kakao.svg" alt="Kakao" className="social-icon" />
          카카오로 회원가입
        </button>
        <button className="social-button apple">
          <img src="/apple.svg" alt="Apple" className="social-icon" />
          애플로 회원가입
        </button>
      </div>
    );
}  