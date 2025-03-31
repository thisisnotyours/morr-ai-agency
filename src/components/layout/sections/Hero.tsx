"use client";

import { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';
import { Logos3 } from "@/components/blocks/logos3";
import { WavyBackground } from "@/components/ui/wavy-background";

export default function Hero() {
  useEffect(() => {
    // ElevenLabs 스크립트 추가
    const script = document.createElement('script');
    script.src = "https://elevenlabs.io/convai-widget/index.js";
    script.async = true;

    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.appendChild(script);
    }

    // 스크롤 시 Hero 섹션 가시성에 따라 위젯 표시/숨김
    const handleScroll = () => {
      const hero = document.getElementById('hero');
      const widget = document.querySelector(`.${styles.elevenLabsWidget}`) as HTMLElement | null;
      if (hero && widget) {
        const rect = hero.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        widget.style.opacity = isVisible ? '1' : '0';
        widget.style.pointerEvents = isVisible ? 'auto' : 'none'; // 클릭 방지
      }
    };

    // 스크립트 로드 완료 후 위젯 스타일 초기화
    script.onload = () => {
      handleScroll(); // 초기 상태 설정
    };

    window.addEventListener('scroll', handleScroll);

    // cleanup
    return () => {
      if (heroSection && script.parentNode) {
        heroSection.removeChild(script);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const logosData = {
    heading: "Trusted by these companies",
    logos: [
      { id: "logo-1", description: "Astro", image: "https://www.shadcnblocks.com/images/block/logos/astro.svg", className: "h-7 w-auto" },
      { id: "logo-2", description: "Figma", image: "https://www.shadcnblocks.com/images/block/logos/figma.svg", className: "h-7 w-auto" },
      { id: "logo-3", description: "Next.js", image: "https://www.shadcnblocks.com/images/block/logos/nextjs.svg", className: "h-7 w-auto" },
      { id: "logo-4", description: "React", image: "https://www.shadcnblocks.com/images/block/logos/react.png", className: "h-7 w-auto" },
      { id: "logo-5", description: "shadcn/ui", image: "https://www.shadcnblocks.com/images/block/logos/shadcn-ui.svg", className: "h-7 w-auto" },
      { id: "logo-6", description: "Supabase", image: "https://www.shadcnblocks.com/images/block/logos/supabase.svg", className: "h-7 w-auto" },
      { id: "logo-7", description: "Tailwind CSS", image: "https://www.shadcnblocks.com/images/block/logos/tailwind.svg", className: "h-4 w-auto" },
      { id: "logo-8", description: "Vercel", image: "https://www.shadcnblocks.com/images/block/logos/vercel.svg", className: "h-7 w-auto" },
    ],
  };

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.heroTop}>
          <WavyBackground className="max-w-4xl mx-auto pb-4">
            <div className={`${styles.heroContainer} flex items-center justify-center h-full`}>
              <div className={styles.textContent}>
                <motion.h1
                  className={styles.tagline}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <span className={styles.taglinePart1}>Voice & Chat AI</span>
                  <span className={styles.taglinePart2}>
                    That <span style={{ color: "#b5002b" }}>Speaks</span> Your Business
                  </span>
                </motion.h1>

                <p className={styles.subheading}>
                  <span className={styles.subheadingPart1}>
                    Supercharge your customer service with Malaysia’s most advanced voice AI agent{' '}
                  </span>
                  <span className={styles.subheadingPart2}>
                    and chatbot—built to engage, solve, and scale.
                  </span>
                </p>

                <div className={styles.linkContainer}>
                  <Link href="/article" className={styles.linkCta}>
                    MORR provides white-labeling platform
                  </Link>
                </div>

                <div className={styles.ctaContainer}>
                  <Link href="/call" className={styles.primaryCta}>Watch the Demo</Link>
                  <Link href="/signup" className={styles.secondaryCta}>Try It Free Now →</Link>
                </div>
              </div>
            </div>

            <div className={styles.logosSection}>
              <Logos3 {...logosData} />
            </div>

            {/* ElevenLabs 위젯 */}
            <div className={styles.elevenLabsWidget}>
              <elevenlabs-convai agent-id="5tACeDYnwJsL1krvpdce"></elevenlabs-convai>
            </div>
          </WavyBackground>
        </div>
      </div>
    </section>
  );
}