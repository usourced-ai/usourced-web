import type { Meta, StoryObj } from "@storybook/react";

import { ProjectPhase } from "@/models/project";

import { ProjectSummaryCard } from "./ProjectSummaryCard";

const meta: Meta<typeof ProjectSummaryCard> = {
  component: ProjectSummaryCard,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ProjectSummaryCard>;

export const Default: Story = {
  args: {
    project: {
      id: "1",
      name: "Beige Baseball Cap",
      imageUrl: "/images/demo/projects/Beige Baseball Cap.png",
      phase: ProjectPhase.Quoting,
      pendingTaskCount: 3,
      createdAt: new Date(),
    },
  },
};
