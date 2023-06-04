import type { NextRouter } from "next/router";
import { useRouter } from "next/router";

import { SidebarNavigationItem } from "@/components/layout/dashboard/sidebar/SidebarNavigationItem";
import { SidebarUserMenuItem } from "@/components/layout/dashboard/sidebar/SidebarUserMenuItem";
import { Masthead } from "@/components/layout/Masthead";
import { AIChatMenuItem } from "@/components/my/projects/chat/AIChatMenuItem";
import { navigation, type NavigationItem } from "@/models/navigation";

function markCurrentNavigationItem(
  router: NextRouter,
  item: NavigationItem
): NavigationItem {
  if (item.href === router.pathname) {
    return { ...item, current: true };
  }
  if (item.children) {
    return {
      ...item,
      children: item.children.map((child) =>
        markCurrentNavigationItem(router, child)
      ),
    };
  }
  return item;
}

export function Sidebar() {
  const router = useRouter();
  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
      <div className="h-16 shrink-0 pt-4">
        <Masthead className="h-10" />
      </div>
      <nav className="flex flex-1 flex-col">
        <ul className="flex flex-1 flex-col gap-y-8">
          <li>
            <ul className="-mx-2 space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  <SidebarNavigationItem
                    item={markCurrentNavigationItem(router, item)}
                  />
                </li>
              ))}
            </ul>
          </li>
          <li className="grow" />
          <li>
            <ul className="mb-6 space-y-2">
              <li>
                <AIChatMenuItem />
              </li>
              <li>
                <SidebarUserMenuItem />
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}
