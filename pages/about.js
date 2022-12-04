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
          <a href="./public/images/new_tech_resume.pdf" download>
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
              My name is Bechera, and I'm a full-stack web developer based in
              Canada. my love for coding first took shape in the form of video
              games, I was interested in the design process of games, like level
              design, and how they were created. My parents then pushed me
              towards learning how to make video games. I used game engines like
              unity, unreal engine, and game Maker studio. I was then enrolled
              in multiple coding boot camps where I learned Java, HTML, CSS and
              Javascript.
            </Text>
            <Text style="description">
              I really found a passion in the design process of creating
              websites, as I found myself being compelled to try and make a
              website look as good as possible and also admiring other websites'
              designs. I then proceeded to take coding and computer classes
              throughout high school and then continued with coding in college
              where I enrolled in the Internet Applications and Web Development
              course and learned about CMS, configuring web servers, Linux,
              mobile applications and game development, and graphic design.
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
              I'm currently working as a front-end web developer at Steamlabs, a
              non-profit organization that specializes in teaching AI and
              machine learning to a variety of people.
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
