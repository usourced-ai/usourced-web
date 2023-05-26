import {
  projectsInProduction,
  projectsInQuoting,
  projectsInSampling,
} from "@/api/projects";
import { ProjectListSection } from "@/components/my/projects/ProjectListSection";
import { AppLayout } from "@/layouts/AppLayout";
import { Meta } from "@/layouts/Meta";

export default function MyProjectsPage() {
  return (
    <AppLayout meta={<Meta title="My Projects" />}>
      <div className="mx-auto max-w-screen-xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-screen-md lg:mx-0 lg:max-w-none">
          <div className="mt-8 flex items-center justify-between">
            <h1 className="flex-1 text-2xl font-bold text-gray-900">
              My Projects
            </h1>
          </div>
          <ProjectListSection title="Quoting" projects={projectsInQuoting} />
          <ProjectListSection
            title="In Sampling"
            projects={projectsInSampling}
          />
          <ProjectListSection
            title="In Production"
            projects={projectsInProduction}
          />
          <ProjectListSection title="Complete" projects={[]} />
        </div>
      </div>
    </AppLayout>
  );
}
