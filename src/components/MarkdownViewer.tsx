import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { duotoneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Image from 'next/image';

type Props = {
    content: string;
}

export default function MarkdownViewer( {content}: Props ) {
    return (
        <ReactMarkdown className='prose max-w-none lg:prose-xl' remarkPlugins={[remarkGfm]} 
        components={{
            code(props) {
              const  {node, className, children, style, ...rest} = props;
              const match = /language-(\w+)/.exec(className || '')
              return match ? (
                <SyntaxHighlighter
                style={duotoneDark}
                {...rest}
                language={match[1]}
                PreTag="div"
                >
                    {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code {...rest} className={className}>
                  {children}
                </code>
              )
            },
            img: (image) => <Image src={image.src || ''} alt={image.alt || ''} width={500} height={350} />
          }}
        >
            {content}
        </ReactMarkdown>
    );
}

