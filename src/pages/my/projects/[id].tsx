import type { GetServerSideProps } from "next";

import { projects } from "@/api/projects";
import { ProjectHeader } from "@/components/my/projects/show/ProjectHeader";
import { ProjectHighlightCard } from "@/components/my/projects/show/timeline/ProjectHighlightCard";
import { ProjectTimeline } from "@/components/my/projects/show/timeline/ProjectTimeline";
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

function Card() {
  return (
    <div className="rounded-lg bg-white shadow">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Project Details
        </h3>
        <div className="mt-2 max-w-xl text-sm text-gray-500">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            totam at reprehenderit maxime aut beatae ad voluptatem.
          </p>
        </div>
        <div className="mt-5">
          <dl className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Owner</dt>
              <dd className="mt-1 text-sm text-gray-900">project.owner</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Project Name
              </dt>
              <dd className="mt-1 text-sm text-gray-900">project name</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Description</dt>
              <dd className="mt-1 text-sm text-gray-900">
                project.description
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Created At</dt>
              <dd className="mt-1 text-sm text-gray-900">project.createdAt</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Updated At</dt>
              <dd className="mt-1 text-sm text-gray-900">project.updatedAt</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}

export default function ProjectShowPage({ project }: PageProps) {
  return (
    <AppLayout meta={<Meta title={[project.name, "My Projects"]} />}>
      <ProjectHeader projectName={project.name} />
      <div className="mx-auto max-w-screen-2xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          <div className="col-span-2 flex flex-col gap-4">
            <Card />
            <div>{JSON.stringify(project, null, 2)}</div>
          </div>
          <div className="col-span-1">
            <ProjectHighlightCard />
            <h2 className="mt-6 font-semibold leading-6 text-gray-900">
              Project Timeline
            </h2>
            <ProjectTimeline />
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
