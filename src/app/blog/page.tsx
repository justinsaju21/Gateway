// Revalidate every 60 seconds
export const revalidate = 60;

import { client, queries } from "@/lib/sanity.client";
import { BlogGridClient } from "@/components/home/BlogGridClient";
import { BlogHeader } from "@/components/BlogHeader";
import { AdBanner } from "@/components/ui/AdBanner";

export default async function BlogPreviewPage() {
    const posts = await client.fetch(queries.myPosts);

    return (
        <div className="min-h-screen pt-32 pb-20 px-6" style={{ backgroundColor: "var(--background)" }}>
            <div className="max-w-5xl mx-auto">
                <BlogHeader />
                <div className="flex justify-center mb-8">
                    <a
                        href="https://blog.justinsaju.me"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                        style={{
                            backgroundColor: "#7c3aed",
                            color: "#ffffff",
                            padding: "1rem 2rem",
                            borderRadius: "9999px",
                            fontWeight: 600
                        }}
                    >
                        Read Full Blog
                    </a>
                </div>

                <AdBanner slot="after-hero" className="mb-12" />

                {/* Custom Grid using filtered posts */}
                <BlogGridClient posts={posts} />
            </div>
        </div>
    );
}
