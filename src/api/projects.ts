import { OrderStatus, OrderType } from "@/models/order";
import { type Project, ProjectPhase } from "@/models/project";

export const projectsInQuoting: Project[] = [
  {
    id: "0",
    name: "Beige Baseball Cap",
    createdAt: new Date("2023-01-03"),
    phase: ProjectPhase.Quoting,
    pendingTaskCount: 2,
    imageUrl: "/images/demo/projects/Beige Baseball Cap.png",
    orders: [],
  },
  {
    id: "1",
    name: "Friendship Heart Necklaces",
    createdAt: new Date("2023-01-03"),
    phase: ProjectPhase.Quoting,
    pendingTaskCount: 1,
    orders: [],
  },
  {
    id: "2",
    name: "Blue Textured Notebook",
    createdAt: new Date("2023-01-03"),
    phase: ProjectPhase.Quoting,
    pendingTaskCount: 0,
    imageUrl: "/images/demo/projects/Blue Textured Notebook.png",
    orders: [],
  },
  {
    id: "3",
    name: "Yellow Backpack",
    createdAt: new Date("2023-01-03"),
    phase: ProjectPhase.Quoting,
    pendingTaskCount: 0,
    imageUrl: "/images/demo/projects/Yellow Backpack.png",
    orders: [],
  },
];

export const projectsInSampling: Project[] = [
  {
    id: "4",
    name: "Colorful Packaging Box",
    createdAt: new Date("2022-10-12"),
    phase: ProjectPhase.Sample,
    pendingTaskCount: 1,
    imageUrl: "/images/demo/projects/Colorful Packaging Box.png",
    orders: [
      {
        id: "4-0",
        name: "Sample #1",
        createdAt: new Date("2022-10-19"),
        type: OrderType.Sample,
        status: OrderStatus.Draft,
      },
    ],
  },
  {
    id: "5",
    name: "Fluffy White Cat Plushie",
    createdAt: new Date("2022-10-20"),
    phase: ProjectPhase.Sample,
    pendingTaskCount: 1,
    imageUrl: "/images/demo/projects/Fluffy White Cat Plushie.png",
    orders: [
      {
        id: "5-0",
        name: "Sample #1",
        createdAt: new Date("2022-10-27"),
        type: OrderType.Sample,
        status: OrderStatus.PendingProduction,
      },
    ],
  },
  {
    id: "6",
    name: "Green Desk Fan",
    createdAt: new Date("2022-10-29"),
    phase: ProjectPhase.Sample,
    pendingTaskCount: 1,
    imageUrl: "/images/demo/projects/Green Desk Fan.png",
    orders: [
      {
        id: "6-1",
        name: "Sample #2",
        createdAt: new Date("2022-11-01"),
        type: OrderType.Sample,
        status: OrderStatus.Draft,
      },
      {
        id: "6-0",
        name: "Sample #1",
        createdAt: new Date("2022-11-01"),
        type: OrderType.Sample,
        status: OrderStatus.Delivered,
      },
    ],
  },
  {
    id: "7",
    name: "Lavender Phone Stand",
    createdAt: new Date("2022-12-02"),
    phase: ProjectPhase.Sample,
    pendingTaskCount: 0,
    imageUrl: "/images/demo/projects/Lavender Phone Stand.png",
    orders: [
      {
        id: "7-0",
        name: "Sample #1",
        createdAt: new Date("2022-11-01"),
        type: OrderType.Sample,
        status: OrderStatus.InProduction,
      },
    ],
  },
  {
    id: "8",
    name: "Orange Glass Water Bottle",
    createdAt: new Date("2022-11-02"),
    phase: ProjectPhase.Sample,
    pendingTaskCount: 0,
    imageUrl: "/images/demo/projects/Orange Glass Water Bottle.png",
    orders: [
      {
        id: "8-0",
        name: "Sample #1",
        createdAt: new Date("2022-11-09"),
        type: OrderType.Sample,
        status: OrderStatus.Shipping,
      },
    ],
  },
  {
    id: "9",
    name: "Pink Cloud Mug",
    createdAt: new Date("2022-11-03"),
    phase: ProjectPhase.Sample,
    pendingTaskCount: 0,
    imageUrl: "/images/demo/projects/Pink Cloud Mug.png",
    orders: [
      {
        id: "9-0",
        name: "Sample #1",
        createdAt: new Date("2022-11-09"),
        type: OrderType.Sample,
        status: OrderStatus.Delivered,
      },
    ],
  },
];

export const projectsInProduction: Project[] = [
  {
    id: "10",
    name: "Pink Fabric Pen Pouch",
    createdAt: new Date("2022-12-02"),
    phase: ProjectPhase.Production,
    pendingTaskCount: 1,
    imageUrl: "/images/demo/projects/Pink Fabric Pen Pouch.png",
    orders: [
      {
        id: "10-0",
        name: "Production #1",
        createdAt: new Date("2022-12-10"),
        type: OrderType.Production,
        status: OrderStatus.Draft,
      },
      {
        id: "10-1",
        name: "Sample #1",
        createdAt: new Date("2022-12-05"),
        type: OrderType.Sample,
        status: OrderStatus.Delivered,
      },
    ],
  },
  {
    id: "11",
    name: "Rose Gold Pen",
    createdAt: new Date("2022-10-12"),
    phase: ProjectPhase.Production,
    pendingTaskCount: 1,
    imageUrl: "/images/demo/projects/Rose Gold Pen.png",
    orders: [
      {
        id: "11-0",
        name: "Production #1",
        createdAt: new Date("2022-12-10"),
        type: OrderType.Production,
        status: OrderStatus.PendingProduction,
      },
      {
        id: "11-1",
        name: "Sample #1",
        createdAt: new Date("2022-12-05"),
        type: OrderType.Sample,
        status: OrderStatus.Delivered,
      },
    ],
  },
  {
    id: "12",
    name: "Sapphire Blue Candle",
    createdAt: new Date("2023-01-02"),
    phase: ProjectPhase.Production,
    pendingTaskCount: 0,
    imageUrl: "/images/demo/projects/Sapphire Blue Candle.png",
    orders: [
      {
        id: "12-0",
        name: "Production #1",
        createdAt: new Date("2023-01-10"),
        type: OrderType.Production,
        status: OrderStatus.InProduction,
      },
      {
        id: "12-1",
        name: "Sample #1",
        createdAt: new Date("2023-01-05"),
        type: OrderType.Sample,
        status: OrderStatus.Delivered,
      },
    ],
  },
  {
    id: "13",
    name: "Teal Blue USB Charger Keychain",
    createdAt: new Date("2022-11-22"),
    phase: ProjectPhase.Production,
    pendingTaskCount: 0,
    imageUrl: "/images/demo/projects/Teal Blue USB Charger Keychain.png",
    orders: [
      {
        id: "13-0",
        name: "Production #1",
        createdAt: new Date("2023-01-10"),
        type: OrderType.Production,
        status: OrderStatus.Shipping,
      },
      {
        id: "13-1",
        name: "Sample #1",
        createdAt: new Date("2023-01-05"),
        type: OrderType.Sample,
        status: OrderStatus.Delivered,
      },
    ],
  },
  {
    id: "14",
    name: "White V-Neck T-Shirt with Embroidered Flowers",
    createdAt: new Date("2022-11-22"),
    phase: ProjectPhase.Production,
    pendingTaskCount: 0,
    imageUrl:
      "/images/demo/projects/White V-Neck T-Shirt with Embroidered Flowers.png",
    orders: [
      {
        id: "14-0",
        name: "Production #1",
        createdAt: new Date("2023-01-10"),
        type: OrderType.Production,
        status: OrderStatus.Shipping,
      },
      {
        id: "14-1",
        name: "Sample #1",
        createdAt: new Date("2023-01-05"),
        type: OrderType.Sample,
        status: OrderStatus.Delivered,
      },
    ],
  },
];
