"use client";

import { ArrowRight } from "lucide-react";
import { SectionReveal } from "@/components/ui/section-reveal";
import { nsocData } from "@/data/nsoc";
import { useAuth } from "@/components/auth-provider";
import Link from "next/link";
import { motion } from "motion/react";

/* SVG icons for social platforms — kept inline to avoid extra deps */
function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.001.022.015.04.033.05a19.9 19.9 0 0 0 5.993 3.03.077.077 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const channelIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  discord: DiscordIcon,
  whatsapp: WhatsAppIcon,
  linkedin: LinkedInIcon,
};

export function CommunitySection() {
  const { status } = useAuth();

  return (
    <section id="community" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center">
            <span className="inline-flex items-center rounded-full border border-border bg-muted/50 px-4 py-1.5 text-xs font-medium text-muted-foreground">
              {nsocData.community.badge}
            </span>
            <h2
              className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground"
              style={{ fontFamily: "var(--font-syne), sans-serif" }}
            >
              {nsocData.community.heading}
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-base text-muted-foreground">
              {nsocData.community.description}
            </p>
          </div>
        </SectionReveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {nsocData.community.channels.map((channel, i) => {
            const Icon = channelIcons[channel.icon] || DiscordIcon;
            
            // If it's a private community link (Discord/WhatsApp) and user isn't approved
            const isPrivate = channel.platform === "Discord" || channel.platform === "WhatsApp";
            const needsAuth = isPrivate && status !== "approved";
            
            return (
              <SectionReveal key={channel.platform} delay={i * 100 + 200}>
                {needsAuth ? (
                  <div className="group relative block rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-8 overflow-hidden">
                    <div className="absolute inset-0 bg-background/60 backdrop-blur-md z-10 flex flex-col items-center justify-center p-4 text-center">
                      <p className="text-sm font-semibold text-foreground mb-2">Members Only</p>
                      <p className="text-xs text-muted-foreground mb-4">Login to view this invite link</p>
                      <Link href="/login" className="px-4 py-2 rounded-lg bg-cyan-500/10 text-cyan-500 text-xs font-semibold hover:bg-cyan-500/20 transition-colors">
                        Login Now
                      </Link>
                    </div>
                    {/* Blurred background content */}
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/10 flex items-center justify-center mb-5 opacity-30">
                      <Icon className="h-6 w-6 text-cyan-500" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 opacity-30">
                      {channel.platform}
                    </h3>
                  </div>
                ) : (
                  <motion.a
                    whileHover={{ scale: 1.02, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    href={channel.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-8 transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_30px_-5px_rgba(34,211,238,0.3)] relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10">
                      <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/10 flex items-center justify-center mb-5 group-hover:from-cyan-500/40 group-hover:to-blue-500/30 transition-colors duration-300 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                        <Icon className="h-6 w-6 text-cyan-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                        {channel.platform}
                        <ArrowRight className="h-4 w-4 text-cyan-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {channel.description}
                      </p>
                    </div>
                  </motion.a>
                )}
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
