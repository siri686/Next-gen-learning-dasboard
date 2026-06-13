"use client";

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  console.error(error);

  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <section className="w-full max-w-md rounded-2xl border border-red-500/20 bg-red-500/10 p-6 text-white">
        <h1 className="text-xl font-semibold">Unable to load dashboard</h1>
        <p className="mt-2 text-sm text-white/75">
          The database connection failed or the data could not be fetched.
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-4 rounded-xl bg-white px-4 py-2 text-sm font-medium text-black"
        >
          Try again
        </button>
      </section>
    </main>
  );
}
