import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { isAdmin } from "@/utils/admin";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const next = searchParams.get("next") ?? "/pedir";

  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const destination = isAdmin(user?.email) ? "/admin" : next;
  return NextResponse.redirect(`${origin}${destination}`);
}
