import Link from "next/link";

export default function Hero() {
  return (
    <section className="premium-grid relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute left-[-8%] top-16 h-72 w-72 rounded-full bg-[#d4a44f]/15 blur-3xl" />
        <div className="absolute bottom-0 right-[-6%] h-80 w-80 rounded-full bg-[#f97316]/10 blur-3xl" />
        <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-white/[0.03] blur-3xl" />
      </div>

      <div className="container-width relative z-10 grid min-h-[94vh] items-center gap-14 py-24 md:grid-cols-[1.08fr_0.92fr]">
        <div className="fade-up">
          <p className="mb-5 text-sm uppercase tracking-[0.42em] text-[#d4a44f]">
            The Ezra Project
          </p>

          <h1 className="mb-6 max-w-5xl text-5xl font-semibold leading-[0.93] text-[#f8fafc] md:text-7xl xl:text-[5.8rem]">
            Scripture Opened.
            <span className="block text-[#d4a44f]">Christ Revealed.</span>
          </h1>

          <p className="mb-10 max-w-2xl text-lg leading-9 text-[#dbe4f0] md:text-xl">
            A Christ-centered ministry devoted to biblical teaching, gospel clarity,
            and the faithful unveiling of God’s eternal purpose in Christ through the whole counsel of Scripture.
          </p>

          <div className="mb-10 flex flex-wrap gap-4">
            <Link
              href="/teachings"
              className="premium-button rounded-2xl bg-[#d4a44f] px-7 py-4 text-base font-semibold text-[#0b1020]"
            >
              Explore Teachings
            </Link>

            <Link
              href="/about"
              className="premium-button rounded-2xl border border-[#d4a44f]/30 px-7 py-4 text-base font-semibold text-[#f8fafc] hover:border-[#d4a44f] hover:text-[#d4a44f]"
            >
              Learn More
            </Link>
          </div>
          <div className="mb-6 flex flex-wrap gap-3">
            <span className="detail-chip">Christ-centered Teaching</span>
            <span className="detail-chip">Doctrinal Clarity</span>
            <span className="detail-chip">Scriptural Depth</span>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 xl:max-w-4xl">
            <div className="glass-card soft-outline lift-card rounded-[1.4rem] p-5">
              <p className="mb-2 text-xs uppercase tracking-[0.28em] text-[#f97316]">
                Focus
              </p>
              <p className="text-base leading-7 text-[#dbe4f0]">
                Biblical teaching with Christ at the center
              </p>
            </div>

            <div className="glass-card soft-outline lift-card rounded-[1.4rem] p-5">
              <p className="mb-2 text-xs uppercase tracking-[0.28em] text-[#f97316]">
                Burden
              </p>
              <p className="text-base leading-7 text-[#dbe4f0]">
                Gospel clarity and sound doctrine for believers
              </p>
            </div>

            <div className="glass-card soft-outline lift-card rounded-[1.4rem] p-5">
              <p className="mb-2 text-xs uppercase tracking-[0.28em] text-[#f97316]">
                Aim
              </p>
              <p className="text-base leading-7 text-[#dbe4f0]">
                Seeing Christ in all Scripture and growing in truth
              </p>
            </div>
          </div>
        </div>

        <div className="fade-up-delay-1 space-y-6">
          <div className="glass-card rounded-[2rem] p-8 md:p-10">
            <div className="gold-line mb-6" />

            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#f97316]">
              Central Truth
            </p>

            <h2 className="mb-5 text-3xl font-semibold leading-[1.02] text-white md:text-4xl">
              The gospel was purposed in eternity and unveiled in history
            </h2>

            <p className="mb-5 text-lg leading-8 text-[#dbe4f0]">
              Christ did not emerge as a response to man’s failure.
            </p>

            <p className="text-lg leading-8 text-[#dbe4f0]">
              What God ordained before the ages, He revealed in time through the Son.
              Scripture is one unfolding testimony of redemption moving steadily toward Christ.
            </p>

            <div className="gold-line mt-6" />
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="lift-card rounded-[1.7rem] border border-white/10 bg-[#0a1122] p-6 shadow-xl">
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#d4a44f]">
                Key Texts
              </p>
              <div className="space-y-3 text-base leading-7 text-[#dbe4f0]">
                <p>Galatians 4:4–5</p>
                <p>Luke 24:25–27</p>
                <p>Ephesians 1:9–10</p>
              </div>
            </div>

            <div className="lift-card rounded-[1.7rem] border border-white/10 bg-[#0a1122] p-6 shadow-xl">
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#d4a44f]">
                Ministry Emphasis
              </p>
              <div className="space-y-3 text-base leading-7 text-[#dbe4f0]">
                <p>Christ-centered teaching</p>
                <p>Doctrinal precision</p>
                <p>Scriptural understanding</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}