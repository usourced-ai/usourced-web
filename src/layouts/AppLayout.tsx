import type { ReactNode } from "react";

import { AppBar } from "@/components/layout/AppBar";
import { AppFooter } from "@/components/layout/AppFooter";
import { DemoBanner } from "@/components/layout/DemoBanner";

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
      <main className="min-h-full bg-cream">{children}</main>
      <AppFooter />
    </>
  );
}
