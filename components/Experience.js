import React from "react";

export default function Experience({ exp, index }) {
  return (
    <div className="flex flex-col flex-warp w-fit p-3 m-1  ">
      <h3 className="font-bold text-xl">{exp.year}</h3>
      <h3 className="text-xl text-gray-500">{exp.job}</h3>
      {exp.where}
    </div>
  );
}
