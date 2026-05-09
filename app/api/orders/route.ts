import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { prisma } from "@/lib/prisma";
import { KUSHKI_BASE_URL } from "@/utils/kushki";

interface OrderPayload {
  items: { id: string; name: string; price: number; quantity: number }[];
  deliveryAddress: string;
  deliveryInstructions?: string;
  deliveryZone: "URBAN" | "PERIPHERAL";
  kushkiToken: string;
}

const DELIVERY_FEE = { URBAN: 3, PERIPHERAL: 4 };

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
    const { items, deliveryAddress, deliveryInstructions, deliveryZone, kushkiToken } = body;

    if (!items?.length) {
      return NextResponse.json({ error: "Carrito vacío" }, { status: 400 });
    }

    const subtotal = items.reduce((s, i) => s + i.price * i.quantity, 0);
    const delivery = DELIVERY_FEE[deliveryZone];
    const total = subtotal + delivery;

    // Cobro via Kushki (server-side)
    if (process.env.KUSHKI_PRIVATE_KEY) {
      const kushkiRes = await fetch(
        `${KUSHKI_BASE_URL}/card/v1/charges`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Private_Merchant_Id: process.env.KUSHKI_PRIVATE_KEY,
          },
          body: JSON.stringify({
            token: { token: kushkiToken },
            amount: {
              subtotalIva: 0,
              subtotalIva0: total,
              iva: 0,
              currency: "USD",
            },
            metadata: { orderedBy: user.email },
          }),
        }
      );

      if (!kushkiRes.ok) {
        const err = await kushkiRes.json() as { message?: string };
        return NextResponse.json(
          { error: err.message ?? "Error en el pago" },
          { status: 402 }
        );
      }
    }

    // Upsert perfil
    await prisma.profile.upsert({
      where: { id: user.id },
      update: {},
      create: { id: user.id, fullName: user.email },
    });

    // Crear orden
    const order = await prisma.order.create({
      data: {
        profileId: user.id,
        status: "PENDING",
        total,
        deliveryAddress,
        deliveryInstructions: deliveryInstructions ?? null,
        kushkiToken,
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

    return NextResponse.json({ orderId: order.id });
  } catch (err) {
    console.error("[orders]", err);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}
