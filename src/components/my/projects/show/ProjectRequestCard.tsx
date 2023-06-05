import type { ProjectRequest } from "@/models/project-request";

export function ProjectRequestCard({
  projectRequest,
}: {
  projectRequest: ProjectRequest;
}) {
  const { attributes } = projectRequest;
  return (
    <div className="rounded-lg bg-white shadow">
      <div className="p-4 sm:p-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Your Original Request
        </h3>
        <div className="mt-4">
          <dl className="grid grid-cols-2 gap-5 sm:grid-cols-3">
            {attributes.map((attribute) => (
              <div key={attribute.name} className="col-span-1">
                <dt className="text-sm font-medium text-gray-500">
                  {attribute.name}
                </dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {attribute.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
