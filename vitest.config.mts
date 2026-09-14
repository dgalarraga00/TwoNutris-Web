import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "node",
    include: ["**/*.test.{ts,tsx}"],
    exclude: ["node_modules", ".next", "e2e/**"],
    // Default 5s is too tight once the suite spawns 19+ isolated workers on a
    // loaded machine — userEvent-driven multi-step interactions (e.g.
    // CalculatorWizard's full walkthrough) and MSW-backed async renders can
    // legitimately exceed it under resource contention alone, with no bug in
    // the test or the code (confirmed: identical re-runs pass cleanly).
    testTimeout: 15000,
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL(".", import.meta.url)),
    },
  },
});
