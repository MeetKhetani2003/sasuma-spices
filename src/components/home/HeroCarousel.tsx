"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowLeft, ChevronDown } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;
const DURATION = 7000;

const SLIDES = [
  {
    src: "/images/hero-cumin.png",
    alt: "Hands sifting golden cumin seeds over dark slate in warm light",
    eyebrow: "Unjha · Gujarat — Asia's Largest Jeera Mandi",
    lines: ["Sourcing Purity", "from Unjha"],
    sub: "India's finest quality spice commission agents.",
    cta: { label: "Explore Our Range", href: "/products" },
  },
  {
    src: "/images/hero-spices.png",
    alt: "Premium whole spices in hammered brass bowls on dark slate",
    eyebrow: "Lab-Verified · Mandi-Direct · Brokered Transparently",
    lines: ["Uncompromising Quality", "& Freshness"],
    sub: "Rigorous grading standards for global culinary excellence.",
    cta: { label: "Contact Our Experts", href: "/contact" },
  },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const restart = useCallback(() => {
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), DURATION);
  }, []);

  useEffect(() => {
    restart();
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [restart]);

  const go = (dir: 1 | -1) => {
    setIndex((i) => (i + dir + SLIDES.length) % SLIDES.length);
    restart();
  };

  const slide = SLIDES[index];

  return (
    <section className="relative h-[100svh] min-h-[600px] overflow-hidden bg-forest-950 grain" aria-roledescription="carousel" aria-label="Shasuma Spices highlights">
      {/* Slides */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={slide.src}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease }}
        >
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.12 }}
            animate={{ scale: 1 }}
            transition={{ duration: DURATION / 1000 + 1, ease: "linear" }}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
          {/* Cinematic grade */}
          <div className="absolute inset-0 bg-gradient-to-r from-forest-950/90 via-forest-950/45 to-forest-950/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-transparent to-forest-950/40" />
        </motion.div>
      </AnimatePresence>


      {/* Copy */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-5 pb-28 sm:px-8 lg:justify-center lg:pb-0">
        <AnimatePresence mode="wait">
          <motion.div key={slide.src} className="max-w-3xl">
            <motion.p
              className="eyebrow eyebrow-left text-gold"
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14, transition: { duration: 0.3 } }}
              transition={{ duration: 0.8, delay: 0.15, ease }}
            >
              {slide.eyebrow}
            </motion.p>

            <h1 className="mt-7 font-display text-[13vw] font-semibold leading-[1.02] text-ivory sm:text-6xl lg:text-[5.4rem]">
              {slide.lines.map((line, i) => (
                <span key={line} className="block overflow-hidden pb-1">
                  <motion.span
                    className={`block ${i === slide.lines.length - 1 ? "italic text-gold-light" : ""}`}
                    initial={{ y: "110%" }}
                    animate={{ y: "0%" }}
                    exit={{ y: "-105%", transition: { duration: 0.45, ease } }}
                    transition={{ duration: 0.95, delay: 0.28 + i * 0.14, ease }}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              className="mt-6 max-w-xl text-base leading-relaxed text-ivory/75 sm:text-lg"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, transition: { duration: 0.25 } }}
              transition={{ duration: 0.8, delay: 0.7, ease }}
            >
              {slide.sub}
            </motion.p>

            <motion.div
              className="mt-9 flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, transition: { duration: 0.25 } }}
              transition={{ duration: 0.8, delay: 0.85, ease }}
            >
              <Link
                href={slide.cta.href}
                className="group inline-flex items-center gap-3 rounded-full bg-crimson px-8 py-4 text-[12px] font-bold uppercase tracking-[0.2em] text-ivory shadow-[0_18px_44px_-14px_rgba(206,17,38,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-crimson-dark hover:shadow-[0_24px_54px_-14px_rgba(206,17,38,0.9)]"
              >
                {slide.cta.label}
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full border border-ivory/30 px-8 py-4 text-[12px] font-bold uppercase tracking-[0.2em] text-ivory backdrop-blur transition-all duration-300 hover:border-gold hover:text-gold-light"
              >
                Our Legacy
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="absolute bottom-8 left-1/2 z-20 flex w-full max-w-7xl -translate-x-1/2 items-center justify-between px-5 sm:px-8">
        <div className="flex items-center gap-4">
          {SLIDES.map((s, i) => (
            <button
              key={s.src}
              type="button"
              onClick={() => {
                setIndex(i);
                restart();
              }}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
              className="group relative h-6 cursor-pointer"
            >
              <span className="block h-[3px] w-14 overflow-hidden rounded-full bg-ivory/25">
                {i === index && (
                  <motion.span
                    className="block h-full bg-gold"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: DURATION / 1000, ease: "linear" }}
                  />
                )}
              </span>
            </button>
          ))}
          <span className="ml-2 font-display text-sm italic tracking-[0.25em] text-ivory/60">
            0{index + 1} <span className="text-ivory/30">/ 0{SLIDES.length}</span>
          </span>
        </div>

        <div className="flex items-center gap-3">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="mr-3 hidden text-ivory/50 sm:block"
          >
            <ChevronDown className="size-5" />
          </motion.div>
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous slide"
            className="grid size-11 cursor-pointer place-items-center rounded-full border border-ivory/25 text-ivory transition-all duration-300 hover:border-gold hover:bg-gold hover:text-forest-950"
          >
            <ArrowLeft className="size-4" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next slide"
            className="grid size-11 cursor-pointer place-items-center rounded-full border border-ivory/25 text-ivory transition-all duration-300 hover:border-gold hover:bg-gold hover:text-forest-950"
          >
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
