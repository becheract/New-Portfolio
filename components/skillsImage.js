import Image from "next/future/image";
import { urlForImage } from "../lib/sanity";

export default function SkillsImage({ image: source }) {
  const image = source?.asset?._ref ? (
    <Image
      layout="responsive"
      width={80}
      height={80}
      src={urlForImage(source).height(80).width(80).url()}
      sizes="100vw"
      alt="skill"
    />
  ) : (
    <div style={{ paddingTop: "50%", backgroundColor: "#ddd" }} />
  );
  return <div>{image}</div>;
}
