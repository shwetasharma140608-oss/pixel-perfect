import { createFileRoute, Link } from "@tanstack/react-router";
import { Trash2 } from "lucide-react";
import { useCart } from "@/lib/cart";
import { formatINR } from "@/lib/catalog";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Your Shopping Bag — Aurelia Jewels" },
      {
        name: "description",
        content: "Review the jewellery in your Aurelia Jewels bag, update quantities and checkout.",
      },
      { property: "og:title", content: "Your Shopping Bag — Aurelia Jewels" },
      { property: "og:description", content: "Review and update your Aurelia Jewels bag." },
    ],
  }),
  component: CartPage,
});

function CartPage() {
  const { items, subtotal, setQty, remove, clear } = useCart();

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-28 text-center sm:px-6">
        <p className="text-[11px] tracking-luxe text-gold">Your Bag</p>
        <h1 className="mt-3 font-display text-4xl">Your bag is empty</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Start with a combo set — three matched pieces, one decision.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/shop"
            search={{}}
            className="bg-ink px-8 py-4 text-[11px] tracking-luxe text-ivory"
          >
            Shop Jewellery
          </Link>
          <Link to="/style-it-with" className="border border-ink px-8 py-4 text-[11px] tracking-luxe">
            Browse Looks
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      <h1 className="font-display text-4xl">Your Bag</h1>
      <p className="mt-2 text-sm text-muted-foreground">{items.length} styles in your bag</p>

      <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1fr)_340px]">
        <ul className="divide-y divide-border border-y border-border">
          {items.map((item) => (
            <li key={item.id} className="grid grid-cols-[80px_minmax(0,1fr)] gap-4 py-6 sm:grid-cols-[110px_minmax(0,1fr)_auto]">
              <Link to="/product/$productId" params={{ productId: item.id }}>
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  loading="lazy"
                  width={912}
                  height={912}
                  className="aspect-square w-full rounded-sm object-cover"
                />
              </Link>

              <div className="min-w-0">
                <Link
                  to="/product/$productId"
                  params={{ productId: item.id }}
                  className="font-display text-xl hover:text-gold"
                >
                  {item.product.name}
                </Link>
                <p className="mt-1 text-xs text-muted-foreground">{item.product.category}</p>
                {item.option && (
                  <p className="mt-1 text-xs text-muted-foreground">
                    {item.product.options?.label}: {item.option}
                  </p>
                )}
                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <div className="flex items-center border border-border">
                    <button
                      type="button"
                      aria-label="Decrease quantity"
                      onClick={() => setQty(item.id, item.qty - 1)}
                      className="px-3 py-2 text-sm"
                    >
                      −
                    </button>
                    <span className="w-8 text-center text-sm">{item.qty}</span>
                    <button
                      type="button"
                      aria-label="Increase quantity"
                      onClick={() => setQty(item.id, item.qty + 1)}
                      className="px-3 py-2 text-sm"
                    >
                      +
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => remove(item.id)}
                    className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-destructive"
                  >
                    <Trash2 className="h-3.5 w-3.5" /> Remove
                  </button>
                </div>
              </div>

              <p className="col-span-2 text-right text-sm sm:col-span-1">
                {formatINR(item.product.price * item.qty)}
              </p>
            </li>
          ))}
        </ul>

        <aside className="h-fit border border-border bg-cream p-6">
          <h2 className="font-display text-2xl">Order Summary</h2>
          <dl className="mt-6 space-y-3 text-sm">
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Subtotal</dt>
              <dd>{formatINR(subtotal)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Shipping</dt>
              <dd className="text-gold">Free</dd>
            </div>
            <div className="flex justify-between border-t border-border pt-3 text-base">
              <dt>Total</dt>
              <dd>{formatINR(subtotal)}</dd>
            </div>
          </dl>
          <Link
            to="/checkout"
            className="mt-6 block bg-ink px-8 py-4 text-center text-[11px] tracking-luxe text-ivory transition-colors hover:bg-gold hover:text-ink"
          >
            Proceed to Checkout
          </Link>
          <button
            type="button"
            onClick={clear}
            className="mt-3 w-full border border-border px-8 py-3 text-[11px] tracking-luxe text-muted-foreground"
          >
            Clear Bag
          </button>
          <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
            Demo store: checkout is a sample flow — no payment is taken and no order is placed.
          </p>
        </aside>
      </div>
    </div>
  );
}
