"use client";

import Image from "next/image";
import styles from "./Features.module.css";
import { useId, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Feature197 } from "@/components/blocks/accordion-feature-section";

export default function Features() {
  const id = useId();

  // 각 요소에 대한 ref와 inView 감지 설정
  const headlineRef = useRef(null);
  const subheadingRef = useRef(null);
  const featureRef = useRef(null);

  const isHeadlineInView = useInView(headlineRef, { once: false, amount: 0.3 });
  const isSubheadingInView = useInView(subheadingRef, { once: false, amount: 0.3 });
  const isFeatureInView = useInView(featureRef, { once: false, amount: 0.3 });

  // 애니메이션 변형(variants) 정의
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const featureData = {
    headline: "Next-Level Tools for Next-Level Service",
    subheading: "Here’s what our voice AI agent and chatbot bring to the table.",
    features: [
      {
        id: 1,
        title: "Real Voice, Real Results",
        image: "/real_voice.svg",
        description:
          "Talks naturally, understands intent, and nails every response—phone calls just got smarter.",
      },
      {
        id: 2,
        title: "Chatbot That Doesn’t Sleep",
        image: "/chatbot.svg",
        description:
          "Instant replies on WhatsApp, websites, or anywhere your customers are—day or night.",
      },
      {
        id: 3,
        title: "Malaysian Multilingual Magic",
        image: "/malay.svg",
        description:
          "Switches effortlessly between Bahasa Malaysia, English, Mandarin, and more—your customers feel right at home.",
      },
      {
        id: 4,
        title: "Always On, Always Ready",
        image: "support.svg",
        description:
          "24/7 support that never takes a break, so you don’t have to either.",
      },
      {
        id: 5,
        title: "Plug-and-Play Power",
        image: "/plug.svg",
        description:
          "Hooks into your CRM, phone system, or website in minutes—no tech degree needed.",
      },
      {
        id: 6,
        title: "Local Smarts",
        image: "/slang.svg",
        description:
          "Gets Malaysian slang, tone, and context—because “lah” isn’t just a word, it’s a vibe.",
      },
    ],
  };

  return (
    <section id="features" className={styles.features}>
      {/* badge */}
      {/* <p className={styles.badge}>Features</p> */}
      {/* Headline에 애니메이션 적용 */}
      <motion.h2
        ref={headlineRef}
        className={styles.headline}
        variants={fadeInUp}
        initial="hidden"
        animate={isHeadlineInView ? "visible" : "hidden"}
      >
        Next-Level Tools for Next-Level Service
      </motion.h2>

      {/* Subheading에 애니메이션 적용 */}
      <motion.p
        ref={subheadingRef}
        className={styles.subheading}
        variants={fadeInUp}
        initial="hidden"
        animate={isSubheadingInView ? "visible" : "hidden"}
      >
        Here’s what our voice AI agent and chatbot bring to the table.
      </motion.p>

      {/* Feature197 컴포넌트에 애니메이션 적용 */}
      <motion.div
        ref={featureRef}
        variants={fadeInUp}
        initial="hidden"
        animate={isFeatureInView ? "visible" : "hidden"}
      >
        <Feature197 {...featureData} />
      </motion.div>
    </section>
  );
}