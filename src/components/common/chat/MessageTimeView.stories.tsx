import type { Meta, StoryObj } from "@storybook/react";

import { SYSTEM_AGENT } from "@/models/chat";

import { MessageTimeView } from "./MessageTimeView";

const meta: Meta<typeof MessageTimeView> = {
  component: MessageTimeView,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof MessageTimeView>;

function makeMessage(createdAt: Date) {
  return {
    id: "1",
    text: "Hello, world!",
    from: SYSTEM_AGENT,
    createdAt,
  };
}

export const Default: Story = {
  args: {
    message: makeMessage(new Date()),
  },
};

export const Yesterday: Story = {
  args: {
    message: makeMessage(new Date(Date.now() - 24 * 60 * 60 * 1000)),
  },
};
