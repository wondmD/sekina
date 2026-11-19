"use client";

import { useState, type FormEvent } from "react";

const EMAIL = "sekinaexport@gmail.com";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const company = String(data.get("company") || "");
    const interest = String(data.get("interest") || "");
    const message = String(data.get("message") || "");
    const subject = `Export inquiry: ${interest}${company ? ` — ${company}` : ""}`;
    const body = `Name: ${name}\nCompany: ${company}\nInterest: ${interest}\n\n${message}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const field =
    "w-full rounded-xl border border-white/10 bg-navy-950/60 px-4 py-3 text-sm text-ink placeholder:text-muted/60 outline-none transition focus:border-gold-400 focus:shadow-[0_0_0_3px_rgba(217,178,94,0.15)]";

  return (
    <form onSubmit={onSubmit} className="glass rounded-3xl p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-xs uppercase tracking-widest text-muted">Name</span>
          <input name="name" required className={field} placeholder="Your full name" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs uppercase tracking-widest text-muted">Company</span>
          <input name="company" className={field} placeholder="Company / country" />
        </label>
      </div>
      <label className="mt-4 block">
        <span className="mb-1.5 block text-xs uppercase tracking-widest text-muted">Interested in</span>
        <select name="interest" className={field} defaultValue="Live animal export">
          <option>Live animal export</option>
          <option>Chilled meat export</option>
          <option>General trade</option>
          <option>Manufacturing partnership</option>
        </select>
      </label>
      <label className="mt-4 block">
        <span className="mb-1.5 block text-xs uppercase tracking-widest text-muted">Message</span>
        <textarea name="message" required rows={5} className={field} placeholder="Tell us about quantities, destination market and timeline…" />
      </label>
      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-gradient-to-r from-gold-400 to-gold-600 px-6 py-3.5 font-semibold text-navy-950 transition hover:shadow-[0_0_32px_rgba(217,178,94,0.55)]"
      >
        Send Inquiry
      </button>
      <p className="mt-3 text-center text-xs text-muted" aria-live="polite">
        {sent ? "Your email app should now be open with the message ready to send." : `Opens your email app addressed to ${EMAIL}.`}
      </p>
    </form>
  );
}
