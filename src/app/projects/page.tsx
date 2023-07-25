export default function Page() {
    return (
        <main className="w-screen">
                <h1 className="ml-60 mt-24 text-6xl font-bold">Projects</h1>
                <section id="project-grid" className="w-3/4 mx-auto mt-12">
                    <div className="bg-white rounded-lg w-1/4 h-fit text-black p-4">
                        <div className="w-full h-52 bg-black rounded-lg mb-4" />
                        <div className="flex flex-col gap-4">
                        <h1 className="text-2xl font-bold">RC Car</h1>
                        <p>A remote control car developed for university</p>
                        <button className="rounded-lg bg-black text-white px-11 py-3 font-bold text-lg">
                            vroom
                        </button>
                        </div>
                    </div>
                </section>
        </main>
    )
}