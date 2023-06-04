import { useState } from "react";

import { CollapsableSidebar } from "@/components/layout/dashboard/sidebar/CollapsableSidebar";
import { DesktopSidebar } from "@/components/layout/dashboard/sidebar/DesktopSidebar";
import { DesktopThinSidebar } from "@/components/layout/dashboard/sidebar/DesktopThinSidebar";

/**
 * Provide a responsive sidebar that can be collapsed on mobile.
 * @returns {sidebarOpen, setSidebarOpen, sidebar}
 * - `sidebarOpen` is a boolean that indicates whether the sidebar is open.
 * - `setSidebarOpen` is a function that sets the sidebar open state.
 * - `sidebar` is the sidebar component.
 */
export function useResponsiveSidebar(): {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  sidebar: JSX.Element;
} {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebar = (
    <>
      <CollapsableSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <DesktopThinSidebar />
      <DesktopSidebar />
    </>
  );
  return {
    sidebarOpen,
    setSidebarOpen,
    sidebar,
  };
}
