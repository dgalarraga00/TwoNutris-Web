import { prisma } from "@/lib/prisma";
import { OrderStatus } from "@/lib/generated/prisma";
import { Phone, MapPin, ShoppingBag } from "lucide-react";

export const metadata = { title: "Clientes | TwoNutris Admin" };

export default async function AdminClientesPage() {
  const profiles = await prisma.profile.findMany({
    where: { orders: { some: {} } },
    include: {
      orders: {
        include: { items: true },
        orderBy: { createdAt: "desc" },
      },
    },
    orderBy: { updatedAt: "desc" },
  });

  return (
    <div className="px-6 py-8 max-w-4xl mx-auto">
      <h1 className="font-poppins font-bold text-gray-900 text-2xl mb-2">
        Clientes
      </h1>
      <p className="font-poppins text-sm text-gray-400 mb-6">
        {profiles.length} cliente{profiles.length !== 1 ? "s" : ""} con pedidos
      </p>

      <div className="flex flex-col gap-4">
        {profiles.map((profile) => {
          const paidOrders = profile.orders.filter(
            (o) => o.status === OrderStatus.PAID
          );
          const totalSpent = paidOrders.reduce((s, o) => s + o.total, 0);
          const lastOrder = profile.orders[0];
          const addresses = [
            ...new Set(profile.orders.map((o) => o.deliveryAddress)),
          ];
          const lastInstructions = profile.orders.find(
            (o) => o.deliveryInstructions
          )?.deliveryInstructions;

          return (
            <div
              key={profile.id}
              className="bg-white border border-gray-200 rounded-2xl px-5 py-4"
            >
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <p className="font-poppins font-bold text-gray-900">
                    {profile.fullName ?? "Sin nombre"}
                  </p>
                  {profile.whatsapp && (
                    <div className="flex items-center gap-1.5 mt-1 text-sm font-poppins text-gray-500">
                      <Phone size={12} className="text-gray-400" />
                      {profile.whatsapp}
                    </div>
                  )}
                </div>
                <div className="flex gap-4 text-right">
                  <div>
                    <p className="font-poppins text-xs text-gray-400">Pedidos</p>
                    <p className="font-poppins font-bold text-gray-900">
                      {profile.orders.length}
                    </p>
                  </div>
                  <div>
                    <p className="font-poppins text-xs text-gray-400">
                      Total gastado
                    </p>
                    <p className="font-poppins font-bold text-gray-900">
                      ${totalSpent.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>

              {lastOrder && (
                <div className="mt-3 pt-3 border-t border-gray-100 flex items-center gap-2 text-xs font-poppins text-gray-400">
                  <ShoppingBag size={12} />
                  <span>
                    Último pedido:{" "}
                    {new Date(lastOrder.createdAt).toLocaleDateString("es-EC", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </div>
              )}

              {addresses.length > 0 && (
                <div className="mt-2 flex flex-col gap-1">
                  {addresses.map((addr) => (
                    <div
                      key={addr}
                      className="flex items-start gap-1.5 text-xs font-poppins text-gray-500"
                    >
                      <MapPin
                        size={12}
                        className="text-gray-400 shrink-0 mt-0.5"
                      />
                      <span>{addr}</span>
                    </div>
                  ))}
                </div>
              )}

              {lastInstructions && (
                <p className="mt-2 text-xs font-poppins text-gray-400 bg-gray-50 rounded-xl px-3 py-2">
                  <span className="font-semibold text-gray-600">
                    Última instrucción:
                  </span>{" "}
                  {lastInstructions}
                </p>
              )}
            </div>
          );
        })}

        {profiles.length === 0 && (
          <div className="py-16 text-center font-poppins text-sm text-gray-400">
            Sin clientes aún
          </div>
        )}
      </div>
    </div>
  );
}
