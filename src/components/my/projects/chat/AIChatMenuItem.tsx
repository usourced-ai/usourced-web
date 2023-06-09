import { useState } from "react";
import { FaMagic } from "react-icons/fa";

import { AIChatSlideout } from "@/components/my/projects/chat/AIChatSlideout";

function ThinMenuItem() {
  return (
    <div className="flex w-full flex-col items-center rounded-md p-3 text-xs font-semibold text-gray-700 transition hover:bg-gray-50">
      <FaMagic className="h-5 w-5 text-gray-400" aria-hidden="true" />
      <span className="mt-2">Chat with AI</span>
    </div>
  );
}

function RegularMenuItem() {
  return (
    <div className="flex w-full items-center gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-teal-700">
      <div className="mr-1 inline-block text-gray-400">
        <FaMagic />
      </div>
      <div>Chat with AI</div>
    </div>
  );
}

export function AIChatMenuItem({ thin }: { thin?: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setOpen(true)}>
        {thin ? <ThinMenuItem /> : <RegularMenuItem />}
      </button>
      <AIChatSlideout open={open} setOpen={setOpen} />
    </>
  );
}
