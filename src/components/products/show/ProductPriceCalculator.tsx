import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import utc from "dayjs/plugin/utc";
import { useState } from "react";

import { InputSlider } from "@/components/common/InputSlider";

dayjs.extend(localizedFormat);
dayjs.extend(utc);

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

export function ProductPriceCalculator() {
  const [quantity, setQuantity] = useState<number>(100);
  const [expressPercentage, setExpressPercentage] = useState<number>(10);
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
      <h3 className="my-4 text-2xl font-medium text-gray-900">Total: $100</h3>
    </div>
  );
}
