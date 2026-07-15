"use client";

import { NotebookText } from "lucide-react";
import Link from "next/link";

export default function SpecButton({ productId }: { productId: string }) {
  return (
    <Link
      href={`/products/${productId}`}
      className="group inline-flex cursor-pointer items-center gap-3 rounded-full bg-crimson px-7 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-ivory shadow-[0_16px_40px_-14px_rgba(206,17,38,0.65)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-crimson-dark"
    >
      <NotebookText className="size-4.5 text-gold-light transition-transform duration-300 group-hover:-rotate-6" />
      View Detailed Specifications &amp; Images
    </Link>
  );
}
