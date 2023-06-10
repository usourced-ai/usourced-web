import { OrderSummaryCard } from "./OrderSummaryCard";

export function OrderGalleryCard() {
  return (
    <div className="rounded-lg bg-slate-50 shadow">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <h2 className="font-semibold leading-6 text-gray-900">Orders</h2>
        <div className="mt-4 flex flex-row">
          <OrderSummaryCard />
        </div>
      </div>
    </div>
  );
}
