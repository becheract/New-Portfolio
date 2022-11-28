import React from "react";
import Skills from "./skills";
export default function skillSection({ skill, index }) {
  return (
    <div
      className="h-fit w-fit flex flex-col text-center transform cursor-pointer transition duration-500 hover:scale-110"
      key={index}
    >
      <Skills image={skill.picture}></Skills>
    </div>
  );
}
