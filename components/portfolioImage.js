import cn from "classnames";
import Image from "next/future/image";
import Link from "next/link";
import { urlForImage } from "../lib/sanity";

export default function PortfolioImage({ title, image: source }) {
  const image = source?.asset?._ref ? (
    <div
      className={cn(
        "shadow-small",
        "shadow relative flex flex-col justify-center"
      )}
    >
      <Image
        layout="responsive"
        width={2300}
        height={2000}
        alt={`Cover Image for ${title}`}
        src={urlForImage(source).height(2000).width(2300).url()}
        className="rounded-[25px] h-full w-full border-[0.5px] border-red-500"
      />
    </div>
  ) : (
    <div style={{ paddingTop: "50%", backgroundColor: "#ddd" }} />
  );

  return <>{image}</>;
}
