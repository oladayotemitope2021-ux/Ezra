import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import CallToActionBlock from "@/components/CallToActionBlock";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "The Ezra Project is a Christ-centered ministry devoted to biblical teaching, gospel clarity, and the unveiling of Scripture through Christ.",
};

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />

      <section className="section-tight-top pb-10">
        <div className="container-width">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="glass-card lift-card rounded-[1.6rem] p-6">
            <p className="mb-2 text-xs uppercase tracking-[0.28em] text-[#f97316]">
              Christ at the Center
            </p>
            <p className="text-base leading-7 text-[#dbe4f0]">
              Scripture taught with Christ as its fulfillment, substance, and testimony.
            </p>
          </div>

          <div className="glass-card lift-card rounded-[1.6rem] p-6">
            <p className="mb-2 text-xs uppercase tracking-[0.28em] text-[#f97316]">
              Sound Doctrine
            </p>
            <p className="text-base leading-7 text-[#dbe4f0]">
              Teaching shaped by clarity, theological depth, and faithfulness to the text.
            </p>
          </div>

          <div className="glass-card lift-card rounded-[1.6rem] p-6">
            <p className="mb-2 text-xs uppercase tracking-[0.28em] text-[#f97316]">
              Spiritual Formation
            </p>
            <p className="text-base leading-7 text-[#dbe4f0]">
              Resources and ministry content designed to strengthen believers in truth.
            </p>
          </div>
        </div>
      </div>
      </section>

      <section className="section-padding section-divider">
        <div className="container-width fade-up grid items-start gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="section-eyebrow">Our Mission</p>
            <h2 className="section-title mb-6">
              Opening Scripture with Christ at the center
            </h2>
            <p className="section-text max-w-3xl">
              The Ezra Project exists to make the gospel clear, teach the Scriptures faithfully,
              and help believers behold the beauty, unity, and fulfillment of God’s redemptive purpose in Christ.
            </p>
          </div>

          <div className="glass-card lift-card fade-up-delay-1 rounded-[2rem] p-8">
            <div className="icon-orb mb-5">✦</div>
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#d4a44f]">
              Ministry Emphasis
            </p>

            <ul className="space-y-4 text-lg leading-8 text-[#dbe4f0]">
              <li>• Christ-centered biblical teaching</li>
              <li>• Gospel clarity and doctrinal precision</li>
              <li>• Scripture-rooted discipleship resources</li>
              <li>• Spiritual formation grounded in truth</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0 section-divider surface-panel">
        <div className="container-width">
          <SectionHeading
            eyebrow="What We Do"
            title="A ministry platform built for truth, depth, and spiritual growth"
            text="Every part of this ministry is designed to strengthen believers through sound doctrine, careful teaching, and a deeper unveiling of Christ in the Scriptures."
            className="mb-14"
          />

          <div className="grid gap-6 md:grid-cols-3">
            <div className="glass-card lift-card fade-up-delay-1 rounded-[2rem] p-8">
              <div className="icon-orb mb-5">01</div>
              <h3 className="mb-4 text-2xl font-semibold text-[#d4a44f]">
                Biblical Teaching
              </h3>
              <p className="section-text">
                Faithful exposition that opens the Word carefully, clearly, and Christologically.
              </p>
            </div>

            <div className="glass-card lift-card fade-up-delay-1 rounded-[2rem] p-8">
              <div className="icon-orb mb-5">03</div>
              <h3 className="mb-4 text-2xl font-semibold text-[#d4a44f]">
                Ministry Resources
              </h3>
              <p className="section-text">
                Articles, notes, study guides, and teaching materials that build believers in truth.
              </p>
            </div>

            <div className="glass-card lift-card fade-up-delay-1 rounded-[2rem] p-8">
              <h3 className="mb-4 text-2xl font-semibold text-[#d4a44f]">
                Spiritual Formation
              </h3>
              <p className="section-text">
                Resources and teachings that help believers mature in discernment, doctrine, and devotion.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0 section-divider surface-dark">
        <div className="container-width">
          <SectionHeading
            eyebrow="Featured Teachings"
            title="Recent ministry themes"
          />

          <div className="grid gap-6 md:grid-cols-3">
            <div className="lift-card rounded-[1.8rem] border border-white/10 bg-[#0a1122] p-8 shadow-xl">
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#d4a44f]">
                Teaching Series
              </p>
              <div className="icon-orb mb-5">A</div>
              <h3 className="mb-4 text-2xl font-semibold text-white">
                The Gospel Entered History
              </h3>
              <p className="section-text">
                Redemption revealed in time as the unfolding of God’s eternal purpose through Christ.
              </p>
            </div>

            <div className="lift-card rounded-[1.8rem] border border-white/10 bg-[#0a1122] p-8 shadow-xl">
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#d4a44f]">
                Teaching Series
              </p>
              <div className="icon-orb mb-5">B</div>
              <h3 className="mb-4 text-2xl font-semibold text-white">
                Christ Was Not Plan B
              </h3>
              <p className="section-text">
                Seeing the cross as the revelation of God’s foreordained purpose, not a divine reaction.
              </p>
            </div>

            <div className="lift-card rounded-[1.8rem] border border-white/10 bg-[#0a1122] p-8 shadow-xl">
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#d4a44f]">
                Teaching Series
              </p>
              <div className="icon-orb mb-5">C</div>
              <h3 className="mb-4 text-2xl font-semibold text-white">
                Christ in All Scripture
              </h3>
              <p className="section-text">
                Tracing the unified testimony of Scripture as it progressively reveals the Son.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-width">
          <div className="rounded-[2.2rem] border border-[#d4a44f]/15 bg-[linear-gradient(135deg,rgba(212,164,79,0.08),rgba(14,21,41,0.9),rgba(10,17,34,0.96))] px-8 py-12 md:px-12 md:py-16">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#f97316]">
              Scripture Focus
            </p>

            <blockquote className="max-w-4xl text-3xl font-semibold leading-tight text-white md:text-5xl">
              “And beginning with Moses and all the Prophets, He interpreted to them in all the Scriptures the things concerning Himself.”
            </blockquote>

            <p className="mt-6 text-base uppercase tracking-[0.28em] text-[#d4a44f]">
              Luke 24:27
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0 section-divider surface-panel">
        <div className="container-width">
          <SectionHeading
            eyebrow="Ministry Resources"
            title="Built to nourish understanding, conviction, and growth"
            text="The Ezra Project is being shaped as a home for teachings, written resources, study materials, and ministry tools that help believers grow in truth and behold Christ in Scripture."
            className="mb-14"
          />

          <div className="grid gap-6 md:grid-cols-2">
            <div className="glass-card lift-card rounded-[2rem] p-8 md:p-10">
              <div className="icon-orb mb-5">R</div>
              <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#f97316]">
                Resources
              </p>
              <h2 className="mb-4 text-3xl font-semibold text-white md:text-4xl">
                Truth-rich ministry resources for believers
              </h2>
              <p className="section-text">
                The Ezra Project will host articles, study outlines, devotionals, and ministry materials
                that help believers understand Scripture more clearly and grow in maturity.
              </p>
            </div>

            <div className="lift-card rounded-[2rem] border border-[#d4a44f]/15 bg-[linear-gradient(135deg,#0f172a,#111827,#0b1020)] p-8 md:p-10">
              <div className="icon-orb mb-5">✦</div>
              <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#d4a44f]">
                Stay Connected
              </p>
              <h2 className="mb-4 text-3xl font-semibold text-white md:text-4xl">
                Receive teachings, resources, and ministry updates
              </h2>
              <p className="mb-8 section-text">
                As the ministry grows, this platform will become a home for sound teaching,
                gospel-centered writing, and materials designed to strengthen believers in truth.
            </p>

            <a
              href="/contact"
              className="premium-button inline-block rounded-2xl bg-[#d4a44f] px-7 py-4 text-base font-semibold text-[#0b1020]"
            >
              Contact The Ministry
            </a>
          </div>
        </div>
      </div>
      </section>

      <footer className="border-t border-white/10 py-14">
        <div className="container-width grid gap-12 md:grid-cols-[1.15fr_0.85fr]">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#d4a44f]">
              The Ezra Project
            </p>

            <h3 className="mb-4 text-3xl font-semibold text-white">
              Scripture. Gospel. Christ.
            </h3>

            <p className="max-w-2xl text-base leading-8 text-[#aeb8c9]">
              A Christ-centered ministry devoted to faithful biblical teaching, gospel clarity,
              and the unveiling of God’s eternal purpose in Christ through Scripture.
            </p>

            <div className="gold-line mt-8 max-w-md" />
          </div>

          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#f97316]">
                Explore
              </p>

              <div className="flex flex-col gap-3 text-[#dbe4f0]">
                <a href="/about" className="footer-link">About</a>
                <a href="/teachings" className="footer-link">Teachings</a>
                <a href="/resources" className="footer-link">Resources</a>
                <a href="/contact" className="footer-link">Contact</a>
              </div>
            </div>

            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#f97316]">
                Ministry Contact
              </p>

              <div className="flex flex-col gap-3 text-[#dbe4f0]">
                <p>oladayotemitope2021@gmail.com</p>
                <p>Teaching Invitations</p>
                <p>Partnership Enquiries</p>
                <p>Ministry Correspondence</p>
              </div>
            </div>
          </div>  
        </div>

        <div className="container-width mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-[#94a3b8] md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-6">
            <p>© 2026 The Ezra Project. All rights reserved.</p>
            <span className="hidden h-1 w-1 rounded-full bg-[#d4a44f]/50 md:block" />
            <p>Built for biblical depth and gospel clarity.</p>
          </div>

          <p className="text-[#d4a44f]/80">Christ at the center of all Scripture.</p>
        </div>
      </footer>
    </main>
  );
}