import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { AuthProvider } from "@/components/auth-provider";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { nsocData } from "@/data/nsoc";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const syne = Syne({ subsets: ["latin"], variable: "--font-syne" });

export const metadata: Metadata = {
  title: nsocData.metadata.title,
  description: nsocData.metadata.description,
  applicationName: nsocData.metadata.applicationName,
  authors: [{ name: nsocData.metadata.author, url: nsocData.metadata.authorLinkedIn }],
  keywords: [
    "NSoC",
    "Nexus Spring of Code",
    "Open Source",
    "Developer Program",
    "Hackathon",
    "Git",
    "GitHub",
    "Winter Edition",
    "Student Developers",
    "Open Source Contributions",
  ],
  openGraph: {
    title: nsocData.metadata.title,
    description: nsocData.metadata.description,
    url: "https://www.nsoc.in",
    siteName: "Nexus Spring of Code",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: nsocData.metadata.title,
    description: nsocData.metadata.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${inter.variable} ${syne.variable} font-sans antialiased bg-background text-foreground selection:bg-nsoc-orange/30`}
      >
        {/* Skip-to-content link for keyboard accessibility */}
        <a
          href="#hero"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:rounded-lg focus:bg-nsoc-orange focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg"
        >
          Skip to content
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            <CustomCursor />
            {children}
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
