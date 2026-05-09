import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { DashboardNav } from "./DashboardNav";

export default async function DashboardLayout({ children }: { children: ReactNode }) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect("/login?next=/dashboard/pedidos");

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <DashboardNav />
      {children}
    </div>
  );
}
