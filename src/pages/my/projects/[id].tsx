import type { GetServerSideProps } from "next";

import { projects } from "@/api/projects";
import { ProjectHeader } from "@/components/my/projects/show/ProjectHeader";
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
      <div className="mx-auto pb-20 pl-4 sm:pl-6 lg:pl-8 xl:pl-16">
        <span>{JSON.stringify(project, null, 2)}</span>
      </div>
    </AppLayout>
  );
}
