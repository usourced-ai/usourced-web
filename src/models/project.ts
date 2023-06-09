import type { Attachment } from "@/models/attachment";
import type { Order } from "@/models/order";
import type { ProjectPhase } from "@/models/project-phase";
import type { ProjectQuote } from "@/models/project-quote";
import type { ProjectRequest } from "@/models/project-request";
import type { ProjectStatusInfo } from "@/models/project-status-info";

export type Project = {
  id: string;
  name: string;
  createdAt: Date;
  imageUrl?: string;
  phase: ProjectPhase;
  statusInfo: ProjectStatusInfo;
  pendingTaskCount: number;
  originalRequest?: ProjectRequest;
  attachments: Attachment[];
  orders: Order[];
  quotes: ProjectQuote[];
};
