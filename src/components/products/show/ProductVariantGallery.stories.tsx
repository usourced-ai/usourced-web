import type { Meta, StoryObj } from "@storybook/react";

import { ProductVariantGallery } from "./ProductVariantGallery";

const meta: Meta<typeof ProductVariantGallery> = {
  component: ProductVariantGallery,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ProductVariantGallery>;

export const Default: Story = {
  args: {
    imageUrls: [
      "http://localhost:3000/images/demo/mugs/actual/actual-01.jpg",
      "http://localhost:3000/images/demo/mugs/actual/actual-02.jpg",
      "http://localhost:3000/images/demo/mugs/actual/actual-03.jpg",
      "http://localhost:3000/images/demo/mugs/actual/actual-04.jpg",
      "http://localhost:3000/images/demo/mugs/actual/actual-05.jpg",
    ],
  },
};
