-- Email del cliente capturado al crear la orden (auth.users no es accesible
-- al re-emitir facturas desde el panel admin). Nullable: las órdenes previas
-- no lo tienen y se resuelven con fallback en la app.
ALTER TABLE "orders" ADD COLUMN "customer_email" TEXT;
