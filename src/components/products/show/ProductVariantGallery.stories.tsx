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
      "/images/demo/mugs/actual/actual-01.jpg",
      "/images/demo/mugs/actual/actual-02.jpg",
      "/images/demo/mugs/actual/actual-03.jpg",
      "/images/demo/mugs/actual/actual-04.jpg",
      "/images/demo/mugs/actual/actual-05.jpg",
    ],
  },
};
