import { createClient } from "@/utils/supabase/server";
import { ShopHeaderClient } from "./ShopHeaderClient";

export async function ShopHeader() {
  const supabase = await createClient();

  let email: string | null = null;
  try {
    const { data: { user } } = await supabase.auth.getUser();
    email = user?.email ?? null;
  } catch {
    // Auth failure is non-fatal — render header without user info
  }

  return <ShopHeaderClient userEmail={email} />;
}
