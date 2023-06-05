import { ArrowUpCircleIcon } from "@heroicons/react/24/outline";
import type { Meta, StoryObj } from "@storybook/react";

import { AppButton } from "./AppButton";

const meta: Meta<typeof AppButton> = {
  component: AppButton,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AppButton>;

export const Default: Story = {
  args: { label: "Button" },
};

export const WithIcon: Story = {
  args: {
    icon: ArrowUpCircleIcon,
    label: "Upload a File",
  },
};
