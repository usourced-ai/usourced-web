import { Listbox, Transition } from "@headlessui/react";
import {
  CalendarDaysIcon,
  ChartBarIcon,
  CheckIcon,
  ChevronDownIcon,
  ListBulletIcon,
} from "@heroicons/react/24/outline";
import classNames from "classnames";
import { Fragment, useState } from "react";

const VIEW_MODES = [
  {
    name: "Grid View",
    description: "View projects by their phases.",
    icon: ChartBarIcon,
  },
  {
    name: "List View",
    description: "View project details in a list.",
    icon: ListBulletIcon,
  },
  {
    name: "Calendar View",
    description: "View project timelines on a calendar.",
    icon: CalendarDaysIcon,
  },
];

export function ViewModeSelector() {
  const [selectedViewMode, setSelectedViewMode] = useState(VIEW_MODES[0]!);
  return (
    <Listbox as="div" value={selectedViewMode} onChange={setSelectedViewMode}>
      {({ open }) => (
        <>
          <Listbox.Label className="sr-only">Change view mode</Listbox.Label>
          <div className="relative">
            <div className="inline-flex divide-x divide-teal-600 rounded-md shadow-sm">
              <div className="inline-flex divide-x divide-teal-600 rounded-md shadow-sm">
                <div className="inline-flex items-center gap-x-1.5 rounded-l-md bg-teal-500 px-3 py-2 text-white shadow-sm">
                  <selectedViewMode.icon
                    className="-ml-0.5 h-5 w-5"
                    aria-hidden="true"
                  />
                  <p className="text-sm font-semibold">
                    {selectedViewMode.name}
                  </p>
                </div>
                <Listbox.Button className="inline-flex items-center rounded-l-none rounded-r-md bg-teal-500 p-2 hover:bg-teal-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50">
                  <span className="sr-only">Change view mode</span>
                  <ChevronDownIcon
                    className="h-5 w-5 text-white"
                    aria-hidden="true"
                  />
                </Listbox.Button>
              </div>
            </div>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute left-0 z-10 -mr-1 mt-2 w-72 origin-top-right divide-y divide-gray-200 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none sm:left-auto sm:right-0">
                {VIEW_MODES.map((option) => (
                  <Listbox.Option
                    key={option.name}
                    className={({ active }) =>
                      classNames(
                        active ? "bg-teal-500 text-white" : "text-gray-900",
                        "cursor-pointer select-none p-4 text-sm"
                      )
                    }
                    value={option}
                  >
                    {({ selected, active }) => (
                      <div className="flex flex-col">
                        <div className="flex justify-between">
                          <p
                            className={
                              selected ? "font-semibold" : "font-normal"
                            }
                          >
                            {option.name}
                          </p>
                          {selected ? (
                            <span
                              className={
                                active ? "text-white" : "text-teal-500"
                              }
                            >
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </div>
                        <p
                          className={classNames(
                            active ? "text-teal-200" : "text-gray-500",
                            "mt-2"
                          )}
                        >
                          {option.description}
                        </p>
                      </div>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
