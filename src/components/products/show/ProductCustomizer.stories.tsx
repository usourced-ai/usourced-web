import type { Meta, StoryObj } from "@storybook/react";

import { ProductCustomizer } from "./ProductCustomizer";

const meta: Meta<typeof ProductCustomizer> = {
  component: ProductCustomizer,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ProductCustomizer>;

export const Default: Story = {
  args: {
    imageUrl: "/images/demo/mugs/blue.JPG",
  },
};
