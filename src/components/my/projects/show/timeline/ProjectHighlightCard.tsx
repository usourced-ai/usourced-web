import { UserCircleIcon } from "@heroicons/react/24/outline";

export function ProjectHighlightCard() {
  return (
    <div>
      <h2 className="sr-only">Summary</h2>
      <div className="rounded-lg bg-slate-50 py-6 shadow-sm ring-1 ring-gray-900/5">
        <dl className="flex flex-wrap">
          <div className="flex-auto pl-6">
            <dt className="text-sm font-semibold leading-6 text-gray-900">
              Project Phase
            </dt>
            <dd className="mt-1 text-base font-semibold leading-6 text-gray-900">
              Sample
            </dd>
          </div>
          <div className="flex-none self-end px-6 pt-4">
            <dt className="sr-only">Status</dt>
            <dd className="rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-600 ring-1 ring-inset ring-green-600/20">
              Waiting on Client
            </dd>
          </div>
          <div className="mt-6 flex w-full flex-none gap-x-4 border-t border-gray-900/5 px-6 pt-6">
            <dt className="flex-none">
              <span className="sr-only">Client</span>
              <UserCircleIcon
                className="h-6 w-5 text-gray-400"
                aria-hidden="true"
              />
            </dt>
            <dd className="text-sm font-medium leading-6 text-gray-900">
              Next Step: Confirm Production Order
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
