import { getPostData } from "@/service/posts";
import ReactMarkdown from 'react-markdown'

import remarkGfm from 'remark-gfm';

type Props = {
    params: {
        slug: string;
    }
}

export default async function PostPage({params: { slug }}: Props) {
    const post = await getPostData(slug);

    return (
        <>
        {/* ReactMarkdown componet분리해보기 */}
            <ReactMarkdown className='prose lg:prose-xl' remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
        </>
    );
}

