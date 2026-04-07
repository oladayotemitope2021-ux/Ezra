import Navbar from "@/components/Navbar";
import { teachings } from "@/data/teachings";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teachings",
  description:
    "Explore biblical teachings from The Ezra Project centered on Christ, redemption, Scripture, and gospel clarity.",
};

export default function TeachingsPage() {
  return (
    <main>
      <Navbar />

      <section className="premium-grid relative overflow-hidden section-padding">
        <div className="absolute inset-0">
          <div className="absolute left-[-8%] top-16 h-72 w-72 rounded-full bg-[#d4a44f]/10 blur-3xl" />
          <div className="absolute bottom-0 right-[-6%] h-80 w-80 rounded-full bg-[#f97316]/8 blur-3xl" />
        </div>

        <div className="container-width relative z-10 max-w-6xl">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-[#d4a44f]">
            Biblical Teachings
          </p>

          <h1 className="mb-6 max-w-4xl text-5xl font-semibold leading-[0.95] text-white md:text-7xl">
            Teachings that unveil
            <span className="block text-[#d4a44f]">Christ in Scripture.</span>
          </h1>

          <p className="max-w-4xl text-lg leading-9 text-[#dbe4f0] md:text-xl">
            Explore ministry teachings centered on Christ, redemption, Scripture,
            and the gospel revealed through the whole counsel of God.
          </p>
        </div>
      </section>

      <section className="section-padding section-divider">
        <div className="container-width">
          <div className="mb-12 max-w-3xl fade-up">
            <p className="section-eyebrow">Featured Series</p>
            <h2 className="section-title mb-5">
              Teaching streams shaped by gospel clarity and biblical depth
            </h2>
            <p className="section-text">
              The Ezra Project is committed to teaching that does not merely inform,
              but unveils Christ, strengthens conviction, and forms believers in truth.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {teachings.map((teaching, index) => (
              <Link
                key={teaching.slug}
                href={`/teachings/${teaching.slug}`}
                className="lift-card rounded-[1.8rem] border border-white/10 bg-[#0a1122] p-8 shadow-xl"
              >
                <div className="icon-orb mb-5">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#d4a44f]">
                  {teaching.category}
                </p>
                <h3 className="mb-4 text-2xl font-semibold text-white">
                  {teaching.title}
              </h3>
                <p className="section-text">
                  {teaching.summary}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding pt-0 section-divider">
        <div className="container-width grid items-start gap-10 md:grid-cols-[1.05fr_0.95fr]">
          <div className="fade-up">
            <p className="section-eyebrow">Teaching Burden</p>
            <h2 className="section-title mb-6">
              Teaching that forms believers in understanding and truth
            </h2>
            <p className="section-text mb-5">
              Sound teaching is not merely the transfer of information.
              It is the opening of Scripture in such a way that believers behold Christ,
              grow in discernment, and stand firm in truth.
            </p>
            <p className="section-text">
              The Ezra Project seeks to build believers through careful exposition,
              theological clarity, and Christ-centered interpretation.
            </p>
          </div>

          <div className="glass-card lift-card fade-up-delay-1 rounded-[2rem] p-8 md:p-10">
            <div className="icon-orb mb-5">✦</div>
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#d4a44f]">
              Teaching Distinctives
            </p>

            <ul className="space-y-4 text-lg leading-8 text-[#dbe4f0]">
              <li>• Christ-centered interpretation</li>
              <li>• Scripture opened in context</li>
              <li>• Doctrinal clarity without compromise</li>
              <li>• Redemption traced through all Scripture</li>
              <li>• Teaching for spiritual maturity</li>
            </ul>
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
              The whole testimony of Scripture moves toward Christ and finds its fulfillment in Him.
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  );
}