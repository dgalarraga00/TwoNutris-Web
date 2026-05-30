CREATE TYPE "DishTemplateCategory" AS ENUM ('CLASICO', 'LOW_CARB', 'VEGETARIANO', 'PREMIUM');
CREATE TYPE "WeeklyMenuStatus" AS ENUM ('DRAFT', 'PUBLISHED');

CREATE TABLE "dish_templates" (
  "id" UUID NOT NULL DEFAULT gen_random_uuid(),
  "name" TEXT NOT NULL,
  "description" TEXT NOT NULL,
  "image" TEXT,
  "category" "DishTemplateCategory" NOT NULL,
  "price" DOUBLE PRECISION NOT NULL DEFAULT 6.75,
  "calories" INTEGER,
  "protein" DOUBLE PRECISION,
  "carbs" DOUBLE PRECISION,
  "fat" DOUBLE PRECISION,
  "allergen_disclaimer" TEXT,
  "is_active" BOOLEAN NOT NULL DEFAULT true,
  "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "dish_templates_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "weekly_menus" (
  "id" UUID NOT NULL DEFAULT gen_random_uuid(),
  "week_start" TIMESTAMP(3) NOT NULL,
  "week_end" TIMESTAMP(3) NOT NULL,
  "status" "WeeklyMenuStatus" NOT NULL DEFAULT 'DRAFT',
  "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "weekly_menus_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "weekly_menu_items" (
  "id" UUID NOT NULL DEFAULT gen_random_uuid(),
  "menu_id" UUID NOT NULL,
  "dish_id" UUID NOT NULL,
  "position" INTEGER NOT NULL DEFAULT 0,
  CONSTRAINT "weekly_menu_items_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "weekly_menu_items_menu_id_dish_id_key" UNIQUE ("menu_id", "dish_id")
);

ALTER TABLE "weekly_menu_items" ADD CONSTRAINT "weekly_menu_items_menu_id_fkey" FOREIGN KEY ("menu_id") REFERENCES "weekly_menus"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "weekly_menu_items" ADD CONSTRAINT "weekly_menu_items_dish_id_fkey" FOREIGN KEY ("dish_id") REFERENCES "dish_templates"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
