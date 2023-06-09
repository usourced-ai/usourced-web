import type { Meta, StoryObj } from "@storybook/react";

import { PriceQuoteTableView } from "./PriceQuoteTableView";

const meta: Meta<typeof PriceQuoteTableView> = {
  component: PriceQuoteTableView,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PriceQuoteTableView>;

export const Default: Story = {};
