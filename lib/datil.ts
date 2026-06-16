const DATIL_API_URL = "https://link.datil.co/invoices/issue";

const EMISOR = {
  ruc: "1751880533001",
  razon_social: "PONCE ZULETA CAMILA",
  nombre_comercial: "TwoNutris",
  direccion: "AMERICA N36-229 Y AV.NACIONES UNIDAS, QUITO, PICHINCHA",
  obligado_contabilidad: false,
  establecimiento: {
    codigo: "001",
    punto_emision: "002",
    direccion: "AMERICA N36-229 Y AV.NACIONES UNIDAS, QUITO, PICHINCHA",
  },
} as const;

const IVA_CODE = "2";
const IVA_PCT_CODE = "4"; // 15% desde 2024
const IVA_RATE = 0.15;

function r2(n: number) {
  return Math.round(n * 100) / 100;
}

function buildLineItem(descripcion: string, precioBaseUnit: number, cantidad: number) {
  const unitSin = r2(precioBaseUnit);
  const totalSin = r2(unitSin * cantidad);
  const ivaVal = r2(totalSin * IVA_RATE);
  const codigo = descripcion
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-zA-Z0-9]/g, "_")
    .toLowerCase()
    .slice(0, 25);
  return {
    cantidad,
    codigo_principal: codigo,
    descripcion,
    precio_unitario: unitSin,
    descuento: 0,
    precio_total_sin_impuestos: totalSin,
    impuestos: [
      {
        codigo: IVA_CODE,
        codigo_porcentaje: IVA_PCT_CODE,
        tarifa: 15,
        base_imponible: totalSin,
        valor: ivaVal,
      },
    ],
  };
}

export interface InvoiceOrder {
  id: string;
  invoiceNumber: number;
  total: number;
  deliveryAddress: string;
  customerEmail: string;
  customerName?: string | null;
  customerPhone?: string | null;
  taxIdType: string;
  taxId: string;
  items: { dishName: string; quantity: number; unitPrice: number }[];
}

export async function emitDatilInvoice(order: InvoiceOrder): Promise<void> {
  const apiKey = process.env.DATIL_API_KEY;
  if (!apiKey) {
    console.warn("[datil] DATIL_API_KEY no configurado — factura omitida");
    return;
  }

  const now = new Date();
  const fechaEmision = now.toISOString();

  const itemsBase = r2(
    order.items.reduce((s, i) => s + i.unitPrice * i.quantity, 0)
  );
  // order.total ya incluye IVA: base imponible total = total / (1 + IVA).
  // El resto sobre los platos es la base del envío (también gravada con IVA).
  const totalBase = r2(order.total / (1 + IVA_RATE));
  const enviosBase = r2(totalBase - itemsBase);

  const lineItems = [
    ...order.items.map((i) => buildLineItem(i.dishName, i.unitPrice, i.quantity)),
    ...(enviosBase > 0 ? [buildLineItem("Envío", enviosBase, 1)] : []),
  ];

  const totalSinImpuestos = r2(lineItems.reduce((s, i) => s + i.impuestos[0].base_imponible, 0));
  const totalIva = r2(lineItems.reduce((s, i) => s + i.impuestos[0].valor, 0));
  const importeTotal = r2(totalSinImpuestos + totalIva);

  const payload = {
    ambiente: process.env.NODE_ENV === "production" ? 2 : 1,
    tipo_emision: 1,
    secuencial: order.invoiceNumber,
    fecha_emision: fechaEmision,
    moneda: "USD",
    emisor: EMISOR,
    comprador: {
      razon_social: order.taxIdType === "07"
        ? "CONSUMIDOR FINAL"
        : (order.customerName?.toUpperCase() ?? order.customerEmail.toUpperCase()),
      tipo_identificacion: order.taxIdType,
      identificacion: order.taxId,
      email: order.customerEmail,
      ...(order.customerPhone ? { telefono: order.customerPhone } : {}),
      direccion: order.deliveryAddress,
    },
    totales: {
      total_sin_impuestos: totalSinImpuestos,
      descuento: 0,
      propina: 0,
      importe_total: importeTotal,
      impuestos: [
        {
          codigo: IVA_CODE,
          codigo_porcentaje: IVA_PCT_CODE,
          base_imponible: totalSinImpuestos,
          valor: totalIva,
        },
      ],
    },
    items: lineItems,
    pagos: [{ medio: "tarjeta_credito", total: importeTotal }],
    informacion_adicional: { Pedido: order.id },
  };

  const res = await fetch(DATIL_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Key": apiKey,
      "X-Password": process.env.DATIL_CERT_PASSWORD ?? "",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Datil ${res.status}: ${body}`);
  }

}
