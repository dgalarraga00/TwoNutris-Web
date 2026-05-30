const DATIL_API_URL = "https://app.datil.co/api/v2/invoices/issues";

const EMISOR = {
  ruc: "1751880533001",
  nombre: "PONCE ZULETA CAMILA",
  nombre_comercial: "TwoNutris",
  direccion: "AMERICA N36-229 Y AV.NACIONES UNIDAS, QUITO, PICHINCHA",
  obligado_contabilidad: false,
  contribuyente_especial: "",
  tipo_proveedor: "01",
} as const;

const IVA_CODE = 2;
const IVA_PCT_CODE = "4"; // 15% desde 2024
const IVA_RATE = 0.15;

function r2(n: number) {
  return Math.round(n * 100) / 100;
}

function sinIva(conIva: number) {
  return r2(conIva / (1 + IVA_RATE));
}

function buildLineItem(descripcion: string, precioConIvaUnit: number, cantidad: number) {
  const unitSin = sinIva(precioConIvaUnit);
  const totalSin = r2(unitSin * cantidad);
  const ivaVal = r2(totalSin * IVA_RATE);
  return {
    cantidad,
    codigo_principal: descripcion.slice(0, 25).replace(/\s+/g, "_").toLowerCase(),
    descripcion,
    precio_unitario: unitSin,
    descuento: 0,
    precio_unitario_subtotal: unitSin,
    detalles_adicionales: {},
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
  total: number;
  deliveryAddress: string;
  customerEmail: string;
  customerName?: string | null;
  customerPhone?: string | null;
  items: { dishName: string; quantity: number; unitPrice: number }[];
}

export async function emitDatilInvoice(order: InvoiceOrder): Promise<void> {
  const apiKey = process.env.DATIL_API_KEY;
  if (!apiKey) {
    console.warn("[datil] DATIL_API_KEY no configurado — factura omitida");
    return;
  }

  const now = new Date();
  const fechaEmision = [
    String(now.getDate()).padStart(2, "0"),
    String(now.getMonth() + 1).padStart(2, "0"),
    now.getFullYear(),
  ].join("/");

  const itemsSubtotal = r2(
    order.items.reduce((s, i) => s + i.unitPrice * i.quantity, 0)
  );
  const otrosCargos = r2(order.total - itemsSubtotal);

  const lineItems = [
    ...order.items.map((i) => buildLineItem(i.dishName, i.unitPrice, i.quantity)),
    ...(otrosCargos > 0 ? [buildLineItem("Envío y cargos", otrosCargos, 1)] : []),
  ];

  const totalSinImpuestos = r2(lineItems.reduce((s, i) => s + i.impuestos[0].base_imponible, 0));
  const totalIva = r2(lineItems.reduce((s, i) => s + i.impuestos[0].valor, 0));
  const importeTotal = r2(totalSinImpuestos + totalIva);

  const payload = {
    ambiente: process.env.NODE_ENV === "production" ? 2 : 1,
    tipo_emision: 1,
    fecha_emision: fechaEmision,
    moneda: "USD",
    emisor: EMISOR,
    receptor: {
      razon_social: order.customerName?.toUpperCase() ?? "CONSUMIDOR FINAL",
      tipo_identificacion: "07",
      identificacion: "9999999999999",
      email: order.customerEmail,
      telefono: order.customerPhone ?? "",
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
    pagos: [{ medio: "20", total: importeTotal, plazo: 0, unidad_tiempo: "dias" }],
    informacion_adicional: { "Pedido #": order.id },
  };

  const res = await fetch(DATIL_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Api-Key": apiKey,
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Datil ${res.status}: ${body}`);
  }

  await res.json();
}
