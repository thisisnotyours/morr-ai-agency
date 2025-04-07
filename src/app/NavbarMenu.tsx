"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  HoveredLink,
  MenuItem,
  FeatureItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        scrolled ? "max-w-4xl" : "max-w-[1200px]",
        className,
        "font-poppins",
      )}
      onMouseLeave={() => setActive(null)}
    >
      <div
        className={cn(
          "shadow-2xl relative rounded-lg border dark:border-white/20 border-black/10 bg-white dark:bg-black shadow-input px-6 py-4 flex items-center justify-between overflow-visible transition-all duration-500",
          scrolled && "px-4 py-2",
        )}
      >
        <div
          onClick={() => {
            scrollToSection("hero");
            setMobileOpen(false);
          }}
          className="cursor-pointer"
        >
          <div className="flex items-center space-x-2">
            <Image src="/morr_logo.png" alt="Logo" width={80} height={62} />
          </div>
        </div>

        <div className="hidden md:flex items-center justify-center space-x-6">
          <div
            onClick={() => {
              scrollToSection("about");
              setActive(null);
            }}
            className="hover:font-semibold transition cursor-pointer text-lg"
            onMouseEnter={() => setActive(null)}
          >
            About Us
          </div>
          <MenuItem setActive={setActive} active={active} item="Features">
            <div className="text-sm grid grid-cols-2 gap-10 p-4">
              <FeatureItem
                title="Real Voice, Real Results"
                src="/real_voice.svg"
                description="Talks naturally, understands intent, and nails every response."
                sectionId="features"
                setActive={setActive}
              />
              <FeatureItem
                title="Chatbot That Doesn’t Sleep"
                src="/chatbot.svg"
                description="Instant replies on WhatsApp, websites, or anywhere your customers are."
                sectionId="features"
                setActive={setActive}
              />
              <FeatureItem
                title="Malaysian Multilingual Magic"
                src="/malay.svg"
                description="Switches effortlessly between Bahasa Malaysia, English, Mandarin, and more."
                sectionId="features"
                setActive={setActive}
              />
              <FeatureItem
                title="Always On, Always Ready"
                src="/support.svg"
                description="24/7 support that never takes a break, so you don’t have to either."
                sectionId="features"
                setActive={setActive}
              />
              <FeatureItem
                title="Plug-and-Play Power"
                src="/plug.svg"
                description="Hooks into your CRM, phone system, or website in minutes."
                sectionId="features"
                setActive={setActive}
              />
              <FeatureItem
                title="Local Smarts"
                src="/slang.svg"
                description="Gets Malaysian slang, tone, and context."
                sectionId="features"
                setActive={setActive}
              />
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Benefits">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink sectionId="benefits" setActive={setActive}>
                Customers Love It
              </HoveredLink>
              <HoveredLink sectionId="benefits" setActive={setActive}>
                Slash Your Costs
              </HoveredLink>
              <HoveredLink sectionId="benefits" setActive={setActive}>
                Grow Without Limits
              </HoveredLink>
              <HoveredLink sectionId="benefits" setActive={setActive}>
                Beat the Competition
              </HoveredLink>
              <HoveredLink sectionId="benefits" setActive={setActive}>
                Work Less, Win More
              </HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Use Cases">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink sectionId="use-cases" setActive={setActive}>
                Retail & E-Commerce
              </HoveredLink>
              <HoveredLink sectionId="use-cases" setActive={setActive}>
                Food & Beverage
              </HoveredLink>
              <HoveredLink sectionId="use-cases" setActive={setActive}>
                Telcos & Utilities
              </HoveredLink>
              <HoveredLink sectionId="use-cases" setActive={setActive}>
                Logistics
              </HoveredLink>
              <HoveredLink sectionId="use-cases" setActive={setActive}>
                Startups & SMEs
              </HoveredLink>
            </div>
          </MenuItem>
        </div>

        <div className="md:hidden">
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <p
          className="hidden md:block px-5 py-2 text-base font-normal text-white bg-black dark:bg-white dark:text-black rounded-md hover:opacity-90 transition z-10"
          onClick={() => {
            scrollToSection("contact");
            setMobileOpen(false);
          }}
        >
          Get Started
        </p>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="font-semibold mb-2 md:hidden mt-4 bg-white dark:bg-black rounded-xl shadow-lg p-6 space-y-6 max-h-[80vh] overflow-y-auto"
          >
            {/* 동일한 방식으로 모바일 메뉴 구성 */}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavbarMenu;
