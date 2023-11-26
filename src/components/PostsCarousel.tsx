import { Post } from "@/service/posts"
import PostCard from "./PostCard";
import ReactMultiCarousel from "./ReactMultiCarousel";



type Props = { posts: Post[] };

export default function PostCarousel({posts} : Props) {
    return (
        <ReactMultiCarousel>
            {posts.map((post) => <div key={post.path}><PostCard post = {post} /></div>)}
        </ReactMultiCarousel>
    )
}