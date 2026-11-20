import type { Metadata } from "next";
import "./globals.css";

/*
 * Fonts: system stacks are defined in globals.css (--font-body / --font-display / --font-serif).
 * To use web fonts instead (recommended when online), replace with:
 *   import { Inter, Space_Grotesk, Fraunces } from "next/font/google";
 *   const body = Inter({ variable: "--font-body", subsets: ["latin"] }); ...
 * and add the `.variable` classes to <body>.
 */

export const metadata: Metadata = {
  title: "Sikena Sane Fedela | Ethiopian Livestock & Meat Export",
  description:
    "Sikena Sane Fedela (Sekina Export) — a trusted Ethiopian enterprise in trade, livestock and meat exports, and manufacturing, connecting quality products with regional and international markets.",
  icons: { icon: "/logo.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Light is the default; apply a saved "dark" choice before first paint to avoid a flash. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem("theme")==="dark")document.documentElement.dataset.theme="dark"}catch(e){}`,
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
