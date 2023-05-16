import type { Meta, StoryObj } from "@storybook/react";

import { ProductMockupView } from "./ProductMockupView";

const meta: Meta<typeof ProductMockupView> = {
  component: ProductMockupView,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ProductMockupView>;

export const Empty: Story = {};

export const WithUrl: Story = {
  args: {
    url: "https://via.placeholder.com/400x400",
  },
};
