import { createFileRoute, Link } from "@tanstack/react-router";
import { ProductCard } from "@/components/product-card";
import { categories, products, formatINR } from "@/lib/catalog";

export const Route = createFileRoute("/collections")({
  head: () => ({
    meta: [
      { title: "Collections — Everyday, Party & Traditional Fusion | Aurelia Jewels" },
      {
        name: "description",
        content:
          "Shop Aurelia Jewels by mood: Everyday Gold, Party & Statement, Traditional Fusion and ready-to-wear Combo Sets.",
      },
      { property: "og:title", content: "Collections — Aurelia Jewels" },
      {
        property: "og:description",
        content: "Everyday gold, party statements, traditional fusion and combo sets.",
      },
    ],
  }),
  component: CollectionsPage,
});

const edits = [
  {
    occasion: "Everyday" as const,
    title: "Everyday Gold",
    copy: "Light, anti-tarnish pieces you can sleep, shower and stress in.",
  },
  {
    occasion: "Party" as const,
    title: "Party & Statement",
    copy: "Cascades, collars and cocktail stones for nights that deserve them.",
  },
  {
    occasion: "Traditional Fusion" as const,
    title: "Traditional Fusion",
    copy: "Kundan, meenakari and temple craft, cut for a modern wardrobe.",
  },
];

function CollectionsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      <header className="mx-auto max-w-2xl text-center">
        <p className="text-[11px] tracking-luxe text-gold">Curated Edits</p>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl">Collections</h1>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          Shop the way you actually dress — by the day you're having, not by the metal.
        </p>
      </header>

      <div className="mt-12 flex flex-wrap justify-center gap-3">
        {categories.map((c) => (
          <Link
            key={c}
            to="/shop"
            search={{ category: c }}
            className="rounded-full border border-border px-5 py-2 text-[11px] tracking-luxe text-muted-foreground transition-colors hover:border-gold hover:text-gold"
          >
            {c}
          </Link>
        ))}
      </div>

      <div className="mt-16 space-y-20">
        {edits.map((edit) => {
          const items = products.filter((p) => p.occasion === edit.occasion);
          const from = Math.min(...items.map((p) => p.price));
          return (
            <section key={edit.occasion}>
              <div className="grid gap-3 border-b border-border pb-5 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
                <div className="min-w-0">
                  <h2 className="font-display text-3xl sm:text-4xl">{edit.title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{edit.copy}</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  {items.length} pieces · from{" "}
                  <span className="text-gold">{formatINR(from)}</span>
                </p>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
                {items.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
