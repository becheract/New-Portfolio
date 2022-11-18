import React from "react";
import Picture from "../public/favicon/bechera.png";
import Image from "next/image";

export default function about() {
  return (
    <div className="flex flex-col border-solid border-2 p-3 border-green-500 h-screen w-100">
      <div className="border-solid border-2 p-3 border-blue-500 h-100 rounded">
        <Image src={Picture} alt="Bechera Chapman-Tremblay" />
        <ul>
          <li>👨🏾‍💻</li>
          <li>🥾</li>
          <li>📷</li>
          <li>📺</li>
          <li>🛹</li>
          <li>🍃</li>
          <li>🌲</li>
          <li>🧶</li>
          <li>⛰</li>
          <li>🚵🏽</li>
          <li>🧗🏽</li>
          <li>🏕</li>
          <li>🏞</li>
          <li>🎮</li>
        </ul>

        <button>Resume</button>
      </div>

      <div className="border-solid border-2 p-3 border-red-500 h-100 ">
        <div>
          <h1>About Me 🤔</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
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
