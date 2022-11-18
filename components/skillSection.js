import React from "react";
import SkillsImage from "./skillsImage";
export default function skillSection({ skill, index }) {
  return (
    <div className="h-fit w-fit" key={index}>
      <SkillsImage image={skill.picture}></SkillsImage>
    </div>
  );
}
