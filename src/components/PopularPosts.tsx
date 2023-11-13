import { getPopularPost } from '@/service/posts';
import PostCarousel from './PostsCarousel';
export default async function PopularPosts() {
    // 1. 모든 포스트 데이터를 읽어와야함
    const posts = await getPopularPost();
    
    // 2. 모든 포스트 데이터를 보여줌
    return <section className='my-4'>
        <h2 className='text-2xl font-bold my-2'>Popular Post</h2>
        <PostCarousel posts={posts} />
    </section>;
}