export enum ProjectPhase {
  Quoting = "Quoting",
  Sample = "Sample",
  Production = "Production",
  Completed = "Completed",
}

export type Project = {
  id: string;
  name: string;
  imageUrl?: string;
  phase: ProjectPhase;
  pendingTaskCount: number;
  createdAt: Date;
};
