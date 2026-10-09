import { Navbar } from "@/components/navbar/navbar";
import { HeroSection } from "@/components/hero/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ImpactSection } from "@/components/sections/impact-section";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { ContributionSection } from "@/components/sections/contribution-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { CommunitySection } from "@/components/sections/community-section";
import { SponsorsSection } from "@/components/sections/sponsors-section";
import { CtaSection } from "@/components/sections/cta-section";
import { Footer } from "@/components/footer/footer";
import { WinterParticles } from "@/components/ui/winter-particles";
import { ScrollProgress } from "@/components/ui/scroll-progress";

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <WinterParticles />
      <Navbar />
      <main className="min-h-screen">
        <HeroSection />
        <AboutSection />
        <ImpactSection />
        <HowItWorksSection />
        <ContributionSection />
        <ProjectsSection />
        <CommunitySection />
        <SponsorsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
