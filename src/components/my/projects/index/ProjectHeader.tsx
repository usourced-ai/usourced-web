import { ChevronRightIcon, PencilIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

import { ViewModeSelector } from "./ViewModeSelector";

function BreadcrumbNav() {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        <li>
          <div>
            <Link
              href="/my/projects"
              className="text-sm font-medium text-gray-500 hover:text-gray-700"
            >
              Projects
            </Link>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <ChevronRightIcon
              className="h-4 w-4 shrink-0 text-gray-400"
              aria-hidden="true"
            />
            <Link
              href="/my/projects"
              className="ml-2 text-sm font-medium text-gray-500 hover:text-gray-700"
            >
              All Projects
            </Link>
          </div>
        </li>
      </ol>
    </nav>
  );
}

export function ProjectHeader() {
  return (
    <header className="bg-slate-50 py-8">
      <div className="mx-auto px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:px-8 xl:px-16">
        <div className="min-w-0 flex-1">
          <BreadcrumbNav />
          <h1 className="mt-2 text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            My Projects
          </h1>
        </div>
        <div className="mt-5 flex space-x-4 lg:ml-4 lg:mt-0">
          <span>
            <button
              type="button"
              className="inline-flex items-center gap-x-1.5 rounded-lg bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              <PencilIcon
                className="h-4 w-4 text-gray-400"
                aria-hidden="true"
              />
              New Project
            </button>
          </span>
          <span>
            <ViewModeSelector />
          </span>
        </div>
      </div>
    </header>
  );
}
