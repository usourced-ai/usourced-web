export enum OrderType {
  Sample = "Sample",
  Production = "Production",
}

export enum OrderStatus {
  Draft = "draft",
  PendingProduction = "pre-production",
  InProduction = "producing",
  PendingShipment = "pre-shipment",
  Shipping = "shipping",
  Delivered = "delivered",
  Cancelled = "cancelled",
}

export type Order = {
  id: string;
  name: string;
  createdAt: Date;
  type: OrderType;
  status: OrderStatus;
};
