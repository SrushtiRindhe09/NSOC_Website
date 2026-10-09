"use client";

import { SectionReveal } from "@/components/ui/section-reveal";
import { nsocData } from "@/data/nsoc";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { UserPlus, BookOpen, Code2, Gift, Trophy } from "lucide-react";
import React, { useRef } from "react";

const stepIcons = [UserPlus, BookOpen, Code2, Gift, Trophy];
const stepColors = [
  "from-cyan-400 to-blue-500",
  "from-purple-400 to-pink-500",
  "from-nsoc-orange to-red-500",
  "from-yellow-400 to-amber-500",
  "from-emerald-400 to-teal-500",
];

function Card3D({ children, i }: { children: React.ReactNode, i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative z-10 w-full rounded-2xl border border-border bg-card/50 backdrop-blur-xl p-6 md:p-8 hover:bg-card/80 transition-colors shadow-lg dark:shadow-2xl"
    >
      {children}
    </motion.div>
  );
}

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-24 md:py-32 overflow-hidden" style={{ perspective: "1000px" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center">
            <span className="inline-flex items-center rounded-full border border-border bg-muted/50 px-4 py-1.5 text-xs font-medium text-muted-foreground">
              {nsocData.howItWorks.badge}
            </span>
            <h2
              className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground"
              style={{ fontFamily: "var(--font-syne), sans-serif" }}
            >
              {nsocData.howItWorks.heading}
            </h2>
          </div>
        </SectionReveal>

        <div className="mt-16 relative">
          {/* Vertical timeline line */}
          <div className="absolute left-[28px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/50 via-purple-500/50 to-nsoc-orange/50" aria-hidden="true" />

          <div className="space-y-12 md:space-y-24">
            {nsocData.howItWorks.steps.map((step, i) => {
              const isLeft = i % 2 === 0;
              const Icon = stepIcons[i % stepIcons.length];
              const colorGradient = stepColors[i % stepColors.length];

              return (
                <SectionReveal key={step.number} delay={i * 100}>
                  <div className={`relative flex items-center gap-6 md:gap-0 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    {/* Content */}
                    <div className={`flex-1 ${isLeft ? "md:pr-16" : "md:pl-16"}`} style={{ perspective: "1000px" }}>
                      <Card3D i={i}>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-6 relative" style={{ transform: "translateZ(30px)" }}>
                          {/* 3D Themed Icon Box */}
                          <div className={`shrink-0 h-16 w-16 rounded-2xl bg-gradient-to-br ${colorGradient} flex items-center justify-center shadow-lg`} style={{ transform: "translateZ(20px)" }}>
                             <Icon className="h-8 w-8 text-white drop-shadow-md" style={{ transform: "translateZ(30px)" }} />
                          </div>
                          
                          <div>
                            <span className="text-xs font-mono font-bold tracking-wider text-muted-foreground">
                              STEP {step.number}
                            </span>
                            <h3 className="mt-1 text-xl font-bold text-foreground drop-shadow-sm">
                              {step.title}
                            </h3>
                            <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-sm">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </Card3D>
                    </div>

                    {/* Timeline node */}
                    <div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 flex-shrink-0 z-10">
                      <div className="h-4 w-4 rounded-full border-2 border-background bg-gradient-to-br from-cyan-400 to-purple-500 shadow-[0_0_15px_rgba(34,211,238,0.5)]" />
                    </div>

                    {/* Spacer for the other side on desktop */}
                    <div className="hidden md:block flex-1" />
                  </div>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
