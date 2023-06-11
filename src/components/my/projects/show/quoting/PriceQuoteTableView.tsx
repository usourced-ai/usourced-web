import type { PriceQuoteTable } from "@/models/project-quote";

export function PriceQuoteTableView({
  priceQuoteTable,
}: {
  priceQuoteTable: PriceQuoteTable;
}) {
  return (
    <div className="mt-8 flow-root">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table className="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                {["", ...priceQuoteTable.header].map((header) => (
                  <th
                    key={header}
                    scope="col"
                    className="py-3 pl-2 text-left text-sm font-medium uppercase tracking-wider text-gray-900"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {priceQuoteTable.rows.map((row) => (
                <tr key={row.name}>
                  <td className="whitespace-nowrap py-4 pl-2 text-sm font-medium text-gray-900">
                    {row.name}
                  </td>
                  {row.values.map((value) => (
                    <td
                      key={value}
                      className="whitespace-nowrap py-4 pl-2 text-sm text-gray-500"
                    >
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
