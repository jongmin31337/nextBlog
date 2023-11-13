import { Post } from "@/service/posts";
import FlexPostCard from "./FlexPostCard";

type Props = { posts: Post[] };

export default function PostsColumn({posts} : Props) {
    return (
        <ul>
            {posts.map((post) => <li key={post.path}><FlexPostCard post={post}/></li>)}
        </ul>
    )
}