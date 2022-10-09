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
        className="w-full h-auto"
        layout="responsive"
        width={2000}
        height={1000}
        alt={`Cover Image for ${title}`}
        src={urlForImage(source).height(1000).width(2000).url()}
        sizes="100vw"
      />
    </div>
  ) : (
    <div style={{ paddingTop: "50%", backgroundColor: "#ddd" }} />
  );

  return <>{image}</>;
}
