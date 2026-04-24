import projectsFile from "@/data/projects.json";

export type ProjectArea = {
  id: string;
  title: string;
  techStack: string[];
  details: string[];
};

export type ProjectDetail = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  heroImage: { src: string; alt: string };
  liveUrl: string;
  areas: ProjectArea[];
};

type ProjectsFile = { projects: ProjectDetail[] };

const { projects } = projectsFile as ProjectsFile;

export function getAllProjects(): ProjectDetail[] {
  return projects;
}

export function getProjectBySlug(slug: string): ProjectDetail | undefined {
  return projects.find(p => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map(p => p.slug);
}

export type ProjectListItem = Pick<ProjectDetail, "slug" | "title" | "summary" | "tags" | "heroImage">;

export function getProjectsForListing(): ProjectListItem[] {
  return projects.map(({ slug, title, summary, tags, heroImage }) => ({
    slug,
    title,
    summary,
    tags,
    heroImage,
  }));
}
