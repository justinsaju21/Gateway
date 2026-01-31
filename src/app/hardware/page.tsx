"use client";

import { motion } from "framer-motion";
import { Cpu, ChevronRight, CircuitBoard, Wifi, Zap, Thermometer, Music, Box, Play, ExternalLink } from "lucide-react";
import { AdBanner } from "@/components/ui/AdBanner";
import Link from "next/link";
import { TiltCard } from "@/components/ui/tilt-card";

interface HardwareProject {
    title: string;
    description: string;
    tags: string[];
    icon: React.ElementType;
    color: string;
    github?: string;
    external?: string;
    tinkercad?: string;
}

const hardwareProjects: HardwareProject[] = [
    {
        title: "Hybrid Approximate Multiplier",
        description: "Verilog implementation of hybrid approximate multiplier for low-power computing applications. Optimized for area and power efficiency.",
        tags: ["Verilog", "VLSI", "Low Power", "Research"],
        icon: Cpu,
        color: "#ec4899",
        github: "https://github.com/justinsaju21/Hybrid_Approximate_Multiplier",
    },
    {
        title: "LiFi Technology",
        description: "Award-winning project demonstrating Visible Light Communication (VLC). 1st Place at TECHKNOW 2023-24.",
        tags: ["LiFi", "VLC", "Research", "Hardware"],
        icon: Wifi,
        color: "#f59e0b",
        external: "https://www.canva.com/design/DAGz9JnPRWQ/uUnP_neB6SjSLBD8HjPErg/edit",
    },
    {
        title: "5x5x5 LED Matrix Display",
        description: "3D LED cube display with custom animations and patterns. Hardware project using Arduino/ESP.",
        tags: ["C++", "Arduino", "LED Matrix", "Hardware"],
        icon: Box,
        color: "#8b5cf6",
        github: "https://github.com/justinsaju21/5x5x5_Led_Matrix_Display",
    },
    {
        title: "MQ3 Alcohol Sensor Monitor",
        description: "Alcohol detection system with real-time monitoring via Blynk cloud platform.",
        tags: ["C++", "Sensors", "IoT", "Safety"],
        icon: Zap,
        color: "#ef4444",
        github: "https://github.com/justinsaju21/MQ3_Alcohol_Sensor",
    },
    {
        title: "Mechanical Moving Chessboard",
        description: "Real-time remote play chessboard with moving mechanical parts. Designed in AutoCAD for cross-country gameplay.",
        tags: ["AutoCAD", "IoT", "Mechanical", "Hardware"],
        icon: CircuitBoard,
        color: "#06b6d4",
    },
    {
        title: "MQ2 Gas Sensor",
        description: "Gas leak detection system with alert functionality for safety applications.",
        tags: ["C++", "Sensors", "Safety", "IoT"],
        icon: Zap,
        color: "#22c55e",
        github: "https://github.com/justinsaju21/MQ2_Gas_Sensor",
    },
    {
        title: "Music Player Buzzer",
        description: "Embedded music player using buzzer for melody playback with Blynk IoT integration.",
        tags: ["C++", "Arduino", "IoT", "Blynk"],
        icon: Music,
        color: "#a855f7",
        github: "https://github.com/justinsaju21/Music_Player_Buzzer",
    },
    {
        title: "DHT11 Environment Monitor",
        description: "Environmental monitoring system displaying temperature and humidity data in real-time.",
        tags: ["C++", "DHT11", "IoT", "Monitoring"],
        icon: Thermometer,
        color: "#3b82f6",
        github: "https://github.com/justinsaju21/DHT11_TempHumid_Monitor",
    },
    {
        title: "4x4x4 LED Matrix Display",
        description: "3D LED cube display simulation with Arduino controlling 64 LEDs in a matrix configuration.",
        tags: ["TinkerCAD", "Arduino", "LED Matrix", "Simulation"],
        icon: Box,
        color: "#f97316",
        tinkercad: "https://www.tinkercad.com/things/lQ8bzgYgQfN-4x4x4-led-matrix-display",
    },
    {
        title: "4-Bit Adder",
        description: "Full adder circuit implementation for 4-bit binary addition using logic gates.",
        tags: ["TinkerCAD", "Digital Logic", "Adder", "Gates"],
        icon: CircuitBoard,
        color: "#eab308",
        tinkercad: "https://www.tinkercad.com/things/aSvIQRK2Oic-4-bit-adder",
    },
];

export default function HardwarePage() {
    return (
        <section className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 bg-accent-cyan/10 border border-accent-cyan/20">
                        <Cpu className="w-4 h-4 text-accent-cyan" />
                        <span className="text-sm font-medium text-accent-cyan">Hardware & Embedded</span>
                    </div>
                    <h1 className="heading-xl mb-4">
                        <span className="text-foreground">The </span>
                        <span className="text-gradient">Hardware Lab</span>
                    </h1>
                    <p className="body-lg text-foreground-dim max-w-2xl mx-auto">
                        Embedded systems, VLSI designs, and IoT experiments. Where silicon meets code.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {hardwareProjects.length > 0 ? (
                        hardwareProjects.map((project, index) => (
                            <motion.div
                                key={project.title}
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
                            </motion.div>
                        ))
                    ) : (
                        <div className="col-span-2 text-center py-12">
                            <div className="inline-block p-4 rounded-full bg-white/5 border border-white/10 mb-4">
                                <CircuitBoard className="w-8 h-8 text-foreground-dim" />
                            </div>
                            <h3 className="text-xl font-medium text-foreground mb-2">Projects Loading...</h3>
                            <p className="text-foreground-dim max-w-md mx-auto">
                                The hardware lab is currently under construction. Check back soon for embedded and VLSI projects!
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
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent-purple/20 text-accent-cyan border border-accent-purple/30 hover:bg-accent-purple/30 transition-colors"
                    >
                        View All Projects
                        <ChevronRight className="w-4 h-4" />
                    </Link>
                </motion.div>

                <AdBanner slot="hardware-footer" className="mt-20" />
            </div>
        </section>
    );
}
