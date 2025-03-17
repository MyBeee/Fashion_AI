import SocialSignup from "@/components/SocialSignup";

export default function SignupPage() {
  return (
    <div className="auth-container">
      <div className="auth-box">
        {/* 로고 */}
        <div className="auth-logo">
          <img src="/logo_blue.jpg" alt="SOOP Logo" className="logo-img" />
        </div>

        {/* 안내 문구 */}
        <p className="auth-description">회원가입 후 다양한 서비스를 즐겨보세요.</p>

        {/* 일반 회원가입 버튼 */}
        <button className="auth-button">회원가입</button>

        {/* 구분선 */}
        <div className="divider">간편회원가입</div>

        {/* 소셜 회원가입 */}
        <div className="social-signup-container">
          <SocialSignup />
        </div>
      </div>
    </div>
  );
}
