import Grid from "@/components/Grid";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full h-screen">
      <div className="absolute left-0 right-0 bottom-0 top-0 grid grid-cols-2 lg:grid-cols-8 2xl:grid-cols-10 grid-rows-5 text-sm">
        <h1 className="col-start-1 lg:col-start-3 2xl:col-start-4 row-span-1 pb-3 self-end mx-3 z-50 text-base">
          NOTABLE PROJECTS
        </h1>
        <a
          href={"/files/E344.pdf"}
          target="_blank"
          className="col-start-1 row-start-2 col-span-1 row-span-1 lg:col-start-3 2xl:col-start-4 px-4 pt-2 hover:underline hover:cursor-pointer z-50 bg-[url('../images/rc-thumbnail.png')] bg-contain bg-center grayscale hover:grayscale-0 duration-500"
        >
          remote controlled car
        </a>
        <a
          href={"/files/E314.pdf"}
          target="_blank"
          className="col-start-2 row-start-2 col-span-1 row-span-1 lg:col-start-5 2xl:col-start-6 px-4 pt-2 hover:underline hover:cursor-pointer z-50 bg-[url('../images/mm-thumbnail.png')] bg-contain bg-center grayscale hover:grayscale-0 duration-500"
        >
          multimeter and signal generator
        </a>
        <a
          href={"https://github.com/UntitledWorld/mobile/"}
          target="_blank"
          className="col-start-1 row-start-3 col-span-1 row-span-1 lg:col-start-4 2xl:col-start-5 px-4 pt-2 hover:underline hover:cursor-pointer z-50 bg-[url('../images/untitled-thumbnail.png')] bg-contain bg-center grayscale hover:grayscale-0 duration-500"
        >
          untitled
        </a>
        <a
          href={"https://github.com/whatsbuzzing/mobileApp/"}
          target="_blank"
          className=" col-start-2 row-start-3 col-span-1 row-span-1 lg:col-start-6 2xl:col-start-7 px-4 pt-2 hover:underline hover:cursor-pointer z-50 bg-[url('../images/whatsbuzzing-thumbnail.png')] bg-contain bg-center grayscale hover:grayscale-0 duration-500"
        >
          <p>whats buzzing?</p>
        </a>
        <a
          href={"https://github.com/LeeJavaa/final_year_project/"}
          target="_blank"
          className="col-start-1 row-start-4 col-span-1 row-span-1 lg:col-start-3 2xl:col-start-4 px-4 pt-2 hover:underline hover:cursor-pointer z-50 bg-[url('../images/ml-thumbnail.png')] bg-contain bg-center grayscale hover:grayscale-0 duration-50"
        >
          machine learning lecture review
        </a>
        <a
          href={"https://github.com/LeeJavaa/leejohnson/"}
          target="_blank"
          className="col-start-2 row-start-4 col-span-1 row-span-1 lg:col-start-5 2xl:col-start-6 px-4 pt-2 hover:underline hover:cursor-pointer z-50 bg-[url('../images/portfolio-thumbnail.png')] bg-contain bg-center grayscale hover:grayscale-0 duration-500"
        >
          portfolio website
        </a>
      </div>
      <Grid items={["header", "close"]} />
    </main>
  );
}
