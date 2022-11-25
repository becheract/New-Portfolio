import React from "react";
import SkillsImage from "./skillsImage";
export default function skillSection({ skill, index }) {
  return (
    <div
      className="h-fit w-fit flex flex-col text-center transform cursor-pointer transition duration-500 hover:scale-110"
      key={index}
    >
      <SkillsImage image={skill.picture}></SkillsImage>
    </div>
  );
}
