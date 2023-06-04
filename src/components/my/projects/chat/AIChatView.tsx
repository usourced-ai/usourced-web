import { ChatInput } from "@/components/ai-sourcing/ChatInput";
import { ChatMessageListView } from "@/components/common/chat/ChatMessageListView";
import { chatState } from "@/models/demo-scenes/project-dashboard-playbook";

export function AIChatView() {
  return (
    <div className="rounded-lg bg-white/50 shadow-xl backdrop-blur sm:mt-8 sm:w-full sm:p-4 sm:px-6">
      <div>
        <div className="mt-2 h-full overflow-y-auto">
          <ChatMessageListView chatState={chatState} useTypewriter={false} />
        </div>
        <div className="mt-6">
          <ChatInput placeholder="Send a message" />
        </div>
      </div>
    </div>
  );
}
