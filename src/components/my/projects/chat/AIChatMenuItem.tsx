import { useState } from "react";
import { FaMagic } from "react-icons/fa";

import { AIChatSlideout } from "@/components/my/projects/chat/AIChatSlideout";

export function AIChatMenuItem() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex w-full items-center gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-teal-700"
      >
        <div className="mr-1 inline-block text-gray-400">
          <FaMagic />
        </div>
        <div>Chat with AI</div>
      </button>
      <AIChatSlideout open={open} setOpen={setOpen} />
    </>
  );
}
