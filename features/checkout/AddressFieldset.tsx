import type { FieldErrors, Path, UseFormRegister } from "react-hook-form";
import { TextField } from "@/components/ui/TextField";
import { Alert } from "@/components/ui/Alert";
import { useZones } from "@/lib/api/checkout";
import type { AddressFieldsetValues } from "./schemas";

export interface AddressFieldsetProps<T extends AddressFieldsetValues> {
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
}

/**
 * Delivery-address fields (design §A: `CheckoutForm` → `AddressFieldset`).
 * Zone options come from `GET /api/zones` (AllowAny, active zones only —
 * Phase 3B gap-fill, just added this session). `CheckoutForm` always
 * creates a brand-new address on submit; the profile screen's
 * `EditAddressDrawer` (feedback-round-1) reuses this SAME component to edit
 * an existing one — the fieldset itself has no opinion on create vs. edit,
 * only its caller's submit handler does.
 *
 * Generic over `T extends AddressFieldsetValues` (feedback-round-1) so both
 * callers can pass their own, differently-shaped form-values type
 * (`CheckoutFormValues` also carries payment/receipt fields;
 * `EditAddressDrawer`'s form has none of those) without this component ever
 * needing to know about them — checked first per the live-feedback brief
 * before reaching for a brand-new form.
 *
 * NO allergies field anywhere (obs #353): TwoNutris shows dish-level
 * allergen/nutrition data, it never collects a customer's own allergy
 * declaration.
 *
 * 4 mandatory UI states for the zone list: loading = zones query pending,
 * error = zones query failed (role="alert", no way to submit a valid
 * address without a zone), empty = zero active zones (role="status"),
 * success = populated `<select>`.
 */
export function AddressFieldset<T extends AddressFieldsetValues>({ register, errors }: AddressFieldsetProps<T>) {
  const zonesQuery = useZones();

  return (
    <fieldset className="flex flex-col gap-3 rounded-2xl border border-leaf/10 bg-white p-4">
      <legend className="px-1 font-poppins text-sm font-medium text-leaf">Dirección de entrega</legend>

      <div className="flex flex-col gap-1">
        <label htmlFor="zone" className="font-poppins text-sm font-medium text-leaf">
          Zona
        </label>
        {zonesQuery.isPending && <p role="status" className="font-poppins text-sm text-leaf/50">Cargando zonas…</p>}
        {zonesQuery.isError && (
          <Alert variant="error">No pudimos cargar las zonas disponibles. Intenta de nuevo.</Alert>
        )}
        {zonesQuery.isSuccess && zonesQuery.data.length === 0 && (
          <p role="status" className="font-poppins text-sm text-leaf/50">
            No hay zonas de entrega disponibles por ahora.
          </p>
        )}
        {zonesQuery.isSuccess && zonesQuery.data.length > 0 && (
          <select
            id="zone"
            defaultValue=""
            {...register("zone" as Path<T>)}
            className="rounded-xl border border-leaf/20 bg-white px-3.5 py-2.5 font-poppins text-sm text-leaf focus:border-leaf focus:outline-none focus:ring-2 focus:ring-amber/40"
          >
            <option value="" disabled>
              Selecciona una zona
            </option>
            {zonesQuery.data.map((zone) => (
              <option key={zone.id} value={zone.id}>
                {zone.name}
              </option>
            ))}
          </select>
        )}
        {errors.zone && (
          <p role="alert" className="text-xs font-poppins text-red-600">
            {errors.zone.message as string}
          </p>
        )}
      </div>

      <TextField
        label="Nombre de la dirección"
        id="label"
        placeholder="Casa, oficina..."
        error={errors.label?.message as string | undefined}
        {...register("label" as Path<T>)}
      />

      <TextField
        label="Dirección"
        id="street"
        error={errors.street?.message as string | undefined}
        {...register("street" as Path<T>)}
      />

      <TextField
        label="Referencia"
        id="reference"
        error={errors.reference?.message as string | undefined}
        {...register("reference" as Path<T>)}
      />

      <label className="flex items-center gap-2 font-poppins text-sm text-leaf/80">
        <input type="checkbox" className="accent-leaf" {...register("is_default" as Path<T>)} />
        Usar como dirección principal
      </label>
    </fieldset>
  );
}
