import Grid from "@/components/Grid";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full h-screen">
      <div className="absolute left-0 right-0 bottom-0 top-0 grid grid-cols-2 lg:grid-cols-8 2xl:grid-cols-10 grid-rows-5 text-sm">
        <h1 className="col-start-1 lg:col-start-3 2xl:col-start-4 row-span-1 pb-3 self-end mx-4 z-50 text-base">
          PROJECTS
        </h1>
        <Link
          href={"/projects/remote-controlled-car"}
          className="col-start-1 row-start-2 col-span-1 row-span-1 lg:col-start-3 2xl:col-start-4 px-4 pt-2 hover:underline hover:cursor-pointer z-50"
        >
          remote controlled car
        </Link>
        <Link
          href={"/projects/whatsbuzzing"}
          className="col-start-2 row-start-2 col-span-1 row-span-1 lg:col-start-5 2xl:col-start-6 px-4 pt-2 hover:underline hover:cursor-pointer z-50"
        >
          whats buzzing?
        </Link>
        <Link
          href={"/projects/untitled"}
          className="col-start-1 row-start-3 col-span-1 row-span-1 lg:col-start-4 2xl:col-start-5 px-4 pt-2 hover:underline hover:cursor-pointer z-50"
        >
          untitled
        </Link>
        <Link
          href={"/projects/multimeter-and-signal-generator"}
          className="col-start-2 row-start-3 col-span-1 row-span-1 lg:col-start-6 2xl:col-start-7 px-4 pt-2 hover:underline hover:cursor-pointer z-50"
        >
          multimeter and signal generator
        </Link>
        <Link
          href={"/projects/machine-learning-lecture-review"}
          className="col-start-1 row-start-4 col-span-1 row-span-1 lg:col-start-3 2xl:col-start-4 px-4 pt-2 hover:underline hover:cursor-pointer z-50"
        >
          machine learning lecture review
        </Link>
        <Link
          href={"/projects/portfolio-website"}
          className="col-start-2 row-start-4 col-span-1 row-span-1 lg:col-start-5 2xl:col-start-6 px-4 pt-2 hover:underline hover:cursor-pointer z-50"
        >
          portfolio website
        </Link>
      </div>
      <Grid items={["header", "close"]} />
    </main>
  );
}
