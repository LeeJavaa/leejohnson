export function Navbar() {
    return (
        <header className="absolute top-0 w-full h-16 flex items-center px-32">
            <nav className="flex justify-between items-center w-full">
                <h1 className="font-vt text-red-400 text-4xl">Lee Johnson</h1>
                <ul className="flex gap-8">
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}