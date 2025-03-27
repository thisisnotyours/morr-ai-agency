import NavbarMenu from "./NavbarMenu";
import Hero from "@/components/layout/sections/Hero";
import AboutUs from "@/components/layout/sections/AboutUs";
import Features from "@/components/layout/sections/Features";
import Benefits from "@/components/layout/sections/Benefits";
import UseCases from "@/components/layout/sections/UseCases";
import Footer from "@/components/layout/footer"; // 👈 정확한 경로로 불러오기


export default function Home() {
  return (
    // <div className="min-h-screen sm:p-10 font-[family-name:var(--font-geist-sans)]">
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
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
