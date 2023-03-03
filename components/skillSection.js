import React from "react";
import Skills from "./skills";

import { v4 as uuid_v4 } from "uuid";
export default function skillSection({ skill }) {
  console.log(skill);
  return (
    <div
      className="h-fit w-fit flex flex-col text-center transform cursor-pointer transition duration-300 hover:scale-110"
      key={uuid_v4()}
    >
      <Skills image={skill.picture}></Skills>
    </div>
  );
}
