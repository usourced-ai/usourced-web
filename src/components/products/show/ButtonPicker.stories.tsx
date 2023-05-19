import type { Meta, StoryObj } from "@storybook/react";

import { ButtonPicker } from "./ButtonPicker";

const meta: Meta<typeof ButtonPicker> = {
  component: ButtonPicker,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ButtonPicker>;

export const Default: Story = {
  args: {
    selections: [
      { name: "Silk Printing" },
      { name: "UV Printing" },
      { name: "3D Sublimation" },
    ],
  },
};
