import { ReactNode } from "react";
import Link from "next/link";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <Link
        href="/"
        className="font-ibrand text-3xl text-leaf mb-8 hover:opacity-80 transition-opacity"
      >
        TwoNutris
      </Link>
      {children}
    </div>
  );
}
