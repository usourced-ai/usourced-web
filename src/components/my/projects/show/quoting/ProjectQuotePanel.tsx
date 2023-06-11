import { Tab } from "@headlessui/react";
import clsx from "clsx";
import { Fragment } from "react";
import { FaFolderOpen } from "react-icons/fa";

import { PriceQuoteTableView } from "@/components/my/projects/show/quoting/PriceQuoteTableView";
import type { ProjectQuote } from "@/models/project-quote";

function ProjectQuoteTabGroup({ quotes }: { quotes: ProjectQuote[] }) {
  return (
    <div className="mx-auto mt-16 w-full max-w-2xl lg:col-span-4 lg:mt-0 lg:max-w-none">
      <Tab.Group as="div">
        <div className="border-b border-gray-200">
          <Tab.List className="-mb-px flex space-x-8">
            {quotes.map((quote) => (
              <Tab
                key={quote.id}
                className={({ selected }) =>
                  clsx(
                    selected
                      ? "border-blue-600 text-blue-600"
                      : "border-transparent text-gray-700 hover:border-gray-300 hover:text-gray-800",
                    "whitespace-nowrap border-b-2 py-4 text-sm font-medium"
                  )
                }
              >
                {quote.title}
              </Tab>
            ))}
          </Tab.List>
        </div>
        <Tab.Panels as={Fragment}>
          {quotes.map((quote) => (
            <Tab.Panel key={quote.id}>
              <PriceQuoteTableView priceQuoteTable={quote.priceQuoteTable} />
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export function EmptyView() {
  return (
    <div className="text-center">
      <FaFolderOpen className="mx-auto h-12 w-12 text-gray-400" />
      <h3 className="mt-2 text-sm font-semibold text-gray-900">
        Awaiting Project Quotes
      </h3>
      <p className="mx-auto mt-1 max-w-xl text-sm text-gray-500">
        We are getting detailed quotes for your project from our vendor network.
        We will notify you when they become ready.
      </p>
    </div>
  );
}

export function ProjectQuotePanel({ quotes }: { quotes: ProjectQuote[] }) {
  return (
    <div className="rounded-lg bg-white shadow">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <h2 className="font-semibold leading-6 text-gray-900">
          Project Quotes
        </h2>
        {quotes.length === 0 ? (
          <EmptyView />
        ) : (
          <ProjectQuoteTabGroup quotes={quotes} />
        )}
      </div>
    </div>
  );
}
