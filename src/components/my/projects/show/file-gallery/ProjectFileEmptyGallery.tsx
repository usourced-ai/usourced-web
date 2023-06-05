import { ArrowUpCircleIcon } from "@heroicons/react/24/outline";
import { FaFolderOpen } from "react-icons/fa";

import { AppButton } from "@/components/common/AppButton";

export function ProjectFileEmptyGallery() {
  return (
    <div className="text-center">
      <FaFolderOpen className="mx-auto h-12 w-12 text-gray-400" />
      <h3 className="mt-2 text-sm font-semibold text-gray-900">No files yet</h3>
      <p className="mt-1 text-sm text-gray-500">
        Get started by uploading your project design files.
      </p>
      <div className="mt-6">
        <AppButton
          icon={ArrowUpCircleIcon}
          label="Upload File"
          variant="solid"
          color="blue"
        />
      </div>
    </div>
  );
}
