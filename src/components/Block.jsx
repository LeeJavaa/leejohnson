import Link from "next/link";
import React from "react";

const Block = ({ text, link }) => {
  return (
    <>
      {link ? (
        <a href={link} target="_blank" className="z-40">
          <div
            className={`w-full h-full bg-white bg-opacity-0 hover:bg-opacity-10 border border-white border-opacity-[3%] duration-1000 ease-out ${
              text == "LEE JOHNSON" ? "" : text ? "hover:cursor-pointer" : ""
            }`}
          >
            <p className={`pl-2 pt-1 text-xs`}>{text}</p>
          </div>
        </a>
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
