import { z } from "zod";

/**
 * Validación de payloads de platos para los endpoints admin.
 * El schema de creación exige los campos núcleo; el de update es parcial.
 * z.object descarta claves desconocidas por defecto, así que el resultado
 * entra limpio a Prisma sin `any`.
 */
export const dishCreateSchema = z.object({
  name: z.string().min(1, "El nombre es requerido"),
  description: z.string().min(1, "La descripción es requerida"),
  category: z.enum(["CLASICO", "LOW_CARB", "VEGETARIANO", "PREMIUM"]),
  price: z.number().positive().optional(),
  calories: z.number().int().nullable().optional(),
  protein: z.number().nullable().optional(),
  carbs: z.number().nullable().optional(),
  fat: z.number().nullable().optional(),
  ingredients: z.string().nullable().optional(),
  allergens: z.array(z.string()).optional(),
  servingSize: z.number().nullable().optional(),
  servingUnit: z.string().nullable().optional(),
  fatSaturated: z.number().nullable().optional(),
  fatTrans: z.number().nullable().optional(),
  cholesterol: z.number().nullable().optional(),
  sodium: z.number().nullable().optional(),
  fiber: z.number().nullable().optional(),
  sugarTotal: z.number().nullable().optional(),
  sugarAdded: z.number().nullable().optional(),
  image: z.string().nullable().optional(),
  isActive: z.boolean().optional(),
});

export const dishUpdateSchema = dishCreateSchema.partial();
