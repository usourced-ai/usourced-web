import type { Meta, StoryObj } from "@storybook/react";

import { Tooltip } from "./Tooltip";

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    tooltip: "This is a tooltip",
  },
  render: (args) => {
    return (
      <Tooltip {...args}>
        <button type="button">Hover over me</button>
      </Tooltip>
    );
  },
};
