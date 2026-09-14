"use client";

import { AsyncBoundary } from "@/components/AsyncBoundary";
import { useAddresses } from "@/lib/api/checkout";

/**
 * F11 task 6.4: addresses list, reusing F9's own `GET /api/me/addresses`
 * (`lib/api/checkout.ts::useAddresses()`) — not rebuilt.
 */
export function AddressesSection() {
  const { isPending, isError, error, data, refetch } = useAddresses();

  return (
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
              {address.is_default && (
                <span className="rounded-full bg-amber/20 px-3 py-1 text-xs font-bold font-ibrand text-leaf">
                  Predeterminada
                </span>
              )}
            </li>
          ))}
        </ul>
      )}
    </AsyncBoundary>
  );
}
