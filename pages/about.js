import React from "react";
import Picture from "../public/favicon/bechera.png";
import Image from "next/image";
import Text from "../components/Text";
import Footer from "../components/footer";
import Head from "next/head";
export default function about() {
  return (
    <>
      <Head>
        <title>Bechera's Portfolio About</title>
      </Head>

      <div className="flex flex-col sm:flex-row-reverse p-3 h-100 w-screen ">
        <div className="sm:w-1/4 p-5 h-50 rounded flex flex-col justify-center sm:justify-start items-center ">
          <Text style="Heading">
            <p className="sm:invisible">
              About <span className="text-green-site "> Me</span>🤔
            </p>
          </Text>
          <div className="flex justify-center  flex-col  w-60 ">
            <Image src={Picture} alt="Bechera Chapman-Tremblay" />
          </div>
          <a href="./public/favicon/Resume-PDF (1).pdf" download>
            <button className="transition duration-500 hover:scale-110 text-center bg-green-site  color-white font-bold shadow-sm mt-10 tracking-wider text-white shadow-green-site rounded-lg w-24 h-10">
              Resume
            </button>
          </a>

          {/* <ul className=" flex flex-row m-0 h-[200px] w-screen p-5 justify-center  relative translate-x-0 translate-y-0 animate-infinite ">
          <li className="text-9xl  w-50 p-5  relative translate-x-0 translate-y-0 animate-infinite">
            👨🏾‍💻
          </li>
          <li className="text-9xl w-100 p-5  relative translate-x-0 translate-y-0 animate-infinite">
            🥾
          </li>
          <li className="text-9xl w-100 p-5  relative translate-x-0 translate-y-0 animate-infinite">
            📷
          </li>
          <li className="text-9xl w-100 p-5  relative translate-x-0 translate-y-0 animate-infinite">
            📺
          </li>
          <li className="text-9xl w-100 p-5  relative translate-x-0 translate-y-0 animate-infinite">
            🛹
          </li>
          <li className="text-9xl w-100 p-5  relative translate-x-0 translate-y-0 animate-infinite">
            🍃
          </li>
          <li className="text-9xl w-100 p-5  relative translate-x-0 translate-y-0 animate-infinite">
            🌲
          </li>
          <li className="text-9xl w-100 p-5  relative translate-x-0 translate-y-0 animate-infinite">
            🧶
          </li>
          <li className="text-9xl w-100  p-5  relative translate-x-0 translate-y-0 animate-infinite">
            ⛰
          </li>
          <li className="text-9xl w-100 p-5  relative translate-x-0 translate-y-0 animate-infinite">
            🚵🏽
          </li>
          <li className="text-9xl w-100  p-5  relative translate-x-0 translate-y-0 animate-infinite">
            🧗🏽
          </li>
          <li className="text-9xl w-100  p-5  relative translate-x-0 translate-y-0 animate-infinite">
            🏕
          </li>
          <li className="text-9xl w-100  p-5  relative translate-x-0 translate-y-0 animate-infinite">
            🏞
          </li>
          <li className="text-9xl w-100 p-5  relative translate-x-0 translate-y-0 animate-infinite">
            🎮
          </li>
        </ul> */}
        </div>

        <div className="p-5 sm:w-3/4 flex flex-col gap-y-6 ">
          <div>
            <Text style="Heading">
              <p className="invisible sm:visible mb-5">
                About <span className="text-green-site "> Me</span>🤔
              </p>
            </Text>
            <Text style="Text">
              Energetic and Solution-driven Web Developer adept at contributing
              to highly collaborative work environment, finding solutions and
              determining customer satisfaction. Proven experience developing
              web applications from the ground up: information gathering,
              planning, design, development, testing, delivery, and maintenance.
              Passionate towards software architecture and design combined with
              sensitivity to serving the needs of the business balanced with the
              delivery of high quality solutions. seeking a career in
              Information Technology with a special interest in web design and
              development.
            </Text>
            <Text style="Text">
              Ever since I was enrolled in a coding boot camp at 14 years old, I
              have not been able to stop making websites. Since then I knew
              coding was my passion. I graduated Fanshawe's college internet
              application and web development program. I love React, web design,
              and backend.
            </Text>
          </div>

          <div>
            <Text style="Heading">What Am I Doing Now?🏡</Text>
            <Text>
              I currently am working as a front-end web developer for {""}
              <a
                className="cursor-pointer text-green-site underline"
                href="https://steamlabs.ca/"
              >
                Steamlabs.
              </a>
            </Text>
          </div>

          <div>
            <Text style="Heading">Fun Facts🌠</Text>
            <ul className="list-disc list-inside">
              <li>My favourite movie is 21 jumpstreet.</li>
              <li>I'm allergic to all nuts.</li>
              <li>I'm into tufting rugs.</li>
              <li>I love nature.</li>
              <li>
                My favourite games our The Elder Scrolls 5: Skyrim, Fallout 3,
                and League of Legends (mastery level 7 draven).
              </li>
              <li>I'm love clothing.</li>
              <li>
                I have a diploma in Internet Applications and web development.
              </li>
              <li>I'm from Canada.</li>
            </ul>
          </div>

          <div>
            <Text style="Heading">What Skills Am I Working Towards?🏃🏾</Text>
            <Text>Im working towards a amazon solutions architect</Text>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
