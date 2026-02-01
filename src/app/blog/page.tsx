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
                <AdBanner slot="after-hero" />

                {/* Custom Grid using filtered posts */}
                <BlogGridClient posts={posts} />

                <div className="flex justify-center mt-16">
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
            </div>
        </div>
    );
}
