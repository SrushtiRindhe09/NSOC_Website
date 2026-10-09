"use client";

import { SectionReveal } from "@/components/ui/section-reveal";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { nsocData } from "@/data/nsoc";
import { Calendar, GitMerge, Users } from "lucide-react";

const statIcons = [Calendar, GitMerge, Users];

export function ImpactSection() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center mb-14">
            <span className="inline-flex items-center rounded-full border border-border bg-muted/50 px-4 py-1.5 text-xs font-medium text-muted-foreground">
              {nsocData.impact.badge}
            </span>
            <h2
              className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground"
              style={{ fontFamily: "var(--font-syne), sans-serif" }}
            >
              {nsocData.impact.heading}
            </h2>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {nsocData.impact.stats.map((stat, i) => {
            const Icon = statIcons[i % statIcons.length];
            return (
              <SectionReveal key={stat.label} delay={i * 100 + 100}>
                <div className="group relative rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-8 text-center transition-all duration-300 hover:border-nsoc-orange/20 hover:shadow-lg hover:shadow-nsoc-orange/5">
                  <div className="h-10 w-10 mx-auto rounded-xl bg-gradient-to-br from-nsoc-orange/10 to-orange-600/5 flex items-center justify-center mb-4 group-hover:from-nsoc-orange/20 group-hover:to-orange-600/10 transition-colors">
                    <Icon className="h-5 w-5 text-nsoc-orange" />
                  </div>
                  <p
                    className="text-4xl md:text-5xl font-bold text-foreground tracking-tight"
                    style={{ fontFamily: "var(--font-syne), sans-serif" }}
                  >
                    <AnimatedCounter
                      target={stat.value}
                      suffix={stat.suffix}
                      duration={1500}
                    />
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </p>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
