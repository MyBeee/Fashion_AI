import "@/styles/globals.css"; // ✅ Tailwind 스타일 적용
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Component {...pageProps} />
    </div>
  );
}
