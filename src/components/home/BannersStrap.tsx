import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function BannersStrap() {
  return (
    <section className="bg-sand-light">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <Reveal className="w-full md:w-1/2">
            <div className="relative w-full overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/ctabanner1.jpeg"
                alt="Promotional banner 1"
                width={800}
                height={400}
                className="h-auto w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </Reveal>
          <Reveal delay={0.15} className="w-full md:w-1/2">
            <div className="relative w-full overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/ctabanner2.jpeg"
                alt="Promotional banner 2"
                width={800}
                height={400}
                className="h-auto w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
