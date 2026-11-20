import Image from "next/image";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import HeroVisual from "@/components/HeroVisual";
import ContactForm from "@/components/ContactForm";
import {
  IconArrow,
  IconBank,
  IconCattle,
  IconDoc,
  IconDollar,
  IconFactory,
  IconGrowth,
  IconHandshake,
  IconMail,
  IconMeat,
  IconPhone,
  IconPin,
  IconPlane,
  IconSearch,
  IconShield,
  IconShip,
  IconTrade,
} from "@/components/Icons";

const EMAIL = "sekinaexport@gmail.com";
const PHONES = ["+251 942 631 111", "+251 942 651 111"];
const ADDRESS = "Sarbet, Mechare Meda, NOC Building, 2nd Floor, Addis Ababa, Ethiopia";

const business = [
  {
    icon: IconCattle,
    title: "Live Animal Export",
    text: "Cattle, camels and goats selected to each buyer's specifications and destination-market standards.",
  },
  {
    icon: IconMeat,
    title: "Chilled Meat Export",
    text: "Quality Ethiopian chilled meat prepared, certified and shipped to buyers across regional and international markets.",
  },
  {
    icon: IconTrade,
    title: "Trade",
    text: "Connecting quality Ethiopian products with partners abroad through reliable, transparent trade relationships.",
  },
  {
    icon: IconFactory,
    title: "Manufacturing",
    text: "Developing our manufacturing capabilities to add value at home and broaden what Ethiopia can offer the world.",
  },
];

const values = ["Integrity", "Quality", "Reliability", "Responsibility", "Partnership", "Improvement"];

const steps = [
  { icon: IconSearch, title: "Sourcing", text: "Identifying and selecting suitable animals and products for each buyer's requirements." },
  { icon: IconShield, title: "Quality & Health Checks", text: "Attention to animal health, product condition and destination-market standards." },
  { icon: IconDoc, title: "Documentation & Certification", text: "Preparing the export documents and certificates required for each transaction." },
  { icon: IconPlane, title: "Logistics & Shipment", text: "Coordinating transport and shipment through suitable regional and international routes." },
  { icon: IconHandshake, title: "Delivery & Payment", text: "Confirming delivery, settling payment and keeping in touch with the buyer." },
];

const impact = [
  { icon: IconShip, title: "Export Sales", text: "Live animals and chilled meat are sold to buyers abroad." },
  { icon: IconDollar, title: "Foreign Currency", text: "Payment is received in hard currency, such as the US dollar." },
  { icon: IconBank, title: "National Economy", text: "Earnings enter Ethiopia through the formal banking system." },
  { icon: IconGrowth, title: "National Growth", text: "Supports essential imports, investment, jobs and development." },
];

function SectionHeading({ eyebrow, title, sub }: { eyebrow: string; title: React.ReactNode; sub?: string }) {
  return (
    <Reveal className="mx-auto mb-14 max-w-3xl text-center">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">{title}</h2>
      {sub && <p className="mt-5 text-lg text-muted">{sub}</p>}
    </Reveal>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top">
        {/* ================= HERO ================= */}
        <section className="relative flex min-h-[min(100svh,960px)] items-center overflow-hidden pt-28 pb-16">
          <div className="bg-grid absolute inset-0" />
          <div className="absolute -left-40 top-20 h-[480px] w-[480px] rounded-full bg-navy-700/50 blur-[120px]" />
          <div className="absolute -right-20 bottom-0 h-[400px] w-[400px] rounded-full bg-gold-600/15 blur-[120px]" />

          <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/5 px-4 py-1.5 text-xs tracking-[0.25em] text-gold-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold-400 shadow-[0_0_10px_#d9b25e]" />
                  ETHIOPIAN EXPORT ENTERPRISE
                </span>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="mt-7 font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
                  Connecting Ethiopian <span className="text-gradient-gold">quality</span> to global markets.
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted">
                  Sikena Sane Fedela is a trusted Ethiopian business enterprise in trade, livestock and meat exports, and manufacturing — sourcing
                  products that meet customer requirements and delivering them through reliable regional and international routes.
                </p>
              </Reveal>
              <Reveal delay={300} className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 px-7 py-3.5 font-semibold text-on-gold transition hover:shadow-[0_0_36px_rgba(217,178,94,0.55)]"
                >
                  Start an Inquiry
                  <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a href="#process" className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-7 py-3.5 font-medium text-ink transition hover:border-gold-400/60 hover:text-gold-300">
                  How We Export
                </a>
              </Reveal>
              <Reveal delay={400} className="mt-14 grid max-w-lg grid-cols-3 gap-4 border-t border-ink/10 pt-8">
                {[
                  ["4", "Business pillars"],
                  ["5", "Step export process"],
                  ["6", "Core values"],
                ].map(([n, l]) => (
                  <div key={l}>
                    <p className="font-display text-3xl font-bold text-gold-300">{n}</p>
                    <p className="mt-1 text-xs uppercase tracking-wider text-muted">{l}</p>
                  </div>
                ))}
              </Reveal>
            </div>
            <Reveal delay={200}>
              <HeroVisual />
            </Reveal>
          </div>
        </section>

        {/* ================= VALUES MARQUEE ================= */}
        <div className="relative overflow-hidden border-y border-gold-400/15 bg-navy-900/80 py-5">
          <div className="animate-marquee flex w-max gap-12">
            {[...values, ...values, ...values, ...values].map((v, i) => (
              <span key={i} className="flex items-center gap-12 font-display text-lg tracking-widest text-gold-300/80 uppercase">
                {v} <span className="text-gold-500">✦</span>
              </span>
            ))}
          </div>
        </div>

        {/* ================= BUSINESS ================= */}
        <section id="business" className="relative py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionHeading
              eyebrow="What We Do"
              title={<>Four pillars of <span className="text-gradient-gold">enterprise</span></>}
              sub="From Ethiopia's highlands to buyers abroad, our operations span the full value chain."
            />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {business.map((b, i) => (
                <Reveal key={b.title} delay={i * 100} className="h-full">
                  <article className="card-hover glass group relative h-full overflow-hidden rounded-3xl p-7">
                    <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold-400/10 blur-2xl transition group-hover:bg-gold-400/25" />
                    <span className="font-display text-sm text-muted/60">0{i + 1}</span>
                    <div className="mt-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-gold-400/30 bg-gold-400/10 text-gold-300">
                      <b.icon className="h-7 w-7" />
                    </div>
                    <h3 className="mt-6 font-display text-xl font-semibold">{b.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{b.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ================= ABOUT: VISION & MISSION ================= */}
        <section id="about" className="relative overflow-hidden py-28">
          <div className="bg-dots absolute right-0 top-10 h-48 w-80 opacity-40" />
          <span className="pointer-events-none absolute -left-6 top-0 select-none font-serif text-[22rem] leading-none text-ink/[0.04]">&ldquo;</span>
          <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
            <SectionHeading eyebrow="Sikena Sane Fedela" title={<>What <span className="text-gradient-gold">drives</span> us</>} />

            <div className="grid gap-6 lg:grid-cols-2">
              <Reveal className="h-full">
                <div className="glass relative h-full overflow-hidden rounded-3xl border-l-4 border-l-gold-400 p-8 sm:p-10">
                  <p className="eyebrow">Our Vision</p>
                  <p className="mt-6 font-serif text-2xl italic leading-relaxed text-ink sm:text-[1.7rem]">
                    To grow as a trusted Ethiopian business enterprise with a strong presence in trade, livestock and meat exports, and
                    manufacturing, connecting quality products with regional and international markets.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={150} className="h-full">
                <div className="relative h-full overflow-hidden rounded-3xl bg-gradient-to-br from-gold-400 via-gold-500 to-gold-600 p-8 text-on-gold sm:p-10">
                  <div className="bg-grid absolute inset-0 opacity-30 mix-blend-overlay" />
                  <p className="relative text-xs font-bold tracking-[0.4em] text-on-gold">OUR MISSION</p>
                  <p className="relative mt-6 font-serif text-2xl font-semibold italic leading-relaxed sm:text-[1.7rem]">
                    To conduct reliable and responsible business across our areas of operation by sourcing and supplying products that meet
                    customer requirements, building lasting partnerships, and developing our manufacturing and trade capabilities.
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {values.map((v, i) => (
                <Reveal key={v} delay={i * 70}>
                  <div className="card-hover glass rounded-2xl px-4 py-5 text-center">
                    <span className="font-display text-xs text-gold-500">0{i + 1}</span>
                    <p className="mt-1 font-display font-semibold text-gold-300">{v}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ================= PROCESS ================= */}
        <section id="process" className="relative py-28">
          <div className="absolute inset-x-0 top-0 glow-line opacity-40" />
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionHeading
              eyebrow="Our Export Process"
              title={<>How we <span className="text-gradient-gold">export</span></>}
              sub="From sourcing to delivery, in five clear steps."
            />

            <div className="relative">
              {/* connector */}
              <div className="absolute left-[27px] top-0 h-full w-px bg-gradient-to-b from-gold-400 via-gold-500/40 to-transparent lg:left-0 lg:top-[27px] lg:h-px lg:w-full lg:bg-gradient-to-r" />
              <ol className="grid gap-10 lg:grid-cols-5 lg:gap-6">
                {steps.map((s, i) => (
                  <Reveal as="li" key={s.title} delay={i * 120} className="relative flex gap-6 lg:block">
                    <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-gold-400 bg-navy-900 font-display text-xl font-bold text-gold-300 shadow-[0_0_24px_rgba(217,178,94,0.35)]">
                      {i + 1}
                    </div>
                    <div className="card-hover glass rounded-2xl p-6 lg:mt-8">
                      <s.icon className="h-6 w-6 text-gold-400" />
                      <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
                    </div>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ================= IMPACT ================= */}
        <section id="impact" className="relative overflow-hidden py-28">
          <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-800/60 to-navy-950" />
          <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full border-[60px] border-gold-400/5" />
          <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
            <SectionHeading
              eyebrow="Why Export Matters"
              title={<>Every export earns <span className="text-gradient-gold">dollars</span> for Ethiopia</>}
              sub="Every shipment turns Ethiopian livestock and meat into hard currency that strengthens the nation."
            />

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {impact.map((s, i) => (
                <Reveal key={s.title} delay={i * 120} className="relative">
                  <div className="card-hover glass h-full rounded-3xl p-7 text-center">
                    <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full border-2 border-gold-400/70 bg-navy-950 text-gold-300">
                      <span className="animate-pulse-ring absolute inset-0 rounded-full border border-gold-400/40" style={{ animationDelay: `${i * 0.5}s` }} />
                      <s.icon className="h-10 w-10" />
                    </div>
                    <h3 className="mt-6 font-display text-lg font-semibold">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
                  </div>
                  {i < impact.length - 1 && (
                    <IconArrow className="absolute -right-5 top-[4.5rem] z-10 hidden h-6 w-6 text-gold-400 lg:block" />
                  )}
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-16">
              <blockquote className="relative overflow-hidden rounded-3xl border-y border-gold-400/40 px-6 py-14 text-center">
                <div className="glow-line absolute inset-x-0 top-0" />
                <p className="font-serif text-3xl italic leading-snug sm:text-5xl">
                  Dollars earned abroad build <span className="text-gradient-gold">strength at home.</span>
                </p>
                <p className="mt-5 text-gold-400">Every export we make is a contribution to Ethiopia.</p>
              </blockquote>
            </Reveal>
          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section id="contact" className="relative py-28">
          <div className="bg-grid absolute inset-0 opacity-60" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2">
            <Reveal>
              <p className="eyebrow">Contact</p>
              <h2 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl">
                Let&apos;s build a <span className="text-gradient-gold">lasting partnership.</span>
              </h2>
              <p className="mt-5 max-w-md text-lg text-muted">
                Tell us what your market needs. We&apos;ll source, certify and ship it — and stay in touch long after delivery.
              </p>

              <ul className="mt-10 space-y-4">
                <li>
                  <a href={`mailto:${EMAIL}`} className="card-hover glass flex items-center gap-4 rounded-2xl p-5">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-400/10 text-gold-300"><IconMail className="h-6 w-6" /></span>
                    <span>
                      <span className="block text-xs uppercase tracking-widest text-muted">Email</span>
                      <span className="font-medium">{EMAIL}</span>
                    </span>
                  </a>
                </li>
                <li className="card-hover glass flex items-center gap-4 rounded-2xl p-5">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-400/10 text-gold-300"><IconPhone className="h-6 w-6" /></span>
                  <span>
                    <span className="block text-xs uppercase tracking-widest text-muted">Phone</span>
                    {PHONES.map((p) => (
                      <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="mr-4 font-medium hover:text-gold-300">{p}</a>
                    ))}
                  </span>
                </li>
                <li className="card-hover glass flex items-center gap-4 rounded-2xl p-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold-400/10 text-gold-300"><IconPin className="h-6 w-6" /></span>
                  <span>
                    <span className="block text-xs uppercase tracking-widest text-muted">Office</span>
                    <span className="font-medium">{ADDRESS}</span>
                  </span>
                </li>
              </ul>
            </Reveal>
            <Reveal delay={150}>
              <ContactForm />
            </Reveal>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="relative border-t border-gold-400/15 bg-navy-950 py-12">
        <div className="glow-line absolute inset-x-0 top-0" />
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 text-center sm:px-8 md:flex-row md:text-left">
          <div className="flex items-center gap-3">
            <Image src="/logo.svg" alt="" width={48} height={48} />
            <div>
              <p className="font-display font-bold tracking-wide">SIKENA SANE FEDELA</p>
              <p className="text-xs text-muted">Trade · Livestock & Meat Export · Manufacturing</p>
            </div>
          </div>
          <p className="text-xs text-muted">© {new Date().getFullYear()} Sikena Sane Fedela. Addis Ababa, Ethiopia.</p>
        </div>
      </footer>
    </>
  );
}
