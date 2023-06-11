import { Sidebar } from "@/components/layout/dashboard/sidebar/Sidebar";

export function DesktopSidebar() {
  return (
    <div className="hidden 2xl:fixed 2xl:inset-y-0 2xl:z-50 2xl:flex 2xl:w-64 2xl:flex-col">
      <Sidebar />
    </div>
  );
}
