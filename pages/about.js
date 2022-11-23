import React from "react";
import Picture from "../public/favicon/bechera.png";
import Image from "next/image";
import Text from "../components/Text";

export default function about() {
  return (
    <div className="flex flex-col p-3 h-screen w-100 ">
      <div className=" p-3 h-100 rounded flex flex-col justify-center item-center">
        <Text style="Heading">
          About <span className="text-green-site"> Me</span>🤔
        </Text>
        <div className=" flex justify-center item-center flex-col mx-auto my-auto w-60">
          <Image
            src={Picture}
            alt="Bechera Chapman-Tremblay"
            className="rounded-full "
          />
        </div>
        <button className="bg-green-site color-white font-bold shadow-sm m-5 tracking-wider text-white shadow-green-site rounded-lg w-30 h-10">
          Resume
        </button>

        <ul className=" flex flex-row m-10 border w-100 p-5 overflow-hidden relative">
          <div className="animate-sliding-emoji flex flex-wrap flex-row ">
            <li className="text-9xl">👨🏾‍💻</li>
            <li className="text-9xl">🥾</li>
            <li className="text-9xl">📷</li>
            <li className="text-9xl">📺</li>
            <li className="text-9xl">🛹</li>
            <li className="text-9xl">🍃</li>
            <li className="text-9xl">🌲</li>
            <li className="text-9xl">🧶</li>
            <li className="text-9xl">⛰</li>
            <li className="text-9xl">🚵🏽</li>
            <li className="text-9xl">🧗🏽</li>
            <li className="text-9xl">🏕</li>
            <li className="text-9xl">🏞</li>
            <li className="text-9xl">🎮</li>
          </div>
        </ul>
      </div>

      <div className="border-solid border-2 p-3 border-red-500 h-100 ">
        <div>
          <h1>About Me 🤔</h1>
          <p>
            Ever since I was enrolled in a coding boot camp at 14 years old, I
            have not been able to stop making websites. Since then I knew coding
            was my passion. I graduated Fanshawe's college internet application
            and web development program. I love React, web design, and backend.
          </p>
        </div>

        <div>
          <h1>Goals for 2022</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
