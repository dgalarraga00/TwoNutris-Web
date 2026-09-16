import type { ReactNode } from "react";

interface BrandedScreenProps {
  children: ReactNode;
}

/**
 * Shared full-viewport wrapper for pre-account funnel screens (empezar,
 * calculadora, complementos, registro, entrar): the same subtle brand
 * texture already used in `AppShell`/the marketing homepage
 * (`patron-negro.png`, 5% opacity) behind a cream background. Screens
 * wrapped in `AppShell` (bolsa, checkout, semana, perfil) already get this
 * from the shell itself and should NOT also use this component.
 */
export function BrandedScreen({ children }: BrandedScreenProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-cream">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[url('/patterns/patron-negro.png')] bg-[length:700px] bg-repeat opacity-[0.05]"
      />
      <div className="relative">{children}</div>
    </div>
  );
}
