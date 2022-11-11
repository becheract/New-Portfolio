import React from "react";
import Link from "next/link";
import DarkMode from "./DarkMode";
export default function nav() {
  return (
    <div className="">
      <ul className="">
        <Link href="/">
          <h4 className="cursor-pointer not-italic font-bold text-4xl text-green-site font-Inter">
            Bechera
          </h4>
        </Link>

        <Link href="/about">
          <a>About</a>
        </Link>

        <Link href="/blog">
          <a>Blog</a>
        </Link>

        <DarkMode />
      </ul>
    </div>
  );
}
