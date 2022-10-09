import Avatar from "../components/avatar";
import Date from "../components/date";
import CoverImage from "../components/cover-image";
import Link from "next/link";
import Title from "../components/title";
import Content from "../components/content";
import PortfolioImage from "../components/portfolioImage";
import { useState, useEffect } from "react";
export default function Portfolio({
  title,
  index,
  content,
  skills,
  project_image,
}) {
  const [text, setText] = useState();

  console.log(skills);

  useEffect(() => {
    content.forEach((textBlock) => {
      setText(textBlock.children[0].text);
    });
  });

  return (
    <div key={index}>
      <Title title={title} />
      <Content content={text} />
      <PortfolioImage image={project_image} title={title} />
    </div>
  );
}
