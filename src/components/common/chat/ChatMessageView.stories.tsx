import type { Meta, StoryObj } from "@storybook/react";

import { AI_AGENT, CURRENT_USER } from "@/models/chat";

import { Button } from "../Button";
import { ChatMessageView } from "./ChatMessageView";

const meta: Meta<typeof ChatMessageView> = {
  component: ChatMessageView,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ChatMessageView>;

export const Default: Story = {
  args: {
    message: {
      id: "1",
      text: "Welcome to USourced! What would you like to create today?",
      from: AI_AGENT,
      createdAt: new Date(),
    },
  },
};

export const LongMessage: Story = {
  args: {
    message: {
      id: "1",
      text: "Welcome to USourced! What would you like to create today? ".repeat(
        5
      ),
      from: AI_AGENT,
      createdAt: new Date(),
    },
  },
};

export const FromMe: Story = {
  args: {
    message: {
      id: "1",
      text: "Hello, USourced! ".repeat(10),
      from: CURRENT_USER,
      createdAt: new Date(),
    },
  },
};

export const WithOutlinedButtons: Story = {
  args: {
    message: {
      id: "1",
      text: "Welcome to USourced! What would you like to create today?",
      from: AI_AGENT,
      createdAt: new Date(),
      payload: (
        <>
          <Button variant="outlined" size="sm" className="mr-2">
            Surprise me!
          </Button>
          <Button variant="outlined" size="sm" className="mr-2">
            Surprise me again!
          </Button>
        </>
      ),
    },
  },
};

export const WithPayloadsFromMe: Story = {
  args: {
    message: {
      id: "1",
      text: "Hello, USourced! ".repeat(10),
      from: CURRENT_USER,
      createdAt: new Date(),
      payload: (
        <img
          src="https://picsum.photos/300/300"
          className="h-32 w-32"
          alt="attachment"
        />
      ),
    },
  },
};
