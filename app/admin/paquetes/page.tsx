import { prisma } from "@/lib/prisma";
import { OrderStatus } from "@/lib/generated/prisma";
import { calculateDeliveryDate, formatDeliveryDate } from "@/lib/delivery";

export const metadata = { title: "Paquetes | TwoNutris Admin" };

interface DishLine {
  name: string;
  qty: number;
}

interface ClientPackage {
  profileId: string;
  clientName: string;
  whatsapp: string | null;
  dishes: DishLine[];
  total: number;
}

export default async function PaquetesPage() {
  const deliveryDate = calculateDeliveryDate();

  // Window: same day (any time) — match on date only using UTC day boundaries
  const dayStart = new Date(deliveryDate);
  dayStart.setHours(0, 0, 0, 0);
  const dayEnd = new Date(deliveryDate);
  dayEnd.setHours(23, 59, 59, 999);

  const orders = await prisma.order.findMany({
    where: {
      status: { in: [OrderStatus.PAID, OrderStatus.PENDING] },
      deliveryDate: { gte: dayStart, lte: dayEnd },
    },
    include: {
      profile: true,
      items: {
        select: { dishName: true, quantity: true },
      },
    },
    orderBy: { createdAt: "asc" },
  });

  // Group by profileId → aggregate dishes
  const clientMap = new Map<
    string,
    { clientName: string; whatsapp: string | null; dishMap: Map<string, number> }
  >();

  for (const order of orders) {
    const key = order.profileId;
    if (!clientMap.has(key)) {
      clientMap.set(key, {
        clientName: order.profile?.fullName ?? "Cliente sin nombre",
        whatsapp: order.profile?.whatsapp ?? null,
        dishMap: new Map(),
      });
    }
    const entry = clientMap.get(key)!;
    for (const item of order.items) {
      entry.dishMap.set(
        item.dishName,
        (entry.dishMap.get(item.dishName) ?? 0) + item.quantity
      );
    }
  }

  const packages: ClientPackage[] = [...clientMap.entries()].map(
    ([profileId, { clientName, whatsapp, dishMap }]) => {
      const dishes = [...dishMap.entries()]
        .sort((a, b) => b[1] - a[1])
        .map(([name, qty]) => ({ name, qty }));
      const total = dishes.reduce((s, d) => s + d.qty, 0);
      return { profileId, clientName, whatsapp, dishes, total };
    }
  );

  // Sort by client name
  packages.sort((a, b) => a.clientName.localeCompare(b.clientName));

  const grandTotal = packages.reduce((s, p) => s + p.total, 0);
  const formattedDate = formatDeliveryDate(deliveryDate);

  return (
    <div className="px-6 py-8 max-w-5xl mx-auto">
      <h1 className="font-poppins font-bold text-gray-900 text-2xl mb-1">
        Paquetes
      </h1>
      <p className="font-poppins text-sm text-gray-400 mb-6">
        Entrega: {formattedDate}
      </p>

      {/* Grand total banner */}
      <div className="bg-white border border-gray-200 rounded-2xl px-5 py-4 mb-6 flex items-center justify-between">
        <div>
          <p className="font-poppins text-xs text-gray-400 mb-0.5">
            Clientes con pedido
          </p>
          <p className="font-poppins font-bold text-2xl text-gray-900">
            {packages.length}
          </p>
        </div>
        <div className="text-right">
          <p className="font-poppins text-xs text-gray-400 mb-0.5">
            Total platos a empacar
          </p>
          <p className="font-poppins font-bold text-2xl text-leaf">
            {grandTotal}
          </p>
        </div>
      </div>

      {packages.length === 0 ? (
        <div className="bg-white border border-gray-200 rounded-2xl px-5 py-16 text-center">
          <p className="font-poppins text-gray-400 text-sm">
            No hay pedidos para esta entrega
          </p>
          <p className="font-poppins text-gray-300 text-xs mt-1">
            {formattedDate}
          </p>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {packages.map((pkg) => (
            <div
              key={pkg.profileId}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden"
            >
              {/* Card header */}
              <div className="px-5 py-3 border-b border-gray-100 flex items-center justify-between">
                <div className="min-w-0">
                  <h2 className="font-poppins font-semibold text-gray-800 text-sm truncate">
                    {pkg.clientName}
                  </h2>
                  {pkg.whatsapp && (
                    <p className="font-poppins text-xs text-gray-400 truncate">
                      {pkg.whatsapp}
                    </p>
                  )}
                </div>
                <span className="ml-3 shrink-0 inline-flex items-center justify-center bg-leaf/10 text-leaf font-poppins font-bold text-xs rounded-full h-7 w-7">
                  {pkg.total}
                </span>
              </div>

              {/* Dish rows */}
              <ul className="px-5 py-3 flex flex-col gap-2">
                {pkg.dishes.map((dish) => (
                  <li key={dish.name} className="flex items-center justify-between gap-3">
                    <span className="font-poppins text-sm text-gray-700 truncate">
                      {dish.name}
                    </span>
                    <span className="shrink-0 font-poppins text-xs font-semibold bg-gray-100 text-gray-600 rounded-full px-2.5 py-0.5">
                      ×{dish.qty}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Footer total */}
              <div className="px-5 py-2.5 border-t border-gray-100 flex items-center justify-end gap-1.5">
                <span className="font-poppins text-xs text-gray-400">Total:</span>
                <span className="font-poppins text-xs font-bold text-leaf">
                  {pkg.total} plato{pkg.total !== 1 ? "s" : ""}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
