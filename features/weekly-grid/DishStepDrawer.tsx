"use client";

import { Drawer } from "vaul";
import type { MenuDishCardDto } from "@/lib/api/menu";
import type { DraftLine, NewDraftLine } from "./types";
import { useDishStepFlow } from "./useDishStepFlow";
import { useDrawerBackGuard } from "./useDrawerBackGuard";
import { StepQuantity } from "./steps/StepQuantity";
import { StepSalads } from "./steps/StepSalads";
import { StepReview } from "./steps/StepReview";

interface DishStepDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  main: MenuDishCardDto;
  salads: MenuDishCardDto[];
  existingLines: DraftLine[];
  disabled: boolean;
  onAdd: (line: NewDraftLine) => void;
  onSetQuantity: (lineId: string, quantity: number) => void;
  onRemoveLine: (lineId: string) => void;
}

const STEP_LABELS: Record<1 | 2 | 3, string> = {
  1: "Cantidad",
  2: "Ensalada",
  3: "Revisar",
};

/**
 * Vaul root + fixed chrome (design's phone-first step-drawer table): grab
 * handle (24px), a "Paso N de 3" header with the running total ALWAYS
 * visible (56px), a body that scrolls only if it must, and a two-button
 * footer with safe-area padding (72px + `env(safe-area-inset-bottom)`) —
 * identical on all 3 steps. Mobile is the primary target (390x844);
 * desktop is the SAME tree constrained to `sm:max-w-md sm:mx-auto`, never a
 * separate layout.
 */
export function DishStepDrawer({
  open,
  onOpenChange,
  main,
  salads,
  existingLines,
  disabled,
  onAdd,
  onSetQuantity,
  onRemoveLine,
}: DishStepDrawerProps) {
  const flow = useDishStepFlow({ open, main, salads, existingLines, onAdd, onSetQuantity, onRemoveLine });
  useDrawerBackGuard(open, () => onOpenChange(false));

  const { state } = flow;
  const totalUnits = state.unitSalads.length;

  const handleBack = (): void => {
    if (state.step === 1) {
      onOpenChange(false);
      return;
    }
    flow.goBack();
  };

  const handlePrimary = (): void => {
    if (state.step === 1) {
      flow.confirmQuantity();
      return;
    }
    if (state.step === 2) {
      flow.advanceSaladStep();
      return;
    }
    flow.confirm();
    onOpenChange(false);
  };

  const primaryLabel =
    state.step === 1
      ? "Siguiente"
      : state.step === 2
        ? flow.isLastUnit
          ? "Revisar"
          : "Siguiente"
        : totalUnits === 0
          ? "Quitar todo"
          : `Confirmar (${totalUnits})`;
  const primaryDisabled = state.step === 2 && !flow.isCurrentUnitAssigned;

  return (
    <Drawer.Root open={open} onOpenChange={onOpenChange} shouldScaleBackground={false}>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 z-50 bg-black/40" />
        <Drawer.Content
          className="fixed inset-x-0 bottom-0 z-50 flex max-h-[92dvh] flex-col rounded-t-3xl bg-cream outline-none sm:mx-auto sm:max-w-md"
        >
          <div className="mx-auto mt-3 h-1.5 w-12 shrink-0 rounded-full bg-leaf/20" aria-hidden="true" />

          <div className="flex shrink-0 flex-col items-center gap-0.5 px-4 py-3">
            <Drawer.Title className="font-ibrand text-base text-leaf">
              Paso {state.step} de 3 · {STEP_LABELS[state.step]}
            </Drawer.Title>
            <Drawer.Description className="font-poppins text-xs font-bold text-leaf/60">
              {main.dish.name} · Total: {totalUnits}
            </Drawer.Description>
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto">
            {state.step === 1 && (
              <StepQuantity main={main} quantity={state.quantity} onChange={flow.setQuantity} />
            )}
            {state.step === 2 && (
              <StepSalads
                salads={salads}
                unitIndex={flow.unitIndex}
                totalUnits={totalUnits}
                selectedId={state.unitSalads[flow.unitIndex] ?? null}
                onSelect={flow.selectSaladForUnit}
              />
            )}
            {state.step === 3 && (
              <StepReview
                main={main}
                salads={salads}
                unitSalads={state.unitSalads}
                disabled={disabled}
                onIncrementGroup={flow.incrementGroup}
                onDecrementGroup={flow.decrementGroup}
                onRemoveGroup={flow.removeGroup}
              />
            )}
          </div>

          <div className="flex shrink-0 items-center gap-3 border-t border-leaf/10 px-4 py-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
            <button
              type="button"
              onClick={handleBack}
              className="h-12 flex-1 rounded-full border-2 border-leaf/20 font-bold font-ibrand text-sm text-leaf transition-colors duration-200 hover:bg-leaf-light/30"
            >
              Atrás
            </button>
            <button
              type="button"
              onClick={handlePrimary}
              disabled={primaryDisabled || disabled}
              className="h-12 flex-[2] rounded-full bg-amber font-bold font-ibrand text-sm text-leaf shadow-[0_4px_16px_rgba(255,176,0,0.35)] transition-all duration-200 hover:scale-[1.02] disabled:opacity-40 disabled:pointer-events-none"
            >
              {primaryLabel}
            </button>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
