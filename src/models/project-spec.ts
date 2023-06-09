export type ProjectSpecAttribute = {
  name: string;
  value: string;
};

export type ProjectSpec = {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  attributes: ProjectSpecAttribute[];
};
