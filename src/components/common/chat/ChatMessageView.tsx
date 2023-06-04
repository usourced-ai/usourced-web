import clsx from "clsx";
import { useState } from "react";

import { Avatar } from "@/components/common/Avatar";
import { MessageTimeView } from "@/components/common/chat/MessageTimeView";
import { MessageView } from "@/components/common/chat/MessageView";
import { type ChatMessage, CURRENT_USER } from "@/models/chat";

export function ChatMessageView({
  message,
  useTypewriter,
}: {
  message: ChatMessage;
  useTypewriter?: boolean;
}) {
  const isFromRemote = message.from.id !== CURRENT_USER.id;
  const [isTyping, setIsTyping] = useState(true);
  return (
    <div
      className={clsx("flex items-start", {
        "text-left mr-20": isFromRemote,
        "text-right ml-16": !isFromRemote,
      })}
    >
      <div
        className={clsx({
          "order-1": isFromRemote,
          "order-2": !isFromRemote,
        })}
      >
        <Avatar user={message.from} />
      </div>
      <div
        className={clsx("flex-1", {
          "order-2 ml-4": isFromRemote,
          "order-1 mr-4": !isFromRemote,
        })}
      >
        <MessageView
          message={message}
          useTypewriter={useTypewriter && isFromRemote}
          onFinishTyping={() => setIsTyping(false)}
        />
        {message.payload && (
          <div
            className={clsx("mt-1 flex transition duration-300", {
              "opacity-0": isTyping,
            })}
          >
            <div className={clsx({ "ml-auto": !isFromRemote })}>
              {message.payload}
            </div>
          </div>
        )}
        <MessageTimeView message={message} />
      </div>
    </div>
  );
}
