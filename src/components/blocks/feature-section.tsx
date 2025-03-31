"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import styles from '@/components/layout/sections/UseCases.module.css';

interface Feature {
  step: string;
  title?: string;
  content: string;
  image: string;
}

interface FeatureStepsProps {
  features: Feature[];
  className?: string;
  title?: string;
  subtitle?: string;
  autoPlayInterval?: number;
  imageHeight?: string;
}

export function FeatureSteps({
  features,
  className,
  title = "How to get Started",
  subtitle,
  autoPlayInterval = 3000,
  imageHeight = "h-[300px]", // 기본 이미지 높이를 줄임
}: FeatureStepsProps) {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (autoPlayInterval / 100));
      } else {
        setCurrentFeature((prev) => (prev + 1) % features.length);
        setProgress(0);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [progress, features.length, autoPlayInterval]);

  return (
    <div className={cn("p-8 md:p-16 font-[Poppins]", className)}> {/* 패딩 늘림: p-8 md:p-12 -> p-8 md:p-16 */}
      <div className="max-w-5xl mx-auto w-full"> {/* max-w-7xl -> max-w-5xl로 줄여서 콘텐츠 너비 줄임 */}
        <h2
          className={cn(
            "text-[1.5rem] font-bold mb-4 text-center",
            styles.headline
          )}
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          {title}
        </h2>

        {subtitle && (
          <p
            className={cn(
              "text-[0.9rem] text-gray-600 mb-8 text-center", // mb-20 -> mb-8로 줄임
              styles.subheading
            )}
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            {subtitle}
          </p>
        )}

        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-10">
          <div className="order-2 md:order-1 space-y-6"> {/* space-y-8 -> space-y-6으로 줄임 */}
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-6 md:gap-8"
                initial={{ opacity: 0.3 }}
                animate={{ opacity: index === currentFeature ? 1 : 0.3 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className={cn(
                    "w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border-2",
                    index === currentFeature
                      ? "bg-primary border-primary text-primary-foreground scale-110"
                      : "bg-muted border-muted-foreground"
                  )}
                >
                  {index <= currentFeature ? (
                    <span className="text-lg font-bold">✓</span>
                  ) : (
                    <span className="text-lg font-semibold">{index + 1}</span>
                  )}
                </motion.div>

                <div className="flex-1">
                  <h3
                    className={styles.featureTitle}
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {feature.title || feature.step}
                  </h3>
                  <p
                    className={styles.featureContent}
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {feature.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div
            className={cn(
              "order-1 md:order-2 relative h-[150px] md:h-[200px] lg:h-[300px] overflow-hidden rounded-lg" // 이미지 높이 줄임: h-[200px] md:h-[300px] lg:h-[400px] -> h-[150px] md:h-[200px] lg:h-[300px]
            )}
          >
            <AnimatePresence mode="wait">
              {features.map(
                (feature, index) =>
                  index === currentFeature && (
                    <motion.div
                      key={index}
                      className="absolute inset-0 rounded-lg overflow-hidden"
                      initial={{ y: 100, opacity: 0, rotateX: -20 }}
                      animate={{ y: 0, opacity: 1, rotateX: 0 }}
                      exit={{ y: -100, opacity: 0, rotateX: 20 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <Image
                        src={feature.image}
                        alt={feature.step}
                        className="w-full h-full object-cover transition-transform transform"
                        width={1000}
                        height={500}
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-background via-background/50 to-transparent" />
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}