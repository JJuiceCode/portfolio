import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ProjectHero } from "@/components/project-detail/project-hero";
import { ProjectLiveLink } from "@/components/project-detail/project-live-link";
import { AssignedRoles } from "@/components/project-detail/assigned-roles";
import { TechnicalAccordion } from "@/components/project-detail/technical-accordion";
import { getAllProjectSlugs, getProjectBySlug, getProjectsForListing } from "@/lib/projects";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllProjectSlugs().map(slug => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    return { title: "프로젝트를 찾을 수 없습니다" };
  }
  return {
    title: `${project.title} — Portfolio`,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      images: [{ url: project.heroImage.src, alt: project.heroImage.alt }],
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug: currentSlug } = await params;
  const project = getProjectBySlug(currentSlug);
  if (!project) notFound();

  const projects = getProjectsForListing();
  const currentProjectIndex = projects.findIndex(({ slug }) => slug === currentSlug);
  const previousProject = currentProjectIndex > 0 ? projects[currentProjectIndex - 1] : undefined;
  const nextProject = currentProjectIndex < projects.length - 1 ? projects[currentProjectIndex + 1] : undefined;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <ProjectHero
          title={project.title}
          summary={project.summary}
          tags={project.tags}
          image={project.heroImage}
          previousProject={previousProject ? { href: `/projects/${previousProject.slug}`, label: previousProject.title } : undefined}
          nextProject={nextProject ? { href: `/projects/${nextProject.slug}`, label: nextProject.title } : undefined}
        />
        <ProjectLiveLink href={project.linkUrls} linkLabel={project.linkLabel} />
        <AssignedRoles areas={project.areas} positionTitle={project.positionTitle} positionDescription={project.positionDescription} />
        <TechnicalAccordion areas={project.areas} />
      </main>
      <Footer />
    </>
  );
}
