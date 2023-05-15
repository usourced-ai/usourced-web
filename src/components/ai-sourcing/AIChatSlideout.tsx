import { useRecoilValue } from "recoil";

import { ChatInput } from "@/components/ai-sourcing/ChatInput";
import { ChatMessageListView } from "@/components/common/chat/ChatMessageListView";
import {
  AiSourcingChatStateAtom,
  useAiSourcingDemoScene,
} from "@/models/demo-scenes/ai-sourcing-playbook";

export function AIChatSlideout() {
  const chatState = useRecoilValue(AiSourcingChatStateAtom);
  const { advanceSceneWithResponse } = useAiSourcingDemoScene();
  return (
    <div className="rounded-lg bg-white/50 shadow-xl backdrop-blur sm:mt-8 sm:w-full sm:p-4 sm:px-6">
      <div>
        <div
          className="mt-2 overflow-y-auto"
          style={{ height: "calc(100vh - 320px)" }}
        >
          <ChatMessageListView chatState={chatState} />
        </div>
        <div className="mt-6">
          <ChatInput onSend={advanceSceneWithResponse} />
        </div>
      </div>
    </div>
  );
}
