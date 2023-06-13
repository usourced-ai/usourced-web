import type { Meta, StoryObj } from "@storybook/react";

import { ContentVisibilityBanner } from "./ContentVisibilityBanner";

const meta: Meta<typeof ContentVisibilityBanner> = {
  component: ContentVisibilityBanner,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ContentVisibilityBanner>;

export const Default: Story = {};

// TODO(@lsf): How to test different Recoil states?
