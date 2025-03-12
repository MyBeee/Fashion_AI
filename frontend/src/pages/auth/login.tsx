import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="login-container">
      <div className="login-box">
        {/* 로그인 & 회원가입 탭 */}
        <div className="tab-container">
          <button className="tab active">로그인</button>
          <button className="tab">회원가입</button>
        </div>

        {/* 이메일 & 비밀번호 입력 */}
        <form className="input-form">
          <input type="email" placeholder="이메일 입력 someone@example.com" required />
          <input type="password" placeholder="비밀번호 입력" required />
          <button type="submit" className="login-button">로그인</button>
        </form>

        {/* 자동 로그인 & 정보 찾기 */}
        <div className="login-options">
          <label>
            <input type="checkbox" />
            <span>자동 로그인</span>
          </label>
          <Link href="#">정보 찾기</Link>
        </div>

        {/* 소셜 로그인 버튼 */}
        <div className="social-login">
          <button className="social-button google">
            <Image src="/google-logo.png" alt="Google" width={24} height={24} />
            <span>Google 로그인</span>
          </button>
          <button className="social-button kakao">
            <Image src="/kakao-logo.png" alt="KakaoTalk" width={24} height={24} />
            <span>KakaoTalk 로그인</span>
          </button>
          <button className="social-button naver">
            <Image src="/naver-logo.png" alt="Naver" width={24} height={24} />
            <span>Naver 로그인</span>
          </button>
        </div>
      </div>
    </div>
  );
}
