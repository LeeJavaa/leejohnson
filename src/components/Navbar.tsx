import Link from 'next/link'

export function Navbar() {
    return (
        <header className="absolute top-0 w-full h-16 flex items-center px-32">
            <nav className="flex items-center w-full justify-end">
                <ul className="flex gap-8">
                    <li><Link href="/about">./About</Link></li>
                    <li><Link href="/projects">./Projects</Link></li>
                    <li><Link href="/contact">./Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}