import clsx from "clsx";
import dayjs from "dayjs";

import { CURRENT_USER } from "@/models/chat";
import { USOURCED_USER } from "@/models/user";

import { ProjectTimelineEventView } from "./ProjectTimelineEventView";

const activity = [
  {
    id: "1",
    type: "created",
    dateTime: dayjs().subtract(10, "day").toDate(),
    person: CURRENT_USER,
    content: "created this project",
  },
  {
    id: "2",
    type: "edited",
    dateTime: dayjs().subtract(8, "day").toDate(),
    person: USOURCED_USER,
    content: "updated quotes",
  },
  {
    id: "3",
    type: "sent",
    dateTime: dayjs().subtract(6, "day").toDate(),
    person: USOURCED_USER,
    content: "sent invoice #10005",
  },
  {
    id: "4",
    type: "commented",
    dateTime: dayjs().subtract(4, "day").toDate(),
    person: CURRENT_USER,
    content: "",
    comment:
      "Called client, they reassured me the invoice would be paid by the 25th.",
  },
  {
    id: "5",
    type: "viewed",
    dateTime: dayjs().subtract(2, "day").toDate(),
    person: CURRENT_USER,
    content: "viewed invoice #10005",
  },
  {
    id: "6",
    type: "paid",
    dateTime: dayjs().subtract(1, "day").toDate(),
    person: CURRENT_USER,
    content: "paid invoice #10005",
  },
  {
    id: "7",
    type: "today",
    dateTime: dayjs().toDate(),
    person: CURRENT_USER,
    content: "now",
  },
  {
    id: "8",
    type: "future",
    dateTime: dayjs().add(7, "day").toDate(),
    person: USOURCED_USER,
    content: "estimated production completion",
  },
  {
    id: "9",
    type: "future",
    dateTime: dayjs().add(15, "day").toDate(),
    person: USOURCED_USER,
    content: "target first delivery",
  },
  {
    id: "10",
    type: "future",
    dateTime: dayjs().add(30, "day").toDate(),
    person: USOURCED_USER,
    content: "target ocean shipping delivery",
  },
];

export function ProjectTimeline() {
  return (
    <ul className="mt-6 space-y-6">
      {activity.map((event, idx) => (
        <li key={event.id} className="relative flex gap-x-4">
          <div
            className={clsx(
              idx === activity.length - 1 ? "h-6" : "-bottom-6",
              "absolute left-0 top-0 flex w-6 justify-center"
            )}
          >
            <div className="w-px bg-gray-200" />
          </div>
          <ProjectTimelineEventView event={event} />
        </li>
      ))}
    </ul>
  );
}
