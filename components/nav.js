import React from "react";
import Link from "next/link";
export default function nav() {
  return (
    <div>
      <ul className="flex flex-row gap-x-16 p-5 text-xl  align-center items-center font-medium">
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
        <Link href="/gallery">Gallery</Link>
      </ul>
    </div>
  );
}
