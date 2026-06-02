import { config } from "dotenv";
import { resolve } from "path";

config({ path: resolve(process.cwd(), ".env.local") });

import { sendOrderConfirmationEmail } from "../lib/email";

async function main() {
  console.log("Enviando email de prueba...");

  await sendOrderConfirmationEmail({
    orderId: "test-order-abc123def456",
    customerName: "David Galarraga",
    customerEmail: "david_caspian99@hotmail.com",
    items: [
      { dishName: "Bowl de Quinoa con Pollo", quantity: 2, unitPrice: 8.5 },
      { dishName: "Ensalada César Fit", quantity: 1, unitPrice: 6.0 },
      { dishName: "Smoothie Verde", quantity: 1, unitPrice: 4.5 },
    ],
    total: 27.5,
    deliveryAddress: "Av. República del Salvador N34-183, Quito",
  });

  console.log("✓ Email enviado a david_caspian99@hotmail.com");
}

main().catch((err) => {
  console.error("Error:", err);
  process.exit(1);
});
