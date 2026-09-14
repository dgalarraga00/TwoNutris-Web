"use client";

import type { ReactNode } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import { queryClient } from "@/lib/query/queryClient";

/**
 * App-wide client providers: the shared TanStack Query client and Sonner's
 * toast host. Mounted once in `app/layout.tsx` so every route (public and
 * app-gated) shares one cache and one toast surface.
 */
export const Providers = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    {children}
    <Toaster richColors position="top-center" />
  </QueryClientProvider>
);
