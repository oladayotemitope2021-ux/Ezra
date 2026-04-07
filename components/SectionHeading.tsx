type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  text?: string;
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  text,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 max-w-4xl fade-up ${className}`}>
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="section-title mb-5">{title}</h2>
      {text ? <p className="section-text">{text}</p> : null}
    </div>
  );
}