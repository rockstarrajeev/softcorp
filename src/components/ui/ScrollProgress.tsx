"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";

export default function ScrollProgress() {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.scrollY;
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
          setScrollPercentage(Math.min(100, Math.max(0, progress)));
          setIsVisible(scrollTop > 250);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const circumference = 2 * Math.PI * 18;
  const strokeDashoffset = circumference - (scrollPercentage / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-slate-900/80 border border-cyan-500/30 text-white backdrop-blur-xl shadow-xl shadow-cyan-500/10 hover:border-cyan-400 hover:shadow-cyan-500/25 transition-all group"
        >
          {/* Circular progress SVG */}
          <svg className="w-10 h-10 -rotate-90" viewBox="0 0 44 44">
            <circle
              cx="22"
              cy="22"
              r="18"
              className="text-white/10"
              strokeWidth="2.5"
              stroke="currentColor"
              fill="transparent"
            />
            <circle
              cx="22"
              cy="22"
              r="18"
              className="text-cyan-400 transition-all duration-150"
              strokeWidth="2.5"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <FiArrowUp
              size={18}
              className="text-slate-300 group-hover:text-cyan-300 group-hover:-translate-y-0.5 transition-all"
            />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
