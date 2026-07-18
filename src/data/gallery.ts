export type MediaType = 'image' | 'video';

export interface GalleryMedia {
  id: string;
  type: MediaType;
  src: string;
  alt: string;
  caption: string;
  span: string;
}

// Ensure spaces in file names are URL encoded
export const GALLERY_ITEMS: GalleryMedia[] = [
  // Dhana
  {
    id: "dhana-img-1",
    type: "image",
    src: "/images/Dhana/WhatsApp%20Image%202026-07-18%20at%2011.58.09%20AM.jpeg",
    alt: "Dhana (Coriander) Premium Quality",
    caption: "Premium Dhana (Coriander Seeds)",
    span: "aspect-[4/3]",
  },
  {
    id: "dhana-img-2",
    type: "image",
    src: "/images/Dhana/WhatsApp%20Image%202026-07-18%20at%2011.58.10%20AM.jpeg",
    alt: "Dhana (Coriander) Close-up",
    caption: "Dhana Quality Inspection",
    span: "aspect-[3/4]",
  },
  {
    id: "dhana-vid-1",
    type: "video",
    src: "/images/Dhana/WhatsApp%20Video%202026-07-18%20at%2011.58.09%20AM.mp4",
    alt: "Dhana Processing Video",
    caption: "Dhana Processing",
    span: "aspect-[4/3]",
  },
  // Jeera
  {
    id: "jeera-img-1",
    type: "image",
    src: "/images/Jeera/6151773c-e935-467d-a5bd-e300c140dc33.jpg",
    alt: "Jeera (Cumin) Sacks",
    caption: "Jeera Sacks Ready for Dispatch",
    span: "aspect-[3/4]",
  },
  {
    id: "jeera-img-2",
    type: "image",
    src: "/images/Jeera/f529f477-6840-4a6e-813e-239fd9c5e2ab.jpg",
    alt: "Jeera (Cumin) Display",
    caption: "Jeera Display at Mandi",
    span: "aspect-[4/3]",
  },
  {
    id: "jeera-vid-1",
    type: "video",
    src: "/images/Jeera/WhatsApp%20Video%202026-07-18%20at%2011.58.08%20AM.mp4",
    alt: "Jeera Processing Video",
    caption: "Jeera Processing",
    span: "aspect-[3/4]",
  }
];
