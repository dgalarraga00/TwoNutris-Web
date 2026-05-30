-- Add ARCHIVED to WeeklyMenuStatus enum
ALTER TYPE "WeeklyMenuStatus" ADD VALUE IF NOT EXISTS 'ARCHIVED';

-- Add delivery_date to orders
ALTER TABLE "orders" ADD COLUMN IF NOT EXISTS "delivery_date" TIMESTAMP(3);
