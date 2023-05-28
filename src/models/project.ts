import type { Order } from "@/models/order";

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
  orders: Order[];
};
