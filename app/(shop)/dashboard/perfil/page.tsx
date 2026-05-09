import { createClient } from "@/utils/supabase/server";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { PerfilClient } from "./PerfilClient";

export const metadata = { title: "Mi perfil | TwoNutris" };

export default async function PerfilPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login?next=/dashboard/perfil");

  const profile = await prisma.profile.findUnique({
    where: { id: user.id },
  });

  return (
    <PerfilClient
      email={user.email ?? ""}
      fullName={profile?.fullName ?? ""}
      whatsapp={profile?.whatsapp ?? ""}
    />
  );
}
