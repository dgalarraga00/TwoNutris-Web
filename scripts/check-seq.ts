import * as dotenv from "dotenv";
import * as path from "path";
dotenv.config({ path: path.join(process.cwd(), ".env.local") });
import { prisma } from "../lib/prisma";

async function main() {
  const result = await prisma.$queryRaw<{max: bigint | null}[]>`SELECT MAX(invoice_number) as max FROM orders`;
  console.log("Max invoice_number en DB:", result[0].max?.toString() ?? "ninguno (tabla vacía)");
  await prisma.$disconnect();
}
main().catch(console.error);
