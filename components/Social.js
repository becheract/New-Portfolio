import React from "react";
import Image from "next/future/image";

export default function Social({ image }) {
  return <Image src={image.src}>Social</Image>;
}
