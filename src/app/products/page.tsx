import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, BadgeCheck, ChefHat, Leaf } from "lucide-react";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import SpecButton from "@/components/products/SpecButton";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Our Products — Jeera, Dhaniya, Ajwain & Saunf",
  description:
    "The Shasuma encyclopaedia: Gujarat jeera to Singapore/Europe grades, parrot-green dhaniya, bold thymol ajwain and vibrant Lucknowi & Variyali saunf — specs, grades and procurement details.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="The Curated Quartet"
        title="Four Spices,"
        accent="Mastered Encyclopedically"
        crumb="Our Products"
        image="/images/hero-spices.png"
        imageAlt="Premium whole spices in brass bowls on dark slate"
      />

      {/* Intro ribbon */}
      <section className="bg-ivory py-14" aria-label="Product range overview">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {products.map((p) => (
                <a
                  key={p.id}
                  href={`#${p.id}`}
                  className="group lift flex items-center gap-4 rounded-2xl border border-forest/10 bg-white p-5 shadow-card hover:border-gold/60 hover:shadow-lift"
                >
                  <span className="grid size-12 shrink-0 place-items-center overflow-hidden rounded-full">
                    <span className="relative block size-12 overflow-hidden rounded-full">
                      <Image src={p.image} alt="" fill sizes="48px" className="object-cover" />
                    </span>
                  </span>
                  <span className="flex-1">
                    <span className="block font-display text-lg font-semibold leading-tight text-forest">
                      {p.name}
                    </span>
                    <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-moss">
                      {p.subtitle}
                    </span>
                  </span>
                  <ArrowRight className="size-4 shrink-0 text-crimson transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <Marquee />

      {/* Product chapters */}
      <div className="bg-ivory">
        {products.map((p, idx) => {
          const flip = idx % 2 === 1;
          return (
            <section
              key={p.id}
              id={p.id}
              className={`relative scroll-mt-24 overflow-hidden py-20 lg:py-28 ${idx % 2 === 1 ? "bg-sand/50" : "bg-ivory"}`}
              aria-labelledby={`${p.id}-title`}
            >
              <span
                className="pointer-events-none absolute -top-10 select-none font-display text-[11rem] font-bold italic leading-none text-forest/[0.045] lg:text-[15rem]"
                style={{ [flip ? "left" : "right"]: "-1.5rem" } as React.CSSProperties}
                aria-hidden="true"
              >
                {p.numeral}
              </span>

              <div className="relative mx-auto grid max-w-7xl items-start gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
                {/* Image column */}
                <Reveal className={flip ? "lg:order-2" : ""}>
                  <div className="zoom-crop group relative aspect-[5/4] overflow-hidden rounded-[2rem] shadow-lift">
                    <Image
                      src={p.image}
                      alt={`${p.subtitle} (${p.botanical}) — premium grade in a carved wooden bowl`}
                      fill
                      sizes="(max-width: 1024px) 92vw, 46vw"
                      className="object-cover"
                      loading={idx === 0 ? "eager" : "lazy"}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-950/75 via-forest-950/10 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-7">
                      <div>

                        <p className="mt-0.5 font-display text-2xl font-semibold text-ivory">{p.name}</p>
                        <p className="text-[10.5px] font-semibold uppercase tracking-[0.3em] text-ivory/70">
                          {p.subtitle}
                        </p>
                      </div>
                      <span className="rounded-full border border-gold/50 bg-forest-950/60 px-4 py-1.5 font-display text-xs italic tracking-[0.2em] text-gold-light backdrop-blur">
                        Chapter {p.numeral}
                      </span>
                    </div>
                  </div>

                  {/* Spec sheet */}
                  <div className="mt-8 rounded-2xl border border-forest/10 bg-white p-7 shadow-card">
                    <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.28em] text-moss">
                      <BadgeCheck className="size-4 text-gold-dark" /> Trading Specifications
                    </p>
                    <dl className="mt-3 divide-y divide-forest/10">
                      {p.specs.map((s) => (
                        <div key={s.label} className="flex items-baseline justify-between gap-6 py-2.5">
                          <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-moss">
                            {s.label}
                          </dt>
                          <dd className="text-right font-display text-[14px] font-medium italic text-forest">
                            {s.value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </Reveal>

                {/* Copy column */}
                <div className={flip ? "lg:order-1" : ""}>
                  <Reveal>
                    <p className="eyebrow eyebrow-left text-gold-dark">
                      Chapter {p.numeral} — {p.subtitle}
                    </p>
                    <h2
                      id={`${p.id}-title`}
                      className="mt-5 font-display text-4xl font-semibold leading-[1.08] text-forest sm:text-5xl"
                    >
                      {p.name}{" "}
                      <em className="italic text-gold-dark">({p.botanical})</em>
                    </h2>
                    <p className="mt-4 font-display text-lg italic leading-snug text-forest-600">
                      “{p.tagline}”
                    </p>
                  </Reveal>

                  <Reveal delay={0.1}>
                    <p className="mt-6 text-[15px] leading-relaxed text-moss">{p.description}</p>
                    <p className="mt-4 text-[15px] leading-relaxed text-moss">{p.heritage}</p>
                  </Reveal>

                  <Reveal delay={0.18}>
                    <div className="mt-7 flex flex-wrap gap-2">
                      {p.profile.map((note) => (
                        <span
                          key={note}
                          className="inline-flex items-center gap-1.5 rounded-full border border-gold/50 bg-gold-pale px-3.5 py-1.5 text-[11px] font-semibold tracking-wide text-forest"
                        >
                          <Leaf className="size-3 text-gold-dark" />
                          {note}
                        </span>
                      ))}
                    </div>
                  </Reveal>

                  <Reveal delay={0.24}>
                    <div className="mt-8 grid gap-6 sm:grid-cols-2">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-moss">
                          Grades Brokered
                        </p>
                        <ul className="mt-3 space-y-2">
                          {p.grades.map((g) => (
                            <li key={g} className="flex items-center gap-2.5 text-[13.5px] font-medium text-ink">
                              <span className="size-1.5 rounded-full bg-crimson" />
                              {g}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.28em] text-moss">
                          <ChefHat className="size-3.5 text-gold-dark" /> Applications
                        </p>
                        <ul className="mt-3 space-y-2">
                          {p.applications.map((a) => (
                            <li key={a} className="flex items-center gap-2.5 text-[13.5px] font-medium text-ink">
                              <span className="size-1.5 rounded-full bg-gold" />
                              {a}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Reveal>

                  <Reveal delay={0.3}>
                    <div className="mt-10 flex flex-wrap items-center gap-4">
                      <SpecButton productId={p.id} />
                      <p className="text-[12px] leading-snug text-moss">
                        <span className="font-semibold text-ink">Packing:</span>{" "}
                        {p.packaging.join(" · ")}
                      </p>
                    </div>
                  </Reveal>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <CtaBanner />
    </>
  );
}
