import type { NextRouter } from "next/router";
import { useRouter } from "next/router";
import {
  FaClipboard,
  FaCog,
  FaFileAlt,
  FaHome,
  FaListUl,
  FaShippingFast,
} from "react-icons/fa";

import { Masthead } from "@/components/layout/Masthead";

import type { NavigationItem } from "./SidebarNavigationItem";
import { SidebarNavigationItem } from "./SidebarNavigationItem";

const navigation: NavigationItem[] = [
  { name: "Dashboard", href: "#", icon: FaHome },
  {
    name: "Projects",
    href: "/my/projects",
    icon: FaClipboard,
  },
  { name: "Tasks", href: "#", icon: FaListUl, badge: "3" },
  {
    name: "Orders",
    href: "#",
    icon: FaFileAlt,
    children: [
      { name: "Sample Orders", href: "#", current: false },
      { name: "Production Orders", href: "#", current: false },
    ],
  },
  { name: "Shipments", href: "#", icon: FaShippingFast },
];
const settingsItem = { name: "Settings", href: "#", icon: FaCog };

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
    <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 px-6">
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
          <li className="-mx-2 mb-4 mt-auto">
            <SidebarNavigationItem
              item={markCurrentNavigationItem(router, settingsItem)}
            />
          </li>
        </ul>
      </nav>
    </div>
  );
}
