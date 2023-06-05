import type { Meta, StoryObj } from "@storybook/react";

import { CURRENT_USER } from "@/models/chat";

import { ProjectFileGalleryCard } from "./ProjectFileGalleryCard";

const meta: Meta<typeof ProjectFileGalleryCard> = {
  component: ProjectFileGalleryCard,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ProjectFileGalleryCard>;

export const Default: Story = {
  args: {
    projectFiles: [],
  },
};

export const WithFiles: Story = {
  args: {
    projectFiles: [
      {
        id: "file1.jpg",
        title: "File 1",
        createdAt: new Date(),
        updatedAt: new Date(),
        owner: CURRENT_USER,
        previewUrl: "https://via.placeholder.com/200",
        downloadUrl: "https://via.placeholder.com/200",
      },
      {
        id: "file2.jpg",
        title: "File 2",
        createdAt: new Date(),
        updatedAt: new Date(),
        owner: CURRENT_USER,
        previewUrl: "https://via.placeholder.com/200",
        downloadUrl: "https://via.placeholder.com/200",
      },
    ],
  },
};
