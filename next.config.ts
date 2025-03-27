import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['assets.aceternity.com'], // ✅ 여기에 도메인 추가
  },
};

module.exports = nextConfig;
