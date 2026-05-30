import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <Link href="/" className="mb-8 hover:opacity-80 transition-opacity">
        <Image
          src="/icons/logo.png"
          alt="twonutris"
          width={160}
          height={54}
          className="h-14 w-auto"
          sizes="112px"
          priority
        />
      </Link>
      {children}
    </div>
  );
}
