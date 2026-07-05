"use client";

import { motion } from "framer-motion";
import { ChevronRight, RocketIcon, BookOpenIcon, CpuIcon, MailIcon } from "lucide-react";
import Link from "next/link";
import { TiltCard } from "@/components/ui/tilt-card";
import { GithubStats } from "@/components/ui/GithubStats";
import { AdBanner } from "@/components/ui/AdBanner";
import { GlassAdCard } from "@/components/ui/GlassAdCard";
import SoftAurora from "@/components/home/SoftAurora";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <SoftAurora
            speed={0.6}
            scale={1.5}
            brightness={1.0}
            color1="#7c3aed"
            color2="#3b82f6"
            noiseFrequency={2.5}
            noiseAmplitude={1.0}
            bandHeight={0.5}
            bandSpread={1.0}
            octaveDecay={0.1}
            layerOffset={0}
            colorSpeed={1.0}
            enableMouseInteraction={true}
            mouseInfluence={0.25}
          />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              border: "1px solid rgba(124, 58, 237, 0.3)",
              backgroundColor: "rgba(30, 0, 40, 0.3)",
              backdropFilter: "blur(8px)",
            }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8"
          >
            <span
              className="flex h-2 w-2 rounded-full"
              style={{ backgroundColor: "#06B6D4" }}
            />
            <span
              style={{ color: "var(--text-muted)" }}
              className="text-xs font-semibold tracking-wide uppercase"
            >
              SRM IST KTR • Engineering Student
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-8 tracking-tight"
          >
            <span className="block mb-3 text-2xl md:text-3xl font-medium" style={{ color: "var(--text-primary)" }}>Justin Jacob Saju</span>
            <span
              className="inline-block text-6xl md:text-8xl font-bold pb-2"
              style={{
                background: "linear-gradient(135deg, #C084FC 0%, #22D3EE 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 30px rgba(192, 132, 252, 0.4))",
              }}
            >
              ECHO System
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Welcome to my digital hub. Explore my{" "}
            <span style={{ color: "#22D3EE", fontWeight: 500 }}>portfolio</span>,{" "}
            <span style={{ color: "#C084FC", fontWeight: 500 }}>blog</span>, and{" "}
            <span style={{ color: "rgba(192, 132, 252, 0.8)", fontWeight: 500 }}>projects</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link
              href="/projects"
              style={{
                backgroundColor: "#7C3AED",
                color: "#ffffff",
                boxShadow: "0 0 30px -5px rgba(124, 58, 237, 0.6)",
              }}
              className="px-8 py-3.5 rounded-full font-semibold transition-all hover:scale-105"
            >
              View Portfolio
            </Link>
            <Link
              href="/blog"
              style={{
                backgroundColor: "var(--glass)",
                border: "1px solid var(--glass-border)",
                color: "var(--text-primary)",
              }}
              className="flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold hover:bg-white/5 transition-all"
            >
              Explore Blogs
              <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Hero Ad Placement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <AdBanner slot="hero" className="mt-8 mb-0" />
          </motion.div>
        </div>
      </section>

      {/* Bento Grid Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-lg text-center mb-12"
          >
            <span style={{ color: "var(--text-primary)" }}>My </span>
            <span className="text-gradient">Digital Ecosystem</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[220px]">
            {/* Card 1: Portfolio (Large 2x2) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-2 md:row-span-2"
            >
              <TiltCard>
                <Link
                  href="https://portfolio.justinsaju.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full w-full p-8 group relative overflow-hidden rounded-2xl glass-card"
                >
                  <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop')" }} />
                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <div className="flex justify-between items-start">
                      <CpuIcon className="w-10 h-10 transition-colors duration-300 text-[var(--text-primary)] group-hover:text-[#06B6D4]" />
                      <ChevronRight
                        className="w-6 h-6 text-[var(--text-secondary)] group-hover:translate-x-1 transition-all"
                      />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold mb-2 text-[var(--text-primary)]">My Portfolio</h3>
                      <p className="text-[var(--text-muted)] text-lg max-w-md">
                        Professional portfolio, resume, and detailed case studies.
                        Embedded Systems, VLSI, and AI.
                      </p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-0" />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                </Link>
              </TiltCard>
            </motion.div>

            {/* Card 2: Blog (1x1) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:col-span-1 md:row-span-1"
            >
              <TiltCard>
                <Link
                  href="/blog"
                  className="block h-full w-full p-6 group relative rounded-2xl glass-card overflow-hidden"
                >
                  <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-30 transition-opacity duration-700 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1000&auto=format&fit=crop')" }} />
                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <BookOpenIcon className="w-8 h-8 transition-colors duration-300 text-[var(--text-primary)] group-hover:text-[#7C3AED]" />
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-[var(--text-primary)]">The Writer</h3>
                      <p className="text-sm text-[var(--text-muted)] line-clamp-2">
                        Technical articles & tutorials on engineering.
                      </p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-0" />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                </Link>
              </TiltCard>
            </motion.div>

            {/* Card 3: Projects Hub (1x1) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="md:col-span-1 md:row-span-1"
            >
              <TiltCard>
                <a
                  href="https://projects.justinsaju.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full w-full p-6 group relative rounded-2xl glass-card overflow-hidden"
                >
                  <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-30 transition-opacity duration-700 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop')" }} />
                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <RocketIcon className="w-8 h-8 transition-colors duration-300 text-[var(--text-primary)] group-hover:text-[#7C3AED]" />
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-[var(--text-primary)]">Projects Hub</h3>
                      <p className="text-sm text-[var(--text-muted)] line-clamp-2">
                        Showcase of technical projects and experiments.
                      </p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-0" />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                </a>
              </TiltCard>
            </motion.div>

            {/* Card 4: Photography Preview (1x1) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="md:col-span-1 md:row-span-1"
            >
              <TiltCard>
                <Link
                  href="/photography"
                  className="block h-full w-full p-6 group relative rounded-2xl glass-card overflow-hidden"
                >
                  <div className="absolute inset-0 z-0 opacity-30 group-hover:opacity-60 transition-opacity duration-700 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop')" }} />
                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <svg className="w-8 h-8 transition-colors duration-300 text-[var(--text-primary)] group-hover:text-[#06B6D4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-[var(--text-primary)] shadow-sm">Photography</h3>
                      <p className="text-sm text-gray-300 line-clamp-2">
                        My visual journal and captured moments.
                      </p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-0" />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                </Link>
              </TiltCard>
            </motion.div>

            {/* Card 5: Contact (1x1) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="md:col-span-1 md:row-span-1"
            >
              <TiltCard>
                <Link
                  href="mailto:justinsaju21@gmail.com"
                  className="block h-full w-full p-6 group relative rounded-2xl"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                    backdropFilter: "blur(16px)",
                  }}
                >
                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <MailIcon className="w-8 h-8 transition-colors duration-300 group-hover:text-[#06B6D4]" style={{ color: "rgba(255, 255, 255, 0.8)" }} />
                    <div>
                      <h3 className="text-xl font-bold mb-1" style={{ color: "#ffffff" }}>Get In Touch</h3>
                      <p className="text-sm" style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                        Have a project idea? Let&apos;s collaborate.
                      </p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Link>
              </TiltCard>
            </motion.div>

            {/* Card 6: GitHub (Dynamic 2x1) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="md:col-span-2 md:row-span-1"
            >
              <TiltCard>
                <Link
                  href="https://github.com/justinsaju21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full w-full p-6 group relative rounded-2xl glass-card overflow-hidden"
                >
                  <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-20 transition-opacity duration-700 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=1000&auto=format&fit=crop')" }} />
                  <div className="relative z-10 h-full flex flex-col justify-center">
                    <GithubStats />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-transparent z-0" />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                </Link>
              </TiltCard>
            </motion.div>

            {/* Native Ad 1 - Styled as 'Sponsored Tool' (2x1) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="md:col-span-2 md:row-span-1"
            >
              <GlassAdCard className="h-full w-full" format="rectangle" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ad Space After Bento Grid */}
      <AdBanner slot="after-bento" className="mb-16" />
    </>
  );
}
