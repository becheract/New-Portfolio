import React from "react";

export default function ExperienceCard({ exp, index }) {
  return (
    <div
      key={index}
      className="flex flex-col items-center justify-center p-3 m-3 border border-black-500 rounded-[25px] shadow-xl w-4/5 mx-auto  transform cursor-pointer transition duration-500 hover:scale-110"
    >
      <h3 className="font-bold text-xl">{exp.year}</h3>
      <h3 className="text-xl text-gray-500">{exp.job}</h3>
      <p>{exp.where}</p>
    </div>
  );
}
