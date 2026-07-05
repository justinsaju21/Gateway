import { getPosts } from "@/lib/sheets";
import BlogPreviewClient from "./BlogPreviewClient";

export const revalidate = 1800; // Revalidate every 30 minutes

export default async function BlogPage() {
  const posts = await getPosts();
  return <BlogPreviewClient posts={posts.slice(0, 3)} />;
}
