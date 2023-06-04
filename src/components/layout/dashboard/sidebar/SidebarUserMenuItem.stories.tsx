import type { Meta, StoryObj } from "@storybook/react";

import { SidebarUserMenuItem } from "./SidebarUserMenuItem";

const meta: Meta<typeof SidebarUserMenuItem> = {
  component: SidebarUserMenuItem,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SidebarUserMenuItem>;

export const Default: Story = {};
