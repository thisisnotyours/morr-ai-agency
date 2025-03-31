"use client";

import styles from "./Aboutus.module.css";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutUs() {
  const headlineRef = useRef(null);
  const storyRef = useRef(null);
  const teamRef = useRef(null);

  const isHeadlineInView = useInView(headlineRef, { once: false, amount: 0.3 });
  const isStoryInView = useInView(storyRef, { once: false, amount: 0.3 });
  const isTeamInView = useInView(teamRef, { once: false, amount: 0.2 });

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="about" className={styles.aboutUs}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* badge */}
          <p className={styles.badge}>Abouts Us</p>
          {/* Headline with motion */}
          <motion.h2
            ref={headlineRef}
            className={styles.headline}
            variants={fadeInUp}
            initial="hidden"
            animate={isHeadlineInView ? "visible" : "hidden"}
          >
            AI That Gets Malaysia
          </motion.h2>

          {/* Story paragraph with motion */}
          <motion.p
            ref={storyRef}
            className={styles.story}
            variants={fadeInUp}
            initial="hidden"
            animate={isStoryInView ? "visible" : "hidden"}
          >
            At MORR we are obsessed with one thing: making your customer experience unstoppable. Our voice AI agent and chatbot aren’t just tech—they’re your new frontline, built from the ground up to handle real Malaysian conversations. Think fast answers, local vibes, and zero downtime. We’re here to help businesses like yours thrive, whether you’re a small shop in KL or a brand going nationwide. Let’s turn every interaction into a win.
          </motion.p>

          {/* Team section with motion */}
          <motion.div
            ref={teamRef}
            className={styles.teamProfiles}
            variants={fadeInUp}
            initial="hidden"
            animate={isTeamInView ? "visible" : "hidden"}
          >
            <div className={styles.profile}>
              <Image
                src="/file.svg"
                alt="Atul Kamble"
                width={60}
                height={60}
                className={styles.profileImage}
              />
              <div>
                <p className={styles.profileName}>Atul Kamble</p>
                <p className={styles.profileTitle}>CEO</p>
              </div>
              <a href="https://x.com/janekim" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/globe.svg"
                  alt="X"
                  width={20}
                  height={20}
                  className={styles.socialIcon}
                />
              </a>
            </div>

            <div className={styles.profile}>
              <Image
                src="/next.svg"
                alt="Sue Kim"
                width={60}
                height={60}
                className={styles.profileImage}
              />
              <div>
                <p className={styles.profileName}>Sue Kim</p>
                <p className={styles.profileTitle}>CTO</p>
              </div>
              <a href="https://x.com/alexchen" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/vercel.svg"
                  alt="X"
                  width={20}
                  height={20}
                  className={styles.socialIcon}
                />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
