import type { Attachment } from "@/models/attachment";

export type PriceQuoteRow = {
  name: string;
  values: string[];
};

export type PriceQuoteTable = {
  header: string[];
  rows: PriceQuoteRow[];
};

export type ProjectQuote = {
  id: string;
  title: string;
  notes: string;
  createdAt: Date;
  updatedAt: Date;
  priceQuoteTable: PriceQuoteTable;
  attachments: Attachment[];
};
