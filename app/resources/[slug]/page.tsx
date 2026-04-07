import Navbar from "@/components/Navbar";
import { resources } from "@/data/resources";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const resource = resources.find((item) => item.slug === slug);

  if (!resource) {
    return {
      title: "Resource Not Found",
    };
  }

  return {
    title: resource.title,
    description: resource.summary,
    openGraph: {
      title: `${resource.title} | ${siteConfig.name}`,
      description: resource.summary,
      url: `${siteConfig.url}/resources/${resource.slug}`,
      images: [siteConfig.ogImage],
    },
    alternates: {
      canonical: `${siteConfig.url}/resources/${resource.slug}`,
    },
  };
}

export default async function ResourceDetailPage({ params }: Props) {
  const { slug } = await params;
  const resource = resources.find((item) => item.slug === slug);

  if (!resource) {
    notFound();
  }

  return (
    <main>
      <Navbar />

      <section className="premium-grid relative overflow-hidden section-padding">
        <div className="container-width relative z-10 max-w-5xl">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-[#d4a44f]">
            {resource.category}
          </p>

          <h1 className="mb-6 max-w-4xl text-5xl font-semibold leading-[0.95] text-white md:text-7xl">
            {resource.title}
          </h1>

          <p className="max-w-3xl text-lg leading-9 text-[#dbe4f0] md:text-xl">
            {resource.summary}
          </p>
        </div>
      </section>

      <section className="section-padding section-divider">
        <div className="container-width max-w-4xl space-y-6">
          {resource.body.map((paragraph, index) => (
            <p key={index} className="section-text">
              {paragraph}
            </p>
          ))}
        </div>
      </section>
    </main>
  );
}