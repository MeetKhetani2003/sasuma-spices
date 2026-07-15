"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { Product } from "@/data/products";

export default function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const isReversed = index % 2 === 1;

  return (
    <article
      className={`group lift relative flex flex-col overflow-hidden rounded-[2rem] border border-forest/10 bg-white shadow-card transition-all duration-500 hover:border-gold/40 hover:shadow-lift lg:min-h-[400px] ${
        isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      {/* Image */}
      <div className="zoom-crop relative h-72 w-full overflow-hidden sm:h-80 lg:h-auto lg:w-1/2 lg:shrink-0">
        <Image
          src={product.image}
          alt={`${product.subtitle} — ${product.name} in a carved wooden bowl`}
          fill
          sizes="(max-width: 1024px) 92vw, 46vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-forest-950/20 to-transparent opacity-80 transition-opacity duration-700 group-hover:opacity-100" />
        <span className="absolute left-6 top-6 flex items-center rounded-full border border-gold/40 bg-black/40 px-4 py-1.5 font-display text-[11px] font-semibold tracking-[0.25em] text-gold shadow-lg backdrop-blur-md transition-colors duration-500 group-hover:bg-black/60 group-hover:text-gold-light">
          NO. {product.numeral}
        </span>
      </div>

      {/* Body */}
      <div className="relative flex flex-1 flex-col justify-center p-8 lg:p-14">
        <div
          className={`absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 lg:-left-px lg:bottom-12 lg:top-12 lg:h-auto lg:w-px lg:bg-gradient-to-b`}
        />

        <header className="mb-5">
          <h3 className="font-display text-3xl font-semibold tracking-wide text-forest transition-colors duration-300 group-hover:text-forest-900 sm:text-4xl">
            {product.name}
            <span className="ml-3 font-display text-lg font-medium italic tracking-normal text-moss/80">
              {product.subtitle}
            </span>
          </h3>
          <p className="mt-2 font-display text-[15px] italic text-gold-dark/90">{product.botanical}</p>
        </header>

        <p className="text-[15px] leading-relaxed text-moss/90 lg:max-w-lg">{product.short}</p>

        <div className="mt-8 flex flex-wrap gap-2">
          {product.grades.map((g) => (
            <span
              key={g}
              className="rounded-lg border border-forest/10 bg-forest/[0.03] px-3.5 py-1.5 text-[11px] font-bold tracking-wider text-forest transition-colors duration-300 group-hover:border-gold/30 group-hover:bg-gold/5"
            >
              {g}
            </span>
          ))}
        </div>

        <Link
          href={`/products/${product.id}`}
          className="group/btn mt-10 flex w-full cursor-pointer items-center justify-between rounded-xl bg-forest px-6 py-4 text-[12px] font-bold uppercase tracking-[0.2em] text-gold-light shadow-md transition-all duration-300 hover:bg-forest-950 hover:text-gold hover:shadow-xl sm:w-max sm:gap-12"
        >
          View Details
          <span className="grid size-8 place-items-center rounded-full bg-gold/20 text-gold transition-all duration-300 group-hover/btn:bg-gold group-hover/btn:text-forest-950">
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
          </span>
        </Link>
      </div>
    </article>
  );
}
