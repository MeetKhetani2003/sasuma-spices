import type { Metadata } from "next";
import {
  MapPin,
  Phone,
  BadgeCheck,
  BriefcaseBusiness,
  Clock,
  MessageCircle,
  FileText,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import Marquee from "@/components/Marquee";
import Reveal, { Stagger, StaggerItem } from "@/components/Reveal";
import ContactForm from "@/components/contact/ContactForm";
import { CONTACT, whatsappLink } from "@/data/products";

export const metadata: Metadata = {
  title: "Contact Us — Get a Quote from the Unjha Desk",
  description:
    "Reach the Shasuma Spices trading desk at Satyam Arcade, Patan Road, Unjha. Call +91 97257 31634 or submit a bulk procurement inquiry — GSTIN verified.",
};

const DETAILS = [
  {
    icon: MapPin,
    label: "Registered Address",
    value: CONTACT.address,
    sub: "Minutes from the Unjha APMC trading yard",
  },
  {
    icon: Phone,
    label: "Direct Hotline",
    value: CONTACT.phoneDisplay,
    sub: "Market hours · Hindi & English",
    href: CONTACT.phoneHref,
  },
  {
    icon: BadgeCheck,
    label: "Tax / GST Verification",
    value: `GSTIN: ${CONTACT.gstin}`,
    sub: "Registered in Gujarat — verifiable on the GST portal",
  },
  {
    icon: BriefcaseBusiness,
    label: "Business Nature",
    value: "Spice Commission Agent & Brokerage Fulfillment",
    sub: "Adatiya services · Lot sourcing · Dispatch supervision",
  },
  {
    icon: Clock,
    label: "Trading Hours",
    value: "Mon – Sat · 9:00 AM – 7:00 PM IST",
    sub: "Mandi bell observed from 8:30 AM",
  },
];

export default function ContactPage() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(CONTACT.mapQuery)}&output=embed`;

  return (
    <>
      <PageHero
        eyebrow="One call to the yard"
        title="Let&apos;s Talk"
        accent="Spices & Numbers"
        crumb="Contact Us"
        image="https://images.pexels.com/photos/15741144/pexels-photo-15741144.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        imageAlt="Open sacks of spices and grains at a vibrant mandi stall"
        ghost="સ"
      />

      <section className="bg-ivory py-24 lg:py-32" aria-label="Contact form and corporate details">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          {/* Form */}
          <Reveal>
            <div className="rounded-[1.75rem] border border-forest/10 bg-white p-8 shadow-card sm:p-10">
              <p className="eyebrow eyebrow-left text-gold-dark">Write to the Desk</p>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-forest sm:text-4xl">
                Request a <em className="italic text-gold-dark">Same-Day Quote</em>
              </h2>
              <p className="mb-10 mt-3 text-[13.5px] leading-relaxed text-moss">
                Share the spice, grade and tonnage. We reply with current mandi rates, moisture
                certificates and a transparent brokerage figure — usually within trading hours.
              </p>
              <ContactForm />
            </div>
          </Reveal>

          {/* Corporate verification */}
          <Stagger className="space-y-4">
            {DETAILS.map((d) => (
              <StaggerItem key={d.label}>
                <div className="group lift flex items-start gap-4 rounded-2xl border border-forest/10 bg-white p-6 shadow-card hover:border-gold/60 hover:shadow-lift">
                  <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-forest text-gold transition-all duration-500 group-hover:bg-gold group-hover:text-forest-950">
                    <d.icon className="size-5" strokeWidth={1.8} />
                  </span>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-moss">{d.label}</p>
                    {d.href ? (
                      <a
                        href={d.href}
                        className="mt-1 block font-display text-[17px] font-semibold text-forest transition-colors hover:text-crimson"
                      >
                        {d.value}
                      </a>
                    ) : (
                      <p className="mt-1 font-display text-[17px] font-semibold leading-snug text-forest">
                        {d.value}
                      </p>
                    )}
                    <p className="mt-1 text-[12px] text-moss/80">{d.sub}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}

            <StaggerItem>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between overflow-hidden rounded-2xl bg-forest p-6 text-ivory shadow-card transition-all duration-300 hover:bg-forest-600 hover:shadow-lift"
              >
                <span>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.26em] text-gold">
                    Prefer instant talk?
                  </span>
                  <span className="mt-1 block font-display text-lg font-semibold">
                    WhatsApp the Trading Desk
                  </span>
                </span>
                <span className="grid size-12 place-items-center rounded-full bg-gold text-forest-950 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                  <MessageCircle className="size-5" />
                </span>
              </a>
            </StaggerItem>

            <StaggerItem>
              <p className="flex items-start gap-3 rounded-2xl border border-dashed border-forest/20 bg-sand/60 p-5 text-[12px] leading-relaxed text-moss">
                <FileText className="mt-0.5 size-4 shrink-0 text-gold-dark" />
                For EXIM buyers: share your IEC and specification sheet on the hotline — we arrange
                fumigation, phytosanitary documentation and stuffing supervision on export lots.
              </p>
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      {/* Map */}
      <section className="bg-sand/60 pb-24 lg:pb-32" aria-label="Location map">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="overflow-hidden rounded-[1.75rem] border border-forest/10 bg-white shadow-lift">
              <div className="flex flex-col items-start justify-between gap-3 border-b border-forest/10 p-6 sm:flex-row sm:items-center sm:px-8">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-full bg-crimson text-ivory">
                    <MapPin className="size-4.5" />
                  </span>
                  <div>
                    <p className="font-display text-lg font-semibold text-forest">Find Our Godown Desk</p>
                    <p className="text-[12px] text-moss">{CONTACT.address}</p>
                  </div>
                </div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT.mapQuery)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11.5px] font-bold uppercase tracking-[0.18em] text-crimson transition-colors hover:text-crimson-dark"
                >
                  Open in Google Maps →
                </a>
              </div>
              <iframe
                title="Shasuma Spices — Satyam Arcade, Patan Road, Unjha, Gujarat"
                src={mapSrc}
                className="h-[420px] w-full border-0 grayscale-[25%] contrast-[1.05]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </section>

      <Marquee />
    </>
  );
}
