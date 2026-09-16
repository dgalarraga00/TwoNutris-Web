"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BrandedScreen } from "@/components/BrandedScreen";
import { RegisterForm } from "./RegisterForm";

/**
 * Funnel navigation (final integration unit): thin client wrapper around
 * `RegisterForm` so `app/registro/page.tsx` can stay a Server Component
 * (it exports `metadata`, which requires that). Wires `onSuccess` to the
 * funnel's step-8 destination and adds the "¿Ya tienes cuenta?" cross-link
 * to `/entrar` — both paths converge on the SAME next step (`/checkout`) on
 * success, per the funnel spec.
 */
export function RegisterScreen() {
  const router = useRouter();

  return (
    <BrandedScreen>
      <div className="mx-auto flex min-h-screen max-w-2xl flex-col justify-center gap-6 p-4">
        <Image src="/icons/logo.png" alt="TwoNutris" width={140} height={47} className="mx-auto" priority />
        <h1 className="text-center font-ibrand text-3xl text-leaf">Crear cuenta</h1>
        <RegisterForm onSuccess={() => router.push("/checkout")} />
        <p className="text-center font-poppins text-sm text-leaf/60">
          ¿Ya tienes cuenta?{" "}
          <Link href="/entrar" className="font-medium text-leaf underline underline-offset-2">
            Inicia sesión
          </Link>
        </p>
      </div>
    </BrandedScreen>
  );
}
