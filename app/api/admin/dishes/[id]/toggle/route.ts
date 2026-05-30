import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { createClient } from "@/utils/supabase/server";
import { isAdmin } from "@/utils/admin";

export async function POST(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!isAdmin(user?.email)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;

  try {
    const dish = await prisma.dishTemplate.findUnique({ where: { id } });

    if (!dish) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    const updated = await prisma.dishTemplate.update({
      where: { id },
      data: { isActive: !dish.isActive },
    });

    return NextResponse.json(updated);
  } catch (err) {
    console.error("[dishes toggle POST]", err);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}
