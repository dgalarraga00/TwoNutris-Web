import { Button } from "@/components/ui/Button";

/**
 * Generic WhatsApp lead-capture exit CTA.
 *
 * Business precedent (obs #336): WhatsApp is this business's established
 * support/lead-capture channel (e.g. the "cancellation is WhatsApp-only"
 * rule elsewhere in this business). Kept generic/reusable — not hardcoded to
 * the calculator's copy — in case a later unit (e.g. F9/F11 cancellation)
 * needs the same pattern.
 *
 * The WhatsApp link itself is NEVER hardcoded here — it always comes from
 * `NEXT_PUBLIC_WHATSAPP_URL` (set in `.env.local` for local dev; MUST also be
 * added to Vercel's project environment variables for the
 * `feat/phase-3b-funnel` preview deployment — a manual dashboard step, not
 * something this code can do).
 */
export interface WhatsAppExitCtaProps {
  heading?: string;
  message: string;
  ctaLabel?: string;
}

export function WhatsAppExitCta({
  heading = "Hablemos por WhatsApp",
  message,
  ctaLabel = "Escribir por WhatsApp",
}: WhatsAppExitCtaProps) {
  // Read per-render (not module-level) so it stays testable via env stubbing
  // and always reflects the current `NEXT_PUBLIC_WHATSAPP_URL` value.
  const whatsAppUrl = process.env.NEXT_PUBLIC_WHATSAPP_URL;

  return (
    <div
      role="alert"
      className="flex flex-col items-center gap-4 rounded-3xl border border-leaf/10 bg-white p-6 text-center"
    >
      <h3 className="font-ibrand text-lg text-leaf">{heading}</h3>
      <p className="font-poppins text-sm text-leaf/80">{message}</p>
      {whatsAppUrl ? (
        <Button href={whatsAppUrl} target="_blank" rel="noopener noreferrer">
          {ctaLabel}
        </Button>
      ) : (
        <p className="font-poppins text-xs text-red-600">
          Canal de WhatsApp no configurado (falta `NEXT_PUBLIC_WHATSAPP_URL`).
        </p>
      )}
    </div>
  );
}
