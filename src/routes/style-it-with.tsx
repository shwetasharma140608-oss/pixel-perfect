import { createFileRoute, Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { useCart } from "@/lib/cart";
import { formatINR, looks, lookProducts, lookTotal } from "@/lib/catalog";

export const Route = createFileRoute("/style-it-with")({
  head: () => ({
    meta: [
      { title: "Style It With — Outfit & Jewellery Looks | Aurelia Jewels" },
      {
        name: "description",
        content:
          "Six complete looks pairing dresses, sarees, anarkalis and workwear with the exact Aurelia jewellery to wear with them. Shop the whole look in one click.",
      },
      { property: "og:title", content: "Style It With — Complete Your Look" },
      {
        property: "og:description",
        content: "Outfit inspiration with matching earrings, necklaces and bangles you can buy.",
      },
    ],
  }),
  component: StylePage,
});

function StylePage() {
  const { add } = useCart();

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      <header className="mx-auto max-w-2xl text-center">
        <p className="text-[11px] tracking-luxe text-gold">Complete Your Look</p>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl">Style It With</h1>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          Six outfits, six jewellery edits. The clothing is styling reference only — every
          jewellery piece shown below is available to buy.
        </p>
      </header>

      <div className="mt-16 space-y-20">
        {looks.map((look, index) => {
          const items = lookProducts(look);
          return (
            <section
              key={look.id}
              id={look.id}
              className="grid scroll-mt-32 gap-10 lg:grid-cols-2 lg:items-center"
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="overflow-hidden rounded-sm bg-cream">
                  <img
                    src={look.image}
                    alt={`${look.title} — ${look.outfit}`}
                    loading="lazy"
                    width={912}
                    height={1200}
                    className="aspect-[3/4] w-full object-cover"
                  />
                </div>
              </div>

              <div className="min-w-0">
                <p className="text-[11px] tracking-luxe text-gold">Look {index + 1}</p>
                <h2 className="mt-2 font-display text-3xl sm:text-4xl">{look.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{look.outfit}</p>

                <p className="mt-6 border-l-2 border-gold pl-4 text-sm leading-relaxed">
                  <span className="text-[11px] tracking-luxe text-gold">Styling tip · </span>
                  {look.tip}
                </p>

                <ul className="mt-8 divide-y divide-border border-y border-border">
                  {items.map((p) => (
                    <li key={p.id} className="flex items-center gap-4 py-4">
                      <img
                        src={p.image}
                        alt={p.name}
                        loading="lazy"
                        width={912}
                        height={912}
                        className="h-16 w-16 shrink-0 rounded-sm object-cover"
                      />
                      <div className="min-w-0 flex-1">
                        <Link
                          to="/product/$productId"
                          params={{ productId: p.id }}
                          className="block truncate text-sm hover:text-gold"
                        >
                          {p.name}
                        </Link>
                        <span className="text-xs text-muted-foreground">{p.category}</span>
                      </div>
                      <span className="shrink-0 text-sm">{formatINR(p.price)}</span>
                      <button
                        type="button"
                        onClick={() => {
                          add(p.id, p.options?.values[0]);
                          toast.success(`${p.name} added to bag`);
                        }}
                        className="shrink-0 border border-ink px-3 py-2 text-[10px] tracking-luxe transition-colors hover:bg-ink hover:text-ivory"
                      >
                        Add
                      </button>
                    </li>
                  ))}
                </ul>

                <p className="mt-5 text-sm">
                  Complete look ·{" "}
                  <span className="font-medium text-gold">{formatINR(lookTotal(look))}</span>
                  <span className="text-muted-foreground"> (jewellery only)</span>
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      items.forEach((p) => add(p.id, p.options?.values[0]));
                      toast.success(`${look.title} — ${items.length} pieces added to bag`);
                    }}
                    className="bg-ink px-7 py-3.5 text-[11px] tracking-luxe text-ivory transition-colors hover:bg-gold hover:text-ink"
                  >
                    Shop This Look
                  </button>
                  <Link
                    to="/shop"
                    search={{ category: items[0]?.category }}
                    className="border border-ink px-7 py-3.5 text-[11px] tracking-luxe transition-colors hover:border-gold hover:text-gold"
                  >
                    Shop Jewellery
                  </Link>
                </div>
                <p className="mt-4 text-xs text-muted-foreground">
                  Clothing shown is styling reference and is not sold by Aurelia Jewels.
                </p>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
