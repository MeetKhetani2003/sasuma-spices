import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import Reveal, { Stagger, StaggerItem } from "@/components/Reveal";

export default function FeaturedProducts() {
  return (
    <section className="relative bg-sand/60 py-24 lg:py-32" aria-labelledby="featured-title">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="flex flex-col items-end justify-between gap-8 lg:flex-row">
          <div className="w-full">
            <p className="eyebrow eyebrow-left text-gold-dark">The Curated Quartet</p>
            <h2
              id="featured-title"
              className="mt-6 max-w-2xl font-display text-4xl font-semibold leading-[1.1] text-forest sm:text-5xl"
            >
              Four Spices. <em className="italic text-gold-dark">Mastered Deeply,</em> Never Broadly.
            </h2>
          </div>
          <div className="flex w-full flex-col gap-5 lg:w-auto">
            <p className="max-w-sm text-[14px] leading-relaxed text-moss lg:text-right">
              We deliberately broker only four spice lines — so that every lot receives the
              scrutiny a lesser catalogue simply cannot afford.
            </p>
            <Link
              href="/products"
              className="group inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.2em] text-crimson transition-colors hover:text-crimson-dark lg:self-end"
            >
              Full Product Encyclopaedia
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </div>
        </Reveal>

        <Stagger className="mt-14 grid gap-12" delay={0.1}>
          {products.map((p, i) => (
            <StaggerItem key={p.id}>
              <ProductCard product={p} index={i} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
