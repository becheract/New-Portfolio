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

      <div className="flex flex-col sm:flex-row-reverse p-3 h-screen w-screen ">
        <div className="sm:w-1/4 p-5 h-50 rounded flex flex-col justify-center sm:justify-start items-center ">
          <div className="flex justify-center flex-col  w-60 border-[0.5px] border-black-500 rounded-full overflow-hidden">
            <Image src={Picture} alt="Bechera Chapman-Tremblay" />
          </div>
          <a href="./public/favicon/Resume-PDF (1).pdf" download>
            <button className="transition duration-500 hover:scale-110 text-center bg-green-site  color-white font-bold shadow-sm mt-10 tracking-wider text-white shadow-green-site rounded-lg w-24 h-10">
              Resume
            </button>
          </a>
        </div>

        <div className="p-5 sm:w-3/4 flex flex-col gap-y-6 h-full ">
          <div>
            <Text style="Heading">
              <p className=" mb-5">
                About <span className="text-green-site "> Me</span>🤔
              </p>
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
              <a className="cursor-pointer" href="https://steamlabs.ca/">
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
              <li>I love clothing and shoes.</li>
              <li>
                I have a diploma in Internet Applications and Web Development.
              </li>
              <li>I'm from Canada.</li>
              <li>I love photography.</li>
            </ul>
          </div>

          <div>
            <Text style="Heading">What Skills Am I Working Towards?🏃🏾</Text>
            <Text>
              Im working towards a amazon solutions architect certificate.
            </Text>
          </div>
        </div>
        <div className="sm:hidden">
          <Footer></Footer>
        </div>
      </div>
      <div className="sm:block hidden">
        <Footer></Footer>
      </div>
    </>
  );
}
