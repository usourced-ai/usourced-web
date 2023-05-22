import type { ReactNode } from "react";

import { AppFooter } from "@/components/layout/storefront/AppFooter";
import { AppNavBar } from "@/components/layout/storefront/AppNavBar";
import { DemoBanner } from "@/components/layout/storefront/DemoBanner";

export function StorefrontLayout({
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
      <AppNavBar />
      {showDemoBar && <DemoBanner />}
      <main className="min-h-full bg-cream pb-20">{children}</main>
      <AppFooter />
    </>
  );
}
