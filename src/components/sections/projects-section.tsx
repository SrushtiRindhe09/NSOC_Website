"use client";

import { ArrowRight, Code2, Construction } from "lucide-react";
import { SectionReveal } from "@/components/ui/section-reveal";
import { nsocData } from "@/data/nsoc";
import { motion } from "motion/react";

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center">
            <span className="inline-flex items-center rounded-full border border-border bg-muted/50 px-4 py-1.5 text-xs font-medium text-muted-foreground">
              {nsocData.projects.badge}
            </span>
            <h2
              className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground"
              style={{ fontFamily: "var(--font-syne), sans-serif" }}
            >
              {nsocData.projects.heading}
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-base text-muted-foreground">
              {nsocData.projects.description}
            </p>
          </div>
        </SectionReveal>

        <div className="mt-16 max-w-2xl mx-auto">
          <SectionReveal delay={100}>
            <motion.div
              whileHover={{ y: -5 }}
              className="group flex flex-col items-center justify-center rounded-3xl border border-nsoc-orange/20 bg-nsoc-orange/5 backdrop-blur-xl p-10 md:p-16 text-center transition-all duration-500 hover:border-nsoc-orange/40 hover:bg-nsoc-orange/10 hover:shadow-[0_0_40px_-10px_rgba(255,87,34,0.15)] relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-nsoc-orange to-orange-400" />
              
              <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-nsoc-orange/20 to-orange-600/20 flex items-center justify-center text-nsoc-orange mb-6 shadow-[0_0_20px_rgba(255,87,34,0.2)]">
                <Construction className="h-10 w-10" />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">
                WORK IN PROGRESS
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed max-w-md mx-auto">
                {nsocData.projects.underConstruction}
              </p>
            </motion.div>
          </SectionReveal>
        </div>

        <SectionReveal delay={400}>
          <div className="mt-12 flex justify-center">
            <a
              href={nsocData.projects.cta.href}
              className="inline-flex items-center gap-2 text-sm font-semibold text-nsoc-orange hover:text-orange-400 transition-colors group"
            >
              {nsocData.projects.cta.label}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
