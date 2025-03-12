module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.css",
  ],
  safelist: ["bg-blue-100"], // ✅ 강제로 유지할 스타일
  theme: {
    extend: {},
  },
  plugins: [],
};
