import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { prisma } from "@/lib/prisma";
import { confirmPayphoneTransaction } from "@/utils/payphone";
import { emitDatilInvoice } from "@/lib/datil";
import { sendOrderConfirmationEmail } from "@/lib/email";

interface ConfirmPayload {
  id: number;
  clientTransactionId: string;
}

export async function POST(request: Request) {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }

    const body: ConfirmPayload = await request.json();
    const { id, clientTransactionId } = body;

    if (!id || !clientTransactionId) {
      return NextResponse.json(
        { error: "Faltan parámetros: id y clientTransactionId requeridos" },
        { status: 400 }
      );
    }

    // Verificar que la orden pertenece al usuario autenticado
    const existingOrder = await prisma.order.findUnique({
      where: { id: clientTransactionId },
      select: {
        id: true,
        profileId: true,
        status: true,
        total: true,
        deliveryAddress: true,
        taxIdType: true,
        taxId: true,
        invoiceNumber: true,
        items: { select: { dishName: true, quantity: true, unitPrice: true } },
        profile: { select: { fullName: true, whatsapp: true } },
      },
    });

    if (!existingOrder) {
      return NextResponse.json({ error: "Orden no encontrada" }, { status: 404 });
    }

    if (existingOrder.profileId !== user.id) {
      return NextResponse.json({ error: "No autorizado" }, { status: 403 });
    }

    // Si ya fue procesada, no volver a confirmar
    if (existingOrder.status === "PAID") {
      return NextResponse.json({ success: true, status: "PAID", alreadyConfirmed: true });
    }

    // Llamar a PayPhone confirm API
    const payphoneRes = await confirmPayphoneTransaction(id, clientTransactionId);

    const paymentApproved = payphoneRes.statusCode === 3;

    // Blindaje anti-manipulación: el monto confirmado por PayPhone debe coincidir
    // con el total del pedido. Evita que el `id` de una transacción de OTRO pago
    // (p. ej. de menor monto) sirva para confirmar este pedido. Solo bloqueamos si
    // PayPhone devuelve un monto y NO coincide; si lo omite, no regresionamos el flujo.
    const expectedCents = Math.round(existingOrder.total * 100);
    const paidCents = payphoneRes.amount;
    if (paymentApproved && typeof paidCents === "number" && paidCents !== expectedCents) {
      console.error("[payphone/confirm] MONTO NO COINCIDE — posible manipulación", {
        orderId: clientTransactionId,
        payphoneTransactionId: id,
        expectedCents,
        paidCents,
      });
      await prisma.order.update({
        where: { id: clientTransactionId },
        data: { status: "FAILED", payphoneTransactionId: String(id) },
      });
      return NextResponse.json(
        { success: false, status: "FAILED", message: "El monto del pago no coincide con el pedido." },
        { status: 409 }
      );
    }

    const approved = paymentApproved;

    // Actualizar la orden según el resultado
    const updatedOrder = await prisma.order.update({
      where: { id: clientTransactionId },
      data: {
        status: approved ? "PAID" : "FAILED",
        payphoneTransactionId: String(id),
      },
    });

    if (approved) {
      await Promise.allSettled([
        emitDatilInvoice({
          id: existingOrder.id,
          invoiceNumber: existingOrder.invoiceNumber,
          total: existingOrder.total,
          deliveryAddress: existingOrder.deliveryAddress,
          customerEmail: user.email ?? "",
          customerName: existingOrder.profile?.fullName,
          customerPhone: existingOrder.profile?.whatsapp,
          taxIdType: existingOrder.taxIdType,
          taxId: existingOrder.taxId,
          items: existingOrder.items,
        }).catch((err) => console.error("[datil] error al emitir factura:", err)),
        sendOrderConfirmationEmail({
          orderId: existingOrder.id,
          customerName: existingOrder.profile?.fullName,
          customerEmail: user.email ?? "",
          items: existingOrder.items,
          total: existingOrder.total,
          deliveryAddress: existingOrder.deliveryAddress,
        }).catch((err) => console.error("[email] error al enviar confirmación:", err)),
      ]);

      return NextResponse.json({
        success: true,
        status: "PAID",
        orderId: updatedOrder.id,
        authorizationCode: payphoneRes.authorizationCode,
        transactionStatus: payphoneRes.transactionStatus,
      });
    }

    return NextResponse.json(
      {
        success: false,
        status: "FAILED",
        transactionStatus: payphoneRes.transactionStatus,
        message: payphoneRes.message ?? "Pago no aprobado",
      },
      { status: 402 }
    );
  } catch (err) {
    console.error("[payphone/confirm POST]", err);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}
