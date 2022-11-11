import React from "react";
import SkillsImage from "./skillsImage";
export default function skillSection({ skill, index }) {
  return (
    <div className="border-solid border-2 border-red-500 h-fit" key={index}>
      <SkillsImage image={skill.picture}></SkillsImage>
    </div>
  );
}
 