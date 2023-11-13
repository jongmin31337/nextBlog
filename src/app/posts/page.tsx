import FilterablePosts from "@/components/FilterablePosts";
import { getAllPosts } from "@/service/posts";

export default async function PostsPage() {
    const posts = await getAllPosts();
    const categories = ['All', ...new Set(posts.map(({ category }) => category))];
    return (
        <section>
            <FilterablePosts posts={posts} categories={categories} />
        </section>
    );
}

