import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <section id="landing" className="w-screen h-screen flex flex-col items-center justify-center">
        <h1 className='font-vt text-6xl text-red-400'>Always Building</h1>
        <p>I live by a simple motto. &quot;Always Building&quot;.</p>
        <p>If you&apos;re not busy building, you&apos;re busy dying.</p>
      </section>
    </main>
  )
}
