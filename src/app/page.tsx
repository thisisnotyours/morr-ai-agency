import NavbarMenu from "./NavbarMenu";
import Hero from "@/components/layout/sections/Hero";
import AboutUs from "@/components/layout/sections/AboutUs";
import Features from "@/components/layout/sections/Features";
import Benefits from "@/components/layout/sections/Benefits";
import UseCases from "@/components/layout/sections/UseCases";
import Footer from "@/components/layout/footer";

// SEO 메타데이터 추가
export const metadata = {
  title: 'MORR AI Agent - Voice & Chat AI That Speaks Your Business',
  description: 'Supercharge your customer service with Malaysia’s most advanced voice AI agent and chatbot—built to engage, solve, and scale.',
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <NavbarMenu />
      <Hero />
      <AboutUs />
      <Features />
      <Benefits />
      <UseCases />
      <Footer />
    </div>
  );
}