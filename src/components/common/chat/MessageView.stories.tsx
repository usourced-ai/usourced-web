import type { Meta, StoryObj } from "@storybook/react";

import { SYSTEM_AGENT } from "@/models/chat";

import { MessageView } from "./MessageView";

const meta: Meta<typeof MessageView> = {
  component: MessageView,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof MessageView>;

function makeMessage(text: string, createdAt: Date) {
  return {
    id: "1",
    text,
    from: SYSTEM_AGENT,
    createdAt,
  };
}

export const Default: Story = {
  args: {
    message: makeMessage("Hello, world!", new Date()),
  },
};

export const LongMessage: Story = {
  args: {
    message: makeMessage("Hello, world! ".repeat(10), new Date()),
  },
};

export const NoTypewriterEffect: Story = {
  args: {
    message: makeMessage("Hello, world! ".repeat(10), new Date()),
    typewriter: false,
  },
};
