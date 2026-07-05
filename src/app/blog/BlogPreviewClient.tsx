"use client";

import { motion } from "framer-motion";
import { BookOpenIcon, ExternalLink } from "lucide-react";
import type { Post } from "@/lib/sheets";

export default function BlogPreviewClient({ posts }: { posts: Post[] }) {
  return (
    <div className="min-h-screen pt-32 px-6 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl w-full text-center"
      >
        <BookOpenIcon className="w-16 h-16 mx-auto mb-6" style={{ color: "var(--accent-cyan)" }} />
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--text-primary)]">Echo Blogs</h1>
        <p className="text-lg text-[var(--text-muted)] mb-10 leading-relaxed">
          Technical articles, tutorials, and insights on engineering, embedded systems, and artificial intelligence.
        </p>
        
        <div className="glass-card p-8 rounded-2xl mb-10 text-left border border-[var(--glass-border)]" style={{ backgroundColor: "var(--glass-bg)" }}>
          <h2 className="text-2xl font-semibold mb-4 text-[var(--text-primary)]">Recent Publications Preview</h2>
          <ul className="space-y-4">
            {posts.length > 0 ? (
              posts.map((post, idx) => (
                <li key={post.id} className={`flex flex-col ${idx !== posts.length - 1 ? 'border-b border-white/5 pb-4' : 'pb-2'}`}>
                  <span className="text-[var(--text-primary)] font-medium">{post.title}</span>
                  <span className="text-sm text-[var(--text-muted)] mt-1">{post.excerpt}</span>
                </li>
              ))
            ) : (
              <p className="text-[var(--text-muted)]">No posts found.</p>
            )}
          </ul>
        </div>

        <a
          href="https://blog.justinsaju.me"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold transition-all hover:scale-105"
          style={{
            backgroundColor: "var(--accent-cyan)",
            color: "#ffffff",
            boxShadow: "0 0 30px -5px rgba(6, 182, 212, 0.6)",
          }}
        >
          Visit Echo Blogs <ExternalLink className="w-4 h-4" />
        </a>
      </motion.div>
    </div>
  );
}
