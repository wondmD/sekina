import type { Metadata } from "next";
import { Inter, Space_Grotesk, Fraunces } from "next/font/google";
import "./globals.css";

const body = Inter({ variable: "--font-body", subsets: ["latin"] });
const display = Space_Grotesk({ variable: "--font-display", subsets: ["latin"], weight: ["500", "600", "700"] });
const serif = Fraunces({ variable: "--font-serif", subsets: ["latin"], style: ["italic", "normal"] });

export const metadata: Metadata = {
  title: "Sikena Sane Fedela | Ethiopian Livestock & Meat Export",
  description:
    "Sikena Sane Fedela (Sekina Export) — a trusted Ethiopian enterprise in trade, livestock and meat exports, and manufacturing, connecting quality products with regional and international markets.",
  icons: { icon: "/logo.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${body.variable} ${display.variable} ${serif.variable} antialiased`}>{children}</body>
    </html>
  );
}
