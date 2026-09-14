import { AppShell } from "@/components/AppShell";
import { CheckoutForm } from "@/features/checkout/CheckoutForm";

/**
 * F9 checkout route. `middleware.ts` already gates `/checkout/:path*`
 * (F2's own matcher, confirmed by reading it directly) — an unauthenticated
 * visit redirects to `/entrar?next=/checkout` before this page ever renders.
 * Wrapped in `AppShell` (design D9, order-flow-wizard Phase 2) for the
 * same persistent shell every other authenticated route gets.
 */
export default function CheckoutPage() {
  return (
    <AppShell>
      <CheckoutForm />
    </AppShell>
  );
}
