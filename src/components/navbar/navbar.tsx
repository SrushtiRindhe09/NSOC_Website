"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle/theme-toggle";
import { nsocData } from "@/data/nsoc";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50 shadow-sm"
            : "bg-transparent"
        )}
      >
        <nav
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
          aria-label="Main navigation"
        >
          <div className="flex h-16 items-center justify-between">
            {/* Brand */}
            <Link
              href="/"
              className="flex items-center gap-2 group"
              aria-label="NSoC Home"
            >
              <div className="relative h-8 w-24 sm:w-28 overflow-hidden flex items-center transition-transform group-hover:scale-105">
                <img 
                  src="https://www.nsoc.in/logo_light.png" 
                  alt="NSoC Logo" 
                  className="hidden dark:block h-full w-full object-contain object-left drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                />
                <img 
                  src="https://www.nsoc.in/logo_dark.png" 
                  alt="NSoC Logo" 
                  className="block dark:hidden h-full w-full object-contain object-left"
                />
              </div>
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-1">
              {nsocData.navigation.items.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent/50"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Desktop right side */}
            <div className="hidden md:flex items-center gap-3">
              <ThemeToggle />
              <a
                href={nsocData.navigation.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-nsoc-orange px-4 py-2 text-sm font-semibold text-white hover:bg-orange-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nsoc-orange focus-visible:ring-offset-2"
              >
                {nsocData.navigation.cta.label}
              </a>
            </div>

            {/* Mobile controls */}
            <div className="flex md:hidden items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label={isMobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileOpen}
              >
                {isMobileOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile overlay menu */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsMobileOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute top-16 left-0 right-0 bg-background border-b border-border shadow-xl p-6 space-y-4">
            {nsocData.navigation.items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileOpen(false)}
                className="block px-3 py-3 text-base font-medium text-foreground hover:bg-accent/50 rounded-lg transition-colors"
              >
                {item.label}
              </a>
            ))}
            <hr className="border-border" />
            {nsocData.navigation.externalLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileOpen(false)}
                className="block px-3 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-lg transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href={nsocData.navigation.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center rounded-lg bg-nsoc-orange px-4 py-3 text-base font-semibold text-white hover:bg-orange-600 transition-colors"
            >
              {nsocData.navigation.cta.label}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
