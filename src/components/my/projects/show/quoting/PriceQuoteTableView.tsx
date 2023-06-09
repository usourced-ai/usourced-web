import type { PriceQuoteTable } from "@/models/project-quote";

const table: PriceQuoteTable = {
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
      values: ["30", "30"],
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
};

export function PriceQuoteTableView() {
  return (
    <div className="mt-8 flow-root">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table className="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                {["", ...table.header].map((header) => (
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
              {table.rows.map((row) => (
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
