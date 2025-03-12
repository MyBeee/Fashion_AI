import { useState } from 'react';
import SocialLogin from '@/components/SocialLogin';

export default function AuthPage() {
    const [isLogin, setIsLogin] = useState(true); // 로그인 상태 여부

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-300 to-blue-500">
            <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg">
                {/* 탭 메뉴 */}
                <div className="flex justify-between border-b border-gray-300">
                    <button 
                        className={`w-1/2 py-3 text-center text-lg font-semibold ${isLogin ? 'border-b-2 border-blue-500' : 'text-gray-500'}`}
                        onClick={() => setIsLogin(true)}
                    >
                        로그인
                    </button>
                    <button 
                        className={`w-1/2 py-3 text-center text-lg font-semibold ${!isLogin ? 'border-b-2 border-blue-500' : 'text-gray-500'}`}
                        onClick={() => setIsLogin(false)}
                    >
                        회원가입
                    </button>
                </div>

                {/* 로그인 폼 */}
                {isLogin ? (
                    <div className="mt-6 space-y-4">
                        <input type="email" placeholder="이메일 입력" className="w-full p-3 border rounded-lg" />
                        <input type="password" placeholder="비밀번호 입력" className="w-full p-3 border rounded-lg" />
                        
                        {/* 로그인 버튼 */}
                        <button className="w-full p-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
                            로그인
                        </button>

                        {/* 자동 로그인 체크박스 (우측 정렬) */}
                        <div className="flex justify-end mt-2 text-sm text-gray-600">
                            <input type="checkbox" id="remember" className="mr-1" />
                            <label htmlFor="remember">자동 로그인</label>
                        </div>

                        {/* 소셜 로그인 (컴포넌트 적용) */}
                        <SocialLogin />
                    </div>
                ) : (
                    // 회원가입 폼
                    <div className="mt-6 space-y-4">
                        <input type="text" placeholder="이름 입력" className="w-full p-3 border rounded-lg" />
                        <input type="email" placeholder="이메일 입력" className="w-full p-3 border rounded-lg" />
                        <input type="password" placeholder="비밀번호 입력" className="w-full p-3 border rounded-lg" />
                        <input type="password" placeholder="비밀번호 다시 입력" className="w-full p-3 border rounded-lg" />
                        <input type="tel" placeholder="휴대폰 번호 입력" className="w-full p-3 border rounded-lg" />
                        <button className="w-full p-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600">회원가입</button>

                        <p className="mt-4 text-center text-sm">
                            이미 계정이 있으신가요? <span className="text-blue-500 cursor-pointer" onClick={() => setIsLogin(true)}>로그인</span>
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
