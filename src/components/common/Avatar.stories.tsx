import type { Meta, StoryObj } from "@storybook/react";

import { Avatar } from "./Avatar";

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    user: {
      id: "1",
      name: "John Doe",
      avatarUrl: "https://i.pravatar.cc/160",
    },
  },
};

export const NoAvatar: Story = {
  args: {
    user: {
      id: "1",
      name: "John Doe",
      avatarUrl: "",
    },
  },
};
