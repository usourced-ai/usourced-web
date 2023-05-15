import Typewriter from "typewriter-effect";

import type { ChatMessage } from "@/models/chat";

export function MessageView({
  message,
  typewriter,
}: {
  message: ChatMessage;
  typewriter?: boolean;
}): JSX.Element {
  return (
    <div>
      {typewriter ? (
        <Typewriter
          options={{
            strings: message.text,
            cursor: "",
            autoStart: true,
            delay: 10,
          }}
        />
      ) : (
        message.text
      )}
    </div>
  );
}
