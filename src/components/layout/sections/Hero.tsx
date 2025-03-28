"use client"; // 클라이언트 컴포넌트로 설정

import { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

export default function Hero() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://elevenlabs.io/convai-widget/index.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.heroContainer}>
        {/* 텍스트와 버튼 영역 */}
        <div className={styles.textContent}>
          {/* 태그라인에 Framer Motion 애니메이션 적용 */}
          <motion.h1
            className={styles.tagline}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className={styles.taglinePart1}>Voice & Chat AI</span>
            <span className={styles.taglinePart2}>That Speaks Your Business</span>
          </motion.h1>

          {/* 서브헤딩 */}
          <p className={styles.subheading}>
            Supercharge your customer service with Malaysia’s most advanced voice AI agent and chatbot—built to engage, solve, and scale.
          </p>

          {/* CTA 버튼 */}
          <div className={styles.ctaContainer}>
            <Link href="/try-free" className={styles.primaryCta}>
              Try It Free Now
            </Link>
            <Link href="/demo" className={styles.secondaryCta}>
              Watch the Demo
            </Link>
          </div>
        </div>

        {/* 애니메이션 영역 */}
        <div className={styles.animationContent}>
          <div className={styles.animationPlaceholder}>
            <p className={styles.placeholderText}>[Animation Placeholder]</p>
          </div>
        </div>
      </div>

      {/* ElevenLabs 위젯 */}
      <div className={styles.elevenLabsWidget}>
        <elevenlabs-convai agent-id="5tACeDYnwJsL1krvpdce"></elevenlabs-convai>
      </div>
    </section>
  );
}