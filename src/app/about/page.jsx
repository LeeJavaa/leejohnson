import Grid from "@/components/Grid";

export default function Home() {
  return (
    <main className="w-full h-screen">
      <div className="absolute left-0 right-0 bottom-0 top-0 grid grid-cols-10 grid-rows-5">
        <h1 className=" col-start-4 row-span-1 self-end mx-4 z-50">ABOUT ME</h1>
        <div className=" row-start-2 row-span-3 col-start-4 col-end-8 self-center flex flex-col gap-11 mx-4 z-50">
          <p>
            I am an electrical engineer by training and a software engineer by
            passion.
          </p>
          <p>
            I enjoy solving complex problems that are multidisciplinary in
            nature and make life easier for every day people. I am currently
            interested in Artificial Intelligence and Machine Learning,
            Applications of Blockchain and Software in Gaming.
          </p>
          <p>
            At the University of Stellenbosch I’ve worked on a plethora of
            projects ranging from vanilla electronics to embedded engineering.
            My final year project is focused on using Machine Learning to
            improve video lectures for student consumption.
          </p>
          <p>
            My passion for Software has lead me to build many projects alone,
            even extending to launching an app that ran in beta for two weeks.
            It’s pushed me to spend summers interning at startups.
          </p>
          <a href="https://github.com/LeeJavaa" target="_blank">
            <div className="bg-leeRed w-36 h-11 flex items-center justify-center mx-auto hover:cursor-pointer hover:bg-white hover:text-veryDark duration-100 ease-in">
              RESUME
            </div>
          </a>
        </div>
      </div>
      <Grid items={["header", "close"]} />
    </main>
  );
}
