import { FileEmptyGallery } from "@/components/my/projects/show/file-gallery/FileEmptyGallery";
import { FileGallery } from "@/components/my/projects/show/file-gallery/FileGallery";
import type { Attachment } from "@/models/attachment";

export function ProjectFileGalleryCard({ files }: { files: Attachment[] }) {
  return (
    <div className="rounded-lg bg-white shadow">
      <div className="flex flex-1 items-stretch overflow-hidden">
        <div className="flex-1 overflow-y-auto">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <h2 className="font-semibold leading-6 text-gray-900">
              Project Files
            </h2>
            <div>
              {files.length === 0 ? (
                <FileEmptyGallery />
              ) : (
                <FileGallery files={files} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
