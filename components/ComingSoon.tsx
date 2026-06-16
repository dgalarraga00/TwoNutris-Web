import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { CountdownTimer } from "@/components/CountdownTimer";

const WHATSAPP_URL = "https://wa.me/593983392007";

/**
 * Pantalla de expectativa que reemplaza al menú hasta la fecha de lanzamiento.
 * El bloqueo es server-side (decidido en /pedir): el catálogo no se envía al
 * cliente. Esta pantalla solo muestra la cuenta regresiva y un CTA a WhatsApp.
 */
export function ComingSoon() {
  return (
    <section
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden px-6 py-20"
      style={{ backgroundColor: "#144400" }}
    >
      {/* Blobs decorativos de marca */}
      <div className="absolute -top-32 -right-32 pointer-events-none bg-leaf-dark w-[480px] h-[480px] opacity-40 rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%]" />
      <div className="absolute -bottom-24 -left-24 pointer-events-none bg-leaf-dark w-[360px] h-[360px] opacity-30 rounded-[40%_60%_70%_30%_/_40%_70%_30%_60%]" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-xl">
        <Image
          src="/icons/logo.png"
          alt="twonutris"
          width={160}
          height={52}
          className="mix-blend-screen mb-8"
          priority
        />

        <span
          className="inline-block text-xs font-bold tracking-widest uppercase mb-5 px-4 py-1.5 rounded-full font-poppins"
          style={{ backgroundColor: "#FFB000", color: "#144400" }}
        >
          Muy pronto
        </span>

        <h1 className="text-4xl sm:text-5xl font-ibrand leading-tight mb-4 text-cream">
          El nuevo menú se revela el jueves
        </h1>
        <p className="text-base sm:text-lg font-poppins text-cream/70 mb-12 max-w-md">
          Estamos cocinando algo bueno. La carta de esta semana se abre el
          jueves a las 00:01. Mientras tanto, acá está la cuenta regresiva.
        </p>

        <CountdownTimer />

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold font-poppins no-underline transition-transform duration-200 hover:scale-[1.03]"
          style={{ backgroundColor: "#FFB000", color: "#144400" }}
        >
          <MessageCircle size={18} />
          Avísame por WhatsApp
        </a>
      </div>
    </section>
  );
}
