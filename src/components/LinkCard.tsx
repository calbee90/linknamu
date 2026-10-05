"use client";

import type { LinkItem } from "@/data/profile";

function recordClick(linkId: string) {
  const body = JSON.stringify({ linkId });
  // 페이지를 떠나는 중에도 요청이 전송되도록 sendBeacon 우선 사용
  if (navigator.sendBeacon) {
    navigator.sendBeacon("/api/clicks", new Blob([body], { type: "application/json" }));
  } else {
    fetch("/api/clicks", { method: "POST", body, keepalive: true }).catch(() => {});
  }
}

export default function LinkCard({ link }: { link: LinkItem }) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => recordClick(link.id)}
      className="block w-full rounded-2xl border border-white/70 bg-white/45 px-6 py-4 text-center text-[15px] font-medium shadow-[0_4px_20px_-8px_rgba(140,80,40,0.18)] backdrop-blur-md transition duration-300 ease-out hover:-translate-y-px hover:bg-white/65 hover:shadow-[0_8px_28px_-10px_rgba(140,80,40,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e3a98a] active:translate-y-0 dark:border-white/10 dark:bg-white/[0.06] dark:shadow-[0_4px_20px_-8px_rgba(0,0,0,0.5)] dark:hover:bg-white/[0.1]"
    >
      {link.title}
    </a>
  );
}
