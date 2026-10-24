import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { getProduct, type Product } from "./catalog";

export type CartLine = { id: string; qty: number; option?: string | undefined };

type CartContextValue = {
  lines: CartLine[];
  items: Array<CartLine & { product: Product }>;
  count: number;
  subtotal: number;
  add: (id: string, option?: string, qty?: number) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "aurelia-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setLines(JSON.parse(raw) as CartLine[]);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {
      /* ignore */
    }
  }, [lines]);

  const value = useMemo<CartContextValue>(() => {
    const items = lines
      .map((line) => {
        const product = getProduct(line.id);
        return product ? { ...line, product } : null;
      })
      .filter(Boolean) as Array<CartLine & { product: Product }>;

    return {
      lines,
      items,
      count: items.reduce((n, i) => n + i.qty, 0),
      subtotal: items.reduce((n, i) => n + i.qty * i.product.price, 0),
      add: (id, option, qty = 1) =>
        setLines((prev) => {
          const existing = prev.find((l) => l.id === id);
          if (existing) {
            return prev.map((l) =>
              l.id === id ? { ...l, qty: l.qty + qty, option: option ?? l.option } : l,
            );
          }
          return [...prev, { id, qty, option }];
        }),
      remove: (id) => setLines((prev) => prev.filter((l) => l.id !== id)),
      setQty: (id, qty) =>
        setLines((prev) =>
          qty <= 0
            ? prev.filter((l) => l.id !== id)
            : prev.map((l) => (l.id === id ? { ...l, qty } : l)),
        ),
      clear: () => setLines([]),
    };
  }, [lines]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
