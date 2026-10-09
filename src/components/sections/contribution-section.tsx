"use client";

import {
  Search,
  GitFork,
  Code2,
  GitPullRequest,
  MessageSquare,
  GitMerge,
} from "lucide-react";
import { SectionReveal } from "@/components/ui/section-reveal";
import { nsocData } from "@/data/nsoc";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  search: Search,
  gitFork: GitFork,
  code: Code2,
  gitPullRequest: GitPullRequest,
  messageSquare: MessageSquare,
  gitMerge: GitMerge,
};

const stepColors = [
  { bg: "from-cyan-500/20 to-blue-500/10", text: "text-cyan-500", activeBg: "from-cyan-500/30 to-blue-500/20", glow: "shadow-cyan-500/20" },
  { bg: "from-violet-500/20 to-purple-500/10", text: "text-violet-500", activeBg: "from-violet-500/30 to-purple-500/20", glow: "shadow-violet-500/20" },
  { bg: "from-nsoc-orange/20 to-red-500/10", text: "text-nsoc-orange", activeBg: "from-nsoc-orange/30 to-red-500/20", glow: "shadow-nsoc-orange/20" },
  { bg: "from-amber-500/20 to-yellow-500/10", text: "text-amber-500", activeBg: "from-amber-500/30 to-yellow-500/20", glow: "shadow-amber-500/20" },
  { bg: "from-pink-500/20 to-rose-500/10", text: "text-pink-500", activeBg: "from-pink-500/30 to-rose-500/20", glow: "shadow-pink-500/20" },
  { bg: "from-emerald-500/20 to-green-500/10", text: "text-emerald-500", activeBg: "from-emerald-500/30 to-green-500/20", glow: "shadow-emerald-500/20" },
];

export function ContributionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Animate a horizontal progress bar that fills as user scrolls through the section
  const progressWidth = useTransform(scrollYProgress, [0.15, 0.7], ["0%", "100%"]);

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center">
            <span className="inline-flex items-center rounded-full border border-border bg-muted/50 px-4 py-1.5 text-xs font-medium text-muted-foreground">
              {nsocData.contributionJourney.badge}
            </span>
            <h2
              className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground"
              style={{ fontFamily: "var(--font-syne), sans-serif" }}
            >
              {nsocData.contributionJourney.heading}
            </h2>
          </div>
        </SectionReveal>

        {/* Scroll-linked progress bar */}
        <SectionReveal delay={100}>
          <div className="mt-12 mx-auto max-w-3xl">
            <div className="relative h-1.5 rounded-full bg-border overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500"
                style={{ width: progressWidth }}
              />
            </div>
          </div>
        </SectionReveal>

        <SectionReveal delay={200}>
          <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2">
            {nsocData.contributionJourney.steps.map((step, i) => {
              const Icon = iconMap[step.icon] || Code2;
              const isLast =
                i === nsocData.contributionJourney.steps.length - 1;
              const color = stepColors[i % stepColors.length];
              return (
                <div key={step.label} className="flex items-center gap-2 md:gap-2">
                  <motion.div
                    whileHover={{ y: -4, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-6 min-w-[130px] transition-all duration-300 hover:border-nsoc-orange/30 hover:shadow-lg ${color.glow}`}
                  >
                    <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${color.bg} flex items-center justify-center group-hover:${color.activeBg} transition-colors`}>
                      <Icon className={`h-6 w-6 ${color.text} transition-colors`} />
                    </div>
                    <span className="text-xs font-medium text-foreground text-center whitespace-nowrap">
                      {step.label}
                    </span>
                  </motion.div>
                  {!isLast && (
                    <div className="hidden md:block text-muted-foreground/40" aria-hidden="true">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </div>
                  )}
                  {!isLast && (
                    <div className="md:hidden text-muted-foreground/40" aria-hidden="true">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 5v14" />
                        <path d="m19 12-7 7-7-7" />
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
