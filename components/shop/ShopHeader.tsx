import { createClient } from "@/utils/supabase/server";
import { ShopHeaderClient } from "./ShopHeaderClient";

export async function ShopHeader() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  return <ShopHeaderClient userEmail={user?.email ?? null} />;
}
