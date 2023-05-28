import type { Meta, StoryObj } from "@storybook/react";

import { projectsInQuoting, projectsInSampling } from "@/api/projects";

import { ProjectSummaryCard } from "./ProjectSummaryCard";

const meta: Meta<typeof ProjectSummaryCard> = {
  component: ProjectSummaryCard,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ProjectSummaryCard>;

export const Default: Story = {
  args: {
    project: projectsInQuoting[0],
  },
};

export const WithOrders: Story = {
  args: {
    project: projectsInSampling[0],
  },
};
