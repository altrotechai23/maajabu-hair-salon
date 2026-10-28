export type HeroMedia =
  | {
      type: "image";
      src: string;
      alt: string;
      poster?: never;
      focalPoint?: string;
    }
  | {
      type: "video";
      src: string;
      alt: string;
      poster: string;
      focalPoint?: string;
    };

export type HeroScene = {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  description: string;
  media: HeroMedia;
};

export const heroScenes: HeroScene[] = [
  {
    id: "hero-01",
    index: "01",
    eyebrow: "Long Street • Cape Town",
    title: "Your beauty.",
    description:
      "Women’s hairstyling, beautiful braids and protective styles in the heart of Cape Town.",
    media: {
      type: "image",
      src: "/images/maajabu/hero-image.webp",
      alt: "MAAJABU HAIR SALON beauty salon in Cape Town",
    },
  },

  {
    id: "hero-02",
    index: "02",
    eyebrow: "Women’s Hair • Braids • Protective Styles",
    title: "Your style.",
    description:
      "A space to explore your look, your style and your expression.",
    media: {
      type: "image",
      src: "/images/maajabu/hero-image.webp",
      alt: "MAAJABU HAIR SALON hair and beauty experience",
    },
  },

  {
    id: "hero-03",
    index: "03",
    eyebrow: "Cape Town",
    title: "Make it yours.",
    description:
      "Discover the MAAJABU HAIR SALON experience on Long Street.",
    media: {
      type: "image",
      src: "/images/maajabu/salon-interior.webp",
      alt: "Maajabu Hair Salon interior",
    },
  },

  {
    id: "hero-04",
    index: "04",
    eyebrow: "Beauty • Self-expression",
    title: "Own your look.",
    description:
      "Beauty is personal. Your next look starts with you.",
    media: {
      type: "image",
      src: "/images/maajabu/hero-image.webp",
      alt: "MAAJABU HAIR SALON beauty detail",
    },
  },

  {
    id: "hero-05",
    index: "05",
    eyebrow: "67 Long Street",
    title: "Come through.",
    description:
      "Find MAAJABU HAIR SALON in Cape Town City Centre.",
    media: {
      type: "image",
      src: "/images/maajabu/hero-image.webp",
      alt: "Natural hair styling inspiration for women",
    },
  },

  {
    id: "hero-06",
    index: "06",
    eyebrow: "MAAJABU HAIR SALON",
    title: "Your Maajabu Hair.",
    description:
      "Ready for your next look?",
    media: {
      type: "image",
      src: "/images/maajabu/hair-plant.jpeg",
      alt: "MAAJABU HAIR SALON premium beauty experience",
    },
  },
];