import type { Meta, StoryObj } from "@storybook/react";

import { ProductReviews } from "./ProductReviews";

const meta: Meta<typeof ProductReviews> = {
  component: ProductReviews,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ProductReviews>;

export const Default: Story = {
  args: {
    rating: 4,
  },
};

export const Full: Story = {
  args: {
    rating: 5,
  },
};

export const Low: Story = {
  args: {
    rating: 1.5,
  },
};
