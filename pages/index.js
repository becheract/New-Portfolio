import Head from "next/head";
import Container from "../components/container";
import Portfolio from "../components/portfolio";
import { uuid } from "uuidv4";
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
import Twitter from "../assets/twitter.png";
import Footer from "../components/footer";
import Picture from "../public/images/bech.png";
import Image from "next/image";

export default function Index({ projects, skills, experience, category }) {
  const [filter, setFilter] = useState("All");

  const [allProjects] = useState(projects);
  const [socialLinks] = useState([GitHub, Linkedin, Stack, Twitter]);
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <div className="flex flex-col sm:flex-row gap-y-6  justify-start w-94 ">
          <div className="flex flex-col gap-y-3  sm:w-1/2 w-full">
            <Text style="Heading">
              Hi
              <span
                className="animate-waving-hand w-fit mx-0 absolute "
                id="wave"
              >
                👋🏽
              </span>
              <br />
              Welcome To <br /> My
              <span className=" text-green-site"> Portfolio Site </span>
            </Text>

            <Text style="Body">Full-Stack Web developer Based In Canada.</Text>
            <div className="flex flex-row md:gap-x-16 gap-x-10 mt-3">
              {socialLinks.map((images) => {
                return (
                  <img
                    src={images.src}
                    alt={uuid()}
                    className="w-[2rem] transform cursor-pointer transition duration-500 hover:scale-110"
                    key={uuid()}
                  />
                );
              })}
            </div>
          </div>

          {/* <div className="md:block text-center hidden w-1/2 ">
            <Image
              src={Picture}
              alt="Bechera Chapman-Tremblay"
              width="280"
              height="280"
            />
          </div> */}
        </div>
      </Container>

      <Container>
        <div className="flex justify-start ">
          <Text style="Heading">Portfolio</Text>
        </div>

        <div className="flex flex-wrap flex-row mt-5 gap-x-7">
          <button
            className="font-bold text-xl transform transition duration-500 hover:scale-110"
            onClick={() => setFilter("All")}
          >
            <Text style="Project">All</Text>
          </button>
          {category.map((category) => {
            return (
              <>
                <button
                  key={uuid()}
                  className="font-bold text-xl transform transition duration-500 hover:scale-110"
                  onClick={() => setFilter(category.name)}
                >
                  <Text style="Project">{category.name}</Text>
                </button>
              </>
            );
          })}
        </div>

        <div className="flex flex-col flex-wrap md:flex-row">
          {filter === "All"
            ? allProjects.map((project) => {
                return (
                  <Portfolio
                    key={uuid()}
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
                    key={uuid()}
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
              return <SkillSection key={uuid()} skill={skill} />;
            })}
        </div>
      </Container>

      <Container>
        <div className="flex flex-col sm:flex-row">
          {experience.length > 0 &&
            experience.map((exp) => {
              return (
                <div className="flex  ">
                  <Experience exp={exp} index={uuid()} />
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
