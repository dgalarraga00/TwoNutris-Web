import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { prisma } from "@/lib/prisma";

export async function PATCH(request: Request) {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }

    const { fullName, whatsapp } = await request.json() as { fullName?: string; whatsapp?: string };

    const profile = await prisma.profile.upsert({
      where: { id: user.id },
      update: {
        fullName: fullName?.trim() || null,
        whatsapp: whatsapp?.trim() || null,
      },
      create: {
        id: user.id,
        fullName: fullName?.trim() || user.email,
        whatsapp: whatsapp?.trim() || null,
      },
    });

    return NextResponse.json({ profile });
  } catch (err) {
    console.error("[profile]", err);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}
