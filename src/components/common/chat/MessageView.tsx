import Typewriter from "typewriter-effect";

import type { ChatMessage } from "@/models/chat";

export function MessageView({
  message,
  typewriter,
  onFinishTyping,
}: {
  message: ChatMessage;
  typewriter?: boolean;
  onFinishTyping?: () => void;
}): JSX.Element {
  return (
    <div className="text-sm">
      {typewriter ? (
        <Typewriter
          onInit={(tw) => {
            tw.typeString(message.text)
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
