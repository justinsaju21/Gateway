"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail, ArrowUpRight, Heart, BookOpen, Wrench } from "lucide-react";

const socialLinks = [
    { href: "https://github.com/justinsaju21", icon: Github, label: "GitHub" },
    { href: "https://www.linkedin.com/in/justin-jacob-saju-742b28270/", icon: Linkedin, label: "LinkedIn" },
    { href: "https://instagram.com/justinnnn_21", icon: Instagram, label: "Instagram" },
    { href: "https://medium.com/@justinsaju21", icon: BookOpen, label: "Medium" },
    { href: "https://www.instructables.com/member/justinsaju21/", icon: Wrench, label: "Instructables" },
    { href: "mailto:justinsaju21@gmail.com", icon: Mail, label: "Email" },
];

const footerLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "https://blog.justinsaju.me", label: "Blog", external: true },
    { href: "https://portfolio.justinsaju.me", label: "Portfolio", external: true },
];

export function Footer() {
    return (
        <footer className="relative pt-20 pb-8 overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full blur-3xl"
                    style={{ backgroundColor: "rgba(167, 139, 250, 0.05)" }}
                />
                <div
                    className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl"
                    style={{ backgroundColor: "rgba(124, 58, 237, 0.05)" }}
                />
            </div>

            {/* Top decorative line */}
            <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: "linear-gradient(to right, transparent, rgba(139, 92, 246, 0.5), transparent)" }}
            />

            <div className="relative max-w-6xl mx-auto px-6">
                {/* Main footer content */}
                <div className="grid md:grid-cols-3 gap-12 mb-16">
                    {/* Brand column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link href="/" className="inline-block mb-4">
                            <div className="flex items-center gap-3">
                                <div
                                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                                    style={{ background: "linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%)" }}
                                >
                                    <span style={{ color: "#030014" }} className="font-bold text-lg">J</span>
                                </div>
                                <div>
                                    <span style={{ color: "var(--foreground)" }} className="text-lg font-bold">Justin Jacob</span>
                                    <span style={{ color: "var(--foreground-dim)" }} className="text-lg font-light ml-1">Saju</span>
                                </div>
                            </div>
                        </Link>
                        <p style={{ color: "var(--foreground-muted)" }} className="mb-6 max-w-xs">
                            ECE &apos;27 @ SRMIST • IEEE MTTs Chair • Building innovative solutions in VLSI, Embedded Systems, and IoT.
                        </p>
                        {/* Social links */}
                        <div className="flex items-center gap-2">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="p-2.5 rounded-xl glass transition-colors group"
                                    aria-label={social.label}
                                >
                                    <social.icon
                                        className="w-4 h-4 transition-colors"
                                        style={{ color: "var(--foreground-muted)" }}
                                    />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h4 style={{ color: "var(--foreground)" }} className="font-semibold mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {footerLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        target={link.external ? "_blank" : undefined}
                                        rel={link.external ? "noopener noreferrer" : undefined}
                                        style={{ color: "var(--foreground-muted)" }}
                                        className="group flex items-center gap-2 hover:opacity-80 transition-opacity"
                                    >
                                        <span
                                            className="w-1.5 h-1.5 rounded-full"
                                            style={{ backgroundColor: "rgba(167, 139, 250, 0.5)" }}
                                        />
                                        {link.label}
                                        <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Newsletter mini */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h4 style={{ color: "var(--foreground)" }} className="font-semibold mb-6">Stay Updated</h4>
                        <p style={{ color: "var(--foreground-muted)" }} className="text-sm mb-4">
                            Get notified when new articles are published.
                        </p>
                        <Link
                            href="https://blog.justinsaju.me#newsletter"
                            style={{
                                background: "linear-gradient(to right, rgba(167, 139, 250, 0.2), rgba(139, 92, 246, 0.2))",
                                border: "1px solid rgba(167, 139, 250, 0.3)",
                                color: "#a78bfa",
                            }}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium hover:opacity-80 transition-opacity group"
                        >
                            Subscribe to newsletter
                            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                {/* Bottom bar */}
                <div
                    className="pt-8"
                    style={{ borderTop: "1px solid rgba(139, 92, 246, 0.5)" }}
                >
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p style={{ color: "var(--foreground-dim)" }} className="text-sm flex items-center gap-1.5">
                            © {new Date().getFullYear()} Justin Jacob Saju. Made with
                            <Heart className="w-3.5 h-3.5" style={{ color: "#c084fc", fill: "#c084fc" }} />
                            at SRM IST KTR
                        </p>
                        <p style={{ color: "var(--foreground-dim)" }} className="text-xs">
                            Built with Next.js
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
