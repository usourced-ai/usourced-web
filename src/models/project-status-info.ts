import type { ProjectPhase } from "./project-phase";

export enum ProjectWaitingStatus {
  Customer = "Customer",
  Vendor = "Vendor",
}

export type ProjectStatusInfo = {
  phase: ProjectPhase;
  nextStep: string;
  waitingOn?: ProjectWaitingStatus;
};
