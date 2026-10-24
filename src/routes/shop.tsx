import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo } from "react";
import { ProductCard } from "@/components/product-card";
import { categories, products, type Category } from "@/lib/catalog";

type ShopSearch = {
  category?: string | undefined;
  q?: string | undefined;
  sort?: string | undefined;
};

export const Route = createFileRoute("/shop")({
  validateSearch: (search: Record<string, unknown>): ShopSearch => ({
    category: typeof search["category"] === "string" ? search["category"] : undefined,
    q: typeof search["q"] === "string" ? search["q"] : undefined,
    sort: typeof search["sort"] === "string" ? search["sort"] : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Shop All Jewellery — Aurelia Jewels" },
      {
        name: "description",
        content:
          "Browse earrings, necklaces, rings, bracelets, bangles and combo sets in gold, pearl and kundan finishes. Prices in Indian Rupees.",
      },
      { property: "og:title", content: "Shop All Jewellery — Aurelia Jewels" },
      {
        property: "og:description",
        content: "Modern earrings, necklaces, rings, bracelets and combo sets by Aurelia Jewels.",
      },
    ],
  }),
  component: ShopPage,
});

const sorts = [
  { key: "featured", label: "Featured" },
  { key: "price-asc", label: "Price: Low to High" },
  { key: "price-desc", label: "Price: High to Low" },
  { key: "name", label: "Name A–Z" },
];

function ShopPage() {
  const { category, q, sort } = Route.useSearch();
  const navigate = Route.useNavigate();

  const list = useMemo(() => {
    let items = products.slice();
    if (category) items = items.filter((p) => p.category === (category as Category));
    if (q) {
      const needle = q.toLowerCase();
      items = items.filter((p) =>
        [p.name, p.description, p.category, p.material, p.occasion]
          .join(" ")
          .toLowerCase()
          .includes(needle),
      );
    }
    if (sort === "price-asc") items.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") items.sort((a, b) => b.price - a.price);
    if (sort === "name") items.sort((a, b) => a.name.localeCompare(b.name));
    return items;
  }, [category, q, sort]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      <header className="text-center">
        <p className="text-[11px] tracking-luxe text-gold">The Collection</p>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl">Shop All Jewellery</h1>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
          {products.length} handpicked pieces — everyday gold, party statements, traditional
          fusion and ready-to-wear combo sets.
        </p>
      </header>

      <div className="mt-10 grid gap-4 border-y border-border py-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
        <div className="flex flex-wrap gap-2">
          <Link
            to="/shop"
            search={{ q, sort }}
            className={`rounded-full border px-4 py-1.5 text-[11px] tracking-luxe transition-colors ${
              !category ? "border-ink bg-ink text-ivory" : "border-border hover:border-gold"
            }`}
          >
            All
          </Link>
          {categories.map((c) => (
            <Link
              key={c}
              to="/shop"
              search={{ category: c, q, sort }}
              className={`rounded-full border px-4 py-1.5 text-[11px] tracking-luxe transition-colors ${
                category === c ? "border-ink bg-ink text-ivory" : "border-border hover:border-gold"
              }`}
            >
              {c}
            </Link>
          ))}
        </div>

        <label className="flex items-center gap-2 text-xs text-muted-foreground">
          Sort
          <select
            value={sort ?? "featured"}
            onChange={(e) =>
              navigate({
                search: {
                  category,
                  q,
                  sort: e.target.value === "featured" ? undefined : e.target.value,
                },
              })
            }
            className="border border-border bg-card px-3 py-2 text-xs outline-none focus:border-gold"
          >
            {sorts.map((s) => (
              <option key={s.key} value={s.key}>
                {s.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      {q && (
        <p className="mt-6 text-sm text-muted-foreground">
          Showing results for “{q}” · {list.length} pieces
        </p>
      )}

      {list.length === 0 ? (
        <div className="py-24 text-center">
          <p className="font-display text-2xl">Nothing matches that search</p>
          <Link
            to="/shop"
            search={{}}
            className="mt-6 inline-block bg-ink px-6 py-3 text-[11px] tracking-luxe text-ivory"
          >
            View all jewellery
          </Link>
        </div>
      ) : (
        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
          {list.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
