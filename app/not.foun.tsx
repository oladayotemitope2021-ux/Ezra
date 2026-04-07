import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function NotFoundPage() {
  return (
    <main>
      <Navbar />

      <section className="premium-grid relative overflow-hidden section-padding">
        <div className="absolute inset-0">
          <div className="absolute left-[-8%] top-16 h-72 w-72 rounded-full bg-[#d4a44f]/12 blur-3xl" />
          <div className="absolute bottom-0 right-[-6%] h-80 w-80 rounded-full bg-[#f97316]/8 blur-3xl" />
        </div>

        <div className="container-width relative z-10 max-w-5xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-[#d4a44f]">
            Page Not Found
          </p>

          <h1 className="mb-6 text-6xl font-semibold leading-[0.95] text-white md:text-8xl">
            404
          </h1>

          <h2 className="mb-6 text-4xl font-semibold text-white md:text-5xl">
            This page could not be found
          </h2>

          <p className="mx-auto mb-10 max-w-3xl text-lg leading-9 text-[#dbe4f0] md:text-xl">
            The page you are looking for may have been moved, renamed, or does not exist.
            Return to the homepage or continue exploring the ministry.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="premium-button rounded-2xl bg-[#d4a44f] px-7 py-4 text-base font-semibold text-[#0b1020]"
            >
              Go Home
            </Link>

            <Link
              href="/teachings"
              className="premium-button rounded-2xl border border-[#d4a44f]/30 px-7 py-4 text-base font-semibold text-[#f8fafc] hover:border-[#d4a44f] hover:text-[#d4a44f]"
            >
              Explore Teachings
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}