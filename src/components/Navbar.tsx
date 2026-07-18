"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone, ArrowUpRight, Sprout } from "lucide-react";
import { CONTACT } from "@/data/products";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Our Products" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[80] border-b border-forest/10 bg-ivory/95 shadow-[0_10px_40px_-18px_rgba(11,26,13,0.25)] backdrop-blur-xl transition-all duration-500">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8" aria-label="Primary navigation">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3" aria-label="Shasuma Spices — Home">
            <div className="relative flex h-12 items-center justify-center">
              <Logo className="h-full w-auto" invert={false} />
            </div>
          </Link>

          {/* Center links */}
          <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 lg:flex">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    data-active={active}
                    className={`link-luxe text-[13px] font-semibold tracking-[0.08em] transition-colors duration-500 ${
                      active ? "text-forest" : "text-forest/80 hover:text-forest"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right cluster */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden items-center gap-2 rounded-full bg-crimson px-6 py-2.5 text-[12px] font-bold uppercase tracking-[0.16em] text-ivory shadow-[0_10px_30px_-10px_rgba(206,17,38,0.55)] transition-all duration-300 hover:bg-crimson-dark hover:shadow-[0_14px_36px_-10px_rgba(206,17,38,0.7)] sm:inline-flex"
            >
              Get a Quote
              <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="grid size-10 cursor-pointer place-items-center rounded-full border border-forest/20 text-forest transition-all duration-300 hover:bg-forest hover:text-ivory lg:hidden"
            >
              {menuOpen ? <X className="size-4.5" /> : <Menu className="size-4.5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[70] flex flex-col bg-forest-950 grain lg:hidden"
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >

            <div className="relative flex flex-1 flex-col justify-center px-9 pt-20">
              <p className="eyebrow eyebrow-left text-gold">Navigate</p>
              <ul className="mt-8 space-y-2">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -32 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={link.href}
                      className={`group flex items-baseline gap-4 py-2 font-display text-4xl font-medium transition-colors ${pathname === link.href ? "text-gold" : "text-ivory hover:text-gold-light"
                        }`}
                    >
                      <span className="text-[11px] font-sans font-semibold tracking-[0.3em] text-gold/70">
                        0{i + 1}
                      </span>
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.55 }}
                className="mt-12 space-y-4"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-crimson px-7 py-3.5 text-[12px] font-bold uppercase tracking-[0.18em] text-ivory shadow-[0_14px_40px_-12px_rgba(206,17,38,0.7)] transition-colors hover:bg-crimson-dark"
                >
                  Get a Quote <ArrowUpRight className="size-3.5" />
                </Link>
                <a
                  href={CONTACT.phoneHref}
                  className="flex items-center gap-3 text-sm text-ivory/70 transition-colors hover:text-gold"
                >
                  <Phone className="size-4 text-gold" /> {CONTACT.phoneDisplay}
                </a>
                <p className="text-xs text-ivory/40">GSTIN: {CONTACT.gstin}</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
