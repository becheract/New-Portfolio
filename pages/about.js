import React from "react";
import Picture from "../public/images/bechera.png";
import Image from "next/image";
import Text from "../components/Text";
import Footer from "../components/footer";
import Head from "next/head";
export default function about() {
  return (
    <>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col sm:flex-row-reverse p-3 h-fit w-screen ">
        <div className="sm:w-1/4 p-5 h-50 rounded flex flex-col justify-center sm:justify-start items-center ">
          <div className="flex justify-center flex-col  w-60 border-[0.5px] border-black-500 rounded-full overflow-hidden">
            <Image src={Picture} alt="Bechera Chapman-Tremblay" />
          </div>
          <a href="/images/new_tech_resume.pdf" download>
            <button className="transition duration-300 hover:scale-110 text-center bg-green-site  color-white font-bold  mt-10 tracking-wider text-white shadow-green-site rounded-lg w-24 h-10">
              Resume
            </button>
          </a>
        </div>

        <div className="p-5 sm:w-3/4 flex flex-col gap-y-6 h-full ">
          <div className="flex flex-col gap-y-6 ">
            <Text style="Heading">
              <p className=" mb-5">
                About <span className="text-green-site "> Me</span>🤔
              </p>
            </Text>

            <Text style="description">
              Hi, first of all, thank you for checking out my website, I really
              appreciate it.
            </Text>
            <Text style="description">
              Hello and welcome to my portfolio site! My name is Bechera, and I
              am a full-stack web developer with a passion for coding and
              teaching others. I've been coding since I was 14 years old, and I
              have always loved the challenge and creativity that comes with
              writing code. Throughout high school, I took coding classes that
              helped me to build a strong foundation in various programming
              languages. After high school, I pursued my passion for coding by
              attending college to become a full-stack web developer. During my
              time in college, I learned a variety of programming languages such
              as Javascript, PHP, MySQL, and Linux, among others. I was able to
              put my knowledge into practice through various coding projects and
              internships, which further enhanced my skills and experience.
            </Text>
            <Text style="description">
              Upon graduating from college, I landed a job as a lead developer
              for a non-profit organization that specialized in teaching people
              of all ages about AI and machine learning. Here, I was able to
              work on exciting projects such as video games, microcontrollers,
              and servers, among others. It was a fulfilling experience, and I
              gained valuable insight into how technology can be used to impact
              lives positively. Currently, I am working as a freelance WordPress
              teacher for another organization, teaching at-risk youth how to
              code. I find this work very rewarding as I get to make a positive
              impact on the lives of young people while sharing my knowledge and
              passion for coding. I am excited to continue to learn, grow, and
              explore the world of coding, and I look forward to connecting with
              like-minded individuals who share my passion. Thank you for
              visiting my portfolio site, and I hope you find something that
              sparks your interest.
            </Text>
          </div>

          <div className="flex flex-col gap-y-3 ">
            <Text style="Heading">
              Skills that I'm currently working towards
            </Text>
            <Text>
              Im working towards getting an aws amazon solutions architect
              certificate in order to get a better understanding of the cloud.
            </Text>

            <Text>
              I'm trying to improve my web design and graphic design skills.
            </Text>

            <Text>
              Working towards impropving my writing skills, thats why I made a
              blog so I can write about concepts and errors that I encounter
              while working my full-time job.
            </Text>
          </div>

          <div className="flex flex-col gap-y-3">
            <Text style="Heading">What Am I Doing Now?🏡</Text>
            <Text>
              I'm currently working as a freelance wordpress teacher at
              Code-Youth, they provide entry level coding training and the tools
              necessary for youth to find meaningful entry level employment in
              the IT sector.
            </Text>

            <Text>
              In my spare time I'm also freelancing as a web developer wether
              that be front-end or back-end.
            </Text>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}
