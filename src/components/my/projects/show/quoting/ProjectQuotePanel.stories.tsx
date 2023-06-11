import type { Meta, StoryObj } from "@storybook/react";

import { projectQuote1, projectQuote2 } from "@/fixtures/project-quote";

import { ProjectQuotePanel } from "./ProjectQuotePanel";

const meta: Meta<typeof ProjectQuotePanel> = {
  component: ProjectQuotePanel,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ProjectQuotePanel>;

export const Default: Story = {
  args: {
    quotes: [projectQuote1, projectQuote2],
  },
};

export const SingleItem: Story = {
  args: {
    quotes: [projectQuote1],
  },
};

export const Empty: Story = {
  args: {
    quotes: [],
  },
};
