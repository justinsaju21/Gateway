"use client";

import { TiltCard } from "./tilt-card";

interface GlassAdCardProps {
    className?: string;
    format?: "auto" | "fluid" | "rectangle";
}

export function GlassAdCard({ className = "", format = "auto" }: GlassAdCardProps) {
    return (
        <TiltCard
            className={`p-6 rounded-2xl flex flex-col relative overflow-hidden group ${className}`}
            style={{
                backgroundColor: "rgba(30, 27, 75, 0.6)",
                border: "1px solid rgba(139, 92, 246, 0.3)",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                backdropFilter: "blur(12px)",
            }}
        >
            {/* Ad Label - Critical for Policy Compliance */}
            <div className="absolute top-3 left-3 bg-black/40 px-2 py-0.5 rounded text-[10px] font-bold tracking-wider text-white/50 border border-white/10 z-20">
                SPONSORED
            </div>

            {/* Content Container */}
            <div className="flex-1 flex flex-col justify-center items-center relative z-10 w-full min-h-[250px]">
                <div className="w-full h-full flex flex-col items-center justify-center opacity-80 hover:opacity-100 transition-opacity p-4 text-center">
                    <p className="text-sm font-semibold text-[var(--foreground)] mb-1">Advertiser Content</p>
                    <p className="text-xs text-foreground-dim">
                        Native Display Ad
                        <br />
                        <span className="opacity-50 text-[10px]">(Format: {format})</span>
                    </p>
                </div>
            </div>

            {/* Decorative Gradient Background (Subtle) */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
        </TiltCard>
    );
}
