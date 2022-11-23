import React from "react";
import Link from "next/link";
import DarkMode from "./DarkMode";
import Text from "./Text";
export default function nav() {
  return (
    <div className="flex flex-row ">
      <ul className="flex flex-row items-center justify-start gap-x-7 p-5 float-left ">
        <Link href="/">
          <h4 className="cursor-pointer not-italic font-bold text-[1.5rem] text-green-site font-Inter transform transition duration-500 hover:scale-110">
            Bechera
          </h4>
        </Link>
        <Link href="/about">
          <a className="transform transition duration-500 hover:scale-110">
            About
          </a>
        </Link>

        <Link href="/blog">
          <a className="transform transition duration-500 hover:scale-110">
            Blog
          </a>
        </Link>

        <div className="w-100 transform transition duration-500 hover:scale-110">
          <DarkMode />
        </div>
      </ul>
    </div>
  );
}
