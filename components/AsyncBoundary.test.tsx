// @vitest-environment jsdom
import "@testing-library/jest-dom/vitest";
import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AsyncBoundary } from "@/components/AsyncBoundary";
import { ApiError } from "@/lib/http/errors";

describe("AsyncBoundary", () => {
  it("renders the loading state when isPending is true", () => {
    render(
      <AsyncBoundary
        isPending
        isError={false}
        data={undefined}
        refetch={vi.fn()}
      >
        {() => <p>content</p>}
      </AsyncBoundary>,
    );

    expect(screen.getByRole("status")).toBeInTheDocument();
    expect(screen.queryByText("content")).not.toBeInTheDocument();
  });

  it("renders the error state with the ApiError detail and calls refetch on retry", async () => {
    const refetch = vi.fn();
    const error = new ApiError(500, "server_error", "Algo salió mal.");
    const user = userEvent.setup();

    render(
      <AsyncBoundary
        isPending={false}
        isError
        error={error}
        data={undefined}
        refetch={refetch}
      >
        {() => <p>content</p>}
      </AsyncBoundary>,
    );

    expect(screen.getByRole("alert")).toHaveTextContent("Algo salió mal.");

    await user.click(screen.getByRole("button", { name: "Reintentar" }));
    expect(refetch).toHaveBeenCalledTimes(1);
  });

  it("renders the empty fallback when isEmpty(data) is true", () => {
    render(
      <AsyncBoundary
        isPending={false}
        isError={false}
        data={[]}
        refetch={vi.fn()}
        isEmpty={(data: unknown[]) => data.length === 0}
      >
        {() => <p>content</p>}
      </AsyncBoundary>,
    );

    expect(screen.getByText("No hay nada que mostrar.")).toBeInTheDocument();
    expect(screen.queryByText("content")).not.toBeInTheDocument();
  });

  it("renders children with the loaded data on success", () => {
    render(
      <AsyncBoundary
        isPending={false}
        isError={false}
        data={{ name: "Bowl" }}
        refetch={vi.fn()}
      >
        {(data) => <p>{data.name}</p>}
      </AsyncBoundary>,
    );

    expect(screen.getByText("Bowl")).toBeInTheDocument();
  });
});
