import Image from "next/future/image";
import { urlForImage } from "../lib/sanity";

export default function SkillsImage({ image: source }) {
  const image = source?.asset?._ref ? (
    <Image
      layout="responsive"
      width={20}
      height={20}
      src={urlForImage(source).height(20).width(20).url()}
      sizes="100vw"
      alt="skill"
    />
  ) : (
    <div style={{ paddingTop: "50%", backgroundColor: "#ddd" }} />
  );
  return <div>{image}</div>;
}
