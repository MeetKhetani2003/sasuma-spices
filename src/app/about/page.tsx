import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Gem,
  Scale,
  Truck,
  Quote,
  FlaskConical,
  HandHeart,
  ScanEye,
  FileCheck,
  Landmark,
  ArrowRight,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import Marquee from "@/components/Marquee";
import CtaBanner from "@/components/CtaBanner";
import Reveal, { Stagger, StaggerItem } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About Us — Our Legacy & Purity Standards",
  description:
    "Inside Shasuma Spices: our strategic position at the Unjha APMC, our stringent mandi-floor selection process, moisture analysis and strict adherence to client parameters.",
};

const PROCESS = [
  {
    icon: Landmark,
    title: "Mandi-Floor Selection",
    text: "Our buyers stand on the Unjha yard at first trading bell. Lots are crush-tested for aroma, checked for seed boldness and rejected on the spot if freshness wavers.",
  },
  {
    icon: FlaskConical,
    title: "Moisture & Oil Analysis",
    text: "Digital moisture meters read within 48 hours of dispatch. Volatile-oil and thymol benchmarks are verified before we commit a single bag to your name.",
  },
  {
    icon: ScanEye,
    title: "Machine Cleaning & Grading",
    text: "Consignments pass through de-stoners, gyratory graders and color sorters — segregated by hue, size and split percentages under daylight panels.",
  },
  {
    icon: FileCheck,
    title: "Transparent Brokerage",
    text: "Every transaction closes with a written brokerage slip: mandi rate, grade, moisture, loading and our commission — visible line by line. No shadows.",
  },
  {
    icon: HandHeart,
    title: "Parameter Adherence",
    text: "Your specification sheet becomes our checklist. Purity %, moisture %, packaging format, documentation — held to the letter, photographed and reported.",
  },
];

const VALUES = [
  {
    icon: Gem,
    title: "Unmatched Purity",
    text: "We broker only what survives our own cupped-palm test — nose, texture and sight. Anything less never leaves the yard under the Shasuma name.",
    points: ["Nose & crush testing pre-purchase", "Machine-cleaned to 99%+ purity", "Zero tolerance for adulteration"],
  },
  {
    icon: Scale,
    title: "Transparent Brokerage",
    text: "Commission is declared, never embedded. You see the mandi rate we see, plus our fixed brokerage — the ancestral way of the commission agent.",
    points: ["Itemized brokerage slips", "Real mandi rates, same morning", "No hidden loading margins"],
  },
  {
    icon: Truck,
    title: "Reliable Supply Chain Logistics",
    text: "From yard gunny to your loading dock: secured godowns, breathable liners, tracked trucks and photo-verified stuffing on export containers.",
    points: ["48-hour average dispatch windows", "Moisture-safe packing practices", "Pan-India & EXIM coordination"],
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Since the lanes of Patan Road, Unjha"
        title="Our Legacy &"
        accent="Purity Standards"
        crumb="About Us"
        image="https://images.pexels.com/photos/17870116/pexels-photo-17870116.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        imageAlt="Golden light over a bustling spice bazaar in New Delhi"
        ghost="આ"
      />

      {/* ── Deep-Dive Story ─────────────────────────────────── */}
      <section className="relative overflow-hidden bg-ivory py-24 lg:py-32" aria-labelledby="story-title">

        <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="eyebrow eyebrow-left text-gold-dark">The Story of સાસુમા</p>
              <h2 id="story-title" className="mt-6 font-display text-4xl font-semibold leading-[1.12] text-forest sm:text-5xl">
                Positioned Where India&apos;s Cumin Price Is{" "}
                <em className="italic text-gold-dark">Written Each Morning</em>
              </h2>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-moss">
                <p>
                  Unjha is not merely a town on Gujarat&apos;s Mehsana map — it is the price-setting
                  heart of the world&apos;s jeera and variali trade. The APMC yard here clears several
                  lakh bags a season, and every serious buyer from Rajkot to Rotterdam watches its
                  morning rates. <strong className="font-semibold text-ink">Shasuma Spices operates from inside that current</strong>,
                  minutes from the auction rings on Patan Road.
                </p>
                <p>
                  The commission agent — the adatiya — is Indian agriculture&apos;s oldest guarantee.
                  A farmer sells because his agent vouches for the buyer; a buyer pays because his
                  agent vouches for the grain. We hold that trust as sacred capital. Our selection
                  process begins before dawn on the mandi floor: cupping seeds to release volatile
                  oils, splitting dhaniya to read internal color, running moisture meters across
                  random gunny pulls.
                </p>
                <p>
                  What survives selection is machine-cleaned, sorted by bold size and daylight hue,
                  then re-verified against <em>your</em> specification sheet — purity percentages,
                  moisture ceilings, thymol floors, packaging formats. We do not sell spice. We sell
                  the certainty that the spice named on the slip is the spice inside the bag.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <figure className="relative mt-10 overflow-hidden rounded-2xl border border-gold/40 bg-white p-8 shadow-card">
                <Quote className="absolute right-6 top-6 size-10 text-gold/25" aria-hidden="true" />
                <blockquote className="font-display text-xl italic leading-relaxed text-forest">
                  “A broker&apos;s capital is not the seed — it is the slip. If the slip lies once, the
                  mandi never forgets it.”
                </blockquote>
                <figcaption className="rule-gold mt-6 pt-4 text-[11px] font-bold uppercase tracking-[0.28em] text-gold-dark">
                  The Shasuma Family · Unjha, Gujarat
                </figcaption>
              </figure>
            </Reveal>
          </div>

          {/* Side imagery */}
          <div className="space-y-6">
            <Reveal delay={0.1} className="zoom-crop relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-lift lg:sticky lg:top-28">
              <Image
                src="/images/about-main.png"
                alt="Merchant holding cumin seeds over a jute sack in a warm godown in Unjha"
                fill
                sizes="(max-width: 1024px) 92vw, 44vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7">

                <p className="mt-1 text-[12px] font-semibold uppercase tracking-[0.26em] text-ivory/80">
                  Trust is the trade
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2} className="zoom-crop relative aspect-[16/9] overflow-hidden rounded-2xl shadow-card">
              <Image
                src="https://images.pexels.com/photos/8250271/pexels-photo-8250271.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Rows of colorful whole spices and powders at an Indian market"
                fill
                sizes="(max-width: 1024px) 92vw, 44vw"
                className="object-cover"
                loading="lazy"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <Marquee />

      {/* ── Process timeline ────────────────────────────────── */}
      <section className="bg-sand/60 py-24 lg:py-28" aria-labelledby="process-title">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow text-gold-dark">How a Lot Becomes a Shasuma Lot</p>
            <h2 id="process-title" className="mt-6 font-display text-4xl font-semibold leading-[1.1] text-forest sm:text-5xl">
              Five Gates, <em className="italic text-gold-dark">No Shortcuts</em>
            </h2>
          </Reveal>

          <div className="relative mt-16">
            <div className="rule-gold absolute left-[22px] top-0 h-full w-px lg:left-0 lg:top-[54px] lg:h-px lg:w-full" aria-hidden="true" />
            <Stagger className="grid gap-10 lg:grid-cols-5 lg:gap-6">
              {PROCESS.map((step, i) => (
                <StaggerItem key={step.title}>
                  <div className="group relative flex gap-6 lg:flex-col lg:items-center lg:text-center">
                    <span className="relative z-10 grid size-11 shrink-0 place-items-center rounded-full border border-gold bg-ivory font-display text-[15px] font-bold italic text-gold-dark shadow-card transition-all duration-500 group-hover:bg-gold group-hover:text-forest-950 lg:size-[54px] lg:text-lg">
                      {["I", "II", "III", "IV", "V"][i]}
                    </span>
                    <div className="lg:mt-6">
                      <div className="flex items-center gap-2.5 lg:justify-center">
                        <step.icon className="size-4.5 text-gold-dark" strokeWidth={1.9} />
                        <h3 className="font-display text-[17px] font-semibold text-forest">{step.title}</h3>
                      </div>
                      <p className="mt-2.5 text-[13px] leading-relaxed text-moss">{step.text}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* ── Core values ─────────────────────────────────────── */}
      <section className="bg-ivory py-24 lg:py-32" aria-labelledby="values-title">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="eyebrow eyebrow-left text-gold-dark">What We Guard</p>
              <h2 id="values-title" className="mt-6 max-w-xl font-display text-4xl font-semibold leading-[1.1] text-forest sm:text-5xl">
                Three Values, <em className="italic text-gold-dark">Held Without Exception</em>
              </h2>
            </div>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.2em] text-crimson transition-colors hover:text-crimson-dark"
            >
              Discuss Your Requirement
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </Reveal>

          <Stagger className="mt-14 grid gap-6 md:grid-cols-3" delay={0.1}>
            {VALUES.map((v) => (
              <StaggerItem key={v.title}>
                <article className="group lift relative h-full overflow-hidden rounded-[1.6rem] border border-forest/10 bg-white p-8 shadow-card hover:shadow-lift">
                  <div className="rule-gold absolute inset-x-0 top-0 scale-x-0 transition-transform duration-700 group-hover:scale-x-100" />
                  <span className="grid size-14 place-items-center rounded-2xl bg-forest text-gold shadow-card transition-all duration-500 group-hover:rotate-[-6deg] group-hover:bg-gold group-hover:text-forest-950">
                    <v.icon className="size-6" strokeWidth={1.7} />
                  </span>
                  <h3 className="mt-7 font-display text-2xl font-semibold text-forest">{v.title}</h3>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-moss">{v.text}</p>
                  <ul className="mt-6 space-y-2.5 border-t border-forest/10 pt-5">
                    {v.points.map((point) => (
                      <li key={point} className="flex items-center gap-2.5 text-[12.5px] font-medium text-ink">
                        <span className="size-1.5 rounded-full bg-crimson" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
