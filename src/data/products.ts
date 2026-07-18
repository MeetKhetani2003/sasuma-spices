export type ProductSpec = { label: string; value: string };

export type Product = {
  id: string;
  numeral: string;
  name: string;
  subtitle: string;

  botanical: string;
  image: string;
  tagline: string;
  short: string;
  description: string;
  heritage: string;
  profile: string[];
  specs: ProductSpec[];
  grades: string[];
  applications: string[];
  packaging: string[];
};

export const products: Product[] = [
  {
    id: "jeera",
    numeral: "I",
    name: "Jeera",
    subtitle: "Cumin Seeds",

    botanical: "Cuminum cyminum",
    image: "/images/product-jeera.png",
    tagline: "The sovereign seed of Unjha — brokered at Asia's largest cumin mandi.",
    short:
      "High-oil Gujarat cumin, machine-cleaned to Singapore & Europe grades with aggressive moisture control.",
    description:
      "Sourced directly from the heart of Gujarat's premium jeera-belt — Patan, Banaskantha and the legendary Unjha yard itself. Characterized by a high volatile oil content, an earthy, intensely aromatic flavor profile and distinct warm undertones prized by blenders and extractors alike.",
    heritage:
      "Every lot our desk handles is wet-tested on the mandi floor before a single bag is brokered. Cumin from this terroir matures under low-humidity winter skies, naturally tightening the seed and concentrating essential oils — the reason Unjha jeera commands a premium on every global exchange.",
    profile: ["Earthy", "Warm undertones", "Intensely aromatic", "High volatile oil"],
    specs: [
      { label: "Purity", value: "99.5% Europe / 99% Singapore quality" },
      { label: "Moisture", value: "Below 8% — verified per lot" },
      { label: "Volatile Oil", value: "Min 2.5 ml/100g" },
      { label: "Foreign Matter", value: "Max 0.5% — machine cleaned" },
      { label: "Total Ash", value: "Max 9.5%" },
      { label: "Origin", value: "Unjha, Mehsana & Patan belt, Gujarat" },
    ],
    grades: [
      "Jeera Seeds (Singapore 99, Europe 99)",
      "Jeera Crushing Quality",
      "Jeera Patti",
      "Jeera Roasted Patti",
      "Jeera Dandi",
      "Jeera Powder"
    ],
    applications: ["Curry & masala blends", "Spice extractions", "Seasoning houses", "RTE food manufacturing"],
    packaging: ["25 kg PP bags", "50 kg jute bags", "Custom OEM packing on request"],
  },
  {
    id: "dhaniya",
    numeral: "II",
    name: "Dhaniya",
    subtitle: "Coriander Seeds",

    botanical: "Coriandrum sativum",
    image: "/images/product-dhaniya.png",
    tagline: "Golden-green spheres holding a bright, citrus-cooled heart.",
    short:
      "Whole golden-green coriander in premium green and parrot-green grades, oils intact, citrus-bright.",
    description:
      "Beautiful, whole, golden-green round coriander seeds yielding an exceptionally fresh, sweet, citrusy and woody aroma. Graded on luster, boldness and split-percentage, our dhaniya is perfectly preserved to retain its delicate essential oils through storage and container transit.",
    heritage:
      "Coriander demands gentleness — the seed's aromatic window closes fast in heat. Our partner yards hold stock in shaded, ventilated godowns, and we broker only lots that survive a crush-and-nose test: a fresh seed explodes with lemoned warmth; a tired one lies flat. Every consignment we clear passes that test.",
    profile: ["Sweet citrus", "Woody", "Fresh & bright", "Soft spice finish"],
    specs: [
      { label: "Purity", value: "99% machine cleaned" },
      { label: "Moisture", value: "Below 9% — verified per lot" },
      { label: "Volatile Oil", value: "0.3% – 1%" },
      { label: "Split Seeds", value: "Max 5%" },
      { label: "Admixture", value: "Max 1%" },
      { label: "Origin", value: "Gujarat & Rajasthan mandi network" },
    ],
    grades: [
      "Dhaniya Seeds",
      "Dhaniya Crushing",
      "Dhaniya Patti",
      "Dhaniya Powder"
    ],
    applications: ["Dhana-jiru bases", "Pickle masalas", "Distilleries", "Curry powder mills"],
    packaging: ["25 kg PP bags", "50 kg jute bags", "Custom OEM packing on request"],
  },
  {
    id: "ajwain",
    numeral: "III",
    name: "Ajwain",
    subtitle: "Carom Seeds",

    botanical: "Trachyspermum ammi",
    image: "/images/product-ajwain.png",
    tagline: "A small seed with a thundering thymol voice.",
    short:
      "Bold, hand-selected carom with concentrated thymol punch — sorted free of dust and stone.",
    description:
      "Intensely pungent and sharp, these hand-selected carom seeds offer a highly concentrated thymol aroma — vital for traditional culinary applications and medicinal extractives. Each consignment is thoroughly sorted for bold, uniform size and cleared of dust, stem and stone particles.",
    heritage:
      "Ajwain is where our brokerage discipline shows: the seed travels over dry western roads, so moisture creeps in quietly. Our desk insists on fresh moisture-meter readings within 48 hours of dispatch, protects lots with breathable lining, and rejects any consignment that cannot hold its pungency in a cupped palm.",
    profile: ["Pungent", "Sharp thymol", "Peppery bite", "Long aromatic tail"],
    specs: [
      { label: "Purity", value: "99% thoroughly sorted" },
      { label: "Moisture", value: "Below 9% — verified per lot" },
      { label: "Thymol Content", value: "2.5% – 4.5%" },
      { label: "Seed Size", value: "Bold, uniform" },
      { label: "Foreign Matter", value: "Nil dust & stone — sieved" },
      { label: "Origin", value: "Gujarat & Rajasthan belt" },
    ],
    grades: [
      "Ajwain Seeds",
      "Ajwain Patti",
      "Ajwain Kani"
    ],
    applications: ["Ayurvedic preparations", "Namkeen & bakery", "Tadka & tadka bases", "Digestive blends"],
    packaging: ["25 kg PP bags", "40 kg jute bags", "Custom OEM packing on request"],
  },
  {
    id: "saunf",
    numeral: "IV",
    name: "Saunf",
    subtitle: "Fennel Seeds",

    botanical: "Foeniculum vulgare",
    image: "/images/product-fennel.png",
    tagline: "Cool, sweet anise — Lucknow's softness, Gujarat's color.",
    short:
      "Uniform, vibrantly green fennel across Variyali & Lucknowi variants with a high anise profile.",
    description:
      "Highly aromatic, sweet and cooling fennel seeds, sourced specifically for uniform size, vibrant green color retention and high anise-flavor profiles. Categorized neatly across Variyali and Lucknowi variants, they are excellent for premium culinary spice blends and mouth-freshener manufacturing.",
    heritage:
      "Green is currency in fennel. Buyers read the lot by its luster before they read its assay, so our godowns grade under daylight panels and segregate by hue before moisture. It is slower work, but it is how a Shasuma saunf lot arrives still singing — sweet, cool, and unmistakably aniset.",
    profile: ["Sweet anise", "Cooling finish", "Delicately herbal", "Bright & rounded"],
    specs: [
      { label: "Purity", value: "99% graded & sorted" },
      { label: "Moisture", value: "Below 9% — verified per lot" },
      { label: "Essential Oil", value: "1.5% – 3%" },
      { label: "Color", value: "Vibrant green — daylight graded" },
      { label: "Seed Uniformity", value: "Min 95% uniform size" },
      { label: "Origin", value: "Unjha, Gujarat & Lucknow belts" },
    ],
    grades: [
      "Souff Seeds",
      "Souff Mamary",
      "Souff Patti"
    ],
    applications: ["Mukhwas manufacturing", "Confectionery", "Herbal infusions", "Culinary spice blends"],
    packaging: ["25 kg PP bags", "50 kg jute bags", "Custom OEM packing on request"],
  },
];

export const getProduct = (id: string) => products.find((p) => p.id === id);

export const CONTACT = {
  phoneDisplay: "+91 97257 31634",
  phoneHref: "tel:+919725731634",
  whatsapp: "919725731634",
  gstin: "24CSCPP9287Q1ZP",
  address: "S-23, Satyam Arcade, Patan Road, Unjha-384170 (Gujarat)",
  mapQuery: "Satyam Arcade, Patan Road, Unjha, Gujarat 384170",
};

export const whatsappLink = (productName?: string) => {
  const msg = productName
    ? `Namaste Shasuma Spices, I would like to enquire about your ${productName}. Please share current mandi rates, grades and availability.`
    : "Namaste Shasuma Spices, I would like to enquire about bulk spice procurement.";
  return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(msg)}`;
};
