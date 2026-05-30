import { prisma } from "@/lib/prisma";
import { OrderStatus } from "@/lib/generated/prisma";

export const metadata = { title: "Overview | TwoNutris Admin" };

function getDateRanges() {
  const now = new Date();
  const weekStart = new Date(now);
  weekStart.setDate(now.getDate() - ((now.getDay() + 6) % 7));
  weekStart.setHours(0, 0, 0, 0);
  const todayStart = new Date(now);
  todayStart.setHours(0, 0, 0, 0);
  return { weekStart, todayStart };
}

export default async function AdminOverviewPage() {
  const { weekStart, todayStart } = getDateRanges();

  const [
    paidToday,
    paidWeek,
    ordersToday,
    pendingOrders,
    recentOrders,
    weekItems,
  ] = await Promise.all([
    prisma.order.aggregate({
      where: { status: OrderStatus.PAID, createdAt: { gte: todayStart } },
      _sum: { total: true },
    }),
    prisma.order.aggregate({
      where: { status: OrderStatus.PAID, createdAt: { gte: weekStart } },
      _sum: { total: true },
    }),
    prisma.order.count({
      where: { status: OrderStatus.PAID, createdAt: { gte: todayStart } },
    }),
    prisma.order.count({
      where: { status: OrderStatus.PENDING },
    }),
    prisma.order.findMany({
      where: { status: OrderStatus.PAID },
      include: { profile: true },
      orderBy: { createdAt: "desc" },
      take: 10,
    }),
    prisma.orderItem.findMany({
      where: {
        order: { status: OrderStatus.PAID, createdAt: { gte: weekStart } },
      },
      select: { dishName: true, quantity: true },
    }),
  ]);

  const dishMap = new Map<string, number>();
  for (const item of weekItems) {
    dishMap.set(item.dishName, (dishMap.get(item.dishName) ?? 0) + item.quantity);
  }
  const topDishes = [...dishMap.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  const stats = [
    {
      label: "Ingresos hoy",
      value: `$${(paidToday._sum.total ?? 0).toFixed(2)}`,
      sub: "pedidos pagados",
    },
    {
      label: "Ingresos esta semana",
      value: `$${(paidWeek._sum.total ?? 0).toFixed(2)}`,
      sub: "desde el lunes",
    },
    {
      label: "Pedidos hoy",
      value: ordersToday.toString(),
      sub: "pagados",
    },
    {
      label: "Pedidos pendientes",
      value: pendingOrders.toString(),
      sub: "sin confirmar pago",
    },
  ];

  return (
    <div className="px-6 py-8 max-w-5xl mx-auto">
      <h1 className="font-poppins font-bold text-gray-900 text-2xl mb-6">
        Overview
      </h1>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((s) => (
          <div
            key={s.label}
            className="bg-white border border-gray-200 rounded-2xl px-5 py-4"
          >
            <p className="font-poppins text-xs text-gray-400 mb-1">{s.label}</p>
            <p className="font-poppins font-bold text-2xl text-gray-900">
              {s.value}
            </p>
            <p className="font-poppins text-xs text-gray-400 mt-0.5">{s.sub}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
          <div className="px-5 py-4 border-b border-gray-100">
            <h2 className="font-poppins font-semibold text-gray-800 text-sm">
              Últimos 10 pedidos pagados
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm font-poppins">
              <thead>
                <tr className="text-left text-xs text-gray-400 border-b border-gray-100">
                  <th className="px-5 py-3 font-semibold">ID</th>
                  <th className="px-5 py-3 font-semibold">Cliente</th>
                  <th className="px-5 py-3 font-semibold text-right">Total</th>
                  <th className="px-5 py-3 font-semibold">Fecha</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr
                    key={order.id}
                    className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-5 py-3 text-gray-500 font-mono text-xs">
                      #{order.id.slice(0, 8).toUpperCase()}
                    </td>
                    <td className="px-5 py-3 text-gray-700">
                      {order.profile?.fullName ?? "—"}
                    </td>
                    <td className="px-5 py-3 text-gray-900 font-semibold text-right">
                      ${order.total.toFixed(2)}
                    </td>
                    <td className="px-5 py-3 text-gray-400 text-xs">
                      {new Date(order.createdAt).toLocaleDateString("es-EC", {
                        day: "numeric",
                        month: "short",
                      })}
                    </td>
                  </tr>
                ))}
                {recentOrders.length === 0 && (
                  <tr>
                    <td
                      colSpan={4}
                      className="px-5 py-8 text-center text-gray-400 text-xs"
                    >
                      Sin pedidos aún
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
          <div className="px-5 py-4 border-b border-gray-100">
            <h2 className="font-poppins font-semibold text-gray-800 text-sm">
              Top 5 platos esta semana
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm font-poppins">
              <thead>
                <tr className="text-left text-xs text-gray-400 border-b border-gray-100">
                  <th className="px-5 py-3 font-semibold">Plato</th>
                  <th className="px-5 py-3 font-semibold text-right">Pedidos</th>
                </tr>
              </thead>
              <tbody>
                {topDishes.map(([name, qty], i) => (
                  <tr
                    key={name}
                    className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-5 py-3 text-gray-700 flex items-center gap-2">
                      <span className="text-xs text-gray-300 font-mono w-4">
                        {i + 1}
                      </span>
                      {name}
                    </td>
                    <td className="px-5 py-3 text-right font-semibold text-gray-900">
                      {qty}
                    </td>
                  </tr>
                ))}
                {topDishes.length === 0 && (
                  <tr>
                    <td
                      colSpan={2}
                      className="px-5 py-8 text-center text-gray-400 text-xs"
                    >
                      Sin datos esta semana
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
