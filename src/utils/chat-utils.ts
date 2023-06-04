import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";

import type { ChatMessage } from "@/models/chat";
import { AI_AGENT, CURRENT_USER } from "@/models/chat";

dayjs.extend(localizedFormat);

export function newMessage(
  text: string,
  is_ai: boolean,
  payload?: JSX.Element
): ChatMessage {
  return {
    id: Math.random().toString(),
    text,
    createdAt: dayjs().toDate(),
    from: is_ai ? AI_AGENT : CURRENT_USER,
    payload,
  };
}
