import { Sidebar } from "@/components/navigation/sidebar";
import { BottomNav } from "@/components/navigation/bottom-nav";

export default function ProfilePage() {
  return (
    <>
      <main className="min-h-screen p-4 pb-24 md:p-6 md:pb-6">
        <div className="mx-auto flex max-w-7xl gap-4">
          <Sidebar />

          <section className="flex-1">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-white">
                Profile
              </h1>

              <p className="mt-2 text-white/60">
                Manage your learner profile.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 text-2xl font-bold text-black">
                  A
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-white">
                    Alex Johnson
                  </h2>

                  <p className="text-white/60">
                    alex@example.com
                  </p>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl bg-white/5 p-4">
                  <p className="text-white/60">Courses Enrolled</p>
                  <h3 className="mt-2 text-2xl font-bold text-white">
                    4
                  </h3>
                </div>

                <div className="rounded-2xl bg-white/5 p-4">
                  <p className="text-white/60">Learning Streak</p>
                  <h3 className="mt-2 text-2xl font-bold text-white">
                    12 Days
                  </h3>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <BottomNav />
    </>
  );
}