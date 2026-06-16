import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { CheckoutClient } from "./CheckoutClient";
import { isBeforeLaunch } from "@/lib/launch";

export const metadata = {
  title: "Checkout | TwoNutris",
};

export default async function CheckoutPage() {
  // Antes del lanzamiento no se puede comprar (evita pedidos con carrito viejo).
  if (isBeforeLaunch()) {
    redirect("/pedir");
  }

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login?next=/checkout");
  }

  return <CheckoutClient userEmail={user.email ?? ""} />;
}
