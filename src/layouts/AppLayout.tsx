import type { ReactNode } from "react";

import { AppBar } from "@/components/layout/AppBar";
import { AppFooter } from "@/components/layout/AppFooter";
import { DemoBanner } from "@/components/layout/DemoBanner";

export function AppLayout({
  meta,
  children,
  showDemoBar,
}: {
  meta: ReactNode;
  children: ReactNode;
  showDemoBar?: boolean;
}) {
  return (
    <>
      {meta}
      <AppBar />
      {showDemoBar && <DemoBanner />}
      <main className="min-h-full bg-cream pb-20">{children}</main>
      <AppFooter />
    </>
  );
}
