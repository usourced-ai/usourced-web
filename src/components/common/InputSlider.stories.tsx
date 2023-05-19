import type { Meta, StoryObj } from "@storybook/react";

import { InputSlider } from "./InputSlider";

const meta: Meta<typeof InputSlider> = {
  component: InputSlider,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof InputSlider>;

export const Default: Story = {
  args: {
    minValue: 100,
    maxValue: 1000,
    step: 100,
  },
};

export const Percentage: Story = {
  args: {
    minValue: 0,
    maxValue: 100,
    step: 10,
    initialValue: 10,
    unit: "%",
  },
};
