import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Justin Jacob Saju | Gateway",
  description: "Central Hub for Justin Jacob Saju's digital ecosystem. Portfolio, Blog, and Projects.",
  keywords: ["engineering", "embedded systems", "VLSI", "5G", "AI", "technology", "SRM IST", "portfolio"],
  authors: [{ name: "Justin Jacob Saju" }],
  openGraph: {
    title: "Justin Jacob Saju | Gateway",
    description: "Central Hub for Justin Jacob Saju's digital ecosystem.",
    type: "website",
  },
  other: {
    "google-adsense-account": "ca-pub-6510223775923718",
    "google-site-verification": "y_85QgBP7TP1ilzKv4bekkIVfhhRa7tGKWFdKijxuFo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
