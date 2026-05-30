import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { prisma } from "@/lib/prisma";
import { confirmPayphoneTransaction } from "@/utils/payphone";
import { emitDatilInvoice } from "@/lib/datil";

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

    const approved = payphoneRes.statusCode === 3;

    // Actualizar la orden según el resultado
    const updatedOrder = await prisma.order.update({
      where: { id: clientTransactionId },
      data: {
        status: approved ? "PAID" : "FAILED",
        payphoneTransactionId: String(id),
      },
    });

    if (approved) {
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
      }).catch((err) => console.error("[datil] error al emitir factura:", err));

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
