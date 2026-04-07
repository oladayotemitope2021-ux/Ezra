export default function Loading() {
  return (
    <main className="min-h-screen bg-[linear-gradient(135deg,#040712_0%,#081020_45%,#0a1226_100%)] text-white">
      <div className="container-width flex min-h-screen flex-col items-center justify-center">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[#d4a44f]/20 bg-white/5">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#d4a44f]/30 border-t-[#d4a44f]" />
        </div>

        <p className="mb-2 text-sm uppercase tracking-[0.35em] text-[#d4a44f]">
          The Ezra Project
        </p>

        <p className="text-base text-[#dbe4f0]">
          Loading...
        </p>
      </div>
    </main>
  );
}