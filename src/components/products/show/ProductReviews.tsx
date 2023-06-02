import { StarIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";

export function ProductReviews({ rating }: { rating: number }) {
  return (
    <div className="mt-4">
      <h2 className="sr-only">Reviews</h2>
      <div className="flex items-center">
        <p className="text-sm text-gray-700">
          {rating}
          <span className="sr-only"> out of 5 stars</span>
        </p>
        <div className="ml-1 flex items-center">
          {[0, 1, 2, 3, 4].map((r) => (
            <StarIcon
              key={r}
              className={clsx(
                rating > r ? "text-yellow-400" : "text-gray-200",
                "h-5 w-5 shrink-0"
              )}
              aria-hidden="true"
            />
          ))}
        </div>
        <div aria-hidden="true" className="ml-4 text-sm text-gray-300">
          ·
        </div>
        <div className="ml-4 flex">
          <button
            type="button"
            className="text-sm font-medium text-brand hover:text-teal-700"
          >
            See all 99 reviews
          </button>
        </div>
      </div>
    </div>
  );
}
