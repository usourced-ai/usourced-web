import moment from "moment";

import type { ChatMessage } from "@/models/chat";

export function MessageTimeView({ message }: { message: ChatMessage }) {
  return (
    <div className="mt-1 text-2xs text-gray-400">
      {moment(message.createdAt).fromNow()}
    </div>
  );
}
