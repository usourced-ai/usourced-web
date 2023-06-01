import {
  projectsInProduction,
  projectsInQuoting,
  projectsInSampling,
} from "@/api/projects";
import { ProjectHeader } from "@/components/my/projects/index/ProjectHeader";
import { ProjectListSection } from "@/components/my/projects/index/ProjectListSection";
import { AppLayout } from "@/layouts/AppLayout";
import { Meta } from "@/layouts/Meta";

export default function MyProjectsPage() {
  return (
    <AppLayout meta={<Meta title="My Projects" />}>
      <ProjectHeader />
      <div className="mx-auto pb-20 pl-4 sm:pl-6 lg:pl-8 xl:pl-16">
        <ProjectListSection title="Quoting" projects={projectsInQuoting} />
        <ProjectListSection title="In Sampling" projects={projectsInSampling} />
        <ProjectListSection
          title="In Production"
          projects={projectsInProduction}
        />
        <ProjectListSection title="Complete" projects={[]} />
      </div>
    </AppLayout>
  );
}
