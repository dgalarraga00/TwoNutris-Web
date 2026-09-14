import type { Metadata } from "next";
import { RegisterScreen } from "@/features/auth/RegisterScreen";

export const metadata: Metadata = {
  title: "Crear cuenta | TwoNutris",
};

/**
 * Funnel step 7 — the FIRST screen that requests an account (landing→
 * empezar→calculator→menu preview→bag→upsells→register/login→checkout).
 * Ungrouped folder, matching `/menu`/`/empezar`/`/bolsa`/`/complementos`'s
 * own precedent (no `(public)` route group exists in this repo yet).
 * `RegisterScreen` is a client wrapper (needs `useRouter`) so this page can
 * stay a Server Component and keep exporting `metadata`.
 */
export default function RegistroPage() {
  return <RegisterScreen />;
}
