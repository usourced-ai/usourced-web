import classNames from "classnames";
import { useState } from "react";

import { Avatar } from "@/components/common/Avatar";
import { MessageTimeView } from "@/components/common/chat/MessageTimeView";
import { MessageView } from "@/components/common/chat/MessageView";
import { type ChatMessage, CURRENT_USER } from "@/models/chat";

function ChatMessageFromMeView({ message }: { message: ChatMessage }) {
  return (
    <div className="ml-20 flex items-end text-right">
      <div className="mr-4 flex-1">
        <MessageView message={message} />
        {message.payload && (
          <div className="mt-1 flex">
            <div className="ml-auto">{message.payload}</div>
          </div>
        )}
        <MessageTimeView message={message} />
      </div>
      <Avatar user={message.from} />
    </div>
  );
}

function ChatMessageFromRemoteView({ message }: { message: ChatMessage }) {
  const [isTyping, setIsTyping] = useState(true);
  return (
    <div className="mr-20 flex items-start text-left">
      <Avatar user={message.from} />
      <div className="ml-4 flex-1">
        <MessageView
          message={message}
          typewriter
          onFinishTyping={() => setIsTyping(false)}
        />
        {message.payload && (
          <div
            className={classNames("transition duration-300 mt-1 flex", {
              "opacity-0": isTyping,
            })}
          >
            {message.payload}
          </div>
        )}
        <MessageTimeView message={message} />
      </div>
    </div>
  );
}

export function ChatMessageView({
  message,
}: {
  message: ChatMessage;
}): JSX.Element {
  switch (message.from.id) {
    case CURRENT_USER.id: {
      return <ChatMessageFromMeView message={message} />;
    }
    default: {
      return <ChatMessageFromRemoteView message={message} />;
    }
  }
}
