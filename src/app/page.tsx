export default function Home() {
  return (
    <main className="w-screen">
      <section id="landing" className="w-screen h-screen flex items-center">
        <div id="landing-info" className=" ml-60 flex flex-col w-fit gap-4">
          <h1 className="text-8xl font-bold">Lee Johnson</h1>
          <p className="w-3/4">Electrical, Electronic and Software Engineer focused on solving difficult cross-disciplinary problems</p>
        </div>
      </section>
      <section id="about" className="w-screen mb-24">
        <div id="about-info" className="w-1/2 mx-auto flex flex-col gap-4 text-justify">
          <h1 className="text-6xl text-center">About</h1>
          <p>
            My name is Lee Johnson and I am an engineer that loves solving difficult problems.
          </p>
          <p>
            I&apos;m a final year Electrical and Electronic Engineering student at Stellenbosch University, with a major focus on Robotics and Artificial Intelligence. My passion for Software Engineering has lead to me doing software internships during summer breaks, where I have garnered experience of practical Engineering in industry. At the start of 2023 I went out on my own, launching an app in beta which has given rise to my passion for startups.
          </p>
          <p>
            Through university I&apos;ve garnered skills in circuit design, both analog and digital, as well as embedded engineering. With the latter I&apos;ve developed signal generators and measurement apparatus with hardware UI interfaces, remote controlled cars with bluetooth and ultrasonic sensors. I&apos;ve gained experience in a plethora of simulation softwares and the use of hardware components from small IC chips to RaspberryPis, Arduinos and many more development boards. In my final year project, I am developing an Artificial Intelligence model, along with a full system pipeline, to assess the quality of lectures offered by University lecturers and propose possible improvements - while working under the supervision of an expert in the field of speech recognition.
          </p>
          <p>
            My journey in Software Engineering started from web scraping tools used by individuals and companies alike. Eventually I started developing full stack applications with the latest frontend and backend tools. I&apos;ve developed skills in mobile development through the development of two applications on show case in my projects page. I&apos;m currently working on Web3 blockchain and smart contract development in my spare time, while my focus is on Artificial Intelligence processes.
          </p>
          <p>
            My goal is to work on difficult problems at the forefront of emerging industries today.
          </p>
          <button className="rounded-lg bg-white text-black mx-auto px-11 py-3 font-bold text-lg">
            resume
          </button>
        </div>
      </section>
    </main>
  )
}
