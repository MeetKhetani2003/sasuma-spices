import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Reveal from "@/components/Reveal";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  accent: string;
  crumb: string;
  image: string;
  imageAlt: string;
  ghost?: string;
};

export default function PageHero({ eyebrow, title, accent, crumb, image, imageAlt, ghost = "સા" }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[58svh] items-end overflow-hidden bg-forest-950 pb-14 pt-36 grain">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-45"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/60 to-forest-950/30" />



      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
        <Reveal y={24}>
          <p className="eyebrow eyebrow-left text-gold">{eyebrow}</p>
          <h1 className="mt-5 max-w-4xl font-display text-[11vw] font-semibold leading-[1.05] text-ivory sm:text-6xl lg:text-7xl">
            {title} <em className="italic text-gold-light">{accent}</em>
          </h1>
          <nav
            aria-label="Breadcrumb"
            className="mt-6 flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.2em] text-ivory/50"
          >
            <Link href="/" className="transition-colors hover:text-gold">
              Home
            </Link>
            <ChevronRight className="size-3.5 text-gold" />
            <span className="text-gold-light">{crumb}</span>
          </nav>
        </Reveal>
      </div>
    </section>
  );
}
