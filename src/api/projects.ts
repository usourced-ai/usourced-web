import type { Attachment } from "@/models/attachment";
import type { Order } from "@/models/order";
import { OrderStatus, OrderType } from "@/models/order";
import { type Project } from "@/models/project";
import { ProjectPhase } from "@/models/project-phase";
import { ProjectWaitingStatus } from "@/models/project-status-info";
import { USOURCED_USER } from "@/models/user";

export function getAttachments(project: Project): Attachment[] {
  if (!project.imageUrl) {
    return [];
  }
  return [
    {
      id: "0",
      title: "Product Mockup",
      createdAt: project.createdAt,
      updatedAt: project.createdAt,
      owner: USOURCED_USER,
      previewUrl: project.imageUrl,
      downloadUrl: project.imageUrl,
    },
  ];
}

export const orders: Record<string, Order> = {
  "4-0": {
    id: "4-0",
    name: "Sample #1",
    createdAt: new Date("2022-10-19"),
    type: OrderType.Sample,
    status: OrderStatus.Draft,
  },
  "5-0": {
    id: "5-0",
    name: "Sample #1",
    createdAt: new Date("2022-10-27"),
    type: OrderType.Sample,
    status: OrderStatus.PendingProduction,
  },
  "6-1": {
    id: "6-1",
    name: "Sample #2",
    createdAt: new Date("2022-11-01"),
    type: OrderType.Sample,
    status: OrderStatus.Draft,
  },
  "6-0": {
    id: "6-0",
    name: "Sample #1",
    createdAt: new Date("2022-11-01"),
    type: OrderType.Sample,
    status: OrderStatus.Delivered,
  },
  "7-0": {
    id: "7-0",
    name: "Sample #1",
    createdAt: new Date("2022-11-01"),
    type: OrderType.Sample,
    status: OrderStatus.InProduction,
  },
  "8-0": {
    id: "8-0",
    name: "Sample #1",
    createdAt: new Date("2022-11-09"),
    type: OrderType.Sample,
    status: OrderStatus.Shipping,
  },
  "9-0": {
    id: "9-0",
    name: "Sample #1",
    createdAt: new Date("2022-11-09"),
    type: OrderType.Sample,
    status: OrderStatus.Delivered,
  },
  "10-0": {
    id: "10-0",
    name: "Production #1",
    createdAt: new Date("2022-12-10"),
    type: OrderType.Production,
    status: OrderStatus.Draft,
  },
  "10-1": {
    id: "10-1",
    name: "Sample #1",
    createdAt: new Date("2022-12-05"),
    type: OrderType.Sample,
    status: OrderStatus.Delivered,
  },
  "11-0": {
    id: "11-0",
    name: "Production #1",
    createdAt: new Date("2022-12-10"),
    type: OrderType.Production,
    status: OrderStatus.PendingProduction,
  },
  "11-1": {
    id: "11-1",
    name: "Sample #1",
    createdAt: new Date("2022-12-05"),
    type: OrderType.Sample,
    status: OrderStatus.Delivered,
  },
  "12-0": {
    id: "12-0",
    name: "Production #1",
    createdAt: new Date("2023-01-10"),
    type: OrderType.Production,
    status: OrderStatus.InProduction,
  },
  "12-1": {
    id: "12-1",
    name: "Sample #1",
    createdAt: new Date("2023-01-05"),
    type: OrderType.Sample,
    status: OrderStatus.Delivered,
  },
  "13-0": {
    id: "13-0",
    name: "Production #1",
    createdAt: new Date("2023-01-10"),
    type: OrderType.Production,
    status: OrderStatus.Shipping,
  },
  "13-1": {
    id: "13-1",
    name: "Sample #1",
    createdAt: new Date("2023-01-05"),
    type: OrderType.Sample,
    status: OrderStatus.Delivered,
  },
  "14-0": {
    id: "14-0",
    name: "Production #1",
    createdAt: new Date("2023-01-10"),
    type: OrderType.Production,
    status: OrderStatus.Shipping,
  },
  "14-1": {
    id: "14-1",
    name: "Sample #1",
    createdAt: new Date("2023-01-05"),
    type: OrderType.Sample,
    status: OrderStatus.Delivered,
  },
};

export const projects: Record<string, Project> = {
  "0": {
    id: "0",
    name: "Beige Baseball Cap",
    createdAt: new Date("2023-01-03"),
    phase: ProjectPhase.Quoting,
    statusInfo: {
      phase: ProjectPhase.Quoting,
      nextStep: "Place Sample Orders",
      waitingOn: ProjectWaitingStatus.Customer,
    },
    pendingTaskCount: 2,
    imageUrl: "/images/demo/projects/Beige Baseball Cap.png",
    orders: [],
    quotes: [],
    attachments: [],
    originalRequest: {
      id: "0",
      name: "Beige Baseball Cap",
      createdAt: new Date("2023-01-03"),
      updatedAt: new Date("2023-01-03"),
      attributes: [
        {
          name: "Color",
          value: "Beige",
        },
        {
          name: "Material",
          value: "Polyester",
        },
        {
          name: "Logo",
          value: "Embroidered",
        },
        {
          name: "Packaging",
          value: "Individual Polybag",
        },
        {
          name: "Size",
          value: "10 in.",
        },
        {
          name: "Quantity",
          value: "100/200/500",
        },
        {
          name: "Target Unit Price",
          value: "$10.00",
        },
        {
          name: "Target Timeline",
          value: "Delivery in 1 month",
        },
      ],
    },
  },
  "1": {
    id: "1",
    name: "Friendship Heart Necklaces",
    createdAt: new Date("2023-01-03"),
    phase: ProjectPhase.Quoting,
    statusInfo: {
      phase: ProjectPhase.Quoting,
      nextStep: "Provide Design Files",
      waitingOn: ProjectWaitingStatus.Customer,
    },
    pendingTaskCount: 1,
    orders: [],
    quotes: [],
    attachments: [],
  },
  "2": {
    id: "2",
    name: "Blue Textured Notebook",
    createdAt: new Date("2023-01-03"),
    phase: ProjectPhase.Quoting,
    statusInfo: {
      phase: ProjectPhase.Quoting,
      nextStep: "Place Sample Orders",
      waitingOn: ProjectWaitingStatus.Customer,
    },
    pendingTaskCount: 0,
    imageUrl: "/images/demo/projects/Blue Textured Notebook.png",
    orders: [],
    quotes: [],
    attachments: [],
  },
  "3": {
    id: "3",
    name: "Yellow Backpack",
    createdAt: new Date("2023-01-03"),
    phase: ProjectPhase.Quoting,
    statusInfo: {
      phase: ProjectPhase.Quoting,
      nextStep: "Place Sample Orders",
      waitingOn: ProjectWaitingStatus.Customer,
    },
    pendingTaskCount: 0,
    imageUrl: "/images/demo/projects/Yellow Backpack.png",
    orders: [],
    quotes: [],
    attachments: [],
  },
  "4": {
    id: "4",
    name: "Colorful Packaging Box",
    createdAt: new Date("2022-10-12"),
    phase: ProjectPhase.Sample,
    statusInfo: {
      phase: ProjectPhase.Sample,
      nextStep: "Complete Tasks",
      waitingOn: ProjectWaitingStatus.Customer,
    },
    pendingTaskCount: 1,
    imageUrl: "/images/demo/projects/Colorful Packaging Box.png",
    orders: [orders["4-0"]!],
    quotes: [],
    attachments: [],
  },
  "5": {
    id: "5",
    name: "Fluffy White Cat Plushie",
    createdAt: new Date("2022-10-20"),
    phase: ProjectPhase.Sample,
    statusInfo: {
      phase: ProjectPhase.Sample,
      nextStep: "Complete Tasks",
      waitingOn: ProjectWaitingStatus.Customer,
    },
    pendingTaskCount: 1,
    imageUrl: "/images/demo/projects/Fluffy White Cat Plushie.png",
    orders: [orders["5-0"]!],
    quotes: [],
    attachments: [],
  },
  "6": {
    id: "6",
    name: "Green Desk Fan",
    createdAt: new Date("2022-10-29"),
    phase: ProjectPhase.Sample,
    statusInfo: {
      phase: ProjectPhase.Sample,
      nextStep: "Complete Tasks",
      waitingOn: ProjectWaitingStatus.Customer,
    },
    pendingTaskCount: 1,
    imageUrl: "/images/demo/projects/Green Desk Fan.png",
    orders: [orders["6-1"]!, orders["6-0"]!],
    quotes: [],
    attachments: [],
  },
  "7": {
    id: "7",
    name: "Lavender Phone Stand",
    createdAt: new Date("2022-12-02"),
    phase: ProjectPhase.Sample,
    statusInfo: {
      phase: ProjectPhase.Sample,
      nextStep: "Waiting for Production",
      waitingOn: ProjectWaitingStatus.Vendor,
    },
    pendingTaskCount: 0,
    imageUrl: "/images/demo/projects/Lavender Phone Stand.png",
    orders: [orders["7-0"]!],
    quotes: [],
    attachments: [],
  },
  "8": {
    id: "8",
    name: "Orange Glass Water Bottle",
    createdAt: new Date("2022-11-02"),
    phase: ProjectPhase.Sample,
    statusInfo: {
      phase: ProjectPhase.Sample,
      nextStep: "Waiting for Shipping",
      waitingOn: ProjectWaitingStatus.Vendor,
    },
    pendingTaskCount: 0,
    imageUrl: "/images/demo/projects/Orange Glass Water Bottle.png",
    orders: [orders["8-0"]!],
    quotes: [],
    attachments: [],
  },
  "9": {
    id: "9",
    name: "Pink Cloud Mug",
    createdAt: new Date("2022-11-03"),
    phase: ProjectPhase.Sample,
    statusInfo: {
      phase: ProjectPhase.Sample,
      nextStep: "Place Production Orders",
      waitingOn: ProjectWaitingStatus.Customer,
    },
    pendingTaskCount: 0,
    imageUrl: "/images/demo/projects/Pink Cloud Mug.png",
    orders: [orders["9-0"]!],
    quotes: [],
    attachments: [],
  },
  "10": {
    id: "10",
    name: "Pink Fabric Pen Pouch",
    createdAt: new Date("2022-12-02"),
    phase: ProjectPhase.Production,
    statusInfo: {
      phase: ProjectPhase.Production,
      nextStep: "Complete Tasks",
      waitingOn: ProjectWaitingStatus.Customer,
    },
    pendingTaskCount: 1,
    imageUrl: "/images/demo/projects/Pink Fabric Pen Pouch.png",
    orders: [orders["10-0"]!, orders["10-1"]!],
    quotes: [],
    attachments: [],
  },
  "11": {
    id: "11",
    name: "Rose Gold Pen",
    createdAt: new Date("2022-10-12"),
    phase: ProjectPhase.Production,
    statusInfo: {
      phase: ProjectPhase.Production,
      nextStep: "Complete Tasks",
      waitingOn: ProjectWaitingStatus.Customer,
    },
    pendingTaskCount: 1,
    imageUrl: "/images/demo/projects/Rose Gold Pen.png",
    orders: [orders["11-0"]!, orders["11-1"]!],
    quotes: [],
    attachments: [],
  },
  "12": {
    id: "12",
    name: "Sapphire Blue Candle",
    createdAt: new Date("2023-01-02"),
    phase: ProjectPhase.Production,
    statusInfo: {
      phase: ProjectPhase.Production,
      nextStep: "Waiting for Production",
      waitingOn: ProjectWaitingStatus.Vendor,
    },
    pendingTaskCount: 0,
    imageUrl: "/images/demo/projects/Sapphire Blue Candle.png",
    orders: [orders["12-0"]!, orders["12-1"]!],
    quotes: [],
    attachments: [],
  },
  "13": {
    id: "13",
    name: "Teal Blue USB Charger Keychain",
    createdAt: new Date("2022-11-22"),
    phase: ProjectPhase.Production,
    statusInfo: {
      phase: ProjectPhase.Production,
      nextStep: "Waiting for Shipping",
      waitingOn: ProjectWaitingStatus.Vendor,
    },
    pendingTaskCount: 0,
    imageUrl: "/images/demo/projects/Teal Blue USB Charger Keychain.png",
    orders: [orders["13-0"]!, orders["13-1"]!],
    quotes: [],
    attachments: [],
  },
  "14": {
    id: "14",
    name: "White V-Neck T-Shirt with Embroidered Flowers",
    createdAt: new Date("2022-11-22"),
    phase: ProjectPhase.Production,
    statusInfo: {
      phase: ProjectPhase.Production,
      nextStep: "Waiting for Shipping",
      waitingOn: ProjectWaitingStatus.Vendor,
    },
    pendingTaskCount: 0,
    imageUrl:
      "/images/demo/projects/White V-Neck T-Shirt with Embroidered Flowers.png",
    orders: [orders["14-0"]!, orders["14-1"]!],
    quotes: [],
    attachments: [],
  },
};

export const projectsInQuoting: Project[] = Object.values(projects).filter(
  (project) => project.phase === ProjectPhase.Quoting
);

export const projectsInSampling: Project[] = Object.values(projects).filter(
  (project) => project.phase === ProjectPhase.Sample
);

export const projectsInProduction: Project[] = Object.values(projects).filter(
  (project) => project.phase === ProjectPhase.Production
);
