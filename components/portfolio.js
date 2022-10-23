import Title from "../components/title";
import Content from "../components/content";
import PortfolioImage from "../components/portfolioImage";
import { useState, useEffect } from "react";
import SkillsImage from "../components/skillsImage";

export default function Portfolio({
  title,
  index,
  content,
  skills,
  project_image,
}) {
  const [text, setText] = useState();
  const [skillsList, setSkillsList] = useState(skills);

  useEffect(() => {
    content.forEach((textBlock) => {
      setText(textBlock.children[0].text);
    });
  });

  return (
    <div
      key={index}
      className={"flex border-solid border-2 border-sky-500 my-40 h-64"}
    >
      <div className="w-1/3 flex flex-col justify-center border-solid border-2 border-sky-500 h-full">
        <PortfolioImage image={project_image} title={title} />
      </div>

      <div className="w-full flex flex-col">
        <Title title={title} />
        <Content content={text} />
        <div
          className={
            "flex flex-row w-full border-solid border-2 border-red-500"
          }
        >
          {skillsList.map((skill, index) => {
            return <SkillsImage image={skill.picture} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}
