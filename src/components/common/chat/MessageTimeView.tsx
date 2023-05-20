import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import type { ChatMessage } from "@/models/chat";

dayjs.extend(relativeTime);

export function MessageTimeView({ message }: { message: ChatMessage }) {
  return (
    <div className="mt-1 text-2xs text-gray-400">
      {dayjs(message.createdAt).fromNow()}
    </div>
  );
}
