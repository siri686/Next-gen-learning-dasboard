export const dynamic = "force-dynamic";
import { Suspense } from "react";
import { BottomNav } from "@/components/navigation/bottom-nav";
import { Sidebar } from "@/components/navigation/sidebar";
import { LoadingSkeleton } from "@/components/loading-skeleton";
import { BentoGrid } from "@/components/bento-grid";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import type { Course } from "@/lib/supabase/types";

async function DashboardContent() {
  const { createSupabaseServerClient } = await import("@/lib/supabase/server");

  const supabase = createSupabaseServerClient();

  const { data, error } = await supabase
    .from("courses")
    .select("id, title, progress, icon_name, created_at")
    .order("created_at", { ascending: true });

  if (error) {
    throw new Error(error.message);
  }

  return <BentoGrid courses={data as Course[]} />;
}

export default function HomePage() {
  return (
    <>
      <main className="min-h-screen p-4 pb-24 md:p-6 md:pb-6">
        <div className="mx-auto flex max-w-7xl gap-4">
          <Sidebar />

          <section className="flex-1">
            <Suspense fallback={<LoadingSkeleton />}>
              <DashboardContent />
            </Suspense>
          </section>
        </div>
      </main>

      <BottomNav />
    </>
  );
}