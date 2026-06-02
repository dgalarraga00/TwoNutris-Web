import { Resend } from "resend";

let _resend: Resend | null = null;
function getResend() {
  if (!_resend) _resend = new Resend(process.env.RESEND_API_KEY);
  return _resend;
}

export interface OrderConfirmationData {
  orderId: string;
  customerName?: string | null;
  customerEmail: string;
  items: { dishName: string; quantity: number; unitPrice: number }[];
  total: number;
  deliveryAddress: string;
}

function formatCurrency(amount: number) {
  return `$${amount.toFixed(2)}`;
}

function buildHtml(order: OrderConfirmationData): string {
  const itemRows = order.items
    .map(
      (item) => `
      <tr>
        <td style="padding:8px 12px;border-bottom:1px solid #f0f0f0;">${item.dishName}</td>
        <td style="padding:8px 12px;border-bottom:1px solid #f0f0f0;text-align:center;">${item.quantity}</td>
        <td style="padding:8px 12px;border-bottom:1px solid #f0f0f0;text-align:right;">${formatCurrency(item.unitPrice * item.quantity)}</td>
      </tr>`
    )
    .join("");

  const displayName = order.customerName ?? order.customerEmail;

  return `<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f5f5f5;font-family:Arial,sans-serif;color:#333;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f5;padding:32px 0;">
    <tr><td align="center">
      <table width="580" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:8px;overflow:hidden;max-width:580px;width:100%;">

        <tr>
          <td style="background:#2d6a4f;padding:28px 32px;text-align:center;">
            <h1 style="margin:0;color:#fff;font-size:24px;font-weight:700;">TwoNutris</h1>
            <p style="margin:8px 0 0;color:#b7e4c7;font-size:14px;">Comida saludable a tu puerta</p>
          </td>
        </tr>

        <tr>
          <td style="padding:32px;">
            <h2 style="margin:0 0 8px;font-size:20px;color:#2d6a4f;">¡Tu pedido fue confirmado!</h2>
            <p style="margin:0 0 24px;color:#666;font-size:14px;">Hola ${displayName}, recibimos tu pago y ya estamos preparando tu pedido.</p>

            <table width="100%" cellpadding="0" cellspacing="0" style="background:#f9f9f9;border-radius:6px;margin-bottom:24px;">
              <tr>
                <td style="padding:12px 16px;font-size:13px;color:#666;">N° de orden</td>
                <td style="padding:12px 16px;font-size:13px;font-weight:700;text-align:right;font-family:monospace;">${order.orderId}</td>
              </tr>
              <tr>
                <td style="padding:12px 16px;font-size:13px;color:#666;border-top:1px solid #eee;">Dirección de entrega</td>
                <td style="padding:12px 16px;font-size:13px;text-align:right;border-top:1px solid #eee;">${order.deliveryAddress}</td>
              </tr>
            </table>

            <h3 style="margin:0 0 12px;font-size:15px;color:#333;">Detalle del pedido</h3>
            <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #f0f0f0;border-radius:6px;border-collapse:collapse;margin-bottom:16px;">
              <thead>
                <tr style="background:#f9f9f9;">
                  <th style="padding:10px 12px;text-align:left;font-size:12px;color:#666;font-weight:600;border-bottom:1px solid #f0f0f0;">Plato</th>
                  <th style="padding:10px 12px;text-align:center;font-size:12px;color:#666;font-weight:600;border-bottom:1px solid #f0f0f0;">Cant.</th>
                  <th style="padding:10px 12px;text-align:right;font-size:12px;color:#666;font-weight:600;border-bottom:1px solid #f0f0f0;">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                ${itemRows}
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="2" style="padding:12px;text-align:right;font-weight:700;font-size:14px;">Total pagado</td>
                  <td style="padding:12px;text-align:right;font-weight:700;font-size:16px;color:#2d6a4f;">${formatCurrency(order.total)}</td>
                </tr>
              </tfoot>
            </table>

            <p style="margin:24px 0 0;font-size:13px;color:#888;text-align:center;">
              ¿Tenés alguna duda? Escribinos por WhatsApp o respondé este email.<br/>
              ¡Gracias por elegir TwoNutris!
            </p>
          </td>
        </tr>

        <tr>
          <td style="background:#f9f9f9;padding:16px 32px;text-align:center;border-top:1px solid #f0f0f0;">
            <p style="margin:0;font-size:12px;color:#aaa;">© 2025 TwoNutris · Quito, Ecuador</p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

export async function sendOrderConfirmationEmail(order: OrderConfirmationData): Promise<void> {
  if (!process.env.RESEND_API_KEY) {
    console.warn("[email] RESEND_API_KEY no configurado — email omitido");
    return;
  }

  const displayName = order.customerName ?? "cliente";

  await getResend().emails.send({
    from: "TwoNutris <noreply@twonutris.com>",
    to: order.customerEmail,
    subject: `Pedido confirmado #${order.orderId.slice(-8).toUpperCase()} — TwoNutris`,
    html: buildHtml(order),
    text: `Hola ${displayName}, tu pedido #${order.orderId} fue confirmado. Total: ${formatCurrency(order.total)}. Dirección: ${order.deliveryAddress}.`,
  });
}
