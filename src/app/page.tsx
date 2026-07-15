import HeroCarousel from "@/components/home/HeroCarousel";
import Marquee from "@/components/Marquee";
import AboutTeaser from "@/components/home/AboutTeaser";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Gallery from "@/components/home/Gallery";
import Testimonials from "@/components/home/Testimonials";
import CtaBanner from "@/components/CtaBanner";

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <Marquee />
      <AboutTeaser />
      <FeaturedProducts />
      <Gallery />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
