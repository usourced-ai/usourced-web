import type { ReactNode } from "react";

import { MobileNavBar } from "@/components/layout/dashboard/sidebar/MobileNavBar";
import { useResponsiveSidebar } from "@/components/layout/dashboard/sidebar/useResponsiveSidebar";

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
      <MobileNavBar setSidebarOpen={setSidebarOpen} />
      <main className="h-full lg:ml-24 2xl:ml-64">{children}</main>
    </>
  );
}
