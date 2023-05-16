import { useEffect } from "react";
import Typewriter from "typewriter-effect";

import type { ChatMessage } from "@/models/chat";

export function MessageView({
  message,
  useTypewriter,
  onFinishTyping,
}: {
  message: ChatMessage;
  useTypewriter?: boolean;
  onFinishTyping?: () => void;
}) {
  useEffect(() => {
    if (!useTypewriter) {
      onFinishTyping?.();
    }
  }, [useTypewriter, onFinishTyping]);
  return (
    <div className="text-sm">
      {useTypewriter ? (
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(message.text)
              .callFunction(() => onFinishTyping?.())
              .start();
          }}
          options={{ delay: 10, cursor: "" }}
        />
      ) : (
        message.text
      )}
    </div>
  );
}
