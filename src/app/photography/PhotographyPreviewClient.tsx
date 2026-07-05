"use client";

import { motion } from "framer-motion";
import { CameraIcon, ExternalLink } from "lucide-react";
import type { Photo } from "@/lib/sheets";

export default function PhotographyPreviewClient({ photos }: { photos: Photo[] }) {
  return (
    <div className="min-h-screen pt-32 px-6 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl w-full text-center"
      >
        <CameraIcon className="w-16 h-16 mx-auto mb-6" style={{ color: "var(--accent-cyan)" }} />
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--text-primary)]">Photography</h1>
        <p className="text-lg text-[var(--text-muted)] mb-10 leading-relaxed">
          My visual journal and captured moments from around the world.
        </p>
        
        <div className="glass-card p-8 rounded-2xl mb-10 text-left border border-[var(--glass-border)]" style={{ backgroundColor: "var(--glass-bg)" }}>
          <h2 className="text-2xl font-semibold mb-4 text-[var(--text-primary)]">Recent Galleries Preview</h2>
          <div className="grid grid-cols-2 gap-4">
            {photos.length > 0 ? (
              photos.map((photo) => (
                <div 
                  key={photo.id} 
                  className="h-32 rounded-lg bg-cover bg-center" 
                  style={{ backgroundImage: `url('${photo.cloudinaryUrl}')` }}
                  title={photo.title}
                ></div>
              ))
            ) : (
              <p className="text-[var(--text-muted)] col-span-2">No photos found.</p>
            )}
          </div>
        </div>

        <a
          href="https://photography.justinsaju.me"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold transition-all hover:scale-105"
          style={{
            backgroundColor: "var(--accent-cyan)",
            color: "#ffffff",
            boxShadow: "0 0 30px -5px rgba(6, 182, 212, 0.6)",
          }}
        >
          Visit Photography <ExternalLink className="w-4 h-4" />
        </a>
      </motion.div>
    </div>
  );
}
