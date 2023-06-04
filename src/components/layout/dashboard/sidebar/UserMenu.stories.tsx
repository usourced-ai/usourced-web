import { Menu } from "@headlessui/react";
import type { Meta, StoryObj } from "@storybook/react";

import { UserMenu } from "./UserMenu";

const meta: Meta<typeof UserMenu> = {
  component: UserMenu,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof UserMenu>;

export const Default: Story = {
  render: () => (
    <Menu>
      <UserMenu />
    </Menu>
  ),
};
