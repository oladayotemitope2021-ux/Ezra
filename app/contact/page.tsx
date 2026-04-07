import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact The Ezra Project for ministry invitations, teaching enquiries, partnerships, and collaboration.",
};

export default function ContactPage() {
  return (
    <main>
      <Navbar />

      <section className="premium-grid relative overflow-hidden section-padding">
        <div className="absolute inset-0">
          <div className="absolute left-[-8%] top-16 h-72 w-72 rounded-full bg-[#d4a44f]/10 blur-3xl" />
          <div className="absolute bottom-0 right-[-6%] h-80 w-80 rounded-full bg-[#f97316]/10 blur-3xl" />
        </div>

        <div className="container-width relative z-10 max-w-6xl">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-[#d4a44f]">
            Contact The Ezra Project
          </p>

          <h1 className="mb-6 max-w-4xl text-5xl font-semibold leading-[0.95] text-white md:text-7xl">
            Let’s connect for
            <span className="block text-[#d4a44f]">ministry and truth.</span>
          </h1>

          <p className="max-w-4xl text-lg leading-9 text-[#dbe4f0] md:text-xl">
            Reach out for ministry invitations, teaching enquiries, partnerships,
            collaboration, or general communication with The Ezra Project.
          </p>
        </div>
      </section>

      <section className="section-padding section-divider">
        <div className="container-width grid gap-6 md:grid-cols-3">
          <div className="glass-card lift-card rounded-[1.8rem] p-8">
            <div className="icon-orb mb-5">01</div>
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#f97316]">
              Email
            </p>
            <h2 className="mb-4 text-2xl font-semibold text-white">
              Ministry correspondence
            </h2>
            <p className="section-text">hello@theezraproject.org</p>
          </div>

          <div className="glass-card lift-card rounded-[1.8rem] p-8">
            <div className="icon-orb mb-5">02</div>
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#f97316]">
              Enquiries
            </p>
            <h2 className="mb-4 text-2xl font-semibold text-white">
              Invitations and collaborations
            </h2>
            <p className="section-text">
              Teaching requests, ministry invitations, partnerships, and collaboration opportunities.
            </p>
          </div>

          <div className="glass-card lift-card rounded-[1.8rem] p-8">
            <div className="icon-orb mb-5">03</div>
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#f97316]">
              Response
            </p>
            <h2 className="mb-4 text-2xl font-semibold text-white">
              We value meaningful contact
            </h2>
            <p className="section-text">
              As the ministry grows, this page will also support direct forms, updates, and communication channels.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0 section-divider">
        <div className="container-width grid items-start gap-10 md:grid-cols-[0.95fr_1.05fr]">
          <div className="fade-up">
            <p className="section-eyebrow">Get In Touch</p>
            <h2 className="section-title mb-6">
              Reach out with clarity and purpose
            </h2>
            <p className="section-text mb-5">
              The Ezra Project welcomes communication that aligns with the work of
              biblical teaching, discipleship, gospel clarity, and Christ-centered ministry.
            </p>
            <p className="section-text">
              Whether you are making an enquiry, inviting the ministry, or seeking
              partnership, we would be glad to hear from you.
            </p>
          </div>

          <div className="glass-card lift-card fade-up-delay-1 rounded-[2rem] p-8 md:p-10">
            <div className="icon-orb mb-5">✦</div>
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#d4a44f]">
              Contact Information
            </p>

            <div className="space-y-6 text-lg text-[#dbe4f0]">
              <div>
                <p className="mb-1 text-sm uppercase tracking-[0.25em] text-[#f97316]">
                  Email
                </p>
                <p>hello@theezraproject.org</p>
              </div>

              <div>
                <p className="mb-1 text-sm uppercase tracking-[0.25em] text-[#f97316]">
                  Ministry Focus
                </p>
                <p>Biblical teaching, discipleship, and gospel-centered resources</p>
              </div>

              <div>
                <p className="mb-1 text-sm uppercase tracking-[0.25em] text-[#f97316]">
                  Best For
                </p>
                <p>Teaching invitations, ministry enquiries, partnerships, and collaboration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-width grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2.2rem] border border-[#d4a44f]/15 bg-[linear-gradient(135deg,rgba(212,164,79,0.08),rgba(14,21,41,0.9),rgba(10,17,34,0.96))] px-8 py-12 md:px-12 md:py-16">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#f97316]">
              Ministry Note
            </p>

            <blockquote className="max-w-3xl text-3xl font-semibold leading-tight text-white md:text-5xl">
              We believe ministry communication should serve truth, clarity, and the strengthening of God’s people.
            </blockquote>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="detail-chip">Teaching Invitations</span>
              <span className="detail-chip">Partnership Enquiries</span>
              <span className="detail-chip">Ministry Correspondence</span>
            </div>
          </div>

          <div className="glass-card lift-card rounded-[2.2rem] p-8 md:p-10">
            <div className="icon-orb mb-5">✦</div>
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#d4a44f]">
              Send an Enquiry
            </p>

            <h2 className="mb-6 text-3xl font-semibold text-white md:text-4xl">
              Start the conversation clearly
            </h2>

            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}