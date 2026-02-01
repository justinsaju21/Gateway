export const revalidate = 60; // Revalidate every 60 seconds

import { client, queries } from "@/lib/sanity.client";
import ProjectList from "@/components/projects/ProjectList";

export default async function ProjectsPage() {
    const projects = await client.fetch(queries.myProjects);

    return (
        <div className="min-h-screen pt-32 pb-20 px-6" style={{ backgroundColor: "var(--background)" }}>
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="heading-lg mb-4">
                        <span style={{ color: "var(--foreground)" }}>My </span>
                        <span className="text-gradient">Projects</span>
                    </h1>
                    <p style={{ color: "var(--foreground-dim)" }} className="body-lg max-w-2xl mx-auto">
                        A glimpse of my personal engineering projects and experiments.
                    </p>
                </div>

                <div className="flex justify-center mb-12">
                    <a
                        href="https://projects.justinsaju.me"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                        style={{
                            backgroundColor: "#7c3aed",
                            color: "#ffffff",
                            padding: "1rem 2rem",
                            borderRadius: "9999px",
                            fontWeight: 600
                        }}
                    >
                        View All Community Projects
                    </a>
                </div>

                <ProjectList projects={projects} />
            </div>
        </div>
    );
}
