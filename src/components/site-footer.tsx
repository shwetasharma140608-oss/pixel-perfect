import { Link } from "@tanstack/react-router";
import { Instagram, Mail, Facebook } from "lucide-react";
import { categories } from "@/lib/catalog";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div>
          <span className="block font-display text-2xl tracking-[0.12em]">AURELIA</span>
          <span className="block text-[10px] tracking-luxe text-gold">Jewels</span>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Modern fine-fashion jewellery, designed in India for women who dress for
            themselves.
          </p>
        </div>

        <div>
          <h4 className="text-xs tracking-luxe text-foreground">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-gold">Home</Link></li>
            <li><Link to="/shop" className="hover:text-gold">Shop</Link></li>
            <li><Link to="/collections" className="hover:text-gold">Collections</Link></li>
            <li><Link to="/style-it-with" className="hover:text-gold">Style It With</Link></li>
            <li><Link to="/about" className="hover:text-gold">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs tracking-luxe text-foreground">Categories</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {categories.map((c) => (
              <li key={c}>
                <Link to="/shop" search={{ category: c, q: undefined }} className="hover:text-gold">
                  {c}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs tracking-luxe text-foreground">Reach Us</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-gold" /> care@aureliajewels.example
            </li>
            <li className="flex items-center gap-2">
              <Instagram className="h-4 w-4 text-gold" /> @aureliajewels (placeholder)
            </li>
            <li className="flex items-center gap-2">
              <Facebook className="h-4 w-4 text-gold" /> /aureliajewels (placeholder)
            </li>
          </ul>
          <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
            Shipping &amp; Delivery · 15-Day Returns · Care &amp; Warranty · Privacy Policy
          </p>
        </div>
      </div>

      <div className="border-t border-border/70 px-4 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Aurelia Jewels. Demo store — orders and payments are
        not processed.
      </div>
    </footer>
  );
}
