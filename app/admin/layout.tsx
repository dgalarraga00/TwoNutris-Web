import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { isAdmin } from "@/utils/admin";
import { AdminNav } from "@/components/admin/AdminNav";

export const metadata = { title: "Admin | TwoNutris" };

export default async function AdminLayout({ children }: { children: ReactNode }) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user || !isAdmin(user.email)) redirect("/");

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminNav email={user.email ?? ""} />
      <main className="flex-1 overflow-auto pb-20 md:pb-0">{children}</main>
    </div>
  );
}
