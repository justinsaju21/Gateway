import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { CursorProvider } from "@/components/ui/CustomCursor";
import GoogleAdsense from "@/components/GoogleAdsense";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ECHO System | Justin Jacob Saju",
  description: "Exploring embedded systems, VLSI, 5G communications, and AI-driven solutions. The central hub for all projects, blogs, and photography.",
  keywords: ["engineering", "embedded systems", "VLSI", "5G", "AI", "technology", "SRM IST", "blog", "portfolio"],
  authors: [{ name: "Justin Jacob Saju" }],
  openGraph: {
    title: "ECHO System | Justin Jacob Saju",
    description: "The central digital hub for all projects, blogs, and photography by Justin Jacob Saju.",
    type: "website",
  },
  other: {
    "google-adsense-account": "ca-pub-6510223775923718",
    "google-site-verification": "y_85QgBP7TP1ilzKv4bekkIVfhhRa7tGKWFdKijxuFo",
  },
};

import { ThemeProvider } from "@/components/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <CursorProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </CursorProvider>
        </ThemeProvider>
        <GoogleAdsense pId="ca-pub-6510223775923718" />
      </body>
    </html>
  );
}
