import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { prisma } from "@/lib/prisma";
import { calculateDeliveryDate } from "@/lib/delivery";

interface OrderPayload {
  items: { id: string; name: string; price: number; quantity: number }[];
  deliveryAddress: string;
  deliveryInstructions?: string;
  fullName?: string;
  phone?: string;
}

const DELIVERY_FEE = 3;

export async function POST(request: Request) {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }

    const body: OrderPayload = await request.json();
    const {
      items,
      deliveryAddress,
      deliveryInstructions,
      fullName,
      phone,
    } = body;

    if (!items?.length) {
      return NextResponse.json({ error: "Carrito vacío" }, { status: 400 });
    }

    if (!deliveryAddress?.trim()) {
      return NextResponse.json(
        { error: "Dirección de entrega requerida" },
        { status: 400 }
      );
    }

    const subtotal = items.reduce((s, i) => s + i.price * i.quantity, 0);
    const delivery = DELIVERY_FEE;
    const commission = Math.round((subtotal + delivery) * 0.0575 * 100) / 100;
    const total = subtotal + delivery + commission;

    const profileUpdate: { fullName?: string; whatsapp?: string } = {};
    if (fullName) profileUpdate.fullName = fullName;
    if (phone) profileUpdate.whatsapp = phone;

    await prisma.profile.upsert({
      where: { id: user.id },
      update: profileUpdate,
      create: { id: user.id, fullName: fullName ?? user.email ?? "", whatsapp: phone ?? null },
    });

    const deliveryDate = calculateDeliveryDate();

    // Crear orden en estado PENDING — se confirma cuando PayPhone lo aprueba
    const order = await prisma.order.create({
      data: {
        profileId: user.id,
        status: "PENDING",
        total,
        deliveryAddress: deliveryAddress.trim(),
        deliveryInstructions: deliveryInstructions?.trim() ?? null,
        deliveryDate,
        items: {
          create: items.map((i) => ({
            dishId: i.id,
            dishName: i.name,
            quantity: i.quantity,
            unitPrice: i.price,
          })),
        },
      },
    });

    const amountCents = Math.round(total * 100);

    return NextResponse.json({ orderId: order.id, amountCents });
  } catch (err) {
    console.error("[orders POST]", err);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}
