import "./globals.css";
import Block from "../components/Block";

export default function Home() {
  return (
    <main>
      <div className="w-100% h-screen grid grid-cols-10 grid-rows-5">
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
      </div>
      <svg>
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
      </svg>
    </main>
  );
}
