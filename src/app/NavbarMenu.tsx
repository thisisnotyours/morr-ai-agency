"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HoveredLink, MenuItem, FeatureItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

// 섹션으로 스크롤 이동하는 함수
const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const NavbarMenu = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // ✅ 스크롤 축소 효과
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ 모바일 메뉴 열렸을 때 배경 스크롤 방지
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <div
      className={cn(
        "fixed top-6 inset-x-0 z-50 mx-auto transition-all duration-500",
        scrolled ? "max-w-4xl" : "max-w-6xl",
        className
      )}
      onMouseLeave={() => setActive(null)} // 메뉴와 드롭다운 전체에서 마우스가 벗어날 때 닫기
    >
      <div
        className={cn(
          "relative rounded-full border dark:border-white/20 border-black/10 bg-white dark:bg-black shadow-input px-6 py-4 flex items-center justify-between overflow-visible transition-all duration-500",
          scrolled && "px-4 py-2"
        )}
      >
        {/* Logo */}
        <div
          onClick={() => scrollToSection("hero")} // 로고 클릭 시 Hero 섹션으로 이동
          className="cursor-pointer"
        >
          <div className="flex items-center space-x-2">
            <Image src="/logo.svg" alt="Logo" width={32} height={32} />
            <span className="text-lg font-semibold bg-gradient-to-r from-pink-500 to-indigo-500 text-transparent bg-clip-text">
              MORR
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center justify-center space-x-6">
          <div
            onClick={() => scrollToSection("about")} // About Us 클릭 시 About 섹션으로 이동
            className="hover:text-red-500 transition cursor-pointer"
            onMouseEnter={() => setActive(null)} // "About Us"로 이동 시 드롭다운 닫기
          >
            About Us
          </div>
          <MenuItem setActive={setActive} active={active} item="Features">
            <div className="text-sm grid grid-cols-2 gap-10 p-4">
              <FeatureItem
                title="Algochurn"
                src="https://assets.aceternity.com/demos/algochurn.webp"
                description="Prepare for tech interviews like never before."
                sectionId="features"
              />
              <FeatureItem
                title="Tailwind Master Kit"
                src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                description="Production ready Tailwind css components for your next project"
                sectionId="features"
              />
              <FeatureItem
                title="Moonbeam"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                description="Never write from scratch again. Go from idea to blog in minutes."
                sectionId="features"
              />
              <FeatureItem
                title="Rogue"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                sectionId="features"
              />
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Benefits">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink sectionId="benefits">Web Development</HoveredLink>
              <HoveredLink sectionId="benefits">Interface Design</HoveredLink>
              <HoveredLink sectionId="benefits">
                Search Engine Optimization
              </HoveredLink>
              <HoveredLink sectionId="benefits">Branding</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Use Cases">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink sectionId="use-cases">Hobby</HoveredLink>
              <HoveredLink sectionId="use-cases">Individual</HoveredLink>
              <HoveredLink sectionId="use-cases">Team</HoveredLink>
              <HoveredLink sectionId="use-cases">Enterprise</HoveredLink>
            </div>
          </MenuItem>
        </div>

        {/* Right: CTA or Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <Link
          href="/get-started"
          className="hidden md:block px-5 py-2 text-sm font-medium text-white bg-black dark:bg-white dark:text-black rounded-full hover:opacity-90 transition z-10"
        >
          Get Started
        </Link>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="font-semibold mb-2 md:hidden mt-4 bg-white dark:bg-black rounded-xl shadow-lg p-6 space-y-6 max-h-[80vh] overflow-y-auto"
          >
            <div
              onClick={() => {
                scrollToSection("about");
                setMobileOpen(false); // 모바일 메뉴 닫기
              }}
              className="cursor-pointer"
            >
              About Us
            </div>

            <div>
              <p
                className="font-semibold mb-2 mt-8 cursor-pointer"
                onClick={() => {
                  scrollToSection("features");
                  setMobileOpen(false); // 모바일 메뉴 닫기
                }}
              >
                Features
              </p>
              <div className="grid grid-cols-1 gap-6">
                <FeatureItem
                  title="Algochurn"
                  src="https://assets.aceternity.com/demos/algochurn.webp"
                  description="Prepare for tech interviews like never before."
                  sectionId="features"
                  setMobileOpen={setMobileOpen}
                />
                <FeatureItem
                  title="Tailwind Master Kit"
                  src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                  description="Production ready Tailwind css components for your next project"
                  sectionId="features"
                  setMobileOpen={setMobileOpen}
                />
                <FeatureItem
                  title="Moonbeam"
                  src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                  description="Never write from scratch again. Go from idea to blog in minutes."
                  sectionId="features"
                  setMobileOpen={setMobileOpen}
                />
                <FeatureItem
                  title="Rogue"
                  src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                  description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                  sectionId="features"
                  setMobileOpen={setMobileOpen}
                />
              </div>
            </div>

            <div>
              <p
                className="font-semibold mb-2 mt-8 cursor-pointer"
                onClick={() => {
                  scrollToSection("benefits");
                  setMobileOpen(false); // 모바일 메뉴 닫기
                }}
              >
                Benefits
              </p>
              <div className="flex flex-col space-y-2">
                <HoveredLink sectionId="benefits" setMobileOpen={setMobileOpen}>
                  Web Development
                </HoveredLink>
                <HoveredLink sectionId="benefits" setMobileOpen={setMobileOpen}>
                  Interface Design
                </HoveredLink>
                <HoveredLink sectionId="benefits" setMobileOpen={setMobileOpen}>
                  Search Engine Optimization
                </HoveredLink>
                <HoveredLink sectionId="benefits" setMobileOpen={setMobileOpen}>
                  Branding
                </HoveredLink>
              </div>
            </div>

            <div>
              <p
                className="font-semibold mb-2 mt-5 cursor-pointer"
                onClick={() => {
                  scrollToSection("use-cases");
                  setMobileOpen(false); // 모바일 메뉴 닫기
                }}
              >
                Use Cases
              </p>
              <div className="flex flex-col space-y-2">
                <HoveredLink sectionId="use-cases" setMobileOpen={setMobileOpen}>
                  Hobby
                </HoveredLink>
                <HoveredLink sectionId="use-cases" setMobileOpen={setMobileOpen}>
                  Individual
                </HoveredLink>
                <HoveredLink sectionId="use-cases" setMobileOpen={setMobileOpen}>
                  Team
                </HoveredLink>
                <HoveredLink sectionId="use-cases" setMobileOpen={setMobileOpen}>
                  Enterprise
                </HoveredLink>
              </div>
            </div>

            <Link
              href="/get-started"
              className="block w-full text-center px-5 py-3 text-sm font-medium text-white bg-black dark:bg-white dark:text-black rounded-full hover:opacity-90 transition"
            >
              Get Started
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavbarMenu;