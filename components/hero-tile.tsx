import { Flame, Sparkles } from "lucide-react";
import { CardShell } from "@/components/ui/card-shell";

export function HeroTile() {
  return (
    <CardShell className="min-h-[220px] lg:col-span-2">
      <section className="flex h-full flex-col justify-between">
        <div className="flex items-center gap-2 text-sm text-white/70">
          <Sparkles className="h-4 w-4 text-cyan-400" />
          Personalized learning dashboard
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Welcome back, Alex
          </h1>
          <p className="max-w-xl text-sm leading-6 text-white/65 sm:text-base">
            You're building momentum. Pick up where you left off and keep your
            learning streak alive today.
          </p>
        </div>

        <div className="flex w-fit items-center gap-3 rounded-full border border-orange-400/20 bg-orange-400/10 px-4 py-2 text-sm text-orange-200">
          <Flame className="h-4 w-4 text-orange-400" />
          12-day learning streak
        </div>
      </section>
    </CardShell>
  );
}
