import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { FaFeatherAlt } from "react-icons/fa";

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
    <div className="mx-auto flex h-32 w-32 items-center justify-center text-6xl text-gray-700">
      <FaFeatherAlt />
    </div>
  );
}

export function ProjectSummaryCard({ project }: { project: Project }) {
  const projectLink = `/my/projects/${project.id}`;
  return (
    <div className="relative flex w-64 flex-col rounded-lg text-center shadow">
      <div className="absolute right-2 top-2 text-gray-300">
        <EllipsisHorizontalIcon className="h-5 w-5 cursor-pointer" />
      </div>
      <div className="bg-slate-50 py-4">
        <h3 className="mt-2 font-medium text-gray-900">
          <Link href={projectLink}>{project.name}</Link>
        </h3>
      </div>
      <div className="px-2 pb-4">
        <Link href={projectLink}>
          <ProjectImageView project={project} />
        </Link>
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
