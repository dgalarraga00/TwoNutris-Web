"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { BrandedScreen } from "@/components/BrandedScreen";
import { LoginForm } from "./LoginForm";

/**
 * Funnel navigation (final integration unit): thin client wrapper around
 * `LoginForm`, mirroring `RegisterScreen`. A fresh registration always
 * continues to `/checkout` (step 8), but a RETURNING customer may have
 * been bounced here by `middleware.ts`'s own `?next=` param (e.g. an
 * expired session while on `/semana`) — honor that param when present so
 * they land back where they were, not restart the funnel at checkout.
 * Falls back to `/checkout` when absent, matching a fresh-funnel login.
 */
export function LoginScreen() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const next = searchParams.get("next") ?? "/checkout";

  return (
    <BrandedScreen>
      <div className="mx-auto flex min-h-screen max-w-2xl flex-col justify-center gap-6 p-4">
        <Image src="/icons/logo.png" alt="TwoNutris" width={140} height={47} className="mx-auto" priority />
        <h1 className="text-center font-ibrand text-3xl text-leaf">Iniciar sesión</h1>
        <LoginForm onSuccess={() => router.push(next)} />
        <p className="text-center font-poppins text-sm text-leaf/60">
          ¿No tienes cuenta?{" "}
          <Link href="/registro" className="font-medium text-leaf underline underline-offset-2">
            Regístrate
          </Link>
        </p>
      </div>
    </BrandedScreen>
  );
}
