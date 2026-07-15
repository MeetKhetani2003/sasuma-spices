import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import Reveal from "@/components/Reveal";
import { CONTACT } from "@/data/products";

export default function CtaBanner() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-r from-crimson-deep via-crimson to-crimson-dark grain"
      aria-label="Bulk procurement call to action"
    >
      <div className="rule-gold" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 py-14 sm:px-8 lg:flex-row lg:items-center lg:py-16">
        <Reveal>
          <p className="text-[11px] font-bold uppercase tracking-[0.32em] text-gold-light">
            Ready when the mandi moves
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold leading-tight text-ivory sm:text-[2.6rem]">
            Looking for Premium Bulk Spice Procurement?{" "}
            <em className="italic text-gold-light">Connect with Unjha&apos;s Trusted Commission Agents.</em>
          </h2>
        </Reveal>

        <Reveal delay={0.15} className="flex shrink-0 flex-wrap items-center gap-4">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 rounded-full bg-ivory px-8 py-4 text-[12px] font-bold uppercase tracking-[0.2em] text-crimson shadow-[0_18px_44px_-14px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-light hover:text-forest-950"
          >
            Request Procurement
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
          <a
            href={CONTACT.phoneHref}
            className="inline-flex items-center gap-2.5 rounded-full border border-ivory/40 px-7 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-ivory transition-all duration-300 hover:border-gold hover:text-gold-light"
          >
            <Phone className="size-4" />
            {CONTACT.phoneDisplay}
          </a>
        </Reveal>
      </div>
      <div className="rule-gold" />
    </section>
  );
}
