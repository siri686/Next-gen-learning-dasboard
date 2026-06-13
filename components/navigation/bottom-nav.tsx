"use client";

import { Home, BookOpen, ChartNoAxesColumn, User } from "lucide-react";

const items = [
  { label: "Home", icon: Home },
  { label: "Courses", icon: BookOpen },
  { label: "Stats", icon: ChartNoAxesColumn },
  { label: "Profile", icon: User }
];

export function BottomNav() {
  return (
    <nav
      aria-label="Bottom navigation"
      className="fixed bottom-4 left-1/2 z-50 flex w-[calc(100%-1.5rem)] -translate-x-1/2 items-center justify-around rounded-2xl border border-white/10 bg-black/40 p-2 backdrop-blur-xl md:hidden"
    >
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <button
            key={item.label}
            type="button"
            className="flex flex-col items-center gap-1 rounded-xl px-3 py-2 text-xs text-white/70"
          >
            <Icon className="h-5 w-5" />
            <span>{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
