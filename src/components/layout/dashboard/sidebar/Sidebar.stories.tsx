import type { Meta, StoryObj } from "@storybook/react";

import { Sidebar } from "./Sidebar";

const meta: Meta<typeof Sidebar> = {
  component: Sidebar,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
  render: () => (
    <div className="w-72">
      <Sidebar />
    </div>
  ),
};
