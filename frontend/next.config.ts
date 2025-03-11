/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.cache = false; // ✅ 웹팩 캐시 비활성화
    return config;
  },
};

module.exports = nextConfig;
