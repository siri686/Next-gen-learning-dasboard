"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  ChartNoAxesColumn,
  Home,
  Settings,
  User
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const items = [
  { id: "dashboard", label: "Dashboard", icon: Home, href: "/" },
  { id: "courses", label: "Courses", icon: BookOpen, href: "/courses" },
  { id: "analytics", label: "Analytics", icon: ChartNoAxesColumn, href: "/analytics" },
  { id: "profile", label: "Profile", icon: User, href: "/profile" },
  { id: "settings", label: "Settings", icon: Settings, href: "/settings" }
];

export function Sidebar() {
  const pathname = usePathname();

  const userName = "Alex";
  const userInitial = userName.charAt(0).toUpperCase();

  return (
    <nav
      aria-label="Sidebar navigation"
      className="hidden h-[calc(100vh-2rem)] rounded-2xl border border-white/10 bg-white/[0.03] p-3 backdrop-blur-xl md:flex md:flex-col lg:w-[240px] lg:min-w-[240px] md:w-[84px] md:min-w-[84px]"
    >
      <div className="mb-6 px-2 pt-2">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-400 font-bold text-lg text-black">
          {userInitial}
        </div>
      </div>

      <ul className="space-y-2">
        {items.map((item) => {
          const Icon = item.icon;

          const isActive =
            pathname === item.href ||
            (item.href !== "/" && pathname.startsWith(item.href));

          return (
            <li key={item.id}>
              <Link
                href={item.href}
                className={cn(
                  "relative flex w-full items-center gap-3 overflow-hidden rounded-xl px-3 py-3 text-sm text-white/70 transition-colors",
                  "hover:text-white"
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-highlight"
                    className="absolute inset-0 rounded-xl bg-white/10"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 24
                    }}
                  />
                )}

                <span className="relative z-10">
                  <Icon className="h-5 w-5" />
                </span>

                <span className="relative z-10 hidden lg:inline">
                  {item.label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="mt-auto rounded-2xl border border-white/10 bg-white/5 p-3">
        <p className="hidden text-xs leading-5 text-white/60 lg:block">
          Smooth, server-rendered learning analytics with motion-first UI.
        </p>
      </div>
    </nav>
  );
}