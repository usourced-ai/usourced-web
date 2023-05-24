import type { ReactNode } from "react";

import { SecondaryNavBar } from "@/components/layout/dashboard/SecondaryNavBar";
import { useResponsiveSidebar } from "@/components/layout/dashboard/useResponsiveSidebar";

export function AppLayout({
  meta,
  children,
}: {
  meta: ReactNode;
  children: ReactNode;
}) {
  const { sidebar, setSidebarOpen } = useResponsiveSidebar();
  return (
    <>
      {meta}
      {sidebar}
      <SecondaryNavBar setSidebarOpen={setSidebarOpen} />
      <main className="h-full lg:ml-72">{children}</main>
    </>
  );
}
