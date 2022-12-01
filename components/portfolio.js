import PortfolioImage from "../components/portfolioImage";
import { useState, useEffect } from "react";
import SkillsImage from "../components/skillsImage";
import { v4 as uuid_v4 } from "uuid";
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

  return (
    <a className="p-5 w-full lg:w-1/3 md:w-1/2 flex justify-center mx-auto ">
      <div
        key={index}
        className={
          " rounded-[25px] shadow-[0px_5px_5px_0.5px_rgba(0,0,0,0.25)] flex border-[0.5px] border-black-500 p-5 mt-10 h-80  w-full"
        }
      >
        <div className="w-full flex justify-center items-center flex-col gap-y-1 mt-1 p-3 m-3">
          <Text style="Project">{title}</Text>
          <div className={"flex flex-row w-full "}>
            {skillsList.map((skill) => {
              return (
                <div className="w-fit flex flex-row items-center justify-center m-3 gap-x-3">
                  <SkillsImage image={skill.picture} key={uuid_v4()} />
                  <h2 className="md:hidden">{skill.name}</h2>
                </div>
              );
            })}
          </div>
          <Text style="Text">{text}</Text>

          <button className="text-white font-bold transform p-2 m-5  w-1/2 bg-green-site rounded-[25px] border-[0.5px] border-black-500 dark:border-0 transition duration-500 hover:scale-110 ">
            <a href={github}>View</a>
          </button>
        </div>
      </div>
    </a>
  );
}
