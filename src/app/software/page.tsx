"use client";

import { motion } from "framer-motion";
import { Laptop2, ChevronRight, Terminal, Calculator, Cpu, Camera, Gamepad2, Cake } from "lucide-react";
import { AdBanner } from "@/components/ui/AdBanner";
import { TiltCard } from "@/components/ui/tilt-card";

interface SoftwareProject {
    title: string;
    slug: string;  // Added slug for linking
    description: string;
    tags: string[];
    icon: React.ElementType;
    color: string;
}

const softwareProjects: SoftwareProject[] = [
    {
        title: "CMOS Switch & Duality Visualizer",
        slug: "cmos-switch-duality",
        description: "Interactive web application for deep-dive visualization into Static CMOS Logic and CMOS Duality. Essential lab tool for ECE students.",
        tags: ["Python", "Streamlit", "VLSI", "Education"],
        icon: Cpu,
        color: "#ec4899",
    },
    {
        title: "Stick Diagram Painter",
        slug: "stick-diagram-painter",
        description: "Tool for creating VLSI stick diagrams for circuit layout visualization. Assists in understanding physical design rules.",
        tags: ["Python", "VLSI", "Physical Design", "Visualization"],
        icon: Calculator,
        color: "#8b5cf6",
    },
    {
        title: "LogicMap Pro",
        slug: "logicmap-pro",
        description: "Professional Karnaugh Map solver and visualizer built with Streamlit. Simplifies Boolean algebra minimization for students.",
        tags: ["Python", "Streamlit", "Digital Logic"],
        icon: Calculator,
        color: "#06b6d4",
    },
    {
        title: "Op-Amp Deep Dive Lab",
        slug: "opamp-lab",
        description: "Interactive virtual lab for understanding operational amplifier circuits and their applications.",
        tags: ["Python", "Electronics", "Simulation"],
        icon: Cpu,
        color: "#22c55e",
    },
    {
        title: "Interactive CPU Lab",
        slug: "interactive-cpu-lab",
        description: "Hands-on CPU architecture simulation for Computer Organization and Architecture studies.",
        tags: ["Python", "CPU", "Architecture"],
        icon: Cpu,
        color: "#3b82f6",
    },
    {
        title: "Photobooth Mailer",
        slug: "photobooth-mailer",
        description: "Vintage-style web photobooth that captures photos and emails them directly to users.",
        tags: ["Python", "Streamlit", "Email", "Camera"],
        icon: Camera,
        color: "#f59e0b",
    },
    {
        title: "Card Game / Card Selector Pro",
        slug: "card-game",
        description: "Interactive card-based game with professional selection process features.",
        tags: ["Python", "Streamlit", "Games"],
        icon: Gamepad2,
        color: "#ef4444",
    },
    {
        title: "Cake App",
        slug: "cake-app",
        description: "Online cake ordering platform with custom cake builder and order management.",
        tags: ["Python", "Streamlit", "E-commerce"],
        icon: Cake,
        color: "#a855f7",
    },
];

export default function SoftwarePage() {
    return (
        <section className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 bg-accent-purple/10 border border-accent-purple/20">
                        <Laptop2 className="w-4 h-4 text-accent-purple" />
                        <span className="text-sm font-medium text-accent-purple">Software &amp; Web</span>
                    </div>
                    <h1 className="heading-xl mb-4">
                        <span className="text-foreground">The </span>
                        <span className="text-gradient">Software Studio</span>
                    </h1>
                    <p className="body-lg text-foreground-dim max-w-2xl mx-auto">
                        Web applications, AI tools, and developer utilities. Shipped products and experiments.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {softwareProjects.length > 0 ? (
                        softwareProjects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <a
                                    href={`https://projects.justinsaju.me/project/${project.slug}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block h-full"
                                >
                                    <TiltCard>
                                        <div
                                            className="p-6 rounded-2xl h-full group cursor-pointer"
                                            style={{
                                                backgroundColor: "rgba(30, 27, 75, 0.6)",
                                                border: "1px solid rgba(139, 92, 246, 0.3)",
                                                backdropFilter: "blur(12px)",
                                            }}
                                        >
                                            <div className="flex items-start justify-between mb-4">
                                                <div
                                                    style={{ backgroundColor: `${project.color}20` }}
                                                >
                                                    <project.icon
                                                        className="w-6 h-6"
                                                        style={{ color: project.color }}
                                                    />
                                                </div>
                                                <ChevronRight className="w-5 h-5 text-foreground-dim group-hover:translate-x-1 group-hover:text-accent-cyan transition-all" />
                                            </div>
                                            <h3 className="text-xl font-bold text-foreground mb-2">
                                                {project.title}
                                            </h3>
                                            <p className="text-foreground-muted text-sm mb-4">
                                                {project.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {project.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="px-2 py-1 text-xs rounded-full bg-white/5 text-foreground-dim border border-white/10"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </TiltCard>
                                </a>
                            </motion.div>
                        ))
                    ) : (
                        <div className="col-span-2 text-center py-12">
                            <div className="inline-block p-4 rounded-full bg-white/5 border border-white/10 mb-4">
                                <Terminal className="w-8 h-8 text-foreground-dim" />
                            </div>
                            <h3 className="text-xl font-medium text-foreground mb-2">Code in Progress...</h3>
                            <p className="text-foreground-dim max-w-md mx-auto">
                                The software studio is compiling. Check back soon for web apps and AI tools!
                            </p>
                        </div>
                    )}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-center mt-16"
                >
                    <a
                        href="https://projects.justinsaju.me"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent-purple/20 text-accent-cyan border border-accent-purple/30 hover:bg-accent-purple/30 transition-colors"
                    >
                        View All Projects
                        <ChevronRight className="w-4 h-4" />
                    </a>
                </motion.div>

                <AdBanner slot="software-footer" className="mt-20" />
            </div>
        </section>
    );
}
