import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Check, Truck, RotateCcw, ShieldCheck } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { useCart } from "@/lib/cart";
import { formatINR, getProduct, looks, lookProducts, products } from "@/lib/catalog";

export const Route = createFileRoute("/product/$productId")({
  loader: ({ params }) => {
    const product = getProduct(params.productId);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Piece unavailable — Aurelia Jewels" }, { name: "robots", content: "noindex" }],
      };
    }
    const { product } = loaderData;
    return {
      meta: [
        { title: `${product.name} — Aurelia Jewels` },
        { name: "description", content: product.description },
        { property: "og:title", content: `${product.name} — Aurelia Jewels` },
        { property: "og:description", content: product.description },
      ],
    };
  },
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const { add } = useCart();
  const [option, setOption] = useState(product.options?.values[0]);
  const [qty, setQty] = useState(1);

  const related = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 4);
  const fallback = products.filter((p) => p.id !== product.id).slice(0, 4);
  const suggestions = related.length >= 2 ? related : fallback;

  const matchingLooks = looks.filter((l) => l.productIds.includes(product.id));

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <nav className="text-xs text-muted-foreground">
        <Link to="/" className="hover:text-gold">Home</Link> ·{" "}
        <Link to="/shop" search={{}} className="hover:text-gold">Shop</Link> ·{" "}
        <Link to="/shop" search={{ category: product.category }} className="hover:text-gold">
          {product.category}
        </Link>
      </nav>

      <div className="mt-8 grid gap-12 lg:grid-cols-2">
        <div className="overflow-hidden rounded-sm bg-cream">
          <img
            src={product.image}
            alt={product.name}
            width={912}
            height={912}
            className="aspect-square w-full object-cover"
          />
        </div>

        <div className="min-w-0">
          <p className="text-[11px] tracking-luxe text-gold">{product.category}</p>
          <h1 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">{product.name}</h1>
          <p className="mt-4 text-2xl">{formatINR(product.price)}</p>
          <p className="text-xs text-muted-foreground">Inclusive of all taxes</p>

          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            {product.description}
          </p>

          <dl className="mt-6 space-y-2 text-sm">
            <div className="flex gap-2">
              <dt className="w-28 text-muted-foreground">Material</dt>
              <dd>{product.material}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="w-28 text-muted-foreground">Best for</dt>
              <dd>{product.occasion}</dd>
            </div>
          </dl>

          {product.options && (
            <div className="mt-8">
              <p className="text-[11px] tracking-luxe">{product.options.label}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.options.values.map((value) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setOption(value)}
                    className={`border px-4 py-2 text-xs transition-colors ${
                      option === value ? "border-ink bg-ink text-ivory" : "border-border hover:border-gold"
                    }`}
                  >
                    {value}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <div className="flex items-center border border-border">
              <button
                type="button"
                aria-label="Decrease quantity"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="px-4 py-3 text-sm"
              >
                −
              </button>
              <span className="w-8 text-center text-sm">{qty}</span>
              <button
                type="button"
                aria-label="Increase quantity"
                onClick={() => setQty((q) => q + 1)}
                className="px-4 py-3 text-sm"
              >
                +
              </button>
            </div>
            <button
              type="button"
              onClick={() => {
                add(product.id, option, qty);
                toast.success(`${product.name} added to bag`);
              }}
              className="flex-1 bg-ink px-8 py-4 text-[11px] tracking-luxe text-ivory transition-colors hover:bg-gold hover:text-ink"
            >
              Add to Cart
            </button>
            <Link
              to="/cart"
              className="border border-ink px-8 py-4 text-[11px] tracking-luxe transition-colors hover:border-gold hover:text-gold"
            >
              View Bag
            </Link>
          </div>

          <ul className="mt-8 grid gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:grid-cols-2">
            <li className="flex items-center gap-2"><Truck className="h-4 w-4 text-gold" /> Free shipping across India</li>
            <li className="flex items-center gap-2"><RotateCcw className="h-4 w-4 text-gold" /> 15-day easy returns</li>
            <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-gold" /> 6-month plating warranty</li>
            <li className="flex items-center gap-2"><Check className="h-4 w-4 text-gold" /> Skin-friendly, nickel free</li>
          </ul>
        </div>
      </div>

      {matchingLooks.length > 0 && (
        <section className="mt-20">
          <p className="text-[11px] tracking-luxe text-gold">Style It With</p>
          <h2 className="mt-2 font-display text-3xl">Outfits that work with this piece</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {matchingLooks.map((look) => (
              <Link key={look.id} to="/style-it-with" hash={look.id} className="group block">
                <div className="overflow-hidden rounded-sm bg-cream">
                  <img
                    src={look.image}
                    alt={look.title}
                    loading="lazy"
                    width={912}
                    height={1200}
                    className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-4 font-display text-2xl">{look.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{look.outfit}</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Styled with {lookProducts(look).length} pieces
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="mt-20">
        <p className="text-[11px] tracking-luxe text-gold">You May Also Like</p>
        <h2 className="mt-2 font-display text-3xl">Related pieces</h2>
        <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
          {suggestions.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
