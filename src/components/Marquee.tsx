import { Diamond } from "lucide-react";

const ITEMS = [
  "Jeera · Cuminum cyminum",
  "Dhaniya · Coriandrum sativum",
  "Ajwain · Trachyspermum ammi",
  "Saunf · Foeniculum vulgare",
  "Unjha APMC · Asia's Largest Jeera Mandi",
  "Moisture-Verified Lots",
  "Transparent Brokerage Slips",
];

export default function Marquee() {
  const row = (
    <div className="flex shrink-0 items-center">
      {ITEMS.map((item) => (
        <span key={item} className="flex items-center">
          <span className="whitespace-nowrap px-8 font-display text-base italic tracking-wide text-gold-light/90 sm:text-lg">
            {item}
          </span>
          <Diamond className="size-2.5 shrink-0 fill-gold text-gold" />
        </span>
      ))}
    </div>
  );

  return (
    <div
      aria-hidden="true"
      className="relative overflow-hidden border-y border-gold/20 bg-forest py-4 grain"
    >
      <div className="flex w-max animate-marquee">
        {row}
        {row}
      </div>
    </div>
  );
}
