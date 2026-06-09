import { ReactNode, Suspense } from "react";
import { CartProvider } from "@/components/shop/CartProvider";
import { CartSlideOver } from "@/components/shop/CartSlideOver";
import { ShopHeader } from "@/components/shop/ShopHeader";
import { WhatsAppButton } from "@/components/shop/WhatsAppButton";

export default function ShopLayout({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <Suspense fallback={null}>
          <ShopHeader />
        </Suspense>
        <main>{children}</main>
      </div>
      <CartSlideOver />
      <WhatsAppButton />
    </CartProvider>
  );
}
