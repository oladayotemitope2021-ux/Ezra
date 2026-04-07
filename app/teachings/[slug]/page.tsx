import Navbar from "@/components/Navbar";
import { teachings } from "@/data/teachings";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const teaching = teachings.find((item) => item.slug === slug);

  if (!teaching) {
    return {
      title: "Teaching Not Found",
    };
  }

  return {
    title: teaching.title,
    description: teaching.summary,
    openGraph: {
      title: `${teaching.title} | ${siteConfig.name}`,
      description: teaching.summary,
      url: `${siteConfig.url}/teachings/${teaching.slug}`,
      images: [siteConfig.ogImage],
    },
    alternates: {
      canonical: `${siteConfig.url}/teachings/${teaching.slug}`,
    },
  };
}

export default async function TeachingDetailPage({ params }: Props) {
  const { slug } = await params;
  const teaching = teachings.find((item) => item.slug === slug);

  if (!teaching) {
    notFound();
  }

  return (
    <main>
      <Navbar />

      <section className="premium-grid relative overflow-hidden section-padding">
        <div className="container-width relative z-10 max-w-5xl">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-[#d4a44f]">
            {teaching.category}
          </p>

          <h1 className="mb-6 max-w-4xl text-5xl font-semibold leading-[0.95] text-white md:text-7xl">
            {teaching.title}
          </h1>

          <p className="max-w-3xl text-lg leading-9 text-[#dbe4f0] md:text-xl">
            {teaching.summary}
          </p>
        </div>
      </section>

      <section className="section-padding section-divider">
        <div className="container-width grid gap-10 md:grid-cols-[1fr_0.8fr]">
          <div className="space-y-6">
            {teaching.body.map((paragraph, index) => (
              <p key={index} className="section-text">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="glass-card rounded-[2rem] p-8 md:p-10">
            <div className="icon-orb mb-5">✦</div>
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#d4a44f]">
              Key Texts
            </p>

            <ul className="space-y-4 text-lg leading-8 text-[#dbe4f0]">
              {teaching.keyTexts.map((text) => (
                <li key={text}>• {text}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}