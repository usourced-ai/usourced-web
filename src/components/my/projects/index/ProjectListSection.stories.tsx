import type { Meta, StoryObj } from "@storybook/react";

import { projectsInQuoting, projectsInSampling } from "@/api/projects";

import { ProjectListSection } from "./ProjectListSection";

const meta: Meta<typeof ProjectListSection> = {
  component: ProjectListSection,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ProjectListSection>;

export const Default: Story = {
  args: {
    title: "Quoting",
    projects: projectsInQuoting,
  },
};

export const More: Story = {
  args: {
    title: "Sample",
    projects: projectsInSampling,
  },
};

export const Empty: Story = {
  args: {
    title: "In Production",
    projects: [],
  },
};
