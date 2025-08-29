// src/components/Header.jsx
import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <header className="p-4 flex justify-end">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-4 mt-4 py-2 rounded-2xl 
               bg-white/10 dark:bg-white/10 
               backdrop-blur-md border border-white/20 
               shadow-lg text-sm font-medium 
               text-gray-800 dark:text-white 
               hover:bg-white/20 transition"
      >
        {darkMode ? "🌙 Dark" : "☀️ Light"}
      </button>
    </header>

  );
}
