import React from "react";

export default function Experience({ exp, index }) {
  return (
    <div className="block w-56 border-solid border-2 p-3 m-1 border-sky-500">
      <h3>{exp.year}</h3>
      {exp.job}
      {exp.where}
    </div>
  );
}
