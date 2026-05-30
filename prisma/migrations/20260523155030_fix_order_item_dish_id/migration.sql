-- DropForeignKey
ALTER TABLE "order_items" DROP CONSTRAINT "order_items_dish_id_fkey";

-- AlterTable
ALTER TABLE "order_items" ALTER COLUMN "dish_id" SET DATA TYPE TEXT;
