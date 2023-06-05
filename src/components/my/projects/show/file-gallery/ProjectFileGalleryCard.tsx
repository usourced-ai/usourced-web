import { ProjectFileEmptyGallery } from "@/components/my/projects/show/file-gallery/ProjectFileEmptyGallery";
import { ProjectFileGallery } from "@/components/my/projects/show/file-gallery/ProjectFileGallery";
import type { ProjectFile } from "@/models/project-file";

export function ProjectFileGalleryCard({
  projectFiles,
}: {
  projectFiles: ProjectFile[];
}) {
  return (
    <div className="rounded-lg bg-white shadow">
      <div className="flex flex-1 items-stretch overflow-hidden">
        <div className="flex-1 overflow-y-auto">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <h2 className="font-semibold leading-6 text-gray-900">
              Project Files
            </h2>
            <div>
              {projectFiles.length === 0 ? (
                <ProjectFileEmptyGallery />
              ) : (
                <ProjectFileGallery projectFiles={projectFiles} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
