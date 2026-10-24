import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Gem, Sparkles, Truck } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { ProductCard } from "@/components/product-card";
import { looks, lookProducts, lookTotal, products, formatINR, categories } from "@/lib/catalog";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aurelia Jewels — Jewellery That Completes Your Style" },
      {
        name: "description",
        content:
          "Modern fashion jewellery from Aurelia Jewels: gold hoops, pearl studs, layered necklaces, kundan sets and combo sets, with outfit styling ideas.",
      },
      { property: "og:title", content: "Aurelia Jewels — Jewellery That Completes Your Style" },
      {
        property: "og:description",
        content:
          "Everyday gold, party statements and traditional fusion jewellery, styled with real outfits.",
      },
    ],
  }),
  component: Home,
});

function Section({
  eyebrow,
  title,
  children,
  action,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  action?: React.ReactNode;
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
        <div className="min-w-0">
          <p className="text-[11px] tracking-luxe text-gold">{eyebrow}</p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl">{title}</h2>
        </div>
        {action}
      </div>
      <div className="mt-10">{children}</div>
    </section>
  );
}

function Home() {
  const newArrivals = products.filter((p) => p.tags.includes("new")).slice(0, 4);
  const trending = products.filter((p) => p.tags.includes("trending")).slice(0, 4);
  const best = products.filter((p) => p.tags.includes("bestseller")).slice(0, 4);
  const combos = products.filter((p) => p.category === "Combo Sets");
  const featuredLooks = looks.slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden bg-cream">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:py-20">
          <div className="min-w-0">
            <p className="text-[11px] tracking-luxe text-gold">New Season · Aurelia Jewels</p>
            <h1 className="mt-5 font-display text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
              Jewellery That
              <br />
              Completes Your Style
            </h1>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
              Modern gold, pearl and kundan pieces designed for real wardrobes — from lecture
              halls and Monday meetings to weddings and late dinners.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/shop"
                search={{}}
                className="inline-flex items-center gap-2 bg-ink px-8 py-4 text-[11px] tracking-luxe text-ivory transition-colors hover:bg-gold hover:text-ink"
              >
                Shop Now <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/style-it-with"
                className="inline-flex items-center gap-2 border border-ink px-8 py-4 text-[11px] tracking-luxe transition-colors hover:border-gold hover:text-gold"
              >
                Style It With
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-xs text-muted-foreground">
              <span className="flex items-center gap-2"><Gem className="h-4 w-4 text-gold" /> Anti-tarnish finish</span>
              <span className="flex items-center gap-2"><Truck className="h-4 w-4 text-gold" /> Free India shipping</span>
              <span className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-gold" /> 15-day returns</span>
            </div>
          </div>

          <div className="relative">
            <img
              src={hero}
              alt="Model wearing Aurelia Jewels statement earrings and layered gold necklaces"
              width={1600}
              height={1104}
              className="w-full rounded-sm object-cover"
            />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="flex flex-wrap justify-center gap-3">
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
      </div>

      <Section
        eyebrow="Just In"
        title="New Arrivals"
        action={
          <Link to="/shop" search={{ sort: undefined }} className="text-[11px] tracking-luxe text-gold">
            View all →
          </Link>
        }
      >
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
          {newArrivals.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </Section>

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
            <div className="min-w-0">
              <p className="text-[11px] tracking-luxe text-gold">Easy Choices</p>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl">Combo Sets for Every Day</h2>
              <p className="mt-3 max-w-xl text-sm text-muted-foreground">
                Three matched pieces in one box — built for college mornings and office weeks,
                so you never have to think about what goes with what.
              </p>
            </div>
            <Link
              to="/shop"
              search={{ category: "Combo Sets" }}
              className="text-[11px] tracking-luxe text-gold"
            >
              Shop combos →
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
            {combos.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      <Section eyebrow="Loved Right Now" title="Trending Jewellery">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
          {trending.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Style Inspiration"
        title="Complete Your Look"
        action={
          <Link to="/style-it-with" className="text-[11px] tracking-luxe text-gold">
            All looks →
          </Link>
        }
      >
        <div className="grid gap-8 md:grid-cols-3">
          {featuredLooks.map((look) => (
            <Link
              key={look.id}
              to="/style-it-with"
              hash={look.id}
              className="group block hover-lift"
            >
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
              <p className="mt-2 text-sm">
                Complete look{" "}
                <span className="text-gold">{formatINR(lookTotal(look))}</span> ·{" "}
                {lookProducts(look).length} pieces
              </p>
            </Link>
          ))}
        </div>
      </Section>

      <Section eyebrow="Always In Demand" title="Best Sellers">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
          {best.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </Section>

      <section className="bg-ink px-4 py-20 text-center text-ivory">
        <p className="text-[11px] tracking-luxe text-gold">Aurelia Jewels</p>
        <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl leading-snug sm:text-4xl">
          Jewellery should feel like yours — not like a costume.
        </h2>
        <Link
          to="/about"
          className="mt-8 inline-block border border-ivory/40 px-8 py-4 text-[11px] tracking-luxe transition-colors hover:border-gold hover:text-gold"
        >
          Our Story
        </Link>
      </section>
    </>
  );
}
