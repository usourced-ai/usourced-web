import classNames from "classnames";
import { useState } from "react";

import { Avatar } from "@/components/common/Avatar";
import { MessageTimeView } from "@/components/common/chat/MessageTimeView";
import { MessageView } from "@/components/common/chat/MessageView";
import { type ChatMessage, CURRENT_USER } from "@/models/chat";

export function ChatMessageView({ message }: { message: ChatMessage }) {
  const isFromRemote = message.from.id !== CURRENT_USER.id;
  const [isTyping, setIsTyping] = useState(true);
  return (
    <div
      className={classNames("flex items-start", {
        "text-left mr-20": isFromRemote,
        "text-right ml-16": !isFromRemote,
      })}
    >
      <div
        className={classNames({
          "order-1": isFromRemote,
          "order-2": !isFromRemote,
        })}
      >
        <Avatar user={message.from} />
      </div>
      <div
        className={classNames("flex-1", {
          "order-2 ml-4": isFromRemote,
          "order-1 mr-4": !isFromRemote,
        })}
      >
        <MessageView
          message={message}
          useTypewriter={isFromRemote}
          onFinishTyping={() => setIsTyping(false)}
        />
        {message.payload && (
          <div
            className={classNames("transition duration-300 mt-1 flex", {
              "opacity-0": isTyping,
            })}
          >
            <div className={classNames({ "ml-auto": !isFromRemote })}>
              {message.payload}
            </div>
          </div>
        )}
        <MessageTimeView message={message} />
      </div>
    </div>
  );
}
