import { prisma } from "@/lib/prisma";
import { Prisma, OrderStatus } from "@/lib/generated/prisma";
import { AdminPedidosList } from "./AdminPedidosList";

export const metadata = { title: "Pedidos | TwoNutris Admin" };

const PAGE_SIZE = 20;
// Ecuador no tiene horario de verano: offset fijo -05:00 (Guayaquil).
const EC_OFFSET = "-05:00";

interface SearchParams {
  q?: string;
  status?: string;
  desde?: string;
  hasta?: string;
  page?: string;
}

export default async function AdminPedidosPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const sp = await searchParams;

  const q = (sp.q ?? "").trim();
  const status =
    sp.status && sp.status !== "ALL" ? (sp.status as OrderStatus) : undefined;
  const page = Math.max(1, Number.parseInt(sp.page ?? "1", 10) || 1);

  // Fechas interpretadas en hora de Guayaquil (-05:00).
  const desde = sp.desde ? new Date(`${sp.desde}T00:00:00${EC_OFFSET}`) : undefined;
  const hasta = sp.hasta
    ? new Date(`${sp.hasta}T23:59:59.999${EC_OFFSET}`)
    : undefined;

  const createdAt =
    desde || hasta
      ? { ...(desde ? { gte: desde } : {}), ...(hasta ? { lte: hasta } : {}) }
      : undefined;

  // Filtro base (nombre + fecha) — sin estado, para contar por estado.
  const baseWhere: Prisma.OrderWhereInput = {
    ...(createdAt ? { createdAt } : {}),
    ...(q
      ? { profile: { is: { fullName: { contains: q, mode: "insensitive" } } } }
      : {}),
  };

  const where: Prisma.OrderWhereInput = {
    ...baseWhere,
    ...(status ? { status } : {}),
  };

  const [orders, totalCount, grouped] = await Promise.all([
    prisma.order.findMany({
      where,
      include: { items: true, profile: true },
      orderBy: { createdAt: "desc" },
      take: PAGE_SIZE,
      skip: (page - 1) * PAGE_SIZE,
    }),
    prisma.order.count({ where }),
    prisma.order.groupBy({
      by: ["status"],
      where: baseWhere,
      _count: { _all: true },
    }),
  ]);

  const counts: Record<string, number> = { ALL: 0 };
  for (const g of grouped) {
    counts[g.status] = g._count._all;
    counts.ALL += g._count._all;
  }

  const totalPages = Math.max(1, Math.ceil(totalCount / PAGE_SIZE));

  return (
    <div className="px-6 py-8 max-w-4xl mx-auto">
      <h1 className="font-poppins font-bold text-gray-900 text-2xl mb-6">
        Pedidos
      </h1>
      <AdminPedidosList
        orders={orders}
        counts={counts}
        page={page}
        totalPages={totalPages}
        totalCount={totalCount}
        pageSize={PAGE_SIZE}
        filters={{
          q,
          status: sp.status ?? "ALL",
          desde: sp.desde ?? "",
          hasta: sp.hasta ?? "",
        }}
      />
    </div>
  );
}
