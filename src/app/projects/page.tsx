import { ProjectCard } from '@/components/ProjectCard'

export default function Page() {
    return (
        <main className="w-screen">
                <h1 className="ml-60 mt-24 text-6xl font-bold">Projects</h1>
                <section id="project-grid" className="w-3/4 mx-auto mt-12 flex gap-10">
                    <ProjectCard id={0} />
                    <ProjectCard id={1} />
                    <ProjectCard id={2} />
                </section>
                <section id="project-grid" className="w-3/4 mx-auto mt-12 flex gap-10">
                    <ProjectCard id={3} />
                    <ProjectCard id={4} />
                    <ProjectCard id={5} />
                </section>
                <section id="project-grid" className="w-3/4 mx-auto mt-12 flex gap-10">
                    <ProjectCard id={6} />
                    <ProjectCard id={7} />
                </section>
        </main>
    )
}