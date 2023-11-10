import Link from "next/link";

export default function Header() {
    return (
        <header className="flex justify-between items-center p-4">
            <Link href="/">
                    <h1>JJong Blog</h1>
            </Link>
            <nav className='flex justify-between'>
                <ul className="flex gap-4">
                    <li className='px-2 py-4 text-xl hover:font-bold'><Link href="/">home</Link></li>
                    <li className='px-2 py-4 text-xl hover:font-bold'><Link href="/about">about</Link></li>
                    <li className='px-2 py-4 text-xl hover:font-bold'><Link href="/posts">posts</Link></li>
                    <li className='px-2 py-4 text-xl hover:font-bold'><Link href="/contact">contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}

