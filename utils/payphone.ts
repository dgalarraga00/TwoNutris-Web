/**
 * PayPhone "Botón de Pago por Redirección" integration utils.
 *
 * Confirm API:
 *   POST https://pay.payphonetodoesposible.com/api/button/V2/Confirm
 *   Authorization: Bearer PAYPHONE_TOKEN
 *   Body: { id: number, clientTxId: string }
 *
 * Env vars (server-side only):
 *   PAYPHONE_TOKEN    — Bearer token
 *   PAYPHONE_STORE_ID — storeId
 */

export const PAYPHONE_CONFIRM_URL =
  "https://paymentbox.payphonetodoesposible.com/api/confirm";

export interface PayphoneConfirmResponse {
  statusCode: number;
  transactionStatus: string;
  clientTransactionId: string;
  authorizationCode?: string;
  transactionId?: number;
  amount?: number;
  message?: string;
}

/**
 * Confirms a PayPhone transaction server-side.
 * Returns the parsed response — caller should check statusCode === 3 for "Approved".
 */
export async function confirmPayphoneTransaction(
  id: number,
  clientTxId: string
): Promise<PayphoneConfirmResponse> {
  const token = process.env.PAYPHONE_TOKEN;
  if (!token) {
    throw new Error("PAYPHONE_TOKEN no configurado en variables de entorno");
  }

  const res = await fetch(PAYPHONE_CONFIRM_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ id, clientTxId }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`PayPhone confirm API error ${res.status}: ${text}`);
  }

  return res.json() as Promise<PayphoneConfirmResponse>;
}
