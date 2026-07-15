"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, BadgeCheck, Star, Quote } from "lucide-react";
import Reveal from "@/components/Reveal";

function GoogleG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47a5.57 5.57 0 0 1-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09A11.99 11.99 0 0 0 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.27 14.29A7.16 7.16 0 0 1 4.89 12c0-.8.14-1.57.38-2.29V6.62H1.29a12 12 0 0 0 0 10.76l3.98-3.09z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.69 1.29 6.62l3.98 3.09C6.22 6.86 8.87 4.75 12 4.75z"
      />
    </svg>
  );
}

const REVIEWS = [
  {
    name: "Rajesh Mehta",
    firm: "Mehta Agro Impex · Ahmedabad",
    when: "2 weeks ago",
    text: "Booked a 9-tonne jeera lot through their Unjha desk. Moisture report accompanied every bag — 7.8% average, exactly as promised on the brokerage slip. Dispatch left the yard 36 hours after confirmation. Rare discipline.",
  },
  {
    name: "Firoz Pathan",
    firm: "Pathan Spice Traders · Unjha",
    when: "1 month ago",
    text: "I have dealt with many commission agents at the mandi; Shasuma's slips are the cleanest. No hidden loading charges, no grade surprises on delivery. Their nose for fresh dhaniya stock is the best in the yard.",
  },
  {
    name: "Sneha Kulkarni",
    firm: "Kulkarni Foods Pvt. Ltd. · Pune",
    when: "3 months ago",
    text: "We require parrot-green dhaniya with strict color retention for our masala line. Two quarters of consistent lots now — zero rejections at our own QC. Their grading is honest even when the mandi gets greedy.",
  },
  {
    name: "Abdullah Rahman",
    firm: "Gulf Star Exports FZE · Dubai",
    when: "5 months ago",
    text: "Sourced a full container of Europe-quality 99.5% cumin. Purity certificates, fumigation docs and stuffing photos shared proactively on WhatsApp. The sort of paperwork discipline I expect from a broker triple their size.",
  },
  {
    name: "Vikram Shah",
    firm: "SV Consumer Brands · Mumbai",
    when: "8 months ago",
    text: "Ajwain for our digestive range needs 3%+ thymol, every batch. Shasuma pre-tests lots before quoting, so we never waste a lab cycle. Bold seed size, clean of stone and dust. Extremely reliable partners.",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="size-4 fill-[#FBBC05] text-[#FBBC05]" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [perView, setPerView] = useState(1);

  useEffect(() => {
    const calc = () => setPerView(window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1);
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  const pages = Math.max(1, REVIEWS.length - perView + 1);

  const scrollTo = (page: number) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.min(Math.max(page, 0), pages - 1);
    const card = track.children[clamped] as HTMLElement | undefined;
    if (card) track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: "smooth" });
    setActive(clamped);
  };

  const onScroll = () => {
    const track = trackRef.current;
    if (!track || track.children.length === 0) return;
    let best = 0;
    let bestDist = Infinity;
    Array.from(track.children).forEach((child, i) => {
      const dist = Math.abs((child as HTMLElement).offsetLeft - track.offsetLeft - track.scrollLeft);
      if (dist < bestDist) {
        bestDist = dist;
        best = i;
      }
    });
    setActive(Math.min(best, pages - 1));
  };

  return (
    <section
      className="relative overflow-hidden bg-forest-950 py-24 text-ivory grain lg:py-32"
      aria-labelledby="testimonials-title"
    >

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="eyebrow eyebrow-left text-gold">Word from the Yard</p>
            <h2 id="testimonials-title" className="mt-6 max-w-xl font-display text-4xl font-semibold leading-[1.1] sm:text-5xl">
              Buyers Who Trust <em className="italic text-gold-light">the Slip</em>
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => scrollTo(active - 1)}
              aria-label="Previous testimonials"
              className="grid size-11 cursor-pointer place-items-center rounded-full border border-ivory/25 text-ivory transition-all duration-300 hover:border-gold hover:bg-gold hover:text-forest-950"
            >
              <ArrowLeft className="size-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollTo(active + 1)}
              aria-label="Next testimonials"
              className="grid size-11 cursor-pointer place-items-center rounded-full border border-ivory/25 text-ivory transition-all duration-300 hover:border-gold hover:bg-gold hover:text-forest-950"
            >
              <ArrowRight className="size-4" />
            </button>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div
            ref={trackRef}
            onScroll={onScroll}
            className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {REVIEWS.map((r) => (
              <motion.article
                key={r.name}
                className="flex w-[86%] shrink-0 snap-start flex-col rounded-2xl border border-ivory/10 bg-forest-900/70 p-7 backdrop-blur transition-colors duration-500 hover:border-gold/40 sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)]"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex items-center justify-between">
                  <Stars />
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-ivory/15 bg-ivory/5 px-2.5 py-1 text-[9.5px] font-semibold uppercase tracking-[0.14em] text-ivory/70">
                    <GoogleG className="size-3" />
                    Verified Review
                    <BadgeCheck className="size-3 text-[#4285F4]" />
                  </span>
                </div>

                <Quote className="mt-5 size-6 text-gold/60" aria-hidden="true" />
                <p className="mt-3 flex-1 text-[13.5px] leading-relaxed text-ivory/75">{r.text}</p>

                <div className="rule-gold mt-6 opacity-40" />
                <div className="mt-4 flex items-center justify-between gap-3">
                  <div>
                    <p className="font-display text-[15px] font-semibold text-ivory">{r.name}</p>
                    <p className="text-[11px] tracking-wide text-ivory/50">{r.firm}</p>
                  </div>
                  <span className="shrink-0 font-display text-[11px] italic text-gold/70">{r.when}</span>
                </div>
              </motion.article>
            ))}
          </div>
        </Reveal>

        {/* Dots */}
        <div className="mt-6 flex justify-center gap-2.5">
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollTo(i)}
              aria-label={`Go to testimonial page ${i + 1}`}
              aria-current={i === active}
              className={`h-1.5 cursor-pointer rounded-full transition-all duration-400 ${
                i === active ? "w-8 bg-gold" : "w-3 bg-ivory/25 hover:bg-ivory/50"
              }`}
            />
          ))}
        </div>

        <p className="mt-8 text-center text-[11px] uppercase tracking-[0.3em] text-ivory/35">
          5.0 aggregate rating · Bulk buyers across India &amp; the Gulf
        </p>
      </div>
    </section>
  );
}
