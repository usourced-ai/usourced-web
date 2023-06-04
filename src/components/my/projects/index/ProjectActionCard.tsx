import Image from "next/image";
import Link from "next/link";
import { FaExpandArrowsAlt, FaFeatherAlt } from "react-icons/fa";

import { Button } from "@/components/common/Button";
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

export function ProjectActionCard({ project }: { project: Project }) {
  const projectLink = `/my/projects/${project.id}`;
  return (
    <div className="relative flex w-64 flex-col rounded-lg bg-white text-center shadow">
      <div className="absolute right-2 top-2 text-gray-300">
        <Link href={projectLink}>
          <FaExpandArrowsAlt />
        </Link>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <Link href={projectLink}>
          <ProjectImageView project={project} />
        </Link>
        <h3 className="mt-2 font-medium text-gray-900">
          <Link href={projectLink}>{project.name}</Link>
        </h3>
        <ul className="mt-2 flex grow flex-col justify-between">
          <li>
            <Button size="sm">Pay Sample Invoice $200</Button>
          </li>
        </ul>
      </div>
    </div>
  );
}
