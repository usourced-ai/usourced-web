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
  { name: "Dashboard", href: "#", icon: FaHome, current: true },
  {
    name: "Projects",
    href: "#",
    icon: FaClipboard,
    children: [
      { name: "GraphQL API", href: "#", current: false },
      { name: "iOS App", href: "#", current: false },
      { name: "Android App", href: "#", current: false },
      { name: "New Customer Portal", href: "#", current: false },
    ],
  },
  { name: "Tasks", href: "#", icon: FaListUl, badge: "3" },
  { name: "Orders", href: "#", icon: FaFileAlt },
  { name: "Shipments", href: "#", icon: FaShippingFast },
];

export function Sidebar() {
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
                  <SidebarNavigationItem item={item} />
                </li>
              ))}
            </ul>
          </li>
          <li className="-mx-2 mb-4 mt-auto">
            <SidebarNavigationItem
              item={{ name: "Settings", href: "#", icon: FaCog }}
            />
          </li>
        </ul>
      </nav>
    </div>
  );
}
