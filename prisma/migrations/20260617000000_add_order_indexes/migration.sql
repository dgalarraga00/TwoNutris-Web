-- Índices para el panel admin de pedidos (búsqueda/filtro/orden a escala).
-- created_at: se filtra por rango de fechas y es el orden por defecto (DESC).
-- profile_id: historial de pedidos por cliente. En Postgres una FK NO crea
--   índice automáticamente, solo lo crea sobre la columna referenciada (PK).
-- IF NOT EXISTS para que sea idempotente y seguro de re-aplicar.
CREATE INDEX IF NOT EXISTS "orders_created_at_idx" ON "orders"("created_at");
CREATE INDEX IF NOT EXISTS "orders_profile_id_idx" ON "orders"("profile_id");
