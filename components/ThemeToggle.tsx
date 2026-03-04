"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean>(true);

  useEffect(() => {
    const root = document.documentElement;
    const stored = window.localStorage.getItem("theme");

    if (stored === "light") {
      root.classList.remove("dark");
      setIsDark(false);
      return;
    }

    root.classList.add("dark");
    setIsDark(true);
  }, []);

  const toggleTheme = (): void => {
    const root = document.documentElement;
    const nextIsDark = !isDark;
    setIsDark(nextIsDark);

    if (nextIsDark) {
      root.classList.add("dark");
      window.localStorage.setItem("theme", "dark");
      return;
    }

    root.classList.remove("dark");
    window.localStorage.setItem("theme", "light");
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="rounded-full border border-gray-700 p-2 text-gray-300 hover:border-cyan-400 hover:text-cyan-400"
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
