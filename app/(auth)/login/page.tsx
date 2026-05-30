"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { Eye, EyeOff, Loader2 } from "lucide-react";

type Mode = "login" | "signup";

export default function LoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
}

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const next = searchParams.get("next") ?? "/pedir";

  const [mode, setMode] = useState<Mode>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const supabase = createClient();

  useEffect(() => {
    if (searchParams.get("error") === "auth") {
      setError("Hubo un problema con el inicio de sesión. Intentá de nuevo.");
    }
  }, [searchParams]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);

    try {
      if (mode === "login") {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        window.location.href = `/auth/redirect?next=${encodeURIComponent(next)}`;
      } else {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/auth/callback?next=${next}`,
          },
        });
        if (error) throw error;
        if (data.user?.identities?.length === 0) {
          setError("Ya existe una cuenta con ese email. Iniciá sesión.");
          return;
        }
        setSuccess(
          "¡Cuenta creada! Revisá tu email para confirmar tu cuenta."
        );
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Error desconocido";
      if (msg.includes("Invalid login credentials")) {
        setError("Email o contraseña incorrectos.");
      } else if (msg.includes("already registered")) {
        setError("Ya existe una cuenta con ese email. Iniciá sesión.");
      } else {
        setError(msg);
      }
    } finally {
      setLoading(false);
    }
  }

  async function handleGoogle() {
    setGoogleLoading(true);
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback?next=${next}`,
      },
    });
  }

  return (
    <div className="w-full max-w-sm">
      <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
        {/* Tabs */}
        <div className="flex bg-gray-100 rounded-2xl p-1 mb-6">
          <button
            onClick={() => { setMode("login"); setError(null); setSuccess(null); }}
            className={`flex-1 py-2 text-sm font-semibold font-poppins rounded-xl transition-all ${
              mode === "login"
                ? "bg-white text-leaf shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Iniciar sesión
          </button>
          <button
            onClick={() => { setMode("signup"); setError(null); setSuccess(null); }}
            className={`flex-1 py-2 text-sm font-semibold font-poppins rounded-xl transition-all ${
              mode === "signup"
                ? "bg-white text-leaf shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Crear cuenta
          </button>
        </div>

        {/* Google */}
        <button
          onClick={handleGoogle}
          disabled={googleLoading}
          className="w-full flex items-center justify-center gap-3 border border-gray-200 rounded-2xl py-3 text-sm font-semibold font-poppins text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-60 mb-5"
        >
          {googleLoading ? (
            <Loader2 size={16} className="animate-spin" />
          ) : (
            <svg width="18" height="18" viewBox="0 0 18 18">
              <path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z"/>
              <path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z"/>
              <path fill="#FBBC05" d="M3.964 10.707c-.18-.54-.282-1.117-.282-1.707s.102-1.167.282-1.707V4.961H.957C.347 6.175 0 7.55 0 9s.348 2.825.957 4.039l3.007-2.332z"/>
              <path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.961L3.964 7.293C4.672 5.166 6.656 3.58 9 3.58z"/>
            </svg>
          )}
          Continuar con Google
        </button>

        <div className="flex items-center gap-3 mb-5">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-xs text-gray-400 font-poppins">o con email</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold font-poppins text-gray-600">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tucorreo@ejemplo.com"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-poppins text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-leaf/30 focus:border-leaf transition"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold font-poppins text-gray-600">
              Contraseña
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Mínimo 8 caracteres"
                minLength={8}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 pr-11 text-sm font-poppins text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-leaf/30 focus:border-leaf transition"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {error && (
            <p className="text-xs font-poppins text-red-500 bg-red-50 rounded-xl px-4 py-3">
              {error}
            </p>
          )}

          {success && (
            <p className="text-xs font-poppins text-leaf bg-leaf/5 rounded-xl px-4 py-3">
              {success}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-leaf text-cream font-poppins font-bold text-sm py-3.5 rounded-2xl hover:bg-leaf-dark transition-colors disabled:opacity-60 flex items-center justify-center gap-2 mt-1"
          >
            {loading && <Loader2 size={16} className="animate-spin" />}
            {mode === "login" ? "Iniciar sesión" : "Crear cuenta"}
          </button>
        </form>
      </div>

      <p className="text-center text-xs text-gray-400 font-poppins mt-4">
        Al continuar aceptás nuestros{" "}
        <a href="/terminos" className="underline hover:text-leaf">términos</a>{" "}
        y{" "}
        <a href="/privacidad" className="underline hover:text-leaf">política de privacidad</a>.
      </p>
    </div>
  );
}
