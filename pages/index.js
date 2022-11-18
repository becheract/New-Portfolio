import Head from "next/head";
import Container from "../components/container";
import Portfolio from "../components/portfolio";
import Intro from "../components/intro";

import Text from "../components/Text";

import { useState, useEffect } from "react";
import {
  portfolioQuery,
  skillsQuery,
  experienceQuery,
  projectCategoryQuery,
} from "../lib/queries";
import { previewClient } from "../lib/sanity.server";
import SkillSection from "../components/skillSection";
import Experience from "../components/Experience";

import GitHub from "../assets/git.png";
import Linkedin from "../assets/linkedin.png";
import Stack from "../assets/stack.png";
import Twitter from "../assets/twitter.png";

export default function Index({ projects, skills, experience, category }) {
  const [filter, setFilter] = useState("All");

  const [allProjects, setAllProjects] = useState(projects);
  const [socialLinks, setSocialLinks] = useState([
    GitHub,
    Linkedin,
    Stack,
    Twitter,
  ]);

  useEffect(() => {
    console.log(category);
  });
  return (
    <>
      <Head>
        <title>Bechera's Portfolio</title>
      </Head>

      <Container>
        <div className="flex flex-col gap-y-6 justify-start">
          <Text style="Heading">
            Hi 👋🏽 , Welcome To <br></br> My
            <span className=" text-green-site"> Garden </span>
          </Text>

          <Text style="Body">Full-stack web developer based in Canada.</Text>
          <div className="flex flex-row md:gap-x-16 gap-x-10 mt-3">
            {socialLinks.map((images, index) => {
              return (
                <img
                  src={images.src}
                  alt={index}
                  className="w-[2rem]"
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </Container>

      <Container>
        <div className="flex justify-start ">
          <Text style="Heading">Portfolio</Text>
        </div>

        <div className="flex flex-wrap flex-row mt-5 gap-x-7">
          <button
            className="font-bold text-xl"
            onClick={() => setFilter("All")}
          >
            <Text style="Project">All</Text>
          </button>

          {category.map((category, index) => {
            return (
              <>
                <button
                  key={index}
                  className="font-bold text-xl"
                  onClick={() => setFilter(category.name)}
                >
                  <Text style="Project">{category.name}</Text>
                </button>
              </>
            );
          })}
        </div>

        {filter === "All"
          ? allProjects.map((project, index) => {
              return (
                <Portfolio
                  key={index}
                  title={project.title}
                  content={project.content}
                  project_image={project.project_image}
                  skills={project.skills}
                  github={project.github}
                />
              );
            })
          : allProjects.map((project, index) => {
              return filter === project.category[0].name ? (
                <Portfolio
                  key={index}
                  title={project.title}
                  content={project.content}
                  project_image={project.project_image}
                  skills={project.skills}
                  github={project.github}
                />
              ) : null;
            })}
      </Container>

      <Container>
        <Text style="Heading">Skills & Experience</Text>
        <div className="flex flex-row flex-wrap justify-evenly h-32 mb-6">
          {skills.length > 0 &&
            skills.map((skill, index) => {
              return <SkillSection key={index} skill={skill} />;
            })}
        </div>
      </Container>

      <Container>
        <div className="flex flex-row mt-48">
          {experience.length > 0 &&
            experience.map((exp, index) => {
              return <Experience exp={exp} index={index} />;
            })}
        </div>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const projects = await previewClient.fetch(portfolioQuery);
  const skills = await previewClient.fetch(skillsQuery);
  const experience = await previewClient.fetch(experienceQuery);
  const category = await previewClient.fetch(projectCategoryQuery);
  return {
    props: {
      projects,
      skills,
      experience,
      category,
    },
  };
}
