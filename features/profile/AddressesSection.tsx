"use client";

import { useState } from "react";
import { AsyncBoundary } from "@/components/AsyncBoundary";
import { useAddresses, type AddressDto } from "@/lib/api/checkout";
import { EditAddressDrawer } from "./EditAddressDrawer";

/**
 * F11 task 6.4: addresses list, reusing F9's own `GET /api/me/addresses`
 * (`lib/api/checkout.ts::useAddresses()`) — not rebuilt.
 *
 * Live-feedback fix (feedback-round-1): was read-only. One `EditAddressDrawer`
 * instance is mounted once here and reused for whichever row's "Editar"
 * button was last pressed (`editingAddress` holds that row's own DTO) —
 * mirrors `ProfileScreen`'s existing single-drawer-instance pattern for
 * order cancellation.
 */
export function AddressesSection() {
  const { isPending, isError, error, data, refetch } = useAddresses();
  const [editingAddress, setEditingAddress] = useState<AddressDto | null>(null);

  return (
    <>
      <AsyncBoundary
        isPending={isPending}
        isError={isError}
        error={error}
        data={data}
        refetch={refetch}
        isEmpty={(addresses) => addresses.length === 0}
        emptyFallback={
          <p role="status" className="font-poppins text-sm text-leaf/50">
            Todavía no tienes direcciones guardadas.
          </p>
        }
      >
        {(addresses) => (
          <ul className="flex flex-col gap-3">
            {addresses.map((address) => (
              <li
                key={address.id}
                className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-leaf/10 bg-leaf-light/10 px-4 py-3 font-poppins text-sm text-leaf"
              >
                <div className="flex flex-col gap-0.5">
                  <p className="font-semibold">{address.label}</p>
                  <p className="text-xs text-leaf/60">{address.street}</p>
                </div>
                <div className="flex items-center gap-2">
                  {address.is_default && (
                    <span className="rounded-full bg-amber/20 px-3 py-1 text-xs font-bold font-ibrand text-leaf">
                      Predeterminada
                    </span>
                  )}
                  <button
                    type="button"
                    onClick={() => setEditingAddress(address)}
                    className="rounded-full border-2 border-leaf/20 px-3 py-1 text-xs font-bold font-ibrand text-leaf transition-colors duration-200 hover:bg-leaf-light/30"
                  >
                    Editar
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </AsyncBoundary>

      {editingAddress && (
        <EditAddressDrawer
          address={editingAddress}
          open={editingAddress !== null}
          onOpenChange={(open) => {
            if (!open) setEditingAddress(null);
          }}
        />
      )}
    </>
  );
}
