import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { prisma } from "@/lib/prisma";
import { calculateDeliveryDate } from "@/lib/delivery";
import { MIN_ORDER, DELIVERY_FEE } from "@/lib/catalog";

interface OrderPayload {
  items: { id: string; name: string; quantity: number }[];
  deliveryAddress: string;
  deliveryInstructions?: string;
  fullName?: string;
  phone?: string;
  taxIdType: string;
  taxId: string;
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

    const body: OrderPayload = await request.json();
    const {
      items,
      deliveryAddress,
      deliveryInstructions,
      fullName,
      phone,
      taxIdType,
      taxId,
    } = body;

    if (!items?.length) {
      return NextResponse.json({ error: "Carrito vacío" }, { status: 400 });
    }

    if (!deliveryAddress?.trim()) {
      return NextResponse.json({ error: "Dirección de entrega requerida" }, { status: 400 });
    }

    if (!taxIdType || !taxId?.trim()) {
      return NextResponse.json({ error: "Datos de facturación requeridos" }, { status: 400 });
    }

    // Leer precios desde la DB — nunca confiar en precios del cliente
    const dishIds = items.map((i) => i.id);
    const dishes = await prisma.dishTemplate.findMany({
      where: { id: { in: dishIds }, isActive: true },
      select: { id: true, name: true, price: true },
    });

    if (dishes.length !== dishIds.length) {
      return NextResponse.json({ error: "Uno o más platos no están disponibles" }, { status: 400 });
    }

    const priceMap = new Map(dishes.map((d) => [d.id, d]));

    const resolvedItems = items.map((i) => {
      const dish = priceMap.get(i.id)!;
      return { id: dish.id, name: dish.name, price: dish.price, quantity: i.quantity };
    });

    const subtotal = resolvedItems.reduce((s, i) => s + i.price * i.quantity, 0);

    if (subtotal < MIN_ORDER) {
      return NextResponse.json(
        { error: `El pedido mínimo es $${MIN_ORDER}` },
        { status: 400 }
      );
    }

    const commission = Math.round((subtotal + DELIVERY_FEE) * 0.0575 * 100) / 100;
    const total = subtotal + DELIVERY_FEE + commission;

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
        taxIdType,
        taxId: taxId.trim(),
        items: {
          create: resolvedItems.map((i) => ({
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
