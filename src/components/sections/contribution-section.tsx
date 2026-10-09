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

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  search: Search,
  gitFork: GitFork,
  code: Code2,
  gitPullRequest: GitPullRequest,
  messageSquare: MessageSquare,
  gitMerge: GitMerge,
};

export function ContributionSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
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

        <SectionReveal delay={200}>
          <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2">
            {nsocData.contributionJourney.steps.map((step, i) => {
              const Icon = iconMap[step.icon] || Code2;
              const isLast =
                i === nsocData.contributionJourney.steps.length - 1;
              return (
                <div key={step.label} className="flex items-center gap-2 md:gap-2">
                  <div className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-6 min-w-[130px] transition-all duration-300 hover:border-green-500/30 hover:shadow-lg hover:shadow-green-500/5">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/10 flex items-center justify-center group-hover:from-green-500/20 group-hover:to-emerald-500/10 transition-colors">
                      <Icon className="h-6 w-6 text-cyan-500 group-hover:text-green-500 transition-colors" />
                    </div>
                    <span className="text-xs font-medium text-foreground text-center whitespace-nowrap">
                      {step.label}
                    </span>
                  </div>
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
