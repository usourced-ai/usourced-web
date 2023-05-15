import type { Meta, StoryObj } from "@storybook/react";

import { AI_AGENT, CURRENT_USER } from "@/models/chat";

import { ChatMessageListView } from "./ChatMessageListView";

const meta: Meta<typeof ChatMessageListView> = {
  component: ChatMessageListView,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ChatMessageListView>;

export const Default: Story = {
  args: {
    chatState: {
      messages: [
        {
          id: "1",
          text: "Welcome to USourced! What would you like to create today?",
          from: AI_AGENT,
          createdAt: new Date(),
        },
        {
          id: "2",
          text: "Hello, USourced! ".repeat(10),
          from: CURRENT_USER,
          createdAt: new Date(),
        },
        {
          id: "3",
          text: "Welcome to USourced! What would you like to create today? ".repeat(
            5
          ),
          from: AI_AGENT,
          createdAt: new Date(),
        },
      ],
    },
  },
};
