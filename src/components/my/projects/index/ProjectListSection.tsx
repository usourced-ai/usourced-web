import { ProjectSummaryCard } from "@/components/my/projects/index/ProjectSummaryCard";
import type { Project } from "@/models/project";

function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <ul className="flex flex-row gap-6 overflow-x-auto pb-4">
      {projects.map((project) => (
        <li key={project.id}>
          <ProjectSummaryCard project={project} />
        </li>
      ))}
    </ul>
  );
}

export function ProjectListSection({
  title,
  projects,
}: {
  title: string;
  projects: Project[];
}) {
  return (
    <section>
      <div className="mt-4 border-b border-slate-100 pb-2">
        <h2 className="font-medium text-gray-700">
          {title}
          <span> ({projects.length})</span>
        </h2>
      </div>
      {projects.length > 0 ? (
        <div className="mt-4">
          <ProjectList projects={projects} />
        </div>
      ) : null}
    </section>
  );
}
