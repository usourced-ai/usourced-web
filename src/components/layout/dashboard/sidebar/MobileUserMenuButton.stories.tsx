import type { Meta, StoryObj } from "@storybook/react";

import { MobileUserMenuButton } from "./MobileUserMenuButton";

const meta: Meta<typeof MobileUserMenuButton> = {
  component: MobileUserMenuButton,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof MobileUserMenuButton>;

export const Default: Story = {};
