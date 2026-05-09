import { ReactNode } from "react";
import { CartProvider } from "@/components/shop/CartProvider";
import { CartSlideOver } from "@/components/shop/CartSlideOver";
import { ShopHeader } from "@/components/shop/ShopHeader";

export default function ShopLayout({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <ShopHeader />
        <main>{children}</main>
      </div>
      <CartSlideOver />
    </CartProvider>
  );
}
