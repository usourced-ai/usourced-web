import { Disclosure } from "@headlessui/react";

export function DemoBanner() {
  return (
    <Disclosure defaultOpen>
      {() => (
        <Disclosure.Panel>
          <div className="flex items-center justify-center gap-x-6 bg-brand px-6 py-1 sm:px-3 sm:before:flex-1">
            <p className="flex-auto font-brand text-base uppercase text-cream">
              Demo site - we are launching in Q3 2023
            </p>
          </div>
        </Disclosure.Panel>
      )}
    </Disclosure>
  );
}
