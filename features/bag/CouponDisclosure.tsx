"use client";

import { useState, type KeyboardEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Alert } from "@/components/ui/Alert";

export interface CouponValidationResult {
  code: string;
  message: string;
}

export interface CouponDisclosureProps {
  /**
   * Caller-supplied validation call — intentionally NOT wired to a live
   * network request by this component itself (SRP: this component owns
   * only the collapsed/expanded disclosure UI and its local
   * loading/error/success state, never the transport).
   *
   * F7 investigation finding (read directly from
   * `backend/payments/api/views.py::CouponValidateView`):
   * `permission_classes = [permissions.IsAuthenticated]` — the real
   * `POST /api/coupons/validate` endpoint requires a valid JWT. F7's bag
   * screen runs BEFORE account creation/login (no token exists yet), so
   * this endpoint genuinely cannot be called from here. `onValidate` is
   * left `undefined` at every F7 call site; F9 (checkout, after login) is
   * expected to pass a real `onValidate` wired through `httpClient`,
   * reusing this exact component unchanged.
   */
  onValidate?: (code: string) => Promise<CouponValidationResult>;
  onApplied?: (result: CouponValidationResult) => void;
}

type Status = "idle" | "loading" | "error" | "success";

/** Collapsed "¿tienes un cupón?" link → expands into a code input + submit. */
export function CouponDisclosure({ onValidate, onApplied }: CouponDisclosureProps) {
  const [expanded, setExpanded] = useState(false);
  const [code, setCode] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async () => {
    const trimmed = code.trim();
    if (trimmed === "" || !onValidate) return;

    setStatus("loading");
    setMessage(null);
    try {
      const result = await onValidate(trimmed);
      setStatus("success");
      setMessage(result.message);
      onApplied?.(result);
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error ? error.message : "No se pudo validar el cupón.",
      );
    }
  };

  if (!expanded) {
    return (
      <button
        type="button"
        onClick={() => setExpanded(true)}
        className="self-start font-poppins text-sm font-medium text-leaf underline underline-offset-2"
      >
        ¿Tienes un cupón?
      </button>
    );
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      void handleSubmit();
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="coupon-code" className="font-poppins text-sm font-medium text-leaf">
        Código de cupón
      </label>
      <div className="flex gap-2">
        <input
          id="coupon-code"
          value={code}
          onChange={(event) => setCode(event.target.value)}
          onKeyDown={handleKeyDown}
          disabled={status === "loading"}
          className="flex-1 rounded-xl border border-leaf/20 px-3 py-2 font-poppins text-sm text-leaf focus:border-leaf focus:outline-none focus:ring-2 focus:ring-amber/40"
        />
        <Button
          onClick={() => void handleSubmit()}
          disabled={status === "loading" || !onValidate || code.trim() === ""}
        >
          {status === "loading" ? "Validando…" : "Aplicar"}
        </Button>
      </div>
      {status === "error" && <Alert variant="error">{message}</Alert>}
      {status === "success" && <Alert variant="success">{message}</Alert>}
      {!onValidate && (
        <p className="font-poppins text-xs text-leaf/50">
          Podrás aplicar tu cupón más adelante, al finalizar tu compra.
        </p>
      )}
    </div>
  );
}
