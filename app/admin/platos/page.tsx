import { prisma } from "@/lib/prisma";
import { OrderStatus } from "@/lib/generated/prisma";

export const metadata = { title: "Platos | TwoNutris Admin" };

export default async function AdminPlatosPage() {
  const now = new Date();
  const weekStart = new Date(now);
  weekStart.setDate(now.getDate() - ((now.getDay() + 6) % 7));
  weekStart.setHours(0, 0, 0, 0);

  const items = await prisma.orderItem.findMany({
    where: {
      order: { status: OrderStatus.PAID, createdAt: { gte: weekStart } },
    },
    select: { dishName: true, quantity: true, unitPrice: true },
  });

  const map = new Map<string, { quantity: number; revenue: number }>();
  for (const item of items) {
    const existing = map.get(item.dishName) ?? { quantity: 0, revenue: 0 };
    map.set(item.dishName, {
      quantity: existing.quantity + item.quantity,
      revenue: existing.revenue + item.unitPrice * item.quantity,
    });
  }

  const rows = [...map.entries()]
    .map(([name, data]) => ({ name, ...data }))
    .sort((a, b) => b.quantity - a.quantity);

  const totalQty = rows.reduce((s, r) => s + r.quantity, 0);
  const totalRevenue = rows.reduce((s, r) => s + r.revenue, 0);

  return (
    <div className="px-6 py-8 max-w-3xl mx-auto">
      <h1 className="font-poppins font-bold text-gray-900 text-2xl mb-2">
        Platos
      </h1>
      <p className="font-poppins text-sm text-gray-400 mb-6">
        Pedidos pagados desde el lunes de esta semana
      </p>

      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm font-poppins">
            <thead>
              <tr className="text-left text-xs text-gray-400 border-b border-gray-100">
                <th className="px-5 py-3 font-semibold">Plato</th>
                <th className="px-5 py-3 font-semibold text-right">
                  Pedidos esta semana
                </th>
                <th className="px-5 py-3 font-semibold text-right">Ingresos</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.name}
                  className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors"
                >
                  <td className="px-5 py-3 text-gray-700 flex items-center gap-2">
                    <span className="text-xs text-gray-300 font-mono w-5 shrink-0">
                      {i + 1}
                    </span>
                    {row.name}
                  </td>
                  <td className="px-5 py-3 text-right text-gray-900 font-semibold">
                    {row.quantity}
                  </td>
                  <td className="px-5 py-3 text-right text-gray-900">
                    ${row.revenue.toFixed(2)}
                  </td>
                </tr>
              ))}
              {rows.length === 0 && (
                <tr>
                  <td
                    colSpan={3}
                    className="px-5 py-12 text-center text-gray-400 text-xs"
                  >
                    Sin datos esta semana
                  </td>
                </tr>
              )}
            </tbody>
            {rows.length > 0 && (
              <tfoot>
                <tr className="border-t border-gray-200 bg-gray-50">
                  <td className="px-5 py-3 font-semibold text-gray-700">
                    Total
                  </td>
                  <td className="px-5 py-3 text-right font-bold text-gray-900">
                    {totalQty}
                  </td>
                  <td className="px-5 py-3 text-right font-bold text-gray-900">
                    ${totalRevenue.toFixed(2)}
                  </td>
                </tr>
              </tfoot>
            )}
          </table>
        </div>
      </div>
    </div>
  );
}
