"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="p-2 h-9 w-9" />;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-lg bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === "dark" ? 0 : 90 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
      >
        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
      </motion.div>
    </button>
  );
}
