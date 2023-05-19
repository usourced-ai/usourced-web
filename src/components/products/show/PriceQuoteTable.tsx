export type PricingTier = {
  minimumQuantity: number;
  pricePerItem: number;
};

export function getPricePerItem(
  quantity: number,
  pricingTiers: PricingTier[]
): number {
  const tier = pricingTiers.find((t) => quantity >= t.minimumQuantity);
  return tier
    ? tier.pricePerItem
    : pricingTiers[pricingTiers.length - 1]!.pricePerItem;
}

function getQuantityRows(pricingTiers: PricingTier[]) {
  return Array.from(Array(pricingTiers.length + 1), (_, i) => {
    const quantity = (i + 1) * 100;
    return {
      name: quantity,
      standard_shipping_unit_price: getPricePerItem(quantity, pricingTiers),
      express_shipping_unit_price: getPricePerItem(quantity, pricingTiers) + 5,
    };
  });
}

export function PriceQuoteTable({
  pricingTiers,
}: {
  pricingTiers: PricingTier[];
}) {
  const rows = getQuantityRows(pricingTiers);
  return (
    <div className="overflow-hidden rounded-md shadow ring-1 ring-black/5">
      <table className="min-w-full divide-y divide-gray-300 text-left text-sm">
        <thead>
          <tr>
            <th scope="column" className="px-3 py-2">
              Quantity
            </th>
            <th scope="column" className="px-3 py-2">
              Unit Price (Standard)
            </th>
            <th scope="column" className="px-3 py-2">
              Unit Price (Express)
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {rows.map((row, i) => (
            <tr key={row.name}>
              <th scope="row" className="px-3 py-2">
                {row.name}
                {i === rows.length - 1 ? "+" : ""}
              </th>
              <td className="px-3 py-2">
                ${row.standard_shipping_unit_price.toFixed(2)}
              </td>
              <td className="px-3 py-2">
                ${row.express_shipping_unit_price.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
