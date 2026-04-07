import CallToActionBlock from "@/components/CallToActionBlock";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about The Ezra Project, its vision, mission, ministry commitments, and Christ-centered teaching burden.",
};

export default function AboutPage() {
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
            About The Ezra Project
          </p>

          <h1 className="mb-6 max-w-4xl text-5xl font-semibold leading-[0.95] text-white md:text-7xl">
            A ministry of Scripture,
            <span className="block text-[#d4a44f]">clarity, and Christ.</span>
          </h1>

          <p className="max-w-4xl text-lg leading-9 text-[#dbe4f0] md:text-xl">
            The Ezra Project is a Christ-centered ministry devoted to the faithful teaching
            of Scripture, the clarity of the gospel, and the unveiling of God’s eternal
            purpose in Christ. We exist to help believers grow in truth, see Christ in all
            Scripture, and be established in sound doctrine.
          </p>
        </div>
      </section>

      <section className="section-padding section-divider">
        <div className="container-width grid gap-6 md:grid-cols-3">
          <div className="glass-card lift-card rounded-[1.8rem] p-8">
            <div className="icon-orb mb-5">01</div>
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#f97316]">
              Vision
            </p>
            <h2 className="mb-4 text-2xl font-semibold text-white">
              Christ revealed clearly
            </h2>
            <p className="section-text">
              To see believers grounded in the knowledge of Christ and established in the
              truth of Scripture.
            </p>
          </div>

          <div className="glass-card lift-card rounded-[1.8rem] p-8">
            <div className="icon-orb mb-5">02</div>
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#f97316]">
              Mission
            </p>
            <h2 className="mb-4 text-2xl font-semibold text-white">
              Scripture opened faithfully
            </h2>
            <p className="section-text">
              To teach the Bible with Christ at the center and provide resources that build
              believers in truth and gospel understanding.
            </p>
          </div>

          <div className="glass-card lift-card rounded-[1.8rem] p-8">
            <div className="icon-orb mb-5">03</div>
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#f97316]">
              Burden
            </p>
            <h2 className="mb-4 text-2xl font-semibold text-white">
              Gospel clarity restored
            </h2>
            <p className="section-text">
              To help people move beyond shallow Christianity into clear, biblical,
              and Christ-exalting understanding.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0 section-divider">
        <div className="container-width grid items-start gap-10 md:grid-cols-[1.05fr_0.95fr]">
          <div className="fade-up">
            <p className="section-eyebrow">Why Ezra?</p>
            <h2 className="section-title mb-6">
              A ministry of Scripture, understanding, and faithfulness
            </h2>
            <p className="section-text mb-5">
              Ezra stands in Scripture as one devoted to the study, understanding,
              and teaching of the Word of God. That burden shapes this ministry.
            </p>
            <p className="section-text">
              The Ezra Project is built on the conviction that God’s people must not only
              hear Scripture, but understand it rightly, see Christ within it, and be
              transformed by its truth.
            </p>
          </div>

          <div className="glass-card lift-card fade-up-delay-1 rounded-[2rem] p-8 md:p-10">
            <div className="icon-orb mb-5">✦</div>
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#d4a44f]">
              Ministry Commitments
            </p>

            <ul className="space-y-4 text-lg leading-8 text-[#dbe4f0]">
              <li>• Faithful Bible exposition</li>
              <li>• Christ-centered interpretation of Scripture</li>
              <li>• Sound doctrine without compromise</li>
              <li>• Teaching that strengthens spiritual growth</li>
              <li>• Resources for discipleship and maturity</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-width">
          <div className="rounded-[2.2rem] border border-[#d4a44f]/15 bg-[linear-gradient(135deg,rgba(212,164,79,0.08),rgba(14,21,41,0.9),rgba(10,17,34,0.96))] px-8 py-12 md:px-12 md:py-16">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#f97316]">
              Ministry Conviction
            </p>

            <blockquote className="max-w-4xl text-3xl font-semibold leading-tight text-white md:text-5xl">
              God’s people must not only hear the Scriptures, but understand them rightly and behold Christ within them.
            </blockquote>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-width">
          <CallToActionBlock
            eyebrow="Contact"
            title="Connect with The Ezra Project"
            text="For ministry enquiries, invitations, collaboration, or teaching requests, reach out through the contact page."
            buttonText="Go to Contact Page"
            buttonHref="/contact"
          />
        </div>
      </section>
    </main>
  );
}