/** Aurora gradient background — pure CSS, no JS overhead */
export function AuroraBackground({ className }: { className?: string }) {
  return (
    <div className={className} aria-hidden="true">
      {/* Primary aurora glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[60%] opacity-20 dark:opacity-[0.08] blur-[120px] bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-full" />
      {/* Secondary aurora accent */}
      <div className="absolute top-[20%] right-[10%] w-[40%] h-[30%] opacity-15 dark:opacity-[0.06] blur-[100px] bg-gradient-to-tr from-emerald-400 via-teal-500 to-cyan-600 rounded-full" />
      {/* NSoC orange accent glow */}
      <div className="absolute bottom-[10%] left-[15%] w-[25%] h-[20%] opacity-10 dark:opacity-[0.04] blur-[80px] bg-gradient-to-r from-orange-400 to-amber-500 rounded-full" />
    </div>
  );
}
