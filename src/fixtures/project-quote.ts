import type { ProjectQuote } from "@/models/project-quote";

export const projectQuote1: ProjectQuote = {
  id: "1",
  title: "Standard Version",
  notes: "This is a standard product.",
  createdAt: new Date("2021-01-01"),
  updatedAt: new Date("2021-01-01"),
  priceQuoteTable: {
    header: ["MOQ 500", "MOQ 1000"],
    rows: [
      {
        name: "Sampling Fee",
        values: ["$100", "$100"],
      },
      {
        name: "Unit Price",
        values: ["$17.19", "$15.50"],
      },
      {
        name: "Sampling Days",
        values: ["7", "7"],
      },
      {
        name: "Production Days",
        values: ["10", "10"],
      },
      {
        name: "Shipping Days (Air)",
        values: ["5", "5"],
      },
      {
        name: "Shipping Days (Ocean)",
        values: ["30", "30"],
      },
    ],
  },
  attachments: [],
};

export const projectQuote2: ProjectQuote = {
  id: "1",
  title: "Premium Version",
  notes: "Premium material, premium quality.",
  createdAt: new Date("2021-01-01"),
  updatedAt: new Date("2021-01-01"),
  priceQuoteTable: {
    header: ["MOQ 500", "MOQ 1000"],
    rows: [
      {
        name: "Sampling Fee",
        values: ["$200", "$200"],
      },
      {
        name: "Unit Price",
        values: ["$27.00", "$25.00"],
      },
      {
        name: "Sampling Days",
        values: ["7", "7"],
      },
      {
        name: "Production Days",
        values: ["14", "14"],
      },
      {
        name: "Shipping Days (Air)",
        values: ["5", "5"],
      },
      {
        name: "Shipping Days (Ocean)",
        values: ["30", "30"],
      },
    ],
  },
  attachments: [],
};
