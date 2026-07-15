"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Expand, X, ArrowLeft, ArrowRight, MapPin } from "lucide-react";
import Reveal from "@/components/Reveal";

const ease = [0.22, 1, 0.36, 1] as const;

const SHOTS = [
  {
    src: "/images/hero-cumin.png",
    alt: "Vibrant mandi stall displaying spices and grains in open sacks",
    caption: "Mandi arrivals — the morning trading yard",
    span: "aspect-[4/3]",
  },
  {
    src: "/images/product-jeera.png",
    alt: "Macro of cumin seeds on a dark surface",
    caption: "Hand-graded cumin, macro verified",
    span: "aspect-[3/4]",
  },
  {
    src: "/images/hero-spices.png",
    alt: "Assorted whole spices presented in sacks at an outdoor market",
    caption: "Lot inspection before brokerage",
    span: "aspect-[4/3]",
  },
  {
    src: "/images/product-dhaniya.png",
    alt: "Stone mortar with mixed whole spices on a wooden board",
    caption: "Stone-ground QC sampling",
    span: "aspect-[4/3]",
  },
  {
    src: "/images/about-main.png",
    alt: "Tall stack of sacked spices and grains awaiting dispatch",
    caption: "Sacked, sealed & marked for dispatch",
    span: "aspect-[3/4]",
  },
  {
    src: "/images/product-ajwain.png",
    alt: "Trader presenting assorted spices in a traditional market",
    caption: "Masters of the trading floor",
    span: "aspect-[3/4]",
  },
];

export default function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  const navigate = useCallback(
    (dir: 1 | -1) => setOpen((i) => (i === null ? null : (i + dir + SHOTS.length) % SHOTS.length)),
    []
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") navigate(1);
      if (e.key === "ArrowLeft") navigate(-1);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, navigate]);

  return (
    <section className="relative overflow-hidden bg-ivory py-24 lg:py-32" aria-labelledby="gallery-title">
      <span className="ghost-guj -right-16 top-4 text-[18rem] text-forest/[0.05]">મ</span>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-gold-dark">From Yard to Vessel</p>
          <h2 id="gallery-title" className="mt-6 font-display text-4xl font-semibold leading-[1.1] text-forest sm:text-5xl">
            The Texture of <em className="italic text-gold-dark">True Quality</em>
          </h2>
          <p className="mt-5 text-[14.5px] leading-relaxed text-moss">
            Closed-lot photography from our trading floor — raw seed texture, moisture inspections,
            grading sessions and packed goods ready to roll out of Unjha.
          </p>
        </Reveal>

        <div className="masonry mt-14 columns-1 sm:columns-2 lg:columns-3">
          {SHOTS.map((shot, i) => (
            <Reveal key={shot.src} delay={(i % 3) * 0.08} className="mb-5">
              <figure className="zoom-crop group relative cursor-pointer overflow-hidden rounded-2xl shadow-card">
                <button
                  type="button"
                  onClick={() => setOpen(i)}
                  aria-label={`Open image: ${shot.caption}`}
                  className="block w-full cursor-pointer text-left"
                >
                  <span className={`relative block ${shot.span}`}>
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      fill
                      sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 30vw"
                      className="object-cover"
                      loading="lazy"
                    />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="absolute inset-x-0 bottom-0 flex translate-y-4 items-center justify-between p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <figcaption className="flex items-center gap-2 text-[12.5px] font-medium text-ivory">
                      <MapPin className="size-3.5 text-gold" /> {shot.caption}
                    </figcaption>
                    <span className="grid size-9 place-items-center rounded-full bg-gold text-forest-950">
                      <Expand className="size-4" />
                    </span>
                  </span>
                </button>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {open !== null && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-forest-950/90 p-5 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
          >
            <motion.figure
              key={open}
              className="relative w-full max-w-4xl"
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.25 } }}
              transition={{ duration: 0.5, ease }}
              onClick={(e) => e.stopPropagation()}
            >
              <span className="relative block aspect-[4/3] overflow-hidden rounded-2xl shadow-lift">
                <Image
                  src={SHOTS[open].src}
                  alt={SHOTS[open].alt}
                  fill
                  sizes="(max-width: 896px) 92vw, 896px"
                  className="object-cover"
                />
              </span>
              <figcaption className="mt-4 flex items-center justify-between text-ivory">
                <p className="flex items-center gap-2 text-sm font-medium">
                  <MapPin className="size-4 text-gold" /> {SHOTS[open].caption}
                </p>
                <p className="font-display text-sm italic tracking-[0.25em] text-ivory/50">
                  {open + 1} / {SHOTS.length}
                </p>
              </figcaption>

              <button
                type="button"
                onClick={() => setOpen(null)}
                aria-label="Close lightbox"
                className="absolute -top-4 right-0 grid size-11 cursor-pointer place-items-center rounded-full bg-ivory text-forest transition-transform hover:rotate-90 hover:bg-crimson hover:text-ivory"
              >
                <X className="size-4.5" />
              </button>
              <button
                type="button"
                onClick={() => navigate(-1)}
                aria-label="Previous image"
                className="absolute -left-2 top-1/2 grid size-11 -translate-y-1/2 cursor-pointer place-items-center rounded-full border border-ivory/30 bg-forest-950/60 text-ivory backdrop-blur transition-colors hover:bg-gold hover:text-forest-950 sm:-left-16"
              >
                <ArrowLeft className="size-4" />
              </button>
              <button
                type="button"
                onClick={() => navigate(1)}
                aria-label="Next image"
                className="absolute -right-2 top-1/2 grid size-11 -translate-y-1/2 cursor-pointer place-items-center rounded-full border border-ivory/30 bg-forest-950/60 text-ivory backdrop-blur transition-colors hover:bg-gold hover:text-forest-950 sm:-right-16"
              >
                <ArrowRight className="size-4" />
              </button>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
