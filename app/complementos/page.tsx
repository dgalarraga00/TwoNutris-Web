import type { Metadata } from "next";
import { UpsellsScreen } from "@/features/bag/UpsellsScreen";

export const metadata: Metadata = {
  title: "Complementos | TwoNutris",
};

/** Ungrouped route (`app/complementos`) — see `app/bolsa/page.tsx`'s comment. */
export default function ComplementosPage() {
  return <UpsellsScreen />;
}
