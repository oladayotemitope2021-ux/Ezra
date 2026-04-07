"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteConfig } from "@/lib/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/70 shadow-[0_10px_40px_rgba(0,0,0,0.25)] backdrop-blur-2xl">
      <div className="container-width flex items-center justify-between py-5">
        <Link href="/" className="flex items-center gap-4" onClick={() => setOpen(false)}>
          <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-lg">
            <Image
              src="/logo.png"
              alt="The Ezra Project Logo"
              width={48}
              height={48}
              className="h-10 w-10 object-contain"
              priority
            />
          </div>

          <div>
            <p className="text-[0.78rem] uppercase tracking-[0.38em] text-[#d4a44f]">
              The Ezra Project
            </p>
            <p className="text-sm text-[#cbd5e1]">Gospel. Scripture. Christ.</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-3 md:flex">
          {siteConfig.nav.map((link) => {
            const active = isActive(link.href);

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`nav-fade rounded-full px-4 py-2 text-sm font-medium ${
                  active
                    ? "bg-[#d4a44f]/12 text-[#d4a44f] ring-1 ring-[#d4a44f]/20"
                    : "text-white/90 hover:bg-white/5 hover:text-[#d4a44f]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white md:hidden"
          aria-label="Toggle menu"
        >
          <span className="text-2xl leading-none">{open ? "×" : "☰"}</span>
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#07101f]/95 backdrop-blur-xl md:hidden">
          <div className="container-width flex flex-col py-4">
            {siteConfig.nav.map((link) => {
              const active = isActive(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`nav-fade rounded-2xl px-4 py-3 text-base ${
                    active
                      ? "bg-[#d4a44f]/12 text-[#d4a44f] ring-1 ring-[#d4a44f]/20"
                      : "text-white/90 hover:bg-white/5 hover:text-[#d4a44f]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}