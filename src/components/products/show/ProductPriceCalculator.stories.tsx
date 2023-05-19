import type { Meta, StoryObj } from "@storybook/react";

import { ProductPriceCalculator } from "./ProductPriceCalculator";

const meta: Meta<typeof ProductPriceCalculator> = {
  component: ProductPriceCalculator,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ProductPriceCalculator>;

export const Default: Story = {};
