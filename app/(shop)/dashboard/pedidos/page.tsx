import { createClient } from "@/utils/supabase/server";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { OrderCard } from "./OrderCard";

export const metadata = { title: "Mis pedidos | TwoNutris" };

export default async function PedidosPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login?next=/dashboard/pedidos");

  const orders = await prisma.order.findMany({
    where: { profileId: user.id },
    include: { items: true },
    orderBy: { createdAt: "desc" },
  });

  if (orders.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-4 text-center">
        <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
          <span className="text-2xl">🛍️</span>
        </div>
        <p className="text-gray-500 font-poppins text-sm">
          Todavía no tenés pedidos.
        </p>
        <a
          href="/pedir"
          className="mt-2 px-6 py-2.5 rounded-full bg-leaf text-cream text-sm font-semibold font-poppins hover:opacity-90 transition-opacity"
        >
          Ver menú
        </a>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {orders.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  );
}
