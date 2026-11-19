"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  { href: "#business", label: "Business" },
  { href: "#about", label: "About" },
  { href: "#process", label: "Process" },
  { href: "#impact", label: "Impact" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open ? "glass border-x-0 border-t-0 py-3" : "py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image src="/logo.png" alt="Sikena Sane Fedela logo" width={44} height={44} className="rounded-full ring-1 ring-gold-400/60" priority />
          <span className="leading-tight">
            <span className="block font-display text-base font-bold tracking-wide text-ink">SIKENA SANE FEDELA</span>
            <span className="block text-[10px] tracking-[0.35em] text-gold-400">SEKINA EXPORT</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="group relative text-sm text-muted transition-colors hover:text-ink">
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold-400 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full border border-gold-400/60 px-5 py-2 text-sm font-medium text-gold-300 transition-all hover:bg-gold-400 hover:text-navy-950 hover:shadow-[0_0_24px_rgba(217,178,94,0.5)] md:inline-block"
        >
          Get a Quote
        </a>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span className={`h-0.5 w-6 bg-gold-300 transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-gold-300 transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-gold-300 transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>

      {open && (
        <ul className="mx-5 mt-3 flex flex-col gap-1 border-t border-gold-400/20 pt-3 md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="block py-2 text-ink">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
