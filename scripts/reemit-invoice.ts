import * as dotenv from "dotenv";
import * as path from "path";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../lib/generated/prisma";
import { emitDatilInvoice } from "../lib/datil";

dotenv.config({ path: path.join(process.cwd(), ".env.local") });
dotenv.config({ path: path.join(process.cwd(), ".env") });

const pool = new Pool({ connectionString: process.env.DIRECT_URL ?? process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter } as never);

async function main() {
  const [orderId, customerEmail] = process.argv.slice(2);
  if (!orderId || !customerEmail) {
    console.error("Uso: npx ts-node scripts/reemit-invoice.ts <order-id> <email>");
    process.exit(1);
  }

  const order = await prisma.order.findUniqueOrThrow({
    where: { id: orderId },
    include: { items: true, profile: true },
  });

  console.log(`\nPedido: ${order.id}`);
  console.log(`  Cliente:        ${order.profile?.fullName ?? customerEmail}`);
  console.log(`  invoice_number: ${order.invoiceNumber}`);
  console.log(`  Total:          $${order.total}`);
  console.log(`  Tax ID:         ${order.taxId} (tipo ${order.taxIdType})\n`);

  await emitDatilInvoice({
    id: order.id,
    invoiceNumber: order.invoiceNumber,
    total: order.total,
    deliveryAddress: order.deliveryAddress,
    customerEmail,
    customerName: order.profile?.fullName ?? null,
    customerPhone: order.profile?.whatsapp ?? null,
    taxIdType: order.taxIdType,
    taxId: order.taxId,
    items: order.items.map((i) => ({
      dishName: i.dishName,
      quantity: i.quantity,
      unitPrice: i.unitPrice,
    })),
  });

  console.log("✅ Factura re-emitida correctamente.");
}

main()
  .catch((e) => {
    console.error("✗ Error:", e instanceof Error ? e.message : e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
