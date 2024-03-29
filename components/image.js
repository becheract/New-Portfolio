import Image from "next/future/image";
import { urlForImage } from "../lib/sanity";

export default function SkillsImage({ image: source }) {
  console.log(image);
  const image = source?.asset?._ref ? (
    <Image
      layout="responsive"
      width={30}
      height={30}
      src={urlForImage(source).height(50).width(50).url()}
      sizes="100vw"
      alt="skill"
    />
  ) : (
    <div style={{ paddingTop: "50%", backgroundColor: "#ddd" }} />
  );
  return <>{image}</>;
}
