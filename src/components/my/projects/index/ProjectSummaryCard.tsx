import Image from "next/image";
import { FaExpandArrowsAlt, FaFeatherAlt } from "react-icons/fa";

import { OrderBadge } from "@/components/my/orders/OrderBadge";
import { ProjectStatusBadge } from "@/components/my/projects/index/ProjectStatusBadge";
import type { Project } from "@/models/project";

function ProjectImageView({ project }: { project: Project }) {
  return project.imageUrl ? (
    <Image
      width={128}
      height={128}
      src={project.imageUrl}
      alt={project.name}
      className="mx-auto h-32 w-32 shrink-0"
    />
  ) : (
    <div className="mx-auto flex h-32 w-32 items-center justify-center text-6xl">
      <FaFeatherAlt />
    </div>
  );
}

export function ProjectSummaryCard({ project }: { project: Project }) {
  return (
    <div className="relative flex w-64 flex-col rounded-lg bg-slate-50 text-center shadow">
      <div className="absolute right-2 top-2 text-gray-300">
        <FaExpandArrowsAlt />
      </div>
      <div className="flex flex-1 flex-col p-4 pt-2">
        <ProjectImageView project={project} />
        <h3 className="mt-2 font-medium text-gray-900">{project.name}</h3>
        <ul className="mt-2 flex grow flex-col justify-between">
          <li>
            <ProjectStatusBadge project={project} />
          </li>
          {project.orders.length === 0 ? (
            <li className="mt-3 text-sm text-gray-500">No orders yet</li>
          ) : (
            <li>
              <ul className="mt-4 space-y-2">
                {project.orders.map((order) => (
                  <li key={order.id} className="mx-auto">
                    <OrderBadge order={order} />
                  </li>
                ))}
              </ul>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
