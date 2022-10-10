import cn from "classnames";
import Image from "next/future/image";
import Link from "next/link";
import { urlForImage } from "../lib/sanity";

export default function PortfolioImage({ title, image: source }) {
  const image = source?.asset?._ref ? (
    <div
      className={cn(
        "shadow-small",
        "hover:shadow-medium transition-shadow duration-200"
      )}
    >
      <Image
        layout="responsive"
        width={2000}
        height={1000}
        alt={`Cover Image for ${title}`}
        src={urlForImage(source).height(1000).width(2000).url()}
        sizes="100vw"
        className={"border-solid border-2 border-sky-500"}
      />
    </div>
  ) : (
    <div style={{ paddingTop: "50%", backgroundColor: "#ddd" }} />
  );

  return <div className={""}>{image}</div>;
}
