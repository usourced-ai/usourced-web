import { CheckIcon } from "@heroicons/react/24/outline";

import { ChatMessageListView } from "../common/chat/ChatMessageListView";
import { ChatInput } from "./ChatInput";

export function AIChatSlideout() {
  return (
    <div className="max-h-[75vh] rounded-lg bg-white/50 shadow-xl backdrop-blur sm:mt-8 sm:w-full sm:p-6">
      <div>
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
          <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
        </div>
        <div className="mt-3 text-center">
          <ChatMessageListView messages={[]} />
          <ChatInput />
        </div>
      </div>
    </div>
  );
}
