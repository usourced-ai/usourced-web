import type { Meta, StoryObj } from "@storybook/react";

import { MobileNavBar } from "./MobileNavBar";

const meta: Meta<typeof MobileNavBar> = {
  component: MobileNavBar,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof MobileNavBar>;

export const Default: Story = {};
