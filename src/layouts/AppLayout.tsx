import type { ReactNode } from "react";
import React from "react";

import { AppBar } from "./components/AppBar";
import { DemoBanner } from "./components/DemoBanner";

export function AppLayout({
  meta,
  children,
}: {
  meta: ReactNode;
  children: ReactNode;
}) {
  return (
    <>
      {meta}
      <AppBar />
      <DemoBanner />
      <main className="min-h-full">{children}</main>
    </>
  );
}
