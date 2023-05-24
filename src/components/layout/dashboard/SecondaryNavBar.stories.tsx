import type { Meta, StoryObj } from "@storybook/react";

import { SecondaryNavBar } from "./SecondaryNavBar";

const meta: Meta<typeof SecondaryNavBar> = {
  component: SecondaryNavBar,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SecondaryNavBar>;

export const Default: Story = {};
