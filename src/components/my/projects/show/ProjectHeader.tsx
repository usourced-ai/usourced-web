import { PencilIcon } from "@heroicons/react/24/outline";

import { AppButton } from "@/components/common/AppButton";
import { BreadcrumbNav } from "@/components/my/projects/BreadcrumbNav";

const navItems = [{ label: "My Projects", href: "/my/projects" }];

export function ProjectHeader({ projectName }: { projectName: string }) {
  return (
    <header className="bg-slate-50 py-8">
      <div className="mx-auto px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:px-8 xl:px-16">
        <div className="min-w-0 flex-1">
          <BreadcrumbNav items={navItems} />
          <h1 className="mt-2 text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            {projectName}
          </h1>
        </div>
        <div className="mt-5 flex space-x-4 lg:ml-4 lg:mt-0">
          <AppButton icon={PencilIcon} label="New Project" />
        </div>
      </div>
    </header>
  );
}
