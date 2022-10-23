import React from "react";
import Image from "next/future/image";

export default function Social({ image }) {
  console.log(image);
  return <Image src={image.src}>Social</Image>;
}
