"use client";

import { useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { CuteSnowman } from "@/components/ui/cute-snowman";
import { nsocData } from "@/data/nsoc";
import { motion, useInView } from "motion/react";

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)", scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 1,
      },
    },
  };

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      <AuroraBackground className="absolute inset-0 pointer-events-none" />

      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148,163,184,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center py-20 md:py-32"
      >
        <motion.div variants={itemVariants}>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-nsoc-orange/30 bg-nsoc-orange/10 px-4 py-1.5 text-xs font-medium text-nsoc-orange dark:text-orange-400">
            <Sparkles className="h-3 w-3" />
            {nsocData.hero.badge}
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground"
          style={{ fontFamily: "var(--font-syne), sans-serif" }}
        >
          {nsocData.hero.heading}
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-4 text-xl sm:text-2xl md:text-3xl font-medium bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent"
        >
          {nsocData.hero.subheading}
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed"
        >
          {nsocData.hero.description}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={nsocData.hero.primaryCta.href}
            className="group inline-flex items-center gap-2 rounded-xl bg-nsoc-orange px-6 py-3.5 text-sm font-semibold text-white hover:bg-orange-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nsoc-orange shadow-[0_0_20px_-5px_rgba(255,87,34,0.4)]"
          >
            {nsocData.hero.primaryCta.label}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={nsocData.hero.secondaryCta.href}
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-background/50 backdrop-blur-sm px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-accent/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {nsocData.hero.secondaryCta.label}
          </motion.a>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-16 flex justify-center">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-1 h-2 rounded-full bg-cyan-400/50" 
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Cute 3D Snowman floating on the right side */}
      <div className="absolute right-10 bottom-32 hidden lg:block xl:right-32 z-20 pointer-events-none">
        <CuteSnowman />
      </div>
    </section>
  );
}
