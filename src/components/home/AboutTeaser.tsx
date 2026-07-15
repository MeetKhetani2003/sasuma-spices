import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Landmark, ShieldCheck, Scale, Truck } from "lucide-react";
import Reveal from "@/components/Reveal";

const PILLARS = [
  { icon: ShieldCheck, text: "Moisture & volatile-oil checks on every lot" },
  { icon: Scale, text: "Transparent brokerage slips — no hidden margins" },
  { icon: Truck, text: "Disciplined dispatch across 48-hour windows" },
];

const STATS = [
  { value: "20+", label: "Years of Unjha trade lineage" },
  { value: "100%", label: "Lab & nose-tested consignments" },
  { value: "4", label: "Core spice verticals, mastered" },
  { value: "48hr", label: "Average broker-to-truck window" },
];

export default function AboutTeaser() {
  return (
    <section className="relative overflow-hidden bg-ivory py-24 lg:py-32" aria-labelledby="about-teaser-title">

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        {/* Layered imagery */}
        <Reveal className="relative">
          <div className="relative">
            <div className="zoom-crop relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-lift">
              <Image
                src="/images/about-main.png"
                alt="Merchant's hands inspecting cumin over a jute sack in a golden-lit godown"
                fill
                sizes="(max-width: 1024px) 92vw, 44vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/50 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center gap-4 rounded-2xl border border-ivory/20 bg-forest-950/70 p-4 backdrop-blur-md">
                <Landmark className="size-8 shrink-0 text-gold" strokeWidth={1.6} />
                <p className="text-[12.5px] leading-snug text-ivory/85">
                  Operating from the <span className="font-semibold text-gold-light">Unjha APMC</span> — Asia&apos;s
                  largest cumin &amp; fennel trading yard.
                </p>
              </div>
            </div>

            {/* Overlap card */}
            <div className="zoom-crop absolute -right-4 -top-8 hidden w-44 overflow-hidden rounded-2xl border-[5px] border-ivory shadow-lift sm:block md:-right-10 md:w-56">
              <div className="relative aspect-square">
                <Image
                  src="https://images.pexels.com/photos/15741144/pexels-photo-15741144.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="Sacks of grains and spices at an Indian mandi trading yard"
                  fill
                  sizes="224px"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Gold plaque */}
            <div className="absolute -bottom-7 -left-4 rotate-[-3deg] rounded-xl bg-gold px-5 py-3 shadow-gold sm:-left-7">
              <p className="font-display text-2xl font-bold leading-none text-forest-950">Est. Unjha</p>
              <p className="mt-1 text-[9.5px] font-bold uppercase tracking-[0.26em] text-forest-900">
                Patan Road · Gujarat
              </p>
            </div>
          </div>
        </Reveal>

        {/* Narrative */}
        <div>
          <Reveal>
            <p className="eyebrow eyebrow-left text-gold-dark">The House of સાસુમા</p>
            <h2
              id="about-teaser-title"
              className="mt-6 font-display text-4xl font-semibold leading-[1.1] text-forest sm:text-5xl"
            >
              A Trusted Commission Agent at the{" "}
              <em className="italic text-gold-dark">Heart of the Spice Belt</em>
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-7 text-[15px] leading-relaxed text-moss">
              Shasuma Spices is a premium spice commission agency headquartered in Unjha, Gujarat —
              the mandi that sets India&apos;s jeera and variali prices each morning. We stand between
              the grower and the global buyer, vetting every consignment for purity, moisture and
              oil retention before a single bag changes hands.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-moss">
              Our promise is old-fashioned: a fair, written brokerage; honest grading; and bulk
              fulfillment that respects your timeline. Whether you need a single truck of
              Singapore-quality cumin or a container of parrot-green dhaniya, the Shasuma desk
              treats your lot as our own.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <ul className="mt-8 space-y-4">
              {PILLARS.map((p) => (
                <li key={p.text} className="group flex items-center gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-full border border-gold/50 bg-gold-pale text-gold-dark transition-all duration-300 group-hover:bg-gold group-hover:text-forest-950">
                    <p.icon className="size-4.5" strokeWidth={1.9} />
                  </span>
                  <span className="text-[14px] font-medium text-ink">{p.text}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.28}>
            <Link
              href="/about"
              className="group mt-10 inline-flex items-center gap-3 rounded-full bg-forest px-8 py-4 text-[12px] font-bold uppercase tracking-[0.2em] text-ivory shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest-600 hover:shadow-lift"
            >
              Discover Our Legacy
              <ArrowRight className="size-4 text-gold transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </Reveal>
        </div>
      </div>

      {/* Stats strip */}
      <div className="mx-auto mt-24 max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="grid grid-cols-2 overflow-hidden rounded-[1.75rem] border border-forest/10 bg-white shadow-card lg:grid-cols-4">
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className={`p-8 text-center transition-colors duration-500 hover:bg-gold-pale/60 ${
                  i !== 0 ? "border-l border-forest/10" : ""
                }`}
              >
                <p className="font-display text-4xl font-bold text-forest lg:text-5xl">
                  {s.value}
                  <span className="text-gold">.</span>
                </p>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-moss">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
