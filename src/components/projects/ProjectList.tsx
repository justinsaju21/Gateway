"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, MonitorPlay } from "lucide-react";
import { AdBanner } from "@/components/ui/AdBanner";
import type { Project } from "@/types";

export default function ProjectList({ projects }: { projects: Project[] }) {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6 bg-[var(--background)]">
            <div className="max-w-5xl mx-auto">
                <Link
                    href="/"
                    style={{ color: "var(--foreground-muted)" }}
                    className="inline-flex items-center gap-2 text-sm mb-10 transition-opacity hover:opacity-80 group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Gateway
                </Link>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="heading-lg mb-4"
                >
                    <span style={{ color: "var(--foreground)" }}>Projects </span>
                    <span className="text-gradient">Hub</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    style={{ color: "var(--foreground-dim)" }}
                    className="body-lg mb-8 max-w-2xl"
                >
                    A collection of my experiments, demos, and live projects.
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.length > 0 ? (
                        projects.map((project, idx) => (
                            <motion.div
                                key={project.id || idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + idx * 0.1 }}
                                className="glass-card rounded-2xl p-6 group flex flex-col h-full"
                                style={{
                                    backgroundColor: "rgba(30, 27, 75, 0.6)",
                                    border: "1px solid rgba(139, 92, 246, 0.3)",
                                }}
                            >
                                {/* Header: Title & Status */}
                                <div className="flex justify-between items-start mb-4">
                                    <h3 style={{ color: "var(--foreground)" }} className="text-xl font-bold line-clamp-1">
                                        {project.title}
                                    </h3>
                                    <span
                                        className="px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ml-2"
                                        style={{
                                            backgroundColor: project.featured ? "rgba(34, 197, 94, 0.2)" : "rgba(167, 139, 250, 0.1)",
                                            color: project.featured ? "#4ade80" : "#a78bfa",
                                            border: `1px solid ${project.featured ? "rgba(34, 197, 94, 0.3)" : "rgba(167, 139, 250, 0.3)"}`,
                                        }}
                                    >
                                        {project.category || 'Project'}
                                    </span>
                                </div>

                                {/* Description */}
                                <p style={{ color: "var(--foreground-muted)" }} className="text-sm mb-6 flex-grow line-clamp-3">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                {project.tags && project.tags.length > 0 && (
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.slice(0, 4).map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-xs px-2 py-1 rounded-md"
                                                style={{ backgroundColor: "rgba(30, 27, 75, 0.8)", color: "var(--foreground-dim)" }}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                {/* Footer: Authors & Links */}
                                <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                                    {/* Authors Section */}
                                    <div className="flex items-center -space-x-3">
                                        {project.authorName ? (
                                            <div className="relative group/author">
                                                <div className="w-8 h-8 rounded-full border-2 border-[#0a1628] overflow-hidden bg-slate-800 flex items-center justify-center text-[10px] text-white">
                                                    {project.authorName.substring(0, 2)}
                                                </div>
                                                {/* Tooltip */}
                                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black/90 text-white text-xs rounded opacity-0 group-hover/author:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                                    {project.authorName}
                                                </div>
                                            </div>
                                        ) : (
                                            <span className="text-xs text-center text-gray-500 italic">No Author</span>
                                        )}
                                    </div>

                                    {/* Links */}
                                    <div className="flex items-center gap-3">
                                        {project.github && (
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                                <Github className="w-5 h-5" />
                                            </a>
                                        )}
                                        {(project.streamlit || project.external || project.tinkercad) && (
                                            <a
                                                href={project.streamlit || project.external || project.tinkercad}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{ color: "#a78bfa" }}
                                                className="inline-flex items-center gap-1 font-medium text-sm hover:underline group/link"
                                            >
                                                View
                                                <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                            </a>
                                        )}
                                    </div>
                                </div>

                            </motion.div>
                        ))
                    ) : (
                        <div className="col-span-1 md:col-span-2 text-center py-12">
                            <div className="inline-block p-4 rounded-full bg-white/5 border border-white/10 mb-4">
                                <MonitorPlay className="w-8 h-8 text-foreground-dim" />
                            </div>
                            <h3 className="text-xl font-medium text-foreground mb-2">No Projects Found</h3>
                            <p className="text-foreground-dim max-w-md mx-auto">
                                No projects were found. Please check your Google Sheet.
                            </p>
                        </div>
                    )}
                </div>

                <AdBanner slot="projects-footer" className="mt-12" />
            </div>
        </div>
    );
}
