import type { Meta, StoryObj } from "@storybook/react";
import { RecoilRoot } from "recoil";

import { ContentVisibilityBanner } from "./ContentVisibilityBanner";

const meta: Meta<typeof ContentVisibilityBanner> = {
  component: ContentVisibilityBanner,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <RecoilRoot>
        <Story />
      </RecoilRoot>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ContentVisibilityBanner>;

export const Default: Story = {};

// TODO(@lsf): How to test different Recoil states?
