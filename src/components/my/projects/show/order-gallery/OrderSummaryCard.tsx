import { PaperClipIcon } from "@heroicons/react/20/solid";
import { TruckIcon } from "@heroicons/react/24/outline";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";

dayjs.extend(localizedFormat);

const attributes = [
  {
    name: "Production Start",
    value: dayjs().subtract(7, "day").format("L"),
  },
  {
    name: "Production Completion",
    value: dayjs().subtract(1, "day").format("L"),
  },
  {
    name: "Estimated Delivery",
    value: dayjs().add(2, "day").format("L"),
  },
];

export function OrderSummaryCard() {
  return (
    <div className="max-w-xl overflow-hidden bg-white shadow sm:rounded-lg">
      <div className="px-4 py-6 sm:px-6">
        <h3 className="text-base font-semibold leading-7 text-gray-900">
          Sample Order #1
        </h3>
      </div>
      <div className="border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          {attributes.map((attribute) => (
            <div
              key={attribute.name}
              className="px-4 py-5 sm:flex sm:flex-row sm:gap-4 sm:px-6"
            >
              <dt className="w-40 text-sm font-medium text-gray-500">
                {attribute.name}
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0">
                {attribute.value}
              </dd>
            </div>
          ))}
          <div className="px-4 py-5 sm:flex sm:flex-row sm:gap-4 sm:px-6">
            <dt className="w-40 text-sm font-medium text-gray-500">Invoices</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0">
              <ul className="w-72 divide-y divide-gray-100 rounded-md border border-gray-200">
                <li className="flex cursor-pointer items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon
                      className="h-5 w-5 shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">Sample Fee</span>
                      <span className="shrink-0 text-gray-400">$100.00</span>
                    </div>
                  </div>
                  <div className="ml-4 shrink-0">
                    <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                      Paid
                    </span>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
          <div className="px-4 py-5 sm:flex sm:flex-row sm:gap-4 sm:px-6">
            <dt className="w-40 text-sm font-medium text-gray-500">
              Shipments
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0">
              <ul className="w-72 divide-y divide-gray-100 rounded-md border border-gray-200">
                <li className="flex cursor-pointer items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <TruckIcon
                      className="h-5 w-5 shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">Air Shipping</span>
                    </div>
                  </div>
                  <div className="ml-4 shrink-0">
                    <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                      Shipped
                    </span>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
