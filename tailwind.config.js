/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}', // src 디렉토리 포함
  ],
  theme: {
    extend: {
      colors: {
        morr: {
          main: "#b5002b", // 메인 색상
          sub: "#F5CABB",  // 서브 색상
        },
        neutral: {
          300: "#d1d5db", // neutral-300 색상 추가 (Tailwind의 기본 gray-300)
        },
      },
    },
  },
  plugins: [],
};