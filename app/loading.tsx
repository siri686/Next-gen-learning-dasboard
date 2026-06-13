import { LoadingSkeleton } from "@/components/loading-skeleton";

export default function Loading() {
  return (
    <main className="min-h-screen p-4 md:p-6">
      <div className="mx-auto flex max-w-7xl gap-4">
        <div className="hidden h-[calc(100vh-2rem)] w-[84px] rounded-2xl border border-white/10 bg-white/5 md:block lg:w-[240px]" />
        <section className="flex-1">
          <LoadingSkeleton />
        </section>
      </div>
    </main>
  );
}
