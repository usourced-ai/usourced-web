import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

const render = (args: Story["args"]) => (
  <Button {...args}>{args ? args.label ?? "Button" : "Button"}</Button>
);

export const DefaultButton: Story = {
  args: {},
  render,
};

export const LongButton: Story = {
  args: {
    label: "This is a long button",
  },
  render,
};
