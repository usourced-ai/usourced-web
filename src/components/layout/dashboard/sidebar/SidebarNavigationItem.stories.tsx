import type { Meta, StoryObj } from "@storybook/react";
import { FaClipboard, FaShippingFast } from "react-icons/fa";

import { SidebarNavigationItem } from "./SidebarNavigationItem";

const meta: Meta<typeof SidebarNavigationItem> = {
  component: SidebarNavigationItem,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SidebarNavigationItem>;

export const Default: Story = {
  args: {
    item: {
      name: "Dashboard",
      href: "#",
    },
  },
};

export const WithIcon: Story = {
  args: {
    item: {
      name: "Dashboard",
      href: "#",
      icon: FaShippingFast,
    },
  },
};

export const CurrentWithIcon: Story = {
  args: {
    item: {
      name: "Dashboard",
      href: "#",
      icon: FaShippingFast,
      current: true,
    },
  },
};

export const NestedWithIcon: Story = {
  args: {
    item: {
      name: "Projects",
      href: "#",
      icon: FaClipboard,
      current: false,
      children: [
        { name: "Engineering", href: "#", current: false },
        { name: "Human Resources", href: "#", current: false },
        { name: "Customer Success", href: "#", current: false },
      ],
    },
  },
};
