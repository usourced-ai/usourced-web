import type { Meta, StoryObj } from "@storybook/react";

import { ProjectTimeline } from "./ProjectTimeline";

const meta: Meta<typeof ProjectTimeline> = {
  component: ProjectTimeline,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ProjectTimeline>;

export const Default: Story = {
  args: {},
};
