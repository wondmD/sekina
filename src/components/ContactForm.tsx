"use client";

import { useState, type FormEvent } from "react";

const EMAIL = "sekinaexport@gmail.com";

type Status = { kind: "idle" | "sending" | "sent" | "error"; text?: string };

export default function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus({ kind: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      form.reset();
      setStatus({ kind: "sent", text: "Thank you — your inquiry has been sent. We'll get back to you soon." });
    } catch (err) {
      setStatus({
        kind: "error",
        text: err instanceof Error ? err.message : `Could not send. Please email us at ${EMAIL}.`,
      });
    }
  }

  const field =
    "w-full rounded-xl border border-ink/10 bg-navy-950/60 px-4 py-3 text-sm text-ink placeholder:text-muted/60 outline-none transition focus:border-gold-400 focus:shadow-[0_0_0_3px_rgba(217,178,94,0.15)]";
  const sending = status.kind === "sending";

  return (
    <form onSubmit={onSubmit} className="glass rounded-3xl p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-xs uppercase tracking-widest text-muted">Name</span>
          <input name="name" required maxLength={120} className={field} placeholder="Your full name" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs uppercase tracking-widest text-muted">Email</span>
          <input name="email" type="email" required maxLength={200} className={field} placeholder="you@company.com" />
        </label>
      </div>
      <label className="mt-4 block">
        <span className="mb-1.5 block text-xs uppercase tracking-widest text-muted">Company</span>
        <input name="company" maxLength={160} className={field} placeholder="Company / country" />
      </label>
      {/* Honeypot field to catch spam bots — hidden from people */}
      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
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
        <textarea name="message" required rows={5} maxLength={5000} className={field} placeholder="Tell us about quantities, destination market and timeline…" />
      </label>
      <button
        type="submit"
        disabled={sending}
        className="mt-6 w-full rounded-full bg-gradient-to-r from-gold-400 to-gold-600 px-6 py-3.5 font-semibold text-on-gold transition hover:shadow-[0_0_32px_rgba(217,178,94,0.55)] disabled:cursor-wait disabled:opacity-70"
      >
        {sending ? "Sending…" : "Send Inquiry"}
      </button>
      <p
        className={`mt-3 text-center text-xs ${status.kind === "error" ? "text-red-500" : status.kind === "sent" ? "text-gold-400" : "text-muted"}`}
        aria-live="polite"
      >
        {status.text ?? `Or email us directly at ${EMAIL}.`}
      </p>
    </form>
  );
}
