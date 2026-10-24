import { createFileRoute, Link } from "@tanstack/react-router";
import look5 from "@/assets/look5.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Aurelia Jewels — Modern Elegance, Timeless Design" },
      {
        name: "description",
        content:
          "Aurelia Jewels designs modern fine-fashion jewellery in India — anti-tarnish, skin-friendly pieces made to express your own style.",
      },
      { property: "og:title", content: "About Aurelia Jewels" },
      {
        property: "og:description",
        content: "Our story: modern elegance, timeless design, jewellery that feels like yours.",
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    title: "Modern Elegance",
    copy: "Clean silhouettes, warm gold tones and nothing fussy. Pieces that look considered, never costume.",
  },
  {
    title: "Made to Be Worn",
    copy: "Anti-tarnish plating, nickel-free posts and comfortable weights — designed for 14-hour days.",
  },
  {
    title: "Your Style, Not Ours",
    copy: "Every piece is shown styled with real outfits, so you can see exactly how it fits your wardrobe.",
  },
];

function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      <header className="mx-auto max-w-2xl text-center">
        <p className="text-[11px] tracking-luxe text-gold">Our Story</p>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl">About Aurelia Jewels</h1>
      </header>

      <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
        <div className="overflow-hidden rounded-sm bg-cream">
          <img
            src={look5}
            alt="Everyday Aurelia Jewels styling"
            loading="lazy"
            width={912}
            height={1200}
            className="aspect-[4/5] w-full object-cover"
          />
        </div>
        <div className="min-w-0 space-y-5 text-sm leading-relaxed text-muted-foreground">
          <p>
            Aurelia Jewels began with a simple frustration: jewellery was either too precious
            to wear or too flimsy to keep. We wanted the in-between — pieces beautiful enough
            for a wedding, sturdy enough for a Tuesday.
          </p>
          <p>
            Every design starts with a wardrobe, not a stone. Our studio sketches around the
            clothes women actually wear — cotton kurtas, white shirts, sequin co-ords, silk
            sarees — and builds jewellery that finishes those outfits instead of fighting them.
          </p>
          <p>
            That's also why we show every piece styled on a complete look, and why our combo
            sets exist: three matched pieces in one box, for college mornings and office weeks
            when you have four minutes to get out the door.
          </p>
          <p className="text-foreground">
            Modern elegance. Timeless design. Jewellery that completes your style.
          </p>
          <Link
            to="/shop"
            search={{}}
            className="inline-block bg-ink px-8 py-4 text-[11px] tracking-luxe text-ivory transition-colors hover:bg-gold hover:text-ink"
          >
            Explore the Collection
          </Link>
        </div>
      </div>

      <div className="mt-20 grid gap-8 md:grid-cols-3">
        {values.map((v) => (
          <div key={v.title} className="border-t border-gold pt-6">
            <h2 className="font-display text-2xl">{v.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.copy}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
