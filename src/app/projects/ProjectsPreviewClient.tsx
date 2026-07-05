"use client";

import { motion } from "framer-motion";
import { RocketIcon, ExternalLink } from "lucide-react";
import type { Project } from "@/lib/sheets";

export default function ProjectsPreviewClient({ projects }: { projects: Project[] }) {
  return (
    <div className="min-h-screen pt-32 px-6 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl w-full text-center"
      >
        <RocketIcon className="w-16 h-16 mx-auto mb-6" style={{ color: "var(--accent-cyan)" }} />
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--text-primary)]">Echo Projects</h1>
        <p className="text-lg text-[var(--text-muted)] mb-10 leading-relaxed">
          A showcase of my technical projects, experiments, and open-source contributions.
        </p>
        
        <div className="glass-card p-8 rounded-2xl mb-10 text-left border border-[var(--glass-border)]" style={{ backgroundColor: "var(--glass-bg)" }}>
          <h2 className="text-2xl font-semibold mb-4 text-[var(--text-primary)]">Featured Projects Preview</h2>
          <ul className="space-y-4">
            {projects.length > 0 ? (
              projects.map((project, idx) => (
                <li key={project.id} className={`flex flex-col ${idx !== projects.length - 1 ? 'border-b border-white/5 pb-4' : 'pb-2'}`}>
                  <span className="text-[var(--text-primary)] font-medium">{project.title}</span>
                  <span className="text-sm text-[var(--text-muted)] mt-1">{project.description}</span>
                </li>
              ))
            ) : (
              <p className="text-[var(--text-muted)]">No projects found.</p>
            )}
          </ul>
        </div>

        <a
          href="https://projects.justinsaju.me"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold transition-all hover:scale-105"
          style={{
            backgroundColor: "var(--accent-cyan)",
            color: "#ffffff",
            boxShadow: "0 0 30px -5px rgba(6, 182, 212, 0.6)",
          }}
        >
          Visit Echo Projects <ExternalLink className="w-4 h-4" />
        </a>
      </motion.div>
    </div>
  );
}
