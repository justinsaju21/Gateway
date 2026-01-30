"use client";

import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { ThemeToggle } from "../ThemeToggle";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "https://blog.justinsaju.me", label: "Blog", external: true },
    { href: "https://portfolio.justinsaju.me", label: "Portfolio", external: true },
];

export function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    return (
        <>
            <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
                <motion.header
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    style={{
                        marginTop: isScrolled ? "1rem" : "0",
                        width: isScrolled ? "95%" : "100%",
                        maxWidth: isScrolled ? "800px" : "none",
                        borderRadius: isScrolled ? "9999px" : "0",
                        backgroundColor: isScrolled ? "rgba(30, 27, 75, 0.8)" : "transparent",
                        backdropFilter: isScrolled ? "blur(16px)" : "none",
                        border: isScrolled ? "1px solid rgba(255, 255, 255, 0.1)" : "none",
                        boxShadow: isScrolled ? "0 0 40px -10px rgba(124, 58, 237, 0.3)" : "none",
                        paddingTop: isScrolled ? "0" : "1rem",
                    }}
                    className="pointer-events-auto transition-all duration-500 ease-out"
                >
                    <nav
                        style={{
                            padding: isScrolled ? "0.75rem 1.5rem" : "0.5rem 1.5rem",
                            maxWidth: isScrolled ? "none" : "80rem",
                            margin: isScrolled ? "0" : "0 auto",
                        }}
                        className="flex items-center justify-between transition-all duration-500"
                    >
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2.5 group">
                            <div
                                style={{ backgroundColor: "#a78bfa" }}
                                className="flex items-center justify-center w-9 h-9 rounded-lg font-bold text-lg group-hover:scale-105 transition-transform"
                            >
                                <span style={{ color: "#030014" }}>J</span>
                            </div>
                            <div className="flex items-baseline gap-1.5">
                                <span style={{ color: "var(--foreground)" }} className="font-bold text-lg tracking-tight">Justin Jacob</span>
                                <span style={{ color: "var(--foreground)" }} className="font-bold text-lg tracking-tight">Saju</span>
                            </div>
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    target={link.external ? "_blank" : undefined}
                                    rel={link.external ? "noopener noreferrer" : undefined}
                                    style={{ color: "var(--foreground-muted)" }}
                                    className="text-sm font-medium hover:opacity-80 transition-opacity"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <ThemeToggle />
                        </div>

                        {/* CTA Button */}
                        <div className="hidden md:block">
                            <Link
                                href="https://portfolio.justinsaju.me"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    backgroundColor: "#7c3aed",
                                    color: "#ffffff",
                                    boxShadow: "0 0 20px -5px rgba(124, 58, 237, 0.5)",
                                }}
                                className="flex items-center gap-1.5 px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:opacity-90"
                            >
                                Hire Me
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            style={{ color: "var(--foreground-muted)" }}
                            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </nav>

                    {/* Mobile Menu */}
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            style={{
                                backgroundColor: "rgba(30, 27, 75, 0.95)",
                                backdropFilter: "blur(16px)",
                                borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                            }}
                            className="md:hidden rounded-b-2xl mx-4 mb-4"
                        >
                            <div className="px-6 py-4 space-y-1">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        target={link.external ? "_blank" : undefined}
                                        rel={link.external ? "noopener noreferrer" : undefined}
                                        onClick={() => setMobileMenuOpen(false)}
                                        style={{ color: "var(--foreground-muted)" }}
                                        className="block py-2.5 px-4 hover:bg-white/5 rounded-lg transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                                <Link
                                    href="https://portfolio.justinsaju.me"
                                    onClick={() => setMobileMenuOpen(false)}
                                    style={{ backgroundColor: "#7c3aed", color: "#ffffff" }}
                                    className="block py-2.5 px-4 mt-2 font-semibold rounded-lg text-center"
                                >
                                    Hire Me
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </motion.header>
            </div>
        </>
    );
}
