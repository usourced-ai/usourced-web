import type { Order } from "@/models/order";
import type { ProjectRequest } from "@/models/project-request";

import type { ProjectFile } from "./project-file";

export enum ProjectPhase {
  Quoting = "Quoting",
  Sample = "Sample",
  Production = "Production",
  Completed = "Completed",
}

export type Project = {
  id: string;
  name: string;
  createdAt: Date;
  imageUrl?: string;
  phase: ProjectPhase;
  pendingTaskCount: number;
  originalRequest?: ProjectRequest;
  projectFiles: ProjectFile[];
  orders: Order[];
};
