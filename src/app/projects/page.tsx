export const revalidate = 60; // Revalidate every 60 seconds

import { client, queries } from "@/lib/sanity.client";
import ProjectList from "@/components/projects/ProjectList";

export default async function ProjectsPage() {
    const projects = await client.fetch(queries.allProjects);

    return <ProjectList projects={projects} />;
}
