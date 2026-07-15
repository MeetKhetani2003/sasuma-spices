import Link from "next/link";
import Logo from "@/components/Logo";
import {
  Sprout,
  MapPin,
  Phone,
  ShieldCheck,
  MessageCircle,
  ArrowUpRight,
  Clock,
} from "lucide-react";
import { CONTACT, products, whatsappLink } from "@/data/products";

const QUICK_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Our Products" },
  { href: "/contact", label: "Contact Us" },
  { href: "/contact", label: "Get a Quote" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-forest-950 text-ivory grain">

      <div className="rule-gold" />

      <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-16 sm:px-8 lg:pt-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_0.9fr_1.05fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              {/* <div className="relative flex h-12 items-center justify-center grayscale transition-all duration-500 group-hover:grayscale-0">
                <Logo className="h-full w-auto" />
              </div> */}
              <span className="leading-none">
                <span className="block font-display text-xl font-bold tracking-[0.12em]">
                  SAASUMA <span className="text-gold">SPICES</span>
                </span>
                <span className="mt-1 block text-sm text-gold-light">Unjha</span>
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-[13.5px] leading-relaxed text-ivory/60">
              A legacy spice commission house operating from Unjha — the beating heart of Asia&apos;s
              cumin &amp; fennel trade. We broker only lots we would serve at our own table: verified
              purity, transparent brokerage, and dispatch discipline on every consignment.
            </p>
            <div className="mt-6 inline-flex items-center gap-3 rounded-xl border border-gold/30 bg-forest-900/60 px-4 py-3">
              <ShieldCheck className="size-5 shrink-0 text-gold" />
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-gold/80">
                  GST Registered
                </p>
                <p className="font-mono text-[13px] tracking-widest text-gold-light">
                  {CONTACT.gstin}
                </p>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer quick links">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-gold">Quick Links</h3>
            <ul className="mt-6 space-y-3.5">
              {QUICK_LINKS.map((link, i) => (
                <li key={`${link.label}-${i}`}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-[13.5px] text-ivory/65 transition-colors hover:text-gold-light"
                  >
                    <span className="h-px w-3 bg-gold/50 transition-all duration-300 group-hover:w-5 group-hover:bg-gold" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Products */}
          <nav aria-label="Footer product links">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-gold">Our Spices</h3>
            <ul className="mt-6 space-y-3.5">
              {products.map((p) => (
                <li key={p.id}>
                  <Link
                    href={`/products#${p.id}`}
                    className="group inline-flex items-center gap-2 text-[13.5px] text-ivory/65 transition-colors hover:text-gold-light"
                  >
                    <span className="h-px w-3 bg-gold/50 transition-all duration-300 group-hover:w-5 group-hover:bg-gold" />
                    {p.name} <span className="text-ivory/35">({p.subtitle})</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-gold">Reach the Desk</h3>
            <ul className="mt-6 space-y-4 text-[13.5px]">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
                <span className="leading-relaxed text-ivory/65">{CONTACT.address}</span>
              </li>
              <li>
                <a
                  href={CONTACT.phoneHref}
                  className="group flex items-center gap-3 text-ivory/85 transition-colors hover:text-gold-light"
                >
                  <span className="grid size-8 place-items-center rounded-full border border-gold/40 transition-colors group-hover:bg-gold group-hover:text-forest-950">
                    <Phone className="size-3.5" />
                  </span>
                  <span className="font-semibold tracking-wide">{CONTACT.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-ivory/65 transition-colors hover:text-gold-light"
                >
                  <span className="grid size-8 place-items-center rounded-full border border-gold/40 transition-colors group-hover:bg-gold group-hover:text-forest-950">
                    <MessageCircle className="size-3.5" />
                  </span>
                  WhatsApp the Trading Desk
                </a>
              </li>
              <li className="flex items-center gap-3 text-ivory/50">
                <Clock className="size-4 shrink-0 text-gold/70" />
                Mon – Sat · 9:00 – 19:00 IST
              </li>
            </ul>
          </div>
        </div>

        <div className="rule-gold mt-14" />

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 pt-6 text-[12px] text-ivory/45 sm:flex-row">
          <p>© {new Date().getFullYear()} Shasuma Spices. All rights reserved. Unjha, Gujarat, India.</p>
          <p className="flex items-center gap-1.5">
            Powered by{" "}
            <a
              href="https://festiya.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-0.5 font-semibold tracking-wide text-gold transition-colors hover:text-gold-light"
            >
              Festiviya
              <ArrowUpRight className="size-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <span className="text-ivory/30">(festiya.com)</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
