import type React from "react";
import {
  FaClipboard,
  FaFileAlt,
  FaHome,
  FaListUl,
  FaShippingFast,
} from "react-icons/fa";

export type NavigationItem = {
  name: string;
  href: string;
  badge?: string;
  icon?: React.ComponentType<{ className?: string }>;
  current?: boolean;
  children?: NavigationItem[];
};

export const navigation: NavigationItem[] = [
  { name: "Dashboard", href: "#", icon: FaHome },
  {
    name: "Projects",
    href: "/my/projects",
    icon: FaClipboard,
    children: [
      { name: "Grid View", href: "/my/projects/grid" },
      { name: "List View", href: "/my/projects/list" },
      { name: "Calendar View", href: "/my/projects/calendar" },
    ],
  },
  { name: "Tasks", href: "#", icon: FaListUl, badge: "3" },
  {
    name: "Orders",
    href: "#",
    icon: FaFileAlt,
    children: [
      { name: "Sample Orders", href: "#" },
      { name: "Production Orders", href: "#" },
    ],
  },
  { name: "Shipments", href: "#", icon: FaShippingFast },
];
