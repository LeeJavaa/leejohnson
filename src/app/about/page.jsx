import Grid from "@/components/Grid";

export default function Home() {
  return (
    <main className="w-full h-screen">
      <div className="absolute left-0 right-0 bottom-0 top-0 grid grid-cols-2 lg:grid-cols-8 2xl:grid-cols-10 grid-rows-5">
        <h1 className=" col-start-1 lg:col-start-3 2xl:col-start-4 row-span-1 self-end mx-4 z-50 animate-fadeIn">
          ABOUT ME
        </h1>
        <div className=" row-start-2 row-span-4 lg:row-span-3 col-start-1 col-end-3 lg:col-start-3 2xl:col-start-4 lg:col-end-7 2xl:col-end-8 self-start lg:self-center pt-4 lg:pt-0 flex flex-col gap-5 lg:gap-6 2xl:gap-11 mx-4 z-50 text-sm lg:text-base animate-fadeIn">
          <p>
            My name is Lee Johnson, I am an electrical and software engineer by
            training, but mostly by passion. I enjoy solving difficult and
            complex problems that span across disciplines. My current interests
            lie in the application of Artificial Intelligence and Machine
            learning, blockchain and smart contract technology and the
            intersection between hardware and software in embedded products.
          </p>
          <p>
            At the University of Stellenbosch, where I am completing my BEngHons
            degree in Electrical Engineering, I&apos;ve garnered experience in:
            Hand and simulated circuit design, embedded software engineering and
            the development of software on all levels from Assembly to Python.
            My final year project is focused on using Machine Learning and AI
            methods to help lecturers improve their lecture videos.
          </p>
          <p>
            My passion for engineering has lead me to build many projects out of
            interest, even launching some of them as products. It&apos;s pushed
            me to spend summers interning at startups, where I&apos;ve gained
            invaluable knowledge about engineering in industry.
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
