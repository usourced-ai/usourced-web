import classNames from "classnames";
import pluralize from "pluralize";

import { type Project, ProjectPhase } from "@/models/project";

export function ProjectStatusBadge({ project }: { project: Project }) {
  return (
    <span
      className={classNames(
        "inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset",
        project.pendingTaskCount > 0
          ? "bg-red-50 text-red-700 ring-red-600/20"
          : {
              "bg-yellow-50 text-yellow-700 ring-yellow-600/20":
                project.phase === ProjectPhase.Quoting,
              "bg-blue-50 text-blue-700 ring-blue-600/20":
                project.phase === ProjectPhase.Sample,
              "bg-green-50 text-green-700 ring-green-600/20":
                project.phase === ProjectPhase.Production,
              "bg-gray-50 text-gray-700 ring-gray-600/20":
                project.phase === ProjectPhase.Completed,
            }
      )}
    >
      {project.phase}
      {project.pendingTaskCount > 0 && (
        <span className="ml-1">
          ({pluralize("task", project.pendingTaskCount, true)})
        </span>
      )}
    </span>
  );
}
