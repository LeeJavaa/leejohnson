export default function Page() {
    return (
        <main className="w-screen">
            <section id="contact-landing" className="w-screen h-screen flex mt-24">
                    <div id="landing-info" className="ml-60 flex flex-col w-fit gap-4">
                        <h1 className="text-6xl font-bold">Contact Me</h1>
                        <p className="w-3/4">
                            Don&apos;t hesitate to send me a message, no matter what it is. Even if it&apos;s a joke, brighten my day.
                        </p>
                        <form action="/" className="w-full h-full flex flex-col gap-4">
                            <input type="email" name="" id="" className="text-black cursor-pointer outline-none rounded-md p-2" placeholder="email address"/>
                            <textarea className="text-black outline-none h-1/2 rounded-md p-2" placeholder="Why don't scientists trust atoms? Because they make up everything!"/>
                            <button type="submit" className="w-full border border-white bg-black py-3 rounded md">
                                / full / send /
                            </button>
                        </form>
                    </div>
            </section>
        </main>
    )
}