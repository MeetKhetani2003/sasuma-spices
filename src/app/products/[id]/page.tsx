import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Leaf,
  FlaskConical,
  BadgeCheck,
  MessageCircle,
  Package,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { getProduct, whatsappLink, products } from "@/data/products";

export function generateStaticParams() {
  return products.map((p) => ({
    id: p.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProduct(id);
  if (!product) return { title: "Not Found" };
  return {
    title: `${product.name} — ${product.subtitle}`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProduct(id);

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-ivory pt-24 pb-16 sm:pt-32 sm:pb-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 overflow-hidden rounded-[2rem] bg-white shadow-card lg:grid-cols-2">
          
          {/* Left — Image Showcase */}
          <div className="relative min-h-[400px] w-full lg:min-h-full">
            <Image
              src={product.image}
              alt={`${product.subtitle} (${product.botanical}) in a carved wooden bowl`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8 lg:p-12">
              <p className="font-display text-4xl font-semibold text-ivory sm:text-5xl">{product.name}</p>
              <p className="mt-2 text-[12px] font-semibold uppercase tracking-[0.3em] text-ivory/80">
                {product.subtitle}
              </p>
            </div>
            <span className="absolute left-8 top-8 rounded-full border border-gold/40 bg-black/40 px-5 py-2 font-display text-[12px] font-semibold tracking-widest text-gold backdrop-blur-md">
              NO. {product.numeral}
            </span>
          </div>

          {/* Right — Details */}
          <div className="flex flex-col justify-center p-8 lg:p-14">
            <p className="flex items-center gap-2 font-display text-lg italic text-forest-600">
              <Leaf className="size-5 text-gold-dark" />
              <span className="not-italic text-[11px] font-semibold uppercase tracking-[0.28em] text-moss">
                Botanical
              </span>
              <em className="font-medium text-forest-800">{product.botanical}</em>
            </p>

            <h1 className="mt-6 font-display text-3xl font-medium leading-[1.2] text-ink sm:text-4xl">
              {product.tagline}
            </h1>

            <p className="mt-4 text-[15px] leading-relaxed text-moss/90">
              {product.description}
            </p>

            {/* Flavor profile */}
            <div className="mt-8">
              <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-moss">
                <Sparkles className="size-4 text-gold-dark" /> Flavor Profile
              </p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {product.profile.map((note) => (
                  <span
                    key={note}
                    className="rounded-full border border-gold/40 bg-gold-pale/50 px-4 py-2 text-[12px] font-semibold tracking-wide text-forest"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>

            {/* Purity metrics */}
            <div className="mt-8">
              <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-moss">
                <FlaskConical className="size-4 text-gold-dark" /> Grading &amp; Purity Metrics
              </p>
              <dl className="mt-3 divide-y divide-forest/10 rounded-2xl border border-forest/10 bg-forest/[0.02] p-6">
                {product.specs.map((spec) => (
                  <div key={spec.label} className="flex items-baseline justify-between gap-4 py-3 first:pt-0 last:pb-0">
                    <dt className="text-[12px] font-semibold uppercase tracking-[0.16em] text-moss">
                      {spec.label}
                    </dt>
                    <dd className="text-right text-[14px] font-medium text-ink">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Grades */}
            <div className="mt-8">
              <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-moss">
                <BadgeCheck className="size-4 text-gold-dark" /> Available Grades
              </p>
              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
                {product.grades.map((grade) => (
                  <span key={grade} className="flex items-center gap-2 text-[14px] font-medium text-ink">
                    <span className="size-1.5 rounded-full bg-crimson" />
                    {grade}
                  </span>
                ))}
              </div>
            </div>

            {/* Packaging */}
            <p className="mt-8 flex items-start gap-3 text-[13px] leading-relaxed text-moss">
              <Package className="mt-0.5 size-4 shrink-0 text-gold-dark" />
              {product.packaging.join(" · ")}
            </p>

            {/* Actions */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={whatsappLink(`${product.name} (${product.subtitle})`)}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex flex-1 items-center justify-center gap-3 rounded-full bg-forest px-8 py-4 text-[13px] font-bold uppercase tracking-[0.18em] text-ivory shadow-card transition-all duration-300 hover:bg-forest-600 hover:shadow-lift"
              >
                <MessageCircle className="size-4.5 text-gold transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110" />
                Inquire via WhatsApp
              </a>
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-full border-2 border-forest/20 px-8 py-4 text-[13px] font-bold uppercase tracking-[0.18em] text-forest transition-all duration-300 hover:border-crimson hover:bg-crimson hover:text-ivory"
              >
                Request Quote
                <ArrowRight className="size-4.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
