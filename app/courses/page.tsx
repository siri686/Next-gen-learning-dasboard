import { Sidebar } from "@/components/navigation/sidebar";
import { BottomNav } from "@/components/navigation/bottom-nav";

export default function CoursesPage() {
  const courses = [
    {
      title: "Advanced React Patterns",
      progress: 75,
      level: "Advanced",
    },
    {
      title: "TypeScript for Scalable Apps",
      progress: 58,
      level: "Intermediate",
    },
    {
      title: "UI Motion Systems",
      progress: 88,
      level: "Advanced",
    },
    {
      title: "Data Visualization Basics",
      progress: 42,
      level: "Beginner",
    },
  ];

  return (
    <>
      <main className="min-h-screen p-4 pb-24 md:p-6 md:pb-6">
        <div className="mx-auto flex max-w-7xl gap-4">
          <Sidebar />

          <section className="flex-1">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-white">
                My Courses
              </h1>

              <p className="mt-2 text-white/60">
                Track your progress and continue learning.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {courses.map((course) => (
                <div
                  key={course.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400">
                      {course.level}
                    </span>

                    <span className="text-sm text-white/60">
                      {course.progress}%
                    </span>
                  </div>

                  <h2 className="mb-4 text-xl font-semibold text-white">
                    {course.title}
                  </h2>

                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-400"
                      style={{
                        width: `${course.progress}%`,
                      }}
                    />
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    <p className="text-sm text-white/50">
                      Learning Progress
                    </p>

                    <button className="rounded-xl bg-gradient-to-r from-violet-500 to-cyan-400 px-4 py-2 text-sm font-semibold text-black">
                      Continue
                    </button>
                  </div>
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