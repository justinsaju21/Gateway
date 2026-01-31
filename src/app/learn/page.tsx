"use client";

import { motion } from "framer-motion";
import { GraduationCap, ChevronRight, BookOpen, Calculator, Cpu, Play, Github, ExternalLink } from "lucide-react";
import { AdBanner } from "@/components/ui/AdBanner";
import Link from "next/link";
import { TiltCard } from "@/components/ui/tilt-card";

interface LearnTopic {
    title: string;
    description: string;
    tags: string[];
    icon: React.ElementType;
    color: string;
    github?: string;
    streamlit?: string;
}

const learnTopics: LearnTopic[] = [
    {
        title: "CMOS Switch & Duality Visualizer",
        description: "Interactive visualization of Static CMOS Logic and CMOS Duality. Perfect for understanding VLSI fundamentals.",
        tags: ["VLSI", "CMOS", "Interactive", "Education"],
        icon: Cpu,
        color: "#ec4899",
        github: "https://github.com/justinsaju21/CMOS-Switch-Translator-Duality-Conduction-Visualizer",
        streamlit: "https://justinsaju21-cmos-switch-translator-duality-conducti-app-akx8f0.streamlit.app/",
    },
    {
        title: "LogicMap Pro",
        description: "Master Karnaugh Maps and Boolean algebra minimization with this professional solver and visualizer.",
        tags: ["Digital Logic", "K-Map", "Boolean Algebra"],
        icon: Calculator,
        color: "#06b6d4",
        github: "https://github.com/justinsaju21/logicmap-pro",
        streamlit: "https://justinsaju21-logicmap-pro-app-kvmnf2.streamlit.app/",
    },
    {
        title: "Op-Amp Deep Dive Lab",
        description: "Explore operational amplifier circuits interactively. Covers inverting, non-inverting, and integrator configurations.",
        tags: ["Analog Electronics", "Op-Amp", "Simulation"],
        icon: Cpu,
        color: "#22c55e",
        github: "https://github.com/justinsaju21/opamp-deep-dive-lab",
        streamlit: "https://justinsaju21-opamp-deep-dive-lab-app-hqjbjr.streamlit.app/",
    },
    {
        title: "Interactive CPU Lab",
        description: "Hands-on CPU architecture simulation. Learn about registers, ALU, and instruction cycles through interaction.",
        tags: ["Computer Architecture", "CPU", "Assembly"],
        icon: Cpu,
        color: "#3b82f6",
        github: "https://github.com/justinsaju21/interactive-cpu-lab",
        streamlit: "https://justinsaju21-interactive-cpu-lab-home-hqfnek.streamlit.app/",
    },
    {
        title: "Stick Diagram Painter",
        description: "Learn VLSI physical design by creating stick diagrams. Understand layout rules and transistor placement.",
        tags: ["VLSI", "Physical Design", "Layout"],
        icon: Calculator,
        color: "#8b5cf6",
        github: "https://github.com/justinsaju21/stick-diagram-painter",
        streamlit: "https://justinsaju21-stick-diagram-painter-1--home-uunyi2.streamlit.app/",
    },
];

export default function LearnPage() {
    return (
        <section className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 bg-green-500/10 border border-green-500/20">
                        <GraduationCap className="w-4 h-4 text-green-400" />
                        <span className="text-sm font-medium text-green-400">Learn & Explore</span>
                    </div>
                    <h1 className="heading-xl mb-4">
                        <span className="text-foreground">The </span>
                        <span className="text-gradient">Knowledge Base</span>
                    </h1>
                    <p className="body-lg text-foreground-dim max-w-2xl mx-auto">
                        Tutorials, cheatsheets, and concept maps. My digital garden of engineering knowledge.
                    </p>
                </motion.div>

                {/* Topics Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {learnTopics.length > 0 ? (
                        learnTopics.map((topic, index) => (
                            <motion.div
                                key={topic.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
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
                                                style={{ backgroundColor: `${topic.color}20` }}
                                            >
                                                <topic.icon
                                                    className="w-6 h-6"
                                                    style={{ color: topic.color }}
                                                />
                                            </div>
                                            <ChevronRight className="w-5 h-5 text-foreground-dim group-hover:translate-x-1 group-hover:text-accent-cyan transition-all" />
                                        </div>
                                        <h3 className="text-xl font-bold text-foreground mb-2">
                                            {topic.title}
                                        </h3>
                                        <p className="text-foreground-muted text-sm mb-4">
                                            {topic.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {topic.tags.map((tag) => (
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
                            </motion.div>
                        ))
                    ) : (
                        <div className="col-span-2 text-center py-12">
                            <div className="inline-block p-4 rounded-full bg-white/5 border border-white/10 mb-4">
                                <BookOpen className="w-8 h-8 text-foreground-dim" />
                            </div>
                            <h3 className="text-xl font-medium text-foreground mb-2">Writing in Progress...</h3>
                            <p className="text-foreground-dim max-w-md mx-auto">
                                The library is being organized. Tutorials and cheatsheets are coming soon!
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
                        href="https://blogs.justinsaju.me"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent-purple/20 text-accent-cyan border border-accent-purple/30 hover:bg-accent-purple/30 transition-colors"
                    >
                        Read the Blog
                        <ChevronRight className="w-4 h-4" />
                    </a>
                </motion.div>

                <AdBanner slot="learn-footer" className="mt-20" />
            </div>
        </section>
    );
}
