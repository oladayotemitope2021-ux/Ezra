type PageHeroProps = {
  eyebrow: string;
  title: string;
  highlight?: string;
  description: string;
};

export default function PageHero({
  eyebrow,
  title,
  highlight,
  description,
}: PageHeroProps) {
  return (
    <section className="premium-grid relative overflow-hidden section-padding">
      <div className="absolute inset-0">
        <div className="absolute left-[-8%] top-16 h-72 w-72 rounded-full bg-[#d4a44f]/10 blur-3xl" />
        <div className="absolute bottom-0 right-[-6%] h-80 w-80 rounded-full bg-[#f97316]/8 blur-3xl" />
      </div>

      <div className="container-width relative z-10 max-w-6xl">
        <p className="mb-4 text-sm uppercase tracking-[0.4em] text-[#d4a44f]">
          {eyebrow}
        </p>

        <h1 className="mb-6 max-w-4xl text-5xl font-semibold leading-[0.95] text-white md:text-7xl">
          {title}
          {highlight ? <span className="block text-[#d4a44f]">{highlight}</span> : null}
        </h1>

        <p className="max-w-4xl text-lg leading-9 text-[#dbe4f0] md:text-xl">
          {description}
        </p>
      </div>
    </section>
  );
}