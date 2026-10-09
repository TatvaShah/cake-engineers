import type { SiteConfig } from "@/lib/types";

// The ONLY file a builder edits (plus images in /public).
// Empty or missing optional fields hide their section automatically.
// Use real facts only: the leads JSON, the IG profile, and posts. Never invent hours, prices, or reviews.
// No double hyphens anywhere in copy; the build fails if one slips in.

export const site: SiteConfig = {
  name: "Cake Engineers",
  tagline: "Custom cakes, dessert tables, and hampers in Brampton (Castlemore).",
  category: "Custom cakes",
  schemaType: "Bakery",
  area: "Brampton, ON",
  siteUrl: "https://cake-engineers.vercel.app",

  theme: {
    preset: "bakery-pastel",
    colors: { accent: "#a45a6e" },
  },
  logo: "/images/logo.jpg",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "Custom cakes in Brampton",
    headline: "Cakes engineered for your celebration",
    subhead: "Custom cakes, dessert tables, and hampers, made to order. Call or DM with your date, size, flavour, and design idea. Advance order and deposit required.",
    images: [
      { src: "/images/post1.jpg", alt: "Two tier blue teddy bear first birthday cake" },
      { src: "/images/post2.jpg", alt: "Bride to be cake with red florals" },
      { src: "/images/post3.jpg", alt: "Pink ombre birthday cake with florals and gold" },
    ],
    secondaryCta: { label: "See the cakes", href: "#gallery" },
  },

  highlights: [
    "Custom cakes, dessert tables and hampers",
    "Order in advance, deposit required",
    "Call or DM to order",
    "Brampton (Castlemore)",
  ],

  about: {
    title: "Made for your moment",
    body: [
      "Cake Engineers creates custom cakes, dessert tables, and hampers for celebrations in Brampton and beyond. From bridal showers and birthdays to themed kids cakes, every order is designed around your idea.",
      "Orders are taken by call or Instagram DM. Please order in advance. A deposit is required to hold your date.",
    ],
    image: { src: "/images/post2.jpg", alt: "Bride to be cake by Cake Engineers" },
  },

  menu: {
    title: "What we make",
    intro: "A few of the creations we bake often. Every cake is quoted in your DM based on size, design, and date.",
    variant: "cards",
    groups: [
      {
        title: "Celebration cakes",
        note: "Quoted by DM",
        items: [
          { name: "Custom cakes", description: "Birthdays, bridal showers, themed designs, and more.", image: { src: "/images/post1.jpg", alt: "Custom teddy bear birthday cake" }, href: "https://www.instagram.com/p/DeIuUiQMkBy/" },
          { name: "Bridal shower cakes", description: "Elegant designs for bride to be celebrations.", image: { src: "/images/post2.jpg", alt: "Bride to be cake" }, href: "https://www.instagram.com/p/DeBH3BoDOdg/" },
          { name: "Dessert tables and hampers", description: "Sweet setups and gift hampers for your event.", image: { src: "/images/post3.jpg", alt: "Pink and gold celebration cake" }, href: "https://www.instagram.com/p/Dd2p8B6sri0/" },
          { name: "Cake workshops", description: "Hands on cake classes when offered.", image: { src: "/images/post9.jpg", alt: "Floral celebration cake" } },
        ],
      },
    ],
  },

  gallery: {
    title: "A look at the cakes",
    items: [
      { src: "/images/post1.jpg", width: 1080, height: 1329, alt: "Blue teddy bear first birthday cake", caption: "Harnav turns one", href: "https://www.instagram.com/p/DeIuUiQMkBy/" },
      { src: "/images/post2.jpg", width: 1080, height: 1080, alt: "Bride to be cake with red rose skirt", caption: "She's about to be a Mrs.", href: "https://www.instagram.com/p/DeBH3BoDOdg/" },
      { src: "/images/post3.jpg", width: 1080, height: 1080, alt: "Pink ombre birthday cake for Deepa", caption: "Happy birthday Deepa", href: "https://www.instagram.com/p/Dd2p8B6sri0/" },
      { src: "/images/post4.jpg", width: 1080, height: 1375, alt: "Champagne bottle birthday cake", caption: "Cheers to Arora Ji", href: "https://www.instagram.com/p/Dd2p0mJsbyu/" },
      { src: "/images/post5.jpg", width: 1080, height: 1151, alt: "Minnie Mouse birthday cake", caption: "Happy birthday Parnazz", href: "https://www.instagram.com/p/Dd2pxoNsnci/" },
      { src: "/images/post6.jpg", width: 1080, height: 1080, alt: "Half birthday autumn cake", caption: "Half way to one", href: "https://www.instagram.com/p/Dd2pv15Mz0R/" },
      { src: "/images/post7.jpg", width: 1080, height: 1134, alt: "Pale yellow cake with pink flowers", caption: "Happy B'day Mannu", href: "https://www.instagram.com/p/Dd2ps1Ksuhb/" },
      { src: "/images/post8.jpg", width: 1080, height: 1080, alt: "Mechanic and truck themed birthday cake", caption: "Happy birthday Sameer", href: "https://www.instagram.com/p/Dd2ppG5MT_L/" },
      { src: "/images/post9.jpg", width: 1080, height: 1176, alt: "White cake with pink roses for Mom and Dad", caption: "Mom and Dad", href: "https://www.instagram.com/p/Dd2pnBMsANl/" },
    ],
  },

  reels: {
    title: "A closer look",
    intro: "",
    items: [],
  },

  instagram: {
    handle: "cake_engineers_ca",
    embeds: [
      "https://www.instagram.com/p/DeIuUiQMkBy/",
      "https://www.instagram.com/p/DeBH3BoDOdg/",
      "https://www.instagram.com/p/Dd2p8B6sri0/",
    ],
    embedsTitle: "Fresh from Instagram",
  },

  order: {
    title: "Order by call or DM",
    intro: "Tap the button to copy a starter message, then paste it into an Instagram DM. You can also call to place your order.",
    dmMessage: "Hi Cake Engineers! I would like to place a custom order.\nDate needed:\nServings or size:\nFlavour:\nDesign idea:",
    links: [],
    note: "Please order in advance. A deposit is required.",
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I order?", a: "Call or send an Instagram DM with your date, servings or size, flavour, and design idea. A deposit is required, and advance notice helps us plan your cake." },
    { q: "What do you make?", a: "Custom cakes, dessert tables, and hampers, plus cake workshops when they are offered." },
    { q: "Where are you based?", a: "Cake Engineers is based in Brampton (Castlemore), Ontario." },
    { q: "Do you need a deposit?", a: "Yes. Orders require advance notice and a deposit to hold your date." },
  ],

  contact: {
    area: "Brampton (Castlemore), Ontario",
    phone: "+1 647-819-0383",
    socials: [],
  },

  seo: {
    title: "Cake Engineers | Custom cakes in Brampton",
    description: "Custom cakes, dessert tables, and hampers in Brampton (Castlemore). Order by call or Instagram DM. Advance order and deposit required.",
    keywords: ["custom cakes Brampton", "dessert tables Brampton", "Cake Engineers", "bridal shower cakes Brampton", "cake hampers Castlemore"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
