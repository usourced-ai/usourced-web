import type { Meta, StoryObj } from "@storybook/react";

import { Masthead } from "./Masthead";

const meta: Meta<typeof Masthead> = {
  component: Masthead,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Masthead>;

export const Default: Story = {
  args: {
    className: "h-14",
  },
};

export const Large: Story = {
  args: {
    className: "h-20",
  },
};
