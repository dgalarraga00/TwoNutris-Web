import { Suspense } from "react";
import { ConfirmacionClient } from "./ConfirmacionClient";

export const metadata = {
  title: "Pedido confirmado | TwoNutris",
};

export default function ConfirmacionPage() {
  return (
    <Suspense>
      <ConfirmacionClient />
    </Suspense>
  );
}
