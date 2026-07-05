import { getPosts } from "@/lib/sheets";
import { BlogGridClient } from "./BlogGridClient";

export async function BlogGrid() {
    const posts = await getPosts();

    return <BlogGridClient posts={posts} />;
}
