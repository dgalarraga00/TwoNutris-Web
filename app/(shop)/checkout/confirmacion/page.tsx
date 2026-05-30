import { Suspense } from "react";
import { ConfirmacionClient } from "./ConfirmacionClient";

export const metadata = {
  title: "Resultado del pago | TwoNutris",
};

export default function ConfirmacionPage() {
  return (
    <Suspense>
      <ConfirmacionClient />
    </Suspense>
  );
}
