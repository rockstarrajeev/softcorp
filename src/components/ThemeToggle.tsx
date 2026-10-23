"use client";

import { useTheme } from "./ThemeProvider";
import { FiSun, FiMoon } from "react-icons/fi";
import { motion } from "framer-motion";

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export default function ThemeToggle({ className = "", showLabel = false }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to Day Mode" : "Switch to Night Mode"}
      title={isDark ? "Switch to Day Mode" : "Switch to Night Mode"}
      className={`relative inline-flex items-center gap-2 p-2 rounded-full border transition-all duration-300 cursor-pointer ${
        isDark
          ? "bg-slate-900/80 border-white/10 text-cyan-400 hover:border-cyan-500/40 hover:bg-slate-800"
          : "bg-white/90 border-slate-200 text-amber-500 hover:border-amber-400 hover:bg-slate-50 shadow-sm"
      } ${className}`}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, scale: 0.7, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        exit={{ rotate: 90, scale: 0.7, opacity: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="flex items-center justify-center"
      >
        {isDark ? (
          <FiMoon size={15} className="text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]" />
        ) : (
          <FiSun size={15} className="text-amber-500 drop-shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
        )}
      </motion.div>

      {showLabel && (
        <span className="text-xs font-semibold select-none pr-1">
          {isDark ? "Night" : "Day"}
        </span>
      )}
    </button>
  );
}
