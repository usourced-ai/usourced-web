import type { Meta, StoryObj } from "@storybook/react";

import { BreadcrumbNav } from "./BreadcrumbNav";

const meta: Meta<typeof BreadcrumbNav> = {
  component: BreadcrumbNav,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof BreadcrumbNav>;

export const Default: Story = {};

export const Projects: Story = {
  args: {
    items: [
      {
        label: "Projects",
        href: "/my/projects",
      },
    ],
  },
};
