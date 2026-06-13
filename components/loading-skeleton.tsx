export function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
      <div className="animated-pulse-soft min-h-[220px] rounded-2xl border border-white/10 bg-white/5 md:col-span-2" />
      <div className="animated-pulse-soft min-h-[220px] rounded-2xl border border-white/10 bg-white/5" />
      <div className="animated-pulse-soft min-h-[180px] rounded-2xl border border-white/10 bg-white/5" />
      <div className="animated-pulse-soft min-h-[180px] rounded-2xl border border-white/10 bg-white/5" />
      <div className="animated-pulse-soft min-h-[180px] rounded-2xl border border-white/10 bg-white/5" />
      <div className="animated-pulse-soft min-h-[180px] rounded-2xl border border-white/10 bg-white/5" />
    </div>
  );
}
