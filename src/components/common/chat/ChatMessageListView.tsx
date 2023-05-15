import { ChatMessageView } from "@/components/common/chat/ChatMessageView";
import type { ChatState } from "@/models/chat";

export function ChatMessageListView(chatState: ChatState) {
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
      </ul>
    </div>
  );
}
