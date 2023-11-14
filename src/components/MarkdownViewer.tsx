import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm';

type Props = {
    content: string;
}

export default function MarkdownViewer( {content}: Props ) {
    return (
        <ReactMarkdown className='prose max-w-none lg:prose-xl' remarkPlugins={[remarkGfm]}>
            {content}
        </ReactMarkdown>
    );
}

