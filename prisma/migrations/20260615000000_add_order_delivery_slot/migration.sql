-- Franja horaria de entrega elegida por el cliente en el checkout.
-- "MORNING" (09:00–15:30) | "AFTERNOON" (15:00–20:00). Nullable: las
-- órdenes previas no la tienen y no se reprocesan.
ALTER TABLE "orders" ADD COLUMN "delivery_slot" TEXT;
