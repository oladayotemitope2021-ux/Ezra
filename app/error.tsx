"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  console.error(error);

  return (
    <html>
      <body className="bg-[linear-gradient(135deg,#040712_0%,#081020_45%,#0a1226_100%)] text-white">
        <main className="container-width flex min-h-screen flex-col items-center justify-center text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#d4a44f]">
            Something Went Wrong
          </p>

          <h1 className="mb-6 text-4xl font-semibold md:text-6xl">
            An unexpected error occurred
          </h1>

          <p className="mb-8 max-w-2xl text-lg leading-8 text-[#dbe4f0]">
            Please try again. If the issue continues, refresh the page or return to the homepage.
          </p>

          <button
            onClick={reset}
            className="premium-button rounded-2xl bg-[#d4a44f] px-7 py-4 text-base font-semibold text-[#0b1020]"
          >
            Try Again
          </button>
        </main>
      </body>
    </html>
  );
}