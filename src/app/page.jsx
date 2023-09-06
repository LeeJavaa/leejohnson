import "./globals.css";
import Block from "@/components/Block";

export default function Home() {
  return (
    <main>
      <div className="w-100% h-screen bg-gradient-to-br from-dark to-veryDark grid grid-cols-10 grid-rows-5">
        {/* First 10 */}
        <Block text={"LEE JOHNSON"} />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        {/* Second 10 */}
        <Block />
        <Block />
        <Block text={"ABOUT"} />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block text={"PROJECTS"} link={"https://github.com/LeeJavaa"} />
        <Block />
        {/* Third 10 */}
        <Block />
        <Block />
        <Block />
        <Block />
        <Block text={"RESUME"} link={"https://github.com/LeeJavaa"} />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        {/* Fourth 10 */}
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block text={"CONTACT"} />
        <Block />
        <Block />
        <Block />
        {/* Fifth 10 */}
        <Block />
        <Block />
        <Block
          text={"LINKEDIN"}
          link={"https://www.linkedin.com/in/lee-johnson-engineering/"}
        />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
      </div>
      {/* <svg>
        <filter id="noise">
          <feTurbulence id="turbulence">
            <animate
              attributeName="baseFrequency"
              dur="50s"
              values="0.9 0.9; 0.8 0.8; 0.9 0.9"
              repeatCount="indefinite"
            ></animate>
            <feDisplacementMap
              in="SourceGraphic"
              scale="60"
            ></feDisplacementMap>
          </feTurbulence>
        </filter>
      </svg> */}
    </main>
  );
}
