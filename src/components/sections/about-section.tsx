import { Code2, Users, Rocket } from "lucide-react";
import { SectionReveal } from "@/components/ui/section-reveal";
import { nsocData } from "@/data/nsoc";
import { FloatingCrystals } from "@/components/ui/floating-crystals";

const iconMap = [Code2, Users, Rocket];

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      <FloatingCrystals />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center">
            <span className="inline-flex items-center rounded-full border border-border bg-muted/50 px-4 py-1.5 text-xs font-medium text-muted-foreground">
              {nsocData.about.badge}
            </span>
            <h2
              className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground"
              style={{ fontFamily: "var(--font-syne), sans-serif" }}
            >
              {nsocData.about.heading}
            </h2>
          </div>
        </SectionReveal>

        <SectionReveal delay={150}>
          <div className="mt-10 max-w-3xl mx-auto space-y-4 text-center">
            {nsocData.about.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-base sm:text-lg text-muted-foreground leading-relaxed"
              >
                {p}
              </p>
            ))}
          </div>
        </SectionReveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {nsocData.about.highlights.map((item, i) => {
            const Icon = iconMap[i] || Code2;
            return (
              <SectionReveal key={item.title} delay={i * 100 + 200}>
                <div className="group relative rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-8 transition-all duration-300 hover:border-nsoc-orange/30 hover:shadow-lg hover:shadow-nsoc-orange/5">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-nsoc-orange/20 to-orange-600/10 flex items-center justify-center mb-5 group-hover:from-nsoc-orange/30 group-hover:to-orange-600/20 transition-colors">
                    <Icon className="h-6 w-6 text-nsoc-orange" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
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
