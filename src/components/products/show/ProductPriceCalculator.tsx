import moment from "moment";
import { useState } from "react";

import { InputSlider } from "@/components/common/InputSlider";

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
      <table className="mt-4 min-w-full divide-y divide-gray-300 text-left text-sm">
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
              {moment().add(18, "day").toDate().toLocaleDateString()}
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
              {moment().add(32, "day").toDate().toLocaleDateString()}
            </td>
          </tr>
        </tbody>
      </table>
      <h3 className="my-4 text-2xl font-medium text-gray-900">Total: $100</h3>
    </div>
  );
}
