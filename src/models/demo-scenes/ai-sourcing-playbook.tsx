import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import Image from "next/image";
import { FaFilePdf } from "react-icons/fa";
import { atom } from "recoil";

import { Button } from "@/components/common/Button";
import type { ChatMessage, ChatState } from "@/models/chat";
import type { DemoScene } from "@/models/demo-scenes/demo-scene";
import { useDemoScene } from "@/models/demo-scenes/demo-scene";
import { newMessage } from "@/utils/chat-utils";

dayjs.extend(localizedFormat);

type SceneDelta = {
  message: ChatMessage;
  productName?: string;
  productMockupState?: string;
  summary?: JSX.Element[];
};

function newImagePayload(url: string): JSX.Element {
  return (
    <Image width={160} height={160} src={url} alt={url} className="h-40 w-40" />
  );
}

function ButtonsPayload({
  buttons,
}: {
  buttons: { title: string; disabled?: boolean }[];
}): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  const { advanceSceneWithResponse } = useAiSourcingDemoScene();
  return (
    <>
      {buttons.map((button) => (
        <Button
          className="mr-2"
          key={button.title}
          size="sm"
          variant="outlined"
          onClick={advanceSceneWithResponse}
        >
          {button.title}
        </Button>
      ))}
    </>
  );
}

function newSummaryItem(label: string, value: string): JSX.Element {
  return (
    <p key={label}>
      <span className="font-semibold">{label}: </span>
      {value}
    </p>
  );
}

const sceneDeltas = [
  {
    message: newMessage(
      "Welcome to USourced! What would you like to create today?",
      true
    ),
    productName: "Customize Your New Product with USourced AI",
  },
  {
    message: newMessage("I'm looking to create a custom plushie", false),
  },
  {
    message: newMessage(
      "Fabulous -- how many units are you looking to order? Our plushie MOQ starts at 200 units.",
      true
    ),
  },
  {
    message: newMessage("1000", false),
    summary: [newSummaryItem("Quantity", "1,000")],
  },
  {
    message: newMessage(
      "That's no problem! What height would you like it to be roughly?",
      true
    ),
  },
  {
    message: newMessage("About 6 inches tall", false),
    summary: [newSummaryItem("Size", "6 in.")],
  },
  {
    message: newMessage(
      "We can do that! Do you have any sketches or drawings for how you would like the plushie to look like? You can drag it onto this chat.",
      true
    ),
  },
  {
    message: newMessage(
      "Here is a sketch:",
      false,
      newImagePayload("/images/demo/plushie-drawing.png")
    ),
    productMockupState: "/images/demo/plushie-drawing.png",
  },
  {
    message: newMessage(
      "Cute kitty! What is your preferred material for the plushie?",
      true,
      <ButtonsPayload
        buttons={[
          { title: "1. Long fur" },
          { title: "2. Short fur", disabled: true },
          { title: "3. No fur (more like a velvet texture)", disabled: true },
        ]}
      />
    ),
    productName: "Cat Plushie",
  },
  {
    message: newMessage("1. Long fur", false),
  },
  {
    message: newMessage(
      "How would you like it to be stuffed?",
      true,
      <ButtonsPayload
        buttons={[
          { title: "1. Squishy", disabled: true },
          { title: "2. Normal PP cotton" },
          { title: "3. Beans", disabled: true },
        ]}
      />
    ),
    productName: "Cat Plushie",
    summary: [newSummaryItem("Material", "Long fur")],
  },
  {
    message: newMessage("2. Normal PP cotton", false),
  },
  {
    message: newMessage(
      "Perfect. What do you think of something like this?",
      true,
      newImagePayload("/images/demo/plushie-mockup-1.png")
    ),
    productName: "Fluffy White Cat Plushie",
    productMockupState: "/images/demo/plushie-mockup-1.png",
    summary: [newSummaryItem("Stuffing", "Normal PP cotton")],
  },
  {
    message: newMessage(
      "That's pretty good! Maybe we make the body a bit wider and nose a bit flatter?",
      false
    ),
  },
  {
    message: newMessage(
      "Sure thing! How about this?",
      true,
      newImagePayload("/images/demo/plushie-mockup-2.png")
    ),
    productMockupState: "/images/demo/plushie-mockup-2.png",
  },
  {
    message: newMessage("Ok perfect. Can you show me the side too?", false),
  },
  {
    message: newMessage(
      "Of course!",
      true,
      newImagePayload("/images/demo/plushie-mockup-3.png")
    ),
    productMockupState: "/images/demo/plushie-mockup-3.png",
  },
  {
    message: newMessage(
      "Amazing! How much would it be to order 1000 units and when can I get it by?",
      false
    ),
  },
  {
    message: newMessage(
      "Sampling will take a week and production another 2 weeks. Here is the pricing breakdown. You can also express ship only a portion and standard ship the remainder to get the first batch in quickly but save on overall cost. What would you like to do?",
      true,
      <div className="rounded-md border border-gray-200 bg-white p-2 px-4 text-sm">
        <p>
          <span className="font-semibold">Sampling Time:</span> 7 days
        </p>
        <p>
          <span className="font-semibold">Production Time:</span> 15 days
        </p>
        <p>
          <span className="font-semibold">Sampling Cost:</span> $100
        </p>
        <p>
          <span className="font-semibold">
            Unit price with standard 30-day shipping:
          </span>{" "}
          $7.70
        </p>
        <p>
          <span className="font-semibold">
            Unit price with express 7-day shipping:
          </span>{" "}
          $11.27
        </p>
      </div>
    ),
  },
  {
    message: newMessage(
      "I will take the express shipping for the first 100 units and standard shipping for the rest.",
      false
    ),
  },
  {
    message: newMessage(
      "Okay, no problem! Here is the final pricing breakdown, with timeline and cost estimates. When you are ready, you can place the order by clicking the button below.",
      true,
      <div className="rounded-md border border-gray-200 bg-white p-2 px-4 text-sm">
        <h4 className="text-xl">Timeline Estimates</h4>
        <p>
          <span className="font-semibold">Sample placement date:</span>{" "}
          {dayjs().add(1, "day").format("L")}
        </p>
        <p>
          <span className="font-semibold">Sample ready date:</span>{" "}
          {dayjs().add(7, "day").format("L")}
        </p>
        <p>
          <span className="font-semibold">Bulk production placement date:</span>{" "}
          {dayjs().add(8, "day").format("L")}
        </p>
        <p>
          <span className="font-semibold">Bulk production ready date:</span>{" "}
          {dayjs().add(15, "day").format("L")}
        </p>
        <p>
          <span className="font-semibold">
            Express shipment receiving date (100 units):
          </span>{" "}
          {dayjs().add(21, "day").format("L")}
        </p>
        <p>
          <span className="font-semibold">
            Standard shipment receiving date (900 units):
          </span>{" "}
          {dayjs().add(35, "day").format("L")}
        </p>
        <h4 className="mt-2 text-xl">Total Order Cost</h4>
        <p>
          <span className="font-semibold">Sample + Production + Shipping:</span>{" "}
          $8157
        </p>
        <Button size="sm" variant="outlined" className="mt-2">
          Place Order
        </Button>
      </div>
    ),
    summary: [
      <div key="timeline" className="text-sm">
        <h3 className="mt-4 text-2xl">Timeline Estimates</h3>
        <p className="mt-1">
          <span className="font-semibold">Sample placement date:</span>{" "}
          {dayjs().add(1, "day").format("L")}
        </p>
        <p className="mt-1">
          <span className="font-semibold">Sample ready date:</span>{" "}
          {dayjs().add(7, "day").format("L")}
        </p>
        <p className="mt-1">
          <span className="font-semibold">Bulk production placement date:</span>{" "}
          {dayjs().add(8, "day").format("L")}
        </p>
        <p className="mt-1">
          <span className="font-semibold">Bulk production ready date:</span>{" "}
          {dayjs().add(15, "day").format("L")}
        </p>
        <p className="mt-1">
          <span className="font-semibold">
            Express shipment receiving date (100 units):
          </span>{" "}
          {dayjs().add(21, "day").format("L")}
        </p>
        <p className="mt-1">
          <span className="font-semibold">
            Standard shipment receiving date (900 units):
          </span>{" "}
          {dayjs().add(35, "day").format("L")}
        </p>
        <h3 className="mt-4 text-2xl">Total Order Price</h3>
        <p className="mt-1">
          <span className="font-semibold">Sample + Production + Shipping:</span>{" "}
          $8157
        </p>
        <div className="mt-4">
          <Button>Place Order</Button>
        </div>
      </div>,
    ],
  },
  {
    message: newMessage("Place Order", false),
  },
  {
    message: newMessage(
      "Thank you for your order! We will be in touch once your sample is ready. Here is a summary of your product sourcing request for your reference.",
      true,
      <Button variant="outlined">
        Save Order Summary <FaFilePdf className="ml-0.5 inline h-4 w-4" />
      </Button>
    ),
  },
];

function getScenesFromDeltas(deltas: SceneDelta[]): DemoScene[] {
  const scenes: DemoScene[] = [];
  let scene: DemoScene = {
    messages: [],
    productName: "",
    productMockupState: "",
    summary: [],
  };
  for (const delta of deltas) {
    scene = {
      ...scene,
      messages: [...scene.messages, delta.message],
      productName: delta.productName || scene.productName,
      productMockupState: delta.productMockupState || scene.productMockupState,
      summary: [...scene.summary, ...(delta.summary ?? [])],
    };
    scenes.push(scene);
  }
  return scenes;
}

const scenes = getScenesFromDeltas(sceneDeltas);

const AiSourcingChatStateAtom = atom<ChatState>({
  key: "AiSourcingChatStateAtom",
  default: {
    messages: [],
  },
});

const AiSourcingSceneNumberAtom = atom<number>({
  key: "AiSourcingSceneNumberAtom",
  default: 0,
});

export function useAiSourcingDemoScene() {
  return useDemoScene(
    AiSourcingChatStateAtom,
    AiSourcingSceneNumberAtom,
    scenes
  );
}
