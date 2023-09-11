import Link from "next/link";
import React from "react";

const Block = ({ text, linkExternal, linkInternal }) => {
  return (
    <>
      {linkExternal ? (
        <a href={linkExternal} target="_blank" className="z-40">
          <div
            className={`w-full h-full bg-white bg-opacity-0 hover:bg-opacity-10 border border-white border-opacity-[3%] duration-1000 ease-out ${
              text == "LEE JOHNSON" ? "" : text ? "hover:cursor-pointer" : ""
            }`}
          >
            <p className={`pl-2 pt-1 text-xs`}>{text}</p>
          </div>
        </a>
      ) : linkInternal ? (
        <Link href={linkInternal} className="z-40">
          <div
            className={`w-full h-full bg-white bg-opacity-0 hover:bg-opacity-10 border border-white border-opacity-[3%] duration-1000 ease-out ${
              text == "LEE JOHNSON" ? "" : text ? "hover:cursor-pointer" : ""
            } ${text == "close" ? "text-right hover:underline" : ""}`}
          >
            <p className={`pl-2 pr-2 pt-1 text-xs`}>{text}</p>
          </div>
        </Link>
      ) : (
        <div
          className={`w-full h-full bg-white bg-opacity-0 hover:bg-opacity-10 border border-white border-opacity-[3%] duration-1000 ease-out z-40 ${
            text == "LEE JOHNSON" ? "" : text ? "hover:cursor-pointer" : ""
          }`}
        >
          <p className={`pl-2 pt-1 text-xs`}>{text}</p>
        </div>
      )}
    </>
  );
};

export default Block;
