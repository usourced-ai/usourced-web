import type { Meta, StoryObj } from "@storybook/react";

import { projectsInQuoting } from "@/api/projects";
import { ProjectPhase } from "@/models/project";

import { ProjectStatusBadge } from "./ProjectStatusBadge";

const meta: Meta<typeof ProjectStatusBadge> = {
  component: ProjectStatusBadge,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ProjectStatusBadge>;

const testProject = projectsInQuoting[0]!;

export const Default: Story = {
  args: {
    project: testProject,
  },
};

export const Sample: Story = {
  args: {
    project: {
      ...testProject,
      phase: ProjectPhase.Sample,
    },
  },
};

export const Production: Story = {
  args: {
    project: {
      ...testProject,
      phase: ProjectPhase.Production,
    },
  },
};

export const WithPendingTasks: Story = {
  args: {
    project: {
      ...testProject,
      pendingTaskCount: 3,
    },
  },
};
