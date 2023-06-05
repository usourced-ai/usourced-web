import clsx from "clsx";

import { Avatar } from "@/components/common/Avatar";
import type { ProjectFile } from "@/models/project-file";

export function ProjectFileGallery({
  projectFiles,
}: {
  projectFiles: ProjectFile[];
}) {
  return (
    <section className="mt-4">
      <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {projectFiles.map((file) => (
          <li key={file.id} className="relative">
            <div
              className={clsx(
                "focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100",
                "group block aspect-square w-full overflow-hidden rounded-lg bg-gray-100"
              )}
            >
              <img
                src={file.previewUrl}
                alt=""
                className={clsx(
                  "group-hover:opacity-75",
                  "pointer-events-none object-cover"
                )}
              />
              <button
                type="button"
                className="absolute inset-0 focus:outline-none"
              >
                <span className="sr-only">View details for {file.title}</span>
              </button>
            </div>
            <div className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
              {file.title}
            </div>
            <div className="mt-1 flex text-sm font-medium text-gray-500">
              <Avatar size={5} user={file.owner} />
              <span className="ml-1">{file.owner.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
