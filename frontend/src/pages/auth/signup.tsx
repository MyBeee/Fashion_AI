import React from "react";
import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className="signup-title">회원가입</h2>

        <form className="signup-form">
          <input type="text" placeholder="이름 입력" required />
          <input type="email" placeholder="이메일 입력" required />
          <input type="password" placeholder="비밀번호 입력" required />
          <input type="password" placeholder="비밀번호 다시 입력" required />
          <input type="text" placeholder="휴대폰 번호 입력" required />

          <button type="submit" className="signup-button">회원가입</button>
        </form>

        <p className="signup-text">
          이미 계정이 있으신가요?{" "}
          <Link href="/auth/login" className="signup-link">로그인</Link>
        </p>
      </div>
    </div>
  );
}
