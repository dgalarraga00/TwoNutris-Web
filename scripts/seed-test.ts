import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../lib/generated/prisma";
import { Pool } from "pg";
import * as dotenv from "dotenv";
import * as path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env.local") });
dotenv.config({ path: path.join(process.cwd(), ".env") });

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const DB_URL = process.env.DIRECT_URL ?? process.env.DATABASE_URL;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL ?? "dgalarraga00@gmail.com";

if (!SUPABASE_URL || !SERVICE_ROLE_KEY || !DB_URL) {
  console.error("Faltan variables de entorno. Verificá que .env.local tenga:");
  console.error("  NEXT_PUBLIC_SUPABASE_URL  →", SUPABASE_URL ? "✓" : "✗ FALTA");
  console.error("  SUPABASE_SERVICE_ROLE_KEY →", SERVICE_ROLE_KEY ? "✓" : "✗ FALTA");
  console.error("  DIRECT_URL o DATABASE_URL →", DB_URL ? "✓" : "✗ FALTA");
  process.exit(1);
}

// Admin REST helpers — sin createClient para evitar el init de Realtime en Node 20
const adminHeaders = {
  "apikey": SERVICE_ROLE_KEY,
  "Authorization": `Bearer ${SERVICE_ROLE_KEY}`,
  "Content-Type": "application/json",
};

async function listUsers(): Promise<{ id: string; email: string }[]> {
  const res = await fetch(`${SUPABASE_URL}/auth/v1/admin/users?per_page=1000`, { headers: adminHeaders });
  const data = await res.json() as { users: { id: string; email: string }[] };
  return data.users ?? [];
}

async function createAuthUser(email: string, password: string): Promise<string> {
  const res = await fetch(`${SUPABASE_URL}/auth/v1/admin/users`, {
    method: "POST",
    headers: adminHeaders,
    body: JSON.stringify({ email, password, email_confirm: true }),
  });
  const data = await res.json() as { id: string; error?: string; message?: string };
  if (!data.id) throw new Error(data.message ?? data.error ?? "Error creando usuario");
  return data.id;
}

async function deleteAuthUser(id: string): Promise<void> {
  await fetch(`${SUPABASE_URL}/auth/v1/admin/users/${id}`, { method: "DELETE", headers: adminHeaders });
}

const pool = new Pool({ connectionString: DB_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter } as never);

const TEST_USERS = [
  { email: "cliente1@twonutris.com", password: "Test1234!", name: "Ana García" },
  { email: "cliente2@twonutris.com", password: "Test1234!", name: "Carlos Méndez" },
  { email: "cliente3@twonutris.com", password: "Test1234!", name: "Sofía Ramírez" },
  { email: "cliente4@twonutris.com", password: "Test1234!", name: "Luis Torres" },
  { email: "cliente5@twonutris.com", password: "Test1234!", name: "María Andrade" },
];

async function main() {
  console.log("🧹 Borrando datos existentes (excepto admin)...\n");

  await prisma.orderItem.deleteMany({});
  console.log("  ✓ OrderItems eliminados");

  await prisma.order.deleteMany({});
  console.log("  ✓ Orders eliminados");

  const allUsers = await listUsers();
  const adminIds = allUsers.filter((u) => u.email === ADMIN_EMAIL).map((u) => u.id);

  const deletedProfiles = await prisma.profile.deleteMany({
    where: adminIds.length > 0 ? { NOT: { id: { in: adminIds } } } : {},
  });
  console.log(`  ✓ ${deletedProfiles.count} perfil(es) eliminados`);

  let deletedUsers = 0;
  for (const user of allUsers) {
    if (user.email === ADMIN_EMAIL) continue;
    await deleteAuthUser(user.id);
    deletedUsers++;
  }
  console.log(`  ✓ ${deletedUsers} usuario(s) de Auth eliminados`);

  console.log("\n👥 Creando usuarios de prueba...\n");

  for (const u of TEST_USERS) {
    try {
      const userId = await createAuthUser(u.email, u.password);
      await prisma.profile.upsert({
        where: { id: userId },
        update: { fullName: u.name },
        create: { id: userId, fullName: u.name },
      });
      console.log(`  ✓ ${u.email}  /  ${u.password}  (${u.name})`);
    } catch (e) {
      console.error(`  ✗ Error creando ${u.email}:`, e instanceof Error ? e.message : e);
    }
  }

  console.log("\n✅ Listo.\n");
  console.log("┌─────────────────────────────────┬──────────────┬─────────────────┐");
  console.log("│ Email                           │ Contraseña   │ Nombre          │");
  console.log("├─────────────────────────────────┼──────────────┼─────────────────┤");
  for (const u of TEST_USERS) {
    console.log(`│ ${u.email.padEnd(31)} │ ${u.password.padEnd(12)} │ ${u.name.padEnd(15)} │`);
  }
  console.log("└─────────────────────────────────┴──────────────┴─────────────────┘");
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); await pool.end(); });
