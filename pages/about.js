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
          <a href="/images/newer_resume.pdf" download>
            <button className="transition duration-500 hover:scale-110 text-center bg-green-site  color-white font-bold  mt-10 tracking-wider text-white shadow-green-site rounded-lg w-24 h-10">
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
              lives positively. I also worked as a freelance WordPress teacher
              for Code Youth, teaching at-risk youth how to code. I found this
              work very rewarding as I got to make a positive impact on the
              lives of young people while sharing my knowledge and passion for
              coding. I am excited to continue to learn, grow, and explore the
              world of coding, and I look forward to connecting with like-minded
              individuals who share my passion. Thank you for visiting my
              portfolio site, and I hope you find something that sparks your
              interest.
            </Text>
          </div>

          <div className="flex flex-col gap-y-3 ">
            <Text style="Heading">What I like doing other then coding?🧗🏾‍♂️</Text>
            <Text>
              I've always love to play video games, I'm currently playing the
              Elder Scrolls Oblivion. I enjoy working out at the gym, running
              and hiking. I also enjoy sewing by hand, repairing clothes,
              tufting rugs and making jewlerly for myself and friends as its a
              hobby I don't have to look at a computer screen.
            </Text>

            <Text>
              I enjoy volunteering teaching kids on how to code, I've been doing
              this for past year now and I love helping out aspiring developers
              as I can remember a time where I was in their shoes.
            </Text>
            <Text>
              I'm working towards impropving my writing skills and also reading
              skills when it comes to my field, thats why I made a blog so I can
              write about concepts, errors and news that I encounter in my day
              to day life as a developer.
            </Text>
          </div>

          <div className="flex flex-col gap-y-3">
            <Text style="Heading">What Am I Doing Now?🏡</Text>
            <Text>
              I'm currently working at a Steamlabs as a full-stack developer,
              I'm learning aws services, unit testing, c# and unity game engine.
            </Text>

            <Text>
              In my spare time I'm also freelancing as a mobile developer for
              both IOS and Android using React Native/Expo.
            </Text>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}
