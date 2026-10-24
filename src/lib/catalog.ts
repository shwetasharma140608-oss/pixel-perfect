import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";
import p5 from "@/assets/p5.jpg";
import p6 from "@/assets/p6.jpg";
import p7 from "@/assets/p7.jpg";
import p8 from "@/assets/p8.jpg";
import p9 from "@/assets/p9.jpg";
import p10 from "@/assets/p10.jpg";
import p11 from "@/assets/p11.jpg";
import p12 from "@/assets/p12.jpg";
import p13 from "@/assets/p13.jpg";
import p14 from "@/assets/p14.jpg";
import p15 from "@/assets/p15.jpg";
import p16 from "@/assets/p16.jpg";
import p17 from "@/assets/p17.jpg";
import p18 from "@/assets/p18.jpg";
import p19 from "@/assets/p19.jpg";
import p20 from "@/assets/p20.jpg";
import c1 from "@/assets/c1.jpg";
import c2 from "@/assets/c2.jpg";
import c3 from "@/assets/c3.jpg";
import c4 from "@/assets/c4.jpg";
import look1 from "@/assets/look1.jpg";
import look2 from "@/assets/look2.jpg";
import look3 from "@/assets/look3.jpg";
import look4 from "@/assets/look4.jpg";
import look5 from "@/assets/look5.jpg";
import look6 from "@/assets/look6.jpg";

export type Category =
  | "Earrings"
  | "Necklaces"
  | "Rings"
  | "Bracelets"
  | "Bangles & More"
  | "Combo Sets";

export type Occasion = "Everyday" | "Party" | "Traditional Fusion";

export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: Category;
  occasion: Occasion;
  material: string;
  description: string;
  options?: { label: string; values: string[] };
  tags: Array<"new" | "trending" | "bestseller">;
};

export const formatINR = (value: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);

export const products: Product[] = [
  {
    id: "solene-gold-hoops",
    name: "Solene Chunky Gold Hoops",
    price: 2490,
    image: p1,
    category: "Earrings",
    occasion: "Everyday",
    material: "18k gold plated brass",
    description:
      "Smooth, weightless hoops with a high-polish dome finish — the piece you reach for every single morning.",
    options: { label: "Size", values: ["Small 20mm", "Medium 28mm", "Large 35mm"] },
    tags: ["bestseller", "trending"],
  },
  {
    id: "pearl-whisper-studs",
    name: "Pearl Whisper Studs",
    price: 1690,
    image: p2,
    category: "Earrings",
    occasion: "Everyday",
    material: "Freshwater pearl, gold vermeil",
    description:
      "Bezel-set freshwater pearls in a warm gold rim. Quiet luxury for desks, dinners and everything in between.",
    tags: ["bestseller"],
  },
  {
    id: "noir-cascade-earrings",
    name: "Noir Cascade Statement Earrings",
    price: 4890,
    image: p3,
    category: "Earrings",
    occasion: "Party",
    material: "Black onyx crystals, gold finish",
    description:
      "A waterfall of faceted black stones that catches every light in the room. Made for black-tie evenings.",
    tags: ["new", "trending"],
  },
  {
    id: "rajmahal-jhumkas",
    name: "Rajmahal Peacock Jhumkas",
    price: 3450,
    image: p4,
    category: "Earrings",
    occasion: "Traditional Fusion",
    material: "Antique gold finish, pearl drops",
    description:
      "Hand-detailed peacock motifs with a fringe of tiny pearls — festive heritage with a modern weight.",
    tags: ["bestseller"],
  },
  {
    id: "chandni-chandbalis",
    name: "Chandni Kundan Chandbalis",
    price: 3990,
    image: p5,
    category: "Earrings",
    occasion: "Traditional Fusion",
    material: "Kundan stones, gold finish",
    description:
      "Crescent chandbalis set with milky kundan stones and a soft pearl fringe. Sarees were made for these.",
    tags: ["trending"],
  },
  {
    id: "aurora-ear-cuff",
    name: "Aurora Pavé Ear Cuff",
    price: 1290,
    image: p6,
    category: "Earrings",
    occasion: "Everyday",
    material: "Gold plated, cubic zirconia",
    description:
      "No piercing needed. A line of tiny stones that layers beautifully with studs and hoops.",
    tags: ["new"],
  },
  {
    id: "lumiere-chain",
    name: "Lumière Fine Bar Necklace",
    price: 1990,
    image: p7,
    category: "Necklaces",
    occasion: "Everyday",
    material: "Gold plated sterling silver",
    description:
      "A whisper-thin chain with a polished bar charm — the base layer of every necklace stack.",
    options: { label: "Length", values: ["16 inch", "18 inch", "20 inch"] },
    tags: ["bestseller", "new"],
  },
  {
    id: "solitaire-drop-pendant",
    name: "Eterna Solitaire Drop Pendant",
    price: 4290,
    image: p8,
    category: "Necklaces",
    occasion: "Party",
    material: "Gold vermeil, lab crystal",
    description:
      "One brilliant-cut stone on a fine cable chain. Simple, luminous, never out of place.",
    tags: ["bestseller"],
  },
  {
    id: "trio-layered-necklace",
    name: "Trio Layered Necklace Set",
    price: 3290,
    image: p9,
    category: "Necklaces",
    occasion: "Party",
    material: "18k gold plated",
    description:
      "Three chains — beaded, paperclip and rope — pre-layered so they never tangle. Instant editorial neckline.",
    tags: ["trending", "new"],
  },
  {
    id: "velvet-gold-choker",
    name: "Velvet Textured Gold Choker",
    price: 5490,
    image: p10,
    category: "Necklaces",
    occasion: "Party",
    material: "Hand-textured gold plated brass",
    description:
      "A sculptural collar with a brushed, rippling surface. One piece, entire outfit handled.",
    tags: ["trending"],
  },
  {
    id: "meenakari-temple-necklace",
    name: "Meenakari Temple Necklace",
    price: 7890,
    image: p11,
    category: "Necklaces",
    occasion: "Traditional Fusion",
    material: "Antique gold, green & red enamel",
    description:
      "Classic temple craftsmanship in rich meenakari enamel, finished with jade and ruby-toned beads.",
    tags: ["bestseller"],
  },
  {
    id: "ivory-pearl-strand",
    name: "Ivory Pearl Strand",
    price: 4590,
    image: p12,
    category: "Necklaces",
    occasion: "Everyday",
    material: "Shell pearls, gold clasp",
    description:
      "A single row of luminous pearls with a rounded gold clasp — heirloom looks, modern wearability.",
    tags: ["bestseller"],
  },
  {
    id: "stackable-ring-set",
    name: "Stackable Gold Ring Trio",
    price: 2190,
    image: p13,
    category: "Rings",
    occasion: "Everyday",
    material: "Gold plated, cubic zirconia",
    description:
      "Plain band, twisted rope and pavé eternity — wear all three or split them across fingers.",
    options: { label: "Ring size", values: ["12", "14", "16", "18"] },
    tags: ["trending", "new"],
  },
  {
    id: "eterna-solitaire-ring",
    name: "Eterna Solitaire Ring",
    price: 6490,
    image: p14,
    category: "Rings",
    occasion: "Party",
    material: "Gold vermeil, lab-grown stone",
    description:
      "A four-prong solitaire on a slim, comfortable band. Timeless enough to wear for decades.",
    options: { label: "Ring size", values: ["12", "14", "16", "18"] },
    tags: ["bestseller"],
  },
  {
    id: "emerald-cocktail-ring",
    name: "Emerald Cocktail Ring",
    price: 5290,
    image: p15,
    category: "Rings",
    occasion: "Party",
    material: "Green quartz, pavé crystals",
    description:
      "A big, unapologetic green stone framed in pavé. The conversation starter of the collection.",
    options: { label: "Ring size", values: ["12", "14", "16", "18"] },
    tags: ["trending"],
  },
  {
    id: "starlight-tennis-bracelet",
    name: "Starlight Tennis Bracelet",
    price: 4990,
    image: p16,
    category: "Bracelets",
    occasion: "Party",
    material: "Gold plated, cubic zirconia",
    description:
      "An unbroken line of round-cut stones with a secure box clasp. Pure evening sparkle on the wrist.",
    tags: ["bestseller", "trending"],
  },
  {
    id: "minimal-link-bracelet",
    name: "Minimal Link Bracelet",
    price: 1890,
    image: p17,
    category: "Bracelets",
    occasion: "Everyday",
    material: "18k gold plated",
    description:
      "Elongated paperclip links, light as air. Layers perfectly with a watch.",
    tags: ["new"],
  },
  {
    id: "kangan-bangle-set",
    name: "Kangan Gold Bangle Set of 6",
    price: 5890,
    image: p18,
    category: "Bangles & More",
    occasion: "Traditional Fusion",
    material: "Gold plated brass",
    description:
      "Six textured bangles with a floral repeat — the sound of festive season, stacked on one wrist.",
    options: { label: "Bangle size", values: ["2.4", "2.6", "2.8"] },
    tags: ["bestseller"],
  },
  {
    id: "payal-charm-anklet",
    name: "Payal Charm Anklet",
    price: 1490,
    image: p19,
    category: "Bangles & More",
    occasion: "Everyday",
    material: "Gold plated, ghungroo bells",
    description:
      "Tiny bells and diamond-shaped charms on a fine chain. Playful, delicate, endlessly wearable.",
    tags: ["new"],
  },
  {
    id: "celeste-maang-tikka",
    name: "Celeste Kundan Maang Tikka",
    price: 2790,
    image: p20,
    category: "Bangles & More",
    occasion: "Traditional Fusion",
    material: "Kundan stones, pearl drop",
    description:
      "A petal-set kundan medallion finished with a single pearl — the final touch for wedding season.",
    tags: ["trending", "new"],
  },
  {
    id: "campus-everyday-combo",
    name: "Campus Everyday Combo (3 Pieces)",
    price: 2290,
    image: c1,
    category: "Combo Sets",
    occasion: "Everyday",
    material: "18k gold plated, hypoallergenic posts",
    description:
      "Small hoops, ball studs and a disc pendant chain — a light, all-day set built for lectures, canteen runs and evening plans. Wear it mixed or one piece at a time.",
    options: { label: "Finish", values: ["Gold", "Rose gold", "Silver"] },
    tags: ["new", "trending"],
  },
  {
    id: "office-edit-combo",
    name: "Office Edit Combo (3 Pieces)",
    price: 3290,
    image: c2,
    category: "Combo Sets",
    occasion: "Everyday",
    material: "Shell pearl, 18k gold plated",
    description:
      "Pearl studs, a single pearl pendant and a slim bar bracelet. Boardroom-safe, meeting-friendly, and it never snags on a blazer sleeve.",
    options: { label: "Chain length", values: ["16 inch", "18 inch"] },
    tags: ["bestseller", "new"],
  },
  {
    id: "desk-to-dinner-combo",
    name: "Desk to Dinner Combo (3 Pieces)",
    price: 3690,
    image: c3,
    category: "Combo Sets",
    occasion: "Party",
    material: "Gold plated, cubic zirconia",
    description:
      "Polished teardrop earrings, a two-layer pendant chain and a pavé stacking ring — wear the chain alone by day, add the rest for dinner.",
    options: { label: "Ring size", values: ["12", "14", "16", "18"] },
    tags: ["trending"],
  },
  {
    id: "festive-fusion-combo",
    name: "Festive Fusion Combo (3 Pieces)",
    price: 5490,
    image: c4,
    category: "Combo Sets",
    occasion: "Traditional Fusion",
    material: "Antique gold finish, kundan, pearls",
    description:
      "Kundan jhumkas, a pearl-edged bangle stack and a matching maang tikka — one box that covers the entire festive season.",
    options: { label: "Bangle size", values: ["2.4", "2.6", "2.8"] },
    tags: ["bestseller"],
  },
];

export const categories: Category[] = [
  "Earrings",
  "Necklaces",
  "Rings",
  "Bracelets",
  "Bangles & More",
  "Combo Sets",
];

export const getProduct = (id: string) => products.find((p) => p.id === id);

export type Look = {
  id: string;
  title: string;
  outfit: string;
  image: string;
  tip: string;
  productIds: string[];
};

export const looks: Look[] = [
  {
    id: "cream-midi",
    title: "Sunlit Cream Midi",
    outfit: "Cream corset midi dress (styling reference)",
    image: look1,
    tip: "Keep the neckline square and the jewellery round — chunky hoops plus one fine chain balances the volume of a full skirt.",
    productIds: ["solene-gold-hoops", "lumiere-chain"],
  },
  {
    id: "black-evening",
    title: "Midnight Evening Gown",
    outfit: "Floor-length black gown (styling reference)",
    image: look2,
    tip: "With a covered neckline, let the ears and wrists do the talking: long cascade earrings and one line of stones, nothing more.",
    productIds: ["noir-cascade-earrings", "starlight-tennis-bracelet"],
  },
  {
    id: "ethnic-anarkali",
    title: "Blush Anarkali Festive",
    outfit: "Pastel embroidered anarkali suit (styling reference)",
    image: look3,
    tip: "Skip the necklace when the yoke is embroidered. Statement jhumkas plus a full bangle stack keeps the look festive, not crowded.",
    productIds: ["rajmahal-jhumkas", "kangan-bangle-set"],
  },
  {
    id: "ivory-saree",
    title: "Ivory & Gold Saree",
    outfit: "Ivory tissue silk saree (styling reference)",
    image: look4,
    tip: "Antique gold against ivory always wins. Pair a temple necklace with kundan chandbalis and finish with a maang tikka for weddings.",
    productIds: ["meenakari-temple-necklace", "chandni-chandbalis", "celeste-maang-tikka"],
  },
  {
    id: "casual-daylight",
    title: "White Shirt, Off-Duty",
    outfit: "Crisp white shirt and beige trousers (styling reference)",
    image: look5,
    tip: "Minimal tailoring loves minimal metal — pearl studs, one fine bar chain and a flat link bracelet for a polished workday.",
    productIds: ["pearl-whisper-studs", "lumiere-chain", "minimal-link-bracelet"],
  },
  {
    id: "party-sequin",
    title: "Champagne Sequin Night",
    outfit: "Champagne sequin co-ord set (styling reference)",
    image: look6,
    tip: "Shine on shine works if you vary the scale: layered chains at the neck, one oversized ring, and keep the ears small.",
    productIds: ["trio-layered-necklace", "emerald-cocktail-ring", "aurora-ear-cuff"],
  },
];

export const lookProducts = (look: Look) =>
  look.productIds.map((id) => getProduct(id)).filter(Boolean) as Product[];

export const lookTotal = (look: Look) =>
  lookProducts(look).reduce((sum, p) => sum + p.price, 0);
