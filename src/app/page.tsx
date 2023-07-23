export default function Home() {
  return (
    <main className="w-screen">
      <section id="landing" className="w-screen h-screen flex flex-col items-center justify-center">
        <h1 className='font-vt text-6xl text-red-400'>Always Building</h1>
        <p>This is the simple motto I live by.</p>
        <p>If you&apos;re not busy building, you&apos;re busy dying.</p>
      </section>
      <section id="about" className="px-32">
        <h1 className="text-red-400 font-vt text-4xl">About</h1>
        <p>
          I am an Electrical and Software Engineer passionate about solving difficult problems within the Engineering discipline.
        </p>
      </section>
      <section id="projects" className="px-32">
        <h1 className="text-red-400 font-vt text-4xl">Projects</h1>
        <ul>
          <li>Remote Control Car</li>
          <li>Signal Generator and Measurement Apparatus</li>
          <li>Bar and Club Line Status Mobile App</li>
          <li>Authentic Shoe Validator using NFTs Mobile App</li>
          <li>Set Designer and Artist Portfolio Website</li>
          <li>My Portfolio Website</li>
          <li>in Progress: Personal Fundraising through NFT Website</li>
          <li>Final Year Project: Developing AI Model to predict Quality of Lectures given to students </li>
        </ul>
      </section>
      <section id="skills" className="px-32">
        <h1 className="text-red-400 font-vt text-4xl">Skillset</h1>
        <ul>
          <li>Web Design Fundamentals</li>
          <li>ReactJS, NextJS</li>
          <li>Django, Django REST, Prisma</li>
          <li>Solidity, Ethers, Hardhat</li>
          <li>Firebase, Firebase Auth, Firebase Analytics</li>
          <li>C, Java, Rust, Python, JavaScript</li>
          <li>Raspberry Pi, Arduino, STM Boards, BeagleBone Board</li>
          <li>SPICE and Hand drawn Circuit Design</li>
          <li>Various Engineering Simulation Softwares</li>
        </ul>
      </section>
      <section id="education and experience" className="px-32">
        <h1 className="text-red-400 font-vt text-4xl">Education and Experience</h1>
        <ul>
          <li>Electrical and Electronic Engineering University of Stellenbosch</li>
          <li>Skywalk Innovations Internship</li>
          <li>WhatsBuzzing App Solo Beta Run</li>
        </ul>
      </section>
    </main>
  )
}
