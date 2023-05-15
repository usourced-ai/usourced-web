import type { User } from "@/models/user";

export type ChatMessage = {
  id: string;
  text: string;
  createdAt: Date;
  from: User;
  payload?: JSX.Element;
  error?: Error;
};

export const SYSTEM_AGENT: User = {
  id: "__SYSTEM__",
  name: "USourced",
  avatarUrl: "/images/site/usourced-icon.png",
};

export const AI_AGENT: User = {
  id: "__AI__",
  name: "USourced",
  avatarUrl: "/images/site/usourced-icon.png",
};

export const CURRENT_USER: User = {
  id: "__ME__",
  name: "Julia Xu",
  avatarUrl: "/images/demo/jx.jpg",
};

export type ChatState = {
  messages: ChatMessage[];
};
