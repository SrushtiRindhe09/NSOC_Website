"use client";

import { Code2, ArrowUpRight } from "lucide-react";
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

        <div className="mt-16 max-w-3xl mx-auto">
          <SectionReveal delay={100}>
            <motion.div
              whileHover={{ y: -3 }}
              className="relative rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-10 md:p-14 text-center transition-all duration-300 hover:border-nsoc-orange/20 hover:shadow-lg hover:shadow-nsoc-orange/5 overflow-hidden"
            >
              {/* Subtle top accent */}
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-nsoc-orange/40 to-transparent" />

              <div className="h-16 w-16 mx-auto rounded-2xl bg-gradient-to-br from-nsoc-orange/10 to-orange-600/5 flex items-center justify-center text-nsoc-orange mb-6">
                <Code2 className="h-8 w-8" />
              </div>

              <h3
                className="text-xl font-bold text-foreground mb-3"
                style={{ fontFamily: "var(--font-syne), sans-serif" }}
              >
                Projects Coming Soon
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-md mx-auto">
                {nsocData.projects.emptyState}
              </p>

              <div className="mt-8 flex items-center justify-center gap-6">
                <a
                  href="#community"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-nsoc-orange hover:text-orange-500 transition-colors"
                >
                  Join Community
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
                <a
                  href="/register"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  Get Notified
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
