import type { User } from "@/models/user";

export type ProjectFile = {
  id: string;
  title: string;
  createdAt: Date;
  updatedAt: Date;
  owner: User;
  previewUrl: string;
  downloadUrl: string;
};
