import type { GetServerSideProps } from "next";

import { getAttachments, projects } from "@/api/projects";
import { ProjectFileGalleryCard } from "@/components/my/projects/show/file-gallery/ProjectFileGalleryCard";
import { OrderGalleryCard } from "@/components/my/projects/show/order-gallery/OrderGalleryCard";
import { ProjectHeader } from "@/components/my/projects/show/ProjectHeader";
import { ProjectRequestCard } from "@/components/my/projects/show/ProjectRequestCard";
import { ProjectStatusInfoCard } from "@/components/my/projects/show/ProjectStatusInfoCard";
import { ProjectQuotePanel } from "@/components/my/projects/show/quoting/ProjectQuotePanel";
import { ProjectTimeline } from "@/components/my/projects/show/timeline/ProjectTimeline";
import { projectQuote1, projectQuote2 } from "@/fixtures/project-quote";
import { AppLayout } from "@/layouts/AppLayout";
import { Meta } from "@/layouts/Meta";
import type { Project } from "@/models/project";

type PageProps = {
  project: Project;
};

export const getServerSideProps: GetServerSideProps<PageProps> = async ({
  params,
}) => {
  if (!params?.id) {
    return {
      notFound: true,
    };
  }
  const project = projects[String(params.id)];
  if (!project) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      project,
    },
  };
};

export default function ProjectShowPage({ project }: PageProps) {
  return (
    <AppLayout meta={<Meta title={[project.name, "My Projects"]} />}>
      <ProjectHeader projectName={project.name} />
      <div className="mx-auto max-w-screen-2xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          <main className="col-span-2 flex flex-col gap-4">
            {project.originalRequest && (
              <ProjectRequestCard projectRequest={project.originalRequest} />
            )}
            <ProjectFileGalleryCard files={getAttachments(project)} />
            <ProjectQuotePanel quotes={[projectQuote1, projectQuote2]} />
            <OrderGalleryCard />
          </main>
          <aside className="col-span-1">
            <ProjectStatusInfoCard info={project.statusInfo} />
            <h2 className="mt-6 font-semibold leading-6 text-gray-900">
              Project Timeline
            </h2>
            <ProjectTimeline />
          </aside>
        </div>
      </div>
    </AppLayout>
  );
}
