import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Shasuma Spices — Premium Spice Commission Agent · Unjha, Gujarat",
    template: "%s | Shasuma Spices",
  },
  description:
    "Shasuma Spices (સાસુમા) is a premium spice commission house in Unjha, Gujarat — brokering Singapore-quality jeera, parrot-green dhaniya, bold ajwain and vibrant saunf with verified purity and transparent brokerage.",
  keywords: [
    "Shasuma Spices",
    "spice commission agent",
    "Unjha jeera market",
    "cumin broker Gujarat",
    "bulk coriander ajwain fennel",
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`} data-scroll-behavior="smooth">
      <body className="bg-ivory font-sans text-ink antialiased">
        <div className="page-grain" aria-hidden="true" />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
