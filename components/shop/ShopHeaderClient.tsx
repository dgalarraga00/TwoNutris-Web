"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ShoppingBag, LogIn } from "lucide-react";
import { useCart } from "./CartProvider";
import { UserMenu } from "./UserMenu";

interface Props {
  userEmail: string | null;
}

export function ShopHeaderClient({ userEmail }: Props) {
  const { count, openCart } = useCart();
  const pathname = usePathname();
  const isCheckout = pathname.startsWith("/checkout");

  return (
    <header className="sticky top-0 z-40 bg-cream/95 backdrop-blur-sm border-b border-leaf/10">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <Link href="/" className="flex-shrink-0 hover:opacity-80 transition-opacity">
          <Image
            src="/icons/logo.png"
            alt="twonutris"
            width={148}
            height={48}
            priority
          />
        </Link>

        <div className="flex items-center gap-2">
          {/* Carrito — solo fuera del checkout */}
          {!isCheckout && (
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
          )}

          {/* Usuario */}
          {userEmail ? (
            <UserMenu email={userEmail} />
          ) : (
            <Link
              href="/login"
              className="flex items-center gap-1.5 text-sm font-poppins font-medium text-leaf hover:opacity-75 transition-opacity px-3 py-2"
            >
              <LogIn size={15} />
              <span className="hidden sm:inline">Ingresar</span>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
