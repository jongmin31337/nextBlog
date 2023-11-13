import { Post } from "@/service/posts";
import Image from "next/image";
import Link from "next/link";


type Props = { post: Post };

export default function FlexPostCard({post: {title, description, date, category, path}} : Props) {
    return (
        <Link href={`/posts/${path}`}>
            <article className="flex justify-between mb-8 border-b-2 pb-8">
                <div className="flex flex-col">
                    <div className="text-violet-400 font-bold">{category}</div>
                    <h3 className="text-2xl font-bold pb-5">{title}</h3>
                    <p className="w-full truncate text-gray-500">{description}</p>
                    <time>{date.toString()}</time>
                </div>
                <Image src={`/images/posts/${path}.png`} alt={title} width={200} height={150} />
            </article>
        </Link>
    )
}