import type { User } from "@/models/user";

export enum ProjectTimelineEventType {
  Simple = "simple",
  Paid = "paid",
  Comment = "comment",
}

export type ProjectTimelineEvent = {
  id: string;
  type: string;
  dateTime: Date;
  person: User;
  content: string;
  comment?: string;
};
