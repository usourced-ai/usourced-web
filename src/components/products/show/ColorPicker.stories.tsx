import type { Meta, StoryObj } from "@storybook/react";

import { ColorPicker } from "./ColorPicker";

const meta: Meta<typeof ColorPicker> = {
  component: ColorPicker,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ColorPicker>;

export const Default: Story = {
  args: {
    colors: ["#CCC", "#333"],
  },
};
