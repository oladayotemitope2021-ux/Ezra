import Link from "next/link";

type CallToActionBlockProps = {
  eyebrow: string;
  title: string;
  text: string;
  buttonText: string;
  buttonHref: string;
};

export default function CallToActionBlock({
  eyebrow,
  title,
  text,
  buttonText,
  buttonHref,
}: CallToActionBlockProps) {
  return (
    <div className="rounded-[2rem] border border-[#d4a44f]/15 bg-[linear-gradient(135deg,#0f172a,#111827,#0b1020)] p-10">
      <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#f97316]">
        {eyebrow}
      </p>
      <h2 className="mb-4 text-4xl font-semibold text-white">
        {title}
      </h2>
      <p className="mb-8 max-w-3xl text-lg leading-8 text-[#dbe4f0]">
        {text}
      </p>

      <Link
        href={buttonHref}
        className="premium-button inline-block rounded-2xl bg-[#d4a44f] px-7 py-4 text-base font-semibold text-[#0b1020]"
      >
        {buttonText}
      </Link>
    </div>
  );
}