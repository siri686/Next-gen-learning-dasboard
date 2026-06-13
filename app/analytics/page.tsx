import { Sidebar } from "@/components/navigation/sidebar";
import { BottomNav } from "@/components/navigation/bottom-nav";

export default function AnalyticsPage() {
  const stats = [
    { title: "Courses Completed", value: "4" },
    { title: "Average Progress", value: "65%" },
    { title: "Learning Streak", value: "12 Days" },
    { title: "Hours Learned", value: "48h" }
  ];

  return (
    <>
      <main className="min-h-screen p-4 pb-24 md:p-6 md:pb-6">
        <div className="mx-auto flex max-w-7xl gap-4">
          <Sidebar />

          <section className="flex-1">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-white">
                Analytics
              </h1>

              <p className="mt-2 text-white/60">
                Track your learning performance.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
                >
                  <p className="text-white/60">{stat.title}</p>

                  <h2 className="mt-3 text-3xl font-bold text-white">
                    {stat.value}
                  </h2>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <BottomNav />
    </>
  );
}