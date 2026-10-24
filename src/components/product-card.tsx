import { Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { useCart } from "@/lib/cart";
import { formatINR, type Product } from "@/lib/catalog";

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  const badge = product.tags.includes("new")
    ? "New"
    : product.tags.includes("bestseller")
      ? "Bestseller"
      : product.tags.includes("trending")
        ? "Trending"
        : null;

  return (
    <article className="group flex flex-col">
      <div className="relative overflow-hidden rounded-sm bg-cream">
        <Link to="/product/$productId" params={{ productId: product.id }}>
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            width={912}
            height={912}
            className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </Link>
        {badge && (
          <span className="absolute left-3 top-3 bg-background/90 px-2.5 py-1 text-[10px] tracking-luxe text-foreground">
            {badge}
          </span>
        )}
        <div className="absolute inset-x-0 bottom-0 translate-y-full p-3 transition-transform duration-500 group-hover:translate-y-0">
          <button
            type="button"
            onClick={() => {
              add(product.id, product.options?.values[0]);
              toast.success(`${product.name} added to bag`);
            }}
            className="w-full bg-ink py-3 text-[11px] tracking-luxe text-ivory transition-colors hover:bg-gold hover:text-ink"
          >
            Add to Cart
          </button>
        </div>
      </div>

      <div className="mt-4 flex flex-1 flex-col">
        <p className="text-[10px] tracking-luxe text-gold">{product.category}</p>
        <h3 className="mt-1.5 font-display text-xl leading-snug">
          <Link to="/product/$productId" params={{ productId: product.id }}>
            {product.name}
          </Link>
        </h3>
        <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{product.description}</p>
        <p className="mt-1 text-xs text-muted-foreground/80">{product.material}</p>
        <div className="mt-3 flex items-center justify-between gap-3">
          <span className="text-base font-medium">{formatINR(product.price)}</span>
          <Link
            to="/product/$productId"
            params={{ productId: product.id }}
            className="border-b border-gold pb-0.5 text-[11px] tracking-luxe text-foreground transition-colors hover:text-gold"
          >
            View Details
          </Link>
        </div>
        <div className="mt-3 sm:hidden">
          <button
            type="button"
            onClick={() => {
              add(product.id, product.options?.values[0]);
              toast.success(`${product.name} added to bag`);
            }}
            className="w-full border border-ink py-2.5 text-[11px] tracking-luxe"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}
