"use client";

import React, { ReactNode } from "react";
import { QueryClientProvider, QueryClient } from "react-query";

export default function ReactQueryProvider({
  children,
}: {
  children: ReactNode;
}) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
