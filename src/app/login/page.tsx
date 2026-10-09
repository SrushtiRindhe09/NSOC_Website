"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/auth-provider";
import { motion } from "motion/react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { LogIn, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // For demo purposes, logging in instantly grants "approved" status
      login(email);
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
        <div className="rounded-3xl border border-white/10 bg-black/40 backdrop-blur-2xl p-8 shadow-2xl shadow-purple-500/10">
          <div className="flex justify-center mb-6">
            <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-600 flex items-center justify-center text-white shadow-lg shadow-purple-500/20">
              <LogIn className="h-7 w-7" />
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-center text-white mb-2" style={{ fontFamily: "var(--font-syne), sans-serif" }}>
            Welcome Back
          </h1>
          <p className="text-center text-slate-400 text-sm mb-8">
            Login to access your approved NSoC dashboard and community links.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-2">
                Registered Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors"
                placeholder="john@example.com"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="group relative w-full flex justify-center items-center gap-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 px-4 py-3.5 text-sm font-bold text-white shadow-lg hover:shadow-purple-500/25 transition-all overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Login to Dashboard
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </motion.button>
          </form>

          <div className="mt-8 text-center text-sm text-slate-400">
            Don't have an account?{" "}
            <Link href="/register" className="text-purple-400 font-semibold hover:text-purple-300 transition-colors">
              Apply now
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
