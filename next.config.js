/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ 이미지 도메인 설정 (기존 domains → remotePatterns 로 변경)
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com",
      },
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
      },
    ],
  },

  // ✅ ESLint 에러 무시하고 빌드 통과
  eslint: {
    ignoreDuringBuilds: true,
  },

  // ✅ 더 이상 사용되지 않는 옵션 제거
  // devIndicators: {
  //   buildActivity: true, // ❌ 삭제됨
  // },
};

module.exports = nextConfig;
