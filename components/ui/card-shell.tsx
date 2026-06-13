import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CardShellProps {
  children: ReactNode;
  className?: string;
}

export function CardShell({ children, className }: CardShellProps) {
  return (
    <article
      className={cn(
        "bg-grain glass-panel relative overflow-hidden rounded-2xl p-5 shadow-soft",
        "before:pointer-events-none before:absolute before:inset-0 before:bg-mesh-dark before:opacity-100",
        className
      )}
    >
      <div className="relative z-10 h-full">{children}</div>
    </article>
  );
}
