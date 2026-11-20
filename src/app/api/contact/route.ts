import nodemailer from "nodemailer";

export const runtime = "nodejs";

const INTERESTS = ["Live animal export", "Chilled meat export", "General trade", "Manufacturing partnership"];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
const clean = (v: unknown, max: number) => String(v ?? "").trim().slice(0, max);

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real visitors never fill this hidden field.
  if (clean(body.website, 200)) return Response.json({ ok: true });

  const name = clean(body.name, 120);
  const email = clean(body.email, 200);
  const company = clean(body.company, 160);
  const interest = INTERESTS.includes(String(body.interest)) ? String(body.interest) : "General trade";
  const message = clean(body.message, 5000);

  if (!name || !message || !EMAIL_RE.test(email)) {
    return Response.json({ error: "Please provide your name, a valid email and a message." }, { status: 400 });
  }

  const { EMAIL_HOST, EMAIL_PORT, EMAIL_USE_SSL, EMAIL_HOST_USER, EMAIL_HOST_PASSWORD } = process.env;
  if (!EMAIL_HOST || !EMAIL_HOST_USER || !EMAIL_HOST_PASSWORD) {
    console.error("Contact form: SMTP environment variables are missing.");
    return Response.json({ error: "Email service is not configured." }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    host: EMAIL_HOST,
    port: Number(EMAIL_PORT || 465),
    secure: String(EMAIL_USE_SSL).toLowerCase() === "true",
    auth: { user: EMAIL_HOST_USER, pass: EMAIL_HOST_PASSWORD },
  });

  const subject = `Website inquiry: ${interest}${company ? ` — ${company}` : ""}`;
  const rows: [string, string][] = [
    ["Name", name],
    ["Email", email],
    ["Company / country", company || "—"],
    ["Interested in", interest],
  ];

  try {
    await transporter.sendMail({
      from: { name: process.env.EMAIL_FROM_NAME || "Sekina Export Website", address: EMAIL_HOST_USER },
      to: process.env.CONTACT_TO_EMAIL || "sekinaexport@gmail.com",
      replyTo: { name, address: email },
      subject,
      text: `${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\n${message}`,
      html: `<table style="font-family:sans-serif;font-size:14px;border-collapse:collapse">${rows
        .map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0;color:#666">${k}</td><td style="padding:4px 0"><b>${esc(v)}</b></td></tr>`)
        .join("")}</table><p style="font-family:sans-serif;font-size:14px;white-space:pre-wrap;margin-top:16px">${esc(message)}</p>`,
    });
    return Response.json({ ok: true });
  } catch (err) {
    console.error("Contact form: failed to send email", err);
    return Response.json({ error: "Sorry, your message could not be sent. Please try again or email us directly." }, { status: 502 });
  }
}
