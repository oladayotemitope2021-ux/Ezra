import Navbar from "@/components/Navbar";
import { resources } from "@/data/resources";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Browse ministry resources from The Ezra Project, including articles, study notes, and materials for spiritual growth.",
};

export default function ResourcesPage() {
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
            Ministry Resources
          </p>

          <h1 className="mb-6 max-w-4xl text-5xl font-semibold leading-[0.95] text-white md:text-7xl">
            Resources shaped for
            <span className="block text-[#d4a44f]">understanding and growth.</span>
          </h1>

          <p className="max-w-4xl text-lg leading-9 text-[#dbe4f0] md:text-xl">
            Articles, study notes, devotionals, and ministry materials that help believers
            grow in truth, conviction, and Christ-centered understanding.
          </p>
        </div>
      </section>

      <section className="section-padding section-divider">
        <div className="container-width">
          <div className="mb-12 max-w-3xl fade-up">
            <p className="section-eyebrow">Resource Streams</p>
            <h2 className="section-title mb-5">
              Built to support study, conviction, and spiritual maturity
            </h2>
            <p className="section-text">
              The Ezra Project is being built as a ministry library of carefully shaped
              resources that strengthen believers in understanding and help them handle Scripture rightly.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {resources.map((resource, index) => (
              <Link
                key={resource.slug}
                href={`/resources/${resource.slug}`}
                className="glass-card lift-card rounded-[1.8rem] p-8"
              >
                <div className="icon-orb mb-5">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#f97316]">
                  {resource.category}
                </p>
                <h2 className="mb-4 text-2xl font-semibold text-white">
                  {resource.title}
                </h2>
                <p className="section-text">
                  {resource.summary}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding pt-0 section-divider">
        <div className="container-width grid items-start gap-10 md:grid-cols-[0.95fr_1.05fr]">
          <div className="fade-up">
            <p className="section-eyebrow">Resource Purpose</p>
            <h2 className="section-title mb-6">
              Resources that do more than inform
            </h2>
            <p className="section-text mb-5">
              Christian resources should not merely fill the mind with content.
              They should clarify the gospel, strengthen understanding, and build believers in maturity.
            </p>
            <p className="section-text">
              The Ezra Project aims to provide materials that help believers read Scripture well,
              think doctrinally, and behold Christ more clearly.
            </p>
          </div>

          <div className="glass-card lift-card fade-up-delay-1 rounded-[2rem] p-8 md:p-10">
            <div className="icon-orb mb-5">✦</div>
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#d4a44f]">
              Resource Commitments
            </p>

            <ul className="space-y-4 text-lg leading-8 text-[#dbe4f0]">
              <li>• Clarity in doctrine and gospel truth</li>
              <li>• Faithfulness to Scripture</li>
              <li>• Christ-centered insight</li>
              <li>• Depth without confusion</li>
              <li>• Practical help for growth and study</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-width">
          <div className="rounded-[2.2rem] border border-[#d4a44f]/15 bg-[linear-gradient(135deg,rgba(212,164,79,0.08),rgba(14,21,41,0.9),rgba(10,17,34,0.96))] px-8 py-12 md:px-12 md:py-16">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#f97316]">
              Ministry Aim
            </p>

            <blockquote className="max-w-4xl text-3xl font-semibold leading-tight text-white md:text-5xl">
              Strong resources help believers read the Bible more faithfully, think more clearly, and grow more deeply in Christ.
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  );
}