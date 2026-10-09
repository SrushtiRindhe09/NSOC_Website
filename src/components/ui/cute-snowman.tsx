"use client";

import { motion, useAnimation } from "motion/react";
import { useEffect, useState } from "react";

export function CuteSnowman() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const controls = useAnimation();

  useEffect(() => {
    // Make the snowman wave periodically
    const waveInterval = setInterval(() => {
      controls.start({
        rotate: [0, -20, 20, -20, 20, 0],
        transition: { duration: 1.5, ease: "easeInOut" }
      });
    }, 5000);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20, // max rotation 20deg
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      clearInterval(waveInterval);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [controls]);

  return (
    <div className="relative w-48 h-64 mx-auto perspective-1000 hidden md:block" aria-hidden="true">
      <motion.div
        className="w-full h-full relative"
        style={{ transformStyle: "preserve-3d" }}
        animate={{
          rotateX: -mousePos.y,
          rotateY: mousePos.x,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      >
        {/* Shadow */}
        <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-32 h-6 bg-black/20 rounded-full blur-md" />

        {/* Bottom Body (Snowball) */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-white rounded-full shadow-[inset_-10px_-10px_20px_rgba(0,0,0,0.1),_0_10px_20px_rgba(0,0,0,0.2)]">
          {/* Buttons */}
          <div className="absolute top-8 left-1/2 -translate-x-1/2 w-3 h-3 bg-slate-800 rounded-full" />
          <div className="absolute top-16 left-1/2 -translate-x-1/2 w-3 h-3 bg-slate-800 rounded-full" />
        </div>

        {/* Head (Snowball) */}
        <div className="absolute bottom-[90px] left-1/2 -translate-x-1/2 w-24 h-24 bg-white rounded-full shadow-[inset_-8px_-8px_15px_rgba(0,0,0,0.1)] z-10">
          {/* Eyes */}
          <div className="absolute top-8 left-6 w-3 h-3 bg-slate-800 rounded-full" />
          <div className="absolute top-8 right-6 w-3 h-3 bg-slate-800 rounded-full" />
          
          {/* Blushing Cheeks */}
          <div className="absolute top-12 left-4 w-4 h-2 bg-pink-300 rounded-full blur-[2px]" />
          <div className="absolute top-12 right-4 w-4 h-2 bg-pink-300 rounded-full blur-[2px]" />

          {/* Carrot Nose */}
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full origin-left" style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)", transform: "scaleX(2) translateX(-2px)" }} />

          {/* Smile */}
          <div className="absolute top-14 left-1/2 -translate-x-1/2 w-8 h-4 border-b-4 border-slate-800 rounded-full" style={{ borderRadius: "50% / 0 0 100% 100%" }} />
        </div>

        {/* Scarf */}
        <div className="absolute bottom-[95px] left-1/2 -translate-x-1/2 w-28 h-6 bg-red-500 rounded-full z-20 shadow-md" />
        <div className="absolute bottom-[60px] left-[55%] w-6 h-12 bg-red-500 rounded-b-xl z-10 shadow-sm" style={{ transform: "rotate(-10deg)" }}>
          <div className="absolute bottom-0 w-full h-2 flex justify-around">
            <div className="w-1 h-3 bg-red-600 rounded-full" />
            <div className="w-1 h-3 bg-red-600 rounded-full" />
            <div className="w-1 h-3 bg-red-600 rounded-full" />
          </div>
        </div>

        {/* Hat */}
        <div className="absolute top-[30px] left-1/2 -translate-x-1/2 z-20" style={{ transform: "rotate(-5deg)" }}>
          {/* Brim */}
          <div className="w-28 h-4 bg-slate-900 rounded-full shadow-lg" />
          {/* Top */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-16 h-16 bg-slate-800 rounded-t-lg">
            {/* Red band */}
            <div className="absolute bottom-0 w-full h-3 bg-red-500" />
          </div>
        </div>

        {/* Arms */}
        {/* Left Arm - Waving */}
        <motion.div 
          animate={controls}
          className="absolute bottom-[130px] left-[-30px] w-20 h-2 bg-amber-700 rounded-full origin-right z-0" 
          style={{ transform: "rotate(-30deg)" }}
        >
          {/* Fingers */}
          <div className="absolute top-[-10px] left-[10px] w-6 h-1 bg-amber-700 rounded-full" style={{ transform: "rotate(45deg)" }} />
          <div className="absolute top-[10px] left-[10px] w-6 h-1 bg-amber-700 rounded-full" style={{ transform: "rotate(-45deg)" }} />
        </motion.div>

        {/* Right Arm */}
        <div className="absolute bottom-[130px] right-[-30px] w-20 h-2 bg-amber-700 rounded-full origin-left z-0" style={{ transform: "rotate(30deg)" }}>
          <div className="absolute top-[-10px] right-[10px] w-6 h-1 bg-amber-700 rounded-full" style={{ transform: "rotate(-45deg)" }} />
        </div>
      </motion.div>
    </div>
  );
}
