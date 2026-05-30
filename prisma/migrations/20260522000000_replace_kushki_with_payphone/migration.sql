-- Rename existing OrderStatus values to the new PayPhone-based lifecycle
-- Step 1: Add new enum values
ALTER TYPE "OrderStatus" ADD VALUE IF NOT EXISTS 'PAID';
ALTER TYPE "OrderStatus" ADD VALUE IF NOT EXISTS 'FAILED';
ALTER TYPE "OrderStatus" ADD VALUE IF NOT EXISTS 'CANCELLED';

-- Step 2: Migrate rows using old values to PENDING (safe fallback)
UPDATE "orders" SET "status" = 'PENDING'
  WHERE "status" IN ('PREPARING', 'SHIPPED', 'DELIVERED');

-- Step 3: Rename old enum type and recreate without the removed values
--   PostgreSQL doesn't support DROP VALUE, so we recreate the type.
ALTER TYPE "OrderStatus" RENAME TO "OrderStatus_old";

CREATE TYPE "OrderStatus" AS ENUM ('PENDING', 'PAID', 'FAILED', 'CANCELLED');

ALTER TABLE "orders"
  ALTER COLUMN "status" DROP DEFAULT;

ALTER TABLE "orders"
  ALTER COLUMN "status" TYPE "OrderStatus"
  USING "status"::text::"OrderStatus";

ALTER TABLE "orders"
  ALTER COLUMN "status" SET DEFAULT 'PENDING';

DROP TYPE "OrderStatus_old";

-- Step 4: Remove Kushki-specific columns and add PayPhone transaction ID
ALTER TABLE "orders"
  DROP COLUMN IF EXISTS "kushki_token",
  DROP COLUMN IF EXISTS "kushki_charge_id",
  ADD COLUMN IF NOT EXISTS "payphone_transaction_id" TEXT;
