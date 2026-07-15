"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  Leaf,
  FlaskConical,
  BadgeCheck,
  MessageCircle,
  Package,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { getProduct, whatsappLink, type Product } from "@/data/products";

type ProductModalContextValue = {
  openProduct: (id: string) => void;
};

const ProductModalContext = createContext<ProductModalContextValue | null>(null);

export const useProductModal = () => {
  const ctx = useContext(ProductModalContext);
  if (!ctx) throw new Error("useProductModal must be used inside ProductModalProvider");
  return ctx;
};

const panelEase = [0.22, 1, 0.36, 1] as const;

function ModalContent({ product, onClose }: { product: Product; onClose: () => void }) {
  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={`${product.name} — ${product.subtitle} specifications`}
      className="relative z-10 grid max-h-[90vh] w-[min(1060px,94vw)] grid-cols-1 overflow-hidden rounded-2xl bg-ivory shadow-lift md:grid-cols-[1.02fr_1fr]"
      initial={{ opacity: 0, y: 48, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 32, scale: 0.97, transition: { duration: 0.28 } }}
      transition={{ duration: 0.55, ease: panelEase }}
    >
      {/* Close */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close product details"
        className="absolute right-4 top-4 z-20 grid size-10 cursor-pointer place-items-center rounded-full border border-white/25 bg-forest-950/60 text-ivory backdrop-blur transition-all duration-300 hover:rotate-90 hover:bg-crimson"
      >
        <X className="size-4.5" strokeWidth={2.2} />
      </button>

      {/* Left — image showcase */}
      <div className="relative min-h-[240px] grain md:min-h-full">
        <Image
          src={product.image}
          alt={`${product.subtitle} (${product.botanical}) in a carved wooden bowl`}
          fill
          sizes="(max-width: 768px) 94vw, 48vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/85 via-forest-950/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-7">

          <p className="mt-1 font-display text-4xl font-semibold text-ivory">{product.name}</p>
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-ivory/70">
            {product.subtitle}
          </p>
        </div>
        <span className="absolute left-6 top-6 font-display text-sm italic tracking-widest text-gold">
          No. {product.numeral}
        </span>
      </div>

      {/* Right — details */}
      <div className="overflow-y-auto p-7 md:p-9 [scrollbar-width:thin]">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } } }}
        >
          <motion.p
            variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
            className="flex items-center gap-2 font-display text-base italic text-forest-600"
          >
            <Leaf className="size-4 text-gold-dark" />
            <span className="not-italic text-[10px] font-semibold uppercase tracking-[0.28em] text-moss">
              Botanical
            </span>
            <em className="font-medium">{product.botanical}</em>
          </motion.p>

          <motion.h3
            variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
            className="mt-4 font-display text-xl font-medium leading-snug text-ink"
          >
            {product.tagline}
          </motion.h3>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
            className="mt-3 text-sm leading-relaxed text-moss"
          >
            {product.description}
          </motion.p>

          {/* Flavor profile */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
            className="mt-6"
          >
            <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-moss">
              <Sparkles className="size-3.5 text-gold-dark" /> Flavor Profile
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {product.profile.map((note) => (
                <span
                  key={note}
                  className="rounded-full border border-gold/50 bg-gold-pale px-3.5 py-1.5 text-[11px] font-semibold tracking-wide text-forest"
                >
                  {note}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Purity metrics */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
            className="mt-6"
          >
            <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-moss">
              <FlaskConical className="size-3.5 text-gold-dark" /> Grading &amp; Purity Metrics
            </p>
            <dl className="mt-2 divide-y divide-forest/10">
              {product.specs.map((spec) => (
                <div key={spec.label} className="flex items-baseline justify-between gap-4 py-2.5">
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-moss">
                    {spec.label}
                  </dt>
                  <dd className="text-right text-[13px] font-medium text-ink">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </motion.div>

          {/* Grades */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
            className="mt-5"
          >
            <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-moss">
              <BadgeCheck className="size-3.5 text-gold-dark" /> Available Grades
            </p>
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5">
              {product.grades.map((grade) => (
                <span key={grade} className="flex items-center gap-1.5 text-[12.5px] font-medium text-ink">
                  <span className="size-1 rounded-full bg-crimson" />
                  {grade}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Packaging */}
          <motion.p
            variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
            className="mt-5 flex items-start gap-2 text-[12px] leading-relaxed text-moss"
          >
            <Package className="mt-0.5 size-3.5 shrink-0 text-gold-dark" />
            {product.packaging.join(" · ")}
          </motion.p>

          {/* Actions */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
            className="mt-7 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href={whatsappLink(`${product.name} (${product.subtitle})`)}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex flex-1 items-center justify-center gap-2.5 rounded-full bg-forest px-6 py-3.5 text-[12px] font-bold uppercase tracking-[0.18em] text-ivory shadow-card transition-all duration-300 hover:bg-forest-600 hover:shadow-lift"
            >
              <MessageCircle className="size-4 text-gold transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110" />
              Inquire via WhatsApp
            </a>
            <Link
              href="/contact"
              onClick={onClose}
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-forest/25 px-6 py-3.5 text-[12px] font-bold uppercase tracking-[0.18em] text-forest transition-all duration-300 hover:border-crimson hover:bg-crimson hover:text-ivory"
            >
              Request Quote
              <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function ProductModalProvider({ children }: { children: ReactNode }) {
  const [openId, setOpenId] = useState<string | null>(null);
  const product = openId ? getProduct(openId) : undefined;

  const openProduct = useCallback((id: string) => setOpenId(id), []);
  const close = useCallback(() => setOpenId(null), []);

  useEffect(() => {
    if (!openId) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openId, close]);

  return (
    <ProductModalContext.Provider value={{ openProduct }}>
      {children}
      <AnimatePresence>
        {product && (
          <motion.div
            key={product.id}
            className="fixed inset-0 z-[100] grid place-items-center overflow-y-auto p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.button
              type="button"
              aria-label="Close product details backdrop"
              onClick={close}
              className="fixed inset-0 cursor-pointer bg-forest-950/70 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <ModalContent product={product} onClose={close} />
          </motion.div>
        )}
      </AnimatePresence>
    </ProductModalContext.Provider>
  );
}
