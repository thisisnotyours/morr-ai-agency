"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

// 드롭다운 transition 설정
const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

// 섹션으로 스크롤 이동하는 함수
const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string | null) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  // "Features" 메뉴일 경우 가운데 정렬, 나머지는 왼쪽 정렬
  const dropdownPosition = item === "Features" 
    ? "left-1/2 transform -translate-x-1/2" 
    : "left-0";

  // 메뉴 클릭 시 해당 섹션으로 이동
  const sectionId = item.toLowerCase().replace(" ", "-"); // 예: "Use Cases" → "use-cases"
  const handleClick = () => {
    scrollToSection(sectionId);
    setActive(null); // 드롭다운 닫기
  };

  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      {/* ⭐ 수정: text-lg 클래스 추가 */}
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white font-inconsolata text-lg"
        onClick={handleClick} // 메뉴 클릭 시 섹션으로 이동 및 드롭다운 닫기
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className={`absolute top-[calc(100%_+_1.2rem)] ${dropdownPosition} pt-4`}>
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
              >
                <motion.div layout className="w-max h-full p-4">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const FeatureItem = ({
  title,
  description,
  src,
  sectionId,
  setMobileOpen,
  setActive,
}: {
  title: string;
  description: string;
  href?: string;
  src: string;
  sectionId?: string;
  setMobileOpen?: (open: boolean) => void;
  setActive?: (item: string | null) => void;
}) => {
  const handleClick = () => {
    if (sectionId) {
      scrollToSection(sectionId);
      if (setMobileOpen) {
        setMobileOpen(false); // 모바일 메뉴 닫기
      }
      if (setActive) {
        setActive(null); // 드롭다운 닫기
      }
    }
  };

  return (
    <div onClick={handleClick} className="flex space-x-2 cursor-pointer">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-1.5rem md:text-xl font-normal mb-1 text-black dark:text-white font-inconsolata md:font-inconsolata mobile:text-2xl">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </div>
  );
};

export const HoveredLink = ({
  children,
  className = "",
  sectionId,
  setMobileOpen,
  setActive,
}: {
  children: React.ReactNode;
  className?: string;
  sectionId?: string;
  setMobileOpen?: (open: boolean) => void;
  setActive?: (item: string | null) => void;
}) => {
  const handleClick = () => {
    if (sectionId) {
      scrollToSection(sectionId);
      if (setMobileOpen) {
        setMobileOpen(false); // 모바일 메뉴 닫기
      }
      if (setActive) {
        setActive(null); // 드롭다운 닫기
      }
    }
  };

  return (
    <div
      onClick={handleClick}
      className={cn(
        "text-neutral-700 dark:text-neutral-200 hover:text-black font-normal cursor-pointer font-inconsolata text-base md:text-base mobile:text-xl",
        className
      )}
    >
      {children}
    </div>
  );
};