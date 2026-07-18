import type { Metadata } from "next";
import Gallery from "@/components/home/Gallery";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Gallery | Shasuma Spices",
  description: "View our trading floor, product quality inspections, and processing of premium spices.",
};

export default function GalleryPage() {
  return (
    <main>
      <PageHero
        eyebrow="Inside the Yard"
        title="Our"
        accent="Gallery"
        crumb="Gallery"
        image="/images/hero-cumin.png"
        imageAlt="Spices gallery cover"
        ghost="ગ"
      />
      <Gallery />
      <CtaBanner />
    </main>
  );
}
