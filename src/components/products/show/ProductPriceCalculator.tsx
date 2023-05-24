import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import utc from "dayjs/plugin/utc";
import { useState } from "react";

import { InputSlider } from "@/components/common/InputSlider";

import type { PricingTier } from "./PriceQuoteTable";
import { getPricePerItem } from "./PriceQuoteTable";

dayjs.extend(localizedFormat);
dayjs.extend(utc);

function getTotalPrice(
  quantity: number,
  expressPercentage: number,
  pricingTiers: PricingTier[]
): number {
  const EXPRESS_PRICE_PER_ITEM = 5;
  const pricePerItem = getPricePerItem(quantity, pricingTiers);
  const expressPrice =
    (EXPRESS_PRICE_PER_ITEM * quantity * expressPercentage) / 100;
  return pricePerItem * quantity + expressPrice;
}

function ShippingTable({
  quantity,
  expressPercentage,
}: {
  quantity: number;
  expressPercentage: number;
}) {
  return (
    <table className="min-w-full divide-y divide-gray-300 text-left text-sm">
      <thead>
        <tr>
          <th scope="column" className="px-3 py-2">
            Shipping
          </th>
          <th scope="column" className="px-3 py-2">
            Quantity
          </th>
          <th scope="column" className="px-3 py-2">
            Delivery By
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        <tr>
          <th scope="row" className="px-3 py-2">
            Express
          </th>
          <td className="px-3 py-2">
            {Math.round((quantity * expressPercentage) / 100)}
          </td>
          <td className="px-3 py-2">
            {dayjs().utc().add(18, "day").format("L")}
          </td>
        </tr>
        <tr>
          <th scope="row" className="px-3 py-2">
            Standard
          </th>
          <td className="px-3 py-2">
            {Math.round(quantity * (1 - expressPercentage / 100))}
          </td>
          <td className="px-3 py-2">
            {dayjs().utc().add(32, "day").format("L")}
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export function ProductPriceCalculator({
  pricingTiers,
}: {
  pricingTiers: PricingTier[];
}) {
  const [quantity, setQuantity] = useState<number>(100);
  const [expressPercentage, setExpressPercentage] = useState<number>(10);
  const totalPrice = getTotalPrice(quantity, expressPercentage, pricingTiers);
  const totalPriceFormatted = totalPrice.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <div className="w-full rounded-lg border bg-cream p-4 shadow-lg">
      <h3 className="mb-4 text-sm font-medium text-gray-900">Quantity</h3>
      <InputSlider
        minValue={100}
        maxValue={1000}
        step={100}
        onChange={setQuantity}
      />
      <h3 className="my-4 text-sm font-medium text-gray-900">
        Express Shipping Quantity
      </h3>
      <InputSlider
        minValue={0}
        maxValue={100}
        step={10}
        unit="%"
        onChange={setExpressPercentage}
      />
      <div className="mt-4">
        <ShippingTable
          quantity={quantity}
          expressPercentage={expressPercentage}
        />
      </div>
      <h3 className="my-4 text-2xl font-medium text-gray-900">
        Total: {totalPriceFormatted}
      </h3>
    </div>
  );
}
