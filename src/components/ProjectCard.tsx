import projects from '@/data/projects'
import { get } from 'http'

export function ProjectCard({id}: {id: number}) {

    return (
        <div className="bg-white rounded-lg w-1/4 h-fit text-black p-4">
                <div className="w-full h-52 bg-black rounded-lg mb-4" />
                <div className="flex flex-col gap-4">
                <h1 className="text-2xl font-bold">{projects[id].title}</h1>
                <p>{projects[id].description}</p>
                <button className="rounded-lg bg-black text-white px-11 py-3 font-bold text-lg">
                    {projects[id].action}
                </button>
                </div>
        </div>
    )
}