import Head from "next/head";
import Container from "../components/container";
import Portfolio from "../components/portfolio";
import Intro from "../components/intro";

import { useState, useEffect } from "react";
import { portfolioQuery } from "../lib/queries";
import { skillsQuery } from "../lib/queries";
import { previewClient } from "../lib/sanity.server";
import SkillSection from "../components/skillSection";
import Button from "../components/button";

import GitHub from "../assets/git.png";
import Linkedin from "../assets/linkedin.png";
import Stack from "../assets/stack.png";
import Twitter from "../assets/twitter.png";

export default function Index({ projects, skills }) {
  const [filter, setFilter] = useState("All");
  const [projectsFilter, setProjectsFilter] = useState(projects);
  const [socialLinks, setSocialLinks] = useState([
    GitHub,
    Linkedin,
    Stack,
    Twitter,
  ]);

  useEffect(() => {
    console.log(projectsFilter);
    switch (filter) {
      case "All":
        break;
      case "Mobile":
        break;
      case "UI/UX":
        break;
      case "Web":
        break;
    }
  }, [filter]);

  return (
    <>
      <Head>
        <title>Bechera's Portfolio</title>
      </Head>

      <Container>
        <h1 className="">Hi 👋🏽 , Welcome To My Garden</h1>
        <h3>Full-stack web developer based in Canada.</h3>
        <div className="flex flex-row gap-x-10">
          {socialLinks.map((images, index) => {
            return <img src={images.src} className="w-12" key={index} />;
          })}
        </div>
      </Container>

      <Container>
        <div className="flex justify-start">
          <Intro text={"Portfolio"} />
        </div>
        <div className="flex justify-start flex-row flex-wrap">
          <div className="flex flex-row gap-x-10">
            <button
              className="font-bold text-xl"
              onClick={() => setFilter("All")}
            >
              All
            </button>
            <button
              className="font-bold text-xl"
              onClick={() => setFilter("Mobile")}
            >
              Mobile
            </button>
            <button
              className="font-bold text-xl"
              onClick={() => setFilter("UI/UX")}
            >
              UI/UX
            </button>
            <button
              className="font-bold text-xl"
              onClick={() => setFilter("Web")}
            >
              Web
            </button>
          </div>
        </div>
        {projects.length > 0 &&
          projects.map((project, index) => {
            console.log(project);
            return (
              <Portfolio
                key={index}
                title={project.title}
                content={project.content}
                project_image={project.project_image}
                skills={project.skills}
              />
            );
          })}
      </Container>

      <Container>
        <Intro text={"Skills & Experience"} />
        <div className="flex flex-wrap w-full h-40 gap-1 flex-row  border-solid border-2 p-3 border-sky-500 justify-start">
          {skills.length > 0 &&
            skills.map((skill, index) => {
              return <SkillSection key={index} skill={skill} />;
            })}
        </div>

        <div></div>
      </Container>

      <Container>
        <Intro text={"Contact"} />
        <div className="bg-gray-800 w-11/12 h-3/5">Hello</div>
        <Button>Send</Button>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const projects = await previewClient.fetch(portfolioQuery);
  const skills = await previewClient.fetch(skillsQuery);
  return {
    props: {
      projects,
      skills,
    },
  };
}
