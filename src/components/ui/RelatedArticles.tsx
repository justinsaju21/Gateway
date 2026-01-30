"use client";

import React from "react";

import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/lib/sanity.client";
import { Clock } from "lucide-react";

interface RelatedPost {
    _id: string;
    title: string;
    slug: { current: string };
    excerpt?: string;
    publishedAt: string;
    readTime?: string;
    categories?: string[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mainImage?: any;
}

interface RelatedArticlesProps {
    posts: RelatedPost[];
    currentPostId: string;
}

export function RelatedArticles({ posts, currentPostId }: RelatedArticlesProps) {
    // Filter out current post just in case
    const filteredPosts = posts.filter(post => post._id !== currentPostId);

    if (filteredPosts.length === 0) return null;

    return (
        <section className="mt-16 pt-12 border-t border-white/10">
            <h2 className="text-2xl font-bold mb-8 text-center">
                Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {filteredPosts.map((post) => (
                    <Link
                        key={post._id}
                        href={`/blog/${post.slug.current}`}
                        className="group glass rounded-2xl overflow-hidden hover:border-accent-cyan/30 transition-all duration-300 hover:-translate-y-1"
                    >
                        {/* Image */}
                        {post.mainImage && (
                            <div className="relative aspect-video overflow-hidden">
                                <Image
                                    src={urlFor(post.mainImage).width(400).height(225).url()}
                                    alt={post.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            </div>
                        )}

                        {/* Content */}
                        <div className="p-4">
                            {/* Categories */}
                            {post.categories && post.categories.length > 0 && (
                                <div className="flex flex-wrap gap-1 mb-2">
                                    {post.categories.slice(0, 2).map((cat) => (
                                        <span
                                            key={cat}
                                            className="text-[10px] px-2 py-0.5 rounded-full bg-accent-cyan/10 text-accent-cyan"
                                        >
                                            {cat}
                                        </span>
                                    ))}
                                </div>
                            )}

                            {/* Title */}
                            <h3 className="font-semibold text-sm line-clamp-2 group-hover:text-accent-cyan transition-colors">
                                {post.title}
                            </h3>

                            {/* Meta */}
                            {post.readTime && (
                                <div className="flex items-center gap-1 mt-2 text-xs text-foreground-dim">
                                    <Clock className="w-3 h-3" />
                                    {post.readTime}
                                </div>
                            )}
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
