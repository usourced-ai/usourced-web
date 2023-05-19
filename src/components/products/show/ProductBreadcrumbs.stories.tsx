import type { Meta, StoryObj } from "@storybook/react";

import { ProductBreadcrumbs } from "./ProductBreadcrumbs";

const meta: Meta<typeof ProductBreadcrumbs> = {
  component: ProductBreadcrumbs,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ProductBreadcrumbs>;

export const Default: Story = {
  args: {
    breadcrumbs: [
      {
        id: "1",
        name: "Home",
        href: "/",
      },
      {
        id: "2",
        name: "Products",
        href: "/products",
      },
      {
        id: "3",
        name: "Category",
        href: "/products/category",
      },
      {
        id: "4",
        name: "Product",
        href: "/products/category/product",
      },
    ],
  },
};
