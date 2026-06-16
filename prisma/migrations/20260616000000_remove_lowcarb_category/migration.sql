-- Elimina la categoría legacy LOW_CARB del enum DishTemplateCategory.
-- Ya no se ofrece en el formulario de platos y se verificó que NO hay
-- filas en dish_templates con ese valor, así que el cast es seguro.
-- Postgres no permite quitar un valor de un enum: se recrea el tipo.
ALTER TYPE "DishTemplateCategory" RENAME TO "DishTemplateCategory_old";
CREATE TYPE "DishTemplateCategory" AS ENUM ('CLASICO', 'VEGETARIANO', 'PREMIUM');
ALTER TABLE "dish_templates"
  ALTER COLUMN "category" TYPE "DishTemplateCategory"
  USING ("category"::text::"DishTemplateCategory");
DROP TYPE "DishTemplateCategory_old";
