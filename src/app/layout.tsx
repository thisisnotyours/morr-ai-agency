import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// "Poppins" 폰트를 Google Fonts에서 가져옴
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"], // AssemblyAI와 유사한 가중치
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "MORR AI Agent",
  description: "Voice & Chat AI That Speaks Your Business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased font-poppins`}>
        {children}
      </body>
    </html>
  );
}