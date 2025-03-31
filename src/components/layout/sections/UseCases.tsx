"use client";

import styles from '@/components/layout/sections/UseCases.module.css';
import { FeatureSteps } from '@/components/blocks/feature-section';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function UseCases() {
  // Define the use cases in the format required by FeatureSteps
  const useCases = [
    {
      step: "Retail & E-Commerce",
      title: "Retail & E-Commerce",
      content: "Voice AI takes orders over the phone; chatbot tracks deliveries—sales up, stress down.",
      image: "/retail.svg",
    },
    {
      step: "Food & Beverage",
      title: "Food & Beverage",
      content: "Customers call to reserve tables or ask about menus—our AI handles it in seconds.",
      image: "/food.svg",
    },
    {
      step: "Telcos & Utilities",
      title: "Telcos & Utilities",
      content: "Chatbot fixes billing queries; voice AI explains plans—fewer complaints, faster resolutions.",
      image: "/network.svg",
    },
    {
      step: "Logistics",
      title: "Logistics",
      content: "Voice AI updates shipment status; chatbot answers FAQs—customers stay in the loop.",
      image: "/logistic.svg",
    },
    {
      step: "Startups & SMEs",
      title: "Startups & SMEs",
      content: "Big-brand service on a lean budget—look pro without breaking the bank.",
      image: "/startup.svg",
    },
  ];

  // Ref와 inView 감지 설정
  const sectionRef = useRef(null);
  const isSectionInView = useInView(sectionRef, { once: false, amount: 0.2 });

  // 애니메이션 변형(variants) 정의
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.section
      id="use-cases"
      className="min-h-[70vh] p-6 bg-gradient-to-br to-gray-50" // min-h-screen -> min-h-[70vh], p-8 -> p-4
      ref={sectionRef}
      initial="hidden"
      animate={isSectionInView ? "visible" : "hidden"}
      variants={fadeInUp}
    >
      {/* Use Cases Items with FeatureSteps */}
      <FeatureSteps
        features={useCases}
        title="Real Problems, Real Solutions"
        subtitle="See how Malaysian businesses are crushing it with our voice AI and chatbot."
        autoPlayInterval={3000}
        imageHeight="h-[400px]"
      />
    </motion.section>
  );
}