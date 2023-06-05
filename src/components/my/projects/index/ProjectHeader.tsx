import { PencilIcon } from "@heroicons/react/24/outline";

import { AppButton } from "@/components/common/AppButton";
import { BreadcrumbNav } from "@/components/my/projects/BreadcrumbNav";
import { ViewModeSelector } from "@/components/my/projects/index/ViewModeSelector";

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
          <AppButton icon={PencilIcon} label="New Project" />
          <ViewModeSelector />
        </div>
      </div>
    </header>
  );
}
