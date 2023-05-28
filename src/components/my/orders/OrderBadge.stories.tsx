import type { Meta, StoryObj } from "@storybook/react";

import { OrderStatus, OrderType } from "@/models/order";

import { OrderBadge } from "./OrderBadge";

const meta: Meta<typeof OrderBadge> = {
  component: OrderBadge,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof OrderBadge>;

export const Default: Story = {
  args: {
    order: {
      id: "0001-01",
      name: "Sample #1",
      createdAt: new Date(),
      status: OrderStatus.Draft,
      type: OrderType.Sample,
    },
  },
};

export const LongName: Story = {
  args: {
    order: {
      id: "0001-01",
      name: "Sample Order #1 with a very long name",
      createdAt: new Date(),
      status: OrderStatus.PendingProduction,
      type: OrderType.Sample,
    },
  },
};
