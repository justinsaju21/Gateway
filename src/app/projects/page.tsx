import { getProjects } from "@/lib/sheets";
import ProjectsPreviewClient from "./ProjectsPreviewClient";

export const revalidate = 1800; // Revalidate every 30 minutes

export default async function ProjectsPage() {
  const projects = await getProjects();
  // Filter for featured projects if available, otherwise just take the first 3
  const featured = projects.filter(p => p.featured);
  const displayProjects = featured.length >= 3 ? featured.slice(0, 3) : projects.slice(0, 3);
  return <ProjectsPreviewClient projects={displayProjects} />;
}
