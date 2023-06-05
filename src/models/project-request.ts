export type ProjectRequestAttribute = {
  name: string;
  value: string;
};

export type ProjectRequest = {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  attributes: ProjectRequestAttribute[];
};
