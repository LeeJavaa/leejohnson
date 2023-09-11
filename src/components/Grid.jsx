import Block from "@/components/Block";

export default function Grid({ items }) {
  return (
    <div className="w-100% h-screen bg-gradient-to-br from-dark to-veryDark grid grid-cols-10 grid-rows-5">
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
        linkExternal={`${
          items.includes("projects") ? "https://github.com/LeeJavaa" : ""
        }`}
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
    </div>
  );
}
