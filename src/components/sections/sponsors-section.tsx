"use client";

import { ArrowRight, Hexagon, Construction } from "lucide-react";
import { SectionReveal } from "@/components/ui/section-reveal";
import { nsocData } from "@/data/nsoc";
import { motion } from "motion/react";

export function SponsorsSection() {
  return (
    <section id="sponsors" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center">
            <span className="inline-flex items-center rounded-full border border-border bg-muted/50 px-4 py-1.5 text-xs font-medium text-muted-foreground">
              {nsocData.sponsors.badge}
            </span>
            <h2
              className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground"
              style={{ fontFamily: "var(--font-syne), sans-serif" }}
            >
              {nsocData.sponsors.heading}
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-base text-muted-foreground">
              {nsocData.sponsors.description}
            </p>
          </div>
        </SectionReveal>

        <div className="mt-16 max-w-2xl mx-auto">
          <SectionReveal delay={100}>
            <motion.div
              whileHover={{ y: -5 }}
              className="group flex flex-col items-center justify-center rounded-3xl border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-xl p-10 md:p-16 text-center transition-all duration-500 hover:border-cyan-500/40 hover:bg-cyan-500/10 hover:shadow-[0_0_40px_-10px_rgba(34,211,238,0.15)] relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500" />
              
              <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center text-cyan-400 mb-6 shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                <Construction className="h-10 w-10" />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">
                WORK IN PROGRESS
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed max-w-md mx-auto">
                {nsocData.sponsors.underConstruction}
              </p>
            </motion.div>
          </SectionReveal>
        </div>

        <SectionReveal delay={400}>
          <div className="mt-12 flex justify-center">
            <a
              href={nsocData.sponsors.cta.href}
              className="group inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm px-8 py-4 transition-all duration-300 hover:border-nsoc-orange/40 hover:bg-white/[0.06] hover:shadow-[0_0_30px_-5px_rgba(255,87,34,0.2)]"
            >
              <span className="text-sm font-semibold text-white">
                {nsocData.sponsors.cta.label}
              </span>
              <ArrowRight className="h-4 w-4 text-nsoc-orange transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
