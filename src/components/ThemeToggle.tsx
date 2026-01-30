"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
    const context = useTheme();

    if (!context) return null;

    const { theme, toggleTheme } = context;

    return (
        <button
            onClick={toggleTheme}
            style={{ color: "var(--foreground-muted)" }}
            className="p-2 rounded-lg hover:bg-white/10 transition-all"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
            {theme === "dark" ? (
                <Sun className="w-5 h-5" />
            ) : (
                <Moon className="w-5 h-5" />
            )}
        </button>
    );
}
