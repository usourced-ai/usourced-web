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

export const Grass: Story = {
  args: {
    color: "grass",
  },
  render,
};

export const Outlined: Story = {
  args: {
    color: "brand",
    variant: "outlined",
  },
  render,
};

export const Small: Story = {
  args: {
    size: "sm",
  },
  render,
};

export const ExtraSmall: Story = {
  args: {
    size: "xs",
  },
  render,
};
