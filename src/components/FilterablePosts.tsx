'use client';
import { Post, getAllPosts } from "@/service/posts";
import { useState } from "react"
import PostsColumn from "./PostsColumn";
import Categories from "./Categories";

type Props = {
    posts: Post[];
    categories: string[];
}

const ALL = 'All';

export default function FilterablePosts({ posts, categories }: Props) {
    // 필터된 데이터 받아오기
    const [selectedCategory, setSelectedCategory] = useState<string>(ALL);
    const filteredPosts = selectedCategory === ALL ? posts : posts.filter(post => post.category === selectedCategory);
    const handleClick = (selectedCategory : string) => {
        setSelectedCategory(selectedCategory)
    }

    return (
        <section>
            <Categories categories={categories} selectedCategory={selectedCategory} handleClick={handleClick} />
            <PostsColumn posts={filteredPosts} />
        </section>
    )
}