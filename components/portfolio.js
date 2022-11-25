import PortfolioImage from "../components/portfolioImage";
import { useState, useEffect } from "react";
import SkillsImage from "../components/skillsImage";
import Text from "../components/Text";
export default function Portfolio({
  title,
  index,
  content,
  skills,
  project_image,
  github,
}) {
  const [text, setText] = useState();
  const [skillsList] = useState(skills);
  useEffect(() => {
    content.map((textBlock) => {
      setText(textBlock.children[0].text);
    });
  });
  console.log(content);
  return (
    <a
      href={github}
      className="transform transition duration-500 hover:scale-110 p-5 md:w-1/2"
    >
      <div
        key={index}
        className={
          "rounded-[25px] shadow-[0px_5px_5px_0.5px_rgba(0,0,0,0.25)] flex border-[0.5px] border-black-500 mt-10 h-60 "
        }
      >
        <div className="w-1/4 flex flex-col justify-center h-full">
          <PortfolioImage image={project_image} title={title} />
        </div>

        <div className="w-full flex flex-col gap-y-1 mt-1 p-2">
          <Text style="Project">{title}</Text>
          <div className={"flex flex-row w-full "}>
            {skillsList.map((skill, index) => {
              return (
                <div className="w-6 m-3">
                  <SkillsImage image={skill.picture} key={index} />
                </div>
              );
            })}
          </div>
          <Text style="Text">{text}</Text>
        </div>
      </div>
    </a>
  );
}
