import { type Project, ProjectPhase } from "@/models/project";

export const projectsInQuoting: Project[] = [
  {
    id: "0",
    name: "Beige Baseball Cap",
    createdAt: new Date("2023-01-03"),
    phase: ProjectPhase.Quoting,
    pendingTaskCount: 2,
    imageUrl: "/images/demo/projects/Beige Baseball Cap.png",
  },
  {
    id: "1",
    name: "Friendship Heart Necklaces",
    createdAt: new Date("2023-01-03"),
    phase: ProjectPhase.Quoting,
    pendingTaskCount: 1,
  },
  {
    id: "2",
    name: "Blue Textured Notebook",
    createdAt: new Date("2023-01-03"),
    phase: ProjectPhase.Quoting,
    pendingTaskCount: 0,
    imageUrl: "/images/demo/projects/Blue Textured Notebook.png",
  },
  {
    id: "3",
    name: "Yellow Backpack",
    createdAt: new Date("2023-01-03"),
    phase: ProjectPhase.Quoting,
    pendingTaskCount: 0,
    imageUrl: "/images/demo/projects/Yellow Backpack.png",
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
  },
  {
    id: "5",
    name: "Fluffy White Cat Plushie",
    createdAt: new Date("2022-10-20"),
    phase: ProjectPhase.Sample,
    pendingTaskCount: 1,
    imageUrl: "/images/demo/projects/Fluffy White Cat Plushie.png",
  },
  {
    id: "6",
    name: "Green Desk Fan",
    createdAt: new Date("2022-10-29"),
    phase: ProjectPhase.Sample,
    pendingTaskCount: 0,
    imageUrl: "/images/demo/projects/Green Desk Fan.png",
  },
  {
    id: "7",
    name: "Lavender Phone Stand",
    createdAt: new Date("2022-12-02"),
    phase: ProjectPhase.Sample,
    pendingTaskCount: 0,
    imageUrl: "/images/demo/projects/Lavender Phone Stand.png",
  },
  {
    id: "8",
    name: "Orange Glass Water Bottle",
    createdAt: new Date("2022-11-02"),
    phase: ProjectPhase.Sample,
    pendingTaskCount: 0,
    imageUrl: "/images/demo/projects/Orange Glass Water Bottle.png",
  },
  {
    id: "9",
    name: "Pink Cloud Mug",
    createdAt: new Date("2022-11-03"),
    phase: ProjectPhase.Sample,
    pendingTaskCount: 0,
    imageUrl: "/images/demo/projects/Pink Cloud Mug.png",
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
  },
  {
    id: "11",
    name: "Rose Gold Pen",
    createdAt: new Date("2022-10-12"),
    phase: ProjectPhase.Production,
    pendingTaskCount: 1,
    imageUrl: "/images/demo/projects/Rose Gold Pen.png",
  },
  {
    id: "12",
    name: "Sapphire Blue Candle",
    createdAt: new Date("2023-01-02"),
    phase: ProjectPhase.Production,
    pendingTaskCount: 0,
    imageUrl: "/images/demo/projects/Sapphire Blue Candle.png",
  },
  {
    id: "13",
    name: "Teal Blue USB Charger Keychain",
    createdAt: new Date("2022-11-22"),
    phase: ProjectPhase.Production,
    pendingTaskCount: 0,
    imageUrl: "/images/demo/projects/Teal Blue USB Charger Keychain.png",
  },
  {
    id: "14",
    name: "White V-Neck T-Shirt with Embroidered Flowers",
    createdAt: new Date("2022-11-22"),
    phase: ProjectPhase.Production,
    pendingTaskCount: 0,
    imageUrl:
      "/images/demo/projects/White V-Neck T-Shirt with Embroidered Flowers.png",
  },
];
