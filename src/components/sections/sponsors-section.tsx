"use client";

import { ArrowUpRight, Handshake } from "lucide-react";
import { SectionReveal } from "@/components/ui/section-reveal";
import { nsocData } from "@/data/nsoc";
import { motion } from "motion/react";

export function SponsorsSection() {
  const sponsors = nsocData.sponsors.items;

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

        {/* Sponsor cards */}
        <div className="mt-16 max-w-2xl mx-auto">
          {sponsors.map((sponsor, i) => (
            <SectionReveal key={sponsor.name} delay={100 + i * 100}>
              <motion.a
                href={sponsor.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4 }}
                className="group relative flex flex-col items-center justify-center rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-10 md:p-14 text-center transition-all duration-300 hover:border-nsoc-orange/30 hover:shadow-lg hover:shadow-nsoc-orange/5 overflow-hidden"
              >
                {/* Top accent */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-nsoc-orange/40 to-transparent" />

                {/* Tier badge */}
                <span className="inline-flex items-center gap-1.5 rounded-full border border-nsoc-orange/20 bg-nsoc-orange/5 px-3 py-1 text-[11px] font-semibold tracking-wide uppercase text-nsoc-orange dark:text-orange-400 mb-6">
                  <Handshake className="h-3 w-3" />
                  {sponsor.tier}
                </span>

                {/* Sponsor name */}
                <h3
                  className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight"
                  style={{ fontFamily: "var(--font-syne), sans-serif" }}
                >
                  {sponsor.name}
                </h3>

                {/* Visit link */}
                <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground group-hover:text-nsoc-orange transition-colors">
                  Visit {sponsor.name}
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </motion.a>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
