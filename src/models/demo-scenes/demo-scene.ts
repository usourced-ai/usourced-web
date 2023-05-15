import { useEffect } from "react";
import type { RecoilState } from "recoil";
import { useRecoilValue, useSetRecoilState } from "recoil";

import type { ChatMessage, ChatState } from "@/models/chat";

export type DemoScene = {
  messages: ChatMessage[];
  productName: string;
  productMockupState: string;
  summary: JSX.Element[];
};

export function useDemoScene(
  chatStateAtom: RecoilState<ChatState>,
  sceneNumberAtom: RecoilState<number>,
  scenes: DemoScene[]
) {
  const sceneNumber = useRecoilValue(sceneNumberAtom);
  const setSceneNumber = useSetRecoilState(sceneNumberAtom);
  const setChatState = useSetRecoilState(chatStateAtom);

  useEffect(() => {
    const newScene = scenes[sceneNumber % scenes.length];
    if (newScene) {
      setChatState({
        messages: newScene.messages,
      });
    }
  }, [sceneNumber, setChatState]);

  const scene = scenes[sceneNumber % scenes.length];
  const incrementSceneNumber = (delta: number) => {
    setSceneNumber((prev) => {
      let newValue = prev + delta;
      if (newValue < 0 || newValue >= scenes.length) {
        newValue = 0;
      }
      return newValue;
    });
  };
  const advanceSceneWithResponse = () => {
    incrementSceneNumber(1);
    if (sceneNumber % 2 === 0) {
      // Automatically advance to next scene to simulate AI response
      setTimeout(() => {
        incrementSceneNumber(1);
      }, Math.random() * 0);
    }
  };
  return {
    sceneNumber,
    scene,
    incrementSceneNumber,
    advanceSceneWithResponse,
  };
}
