"use client";

import { useEffect } from "react";
import { AsyncBoundary } from "@/components/AsyncBoundary";
import { Alert } from "@/components/ui/Alert";
import { useAddresses, type AddressDto } from "@/lib/api/checkout";

interface AddressSelectorProps {
  selectedId: number | null;
  onSelect: (id: number) => void;
}

/**
 * Resolves which address a weekly-grid order submits to (prompt: "the grid
 * needs an address to submit an order; if the customer has none yet, or
 * exactly one (their default), handle both cases sensibly; if multiple
 * exist with no clear default, let them pick").
 */
export function AddressSelector({ selectedId, onSelect }: AddressSelectorProps) {
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
        <Alert variant="warning">
          Todavía no tienes una dirección guardada — agrega una para poder pedir.
        </Alert>
      }
    >
      {(addresses) => (
        <AddressPicker addresses={addresses} selectedId={selectedId} onSelect={onSelect} />
      )}
    </AsyncBoundary>
  );
}

function AddressPicker({
  addresses,
  selectedId,
  onSelect,
}: {
  addresses: AddressDto[];
  selectedId: number | null;
  onSelect: (id: number) => void;
}) {
  const resolvedDefault = addresses.find((address) => address.is_default) ?? addresses[0]!;
  const hasClearDefault = addresses.length === 1 || addresses.some((address) => address.is_default);

  useEffect(() => {
    if (selectedId === null) {
      onSelect(resolvedDefault.id);
    }
  }, [selectedId, resolvedDefault.id, onSelect]);

  if (hasClearDefault) {
    return (
      <p className="font-poppins text-sm text-leaf">
        Entregando en: <strong>{resolvedDefault.label}</strong> — {resolvedDefault.street}
      </p>
    );
  }

  return (
    <label className="flex flex-col gap-1 font-poppins text-sm text-leaf">
      Dirección de entrega
      <select
        value={selectedId ?? resolvedDefault.id}
        onChange={(event) => onSelect(Number(event.target.value))}
        className="rounded-xl border border-leaf/20 bg-white px-3.5 py-2.5 text-sm text-leaf focus:border-leaf focus:outline-none focus:ring-2 focus:ring-amber/40"
      >
        {addresses.map((address) => (
          <option key={address.id} value={address.id}>
            {address.label} — {address.street}
          </option>
        ))}
      </select>
    </label>
  );
}
