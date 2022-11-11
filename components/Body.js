import React from "react";

export default function Heading({ children }) {
  return (
    <h1 className="font-bold sm:text-[1.5rem] text-[0.5rem]">{children}</h1>
  );
}
