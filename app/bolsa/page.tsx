import type { Metadata } from "next";
import { BagScreen } from "@/features/bag/BagScreen";

export const metadata: Metadata = {
  title: "Tu bolsa | TwoNutris",
};

/**
 * Ungrouped route (`app/bolsa`), matching the same convention F6 already
 * established for `/menu` — the design doc's `(public)/bolsa` route group
 * does not exist as a folder in this repo yet (see `middleware.ts`'s own
 * forward-reference note); the URL is identical either way since route
 * groups never affect the path.
 */
export default function BolsaPage() {
  return <BagScreen />;
}
