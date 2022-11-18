import React, { useState, useEffect } from "react";

export default function Text(type) {
  const [textStyles, setTextStyles] = useState();

  useEffect(() => {
    switch (type.style) {
      case "Heading":
        setTextStyles("text-[2rem] font-bold");
        break;
      case "Body":
        setTextStyles("text-[1rem] font-bold");
        break;
      case "Project":
        setTextStyles("text-[1.5rem]");
        break;
      case "Text":
        setTextStyles("text-[0.8rem]");
    }
  }, []);

  return <p className={textStyles}>{type.children}</p>;
}
