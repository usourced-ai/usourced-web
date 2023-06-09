import clsx from "clsx";
import Link from "next/link";
import { FaFileAlt } from "react-icons/fa";

import { type Order, OrderStatus } from "@/models/order";

function OrderStatusDot({ status }: { status: OrderStatus }) {
  return (
    <span
      className={clsx("inline-flex h-1.5 w-1.5 rounded-full", {
        "bg-red-400": status === OrderStatus.Draft,
        "bg-yellow-400": status === OrderStatus.PendingProduction,
        "bg-green-400": status === OrderStatus.InProduction,
        "bg-blue-400": status === OrderStatus.Shipping,
        "bg-purple-400": status === OrderStatus.Delivered,
        "bg-gray-400": status === OrderStatus.Cancelled,
      })}
    />
  );
}

function OrderStatusBadge({ order }: { order: Order }) {
  return (
    <span className="inline-flex shrink-0 items-center gap-x-1 rounded-full px-2 py-0.5 text-xs text-gray-500 ring-1 ring-inset ring-gray-200">
      <OrderStatusDot status={order.status} />
      {order.status}
    </span>
  );
}

export function OrderBadge({ order }: { order: Order }) {
  return (
    <Link
      href={`/my/orders/${order.id}`}
      className="inline-flex w-full items-center justify-center gap-x-2 rounded-md bg-white px-3 py-1.5 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200"
    >
      <FaFileAlt className="shrink-0" />
      <span className="truncate">{order.name}</span>
      <OrderStatusBadge order={order} />
    </Link>
  );
}
