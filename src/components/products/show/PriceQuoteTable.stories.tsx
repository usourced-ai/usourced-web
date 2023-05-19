import type { Meta, StoryObj } from "@storybook/react";

import { PriceQuoteTable } from "./PriceQuoteTable";

const meta: Meta<typeof PriceQuoteTable> = {
  component: PriceQuoteTable,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PriceQuoteTable>;

export const Default: Story = {
  args: {
    pricingTiers: [
      {
        minimumQuantity: 500,
        pricePerItem: 3,
      },
      {
        minimumQuantity: 300,
        pricePerItem: 3.5,
      },
      {
        minimumQuantity: 200,
        pricePerItem: 4,
      },
      {
        minimumQuantity: 100,
        pricePerItem: 5,
      },
    ],
  },
};
