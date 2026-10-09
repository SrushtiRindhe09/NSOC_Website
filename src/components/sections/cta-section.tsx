import { ArrowRight } from "lucide-react";
import { SectionReveal } from "@/components/ui/section-reveal";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { nsocData } from "@/data/nsoc";

export function CtaSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background atmosphere */}
      <AuroraBackground className="absolute inset-0 pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <SectionReveal>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground"
            style={{ fontFamily: "var(--font-syne), sans-serif" }}
          >
            {nsocData.cta.heading}
          </h2>
        </SectionReveal>

        <SectionReveal delay={100}>
          <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed">
            {nsocData.cta.description}
          </p>
        </SectionReveal>

        <SectionReveal delay={200}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={nsocData.cta.primaryButton.href}
              className="group inline-flex items-center gap-2 rounded-xl bg-nsoc-orange px-8 py-4 text-base font-semibold text-white hover:bg-orange-600 transition-all duration-200 hover:shadow-lg hover:shadow-nsoc-orange/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nsoc-orange focus-visible:ring-offset-2"
            >
              {nsocData.cta.primaryButton.label}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={nsocData.cta.secondaryButton.href}
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-background/50 backdrop-blur-sm px-8 py-4 text-base font-semibold text-foreground hover:bg-accent/50 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              {nsocData.cta.secondaryButton.label}
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
