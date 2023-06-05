import type { Meta, StoryObj } from "@storybook/react";

import { ProjectRequestCard } from "./ProjectRequestCard";

const meta: Meta<typeof ProjectRequestCard> = {
  component: ProjectRequestCard,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ProjectRequestCard>;

export const Default: Story = {
  args: {
    projectRequest: {
      id: "0",
      name: "Beige Baseball Cap",
      createdAt: new Date("2023-01-03"),
      updatedAt: new Date("2023-01-03"),
      attributes: [
        {
          name: "Color",
          value: "Beige",
        },
        {
          name: "Material",
          value: "Polyester",
        },
        {
          name: "Logo",
          value: "Embroidered",
        },
        {
          name: "Packaging",
          value: "Individual Polybag",
        },
        {
          name: "Size",
          value: "10 in.",
        },
        {
          name: "Quantity",
          value: "100/200/500",
        },
        {
          name: "Target Unit Price",
          value: "$10.00",
        },
        {
          name: "Target Timeline",
          value: "Delivery in 1 month",
        },
      ],
    },
  },
};
