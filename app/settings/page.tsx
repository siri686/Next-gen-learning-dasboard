import { Sidebar } from "@/components/navigation/sidebar";
import { BottomNav } from "@/components/navigation/bottom-nav";

export default function SettingsPage() {
  return (
    <>
      <main className="min-h-screen p-4 pb-24 md:p-6 md:pb-6">
        <div className="mx-auto flex max-w-7xl gap-4">
          <Sidebar />

          <section className="flex-1">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-white">
                Settings
              </h1>

              <p className="mt-2 text-white/60">
                Customize your dashboard experience.
              </p>
            </div>

            <div className="space-y-6">
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
                <h2 className="mb-4 text-xl font-semibold text-white">
                  Appearance
                </h2>

                <button className="rounded-xl bg-gradient-to-r from-violet-500 to-cyan-400 px-4 py-2 font-semibold text-black">
                  Toggle Theme
                </button>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
                <h2 className="mb-4 text-xl font-semibold text-white">
                  Notifications
                </h2>

                <button className="rounded-xl border border-white/20 px-4 py-2 text-white">
                  Enable Notifications
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>

      <BottomNav />
    </>
  );
}