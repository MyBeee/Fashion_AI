module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/styles/**/*.css",
  ],
  safelist: [
    "bg-blue-100" // ✅ 강제로 Tailwind에서 삭제되지 않도록 설정
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};