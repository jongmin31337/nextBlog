import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm';


export default function MarkdownViewer({content} : { content : string }) {
    console.log(content);
    
    return <ReactMarkdown className='prose lg:prose-xl'remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
}