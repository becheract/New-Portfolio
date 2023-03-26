import Head from "next/head";
import Container from "../components/container";
import Portfolio from "../components/portfolio";
import { v4 as uuid_v4 } from "uuid";
import Text from "../components/Text";
import { useState } from "react";
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
import Footer from "../components/footer";
import Picture from "../public/images/bech.png";
import Image from "next/image";

import { useTransition } from "react-spring";

export default function Index({ projects, skills, experience, category }) {
  const [filter, setFilter] = useState("All");
  const [isVisible, setIsVisible] = useState(false);
  const transition = useTransition(isVisible, {});
  const socials = [
    {
      picture: GitHub,
      link: "https://github.com/becheract",
    },
    {
      picture: Linkedin,
      link: "https://www.linkedin.com/in/bechera-chapman-tremblay/",
    },
    {
      picture: Stack,
      link: "https://stackoverflow.com/users/16129990/bechera",
    },
  ];
  const [allProjects] = useState(projects);
  const [socialLinks] = useState(socials);

  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <div className="flex flex-col  sm:flex-row gap-y-6 gap-x-72 relative justify-start w-94 ">
          <div className="flex flex-col gap-y-3 sm:w-1/2 w-full ">
            <Text style="Heading">
              Hi
              <span className="animate-waving-hand w-fit mx-0 " id="wave">
                👋🏽,
              </span>
              Welcome To <br /> My
              <span className=" text-green-site"> Portfolio Site </span>
            </Text>

            <Text style="Body">Full-Stack Web developer Based In Canada.</Text>
            <div className="flex flex-row md:gap-x-16 gap-x-10 mt-3 ">
              {socialLinks.map((images) => {
                return (
                  <a href={images.link}>
                    <img
                      src={images.picture.src}
                      alt={uuid_v4()}
                      className="w-[2rem] transform cursor-pointer transition duration-200 hover:scale-110"
                      key={uuid_v4()}
                    />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="md:flex right-28 hidden w-fit h-fit overflow-hidden absolute border-[1px] border-black-500 rounded-full">
            <Image
              src={Picture}
              alt="Bechera Chapman-Tremblay"
              width="280"
              height="280"
            />
          </div>
        </div>
      </Container>

      <Container>
        <div className="flex justify-start ">
          <Text style="Heading">Portfolio</Text>
        </div>

        <div className="flex flex-wrap flex-row mt-5 gap-x-7">
          <button
            className="font-bold text-xl transform transition duration-200 hover:scale-110"
            onClick={() => setFilter("All")}
          >
            <Text style="Project">All</Text>
          </button>
          {category.map((category) => {
            return (
              <>
                <button
                  key={uuid_v4()}
                  className="font-bold text-xl transform transition duration-200 hover:scale-110"
                  onClick={() => setFilter(category.name)}
                >
                  <Text style="Project">{category.name}</Text>
                </button>
              </>
            );
          })}
        </div>

        <div className="flex flex-col flex-wrap md:flex-row w-full">
          {filter === "All"
            ? allProjects.map((project) => {
                return (
                  <Portfolio
                    key={uuid_v4()}
                    title={project.title}
                    content={project.content}
                    project_image={project.project_image}
                    skills={project.skills}
                    github={project.github}
                  />
                );
              })
            : allProjects.map((project) => {
                return filter === project.category[0].name ? (
                  <Portfolio
                    key={uuid_v4()}
                    title={project.title}
                    content={project.content}
                    project_image={project.project_image}
                    skills={project.skills}
                    github={project.github}
                  />
                ) : null;
              })}
        </div>
      </Container>

      <Container>
        <Text style="Heading">Skills & Experience</Text>
        <div className="flex flex-row flex-wrap justify-evenly h-full w-100 mb-6 p-1 gap-3">
          {skills.length > 0 &&
            skills.map((skill) => {
              return <SkillSection key={uuid_v4()} skill={skill} />;
            })}
        </div>
      </Container>

      <Container>
        <div className="flex flex-col sm:flex-row">
          {experience.length > 0 &&
            experience.map((exp) => {
              return (
                <div className="flex  ">
                  <Experience exp={exp} index={uuid_v4()} />
                </div>
              );
            })}
        </div>
        <Footer></Footer>
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
