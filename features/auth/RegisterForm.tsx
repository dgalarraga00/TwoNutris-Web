"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/Button";
import { TextField } from "@/components/ui/TextField";
import { Alert } from "@/components/ui/Alert";
import { usePurchaseDraftStore } from "@/stores/purchaseDraftStore";
import { registerCustomer, loginCustomer } from "@/lib/api/auth";
import { createNutritionProfile } from "@/lib/api/profile";
import { setAccessToken } from "@/lib/http/tokenStore";
import { ApiError } from "@/lib/http/errors";

/**
 * F8 (task 5.7) — first funnel step that asks for an account (step 7:
 * landing→empezar→calculator→menu preview→bag→upsells→register/login→
 * checkout). `kind` is deliberately NOT a form field: it is carried forward
 * silently from `/empezar`'s already-made choice
 * (`usePurchaseDraftStore.customerKind`), read reactively here so a change
 * made just before this screen is still respected.
 */
const registerSchema = z.object({
  first_name: z.string().min(1, "Ingresa tu nombre."),
  last_name: z.string().min(1, "Ingresa tu apellido."),
  email: z.string().email("Ingresa un correo electrónico válido."),
  phone: z.string().min(7, "Ingresa un teléfono válido."),
  password: z.string().min(8, "La contraseña debe tener al menos 8 caracteres."),
  accepted_terms: z.boolean().refine((v) => v, {
    message: "Debes aceptar los términos y condiciones para continuar.",
  }),
});

export type RegisterFormValues = z.infer<typeof registerSchema>;

interface RegisterFormProps {
  /**
   * Full funnel routing is not wired yet (deferred-integration convention).
   * A successful register+auto-login shows a confirmation state; `onSuccess`
   * is an optional escape hatch for a caller that wants to navigate/signal
   * completion itself.
   */
  onSuccess?: () => void;
}

const errorMessage = (error: unknown): string =>
  error instanceof ApiError ? error.detail : "No pudimos crear tu cuenta. Intenta de nuevo.";

export function RegisterForm({ onSuccess }: RegisterFormProps) {
  const customerKind = usePurchaseDraftStore((state) => state.customerKind);
  const [serverError, setServerError] = useState<string | null>(null);
  const [succeeded, setSucceeded] = useState(false);
  const [profileWarning, setProfileWarning] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormValues>({ resolver: zodResolver(registerSchema) });

  const onSubmit = async (values: RegisterFormValues): Promise<void> => {
    setServerError(null);
    try {
      // `accepted_terms` gates submission client-side only — the backend's
      // register endpoint has no such field (checked this session), so it
      // is deliberately never sent, same convention as `kind`/`customerKind`
      // fields that stay purely client-side.
      const { accepted_terms: _acceptedTerms, ...registerValues } = values;
      await registerCustomer({ ...registerValues, kind: customerKind });
      const accessToken = await loginCustomer({ email: values.email, password: values.password });
      setAccessToken(accessToken);
      setSucceeded(true);

      // Bug fix (found during F9): without this, an individual customer's
      // previewed LOW/HIGH tier silently resolved to MEDIUM at actual
      // purchase time, because no NutritionProfile ever existed server-side.
      // GROUP customers never get one (by design); a skipped calculator has
      // no body data to send — MEDIUM's no-profile fallback is already
      // correct for both, so this only fires for a completed individual run.
      const draft = usePurchaseDraftStore.getState();
      if (
        draft.customerKind === "individual" &&
        draft.goal !== null &&
        draft.weightKg !== null &&
        draft.heightCm !== null &&
        draft.age !== null &&
        draft.activityLevel !== null
      ) {
        try {
          await createNutritionProfile({
            goal: draft.goal,
            weight_kg: Number(draft.weightKg),
            height_cm: Number(draft.heightCm),
            age: Number(draft.age),
            activity_level: draft.activityLevel,
          });
        } catch {
          // Best-effort: the account itself is real and usable either way.
          // Falling back to MEDIUM server-side is safe, just not what the
          // calculator previewed — surfaced softly, never blocks signup.
          setProfileWarning(
            "Tu cuenta se creó bien, pero no pudimos guardar tu perfil nutricional. Vas a recibir el plan Medio por ahora — podés ajustarlo después desde tu perfil.",
          );
        }
      }

      onSuccess?.();
    } catch (error) {
      setServerError(errorMessage(error));
    }
  };

  if (succeeded) {
    return (
      <div className="flex flex-col items-center gap-2 text-center">
        <Alert variant="success">¡Cuenta creada! Ya iniciaste sesión.</Alert>
        {profileWarning && <Alert variant="warning">{profileWarning}</Alert>}
      </div>
    );
  }

  return (
    <form
      onSubmit={(event) => void handleSubmit(onSubmit)(event)}
      noValidate
      className="mx-auto flex max-w-md flex-col gap-4"
    >
      <TextField
        label="Nombre"
        id="first_name"
        autoComplete="given-name"
        error={errors.first_name?.message}
        {...register("first_name")}
      />

      <TextField
        label="Apellido"
        id="last_name"
        autoComplete="family-name"
        error={errors.last_name?.message}
        {...register("last_name")}
      />

      <TextField
        label="Correo electrónico"
        id="email"
        type="email"
        autoComplete="email"
        error={errors.email?.message}
        {...register("email")}
      />

      <TextField
        label="Teléfono"
        id="phone"
        type="tel"
        autoComplete="tel"
        error={errors.phone?.message}
        {...register("phone")}
      />

      <TextField
        label="Contraseña"
        id="password"
        type="password"
        autoComplete="new-password"
        error={errors.password?.message}
        {...register("password")}
      />

      <div className="flex flex-col gap-1">
        <label className="flex items-start gap-2 font-poppins text-sm text-leaf/80">
          <input
            type="checkbox"
            className="mt-0.5 accent-leaf"
            {...register("accepted_terms")}
          />
          <span>
            Acepto los{" "}
            <Link href="/terminos" target="_blank" className="font-medium text-leaf underline underline-offset-2">
              términos y condiciones
            </Link>
            .
          </span>
        </label>
        {errors.accepted_terms && (
          <p className="font-poppins text-xs text-red-600">{errors.accepted_terms.message}</p>
        )}
      </div>

      {serverError && <Alert variant="error">{serverError}</Alert>}

      <Button type="submit" disabled={isSubmitting} fullWidth>
        {isSubmitting ? "Creando cuenta..." : "Crear cuenta"}
      </Button>
    </form>
  );
}
