import { prisma } from "@/lib/prisma";
import { AdminPedidosList } from "./AdminPedidosList";

export const metadata = { title: "Pedidos | TwoNutris Admin" };

export default async function AdminPedidosPage() {
  const orders = await prisma.order.findMany({
    include: { items: true, profile: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="px-6 py-8 max-w-4xl mx-auto">
      <h1 className="font-poppins font-bold text-gray-900 text-2xl mb-6">
        Pedidos
      </h1>
      <AdminPedidosList orders={orders} />
    </div>
  );
}
