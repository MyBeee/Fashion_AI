import SocialLogin from "@/components/SocialLogin";

export default function LoginPage() {
    return (
        <div className="auth-container">
          {/* 로고 */}
          <div className="auth-logo">
              <img src="/logo_blue.jpg" alt="SOOP Logo" className="logo-img" />
          </div>
  
          {/* 안내 문구 */}
          <p className="auth-description">로그인 후 더 많은 서비스를 즐겨보세요.</p>
  
          {/* 로그인 입력 폼 */}
          <div className="input-container">
            <input type="text" placeholder="아이디" className="input-field" />
            <input type="password" placeholder="비밀번호" className="input-field" />
          </div>
  
          {/* 체크박스 */}
          <div className="checkbox-container">
            <label className="checkbox-label">
              <input type="checkbox" className="checkbox" /> 로그인 상태 유지
            </label>
            <label className="checkbox-label">
              <input type="checkbox" className="checkbox" /> 아이디 저장
            </label>
          </div>
  
          {/* 로그인 버튼 */}
          <button className="auth-button">로그인</button>
  
          {/* 구분선 */}
          <div className="divider">또는</div>
  
          {/* 소셜 로그인 */}
          <SocialLogin />
  
          {/* 하단 링크 */}
          <div className="bottom-links">
            <a href="#">아이디 찾기</a>
            <span>|</span>
            <a href="#">비밀번호 찾기</a>
            <span>|</span>
            <a href="/auth/signup">회원가입</a>
          </div>
        </div>
    );
  }
  