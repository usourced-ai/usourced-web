import { CheckCircleIcon } from "@heroicons/react/24/outline";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Image from "next/image";
import { FaTruckLoading } from "react-icons/fa";

import type { ProjectTimelineEvent } from "@/models/project-timeline";

dayjs.extend(relativeTime);

function EventIcon({ type }: { type: string }) {
  if (type === "paid") {
    return (
      <CheckCircleIcon className="h-6 w-6 text-teal-700" aria-hidden="true" />
    );
  }
  if (type === "delivered") {
    return (
      <FaTruckLoading
        className="h-6 w-6 rounded-full border border-teal-700 p-1 text-teal-700"
        aria-hidden="true"
      />
    );
  }
  return (
    <div className="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300" />
  );
}

function EventTime({ dateTime }: { dateTime: Date }) {
  return (
    <time
      dateTime={dateTime.toISOString()}
      className="flex-none py-0.5 text-xs leading-5 text-gray-500"
    >
      {dayjs(dateTime).fromNow()}
    </time>
  );
}

function SimpleEventView({ event }: { event: ProjectTimelineEvent }) {
  return (
    <>
      <div className="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
        <EventIcon type={event.type} />
      </div>
      <p className="flex-auto py-0.5 text-xs leading-5 text-gray-500">
        <span className="font-medium text-gray-900">{event.person.name}</span>{" "}
        {event.content}
      </p>
      <EventTime dateTime={event.dateTime} />
    </>
  );
}

function TodayEventView({ event }: { event: ProjectTimelineEvent }) {
  return (
    <>
      <div className="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
        <EventIcon type={event.type} />
      </div>
      <p className="flex-auto py-0.5 text-xs leading-5 text-gray-500">today</p>
    </>
  );
}

function CommentEventView({ event }: { event: ProjectTimelineEvent }) {
  return (
    <>
      <Image
        width={24}
        height={24}
        src={event.person.avatarUrl}
        alt={event.person.name}
        className="relative mt-3 h-6 w-6 flex-none rounded-full bg-gray-50"
      />
      <div className="flex-auto rounded-md p-3 ring-1 ring-inset ring-gray-200">
        <div className="flex justify-between gap-x-4">
          <div className="py-0.5 text-xs leading-5 text-gray-500">
            <span className="font-medium text-gray-900">
              {event.person.name}
            </span>{" "}
            commented
          </div>
          <EventTime dateTime={event.dateTime} />
        </div>
        <p className="text-sm leading-6 text-gray-500">{event.comment}</p>
      </div>
    </>
  );
}

export function ProjectTimelineEventView({
  event,
}: {
  event: ProjectTimelineEvent;
}) {
  if (event.type === "commented") {
    return <CommentEventView event={event} />;
  }
  if (event.type === "today") {
    return <TodayEventView event={event} />;
  }
  return <SimpleEventView event={event} />;
}
