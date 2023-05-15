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

export const Default: Story = {
  args: {},
  render,
};

export const LongLabel: Story = {
  args: {
    label: "This is a very long label for a button",
  },
  render,
};
