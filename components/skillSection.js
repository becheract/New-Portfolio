import React from "react";
import SkillsImage from "./skillsImage";
import Text from "../components/Text";
export default function skillSection({ skill, index }) {
  console.log(skill);
  return (
    <div
      className="h-fit w-fit flex flex-col text-center transform cursor-pointer transition duration-500 hover:scale-110"
      key={index}
    >
      <SkillsImage image={skill.picture}></SkillsImage>
    </div>
  );
}
