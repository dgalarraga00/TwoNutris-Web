import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { emitDatilInvoice } from "@/lib/datil";
import { isAdmin } from "@/utils/admin";
import { createClient } from "@/utils/supabase/server";

export async function POST(request: Request) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user || !isAdmin(user.email)) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  const { orderId } = await request.json() as { orderId: string };
  if (!orderId) return NextResponse.json({ error: "orderId requerido" }, { status: 400 });

  const order = await prisma.order.findUnique({
    where: { id: orderId },
    include: {
      items: { select: { dishName: true, quantity: true, unitPrice: true } },
      profile: { select: { fullName: true, whatsapp: true } },
    },
  });

  if (!order) return NextResponse.json({ error: "Orden no encontrada" }, { status: 404 });
  if (order.status !== "PAID") return NextResponse.json({ error: "La orden no está pagada" }, { status: 400 });

  // Usar el email del CLIENTE guardado en la orden — NO el del admin que re-emite.
  // Órdenes previas a la captura de email no se pueden re-emitir automáticamente.
  if (!order.customerEmail) {
    return NextResponse.json(
      { error: "La orden no tiene email del cliente registrado. Re-emite la factura manualmente desde Dátil." },
      { status: 422 }
    );
  }

  await emitDatilInvoice({
    id: order.id,
    invoiceNumber: order.invoiceNumber,
    total: order.total,
    deliveryAddress: order.deliveryAddress,
    customerEmail: order.customerEmail,
    customerName: order.profile?.fullName,
    customerPhone: order.profile?.whatsapp,
    taxIdType: order.taxIdType,
    taxId: order.taxId,
    items: order.items,
  });

  return NextResponse.json({ success: true, orderId });
}
