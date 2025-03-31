"use client";

import Image from "next/image";
import styles from "./Benefits.module.css";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Benefits() {
  // 각 요소에 대한 ref와 inView 감지 설정
  const headlineRef = useRef(null);
  const subheadingRef = useRef(null);
  const gridRef = useRef(null);

  const isHeadlineInView = useInView(headlineRef, { once: false, amount: 0.3 });
  const isSubheadingInView = useInView(subheadingRef, { once: false, amount: 0.3 });
  const isGridInView = useInView(gridRef, { once: false, amount: 0.2 });

  // 애니메이션 변형(variants) 정의
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // 카드별 애니메이션에 약간의 지연을 추가하기 위한 변형 (delay에 타입 추가)
  const cardFadeInUp = (delay: number) => ({
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay },
    },
  });

  return (
    <section id="benefits" className={styles.benefits}>
      <div className={styles.benefitsContainer}>
        {/* Headline에 애니메이션 적용 */}
        <motion.h2
          ref={headlineRef}
          className={styles.headline}
          variants={fadeInUp}
          initial="hidden"
          animate={isHeadlineInView ? "visible" : "hidden"}
        >
          Your Business, Amplified
        </motion.h2>

        {/* Subheading에 애니메이션 적용 */}
        <motion.p
          ref={subheadingRef}
          className={styles.subheading}
          variants={fadeInUp}
          initial="hidden"
          animate={isSubheadingInView ? "visible" : "hidden"}
        >
          Here’s why our AI duo is a game-changer.
        </motion.p>

        {/* Benefits Grid에 애니메이션 적용 */}
        <motion.div
          ref={gridRef}
          className={styles.benefitsGrid}
          initial="hidden"
          animate={isGridInView ? "visible" : "hidden"}
        >
          {/* First Row: 3 items */}
          <motion.div
            className={styles.benefitCard}
            variants={cardFadeInUp(0)}
          >
            <Image
              src="/happy_clients.svg"
              alt="Customers Love It"
              width={140}
              height={70}
              className={styles.benefitImage}
            />
            <h3 className={styles.benefitTitle}>Customers Love It</h3>
            <p className={styles.benefitDescription}>
              Fast, friendly responses = happier clients who stick around.
            </p>
          </motion.div>
          <motion.div
            className={styles.benefitCard}
            variants={cardFadeInUp(0.2)}
          >
            <Image
              src="/automation.svg"
              alt="Slash Your Costs"
              width={140}
              height={70}
              className={styles.benefitImage}
            />
            <h3 className={styles.benefitTitle}>Slash Your Costs</h3>
            <p className={styles.benefitDescription}>
              Automate the basics and save big on manpower—no more endless call queues.
            </p>
          </motion.div>
          <motion.div
            className={styles.benefitCard}
            variants={cardFadeInUp(0.4)}
          >
            <Image
              src="/growth.svg"
              alt="Grow Without Limits"
              width={140}
              height={70}
              className={styles.benefitImage}
            />
            <h3 className={styles.benefitTitle}>Grow Without Limits</h3>
            <p className={styles.benefitDescription}>
              Handle 10 or 10,000 queries with zero sweat—scale as you soar.
            </p>
          </motion.div>

          {/* Second Row: 2 items, centered */}
          <motion.div className={styles.secondRow}>
            <motion.div
              className={styles.benefitCard}
              variants={cardFadeInUp(0.6)}
            >
              <Image
                src="/modern_service.svg"
                alt="Beat the Competition"
                width={140}
                height={70}
                className={styles.benefitImage}
              />
              <h3 className={styles.benefitTitle}>Beat the Competition</h3>
              <p className={styles.benefitDescription}>
                Offer slick, modern service that leaves others in the dust.
              </p>
            </motion.div>
            <motion.div
              className={styles.benefitCard}
              variants={cardFadeInUp(0.8)}
            >
              <Image
                src="ai_service.svg"
                alt="Work Less, Win More"
                width={140}
                height={70}
                className={styles.benefitImage}
              />
              <h3 className={styles.benefitTitle}>Work Less, Win More</h3>
              <p className={styles.benefitDescription}>
                Free your team from repetitive tasks—focus on the big stuff instead.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}