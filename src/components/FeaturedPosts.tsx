import PostsGrid from '@/components/PostsGrid'
import { getFeaturedPost } from '@/service/posts';
import PostsColumn from './PostsColumn';
export default async function FeaturedPosts() {
    // 1. 모든 포스트 데이터를 읽어와야함
    const posts = await getFeaturedPost();
    
    // 2. 모든 포스트 데이터를 보여줌
    return <section className='my-4'>
        <h2 className='text-2xl font-bold my-2'>Featured Post</h2>
        {/* <PostsGrid posts={posts} /> */}
        <PostsColumn posts={posts} />
    </section>;
}