import { PriceQuoteTableView } from "@/components/my/projects/show/quoting/PriceQuoteTableView";

export function ProjectQuoteGalleryCard() {
  return (
    <div className="rounded-lg bg-white shadow">
      <div className="flex flex-1 items-stretch overflow-hidden">
        <div className="flex-1 overflow-y-auto">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <h2 className="font-semibold leading-6 text-gray-900">
              Project Quotes
            </h2>
            <PriceQuoteTableView />
          </div>
        </div>
      </div>
    </div>
  );
}
