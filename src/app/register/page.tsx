"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/auth-provider";
import { motion } from "motion/react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Sparkles, ArrowRight, UserPlus } from "lucide-react";
import Link from "next/link";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { register } = useAuth();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) {
      register(name, email);
      router.push("/");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <AuroraBackground className="absolute inset-0 pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md px-6 py-12"
      >
        <div className="rounded-3xl border border-border bg-card/80 backdrop-blur-2xl p-8 shadow-2xl shadow-cyan-500/10">
          <div className="flex justify-center mb-6">
            <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/20">
              <UserPlus className="h-7 w-7" />
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-center text-foreground mb-2" style={{ fontFamily: "var(--font-syne), sans-serif" }}>
            Join NSoC Winter
          </h1>
          <p className="text-center text-muted-foreground text-sm mb-8">
            Create an account to access communities and project repos. Admin approval required.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors"
                placeholder="john@example.com"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="group relative w-full flex justify-center items-center gap-2 rounded-xl bg-gradient-to-r from-nsoc-orange to-orange-600 px-4 py-3.5 text-sm font-bold text-white shadow-lg hover:shadow-nsoc-orange/25 transition-all overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                Submit Application
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </motion.button>
          </form>

          <div className="mt-8 text-center text-sm text-muted-foreground">
            Already registered?{" "}
            <Link href="/login" className="text-cyan-500 dark:text-cyan-400 font-semibold hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors">
              Login here
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
