import * as dotenv from "dotenv";
import * as path from "path";
import { emitDatilInvoice } from "../lib/datil";

dotenv.config({ path: path.join(process.cwd(), ".env.local") });
dotenv.config({ path: path.join(process.cwd(), ".env") });

async function main() {
  console.log("🧾 Emitiendo factura de prueba con Datil...\n");
  console.log("  API Key:", process.env.DATIL_API_KEY ? "✓ configurada" : "✗ FALTA");
  console.log("  NODE_ENV:", process.env.NODE_ENV ?? "development", "\n");

  await emitDatilInvoice({
    id: "test-" + Date.now(),
    invoiceNumber: 1000,
    total: 25.00,
    deliveryAddress: "AMERICA N36-229 Y AV.NACIONES UNIDAS, QUITO",
    customerEmail: "dgalarraga00@gmail.com",
    customerName: "David Galarraga",
    customerPhone: "0999999999",
    taxIdType: "05",           // Cédula de ciudadanía
    taxId: "1721047791",       // Cédula válida Módulo 10 (Pichincha)
    items: [
      { dishName: "Pollo al horno con vegetales", quantity: 2, unitPrice: 10.00 },
      { dishName: "Ensalada Cesar", quantity: 1, unitPrice: 5.00 },
    ],
  });

  console.log("✅ Factura emitida correctamente — revisá el dashboard de Datil.");
}

main().catch((e) => {
  console.error("✗ Error al emitir factura:", e instanceof Error ? e.message : e);
  process.exit(1);
});
