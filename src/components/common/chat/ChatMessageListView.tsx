import { useEffect, useRef } from "react";

import { ChatMessageView } from "@/components/common/chat/ChatMessageView";
import type { ChatState } from "@/models/chat";

export function ChatMessageListView({ chatState }: { chatState: ChatState }) {
  const endOfListRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    endOfListRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  }, [chatState]);
  return (
    <div>
      <ul>
        {chatState.messages.map((message) => {
          return (
            <li key={message.id} className="py-1">
              <ChatMessageView message={message} />
            </li>
          );
        })}
        <div key="endOfList" ref={endOfListRef} />
      </ul>
    </div>
  );
}
