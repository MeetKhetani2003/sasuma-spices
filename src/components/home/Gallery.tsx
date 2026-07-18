"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Expand, X, ArrowLeft, ArrowRight, MapPin, Play } from "lucide-react";
import Reveal from "@/components/Reveal";
import { GALLERY_ITEMS, GalleryMedia } from "@/data/gallery";

const ease = [0.22, 1, 0.36, 1] as const;

interface GalleryProps {
  mediaItems?: GalleryMedia[];
  showTabs?: boolean;
}

export default function Gallery({ mediaItems = GALLERY_ITEMS, showTabs = true }: GalleryProps) {
  const [open, setOpen] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'images' | 'videos'>('all');

  const filteredItems = mediaItems.filter(item => {
    if (activeTab === 'all') return true;
    if (activeTab === 'images') return item.type === 'image';
    if (activeTab === 'videos') return item.type === 'video';
    return true;
  });

  const navigate = useCallback(
    (dir: 1 | -1) => {
      setOpen((i) => {
        if (i === null) return null;
        if (filteredItems.length === 0) return null;
        return (i + dir + filteredItems.length) % filteredItems.length;
      });
    },
    [filteredItems.length]
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

  // Reset open item if tab changes and items change
  useEffect(() => {
    setOpen(null);
  }, [activeTab]);

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

        {showTabs && (
          <div className="mt-10 flex flex-wrap justify-center gap-3 relative z-10">
            {(['all', 'images', 'videos'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-full px-7 py-2.5 text-[13px] font-bold uppercase tracking-wider transition-colors ${
                  activeTab === tab
                    ? 'bg-forest text-ivory shadow-lg'
                    : 'bg-ivory text-forest border border-forest/20 hover:bg-forest/5'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        )}

        <div className="masonry mt-14 columns-1 sm:columns-2 lg:columns-3">
          {filteredItems.map((shot, i) => (
            <Reveal key={shot.id} delay={(i % 3) * 0.08} className="mb-5 inline-block w-full">
              <figure className="zoom-crop group relative cursor-pointer overflow-hidden rounded-2xl shadow-card">
                <button
                  type="button"
                  onClick={() => setOpen(i)}
                  aria-label={`Open media: ${shot.caption}`}
                  className="block w-full cursor-pointer text-left"
                >
                  <span className={`relative block ${shot.span}`}>
                    {shot.type === 'image' ? (
                      <Image
                        src={shot.src}
                        alt={shot.alt}
                        fill
                        sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 30vw"
                        className="object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <>
                        <video
                          src={shot.src}
                          className="absolute inset-0 h-full w-full object-cover"
                          muted
                          loop
                          playsInline
                          preload="metadata"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
                          <span className="grid size-12 place-items-center rounded-full bg-ivory/90 text-forest shadow-lg backdrop-blur transition-transform duration-300 group-hover:scale-110">
                            <Play className="size-5 fill-current ml-1" />
                          </span>
                        </div>
                      </>
                    )}
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
        
        {filteredItems.length === 0 && (
          <div className="py-20 text-center text-forest/60">
            No media found for the selected filter.
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {open !== null && filteredItems[open] && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-forest-950/95 p-5 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
          >
            <motion.figure
              key={open}
              className="relative w-full max-w-5xl h-[85vh] flex flex-col items-center justify-center"
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.25 } }}
              transition={{ duration: 0.5, ease }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[75vh] flex-shrink-0 flex items-center justify-center bg-black/40 overflow-hidden rounded-2xl shadow-lift">
                {filteredItems[open].type === 'image' ? (
                  <Image
                    src={filteredItems[open].src}
                    alt={filteredItems[open].alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 1024px"
                    className="object-contain"
                  />
                ) : (
                  <video
                    src={filteredItems[open].src}
                    controls
                    autoPlay
                    className="w-full h-full object-contain outline-none"
                  />
                )}
              </div>
              <figcaption className="mt-4 flex w-full max-w-5xl items-center justify-between text-ivory">
                <p className="flex items-center gap-2 text-sm font-medium">
                  <MapPin className="size-4 text-gold" /> {filteredItems[open].caption}
                </p>
                <p className="font-display text-sm italic tracking-[0.25em] text-ivory/50">
                  {open + 1} / {filteredItems.length}
                </p>
              </figcaption>

              <button
                type="button"
                onClick={() => setOpen(null)}
                aria-label="Close lightbox"
                className="absolute -top-12 right-0 grid size-11 cursor-pointer place-items-center rounded-full bg-ivory/10 text-ivory transition-all hover:rotate-90 hover:bg-crimson hover:text-ivory md:-right-12 md:top-0"
              >
                <X className="size-5" />
              </button>
              
              {filteredItems.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => navigate(-1)}
                    aria-label="Previous image"
                    className="absolute -left-4 top-1/2 grid size-12 -translate-y-1/2 cursor-pointer place-items-center rounded-full border border-ivory/30 bg-forest-950/60 text-ivory backdrop-blur transition-colors hover:bg-gold hover:text-forest-950 sm:-left-16"
                  >
                    <ArrowLeft className="size-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate(1)}
                    aria-label="Next image"
                    className="absolute -right-4 top-1/2 grid size-12 -translate-y-1/2 cursor-pointer place-items-center rounded-full border border-ivory/30 bg-forest-950/60 text-ivory backdrop-blur transition-colors hover:bg-gold hover:text-forest-950 sm:-right-16"
                  >
                    <ArrowRight className="size-5" />
                  </button>
                </>
              )}
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
