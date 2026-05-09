"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { useCart } from "./CartProvider";

export function ShopHeader() {
  const { count, openCart } = useCart();

  return (
    <header className="sticky top-0 z-40 bg-cream/95 backdrop-blur-sm border-b border-leaf/10">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-ibrand text-2xl text-leaf hover:opacity-80 transition-opacity"
        >
          TwoNutris
        </Link>

        <button
          onClick={openCart}
          className="relative flex items-center gap-2 bg-leaf text-cream font-poppins font-semibold text-sm px-4 py-2 rounded-xl hover:bg-leaf-dark transition-colors"
        >
          <ShoppingBag size={16} />
          <span>Mi pedido</span>
          {count > 0 && (
            <span className="absolute -top-2 -right-2 bg-amber text-leaf text-xs font-bold font-poppins w-5 h-5 rounded-full flex items-center justify-center">
              {count}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
