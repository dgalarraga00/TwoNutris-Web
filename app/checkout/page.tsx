import { CheckoutForm } from "@/features/checkout/CheckoutForm";

/**
 * F9 checkout route. `middleware.ts` already gates `/checkout/:path*`
 * (F2's own matcher, confirmed by reading it directly) — an unauthenticated
 * visit redirects to `/entrar?next=/checkout` before this page ever renders.
 */
export default function CheckoutPage() {
  return <CheckoutForm />;
}
