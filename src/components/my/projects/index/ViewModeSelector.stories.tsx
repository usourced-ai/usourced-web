import type { Meta, StoryObj } from "@storybook/react";

import { ViewModeSelector } from "./ViewModeSelector";

const meta: Meta<typeof ViewModeSelector> = {
  component: ViewModeSelector,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ViewModeSelector>;

export const Default: Story = {};
