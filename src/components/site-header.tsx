import { Link, useNavigate } from "@tanstack/react-router";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/lib/cart";
import { categories } from "@/lib/catalog";

const nav = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/collections", label: "Collections" },
  { to: "/style-it-with", label: "Style It With" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const { count } = useCart();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const submitSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate({ to: "/shop", search: { q: query || undefined, category: undefined } });
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="bg-ink py-2 text-center text-[11px] tracking-luxe text-ivory">
        Complimentary shipping across India · Gift wrapping on every order
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 px-4 py-4 sm:px-6">
        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
          className="shrink-0 rounded-sm p-2 text-foreground transition-colors hover:bg-secondary lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <div className="min-w-0 lg:order-1">
          <Link to="/" className="block min-w-0 text-center lg:text-left">
            <span className="block font-display text-2xl leading-none tracking-[0.12em] text-foreground sm:text-3xl">
              AURELIA
            </span>
            <span className="block text-[10px] tracking-luxe text-gold">Jewels</span>
          </Link>
        </div>

        <nav className="hidden items-center justify-center gap-7 text-xs tracking-luxe lg:order-2 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-muted-foreground transition-colors hover:text-gold"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 lg:order-3">
          <form onSubmit={submitSearch} className="hidden items-center md:flex">
            <label className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search jewellery"
                aria-label="Search jewellery"
                className="w-44 rounded-full border border-border bg-card py-2 pl-9 pr-4 text-sm outline-none transition-all placeholder:text-muted-foreground focus:w-56 focus:border-gold"
              />
            </label>
          </form>

          <Link
            to="/cart"
            aria-label="Cart"
            className="relative rounded-sm p-2 text-foreground transition-colors hover:text-gold"
          >
            <ShoppingBag className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -right-0.5 -top-0.5 grid h-5 min-w-5 place-items-center rounded-full bg-gold px-1 text-[10px] font-medium text-ink">
                {count}
              </span>
            )}
          </Link>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-card px-4 pb-6 pt-4 lg:hidden">
          <form onSubmit={submitSearch} className="mb-4">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search jewellery"
              aria-label="Search jewellery"
              className="w-full rounded-full border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-gold"
            />
          </form>
          <div className="flex flex-col gap-3 text-sm tracking-luxe">
            {nav.map((item) => (
              <Link key={item.to} to={item.to} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {categories.map((c) => (
              <Link
                key={c}
                to="/shop"
                search={{ category: c, q: undefined }}
                onClick={() => setOpen(false)}
                className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
              >
                {c}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
