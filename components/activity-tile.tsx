import { CardShell } from "@/components/ui/card-shell";

const bars = [40, 65, 35, 75, 90, 55, 70, 45, 80, 60, 95, 50];

export function ActivityTile() {
  return (
    <CardShell className="min-h-[220px]">
      <section className="flex h-full flex-col">
        <div className="mb-5">
          <h2 className="text-lg font-medium">Learning Activity</h2>
          <p className="mt-1 text-sm text-white/60">
            Weekly contribution snapshot
          </p>
        </div>

        <div className="mt-auto flex items-end gap-2">
          {bars.map((height, index) => (
            <div
              key={index}
              className="flex-1 rounded-md bg-white/5 p-[2px]"
              aria-hidden="true"
            >
              <div
                className="w-full rounded-md bg-gradient-to-t from-violet-500/70 to-cyan-400/80"
                style={{ height: `${height * 1.2}px` }}
              />
            </div>
          ))}
        </div>
      </section>
    </CardShell>
  );
}
