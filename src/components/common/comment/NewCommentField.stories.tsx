import type { Meta, StoryObj } from "@storybook/react";

import { NewCommentField } from "./NewCommentField";

const meta: Meta<typeof NewCommentField> = {
  component: NewCommentField,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof NewCommentField>;

export const Default: Story = {};
