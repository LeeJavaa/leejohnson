"use client";
import Block from "@/components/Block";
import { useState, useEffect } from "react";

export default function Grid({ items }) {
  const [windowWidth, setWindowWidth] = useState(1920);

  // Add an event listener to update the windowWidth state when the window is resized.
  useEffect(() => {
    setWindowWidth(window.innerWidth);

    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts.
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-100% h-screen bg-gradient-to-br from-dark to-veryDark grid grid-cols-2 lg:grid-cols-8 2xl:grid-cols-10 grid-rows-5">
      {windowWidth > 1536 ? (
        <>
          {/* First 10 */}
          <Block
            text={`${items.includes("header") ? "LEE JOHNSON" : ""}`}
            linkInternal={`${items.includes("header") ? "/" : ""}`}
          />
          <Block />
          <Block />
          <Block />
          <Block />
          <Block />
          <Block />
          <Block />
          <Block />
          <Block
            text={`${items.includes("close") ? "close" : ""}`}
            linkInternal={`${items.includes("close") ? "/" : ""}`}
          />
          {/* Second 10 */}
          <Block />
          <Block />
          <Block
            text={`${items.includes("about") ? "ABOUT" : ""}`}
            linkInternal={`${items.includes("about") ? "/about" : ""}`}
          />
          <Block />
          <Block />
          <Block />
          <Block />
          <Block />
          <Block
            text={`${items.includes("projects") ? "PROJECTS" : ""}`}
            linkInternal={`${items.includes("projects") ? "/projects" : ""}`}
          />
          <Block />
          {/* Third 10 */}
          <Block />
          <Block />
          <Block />
          <Block />
          <Block
            text={`${items.includes("resume") ? "RESUME" : ""}`}
            linkExternal={`${
              items.includes("resume") ? "https://github.com/LeeJavaa" : ""
            }`}
          />
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
          <Block
            text={`${items.includes("contact") ? "CONTACT" : ""}`}
            linkInternal={`${items.includes("contact") ? "/contact" : ""}`}
          />
          <Block />
          <Block />
          <Block />
          {/* Fifth 10 */}
          <Block />
          <Block />
          <Block
            text={`${items.includes("linkedin") ? "LINKEDIN" : ""}`}
            linkExternal={`${
              items.includes("linkedin")
                ? "https://www.linkedin.com/in/lee-johnson-engineering/"
                : ""
            }`}
          />
          <Block />
          <Block />
          <Block />
          <Block />
          <Block />
          <Block />
          <Block />
        </>
      ) : windowWidth > 1024 ? (
        <>
          {/* First 8 */}
          <Block
            text={`${items.includes("header") ? "LEE JOHNSON" : ""}`}
            linkInternal={`${items.includes("header") ? "/" : ""}`}
          />
          <Block />
          <Block />
          <Block />
          <Block />
          <Block />
          <Block />
          <Block
            text={`${items.includes("close") ? "close" : ""}`}
            linkInternal={`${items.includes("close") ? "/" : ""}`}
          />
          {/* Second 8 */}
          <Block />
          <Block />
          <Block
            text={`${items.includes("about") ? "ABOUT" : ""}`}
            linkInternal={`${items.includes("about") ? "/about" : ""}`}
          />
          <Block />
          <Block />
          <Block />
          <Block
            text={`${items.includes("projects") ? "PROJECTS" : ""}`}
            linkInternal={`${items.includes("projects") ? "/projects" : ""}`}
          />
          <Block />
          {/* Third 8 */}
          <Block />
          <Block />
          <Block />
          <Block
            text={`${items.includes("resume") ? "RESUME" : ""}`}
            linkExternal={`${
              items.includes("resume") ? "https://github.com/LeeJavaa" : ""
            }`}
          />
          <Block />
          <Block />
          <Block />
          <Block />
          {/* Fourth 8 */}
          <Block />
          <Block />
          <Block />
          <Block />
          <Block />
          <Block
            text={`${items.includes("contact") ? "CONTACT" : ""}`}
            linkInternal={`${items.includes("contact") ? "/contact" : ""}`}
          />
          <Block />
          <Block />
          {/* Fifth 8 */}
          <Block />
          <Block />
          <Block
            text={`${items.includes("linkedin") ? "LINKEDIN" : ""}`}
            linkExternal={`${
              items.includes("linkedin")
                ? "https://www.linkedin.com/in/lee-johnson-engineering/"
                : ""
            }`}
          />
          <Block />
          <Block />
          <Block />
          <Block />
          <Block />
        </>
      ) : (
        <>
          {/* First 2 */}
          <Block
            text={`${items.includes("header") ? "LEE JOHNSON" : ""}`}
            linkInternal={`${items.includes("header") ? "/" : ""}`}
          />
          <Block
            text={`${items.includes("close") ? "close" : ""}`}
            linkInternal={`${items.includes("close") ? "/" : ""}`}
          />
          {/* Second 2 */}
          <Block
            text={`${items.includes("about") ? "ABOUT" : ""}`}
            linkInternal={`${items.includes("about") ? "/about" : ""}`}
          />
          <Block
            text={`${items.includes("projects") ? "PROJECTS" : ""}`}
            linkInternal={`${items.includes("projects") ? "/projects" : ""}`}
          />
          {/* Third 2 */}
          <Block
            text={`${items.includes("resume") ? "RESUME" : ""}`}
            linkExternal={`${
              items.includes("resume") ? "https://github.com/LeeJavaa" : ""
            }`}
          />
          <Block />
          {/* Fourth 2 */}
          <Block />
          <Block
            text={`${items.includes("contact") ? "CONTACT" : ""}`}
            linkInternal={`${items.includes("contact") ? "/contact" : ""}`}
          />
          {/* Fifth 2 */}
          <Block
            text={`${items.includes("linkedin") ? "LINKEDIN" : ""}`}
            linkExternal={`${
              items.includes("linkedin")
                ? "https://www.linkedin.com/in/lee-johnson-engineering/"
                : ""
            }`}
          />
          <Block />
        </>
      )}
    </div>
  );
}
