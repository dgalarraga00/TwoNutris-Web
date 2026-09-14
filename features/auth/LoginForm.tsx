"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/Button";
import { TextField } from "@/components/ui/TextField";
import { Alert } from "@/components/ui/Alert";
import { loginCustomer } from "@/lib/api/auth";
import { setAccessToken } from "@/lib/http/tokenStore";
import { ApiError, isCode } from "@/lib/http/errors";

/**
 * F8 (task 5.7) companion to `RegisterForm` — email/password only, calling
 * `/api/session/login` directly (F2, already built). `middleware.ts` already
 * references `/entrar?next=` as this exact login route (F2's own doc
 * comment), so this component is mounted there.
 */
const loginSchema = z.object({
  email: z.string().email("Ingresa un correo electrónico válido."),
  password: z.string().min(1, "Ingresa tu contraseña."),
});

export type LoginFormValues = z.infer<typeof loginSchema>;

interface LoginFormProps {
  /** See `RegisterForm`'s identical prop — full funnel routing is deferred. */
  onSuccess?: () => void;
}

const errorMessage = (error: unknown): string => {
  if (isCode(error, "invalid_credentials")) {
    return "Correo o contraseña incorrectos.";
  }
  return error instanceof ApiError ? error.detail : "No pudimos iniciar sesión. Intenta de nuevo.";
};

export function LoginForm({ onSuccess }: LoginFormProps) {
  const [serverError, setServerError] = useState<string | null>(null);
  const [succeeded, setSucceeded] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({ resolver: zodResolver(loginSchema) });

  const onSubmit = async (values: LoginFormValues): Promise<void> => {
    setServerError(null);
    try {
      const accessToken = await loginCustomer(values);
      setAccessToken(accessToken);
      setSucceeded(true);
      onSuccess?.();
    } catch (error) {
      setServerError(errorMessage(error));
    }
  };

  if (succeeded) {
    return (
      <div className="text-center">
        <Alert variant="success">¡Bienvenido de nuevo!</Alert>
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
        label="Correo electrónico"
        id="email"
        type="email"
        autoComplete="email"
        error={errors.email?.message}
        {...register("email")}
      />

      <TextField
        label="Contraseña"
        id="password"
        type="password"
        autoComplete="current-password"
        error={errors.password?.message}
        {...register("password")}
      />

      {serverError && <Alert variant="error">{serverError}</Alert>}

      <Button type="submit" disabled={isSubmitting} fullWidth>
        {isSubmitting ? "Iniciando sesión..." : "Iniciar sesión"}
      </Button>
    </form>
  );
}
