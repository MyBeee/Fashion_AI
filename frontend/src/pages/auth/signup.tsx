import { useState } from "react";
import Link from "next/link";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [zipcode, setZipcode] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, password, phone, zipcode });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">회원가입</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="text" 
            placeholder="이름" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            className="w-full p-3 border rounded-lg" 
            required 
          />
          
          <input 
            type="email" 
            placeholder="이메일" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className="w-full p-3 border rounded-lg" 
            required 
          />

          <input 
            type="password" 
            placeholder="비밀번호" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            className="w-full p-3 border rounded-lg" 
            required 
          />

          <div className="flex space-x-2">
            <input 
              type="text" 
              placeholder="휴대폰 번호" 
              value={phone} 
              onChange={(e) => setPhone(e.target.value)} 
              className="w-3/4 p-3 border rounded-lg" 
              required 
            />
            <button type="button" className="w-1/4 p-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
              인증
            </button>
          </div>

          <div className="flex space-x-2">
            <input 
              type="text" 
              placeholder="우편번호" 
              value={zipcode} 
              onChange={(e) => setZipcode(e.target.value)} 
              className="w-3/4 p-3 border rounded-lg" 
              required 
            />
            <button type="button" className="w-1/4 p-3 text-white bg-gray-500 rounded-lg hover:bg-gray-600">
              검색
            </button>
          </div>

          <button 
            type="submit" 
            className="w-full p-3 text-white bg-green-500 rounded-lg hover:bg-green-600">
            회원가입
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600">
          이미 계정이 있으신가요? <Link href="/auth/login" className="text-blue-500 hover:underline">로그인</Link>
        </p>
      </div>
    </div>
  );
}
