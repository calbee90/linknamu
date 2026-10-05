"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean | null>(null);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !isDark;
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
    setIsDark(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "라이트 모드로 전환" : "다크 모드로 전환"}
      className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-900 text-lg transition hover:bg-gray-100 dark:border-gray-100 dark:hover:bg-gray-800"
    >
      {/* 마운트 전에는 아이콘을 비워 하이드레이션 불일치 방지 */}
      {isDark === null ? null : isDark ? "☀️" : "🌙"}
    </button>
  );
}
