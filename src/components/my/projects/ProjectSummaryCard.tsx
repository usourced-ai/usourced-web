import { FaExpandArrowsAlt, FaFeatherAlt } from "react-icons/fa";

import type { Project } from "@/models/project";

import { ProjectStatusBadge } from "./ProjectStatusBadge";

function ProjectImageView({ project }: { project: Project }) {
  return project.imageUrl ? (
    <img
      className="mx-auto h-32 w-32 shrink-0"
      src={project.imageUrl}
      alt={project.name}
    />
  ) : (
    <div className="mx-auto flex h-32 w-32 items-center justify-center text-6xl">
      <FaFeatherAlt />
    </div>
  );
}

export function ProjectSummaryCard({ project }: { project: Project }) {
  return (
    <div className="relative flex w-60 flex-col rounded-lg bg-white text-center shadow">
      <div className="absolute right-2 top-2 text-gray-300">
        <FaExpandArrowsAlt />
      </div>
      <div className="flex flex-1 flex-col p-4 pt-2">
        <ProjectImageView project={project} />
        <h3 className="mt-2 font-medium text-gray-900">{project.name}</h3>
        <dl className="mt-2 flex grow flex-col justify-between">
          <dd>
            <ProjectStatusBadge project={project} />
          </dd>
          <dd className="mt-3 text-sm text-gray-500">No sample orders</dd>
          <dd className="mt-1 text-sm text-gray-500">No production orders</dd>
        </dl>
      </div>
    </div>
  );
}
